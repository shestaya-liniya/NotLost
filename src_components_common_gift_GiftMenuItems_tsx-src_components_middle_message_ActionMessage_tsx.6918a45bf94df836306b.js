"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_common_gift_GiftMenuItems_tsx-src_components_middle_message_ActionMessage_tsx"],{

/***/ "./src/components/common/MiniTable.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/common/MiniTable.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"MiniTable-module__root","key":"MiniTable-module__key","value":"MiniTable-module__value"});

/***/ }),

/***/ "./src/components/common/MiniTable.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/MiniTable.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _MiniTable_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniTable.module.scss */ "./src/components/common/MiniTable.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");




const MiniTable = ({
  data,
  style,
  className,
  valueClassName,
  keyClassName
}) => {
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_MiniTable_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
    style: style,
    children: data.map(([key, value]) => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_MiniTable_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].key, keyClassName),
        children: key
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_MiniTable_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].value, valueClassName),
        children: value
      })]
    }))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(MiniTable));

/***/ }),

/***/ "./src/components/common/gift/GiftMenuItems.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/gift/GiftMenuItems.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");











const GiftMenuItems = ({
  peerId,
  canManage,
  gift: typeGift,
  currentUserEmojiStatus,
  collectibleEmojiStatuses
}) => {
  const {
    showNotification,
    openChatWithDraft,
    openGiftTransferModal,
    openGiftResalePriceComposerModal,
    openGiftStatusInfoModal,
    setEmojiStatus,
    toggleSavedGiftPinned,
    changeGiftVisibility,
    updateStarGiftPrice,
    closeGiftInfoModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const isSavedGift = typeGift && 'gift' in typeGift;
  const savedGift = isSavedGift ? typeGift : undefined;
  const gift = isSavedGift ? typeGift.gift : typeGift;
  const starGiftUniqueSlug = gift?.type === 'starGiftUnique' ? gift.slug : undefined;
  const starGiftUniqueLink = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!starGiftUniqueSlug) return undefined;
    return `${_config__WEBPACK_IMPORTED_MODULE_2__.TME_LINK_PREFIX}nft/${starGiftUniqueSlug}`;
  }, [starGiftUniqueSlug]);
  const userCollectibleStatus = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!starGiftUniqueSlug) return undefined;
    return collectibleEmojiStatuses?.find(status => status.type === 'collectible' && status.slug === starGiftUniqueSlug);
  }, [starGiftUniqueSlug, collectibleEmojiStatuses]);
  const currenUniqueEmojiStatusSlug = currentUserEmojiStatus?.type === 'collectible' ? currentUserEmojiStatus.slug : undefined;
  const isGiftUnique = gift && gift.type === 'starGiftUnique';
  const canTakeOff = isGiftUnique && currenUniqueEmojiStatusSlug === gift.slug;
  const canWear = userCollectibleStatus && !canTakeOff;
  const giftResalePrice = isGiftUnique ? gift.resellPriceInStars : undefined;
  const hasPinOptions = canManage && savedGift && !savedGift.isUnsaved && isGiftUnique;
  const handleTriggerVisibility = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    const {
      inputGift,
      isUnsaved
    } = savedGift;
    changeGiftVisibility({
      gift: inputGift,
      shouldUnsave: !isUnsaved
    });
  });
  const handleCopyLink = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (!starGiftUniqueLink) return;
    (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_3__.copyTextToClipboard)(starGiftUniqueLink);
    showNotification({
      message: lang('LinkCopied')
    });
  });
  const handleLinkShare = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (!starGiftUniqueLink) return;
    openChatWithDraft({
      text: {
        text: starGiftUniqueLink
      }
    });
  });
  const handleTransfer = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (!savedGift || savedGift?.gift.type !== 'starGiftUnique') return;
    if (savedGift.canTransferAt && savedGift.canTransferAt > (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_5__.getServerTime)()) {
      showNotification({
        message: {
          key: 'NotificationGiftCanTransferAt',
          variables: {
            date: (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_4__.formatDateAtTime)(oldLang, savedGift.canTransferAt * 1000)
          }
        }
      });
      return;
    }
    openGiftTransferModal({
      gift: savedGift
    });
  });
  const handleSell = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (!savedGift) return;
    if (savedGift.canResellAt && savedGift.canResellAt > (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_5__.getServerTime)()) {
      showNotification({
        message: {
          key: 'NotificationGiftCanResellAt',
          variables: {
            date: (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_4__.formatDateAtTime)(oldLang, savedGift.canResellAt * 1000)
          }
        }
      });
      return;
    }
    openGiftResalePriceComposerModal({
      peerId,
      gift: savedGift
    });
  });
  const handleUnsell = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (!savedGift || savedGift.gift.type !== 'starGiftUnique' || !savedGift.inputGift) return;
    closeGiftInfoModal();
    updateStarGiftPrice({
      gift: savedGift.inputGift,
      price: 0
    });
    showNotification({
      icon: 'unlist-outline',
      message: {
        key: 'NotificationGiftIsUnlist',
        variables: {
          gift: lang('GiftUnique', {
            title: savedGift.gift.title,
            number: savedGift.gift.number
          })
        }
      }
    });
  });
  const handleWear = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (gift?.type !== 'starGiftUnique' || !userCollectibleStatus) return;
    openGiftStatusInfoModal({
      emojiStatus: userCollectibleStatus
    });
  });
  const handleTakeOff = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (canTakeOff) {
      setEmojiStatus({
        emojiStatus: {
          type: 'regular',
          documentId: _config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATUS_ICON_ID
        }
      });
    }
  });
  const handleTogglePin = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    toggleSavedGiftPinned({
      peerId,
      gift: savedGift
    });
  });
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [hasPinOptions && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: savedGift.isPinned ? 'unpin' : 'pin',
      onClick: handleTogglePin,
      children: lang(savedGift.isPinned ? 'ChatListUnpinFromTop' : 'ChatListPinToTop')
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "link-badge",
      onClick: handleCopyLink,
      children: lang('CopyLink')
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "forward",
      onClick: handleLinkShare,
      children: lang('Share')
    }), canManage && isGiftUnique && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "diamond",
      onClick: handleTransfer,
      children: lang('GiftInfoTransfer')
    }), canManage && isGiftUnique && !giftResalePrice && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "sell-outline",
      onClick: handleSell,
      children: lang('Sell')
    }), canManage && isGiftUnique && Boolean(giftResalePrice) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "unlist-outline",
      onClick: handleUnsell,
      children: lang('GiftInfoUnlist')
    }), canManage && savedGift && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: savedGift.isUnsaved ? 'eye-outline' : 'eye-crossed-outline',
      onClick: handleTriggerVisibility,
      children: lang(savedGift.isUnsaved ? 'GiftActionShow' : 'GiftActionHide')
    }), canWear && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "crown-wear-outline",
      onClick: handleWear,
      children: lang('GiftInfoWear')
    }), canTakeOff && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "crown-take-off-outline",
      onClick: handleTakeOff,
      children: lang('GiftInfoTakeOff')
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(GiftMenuItems));

/***/ }),

