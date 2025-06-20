"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_right_DeleteMemberModal_tsx-src_global_selectors_calls_ts-src_global_selectors-18144d"],{

/***/ "./src/components/right/DeleteMemberModal.tsx":
/*!****************************************************!*\
  !*** ./src/components/right/DeleteMemberModal.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");








const DeleteMemberModal = ({
  isOpen,
  chat,
  userId,
  contactName,
  onClose
}) => {
  const {
    deleteChatMember
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const handleDeleteChatMember = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    deleteChatMember({
      chatId: chat.id,
      userId: userId
    });
    onClose();
  }, [chat, deleteChatMember, onClose, userId]);
  if (!chat || !userId) {
    return undefined;
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: isOpen,
    onClose: onClose,
    title: lang('GroupRemoved.Remove'),
    textParts: (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_4__["default"])(lang('PeerInfo.Confirm.RemovePeer', contactName)),
    confirmLabel: lang('lng_box_remove'),
    confirmHandler: handleDeleteChatMember,
    confirmIsDestructive: true
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  userId
}) => {
  const chat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentChat)(global);
  const user = userId && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, userId);
  const contactName = user ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFirstOrLastName)(user) : undefined;
  return {
    chat,
    contactName
  };
})(DeleteMemberModal)));

/***/ }),

/***/ "./src/global/selectors/calls.ts":
/*!***************************************!*\
  !*** ./src/global/selectors/calls.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectActiveGroupCall: () => (/* binding */ selectActiveGroupCall),
/* harmony export */   selectCanInviteToActiveGroupCall: () => (/* binding */ selectCanInviteToActiveGroupCall),
/* harmony export */   selectChatGroupCall: () => (/* binding */ selectChatGroupCall),
/* harmony export */   selectGroupCall: () => (/* binding */ selectGroupCall),
/* harmony export */   selectGroupCallParticipant: () => (/* binding */ selectGroupCallParticipant),
/* harmony export */   selectIsAdminInActiveGroupCall: () => (/* binding */ selectIsAdminInActiveGroupCall),
/* harmony export */   selectPhoneCallUser: () => (/* binding */ selectPhoneCallUser)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _chats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats */ "./src/global/selectors/chats.ts");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ "./src/global/selectors/users.ts");



function selectChatGroupCall(global, chatId) {
  const fullInfo = (0,_chats__WEBPACK_IMPORTED_MODULE_1__.selectChatFullInfo)(global, chatId);
  if (!fullInfo || !fullInfo.groupCallId) return undefined;
  return selectGroupCall(global, fullInfo.groupCallId);
}
function selectGroupCall(global, groupCallId) {
  return global.groupCalls.byId[groupCallId];
}
function selectGroupCallParticipant(global, groupCallId, participantId) {
  return selectGroupCall(global, groupCallId)?.participants[participantId];
}
function selectIsAdminInActiveGroupCall(global) {
  const chatId = selectActiveGroupCall(global)?.chatId;
  if (!chatId) return false;
  const chat = (0,_chats__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, chatId);
  if (!chat) return false;
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isChatBasicGroup)(chat) && chat.isCreator || Boolean(chat.adminRights?.manageCall);
}
function selectActiveGroupCall(global) {
  const {
    groupCalls: {
      activeGroupCallId
    }
  } = global;
  if (!activeGroupCallId) {
    return undefined;
  }
  return selectGroupCall(global, activeGroupCallId);
}
function selectPhoneCallUser(global) {
  const {
    phoneCall,
    currentUserId
  } = global;
  if (!phoneCall || !phoneCall.participantId || !phoneCall.adminId) {
    return undefined;
  }
  const id = phoneCall.adminId === currentUserId ? phoneCall.participantId : phoneCall.adminId;
  return (0,_users__WEBPACK_IMPORTED_MODULE_2__.selectUser)(global, id);
}
function selectCanInviteToActiveGroupCall(global) {
  const groupCall = selectActiveGroupCall(global);
  if (!groupCall || !groupCall.chatId) {
    return false;
  }
  const chat = (0,_chats__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, groupCall.chatId);
  if (!chat) {
    return false;
  }
  const hasPublicUsername = Boolean((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getMainUsername)(chat));
  if (hasPublicUsername) {
    return true;
  }
  const inviteLink = (0,_chats__WEBPACK_IMPORTED_MODULE_1__.selectChatFullInfo)(global, chat.id)?.inviteLink;
  return Boolean(inviteLink);
}

