import type {
  ApiWorkspace,
  ApiWorkspaceChatFolder,
  ApiWorkspaceLink,
  ApiWorkspaceLinkFolder,
} from '../../../api/notlost/types';
import type { ActionReturnType } from '../../types';

import ApiWorkspaceLayer from '../../../api/notlost/workspace';
import { addActionHandler, getGlobal, setGlobal } from '../..';

// Helpers

const findWorkspaceByChatFolderId = (workspaces: ApiWorkspace[], chatFolderId: string): ApiWorkspace | undefined => {
  return workspaces.find((w) =>
    w.chatFolders.some((f) => f.id === chatFolderId),
  ) || undefined;
};

const findWorkspaceByLinkFolderId = (workspaces: ApiWorkspace[], linkFolderId: string): ApiWorkspace | undefined => {
  return workspaces.find((w) =>
    w.linkFolders.some((f) => f.id === linkFolderId),
  ) || undefined;
};

const findWorkspaceByLinkId = (workspaces: ApiWorkspace[], linkId: string): ApiWorkspace | undefined => {
  return workspaces.find((w) =>
    w.links.some((l) => l.id === linkId),
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

addActionHandler('createInitialWorkspace', (global, actions, payload): ActionReturnType => {
  const pinnedChatIds = global.chats.orderedPinnedIds.active?.map((chatId) => ({ chatId })) || [];
  const chatFolders: ApiWorkspaceChatFolder[] = Object.values(global.chatFolders.byId).map((tgChatFolder) => {
    return {
      id: crypto.randomUUID(),
      title: tgChatFolder.title.text,
      chats: tgChatFolder.includedChatIds.map((chatId) => ({ chatId })),
    };
  });

  const newWorkspace: ApiWorkspace = {
    id: crypto.randomUUID(),
    title: 'Personal',
    iconName: 'lamp',
    chats: pinnedChatIds,
    links: [],
    chatFolders,
    linkFolders: [],
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

addActionHandler('addNewWorkspace', async (global, actions, payload): Promise<void> => {
  const { title, iconName } = payload;

  const newWorkspace: ApiWorkspace = {
    id: crypto.randomUUID(),
    title,
    iconName,
    chats: [],
    links: [],
    chatFolders: [],
    linkFolders: [],
  };

  await ApiWorkspaceLayer.addWorkspace(newWorkspace);

  global = getGlobal();

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

  const updatedChats = chatIds.map((chatId) => ({ chatId }));

  ApiWorkspaceLayer.updateWorkspaceChats(workspaceId, chatIds);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            chats: updatedChats,
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('deleteChatFromWorkspace', (global, actions, payload): ActionReturnType => {
  const { workspaceId, chatId } = payload;

  const workspace = global.workspaces.byOrder.find((w) => w.id === workspaceId);
  if (!workspace) return;

  const updatedChatIds = workspace.chats.filter((c) => c.chatId !== chatId).map((c) => c.chatId);
  ApiWorkspaceLayer.updateWorkspaceChats(workspaceId, updatedChatIds);

  const updatedWorkspace: ApiWorkspace = {
    ...workspace,
    chats: (workspace.chats ?? []).filter((c) => c.chatId !== chatId),
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

addActionHandler('addLinkIntoWorkspace', (global, actions, payload): ActionReturnType => {
  const { workspaceId, title, url } = payload;

  const newLink: ApiWorkspaceLink = {
    id: crypto.randomUUID(),
    title,
    url,
  };

  ApiWorkspaceLayer.addLinkIntoWorkspace(workspaceId, newLink);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspaceId) {
          return {
            ...w,
            links: [...(w.links || []), newLink],
          };
        }

        return w;
      }),
    },
  };

  setGlobal(global);
});

addActionHandler('deleteLinkFromWorkspace', (global, actions, payload): ActionReturnType => {
  const { linkId } = payload;

  ApiWorkspaceLayer.deleteLink(linkId);

  const workspace = findWorkspaceByLinkId(global.workspaces.byOrder, linkId);
  if (!workspace) return;

  const updatedWorkspace: ApiWorkspace = {
    ...workspace,
    links: (workspace.links ?? []).filter((l) => l.id !== linkId),
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

// Chat folder

addActionHandler('addChatFolderIntoWorkspace', (global, actions, payload): ActionReturnType => {
  const { workspaceId, title } = payload;
  const id = crypto.randomUUID();

  const newChatFolder: ApiWorkspaceChatFolder = {
    id,
    title,
    chats: [],
  };

  const workspace = global.workspaces.byOrder.find((w) => w.id === workspaceId);
  if (!workspace) {
    return;
  }

  ApiWorkspaceLayer.addChatFolder(workspaceId, newChatFolder);

  const updatedWorkspace: ApiWorkspace = {
    ...workspace,
    chatFolders: [...(workspace.chatFolders || []), newChatFolder],
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

addActionHandler('deleteChatFolderFromWorkspace', (global, actions, payload): ActionReturnType => {
  const { chatFolderId } = payload;

  ApiWorkspaceLayer.deleteChatFolder(chatFolderId);

  const workspace = findWorkspaceByChatFolderId(global.workspaces.byOrder, chatFolderId);
  if (!workspace) return;

  const updatedWorkspace: ApiWorkspace = {
    ...workspace,
    chatFolders: (workspace.chatFolders ?? []).filter((f) => f.id !== chatFolderId),
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

addActionHandler('renameChatFolderInWorkspace', (global, actions, payload): ActionReturnType => {
  const { chatFolderId, newTitle } = payload;

  ApiWorkspaceLayer.renameChatFolder(chatFolderId, newTitle);

  const workspace = findWorkspaceByChatFolderId(global.workspaces.byOrder, chatFolderId);
  if (!workspace) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            chatFolders: w.chatFolders.map((f) => {
              if (f.id === chatFolderId) {
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

addActionHandler('updateChatFolderChats', (global, actions, payload): ActionReturnType => {
  const { chatFolderId, chatIds } = payload;

  ApiWorkspaceLayer.updateChatFolderChats(chatFolderId, chatIds);

  const workspace = findWorkspaceByChatFolderId(global.workspaces.byOrder, chatFolderId);
  if (!workspace) return;

  const updatedChats = chatIds.map((chatId) => ({ chatId }));

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            chatFolders: w.chatFolders.map((f) => {
              if (f.id === chatFolderId) {
                return { ...f, chats: updatedChats };
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

addActionHandler('deleteChatFromChatsFolder', (global, actions, payload): ActionReturnType => {
  const { chatFolderId, chatId } = payload;

  const workspace = findWorkspaceByChatFolderId(global.workspaces.byOrder, chatFolderId);
  if (!workspace) return;

  const chatFolder = workspace.chatFolders.find((f) => f.id === chatFolderId);
  if (!chatFolder) return;

  const updatedChatIds = chatFolder.chats.filter((c) => c.chatId !== chatId).map((c) => c.chatId);
  ApiWorkspaceLayer.updateChatFolderChats(chatFolderId, updatedChatIds);

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            chatFolders: w.chatFolders.map((f) => {
              if (f.id === chatFolderId) {
                return { ...f, chats: updatedChatIds.map((id) => ({ chatId: id })) };
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

addActionHandler('addLinkFolderIntoWorkspace', (global, actions, payload): ActionReturnType => {
  const { workspaceId, title } = payload;

  const newLinkFolder: ApiWorkspaceLinkFolder = {
    id: crypto.randomUUID(),
    title,
    links: [],
  };

  ApiWorkspaceLayer.addLinkFolder(workspaceId, newLinkFolder);

  const workspace = global.workspaces.byOrder.find((w) => w.id === workspaceId);
  if (!workspace) return;

  const updatedWorkspace: ApiWorkspace = {
    ...workspace,
    linkFolders: [...(workspace.linkFolders || []), newLinkFolder],
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

addActionHandler('deleteLinkFolderFromWorkspace', (global, actions, payload): ActionReturnType => {
  const { linkFolderId } = payload;

  ApiWorkspaceLayer.deleteLinkFolder(linkFolderId);

  const workspace = findWorkspaceByLinkFolderId(global.workspaces.byOrder, linkFolderId);
  if (!workspace) return;

  const updatedWorkspace: ApiWorkspace = {
    ...workspace,
    linkFolders: (workspace.linkFolders ?? []).filter((f) => f.id !== linkFolderId),
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

addActionHandler('renameLinkFolderInWorkspace', (global, actions, payload): ActionReturnType => {
  const { linkFolderId, newTitle } = payload;

  ApiWorkspaceLayer.renameLinkFolder(linkFolderId, newTitle);

  const workspace = findWorkspaceByLinkFolderId(global.workspaces.byOrder, linkFolderId);
  if (!workspace) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            linkFolders: w.linkFolders.map((f) => {
              if (f.id === linkFolderId) {
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

addActionHandler('updateLinkFolderLinks', (global, actions, payload): ActionReturnType => {
  const { linkFolderId, links } = payload;

  ApiWorkspaceLayer.updateLinkFolderLinks(linkFolderId, links);

  const workspace = findWorkspaceByLinkFolderId(global.workspaces.byOrder, linkFolderId);
  if (!workspace) return;

  global = {
    ...global,
    workspaces: {
      ...global.workspaces,
      byOrder: global.workspaces.byOrder.map((w) => {
        if (w.id === workspace.id) {
          return {
            ...w,
            linkFolders: w.linkFolders.map((f) => {
              if (f.id === linkFolderId) {
                return { ...f, links };
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
