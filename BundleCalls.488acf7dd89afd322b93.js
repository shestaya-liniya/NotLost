"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["BundleCalls"],{

/***/ "./src/bundles/calls.ts":
/*!******************************!*\
  !*** ./src/bundles/calls.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveCallHeader: () => (/* reexport safe */ _components_calls_ActiveCallHeader__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   GroupCall: () => (/* reexport safe */ _components_calls_group_GroupCall__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   PhoneCall: () => (/* reexport safe */ _components_calls_phone_PhoneCall__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   RatePhoneCallModal: () => (/* reexport safe */ _components_calls_phone_RatePhoneCallModal__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _global_actions_ui_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/actions/ui/calls */ "./src/global/actions/ui/calls.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _components_calls_group_GroupCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/calls/group/GroupCall */ "./src/components/calls/group/GroupCall.tsx");
/* harmony import */ var _components_calls_ActiveCallHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/calls/ActiveCallHeader */ "./src/components/calls/ActiveCallHeader.tsx");
/* harmony import */ var _components_calls_phone_PhoneCall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/calls/phone/PhoneCall */ "./src/components/calls/phone/PhoneCall.tsx");
/* harmony import */ var _components_calls_phone_RatePhoneCallModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/calls/phone/RatePhoneCallModal */ "./src/components/calls/phone/RatePhoneCallModal.tsx");






if (_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_SAFARI || _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_IOS) {
  document.addEventListener('click', _global_actions_ui_calls__WEBPACK_IMPORTED_MODULE_0__.initializeSoundsForSafari, {
    once: true
  });
}

/***/ }),

/***/ "./src/components/calls/ActiveCallHeader.scss":
/*!****************************************************!*\
  !*** ./src/components/calls/ActiveCallHeader.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/calls/ActiveCallHeader.tsx":
/*!***************************************************!*\
  !*** ./src/components/calls/ActiveCallHeader.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _global_selectors_calls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ActiveCallHeader_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActiveCallHeader.scss */ "./src/components/calls/ActiveCallHeader.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");








const ActiveCallHeader = ({
  groupCall,
  phoneCallUser,
  isCallPanelVisible
}) => {
  const {
    toggleGroupCallPanel
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.classList.toggle('has-call-header', Boolean(isCallPanelVisible));
    const updateButtonPosition = window.electron?.setWindowButtonsPosition || window.electron?.setTrafficLightPosition;
    updateButtonPosition?.(isCallPanelVisible ? 'lowered' : 'standard');
    return () => {
      document.body.classList.toggle('has-call-header', false);
      updateButtonPosition?.('standard');
    };
  }, [isCallPanelVisible]);
  function handleToggleGroupCallPanel() {
    toggleGroupCallPanel();
  }
  if (!groupCall && !phoneCallUser) return undefined;
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('ActiveCallHeader', isCallPanelVisible && 'open'),
    onClick: handleToggleGroupCallPanel,
    children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: "title",
      children: phoneCallUser?.firstName || groupCall?.title || lang('VoipGroupVoiceChat')
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const tabState = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTabState)(global);
  return {
    groupCall: tabState.isMasterTab ? (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_3__.selectActiveGroupCall)(global) : undefined,
    isCallPanelVisible: tabState.isCallPanelVisible,
    phoneCallUser: tabState.isMasterTab ? (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_3__.selectPhoneCallUser)(global) : undefined
  };
})(ActiveCallHeader)));

/***/ }),

/***/ "./src/components/calls/group/GroupCall.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/calls/group/GroupCall.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GroupCall-module__root","panelWrapper":"GroupCall-module__panelWrapper","panel":"GroupCall-module__panel","panelScrollTrigger":"GroupCall-module__panelScrollTrigger","panelHeader":"GroupCall-module__panelHeader","scrolled":"GroupCall-module__scrolled","fullscreen":"GroupCall-module__fullscreen","landscape":"GroupCall-module__landscape","headerButton":"GroupCall-module__headerButton","firstButton":"GroupCall-module__firstButton","lastButton":"GroupCall-module__lastButton","panelHeaderText":"GroupCall-module__panelHeaderText","title":"GroupCall-module__title","bigger":"GroupCall-module__bigger","subtitle":"GroupCall-module__subtitle","participants":"GroupCall-module__participants","participantVideos":"GroupCall-module__participantVideos","addParticipantButton":"GroupCall-module__addParticipantButton","videos":"GroupCall-module__videos","mainVideoContainer":"GroupCall-module__mainVideoContainer","videosHeader":"GroupCall-module__videosHeader","appFullscreen":"GroupCall-module__appFullscreen","videosHeaderLastButton":"GroupCall-module__videosHeaderLastButton","videosContent":"GroupCall-module__videosContent","actions":"GroupCall-module__actions","actionButton":"GroupCall-module__actionButton","destructive":"GroupCall-module__destructive","canRequestToSpeak":"GroupCall-module__canRequestToSpeak","muted":"GroupCall-module__muted","portrait":"GroupCall-module__portrait","noVideoParticipants":"GroupCall-module__noVideoParticipants","noSidebar":"GroupCall-module__noSidebar"});

/***/ }),

/***/ "./src/components/calls/group/GroupCall.tsx":
/*!**************************************************!*\
  !*** ./src/components/calls/group/GroupCall.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _global_actions_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/actions/calls */ "./src/global/actions/calls.ts");
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/secret-sauce */ "./src/lib/secret-sauce/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _global_selectors_calls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_window_useFullscreen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/window/useFullscreen */ "./src/hooks/window/useFullscreen.ts");
/* harmony import */ var _hooks_useGroupCallVideoLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hooks/useGroupCallVideoLayout */ "./src/components/calls/group/hooks/useGroupCallVideoLayout.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/Checkbox */ "./src/components/ui/Checkbox.tsx");
/* harmony import */ var _ui_FloatingActionButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/FloatingActionButton */ "./src/components/ui/FloatingActionButton.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _GroupCallParticipantList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./GroupCallParticipantList */ "./src/components/calls/group/GroupCallParticipantList.tsx");
/* harmony import */ var _GroupCallParticipantVideo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./GroupCallParticipantVideo */ "./src/components/calls/group/GroupCallParticipantVideo.tsx");
/* harmony import */ var _MicrophoneButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./MicrophoneButton */ "./src/components/calls/group/MicrophoneButton.tsx");
/* harmony import */ var _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./GroupCall.module.scss */ "./src/components/calls/group/GroupCall.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");

























const INTERSECTION_THROTTLE = 200;
const GroupCall = ({
  groupCallId,
  isCallPanelVisible,
  connectionState,
  participantsCount,
  title,
  meParticipant,
  isAdmin,
  participants,
  canInvite
}) => {
  const {
    toggleGroupCallVideo,
    toggleGroupCallPresentation,
    leaveGroupCall,
    toggleGroupCallPanel,
    connectToActiveGroupCall,
    playGroupCallSound,
    createGroupCallInviteLink
  } = (0,_global__WEBPACK_IMPORTED_MODULE_2__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const containerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const primaryVideoContainerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const secondaryVideoContainerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const panelScrollTriggerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const panelRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [isLeaving, setIsLeaving] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isOpen = !isCallPanelVisible && !isLeaving;
  const {
    observe
  } = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_10__.useIntersectionObserver)({
    rootRef: panelRef,
    throttleMs: INTERSECTION_THROTTLE,
    isDisabled: !isOpen
  });
  const hasScrolled = !(0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_10__.useIsIntersecting)(panelScrollTriggerRef, isOpen ? observe : undefined);
  const {
    isMobile,
    isLandscape
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [isFullscreen, openFullscreen, closeFullscreen] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [isSidebarOpen, openSidebar, closeSidebar] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_9__["default"])(true);
  const isLandscapeLayout = Boolean(isFullscreen && isLandscape);
  const isAppFullscreen = (0,_hooks_window_useFullscreen__WEBPACK_IMPORTED_MODULE_13__.useFullscreenStatus)();
  const firstPresentation = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return Object.values(participants).find(({
      presentation
    }) => presentation);
  }, [participants]);
  const videoParticipants = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => Object.values(participants).filter(({
    video,
    presentation
  }) => video || presentation).flatMap(({
    id,
    video,
    presentation
  }) => (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_7__.compact)([video ? {
    id,
    type: 'video'
  } : undefined, presentation ? {
    id,
    type: 'screen'
  } : undefined])), [participants]);
  const hasVideoParticipants = videoParticipants.length > 0;
  const groupCallTitle = title || lang('VoipGroupVoiceChat');
  const membersString = lang('Participants', participantsCount, 'i');
  const [isConfirmLeaveModalOpen, openConfirmLeaveModal, closeConfirmLeaveModal] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [isEndGroupCallModal, setIsEndGroupCallModal] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [shouldEndGroupCall, setShouldEndGroupCall] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const hasVideo = meParticipant?.hasVideoStream;
  const hasPresentation = meParticipant?.hasPresentationStream;
  const hasAudioStream = meParticipant?.hasAudioStream;
  const isConnecting = connectionState !== 'connected';
  const canSelfUnmute = meParticipant?.canSelfUnmute;
  const canRequestToSpeak = !canSelfUnmute && !hasAudioStream;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (connectionState === 'connected') {
      playGroupCallSound({
        sound: 'join'
      });
    } else if (connectionState === 'reconnecting') {
      playGroupCallSound({
        sound: 'connecting'
      });
    }
  }, [connectionState]);
  const handleCloseConfirmLeaveModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    closeConfirmLeaveModal();
    setIsEndGroupCallModal(false);
  });
  const handleToggleFullscreen = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    if (!containerRef.current || isMobile) return;
    if (isFullscreen) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
  });
  const handleToggleSidebar = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
  const handleToggleGroupCallPanel = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    toggleGroupCallPanel();
  });
  const handleInviteMember = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    createGroupCallInviteLink();
  });
  const handleClickVideo = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    toggleGroupCallVideo();
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    connectToActiveGroupCall();
  }, [connectToActiveGroupCall, groupCallId]);
  const handleLeaveGroupCall = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    if (isAdmin && !isConfirmLeaveModalOpen) {
      openConfirmLeaveModal();
      return;
    }
    playGroupCallSound({
      sound: 'leave'
    });
    setIsLeaving(true);
    closeConfirmLeaveModal();
  });
  const handleCloseAnimationEnd = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    if (!isLeaving) return;
    leaveGroupCall({
      shouldDiscard: shouldEndGroupCall
    });
  });
  const handleToggleGroupCallPresentation = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    toggleGroupCallPresentation();
  });
  const canPinVideo = videoParticipants.length > 1 && !isMobile;
  const isLandscapeWithVideos = isLandscapeLayout && hasVideoParticipants;
  const [pinnedVideo, setPinnedVideo] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const {
    videoLayout,
    panelOffset
  } = (0,_hooks_useGroupCallVideoLayout__WEBPACK_IMPORTED_MODULE_14__["default"])({
    primaryContainerRef: primaryVideoContainerRef,
    secondaryContainerRef: secondaryVideoContainerRef,
    videoParticipants,
    isLandscapeLayout,
    pinnedVideo
  });
  const handleSetPinnedVideo = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(video => {
    setPinnedVideo(video);
    if (video && !isFullscreen) {
      openFullscreen();
    }
  });
  const handleOpenFirstPresentation = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    if (!firstPresentation) return;
    setPinnedVideo({
      id: firstPresentation.id,
      type: 'screen'
    });
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useEffect)(handleOpenFirstPresentation, [handleOpenFirstPresentation, Boolean(firstPresentation)]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!pinnedVideo) return;
    if (!videoParticipants.some(l => l.type === pinnedVideo.type && l.id === pinnedVideo.id)) {
      setPinnedVideo(undefined);
    }
  }, [pinnedVideo, videoLayout, videoParticipants]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_ui_Modal__WEBPACK_IMPORTED_MODULE_19__["default"], {
    isOpen: isOpen,
    onClose: toggleGroupCallPanel,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].root, (isFullscreen || isMobile) && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].fullscreen, isAppFullscreen && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].appFullscreen, isLandscapeLayout && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].landscape, !hasVideoParticipants && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].noVideoParticipants, !isLandscapeLayout && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].portrait, !isSidebarOpen && isLandscapeWithVideos && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].noSidebar),
    dialogRef: containerRef,
    onCloseAnimationEnd: handleCloseAnimationEnd,
    children: [isLandscapeWithVideos && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
      className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].videos,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
        className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].videosHeader,
        children: [!isMobile && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
          round: true,
          size: "smaller",
          color: "translucent",
          onClick: handleToggleFullscreen,
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].headerButton, _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].firstButton),
          ariaLabel: lang(isFullscreen ? 'AccExitFullscreen' : 'AccSwitchToFullscreen'),
          children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
            name: isFullscreen ? 'smallscreen' : 'fullscreen'
          })
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("h3", {
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].title, _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].bigger),
          children: title || lang('VoipGroupVoiceChat')
        }), isLandscapeWithVideos && !isSidebarOpen && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
          round: true,
          size: "smaller",
          color: "translucent",
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].headerButton, _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].videosHeaderLastButton),
          onClick: handleToggleSidebar,
          ariaLabel: lang('AccDescrExpandPanel'),
          children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
            name: "sidebar"
          })
        })]
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
        className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].videosContent,
        ref: primaryVideoContainerRef
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
      className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].panelWrapper,
      ref: panelRef,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].panel, 'custom-scroll'),
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
          className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].panelScrollTrigger,
          ref: panelScrollTriggerRef
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].panelHeader, hasScrolled && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].scrolled),
          children: [!isLandscapeWithVideos && !isMobile && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            round: true,
            size: "smaller",
            color: "translucent",
            ripple: !isMobile,
            className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].firstButton, _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].headerButton),
            onClick: handleToggleFullscreen,
            ariaLabel: lang('AccSwitchToFullscreen'),
            children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
              name: "fullscreen"
            })
          }), isMobile && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            round: true,
            size: "smaller",
            color: "translucent",
            onClick: handleToggleGroupCallPanel,
            className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].headerButton, _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].firstButton),
            ariaLabel: lang('Close'),
            children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
              name: "close"
            })
          }), isLandscapeWithVideos && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            round: true,
            size: "smaller",
            ripple: !isMobile,
            className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].firstButton, _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].headerButton),
            color: "translucent",
            onClick: handleToggleSidebar,
            ariaLabel: lang('AccDescrCollapsePanel'),
            children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
              name: "sidebar"
            })
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
            className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].panelHeaderText,
            children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("h3", {
              className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].title, isLandscapeWithVideos && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].bigger),
              children: isLandscapeWithVideos ? membersString : groupCallTitle
            }), !isLandscapeWithVideos && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("span", {
              className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].subtitle,
              children: membersString
            })]
          }), !isLandscapeWithVideos && canInvite && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            round: true,
            size: "smaller",
            ripple: !isMobile,
            className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].lastButton, _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].headerButton),
            color: "translucent",
            onClick: handleInviteMember,
            ariaLabel: lang('VoipGroupInviteMember'),
            children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
              name: "add-user"
            })
          })]
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
          className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].participants,
          children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
            className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].participantVideos,
            ref: secondaryVideoContainerRef,
            style: `height: ${panelOffset}px;`,
            children: videoLayout.map(layout => {
              const participant = participants[layout.participantId];
              if (!layout.isRemounted || !participant) {
                return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
                  teactOrderKey: layout.orderKey
                }, `${layout.participantId}_${layout.type}`);
              }
              return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_GroupCallParticipantVideo__WEBPACK_IMPORTED_MODULE_21__["default"], {
                teactOrderKey: layout.orderKey,
                layout: layout,
                canPin: canPinVideo,
                setPinned: handleSetPinnedVideo,
                pinnedVideo: pinnedVideo,
                participant: participant
              }, `${layout.participantId}_${layout.type}`);
            })
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_GroupCallParticipantList__WEBPACK_IMPORTED_MODULE_20__["default"], {
            panelOffset: panelOffset,
            isLandscape: isLandscapeWithVideos
          })]
        })]
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_FloatingActionButton__WEBPACK_IMPORTED_MODULE_18__["default"], {
        isShown: isLandscapeWithVideos && canInvite,
        onClick: handleInviteMember,
        className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].addParticipantButton,
        ariaLabel: lang('VoipGroupInviteMember'),
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "add-user-filled"
        })
      }, "add-participant")]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
      className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].mainVideoContainer,
      children: videoLayout.map(layout => {
        const participant = participants[layout.participantId];
        if (layout.isRemounted || !participant) {
          return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
            teactOrderKey: layout.orderKey
          }, `${layout.participantId}_${layout.type}`);
        }
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_GroupCallParticipantVideo__WEBPACK_IMPORTED_MODULE_21__["default"], {
          teactOrderKey: layout.orderKey,
          layout: layout,
          canPin: canPinVideo,
          setPinned: handleSetPinnedVideo,
          pinnedVideo: pinnedVideo,
          participant: participant,
          className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].video
        }, `${layout.participantId}_${layout.type}`);
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
      className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].actions,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
        round: true,
        size: "default",
        ripple: true,
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].actionButton, !hasAudioStream && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].muted, canRequestToSpeak && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].canRequestToSpeak),
        onClick: handleClickVideo,
        ariaLabel: lang(hasVideo ? 'VoipStopVideo' : 'VoipStartVideo'),
        disabled: isConnecting,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: !hasVideo ? 'video-stop' : 'video'
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
        round: true,
        size: "default",
        ripple: true,
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].actionButton, !hasAudioStream && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].muted, canRequestToSpeak && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].canRequestToSpeak),
        onClick: handleToggleGroupCallPresentation,
        ariaLabel: lang(hasPresentation ? 'lng_group_call_screen_share_stop' : 'lng_group_call_tooltip_screen'),
        disabled: isConnecting || !_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__.IS_SCREENSHARE_SUPPORTED,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: !hasPresentation ? 'share-screen-stop' : 'share-screen'
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_MicrophoneButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].actionButton
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
        round: true,
        size: "default",
        ripple: true,
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].actionButton, !hasAudioStream && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].muted, canRequestToSpeak && _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].canRequestToSpeak),
        ariaLabel: lang('lng_group_call_settings'),
        disabled: true,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "settings-filled"
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
        round: true,
        size: "default",
        ripple: true,
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].actionButton, _GroupCall_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].destructive),
        onClick: handleLeaveGroupCall,
        ariaLabel: lang('lng_group_call_leave'),
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "close"
        })
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_ui_Modal__WEBPACK_IMPORTED_MODULE_19__["default"], {
      isOpen: isConfirmLeaveModalOpen,
      onClose: handleCloseConfirmLeaveModal,
      className: "error",
      title: lang(isEndGroupCallModal ? 'VoipGroupEndAlertTitle' : 'VoipGroupLeaveAlertTitle'),
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("p", {
        children: lang(isEndGroupCallModal ? 'VoipGroupEndAlertText' : 'VoipGroupLeaveAlertText')
      }), !isEndGroupCallModal && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "dialog-checkbox",
        label: lang('VoipGroupEndChat'),
        checked: shouldEndGroupCall,
        onCheck: setShouldEndGroupCall
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
        className: "dialog-buttons",
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
          isText: true,
          className: "confirm-dialog-button",
          onClick: handleLeaveGroupCall,
          children: lang(isEndGroupCallModal ? 'VoipGroupEnd' : 'VoipGroupLeave')
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
          isText: true,
          className: "confirm-dialog-button",
          onClick: handleCloseConfirmLeaveModal,
          children: lang('Cancel')
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_2__.withGlobal)((global, {
  groupCallId
}) => {
  const {
    connectionState,
    title,
    participants,
    participantsCount,
    chatId
  } = (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_5__.selectGroupCall)(global, groupCallId) || {};
  const chat = chatId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChat)(global, chatId) : undefined;
  return {
    connectionState,
    title: title || chat?.title,
    participantsCount,
    meParticipant: (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_5__.selectGroupCallParticipant)(global, groupCallId, global.currentUserId),
    isCallPanelVisible: Boolean((0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTabState)(global).isCallPanelVisible),
    isAdmin: (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_5__.selectIsAdminInActiveGroupCall)(global),
    participants,
    canInvite: (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_5__.selectCanInviteToActiveGroupCall)(global)
  };
})(GroupCall)));

/***/ }),

/***/ "./src/components/calls/group/GroupCallParticipant.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/calls/group/GroupCallParticipant.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GroupCallParticipant-module__root","subtitle":"GroupCallParticipant-module__subtitle","subtitleText":"GroupCallParticipant-module__subtitleText","icon":"GroupCallParticipant-module__icon","subtitleBlue":"GroupCallParticipant-module__subtitleBlue","subtitleRed":"GroupCallParticipant-module__subtitleRed","subtitleGreen":"GroupCallParticipant-module__subtitleGreen","avatar":"GroupCallParticipant-module__avatar"});

