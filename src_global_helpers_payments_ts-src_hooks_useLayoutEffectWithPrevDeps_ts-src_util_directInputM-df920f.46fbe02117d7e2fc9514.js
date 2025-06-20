"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_global_helpers_payments_ts-src_hooks_useLayoutEffectWithPrevDeps_ts-src_util_directInputM-df920f"],{

/***/ "./src/global/helpers/payments.ts":
/*!****************************************!*\
  !*** ./src/global/helpers/payments.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areInputSavedGiftsEqual: () => (/* binding */ areInputSavedGiftsEqual),
/* harmony export */   buildStarsTransactionCustomPeer: () => (/* binding */ buildStarsTransactionCustomPeer),
/* harmony export */   formatStarsAmount: () => (/* binding */ formatStarsAmount),
/* harmony export */   formatStarsTransactionAmount: () => (/* binding */ formatStarsTransactionAmount),
/* harmony export */   getPrizeStarsTransactionFromGiveaway: () => (/* binding */ getPrizeStarsTransactionFromGiveaway),
/* harmony export */   getRequestInputInvoice: () => (/* binding */ getRequestInputInvoice),
/* harmony export */   getRequestInputSavedStarGift: () => (/* binding */ getRequestInputSavedStarGift),
/* harmony export */   getStarsTransactionFromGift: () => (/* binding */ getStarsTransactionFromGift)
/* harmony export */ });
/* harmony import */ var _util_arePropsShallowEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/arePropsShallowEqual */ "./src/util/arePropsShallowEqual.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors */ "./src/global/selectors/index.ts");


