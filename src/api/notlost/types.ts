import type { IconName } from '../../types/icons';

export const NotLostLocalStorageKeys = {
  workspaces: 'workspaces',
};

export type NotLostLocalStorageKey = keyof typeof NotLostLocalStorageKeys;

export type ApiInlineFolder = {
  id: string;
  title: string;
  chatIds: string[];
};

export type ApiWorkspace = {
  id: string;
  title: string;
  iconName: IconName;
  pinnedChatIds: string[];
  folders: ApiInlineFolder[];
};