/***/ "./src/components/common/gift/GiftRibbon.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/gift/GiftRibbon.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GiftRibbon-module__root","text":"GiftRibbon-module__text"});

/***/ }),

/***/ "./src/components/common/gift/GiftRibbon.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/gift/GiftRibbon.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useUniqueId */ "./src/hooks/useUniqueId.ts");
/* harmony import */ var _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GiftRibbon.module.scss */ "./src/components/common/gift/GiftRibbon.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");







const COLORS = {
  red: [['#FF5B54', '#ED1C26'], ['#653633', '#532224']],
  blue: [['#6ED2FF', '#34A4FC'], ['#344F5A', '#152E42']],
  purple: [['#E367D7', '#757BF6'], ['#E367D7', '#757BF6']],
  green: [['#52D553', '#4BB121'], ['#52D553', '#4BB121']]
};
const COLOR_KEYS = new Set(Object.keys(COLORS));
const GiftRibbon = ({
  text,
  color,
  className,
  theme
}) => {
  const randomId = (0,_hooks_useUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const validSvgRandomId = `svg-${randomId}`; // ID must start with a letter

  const colorKey = COLOR_KEYS.has(color) ? color : undefined;
  const isDarkTheme = theme === 'dark';
  const gradientColor = Array.isArray(color) ? color : colorKey ? COLORS[colorKey][isDarkTheme ? 1 : 0] : undefined;
  const startColor = gradientColor ? gradientColor[0] : color;
  const endColor = gradientColor ? gradientColor[1] : color;
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root, className),
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
      className: _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].ribbon,
      width: "56",
      height: "56",
      viewBox: "0 0 56 56",
      fill: "none",
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
        d: "M52.4851 26.4853L29.5145 3.51472C27.2641 1.26428 24.2119 0 21.0293 0H2.82824C1.04643 0 0.154103 2.15429 1.41403 3.41422L52.5856 54.5858C53.8455 55.8457 55.9998 54.9534 55.9998 53.1716V34.9706C55.9998 31.788 54.7355 28.7357 52.4851 26.4853Z",
        fill: `url(#${validSvgRandomId})`
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("defs", {
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("linearGradient", {
          id: validSvgRandomId,
          x1: "27.9998",
          y1: "1",
          x2: "27.9998",
          y2: "55",
          gradientUnits: "userSpaceOnUse",
          children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("stop", {
            "stop-color": startColor
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("stop", {
            offset: "1",
            "stop-color": endColor
          })]
        })
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].text,
      children: text
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  return {
    theme: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTheme)(global)
  };
})(GiftRibbon)));

/***/ }),

/***/ "./src/components/middle/message/ActionMessage.tsx":
/*!*********************************************************!*\
  !*** ./src/components/middle/message/ActionMessage.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types */ "./src/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_replies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/helpers/replies */ "./src/global/helpers/replies.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_keys_messageKey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/keys/messageKey */ "./src/util/keys/messageKey.ts");
/* harmony import */ var _util_visibility_isElementInViewport__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/visibility/isElementInViewport */ "./src/util/visibility/isElementInViewport.ts");
/* harmony import */ var _helpers_preventMessageInputBlur__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/preventMessageInputBlur */ "./src/components/middle/helpers/preventMessageInputBlur.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useEnsureMessage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../hooks/useEnsureMessage */ "./src/hooks/useEnsureMessage.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useResizeMessageObserver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../hooks/useResizeMessageObserver */ "./src/hooks/useResizeMessageObserver.ts");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");
/* harmony import */ var _hooks_useFluidBackgroundFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hooks/useFluidBackgroundFilter */ "./src/components/middle/message/hooks/useFluidBackgroundFilter.tsx");
/* harmony import */ var _hooks_useFocusMessage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hooks/useFocusMessage */ "./src/components/middle/message/hooks/useFocusMessage.ts");
/* harmony import */ var _ActionMessageText__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ActionMessageText */ "./src/components/middle/message/ActionMessageText.tsx");
/* harmony import */ var _actions_ChannelPhoto__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./actions/ChannelPhoto */ "./src/components/middle/message/actions/ChannelPhoto.tsx");
/* harmony import */ var _actions_Gift__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./actions/Gift */ "./src/components/middle/message/actions/Gift.tsx");
/* harmony import */ var _actions_GiveawayPrize__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./actions/GiveawayPrize */ "./src/components/middle/message/actions/GiveawayPrize.tsx");
/* harmony import */ var _actions_StarGift__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./actions/StarGift */ "./src/components/middle/message/actions/StarGift.tsx");
/* harmony import */ var _actions_StarGiftUnique__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./actions/StarGiftUnique */ "./src/components/middle/message/actions/StarGiftUnique.tsx");
/* harmony import */ var _actions_SuggestedPhoto__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./actions/SuggestedPhoto */ "./src/components/middle/message/actions/SuggestedPhoto.tsx");
/* harmony import */ var _ContextMenuContainer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ContextMenuContainer */ "./src/components/middle/message/ContextMenuContainer.tsx");
/* harmony import */ var _reactions_Reactions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./reactions/Reactions */ "./src/components/middle/message/reactions/Reactions.tsx");
/* harmony import */ var _SimilarChannels__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SimilarChannels */ "./src/components/middle/message/SimilarChannels.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");



