/***/ }),

/***/ "./src/global/selectors/limits.ts":
/*!****************************************!*\
  !*** ./src/global/selectors/limits.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectCurrentLimit: () => (/* binding */ selectCurrentLimit),
/* harmony export */   selectPremiumLimit: () => (/* binding */ selectPremiumLimit)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "./src/global/selectors/users.ts");


function selectCurrentLimit(global, limit) {
  const {
    appConfig
  } = global;
  if (!appConfig) {
    return _config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LIMITS[limit][0];
  }
  const isPremium = (0,_users__WEBPACK_IMPORTED_MODULE_1__.selectIsCurrentUserPremium)(global);
  const {
    limits
  } = appConfig;

  // When there are new limits when updating a layer, until we get a new configuration, we must use the default values
  const value = limits[limit]?.[isPremium ? 1 : 0] ?? _config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LIMITS[limit][isPremium ? 1 : 0];
  if (limit === 'dialogFilters') return value + 1; // Server does not count "All" as folder, but we need to
  return value;
}
function selectPremiumLimit(global, limit) {
  const {
    appConfig
  } = global;
  if (!appConfig) return _config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LIMITS[limit][1];
  const {
    limits
  } = appConfig;
  return limits[limit][1];
}

/***/ }),

/***/ "./src/hooks/window/useFullscreen.ts":
/*!*******************************************!*\
  !*** ./src/hooks/window/useFullscreen.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfFullscreen: () => (/* binding */ checkIfFullscreen),
/* harmony export */   "default": () => (/* binding */ useFullscreen),
/* harmony export */   safeExitFullscreen: () => (/* binding */ safeExitFullscreen),
/* harmony export */   safeRequestFullscreen: () => (/* binding */ safeRequestFullscreen),
/* harmony export */   useFullscreenStatus: () => (/* binding */ useFullscreenStatus)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _types_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/electron */ "./src/types/electron.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");



