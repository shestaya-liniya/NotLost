import type { ApiInlineFolder, ApiWorkspace } from './types';
import { NotLostLocalStorageKeys } from './types';

import { MAIN_IDB_STORE } from '../../util/browser/idb';

class ApiWorkspaceLayer {
  store = MAIN_IDB_STORE;

  getWorkspaces = async (): Promise<ApiWorkspace[]> => {
    return (await this.store.get<ApiWorkspace[]>(NotLostLocalStorageKeys.workspaces)) ?? [];
  };

  updateWorkspaces = async (newWorkspace: ApiWorkspace): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => [...old, newWorkspace],
    );
  };

  updateWorkspaceFolders = async (workspaceId: string, newFolder: ApiInlineFolder): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        if (workspace.id === workspaceId) {
          const folders = workspace.folders ?? [];
          return {
            ...workspace,
            folders: [...folders, newFolder],
          };
        }
        return workspace;
      }),
    );
  };

  deleteWorkspace = async (workspaceId: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.filter((w) => w.id !== workspaceId),
    );
  };

  deleteWorkspaceFolder = async (workspaceId: string, folderId: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        if (workspace.id === workspaceId) {
          return {
            ...workspace,
            folders: (workspace.folders ?? []).filter((folder) => folder.id !== folderId),
          };
        }
        return workspace;
      }),
    );
  };

  renameWorkspaceFolder = async (workspaceId: string, folderId: string, newTitle: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            folders: w.folders.map((f) => {
              if (f.id === folderId) {
                return {
                  ...f,
                  title: newTitle,
                };
              }

              return f;
            }),
          };
        }
        return w;
      }),
    );
  };

  renameWorkspace = async (workspaceId: string, newTitle: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            title: newTitle,
          };
        }
        return w;
      }),
    );
  };

  updateWorkspaceFolderChats = async (workspaceId: string, folderId: string, chatIds: string[]): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            folders: w.folders.map((f) => {
              if (f.id === folderId) {
                return {
                  ...f,
                  chatIds,
                };
              }

              return f;
            }),
          };
        }
        return w;
      }),
    );
  };

  updateWorkspacePinnedChats = async (workspaceId: string, chatIds: string[]): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            pinnedChatIds: chatIds,
          };
        }
        return w;
      }),
    );
  };
}

export default new ApiWorkspaceLayer();