const SINGLE_LINE_ACTIONS = new Set(['pinMessage', 'chatEditPhoto', 'chatDeletePhoto', 'unsupported']);
const HIDDEN_TEXT_ACTIONS = new Set(['giftCode', 'prizeStars', 'suggestProfilePhoto']);
const ActionMessage = ({
  message,
  threadId,
  sender,
  currentUserId,
  appearanceOrder,
  isJustAdded,
  isLastInList,
  memoFirstUnreadIdRef,
  getIsMessageListReady,
  isInsideTopic,
  isFocused,
  focusDirection,
  noFocusHighlight,
  replyMessage,
  patternColor,
  isCurrentUserPremium,
  isInSelectMode,
  hasUnreadReaction,
  isResizingContainer,
  scrollTargetPosition,
  onIntersectPinnedMessage,
  observeIntersectionForBottom,
  observeIntersectionForLoading,
  observeIntersectionForPlaying,
  isAccountFrozen
}) => {
  const {
    requestConfetti,
    openMediaViewer,
    getReceipt,
    checkGiftCode,
    openPrizeStarsTransactionFromGiveaway,
    openPremiumModal,
    openStarsTransactionFromGift,
    openGiftInfoModalFromMessage,
    toggleChannelRecommendations,
    animateUnreadReaction,
    markMentionsRead
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    id,
    chatId
  } = message;
  const action = message.content.action;
  const isLocal = (0,_util_keys_messageKey__WEBPACK_IMPORTED_MODULE_10__.isLocalMessageId)(id);
  const isTextHidden = HIDDEN_TEXT_ACTIONS.has(action.type);
  const isSingleLine = SINGLE_LINE_ACTIONS.has(action.type);
  const isFluidMultiline = _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_8__.IS_FLUID_BACKGROUND_SUPPORTED && !isSingleLine;
  const messageReplyInfo = (0,_global_helpers_replies__WEBPACK_IMPORTED_MODULE_6__.getMessageReplyInfo)(message);
  const {
    replyToMsgId,
    replyToPeerId
  } = messageReplyInfo || {};
  const withServiceReactions = Boolean(message.areReactionsPossible && message?.reactions?.results?.length);
  const shouldSkipRender = isInsideTopic && action.type === 'topicCreate';
  const {
    isTouchScreen
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_17__.useOnIntersect)(ref, !shouldSkipRender ? observeIntersectionForBottom : undefined);
  (0,_hooks_useResizeMessageObserver__WEBPACK_IMPORTED_MODULE_19__["default"])(ref, !shouldSkipRender && isLastInList && action.type !== 'channelJoined');
  (0,_hooks_useEnsureMessage__WEBPACK_IMPORTED_MODULE_15__["default"])(replyToPeerId || chatId, replyToMsgId, replyMessage, id);
  (0,_hooks_useFocusMessage__WEBPACK_IMPORTED_MODULE_22__["default"])({
    elementRef: ref,
    chatId,
    isFocused,
    focusDirection,
    noFocusHighlight,
    isResizingContainer,
    isJustAdded,
    scrollTargetPosition
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useUnmountCleanup)(() => {
    if (message.isPinned) {
      onIntersectPinnedMessage?.({
        viewportPinnedIdsToRemove: [message.id]
      });
    }
  });
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_14__["default"])(ref, isTouchScreen && isInSelectMode || isAccountFrozen, !_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_8__.IS_ELECTRON, _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_8__.IS_ANDROID, getIsMessageListReady);
  const isContextMenuShown = contextMenuAnchor !== undefined;
  const handleMouseDown = e => {
    (0,_helpers_preventMessageInputBlur__WEBPACK_IMPORTED_MODULE_12__.preventMessageInputBlur)(e);
    handleBeforeContextMenu(e);
  };
  const noAppearanceAnimation = appearanceOrder <= 0;
  const [isShown, markShown] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_16__["default"])(noAppearanceAnimation);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (noAppearanceAnimation) {
      return;
    }
    setTimeout(markShown, appearanceOrder * _config__WEBPACK_IMPORTED_MODULE_4__.MESSAGE_APPEARANCE_DELAY);
  }, [appearanceOrder, markShown, noAppearanceAnimation]);
  const {
    ref: refWithTransition
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_20__["default"])({
    isOpen: isShown,
    noOpenTransition: noAppearanceAnimation,
    noCloseTransition: true,
    className: false,
    ref
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const bottomMarker = ref.current;
    if (!bottomMarker || !(0,_util_visibility_isElementInViewport__WEBPACK_IMPORTED_MODULE_11__.isElementInViewport)(bottomMarker)) return;
    if (hasUnreadReaction) {
      animateUnreadReaction({
        messageIds: [id]
      });
    }
    if (message.hasUnreadMention) {
      markMentionsRead({
        chatId,
        messageIds: [id]
      });
    }
  }, [hasUnreadReaction, chatId, id, animateUnreadReaction, message.hasUnreadMention]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (action.type !== 'giftPremium') return;
    if (memoFirstUnreadIdRef?.current && id >= memoFirstUnreadIdRef.current || isLocal) {
      requestConfetti({});
    }
  }, [action.type, id, isLocal, memoFirstUnreadIdRef]);
  const fluidBackgroundStyle = (0,_hooks_useFluidBackgroundFilter__WEBPACK_IMPORTED_MODULE_21__["default"])(isFluidMultiline ? patternColor : undefined);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    switch (action.type) {
      case 'paymentSent':
      case 'paymentRefunded':
        {
          getReceipt({
            chatId: message.chatId,
            messageId: message.id
          });
          break;
        }
      case 'chatEditPhoto':
        {
          openMediaViewer({
            chatId: message.chatId,
            messageId: message.id,
            threadId,
            origin: _types__WEBPACK_IMPORTED_MODULE_3__.MediaViewerOrigin.ChannelAvatar
          });
          break;
        }
      case 'giftCode':
        {
          checkGiftCode({
            slug: action.slug,
            message: {
              chatId: message.chatId,
              messageId: message.id
            }
          });
          break;
        }
      case 'prizeStars':
        {
          openPrizeStarsTransactionFromGiveaway({
            chatId: message.chatId,
            messageId: message.id
          });
          break;
        }
      case 'giftPremium':
        {
          openPremiumModal({
            isGift: true,
            fromUserId: sender?.id,
            toUserId: sender && sender.id === currentUserId ? chatId : currentUserId,
            monthsAmount: action.months
          });
          break;
        }
      case 'giftStars':
        {
          openStarsTransactionFromGift({
            chatId: message.chatId,
            messageId: message.id
          });
          break;
        }
      case 'starGift':
      case 'starGiftUnique':
        {
          openGiftInfoModalFromMessage({
            chatId: message.chatId,
            messageId: message.id
          });
          break;
        }
      case 'channelJoined':
        {
          toggleChannelRecommendations({
            chatId
          });
          break;
        }
    }
  });
  const fullContent = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    switch (action.type) {
      case 'chatEditPhoto':
        {
          if (!action.photo) return undefined;
          return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_actions_ChannelPhoto__WEBPACK_IMPORTED_MODULE_24__["default"], {
            action: action,
            observeIntersection: observeIntersectionForLoading,
            onClick: handleClick
          });
        }
      case 'suggestProfilePhoto':
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_actions_SuggestedPhoto__WEBPACK_IMPORTED_MODULE_29__["default"], {
          message: message,
          action: action,
          observeIntersection: observeIntersectionForLoading
        });
      case 'prizeStars':
      case 'giftCode':
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_actions_GiveawayPrize__WEBPACK_IMPORTED_MODULE_26__["default"], {
          action: action,
          observeIntersectionForLoading: observeIntersectionForLoading,
          observeIntersectionForPlaying: observeIntersectionForPlaying,
          onClick: handleClick
        });
      case 'giftPremium':
      case 'giftStars':
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_actions_Gift__WEBPACK_IMPORTED_MODULE_25__["default"], {
          action: action,
          observeIntersectionForLoading: observeIntersectionForLoading,
          observeIntersectionForPlaying: observeIntersectionForPlaying,
          onClick: handleClick
        });
      case 'starGift':
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_actions_StarGift__WEBPACK_IMPORTED_MODULE_27__["default"], {
          action: action,
          message: message,
          observeIntersectionForLoading: observeIntersectionForLoading,
          observeIntersectionForPlaying: observeIntersectionForPlaying,
          onClick: handleClick
        });
      case 'starGiftUnique':
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_actions_StarGiftUnique__WEBPACK_IMPORTED_MODULE_28__["default"], {
          action: action,
          message: message,
          observeIntersectionForLoading: observeIntersectionForLoading,
          observeIntersectionForPlaying: observeIntersectionForPlaying,
          onClick: handleClick
        });
      case 'channelJoined':
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_SimilarChannels__WEBPACK_IMPORTED_MODULE_32__["default"], {
          chatId: message.chatId
        });
      default:
        return undefined;
    }
  }, [action, observeIntersectionForLoading, message, observeIntersectionForPlaying]);
  if (isInsideTopic && action.type === 'topicCreate' || action.type === 'phoneCall') {
    return undefined;
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
    ref: refWithTransition,
    id: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_5__.getMessageHtmlId)(id),
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_9__["default"])('ActionMessage', 'message-list-item', _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].root, isSingleLine && _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].singleLine, isFluidMultiline && _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].fluidMultiline, fullContent && _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].hasFullContent, isFocused && !noFocusHighlight && 'focused', isContextMenuShown && 'has-menu-open', isLastInList && 'last-in-list'),
    "data-message-id": message.id,
    "data-is-pinned": message.isPinned || undefined,
    "data-has-unread-mention": message.hasUnreadMention || undefined,
    "data-has-unread-reaction": hasUnreadReaction || undefined,
    onMouseDown: handleMouseDown,
    onContextMenu: handleContextMenu,
    children: [!isTextHidden && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
      children: [isFluidMultiline && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].inlineWrapper,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("span", {
          className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].fluidBackground,
          style: fluidBackgroundStyle,
          children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ActionMessageText__WEBPACK_IMPORTED_MODULE_23__["default"], {
            message: message,
            isInsideTopic: isInsideTopic
          })
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].inlineWrapper,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("span", {
          className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].textContent,
          onClick: handleClick,
          children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ActionMessageText__WEBPACK_IMPORTED_MODULE_23__["default"], {
            message: message,
            isInsideTopic: isInsideTopic
          })
        })
      })]
    }), fullContent, contextMenuAnchor && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ContextMenuContainer__WEBPACK_IMPORTED_MODULE_30__["default"], {
      isOpen: isContextMenuOpen,
      anchor: contextMenuAnchor,
      message: message,
      messageListType: "thread",
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].contextContainer,
      onClose: handleContextMenuClose,
      onCloseAnimationEnd: handleContextMenuHide
    }), withServiceReactions && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_reactions_Reactions__WEBPACK_IMPORTED_MODULE_31__["default"], {
      isOutside: true,
      message: message,
      threadId: threadId,
      observeIntersection: observeIntersectionForPlaying,
      isCurrentUserPremium: isCurrentUserPremium,
      isAccountFrozen: isAccountFrozen
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  threadId
}) => {
  const tabState = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectTabState)(global);
  const {
    themes
  } = global.settings;
  const chat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectChat)(global, message.chatId);
  const sender = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectSender)(global, message);
  const isInsideTopic = chat?.isForum && threadId !== _api_types__WEBPACK_IMPORTED_MODULE_2__.MAIN_THREAD_ID;
  const {
    replyToMsgId,
    replyToPeerId
  } = (0,_global_helpers_replies__WEBPACK_IMPORTED_MODULE_6__.getMessageReplyInfo)(message) || {};
  const replyMessage = replyToMsgId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectChatMessage)(global, replyToPeerId || message.chatId, replyToMsgId) : undefined;
  const isFocused = threadId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsMessageFocused)(global, message, threadId) : false;
  const {
    direction: focusDirection,
    noHighlight: noFocusHighlight,
    isResizingContainer,
    scrollTargetPosition
  } = isFocused && tabState.focusedMessage || {};
  const isCurrentUserPremium = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsCurrentUserPremium)(global);
  const hasUnreadReaction = chat?.unreadReactions?.includes(message.id);
  const isAccountFrozen = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsCurrentUserFrozen)(global);
  return {
    sender,
    currentUserId: global.currentUserId,
    isCurrentUserPremium,
    isFocused,
    focusDirection,
    noFocusHighlight,
    isInsideTopic,
    replyMessage,
    isInSelectMode: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsInSelectMode)(global),
    patternColor: themes[(0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectTheme)(global)]?.patternColor,
    hasUnreadReaction,
    isResizingContainer,
    scrollTargetPosition,
    isAccountFrozen
  };
})(ActionMessage)));