/***/ }),

/***/ "./src/components/calls/group/GroupCallParticipant.tsx":
/*!*************************************************************!*\
  !*** ./src/components/calls/group/GroupCallParticipant.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/secret-sauce */ "./src/lib/secret-sauce/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _helpers_formatGroupCallVolume__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/formatGroupCallVolume */ "./src/components/calls/group/helpers/formatGroupCallVolume.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_FullNameTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_ListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/ListItem */ "./src/components/ui/ListItem.tsx");
/* harmony import */ var _GroupCallParticipantMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GroupCallParticipantMenu */ "./src/components/calls/group/GroupCallParticipantMenu.tsx");
/* harmony import */ var _OutlinedMicrophoneIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OutlinedMicrophoneIcon */ "./src/components/calls/group/OutlinedMicrophoneIcon.tsx");
/* harmony import */ var _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./GroupCallParticipant.module.scss */ "./src/components/calls/group/GroupCallParticipant.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");


















const GroupCallParticipant = ({
  participant,
  peer
}) => {
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const menuRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    isSelf,
    isMutedByMe,
    isMuted,
    hasVideoStream,
    hasPresentationStream
  } = participant;
  const isSpeaking = (participant.amplitude || 0) > _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__.THRESHOLD;
  const isRaiseHand = Boolean(participant.raiseHandRating);
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleContextMenu,
    handleBeforeContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_8__["default"])(ref, isSelf);
  const getTriggerElement = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ref.current, []);
  const getRootElement = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ref.current.closest('.custom-scroll, .no-scrollbar'), []);
  const getMenuElement = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => menuRef.current, []);
  const getLayout = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ({
    withPortal: true
  }), []);
  const hasCustomVolume = Boolean(!isMuted && isSpeaking && participant.volume && participant.volume !== _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_DEFAULT_VOLUME);
  const [aboutText, aboutColor] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isMutedByMe) {
      return [lang('VoipGroupMutedForMe'), _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subtitleRed];
    }
    if (isRaiseHand) {
      return [lang('WantsToSpeak'), _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subtitleBlue];
    }
    if (hasCustomVolume) {
      return [lang('SpeakingWithVolume', (0,_helpers_formatGroupCallVolume__WEBPACK_IMPORTED_MODULE_7__["default"])(participant)).replace('%%', '%'), _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subtitleGreen];
    }
    if (!isMuted && isSpeaking) {
      return [lang('Speaking'), _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subtitleGreen];
    }
    if (isSelf) {
      return [lang('ThisIsYou'), _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subtitleBlue];
    }
    return participant.about ? [participant.about, ''] : [lang('Listening'), _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subtitleBlue];
  }, [isMutedByMe, isRaiseHand, hasCustomVolume, isMuted, isSpeaking, isSelf, participant, lang]);
  if (!peer) {
    return undefined;
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    leftElement: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      peer: peer,
      className: _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].avatar
    }),
    rightElement: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_OutlinedMicrophoneIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
      participant: participant,
      className: _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].icon
    }),
    className: _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].root,
    onClick: handleContextMenu,
    onMouseDown: handleBeforeContextMenu,
    onContextMenu: handleContextMenu,
    multiline: true,
    ripple: true,
    ref: ref,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_common_FullNameTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
      peer: peer,
      withEmojiStatus: true,
      className: _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].title
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subtitle, 'subtitle', aboutColor),
      children: [hasPresentationStream && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "share-screen"
      }), hasVideoStream && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "video"
      }), hasCustomVolume && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "speaker"
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
        className: _GroupCallParticipant_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subtitleText,
        children: (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(aboutText)
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_GroupCallParticipantMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
      participant: participant,
      isDropdownOpen: isContextMenuOpen,
      anchor: contextMenuAnchor,
      getTriggerElement: getTriggerElement,
      getRootElement: getRootElement,
      getMenuElement: getMenuElement,
      getLayout: getLayout,
      onClose: handleContextMenuClose,
      onCloseAnimationEnd: handleContextMenuHide,
      menuRef: menuRef
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  participant
}) => {
  return {
    peer: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, participant.id) || (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChat)(global, participant.id)
  };
})(GroupCallParticipant)));

/***/ }),

/***/ "./src/components/calls/group/GroupCallParticipantList.module.scss":
/*!*************************************************************************!*\
  !*** ./src/components/calls/group/GroupCallParticipantList.module.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GroupCallParticipantList-module__root","portrait":"GroupCallParticipantList-module__portrait"});

/***/ }),

/***/ "./src/components/calls/group/GroupCallParticipantList.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/calls/group/GroupCallParticipantList.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useInfiniteScroll */ "./src/hooks/useInfiniteScroll.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/InfiniteScroll */ "./src/components/ui/InfiniteScroll.tsx");
/* harmony import */ var _GroupCallParticipant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GroupCallParticipant */ "./src/components/calls/group/GroupCallParticipant.tsx");
/* harmony import */ var _GroupCallParticipantList_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GroupCallParticipantList.module.scss */ "./src/components/calls/group/GroupCallParticipantList.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");











const GroupCallParticipantList = ({
  panelOffset,
  participants,
  participantsCount,
  isLandscape
}) => {
  const {
    loadMoreGroupCallParticipants
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const orderedParticipantIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return Object.values(participants || {}).sort(compareParticipants).map(participant => participant.id);
  }, [participants]);
  const handleLoadMoreGroupCallParticipants = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    loadMoreGroupCallParticipants();
  });
  const [viewportIds, getMore] = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__["default"])(handleLoadMoreGroupCallParticipants, orderedParticipantIds, orderedParticipantIds.length >= participantsCount);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_7__["default"], {
    items: viewportIds,
    onLoadMore: getMore,
    style: `transform: translateY(${panelOffset}px);`,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_GroupCallParticipantList_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].root, !isLandscape && _GroupCallParticipantList_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].portrait),
    children: participants && viewportIds?.map(participantId => participants[participantId] && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GroupCallParticipant__WEBPACK_IMPORTED_MODULE_8__["default"], {
      teactOrderKey: orderedParticipantIds.indexOf(participantId),
      participant: participants[participantId]
    }, participantId))
  });
};
function compareParticipants(a, b) {
  return (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_4__.compareFields)(!a.isMuted, !b.isMuted) || (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_4__.compareFields)(a.presentation, b.presentation) || (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_4__.compareFields)(a.video, b.video) || (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_4__.compareFields)(a.raiseHandRating, b.raiseHandRating);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    participantsCount,
    participants
  } = (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_2__.selectActiveGroupCall)(global) || {};
  return {
    participants,
    participantsCount: participantsCount || 0
  };
})(GroupCallParticipantList)));

/***/ }),

/***/ "./src/components/calls/group/GroupCallParticipantMenu.scss":
/*!******************************************************************!*\
  !*** ./src/components/calls/group/GroupCallParticipantMenu.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/calls/group/GroupCallParticipantMenu.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/calls/group/GroupCallParticipantMenu.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_selectors_calls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_useRunThrottled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useRunThrottled */ "./src/hooks/useRunThrottled.ts");
/* harmony import */ var _common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _right_DeleteMemberModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../right/DeleteMemberModal */ "./src/components/right/DeleteMemberModal.tsx");
/* harmony import */ var _ui_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/Menu */ "./src/components/ui/Menu.tsx");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _GroupCallParticipantMenu_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GroupCallParticipantMenu.scss */ "./src/components/calls/group/GroupCallParticipantMenu.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");
















const SPEAKER_ICON_DISABLED_SEGMENT = [0, 17];
const SPEAKER_ICON_ENABLED_SEGMENT = [17, 34];
const VOLUME_ZERO = 0;
const VOLUME_LOW = 50;
const VOLUME_MEDIUM = 100;
const VOLUME_NORMAL = 150;
const VOLUME_CHANGE_THROTTLE = 500;
const SPEAKER_ICON_SIZE = 24;
const GroupCallParticipantMenu = ({
  participant,
  onCloseAnimationEnd,
  onClose,
  isDropdownOpen,
  isAdmin,
  menuRef,
  ...menuPositionOptions
}) => {
  const {
    toggleGroupCallMute,
    setGroupCallParticipantVolume,
    toggleGroupCallPanel,
    openChat,
    requestToSpeak
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [isDeleteUserModalOpen, openDeleteUserModal, closeDeleteUserModal] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const id = participant?.id;
  const {
    isMutedByMe,
    isMuted,
    isSelf,
    canSelfUnmute
  } = participant || {};
  const isRaiseHand = Boolean(participant?.raiseHandRating);
  const shouldRaiseHand = !canSelfUnmute && isMuted;
  const [localVolume, setLocalVolume] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(isMutedByMe ? VOLUME_ZERO : (participant?.volume || _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_DEFAULT_VOLUME) / _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_VOLUME_MULTIPLIER);
  const [shouldPlay, setShouldPlay] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isLocalVolumeZero = localVolume === VOLUME_ZERO;
  const speakerIconPlaySegment = isLocalVolumeZero ? SPEAKER_ICON_DISABLED_SEGMENT : SPEAKER_ICON_ENABLED_SEGMENT;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDropdownOpen) return;
    setShouldPlay(false);
  }, [isDropdownOpen]);
  const handleSetLocalVolume = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(volume => {
    setLocalVolume(volume);
    const isNewLocalVolumeZero = volume === VOLUME_ZERO;
    setShouldPlay(isNewLocalVolumeZero !== isLocalVolumeZero);
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLocalVolume(isMutedByMe ? VOLUME_ZERO : (participant?.volume || _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_DEFAULT_VOLUME) / _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_VOLUME_MULTIPLIER);
    // We only want to initialize local volume when switching participants and ignore following updates from server
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, [id]);
  const runThrottled = (0,_hooks_useRunThrottled__WEBPACK_IMPORTED_MODULE_9__["default"])(VOLUME_CHANGE_THROTTLE);
  const handleRemove = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(e => {
    e.stopPropagation();
    openDeleteUserModal();
    onClose();
  });
  const handleCancelRequestToSpeak = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(e => {
    e.stopPropagation();
    requestToSpeak({
      value: false
    });
    onClose();
  });
  const handleMute = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(e => {
    e.stopPropagation();
    onClose();
    if (!isAdmin) {
      handleSetLocalVolume(isMutedByMe ? _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_DEFAULT_VOLUME / _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_VOLUME_MULTIPLIER : VOLUME_ZERO);
    } else if (shouldRaiseHand) {
      handleSetLocalVolume((participant?.volume ?? _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_DEFAULT_VOLUME) / _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_VOLUME_MULTIPLIER);
    }
    toggleGroupCallMute({
      participantId: id,
      value: isAdmin ? !shouldRaiseHand : !isMutedByMe
    });
  });
  const handleOpenProfile = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(e => {
    e.stopPropagation();
    toggleGroupCallPanel();
    openChat({
      id
    });
    onClose();
  });
  const handleChangeVolume = e => {
    const value = Number(e.target.value);
    handleSetLocalVolume(value);
    runThrottled(() => {
      if (value === VOLUME_ZERO) {
        toggleGroupCallMute({
          participantId: id,
          value: true
        });
      } else {
        setGroupCallParticipantVolume({
          participantId: id,
          volume: Math.floor(value * _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_VOLUME_MULTIPLIER)
        });
      }
    });
  };
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
      isOpen: isDropdownOpen,
      ref: menuRef,
      withPortal: true,
      onClose: onClose,
      onCloseAnimationEnd: onCloseAnimationEnd,
      className: "participant-menu with-menu-transitions",
      ...menuPositionOptions,
      children: [!isSelf && !shouldRaiseHand && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "group",
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('volume-control', localVolume < VOLUME_LOW && 'low', localVolume >= VOLUME_LOW && localVolume < VOLUME_MEDIUM && 'medium', localVolume >= VOLUME_MEDIUM && localVolume < VOLUME_NORMAL && 'normal', localVolume >= VOLUME_NORMAL && 'high'),
          children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("input", {
            type: "range",
            min: "0",
            max: "200",
            value: localVolume,
            onChange: handleChangeVolume
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "info",
            children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
              tgsUrl: _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_5__.LOCAL_TGS_URLS.Speaker,
              play: shouldPlay ? speakerIconPlaySegment.toString() : false,
              playSegment: speakerIconPlaySegment,
              size: SPEAKER_ICON_SIZE
            }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
              children: [localVolume, "%"]
            })]
          })]
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "group",
        children: [isRaiseHand && isSelf && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
          icon: "stop-raising-hand",
          onClick: handleCancelRequestToSpeak,
          children: lang('VoipGroupCancelRaiseHand')
        }), !isSelf && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
          icon: "user",
          onClick: handleOpenProfile,
          children: lang('VoipGroupOpenProfile')
        }), !isSelf &&
        // TODO cross mic
        (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
          icon: isMuted ? isAdmin && shouldRaiseHand ? 'allow-speak' : 'microphone-alt' : 'microphone-alt',
          onClick: handleMute,
          children: isAdmin ? lang(shouldRaiseHand ? 'VoipGroupAllowToSpeak' : 'VoipMute') : lang(isMutedByMe ? 'VoipGroupUnmuteForMe' : 'VoipGroupMuteForMe')
        }), !isSelf && isAdmin &&
        // TODO replace with hand
        (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
          icon: "delete-user",
          destructive: true,
          onClick: handleRemove,
          children: lang('VoipGroupUserRemove')
        })]
      })]
    }), !isSelf && isAdmin && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_right_DeleteMemberModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      isOpen: isDeleteUserModalOpen,
      userId: id,
      onClose: closeDeleteUserModal
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  return {
    isAdmin: (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_3__.selectIsAdminInActiveGroupCall)(global)
  };
})(GroupCallParticipantMenu)));

/***/ }),

/***/ "./src/components/calls/group/GroupCallParticipantVideo.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/calls/group/GroupCallParticipantVideo.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"GroupCallParticipantVideo-module__wrapper","hidden":"GroupCallParticipantVideo-module__hidden","noAnimate":"GroupCallParticipantVideo-module__noAnimate","root":"GroupCallParticipantVideo-module__root","speaking":"GroupCallParticipantVideo-module__speaking","loader":"GroupCallParticipantVideo-module__loader","video":"GroupCallParticipantVideo-module__video","videoFallback":"GroupCallParticipantVideo-module__videoFallback GroupCallParticipantVideo-module__video","thumbnailWrapper":"GroupCallParticipantVideo-module__thumbnailWrapper","thumbnail":"GroupCallParticipantVideo-module__thumbnail","flipped":"GroupCallParticipantVideo-module__flipped","pinButton":"GroupCallParticipantVideo-module__pinButton","bottomPanel":"GroupCallParticipantVideo-module__bottomPanel","info":"GroupCallParticipantVideo-module__info","pinned":"GroupCallParticipantVideo-module__pinned","name":"GroupCallParticipantVideo-module__name","status":"GroupCallParticipantVideo-module__status","icon":"GroupCallParticipantVideo-module__icon"});

/***/ }),

/***/ "./src/components/calls/group/GroupCallParticipantVideo.tsx":
/*!******************************************************************!*\
  !*** ./src/components/calls/group/GroupCallParticipantVideo.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _lib_fastBlur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/fastBlur */ "./src/lib/fastBlur.js");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/secret-sauce */ "./src/lib/secret-sauce/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/animation */ "./src/util/animation.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/schedulers */ "./src/util/schedulers.ts");
/* harmony import */ var _helpers_formatGroupCallVolume__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/formatGroupCallVolume */ "./src/components/calls/group/helpers/formatGroupCallVolume.ts");
/* harmony import */ var _hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/schedulers/useInterval */ "./src/hooks/schedulers/useInterval.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_FullNameTitle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/placeholder/Skeleton */ "./src/components/ui/placeholder/Skeleton.tsx");
/* harmony import */ var _GroupCallParticipantMenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./GroupCallParticipantMenu */ "./src/components/calls/group/GroupCallParticipantMenu.tsx");
/* harmony import */ var _OutlinedMicrophoneIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./OutlinedMicrophoneIcon */ "./src/components/calls/group/OutlinedMicrophoneIcon.tsx");
/* harmony import */ var _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./GroupCallParticipantVideo.module.scss */ "./src/components/calls/group/GroupCallParticipantVideo.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");
























const BLUR_RADIUS = 2;
const BLUR_ITERATIONS = 2;
const VIDEO_FALLBACK_UPDATE_INTERVAL = 1000;
const GroupCallParticipantVideo = ({
  layout,
  pinnedVideo,
  setPinned,
  canPin,
  className,
  participant,
  user,
  chat
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const thumbnailRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const videoRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const videoFallbackRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    x,
    y,
    width,
    height,
    noAnimate,
    isRemoved,
    type
  } = layout;
  const {
    isSelf,
    isMutedByMe,
    isMuted
  } = participant;
  const isPinned = pinnedVideo?.id === participant.id && pinnedVideo?.type === type;
  const isSpeaking = (participant.amplitude || 0) > _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_5__.THRESHOLD;
  const isRaiseHand = Boolean(participant.raiseHandRating);
  const shouldFlipVideo = type === 'video' && participant.isSelf;
  const status = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isSelf) {
      return lang('ThisIsYou');
    }
    if (isMutedByMe) {
      return lang('VoipGroupMutedForMe');
    }
    if (isRaiseHand) {
      return lang('WantsToSpeak');
    }
    if (isMuted || !isSpeaking) {
      return lang('Listening');
    }
    if (participant.volume && participant.volume !== _config__WEBPACK_IMPORTED_MODULE_2__.GROUP_CALL_DEFAULT_VOLUME) {
      return lang('SpeakingWithVolume', (0,_helpers_formatGroupCallVolume__WEBPACK_IMPORTED_MODULE_11__["default"])(participant)).replace('%%', '%');
    }
    return lang('Speaking');
  }, [isSelf, isMutedByMe, isRaiseHand, isMuted, isSpeaking, participant, lang]);
  const prevLayoutRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!isRemoved) {
    prevLayoutRef.current = layout;
  }
  const {
    x: prevX,
    y: prevY,
    width: prevWidth,
    height: prevHeight
  } = prevLayoutRef.current || {};
  const [currentX, currentY, currentWidth, currentHeight] = isRemoved ? [prevX, prevY, prevWidth, prevHeight] : [x, y, width, height];
  const [isHidden, setIsHidden] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(!noAnimate);
  const streams = (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_5__.getUserStreams)(user?.id || chat.id);
  const actualStream = type === 'video' ? streams?.video : streams?.presentation;
  const streamRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(actualStream);
  if (actualStream?.active && actualStream?.getVideoTracks()[0].enabled) {
    streamRef.current = actualStream;
  }
  const stream = streamRef.current;
  const handleInactive = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    const video = videoRef.current;
    if (!video) return;
    // eslint-disable-next-line no-null/no-null
    video.srcObject = null;
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    stream?.addEventListener('inactive', handleInactive);
    return () => {
      stream?.removeEventListener('inactive', handleInactive);
    };
  }, [handleInactive, stream]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsHidden(false);
  }, []);
  const [isLoading, setIsLoading] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const handleCanPlay = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    setIsLoading(false);
  });

  // When video stream is removed, the video element starts showing empty black screen.
  // To avoid that, we hide the video element and show the fallback frame instead, which is constantly updated
  // every VIDEO_FALLBACK_UPDATE_INTERVAL milliseconds.
  (0,_hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    if (!stream?.active) return;
    const video = videoRef.current;
    const canvas = videoFallbackRef.current;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation)(() => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    });
  }, VIDEO_FALLBACK_UPDATE_INTERVAL);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const video = videoRef.current;
    const thumbnail = thumbnailRef.current;
    if (!video || !thumbnail || !stream) return undefined;
    const ctx = thumbnail.getContext('2d', {
      alpha: false
    });
    if (!ctx) return undefined;
    let isDrawing = true;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation)(() => {
      if (!isDrawing) return;
      thumbnail.width = 16;
      thumbnail.height = 16;
      ctx.filter = 'blur(2px)';
      const draw = () => {
        if (!isDrawing) return false;
        if (!stream.active) {
          return false;
        }
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, thumbnail.width, thumbnail.height);
        if (!_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_8__.IS_CANVAS_FILTER_SUPPORTED) {
          (0,_lib_fastBlur__WEBPACK_IMPORTED_MODULE_3__["default"])(ctx, 0, 0, thumbnail.width, thumbnail.height, BLUR_RADIUS, BLUR_ITERATIONS);
        }
        return true;
      };
      (0,_util_animation__WEBPACK_IMPORTED_MODULE_7__.animate)(draw, _util_schedulers__WEBPACK_IMPORTED_MODULE_10__.fastRaf);
    });
    return () => {
      isDrawing = false;
    };
  }, [stream]);
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const menuRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_13__["default"])(ref, isSelf);
  const getTriggerElement = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ref.current, []);
  const getRootElement = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ref.current.closest('.custom-scroll, .no-scrollbar'), []);
  const getMenuElement = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => menuRef.current, []);
  const getLayout = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ({
    withPortal: true
  }), []);
  const handleClickPin = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setPinned(!isPinned ? {
      id: user?.id || chat.id,
      type
    } : undefined);
  }, [chat, isPinned, setPinned, type, user?.id]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(_GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].wrapper, (isHidden || isRemoved) && _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].hidden, noAnimate && _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].noAnimate, className, isPinned && _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].pinned),
    style: `--x: ${currentX}px; --y: ${currentY}px; --width: ${currentWidth}px; --height: ${currentHeight}px;`,
    ref: ref,
    onContextMenu: handleContextMenu,
    onDoubleClick: canPin ? handleClickPin : undefined,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(_GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].root, isSpeaking && _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].speaking),
      children: [isLoading && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(_GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].video, _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].loader)
      }), stream && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("video", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(_GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].video, shouldFlipVideo && _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].flipped),
        muted: true,
        autoPlay: true,
        playsInline: true,
        srcObject: stream,
        ref: videoRef,
        onCanPlay: handleCanPlay
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("canvas", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(_GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].videoFallback, shouldFlipVideo && _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].flipped),
        ref: videoFallbackRef
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].thumbnailWrapper,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("canvas", {
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(_GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].thumbnail, shouldFlipVideo && _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].flipped),
          ref: thumbnailRef
        })
      }), canPin && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
        round: true,
        size: "smaller",
        ripple: true,
        color: "translucent",
        className: _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].pinButton,
        ariaLabel: lang(isPinned ? 'lng_group_call_context_unpin_camera' : 'lng_group_call_context_pin_camera'),
        onClick: handleClickPin,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
          name: isPinned ? 'unpin' : 'pin'
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].bottomPanel,
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].info,
          children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_common_FullNameTitle__WEBPACK_IMPORTED_MODULE_16__["default"], {
            peer: user || chat,
            className: _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].name
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].status,
            children: status
          })]
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_OutlinedMicrophoneIcon__WEBPACK_IMPORTED_MODULE_21__["default"], {
          participant: participant,
          className: _GroupCallParticipantVideo_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].icon,
          noColor: true
        })]
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_GroupCallParticipantMenu__WEBPACK_IMPORTED_MODULE_20__["default"], {
      participant: participant,
      isDropdownOpen: isContextMenuOpen,
      anchor: contextMenuAnchor,
      getTriggerElement: getTriggerElement,
      getRootElement: getRootElement,
      getMenuElement: getMenuElement,
      getLayout: getLayout,
      onClose: handleContextMenuClose,
      onCloseAnimationEnd: handleContextMenuHide,
      menuRef: menuRef
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  participant
}) => {
  return {
    user: participant.isUser ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectUser)(global, participant.id) : undefined,
    chat: !participant.isUser ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectChat)(global, participant.id) : undefined
  };
})(GroupCallParticipantVideo)));