const prop = getBrowserFullscreenElementProp();
function useFullscreen(elRef, exitCallback, enterCallback) {
  const [isFullscreen, setIsFullscreen] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(Boolean(prop && document[prop]));
  const setFullscreen = () => {
    if (!elRef.current || !(prop || _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__.IS_IOS) || isFullscreen) {
      return;
    }
    safeRequestFullscreen(elRef.current);
    setIsFullscreen(true);
  };
  const exitFullscreen = () => {
    if (!elRef.current) {
      return;
    }
    safeExitFullscreen();
    setIsFullscreen(false);
  };
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const element = elRef.current;
    const listener = () => {
      const isEnabled = Boolean(prop && document[prop]);
      setIsFullscreen(isEnabled);
      if (isEnabled) {
        enterCallback?.(false);
      } else {
        exitCallback?.(false);
      }
      // In Firefox fullscreen video controls are not visible by default, so we force them manually
      if (element instanceof HTMLVideoElement) element.controls = isEnabled;
    };
    const listenerEnter = () => {
      setIsFullscreen(true);
      if (enterCallback) enterCallback(true);
    };
    const listenerExit = () => {
      setIsFullscreen(false);
      if (exitCallback) exitCallback(false);
    };
    document.addEventListener('fullscreenchange', listener, false);
    document.addEventListener('webkitfullscreenchange', listener, false);
    document.addEventListener('mozfullscreenchange', listener, false);
    if (element) {
      element.addEventListener('webkitbeginfullscreen', listenerEnter, false);
      element.addEventListener('webkitendfullscreen', listenerExit, false);
    }
    return () => {
      document.removeEventListener('fullscreenchange', listener, false);
      document.removeEventListener('webkitfullscreenchange', listener, false);
      document.removeEventListener('mozfullscreenchange', listener, false);
      if (element) {
        element.removeEventListener('webkitbeginfullscreen', listenerEnter, false);
        element.removeEventListener('webkitendfullscreen', listenerExit, false);
      }
    };
    // eslint-disable-next-line
  }, []);
  if (!prop && !_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__.IS_IOS) {
    return [false];
  }
  return [isFullscreen, setFullscreen, exitFullscreen];
}
const useFullscreenStatus = () => {
  const [isFullscreen, setIsFullscreen] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const listener = () => {
      setIsFullscreen(checkIfFullscreen());
    };
    const removeElectronListener = window.electron?.on(_types_electron__WEBPACK_IMPORTED_MODULE_1__.ElectronEvent.FULLSCREEN_CHANGE, setIsFullscreen);
    window.electron?.isFullscreen().then(setIsFullscreen);
    document.addEventListener('fullscreenchange', listener, false);
    document.addEventListener('webkitfullscreenchange', listener, false);
    document.addEventListener('mozfullscreenchange', listener, false);
    return () => {
      removeElectronListener?.();
      document.removeEventListener('fullscreenchange', listener, false);
      document.removeEventListener('webkitfullscreenchange', listener, false);
      document.removeEventListener('mozfullscreenchange', listener, false);
    };
  }, []);
  return isFullscreen;
};
function getBrowserFullscreenElementProp() {
  if (typeof document.fullscreenElement !== 'undefined') {
    return 'fullscreenElement';
  } else if (typeof document.mozFullScreenElement !== 'undefined') {
    return 'mozFullScreenElement';
  } else if (typeof document.webkitFullscreenElement !== 'undefined') {
    return 'webkitFullscreenElement';
  }
  return '';
}
function checkIfFullscreen() {
  const fullscreenProp = getBrowserFullscreenElementProp();
  return Boolean(fullscreenProp && document[fullscreenProp]);
}
function safeRequestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.webkitEnterFullscreen) {
    element.webkitEnterFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
}
function safeExitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/***/ }),

/***/ "./src/types/electron.ts":
/*!*******************************!*\
  !*** ./src/types/electron.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElectronAction: () => (/* binding */ ElectronAction),
/* harmony export */   ElectronEvent: () => (/* binding */ ElectronEvent)
/* harmony export */ });
let ElectronEvent = /*#__PURE__*/function (ElectronEvent) {
  ElectronEvent["FULLSCREEN_CHANGE"] = "fullscreen-change";
  ElectronEvent["UPDATE_ERROR"] = "update-error";
  ElectronEvent["UPDATE_AVAILABLE"] = "update-available";
  ElectronEvent["DEEPLINK"] = "deeplink";
  return ElectronEvent;
}({});
let ElectronAction = /*#__PURE__*/function (ElectronAction) {
  ElectronAction["GET_IS_FULLSCREEN"] = "get-is-fullscreen";
  ElectronAction["INSTALL_UPDATE"] = "install-update";
  ElectronAction["HANDLE_DOUBLE_CLICK"] = "handle-double-click";
  ElectronAction["OPEN_NEW_WINDOW"] = "open-new-window";
  ElectronAction["SET_WINDOW_TITLE"] = "set-window-title";
  ElectronAction["SET_WINDOW_BUTTONS_POSITION"] = "set-window-buttons-position";
  ElectronAction["SET_IS_AUTO_UPDATE_ENABLED"] = "set-is-auto-update-enabled";
  ElectronAction["GET_IS_AUTO_UPDATE_ENABLED"] = "get-is-auto-update-enabled";
  ElectronAction["SET_IS_TRAY_ICON_ENABLED"] = "set-is-tray-icon-enabled";
  ElectronAction["GET_IS_TRAY_ICON_ENABLED"] = "get-is-tray-icon-enabled";
  ElectronAction["RESTORE_LOCAL_STORAGE"] = "restore-local-storage";
  return ElectronAction;
}({});

/***/ })

}]);
//# sourceMappingURL=src_components_right_DeleteMemberModal_tsx-src_global_selectors_calls_ts-src_global_selectors-18144d.19fdd1e938b2894b721a.js.map