/***/ }),

/***/ "./src/components/middle/message/SimilarChannels.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/middle/message/SimilarChannels.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"SimilarChannels-module__root","notch":"SimilarChannels-module__notch","notch-path":"SimilarChannels-module__notch-path","notchPath":"SimilarChannels-module__notch-path","header":"SimilarChannels-module__header","title":"SimilarChannels-module__title","close":"SimilarChannels-module__close","icon":"SimilarChannels-module__icon","skeleton":"SimilarChannels-module__skeleton","inner":"SimilarChannels-module__inner","is-appearing":"SimilarChannels-module__is-appearing","isAppearing":"SimilarChannels-module__is-appearing","channels-appear":"SimilarChannels-module__channels-appear","channelsAppear":"SimilarChannels-module__channels-appear","is-hiding":"SimilarChannels-module__is-hiding","isHiding":"SimilarChannels-module__is-hiding","channels-disappear":"SimilarChannels-module__channels-disappear","channelsDisappear":"SimilarChannels-module__channels-disappear","channel-list":"SimilarChannels-module__channel-list","channelList":"SimilarChannels-module__channel-list","item":"SimilarChannels-module__item","last-item":"SimilarChannels-module__last-item","lastItem":"SimilarChannels-module__last-item","avatar":"SimilarChannels-module__avatar","badge":"SimilarChannels-module__badge","members-count":"SimilarChannels-module__members-count","membersCount":"SimilarChannels-module__members-count","channel-title":"SimilarChannels-module__channel-title","channelTitle":"SimilarChannels-module__channel-title","fake-avatar":"SimilarChannels-module__fake-avatar","fakeAvatar":"SimilarChannels-module__fake-avatar","fake-avatar-inner":"SimilarChannels-module__fake-avatar-inner","fakeAvatarInner":"SimilarChannels-module__fake-avatar-inner","last-fake-avatar":"SimilarChannels-module__last-fake-avatar","lastFakeAvatar":"SimilarChannels-module__last-fake-avatar"});

/***/ }),

/***/ "./src/components/middle/message/SimilarChannels.tsx":
/*!***********************************************************!*\
  !*** ./src/components/middle/message/SimilarChannels.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/schedulers/useTimeout */ "./src/hooks/schedulers/useTimeout.ts");
/* harmony import */ var _hooks_useAverageColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useAverageColor */ "./src/hooks/useAverageColor.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useHorizontalScroll */ "./src/hooks/useHorizontalScroll.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/placeholder/Skeleton */ "./src/components/ui/placeholder/Skeleton.tsx");
/* harmony import */ var _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SimilarChannels.module.scss */ "./src/components/middle/message/SimilarChannels.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");



















const DEFAULT_BADGE_COLOR = '#3C3C4399';
const SHOW_CHANNELS_NUMBER = 10;
const ANIMATION_DURATION = 150;
const MIN_SKELETON_DELAY = 300;
const MAX_SKELETON_DELAY = 2000;
const AUTO_EXPAND_TIME = 10; // Seconds from joining