/***/ }),

/***/ "./src/components/calls/group/MicrophoneButton.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/calls/group/MicrophoneButton.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"MicrophoneButton-module__root","spinner":"MicrophoneButton-module__spinner","spinnerVisible":"MicrophoneButton-module__spinnerVisible","mutedByAdmin":"MicrophoneButton-module__mutedByAdmin","canUnmute":"MicrophoneButton-module__canUnmute","icon":"MicrophoneButton-module__icon"});

/***/ }),

/***/ "./src/components/calls/group/MicrophoneButton.tsx":
/*!*********************************************************!*\
  !*** ./src/components/calls/group/MicrophoneButton.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_vibrate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/vibrate */ "./src/util/vibrate.ts");
/* harmony import */ var _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");
/* harmony import */ var _common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/Spinner */ "./src/components/ui/Spinner.tsx");
/* harmony import */ var _MicrophoneButton_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MicrophoneButton.module.scss */ "./src/components/calls/group/MicrophoneButton.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");













const CONNECTION_STATE_DEFAULT = 'discarded';
const REQUEST_TO_SPEAK_THROTTLE = 3000;
const HOLD_TO_SPEAK_TIME = 200;
const ICON_SIZE = 36;
const MicrophoneButton = ({
  className,
  noAudioStream,
  canSelfUnmute,
  isMuted,
  connectionState
}) => {
  const {
    toggleGroupCallMute,
    requestToSpeak,
    playGroupCallSound
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const muteMouseDownState = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)('up');
  const [isRequestingToSpeak, setIsRequestingToSpeak] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isConnecting = connectionState !== 'connected';
  const shouldRaiseHand = !canSelfUnmute && isMuted;
  const prevShouldRaiseHand = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__["default"])(shouldRaiseHand);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevShouldRaiseHand && !shouldRaiseHand) {
      playGroupCallSound({
        sound: 'allowTalk'
      });
    }
  }, [playGroupCallSound, prevShouldRaiseHand, shouldRaiseHand]);

  // Voice mini
  // unmuted -> muted [69, 99]
  // muted -> unmuted [36, 69]
  // raise -> muted [0, 36]
  // muted -> raise [99, 136]
  // unmuted -> raise [136, 172]
  // TODO should probably move to other component
  const playSegment = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isRequestingToSpeak) {
      const r = Math.floor(Math.random() * 100);
      return r < 32 ? [0, 120] : r < 64 ? [120, 240] : r < 97 ? [240, 420] : [420, 540];
    }
    if (!prevShouldRaiseHand && shouldRaiseHand) {
      return noAudioStream ? [99, 135] : [136, 172];
    }
    if (prevShouldRaiseHand && !shouldRaiseHand) {
      return [0, 36];
    }
    if (!shouldRaiseHand) {
      return noAudioStream ? [69, 99] : [36, 69];
    }
    return [0, 0];
  }, [prevShouldRaiseHand, isRequestingToSpeak, noAudioStream, shouldRaiseHand]);
  const animatedIconName = isRequestingToSpeak ? 'HandFilled' : 'VoiceMini';
  const toggleMute = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    (0,_util_vibrate__WEBPACK_IMPORTED_MODULE_4__.vibrateShort)();
    toggleGroupCallMute();
  }, [toggleGroupCallMute]);
  const handleMouseDownMute = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (shouldRaiseHand) {
      if (isRequestingToSpeak) return;
      (0,_util_vibrate__WEBPACK_IMPORTED_MODULE_4__.vibrateShort)();
      requestToSpeak();
      setIsRequestingToSpeak(true);
      setTimeout(() => {
        setIsRequestingToSpeak(false);
      }, REQUEST_TO_SPEAK_THROTTLE);
      return;
    }
    muteMouseDownState.current = 'down';
    if (noAudioStream) {
      setTimeout(() => {
        if (muteMouseDownState.current === 'down') {
          muteMouseDownState.current = 'hold';
          toggleMute();
        }
      }, HOLD_TO_SPEAK_TIME);
    }
  }, [isRequestingToSpeak, noAudioStream, requestToSpeak, shouldRaiseHand, toggleMute]);
  const handleMouseUpMute = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (shouldRaiseHand) {
      return;
    }
    toggleMute();
    muteMouseDownState.current = 'up';
  }, [shouldRaiseHand, toggleMute]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    round: true,
    size: "default",
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_MicrophoneButton_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].root, !isConnecting && noAudioStream && _MicrophoneButton_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].canUnmute, !isConnecting && shouldRaiseHand && _MicrophoneButton_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].mutedByAdmin, className),
    onMouseDown: handleMouseDownMute,
    onMouseUp: handleMouseUpMute,
    ariaLabel: lang(isMuted ? 'VoipUnmute' : 'VoipMute'),
    disabled: isConnecting,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      tgsUrl: _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_5__.LOCAL_TGS_URLS[animatedIconName],
      size: ICON_SIZE,
      play: playSegment.toString(),
      playSegment: playSegment,
      className: _MicrophoneButton_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].icon,
      forceAlways: true
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_MicrophoneButton_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].spinner, isConnecting && _MicrophoneButton_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].spinnerVisible),
      color: "white"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const groupCall = (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_2__.selectActiveGroupCall)(global);
  const {
    connectionState
  } = groupCall || {};
  const meParticipant = groupCall && (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_2__.selectGroupCallParticipant)(global, groupCall.id, global.currentUserId);
  const {
    raiseHandRating,
    hasAudioStream,
    canSelfUnmute,
    isMuted
  } = meParticipant || {};
  return {
    connectionState: connectionState || CONNECTION_STATE_DEFAULT,
    hasRequestedToSpeak: Boolean(raiseHandRating),
    noAudioStream: !hasAudioStream,
    canSelfUnmute,
    isMuted
  };
})(MicrophoneButton)));

/***/ }),

/***/ "./src/components/calls/group/OutlinedMicrophoneIcon.tsx":
/*!***************************************************************!*\
  !*** ./src/components/calls/group/OutlinedMicrophoneIcon.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/secret-sauce */ "./src/lib/secret-sauce/index.ts");
/* harmony import */ var _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");
/* harmony import */ var _common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");






const OutlinedMicrophoneIcon = ({
  participant,
  noColor,
  className
}) => {
  const {
    isMuted,
    isMutedByMe
  } = participant;
  const isSpeaking = (participant.amplitude || 0) > _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.THRESHOLD;
  const isRaiseHand = Boolean(participant.raiseHandRating);
  const prevIsRaiseHand = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_3__["default"])(isRaiseHand);
  const canSelfUnmute = Boolean(participant?.canSelfUnmute);
  const shouldRaiseHand = !canSelfUnmute && isMuted;
  const prevIsMuted = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_3__["default"])(isMuted);
  const playSegment = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isMuted && !prevIsMuted) {
      return [43, 64];
    }
    if (!isMuted && prevIsMuted) {
      return [22, 42];
    }
    if (isRaiseHand && !prevIsRaiseHand) {
      return [65, 84];
    }
    if (!shouldRaiseHand && prevIsRaiseHand) {
      return [0, 21];
    }

    // TODO cancel request to speak should play in reverse
    // if (!isRaiseHand && prevIsRaiseHand) {
    //   return [84, 65];
    // }

    return isMuted ? [22, 23] : [43, 44];
    // eslint-disable-next-line
  }, [isMuted, shouldRaiseHand, isRaiseHand]);
  const microphoneColor = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (noColor) {
      return '#ffffff';
    }
    if (isRaiseHand) {
      return '#4da6e0';
    }
    if (shouldRaiseHand || isMutedByMe) {
      return '#ff706f';
    }
    if (isSpeaking) {
      return '#57bc6c';
    }
    return '#aaaaaa';
  }, [noColor, isRaiseHand, shouldRaiseHand, isMutedByMe, isSpeaking]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tgsUrl: _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__.LOCAL_TGS_URLS.VoiceOutlined,
    play: playSegment.toString(),
    playSegment: playSegment,
    size: 28,
    color: microphoneColor,
    className: className,
    forceAlways: true,
    nonInteractive: true
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(OutlinedMicrophoneIcon));

/***/ }),

/***/ "./src/components/calls/group/helpers/formatGroupCallVolume.ts":
/*!*********************************************************************!*\
  !*** ./src/components/calls/group/helpers/formatGroupCallVolume.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatGroupCallVolume)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");

function formatGroupCallVolume(participant) {
  return Math.floor((participant.volume || _config__WEBPACK_IMPORTED_MODULE_0__.GROUP_CALL_DEFAULT_VOLUME) / _config__WEBPACK_IMPORTED_MODULE_0__.GROUP_CALL_VOLUME_MULTIPLIER).toString();
}

/***/ }),

/***/ "./src/components/calls/group/hooks/useGroupCallVideoLayout.ts":
/*!*********************************************************************!*\
  !*** ./src/components/calls/group/hooks/useGroupCallVideoLayout.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGroupCallVideoLayout)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");
/* harmony import */ var _hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useResizeObserver */ "./src/hooks/useResizeObserver.ts");




const PADDING_HORIZONTAL = 10;
const PADDING_VERTICAL = 8;
const PREFERRED_PANEL_VIDEO_HEIGHT = 240;
function useGroupCallVideoLayout({
  primaryContainerRef,
  secondaryContainerRef,
  videoParticipants,
  isLandscapeLayout,
  pinnedVideo
}) {
  const [videoLayout, setVideoLayout] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [panelOffset, setPanelOffset] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const videosCount = videoParticipants.length;
  const prevVideosCount = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_2__["default"])(videosCount);
  const prevVideoParticipants = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_2__["default"])(videoParticipants);
  const removedVideoParticipants = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return prevVideoParticipants?.filter(({
      id,
      type
    }) => !videoParticipants.some(p => p.id === id && p.type === type));
  }, [prevVideoParticipants, videoParticipants]);
  const recalculateLayout = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    const primaryContainer = primaryContainerRef.current;
    const secondaryContainer = secondaryContainerRef.current;
    if (!secondaryContainer) return;
    const removed = prevVideosCount !== undefined && prevVideosCount > videosCount ? prevVideosCount - videosCount : 0;
    const {
      x: secondaryInitialX,
      y: secondaryInitialY,
      width: secondaryContainerWidth
    } = secondaryContainer.getBoundingClientRect();
    const layout = [];
    if (pinnedVideo !== undefined || !primaryContainer || !isLandscapeLayout) {
      const isRemounted = true;
      let skip = false;
      let pinnedSkipIndex = 0;
      let pinnedPush;
      let participants = videoParticipants;
      if (pinnedVideo && primaryContainer && isLandscapeLayout) {
        pinnedSkipIndex = participants.findIndex(({
          id,
          type
        }) => id === pinnedVideo.id && type === pinnedVideo.type);
        if (pinnedSkipIndex !== -1) {
          const {
            x: initialX,
            y: initialY,
            width: containerWidth,
            height: containerHeight
          } = primaryContainer.getBoundingClientRect();
          const {
            id: participantId,
            type
          } = pinnedVideo;
          pinnedPush = {
            x: initialX,
            y: initialY,
            width: containerWidth,
            height: containerHeight,
            participantId,
            type,
            orderKey: pinnedSkipIndex
          };
          skip = true;
          participants = participants.filter(({
            id,
            type: videoType
          }) => id !== participantId || videoType !== pinnedVideo.type);
        }
      }
      const secondaryVideosCounts = skip ? videosCount - 1 : videosCount;
      const isFirstBig = secondaryVideosCounts % 2 === 1;
      const columns = 2;
      const rows = Math.ceil(secondaryVideosCounts / columns);
      const smallWidth = (secondaryContainerWidth - (columns - 1) * PADDING_HORIZONTAL) / columns;
      const heightTotal = Math.max(0, isFirstBig ? PREFERRED_PANEL_VIDEO_HEIGHT + (rows - 1) * smallWidth + (rows - 1) * PADDING_VERTICAL : rows * smallWidth + (rows - 1) * PADDING_VERTICAL);
      for (let i = 0; i < secondaryVideosCounts; i++) {
        const isBig = isFirstBig && i === 0;
        const width = isBig ? secondaryContainerWidth : smallWidth;
        const height = isBig ? PREFERRED_PANEL_VIDEO_HEIGHT : smallWidth;
        const realIndex = isFirstBig && i !== 0 ? i + 1 : i;
        const x = (isRemounted ? 0 : secondaryInitialX) + realIndex % columns * (width + PADDING_HORIZONTAL);
        const y = (isRemounted ? 0 : secondaryInitialY) + (isFirstBig && i !== 0 ? PREFERRED_PANEL_VIDEO_HEIGHT + PADDING_VERTICAL + (Math.floor(realIndex / columns) - 1) * (height + PADDING_VERTICAL) : Math.floor(realIndex / columns) * (height + PADDING_VERTICAL));
        layout.push({
          x,
          y,
          width,
          height,
          shouldRemount: !isRemounted,
          isRemounted,
          noAnimate: true,
          participantId: participants[i].id,
          type: participants[i].type,
          orderKey: i >= pinnedSkipIndex ? i + 1 : i
        });
      }
      if (pinnedPush) {
        layout.splice(pinnedSkipIndex, 0, pinnedPush);
      }
      if (removedVideoParticipants) {
        for (let i = 0; i < removed; i++) {
          layout.push({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            isRemounted,
            isRemoved: true,
            participantId: removedVideoParticipants[i].id,
            type: removedVideoParticipants[i].type,
            orderKey: i + videosCount
          });
        }
      }
      setPanelOffset(heightTotal);
      setVideoLayout(layout);
      return;
    }
    const {
      x: initialX,
      y: initialY,
      width: containerWidth,
      height: containerHeight
    } = primaryContainer.getBoundingClientRect();
    const columns = calculateColumnsCount(videosCount);
    const rows = Math.ceil(videosCount / columns);
    const totalGridSize = rows * columns;
    const shouldFillLastRow = totalGridSize > videosCount;
    const width = (containerWidth - (columns - 1) * PADDING_HORIZONTAL) / columns;
    const height = (containerHeight - (rows - 1) * PADDING_VERTICAL) / rows;
    const lastRowWidth = width * (videosCount % columns);
    for (let i = 0; i < videosCount; i++) {
      const row = Math.floor(i / columns);
      const shouldCenter = shouldFillLastRow && row === rows - 1;
      const x = initialX + i % columns * (width + PADDING_HORIZONTAL) + (shouldCenter ? (containerWidth - lastRowWidth) / 2 : 0);
      const y = initialY + Math.floor(i / columns) * (height + PADDING_VERTICAL);
      layout.push({
        x,
        y,
        width,
        height,
        participantId: videoParticipants[i].id,
        type: videoParticipants[i].type,
        orderKey: i
      });
    }
    if (removedVideoParticipants) {
      for (let i = 0; i < removed; i++) {
        layout.push({
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          isRemoved: true,
          participantId: removedVideoParticipants[i].id,
          type: removedVideoParticipants[i].type,
          orderKey: i + videosCount
        });
      }
    }
    setPanelOffset(0);
    setVideoLayout(layout);
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(recalculateLayout, [recalculateLayout, videoParticipants, isLandscapeLayout, pinnedVideo]);
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_3__["default"])(primaryContainerRef, recalculateLayout, !primaryContainerRef.current);
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_3__["default"])(secondaryContainerRef, recalculateLayout, !secondaryContainerRef.current);
  return {
    videoLayout,
    panelOffset
  };
}
function calculateColumnsCount(videosCount) {
  if (videosCount >= 25) {
    return 5;
  } else if (videosCount >= 13) {
    return 4;
  } else if (videosCount >= 7) {
    return 3;
  } else if (videosCount >= 3) {
    return 2;
  } else {
    return 1;
  }
}

/***/ }),

/***/ "./src/components/calls/phone/PhoneCall.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/calls/phone/PhoneCall.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PhoneCall-module__root","blurred":"PhoneCall-module__blurred","single-column":"PhoneCall-module__single-column","singleColumn":"PhoneCall-module__single-column","header":"PhoneCall-module__header","close-button":"PhoneCall-module__close-button","closeButton":"PhoneCall-module__close-button","emojis-backdrop":"PhoneCall-module__emojis-backdrop","emojisBackdrop":"PhoneCall-module__emojis-backdrop","open":"PhoneCall-module__open","emojis":"PhoneCall-module__emojis","emoji-tooltip":"PhoneCall-module__emoji-tooltip","emojiTooltip":"PhoneCall-module__emoji-tooltip","user-info":"PhoneCall-module__user-info","userInfo":"PhoneCall-module__user-info","buttons":"PhoneCall-module__buttons","leave":"PhoneCall-module__leave","accept":"PhoneCall-module__accept","accept-icon":"PhoneCall-module__accept-icon","acceptIcon":"PhoneCall-module__accept-icon","main-video":"PhoneCall-module__main-video","mainVideo":"PhoneCall-module__main-video","second-video":"PhoneCall-module__second-video","secondVideo":"PhoneCall-module__second-video","visible":"PhoneCall-module__visible","fullscreen":"PhoneCall-module__fullscreen"});

/***/ }),

/***/ "./src/components/calls/phone/PhoneCall.tsx":
/*!**************************************************!*\
  !*** ./src/components/calls/phone/PhoneCall.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _global_actions_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/actions/calls */ "./src/global/actions/calls.ts");
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/secret-sauce */ "./src/lib/secret-sauce/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _global_selectors_calls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/schedulers/useInterval */ "./src/hooks/schedulers/useInterval.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/useForceUpdate */ "./src/hooks/useForceUpdate.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _PhoneCallButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PhoneCallButton */ "./src/components/calls/phone/PhoneCallButton.tsx");
/* harmony import */ var _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PhoneCall.module.scss */ "./src/components/calls/phone/PhoneCall.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");
























