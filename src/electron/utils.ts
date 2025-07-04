import type { Point } from 'electron';
import { app, BrowserWindow, net } from 'electron';
import { Conf } from 'electron-conf/main';
import fs from 'fs';

import type { WindowButtonsPosition } from '../types/electron';

import { BASE_URL, PRODUCTION_URL } from '../config';

const ALLOWED_URL_ORIGINS = [BASE_URL!, PRODUCTION_URL].map((url) => (new URL(url).origin));

export const IS_MAC_OS = process.platform === 'darwin';
export const IS_WINDOWS = process.platform === 'win32';
export const IS_LINUX = process.platform === 'linux';
export const IS_PREVIEW = process.env.IS_PREVIEW === 'true';
export const IS_FIRST_RUN = !fs.existsSync(`${app.getPath('userData')}/config.json`);
export const IS_PRODUCTION = process.env.APP_ENV === 'production';

export const windows = new Set<BrowserWindow>();
export const store = new Conf();

export function getCurrentWindow(): BrowserWindow | null {
  return BrowserWindow.getFocusedWindow();
}

export function getLastWindow(): BrowserWindow | undefined {
  return Array.from(windows).pop();
}

export function hasExtraWindows(): boolean {
  return BrowserWindow.getAllWindows().length > 1;
}

export function reloadWindows(isAutoUpdateEnabled = true): void {
  BrowserWindow.getAllWindows().forEach((window: BrowserWindow) => {
    const { hash } = new URL(window.webContents.getURL());

    if (isAutoUpdateEnabled) {
      window.loadURL(`${process.env.BASE_URL}${hash}`);
    } else {
      window.loadURL(`file://${__dirname}/index.html${hash}`);
    }
  });
}

export function focusLastWindow(): void {
  if (BrowserWindow.getAllWindows().every((window) => !window.isVisible())) {
    BrowserWindow.getAllWindows().forEach((window) => window.show());
  } else {
    getLastWindow()?.focus();
  }
}

export function getAppTitle(chatTitle?: string): string {
  const appName = app.getName();

  if (!chatTitle) {
    return appName;
  }

  return `${chatTitle} · ${appName}`;
}

export function checkIsWebContentsUrlAllowed(url: string): boolean {
  if (!app.isPackaged) {
    return true;
  }

  const parsedUrl = new URL(url);

  const localContentsPathname = IS_WINDOWS
    ? encodeURI(`/${__dirname.replace(/\\/g, '/')}/index.html`)
    : encodeURI(`${__dirname}/index.html`);

  if (parsedUrl.pathname === localContentsPathname) {
    return true;
  }

  return ALLOWED_URL_ORIGINS.includes(parsedUrl.origin);
}

export const WINDOW_BUTTONS_POSITION: Record<WindowButtonsPosition, Point> = {
  standard: { x: 4, y: 4 },
  lowered: { x: 10, y: 52 },
};

export const forceQuit = {
  value: false,

  enable() {
    this.value = true;
  },

  disable() {
    this.value = false;
  },

  get isEnabled(): boolean {
    return this.value;
  },
};

export async function getImageAsDataURL(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const request = net.request(url);

    request.on('response', (response) => {
      const chunks: Buffer[] = [];
      const contentType = response.headers['content-type'][0] || 'image/png';

      response.on('data', (chunk) => {
        chunks.push(chunk);
      });

      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const base64 = buffer.toString('base64');
        resolve(`data:${contentType};base64,${base64}`);
      });

      response.on('error', reject);
    });

    request.on('error', reject);
    request.end();
  });
}