function getRequestInputInvoice(global, inputInvoice) {
  if (inputInvoice.type === 'slug') return inputInvoice;
  if (inputInvoice.type === 'stargiftResale') {
    const {
      slug,
      peerId
    } = inputInvoice;
    const peer = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPeer)(global, peerId);
    if (!peer) return undefined;
    return {
      type: 'stargiftResale',
      slug,
      peer
    };
  }
  if (inputInvoice.type === 'stargift') {
    const {
      peerId,
      shouldHideName,
      giftId,
      message,
      shouldUpgrade
    } = inputInvoice;
    const peer = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPeer)(global, peerId);
    if (!peer) return undefined;
    return {
      type: 'stargift',
      peer,
      shouldHideName,
      giftId,
      message,
      shouldUpgrade
    };
  }
  if (inputInvoice.type === 'starsgift') {
    const {
      userId,
      stars,
      amount,
      currency
    } = inputInvoice;
    const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUser)(global, userId);
    if (!user) return undefined;
    return {
      type: 'stars',
      purpose: {
        type: 'starsgift',
        user,
        stars,
        amount,
        currency
      }
    };
  }
  if (inputInvoice.type === 'stars') {
    const {
      stars,
      amount,
      currency
    } = inputInvoice;
    return {
      type: 'stars',
      purpose: {
        type: 'stars',
        stars,
        amount,
        currency
      }
    };
  }
  if (inputInvoice.type === 'chatInviteSubscription') {
    const {
      hash
    } = inputInvoice;
    return {
      type: 'chatInviteSubscription',
      hash
    };
  }
  if (inputInvoice.type === 'message') {
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, inputInvoice.chatId);
    if (!chat) {
      return undefined;
    }
    return {
      type: 'message',
      chat,
      messageId: inputInvoice.messageId
    };
  }
  if (inputInvoice.type === 'premiumGiftStars') {
    const {
      months,
      userId,
      message
    } = inputInvoice;
    const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUser)(global, userId);
    if (!user) return undefined;
    return {
      type: 'premiumGiftStars',
      months,
      message,
      user
    };
  }
  if (inputInvoice.type === 'giftcode') {
    const {
      userIds,
      boostChannelId,
      amount,
      currency,
      option,
      message
    } = inputInvoice;
    const users = userIds.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUser)(global, id)).filter(Boolean);
    const boostChannel = boostChannelId ? (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, boostChannelId) : undefined;
    return {
      type: 'giveaway',
      option,
      purpose: {
        type: 'giftcode',
        amount,
        currency,
        users,
        boostChannel,
        message
      }
    };
  }
  if (inputInvoice.type === 'starsgiveaway') {
    const {
      chatId,
      additionalChannelIds,
      amount,
      currency,
      untilDate,
      areWinnersVisible,
      countries,
      isOnlyForNewSubscribers,
      prizeDescription,
      stars,
      users
    } = inputInvoice;
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, chatId);
    if (!chat) {
      return undefined;
    }
    const additionalChannels = additionalChannelIds?.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, id)).filter(Boolean);
    return {
      type: 'starsgiveaway',
      purpose: {
        type: 'starsgiveaway',
        amount,
        currency,
        chat,
        additionalChannels,
        untilDate,
        areWinnersVisible,
        countries,
        isOnlyForNewSubscribers,
        prizeDescription,
        stars,
        users
      }
    };
  }
  if (inputInvoice.type === 'giveaway') {
    const {
      chatId,
      additionalChannelIds,
      amount,
      currency,
      option,
      untilDate,
      areWinnersVisible,
      countries,
      isOnlyForNewSubscribers,
      prizeDescription
    } = inputInvoice;
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, chatId);
    if (!chat) {
      return undefined;
    }
    const additionalChannels = additionalChannelIds?.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, id)).filter(Boolean);
    return {
      type: 'giveaway',
      option,
      purpose: {
        type: 'giveaway',
        amount,
        currency,
        chat,
        additionalChannels,
        untilDate,
        areWinnersVisible,
        countries,
        isOnlyForNewSubscribers,
        prizeDescription
      }
    };
  }
  if (inputInvoice.type === 'stargiftUpgrade') {
    const {
      inputSavedGift,
      shouldKeepOriginalDetails
    } = inputInvoice;
    const savedGift = getRequestInputSavedStarGift(global, inputSavedGift);
    if (!savedGift) return undefined;
    return {
      type: 'stargiftUpgrade',
      inputSavedGift: savedGift,
      shouldKeepOriginalDetails
    };
  }
  if (inputInvoice.type === 'stargiftTransfer') {
    const {
      inputSavedGift,
      recipientId
    } = inputInvoice;
    const savedGift = getRequestInputSavedStarGift(global, inputSavedGift);
    const peer = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPeer)(global, recipientId);
    if (!savedGift || !peer) return undefined;
    return {
      type: 'stargiftTransfer',
      inputSavedGift: savedGift,
      recipient: peer
    };
  }
  return undefined;
}
function getRequestInputSavedStarGift(global, inputGift) {
  if (inputGift.type === 'user') return inputGift;
  if (inputGift.type === 'chat') {
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, inputGift.chatId);
    if (!chat) return undefined;
    return {
      type: 'chat',
      chat,
      savedId: inputGift.savedId
    };
  }
  return undefined;
}
function buildStarsTransactionCustomPeer(peer) {
  if (peer.type === 'appStore') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.AppleTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.AppleTopUp.Subtitle',
      peerColorId: 5
    };
  }
  if (peer.type === 'playMarket') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.GoogleTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.GoogleTopUp.Subtitle',
      peerColorId: 3
    };
  }
  if (peer.type === 'fragment') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.FragmentTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.FragmentTopUp.Subtitle',
      customPeerAvatarColor: '#000000'
    };
  }
  if (peer.type === 'premiumBot') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.PremiumBotTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.PremiumBotTopUp.Subtitle',
      peerColorId: 1,
      withPremiumGradient: true
    };
  }
  if (peer.type === 'ads') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.TelegramAds.Title',
      subtitleKey: 'Stars.Intro.Transaction.TelegramAds.Subtitle',
      peerColorId: 2
    };
  }
  if (peer.type === 'api') {
    return {
      avatarIcon: 'bots',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.TelegramBotApi.Title',
      subtitleKey: 'Stars.Intro.Transaction.TelegramBotApi.Subtitle',
      peerColorId: 4
    };
  }
  return {
    avatarIcon: 'star',
    isCustomPeer: true,
    titleKey: 'Stars.Intro.Transaction.Unsupported.Title',
    subtitleKey: 'Stars.Intro.Transaction.Unsupported.Title',
    peerColorId: 0
  };
}
function formatStarsTransactionAmount(lang, starsAmount) {
  const amount = starsAmount.amount + starsAmount.nanos / 1e9;
  if (amount < 0) {
    return `- ${lang.number(Math.abs(amount))}`;
  }
  return `+ ${lang.number(amount)}`;
}
function formatStarsAmount(lang, starsAmount) {
  return lang.number(starsAmount.amount + starsAmount.nanos / 1e9);
}
function getStarsTransactionFromGift(message) {
  const {
    action
  } = message.content;
  if (action?.type !== 'giftStars') return undefined;
  const {
    transactionId,
    stars
  } = action;
  return {
    id: transactionId,
    stars: {
      amount: stars,
      nanos: 0
    },
    peer: {
      type: 'peer',
      id: message.isOutgoing ? message.chatId : message.senderId || message.chatId
    },
    date: message.date,
    isGift: true,
    isMyGift: message.isOutgoing || undefined
  };
}
function getPrizeStarsTransactionFromGiveaway(message) {
  const {
    action
  } = message.content;
  if (action?.type !== 'prizeStars') return undefined;
  const {
    transactionId,
    stars,
    boostPeerId
  } = action;
  return {
    id: transactionId,
    stars: {
      amount: stars,
      nanos: 0
    },
    peer: {
      type: 'peer',
      id: boostPeerId
    },
    date: message.date,
    giveawayPostId: message.id
  };
}
function areInputSavedGiftsEqual(one, two) {
  return (0,_util_arePropsShallowEqual__WEBPACK_IMPORTED_MODULE_0__["default"])(one, two);
}