const PhoneCall = ({
  user,
  isOutgoing,
  phoneCall,
  isCallPanelVisible
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const {
    hangUp,
    requestMasterAndAcceptCall,
    playGroupCallSound,
    toggleGroupCallPanel,
    connectToActivePhoneCall
  } = (0,_global__WEBPACK_IMPORTED_MODULE_2__.getActions)();
  const containerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [isFullscreen, openFullscreen, closeFullscreen] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const {
    isMobile
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const toggleFullscreen = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isFullscreen) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
  }, [closeFullscreen, isFullscreen, openFullscreen]);
  const handleToggleFullscreen = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!containerRef.current) return;
    if (isFullscreen) {
      document.exitFullscreen().then(closeFullscreen);
    } else {
      containerRef.current.requestFullscreen().then(openFullscreen);
    }
  }, [closeFullscreen, isFullscreen, openFullscreen]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__.IS_REQUEST_FULLSCREEN_SUPPORTED) return undefined;
    const container = containerRef.current;
    if (!container) return undefined;
    container.addEventListener('fullscreenchange', toggleFullscreen);
    return () => {
      container.removeEventListener('fullscreenchange', toggleFullscreen);
    };
  }, [toggleFullscreen]);
  const handleClose = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    toggleGroupCallPanel();
    if (isFullscreen) {
      closeFullscreen();
    }
  }, [closeFullscreen, isFullscreen, toggleGroupCallPanel]);
  const isDiscarded = phoneCall?.state === 'discarded';
  const isBusy = phoneCall?.reason === 'busy';
  const isIncomingRequested = phoneCall?.state === 'requested' && !isOutgoing;
  const isOutgoingRequested = (phoneCall?.state === 'requested' || phoneCall?.state === 'waiting') && isOutgoing;
  const isActive = phoneCall?.state === 'active';
  const isConnected = phoneCall?.isConnected;
  const [isHangingUp, startHangingUp, stopHangingUp] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const handleHangUp = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    startHangingUp();
    hangUp();
  }, [hangUp, startHangingUp]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isHangingUp) {
      playGroupCallSound({
        sound: 'end'
      });
    } else if (isIncomingRequested) {
      playGroupCallSound({
        sound: 'incoming'
      });
    } else if (isBusy) {
      playGroupCallSound({
        sound: 'busy'
      });
    } else if (isDiscarded) {
      playGroupCallSound({
        sound: 'end'
      });
    } else if (isOutgoingRequested) {
      playGroupCallSound({
        sound: 'ringing'
      });
    } else if (isConnected) {
      playGroupCallSound({
        sound: 'connect'
      });
    }
  }, [isBusy, isDiscarded, isIncomingRequested, isOutgoingRequested, isConnected, playGroupCallSound, isHangingUp]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (phoneCall?.id) {
      stopHangingUp();
    } else {
      connectToActivePhoneCall();
    }
  }, [connectToActivePhoneCall, phoneCall?.id, stopHangingUp]);
  const forceUpdate = (0,_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_14__["default"])();
  (0,_hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_11__["default"])(forceUpdate, isConnected ? 1000 : undefined);
  const callStatus = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const state = phoneCall?.state;
    if (isHangingUp) {
      return lang('lng_call_status_hanging');
    }
    if (isBusy) return 'busy';
    if (state === 'requesting') {
      return lang('lng_call_status_requesting');
    } else if (state === 'requested') {
      return isOutgoing ? lang('lng_call_status_ringing') : lang('lng_call_status_incoming');
    } else if (state === 'waiting') {
      return lang('lng_call_status_waiting');
    } else if (state === 'active' && isConnected) {
      return undefined;
    } else {
      return lang('lng_call_status_exchanging');
    }
  }, [isBusy, isConnected, isHangingUp, isOutgoing, lang, phoneCall?.state]);
  const hasVideo = phoneCall?.videoState === 'active';
  const hasPresentation = phoneCall?.screencastState === 'active';
  const streams = (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__.getStreams)();
  const hasOwnAudio = streams?.ownAudio?.getTracks()[0].enabled;
  const hasOwnPresentation = streams?.ownPresentation?.getTracks()[0].enabled;
  const hasOwnVideo = streams?.ownVideo?.getTracks()[0].enabled;
  const [isHidingPresentation, startHidingPresentation, stopHidingPresentation] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const [isHidingVideo, startHidingVideo, stopHidingVideo] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const handleTogglePresentation = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (hasOwnPresentation) {
      startHidingPresentation();
    }
    if (hasOwnVideo) {
      startHidingVideo();
    }
    setTimeout(async () => {
      await (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__.toggleStreamP2p)('presentation');
      stopHidingPresentation();
      stopHidingVideo();
    }, 250);
  }, [hasOwnPresentation, hasOwnVideo, startHidingPresentation, startHidingVideo, stopHidingPresentation, stopHidingVideo]);
  const handleToggleVideo = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (hasOwnVideo) {
      startHidingVideo();
    }
    if (hasOwnPresentation) {
      startHidingPresentation();
    }
    setTimeout(async () => {
      await (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__.toggleStreamP2p)('video');
      stopHidingPresentation();
      stopHidingVideo();
    }, 250);
  }, [hasOwnPresentation, hasOwnVideo, startHidingPresentation, startHidingVideo, stopHidingPresentation, stopHidingVideo]);
  const handleToggleAudio = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    void (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__.toggleStreamP2p)('audio');
  }, []);
  const [isEmojiOpen, openEmoji, closeEmoji] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const [isFlipping, startFlipping, stopFlipping] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const handleFlipCamera = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    startFlipping();
    (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__.switchCameraInputP2p)();
    setTimeout(stopFlipping, 250);
  }, [startFlipping, stopFlipping]);
  const timeElapsed = phoneCall?.startDate && Number(new Date()) / 1000 - phoneCall.startDate;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (phoneCall?.state === 'discarded') {
      setTimeout(hangUp, 250);
    }
  }, [hangUp, phoneCall?.reason, phoneCall?.state]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_ui_Modal__WEBPACK_IMPORTED_MODULE_20__["default"], {
    isOpen: phoneCall && phoneCall?.state !== 'discarded' && !isCallPanelVisible,
    onClose: handleClose,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].root, isMobile && _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].singleColumn),
    dialogRef: containerRef,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_common_Avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
      peer: user,
      size: "jumbo",
      className: hasVideo || hasPresentation ? _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].blurred : ''
    }), phoneCall?.screencastState === 'active' && streams?.presentation && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("video", {
      className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].mainVideo,
      muted: true,
      autoPlay: true,
      playsInline: true,
      srcObject: streams.presentation
    }), phoneCall?.videoState === 'active' && streams?.video && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("video", {
      className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].mainVideo,
      muted: true,
      autoPlay: true,
      playsInline: true,
      srcObject: streams.video
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("video", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].secondVideo, !isHidingPresentation && hasOwnPresentation && _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].visible, isFullscreen && _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].fullscreen),
      muted: true,
      autoPlay: true,
      playsInline: true,
      srcObject: streams?.ownPresentation
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("video", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].secondVideo, !isHidingVideo && hasOwnVideo && _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].visible, isFullscreen && _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].fullscreen),
      muted: true,
      autoPlay: true,
      playsInline: true,
      srcObject: streams?.ownVideo
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].header,
      children: [_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__.IS_REQUEST_FULLSCREEN_SUPPORTED && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        round: true,
        size: "smaller",
        color: "translucent",
        onClick: handleToggleFullscreen,
        ariaLabel: lang(isFullscreen ? 'AccExitFullscreen' : 'AccSwitchToFullscreen'),
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_18__["default"], {
          name: isFullscreen ? 'smallscreen' : 'fullscreen'
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        round: true,
        size: "smaller",
        color: "translucent",
        onClick: handleClose,
        className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].closeButton,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_18__["default"], {
          name: "close"
        })
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].emojisBackdrop, isEmojiOpen && _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].open),
      onClick: !isEmojiOpen ? openEmoji : closeEmoji,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].emojis, isEmojiOpen && _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].open),
        children: phoneCall?.isConnected && phoneCall?.emojis && (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_10__["default"])(phoneCall.emojis, ['emoji'])
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].emojiTooltip, isEmojiOpen && _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].open),
        children: lang('CallEmojiKeyTooltip', user?.firstName).replace('%%', '%')
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].userInfo,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("h1", {
        children: user?.firstName
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].status,
        children: callStatus || (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__.formatMediaDuration)(timeElapsed || 0)
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].buttons,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_PhoneCallButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onClick: handleToggleAudio,
        icon: "microphone",
        isDisabled: !isActive,
        isActive: hasOwnAudio,
        label: lang(hasOwnAudio ? 'lng_call_mute_audio' : 'lng_call_unmute_audio')
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_PhoneCallButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onClick: handleToggleVideo,
        icon: "video",
        isDisabled: !isActive,
        isActive: hasOwnVideo,
        label: lang(hasOwnVideo ? 'lng_call_stop_video' : 'lng_call_start_video')
      }), hasOwnVideo && (_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__.IS_ANDROID || _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__.IS_IOS) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_PhoneCallButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onClick: handleFlipCamera,
        customIcon: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_16__["default"], {
          tgsUrl: _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_9__.LOCAL_TGS_URLS.CameraFlip,
          playSegment: !isFlipping ? [0, 1] : [0, 10],
          size: 32
        }),
        isDisabled: !isActive,
        label: lang('VoipFlip')
      }), _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_3__.IS_SCREENSHARE_SUPPORTED && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_PhoneCallButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onClick: handleTogglePresentation,
        icon: "share-screen",
        isDisabled: !isActive,
        isActive: hasOwnPresentation,
        label: lang('lng_call_screencast')
      }), isIncomingRequested && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_PhoneCallButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onClick: requestMasterAndAcceptCall,
        icon: "phone-discard",
        isDisabled: isDiscarded,
        label: lang('lng_call_accept'),
        className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].accept,
        iconClassName: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].acceptIcon
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_PhoneCallButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onClick: handleHangUp,
        icon: "phone-discard",
        isDisabled: isDiscarded,
        label: lang(isIncomingRequested ? 'lng_call_decline' : 'lng_call_end_call'),
        className: _PhoneCall_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].leave
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_1__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_2__.withGlobal)(global => {
  const {
    phoneCall,
    currentUserId
  } = global;
  const {
    isCallPanelVisible,
    isMasterTab
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTabState)(global);
  const user = (0,_global_selectors_calls__WEBPACK_IMPORTED_MODULE_5__.selectPhoneCallUser)(global);
  return {
    isCallPanelVisible: Boolean(isCallPanelVisible),
    user,
    isOutgoing: phoneCall?.adminId === currentUserId,
    phoneCall: isMasterTab ? phoneCall : undefined
  };
})(PhoneCall)));

/***/ }),

/***/ "./src/components/calls/phone/PhoneCallButton.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/calls/phone/PhoneCallButton.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PhoneCallButton-module__root","button":"PhoneCallButton-module__button","active":"PhoneCallButton-module__active","button-text":"PhoneCallButton-module__button-text","buttonText":"PhoneCallButton-module__button-text"});

/***/ }),

/***/ "./src/components/calls/phone/PhoneCallButton.tsx":
/*!********************************************************!*\
  !*** ./src/components/calls/phone/PhoneCallButton.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _PhoneCallButton_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhoneCallButton.module.scss */ "./src/components/calls/phone/PhoneCallButton.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");






const PhoneCallButton = ({
  onClick,
  label,
  customIcon,
  icon,
  iconClassName,
  className,
  isDisabled,
  isActive
}) => {
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: _PhoneCallButton_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      round: true,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(className, _PhoneCallButton_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button, isActive && _PhoneCallButton_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].active),
      onClick: onClick,
      disabled: isDisabled,
      children: customIcon || (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: icon,
        className: iconClassName
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: _PhoneCallButton_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].buttonText,
      children: label
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PhoneCallButton));

/***/ }),

/***/ "./src/components/calls/phone/RatePhoneCallModal.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/calls/phone/RatePhoneCallModal.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"stars":"RatePhoneCallModal-module__stars","star":"RatePhoneCallModal-module__star","isFilled":"RatePhoneCallModal-module__isFilled","comment":"RatePhoneCallModal-module__comment","visible":"RatePhoneCallModal-module__visible"});

/***/ }),

/***/ "./src/components/calls/phone/RatePhoneCallModal.tsx":
/*!***********************************************************!*\
  !*** ./src/components/calls/phone/RatePhoneCallModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_InputText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/InputText */ "./src/components/ui/InputText.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _RatePhoneCallModal_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RatePhoneCallModal.module.scss */ "./src/components/calls/phone/RatePhoneCallModal.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");










const RatePhoneCallModal = ({
  isOpen
}) => {
  const {
    closeCallRatingModal,
    setCallRating
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const inputRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [rating, setRating] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const handleSend = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!rating) {
      closeCallRatingModal();
      return;
    }
    setCallRating({
      rating: rating + 1,
      comment: inputRef.current?.value || ''
    });
  }, [closeCallRatingModal, rating, setCallRating]);
  function handleClickStar(index) {
    return () => setRating(rating === index ? undefined : index);
  }
  const handleCancelClick = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    closeCallRatingModal();
  }, [closeCallRatingModal]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: lang('lng_call_rate_label'),
    className: "narrow",
    onClose: closeCallRatingModal,
    isOpen: isOpen,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: _RatePhoneCallModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].stars,
      children: new Array(5).fill(undefined).map((_, i) => {
        const isFilled = rating !== undefined && rating >= i;
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: isFilled ? 'favorite-filled' : 'favorite',
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(isFilled && _RatePhoneCallModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].isFilled, _RatePhoneCallModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].star),
          onClick: handleClickStar(i)
        });
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_InputText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ref: inputRef,
      placeholder: lang('lng_call_rate_comment'),
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_RatePhoneCallModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].comment, rating !== 4 && rating !== undefined && _RatePhoneCallModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].visible)
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "dialog-buttons mt-2",
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "confirm-dialog-button",
        isText: true,
        onClick: handleSend,
        children: lang('Send')
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "confirm-dialog-button",
        isText: true,
        onClick: handleCancelClick,
        children: lang('Cancel')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(RatePhoneCallModal));

/***/ }),

/***/ "./src/global/actions/api/calls.async.ts":
/*!***********************************************!*\
  !*** ./src/global/actions/api/calls.async.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/secret-sauce */ "./src/lib/secret-sauce/index.ts");
/* harmony import */ var _util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/establishMultitabRole */ "./src/util/establishMultitabRole.ts");
/* harmony import */ var _api_gramjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/gramjs */ "./src/api/gramjs/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index */ "./src/global/index.ts");
/* harmony import */ var _reducers_calls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/calls */ "./src/global/reducers/calls.ts");
/* harmony import */ var _reducers_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/tabs */ "./src/global/reducers/tabs.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _selectors_calls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectors/calls */ "./src/global/selectors/calls.ts");
/* harmony import */ var _ui_calls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/calls */ "./src/global/actions/ui/calls.ts");
/* harmony import */ var _chats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chats */ "./src/global/actions/api/chats.ts");