const SimilarChannels = ({
  chatId,
  similarChannelIds,
  isExpanded,
  count,
  isCurrentUserPremium,
  channelJoinInfo
}) => {
  const {
    toggleChannelRecommendations,
    loadChannelRecommendations
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const [isShowing, markShowing, markNotShowing] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__["default"])(false);
  const [isHiding, markHiding, markNotHiding] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__["default"])(false);
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const ignoreAutoScrollRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const similarChannels = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!similarChannelIds) {
      return undefined;
    }
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    return similarChannelIds.map(id => (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectChat)(global, id)).filter(Boolean);
  }, [similarChannelIds]);
  // Show skeleton while loading similar channels
  const [shouldRenderSkeleton, setShouldRenderSkeleton] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const firstSimilarChannels = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => similarChannels?.slice(0, SHOW_CHANNELS_NUMBER), [similarChannels]);
  const areSimilarChannelsPresent = Boolean(firstSimilarChannels?.length);
  const isAnimating = isHiding || isShowing;
  const shouldRenderChannels = Boolean(!shouldRenderSkeleton && (isExpanded || isAnimating) && areSimilarChannelsPresent);
  (0,_hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_9__["default"])(ref, !shouldRenderChannels, true);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!similarChannelIds) {
      loadChannelRecommendations({
        chatId
      });
    }
  }, [chatId, similarChannelIds]);
  (0,_hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_6__["default"])(() => setShouldRenderSkeleton(false), MAX_SKELETON_DELAY);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldRenderSkeleton && similarChannels && isExpanded) {
      const id = setTimeout(() => {
        setShouldRenderSkeleton(false);
      }, MIN_SKELETON_DELAY);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [similarChannels, isExpanded, shouldRenderSkeleton]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isExpanded) {
      markShowing();
      markNotHiding();
      setShouldRenderSkeleton(!similarChannelIds);
      if (!ignoreAutoScrollRef.current) {
        setTimeout(() => {
          ref.current?.scrollIntoView({
            behavior: 'smooth'
          });
        }, ANIMATION_DURATION);
      }
    } else {
      markNotShowing();
      markHiding();
    }
  }, [isExpanded, similarChannelIds]);
  const handleToggle = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    toggleChannelRecommendations({
      chatId
    });
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!channelJoinInfo?.joinedDate || isExpanded) return;
    if ((0,_util_serverTime__WEBPACK_IMPORTED_MODULE_4__.getServerTime)() - channelJoinInfo.joinedDate <= AUTO_EXPAND_TIME) {
      handleToggle();
      ignoreAutoScrollRef.current = true;
    }
  }, [channelJoinInfo, isExpanded]);
  if (!shouldRenderChannels && !shouldRenderSkeleton) {
    return undefined;
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].root),
    children: [shouldRenderSkeleton && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].skeleton
    }), shouldRenderChannels && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(isShowing && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].isAppearing, isHiding && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].isHiding),
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].notch,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("svg", {
          width: "19",
          height: "7",
          viewBox: "0 0 19 7",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("path", {
            className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].notchPath,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M19 7C16.8992 7 13.59 3.88897 11.5003 1.67424C10.7648 0.894688 10.397 0.50491 10.0434 0.385149C9.70568 0.270811 9.4225 0.270474 9.08456 0.38401C8.73059 0.50293 8.36133 0.892443 7.62279 1.67147C5.52303 3.88637 2.18302 7 0 7L19 7Z",
            fill: "white"
          })
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].inner,
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].header,
          children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("span", {
            className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].title,
            children: lang('SimilarChannels')
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].close,
            color: "translucent",
            onClick: handleToggle,
            children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
              name: "close"
            })
          })]
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
          ref: ref,
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].channelList, 'no-scrollbar'),
          children: firstSimilarChannels?.map((channel, i) => {
            return i === SHOW_CHANNELS_NUMBER - 1 ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(MoreChannels, {
              channel: channel,
              chatId: chatId,
              channelsCount: count - SHOW_CHANNELS_NUMBER + 1,
              isCurrentUserPremium: isCurrentUserPremium
            }) : (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(SimilarChannel, {
              channel: channel
            });
          })
        })]
      })]
    })]
  });
};
function SimilarChannel({
  channel
}) {
  const {
    openChat
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const color = (0,_hooks_useAverageColor__WEBPACK_IMPORTED_MODULE_7__["default"])(channel, DEFAULT_BADGE_COLOR);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].item,
    onClick: () => openChat({
      id: channel.id
    }),
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].avatar,
      size: "large",
      peer: channel
    }, channel.id), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      style: `background: ${color}`,
      className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].badge,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
        name: "user-filled",
        className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].icon
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("span", {
        className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].membersCount,
        children: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_5__.formatIntegerCompact)(lang, channel?.membersCount || 0)
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("span", {
      className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].channelTitle,
      children: channel.title
    })]
  });
}
function MoreChannels({
  channel,
  chatId,
  channelsCount,
  isCurrentUserPremium
}) {
  const {
    openPremiumModal,
    openChatWithInfo
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const handleClickMore = () => {
    if (isCurrentUserPremium) {
      openChatWithInfo({
        id: chatId,
        shouldReplaceHistory: true,
        profileTab: 'similarChannels',
        forceScrollProfileTab: true
      });
    } else {
      openPremiumModal();
    }
  };
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].item, _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].lastItem),
    onClick: () => handleClickMore(),
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].avatar,
      size: "large",
      peer: channel
    }, channel.id), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
      className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].fakeAvatar,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].fakeAvatarInner
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].fakeAvatar, _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].lastFakeAvatar),
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].fakeAvatarInner
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].badge,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("span", {
        className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].membersCount,
        children: `+${channelsCount}`
      }), !isCurrentUserPremium && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
        name: "lock-badge",
        className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].icon
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("span", {
      className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].channelTitle,
      children: lang('MoreSimilar')
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  chatId
}) => {
  const {
    similarChannelIds,
    isExpanded,
    count
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSimilarChannelIds)(global, chatId) || {};
  const isCurrentUserPremium = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsCurrentUserPremium)(global);
  const chatFullInfo = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectChatFullInfo)(global, chatId);
  return {
    similarChannelIds,
    isExpanded,
    count,
    isCurrentUserPremium,
    channelJoinInfo: chatFullInfo?.joinInfo
  };
})(SimilarChannels)));

/***/ }),

/***/ "./src/components/middle/message/actions/ChannelPhoto.tsx":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/actions/ChannelPhoto.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");





const AVATAR_SIZE = 15 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_1__.REM;
const ChannelPhotoAction = ({
  action,
  onClick,
  observeIntersection
}) => {
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].channelPhoto,
    photo: action.photo,
    loopIndefinitely: true,
    withVideo: true,
    observeIntersection: observeIntersection,
    onClick: onClick,
    size: AVATAR_SIZE
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ChannelPhotoAction));

/***/ }),

/***/ "./src/components/middle/message/actions/Gift.tsx":
/*!********************************************************!*\
  !*** ./src/components/middle/message/actions/Gift.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _common_StickerView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/StickerView */ "./src/components/common/StickerView.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");









