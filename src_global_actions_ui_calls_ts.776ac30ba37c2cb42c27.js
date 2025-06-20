"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_global_actions_ui_calls_ts"],{

/***/ "./src/global/actions/api/chats.ts":
/*!*****************************************!*\
  !*** ./src/global/actions/api/chats.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkWebAppExists: () => (/* binding */ checkWebAppExists),
/* harmony export */   ensureIsSuperGroup: () => (/* binding */ ensureIsSuperGroup),
/* harmony export */   fetchChatByPhoneNumber: () => (/* binding */ fetchChatByPhoneNumber),
/* harmony export */   fetchChatByUsername: () => (/* binding */ fetchChatByUsername),
/* harmony export */   loadFullChat: () => (/* binding */ loadFullChat),
/* harmony export */   migrateChat: () => (/* binding */ migrateChat)
/* harmony export */ });
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types */ "./src/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_deeplink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/deeplink */ "./src/util/deeplink.ts");
/* harmony import */ var _util_deepLinkParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/deepLinkParser */ "./src/util/deepLinkParser.ts");
/* harmony import */ var _util_entities_ids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/entities/ids */ "./src/util/entities/ids.ts");
/* harmony import */ var _util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/establishMultitabRole */ "./src/util/establishMultitabRole.ts");
/* harmony import */ var _util_folderManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/folderManager */ "./src/util/folderManager.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _util_keys_messageKey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/keys/messageKey */ "./src/util/keys/messageKey.ts");
/* harmony import */ var _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/oldLangProvider */ "./src/util/oldLangProvider.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/schedulers */ "./src/util/schedulers.ts");
/* harmony import */ var _util_themeStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../util/themeStyle */ "./src/util/themeStyle.ts");
/* harmony import */ var _api_gramjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../api/gramjs */ "./src/api/gramjs/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../index */ "./src/global/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../reducers */ "./src/global/reducers/index.ts");
/* harmony import */ var _reducers_calls__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../reducers/calls */ "./src/global/reducers/calls.ts");
/* harmony import */ var _reducers_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../reducers/tabs */ "./src/global/reducers/tabs.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _selectors_calls__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _selectors_limits__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../selectors/limits */ "./src/global/selectors/limits.ts");























