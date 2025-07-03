export enum ElectronEvent {
  FULLSCREEN_CHANGE = 'fullscreen-change',
  UPDATE_ERROR = 'update-error',
  UPDATE_AVAILABLE = 'update-available',
  DEEPLINK = 'deeplink',
  ON_WEB_CONTENTS_TABS_CHANGE = 'on-web-contents-tabs-change',
  ON_WEB_CONTENTS_TAB_META_DATA = 'on-web-contents-tab-meta-data',
}

export enum ElectronAction {
  GET_IS_FULLSCREEN = 'get-is-fullscreen',
  INSTALL_UPDATE = 'install-update',
  HANDLE_DOUBLE_CLICK = 'handle-double-click',
  OPEN_NEW_WINDOW = 'open-new-window',
  SET_WINDOW_TITLE = 'set-window-title',
  SET_WINDOW_BUTTONS_POSITION = 'set-window-buttons-position',
  SET_IS_AUTO_UPDATE_ENABLED = 'set-is-auto-update-enabled',
  GET_IS_AUTO_UPDATE_ENABLED = 'get-is-auto-update-enabled',
  SET_IS_TRAY_ICON_ENABLED = 'set-is-tray-icon-enabled',
  GET_IS_TRAY_ICON_ENABLED = 'get-is-tray-icon-enabled',
  RESTORE_LOCAL_STORAGE = 'restore-local-storage',
  GET_WEB_CONTENTS_TABS = 'get-web-contents-tabs',
  CLOSE_WEB_CONTENTS_TAB = 'close-web-contents-tab',
  SET_WEB_CONTENTS_VIEW_BOUNDS = 'set-web-contents-view-bounds',
  SET_WEB_CONTENTS_VIEW_URL = 'set-web-contents-view-url',
  SET_WEB_CONTENTS_VIEW_VISIBLE = 'set-web-contents-view-visible',
  ON_WEB_CONTENTS_VIEW_FAVICON = 'on-web-contents-view-favicon',
  ON_WEB_CONTENTS_VIEW_TITLE = 'on-web-contents-view-title',
}
export type WebContentsViewBounds = {
  x: number;
  y: number;
  height: number;
  width: number;
};

export type WebContentsTabInfo = {
  id: string;
  title: string;
  url: string;
};

export type WindowButtonsPosition = 'standard' | 'lowered';

export interface ElectronApi {
  isFullscreen: () => Promise<boolean>;
  installUpdate: () => Promise<void>;
  handleDoubleClick: () => Promise<void>;
  openNewWindow: (url: string, title?: string) => Promise<void>;
  setWindowTitle: (title?: string) => Promise<void>;
  setWindowButtonsPosition: (position: WindowButtonsPosition) => Promise<void>;
  /**
   * @deprecated Use `setWindowButtonsPosition` instead
   */
  setTrafficLightPosition: (position: WindowButtonsPosition) => Promise<void>;
  setIsAutoUpdateEnabled: (value: boolean) => Promise<void>;
  getIsAutoUpdateEnabled: () => Promise<boolean>;
  setIsTrayIconEnabled: (value: boolean) => Promise<void>;
  getIsTrayIconEnabled: () => Promise<boolean>;
  restoreLocalStorage: () => Promise<void>;
  getWebContentsTabs: () => Promise<WebContentsTabInfo[]>;
  closeWebContentsTab: (tabId: string) => Promise<void>;
  setWebContentsViewBounds: (bounds: WebContentsViewBounds) => Promise<void>;
  setWebContentsViewUrl: (url: string) => Promise<void>;
  setWebContentsViewVisible: (isVisible: boolean) => Promise<void>;

  on: (eventName: ElectronEvent, callback: any) => VoidFunction;
}

declare global {
  interface Window {
    electron?: ElectronApi;
  }
}