const HANG_UP_UI_DELAY = 500;
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('leaveGroupCall', async (global, actions, payload) => {
  const {
    isFromLibrary,
    shouldDiscard,
    shouldRemove,
    rejoin,
    isPageUnload,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
  } = payload || {};
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_8__.selectActiveGroupCall)(global);
  if (!groupCall) {
    return;
  }
  global = (0,_reducers_calls__WEBPACK_IMPORTED_MODULE_5__.updateActiveGroupCall)(global, {
    connectionState: 'disconnected'
  }, groupCall.participantsCount - 1);
  global = {
    ...global,
    groupCalls: {
      ...global.groupCalls,
      activeGroupCallId: undefined
    }
  };
  (0,_index__WEBPACK_IMPORTED_MODULE_4__.setGlobal)(global);
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('leaveGroupCall', {
    call: groupCall,
    isPageUnload
  });
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('abortRequestGroup', 'call');
  if (shouldDiscard) {
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('discardGroupCall', {
      call: groupCall
    });
  }
  global = (0,_index__WEBPACK_IMPORTED_MODULE_4__.getGlobal)();
  if (shouldRemove) {
    global = (0,_reducers_calls__WEBPACK_IMPORTED_MODULE_5__.removeGroupCall)(global, groupCall.id);
  }
  (0,_ui_calls__WEBPACK_IMPORTED_MODULE_9__.removeGroupCallAudioElement)();
  (0,_index__WEBPACK_IMPORTED_MODULE_4__.setGlobal)(global);
  actions.toggleGroupCallPanel({
    force: undefined,
    tabId
  });
  if (!isFromLibrary) {
    (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.leaveGroupCall)();
  }
  actions.afterHangUp();
  if (rejoin) {
    actions.requestMasterAndJoinGroupCall({
      ...rejoin,
      tabId
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('toggleGroupCallVideo', async global => {
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_8__.selectActiveGroupCall)(global);
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_7__.selectUser)(global, global.currentUserId);
  if (!user || !groupCall) {
    return;
  }
  await (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.toggleStream)('video');
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('editGroupCallParticipant', {
    call: groupCall,
    videoStopped: !(0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.isStreamEnabled)('video'),
    participant: user
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('requestToSpeak', (global, actions, payload) => {
  const {
    value
  } = payload || {
    value: true
  };
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_8__.selectActiveGroupCall)(global);
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_7__.selectUser)(global, global.currentUserId);
  if (!user || !groupCall) {
    return;
  }
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('editGroupCallParticipant', {
    call: groupCall,
    raiseHand: value,
    participant: user
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('setGroupCallParticipantVolume', (global, actions, payload) => {
  const {
    participantId,
    volume
  } = payload;
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_8__.selectActiveGroupCall)(global);
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_7__.selectUser)(global, participantId);
  if (!user || !groupCall) {
    return;
  }
  (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.setVolume)(participantId, Math.floor(volume / _config__WEBPACK_IMPORTED_MODULE_0__.GROUP_CALL_VOLUME_MULTIPLIER) / 100);
  void (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('editGroupCallParticipant', {
    call: groupCall,
    volume: Number(volume),
    participant: user
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('toggleGroupCallMute', async (global, actions, payload) => {
  const {
    participantId,
    value
  } = payload || {};
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_8__.selectActiveGroupCall)(global);
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_7__.selectUser)(global, participantId || global.currentUserId);
  if (!user || !groupCall) {
    return;
  }
  const muted = value === undefined ? (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.isStreamEnabled)('audio', user.id) : value;
  if (!participantId) {
    await (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.toggleStream)('audio');
  } else {
    (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.setVolume)(participantId, muted ? 0 : 1);
  }
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('editGroupCallParticipant', {
    call: groupCall,
    muted,
    participant: user
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('toggleGroupCallPresentation', async (global, actions, payload) => {
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_8__.selectActiveGroupCall)(global);
  const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_7__.selectUser)(global, global.currentUserId);
  if (!user || !groupCall) {
    return;
  }
  const value = payload?.value !== undefined ? payload?.value : !(0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.isStreamEnabled)('presentation');
  if (value) {
    const params = await (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.startSharingScreen)();
    if (!params) {
      return;
    }
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('joinGroupCallPresentation', {
      call: groupCall,
      params
    });
  } else {
    await (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.toggleStream)('presentation', false);
    await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('leaveGroupCallPresentation', {
      call: groupCall
    });
  }
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('editGroupCallParticipant', {
    call: groupCall,
    presentationPaused: !(0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.isStreamEnabled)('presentation'),
    participant: user
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('connectToActiveGroupCall', async (global, actions, payload) => {
  const {
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
  } = payload || {};
  const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_8__.selectActiveGroupCall)(global);
  if (!groupCall) return;
  if (groupCall.connectionState === 'discarded') {
    actions.showNotification({
      message: 'This voice chat is not active',
      tabId
    });
    return;
  }
  const audioElement = (0,_ui_calls__WEBPACK_IMPORTED_MODULE_9__.getGroupCallAudioElement)();
  const audioContext = (0,_ui_calls__WEBPACK_IMPORTED_MODULE_9__.getGroupCallAudioContext)();
  if (!audioElement || !audioContext) {
    return;
  }
  const {
    currentUserId
  } = global;
  if (!currentUserId) return;
  const params = await (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.joinGroupCall)(currentUserId, audioContext, audioElement, actions.apiUpdate);
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('joinGroupCall', {
    call: groupCall,
    params,
    inviteHash: groupCall.inviteHash
  });
  global = (0,_index__WEBPACK_IMPORTED_MODULE_4__.getGlobal)();
  if (!result) {
    actions.showNotification({
      // TODO[lang] Localize error message
      message: 'Failed to join voice chat',
      tabId
    });
    actions.leaveGroupCall({
      tabId
    });
    return;
  }
  actions.loadMoreGroupCallParticipants();
  if (groupCall.chatId) {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_4__.getGlobal)();
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_7__.selectChat)(global, groupCall.chatId);
    if (!chat) return;
    await (0,_chats__WEBPACK_IMPORTED_MODULE_10__.loadFullChat)(global, actions, chat);
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('connectToActivePhoneCall', async (global, actions) => {
  const {
    phoneCall
  } = global;
  if (!phoneCall) return;
  const user = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_8__.selectPhoneCallUser)(global);
  if (!user) return;
  const dhConfig = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('getDhConfig');
  if (!dhConfig) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('createPhoneCallState', [true]);
  const gAHash = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('requestPhoneCall', [dhConfig]);
  const result = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('requestCall', {
    user,
    gAHash,
    isVideo: phoneCall.isVideo
  });
  if (!result) {
    if ('hangUp' in actions) actions.hangUp({
      tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
    });
  }
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('acceptCall', async global => {
  const {
    phoneCall
  } = global;
  if (!phoneCall) return;
  const dhConfig = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('getDhConfig');
  if (!dhConfig) return;
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('createPhoneCallState', [false]);
  const gB = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('acceptPhoneCall', [dhConfig]);
  await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('acceptCall', {
    call: phoneCall,
    gB
  });
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('sendSignalingData', (global, actions, payload) => {
  const {
    phoneCall
  } = global;
  if (!phoneCall) {
    return;
  }
  const data = JSON.stringify(payload);
  (async () => {
    const encodedData = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('encodePhoneCallData', [data]);
    if (!encodedData) return;
    (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('sendSignalingData', {
      data: encodedData,
      call: phoneCall
    });
  })();
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('closeCallRatingModal', (global, actions, payload) => {
  const {
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
  } = payload || {};
  return (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_6__.updateTabState)(global, {
    ratingPhoneCall: undefined
  }, tabId);
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('setCallRating', (global, actions, payload) => {
  const {
    rating,
    comment,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
  } = payload;
  const {
    ratingPhoneCall
  } = (0,_selectors__WEBPACK_IMPORTED_MODULE_7__.selectTabState)(global, tabId);
  if (!ratingPhoneCall) {
    return undefined;
  }
  (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('setCallRating', {
    call: ratingPhoneCall,
    rating,
    comment
  });
  return (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_6__.updateTabState)(global, {
    ratingPhoneCall: undefined
  }, tabId);
});
(0,_index__WEBPACK_IMPORTED_MODULE_4__.addActionHandler)('hangUp', (global, actions, payload) => {
  const {
    isPageUnload,
    tabId = (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
  } = payload || {};
  const {
    phoneCall
  } = global;
  if (!phoneCall) return undefined;
  if (phoneCall.state === 'discarded') {
    (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('destroyPhoneCallState');
    (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.stopPhoneCall)();
    global = {
      ...global,
      phoneCall: undefined
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_4__.setGlobal)(global);
    actions.toggleGroupCallPanel({
      force: undefined,
      tabId
    });
    actions.afterHangUp();
    return undefined;
  }
  (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('destroyPhoneCallState');
  (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_1__.stopPhoneCall)();
  (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_3__.callApi)('discardCall', {
    call: phoneCall,
    isPageUnload
  });
  if (phoneCall.state === 'requesting') {
    global = {
      ...global,
      phoneCall: undefined
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_4__.setGlobal)(global);
    actions.toggleGroupCallPanel({
      force: undefined,
      tabId
    });
    actions.afterHangUp();
    return undefined;
  }
  setTimeout(() => {
    global = (0,_index__WEBPACK_IMPORTED_MODULE_4__.getGlobal)();
    global = {
      ...global,
      phoneCall: undefined
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_4__.setGlobal)(global);
    actions.toggleGroupCallPanel({
      force: undefined,
      tabId
    });
    actions.afterHangUp();
  }, HANG_UP_UI_DELAY);
  return undefined;
});

/***/ }),

/***/ "./src/global/actions/apiUpdaters/calls.async.ts":
/*!*******************************************************!*\
  !*** ./src/global/actions/apiUpdaters/calls.async.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_secret_sauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/secret-sauce */ "./src/lib/secret-sauce/index.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/establishMultitabRole */ "./src/util/establishMultitabRole.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/oldLangProvider */ "./src/util/oldLangProvider.ts");
/* harmony import */ var _util_phoneCallEmojiConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/phoneCallEmojiConstants */ "./src/util/phoneCallEmojiConstants.ts");
/* harmony import */ var _api_gramjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/gramjs */ "./src/api/gramjs/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../index */ "./src/global/index.ts");
/* harmony import */ var _reducers_calls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/calls */ "./src/global/reducers/calls.ts");
/* harmony import */ var _reducers_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/tabs */ "./src/global/reducers/tabs.ts");
/* harmony import */ var _selectors_calls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../selectors/calls */ "./src/global/selectors/calls.ts");











(0,_index__WEBPACK_IMPORTED_MODULE_7__.addActionHandler)('apiUpdate', (global, actions, update) => {
  const {
    activeGroupCallId
  } = global.groupCalls;
  switch (update['@type']) {
    case 'updateGroupCallLeavePresentation':
      {
        actions.toggleGroupCallPresentation({
          value: false
        });
        break;
      }
    case 'updateGroupCallStreams':
      {
        if (!update.userId || !activeGroupCallId) break;
        if (!(0,_selectors_calls__WEBPACK_IMPORTED_MODULE_10__.selectGroupCallParticipant)(global, activeGroupCallId, update.userId)) break;
        return (0,_reducers_calls__WEBPACK_IMPORTED_MODULE_8__.updateGroupCallParticipant)(global, activeGroupCallId, update.userId, (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_3__.omit)(update, ['@type', 'userId']));
      }
    case 'updateGroupCallConnectionState':
      {
        if (!activeGroupCallId) break;
        if (update.connectionState === 'disconnected') {
          if ('leaveGroupCall' in actions) actions.leaveGroupCall({
            isFromLibrary: true,
            tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
          });
          break;
        }
        return (0,_reducers_calls__WEBPACK_IMPORTED_MODULE_8__.updateGroupCall)(global, activeGroupCallId, {
          connectionState: update.connectionState,
          isSpeakerDisabled: update.isSpeakerDisabled
        });
      }
    case 'updateGroupCallParticipants':
      {
        const {
          groupCallId,
          participants
        } = update;
        if (activeGroupCallId === groupCallId) {
          void (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_0__.handleUpdateGroupCallParticipants)(participants);
        }
        break;
      }
    case 'updateGroupCallConnection':
      {
        if (update.data.stream) {
          actions.showNotification({
            message: 'Big live streams are not yet supported',
            tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
          });
          if ('leaveGroupCall' in actions) actions.leaveGroupCall({
            tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
          });
          break;
        }
        void (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_0__.handleUpdateGroupCallConnection)(update.data, update.presentation);
        const groupCall = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_10__.selectActiveGroupCall)(global);
        if (groupCall?.participants && Object.keys(groupCall.participants).length > 0) {
          void (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_0__.handleUpdateGroupCallParticipants)(Object.values(groupCall.participants));
        }
        break;
      }
    case 'updatePhoneCallMediaState':
      return {
        ...global,
        phoneCall: {
          ...global.phoneCall,
          ...(0,_util_iteratees__WEBPACK_IMPORTED_MODULE_3__.omit)(update, ['@type'])
        }
      };
    case 'updatePhoneCall':
      {
        if (!_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.ARE_CALLS_SUPPORTED) return undefined;
        const {
          phoneCall,
          currentUserId
        } = global;
        const call = {
          ...phoneCall,
          ...update.call
        };
        const isOutgoing = phoneCall?.adminId === currentUserId;
        global = {
          ...global,
          phoneCall: call
        };
        (0,_index__WEBPACK_IMPORTED_MODULE_7__.setGlobal)(global);
        global = (0,_index__WEBPACK_IMPORTED_MODULE_7__.getGlobal)();
        if (phoneCall && phoneCall.id && call.id !== phoneCall.id) {
          if (call.state !== 'discarded') {
            (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_6__.callApi)('discardCall', {
              call,
              isBusy: true
            });
          }
          return undefined;
        }
        const {
          accessHash,
          state,
          connections,
          gB
        } = call;
        if (state === 'active' || state === 'accepted') {
          if (!verifyPhoneCallProtocol(call.protocol)) {
            const user = (0,_selectors_calls__WEBPACK_IMPORTED_MODULE_10__.selectPhoneCallUser)(global);
            if ('hangUp' in actions) actions.hangUp({
              tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
            });
            actions.showNotification({
              message: _util_oldLangProvider__WEBPACK_IMPORTED_MODULE_4__.oldTranslate('VoipPeerIncompatible', user?.firstName),
              tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
            });
            return undefined;
          }
        }
        if (state === 'discarded') {
          // Discarded from other device
          if (!phoneCall) return undefined;
          return (0,_reducers_tabs__WEBPACK_IMPORTED_MODULE_9__.updateTabState)(global, {
            ...(call.needRating && {
              ratingPhoneCall: call
            }),
            isCallPanelVisible: undefined
          }, (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)());
        } else if (state === 'accepted' && accessHash && gB) {
          (async () => {
            const {
              gA,
              keyFingerprint,
              emojis
            } = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_6__.callApi)('confirmPhoneCall', [gB, _util_phoneCallEmojiConstants__WEBPACK_IMPORTED_MODULE_5__.EMOJI_DATA, _util_phoneCallEmojiConstants__WEBPACK_IMPORTED_MODULE_5__.EMOJI_OFFSETS]);
            global = (0,_index__WEBPACK_IMPORTED_MODULE_7__.getGlobal)();
            const newCall = {
              ...global.phoneCall,
              emojis
            };
            global = {
              ...global,
              phoneCall: newCall
            };
            (0,_index__WEBPACK_IMPORTED_MODULE_7__.setGlobal)(global);
            (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_6__.callApi)('confirmCall', {
              call,
              gA,
              keyFingerprint
            });
          })();
        } else if (state === 'active' && connections && phoneCall?.state !== 'active') {
          if (!isOutgoing) {
            (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_6__.callApi)('receivedCall', {
              call
            });
            (async () => {
              const {
                emojis
              } = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_6__.callApi)('confirmPhoneCall', [call.gAOrB, _util_phoneCallEmojiConstants__WEBPACK_IMPORTED_MODULE_5__.EMOJI_DATA, _util_phoneCallEmojiConstants__WEBPACK_IMPORTED_MODULE_5__.EMOJI_OFFSETS]);
              global = (0,_index__WEBPACK_IMPORTED_MODULE_7__.getGlobal)();
              const newCall = {
                ...global.phoneCall,
                emojis
              };
              global = {
                ...global,
                phoneCall: newCall
              };
              (0,_index__WEBPACK_IMPORTED_MODULE_7__.setGlobal)(global);
            })();
          }
          void (0,_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_0__.joinPhoneCall)(connections, actions.sendSignalingData, isOutgoing, Boolean(call?.isVideo), Boolean(call.isP2pAllowed), actions.apiUpdate);
        }
        return global;
      }
    case 'updatePhoneCallConnectionState':
      {
        const {
          connectionState
        } = update;
        if (!global.phoneCall) return global;
        if (connectionState === 'closed' || connectionState === 'disconnected' || connectionState === 'failed') {
          if ('hangUp' in actions) actions.hangUp({
            tabId: (0,_util_establishMultitabRole__WEBPACK_IMPORTED_MODULE_2__.getCurrentTabId)()
          });
          return undefined;
        }
        return {
          ...global,
          phoneCall: {
            ...global.phoneCall,
            isConnected: connectionState === 'connected'
          }
        };
      }
    case 'updatePhoneCallSignalingData':
      {
        const {
          phoneCall
        } = global;
        if (!phoneCall) {
          break;
        }
        (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_6__.callApi)('decodePhoneCallData', [update.data])?.then(_lib_secret_sauce__WEBPACK_IMPORTED_MODULE_0__.processSignalingMessage);
        break;
      }
  }
  return undefined;
});
function verifyPhoneCallProtocol(protocol) {
  return protocol?.libraryVersions.some(version => {
    return version === '4.0.0' || version === '4.0.1';
  });
}

/***/ }),

/***/ "./src/global/actions/calls.ts":
/*!*************************************!*\
  !*** ./src/global/actions/calls.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_calls_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/calls.async */ "./src/global/actions/api/calls.async.ts");
/* harmony import */ var _apiUpdaters_calls_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiUpdaters/calls.async */ "./src/global/actions/apiUpdaters/calls.async.ts");



/***/ }),

/***/ "./src/hooks/useRunThrottled.ts":
/*!**************************************!*\
  !*** ./src/hooks/useRunThrottled.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useRunThrottled)
/* harmony export */ });
/* harmony import */ var _useThrottledCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useThrottledCallback */ "./src/hooks/useThrottledCallback.ts");

function useRunThrottled(ms, noFirst, deps = []) {
  return (0,_useThrottledCallback__WEBPACK_IMPORTED_MODULE_0__["default"])(cb => {
    cb();
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, deps, ms, noFirst);
}

/***/ }),

/***/ "./src/lib/secret-sauce/blacksilence.ts":
/*!**********************************************!*\
  !*** ./src/lib/secret-sauce/blacksilence.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   black: () => (/* binding */ black),
/* harmony export */   silence: () => (/* binding */ silence)
/* harmony export */ });
// https://blog.mozilla.org/webrtc/warm-up-with-replacetrack/

const silence = ctx => {
  const oscillator = ctx.createOscillator();
  const dst = oscillator.connect(ctx.createMediaStreamDestination());
  oscillator.start();
  return new MediaStream([Object.assign(dst.stream.getAudioTracks()[0], {
    enabled: false
  })]);
};
const black = ({
  width = 640,
  height = 480
} = {}) => {
  const canvas = Object.assign(document.createElement('canvas'), {
    width,
    height
  });
  const ctx = canvas.getContext('2d');
  if (!ctx) throw Error('Cannot create canvas ctx');
  ctx.fillRect(0, 0, width, height);
  const stream = canvas.captureStream();
  return new MediaStream([Object.assign(stream.getVideoTracks()[0], {
    enabled: false
  })]);
};

/***/ }),

/***/ "./src/lib/secret-sauce/buildSdp.ts":
/*!******************************************!*\
  !*** ./src/lib/secret-sauce/buildSdp.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/secret-sauce/utils.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((conference, isAnswer = false, isPresentation = false, isP2p = false) => {
  const lines = [];
  const add = value => {
    lines.push(value);
  };
  const {
    sessionId,
    ssrcs,
    audioExtensions,
    videoExtensions,
    audioPayloadTypes,
    videoPayloadTypes,
    transport: {
      ufrag,
      pwd,
      fingerprints,
      candidates
    }
  } = conference;

  // Header
  add('v=0'); // version
  add(`o=- ${sessionId} 2 IN IP4 0.0.0.0`); // sessionId, 2=sessionVersion
  add('s=-'); // name of the session
  add('t=0 0'); // time when session is valid
  add('a=ice-options:trickle');
  add('a=msid-semantic:WMS *');
  add(`a=group:BUNDLE ${ssrcs.map(ssrc => ssrc.mid).join(' ')}${isPresentation ? '' : ` ${isP2p ? '3' : '2'}`}`);
  // ice-lite: is a minimal version of the ICE specification, intended only for servers running on a public IP address
  if (!isP2p) add('a=ice-lite');
  const addCandidate = c => {
    if (c.sdpString) {
      add(`a=${c.sdpString}`);
    } else {
      let str = '';
      str += 'a=candidate:';
      str += `${c.foundation} ${c.component} ${c.protocol} ${c.priority} ${c.ip} ${c.port} typ ${c.type}`;
      if ('rel-addr' in c) {
        str += ` raddr ${c['rel-addr']} rport ${c['rel-port']}`;
      }
      str += ` generation ${c.generation}`;
      add(str);
    }
  };
  const addTransport = () => {
    add(`a=ice-ufrag:${ufrag}`);
    add(`a=ice-pwd:${pwd}`);
    fingerprints.forEach(fingerprint => {
      add(`a=fingerprint:${fingerprint.hash} ${fingerprint.fingerprint}`);
      add(`a=setup:${isP2p ? fingerprint.setup : 'passive'}`);
    });
    candidates.forEach(addCandidate);
  };
  const addPayloadType = payloadType => {
    const {
      channels,
      id,
      name,
      clockrate,
      parameters
    } = payloadType;
    const channelsString = channels ? `/${channels}` : '';
    add(`a=rtpmap:${id} ${name}/${clockrate}${channelsString}`);
    if (parameters) {
      const parametersString = Object.keys(parameters).map(key => {
        return `${key}=${parameters[key]};`;
      }).join(' ');
      add(`a=fmtp:${id} ${parametersString}`);
    }
    payloadType['rtcp-fbs']?.forEach(fbParam => {
      add(`a=rtcp-fb:${id} ${fbParam.type}${fbParam.subtype ? ` ${fbParam.subtype}` : ''}`);
    });
  };
  const addSsrcEntry = entry => {
    const payloadTypes = entry.isVideo ? videoPayloadTypes : audioPayloadTypes;
    const type = entry.isVideo ? 'video' : 'audio';
    add(`m=${type} ${entry.isMain ? 1 : 0} RTP/SAVPF ${payloadTypes.map(l => l.id).join(' ')}`);
    add('c=IN IP4 0.0.0.0');
    add('b=AS:1300'); // 1300000 / 1000
    add(`a=mid:${entry.mid}`);
    add('a=rtcp-mux');
    payloadTypes.forEach(addPayloadType);
    add('a=rtcp:1 IN IP4 0.0.0.0');
    if (entry.isVideo) {
      add('a=rtcp-rsize');
    }
    (entry.isVideo ? videoExtensions : audioExtensions).forEach(({
      id,
      uri
    }) => {
      add(`a=extmap:${id} ${uri}`);
    });
    if (entry.isRemoved) {
      add('a=inactive');
      return;
    }
    addTransport();
    if (isP2p) {
      add('a=sendrecv');
      add('a=bundle-only');
    } else {
      if (isAnswer) {
        add('a=recvonly');
        return;
      }
      if (entry.isMain) {
        add('a=sendrecv');
      } else {
        add('a=sendonly');
        add('a=bundle-only');
      }
    }
    entry.sourceGroups.forEach(sourceGroup => {
      if (sourceGroup.semantics) {
        add(`a=ssrc-group:${sourceGroup.semantics} ${sourceGroup.sources.map(_utils__WEBPACK_IMPORTED_MODULE_0__.fromTelegramSource).join(' ')}`);
      }
      sourceGroup.sources.forEach(ssrcTelegram => {
        const ssrc = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.fromTelegramSource)(ssrcTelegram);
        add(`a=ssrc:${ssrc} cname:${entry.endpoint}`);
        add(`a=ssrc:${ssrc} msid:${entry.endpoint} ${entry.endpoint}`);
        add(`a=ssrc:${ssrc} mslabel:${entry.endpoint}`);
        add(`a=ssrc:${ssrc} label:${entry.endpoint}`);
      });
    });
  };
  if (!isP2p) {
    ssrcs.filter(ssrc => ssrc.mid === '0' || ssrc.mid === '1').map(addSsrcEntry);
  } else {
    ssrcs.filter(addSsrcEntry);
  }
  if (!isPresentation) {
    add('m=application 1 UDP/DTLS/SCTP webrtc-datachannel');
    add('c=IN IP4 0.0.0.0');
    addTransport();
    add('a=ice-options:trickle');
    add(`a=mid:${isP2p ? '3' : isPresentation ? '1' : '2'}`);
    add('a=sctp-port:5000');
    add('a=max-message-size:262144');
  }
  if (!isP2p) {
    ssrcs.filter(ssrc => ssrc.mid !== '0' && ssrc.mid !== '1').map(addSsrcEntry);
  }
  return `${lines.join('\n')}\n`;
});

/***/ }),