const STICKER_SIZE = 150;
const GiftAction = ({
  action,
  sticker,
  canPlayAnimatedEmojis,
  onClick,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  const stickerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const message = action.type === 'giftPremium' ? action.message : undefined;
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].contentBox,
    tabIndex: 0,
    role: "button",
    onClick: onClick,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ref: stickerRef,
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].stickerWrapper,
      style: `width: ${STICKER_SIZE}px; height: ${STICKER_SIZE}px`,
      children: sticker && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_StickerView__WEBPACK_IMPORTED_MODULE_6__["default"], {
        containerRef: stickerRef,
        sticker: sticker,
        size: STICKER_SIZE,
        observeIntersectionForLoading: observeIntersectionForLoading,
        observeIntersectionForPlaying: observeIntersectionForPlaying,
        noLoad: !canPlayAnimatedEmojis
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].info,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title,
        children: action.type === 'giftPremium' ? lang('ActionGiftPremiumTitle', {
          months: action.months
        }, {
          pluralValue: action.months
        }) : lang('ActionGiftStarsTitle', {
          amount: action.stars
        }, {
          pluralValue: action.stars
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [message && (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_3__.renderTextWithEntities)(message), !message && lang(action.type === 'giftPremium' ? 'ActionGiftPremiumText' : 'ActionGiftStarsText')]
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].actionButton,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_Sparkles__WEBPACK_IMPORTED_MODULE_5__["default"], {
        preset: "button"
      }), lang('ActionViewButton')]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  action
}) => {
  const sticker = action.type === 'giftPremium' ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectGiftStickerForDuration)(global, action.months) : (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectGiftStickerForStars)(global, action.stars);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanPlayAnimatedEmojis)(global);
  return {
    sticker,
    canPlayAnimatedEmojis
  };
})(GiftAction)));

/***/ }),

/***/ "./src/components/middle/message/actions/GiveawayPrize.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/middle/message/actions/GiveawayPrize.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _helpers_messageActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/messageActions */ "./src/components/middle/message/helpers/messageActions.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _common_StickerView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/StickerView */ "./src/components/common/StickerView.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");










const STICKER_SIZE = 150;
const GiveawayPrizeAction = ({
  action,
  sticker,
  canPlayAnimatedEmojis,
  channel,
  onClick,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  const stickerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const channelLink = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const channelTitle = channel && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, channel);
    const channelFallbackText = lang('ActionFallbackChannel');
    return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_4__.renderPeerLink)(channel?.id, channelTitle || channelFallbackText);
  }, [channel, lang]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].contentBox,
    tabIndex: 0,
    role: "button",
    onClick: onClick,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      ref: stickerRef,
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].stickerWrapper,
      style: `width: ${STICKER_SIZE}px; height: ${STICKER_SIZE}px`,
      children: sticker && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_StickerView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        containerRef: stickerRef,
        sticker: sticker,
        size: STICKER_SIZE,
        observeIntersectionForLoading: observeIntersectionForLoading,
        observeIntersectionForPlaying: observeIntersectionForPlaying,
        noLoad: !canPlayAnimatedEmojis
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].title,
        children: lang('ActionGiveawayResultTitle')
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        children: [action.type === 'giftCode' && lang(action.isViaGiveaway ? 'ActionGiveawayResultPremiumText' : 'ActionGiftCodePremiumText', {
          months: action.months,
          channel: channelLink
        }, {
          withNodes: true,
          withMarkdown: true,
          pluralValue: action.months,
          renderTextFilters: ['br']
        }), action.type === 'prizeStars' && lang('ActionGiveawayResultStarsText', {
          amount: action.stars,
          channel: channelLink
        }, {
          withNodes: true,
          withMarkdown: true,
          pluralValue: action.stars,
          renderTextFilters: ['br']
        })]
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].actionButton,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_Sparkles__WEBPACK_IMPORTED_MODULE_6__["default"], {
        preset: "button"
      }), lang(action.type === 'giftCode' ? 'ActionOpenGiftButton' : 'ActionViewButton')]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  action
}) => {
  const sticker = action.type === 'giftCode' ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectGiftStickerForDuration)(global, action.months) : (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectGiftStickerForStars)(global, action.stars);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCanPlayAnimatedEmojis)(global);
  const channel = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectChat)(global, action.boostPeerId);
  return {
    sticker,
    canPlayAnimatedEmojis,
    channel
  };
})(GiveawayPrizeAction)));

/***/ }),

/***/ "./src/components/middle/message/actions/StarGift.tsx":
/*!************************************************************!*\
  !*** ./src/components/middle/message/actions/StarGift.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/helpers/renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");
/* harmony import */ var _helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/messageActions */ "./src/components/middle/message/helpers/messageActions.tsx");
/* harmony import */ var _hooks_stickers_useDynamicColorListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/stickers/useDynamicColorListener */ "./src/hooks/stickers/useDynamicColorListener.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _common_StickerView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/StickerView */ "./src/components/common/StickerView.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");



















const STICKER_SIZE = 120;
const StarGiftAction = ({
  action,
  message,
  canPlayAnimatedEmojis,
  sender,
  recipient,
  starGiftMaxConvertPeriod,
  onClick,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const stickerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const {
    isOutgoing
  } = message;
  const sticker = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_9__.getStickerFromGift)(action.gift);
  const peer = isOutgoing ? recipient : sender;
  const isChannel = peer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__.isApiPeerChat)(peer) && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isChatChannel)(peer);
  const backgroundColor = (0,_hooks_stickers_useDynamicColorListener__WEBPACK_IMPORTED_MODULE_12__["default"])(ref, 'background-color', !action.gift.availabilityTotal);
  const fallbackPeerTitle = lang('ActionFallbackSomeone');
  const peerTitle = peer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, peer);
  const isSelf = sender?.id === recipient?.id;
  const giftDescription = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const peerLink = (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.renderPeerLink)(peer?.id, peerTitle || fallbackPeerTitle);
    const starsAmount = action.starsToConvert !== undefined ? (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_6__.formatStarsAsText)(lang, action.starsToConvert) : undefined;
    if (action.isUpgraded) {
      return lang('ActionStarGiftUpgraded');
    }
    if (action.alreadyPaidUpgradeStars) {
      return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.translateWithYou)(lang, 'ActionStarGiftUpgradeText', !isOutgoing || isSelf, {
        peer: peerLink
      });
    }
    if (action.isConverted) {
      return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.translateWithYou)(lang, 'ActionStarGiftConvertedText', !isOutgoing || isSelf, {
        peer: peerLink,
        amount: starsAmount
      });
    }
    if (starGiftMaxConvertPeriod && (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_7__.getServerTime)() < message.date + starGiftMaxConvertPeriod) {
      return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.translateWithYou)(lang, 'ActionStarGiftConvertText', !isOutgoing || isSelf, {
        peer: peerLink,
        amount: starsAmount
      });
    }
    if (isChannel) {
      return lang('ActionStarGiftChannelText', {
        amount: starsAmount
      }, {
        withNodes: true
      });
    }
    return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.translateWithYou)(lang, 'ActionStarGiftNoConvertText', !isOutgoing || isSelf, {
      peer: peerLink
    });
  }, [action, fallbackPeerTitle, isChannel, isOutgoing, lang, message.date, peer?.id, peerTitle, starGiftMaxConvertPeriod, isSelf]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].contentBox, _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].starGift),
    tabIndex: 0,
    role: "button",
    onClick: onClick,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
      ref: stickerRef,
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].stickerWrapper,
      style: `width: ${STICKER_SIZE}px; height: ${STICKER_SIZE}px`,
      children: sticker && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_common_StickerView__WEBPACK_IMPORTED_MODULE_16__["default"], {
        containerRef: stickerRef,
        sticker: sticker,
        size: STICKER_SIZE,
        observeIntersectionForLoading: observeIntersectionForLoading,
        observeIntersectionForPlaying: observeIntersectionForPlaying,
        noLoad: !canPlayAnimatedEmojis
      })
    }), Boolean(action.gift.availabilityTotal) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_14__["default"], {
      color: backgroundColor || 'blue',
      text: lang('ActionStarGiftLimitedRibbon', {
        total: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_8__.formatIntegerCompact)(lang, action.gift.availabilityTotal)
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].info,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("h3", {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].title,
        children: isSelf ? lang('ActionStarGiftSelf') : lang(isOutgoing ? 'ActionStarGiftTo' : 'ActionStarGiftFrom', {
          peer: (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.renderPeerLink)(peer?.id, peerTitle || fallbackPeerTitle)
        }, {
          withNodes: true
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].subtitle,
        children: [action.message && (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__.renderTextWithEntities)(action.message), !action.message && giftDescription]
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].actionButton,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_common_Sparkles__WEBPACK_IMPORTED_MODULE_15__["default"], {
        preset: "button"
      }), action.alreadyPaidUpgradeStars && !action.isUpgraded && !isOutgoing ? lang('ActionStarGiftUnpack') : lang('ActionViewButton')]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  action
}) => {
  const currentUser = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, global.currentUserId);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCanPlayAnimatedEmojis)(global);
  const messageSender = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectSender)(global, message);
  const giftSender = action.fromId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, action.fromId) : undefined;
  const messageRecipient = message.isOutgoing ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, message.chatId) : currentUser;
  const giftRecipient = action.peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, action.peerId) : undefined;
  return {
    canPlayAnimatedEmojis,
    sender: giftSender || messageSender,
    recipient: giftRecipient || messageRecipient,
    starGiftMaxConvertPeriod: global.appConfig?.starGiftMaxConvertPeriod
  };
})(StarGiftAction)));