/***/ }),

/***/ "./src/hooks/useLayoutEffectWithPrevDeps.ts":
/*!**************************************************!*\
  !*** ./src/hooks/useLayoutEffectWithPrevDeps.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");

const useLayoutEffectWithPrevDeps = (cb, dependencies, debugKey) => {
  const prevDepsRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const prevDeps = prevDepsRef.current;
    prevDepsRef.current = dependencies;
    return cb(prevDeps || []);
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, dependencies, debugKey);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayoutEffectWithPrevDeps);

/***/ }),

/***/ "./src/util/directInputManager.ts":
/*!****************************************!*\
  !*** ./src/util/directInputManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableDirectTextInput: () => (/* binding */ disableDirectTextInput),
/* harmony export */   enableDirectTextInput: () => (/* binding */ enableDirectTextInput),
/* harmony export */   getIsDirectTextInputDisabled: () => (/* binding */ getIsDirectTextInputDisabled)
/* harmony export */ });
let counter = 0;
function disableDirectTextInput() {
  counter += 1;
}
function enableDirectTextInput() {
  counter -= 1;
}
function getIsDirectTextInputDisabled() {
  return counter > 0;
}

/***/ }),

/***/ "./src/util/hoc/freezeWhenClosed.ts":
/*!******************************************!*\
  !*** ./src/util/hoc/freezeWhenClosed.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freezeWhenClosed)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");

function freezeWhenClosed(Component) {
  function ComponentWrapper(props) {
    const newProps = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(props);
    if (props.ignoreFreeze) return Component(props);
    if (props.isOpen) {
      newProps.current = props;
    } else {
      newProps.current = {
        ...newProps.current,
        isOpen: false
      };
    }
    return Component(newProps.current);
  }
  return ComponentWrapper;
}

/***/ }),

/***/ "./src/util/trapFocus.ts":
/*!*******************************!*\
  !*** ./src/util/trapFocus.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ trapFocus)
/* harmony export */ });
function trapFocus(element) {
  function handleKeyDown(e) {
    if (e.key !== 'Tab') {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const focusableElements = Array.from(element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    if (!focusableElements.length) {
      return;
    }
    const currentFocusedIndex = focusableElements.findIndex(em => em.isSameNode(document.activeElement));
    let newFocusedIndex = 0;
    if (currentFocusedIndex >= 0) {
      if (e.shiftKey) {
        newFocusedIndex = currentFocusedIndex > 0 ? currentFocusedIndex - 1 : focusableElements.length - 1;
      } else {
        newFocusedIndex = currentFocusedIndex < focusableElements.length - 1 ? currentFocusedIndex + 1 : 0;
      }
    }
    focusableElements[newFocusedIndex].focus();
  }
  document.addEventListener('keydown', handleKeyDown, false);
  return () => {
    document.removeEventListener('keydown', handleKeyDown, false);
  };
}

/***/ })

}]);
//# sourceMappingURL=src_global_helpers_payments_ts-src_hooks_useLayoutEffectWithPrevDeps_ts-src_util_directInputM-df920f.46fbe02117d7e2fc9514.js.map