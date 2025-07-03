import type { BrowserWindow } from 'electron';
import { desktopCapturer, WebContentsView } from 'electron';
import path from 'path';

import { ElectronEvent, type WebContentsViewBounds } from '../types/electron';

import { getImageAsDataURL } from './utils';

export type WebContentsTab = {
  id: string;
  view: WebContentsView;
  url: string;
  faviconUrl?: string;
  title?: string;
};

type MetaData = {
  faviconUrl?: string;
  title?: string;
};

export class WebContentsManager {
  private static instance: WebContentsManager;

  private mainWindow!: BrowserWindow;

  private tabs: WebContentsTab[] = [];
  private currentViewId: string | undefined;
  private currentView: WebContentsView | undefined;
  private bounds: WebContentsViewBounds = {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  };

  private sendTabsUpdate() {
    this.mainWindow.webContents.send(ElectronEvent.ON_WEB_CONTENTS_TABS_CHANGE, {
      activeTabId: this.currentView?.getVisible() ? this.currentViewId : undefined,
      tabs: this.tabs.map((t) => ({
        id: t.id,
        title: t.title,
        url: t.url,
      })),
    });
  }

  getTabs() {
    return this.tabs.map((t) => ({
      id: t.id,
      title: t.title,
      url: t.url,
    }));
  }

  async open(url: string) {
    try {
      if (this.currentView) {
        this.mainWindow.contentView.removeChildView(this.currentView);
      }

      const alreadyOpenedTab = this.tabs.find((t) => t.url === url);

      if (alreadyOpenedTab) {
        this.mainWindow.contentView.addChildView(alreadyOpenedTab.view);
        this.currentViewId = alreadyOpenedTab.id;
        this.currentView = alreadyOpenedTab.view;
        this.sendTabsUpdate();
        return;
      }

      const newView = new WebContentsView({
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: false,
          preload: path.join(__dirname, 'preload.js'),
        },
      });

      const session = newView.webContents.session;
      session.setDisplayMediaRequestHandler((_, callback) => {
        desktopCapturer.getSources({ types: ['screen'] }).then((sources) => {
          callback({ video: sources[0] });
        });
      });

      newView.setBounds(this.bounds);

      await newView.webContents.loadURL(url);

      const newTabId = crypto.randomUUID();

      const tab = {
        id: newTabId,
        view: newView,
        url,
      };

      this.tabs.push(tab);
      this.mainWindow.contentView.addChildView(newView);
      this.currentView = newView;
      this.currentViewId = newTabId;
      this.sendTabsUpdate();

      this.addMetaDataListeners(newView, url);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to open URL "${url}": ${errorMessage}`);
    }
  }

  private addMetaDataListeners(newView: WebContentsView, url: string) {
    const sendMetaData = ({
      faviconUrl,
      title,
    }: MetaData) => {
      if (faviconUrl || title) {
        this.mainWindow.webContents.send(ElectronEvent.ON_WEB_CONTENTS_TAB_META_DATA, {
          // IMPORTANT: Use the original entry URL, not newView.webContents.getURL()
          // The current URL might have changed due to redirects (e.g., https://chat.com -> https://chatgpt.com),
          // but we want to cache favicons/metadata against the URL the user originally entered
          // This ensures consistent caching and retrieval regardless of redirect behavior
          url,
          metaData: {
            faviconUrl,
            title,
          },
        });
      }
    };

    newView.webContents.on('page-favicon-updated', (e, icons) => {
      const readyToDisplayImageData = icons.find((i) => i.includes('data:image'));
      if (readyToDisplayImageData) {
        sendMetaData({
          faviconUrl: readyToDisplayImageData,
        });
        return;
      }
      getImageAsDataURL(icons[0]).then((dataUrl) => {
        if (dataUrl.length > 0) {
          sendMetaData(
            { faviconUrl: dataUrl },
          );
        }
      });
    });

    newView.webContents.once('page-title-updated', (e, newTitle) => {
      sendMetaData({
        title: newTitle,
      });
    });
  }

  closeTabById(tabId: string) {
    const tab = this.tabs.find((tab) => tab.id === tabId);
    if (!tab) {
      return;
    }

    this.tabs = this.tabs.filter((tab) => tab.id !== tabId);

    this.mainWindow.contentView.removeChildView(tab.view);
    try {
      tab.view.webContents.close();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    this.sendTabsUpdate();
  }

  resize(bounds: WebContentsViewBounds) {
    this.bounds = bounds;

    if (this.currentView) {
      this.currentView.setBounds(bounds);
    }

    for (const tab of this.tabs) {
      tab.view.setBounds(bounds);
    }
  }

  setCurrentViewVisible(isVisible: boolean) {
    if (this.currentView) {
      this.currentView.setVisible(isVisible);
    }
  }

  static init(mainWindow: BrowserWindow): WebContentsManager {
    if (!WebContentsManager.instance) {
      WebContentsManager.instance = new WebContentsManager();
      WebContentsManager.instance.mainWindow = mainWindow;
    }
    return WebContentsManager.instance;
  }

  static getInstance(): WebContentsManager {
    if (!WebContentsManager.instance) {
      throw new Error('WebContentsManager must be initialized first using init()');
    }
    return WebContentsManager.instance;
  }
}