/***/ }),

/***/ "./src/components/middle/message/actions/StarGiftUnique.tsx":
/*!******************************************************************!*\
  !*** ./src/components/middle/message/actions/StarGiftUnique.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _helpers_messageActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/messageActions */ "./src/components/middle/message/helpers/messageActions.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _common_MiniTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/MiniTable */ "./src/components/common/MiniTable.tsx");
/* harmony import */ var _common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/profile/RadialPatternBackground */ "./src/components/common/profile/RadialPatternBackground.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _common_StickerView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/StickerView */ "./src/components/common/StickerView.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");
















const STICKER_SIZE = 120;
const StarGiftAction = ({
  action,
  message,
  canPlayAnimatedEmojis,
  sender,
  recipient,
  onClick,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  const stickerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    isOutgoing
  } = message;
  const sticker = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_6__.getStickerFromGift)(action.gift);
  const attributes = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_6__.getGiftAttributes)(action.gift);
  const model = attributes.model;
  const pattern = attributes.pattern;
  const backdrop = attributes.backdrop;
  const backgroundColors = [backdrop.centerColor, backdrop.edgeColor];
  const adaptedPatternColor = `${backdrop.patternColor.slice(0, 7)}55`;
  const tableData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [[lang('ActionStarGiftUniqueModel'), model.name], [lang('ActionStarGiftUniqueBackdrop'), backdrop.name], [lang('ActionStarGiftUniqueSymbol'), pattern.name]], [lang, model, pattern, backdrop]);
  const shouldShowFrom = !isOutgoing || action.isUpgrade;
  const peer = shouldShowFrom && !action.isUpgrade ? sender : recipient;
  const fallbackPeerTitle = lang('ActionFallbackSomeone');
  const peerTitle = peer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, peer);
  const isSelf = sender?.id === recipient?.id;
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].contentBox, _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].starGift, _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].uniqueGift),
    tabIndex: 0,
    role: "button",
    onClick: onClick,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].uniqueBackgroundWrapper,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].uniqueBackground,
        backgroundColors: backgroundColors,
        patternColor: backdrop.patternColor,
        patternIcon: pattern.sticker,
        clearBottomSector: true
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      ref: stickerRef,
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].stickerWrapper,
      style: `width: ${STICKER_SIZE}px; height: ${STICKER_SIZE}px`,
      children: sticker && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_StickerView__WEBPACK_IMPORTED_MODULE_13__["default"], {
        containerRef: stickerRef,
        sticker: sticker,
        size: STICKER_SIZE,
        observeIntersectionForLoading: observeIntersectionForLoading,
        observeIntersectionForPlaying: observeIntersectionForPlaying,
        noLoad: !canPlayAnimatedEmojis
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: adaptedPatternColor,
      text: lang('ActionStarGiftUniqueRibbon')
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].info,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h3", {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].title,
        children: isSelf ? lang('ActionStarGiftSelf') : lang(shouldShowFrom ? 'ActionStarGiftFrom' : 'ActionStarGiftTo', {
          peer: (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_7__.renderPeerLink)(peer?.id, peerTitle || fallbackPeerTitle)
        }, {
          withNodes: true
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].subtitle,
        style: `color: ${backdrop.textColor}`,
        children: lang('GiftUnique', {
          title: action.gift.title,
          number: action.gift.number
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_MiniTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: tableData,
        style: `color: ${backdrop.textColor}`,
        valueClassName: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].uniqueValue
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].actionButton,
      style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(adaptedPatternColor && `background-color: ${adaptedPatternColor}`),
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_common_Sparkles__WEBPACK_IMPORTED_MODULE_12__["default"], {
        preset: "button"
      }), lang('ActionViewButton')]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  action
}) => {
  const currentUser = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, global.currentUserId);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCanPlayAnimatedEmojis)(global);
  const messageSender = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSender)(global, message);
  const giftSender = action.fromId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, action.fromId) : undefined;
  const messageRecipient = message.isOutgoing ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, message.chatId) : currentUser;
  const giftRecipient = action.peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, action.peerId) : undefined;
  return {
    canPlayAnimatedEmojis,
    sender: giftSender || messageSender,
    recipient: giftRecipient || messageRecipient
  };
})(StarGiftAction)));

/***/ }),

/***/ "./src/components/middle/message/actions/SuggestedPhoto.tsx":
/*!******************************************************************!*\
  !*** ./src/components/middle/message/actions/SuggestedPhoto.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../types */ "./src/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/files */ "./src/util/files.ts");
/* harmony import */ var _helpers_messageActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/messageActions */ "./src/components/middle/message/helpers/messageActions.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _ui_CropModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/CropModal */ "./src/components/ui/CropModal.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");


