const TOP_CHAT_MESSAGES_PRELOAD_INTERVAL = 100;
const INFINITE_LOOP_MARKER = 100;
const CHATLIST_LIMIT_ERROR_LIST = new Set(['FILTERS_TOO_MUCH', 'CHATLISTS_TOO_MUCH', 'INVITES_TOO_MUCH']);
const runThrottledForLoadTopChats = (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_12__.throttle)(cb => cb(), 3000, true);
const runDebouncedForLoadFullChat = (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_12__.debounce)(cb => cb(), 500, false, true);
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('preloadTopChatMessages', async (global, actions) => {
  const preloadedChatIds = new Set();
  for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_2__.TOP_CHAT_MESSAGES_PRELOAD_LIMIT; i++) {
    await (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_12__.pause)(TOP_CHAT_MESSAGES_PRELOAD_INTERVAL);
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    const currentChatIds = Object.values(global.byTabId).map(({
      id: tabId
    }) => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, tabId)?.chatId).filter(Boolean);
    const folderAllOrderedIds = (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_8__.getOrderedIds)(_config__WEBPACK_IMPORTED_MODULE_2__.ALL_FOLDER_ID);
    const nextChatId = folderAllOrderedIds?.find(id => !currentChatIds.includes(id) && !preloadedChatIds.has(id));
    if (!nextChatId) {
      return;
    }
    preloadedChatIds.add(nextChatId);
    actions.loadViewportMessages({
      chatId: nextChatId,
      threadId: _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID,
      tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
    });
  }
});
function abortChatRequests(chatId, threadId) {
  (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('abortChatRequests', {
    chatId,
    threadId
  });
}
function abortChatRequestsForCurrentChat(global, newChatId, newThreadId, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()]) {
  const currentMessageList = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, tabId);
  const currentChatId = currentMessageList?.chatId;
  const currentThreadId = currentMessageList?.threadId;
  if (currentChatId && (currentChatId !== newChatId || currentThreadId !== newThreadId)) {
    const [isChatOpened, isThreadOpened] = Object.values(global.byTabId).reduce(([accHasChatOpened, accHasThreadOpened], {
      id: otherTabId
    }) => {
      if (otherTabId === tabId || accHasChatOpened && accHasThreadOpened) {
        return [accHasChatOpened, accHasThreadOpened];
      }
      const otherMessageList = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, otherTabId);
      const isSameChat = otherMessageList?.chatId === currentChatId;
      const isSameThread = isSameChat && otherMessageList?.threadId === currentThreadId;
      return [accHasChatOpened || isSameChat, accHasThreadOpened || isSameThread];
    }, [currentChatId === newChatId, false]);
    const shouldAbortChatRequests = !isChatOpened || !isThreadOpened;
    if (shouldAbortChatRequests) {
      abortChatRequests(currentChatId, isChatOpened ? currentThreadId : undefined);
    }
  }
}
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openChat', (global, actions, payload) => {
  const {
    id,
    type,
    noForumTopicPanel,
    shouldReplaceHistory,
    shouldReplaceLast,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  actions.processOpenChatOrThread({
    chatId: id,
    type,
    threadId: _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID,
    noForumTopicPanel,
    shouldReplaceHistory,
    shouldReplaceLast,
    tabId
  });
  abortChatRequestsForCurrentChat(global, id, _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID, tabId);
  if (!id || id === _config__WEBPACK_IMPORTED_MODULE_2__.TMP_CHAT_ID) {
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (chat?.hasUnreadMark) {
    actions.markChatRead({
      id
    });
  }
  const isChatOnlySummary = !(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatLastMessageId)(global, id);
  if (!chat) {
    if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsChatWithSelf)(global, id)) {
      void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChat', {
        type: 'self'
      });
    } else {
      const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, id);
      if (user) {
        void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChat', {
          type: 'user',
          user
        });
      }
    }
  } else if (isChatOnlySummary && !chat.isMin) {
    actions.requestChatUpdate({
      chatId: id
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openSavedDialog', (global, actions, payload) => {
  const {
    chatId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)(),
    ...otherParams
  } = payload;
  actions.openThread({
    chatId: global.currentUserId,
    threadId: chatId,
    tabId,
    ...otherParams
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openThread', async (global, actions, payload) => {
  const {
    type,
    isComments,
    noForumTopicPanel,
    shouldReplaceHistory,
    shouldReplaceLast,
    focusMessageId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  let {
    chatId
  } = payload;
  let threadId;
  let loadingChatId;
  let loadingThreadId;
  if (!isComments) {
    loadingChatId = payload.chatId;
    threadId = payload.threadId;
    loadingThreadId = threadId;
    const originalChat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, loadingChatId);
    if (threadId === _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID) {
      actions.openChat({
        id: chatId,
        type,
        noForumTopicPanel,
        shouldReplaceHistory,
        shouldReplaceLast,
        tabId
      });
      return;
    } else if (originalChat?.isForum || chatId && (0,_helpers__WEBPACK_IMPORTED_MODULE_15__.getIsSavedDialog)(chatId, threadId, global.currentUserId)) {
      actions.processOpenChatOrThread({
        chatId,
        type,
        threadId,
        isComments,
        noForumTopicPanel,
        shouldReplaceHistory,
        shouldReplaceLast,
        tabId
      });
      return;
    }
  } else {
    const {
      originChannelId,
      originMessageId
    } = payload;
    loadingChatId = originChannelId;
    loadingThreadId = originMessageId;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, loadingChatId);
  const threadInfo = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectThreadInfo)(global, loadingChatId, loadingThreadId);
  const thread = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectThread)(global, loadingChatId, loadingThreadId);
  if (!chat) return;
  abortChatRequestsForCurrentChat(global, loadingChatId, loadingThreadId, tabId);
  if (chatId && threadInfo?.threadId && (isComments || thread?.listedIds?.length && thread.listedIds.includes(Number(threadInfo.threadId)))) {
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      loadingThread: undefined
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    actions.processOpenChatOrThread({
      chatId,
      type,
      threadId: threadInfo.threadId,
      isComments,
      noForumTopicPanel,
      shouldReplaceHistory,
      shouldReplaceLast,
      tabId
    });
    return;
  }
  let {
    loadingThread
  } = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId);
  if (loadingThread) {
    abortChatRequests(loadingThread.loadingChatId, loadingThread.loadingMessageId);
  }
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    loadingThread: {
      loadingChatId,
      loadingMessageId: Number(loadingThreadId)
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  const openPreviousChat = () => {
    const currentGlobal = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    if (isComments || (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(currentGlobal, tabId)?.chatId !== loadingChatId || (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(currentGlobal, tabId)?.threadId !== loadingThreadId) {
      return;
    }
    actions.openPreviousChat({
      tabId
    });
  };
  if (!isComments) {
    actions.processOpenChatOrThread({
      chatId,
      type,
      threadId: threadId,
      tabId,
      isComments,
      noForumTopicPanel,
      shouldReplaceHistory,
      shouldReplaceLast
    });
  }
  const result = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global) ? undefined : await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchDiscussionMessage', {
    chat: (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, loadingChatId),
    messageId: Number(loadingThreadId)
  });
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  loadingThread = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).loadingThread;
  if (loadingThread?.loadingChatId !== loadingChatId || loadingThread?.loadingMessageId !== loadingThreadId) {
    openPreviousChat();
    return;
  }
  if (!result) {
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      loadingThread: undefined
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    actions.showNotification({
      message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__.oldTranslate(isComments ? 'ChannelPostDeleted' : 'lng_message_not_found'),
      tabId
    });
    openPreviousChat();
    return;
  }
  threadId ??= result.threadId;
  chatId ??= result.chatId;
  if (!chatId) {
    openPreviousChat();
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addMessages)(global, result.messages);
  if (isComments) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateThreadInfo)(global, loadingChatId, loadingThreadId, {
      threadId
    });
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateThreadInfo)(global, chatId, threadId, {
      isCommentsInfo: false,
      threadId,
      chatId,
      fromChannelId: loadingChatId,
      fromMessageId: loadingThreadId,
      ...(threadInfo && (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.pick)(threadInfo, ['messagesCount', 'lastMessageId', 'lastReadInboxMessageId', 'recentReplierIds']))
    });
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateThread)(global, chatId, threadId, {
    firstMessageId: result.firstMessageId
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  if (focusMessageId) {
    actions.focusMessage({
      chatId,
      threadId,
      messageId: focusMessageId,
      tabId
    });
  }
  actions.loadViewportMessages({
    chatId,
    threadId,
    tabId,
    onError: () => {
      global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
      global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
        loadingThread: undefined
      }, tabId);
      (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
      actions.showNotification({
        message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__.oldTranslate('Group.ErrorAccessDenied'),
        tabId
      });
    },
    onLoaded: () => {
      global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
      loadingThread = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).loadingThread;
      if (loadingThread?.loadingChatId !== loadingChatId || loadingThread?.loadingMessageId !== loadingThreadId) {
        return;
      }
      global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
        loadingThread: undefined
      }, tabId);
      (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
      actions.processOpenChatOrThread({
        chatId,
        type,
        threadId,
        tabId,
        isComments,
        noForumTopicPanel,
        shouldReplaceHistory,
        shouldReplaceLast
      });
    }
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openLinkedChat', async (global, actions, payload) => {
  const {
    id,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (!chat) {
    return;
  }
  const chatFullInfo = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchFullChat', chat);
  if (chatFullInfo?.fullInfo?.linkedChatId) {
    actions.openChat({
      id: chatFullInfo.fullInfo.linkedChatId,
      tabId
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openSupportChat', async (global, actions, payload) => {
  const {
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload || {};
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectSupportChat)(global);
  if (chat) {
    actions.openChat({
      id: chat.id,
      shouldReplaceHistory: true,
      tabId
    });
    return;
  }
  actions.openChat({
    id: _config__WEBPACK_IMPORTED_MODULE_2__.TMP_CHAT_ID,
    shouldReplaceHistory: true,
    tabId
  });
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChat', {
    type: 'support'
  });
  if (result) {
    actions.openChat({
      id: result.chatId,
      shouldReplaceHistory: true,
      tabId
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadAllChats', async (global, actions, payload) => {
  const {
    whenFirstBatchDone
  } = payload;
  const listType = payload.listType;
  let isCallbackFired = false;
  let i = 0;
  while (!global.chats.isFullyLoaded[listType]) {
    if (i++ >= INFINITE_LOOP_MARKER) {
      if (_config__WEBPACK_IMPORTED_MODULE_2__.DEBUG) {
        // eslint-disable-next-line no-console
        console.error('`actions/loadAllChats`: Infinite loop detected');
      }
      return;
    }
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    if (global.connectionState !== 'connectionStateReady' || global.authState !== 'authorizationStateReady') {
      return;
    }
    await loadChats(listType, true);
    if (!isCallbackFired) {
      await whenFirstBatchDone?.();
      isCallbackFired = true;
    }
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadPinnedDialogs', async (global, actions, payload) => {
  const {
    listType
  } = payload;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchPinnedDialogs', {
    listType
  });
  if (!result) return;
  const {
    dialogIds,
    messages,
    chats,
    users
  } = result;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChats)(global, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)(chats, 'id'));
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateUsers)(global, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)(users, 'id'));
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceMessages)(global, messages);
  global = {
    ...global,
    chats: {
      ...global.chats,
      orderedPinnedIds: {
        ...global.chats.orderedPinnedIds,
        [listType]: dialogIds.length ? dialogIds : undefined
      }
    }
  };
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadFullChat', (global, actions, payload) => {
  const {
    chatId,
    force,
    withPhotos
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  const loadChat = async () => {
    await loadFullChat(global, actions, chat);
    if (withPhotos) {
      actions.loadMoreProfilePhotos({
        peerId: chatId,
        shouldInvalidateCache: true
      });
    }
  };
  if (force) {
    void loadChat();
  } else {
    runDebouncedForLoadFullChat(loadChat);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('invalidateFullInfo', (global, actions, payload) => {
  const {
    peerId
  } = payload;
  const isUser = (0,_util_entities_ids__WEBPACK_IMPORTED_MODULE_6__.isUserId)(peerId);
  if (isUser) {
    return {
      ...global,
      users: {
        ...global.users,
        fullInfoById: (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.omit)(global.users.fullInfoById, [peerId])
      }
    };
  }
  return {
    ...global,
    chats: {
      ...global.chats,
      fullInfoById: (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.omit)(global.chats.fullInfoById, [peerId])
    }
  };
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadTopChats', () => {
  runThrottledForLoadTopChats(() => {
    loadChats('active', undefined, true);
    loadChats('archived', undefined, true);
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('requestChatUpdate', (global, actions, payload) => {
  const {
    chatId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('requestChatUpdate', {
    chat,
    ...(chatId === _config__WEBPACK_IMPORTED_MODULE_2__.SERVICE_NOTIFICATIONS_USER_ID && {
      lastLocalMessage: (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectLastServiceNotification)(global)?.message
    })
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('requestSavedDialogUpdate', async (global, actions, payload) => {
  const {
    chatId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchMessages', {
    chat,
    isSavedDialog: true,
    limit: 1
  });
  if (!result) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addMessages)(global, result.messages);
  if (result.messages.length) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatLastMessageId)(global, chatId, result.messages[0].id, 'saved');
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addChatListIds)(global, 'saved', [chatId]);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  } else {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.removeChatFromChatLists)(global, chatId, 'saved');
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    Object.values(global.byTabId).forEach(({
      id: tabId
    }) => {
      const currentMessageList = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, tabId);
      if (!currentMessageList) return;
      const {
        chatId: tabChatId,
        threadId
      } = currentMessageList;
      if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsChatWithSelf)(global, tabChatId) && threadId === chatId) {
        actions.openChat({
          id: undefined,
          tabId
        });
      }
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateChatMutedState', (global, actions, payload) => {
  const {
    chatId,
    isMuted
  } = payload;
  let {
    mutedUntil
  } = payload;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) {
    actions.openFrozenAccountModal({
      tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
    });
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  if (isMuted && !mutedUntil) {
    mutedUntil = _config__WEBPACK_IMPORTED_MODULE_2__.MAX_INT_32;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updateChatNotifySettings', {
    chat,
    settings: {
      mutedUntil
    }
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateChatSilentPosting', (global, actions, payload) => {
  const {
    chatId,
    isEnabled
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updateChatNotifySettings', {
    chat,
    settings: {
      isSilentPosting: isEnabled
    }
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateTopicMutedState', (global, actions, payload) => {
  const {
    chatId,
    topicId,
    isMuted,
    mutedUntil
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updateTopicMutedState', {
    chat,
    topicId,
    isMuted,
    mutedUntil
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('createChannel', async (global, actions, payload) => {
  const {
    title,
    about,
    photo,
    memberIds,
    discussionChannelId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const isChannel = 'isChannel' in payload ? payload.isChannel : undefined;
  const isSuperGroup = 'isSuperGroup' in payload ? payload.isSuperGroup : undefined;
  const users = memberIds?.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, id)).filter(Boolean);
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    chatCreation: {
      progress: _types__WEBPACK_IMPORTED_MODULE_1__.ChatCreationProgress.InProgress
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  let createdChannel;
  let missingInvitedUsers;
  try {
    const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('createChannel', {
      title,
      about,
      users,
      isBroadcast: isChannel,
      isMegagroup: isSuperGroup
    });
    createdChannel = result?.channel;
    missingInvitedUsers = result?.missingUsers;
  } catch (error) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      chatCreation: {
        progress: _types__WEBPACK_IMPORTED_MODULE_1__.ChatCreationProgress.Error
      }
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    if (error.message === 'CHANNELS_TOO_MUCH') {
      actions.openLimitReachedModal({
        limit: 'channels',
        tabId
      });
    } else {
      actions.showDialog({
        data: {
          ...error,
          hasErrorKey: true
        },
        tabId
      });
    }
  }
  if (!createdChannel) {
    return;
  }
  const {
    id: channelId,
    accessHash
  } = createdChannel;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, channelId, createdChannel);
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    chatCreation: {
      ...(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).chatCreation,
      progress: createdChannel ? _types__WEBPACK_IMPORTED_MODULE_1__.ChatCreationProgress.Complete : _types__WEBPACK_IMPORTED_MODULE_1__.ChatCreationProgress.Error
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  if (discussionChannelId && channelId) {
    actions.linkDiscussionGroup({
      channelId: discussionChannelId,
      chatId: channelId,
      tabId
    });
  }
  actions.openChat({
    id: channelId,
    shouldReplaceHistory: true,
    tabId
  });
  if (missingInvitedUsers) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateMissingInvitedUsers)(global, channelId, missingInvitedUsers, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
  if (channelId && accessHash && photo) {
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatPhoto', {
      chatId: channelId,
      accessHash,
      photo
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('joinChannel', async (global, actions, payload) => {
  const {
    chatId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  const {
    id: channelId,
    accessHash
  } = chat;
  if (!(channelId && accessHash)) {
    return;
  }
  try {
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('joinChannel', {
      channelId,
      accessHash
    });
  } catch (error) {
    if (error.message === 'CHANNELS_TOO_MUCH') {
      actions.openLimitReachedModal({
        limit: 'channels',
        tabId
      });
    } else {
      actions.showDialog({
        data: {
          ...error,
          hasErrorKey: true
        },
        tabId
      });
    }
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('deleteChatUser', (global, actions, payload) => {
  const {
    chatId,
    userId,
    shouldRevokeHistory,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, userId);
  if (!chat || !user) {
    return;
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.leaveChat)(global, chatId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, tabId)?.chatId === chatId) {
    actions.openChat({
      id: undefined,
      tabId
    });
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('deleteChatUser', {
    chat,
    user,
    shouldRevokeHistory
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('deleteChat', (global, actions, payload) => {
  const {
    chatId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.leaveChat)(global, chatId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, tabId)?.chatId === chatId) {
    actions.openChat({
      id: undefined,
      tabId
    });
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('deleteChat', {
    chatId: chat.id
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('leaveChannel', async (global, actions, payload) => {
  const {
    chatId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.leaveChat)(global, chatId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, tabId)?.chatId === chatId) {
    actions.openChat({
      id: undefined,
      tabId
    });
  }
  const {
    id: channelId,
    accessHash
  } = chat;
  if (channelId && accessHash) {
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('leaveChannel', {
      channelId,
      accessHash
    });
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    const chatMessages = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatMessages)(global, chatId);
    const localMessageIds = Object.keys(chatMessages).map(Number).filter(_util_keys_messageKey__WEBPACK_IMPORTED_MODULE_10__.isLocalMessageId);
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.deleteChatMessages)(global, chatId, localMessageIds);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('deleteChannel', (global, actions, payload) => {
  const {
    chatId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.leaveChat)(global, chatId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, tabId)?.chatId === chatId) {
    actions.openChat({
      id: undefined,
      tabId
    });
  }
  const {
    id: channelId,
    accessHash
  } = chat;
  if (channelId && accessHash) {
    void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('deleteChannel', {
      channelId,
      accessHash
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('createGroupChat', async (global, actions, payload) => {
  const {
    title,
    memberIds,
    photo,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const users = memberIds.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, id)).filter(Boolean);
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    chatCreation: {
      progress: _types__WEBPACK_IMPORTED_MODULE_1__.ChatCreationProgress.InProgress
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  try {
    const {
      chat: createdChat,
      missingUsers
    } = (await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('createGroupChat', {
      title,
      users
    })) ?? {};
    if (!createdChat) {
      return;
    }
    const {
      id: chatId
    } = createdChat;
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chatId, createdChat);
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      chatCreation: {
        ...(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).chatCreation,
        progress: createdChat ? _types__WEBPACK_IMPORTED_MODULE_1__.ChatCreationProgress.Complete : _types__WEBPACK_IMPORTED_MODULE_1__.ChatCreationProgress.Error
      }
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    actions.openChat({
      id: chatId,
      shouldReplaceHistory: true,
      tabId
    });
    if (missingUsers) {
      global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
      global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateMissingInvitedUsers)(global, chatId, missingUsers, tabId);
      (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    }
    if (chatId && photo) {
      await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatPhoto', {
        chatId,
        photo
      });
    }
  } catch (err) {
    if (err.message === 'USERS_TOO_FEW') {
      global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
      global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
        chatCreation: {
          ...(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).chatCreation,
          progress: _types__WEBPACK_IMPORTED_MODULE_1__.ChatCreationProgress.Error,
          error: 'CreateGroupError'
        }
      }, tabId);
      (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    }
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleChatPinned', (global, actions, payload) => {
  const {
    id,
    folderId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) {
    actions.openFrozenAccountModal({
      tabId
    });
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (!chat) {
    return;
  }
  const limit = (0,_selectors_limits__WEBPACK_IMPORTED_MODULE_22__.selectCurrentLimit)(global, 'dialogFolderPinned');
  if (folderId) {
    const folder = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, folderId);
    if (folder) {
      const shouldBePinned = !(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsChatPinned)(global, id, folderId);
      const {
        pinnedChatIds,
        includedChatIds
      } = folder;
      const newPinnedIds = shouldBePinned ? [id, ...(pinnedChatIds || [])] : (pinnedChatIds || []).filter(pinnedId => pinnedId !== id);

      // With both Pin and Unpin we need to re-add a user to the included group
      const newIncludedChatIds = [id, ...includedChatIds];
      void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatFolder', {
        id: folderId,
        folderUpdate: {
          ...folder,
          pinnedChatIds: newPinnedIds,
          includedChatIds: newIncludedChatIds
        }
      });
    }
  } else {
    const listType = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatListType)(global, id);
    const isPinned = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsChatPinned)(global, id, listType === 'archived' ? _config__WEBPACK_IMPORTED_MODULE_2__.ARCHIVED_FOLDER_ID : undefined);
    const ids = global.chats.orderedPinnedIds[listType === 'archived' ? 'archived' : 'active'];
    if ((ids?.length || 0) >= limit && !isPinned) {
      actions.openLimitReachedModal({
        limit: 'dialogFolderPinned',
        tabId
      });
      return;
    }
    void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleChatPinned', {
      chat,
      shouldBePinned: !isPinned
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleChatArchived', (global, actions, payload) => {
  const {
    id
  } = payload;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) {
    actions.openFrozenAccountModal({
      tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
    });
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (chat) {
    void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleChatArchived', {
      chat,
      folderId: (0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatArchived)(chat) ? 0 : _config__WEBPACK_IMPORTED_MODULE_2__.ARCHIVED_FOLDER_ID
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleSavedDialogPinned', (global, actions, payload) => {
  const {
    id,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) {
    actions.openFrozenAccountModal({
      tabId
    });
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (!chat) {
    return;
  }
  const limit = (0,_selectors_limits__WEBPACK_IMPORTED_MODULE_22__.selectCurrentLimit)(global, 'savedDialogsPinned');
  const isPinned = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsChatPinned)(global, id, _config__WEBPACK_IMPORTED_MODULE_2__.SAVED_FOLDER_ID);
  const ids = global.chats.orderedPinnedIds.saved;
  if ((ids?.length || 0) >= limit && !isPinned) {
    actions.openLimitReachedModal({
      limit: 'savedDialogsPinned',
      tabId
    });
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleSavedDialogPinned', {
    chat,
    shouldBePinned: !isPinned
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadChatFolders', async global => {
  const chatFolders = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChatFolders');
  if (chatFolders) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = {
      ...global,
      chatFolders: {
        ...global.chatFolders,
        ...chatFolders
      }
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadRecommendedChatFolders', async global => {
  const recommendedChatFolders = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchRecommendedChatFolders');
  if (recommendedChatFolders) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = {
      ...global,
      chatFolders: {
        ...global.chatFolders,
        recommended: recommendedChatFolders
      }
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('editChatFolders', (global, actions, payload) => {
  const {
    chatId,
    idsToRemove,
    idsToAdd,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const limit = (0,_selectors_limits__WEBPACK_IMPORTED_MODULE_22__.selectCurrentLimit)(global, 'dialogFiltersChats');
  const isLimitReached = idsToAdd.some(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, id).includedChatIds.length >= limit);
  if (isLimitReached) {
    actions.openLimitReachedModal({
      limit: 'dialogFiltersChats',
      tabId
    });
    return;
  }
  idsToRemove.forEach(id => {
    const folder = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, id);
    if (folder) {
      (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatFolder', {
        id,
        folderUpdate: {
          ...folder,
          pinnedChatIds: folder.pinnedChatIds?.filter(pinnedId => pinnedId !== chatId),
          includedChatIds: folder.includedChatIds.filter(includedId => includedId !== chatId)
        }
      });
    }
  });
  idsToAdd.forEach(id => {
    const folder = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, id);
    if (folder) {
      (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatFolder', {
        id,
        folderUpdate: {
          ...folder,
          includedChatIds: folder.includedChatIds.concat(chatId)
        }
      });
    }
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('editChatFolder', (global, actions, payload) => {
  const {
    id,
    folderUpdate
  } = payload;
  const folder = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, id);
  if (folder) {
    void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatFolder', {
      id,
      folderUpdate: {
        id,
        emoticon: folder.emoticon,
        pinnedChatIds: folder.pinnedChatIds,
        ...folderUpdate
      }
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('addChatFolder', async (global, actions, payload) => {
  const {
    folder,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const {
    orderedIds,
    byId
  } = global.chatFolders;
  const limit = (0,_selectors_limits__WEBPACK_IMPORTED_MODULE_22__.selectCurrentLimit)(global, 'dialogFilters');
  if (Object.keys(byId).length >= limit) {
    actions.openLimitReachedModal({
      limit: 'dialogFilters',
      tabId
    });
    return;
  }
  const maxId = Math.max(...(orderedIds || []), _config__WEBPACK_IMPORTED_MODULE_2__.ARCHIVED_FOLDER_ID);

  // Clear fields from recommended folders
  const {
    id: recommendedId,
    description,
    ...newFolder
  } = folder;
  const newId = maxId + 1;
  const folderUpdate = {
    id: newId,
    ...newFolder
  };
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatFolder', {
    id: newId,
    folderUpdate
  });

  // Update called from the above `callApi` is throttled, but we need to apply changes immediately
  actions.apiUpdate({
    '@type': 'updateChatFolder',
    id: newId,
    folder: folderUpdate
  });
  actions.requestNextFoldersAction({
    foldersAction: {
      type: 'setFolderId',
      payload: maxId + 1
    },
    tabId
  });
  if (!description) {
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const {
    recommended
  } = global.chatFolders;
  if (recommended) {
    global = {
      ...global,
      chatFolders: {
        ...global.chatFolders,
        recommended: recommended.filter(({
          id
        }) => id !== recommendedId)
      }
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('sortChatFolders', async (global, actions, payload) => {
  const {
    folderIds
  } = payload;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('sortChatFolders', folderIds);
  if (result) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = {
      ...global,
      chatFolders: {
        ...global.chatFolders,
        orderedIds: folderIds
      }
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('deleteChatFolder', async (global, actions, payload) => {
  const {
    id
  } = payload;
  const folder = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, id);
  if (folder) {
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('deleteChatFolder', id);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('markChatUnread', (global, actions, payload) => {
  const {
    id
  } = payload;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) {
    actions.openFrozenAccountModal({
      tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
    });
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (!chat) return;
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleDialogUnread', {
    chat,
    hasUnreadMark: !chat.hasUnreadMark
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('markChatMessagesRead', async (global, actions, payload) => {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return;
  const {
    id
  } = payload;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) {
    actions.openFrozenAccountModal({
      tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
    });
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (!chat) return;
  if (!chat.isForum) {
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('markMessageListRead', {
      chat,
      threadId: _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID
    });
    actions.readAllMentions({
      chatId: id
    });
    actions.readAllReactions({
      chatId: id
    });
    if (chat.hasUnreadMark) {
      actions.markChatRead({
        id
      });
    }
    return;
  }
  let hasMoreTopics = true;
  let lastTopic;
  let processedCount = 0;
  while (hasMoreTopics) {
    const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchTopics', {
      chat,
      offsetDate: lastTopic?.date,
      offsetTopicId: lastTopic?.id,
      offsetId: lastTopic?.lastMessageId,
      limit: 100
    });
    if (!result?.topics?.length) return;
    result.topics.forEach(topic => {
      if (!topic.unreadCount && !topic.unreadMentionsCount && !topic.unreadReactionsCount) return;
      actions.markTopicRead({
        chatId: id,
        topicId: topic.id
      });
    });
    lastTopic = result.topics[result.topics.length - 1];
    processedCount += result.topics.length;
    if (result.count <= processedCount) {
      hasMoreTopics = false;
    }
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('markChatRead', (global, actions, payload) => {
  const {
    id
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (!chat) return;
  (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleDialogUnread', {
    chat,
    hasUnreadMark: !chat.hasUnreadMark
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('markTopicRead', (global, actions, payload) => {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return;
  const {
    chatId,
    topicId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  const topic = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopic)(global, chatId, topicId);
  const lastTopicMessageId = topic?.lastMessageId;
  if (!lastTopicMessageId) return;
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('markMessageListRead', {
    chat,
    threadId: topicId,
    maxId: lastTopicMessageId
  });
  actions.readAllMentions({
    chatId,
    threadId: topicId
  });
  actions.readAllReactions({
    chatId,
    threadId: topicId
  });
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateTopic)(global, chatId, topicId, {
    unreadCount: 0
  });
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateThreadInfo)(global, chatId, topicId, {
    lastReadInboxMessageId: lastTopicMessageId
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('checkChatInvite', async (global, actions, payload) => {
  const {
    hash,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('checkChatInvite', hash);
  if (!result) {
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  if (result.users) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addUsers)(global, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)(result.users, 'id'));
  }
  if (result.chat) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addChats)(global, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)([result.chat], 'id'));
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    actions.openChat({
      id: result.chat.id,
      tabId
    });
    return;
  }
  if (result.invite.subscriptionFormId) {
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      starsPayment: {
        inputInvoice: {
          type: 'chatInviteSubscription',
          hash
        },
        subscriptionInfo: result.invite,
        status: 'pending'
      }
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    return;
  }
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    chatInviteModal: {
      hash,
      inviteInfo: result.invite
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openChatByPhoneNumber', async (global, actions, payload) => {
  const {
    phoneNumber,
    startAttach,
    attach,
    text,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;

  // Open temporary empty chat to make the click response feel faster
  actions.openChat({
    id: _config__WEBPACK_IMPORTED_MODULE_2__.TMP_CHAT_ID,
    tabId
  });
  const chat = await fetchChatByPhoneNumber(global, phoneNumber);
  if (!chat) {
    actions.openPreviousChat({
      tabId
    });
    actions.showNotification({
      message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__.oldTranslate('lng_username_by_phone_not_found').replace('{phone}', phoneNumber),
      tabId
    });
    return;
  }
  if (text) {
    actions.openChatWithDraft({
      chatId: chat.id,
      text: {
        text
      },
      tabId
    });
  } else {
    actions.openChat({
      id: chat.id,
      tabId
    });
  }
  if (attach) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    openAttachMenuFromLink(global, actions, chat.id, attach, startAttach, tabId);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openTelegramLink', async (global, actions, payload) => {
  const {
    url,
    shouldIgnoreCache,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const {
    openChatByPhoneNumber,
    checkChatInvite,
    openStickerSet,
    openChatWithDraft,
    joinVoiceChatByLink,
    openInvoice,
    checkChatlistInvite,
    openChatByUsername: openChatByUsernameAction,
    openStoryViewerByUsername,
    checkGiftCode
  } = actions;
  if ((0,_util_deepLinkParser__WEBPACK_IMPORTED_MODULE_5__.isDeepLink)(url)) {
    const isProcessed = (0,_util_deeplink__WEBPACK_IMPORTED_MODULE_4__.processDeepLink)(url);
    if (isProcessed || url.match(_config__WEBPACK_IMPORTED_MODULE_2__.RE_TG_LINK)) {
      return;
    }
  }
  const uri = new URL(url.toLowerCase().startsWith('http') ? url : `https://${url}`);
  if (_config__WEBPACK_IMPORTED_MODULE_2__.TME_WEB_DOMAINS.has(uri.hostname) && uri.pathname === '/') {
    window.open(uri.toString(), '_blank', 'noopener');
    return;
  }
  const hostname = _config__WEBPACK_IMPORTED_MODULE_2__.TME_WEB_DOMAINS.has(uri.hostname) ? 't.me' : uri.hostname;
  const hostParts = hostname.split('.');
  if (hostParts.length > 3) return;
  const adaptedPathname = uri.pathname.replace(/^\/?s\//, '');
  const pathname = hostParts.length === 3 ? `${hostParts[0]}/${adaptedPathname}` : adaptedPathname;
  const [part1, part2, part3] = pathname.split('/').filter(Boolean).map(part => decodeURI(part));
  const params = Object.fromEntries(uri.searchParams);
  let hash;
  if (part1 === 'joinchat') {
    hash = part2;
  }
  const storyId = part2 === 's' && (Number(part3) || undefined);
  if (part1.match(/^\+([0-9]+)(\?|$)/)) {
    openChatByPhoneNumber({
      phoneNumber: part1.substr(1, part1.length - 1),
      startAttach: params.startattach,
      attach: params.attach,
      text: params.text,
      tabId
    });
    return;
  }
  if (storyId) {
    openStoryViewerByUsername({
      username: part1,
      storyId,
      tabId
    });
    return;
  }
  if (part1.startsWith(' ') || part1.startsWith('+')) {
    hash = part1.substr(1, part1.length - 1);
  }
  if (hash) {
    checkChatInvite({
      hash,
      tabId
    });
    return;
  }
  if (part1 === 'addstickers' || part1 === 'addemoji') {
    openStickerSet({
      stickerSetInfo: {
        shortName: part2
      },
      shouldIgnoreCache,
      tabId
    });
    return;
  }
  if (part1 === 'share') {
    const text = (0,_util_deeplink__WEBPACK_IMPORTED_MODULE_4__.formatShareText)(params.url, params.text);
    openChatWithDraft({
      text,
      tabId
    });
    return;
  }
  if (part1 === 'addlist') {
    const slug = part2;
    checkChatlistInvite({
      slug,
      tabId
    });
    return;
  }
  if (part1 === 'giftcode') {
    const slug = part2;
    checkGiftCode({
      slug,
      tabId
    });
    return;
  }
  const chatOrChannelPostId = part2 || undefined;
  const messageId = part3 ? Number(part3) : undefined;
  const commentId = params.comment ? Number(params.comment) : undefined;
  const isWebApp = await checkWebAppExists(global, part1, part2);
  const shouldTryOpenChat = part1 && !part2 || Number.isInteger(Number(part2)) || isWebApp;
  if (params.hasOwnProperty('voicechat') || params.hasOwnProperty('livestream')) {
    joinVoiceChatByLink({
      username: part1,
      inviteHash: params.voicechat || params.livestream,
      tabId
    });
  } else if (part1.startsWith('$')) {
    openInvoice({
      type: 'slug',
      slug: part1.substring(1),
      tabId
    });
  } else if (part1 === 'invoice') {
    openInvoice({
      type: 'slug',
      slug: part2,
      tabId
    });
  } else if (shouldTryOpenChat) {
    openChatByUsernameAction({
      username: part1,
      messageId: messageId || Number(chatOrChannelPostId),
      threadId: messageId ? Number(chatOrChannelPostId) : undefined,
      commentId,
      startParam: params.start,
      startAttach: params.startattach,
      attach: params.attach,
      startApp: params.startapp,
      mode: params.mode,
      originalParts: [part1, part2, part3],
      tabId
    });
  } else {
    actions.openUrl({
      url,
      shouldSkipModal: true,
      tabId,
      ignoreDeepLinks: true
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('processBoostParameters', async (global, actions, payload) => {
  const {
    usernameOrId,
    isPrivate,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  let chat;
  if (isPrivate) {
    chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, usernameOrId);
    if (!chat) {
      actions.showNotification({
        message: {
          key: 'PrivateChannelInaccessible'
        },
        tabId
      });
      return;
    }
  } else {
    chat = await fetchChatByUsername(global, usernameOrId);
    if (!chat) {
      actions.showNotification({
        message: {
          key: 'NoUsernameFound'
        },
        tabId
      });
      return;
    }
  }
  if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatChannel)(chat) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatSuperGroup)(chat)) {
    actions.openChat({
      id: chat.id,
      tabId
    });
    return;
  }
  actions.openBoostModal({
    chatId: chat.id,
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('acceptChatInvite', async (global, actions, payload) => {
  const {
    hash,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('importChatInvite', {
    hash
  });
  if (!result) {
    return;
  }
  actions.openChat({
    id: result.id,
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openChatByUsername', async (global, actions, payload) => {
  const {
    username,
    messageId,
    commentId,
    startParam,
    startAttach,
    attach,
    threadId,
    originalParts,
    startApp,
    mode,
    text,
    onChatChanged,
    choose,
    ref,
    timestamp,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentChat)(global, tabId);
  const webAppName = originalParts?.[1];
  const isWebApp = webAppName && !Number(webAppName) && !originalParts?.[2];
  if (!commentId) {
    if (startAttach === undefined && messageId && !startParam && !ref && chat?.usernames?.some(c => c.username === username)) {
      actions.focusMessage({
        chatId: chat.id,
        threadId,
        messageId,
        timestamp,
        tabId
      });
      return;
    }
    if (startAttach !== undefined && choose) {
      actions.processAttachBotParameters({
        username,
        filter: choose,
        startParam: startAttach || startApp,
        tabId
      });
      return;
    }
    if (startApp !== undefined && !webAppName) {
      const theme = (0,_util_themeStyle__WEBPACK_IMPORTED_MODULE_13__.extractCurrentThemeParams)();
      const chatByUsername = await fetchChatByUsername(global, username);
      global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
      const user = chatByUsername && (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, chatByUsername.id);
      if (!chatByUsername || !chat || !user?.hasMainMiniApp) return;
      actions.requestMainWebView({
        botId: chatByUsername.id,
        peerId: chat.id,
        theme,
        startParam: startApp,
        mode,
        tabId
      });
      return;
    }
    if (!isWebApp) {
      await openChatByUsername(global, actions, {
        username,
        threadId,
        channelPostId: messageId,
        startParam,
        ref,
        startAttach,
        attach,
        text,
        timestamp
      }, tabId);
      if (onChatChanged) {
        // @ts-ignore
        actions[onChatChanged.action](onChatChanged.payload);
      }
      return;
    }
  }
  const usernameChat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatByUsername)(global, username);
  if (commentId && messageId && usernameChat) {
    actions.openThread({
      isComments: true,
      originChannelId: usernameChat.id,
      originMessageId: messageId,
      tabId,
      focusMessageId: commentId
    });
    if (timestamp) {
      actions.openMediaFromTimestamp({
        chatId: usernameChat.id,
        messageId: commentId,
        timestamp,
        tabId
      });
    }
    return;
  }
  if (!isWebApp) actions.openChat({
    id: _config__WEBPACK_IMPORTED_MODULE_2__.TMP_CHAT_ID,
    tabId
  });
  const chatByUsername = await fetchChatByUsername(global, username);
  if (!chatByUsername) return;
  if (isWebApp && chatByUsername) {
    const theme = (0,_util_themeStyle__WEBPACK_IMPORTED_MODULE_13__.extractCurrentThemeParams)();
    actions.requestAppWebView({
      appName: webAppName,
      botId: chatByUsername.id,
      tabId,
      startApp,
      mode,
      theme
    });
    return;
  }
  if (!messageId) return;
  actions.openThread({
    isComments: true,
    originChannelId: chatByUsername.id,
    originMessageId: messageId,
    tabId,
    focusMessageId: commentId
  });
  if (timestamp) {
    actions.openMediaFromTimestamp({
      chatId: chatByUsername.id,
      messageId: commentId || messageId,
      timestamp,
      tabId
    });
  }
  if (onChatChanged) {
    // @ts-ignore
    actions[onChatChanged.action](onChatChanged.payload);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openPrivateChannel', (global, actions, payload) => {
  const {
    id,
    commentId,
    messageId,
    threadId,
    timestamp,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, id);
  if (!chat) {
    actions.showNotification({
      message: {
        key: 'PrivateChannelInaccessible'
      },
      tabId
    });
    return;
  }
  if (!commentId && !messageId && !threadId) {
    actions.openChat({
      id,
      tabId
    });
    return;
  }
  if (timestamp) {
    actions.openMediaFromTimestamp({
      chatId: id,
      messageId: commentId || messageId,
      timestamp,
      tabId
    });
  }
  if (commentId && messageId) {
    actions.openThread({
      isComments: true,
      originChannelId: id,
      originMessageId: messageId,
      tabId,
      focusMessageId: commentId
    });
    return;
  }
  openChatWithParams(global, actions, chat, {
    messageId,
    threadId,
    timestamp
  }, tabId);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('togglePreHistoryHidden', async (global, actions, payload) => {
  const {
    chatId,
    isEnabled,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = await ensureIsSuperGroup(global, actions, chatId, tabId);
  if (!chat) {
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatFullInfo)(global, chat.id, {
    isPreHistoryHidden: isEnabled
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('togglePreHistoryHidden', {
    chat,
    isEnabled
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateChatDefaultBannedRights', (global, actions, payload) => {
  const {
    chatId,
    bannedRights
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updateChatDefaultBannedRights', {
    chat,
    bannedRights
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateChatMemberBannedRights', async (global, actions, payload) => {
  const {
    chatId,
    userId,
    bannedRights,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, userId);
  if (!user) {
    return;
  }
  const chat = await ensureIsSuperGroup(global, actions, chatId, tabId);
  if (!chat) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updateChatMemberBannedRights', {
    chat,
    user,
    bannedRights
  });
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const updatedFullInfo = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFullInfo)(global, chat.id);
  if (!updatedFullInfo) {
    return;
  }
  const {
    members,
    kickedMembers
  } = updatedFullInfo;
  const isBanned = Boolean(bannedRights.viewMessages);
  const isUnblocked = !Object.keys(bannedRights).length;
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatFullInfo)(global, chat.id, {
    ...(members && isBanned && {
      members: members.filter(m => m.userId !== userId)
    }),
    ...(members && !isBanned && {
      members: members.map(m => m.userId === userId ? {
        ...m,
        bannedRights
      } : m)
    }),
    ...(isUnblocked && kickedMembers && {
      kickedMembers: kickedMembers.filter(m => m.userId !== userId)
    })
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateChatAdmin', async (global, actions, payload) => {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return;
  const {
    chatId,
    userId,
    adminRights,
    customTitle,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, userId);
  if (!user) {
    return;
  }
  const chat = await ensureIsSuperGroup(global, actions, chatId, tabId);
  if (!chat) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updateChatAdmin', {
    chat,
    user,
    adminRights,
    customTitle
  });
  const chatAfterUpdate = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchFullChat', chat);
  if (!chatAfterUpdate?.fullInfo) {
    return;
  }
  const {
    adminMembersById
  } = chatAfterUpdate.fullInfo;
  const isDismissed = !Object.keys(adminRights).length;
  let newAdminMembersById;
  if (adminMembersById) {
    if (isDismissed) {
      const {
        [userId]: remove,
        ...rest
      } = adminMembersById;
      newAdminMembersById = rest;
    } else {
      newAdminMembersById = {
        ...adminMembersById,
        [userId]: {
          ...adminMembersById[userId],
          adminRights,
          customTitle
        }
      };
    }
  }
  if (newAdminMembersById) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatFullInfo)(global, chat.id, {
      adminMembersById: newAdminMembersById
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateChat', async (global, actions, payload) => {
  const {
    chatId,
    title,
    about,
    photo,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  const fullInfo = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFullInfo)(global, chatId);
  if (!chat) {
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateManagementProgress)(global, _types__WEBPACK_IMPORTED_MODULE_1__.ManagementProgress.InProgress, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  await Promise.all([chat.title !== title ? (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updateChatTitle', chat, title) : undefined, fullInfo?.about !== about ? (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updateChatAbout', chat, about) : undefined, photo ? (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatPhoto', {
    chatId,
    accessHash: chat.accessHash,
    photo
  }) : undefined]);
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateManagementProgress)(global, _types__WEBPACK_IMPORTED_MODULE_1__.ManagementProgress.Complete, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  if (photo) {
    actions.loadFullChat({
      chatId,
      withPhotos: true
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateChatPhoto', async (global, actions, payload) => {
  const {
    photo,
    chatId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatPhoto', {
    chatId,
    accessHash: chat.accessHash,
    photo
  });
  actions.loadFullChat({
    chatId,
    withPhotos: true
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('deleteChatPhoto', async (global, actions, payload) => {
  const {
    photo,
    chatId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  let isDeleted;
  if (photo.id === chat.avatarPhotoId) {
    isDeleted = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatPhoto', {
      chatId,
      accessHash: chat.accessHash
    });
  } else {
    isDeleted = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('deleteProfilePhotos', [photo]);
  }
  if (!isDeleted) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.deletePeerPhoto)(global, chatId, photo.id);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  actions.loadFullChat({
    chatId,
    withPhotos: true
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleSignatures', (global, actions, payload) => {
  const {
    chatId,
    areProfilesEnabled,
    areSignaturesEnabled
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleSignatures', {
    chat,
    areProfilesEnabled,
    areSignaturesEnabled
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadGroupsForDiscussion', async global => {
  const groups = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchGroupsForDiscussion');
  if (!groups) {
    return;
  }
  const addedById = groups.reduce((result, group) => {
    if (group && !group.isForum) {
      result[group.id] = group;
    }
    return result;
  }, {});
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = {
    ...global,
    chats: {
      ...global.chats,
      forDiscussionIds: Object.keys(addedById)
    }
  };
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('linkDiscussionGroup', async (global, actions, payload) => {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return;
  const {
    channelId,
    chatId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload || {};
  const channel = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, channelId);
  if (!channel) {
    return;
  }
  const chat = await ensureIsSuperGroup(global, actions, chatId, tabId);
  if (!chat) return;
  let fullInfo = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFullInfo)(global, chat.id);
  if (!fullInfo) {
    const fullChat = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchFullChat', chat);
    if (!fullChat) {
      return;
    }
    fullInfo = fullChat.fullInfo;
  }
  if (fullInfo.isPreHistoryHidden) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatFullInfo)(global, chat.id, {
      isPreHistoryHidden: false
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('togglePreHistoryHidden', {
      chat,
      isEnabled: false
    });
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('setDiscussionGroup', {
    channel,
    chat
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('unlinkDiscussionGroup', async (global, actions, payload) => {
  const {
    channelId
  } = payload;
  const channel = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, channelId);
  if (!channel) {
    return;
  }
  const fullInfo = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFullInfo)(global, channelId);
  let chat;
  if (fullInfo?.linkedChatId) {
    chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, fullInfo.linkedChatId);
  }
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('setDiscussionGroup', {
    channel
  });
  if (chat) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    loadFullChat(global, actions, chat);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('setActiveChatFolder', (global, actions, payload) => {
  const {
    activeChatFolder,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const maxFolders = (0,_selectors_limits__WEBPACK_IMPORTED_MODULE_22__.selectCurrentLimit)(global, 'dialogFilters');
  const isBlocked = activeChatFolder + 1 > maxFolders;
  if (isBlocked) {
    actions.openLimitReachedModal({
      limit: 'dialogFilters',
      tabId
    });
    return undefined;
  }
  return (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    activeChatFolder
  }, tabId);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('resetOpenChatWithDraft', (global, actions, payload) => {
  const {
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload || {};
  return (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    requestedDraft: undefined
  }, tabId);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadMoreMembers', async (global, actions, payload) => {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return;
  const {
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload || {};
  const {
    chatId
  } = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentMessageList)(global, tabId) || {};
  const chat = chatId ? (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId) : undefined;
  if (!chat || (0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatBasicGroup)(chat)) {
    return;
  }
  const offset = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFullInfo)(global, chat.id)?.members?.length;
  if (offset !== undefined && chat.membersCount !== undefined && offset >= chat.membersCount) return;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchMembers', {
    chat,
    offset
  });
  if (!result) {
    return;
  }
  const {
    members,
    userStatusesById
  } = result;
  if (!members || !members.length) {
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addUserStatuses)(global, userStatusesById);
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addChatMembers)(global, chat, members);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('addChatMembers', async (global, actions, payload) => {
  const {
    chatId,
    memberIds,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  const users = memberIds.map(userId => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, userId)).filter(Boolean);
  if (!chat || !users.length) {
    return;
  }
  actions.setNewChatMembersDialogState({
    newChatMembersProgress: _types__WEBPACK_IMPORTED_MODULE_1__.NewChatMembersProgress.Loading,
    tabId
  });
  const missingUsers = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('addChatMembers', chat, users);
  if (missingUsers) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateMissingInvitedUsers)(global, chatId, missingUsers, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
  actions.setNewChatMembersDialogState({
    newChatMembersProgress: _types__WEBPACK_IMPORTED_MODULE_1__.NewChatMembersProgress.Closed,
    tabId
  });
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  loadFullChat(global, actions, chat);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('deleteChatMember', async (global, actions, payload) => {
  const {
    chatId,
    userId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, userId);
  if (!chat || !user) {
    return;
  }
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('deleteChatMember', chat, user);
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  loadFullChat(global, actions, chat);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleIsProtected', (global, actions, payload) => {
  const {
    chatId,
    isProtected
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleIsProtected', {
    chat,
    isProtected
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('setChatEnabledReactions', async (global, actions, payload) => {
  const {
    chatId,
    enabledReactions,
    reactionsLimit
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('setChatEnabledReactions', {
    chat,
    enabledReactions,
    reactionsLimit
  });
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  void loadFullChat(global, actions, chat);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('fetchChat', (global, actions, payload) => {
  const {
    chatId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (chat) {
    return;
  }
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsChatWithSelf)(global, chatId)) {
    void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChat', {
      type: 'self'
    });
  } else {
    const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, chatId);
    if (user) {
      void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChat', {
        type: 'user',
        user
      });
    }
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleJoinToSend', async (global, actions, payload) => {
  const {
    chatId,
    isEnabled
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatSuperGroup)(chat) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatChannel)(chat)) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleJoinToSend', chat, isEnabled);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleJoinRequest', async (global, actions, payload) => {
  const {
    chatId,
    isEnabled
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatSuperGroup)(chat) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatChannel)(chat)) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleJoinRequest', chat, isEnabled);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openForumPanel', (global, actions, payload) => {
  const {
    chatId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  actions.toggleStoryRibbon({
    isShown: false,
    tabId
  });
  actions.toggleStoryRibbon({
    isShown: false,
    isArchived: true,
    tabId
  });
  return (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    forumPanelChatId: chatId
  }, tabId);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('closeForumPanel', (global, actions, payload) => {
  const {
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload || {};
  return (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    forumPanelChatId: undefined
  }, tabId);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('processAttachBotParameters', async (global, actions, payload) => {
  const {
    username,
    filter,
    startParam,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const bot = await getAttachBotOrNotify(global, actions, username, tabId);
  if (!bot) return;
  const isForChat = Boolean(filter);
  if (!isForChat) {
    actions.callAttachBot({
      isFromSideMenu: true,
      bot,
      startParam,
      tabId
    });
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const {
    attachMenu: {
      bots
    }
  } = global;
  if (!bots[bot.id]) {
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      requestedAttachBotInstall: {
        bot,
        onConfirm: {
          action: 'requestAttachBotInChat',
          payload: {
            bot,
            filter,
            startParam
          }
        }
      }
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    return;
  }
  actions.requestAttachBotInChat({
    bot,
    filter,
    startParam,
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadTopics', async (global, actions, payload) => {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return;
  const {
    chatId,
    force
  } = payload;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) {
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  const topicsInfo = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopicsInfo)(global, chatId);
  if (!force && topicsInfo?.listedTopicIds && topicsInfo.listedTopicIds.length === topicsInfo.totalCount) {
    return;
  }
  const offsetTopic = !force ? topicsInfo?.listedTopicIds?.reduce((acc, el) => {
    const topic = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopic)(global, chatId, el);
    const accTopic = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopic)(global, chatId, acc);
    if (!topic) return acc;
    if (!accTopic || topic.lastMessageId < accTopic.lastMessageId) {
      return el;
    }
    return acc;
  }) : undefined;
  const {
    id: offsetTopicId,
    date: offsetDate,
    lastMessageId: offsetId
  } = offsetTopic && (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopic)(global, chatId, offsetTopic) || {};
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchTopics', {
    chat,
    offsetTopicId,
    offsetId,
    offsetDate,
    limit: offsetTopicId ? _config__WEBPACK_IMPORTED_MODULE_2__.TOPICS_SLICE : _config__WEBPACK_IMPORTED_MODULE_2__.TOPICS_SLICE_SECOND_LOAD
  });
  if (!result) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addMessages)(global, result.messages);
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateTopics)(global, chatId, result.count, result.topics);
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateListedTopicIds)(global, chatId, result.topics.map(topic => topic.id));
  Object.entries(result.draftsById || {}).forEach(([threadId, draft]) => {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceThreadParam)(global, chatId, Number(threadId), 'draft', draft);
  });
  Object.entries(result.readInboxMessageIdByTopicId || {}).forEach(([topicId, messageId]) => {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateThreadInfo)(global, chatId, Number(topicId), {
      lastReadInboxMessageId: messageId
    });
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadTopicById', async (global, actions, payload) => {
  const {
    chatId,
    topicId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchTopicById', {
    chat,
    topicId
  });
  if (!result) {
    if ('tabId' in payload && payload.shouldCloseChatOnError) {
      const {
        tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
      } = payload;
      actions.openChat({
        id: undefined,
        tabId
      });
    }
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addMessages)(global, result.messages);
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateTopic)(global, chatId, topicId, result.topic);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleForum', async (global, actions, payload) => {
  const {
    chatId,
    isEnabled,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = await ensureIsSuperGroup(global, actions, chatId, tabId);
  if (!chat) {
    return;
  }
  let result;
  try {
    result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleForum', {
      chat,
      isEnabled
    });
  } catch (error) {
    if (error.message === 'FLOOD') {
      actions.showNotification({
        message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__.oldTranslate('FloodWait'),
        tabId
      });
    } else {
      actions.showDialog({
        data: {
          ...error,
          hasErrorKey: true
        },
        tabId
      });
    }
  }
  if (result) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chat.id, {
      isForum: isEnabled
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    if (!isEnabled) {
      actions.closeForumPanel({
        tabId
      });
    } else {
      actions.openForumPanel({
        chatId: chat.id,
        tabId
      });
    }
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleParticipantsHidden', async (global, actions, payload) => {
  const {
    chatId,
    isEnabled
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  const prevIsEnabled = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFullInfo)(global, chat.id)?.areParticipantsHidden;
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatFullInfo)(global, chatId, {
    areParticipantsHidden: isEnabled
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('toggleParticipantsHidden', {
    chat,
    isEnabled
  });
  if (!result && prevIsEnabled !== undefined) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatFullInfo)(global, chatId, {
      areParticipantsHidden: prevIsEnabled
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('createTopic', async (global, actions, payload) => {
  const {
    chatId,
    title,
    iconColor,
    iconEmojiId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).createTopicPanel) {
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      createTopicPanel: {
        chatId,
        isLoading: true
      }
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
  const topicId = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('createTopic', {
    chat,
    title,
    iconColor,
    iconEmojiId
  });
  if (topicId) {
    actions.openThread({
      chatId,
      threadId: topicId,
      shouldReplaceHistory: true,
      tabId
    });
  }
  actions.closeCreateTopicPanel({
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('deleteTopic', async (global, actions, payload) => {
  const {
    chatId,
    topicId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('deleteTopic', {
    chat,
    topicId
  });
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.deleteTopic)(global, chatId, topicId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('editTopic', async (global, actions, payload) => {
  const {
    chatId,
    topicId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)(),
    ...rest
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  const topic = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopic)(global, chatId, topicId);
  if (!chat || !topic) return;
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).editTopicPanel) {
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      editTopicPanel: {
        chatId,
        topicId,
        isLoading: true
      }
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editTopic', {
    chat,
    topicId,
    ...rest
  });
  if (!result) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateTopic)(global, chatId, topicId, rest);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  actions.closeEditTopicPanel({
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleTopicPinned', (global, actions, payload) => {
  const {
    chatId,
    topicId,
    isPinned,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const {
    topicsPinnedLimit
  } = global.appConfig || {};
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  const topics = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopics)(global, chatId);
  if (!chat || !topics || !topicsPinnedLimit) return;
  if (isPinned && Object.values(topics).filter(topic => topic.isPinned).length >= topicsPinnedLimit) {
    actions.showNotification({
      message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__.oldTranslate('LimitReachedPinnedTopics', topicsPinnedLimit, 'i'),
      tabId
    });
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('togglePinnedTopic', {
    chat,
    topicId,
    isPinned
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('checkChatlistInvite', async (global, actions, payload) => {
  const {
    slug,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('checkChatlistInvite', {
    slug
  });
  if (!result) {
    actions.showNotification({
      message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__.oldTranslate('lng_group_invite_bad_link'),
      tabId
    });
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    chatlistModal: {
      invite: result.invite
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('joinChatlistInvite', async (global, actions, payload) => {
  const {
    invite,
    peerIds,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const peers = peerIds.map(peerId => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, peerId)).filter(Boolean);
  const currentNotJoinedCount = peers.filter(peer => peer.isNotJoined).length;
  const existingFolder = 'folderId' in invite ? (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, invite.folderId) : undefined;
  const folderTitle = 'title' in invite ? invite.title : existingFolder?.title;
  try {
    const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('joinChatlistInvite', {
      slug: invite.slug,
      peers
    });
    if (!result) return;
    if (existingFolder) {
      actions.showNotification({
        title: {
          key: 'FolderLinkNotificationUpdatedTitle',
          variables: {
            title: folderTitle.text
          }
        },
        message: {
          key: 'FolderLinkNotificationUpdatedSubtitle',
          variables: {
            count: currentNotJoinedCount
          },
          options: {
            pluralValue: currentNotJoinedCount
          }
        },
        tabId
      });
      return;
    }
    actions.showNotification({
      title: {
        key: 'FolderLinkNotificationAddedTitle',
        variables: {
          title: folderTitle.text
        }
      },
      message: {
        key: 'FolderLinkNotificationAddedSubtitle',
        variables: {
          count: currentNotJoinedCount
        },
        options: {
          pluralValue: currentNotJoinedCount
        }
      },
      tabId
    });
  } catch (error) {
    if (error.message === 'CHATLISTS_TOO_MUCH') {
      actions.openLimitReachedModal({
        limit: 'chatlistJoined',
        tabId
      });
    } else {
      actions.showDialog({
        data: {
          ...error,
          hasErrorKey: true
        },
        tabId
      });
    }
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('leaveChatlist', async (global, actions, payload) => {
  const {
    folderId,
    peerIds,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const folder = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, folderId);
  const peers = peerIds?.map(peerId => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, peerId)).filter(Boolean) || [];
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('leaveChatlist', {
    folderId,
    peers
  });
  if (!result) return;
  if (!folder) return;
  actions.showNotification({
    title: {
      key: 'FolderLinkNotificationDeletedTitle',
      variables: {
        title: folder.title.text
      }
    },
    message: {
      key: 'FolderLinkNotificationDeletedSubtitle',
      variables: {
        count: peers.length
      },
      options: {
        pluralValue: peers.length
      }
    },
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadChatlistInvites', async (global, actions, payload) => {
  const {
    folderId
  } = payload;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChatlistInvites', {
    folderId
  });
  if (!result) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = {
    ...global,
    chatFolders: {
      ...global.chatFolders,
      invites: {
        ...global.chatFolders.invites,
        [folderId]: result.invites
      }
    }
  };
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('createChatlistInvite', async (global, actions, payload) => {
  const {
    folderId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const folder = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, folderId);
  if (!folder) return;
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    shareFolderScreen: {
      ...(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).shareFolderScreen,
      isLoading: true
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  let result;
  try {
    result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('createChalistInvite', {
      folderId,
      peers: folder.includedChatIds.concat(folder.pinnedChatIds || []).map(chatId => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId) || (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, chatId)).filter(Boolean)
    });
  } catch (error) {
    if (CHATLIST_LIMIT_ERROR_LIST.has(error.message)) {
      actions.openLimitReachedModal({
        limit: 'chatlistInvites',
        tabId
      });
      actions.openSettingsScreen({
        screen: _types__WEBPACK_IMPORTED_MODULE_1__.SettingsScreens.Folders,
        tabId
      });
    } else {
      actions.showDialog({
        data: {
          ...error,
          hasErrorKey: true
        },
        tabId
      });
    }
  }
  if (!result || !result.invite) return;
  const {
    shareFolderScreen
  } = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId);
  if (!shareFolderScreen) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = {
    ...global,
    chatFolders: {
      ...global.chatFolders,
      byId: {
        ...global.chatFolders.byId,
        [folderId]: {
          ...global.chatFolders.byId[folderId],
          ...result.filter
        }
      },
      invites: {
        ...global.chatFolders.invites,
        [folderId]: [...(global.chatFolders.invites[folderId] || []), result.invite]
      }
    }
  };
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    shareFolderScreen: {
      ...shareFolderScreen,
      url: result.invite.url,
      isLoading: false
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('editChatlistInvite', async (global, actions, payload) => {
  const {
    folderId,
    peerIds,
    url,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const slug = url.split('/').pop();
  if (!slug) return;
  const peers = peerIds.map(chatId => (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId) || (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, chatId)).filter(Boolean);
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    shareFolderScreen: {
      ...(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).shareFolderScreen,
      isLoading: true
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  try {
    const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('editChatlistInvite', {
      folderId,
      slug,
      peers
    });
    if (!result) {
      return;
    }
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = {
      ...global,
      chatFolders: {
        ...global.chatFolders,
        invites: {
          ...global.chatFolders.invites,
          [folderId]: global.chatFolders.invites[folderId]?.map(invite => {
            if (invite.url === url) {
              return result;
            }
            return invite;
          })
        }
      }
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  } catch (error) {
    actions.showDialog({
      data: {
        ...error,
        hasErrorKey: true
      },
      tabId
    });
  } finally {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      shareFolderScreen: {
        ...(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTabState)(global, tabId).shareFolderScreen,
        isLoading: false
      }
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('deleteChatlistInvite', async (global, actions, payload) => {
  const {
    folderId,
    url
  } = payload;
  const slug = url.split('/').pop();
  if (!slug) return;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('deleteChatlistInvite', {
    folderId,
    slug
  });
  if (!result) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = {
    ...global,
    chatFolders: {
      ...global.chatFolders,
      invites: {
        ...global.chatFolders.invites,
        [folderId]: global.chatFolders.invites[folderId]?.filter(invite => invite.url !== url)
      }
    }
  };
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('openDeleteChatFolderModal', async (global, actions, payload) => {
  const {
    folderId,
    isConfirmedForChatlist,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const folder = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatFolder)(global, folderId);
  if (!folder) return;
  if (folder.isChatList && (!folder.hasMyInvites || isConfirmedForChatlist)) {
    const currentIds = (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_8__.getOrderedIds)(folderId);
    const suggestions = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchLeaveChatlistSuggestions', {
      folderId
    });
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
      chatlistModal: {
        removal: {
          folderId,
          suggestedPeerIds: (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.unique)([...(suggestions || []), ...(currentIds || [])])
        }
      }
    }, tabId);
    (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
    return;
  }
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    deleteFolderDialogModal: folderId
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updateChatDetectedLanguage', (global, actions, payload) => {
  const {
    chatId,
    detectedLanguage
  } = payload;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chatId, {
    detectedLanguage
  }, undefined, true);
  return global;
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('togglePeerTranslations', async (global, actions, payload) => {
  const {
    chatId,
    isEnabled
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) return;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('togglePeerTranslations', {
    chat,
    isEnabled
  });
  if (result === undefined) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updatePeerFullInfo)(global, chatId, {
    isTranslationDisabled: isEnabled ? undefined : true
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('setViewForumAsMessages', (global, actions, payload) => {
  const {
    chatId,
    isEnabled
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat?.isForum || chat.isForumAsMessages === isEnabled) {
    return;
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chatId, {
    isForumAsMessages: isEnabled || undefined
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('setViewForumAsMessages', {
    chat,
    isEnabled
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadChannelRecommendations', async (global, actions, payload) => {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return;
  const {
    chatId
  } = payload;
  const chat = chatId ? (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId) : undefined;
  if (chatId && !chat) {
    return;
  }
  if (!chatId) {
    const similarChannelIds = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectSimilarChannelIds)(global, _config__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_SUGGESTED_CHANNELS_ID);
    if (similarChannelIds) return; // Already cached
  }
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChannelRecommendations', {
    chat
  });
  if (!result) {
    return;
  }
  const {
    similarChannels,
    count
  } = result;
  const chatsById = (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)(similarChannels, 'id');
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceSimilarChannels)(global, chatId || _config__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_SUGGESTED_CHANNELS_ID, Object.keys(chatsById), count);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('loadBotRecommendations', async (global, actions, payload) => {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return;
  const {
    userId
  } = payload;
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, userId);
  if (!user) {
    return;
  }
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchBotsRecommendations', {
    user
  });
  if (!result) {
    return;
  }
  const {
    similarBots,
    count
  } = result;
  const users = (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)(similarBots, 'id');
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addUsers)(global, users);
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addSimilarBots)(global, userId, Object.keys(users), count);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('toggleChannelRecommendations', (global, actions, payload) => {
  const {
    chatId
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.toggleSimilarChannels)(global, chatId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('updatePaidMessagesPrice', async (global, actions, payload) => {
  const {
    chatId,
    paidMessagesStars,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const chat = chatId ? (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId) : undefined;
  if (!chat) return;
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateManagementProgress)(global, _types__WEBPACK_IMPORTED_MODULE_1__.ManagementProgress.InProgress, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('updatePaidMessagesPrice', {
    chat,
    paidMessagesStars
  });
  if (!result) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateManagementProgress)(global, _types__WEBPACK_IMPORTED_MODULE_1__.ManagementProgress.Complete, tabId);
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chatId, {
    paidMessagesStars
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('resolveBusinessChatLink', async (global, actions, payload) => {
  const {
    slug,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('resolveBusinessChatLink', {
    slug
  });
  if (!result) {
    actions.showNotification({
      message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__.oldTranslate('BusinessLink.ErrorExpired'),
      tabId
    });
    return;
  }
  const {
    chatLink
  } = result;
  actions.openChatWithDraft({
    chatId: chatLink.chatId,
    text: chatLink.text,
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_16__.addActionHandler)('requestCollectibleInfo', async (global, actions, payload) => {
  const {
    type,
    collectible,
    peerId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()
  } = payload;
  let inputCollectible;
  if (type === 'phone') {
    inputCollectible = {
      phone: collectible
    };
  }
  if (type === 'username') {
    inputCollectible = {
      username: collectible
    };
  }
  if (!inputCollectible) return;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchCollectionInfo', inputCollectible);
  if (!result) {
    (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_3__.copyTextToClipboard)(collectible);
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_19__.updateTabState)(global, {
    collectibleInfoModal: {
      ...result,
      type,
      collectible,
      peerId
    }
  }, tabId);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
});
async function loadChats(listType, isFullDraftSync, shouldIgnorePagination) {
  let global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  let lastLocalServiceMessageId = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectLastServiceNotification)(global)?.id;
  const params = !shouldIgnorePagination ? (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatListLoadingParameters)(global, listType) : {};
  const offsetPeer = params.nextOffsetPeerId ? (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectPeer)(global, params.nextOffsetPeerId) : undefined;
  const offsetDate = params.nextOffsetDate;
  const offsetId = params.nextOffsetId;
  const isFirstBatch = !shouldIgnorePagination && !offsetPeer && !offsetDate && !offsetId;
  const shouldReplaceStaleState = listType === 'active' && isFirstBatch;
  const isAccountFreeze = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global);
  const result = listType === 'saved' ? await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchSavedChats', {
    limit: _config__WEBPACK_IMPORTED_MODULE_2__.CHAT_LIST_LOAD_SLICE,
    offsetDate,
    offsetId,
    offsetPeer,
    withPinned: isFirstBatch && !isAccountFreeze
  }) : await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchChats', {
    limit: _config__WEBPACK_IMPORTED_MODULE_2__.CHAT_LIST_LOAD_SLICE,
    offsetDate,
    offsetId,
    offsetPeer,
    archived: listType === 'archived',
    withPinned: isFirstBatch && !isAccountFreeze,
    lastLocalServiceMessageId
  });
  if (!result) {
    return;
  }
  const {
    chatIds
  } = result;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  lastLocalServiceMessageId = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectLastServiceNotification)(global)?.id;
  const newChats = (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)(result.chats, 'id');
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateUsers)(global, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)(result.users, 'id'));
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChats)(global, newChats);
  if (isFirstBatch) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceChatListIds)(global, listType, chatIds);
  } else {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addChatListIds)(global, listType, chatIds);
  }
  if (shouldReplaceStaleState) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceUserStatuses)(global, result.userStatusesById);
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceNotifyExceptions)(global, result.notifyExceptionById);
  } else {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addUserStatuses)(global, result.userStatusesById);
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addNotifyExceptions)(global, result.notifyExceptionById);
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatListSecondaryInfo)(global, listType, result);
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceMessages)(global, result.messages);
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChatsLastMessageId)(global, result.lastMessageByChatId, listType);
  if (!shouldIgnorePagination) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceChatListLoadingParameters)(global, listType, result.nextOffsetId, result.nextOffsetPeerId, result.nextOffsetDate);
  }
  const idsToUpdateDraft = isFullDraftSync ? result.chatIds : Object.keys(result.draftsById);
  idsToUpdateDraft.forEach(chatId => {
    const draft = result.draftsById[chatId];
    const thread = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectThread)(global, chatId, _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID);
    if (!draft && !thread) return;
    if (!(0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectDraft)(global, chatId, _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID)?.isLocal) {
      global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceThreadParam)(global, chatId, _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID, 'draft', draft);
    }
  });
  if ((chatIds.length === 0 || chatIds.length === result.totalChatCount) && !global.chats.isFullyLoaded[listType]) {
    global = {
      ...global,
      chats: {
        ...global.chats,
        isFullyLoaded: {
          ...global.chats.isFullyLoaded,
          [listType]: true
        }
      }
    };
  }
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
}
async function loadFullChat(global, actions, chat) {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectIsCurrentUserFrozen)(global)) return undefined;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchFullChat', chat);
  if (!result) {
    return undefined;
  }
  const {
    chats,
    userStatusesById,
    fullInfo,
    groupCall,
    membersCount,
    isForumAsMessages
  } = result;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChats)(global, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.buildCollectionByKey)(chats, 'id'));
  if (userStatusesById) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.addUserStatuses)(global, userStatusesById);
  }
  if (groupCall) {
    const existingGroupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_21__.selectGroupCall)(global, groupCall.id);
    global = (0,_reducers_calls__WEBPACK_IMPORTED_MODULE_18__.updateGroupCall)(global, groupCall.id, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_9__.omit)(groupCall, ['connectionState', 'isLoaded']), undefined, existingGroupCall ? undefined : groupCall.participantsCount);
  }
  if (membersCount !== undefined) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chat.id, {
      membersCount
    });
  }
  if (chat.isForum) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chat.id, {
      isForumAsMessages
    });
  }
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.replaceChatFullInfo)(global, chat.id, fullInfo);
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  const stickerSet = fullInfo.stickerSet;
  const localSet = stickerSet && (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectStickerSet)(global, stickerSet);
  if (stickerSet && !localSet) {
    actions.loadStickers({
      stickerSetInfo: {
        id: stickerSet.id,
        accessHash: stickerSet.accessHash
      }
    });
  }
  const emojiSet = fullInfo.emojiSet;
  const localEmojiSet = emojiSet && (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectStickerSet)(global, emojiSet);
  if (emojiSet && !localEmojiSet) {
    actions.loadStickers({
      stickerSetInfo: {
        id: emojiSet.id,
        accessHash: emojiSet.accessHash
      }
    });
  }
  return result;
}
async function migrateChat(global, actions, chat, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()]) {
  try {
    const supergroup = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('migrateChat', chat);
    return supergroup;
  } catch (error) {
    if (error.message === 'CHANNELS_TOO_MUCH') {
      actions.openLimitReachedModal({
        limit: 'channels',
        tabId
      });
    } else {
      actions.showDialog({
        data: {
          ...error,
          hasErrorKey: true
        },
        tabId
      });
    }
    return undefined;
  }
}
async function fetchChatByUsername(global, username, referrer) {
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const localChat = !referrer ? (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChatByUsername)(global, username) : undefined;
  if (localChat && !localChat.isMin) {
    return localChat;
  }
  const {
    chat,
    user
  } = (await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('getChatByUsername', username, referrer)) || {};
  if (!chat) {
    return undefined;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chat.id, chat);
  if (user) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateUser)(global, user.id, user);
  }
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  return chat;
}
async function checkWebAppExists(global, botName, appName) {
  if (!botName || !appName) return false;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const chatByUsername = await fetchChatByUsername(global, botName);
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const bot = chatByUsername && (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, chatByUsername.id);
  const botApp = bot && (await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchBotApp', {
    bot,
    appName
  }));
  return Boolean(botApp);
}
async function fetchChatByPhoneNumber(global, phoneNumber) {
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const localUser = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUserByPhoneNumber)(global, phoneNumber);
  if (localUser && !localUser.isMin) {
    return (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, localUser.id);
  }
  const {
    chat,
    user
  } = (await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('getChatByPhoneNumber', phoneNumber)) || {};
  if (!chat) {
    return undefined;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateChat)(global, chat.id, chat);
  if (user) {
    global = (0,_reducers__WEBPACK_IMPORTED_MODULE_17__.updateUser)(global, user.id, user);
  }
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  return chat;
}
async function getAttachBotOrNotify(global, actions, username, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()]) {
  const chat = await fetchChatByUsername(global, username);
  if (!chat) return undefined;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectUser)(global, chat.id);
  if (!user) return undefined;
  const isBot = (0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isUserBot)(user);
  if (!isBot) return undefined;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('loadAttachBot', {
    bot: user
  });
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  if (!result) {
    actions.showNotification({
      message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_11__.oldTranslate('WebApp.AddToAttachmentUnavailableError'),
      tabId
    });
    return undefined;
  }
  (0,_index__WEBPACK_IMPORTED_MODULE_16__.setGlobal)(global);
  return result.bot;
}
async function openChatByUsername(global, actions, params, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()]) {
  const {
    username,
    threadId,
    channelPostId,
    startParam,
    ref,
    startAttach,
    attach,
    text,
    timestamp
  } = params;
  const currentChat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCurrentChat)(global, tabId);

  // Attach in the current chat
  if (startAttach !== undefined && !attach) {
    const bot = await getAttachBotOrNotify(global, actions, username, tabId);
    if (!bot) return;
    actions.callAttachBot({
      bot,
      chatId: currentChat?.id || bot.id,
      startParam: startAttach,
      tabId
    });
    return;
  }
  const isCurrentChat = currentChat?.usernames?.some(c => c.username === username);
  if (!isCurrentChat) {
    // Open temporary empty chat to make the click response feel faster
    actions.openChat({
      id: _config__WEBPACK_IMPORTED_MODULE_2__.TMP_CHAT_ID,
      tabId
    });
  }
  const starRefStartPrefixes = global.appConfig?.starRefStartPrefixes;
  let referrer = ref;
  if (startParam && starRefStartPrefixes?.length) {
    const prefix = starRefStartPrefixes.find(p => startParam.startsWith(p));
    if (prefix) {
      referrer = startParam.slice(prefix.length);
    }
  }
  const chat = await fetchChatByUsername(global, username, referrer);
  if (!chat) {
    if (!isCurrentChat) {
      actions.openPreviousChat({
        tabId
      });
      actions.showNotification({
        message: 'User does not exist',
        tabId
      });
    }
    return;
  }
  openChatWithParams(global, actions, chat, {
    isCurrentChat,
    threadId,
    messageId: channelPostId,
    startParam,
    referrer,
    startAttach,
    attach,
    text,
    timestamp
  }, tabId);
}
async function openChatWithParams(global, actions, chat, params, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()]) {
  const {
    isCurrentChat,
    threadId,
    messageId,
    startParam,
    referrer,
    startAttach,
    attach,
    text,
    timestamp
  } = params;
  if (messageId) {
    let isTopicProcessed = false;
    // In forums, link to a topic start message should open the topic
    if (chat.isForum && !threadId) {
      let topic = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopics)(global, chat.id)?.[messageId];
      if (!topic) {
        const topicResult = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_14__.callApi)('fetchTopicById', {
          chat,
          topicId: messageId
        });
        topic = topicResult?.topic;
      }
      if (topic) {
        actions.openThread({
          chatId: chat.id,
          threadId: topic.id,
          tabId
        });
        isTopicProcessed = true;
      }
    }
    if (!isTopicProcessed) {
      actions.focusMessage({
        chatId: chat.id,
        threadId,
        messageId,
        timestamp,
        tabId
      });
    }
  } else if (!isCurrentChat) {
    actions.openThread({
      chatId: chat.id,
      threadId: threadId ?? _api_types__WEBPACK_IMPORTED_MODULE_0__.MAIN_THREAD_ID,
      tabId
    });
  }
  if (startParam && !referrer) {
    actions.startBot({
      botId: chat.id,
      param: startParam
    });
  }
  if (attach) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
    openAttachMenuFromLink(global, actions, chat.id, attach, startAttach, tabId);
  }
  if (text) {
    actions.openChatWithDraft({
      chatId: chat.id,
      text: {
        text
      },
      tabId
    });
  }
  if (messageId && timestamp) {
    actions.openMediaFromTimestamp({
      chatId: chat.id,
      threadId,
      messageId,
      timestamp,
      tabId
    });
  }
}
async function openAttachMenuFromLink(global, actions, chatId, attach, startAttach, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()]) {
  global = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getGlobal)();
  const bot = await getAttachBotOrNotify(global, actions, attach, tabId);
  if (!bot) return;
  actions.callAttachBot({
    bot,
    chatId,
    ...(typeof startAttach === 'string' && {
      startParam: startAttach
    }),
    tabId
  });
}
async function ensureIsSuperGroup(global, actions, chatId, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_7__.getCurrentTabId)()]) {
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_20__.selectChat)(global, chatId);
  if (!chat || !(0,_helpers__WEBPACK_IMPORTED_MODULE_15__.isChatBasicGroup)(chat)) {
    return chat;
  }
  const newChat = await migrateChat(global, actions, chat, tabId);
  if (!newChat) {
    return undefined;
  }
  actions.loadFullChat({
    chatId: newChat.id
  });
  actions.openChat({
    id: newChat.id,
    tabId
  });
  return newChat;
}

/***/ }),

/***/ "./src/global/actions/ui/calls.ts":
/*!****************************************!*\
  !*** ./src/global/actions/ui/calls.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkNavigatorUserMediaPermissions: () => (/* binding */ checkNavigatorUserMediaPermissions),
/* harmony export */   getGroupCallAudioContext: () => (/* binding */ getGroupCallAudioContext),
/* harmony export */   getGroupCallAudioElement: () => (/* binding */ getGroupCallAudioElement),
/* harmony export */   initializeSounds: () => (/* binding */ initializeSounds),
/* harmony export */   initializeSoundsForSafari: () => (/* binding */ initializeSoundsForSafari),
/* harmony export */   removeGroupCallAudioElement: () => (/* binding */ removeGroupCallAudioElement)
/* harmony export */ });
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/establishMultitabRole */ "./src/util/establishMultitabRole.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/oldLangProvider */ "./src/util/oldLangProvider.ts");
/* harmony import */ var _util_safePlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/safePlay */ "./src/util/safePlay.ts");
/* harmony import */ var _api_gramjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/gramjs */ "./src/api/gramjs/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../index */ "./src/global/index.ts");
/* harmony import */ var _reducers_calls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/calls */ "./src/global/reducers/calls.ts");
/* harmony import */ var _reducers_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/tabs */ "./src/global/reducers/tabs.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _selectors_calls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _api_chats__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/chats */ "./src/global/actions/api/chats.ts");
















// This is a tiny MP3 file that is silent - retrieved from https://bigsoundbank.com and then modified
// eslint-disable-next-line @stylistic/max-len
const silentSound = 'data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
let audioElement;
let audioContext;
let sounds;

// Workaround: this function is called once on the first user interaction.
// After that, it will be possible to play the notification on iOS without problems.
// https://rosswintle.uk/2019/01/skirting-the-ios-safari-audio-auto-play-policy-for-ui-sound-effects/
function initializeSoundsForSafari() {
  initializeSounds();
  return Promise.all(Object.values(sounds).map(sound => {
    const prevSrc = sound.src;
    sound.src = silentSound;
    sound.muted = true;
    sound.volume = 0.0001;
    return sound.play().then(() => {
      sound.pause();
      sound.volume = 1;
      sound.currentTime = 0;
      sound.muted = false;
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_0__.requestNextMutation)(() => {
        sound.src = prevSrc;
      });
    });
  }));
}
function initializeSounds() {
  if (sounds) {
    return;
  }
  const joinAudio = new Audio('./voicechat_join.mp3');
  const connectingAudio = new Audio('./voicechat_connecting.mp3');
  connectingAudio.loop = true;
  const leaveAudio = new Audio('./voicechat_leave.mp3');
  const allowTalkAudio = new Audio('./voicechat_onallowtalk.mp3');
  const busyAudio = new Audio('./call_busy.mp3');
  const connectAudio = new Audio('./call_connect.mp3');
  const endAudio = new Audio('./call_end.mp3');
  const incomingAudio = new Audio('./call_incoming.mp3');
  incomingAudio.loop = true;
  const ringingAudio = new Audio('./call_ringing.mp3');
  ringingAudio.loop = true;
  sounds = {
    join: joinAudio,
    allowTalk: allowTalkAudio,
    leave: leaveAudio,
    connecting: connectingAudio,
    incoming: incomingAudio,
    end: endAudio,
    connect: connectAudio,
    busy: busyAudio,
    ringing: ringingAudio
  };
}
async function fetchGroupCall(global, groupCall) {
  if ((0,_selectors__WEBPACK_IMPORTED_MODULE_12__.selectIsCurrentUserFrozen)(global)) return undefined;
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_7__.callApi)('getGroupCall', {
    call: groupCall
  });
  if (!result) return undefined;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_9__.getGlobal)();
  const existingGroupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_13__.selectGroupCall)(global, groupCall.id);
  global = (0,_reducers_calls__WEBPACK_IMPORTED_MODULE_10__.updateGroupCall)(global, groupCall.id, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_4__.omit)(result.groupCall, ['connectionState']), undefined, existingGroupCall?.isLoaded ? undefined : result.groupCall.participantsCount);
  (0,_index__WEBPACK_IMPORTED_MODULE_9__.setGlobal)(global);
  return result.groupCall;
}
function requestGroupCallParticipants(groupCall, nextOffset) {
  return (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_7__.callApi)('fetchGroupCallParticipants', {
    call: groupCall,
    offset: nextOffset
  });
}
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('toggleGroupCallPanel', (global, actions, payload) => {
  const {
    force,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  } = payload || {};
  return (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_11__.updateTabState)(global, {
    isCallPanelVisible: 'force' in (payload || {}) ? force : !(0,_selectors__WEBPACK_IMPORTED_MODULE_12__.selectTabState)(global, tabId).isCallPanelVisible
  }, tabId);
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('createGroupCall', async (global, actions, payload) => {
  const {
    chatId,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  } = payload;
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_12__.selectChat)(global, chatId);
  if (!chat) {
    return;
  }
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_7__.callApi)('createGroupCall', {
    peer: chat
  });
  if (!result) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_9__.getGlobal)();
  global = (0,_reducers_calls__WEBPACK_IMPORTED_MODULE_10__.updateGroupCall)(global, result.id, {
    ...result,
    chatId
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_9__.setGlobal)(global);
  actions.requestMasterAndJoinGroupCall({
    id: result.id,
    accessHash: result.accessHash,
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('createGroupCallInviteLink', async (global, actions, payload) => {
  const {
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  } = payload || {};
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_13__.selectActiveGroupCall)(global);
  if (!groupCall || !groupCall.chatId) {
    return;
  }
  const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_12__.selectChat)(global, groupCall.chatId);
  if (!chat) {
    return;
  }
  const hasPublicUsername = Boolean((0,_helpers__WEBPACK_IMPORTED_MODULE_8__.getMainUsername)(chat));
  let inviteLink = (0,_selectors__WEBPACK_IMPORTED_MODULE_12__.selectChatFullInfo)(global, chat.id)?.inviteLink;
  if (hasPublicUsername) {
    inviteLink = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_7__.callApi)('exportGroupCallInvite', {
      call: groupCall,
      canSelfUnmute: false
    });
  }
  if (!inviteLink) {
    return;
  }
  (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_2__.copyTextToClipboard)(inviteLink);
  actions.showNotification({
    message: {
      key: 'LinkCopied'
    },
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('joinVoiceChatByLink', async (global, actions, payload) => {
  const {
    username,
    inviteHash,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  } = payload;
  const chat = await (0,_api_chats__WEBPACK_IMPORTED_MODULE_14__.fetchChatByUsername)(global, username);
  if (!chat) {
    actions.showNotification({
      message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_5__.oldTranslate('NoUsernameFound'),
      tabId
    });
    return;
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_9__.getGlobal)();
  const full = await (0,_api_chats__WEBPACK_IMPORTED_MODULE_14__.loadFullChat)(global, actions, chat);
  if (full?.groupCall) {
    actions.requestMasterAndJoinGroupCall({
      id: full.groupCall.id,
      accessHash: full.groupCall.accessHash,
      inviteHash,
      tabId
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('requestMasterAndJoinGroupCall', (global, actions, payload) => {
  actions.requestMasterAndCallAction({
    action: 'joinGroupCall',
    payload,
    tabId: payload.tabId || (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('requestMasterAndAcceptCall', (global, actions, payload) => {
  actions.requestMasterAndCallAction({
    action: 'acceptCall',
    payload: undefined,
    tabId: payload?.tabId || (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('joinGroupCall', async (global, actions, payload) => {
  const {
    chatId,
    id,
    accessHash,
    inviteHash,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  } = payload;
  if (!_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.ARE_CALLS_SUPPORTED) {
    actions.showNotification({
      message: 'Sorry, your browser doesn\'t support group calls',
      tabId
    });
    return;
  }
  if (global.phoneCall) {
    actions.toggleGroupCallPanel({
      tabId
    });
    return;
  }
  createAudioElement();
  initializeSounds();
  global = (0,_index__WEBPACK_IMPORTED_MODULE_9__.getGlobal)();
  void checkNavigatorUserMediaPermissions(global, actions, true, tabId);
  const {
    groupCalls: {
      activeGroupCallId
    }
  } = global;
  let groupCall = id ? (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_13__.selectGroupCall)(global, id) : (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_13__.selectChatGroupCall)(global, chatId);
  if (groupCall && groupCall.id === activeGroupCallId) {
    actions.toggleGroupCallPanel({
      tabId
    });
    return;
  }
  if (activeGroupCallId) {
    if ('leaveGroupCall' in actions) {
      actions.leaveGroupCall({
        rejoin: payload,
        tabId
      });
    }
    return;
  }
  if (groupCall && activeGroupCallId === groupCall.id) {
    actions.toggleGroupCallPanel({
      tabId
    });
    return;
  }
  if (!groupCall && (!id || !accessHash) && chatId) {
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_12__.selectChat)(global, chatId);
    if (!chat) return;
    await (0,_api_chats__WEBPACK_IMPORTED_MODULE_14__.loadFullChat)(global, actions, chat);
    global = (0,_index__WEBPACK_IMPORTED_MODULE_9__.getGlobal)();
    groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_13__.selectChatGroupCall)(global, chatId);
  } else if (!groupCall && id && accessHash) {
    groupCall = await fetchGroupCall(global, {
      id,
      accessHash
    });
  }
  if (!groupCall) return;
  global = (0,_index__WEBPACK_IMPORTED_MODULE_9__.getGlobal)();
  global = (0,_reducers_calls__WEBPACK_IMPORTED_MODULE_10__.updateGroupCall)(global, groupCall.id, {
    ...groupCall,
    inviteHash
  }, undefined, groupCall.participantsCount + 1);
  global = {
    ...global,
    groupCalls: {
      ...global.groupCalls,
      activeGroupCallId: groupCall.id
    }
  };
  (0,_index__WEBPACK_IMPORTED_MODULE_9__.setGlobal)(global);
  actions.toggleGroupCallPanel({
    force: false,
    tabId
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('playGroupCallSound', (global, actions, payload) => {
  const {
    sound
  } = payload;
  if (!sounds?.[sound]) {
    return;
  }
  const doPlay = () => {
    if (sound !== 'connecting') {
      sounds.connecting.pause();
    }
    if (sound !== 'incoming') {
      sounds.incoming.pause();
    }
    if (sound !== 'ringing') {
      sounds.ringing.pause();
    }
    (0,_util_safePlay__WEBPACK_IMPORTED_MODULE_6__["default"])(sounds[sound]);
  };
  doPlay();
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('loadMoreGroupCallParticipants', global => {
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_13__.selectActiveGroupCall)(global);
  if (!groupCall) {
    return;
  }
  void requestGroupCallParticipants(groupCall, groupCall.nextOffset);
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('requestMasterAndRequestCall', (global, actions, payload) => {
  actions.requestMasterAndCallAction({
    action: 'requestCall',
    payload,
    tabId: payload.tabId || (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_9__.addActionHandler)('requestCall', (global, actions, payload) => {
  const {
    userId,
    isVideo,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()
  } = payload;
  if (global.phoneCall) {
    actions.toggleGroupCallPanel({
      tabId
    });
    return;
  }
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_12__.selectUser)(global, userId);
  if (!user) {
    return;
  }
  initializeSounds();
  global = (0,_index__WEBPACK_IMPORTED_MODULE_9__.getGlobal)();
  void checkNavigatorUserMediaPermissions(global, actions, isVideo, tabId);
  global = (0,_index__WEBPACK_IMPORTED_MODULE_9__.getGlobal)();
  global = {
    ...global,
    phoneCall: {
      id: '',
      state: 'requesting',
      participantId: userId,
      isVideo,
      adminId: global.currentUserId
    }
  };
  (0,_index__WEBPACK_IMPORTED_MODULE_9__.setGlobal)(global);
  actions.toggleGroupCallPanel({
    force: false,
    tabId
  });
});
function createAudioContext() {
  return new (window.AudioContext || window.webkitAudioContext)();
}
const silence = ctx => {
  const oscillator = ctx.createOscillator();
  const dst = oscillator.connect(ctx.createMediaStreamDestination());
  oscillator.start();
  return new MediaStream([Object.assign(dst.stream.getAudioTracks()[0], {
    enabled: false
  })]);
};
function createAudioElement() {
  const ctx = createAudioContext();
  audioElement = new Audio();
  audioContext = ctx;
  audioElement.srcObject = silence(ctx);
  (0,_util_safePlay__WEBPACK_IMPORTED_MODULE_6__["default"])(audioElement);
}
function getGroupCallAudioElement() {
  return audioElement;
}
function getGroupCallAudioContext() {
  return audioContext;
}
function removeGroupCallAudioElement() {
  audioElement?.pause();
  audioContext = undefined;
  audioElement = undefined;
}

// This method is used instead of a navigator.permissions.query to determine permission to use a microphone,
// because Firefox does not have support for 'microphone' and 'camera' permissions
// https://github.com/mozilla/standards-positions/issues/19#issuecomment-370158947
function checkNavigatorUserMediaPermissions(global, actions, isVideo, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()]) {
  if (isVideo) {
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(stream => {
      if (stream.getVideoTracks().length === 0) {
        actions.showNotification({
          message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_5__.oldTranslate('Call.Camera.Error'),
          tabId
        });
      } else {
        stream.getTracks().forEach(track => track.stop());
        checkMicrophonePermission(global, actions, tabId);
      }
    }).catch(() => {
      actions.showNotification({
        message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_5__.oldTranslate('Call.Camera.Error'),
        tabId
      });
    });
  } else {
    checkMicrophonePermission(global, actions, tabId);
  }
}
function checkMicrophonePermission(global, actions, ...[tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_3__.getCurrentTabId)()]) {
  navigator.mediaDevices.getUserMedia({
    audio: true
  }).then(stream => {
    if (stream.getAudioTracks().length === 0) {
      actions.showNotification({
        message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_5__.oldTranslate('RequestAcces.Error.HaveNotAccess.Call'),
        tabId
      });
    } else {
      stream.getTracks().forEach(track => track.stop());
    }
  }).catch(() => {
    actions.showNotification({
      message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_5__.oldTranslate('RequestAcces.Error.HaveNotAccess.Call'),
      tabId
    });
  });
}

/***/ }),

/***/ "./src/global/reducers/calls.ts":
/*!**************************************!*\
  !*** ./src/global/reducers/calls.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeGroupCall: () => (/* binding */ removeGroupCall),
/* harmony export */   updateActiveGroupCall: () => (/* binding */ updateActiveGroupCall),
/* harmony export */   updateGroupCall: () => (/* binding */ updateGroupCall),
/* harmony export */   updateGroupCallParticipant: () => (/* binding */ updateGroupCallParticipant)
/* harmony export */ });
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _selectors_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _chats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats */ "./src/global/reducers/chats.ts");




function updateGroupCall(global, groupCallId, groupCallUpdate, addToParticipantCount, resetParticipantCount) {
  const unfiltered = Object.values({
    ...global.groupCalls.byId[groupCallId]?.participants,
    ...groupCallUpdate.participants
  });
  const filtered = unfiltered.filter(({
    isLeft
  }) => !isLeft);
  const participants = filtered.reduce((acc, el) => {
    acc[el.id] = el;
    return acc;
  }, {});
  return {
    ...global,
    groupCalls: {
      ...global.groupCalls,
      byId: {
        ...global.groupCalls.byId,
        [groupCallId]: {
          ...global.groupCalls.byId[groupCallId],
          ...(0,_util_iteratees__WEBPACK_IMPORTED_MODULE_0__.omit)(groupCallUpdate, ['participantsCount']),
          ...(addToParticipantCount && {
            participantsCount: global.groupCalls.byId[groupCallId].participantsCount + addToParticipantCount
          }),
          ...(resetParticipantCount !== undefined && {
            participantsCount: resetParticipantCount
          }),
          participants
        }
      }
    }
  };
}
function removeGroupCall(global, groupCallId) {
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_2__.selectGroupCall)(global, groupCallId);
  if (groupCall && groupCall.chatId) {
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, groupCall.chatId);
    if (chat) {
      global = (0,_chats__WEBPACK_IMPORTED_MODULE_3__.updateChatFullInfo)(global, groupCall.chatId, {
        groupCallId: undefined
      });
    }
  }
  return {
    ...global,
    groupCalls: {
      ...global.groupCalls,
      byId: {
        ...(0,_util_iteratees__WEBPACK_IMPORTED_MODULE_0__.omit)(global.groupCalls.byId, [groupCallId.toString()])
      }
    }
  };
}
function updateActiveGroupCall(global, groupCallUpdate, resetParticipantCount) {
  if (!global.groupCalls.activeGroupCallId) {
    return global;
  }
  return updateGroupCall(global, global.groupCalls.activeGroupCallId, groupCallUpdate, undefined, resetParticipantCount);
}
function updateGroupCallParticipant(global, groupCallId, userId, participantUpdate, noUpdateCount = false) {
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_2__.selectGroupCall)(global, groupCallId);
  if (!groupCall) {
    return global;
  }
  return updateGroupCall(global, groupCallId, {
    participants: {
      ...groupCall.participants,
      [userId]: {
        ...groupCall.participants[userId],
        ...participantUpdate
      }
    }
  }, participantUpdate.isLeft ? noUpdateCount ? 0 : -1 : groupCall.participants[userId] || noUpdateCount ? 0 : 1);
}

/***/ })

}]);
//# sourceMappingURL=src_global_actions_ui_calls_ts.776ac30ba37c2cb42c27.js.map