/***/ "./src/lib/secret-sauce/index.ts":
/*!***************************************!*\
  !*** ./src/lib/secret-sauce/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_SCREENSHARE_SUPPORTED: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.IS_SCREENSHARE_SUPPORTED),
/* harmony export */   THRESHOLD: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.THRESHOLD),
/* harmony export */   getDevices: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.getDevices),
/* harmony export */   getStreams: () => (/* reexport safe */ _p2p__WEBPACK_IMPORTED_MODULE_1__.getStreams),
/* harmony export */   getUserStreams: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.getUserStreams),
/* harmony export */   handleUpdateGroupCallConnection: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.handleUpdateGroupCallConnection),
/* harmony export */   handleUpdateGroupCallParticipants: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.handleUpdateGroupCallParticipants),
/* harmony export */   isStreamEnabled: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.isStreamEnabled),
/* harmony export */   joinGroupCall: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.joinGroupCall),
/* harmony export */   joinPhoneCall: () => (/* reexport safe */ _p2p__WEBPACK_IMPORTED_MODULE_1__.joinPhoneCall),
/* harmony export */   leaveGroupCall: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.leaveGroupCall),
/* harmony export */   processSignalingMessage: () => (/* reexport safe */ _p2p__WEBPACK_IMPORTED_MODULE_1__.processSignalingMessage),
/* harmony export */   setVolume: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.setVolume),
/* harmony export */   startSharingScreen: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.startSharingScreen),
/* harmony export */   stopPhoneCall: () => (/* reexport safe */ _p2p__WEBPACK_IMPORTED_MODULE_1__.stopPhoneCall),
/* harmony export */   switchCameraInput: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.switchCameraInput),
/* harmony export */   switchCameraInputP2p: () => (/* reexport safe */ _p2p__WEBPACK_IMPORTED_MODULE_1__.switchCameraInputP2p),
/* harmony export */   toggleNoiseSuppression: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.toggleNoiseSuppression),
/* harmony export */   toggleSpeaker: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.toggleSpeaker),
/* harmony export */   toggleStream: () => (/* reexport safe */ _secretsauce__WEBPACK_IMPORTED_MODULE_0__.toggleStream),
/* harmony export */   toggleStreamP2p: () => (/* reexport safe */ _p2p__WEBPACK_IMPORTED_MODULE_1__.toggleStreamP2p)
/* harmony export */ });
/* harmony import */ var _secretsauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secretsauce */ "./src/lib/secret-sauce/secretsauce.ts");
/* harmony import */ var _p2p__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p2p */ "./src/lib/secret-sauce/p2p.ts");
/* harmony import */ var _p2pMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./p2pMessage */ "./src/lib/secret-sauce/p2pMessage.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/lib/secret-sauce/utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/lib/secret-sauce/types.ts");






/***/ }),

/***/ "./src/lib/secret-sauce/p2p.ts":
/*!*************************************!*\
  !*** ./src/lib/secret-sauce/p2p.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStreams: () => (/* binding */ getStreams),
/* harmony export */   joinPhoneCall: () => (/* binding */ joinPhoneCall),
/* harmony export */   processSignalingMessage: () => (/* binding */ processSignalingMessage),
/* harmony export */   stopPhoneCall: () => (/* binding */ stopPhoneCall),
/* harmony export */   switchCameraInputP2p: () => (/* binding */ switchCameraInputP2p),
/* harmony export */   toggleStreamP2p: () => (/* binding */ toggleStreamP2p)
/* harmony export */ });
/* harmony import */ var _blacksilence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blacksilence */ "./src/lib/secret-sauce/blacksilence.ts");
/* harmony import */ var _parseSdp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseSdp */ "./src/lib/secret-sauce/parseSdp.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/lib/secret-sauce/utils.ts");
/* harmony import */ var _buildSdp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildSdp */ "./src/lib/secret-sauce/buildSdp.ts");




let state;
const ICE_CANDIDATE_POOL_SIZE = 10;
function getStreams() {
  return state?.streams;
}
function updateStreams() {
  state?.onUpdate({
    ...state.mediaState,
    '@type': 'updatePhoneCallMediaState'
  });
}
function getUserStream(streamType, facing = 'user') {
  if (streamType === 'presentation') {
    return navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: true
    });
  }
  return navigator.mediaDevices.getUserMedia({
    audio: streamType === 'audio' ? {
      ...(_utils__WEBPACK_IMPORTED_MODULE_2__.IS_ECHO_CANCELLATION_SUPPORTED && {
        echoCancellation: true
      }),
      ...(_utils__WEBPACK_IMPORTED_MODULE_2__.IS_NOISE_SUPPRESSION_SUPPORTED && {
        noiseSuppression: true
      })
    } : false,
    video: streamType === 'video' ? {
      facingMode: facing
    } : false
  });
}
async function switchCameraInputP2p() {
  if (!state || !state.facingMode) {
    return;
  }
  const stream = state.streams.ownVideo;
  if (!stream) return;
  const track = stream.getTracks()[0];
  if (!track) {
    return;
  }
  const sender = state.connection.getSenders().find(l => track.id === l.track?.id);
  if (!sender) {
    return;
  }
  state.facingMode = state.facingMode === 'environment' ? 'user' : 'environment';
  try {
    const newStream = await getUserStream('video', state.facingMode);
    await sender.replaceTrack(newStream.getTracks()[0]);
    state.streams.ownVideo = newStream;
    updateStreams();
  } catch (e) {}
}
async function toggleStreamP2p(streamType, value = undefined) {
  if (!state) return;
  const stream = streamType === 'audio' ? state.streams.ownAudio : streamType === 'video' ? state.streams.ownVideo : state.streams.ownPresentation;
  if (!stream) return;
  const track = stream.getTracks()[0];
  if (!track) {
    return;
  }
  const sender = state.connection.getSenders().find(l => track.id === l.track?.id);
  if (!sender) {
    return;
  }
  value = value === undefined ? !track.enabled : value;
  try {
    if (value && !track.enabled) {
      const newStream = await getUserStream(streamType);
      newStream.getTracks()[0].onended = () => {
        toggleStreamP2p(streamType, false);
      };
      await sender.replaceTrack(newStream.getTracks()[0]);
      if (streamType === 'audio') {
        state.streams.ownAudio = newStream;
      } else if (streamType === 'video') {
        state.streams.ownVideo = newStream;
        state.facingMode = 'user';
      } else {
        state.streams.ownPresentation = newStream;
      }
      if (streamType === 'video' || streamType === 'presentation') {
        toggleStreamP2p(streamType === 'video' ? 'presentation' : 'video', false);
      }
      // if (streamType === 'video') {
      //   state.facingMode = 'user';
      // }
    } else if (!value && track.enabled) {
      track.stop();
      const newStream = streamType === 'audio' ? state.silence : streamType === 'video' ? state.blackVideo : state.blackPresentation;
      if (!newStream) return;
      await sender.replaceTrack(newStream.getTracks()[0]);
      if (streamType === 'audio') {
        state.streams.ownAudio = newStream;
      } else if (streamType === 'video') {
        state.streams.ownVideo = newStream;
      } else {
        state.streams.ownPresentation = newStream;
      }
      // if (streamType === 'video') {
      //   state.facingMode = undefined;
      // }
    }
    updateStreams();
    sendMediaState();
  } catch (err) {
    console.error(err);
  }
}
async function joinPhoneCall(connections, emitSignalingData, isOutgoing, shouldStartVideo, isP2p, onUpdate) {
  const conn = new RTCPeerConnection({
    iceServers: connections.map(connection => ({
      urls: [connection.isTurn && `turn:${connection.ip}:${connection.port}`, connection.isStun && `stun:${connection.ip}:${connection.port}`].filter(Boolean),
      username: connection.username,
      credentialType: 'password',
      credential: connection.password
    })),
    iceTransportPolicy: isP2p ? 'all' : 'relay',
    bundlePolicy: 'max-bundle',
    iceCandidatePoolSize: ICE_CANDIDATE_POOL_SIZE
  });
  conn.onicecandidate = e => {
    if (!e.candidate) {
      return;
    }
    ;
    emitSignalingData({
      '@type': 'Candidates',
      candidates: [{
        sdpString: e.candidate.candidate
      }]
    });
  };
  conn.onconnectionstatechange = () => {
    onUpdate({
      '@type': 'updatePhoneCallConnectionState',
      connectionState: conn.connectionState
    });
  };
  conn.ontrack = e => {
    if (!state) return;
    const stream = e.streams[0];
    if (e.track.kind === 'audio') {
      state.audio.srcObject = stream;
      state.audio.play().catch();
      state.streams.audio = stream;
    } else if (e.transceiver.mid === '1') {
      state.streams.video = stream;
    } else {
      state.streams.presentation = stream;
    }
    updateStreams();
  };
  conn.oniceconnectionstatechange = async e => {
    switch (conn.iceConnectionState) {
      case 'disconnected':
      case 'failed':
        if (isOutgoing) {
          await createOffer(conn, {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true,
            iceRestart: true
          });
        }
      default:
        break;
    }
  };
  const slnc = (0,_blacksilence__WEBPACK_IMPORTED_MODULE_0__.silence)(new AudioContext());
  const video = (0,_blacksilence__WEBPACK_IMPORTED_MODULE_0__.black)({
    width: 640,
    height: 480
  });
  const screenshare = (0,_blacksilence__WEBPACK_IMPORTED_MODULE_0__.black)({
    width: 640,
    height: 480
  });
  conn.addTrack(slnc.getTracks()[0], slnc);
  conn.addTrack(video.getTracks()[0], video);
  conn.addTrack(screenshare.getTracks()[0], screenshare);
  const dc = conn.createDataChannel('data', {
    id: 0,
    negotiated: true
  });
  dc.onmessage = e => {
    processSignalingMessage(JSON.parse(e.data));
  };
  const audio = new Audio();
  state = {
    audio,
    connection: conn,
    emitSignalingData,
    isOutgoing,
    pendingCandidates: [],
    onUpdate,
    streams: {
      ownVideo: video,
      ownAudio: slnc,
      ownPresentation: screenshare
    },
    mediaState: {
      isBatteryLow: false,
      screencastState: 'inactive',
      videoState: 'inactive',
      videoRotation: 0,
      isMuted: true
    },
    blackVideo: video,
    blackPresentation: screenshare,
    silence: slnc,
    dataChannel: dc
  };
  try {
    toggleStreamP2p('audio', true);
  } catch (err) {
    console.error(err);
  }
  if (isOutgoing) {
    await createOffer(conn, {
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    });
  }
}
function stopPhoneCall() {
  if (!state) return;
  state.streams.ownVideo?.getTracks().forEach(track => track.stop());
  state.streams.ownPresentation?.getTracks().forEach(track => track.stop());
  state.streams.ownAudio?.getTracks().forEach(track => track.stop());
  state.dataChannel.close();
  state.connection.close();
  state = undefined;
}
function sendMediaState() {
  if (!state) return;
  const {
    emitSignalingData,
    streams
  } = state;
  emitSignalingData({
    '@type': 'MediaState',
    videoRotation: 0,
    isMuted: !streams.ownAudio?.getTracks()[0].enabled,
    isBatteryLow: true,
    videoState: streams.ownVideo?.getTracks()[0].enabled ? 'active' : 'inactive',
    screencastState: streams.ownPresentation?.getTracks()[0].enabled ? 'active' : 'inactive'
  });
}
function filterVP8(mediaContent) {
  if (!state || state.isOutgoing) return mediaContent;
  const {
    payloadTypes
  } = mediaContent;
  const idx = payloadTypes.findIndex(payloadType => payloadType.name === 'VP8');
  const vp8PayloadType = payloadTypes[idx];
  const rtxIdx = payloadTypes.findIndex(payloadType => Number(payloadType.parameters?.apt) === vp8PayloadType.id);
  mediaContent.payloadTypes = [payloadTypes[idx], payloadTypes[rtxIdx]];
  return mediaContent;
}
function sendInitialSetup(sdp) {
  if (!state) return;
  const {
    emitSignalingData
  } = state;
  if (!sdp.ssrc || !sdp['ssrc-groups'] || !sdp['ssrc-groups'][0] || !sdp['ssrc-groups'][1]) return;
  emitSignalingData({
    '@type': 'InitialSetup',
    fingerprints: sdp.fingerprints,
    ufrag: sdp.ufrag,
    pwd: sdp.pwd,
    audio: {
      ssrc: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fromTelegramSource)(sdp.ssrc).toString(),
      ssrcGroups: [],
      payloadTypes: sdp.audioPayloadTypes,
      rtpExtensions: sdp.audioExtmap
    },
    video: filterVP8({
      ssrc: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fromTelegramSource)(sdp['ssrc-groups'][0].sources[0]).toString(),
      ssrcGroups: [{
        semantics: sdp['ssrc-groups'][0].semantics,
        ssrcs: sdp['ssrc-groups'][0].sources.map(_utils__WEBPACK_IMPORTED_MODULE_2__.fromTelegramSource)
      }],
      payloadTypes: sdp.videoPayloadTypes,
      rtpExtensions: sdp.videoExtmap
    }),
    screencast: filterVP8({
      ssrc: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fromTelegramSource)(sdp['ssrc-groups'][1].sources[0]).toString(),
      ssrcGroups: [{
        semantics: sdp['ssrc-groups'][1].semantics,
        ssrcs: sdp['ssrc-groups'][1].sources.map(_utils__WEBPACK_IMPORTED_MODULE_2__.fromTelegramSource)
      }],
      payloadTypes: sdp.screencastPayloadTypes,
      rtpExtensions: sdp.screencastExtmap
    })
  });
}
async function processSignalingMessage(message) {
  if (!state || !state.connection) return;
  switch (message['@type']) {
    case 'MediaState':
      {
        state.mediaState = message;
        updateStreams();
        sendMediaState();
        break;
      }
    case 'Candidates':
      {
        const {
          pendingCandidates,
          gotInitialSetup
        } = state;
        message.candidates.forEach(candidate => {
          pendingCandidates.push(candidate.sdpString);
        });
        if (gotInitialSetup) {
          await commitPendingIceCandidates();
        }
        break;
      }
    case 'InitialSetup':
      {
        const {
          connection,
          isOutgoing
        } = state;
        if (!connection) return;
        const newConference = {
          transport: {
            candidates: [],
            ufrag: message.ufrag,
            pwd: message.pwd,
            fingerprints: message.fingerprints,
            'rtcp-mux': false,
            xmlns: ''
          },
          sessionId: Date.now(),
          ssrcs: [message.audio && {
            isVideo: false,
            isMain: false,
            userId: '123',
            endpoint: '0',
            mid: '0',
            sourceGroups: [{
              sources: [message.audio.ssrc]
            }]
          }, message.video && {
            isVideo: true,
            isPresentation: false,
            isMain: false,
            userId: '123',
            endpoint: '1',
            mid: '1',
            sourceGroups: message.video.ssrcGroups.map(l => ({
              semantics: l.semantics,
              sources: l.ssrcs
            }))
          }, message.screencast && {
            isVideo: true,
            isPresentation: true,
            isMain: false,
            userId: '123',
            endpoint: '2',
            mid: '2',
            sourceGroups: message.screencast.ssrcGroups.map(l => ({
              semantics: l.semantics,
              sources: l.ssrcs
            }))
          }],
          audioPayloadTypes: message.audio.payloadTypes?.map(_utils__WEBPACK_IMPORTED_MODULE_2__.p2pPayloadTypeToConference) || [],
          audioExtensions: message.audio.rtpExtensions,
          videoPayloadTypes: filterVP8(message.video).payloadTypes?.map(_utils__WEBPACK_IMPORTED_MODULE_2__.p2pPayloadTypeToConference) || [],
          videoExtensions: message.video.rtpExtensions
        };
        await connection.setRemoteDescription({
          sdp: (0,_buildSdp__WEBPACK_IMPORTED_MODULE_3__["default"])(newConference, isOutgoing, undefined, true),
          type: isOutgoing ? 'answer' : 'offer'
        });
        state.conference = newConference;
        if (!isOutgoing) {
          const answer = await connection.createAnswer();
          await connection.setLocalDescription(answer);
          sendInitialSetup((0,_parseSdp__WEBPACK_IMPORTED_MODULE_1__["default"])(connection.localDescription, true));
        }
        state.gotInitialSetup = true;
        await commitPendingIceCandidates();
        break;
      }
  }
}
async function commitPendingIceCandidates() {
  if (!state) {
    return;
  }
  const {
    pendingCandidates,
    connection
  } = state;
  if (!pendingCandidates.length) {
    return;
  }
  await Promise.all(pendingCandidates.map(c => tryAddCandidate(connection, c)));
  state.pendingCandidates = [];
}
async function tryAddCandidate(connection, candidate) {
  try {
    await connection.addIceCandidate({
      candidate,
      sdpMLineIndex: 0
    });
  } catch (err) {
    console.error(err);
  }
}
async function createOffer(conn, params) {
  const offer = await conn.createOffer(params);
  await conn.setLocalDescription(offer);
  sendInitialSetup((0,_parseSdp__WEBPACK_IMPORTED_MODULE_1__["default"])(conn.localDescription, true));
}

/***/ }),

/***/ "./src/lib/secret-sauce/p2pMessage.ts":
/*!********************************************!*\
  !*** ./src/lib/secret-sauce/p2pMessage.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/lib/secret-sauce/parseSdp.ts":
/*!******************************************!*\
  !*** ./src/lib/secret-sauce/parseSdp.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/secret-sauce/utils.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((sessionDescription, isP2p = false) => {
  if (!sessionDescription || !sessionDescription.sdp) {
    throw Error('Failed parsing SDP: session description is null');
  }
  const sections = sessionDescription.sdp.split('\r\nm=').map((s, i) => i === 0 ? s : `m=${s}`).reduce((acc, el) => {
    const name = el.match(/^m=(.+?)\s/)?.[1] || 'header';
    acc[acc.hasOwnProperty(name) && name === 'video' ? 'screencast' : name] = el.split('\r\n').filter(Boolean);
    return acc;
  }, {});
  const lookup = (prefix, sectionName) => {
    if (!sectionName) {
      return Object.values(sections).map(section => {
        return section.find(line => line.startsWith(prefix))?.substr(prefix.length);
      }).filter(Boolean)[0];
    } else {
      return sections[sectionName]?.find(line => line.startsWith(prefix))?.substr(prefix.length);
    }
  };
  const parseExtmaps = sectionName => {
    return sections[sectionName].filter(l => l.startsWith('a=extmap')).map(l => {
      const [, id, uri] = l.match(/extmap:(\d+)(?:\/.+)?\s(.+)/);
      return {
        id: Number(id),
        uri
      };
    });
  };
  const parsePayloadTypes = sectionName => {
    const payloads = sections[sectionName].filter(l => l.startsWith('a=rtpmap')).map(l => {
      const [, id, data] = l.match(/:(\d+)\s(.+)/) || [];
      const [name, clockrate, channels] = data.split('/');
      return {
        id: Number(id),
        name,
        clockrate: Number(clockrate),
        ...(channels && {
          channels: Number(channels)
        })
      };
    });
    const fbParams = sections[sectionName].filter(l => l.startsWith('a=rtcp-fb')).map(l => {
      const [, id, data] = l.match(/:(\d+)\s(.+)/) || [];
      const [type, subtype] = data.split(' ');
      return {
        id: Number(id),
        type,
        subtype: subtype || ''
      };
    });
    const parameters = sections[sectionName].filter(l => l.startsWith('a=fmtp')).map(l => {
      const [, id, data] = l.match(/:(\d+)\s(.+)/) || [];
      const d = data?.split(';').reduce((acc, q) => {
        const [name, value] = q.split('=');
        acc[name] = value;
        return acc;
      }, {});
      if (!d || Object.values(d).some(z => !z)) return undefined;
      return {
        id: Number(id),
        data: d
      };
    }).filter(Boolean);
    return payloads.map(payload => {
      const p = parameters.filter(l => l.id === payload.id).map(q => q.data).reduce((acc, el) => {
        return Object.assign(acc, el);
      }, {});
      const f = fbParams.filter(l => l.id === payload.id).map(l => {
        return {
          type: l.type,
          subtype: l.subtype
        };
      });
      return {
        ...payload,
        ...(Object.keys(p).length > 0 && {
          parameters: p
        }),
        ...(f.length > 0 && {
          feedbackTypes: f
        })
      };
    });
  };
  const rawSource = lookup('a=ssrc:', 'audio');
  const sourceAudio = rawSource && Number(rawSource.split(' ')[0]);

  // TODO multiple source groups
  const rawSourceVideo = lookup('a=ssrc-group:', 'video')?.split(' ') || undefined;
  const rawSourceScreencast = lookup('a=ssrc-group:', 'screencast')?.split(' ') || undefined;
  if (!rawSourceVideo) {
    throw Error('Failed parsing SDP: no video ssrc');
  }
  const [hash, fingerprint] = lookup('a=fingerprint:')?.split(' ') || [];
  const setup = lookup('a=setup:');
  if (!hash || !fingerprint) {
    throw Error('Failed parsing SDP: no fingerprint');
  }
  console.log(sections);
  const ufrag = lookup('a=ice-ufrag:');
  const pwd = lookup('a=ice-pwd:');
  if (!ufrag || !pwd) {
    throw Error('Failed parsing SDP: no ICE ufrag or pwd');
  }
  return {
    fingerprints: [{
      fingerprint,
      hash,
      setup: isP2p ? setup : 'active'
    }],
    pwd,
    ufrag,
    ...(sourceAudio && {
      ssrc: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toTelegramSource)(sourceAudio)
    }),
    ...(rawSourceVideo && {
      'ssrc-groups': [{
        semantics: rawSourceVideo[0],
        sources: rawSourceVideo.slice(1, rawSourceVideo.length).map(Number).map(_utils__WEBPACK_IMPORTED_MODULE_0__.toTelegramSource)
      }, isP2p && rawSourceScreencast && {
        semantics: rawSourceScreencast[0],
        sources: rawSourceScreencast.slice(1, rawSourceScreencast.length).map(Number).map(_utils__WEBPACK_IMPORTED_MODULE_0__.toTelegramSource)
      }].filter(Boolean)
    }),
    ...(isP2p && {
      audioExtmap: parseExtmaps('audio'),
      videoExtmap: parseExtmaps('video'),
      screencastExtmap: parseExtmaps('screencast'),
      audioPayloadTypes: parsePayloadTypes('audio'),
      videoPayloadTypes: parsePayloadTypes('video'),
      screencastPayloadTypes: parsePayloadTypes('screencast')
    })
  };
});

/***/ }),

