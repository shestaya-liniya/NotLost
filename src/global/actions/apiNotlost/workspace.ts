import type { ApiInlineFolder, ApiWorkspace } from '../../../api/notlost/types';
import type { ActionReturnType } from '../../types';

import ApiWorkspaceLayer from '../../../api/notlost/workspace';
import { addActionHandler, getGlobal, setGlobal } from '../..';

addActionHandler('loadAllWorkspaces', async (global): Promise<void> => {
  const result = await ApiWorkspaceLayer.getWorkspaces();

  if (result) {
    global = getGlobal();

    global = {
      ...global,
      workspaces: {
        ...global.workspaces,
        areLoaded: true,
        byOrder: result,
      },
    };
  }

  setGlobal(global);
});

addActionHandler('addNewWorkspace', (global, actions, payload): ActionReturnType => {
  const { title, iconName } = payload;

  const newWorkspace: ApiWorkspace = {
    id: crypto.randomUUID(),
    title,
    iconName,
    pinnedChatIds: [],
    folders: [],
  };

  ApiWorkspaceLayer.updateWorkspaces(newWorkspace);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: [...global.workspaces.byOrder, newWorkspace],
    },
  };

  setGlobal(global);
});

addActionHandler('addNewFolderIntoWorkspace', (global, actions, payload): ActionReturnType => {
  const { title, workspaceId } = payload;

  const newFolder: ApiInlineFolder = {
    id: crypto.randomUUID(),
    title,
    chatIds: [],
  };

  const workspace = global.workspaces.byOrder.find((w) => w.id === workspaceId);
  if (!workspace) {
    return;
  }

  ApiWorkspaceLayer.updateWorkspaceFolders(workspaceId, newFolder);

  const updatedWorkspace = {
    ...workspace,
    folders: [...(workspace.folders || []), newFolder],
  };

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => (w.id === workspaceId ? updatedWorkspace : w)),
    },
  };

  setGlobal(global);
});

addActionHandler('deleteFolderFromWorkspace', (global, actions, payload): ActionReturnType => {
  const { workspaceId, folderId } = payload;

  const workspace = global.workspaces.byOrder.find((w) => w.id === workspaceId);
  if (!workspace) {
    return;
  }

  ApiWorkspaceLayer.deleteWorkspaceFolder(workspaceId, folderId);

  const updatedWorkspace = {
    ...workspace,
    folders: (workspace.folders ?? []).filter((folder) => folder.id !== folderId),
  };

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => (w.id === workspaceId ? updatedWorkspace : w)),
    },
  };

  setGlobal(global);
});

addActionHandler('deleteWorkspace', (global, actions, payload): ActionReturnType => {
  const { workspaceId } = payload;

  ApiWorkspaceLayer.deleteWorkspace(workspaceId);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.filter((w) => w.id !== workspaceId),
    },
  };

  setGlobal(global);
});

addActionHandler('renameWorkspace', (global, actions, payload): ActionReturnType => {
  const { workspaceId, newTitle } = payload;

  ApiWorkspaceLayer.renameWorkspace(workspaceId, newTitle);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            title: newTitle,
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('renameWorkspaceFolder', (global, actions, payload): ActionReturnType => {
  const { workspaceId, folderId, newTitle } = payload;

  ApiWorkspaceLayer.renameWorkspaceFolder(workspaceId, folderId, newTitle);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            folders: w.folders.map((f) => {
              if (f.id === folderId) {
                return { ...f, title: newTitle };
              }
              return f;
            }),
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('updateWorkspaceFolderChats', (global, actions, payload): ActionReturnType => {
  const { workspaceId, folderId, chatIds } = payload;

  ApiWorkspaceLayer.updateWorkspaceFolderChats(workspaceId, folderId, chatIds);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            folders: w.folders.map((f) => {
              if (f.id === folderId) {
                return { ...f, chatIds };
              }
              return f;
            }),
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('updateWorkspacePinnedChats', (global, actions, payload): ActionReturnType => {
  const { workspaceId, chatIds } = payload;

  ApiWorkspaceLayer.updateWorkspacePinnedChats(workspaceId, chatIds);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            pinnedChatIds: chatIds,
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});