const SuggestedPhotoAction = ({
  message,
  action,
  peer,
  observeIntersection
}) => {
  const {
    openMediaViewer,
    uploadProfilePhoto,
    showNotification
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    isOutgoing
  } = message;
  const photo = action.photo;
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const [cropModalBlob, setCropModalBlob] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isVideoModalOpen, openVideoModal, closeVideoModal] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_9__["default"])(false);
  const suggestedPhotoUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getPhotoMediaHash)(photo, 'full'));
  const suggestedVideoUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getVideoProfilePhotoMediaHash)(photo));
  const isVideo = photo.isVideo;
  const text = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const peerName = peer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.getPeerTitle)(lang, peer) || lang('ActionFallbackUser');
    const peerLink = (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_8__.renderPeerLink)(peer?.id, peerName);
    if (isOutgoing) {
      return lang('ActionSuggestedPhotoYou', {
        user: peerLink
      }, {
        withNodes: true
      });
    }
    return lang('ActionSuggestedPhoto', {
      user: peerLink
    }, {
      withNodes: true
    });
  }, [lang, isOutgoing, peer]);
  const showAvatarNotification = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    showNotification({
      title: lang('ActionSuggestedPhotoUpdatedTitle'),
      message: lang('ActionSuggestedPhotoUpdatedDescription'),
      action: {
        action: 'openSettingsScreen',
        payload: {
          screen: _types__WEBPACK_IMPORTED_MODULE_3__.SettingsScreens.Main
        }
      },
      actionText: lang('Open')
    });
  });
  const handleSetSuggestedAvatar = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(file => {
    setCropModalBlob(undefined);
    uploadProfilePhoto({
      file
    });
    showAvatarNotification();
  });
  const handleCloseCropModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    setCropModalBlob(undefined);
  });
  const handleSetVideo = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(async () => {
    if (!suggestedVideoUrl) return;
    closeVideoModal();
    showAvatarNotification();

    // TODO Once we support uploading video avatars, add crop/trim modal here
    const blob = await (0,_util_files__WEBPACK_IMPORTED_MODULE_7__.fetchBlob)(suggestedVideoUrl);
    uploadProfilePhoto({
      file: new File([blob], 'avatar.mp4'),
      isVideo: true,
      videoTs: photo.videoSizes?.find(l => l.videoStartTs !== undefined)?.videoStartTs
    });
  });
  const handleViewSuggestedAvatar = async () => {
    if (!isOutgoing && suggestedPhotoUrl) {
      if (isVideo) {
        openVideoModal();
      } else {
        setCropModalBlob(await (0,_util_files__WEBPACK_IMPORTED_MODULE_7__.fetchBlob)(suggestedPhotoUrl));
      }
    } else {
      openMediaViewer({
        chatId: message.chatId,
        messageId: message.id,
        threadId: _api_types__WEBPACK_IMPORTED_MODULE_2__.MAIN_THREAD_ID,
        origin: _types__WEBPACK_IMPORTED_MODULE_3__.MediaViewerOrigin.SuggestedAvatar
      });
    }
  };
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].contentBox,
    tabIndex: 0,
    role: "button",
    onClick: handleViewSuggestedAvatar,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].suggestedAvatar,
      photo: action.photo,
      loopIndefinitely: true,
      withVideo: true,
      observeIntersection: observeIntersection,
      size: "jumbo"
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].suggestedText,
      children: text
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
      className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].actionButton,
      children: lang('ActionSuggestedPhotoButton')
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_CropModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      file: cropModalBlob,
      onClose: handleCloseCropModal,
      onChange: handleSetSuggestedAvatar
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
      isOpen: isVideoModalOpen,
      title: lang('ActionSuggestedVideoTitle'),
      confirmHandler: handleSetVideo,
      onClose: closeVideoModal,
      text: lang('ActionSuggestedVideoText')
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message
}) => {
  const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectPeer)(global, message.chatId);
  return {
    peer
  };
})(SuggestedPhotoAction)));

/***/ }),

/***/ "./src/components/middle/message/hooks/useFluidBackgroundFilter.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/middle/message/hooks/useFluidBackgroundFilter.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFluidBackgroundFilter)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _util_svgController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/svgController */ "./src/util/svgController.ts");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");




const SVG_MAP = new Map();
class SvgFluidBackgroundFilter {
  referenceCount = 0;
  constructor(color) {
    this.color = color;
    this.filterId = `fluid-background-filter-${color.slice(1)}`;
    (0,_util_svgController__WEBPACK_IMPORTED_MODULE_2__.addSvgDefinition)((0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("filter", {
      "color-interpolation-filters": "sRGB",
      xmlns: _config__WEBPACK_IMPORTED_MODULE_1__.SVG_NAMESPACE,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("feGaussianBlur", {
        in: "SourceAlpha",
        stdDeviation: "4",
        result: "blur"
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("feColorMatrix", {
        in: "blur",
        mode: "matrix",
        values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15",
        result: "goo"
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("feComposite", {
        in: "SourceAlpha",
        in2: "goo",
        operator: "over",
        result: "outline"
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("feFlood", {
        "flood-color": color,
        result: "color"
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("feComposite", {
        in: "color",
        in2: "outline",
        operator: "in"
      })]
    }), this.filterId);
  }
  getFilterId() {
    this.referenceCount += 1;
    return this.filterId;
  }
  removeReference() {
    this.referenceCount -= 1;
    if (this.referenceCount === 0) {
      (0,_util_svgController__WEBPACK_IMPORTED_MODULE_2__.removeSvgDefinition)(this.filterId);
    }
  }
  isUsed() {
    return this.referenceCount > 0;
  }
}
function useFluidBackgroundFilter(color, asValue) {
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!color) return undefined;
    return () => {
      const colorFilter = SVG_MAP.get(color);
      if (colorFilter) {
        colorFilter.removeReference();
        if (!colorFilter.isUsed()) {
          SVG_MAP.delete(colorFilter.color);
        }
      }
    };
  }, [color]);
  if (!color) return undefined;
  if (SVG_MAP.has(color)) {
    const svg = SVG_MAP.get(color);
    return prepareStyle(svg.getFilterId(), asValue);
  }
  const svg = new SvgFluidBackgroundFilter(color);
  SVG_MAP.set(color, svg);
  return prepareStyle(svg.getFilterId(), asValue);
}
function prepareStyle(filterId, asValue) {
  if (asValue) {
    return `url(#${filterId})`;
  }
  return `filter: url(#${filterId});`;
}

/***/ }),

/***/ "./src/hooks/useAverageColor.ts":
/*!**************************************!*\
  !*** ./src/hooks/useAverageColor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/colors */ "./src/util/colors.ts");
/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMedia */ "./src/hooks/useMedia.ts");





function useAverageColor(peer, fallbackColor = '#00000000') {
  const [color, setColor] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(fallbackColor);
  const imgBlobUrl = (0,_useMedia__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatAvatarHash)(peer), false, _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMediaFormat.BlobUrl);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (!imgBlobUrl) {
        return;
      }
      const averageColor = await (0,_util_colors__WEBPACK_IMPORTED_MODULE_3__.getAverageColor)(imgBlobUrl);
      setColor(`#${(0,_util_colors__WEBPACK_IMPORTED_MODULE_3__.rgb2hex)(averageColor)}`);
    })();
  }, [imgBlobUrl]);
  return color;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAverageColor);

/***/ })

}]);
//# sourceMappingURL=src_components_common_gift_GiftMenuItems_tsx-src_components_middle_message_ActionMessage_tsx.6918a45bf94df836306b.js.map