/***/ "./src/lib/secret-sauce/secretsauce.ts":
/*!*********************************************!*\
  !*** ./src/lib/secret-sauce/secretsauce.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDevices: () => (/* binding */ getDevices),
/* harmony export */   getUserStreams: () => (/* binding */ getUserStreams),
/* harmony export */   handleUpdateGroupCallConnection: () => (/* binding */ handleUpdateGroupCallConnection),
/* harmony export */   handleUpdateGroupCallParticipants: () => (/* binding */ handleUpdateGroupCallParticipants),
/* harmony export */   isStreamEnabled: () => (/* binding */ isStreamEnabled),
/* harmony export */   joinGroupCall: () => (/* binding */ joinGroupCall),
/* harmony export */   leaveGroupCall: () => (/* binding */ leaveGroupCall),
/* harmony export */   setVolume: () => (/* binding */ setVolume),
/* harmony export */   startSharingScreen: () => (/* binding */ startSharingScreen),
/* harmony export */   switchCameraInput: () => (/* binding */ switchCameraInput),
/* harmony export */   toggleNoiseSuppression: () => (/* binding */ toggleNoiseSuppression),
/* harmony export */   toggleSpeaker: () => (/* binding */ toggleSpeaker),
/* harmony export */   toggleStream: () => (/* binding */ toggleStream)
/* harmony export */ });
/* harmony import */ var _parseSdp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseSdp */ "./src/lib/secret-sauce/parseSdp.ts");
/* harmony import */ var _buildSdp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildSdp */ "./src/lib/secret-sauce/buildSdp.ts");
/* harmony import */ var _blacksilence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blacksilence */ "./src/lib/secret-sauce/blacksilence.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/lib/secret-sauce/utils.ts");
/* harmony import */ var _util_Deferred__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/Deferred */ "./src/util/Deferred.ts");
/* harmony import */ var _util_safePlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/safePlay */ "./src/util/safePlay.ts");






const DEFAULT_MID = 3;
let state;
async function getDevices(streamType, isInput = true) {
  return (await navigator.mediaDevices.enumerateDevices()).filter(l => l.kind === `${streamType}${isInput ? 'input' : 'output'}`);
}
function toggleSpeaker() {
  if (!state) {
    return;
  }
  state.isSpeakerDisabled = !state.isSpeakerDisabled;
  state?.onUpdate?.({
    '@type': 'updateGroupCallConnectionState',
    connectionState: 'connected',
    isSpeakerDisabled: state.isSpeakerDisabled
  });
  if (state.participantFunctions) {
    Object.values(state.participantFunctions).forEach(l => {
      l.toggleMute?.(!!state?.isSpeakerDisabled);
    });
  }
}
function leavePresentation(isFromToggle) {
  if (!state) {
    return;
  }
  state.screenshareDataChannel?.close();
  state.screenshareConnection?.close();
  if (!isFromToggle) {
    state.onUpdate?.({
      '@type': 'updateGroupCallLeavePresentation'
    });
  }
}
function toggleNoiseSuppression() {
  if (!state || !state.myId || !state.streams) {
    return;
  }
  const audioStream = state.streams[state.myId].audio;
  if (!audioStream) {
    return;
  }
  const track = audioStream.getTracks()[0];
  if (!track) {
    return;
  }

  // @ts-ignore
  const {
    echoCancellation,
    noiseSuppression
  } = track.getConstraints();
  track.applyConstraints({
    echoCancellation: !echoCancellation,
    // @ts-ignore
    noiseSuppression: !noiseSuppression
  });
}
function getUserStreams(userId) {
  return state?.streams?.[userId];
}
function setVolume(userId, volume) {
  const participantFunctions = state?.participantFunctions?.[userId];
  if (!participantFunctions) return;
  participantFunctions.setVolume?.(volume);
}
function isStreamEnabled(streamType, userId) {
  const id = userId || state?.myId;
  const stream = id && getUserStreams(id)?.[streamType];
  if (!stream) return false;
  return stream.getTracks()[0]?.enabled;
}
function updateGroupCallStreams(userId) {
  state?.onUpdate?.({
    '@type': 'updateGroupCallStreams',
    userId,
    hasAudioStream: isStreamEnabled('audio', userId),
    hasVideoStream: isStreamEnabled('video', userId),
    hasPresentationStream: isStreamEnabled('presentation', userId),
    amplitude: state.speaking?.[userId]
  });
}
async function getUserStream(streamType, facing = 'user') {
  if (streamType === 'audio' && state?.audioStream) {
    return state.audioStream;
  }
  if (streamType === 'presentation') {
    return navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: true
    });
  }
  const media = await navigator.mediaDevices.getUserMedia({
    audio: streamType === 'audio' ? {
      // @ts-ignore
      ...(_utils__WEBPACK_IMPORTED_MODULE_3__.IS_ECHO_CANCELLATION_SUPPORTED && {
        echoCancellation: true
      }),
      ...(_utils__WEBPACK_IMPORTED_MODULE_3__.IS_NOISE_SUPPRESSION_SUPPORTED && {
        noiseSuppression: true
      })
    } : false,
    video: streamType === 'video' ? {
      facingMode: facing
    } : false
  });
  if (state && streamType === 'audio') {
    state.audioStream = media;
  }
  if (streamType === 'video') {
    const vid = document.createElement('video');
    vid.srcObject = media;
    const deferred = new _util_Deferred__WEBPACK_IMPORTED_MODULE_4__["default"]();
    vid.oncanplay = () => deferred.resolve();
    await deferred.promise;
  }
  return media;
}
async function switchCameraInput() {
  if (!state?.myId || !state.connection || !state.streams || !state.facingMode) {
    return;
  }
  const stream = getUserStreams(state.myId)?.video;
  if (!stream) return;
  const track = stream.getTracks()[0];
  if (!track) {
    return;
  }
  const sender = state.connection.getSenders().find(l => track.id === l.track?.id);
  if (!sender) {
    return;
  }
  state.facingMode = state.facingMode === 'environment' ? 'user' : 'environment';
  try {
    const newStream = await getUserStream('video', state.facingMode);
    await sender.replaceTrack(newStream.getTracks()[0]);
    state.streams[state.myId].video = newStream;
  } catch (e) {}
}
async function toggleStream(streamType, value = undefined) {
  if (!state || !state.myId || !state.connection || !state.streams) {
    return;
  }
  const stream = getUserStreams(state.myId)?.[streamType];
  if (!stream) return;
  const track = stream.getTracks()[0];
  if (!track) {
    return;
  }
  const sender = [...state.connection.getSenders(), ...(state.screenshareConnection?.getSenders() || [])].find(l => track.id === l.track?.id);
  if (!sender) {
    return;
  }
  value = value === undefined ? !track.enabled : value;
  try {
    if (value && !track.enabled) {
      const newStream = await getUserStream(streamType);
      await sender.replaceTrack(newStream.getTracks()[0]);
      state.streams[state.myId][streamType] = newStream;
      if (streamType === 'video') {
        state.facingMode = 'user';
      } else if (streamType === 'audio') {
        const {
          audioContext
        } = state;
        if (!audioContext) return;
        const source = state.audioSource || audioContext.createMediaStreamSource(newStream);
        const analyser = state.audioAnalyser || audioContext.createAnalyser();
        analyser.minDecibels = -100;
        analyser.maxDecibels = -30;
        analyser.smoothingTimeConstant = 0.05;
        analyser.fftSize = 1024;
        source.connect(analyser);
        state = {
          ...state,
          audioSource: source,
          audioAnalyser: analyser,
          participantFunctions: {
            ...state.participantFunctions,
            [state.myId]: {
              ...state.participantFunctions?.[state.myId],
              getCurrentAmplitude: () => {
                const array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAmplitude)(array, 1.5);
              }
            }
          }
        };
      }
    } else if (!value && track.enabled) {
      const newStream = streamType === 'audio' ? state.silence : state.black;
      if (!newStream) return;
      await sender.replaceTrack(newStream.getTracks()[0]);
      state.streams[state.myId][streamType] = newStream;
      if (streamType === 'video') {
        state.facingMode = undefined;
      }
      if (streamType !== 'audio') {
        // We only want to stop video streams
        track.stop();
      } else {
        state.audioSource?.disconnect();
        state.audioAnalyser?.disconnect();
      }
    }
    updateGroupCallStreams(state.myId);
    if (streamType === 'presentation' && !value) leavePresentation(true);
  } catch (e) {}
}
function updateConnectionState(connectionState) {
  state?.onUpdate?.({
    '@type': 'updateGroupCallConnectionState',
    connectionState
  });
}
function leaveGroupCall() {
  if (!state) {
    return;
  }
  if (state.myId && state.streams?.[state.myId]) {
    Object.values(state.streams[state.myId] || {}).forEach(stream => {
      stream?.getTracks().forEach(track => {
        track.stop();
      });
    });
  }
  state.audioStream?.getTracks().forEach(track => {
    track.stop();
  });
  leavePresentation(true);
  state.dataChannel?.close();
  state.connection?.close();
  updateConnectionState('disconnected');
  if (state.analyserInterval) {
    clearInterval(state.analyserInterval);
  }
  state = undefined;
}
function analyzeAmplitudes() {
  if (!state || !state.participantFunctions) return;
  Object.keys(state.participantFunctions).forEach(id => {
    const {
      getCurrentAmplitude
    } = state.participantFunctions[Number(id)];
    if (getCurrentAmplitude) {
      const amplitude = getCurrentAmplitude();
      const prevAmplitude = state.speaking[id] || 0;
      state.speaking[id] = amplitude;
      if (amplitude > _utils__WEBPACK_IMPORTED_MODULE_3__.THRESHOLD && prevAmplitude <= _utils__WEBPACK_IMPORTED_MODULE_3__.THRESHOLD || amplitude <= _utils__WEBPACK_IMPORTED_MODULE_3__.THRESHOLD && prevAmplitude > _utils__WEBPACK_IMPORTED_MODULE_3__.THRESHOLD) {
        updateGroupCallStreams(id);
      }
    }
  });
}
function createDataChannel(connection) {
  const dataChannel = connection.createDataChannel('data', {
    id: 0
  });
  dataChannel.onopen = () => {
    // console.log('Data channel open!');
  };
  dataChannel.onmessage = e => {
    // console.log('onmessage');
    const data = JSON.parse(e.data);
    // console.log(data);
    switch (data.colibriClass) {
      case 'DominantSpeakerEndpointChangeEvent':
        break;
      case 'SenderVideoConstraints':
        break;
      case 'EndpointConnectivityStatusChangeEvent':
        break;
    }
  };
  dataChannel.onerror = e => {
    console.log('%conerror', 'background: green; font-size: 5em');
    console.error(e);
  };
  return dataChannel;
}
async function handleUpdateGroupCallParticipants(updatedParticipants) {
  if (!state) {
    return;
  }
  const {
    participants,
    conference,
    connection,
    myId
  } = state;
  if (!participants || !conference || !connection || !conference.ssrcs || !conference.transport || !myId) {
    return;
  }

  // Joined from another client
  if (updatedParticipants.find(participant => {
    return participant.isSelf && participant.source !== state?.conference?.ssrcs?.find(l => l.isMain && !l.isVideo)?.sourceGroups[0].sources[0];
  })) {
    leaveGroupCall();
    return;
  }
  const newEndpoints = [];
  updatedParticipants.forEach(participant => {
    if (participant.isSelf) {
      if (participant.isMuted && !participant.canSelfUnmute) {
        // Muted by admin
        toggleStream('audio', false);
        toggleStream('video', false);
        toggleStream('presentation', false);
      }
      return;
    }
    const {
      isLeft
    } = participant;
    const isAudioLeft = participant.isMuted || participant.isMutedByMe;
    const isVideoLeft = !participant.isVideoJoined || !participant.video || isLeft;
    const isPresentationLeft = !participant.presentation || isLeft;
    let hasVideo = false;
    let hasAudio = false;
    let hasPresentation = false;
    conference.ssrcs.filter(l => l.userId === participant.id).forEach(ssrc => {
      if (!ssrc.isVideo) {
        if (ssrc.sourceGroups[0].sources[0] === participant.source) {
          hasAudio = true;
        }
        // console.log('has audio, removed=', isAudioLeft);
        ssrc.isRemoved = isAudioLeft;
      }
      if (ssrc.isVideo) {
        if (!ssrc.isPresentation) {
          if (!!participant.video && ssrc.endpoint === participant.video.endpoint) {
            hasVideo = true;
          }
          // console.log('has video = ', hasVideo, ' removed=', isVideoLeft);
          ssrc.isRemoved = isVideoLeft;
        }
        if (ssrc.isPresentation) {
          if (!!participant.presentation && ssrc.endpoint === participant.presentation.endpoint) {
            hasPresentation = true;
          }
          // console.log('has presentation, removed=', isPresentationLeft);
          ssrc.isRemoved = isPresentationLeft;
        }
      }
    });
    if (!isAudioLeft && !hasAudio) {
      // console.log('add audio');
      state.lastMid = state.lastMid + 1;
      conference.ssrcs.push({
        userId: participant.id,
        isMain: false,
        endpoint: `audio${participant.source}`,
        isVideo: false,
        sourceGroups: [{
          sources: [participant.source]
        }],
        mid: state.lastMid.toString()
      });
    }
    if (!isVideoLeft && !hasVideo && participant.video) {
      // console.log('add video', participant.video);
      state.lastMid = state.lastMid + 1;
      newEndpoints.push(participant.video.endpoint);
      conference.ssrcs.push({
        userId: participant.id,
        isMain: false,
        endpoint: participant.video.endpoint,
        isVideo: true,
        sourceGroups: participant.video.sourceGroups,
        mid: state.lastMid.toString()
      });
    }
    if (!isPresentationLeft && !hasPresentation && participant.presentation) {
      // console.log('add presentation');
      state.lastMid = state.lastMid + 1;
      conference.ssrcs.push({
        isPresentation: true,
        userId: participant.id,
        isMain: false,
        endpoint: participant.presentation.endpoint,
        isVideo: true,
        sourceGroups: participant.presentation.sourceGroups,
        mid: state.lastMid.toString()
      });
    }
  });
  if (state.updatingParticipantsQueue) {
    state.updatingParticipantsQueue.push(conference);
    return;
  } else {
    state.updatingParticipantsQueue = [];
  }
  const sdp = (0,_buildSdp__WEBPACK_IMPORTED_MODULE_1__["default"])(conference);
  await connection.setRemoteDescription({
    type: 'offer',
    sdp
  });
  try {
    const answer = await connection.createAnswer();
    await connection.setLocalDescription(answer);
    updateGroupCallStreams(myId);
    if (state.updatingParticipantsQueue.length > 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const newConference of state.updatingParticipantsQueue) {
        await connection.setRemoteDescription({
          type: 'offer',
          sdp: (0,_buildSdp__WEBPACK_IMPORTED_MODULE_1__["default"])(newConference)
        });
        const answerNew = await connection.createAnswer();
        await connection.setLocalDescription(answerNew);
        updateGroupCallStreams(myId);

        // if (newEndpoints.length > 0) {
        //   sendDataChannelMessage({
        //     colibriClass: 'ReceiverVideoConstraints',
        //     defaultConstraints: {
        //       maxHeight: 0,
        //     },
        //     constraints: {
        //       ...(newEndpoints.reduce((acc: Record<string, any>, el) => {
        //         acc[el] = {
        //           minHeight: 0,
        //           maxHeight: 1080,
        //         };
        //         return acc;
        //       }, {})),
        //     },
        //     onStageEndpoints: [],
        //   });
        // }
      }
    }
    state.updatingParticipantsQueue = undefined;
  } catch (e) {
    console.error(e);
  }
}
//
// function sendDataChannelMessage(message: ColibriClass) {
//   if (!state || !state.dataChannel || state.dataChannel.readyState !== 'open') {
//     return;
//   }
//
//   // console.log('SEND!', message);
//   state.dataChannel.send(JSON.stringify(message));
// }

async function handleUpdateGroupCallConnection(data, isPresentation) {
  if (!state) {
    return;
  }
  const conference = isPresentation ? state.screenshareConference : state.conference;
  const connection = isPresentation ? state.screenshareConnection : state.connection;
  if (!conference || !connection || !conference.ssrcs) {
    return;
  }
  const sessionId = Date.now();
  const newConference = {
    ...conference,
    transport: data.transport,
    sessionId,
    audioExtensions: data.audio?.['rtp-hdrexts'],
    audioPayloadTypes: data.audio?.['payload-types'],
    videoExtensions: data.video?.['rtp-hdrexts'],
    videoPayloadTypes: data.video?.['payload-types']
  };
  state = {
    ...state,
    ...(!isPresentation ? {
      conference: newConference
    } : {
      screenshareConference: newConference
    })
  };
  try {
    await connection.setRemoteDescription({
      type: 'answer',
      sdp: (0,_buildSdp__WEBPACK_IMPORTED_MODULE_1__["default"])(newConference, true, isPresentation)
    });

    // state.resolveTest();
    // state.test = true;
  } catch (e) {
    console.error(e);
  }
}
function handleTrack(e) {
  if (!state || !state.audioElement || !state.audioContext || !state.mediaStream) {
    return;
  }
  const ssrc = state.conference?.ssrcs?.find(l => l.endpoint === e.track.id);
  if (!ssrc || !ssrc.userId) {
    return;
  }
  const {
    userId,
    isPresentation
  } = ssrc;
  const participant = state.participants?.find(p => p.id === userId);
  const streamType = e.track.kind === 'video' ? isPresentation ? 'presentation' : 'video' : 'audio';
  e.track.onended = () => {
    delete state?.streams?.[userId][streamType];
    updateGroupCallStreams(userId);
  };
  const stream = e.streams[0];
  if (e.track.kind === 'audio') {
    const {
      mediaStream
    } = state;
    const audioContext = new window.AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const gainNode = audioContext.createGain();
    gainNode.gain.value = (participant?.volume || 10000) / 10000;
    const muteNode = audioContext.createGain();
    gainNode.gain.value = 1;
    const analyser = audioContext.createAnalyser();
    analyser.minDecibels = -100;
    analyser.maxDecibels = -30;
    analyser.smoothingTimeConstant = 0.05;
    analyser.fftSize = 1024;
    source.connect(analyser).connect(muteNode).connect(gainNode).connect(audioContext.destination);
    mediaStream.addTrack(source.mediaStream.getAudioTracks()[0]);

    // https://stackoverflow.com/questions/41784137/webrtc-doesnt-work-with-audiocontext#comment117600018_41784241
    const test = new Audio();
    test.srcObject = stream;
    // test.srcObject = source.mediaStream;
    test.muted = true;
    test.remove();
    state = {
      ...state,
      participantFunctions: {
        ...state.participantFunctions,
        [userId]: {
          ...state.participantFunctions?.[userId],
          setVolume: volume => {
            gainNode.gain.value = volume > 1 ? volume * 2 : volume;
          },
          toggleMute: muted => {
            muteNode.gain.value = muted ? 0 : 1;
          },
          getCurrentAmplitude: () => {
            const array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAmplitude)(array, 1.5);
          }
        }
      }
    };
  }
  state = {
    ...state,
    streams: {
      ...state.streams,
      [userId]: {
        ...state.streams?.[userId],
        [streamType]: stream
      }
    }
  };
  updateGroupCallStreams(userId);
}
function initializeConnection(streams, resolve, isPresentation = false) {
  const connection = new RTCPeerConnection();
  const dataChannel = isPresentation ? undefined : createDataChannel(connection);
  streams.forEach(stream => stream.getTracks().forEach(track => {
    connection.addTrack(track, stream);
  }));
  if (!isPresentation) {
    connection.oniceconnectionstatechange = () => {
      const connectionState = connection.iceConnectionState;
      console.log('iceconnectionstatechange', connectionState);
      if (connectionState === 'connected' || connectionState === 'completed') {
        updateConnectionState('connected');
      } else if (connectionState === 'checking' || connectionState === 'new') {
        updateConnectionState('connecting');
      } else if (connection.iceConnectionState === 'disconnected') {
        updateConnectionState('reconnecting');
      }
    };
  }
  connection.onconnectionstatechange = () => {
    console.log('connectionstatechange', connection.connectionState);
  };
  connection.ontrack = handleTrack;
  connection.onnegotiationneeded = async () => {
    if (!state) return;
    console.log('onnegotiationneeded');
    const {
      myId
    } = state;
    if (!myId) {
      return;
    }
    const offer = await connection.createOffer({
      offerToReceiveVideo: true,
      offerToReceiveAudio: !isPresentation
    });
    console.log('offer created');
    await connection.setLocalDescription(offer);
    console.log('local desc set');
    if (!offer.sdp) {
      return;
    }
    const sdp = (0,_parseSdp__WEBPACK_IMPORTED_MODULE_0__["default"])(offer);
    const audioSsrc = !isPresentation ? {
      userId: '',
      sourceGroups: [{
        sources: [sdp.ssrc || 0]
      }],
      isRemoved: isPresentation,
      isMain: true,
      isVideo: false,
      isPresentation,
      endpoint: isPresentation ? '1' : '0',
      mid: isPresentation ? '1' : '0'
    } : undefined;
    const videoSsrc = sdp['ssrc-groups'] && {
      isPresentation,
      userId: '',
      sourceGroups: sdp['ssrc-groups'],
      isMain: true,
      isVideo: true,
      endpoint: isPresentation ? '0' : '1',
      mid: isPresentation ? '0' : '1'
    };
    const conference = isPresentation ? state.screenshareConference : state.conference;
    const ssrcs = [];
    if (isPresentation) {
      if (videoSsrc) ssrcs.push(videoSsrc);
      if (audioSsrc) ssrcs.push(audioSsrc);
    } else {
      if (audioSsrc) ssrcs.push(audioSsrc);
      if (videoSsrc) ssrcs.push(videoSsrc);
    }
    const audioStream = streams.find(l => l.getTracks()[0].kind === 'audio');
    const videoStream = streams.find(l => l.getTracks()[0].kind === 'video');
    state = {
      ...state,
      ...(!isPresentation ? {
        conference: {
          ...conference,
          ssrcs
        }
      } : {
        screenshareConference: {
          ...conference,
          ssrcs
        }
      }),
      streams: {
        ...state.streams,
        [myId]: {
          ...state.streams?.[myId],
          ...(audioStream && {
            audio: audioStream
          }),
          ...(!isPresentation && videoStream ? {
            video: videoStream
          } : {
            presentation: videoStream
          })
        }
      }
    };
    updateGroupCallStreams(myId);
    resolve(sdp);
  };
  return {
    connection,
    dataChannel
  };
}
async function startSharingScreen() {
  if (!state) {
    return undefined;
  }
  try {
    const stream = await getUserStream('presentation');
    if (!stream) {
      return undefined;
    }
    stream.getTracks()[0].onended = () => {
      if (state && state.myId) {
        delete state.streams?.[state.myId].presentation;
        updateGroupCallStreams(state.myId);
        leavePresentation();
      }
    };
    return await new Promise(resolve => {
      const {
        connection,
        dataChannel
      } = initializeConnection([stream], resolve, true);
      state = {
        ...state,
        screenshareConnection: connection,
        screenshareDataChannel: dataChannel
      };
    });
  } catch (e) {
    return undefined;
  }
}
function joinGroupCall(myId, audioContext, audioElement, onUpdate) {
  if (state) {
    throw Error('Already in call');
  }
  updateConnectionState('connecting');
  const mediaStream = new MediaStream();
  audioElement.srcObject = mediaStream;
  (0,_util_safePlay__WEBPACK_IMPORTED_MODULE_5__["default"])(audioElement);
  state = {
    onUpdate,
    participants: [],
    myId,
    speaking: {},
    silence: (0,_blacksilence__WEBPACK_IMPORTED_MODULE_2__.silence)(audioContext),
    black: (0,_blacksilence__WEBPACK_IMPORTED_MODULE_2__.black)({
      width: 640,
      height: 480
    }),
    // @ts-ignore
    analyserInterval: setInterval(analyzeAmplitudes, 1000),
    audioElement,
    // destination,
    audioContext,
    mediaStream,
    lastMid: DEFAULT_MID
  };

  // Prepare microphone
  getUserStream('audio');
  return new Promise(resolve => {
    state = {
      ...state,
      ...initializeConnection([state.silence, state.black], resolve)
    };
  });
}

