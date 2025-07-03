import type { ApiWorkspace, ApiWorkspaceChatFolder, ApiWorkspaceLink, ApiWorkspaceLinkFolder } from './types';
import { MAX_WORKSPACES, NotLostLocalStorageKeys } from './types';

import { MAIN_IDB_STORE } from '../../util/browser/idb';

class ApiWorkspaceLayer {
  store = MAIN_IDB_STORE;

  private findChatFolderIndex(workspace: ApiWorkspace, chatFolderId: string) {
    return workspace.chatFolders.findIndex((f) => f.id === chatFolderId);
  }

  private findLinkFolderIndex(workspace: ApiWorkspace, linkFolderId: string) {
    return workspace.linkFolders.findIndex((f) => f.id === linkFolderId);
  }

  private findLinkIndex(workspace: ApiWorkspace, linkId: string) {
    return workspace.links.findIndex((l) => l.id === linkId);
  }

  // Workspace

  getWorkspaces = async (): Promise<ApiWorkspace[]> => {
    return (await this.store.get<ApiWorkspace[]>(NotLostLocalStorageKeys.workspaces)) ?? [];
  };

  addWorkspace = async (newWorkspace: ApiWorkspace): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => {
        if (old.length < MAX_WORKSPACES) {
          return [...old, newWorkspace];
        }

        return old;
      },
    );
  };

  deleteWorkspace = async (workspaceId: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.filter((w) => w.id !== workspaceId),
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

  updateWorkspaceChats = async (workspaceId: string, chatIds: string[]): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        if (workspace.id === workspaceId) {
          const chats = chatIds.map((chatId) => ({ chatId }));
          return {
            ...workspace,
            chats,
          };
        }
        return workspace;
      }),
    );
  };

  addLinkIntoWorkspace = async (workspaceId: string, newLink: ApiWorkspaceLink): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        if (workspace.id === workspaceId) {
          const links = workspace.links ?? [];
          return {
            ...workspace,
            links: [...links, newLink],
          };
        }
        return workspace;
      }),
    );
  };

  deleteLink = async (linkId: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const linkIndex = this.findLinkIndex(workspace, linkId);

          if (linkIndex === -1) return workspace;

          return {
            ...workspace,
            links: workspace.links.filter((l) => l.id !== linkId),
          };
        }),
    );
  };

  // Workspace -> Chat folder

  addChatFolder = async (workspaceId: string, newChatFolder: ApiWorkspaceChatFolder): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        if (workspace.id === workspaceId) {
          const chatFolders = workspace.chatFolders ?? [];
          return {
            ...workspace,
            chatFolders: [...chatFolders, newChatFolder],
          };
        }
        return workspace;
      }),
    );
  };

  deleteChatFolder = async (chatFolderId: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const folderIndex = this.findChatFolderIndex(workspace, chatFolderId);

          if (folderIndex === -1) return workspace;

          return {
            ...workspace,
            chatFolders: workspace.chatFolders.filter((f) => f.id !== chatFolderId),
          };
        }),
    );
  };

  renameChatFolder = async (chatFolderId: string, newTitle: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const folderIndex = this.findChatFolderIndex(workspace, chatFolderId);

          if (folderIndex === -1) return workspace;

          return {
            ...workspace,
            chatFolders: workspace.chatFolders.map((f, idx) =>
              idx === folderIndex ? { ...f, title: newTitle } : f,
            ),
          };
        }),
    );
  };

  updateChatFolderChats = async (chatFolderId: string, chatIds: string[]): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const folderIndex = this.findChatFolderIndex(workspace, chatFolderId);

          if (folderIndex === -1) return workspace;

          const updatedChats = chatIds.map((chatId) => ({ chatId }));

          return {
            ...workspace,
            chatFolders: workspace.chatFolders.map((f, idx) =>
              idx === folderIndex ? { ...f, chats: updatedChats } : f,
            ),
          };
        }),
    );
  };

  // Workspace -> Link folder

  addLinkFolder = async (workspaceId: string, newLinkFolder: ApiWorkspaceLinkFolder): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        if (workspace.id === workspaceId) {
          const linkFolders = workspace.linkFolders ?? [];
          return {
            ...workspace,
            linkFolders: [...linkFolders, newLinkFolder],
          };
        }
        return workspace;
      }),
    );
  };

  deleteLinkFolder = async (linkFolderId: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const folderIndex = this.findLinkFolderIndex(workspace, linkFolderId);

          if (folderIndex === -1) return workspace;

          return {
            ...workspace,
            linkFolders: workspace.linkFolders.filter((f) => f.id !== linkFolderId),
          };
        }),
    );
  };

  renameLinkFolder = async (linkFolderId: string, newTitle: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const folderIndex = this.findLinkFolderIndex(workspace, linkFolderId);

          if (folderIndex === -1) return workspace;

          return {
            ...workspace,
            linkFolders: workspace.linkFolders.map((f, idx) =>
              idx === folderIndex ? { ...f, title: newTitle } : f,
            ),
          };
        }),
    );
  };

  updateLinkFolderLinks = async (linkFolderId: string, links: ApiWorkspaceLink[]): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const folderIndex = this.findLinkFolderIndex(workspace, linkFolderId);

          if (folderIndex === -1) return workspace;

          return {
            ...workspace,
            linkFolders: workspace.linkFolders.map((f, idx) =>
              idx === folderIndex ? { ...f, links } : f,
            ),
          };
        }),
    );
  };
}

export default new ApiWorkspaceLayer();
