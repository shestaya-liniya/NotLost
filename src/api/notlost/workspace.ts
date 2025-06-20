import type { ApiInlineFolder, ApiSection, ApiWorkspace } from './types';
import { NotLostLocalStorageKeys } from './types';

import { MAIN_IDB_STORE } from '../../util/browser/idb';

class ApiWorkspaceLayer {
  store = MAIN_IDB_STORE;

  private findSectionIndex(workspace: ApiWorkspace, sectionId: string) {
    return workspace.sections.findIndex((s) => s.id === sectionId);
  }

  private findFolderIndex(section: ApiSection, folderId: string) {
    return section.folders.findIndex((f) => f.id === folderId);
  }

  // Workspace

  getWorkspaces = async (): Promise<ApiWorkspace[]> => {
    return (await this.store.get<ApiWorkspace[]>(NotLostLocalStorageKeys.workspaces)) ?? [];
  };

  addWorkspace = async (newWorkspace: ApiWorkspace): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => [...old, newWorkspace],
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
          return {
            ...workspace,
            chatIds,
          };
        }
        return workspace;
      }),
    );
  };

  // Workspace -> Sections

  addSection = async (workspaceId: string, newSection: ApiSection): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        if (workspace.id === workspaceId) {
          const sections = workspace.sections ?? [];
          return {
            ...workspace,
            sections: [...sections, newSection],
          };
        }
        return workspace;
      }),
    );
  };

  deleteSection = async (sectionId: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const sectionIndex = this.findSectionIndex(workspace, sectionId);

          if (sectionIndex === -1) return workspace;

          return {
            ...workspace,
            sections: workspace.sections.filter((s) => s.id !== sectionId),
          };
        }),
    );
  };

  renameSection = async (sectionId: string, newTitle: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const sectionIndex = this.findSectionIndex(workspace, sectionId);

          if (sectionIndex === -1) return workspace;

          return {
            ...workspace,
            sections: workspace.sections.map((section, idx) =>
              idx === sectionIndex ? { ...section, title: newTitle } : section,
            ),
          };
        }),
    );
  };

  updateSectionChats = async (sectionId: string, chatIds: string[]): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) =>
        old.map((workspace) => {
          const sectionIndex = this.findSectionIndex(workspace, sectionId);

          if (sectionIndex === -1) return workspace;

          return {
            ...workspace,
            sections: workspace.sections.map((section, idx) =>
              idx === sectionIndex ? { ...section, chatIds } : section,
            ),
          };
        }),
    );
  };

  // Workspace -> Section -> Folders

  addFolder = async (sectionId: string, newFolder: ApiInlineFolder): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        const sectionIndex = this.findSectionIndex(workspace, sectionId);

        if (sectionIndex === -1) return workspace;

        return {
          ...workspace,
          sections: workspace.sections.map((s, idx) =>
            idx === sectionIndex ? { ...s, folders: [...s.folders, newFolder] } : s,
          ),
        };
      }),
    );
  };

  deleteFolder = async (folderId: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        const updatedSections = workspace.sections.map((section) => {
          if (!section.folders) return section;

          const folderIndex = this.findFolderIndex(section, folderId);

          if (folderIndex === -1) return section;

          return {
            ...section,
            folders: section.folders.filter((f) => f.id !== folderId),
          };
        });

        return { ...workspace, sections: updatedSections };
      }),
    );
  };

  renameFolder = async (folderId: string, newTitle: string): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        const updatedSections = workspace.sections.map((section) => {
          if (!section.folders) return section;

          const folderIndex = this.findFolderIndex(section, folderId);

          if (folderIndex === -1) return section;

          return {
            ...section,
            folders: section.folders.map((folder, idx) =>
              idx === folderIndex ? { ...folder, title: newTitle } : folder,
            ),
          };
        });

        return { ...workspace, sections: updatedSections };
      }),
    );
  };

  updateFolderChats = async (folderId: string, chatIds: string[]): Promise<void> => {
    await this.store.update<ApiWorkspace[]>(
      NotLostLocalStorageKeys.workspaces,
      (old = []) => old.map((workspace) => {
        const updatedSections = workspace.sections.map((section) => {
          if (!section.folders) return section;

          const folderIndex = this.findFolderIndex(section, folderId);

          if (folderIndex === -1) return section;

          return {
            ...section,
            folders: section.folders.map((folder, idx) =>
              idx === folderIndex ? { ...folder, chatIds } : folder,
            ),
          };
        });

        return { ...workspace, sections: updatedSections };
      }),
    );
  };
}

export default new ApiWorkspaceLayer();