/***/ }),

/***/ "./src/lib/secret-sauce/types.ts":
/*!***************************************!*\
  !*** ./src/lib/secret-sauce/types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/lib/secret-sauce/utils.ts":
/*!***************************************!*\
  !*** ./src/lib/secret-sauce/utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_ECHO_CANCELLATION_SUPPORTED: () => (/* binding */ IS_ECHO_CANCELLATION_SUPPORTED),
/* harmony export */   IS_NOISE_SUPPRESSION_SUPPORTED: () => (/* binding */ IS_NOISE_SUPPRESSION_SUPPORTED),
/* harmony export */   IS_SCREENSHARE_SUPPORTED: () => (/* binding */ IS_SCREENSHARE_SUPPORTED),
/* harmony export */   THRESHOLD: () => (/* binding */ THRESHOLD),
/* harmony export */   fromTelegramSource: () => (/* binding */ fromTelegramSource),
/* harmony export */   getAmplitude: () => (/* binding */ getAmplitude),
/* harmony export */   isRelayAddress: () => (/* binding */ isRelayAddress),
/* harmony export */   p2pPayloadTypeToConference: () => (/* binding */ p2pPayloadTypeToConference),
/* harmony export */   removeRelatedAddress: () => (/* binding */ removeRelatedAddress),
/* harmony export */   toTelegramSource: () => (/* binding */ toTelegramSource)
/* harmony export */ });
/// NOTE: telegram returns sign source, while webrtc uses unsign source internally
/// unsign => sign
function toTelegramSource(source) {
  // eslint-disable-next-line no-bitwise
  return source << 0;
}

/// NOTE: telegram returns sign source, while webrtc uses unsign source internally
/// sign => unsign
function fromTelegramSource(source) {
  // eslint-disable-next-line no-bitwise
  return source >>> 0;
}
function getAmplitude(array, scale = 3) {
  if (!array) return 0;
  const {
    length
  } = array;
  let total = 0;
  for (let i = 0; i < length; i++) {
    total += array[i] * array[i];
  }
  const rms = Math.sqrt(total / length) / 255;
  return Math.min(1, rms * scale);
}
function p2pPayloadTypeToConference(p) {
  return {
    id: p.id,
    name: p.name,
    'rtcp-fbs': p.feedbackTypes,
    clockrate: p.clockrate,
    parameters: p.parameters,
    channels: p.channels
  };
}
function isRelayAddress(candidate) {
  const parts = candidate.split(' ');
  return parts.some(part => part === 'relay');
}
function removeRelatedAddress(candidate) {
  const parts = candidate.split(' ');
  const raddrIndex = parts.indexOf('raddr');
  if (raddrIndex !== -1) {
    parts.splice(raddrIndex, 2);
  }
  const rportIndex = parts.indexOf('rport');
  if (rportIndex !== -1) {
    parts.splice(rportIndex, 2);
  }
  return parts.join(' ');
}
const THRESHOLD = 0.1;
const IS_SCREENSHARE_SUPPORTED = 'getDisplayMedia' in (navigator?.mediaDevices || {});
const IS_ECHO_CANCELLATION_SUPPORTED = navigator?.mediaDevices?.getSupportedConstraints().echoCancellation;
// @ts-ignore
const IS_NOISE_SUPPRESSION_SUPPORTED = navigator?.mediaDevices?.getSupportedConstraints().noiseSuppression;

/***/ }),

/***/ "./src/util/phoneCallEmojiConstants.ts":
/*!*********************************************!*\
  !*** ./src/util/phoneCallEmojiConstants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMOJI_DATA: () => (/* binding */ EMOJI_DATA),
/* harmony export */   EMOJI_OFFSETS: () => (/* binding */ EMOJI_OFFSETS)
/* harmony export */ });
const EMOJI_DATA = new Uint16Array([0xd83d, 0xde09, 0xd83d, 0xde0d, 0xd83d, 0xde1b, 0xd83d, 0xde2d, 0xd83d, 0xde31, 0xd83d, 0xde21, 0xd83d, 0xde0e, 0xd83d, 0xde34, 0xd83d, 0xde35, 0xd83d, 0xde08, 0xd83d, 0xde2c, 0xd83d, 0xde07, 0xd83d, 0xde0f, 0xd83d, 0xdc6e, 0xd83d, 0xdc77, 0xd83d, 0xdc82, 0xd83d, 0xdc76, 0xd83d, 0xdc68, 0xd83d, 0xdc69, 0xd83d, 0xdc74, 0xd83d, 0xdc75, 0xd83d, 0xde3b, 0xd83d, 0xde3d, 0xd83d, 0xde40, 0xd83d, 0xdc7a, 0xd83d, 0xde48, 0xd83d, 0xde49, 0xd83d, 0xde4a, 0xd83d, 0xdc80, 0xd83d, 0xdc7d, 0xd83d, 0xdca9, 0xd83d, 0xdd25, 0xd83d, 0xdca5, 0xd83d, 0xdca4, 0xd83d, 0xdc42, 0xd83d, 0xdc40, 0xd83d, 0xdc43, 0xd83d, 0xdc45, 0xd83d, 0xdc44, 0xd83d, 0xdc4d, 0xd83d, 0xdc4e, 0xd83d, 0xdc4c, 0xd83d, 0xdc4a, 0x270c, 0x270b, 0xd83d, 0xdc50, 0xd83d, 0xdc46, 0xd83d, 0xdc47, 0xd83d, 0xdc49, 0xd83d, 0xdc48, 0xd83d, 0xde4f, 0xd83d, 0xdc4f, 0xd83d, 0xdcaa, 0xd83d, 0xdeb6, 0xd83c, 0xdfc3, 0xd83d, 0xdc83, 0xd83d, 0xdc6b, 0xd83d, 0xdc6a, 0xd83d, 0xdc6c, 0xd83d, 0xdc6d, 0xd83d, 0xdc85, 0xd83c, 0xdfa9, 0xd83d, 0xdc51, 0xd83d, 0xdc52, 0xd83d, 0xdc5f, 0xd83d, 0xdc5e, 0xd83d, 0xdc60, 0xd83d, 0xdc55, 0xd83d, 0xdc57, 0xd83d, 0xdc56, 0xd83d, 0xdc59, 0xd83d, 0xdc5c, 0xd83d, 0xdc53, 0xd83c, 0xdf80, 0xd83d, 0xdc84, 0xd83d, 0xdc9b, 0xd83d, 0xdc99, 0xd83d, 0xdc9c, 0xd83d, 0xdc9a, 0xd83d, 0xdc8d, 0xd83d, 0xdc8e, 0xd83d, 0xdc36, 0xd83d, 0xdc3a, 0xd83d, 0xdc31, 0xd83d, 0xdc2d, 0xd83d, 0xdc39, 0xd83d, 0xdc30, 0xd83d, 0xdc38, 0xd83d, 0xdc2f, 0xd83d, 0xdc28, 0xd83d, 0xdc3b, 0xd83d, 0xdc37, 0xd83d, 0xdc2e, 0xd83d, 0xdc17, 0xd83d, 0xdc34, 0xd83d, 0xdc11, 0xd83d, 0xdc18, 0xd83d, 0xdc3c, 0xd83d, 0xdc27, 0xd83d, 0xdc25, 0xd83d, 0xdc14, 0xd83d, 0xdc0d, 0xd83d, 0xdc22, 0xd83d, 0xdc1b, 0xd83d, 0xdc1d, 0xd83d, 0xdc1c, 0xd83d, 0xdc1e, 0xd83d, 0xdc0c, 0xd83d, 0xdc19, 0xd83d, 0xdc1a, 0xd83d, 0xdc1f, 0xd83d, 0xdc2c, 0xd83d, 0xdc0b, 0xd83d, 0xdc10, 0xd83d, 0xdc0a, 0xd83d, 0xdc2b, 0xd83c, 0xdf40, 0xd83c, 0xdf39, 0xd83c, 0xdf3b, 0xd83c, 0xdf41, 0xd83c, 0xdf3e, 0xd83c, 0xdf44, 0xd83c, 0xdf35, 0xd83c, 0xdf34, 0xd83c, 0xdf33, 0xd83c, 0xdf1e, 0xd83c, 0xdf1a, 0xd83c, 0xdf19, 0xd83c, 0xdf0e, 0xd83c, 0xdf0b, 0x26a1, 0x2614, 0x2744, 0x26c4, 0xd83c, 0xdf00, 0xd83c, 0xdf08, 0xd83c, 0xdf0a, 0xd83c, 0xdf93, 0xd83c, 0xdf86, 0xd83c, 0xdf83, 0xd83d, 0xdc7b, 0xd83c, 0xdf85, 0xd83c, 0xdf84, 0xd83c, 0xdf81, 0xd83c, 0xdf88, 0xd83d, 0xdd2e, 0xd83c, 0xdfa5, 0xd83d, 0xdcf7, 0xd83d, 0xdcbf, 0xd83d, 0xdcbb, 0x260e, 0xd83d, 0xdce1, 0xd83d, 0xdcfa, 0xd83d, 0xdcfb, 0xd83d, 0xdd09, 0xd83d, 0xdd14, 0x23f3, 0x23f0, 0x231a, 0xd83d, 0xdd12, 0xd83d, 0xdd11, 0xd83d, 0xdd0e, 0xd83d, 0xdca1, 0xd83d, 0xdd26, 0xd83d, 0xdd0c, 0xd83d, 0xdd0b, 0xd83d, 0xdebf, 0xd83d, 0xdebd, 0xd83d, 0xdd27, 0xd83d, 0xdd28, 0xd83d, 0xdeaa, 0xd83d, 0xdeac, 0xd83d, 0xdca3, 0xd83d, 0xdd2b, 0xd83d, 0xdd2a, 0xd83d, 0xdc8a, 0xd83d, 0xdc89, 0xd83d, 0xdcb0, 0xd83d, 0xdcb5, 0xd83d, 0xdcb3, 0x2709, 0xd83d, 0xdceb, 0xd83d, 0xdce6, 0xd83d, 0xdcc5, 0xd83d, 0xdcc1, 0x2702, 0xd83d, 0xdccc, 0xd83d, 0xdcce, 0x2712, 0x270f, 0xd83d, 0xdcd0, 0xd83d, 0xdcda, 0xd83d, 0xdd2c, 0xd83d, 0xdd2d, 0xd83c, 0xdfa8, 0xd83c, 0xdfac, 0xd83c, 0xdfa4, 0xd83c, 0xdfa7, 0xd83c, 0xdfb5, 0xd83c, 0xdfb9, 0xd83c, 0xdfbb, 0xd83c, 0xdfba, 0xd83c, 0xdfb8, 0xd83d, 0xdc7e, 0xd83c, 0xdfae, 0xd83c, 0xdccf, 0xd83c, 0xdfb2, 0xd83c, 0xdfaf, 0xd83c, 0xdfc8, 0xd83c, 0xdfc0, 0x26bd, 0x26be, 0xd83c, 0xdfbe, 0xd83c, 0xdfb1, 0xd83c, 0xdfc9, 0xd83c, 0xdfb3, 0xd83c, 0xdfc1, 0xd83c, 0xdfc7, 0xd83c, 0xdfc6, 0xd83c, 0xdfca, 0xd83c, 0xdfc4, 0x2615, 0xd83c, 0xdf7c, 0xd83c, 0xdf7a, 0xd83c, 0xdf77, 0xd83c, 0xdf74, 0xd83c, 0xdf55, 0xd83c, 0xdf54, 0xd83c, 0xdf5f, 0xd83c, 0xdf57, 0xd83c, 0xdf71, 0xd83c, 0xdf5a, 0xd83c, 0xdf5c, 0xd83c, 0xdf61, 0xd83c, 0xdf73, 0xd83c, 0xdf5e, 0xd83c, 0xdf69, 0xd83c, 0xdf66, 0xd83c, 0xdf82, 0xd83c, 0xdf70, 0xd83c, 0xdf6a, 0xd83c, 0xdf6b, 0xd83c, 0xdf6d, 0xd83c, 0xdf6f, 0xd83c, 0xdf4e, 0xd83c, 0xdf4f, 0xd83c, 0xdf4a, 0xd83c, 0xdf4b, 0xd83c, 0xdf52, 0xd83c, 0xdf47, 0xd83c, 0xdf49, 0xd83c, 0xdf53, 0xd83c, 0xdf51, 0xd83c, 0xdf4c, 0xd83c, 0xdf50, 0xd83c, 0xdf4d, 0xd83c, 0xdf46, 0xd83c, 0xdf45, 0xd83c, 0xdf3d, 0xd83c, 0xdfe1, 0xd83c, 0xdfe5, 0xd83c, 0xdfe6, 0x26ea, 0xd83c, 0xdff0, 0x26fa, 0xd83c, 0xdfed, 0xd83d, 0xddfb, 0xd83d, 0xddfd, 0xd83c, 0xdfa0, 0xd83c, 0xdfa1, 0x26f2, 0xd83c, 0xdfa2, 0xd83d, 0xdea2, 0xd83d, 0xdea4, 0x2693, 0xd83d, 0xde80, 0x2708, 0xd83d, 0xde81, 0xd83d, 0xde82, 0xd83d, 0xde8b, 0xd83d, 0xde8e, 0xd83d, 0xde8c, 0xd83d, 0xde99, 0xd83d, 0xde97, 0xd83d, 0xde95, 0xd83d, 0xde9b, 0xd83d, 0xdea8, 0xd83d, 0xde94, 0xd83d, 0xde92, 0xd83d, 0xde91, 0xd83d, 0xdeb2, 0xd83d, 0xdea0, 0xd83d, 0xde9c, 0xd83d, 0xdea6, 0x26a0, 0xd83d, 0xdea7, 0x26fd, 0xd83c, 0xdfb0, 0xd83d, 0xddff, 0xd83c, 0xdfaa, 0xd83c, 0xdfad, 0xd83c, 0xddef, 0xd83c, 0xddf5, 0xd83c, 0xddf0, 0xd83c, 0xddf7, 0xd83c, 0xdde9, 0xd83c, 0xddea, 0xd83c, 0xdde8, 0xd83c, 0xddf3, 0xd83c, 0xddfa, 0xd83c, 0xddf8, 0xd83c, 0xddeb, 0xd83c, 0xddf7, 0xd83c, 0xddea, 0xd83c, 0xddf8, 0xd83c, 0xddee, 0xd83c, 0xddf9, 0xd83c, 0xddf7, 0xd83c, 0xddfa, 0xd83c, 0xddec, 0xd83c, 0xdde7, 0x0031, 0x20e3, 0x0032, 0x20e3, 0x0033, 0x20e3, 0x0034, 0x20e3, 0x0035, 0x20e3, 0x0036, 0x20e3, 0x0037, 0x20e3, 0x0038, 0x20e3, 0x0039, 0x20e3, 0x0030, 0x20e3, 0xd83d, 0xdd1f, 0x2757, 0x2753, 0x2665, 0x2666, 0xd83d, 0xdcaf, 0xd83d, 0xdd17, 0xd83d, 0xdd31, 0xd83d, 0xdd34, 0xd83d, 0xdd35, 0xd83d, 0xdd36, 0xd83d, 0xdd37]);
const EMOJI_OFFSETS = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 87, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 259, 260, 261, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 295, 297, 299, 301, 303, 305, 306, 307, 308, 310, 312, 314, 316, 318, 320, 322, 324, 326, 328, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348, 350, 351, 353, 355, 357, 359, 360, 362, 364, 365, 366, 368, 370, 372, 374, 376, 378, 380, 382, 384, 386, 388, 390, 392, 394, 396, 398, 400, 402, 404, 406, 407, 408, 410, 412, 414, 416, 418, 420, 422, 424, 426, 427, 429, 431, 433, 435, 437, 439, 441, 443, 445, 447, 449, 451, 453, 455, 457, 459, 461, 463, 465, 467, 469, 471, 473, 475, 477, 479, 481, 483, 485, 487, 489, 491, 493, 495, 497, 499, 501, 503, 505, 507, 508, 510, 511, 513, 515, 517, 519, 521, 522, 524, 526, 528, 529, 531, 532, 534, 536, 538, 540, 542, 544, 546, 548, 550, 552, 554, 556, 558, 560, 562, 564, 566, 567, 569, 570, 572, 574, 576, 578, 582, 586, 590, 594, 598, 602, 606, 610, 614, 618, 620, 622, 624, 626, 628, 630, 632, 634, 636, 638, 640, 641, 642, 643, 644, 646, 648, 650, 652, 654, 656, 658];

/***/ }),

/***/ "./src/util/vibrate.ts":
/*!*****************************!*\
  !*** ./src/util/vibrate.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vibrateShort: () => (/* binding */ vibrateShort)
/* harmony export */ });
const vibrateShort = () => {
  navigator.vibrate?.(50);
};

/***/ })

}]);
//# sourceMappingURL=BundleCalls.488acf7dd89afd322b93.js.map