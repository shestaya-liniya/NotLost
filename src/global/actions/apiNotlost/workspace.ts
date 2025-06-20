import type { ApiInlineFolder, ApiSection, ApiWorkspace } from '../../../api/notlost/types';
import type { ActionReturnType } from '../../types';

import ApiWorkspaceLayer from '../../../api/notlost/workspace';
import { addActionHandler, getGlobal, setGlobal } from '../..';

// Helpers

const findWorkspaceBySectionId = (workspaces: ApiWorkspace[], sectionId: string): ApiWorkspace | undefined => {
  return workspaces.find((w) =>
    w.sections.some((s) => s.id === sectionId),
  ) || undefined;
};

const findWorkspaceByFolderId = (workspaces: ApiWorkspace[], folderId: string): ApiWorkspace | undefined => {
  return workspaces.find((w) =>
    w.sections.some((s) =>
      s.folders.some((f) => f.id === folderId),
    ),
  );
};

const findSectionByFolderId = (sections: ApiSection[], folderId: string): ApiSection | undefined => {
  return sections.find((s) =>
    s.folders.some((f) => f.id === folderId),
  ) || undefined;
};

// Workspace

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
    chatIds: [],
    sections: [],
  };

  ApiWorkspaceLayer.addWorkspace(newWorkspace);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: [...global.workspaces.byOrder, newWorkspace],
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

addActionHandler('updateWorkspaceChats', (global, actions, payload): ActionReturnType => {
  const { workspaceId, chatIds } = payload;

  ApiWorkspaceLayer.updateWorkspaceChats(workspaceId, chatIds);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            chatIds,
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

// Section

addActionHandler('addNewSectionIntoWorkspace', (global, actions, payload): ActionReturnType => {
  const { title, workspaceId, callback } = payload;
  const id = crypto.randomUUID();

  const newSection: ApiSection = {
    id,
    title,
    chatIds: [],
    folders: [],
  };

  const workspace = global.workspaces.byOrder.find((w) => w.id === workspaceId);
  if (!workspace) {
    return;
  }

  ApiWorkspaceLayer.addSection(workspaceId, newSection);

  const updatedWorkspace: ApiWorkspace = {
    ...workspace,
    sections: [...(workspace.sections || []), newSection],
  };

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => (w.id === workspaceId ? updatedWorkspace : w)),
    },
  };

  setGlobal(global);

  callback?.(newSection);
});

addActionHandler('deleteSectionFromWorkspace', (global, actions, payload): ActionReturnType => {
  const { sectionId } = payload;

  ApiWorkspaceLayer.deleteSection(sectionId);

  const workspace = findWorkspaceBySectionId(global.workspaces.byOrder, sectionId);
  if (!workspace) return;

  const updatedWorkspace: ApiWorkspace = {
    ...workspace,
    sections: (workspace.sections ?? []).filter((s) => s.id !== sectionId),
  };

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => (w.id === workspace.id ? updatedWorkspace : w)),
    },
  };

  setGlobal(global);
});

addActionHandler('renameWorkspaceSection', (global, actions, payload): ActionReturnType => {
  const { sectionId, newTitle } = payload;

  ApiWorkspaceLayer.renameSection(sectionId, newTitle);

  const workspace = findWorkspaceBySectionId(global.workspaces.byOrder, sectionId);
  if (!workspace) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            sections: w.sections.map((s) => {
              if (s.id === sectionId) {
                return { ...s, title: newTitle };
              }
              return s;
            }),
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('updateSectionChats', (global, actions, payload): ActionReturnType => {
  const { sectionId, chatIds } = payload;

  ApiWorkspaceLayer.updateSectionChats(sectionId, chatIds);

  const workspace = findWorkspaceBySectionId(global.workspaces.byOrder, sectionId);
  if (!workspace) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            sections: w.sections.map((s) => {
              if (s.id === sectionId) {
                return { ...s, chatIds };
              }
              return s;
            }),
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('addNewFolderIntoSection', (global, actions, payload): ActionReturnType => {
  const { sectionId, title } = payload;

  const newFolder: ApiInlineFolder = {
    id: crypto.randomUUID(),
    title,
    chatIds: [],
  };

  ApiWorkspaceLayer.addFolder(sectionId, newFolder);

  const workspace = findWorkspaceBySectionId(global.workspaces.byOrder, sectionId);
  if (!workspace) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            sections: w.sections.map((s) => {
              if (s.id === sectionId) {
                return { ...s, folders: [...s.folders, newFolder] };
              }
              return s;
            }),
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('deleteFolderFromSection', (global, actions, payload): ActionReturnType => {
  const { folderId } = payload;

  ApiWorkspaceLayer.deleteFolder(folderId);

  const workspace = findWorkspaceByFolderId(global.workspaces.byOrder, folderId);
  if (!workspace) return;

  const section = findSectionByFolderId(workspace.sections, folderId);
  if (!section) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            sections: w.sections.map((s) => {
              if (s.id === section.id) {
                return { ...s, folders: s.folders.filter((f) => f.id !== folderId) };
              }
              return s;
            }),
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('renameSectionFolder', (global, actions, payload): ActionReturnType => {
  const { folderId, newTitle } = payload;

  ApiWorkspaceLayer.renameFolder(folderId, newTitle);

  const workspace = findWorkspaceByFolderId(global.workspaces.byOrder, folderId);
  if (!workspace) return;

  const section = findSectionByFolderId(workspace.sections, folderId);
  if (!section) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            sections: w.sections.map((s) => {
              if (s.id === section.id) {
                return { ...s, title: newTitle };
              }
              return s;
            }),
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('updateFolderChats', (global, actions, payload): ActionReturnType => {
  const { folderId, chatIds } = payload;

  ApiWorkspaceLayer.updateFolderChats(folderId, chatIds);

  const workspace = findWorkspaceByFolderId(global.workspaces.byOrder, folderId);
  if (!workspace) return;

  const section = findSectionByFolderId(workspace.sections, folderId);
  if (!section) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            sections: w.sections.map((s) => {
              if (s.id === section.id) {
                return { ...s, chatIds };
              }
              return s;
            }),
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});
