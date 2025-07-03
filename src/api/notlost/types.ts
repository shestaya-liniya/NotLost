import type { IconName } from '../../types/icons';

export const MAX_WORKSPACES = 3;

export const NotLostLocalStorageKeys = {
  workspaces: 'workspaces',
  webContentsViewFavicons: 'webContentsViewFavicons',
};

export type NotLostLocalStorageKey = keyof typeof NotLostLocalStorageKeys;

// Api

export type ApiWorkspace = {
  id: string;
  title: string;
  iconName: IconName;
  chats: ApiWorkspaceChat[];
  links: ApiWorkspaceLink[];
  chatFolders: ApiWorkspaceChatFolder[];
  linkFolders: ApiWorkspaceLinkFolder[];
};

export type ApiWorkspaceLink = {
  id: string;
  title: string;
  url: string;
};
export type ApiWorkspaceChat = {
  chatId: string;
};

type BaseFolder = {
  id: string;
  title: string;
};
export type ApiWorkspaceChatFolder = BaseFolder & {
  chats: ApiWorkspaceChat[];
};
export type ApiWorkspaceLinkFolder = BaseFolder & {
  links: ApiWorkspaceLink[];
};

// Favicons cache

export type WebContentsViewFavicon = {
  url: string;
  faviconUrl: string;
};
