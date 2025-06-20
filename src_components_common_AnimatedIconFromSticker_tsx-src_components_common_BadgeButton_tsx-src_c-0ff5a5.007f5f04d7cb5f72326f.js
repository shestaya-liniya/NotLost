"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_common_AnimatedIconFromSticker_tsx-src_components_common_BadgeButton_tsx-src_c-0ff5a5"],{

/***/ "./src/components/common/AnimatedCounter.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedCounter.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AnimatedCounter-module__root","character-container":"AnimatedCounter-module__character-container","characterContainer":"AnimatedCounter-module__character-container","character":"AnimatedCounter-module__character","character-old":"AnimatedCounter-module__character-old","characterOld":"AnimatedCounter-module__character-old","character-disappear":"AnimatedCounter-module__character-disappear","characterDisappear":"AnimatedCounter-module__character-disappear","character-new":"AnimatedCounter-module__character-new","characterNew":"AnimatedCounter-module__character-new","character-appear":"AnimatedCounter-module__character-appear","characterAppear":"AnimatedCounter-module__character-appear"});

/***/ }),

/***/ "./src/components/common/AnimatedCounter.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/AnimatedCounter.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/schedulers */ "./src/util/schedulers.ts");
/* harmony import */ var _hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useForceUpdate */ "./src/hooks/useForceUpdate.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");
/* harmony import */ var _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnimatedCounter.module.scss */ "./src/components/common/AnimatedCounter.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");










const ANIMATION_TIME = 200;
const MAX_SIMULTANEOUS_ANIMATIONS = 10;
let scheduledAnimationsCounter = 0;
const resetCounterOnTickEnd = (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_4__.throttleWithTickEnd)(() => {
  scheduledAnimationsCounter = 0;
});
const AnimatedCounter = ({
  text,
  className,
  isDisabled,
  ref
}) => {
  const {
    isRtl
  } = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const prevText = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__["default"])(text);
  const forceUpdate = (0,_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const shouldAnimate = scheduleAnimation(!isDisabled && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)()) && prevText !== undefined && prevText !== text);
  const characters = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return shouldAnimate ? renderAnimatedCharacters(text, prevText) : text;
  }, [shouldAnimate, prevText, text]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!shouldAnimate) return undefined;
    const timeoutId = window.setTimeout(() => {
      forceUpdate();
    }, ANIMATION_TIME);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [shouldAnimate, text]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(className, !isDisabled && _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].root),
    dir: isRtl ? 'rtl' : undefined,
    children: characters
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedCounter));
function scheduleAnimation(condition) {
  if (!condition || scheduledAnimationsCounter >= MAX_SIMULTANEOUS_ANIMATIONS) return false;
  if (scheduledAnimationsCounter === 0) {
    resetCounterOnTickEnd();
  }
  scheduledAnimationsCounter++;
  return true;
}
function renderAnimatedCharacters(text, prevText) {
  const elements = [];
  const textLength = text.length;
  const prevTextLength = prevText?.length ?? 0;
  for (let i = 0; i <= textLength; i++) {
    const charIndex = textLength - i;
    const prevTextCharIndex = prevTextLength - i;
    if (prevText && prevTextCharIndex >= 0 && text[charIndex] !== prevText[prevTextCharIndex]) {
      elements.unshift((0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterContainer,
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].character,
          children: text[charIndex] ?? ''
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterOld,
          children: prevText[prevTextCharIndex]
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterNew,
          children: text[charIndex] ?? ''
        })]
      }));
    } else {
      elements.unshift((0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
        children: text[charIndex] ?? ''
      }));
    }
  }
  return elements;
}

/***/ }),

/***/ "./src/components/common/AnimatedIconFromSticker.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedIconFromSticker.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _AnimatedIconWithPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimatedIconWithPreview */ "./src/components/common/AnimatedIconWithPreview.tsx");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");






function AnimatedIconFromSticker(props) {
  const {
    sticker,
    noLoad,
    forcePreview,
    ...otherProps
  } = props;
  const thumbDataUri = sticker?.thumbnail?.dataUri;
  const localMediaHash = sticker && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerMediaHash)(sticker, 'full');
  const previewBlobUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(sticker ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerMediaHash)(sticker, 'preview') : undefined, noLoad && !forcePreview, _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMediaFormat.BlobUrl);
  const tgsUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(localMediaHash, noLoad);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AnimatedIconWithPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tgsUrl: tgsUrl,
    previewUrl: previewBlobUrl,
    thumbDataUri: thumbDataUri,
    ...otherProps
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedIconFromSticker));

/***/ }),

/***/ "./src/components/common/AnimatedIconWithPreview.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/common/AnimatedIconWithPreview.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AnimatedIconWithPreview-module__root","preview":"AnimatedIconWithPreview-module__preview"});

/***/ }),

/***/ "./src/components/common/AnimatedIconWithPreview.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedIconWithPreview.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useMediaTransitionDeprecated */ "./src/hooks/useMediaTransitionDeprecated.ts");
/* harmony import */ var _AnimatedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimatedIconWithPreview.module.scss */ "./src/components/common/AnimatedIconWithPreview.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");









const ANIMATION_DURATION = 300;
const loadedPreviewUrls = new Set();
function AnimatedIconWithPreview(props) {
  const {
    previewUrl,
    thumbDataUri,
    className,
    ...otherProps
  } = props;
  const [isThumbOpen,, unmarkThumbOpen] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(Boolean(thumbDataUri));
  const thumbClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isThumbOpen);
  const [isPreviewOpen, markPreviewOpen, unmarkPreviewOpen] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(loadedPreviewUrls.has(previewUrl));
  const previewClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isPreviewOpen);
  const [isAnimationReady, markAnimationReady] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  const handlePreviewLoad = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    markPreviewOpen();
    loadedPreviewUrls.add(previewUrl);
  });
  const handleAnimationReady = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    unmarkThumbOpen();
    unmarkPreviewOpen();
    setTimeout(markAnimationReady, ANIMATION_DURATION);
  });
  const {
    size
  } = props;
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(className, _AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(size !== undefined && `width: ${size}px; height: ${size}px;`),
    children: [thumbDataUri && !isAnimationReady &&
    // eslint-disable-next-line jsx-a11y/alt-text
    (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: thumbDataUri,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].preview, thumbClassNames),
      draggable: false
    }), previewUrl && !isAnimationReady &&
    // eslint-disable-next-line jsx-a11y/alt-text
    (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: previewUrl,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].preview, previewClassNames),
      draggable: false,
      onLoad: handlePreviewLoad
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AnimatedIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ...otherProps,
      onLoad: handleAnimationReady
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedIconWithPreview));

/***/ }),

/***/ "./src/components/common/AvatarList.module.scss":
/*!******************************************************!*\
  !*** ./src/components/common/AvatarList.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AvatarList-module__root","avatar":"AvatarList-module__avatar","badge":"AvatarList-module__badge"});

/***/ }),

/***/ "./src/components/common/AvatarList.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/AvatarList.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _AvatarList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarList.module.scss */ "./src/components/common/AvatarList.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");






const DEFAULT_LIMIT = 3;
const AvatarList = ({
  peers,
  size,
  className,
  limit = DEFAULT_LIMIT,
  badgeText
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const pxSize = typeof size === 'number' ? size : _Avatar__WEBPACK_IMPORTED_MODULE_3__.AVATAR_SIZES[size];
  const renderingBadgeText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (badgeText) return badgeText;
    if (!peers?.length || peers.length <= limit) return undefined;
    return `+${peers.length - limit}`;
  }, [badgeText, peers, limit]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(className, _AvatarList_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root),
    style: `--_size: ${pxSize}px;`,
    dir: lang.isRtl ? 'rtl' : 'ltr',
    children: [peers?.slice(0, limit).map(peer => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: size,
      peer: peer,
      className: _AvatarList_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar
    })), renderingBadgeText && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: _AvatarList_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].badge,
      children: renderingBadgeText
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AvatarList));

/***/ }),

/***/ "./src/components/common/BadgeButton.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/common/BadgeButton.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"BadgeButton-module__root","clickable":"BadgeButton-module__clickable"});

/***/ }),

/***/ "./src/components/common/BadgeButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/BadgeButton.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BadgeButton.module.scss */ "./src/components/common/BadgeButton.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");



const BadgeButton = ({
  children,
  className,
  onClick,
  onMouseDown
}) => {
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_0__["default"])(_BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].root, onClick && _BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].clickable, className),
    onClick: onClick,
    onMouseDown: onMouseDown,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeButton);

/***/ }),

/***/ "./src/components/common/CalendarModal.async.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/CalendarModal.async.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_moduleLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/moduleLoader */ "./src/util/moduleLoader.ts");
/* harmony import */ var _hooks_useModuleLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useModuleLoader */ "./src/hooks/useModuleLoader.ts");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");



const CalendarModalAsync = props => {
  const {
    isOpen
  } = props;
  const CalendarModal = (0,_hooks_useModuleLoader__WEBPACK_IMPORTED_MODULE_1__["default"])(_util_moduleLoader__WEBPACK_IMPORTED_MODULE_0__.Bundles.Extra, 'CalendarModal', !isOpen);
  return CalendarModal ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CalendarModal, {
    ...props
  }) : undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarModalAsync);

/***/ }),

/***/ "./src/components/common/MediaSpoiler.module.scss":
/*!********************************************************!*\
  !*** ./src/components/common/MediaSpoiler.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"MediaSpoiler-module__root","mask-animation":"MediaSpoiler-module__mask-animation","maskAnimation":"MediaSpoiler-module__mask-animation","circle-cut":"MediaSpoiler-module__circle-cut","circleCut":"MediaSpoiler-module__circle-cut","dots":"MediaSpoiler-module__dots","canvas":"MediaSpoiler-module__canvas","opacity-breath":"MediaSpoiler-module__opacity-breath","opacityBreath":"MediaSpoiler-module__opacity-breath","dots-animation":"MediaSpoiler-module__dots-animation","dotsAnimation":"MediaSpoiler-module__dots-animation"});

/***/ }),

/***/ "./src/components/common/MediaSpoiler.tsx":
/*!************************************************!*\
  !*** ./src/components/common/MediaSpoiler.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useCanvasBlur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useCanvasBlur */ "./src/hooks/useCanvasBlur.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useShowTransitionDeprecated */ "./src/hooks/useShowTransitionDeprecated.ts");
/* harmony import */ var _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaSpoiler.module.scss */ "./src/components/common/MediaSpoiler.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");








const BLUR_RADIUS = 25;
const ANIMATION_DURATION = 500;
const MediaSpoiler = ({
  isVisible,
  withAnimation,
  thumbDataUri,
  className,
  width,
  height
}) => {
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    shouldRender,
    transitionClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isVisible, undefined, true, withAnimation ? false : undefined, undefined, ANIMATION_DURATION);
  const canvasRef = (0,_hooks_useCanvasBlur__WEBPACK_IMPORTED_MODULE_3__["default"])(thumbDataUri, !shouldRender, undefined, BLUR_RADIUS, width, height);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    if (!ref.current) return;
    const el = ref.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const shiftX = x - rect.width / 2;
    const shiftY = y - rect.height / 2;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      el.setAttribute('style', `--click-shift-x: ${shiftX}px; --click-shift-y: ${shiftY}px`);
    });
  });
  if (!shouldRender) {
    return undefined;
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, transitionClassNames, className, withAnimation && _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].maskAnimation),
    ref: ref,
    onClick: withAnimation ? handleClick : undefined,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("canvas", {
      ref: canvasRef,
      className: _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].canvas,
      width: width,
      height: height
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dots
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(MediaSpoiler));

/***/ }),

/***/ "./src/components/common/PasswordForm.tsx":
/*!************************************************!*\
  !*** ./src/components/common/PasswordForm.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_stopEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/stopEvent */ "./src/util/stopEvent.ts");
/* harmony import */ var _hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/schedulers/useTimeout */ "./src/hooks/schedulers/useTimeout.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");












const PasswordForm = ({
  isLoading = false,
  isPasswordVisible,
  error,
  hint,
  placeholder = 'Password',
  submitLabel = 'Next',
  description,
  shouldShowSubmit,
  shouldResetValue,
  shouldDisablePasswordManager = false,
  noRipple = false,
  clearError,
  onChangePasswordVisibility,
  onInputChange,
  onSubmit
}) => {
  const inputRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    isMobile
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [password, setPassword] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [canSubmit, setCanSubmit] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const focusDelayTimeoutMs = isMobile ? 550 : 400;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldResetValue) {
      setPassword('');
    }
  }, [shouldResetValue]);
  (0,_hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    if (!_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_TOUCH_ENV) {
      inputRef.current.focus();
    }
  }, focusDelayTimeoutMs);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error) {
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMutation)(() => {
        inputRef.current.focus();
        inputRef.current.select();
      });
    }
  }, [error]);
  function onPasswordChange(e) {
    if (error) {
      clearError();
    }
    const {
      target
    } = e;
    setPassword(target.value);
    setCanSubmit(target.value.length >= _config__WEBPACK_IMPORTED_MODULE_1__.MIN_PASSWORD_LENGTH);
    if (onInputChange) {
      onInputChange(target.value);
    }
  }
  function togglePasswordVisibility() {
    onChangePasswordVisibility(!isPasswordVisible);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (isLoading) {
      return;
    }
    if (canSubmit) {
      onSubmit(password);
    }
  }
  function renderFakeInput() {
    return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
      type: "password",
      id: "prevent_autofill",
      autoComplete: "off",
      className: "visually-hidden",
      tabIndex: -2
    });
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
    action: "",
    onSubmit: onSubmit ? handleSubmit : _util_stopEvent__WEBPACK_IMPORTED_MODULE_5__["default"],
    autoComplete: "off",
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group password-input', password && 'touched', error && 'error'),
      dir: lang.isRtl ? 'rtl' : undefined,
      children: [shouldDisablePasswordManager && renderFakeInput(), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
        ref: inputRef,
        className: "form-control",
        type: isPasswordVisible ? 'text' : 'password',
        id: "sign-in-password",
        value: password || '',
        autoComplete: shouldDisablePasswordManager ? 'one-time-code' : 'current-password',
        onChange: onPasswordChange,
        maxLength: 256,
        dir: "auto"
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("label", {
        children: error || hint || placeholder
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "div-button toggle-password",
        onClick: togglePasswordVisibility,
        role: "button",
        tabIndex: 0,
        title: "Toggle password visibility",
        "aria-label": "Toggle password visibility",
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
          name: isPasswordVisible ? 'eye' : 'eye-crossed'
        })
      })]
    }), description && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
      className: "description",
      children: description
    }), onSubmit && (canSubmit || shouldShowSubmit) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      size: "smaller",
      type: "submit",
      ripple: !noRipple,
      isLoading: isLoading,
      disabled: !canSubmit,
      children: submitLabel
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PasswordForm));

/***/ }),

/***/ "./src/components/common/PeerChip.module.scss":
/*!****************************************************!*\
  !*** ./src/components/common/PeerChip.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PeerChip-module__root","minimized":"PeerChip-module__minimized","closeable":"PeerChip-module__closeable","remove":"PeerChip-module__remove","nonDestructive":"PeerChip-module__nonDestructive","notClickable":"PeerChip-module__notClickable","avatar":"PeerChip-module__avatar","iconWrapper":"PeerChip-module__iconWrapper","icon":"PeerChip-module__icon","name":"PeerChip-module__name","squareAvatar":"PeerChip-module__squareAvatar"});

/***/ }),

/***/ "./src/components/common/PeerChip.tsx":
/*!********************************************!*\
  !*** ./src/components/common/PeerChip.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _helpers_peerColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/peerColor */ "./src/components/common/helpers/peerColor.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _FullNameTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PeerChip.module.scss */ "./src/components/common/PeerChip.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");












const PeerChip = ({
  icon,
  title,
  isMinimized,
  canClose,
  isCloseNonDestructive,
  clickArg,
  peer,
  mockPeer,
  customPeer,
  className,
  isSavedMessages,
  withPeerColors,
  withEmojiStatus,
  onClick,
  itemClassName
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const apiPeer = mockPeer || peer;
  const anyPeer = customPeer || apiPeer;
  const chat = apiPeer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__.isApiPeerChat)(apiPeer) ? apiPeer : undefined;
  let iconElement;
  let titleElement;
  let titleText;
  if (icon && title) {
    iconElement = (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].iconWrapper,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: icon,
        style: _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].icon
      })
    });
    titleElement = title;
  } else if (anyPeer) {
    iconElement = (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].avatar,
      peer: anyPeer,
      size: "small",
      isSavedMessages: isSavedMessages
    });
    titleText = (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, anyPeer) || title;
    titleElement = title || (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_FullNameTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      peer: anyPeer,
      isSavedMessages: isSavedMessages,
      withEmojiStatus: withEmojiStatus
    });
  }
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].root, (chat?.isForum || customPeer?.isAvatarSquare) && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].squareAvatar, isMinimized && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].minimized, canClose && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].closeable, isCloseNonDestructive && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].nonDestructive, !onClick && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].notClickable, withPeerColors && (0,_helpers_peerColor__WEBPACK_IMPORTED_MODULE_5__.getPeerColorClass)(customPeer || peer), className);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: fullClassName,
    onClick: () => onClick?.(clickArg),
    title: isMinimized ? titleText : undefined,
    dir: lang.isRtl ? 'rtl' : undefined,
    children: [iconElement, !isMinimized && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].name, itemClassName),
      dir: "auto",
      children: titleElement
    }), canClose && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].remove,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "close"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  peerId,
  forceShowSelf
}) => {
  if (!peerId) {
    return {};
  }
  const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, peerId);
  const user = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, peerId);
  const isSavedMessages = !forceShowSelf && user && user.isSelf;
  return {
    peer,
    isSavedMessages
  };
})(PeerChip)));

/***/ }),

/***/ "./src/components/common/PinMessageModal.async.tsx":
/*!*********************************************************!*\
  !*** ./src/components/common/PinMessageModal.async.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_moduleLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/moduleLoader */ "./src/util/moduleLoader.ts");
/* harmony import */ var _hooks_useModuleLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useModuleLoader */ "./src/hooks/useModuleLoader.ts");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");



const PinMessageModalAsync = props => {
  const {
    isOpen
  } = props;
  const PinMessageModal = (0,_hooks_useModuleLoader__WEBPACK_IMPORTED_MODULE_1__["default"])(_util_moduleLoader__WEBPACK_IMPORTED_MODULE_0__.Bundles.Extra, 'PinMessageModal', !isOpen);
  return PinMessageModal ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PinMessageModal, {
    ...props
  }) : undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PinMessageModalAsync);

/***/ }),

/***/ "./src/components/common/PremiumProgress.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/PremiumProgress.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PremiumProgress-module__root","withBadge":"PremiumProgress-module__withBadge","badgeContainer":"PremiumProgress-module__badgeContainer","slide-in":"PremiumProgress-module__slide-in","slideIn":"PremiumProgress-module__slide-in","floating-badge-wrapper":"PremiumProgress-module__floating-badge-wrapper","floatingBadgeWrapper":"PremiumProgress-module__floating-badge-wrapper","rotate-in":"PremiumProgress-module__rotate-in","rotateIn":"PremiumProgress-module__rotate-in","floating-badge":"PremiumProgress-module__floating-badge","floatingBadge":"PremiumProgress-module__floating-badge","floating-badge-triangle":"PremiumProgress-module__floating-badge-triangle","floatingBadgeTriangle":"PremiumProgress-module__floating-badge-triangle","floating-badge-icon":"PremiumProgress-module__floating-badge-icon","floatingBadgeIcon":"PremiumProgress-module__floating-badge-icon","floating-badge-value":"PremiumProgress-module__floating-badge-value","floatingBadgeValue":"PremiumProgress-module__floating-badge-value","left":"PremiumProgress-module__left","right":"PremiumProgress-module__right","progress":"PremiumProgress-module__progress","fullProgress":"PremiumProgress-module__fullProgress","primary":"PremiumProgress-module__primary"});

/***/ }),

/***/ "./src/components/common/PremiumProgress.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/PremiumProgress.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PremiumProgress.module.scss */ "./src/components/common/PremiumProgress.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");








const PremiumProgress = ({
  leftText,
  rightText,
  floatingBadgeText,
  floatingBadgeIcon,
  progress,
  isPrimary,
  className
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const floatingBadgeRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const parentContainerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [shiftX, setShiftX] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [tailPosition, setTailPosition] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const updateBadgePosition = () => {
    if (floatingBadgeRef.current && parentContainerRef.current && progress !== undefined) {
      const badgeWidth = floatingBadgeRef.current.offsetWidth;
      const parentWidth = parentContainerRef.current.offsetWidth;
      const minShift = badgeWidth / 2;
      const maxShift = parentWidth - badgeWidth / 2;
      const currentShift = progress * parentWidth;
      const safeShift = Math.max(minShift, Math.min(currentShift, maxShift));
      setShiftX(safeShift / parentWidth);
      let newTailPosition;
      if (currentShift < minShift) {
        newTailPosition = progress * parentWidth / (minShift * 2);
      } else if (currentShift > maxShift) {
        const progressMapped = (progress - maxShift / parentWidth) / (1 - maxShift / parentWidth);
        newTailPosition = 0.5 + progressMapped * 0.4;
      } else {
        newTailPosition = 0.5;
      }
      setTailPosition(newTailPosition);
    }
  };
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(updateBadgePosition, [progress]);
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__["default"])(parentContainerRef, updateBadgePosition);
  const hasFloatingBadge = Boolean(floatingBadgeIcon || floatingBadgeText);
  const isProgressFull = Boolean(progress) && progress > 0.99;
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    ref: parentContainerRef,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, hasFloatingBadge && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].withBadge, isPrimary && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].primary, className),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(progress !== undefined && `--progress: ${progress}`, tailPosition !== undefined && `--tail-position: ${tailPosition}`, `--shift-x: ${shiftX}`),
    children: [hasFloatingBadge && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].badgeContainer,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeWrapper,
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadge,
          ref: floatingBadgeRef,
          children: [floatingBadgeIcon && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: floatingBadgeIcon,
            className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeIcon
          }), floatingBadgeText && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeValue,
            dir: lang.isRtl ? 'rtl' : undefined,
            children: floatingBadgeText
          })]
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeTriangle,
          children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 28 28",
            fill: "none",
            children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
              d: "m 28,4 v 9 c 0.0089,7.283278 -3.302215,5.319646 -6.750951,8.589815 l -5.8284,5.82843 c -0.781,0.78105 -2.0474,0.78104 -2.8284,0 L 6.7638083,21.589815 C 2.8288652,17.959047 0.04527024,20.332086 0,13 V 4 C 0,4 0.00150581,0.97697493 3,1 5.3786658,1.018266 22.594519,0.9142007 25,1 c 2.992326,0.1067311 3,3 3,3 z",
              fill: "#7E85FF"
            })
          })
        })]
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].left,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: leftText
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].right,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: rightText
      })
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].progress, isProgressFull && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].fullProgress),
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].left,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: leftText
        })
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].right,
        children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: rightText
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PremiumProgress));

/***/ }),

/***/ "./src/components/common/helpers/gifts.ts":
/*!************************************************!*\
  !*** ./src/components/common/helpers/gifts.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGiftAttributes: () => (/* binding */ getGiftAttributes),
/* harmony export */   getGiftAttributesFromList: () => (/* binding */ getGiftAttributesFromList),
/* harmony export */   getGiftMessage: () => (/* binding */ getGiftMessage),
/* harmony export */   getStickerFromGift: () => (/* binding */ getStickerFromGift),
/* harmony export */   getTotalGiftAvailability: () => (/* binding */ getTotalGiftAvailability)
/* harmony export */ });
function getStickerFromGift(gift) {
  if (gift.type === 'starGift') {
    return gift.sticker;
  }
  return gift.attributes.find(attr => attr.type === 'model')?.sticker;
}
function getTotalGiftAvailability(gift) {
  if (gift.type === 'starGift') {
    return gift.availabilityTotal;
  }
  return gift.totalCount;
}
function getGiftMessage(gift) {
  if (gift.type !== 'starGiftUnique') return undefined;
  return gift.attributes.find(attr => attr.type === 'model')?.message;
}
function getGiftAttributes(gift) {
  if (gift.type !== 'starGiftUnique') return undefined;
  return getGiftAttributesFromList(gift.attributes);
}
function getGiftAttributesFromList(attributes) {
  const model = attributes.find(attr => attr.type === 'model');
  const backdrop = attributes.find(attr => attr.type === 'backdrop');
  const pattern = attributes.find(attr => attr.type === 'pattern');
  const originalDetails = attributes.find(attr => attr.type === 'originalDetails');
  return {
    model,
    originalDetails,
    pattern,
    backdrop
  };
}

/***/ }),

/***/ "./src/components/common/helpers/renderMessageText.ts":
/*!************************************************************!*\
  !*** ./src/components/common/helpers/renderMessageText.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMessageSummary: () => (/* binding */ renderMessageSummary),
/* harmony export */   renderMessageText: () => (/* binding */ renderMessageText)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_messageSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/helpers/messageSummary */ "./src/global/helpers/messageSummary.ts");
/* harmony import */ var _util_keys_messageKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/keys/messageKey */ "./src/util/keys/messageKey.ts");
/* harmony import */ var _util_trimText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/trimText */ "./src/util/trimText.ts");
/* harmony import */ var _renderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _renderTextWithEntities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");








function renderMessageText({
  message,
  highlight,
  emojiSize,
  asPreview,
  truncateLength,
  isProtected,
  forcePlayback,
  shouldRenderAsHtml,
  isForMediaViewer,
  threadId,
  maxTimestamp
}) {
  const {
    text,
    entities
  } = message.content.text || {};
  if (!text) {
    const contentNotSupportedText = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getMessageText)(message)?.text;
    return contentNotSupportedText ? [(0,_util_trimText__WEBPACK_IMPORTED_MODULE_5__["default"])(contentNotSupportedText, truncateLength)] : undefined;
  }
  const messageKey = (0,_util_keys_messageKey__WEBPACK_IMPORTED_MODULE_4__.getMessageKey)(message);
  return (0,_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_7__.renderTextWithEntities)({
    text: (0,_util_trimText__WEBPACK_IMPORTED_MODULE_5__["default"])(text, truncateLength),
    entities,
    highlight,
    emojiSize,
    shouldRenderAsHtml,
    containerId: `${isForMediaViewer ? 'mv-' : ''}${messageKey}`,
    asPreview,
    isProtected,
    forcePlayback,
    messageId: 'id' in message ? message.id : undefined,
    chatId: message.chatId,
    threadId,
    maxTimestamp
  });
}

// TODO Use Message Summary component instead
function renderMessageSummary(lang, message, noEmoji = false, highlight, truncateLength = _global_helpers_messageSummary__WEBPACK_IMPORTED_MODULE_3__.TRUNCATED_SUMMARY_LENGTH) {
  const {
    entities
  } = message.content.text || {};
  const global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobal)();
  const statefulContent = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getMessageStatefulContent)(global, message);
  const hasSpoilers = entities?.some(e => e.type === _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMessageEntityTypes.Spoiler);
  const hasCustomEmoji = entities?.some(e => e.type === _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMessageEntityTypes.CustomEmoji);
  if (!hasSpoilers && !hasCustomEmoji) {
    const text = (0,_util_trimText__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_global_helpers_messageSummary__WEBPACK_IMPORTED_MODULE_3__.getMessageSummaryText)(lang, message, statefulContent, noEmoji), truncateLength);
    if (highlight) {
      return (0,_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(text, ['emoji', 'highlight'], {
        highlight
      });
    } else {
      return (0,_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(text);
    }
  }
  const emoji = !noEmoji && (0,_global_helpers_messageSummary__WEBPACK_IMPORTED_MODULE_3__.getMessageSummaryEmoji)(message);
  const emojiWithSpace = emoji ? `${emoji} ` : '';
  const text = renderMessageText({
    message,
    highlight,
    asPreview: true,
    truncateLength
  });
  const description = (0,_global_helpers_messageSummary__WEBPACK_IMPORTED_MODULE_3__.getMessageSummaryDescription)(lang, message, statefulContent, text);
  return [...(0,_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(emojiWithSpace), ...(Array.isArray(description) ? description : [description])].filter(Boolean);
}

/***/ }),

/***/ "./src/components/common/helpers/sortChatIds.ts":
/*!******************************************************!*\
  !*** ./src/components/common/helpers/sortChatIds.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortChatIds)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");



const VERIFIED_PRIORITY_BASE = 3e9;
const PINNED_PRIORITY_BASE = 3e8;
function sortChatIds(chatIds, shouldPrioritizeVerified = false, priorityIds, currentUserId) {
  // Avoid calling sort on every global change
  const global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobal)();
  return (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_2__.orderBy)(chatIds, id => {
    if (id === currentUserId) {
      return Infinity;
    }
    const chat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, id);
    if (!chat) {
      return 0;
    }
    let priority = 0;
    const lastMessage = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChatLastMessage)(global, id);
    if (lastMessage) {
      priority += lastMessage.date;
    }
    if (shouldPrioritizeVerified && chat.isVerified) {
      priority += VERIFIED_PRIORITY_BASE; // ~100 years in seconds
    }
    if (priorityIds && priorityIds.includes(id)) {
      priority = Date.now() + PINNED_PRIORITY_BASE + (priorityIds.length - priorityIds.indexOf(id));
    }
    return priority;
  }, 'desc');
}

/***/ }),

/***/ "./src/components/common/pickers/PeerPicker.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/pickers/PeerPicker.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _util_memo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/memo */ "./src/util/memo.ts");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useInfiniteScroll */ "./src/hooks/useInfiniteScroll.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/Checkbox */ "./src/components/ui/Checkbox.tsx");
/* harmony import */ var _ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/InfiniteScroll */ "./src/components/ui/InfiniteScroll.tsx");
/* harmony import */ var _ui_InputText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/InputText */ "./src/components/ui/InputText.tsx");
/* harmony import */ var _ui_Loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Loading */ "./src/components/ui/Loading.tsx");
/* harmony import */ var _ui_Radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/Radio */ "./src/components/ui/Radio.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _FullNameTitle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PeerChip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../PeerChip */ "./src/components/common/PeerChip.tsx");
/* harmony import */ var _PickerItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PickerItem */ "./src/components/common/pickers/PickerItem.tsx");
/* harmony import */ var _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PickerStyles.module.scss */ "./src/components/common/pickers/PickerStyles.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");

























// Focus slows down animation, also it breaks transition layout in Chrome
const FOCUS_DELAY_MS = 500;
const MAX_FULL_ITEMS = 10;
const ALWAYS_FULL_ITEMS_COUNT = 5;
const ITEM_CLASS_NAME = 'PeerPickerItem';
const PeerPicker = ({
  className,
  categories,
  itemIds,
  categoryPlaceholderKey,
  filterValue,
  filterPlaceholder,
  notFoundText,
  searchInputId,
  itemClassName,
  isLoading,
  noScrollRestore,
  isSearchable,
  lockedUnselectedSubtitle,
  forceShowSelf,
  isViewOnly,
  itemInputType,
  withStatus,
  withPeerTypes,
  withPeerUsernames,
  withDefaultPadding,
  onFilterChange,
  onDisabledClick,
  onLoadMore,
  ...optionalProps
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const [showTopShadow, setShowTopShadow] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const allowMultiple = optionalProps.allowMultiple;
  const lockedSelectedIds = allowMultiple ? optionalProps.lockedSelectedIds : undefined;
  const lockedUnselectedIds = allowMultiple ? optionalProps.lockedUnselectedIds : undefined;
  const selectedCategories = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (allowMultiple) {
      return optionalProps.selectedCategories;
    }
    return optionalProps.selectedCategory ? [optionalProps.selectedCategory] : _util_memo__WEBPACK_IMPORTED_MODULE_9__.MEMO_EMPTY_ARRAY;
  }, [allowMultiple, optionalProps.selectedCategory, optionalProps.selectedCategories]);
  const selectedIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (allowMultiple) {
      return optionalProps.selectedIds;
    }
    return optionalProps.selectedId ? [optionalProps.selectedId] : _util_memo__WEBPACK_IMPORTED_MODULE_9__.MEMO_EMPTY_ARRAY;
  }, [allowMultiple, optionalProps.selectedId, optionalProps.selectedIds]);
  const inputRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const shouldMinimize = selectedIds.length > MAX_FULL_ITEMS;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSearchable) return undefined;
    const timeoutId = window.setTimeout(() => {
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMeasure)(() => {
        inputRef.current?.focus();
      });
    }, FOCUS_DELAY_MS);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isSearchable]);
  const lockedSelectedIdsSet = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new Set(lockedSelectedIds), [lockedSelectedIds]);
  const lockedUnselectedIdsSet = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new Set(lockedUnselectedIds), [lockedUnselectedIds]);
  const unlockedSelectedIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return selectedIds.filter(id => !lockedSelectedIdsSet.has(id));
  }, [lockedSelectedIdsSet, selectedIds]);
  const categoriesByType = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!categories) return {};
    return (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_8__.buildCollectionByKey)(categories, 'type');
  }, [categories]);
  const sortedItemIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (filterValue) {
      return itemIds;
    }
    const lockedSelectedBucket = [];
    const unlockedBucket = [];
    const lockedUnselectableBucket = [];
    itemIds.forEach(id => {
      if (lockedSelectedIdsSet.has(id)) {
        lockedSelectedBucket.push(id);
      } else if (lockedUnselectedIdsSet.has(id)) {
        lockedUnselectableBucket.push(id);
      } else {
        unlockedBucket.push(id);
      }
    });
    return lockedSelectedBucket.concat(unlockedBucket, lockedUnselectableBucket);
  }, [filterValue, itemIds, lockedSelectedIdsSet, lockedUnselectedIdsSet]);
  const handleItemClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(id => {
    if (lockedSelectedIdsSet.has(id)) {
      onDisabledClick?.(id, true);
      return;
    }
    if (lockedUnselectedIdsSet.has(id)) {
      onDisabledClick?.(id, false);
      return;
    }
    if (allowMultiple && categoriesByType[id]) {
      const categoryType = categoriesByType[id].type;
      const newSelectedCategories = selectedCategories?.slice() || [];
      if (newSelectedCategories.includes(categoryType)) {
        newSelectedCategories.splice(newSelectedCategories.indexOf(categoryType), 1);
      } else {
        newSelectedCategories.push(categoryType);
      }
      optionalProps.onSelectedCategoriesChange?.(newSelectedCategories);
      return;
    }
    if (allowMultiple) {
      const newSelectedIds = selectedIds.slice();
      if (newSelectedIds.includes(id)) {
        newSelectedIds.splice(newSelectedIds.indexOf(id), 1);
      } else {
        newSelectedIds.push(id);
      }
      optionalProps.onSelectedIdsChange?.(newSelectedIds);
      return;
    }
    if (categoriesByType[id]) {
      optionalProps.onSelectedCategoryChange?.(categoriesByType[id].type);
      return;
    }
    optionalProps.onSelectedIdChange?.(id);
  });
  const handleFilterChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(e => {
    const {
      value
    } = e.currentTarget;
    onFilterChange?.(value);
  });
  const [viewportIds, getMore] = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__["default"])(onLoadMore, sortedItemIds, Boolean(filterValue));
  const renderItem = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, isCategory) => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    const category = isCategory ? categoriesByType[id] : undefined;
    const peer = !isCategory ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectPeer)(global, id) : undefined;
    const peerOrCategory = peer || category;
    if (!peerOrCategory) {
      if (_config__WEBPACK_IMPORTED_MODULE_2__.DEBUG) {
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
          children: ["No peer or category with ID", id]
        }, id);
      }
      return undefined;
    }
    const isSelf = peer && !(0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.isApiPeerChat)(peer) ? peer.isSelf && !forceShowSelf : undefined;
    const isAlwaysUnselected = lockedUnselectedIdsSet.has(id);
    const isAlwaysSelected = lockedSelectedIdsSet.has(id);
    const isLocked = isAlwaysUnselected || isAlwaysSelected;
    const isChecked = category ? selectedCategories?.includes(category.type) : selectedIds.includes(id);
    function getInputElement() {
      if (isLocked) return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_20__["default"], {
        name: "lock-badge"
      });
      if (itemInputType === 'radio') {
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Radio__WEBPACK_IMPORTED_MODULE_17__["default"], {
          checked: isChecked,
          disabled: isLocked,
          onlyInput: true
        });
      }
      if (itemInputType === 'checkbox') {
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
          checked: isChecked,
          disabled: isLocked,
          onlyInput: true
        });
      }
      return undefined;
    }
    function getSubtitle() {
      if (isAlwaysUnselected) return [lockedUnselectedSubtitle];
      if (!peer) return undefined;
      if (withPeerUsernames) {
        const username = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getMainUsername)(peer);
        if (username) {
          return [`@${username}`];
        }
      }
      if (withStatus) {
        if ((0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.isApiPeerChat)(peer)) {
          return [(0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getGroupStatus)(lang, peer)];
        }
        const userStatus = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectUserStatus)(global, peer.id);
        return [(0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getUserStatus)(lang, peer, userStatus), (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isUserOnline)(peer, userStatus, true) && _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].onlineStatus)];
      }
      if (withPeerTypes) {
        const langKey = (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.getPeerTypeKey)(peer);
        return langKey && [lang(langKey)];
      }
      return undefined;
    }
    const [subtitle, subtitleClassName] = getSubtitle() || [];
    return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_PickerItem__WEBPACK_IMPORTED_MODULE_22__["default"], {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(ITEM_CLASS_NAME, itemClassName),
      title: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_FullNameTitle__WEBPACK_IMPORTED_MODULE_19__["default"], {
        peer: peerOrCategory
      }),
      avatarElement: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        peer: peer || category,
        isSavedMessages: isSelf,
        size: "tiny",
        forceRoundedRect: true
      }),
      subtitle: subtitle,
      subtitleClassName: subtitleClassName,
      disabled: isLocked,
      inactive: isViewOnly,
      ripple: true,
      inputElement: getInputElement(),
      inputPosition: "end",
      onClick: () => handleItemClick(id),
      onDisabledClick: onDisabledClick && (() => onDisabledClick(id, isAlwaysSelected))
    }, id);
  }, [categoriesByType, forceShowSelf, isViewOnly, itemClassName, itemInputType, lang, lockedSelectedIdsSet, lockedUnselectedIdsSet, lockedUnselectedSubtitle, onDisabledClick, selectedCategories, selectedIds, withPeerTypes, withStatus, withPeerUsernames]);
  const beforeChildren = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!categories?.length) return undefined;
    return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
      children: [categoryPlaceholderKey && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
        className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerCategoryTitle,
        children: lang(categoryPlaceholderKey)
      }), categories?.map(category => renderItem(category.type, true)), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
        className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerCategoryTitle,
        children: lang('FilterChats')
      })]
    }, "categories");
  }, [categories, categoryPlaceholderKey, lang, renderItem]);
  const handleScroll = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const scrollTop = e.currentTarget.scrollTop;
    setShowTopShadow(scrollTop > 0);
  }, []);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].container, className),
    children: [isSearchable && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].header, 'custom-scroll'),
      dir: lang.isRtl ? 'rtl' : undefined,
      children: [selectedCategories?.map(category => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_PeerChip__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].peerChip,
        customPeer: categoriesByType[category],
        onClick: handleItemClick,
        clickArg: category,
        canClose: true
      })), lockedSelectedIds?.map((id, i) => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_PeerChip__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].peerChip,
        peerId: id,
        isMinimized: shouldMinimize && i < selectedIds.length - ALWAYS_FULL_ITEMS_COUNT,
        forceShowSelf: forceShowSelf,
        onClick: handleItemClick,
        clickArg: id
      })), unlockedSelectedIds.map((id, i) => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_PeerChip__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].peerChip,
        peerId: id,
        isMinimized: shouldMinimize && i + (lockedSelectedIds?.length || 0) < selectedIds.length - ALWAYS_FULL_ITEMS_COUNT,
        canClose: true,
        onClick: handleItemClick,
        clickArg: id
      })), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_InputText__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: searchInputId,
        ref: inputRef,
        value: filterValue,
        onChange: handleFilterChange,
        placeholder: filterPlaceholder || lang('SelectChat')
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].topShadow, showTopShadow && _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].visibleShadow)
    }), viewportIds?.length ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerList, withDefaultPadding && _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].padded, 'custom-scroll'),
      items: viewportIds,
      itemSelector: `.${ITEM_CLASS_NAME}`,
      beforeChildren: beforeChildren,
      onLoadMore: getMore,
      noScrollRestore: noScrollRestore,
      onScroll: handleScroll,
      children: viewportIds.map(id => renderItem(id))
    }) : !isLoading && viewportIds && !viewportIds.length ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("p", {
      className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].noResults,
      children: notFoundText || 'Sorry, nothing found.'
    }) : (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_ui_Loading__WEBPACK_IMPORTED_MODULE_16__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PeerPicker));

/***/ }),

/***/ "./src/components/common/pickers/PickerItem.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/common/pickers/PickerItem.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PickerItem-module__root","clickable":"PickerItem-module__clickable","separator":"PickerItem-module__separator","disabled":"PickerItem-module__disabled","title":"PickerItem-module__title","subtitle":"PickerItem-module__subtitle","multiline":"PickerItem-module__multiline","input":"PickerItem-module__input","startInput":"PickerItem-module__startInput","endInput":"PickerItem-module__endInput","avatarElement":"PickerItem-module__avatarElement"});

/***/ }),

/***/ "./src/components/common/pickers/PickerItem.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/pickers/PickerItem.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_RippleEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/RippleEffect */ "./src/components/ui/RippleEffect.tsx");
/* harmony import */ var _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PickerItem.module.scss */ "./src/components/common/pickers/PickerItem.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");







const PickerItem = ({
  title,
  subtitle,
  avatarElement,
  inputElement,
  inputPosition = 'start',
  disabled,
  inactive,
  ripple,
  className,
  titleClassName,
  subtitleClassName,
  style,
  onClick,
  onDisabledClick
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const isClickable = !inactive && !disabled;
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    if (inactive) return;
    if (disabled) {
      onDisabledClick?.();
      return;
    }
    onClick?.();
  });
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root, subtitle && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].multiline, disabled && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].disabled, isClickable && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].clickable, avatarElement && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].withAvatar, className),
    onClick: handleClick,
    style: style,
    dir: lang.isRtl ? 'rtl' : undefined,
    role: isClickable ? 'button' : undefined,
    tabIndex: isClickable ? 0 : undefined,
    children: [!disabled && !inactive && ripple && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_RippleEffect__WEBPACK_IMPORTED_MODULE_4__["default"], {}), Boolean(inputElement) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].input, inputPosition === 'end' ? _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].endInput : _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].startInput),
      children: inputElement
    }), Boolean(avatarElement) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].avatarElement,
      children: avatarElement
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title, titleClassName),
      children: title
    }), Boolean(subtitle) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].subtitle, subtitleClassName),
      children: subtitle
    }), !inputElement && _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_0__.IS_IOS && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].separator
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PickerItem);

/***/ }),

/***/ "./src/components/common/pickers/PickerStyles.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/common/pickers/PickerStyles.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"PickerStyles-module__container","header":"PickerStyles-module__header","pickerCategoryTitle":"PickerStyles-module__pickerCategoryTitle","peerChip":"PickerStyles-module__peerChip","pickerList":"PickerStyles-module__pickerList","padded":"PickerStyles-module__padded","noResults":"PickerStyles-module__noResults","onlineStatus":"PickerStyles-module__onlineStatus","topShadow":"PickerStyles-module__topShadow","visibleShadow":"PickerStyles-module__visibleShadow"});

/***/ }),

/***/ "./src/components/common/profile/RadialPatternBackground.module.scss":
/*!***************************************************************************!*\
  !*** ./src/components/common/profile/RadialPatternBackground.module.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"RadialPatternBackground-module__root","canvas":"RadialPatternBackground-module__canvas"});

/***/ }),

/***/ "./src/components/common/profile/RadialPatternBackground.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/common/profile/RadialPatternBackground.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/files */ "./src/util/files.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _hooks_window_useDevicePixelRatio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/window/useDevicePixelRatio */ "./src/hooks/window/useDevicePixelRatio.ts");
/* harmony import */ var _RadialPatternBackground_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RadialPatternBackground.module.scss */ "./src/components/common/profile/RadialPatternBackground.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");












const RINGS = 3;
const BASE_RING_ITEM_COUNT = 8;
const RING_INCREMENT = 0.5;
const CENTER_EMPTINESS = 0.05;
const MAX_RADIUS = 0.4;
const BASE_ICON_SIZE = 20;
const MIN_SIZE = 250;
const RadialPatternBackground = ({
  backgroundColors,
  patternColor,
  patternIcon,
  clearBottomSector,
  className
}) => {
  const containerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const canvasRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [getContainerSize, setContainerSize] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useSignal)({
    width: 0,
    height: 0
  });
  const dpr = (0,_hooks_window_useDevicePixelRatio__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [emojiImage, setEmojiImage] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const previewMediaHash = patternIcon && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerMediaHash)(patternIcon, 'preview');
  const previewUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__["default"])(previewMediaHash);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!previewUrl) return;
    (0,_util_files__WEBPACK_IMPORTED_MODULE_5__.preloadImage)(previewUrl).then(setEmojiImage);
  }, [previewUrl]);
  const patternPositions = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const coordinates = [];
    for (let ring = 1; ring <= RINGS; ring++) {
      const ringItemCount = Math.floor(BASE_RING_ITEM_COUNT * (1 + (ring - 1) * RING_INCREMENT));
      const ringProgress = ring / RINGS;
      const ringRadius = CENTER_EMPTINESS + (MAX_RADIUS - CENTER_EMPTINESS) * ringProgress;
      const angleShift = ring % 2 === 0 ? Math.PI / ringItemCount : 0;
      for (let i = 0; i < ringItemCount; i++) {
        const angle = i / ringItemCount * Math.PI * 2 + angleShift;
        if (clearBottomSector && angle > Math.PI * 0.45 && angle < Math.PI * 0.55) {
          continue;
        }

        // Slightly oval
        const xOffset = ringRadius * 1.71 * Math.cos(angle);
        const yOffset = ringRadius * Math.sin(angle);
        const x = 0.5 + xOffset;
        const y = 0.5 + yOffset;
        const sizeFactor = 1.4 - ringProgress * Math.random();
        coordinates.push({
          x,
          y,
          sizeFactor
        });
      }
    }
    return coordinates;
  }, [clearBottomSector]);
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_8__["default"])(containerRef, entry => {
    setContainerSize({
      width: entry.contentRect.width,
      height: entry.contentRect.height
    });
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const container = containerRef.current;
    if (container) {
      setContainerSize({
        width: container.clientWidth,
        height: container.clientHeight
      });
    }
  }, [setContainerSize]);
  const draw = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    const canvas = canvasRef.current;
    if (!canvas || !emojiImage) return;
    const ctx = canvas.getContext('2d');
    const {
      width,
      height
    } = canvas;
    if (!width || !height) return;
    ctx.save();
    patternPositions.forEach(({
      x,
      y,
      sizeFactor
    }) => {
      const centerShift = (width - Math.max(width, MIN_SIZE * dpr)) / 2; // Shift coords if canvas is smaller than `MIN_SIZE`
      const renderX = x * Math.max(width, MIN_SIZE * dpr) + centerShift;
      const renderY = y * Math.max(height, MIN_SIZE * dpr) + centerShift;
      const size = BASE_ICON_SIZE * dpr * sizeFactor * (centerShift ? 0.8 : 1);
      ctx.drawImage(emojiImage, renderX - size / 2, renderY - size / 2, size, size);
    });
    ctx.restore();
    if (patternColor) {
      ctx.save();
      ctx.fillStyle = patternColor;
      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }
    const radialGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2);
    radialGradient.addColorStop(0, '#FFFFFF77');
    radialGradient.addColorStop(1, '#FFFFFF');

    // Alpha mask
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = radialGradient;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    draw();
  }, [emojiImage]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      width,
      height
    } = getContainerSize();
    const canvas = canvasRef.current;
    if (!width || !height) {
      return;
    }
    const maxSide = Math.max(width, height);
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      canvas.width = maxSide * dpr;
      canvas.height = maxSide * dpr;
      draw();
    });
  }, [getContainerSize, dpr]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    ref: containerRef,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_RadialPatternBackground_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].root, className),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(`--_bg-1: ${backgroundColors[0]}`, `--_bg-2: ${backgroundColors[1] || backgroundColors[0]}`),
    children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("canvas", {
      className: _RadialPatternBackground_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].canvas,
      ref: canvasRef
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(RadialPatternBackground));

/***/ }),

/***/ "./src/components/common/reactions/CustomEmojiEffect.module.scss":
/*!***********************************************************************!*\
  !*** ./src/components/common/reactions/CustomEmojiEffect.module.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"CustomEmojiEffect-module__root","particle":"CustomEmojiEffect-module__particle"});

/***/ }),

/***/ "./src/components/common/reactions/CustomEmojiEffect.tsx":
/*!***************************************************************!*\
  !*** ./src/components/common/reactions/CustomEmojiEffect.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _CustomEmoji__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _CustomEmojiEffect_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomEmojiEffect.module.scss */ "./src/components/common/reactions/CustomEmojiEffect.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");









const EFFECT_AMOUNT = 7;
const CustomEmojiEffect = ({
  reaction,
  isLottie,
  className,
  particleSize,
  onEnded
}) => {
  const stickerHash = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getStickerHashById)(reaction.documentId, true);
  const previewMediaData = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_5__["default"])(!isLottie ? stickerHash : undefined);
  const paths = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__.IS_OFFSET_PATH_SUPPORTED) return [];
    return Array.from({
      length: EFFECT_AMOUNT
    }).map(() => generateRandomDropPath(particleSize));
  }, [particleSize]);
  if (!previewMediaData && !isLottie) {
    return undefined;
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_CustomEmojiEffect_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root, className),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(Boolean(particleSize) && `--particle-size: ${particleSize}px`),
    children: paths.map((path, i) => {
      const style = `--offset-path: path('${path}');`;
      if (isLottie) {
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_CustomEmoji__WEBPACK_IMPORTED_MODULE_6__["default"], {
          documentId: reaction.documentId,
          className: _CustomEmojiEffect_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].particle,
          style: style,
          withSharedAnimation: true,
          size: particleSize,
          onAnimationEnd: i === 0 ? onEnded : undefined
        });
      }
      return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        src: previewMediaData,
        alt: "",
        className: _CustomEmojiEffect_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].particle,
        style: style,
        draggable: false,
        onAnimationEnd: i === 0 ? onEnded : undefined
      });
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(CustomEmojiEffect));
function generateRandomDropPath(particleSize = 20) {
  const x = (particleSize / 2 + Math.random() * particleSize * 3) * (Math.random() > 0.5 ? 1 : -1);
  const y = particleSize + Math.random() * particleSize * 4;
  return `M 0 0 C 0 0 ${x} ${-y - particleSize} ${x} ${y}`;
}

/***/ }),

/***/ "./src/components/common/reactions/PaidReactionEmoji.tsx":
/*!***************************************************************!*\
  !*** ./src/components/common/reactions/PaidReactionEmoji.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useEffectWithPrevDeps */ "./src/hooks/useEffectWithPrevDeps.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");
/* harmony import */ var _AnimatedIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _icons_StarIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ReactionAnimatedEmoji.module.scss */ "./src/components/common/reactions/ReactionAnimatedEmoji.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");
















const ICON_SIZE = 1.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_7__.REM;
const EFFECT_SIZE = 6.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_7__.REM;
const MAX_EFFECT_COUNT = _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.IS_IOS || _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.IS_ANDROID ? 2 : 5;
const QUALITY = _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.IS_IOS || _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.IS_ANDROID ? 2 : 3;
const PaidReactionEmoji = ({
  containerId,
  reaction,
  className,
  size = ICON_SIZE,
  effectSize = EFFECT_SIZE,
  activeReactions,
  localAmount,
  withEffects,
  observeIntersection
}) => {
  const {
    stopActiveReaction
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const effectRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [effectsIds, setEffectsIds] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const isIntersecting = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_9__.useIsIntersecting)(ref, observeIntersection);
  const activeReaction = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => activeReactions?.find(active => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isSameReaction)(active, reaction)), [activeReactions, reaction]);
  const shouldPlayEffect = Boolean(withEffects && activeReaction);
  const canAddMoreEffects = effectsIds.length < MAX_EFFECT_COUNT;
  (0,_hooks_useEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__["default"])(([prevLocalAmount]) => {
    if (!shouldPlayEffect) {
      setEffectsIds([]);
      return;
    }
    if (!localAmount || localAmount <= (prevLocalAmount || 0)) {
      return;
    }
    if (canAddMoreEffects) {
      setEffectsIds(prev => [...prev, Date.now()]);
    }
  }, [localAmount, canAddMoreEffects, shouldPlayEffect]);
  const {
    shouldRender: shouldRenderEffect
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_11__["default"])({
    ref: effectRef,
    noMountTransition: true,
    isOpen: shouldPlayEffect,
    className: 'slow',
    withShouldRender: true
  });
  const handleEnded = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    const newEffectsIds = effectsIds.slice(1);
    setEffectsIds(newEffectsIds);
    if (!newEffectsIds.length) {
      stopActiveReaction({
        containerId,
        reaction
      });
    }
  });
  const rootClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].root, shouldRenderEffect && _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].animating, className);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: rootClassName,
    ref: ref,
    teactFastList: true,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_icons_StarIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
      type: "gold",
      size: "adaptive",
      style: `width: ${size}px; height: ${size}px`
    }, "icon"), shouldRenderEffect && effectsIds.map(id => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_AnimatedIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      ref: effectRef,
      className: _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].effect,
      size: effectSize,
      tgsUrl: _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_6__.LOCAL_TGS_URLS.StarReactionEffect,
      play: isIntersecting,
      noLoop: true,
      forceAlways: true,
      nonInteractive: true,
      quality: QUALITY,
      onEnded: handleEnded
    }, id))]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  containerId
}) => {
  const {
    activeReactions
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectTabState)(global);
  const withEffects = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPerformanceSettingsValue)(global, 'reactionEffects');
  return {
    activeReactions: activeReactions?.[containerId],
    withEffects
  };
})(PaidReactionEmoji)));

/***/ }),

/***/ "./src/components/common/reactions/ReactionAnimatedEmoji.module.scss":
/*!***************************************************************************!*\
  !*** ./src/components/common/reactions/ReactionAnimatedEmoji.module.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"ReactionAnimatedEmoji-module__root","animated-icon":"ReactionAnimatedEmoji-module__animated-icon","animatedIcon":"ReactionAnimatedEmoji-module__animated-icon","effect":"ReactionAnimatedEmoji-module__effect","animating":"ReactionAnimatedEmoji-module__animating","withEffectOnly":"ReactionAnimatedEmoji-module__withEffectOnly"});

/***/ }),

/***/ "./src/components/common/reactions/ReactionAnimatedEmoji.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/common/reactions/ReactionAnimatedEmoji.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/math */ "./src/util/math.ts");
/* harmony import */ var _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useShowTransitionDeprecated */ "./src/hooks/useShowTransitionDeprecated.ts");
/* harmony import */ var _hooks_useCustomEmoji__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useCustomEmoji */ "./src/components/common/hooks/useCustomEmoji.ts");
/* harmony import */ var _AnimatedSticker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../AnimatedSticker */ "./src/components/common/AnimatedSticker.tsx");
/* harmony import */ var _CustomEmoji__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _CustomEmojiEffect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CustomEmojiEffect */ "./src/components/common/reactions/CustomEmojiEffect.tsx");
/* harmony import */ var _ReactionStaticEmoji__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReactionStaticEmoji */ "./src/components/common/reactions/ReactionStaticEmoji.tsx");
/* harmony import */ var _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReactionAnimatedEmoji.module.scss */ "./src/components/common/reactions/ReactionAnimatedEmoji.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");



















const ICON_SIZE = 1.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__.REM;
const CENTER_ICON_MULTIPLIER = 1.9;
const EFFECT_SIZE = 6.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__.REM;
const CUSTOM_EMOJI_EFFECT_MULTIPLIER = 0.5;
const MIN_PARTICLE_SIZE = _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__.REM;
const ReactionAnimatedEmoji = ({
  containerId,
  reaction,
  className,
  size = ICON_SIZE,
  effectSize = EFFECT_SIZE,
  activeReactions,
  availableReactions,
  genericEffects,
  withEffects,
  withEffectOnly,
  shouldPause,
  shouldLoop,
  loopLimit,
  observeIntersection
}) => {
  const {
    stopActiveReaction
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isCustom = reaction.type === 'custom';
  const availableReaction = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => availableReactions?.find(r => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isSameReaction)(r.reaction, reaction)), [availableReactions, reaction]);
  const centerIconId = availableReaction?.centerIcon?.id;
  const {
    customEmoji
  } = (0,_hooks_useCustomEmoji__WEBPACK_IMPORTED_MODULE_12__["default"])(isCustom ? reaction.documentId : undefined);
  const assignedEffectId = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isCustom) return availableReaction?.aroundAnimation?.id;
    if (!customEmoji) return undefined;
    const assignedId = availableReactions?.find(available => available.reaction.emoticon === customEmoji.emoji)?.aroundAnimation?.id;
    return assignedId;
  }, [availableReaction, availableReactions, customEmoji, isCustom]);
  const effectId = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (assignedEffectId) {
      return assignedEffectId;
    }
    if (!genericEffects?.stickers) {
      return undefined;
    }
    const {
      stickers
    } = genericEffects;
    const randomIndex = Math.floor(Math.random() * stickers.length);
    return stickers[randomIndex].id;
  }, [assignedEffectId, genericEffects]);
  const isIntersecting = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_8__.useIsIntersecting)(ref, observeIntersection);
  const mediaHashCenterIcon = centerIconId && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerHashById)(centerIconId);
  const mediaHashEffect = effectId && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerHashById)(effectId);
  const mediaDataCenterIcon = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_10__["default"])(mediaHashCenterIcon);
  const mediaDataEffect = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_10__["default"])(mediaHashEffect);
  const activeReaction = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => activeReactions?.find(active => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isSameReaction)(active, reaction)), [activeReactions, reaction]);
  const shouldPlayEffect = Boolean(withEffects && activeReaction && (isCustom || mediaDataCenterIcon) && mediaDataEffect);
  const shouldPlayCenter = isIntersecting && (shouldPlayEffect && !withEffectOnly || shouldLoop);
  const {
    shouldRender: shouldRenderEffect,
    transitionClassNames: animationClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_11__["default"])(shouldPlayEffect, undefined, true, 'slow');
  const {
    shouldRender: shouldRenderCenter,
    transitionClassNames: centerAnimationClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_11__["default"])(shouldPlayCenter, undefined, true, 'slow');
  const handleEnded = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    stopActiveReaction({
      containerId,
      reaction
    });
  });
  const [isAnimationLoaded, markAnimationLoaded, unmarkAnimationLoaded] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const shouldShowStatic = !isCustom && (!shouldPlayCenter || !isAnimationLoaded);
  const {
    shouldRender: shouldRenderStatic,
    transitionClassNames: staticClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_11__["default"])(shouldShowStatic, undefined, true);
  const rootClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].root, shouldRenderEffect && _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].animating, withEffectOnly && _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].withEffectOnly, className);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    className: rootClassName,
    ref: ref,
    children: [!withEffectOnly && shouldRenderStatic && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ReactionStaticEmoji__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: staticClassNames,
      reaction: reaction,
      availableReactions: availableReactions,
      size: size,
      observeIntersection: observeIntersection
    }), !withEffectOnly && isCustom && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_CustomEmoji__WEBPACK_IMPORTED_MODULE_14__["default"], {
      documentId: reaction.documentId,
      className: _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].customEmoji,
      size: size,
      noPlay: shouldPause,
      noVideoOnMobile: true,
      loopLimit: loopLimit,
      observeIntersectionForPlaying: observeIntersection,
      forceAlways: true
    }), shouldRenderCenter && !isCustom && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_AnimatedSticker__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].animatedIcon, centerAnimationClassNames),
      size: (0,_util_math__WEBPACK_IMPORTED_MODULE_5__.roundToNearestEven)(size * CENTER_ICON_MULTIPLIER),
      tgsUrl: mediaDataCenterIcon,
      play: isIntersecting && !shouldPause,
      noLoop: !shouldLoop,
      onLoad: markAnimationLoaded,
      onEnded: unmarkAnimationLoaded,
      forceAlways: true
    }, `${centerIconId}-${size}`), shouldRenderEffect && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_AnimatedSticker__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].effect, animationClassNames),
        size: effectSize,
        tgsUrl: mediaDataEffect,
        play: isIntersecting,
        noLoop: true,
        onEnded: handleEnded,
        forceAlways: true
      }, `${effectId}-${effectSize}`), isCustom && !assignedEffectId && isIntersecting && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_CustomEmojiEffect__WEBPACK_IMPORTED_MODULE_15__["default"], {
        reaction: reaction,
        className: animationClassNames,
        particleSize: Math.max(size * CUSTOM_EMOJI_EFFECT_MULTIPLIER, MIN_PARTICLE_SIZE),
        onEnded: handleEnded
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  containerId
}) => {
  const {
    genericEmojiEffects,
    reactions
  } = global;
  const {
    activeReactions
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectTabState)(global);
  const withEffects = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPerformanceSettingsValue)(global, 'reactionEffects');
  return {
    activeReactions: activeReactions?.[containerId],
    availableReactions: reactions.availableReactions,
    genericEffects: genericEmojiEffects,
    withEffects
  };
})(ReactionAnimatedEmoji)));

/***/ }),

/***/ "./src/components/common/reactions/ReactionStaticEmoji.scss":
/*!******************************************************************!*\
  !*** ./src/components/common/reactions/ReactionStaticEmoji.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/common/reactions/ReactionStaticEmoji.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/common/reactions/ReactionStaticEmoji.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useMediaTransitionDeprecated */ "./src/hooks/useMediaTransitionDeprecated.ts");
/* harmony import */ var _CustomEmoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ReactionStaticEmoji_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReactionStaticEmoji.scss */ "./src/components/common/reactions/ReactionStaticEmoji.scss");
/* harmony import */ var _assets_blank_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/blank.png */ "./src/assets/blank.png");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");










const ReactionStaticEmoji = ({
  reaction,
  availableReactions,
  className,
  size,
  withIconHeart,
  observeIntersection
}) => {
  const availableReaction = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => availableReactions?.find(available => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.isSameReaction)(available.reaction, reaction)), [availableReactions, reaction]);
  const staticIconId = availableReaction?.staticIcon?.id;
  const mediaHash = staticIconId ? `document${staticIconId}` : undefined;
  const mediaData = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaHash);
  const transitionClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_4__["default"])(mediaData);
  const shouldApplySizeFix = reaction.type === 'emoji' && reaction.emoticon === '🦄';
  const shouldReplaceWithHeartIcon = withIconHeart && reaction.type === 'emoji' && reaction.emoticon === '❤';
  if (reaction.type === 'custom') {
    return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_CustomEmoji__WEBPACK_IMPORTED_MODULE_5__["default"], {
      documentId: reaction.documentId,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('ReactionStaticEmoji', className),
      size: size,
      observeIntersectionForPlaying: observeIntersection
    });
  }
  if (shouldReplaceWithHeartIcon) {
    return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "heart",
      className: "ReactionStaticEmoji",
      style: `font-size: ${size}px; width: ${size}px`
    });
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('ReactionStaticEmoji', shouldApplySizeFix && 'with-unicorn-fix', transitionClassNames, className),
    style: size ? `width: ${size}px; height: ${size}px` : undefined,
    src: mediaData || _assets_blank_png__WEBPACK_IMPORTED_MODULE_8__,
    alt: availableReaction?.title,
    draggable: false
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ReactionStaticEmoji));

/***/ }),

/***/ "./src/components/middle/message/ContextMenuContainer.tsx":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/ContextMenuContainer.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_entities_ids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/entities/ids */ "./src/util/entities/ids.ts");
/* harmony import */ var _helpers_getSelectionAsFormattedText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/getSelectionAsFormattedText */ "./src/components/middle/message/helpers/getSelectionAsFormattedText.ts");
/* harmony import */ var _helpers_isSelectionRangeInsideMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/isSelectionRangeInsideMessage */ "./src/components/middle/message/helpers/isSelectionRangeInsideMessage.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_useSchedule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/useSchedule */ "./src/hooks/useSchedule.tsx");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");
/* harmony import */ var _common_PinMessageModal_async__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/PinMessageModal.async */ "./src/components/common/PinMessageModal.async.tsx");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _MessageContextMenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./MessageContextMenu */ "./src/components/middle/message/MessageContextMenu.tsx");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");




















const selection = window.getSelection();
const UNQUOTABLE_OFFSET = -1;
const ContextMenuContainer = ({
  threadId,
  availableReactions,
  topReactions,
  defaultTagReactions,
  isOpen,
  messageListType,
  message,
  customEmojiSetsInfo,
  customEmojiSets,
  album,
  poll,
  story,
  anchor,
  targetHref,
  noOptions,
  canSendNow,
  hasFullInfo,
  canReschedule,
  canReply,
  canPin,
  repliesThreadInfo,
  canUnpin,
  canDelete,
  canShowReactionsCount,
  chat,
  canReport,
  canShowReactionList,
  canEdit,
  enabledReactions,
  reactionsLimit,
  isPrivate,
  isCurrentUserPremium,
  canForward,
  canBuyPremium,
  canFaveSticker,
  canUnfaveSticker,
  canCopy,
  canCopyLink,
  canSelect,
  canDownload,
  canSaveGif,
  canRevote,
  canClosePoll,
  canPlayAnimatedEmojis,
  canLoadReadDate,
  shouldRenderShowWhen,
  activeDownloads,
  noReplies,
  canShowSeenBy,
  canScheduleUntilOnline,
  canTranslate,
  isMessageTranslated,
  canShowOriginal,
  canSelectLanguage,
  isReactionPickerOpen,
  isInSavedMessages,
  canReplyInChat,
  isWithPaidReaction,
  userFullName,
  canGift,
  className,
  onClose,
  onCloseAnimationEnd
}) => {
  const {
    openThread,
    updateDraftReplyInfo,
    setEditingId,
    pinMessage,
    openForwardMenu,
    openReplyMenu,
    faveSticker,
    unfaveSticker,
    toggleMessageSelection,
    sendScheduledMessages,
    rescheduleMessage,
    downloadMedia,
    cancelMediaDownload,
    loadSeenBy,
    openSeenByModal,
    openReactorListModal,
    loadFullChat,
    loadReactors,
    copyMessagesByIds,
    saveGif,
    loadStickers,
    cancelPollVote,
    closePoll,
    toggleReaction,
    requestMessageTranslation,
    showOriginalMessage,
    openChatLanguageModal,
    openMessageReactionPicker,
    openPremiumModal,
    loadOutboxReadDate,
    copyMessageLink,
    openDeleteMessageModal,
    addLocalPaidReaction,
    openPaidReactionModal,
    reportMessages
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const {
    ref: containerRef
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_15__["default"])({
    isOpen,
    onCloseAnimationEnd,
    className: false
  });
  const [isMenuOpen, setIsMenuOpen] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isPinModalOpen, setIsPinModalOpen] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isClosePollDialogOpen, openClosePollDialog, closeClosePollDialog] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [selectionQuoteOffset, setSelectionQuoteOffset] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(UNQUOTABLE_OFFSET);
  const [requestCalendar, calendar] = (0,_hooks_useSchedule__WEBPACK_IMPORTED_MODULE_14__["default"])(canScheduleUntilOnline, onClose, message.date);

  // `undefined` indicates that emoji are present and loading
  const hasCustomEmoji = customEmojiSetsInfo === undefined || Boolean(customEmojiSetsInfo.length);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (canShowSeenBy && isOpen) {
      loadSeenBy({
        chatId: message.chatId,
        messageId: message.id
      });
    }
  }, [loadSeenBy, isOpen, message.chatId, message.id, canShowSeenBy]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (canLoadReadDate && isOpen) {
      loadOutboxReadDate({
        chatId: message.chatId,
        messageId: message.id
      });
    }
  }, [canLoadReadDate, isOpen, message.chatId, message.id, message.readDate]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (canShowReactionsCount && isOpen) {
      loadReactors({
        chatId: message.chatId,
        messageId: message.id
      });
    }
  }, [canShowReactionsCount, isOpen, loadReactors, message.chatId, message.id]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (customEmojiSetsInfo?.length && customEmojiSets?.length !== customEmojiSetsInfo.length) {
      customEmojiSetsInfo.forEach(set => {
        loadStickers({
          stickerSetInfo: set
        });
      });
    }
  }, [customEmojiSetsInfo, customEmojiSets, loadStickers]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!hasFullInfo && !isPrivate && isOpen) {
      loadFullChat({
        chatId: message.chatId
      });
    }
  }, [hasFullInfo, isOpen, isPrivate, loadFullChat, message.chatId]);
  const seenByRecentPeers = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // No need for expensive global updates on chats or users, so we avoid them
    const chatsById = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().chats.byId;
    const usersById = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().users.byId;
    if (message.reactions?.recentReactions?.length) {
      const uniqueReactors = new Set(message.reactions?.recentReactions?.map(({
        peerId
      }) => usersById[peerId] || chatsById[peerId]));
      return Array.from(uniqueReactors).filter(Boolean).slice(0, _config__WEBPACK_IMPORTED_MODULE_3__.PREVIEW_AVATAR_COUNT);
    }
    if (!message.seenByDates) {
      return undefined;
    }
    return Object.keys(message.seenByDates).slice(0, _config__WEBPACK_IMPORTED_MODULE_3__.PREVIEW_AVATAR_COUNT).map(id => usersById[id] || chatsById[id]).filter(Boolean);
  }, [message.reactions?.recentReactions, message.seenByDates]);
  const isDownloading = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (album) {
      return album.messages.some(msg => {
        const downloadableMedia = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getMessageDownloadableMedia)(msg);
        if (!downloadableMedia) return false;
        return (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getIsDownloading)(activeDownloads, downloadableMedia);
      });
    }
    const downloadableMedia = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getMessageDownloadableMedia)(message);
    if (!downloadableMedia) return false;
    return (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getIsDownloading)(activeDownloads, downloadableMedia);
  }, [activeDownloads, album, message]);
  const selectionRange = canReply && selection?.rangeCount ? selection.getRangeAt(0) : undefined;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isMessageTranslated) {
      setSelectionQuoteOffset(UNQUOTABLE_OFFSET);
      return;
    }
    const isMessageTextSelected = selectionRange && !selectionRange.collapsed && Boolean(message.content.text?.text) && (0,_helpers_isSelectionRangeInsideMessage__WEBPACK_IMPORTED_MODULE_10__.isSelectionRangeInsideMessage)(selectionRange);
    if (!isMessageTextSelected) {
      setSelectionQuoteOffset(UNQUOTABLE_OFFSET);
      return;
    }
    const selectionText = (0,_helpers_getSelectionAsFormattedText__WEBPACK_IMPORTED_MODULE_9__.getSelectionAsFormattedText)(selectionRange);
    const messageText = message.content.text.text.replace(/\u00A0/g, ' ');
    const canQuote = selectionText.text.trim().length > 0 && messageText.includes(selectionText.text);
    if (!canQuote) {
      setSelectionQuoteOffset(UNQUOTABLE_OFFSET);
      return;
    }
    setSelectionQuoteOffset(selectionRange.startOffset);
  }, [selectionRange, selectionRange?.collapsed, selectionRange?.startOffset, selectionRange?.endOffset, isMessageTranslated, message.content.text]);
  const closeMenu = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    setIsMenuOpen(false);
    onClose();
  });
  const handleDelete = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    setIsMenuOpen(false);
    closeMenu();
    const messageIds = album?.messages ? album.messages.map(({
      id
    }) => id) : [message.id];
    openDeleteMessageModal({
      chatId: message.chatId,
      messageIds,
      isSchedule: messageListType === 'scheduled'
    });
  });
  const closePinModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    setIsPinModalOpen(false);
    onClose();
  });
  const handleReply = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    const quoteText = selectionQuoteOffset !== UNQUOTABLE_OFFSET && selectionRange ? (0,_helpers_getSelectionAsFormattedText__WEBPACK_IMPORTED_MODULE_9__.getSelectionAsFormattedText)(selectionRange) : undefined;
    if (!canReplyInChat) {
      openReplyMenu({
        fromChatId: message.chatId,
        messageId: message.id,
        quoteText,
        quoteOffset: selectionQuoteOffset
      });
    } else {
      updateDraftReplyInfo({
        replyToMsgId: message.id,
        quoteText,
        quoteOffset: selectionQuoteOffset,
        replyToPeerId: undefined
      });
    }
    closeMenu();
  });
  const handleOpenThread = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    openThread({
      chatId: message.chatId,
      threadId: message.id
    });
    closeMenu();
  });
  const handleEdit = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    setEditingId({
      messageId: message.id
    });
    closeMenu();
  });
  const handlePin = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    setIsMenuOpen(false);
    setIsPinModalOpen(true);
  });
  const handleUnpin = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    pinMessage({
      chatId: message.chatId,
      messageId: message.id,
      isUnpin: true
    });
    closeMenu();
  });
  const handleForward = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    closeMenu();
    if (album?.messages) {
      const messageIds = album.messages.map(({
        id
      }) => id);
      openForwardMenu({
        fromChatId: message.chatId,
        messageIds
      });
    } else {
      openForwardMenu({
        fromChatId: message.chatId,
        messageIds: [message.id]
      });
    }
  });
  const handleFaveSticker = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    closeMenu();
    faveSticker({
      sticker: message.content.sticker
    });
  });
  const handleUnfaveSticker = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    closeMenu();
    unfaveSticker({
      sticker: message.content.sticker
    });
  });
  const handleCancelVote = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    closeMenu();
    cancelPollVote({
      chatId: message.chatId,
      messageId: message.id
    });
  });
  const handlePollClose = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    closeMenu();
    closePoll({
      chatId: message.chatId,
      messageId: message.id
    });
  });
  const handleSelectMessage = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    const params = album?.messages ? {
      messageId: message.id,
      childMessageIds: album.messages.map(({
        id
      }) => id),
      withShift: false
    } : {
      messageId: message.id,
      withShift: false
    };
    toggleMessageSelection(params);
    closeMenu();
  });
  const handleScheduledMessageSend = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    sendScheduledMessages({
      chatId: message.chatId,
      id: message.id
    });
    closeMenu();
  });
  const handleRescheduleMessage = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(scheduledAt => {
    rescheduleMessage({
      chatId: message.chatId,
      messageId: message.id,
      scheduledAt
    });
    onClose();
  });
  const handleOpenCalendar = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    setIsMenuOpen(false);
    requestCalendar(handleRescheduleMessage);
  });
  const handleOpenSeenByModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    closeMenu();
    openSeenByModal({
      chatId: message.chatId,
      messageId: message.id
    });
  });
  const handleOpenReactorListModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    closeMenu();
    openReactorListModal({
      chatId: message.chatId,
      messageId: message.id
    });
  });
  const handleCopyMessages = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(messageIds => {
    copyMessagesByIds({
      messageIds
    });
    closeMenu();
  });
  const handleCopyLink = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    copyMessageLink({
      chatId: message.chatId,
      messageId: message.id,
      shouldIncludeThread: threadId !== _api_types__WEBPACK_IMPORTED_MODULE_2__.MAIN_THREAD_ID,
      shouldIncludeGrouped: true // TODO: Provide correct value when ability to target specific message is added
    });
    closeMenu();
  });
  const handleCopyNumber = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_7__.copyTextToClipboard)(message.content.contact.phoneNumber);
    closeMenu();
  });
  const handleDownloadClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    (album?.messages || [message]).forEach(msg => {
      const downloadableMedia = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getMessageDownloadableMedia)(msg);
      if (!downloadableMedia) return;
      if (isDownloading) {
        cancelMediaDownload({
          media: downloadableMedia
        });
      } else {
        downloadMedia({
          media: downloadableMedia,
          originMessage: msg
        });
      }
    });
    closeMenu();
  });
  const handleSaveGif = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    const video = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getMessageVideo)(message);
    saveGif({
      gif: video
    });
    closeMenu();
  });
  const handleToggleReaction = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(reaction => {
    if (isInSavedMessages && !isCurrentUserPremium) {
      openPremiumModal({
        initialSection: 'saved_tags'
      });
    } else {
      toggleReaction({
        chatId: message.chatId,
        messageId: message.id,
        reaction,
        shouldAddToRecent: true
      });
    }
    closeMenu();
  });
  const handleSendPaidReaction = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    addLocalPaidReaction({
      chatId: message.chatId,
      messageId: message.id,
      count: 1
    });
    closeMenu();
  });
  const handlePaidReactionModalOpen = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    openPaidReactionModal({
      chatId: message.chatId,
      messageId: message.id
    });
    closeMenu();
  });
  const handleReactionPickerOpen = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(position => {
    openMessageReactionPicker({
      chatId: message.chatId,
      messageId: message.id,
      position
    });
  });
  const handleTranslate = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    requestMessageTranslation({
      chatId: message.chatId,
      id: message.id
    });
    closeMenu();
  });
  const handleShowOriginal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    showOriginalMessage({
      chatId: message.chatId,
      id: message.id
    });
    closeMenu();
  });
  const handleSelectLanguage = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    openChatLanguageModal({
      chatId: message.chatId,
      messageId: message.id
    });
    closeMenu();
  });
  const reportMessageIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (album ? album.messages : [message]).map(({
    id
  }) => id), [album, message]);
  const handleReport = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    if (!chat) return;
    setIsMenuOpen(false);
    onClose();
    reportMessages({
      chatId: chat.id,
      messageIds: reportMessageIds
    });
  });
  if (noOptions) {
    closeMenu();
    return undefined;
  }
  const scheduledMaxDate = new Date();
  scheduledMaxDate.setFullYear(scheduledMaxDate.getFullYear() + 1);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
    ref: containerRef,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('ContextMenuContainer', className),
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_MessageContextMenu__WEBPACK_IMPORTED_MODULE_18__["default"], {
      isReactionPickerOpen: isReactionPickerOpen,
      availableReactions: availableReactions,
      topReactions: topReactions,
      defaultTagReactions: defaultTagReactions,
      isWithPaidReaction: isWithPaidReaction,
      message: message,
      isPrivate: isPrivate,
      isCurrentUserPremium: isCurrentUserPremium,
      canBuyPremium: canBuyPremium,
      isOpen: isMenuOpen,
      enabledReactions: enabledReactions,
      reactionsLimit: reactionsLimit,
      anchor: anchor,
      targetHref: targetHref,
      canShowReactionsCount: canShowReactionsCount,
      canShowReactionList: canShowReactionList,
      canSendNow: canSendNow,
      canReschedule: canReschedule,
      canReply: canReply,
      canQuote: selectionQuoteOffset !== UNQUOTABLE_OFFSET,
      canDelete: canDelete,
      canPin: canPin,
      canReport: canReport,
      repliesThreadInfo: repliesThreadInfo,
      canUnpin: canUnpin,
      canEdit: canEdit,
      canForward: canForward,
      canFaveSticker: canFaveSticker,
      canUnfaveSticker: canUnfaveSticker,
      canCopy: canCopy,
      canCopyLink: canCopyLink,
      canSelect: canSelect,
      canDownload: canDownload,
      canSaveGif: canSaveGif,
      canRevote: canRevote,
      canClosePoll: canClosePoll,
      canShowSeenBy: canShowSeenBy,
      canTranslate: canTranslate,
      canShowOriginal: canShowOriginal,
      canSelectLanguage: canSelectLanguage,
      canPlayAnimatedEmojis: canPlayAnimatedEmojis,
      shouldRenderShowWhen: shouldRenderShowWhen,
      canLoadReadDate: canLoadReadDate,
      hasCustomEmoji: hasCustomEmoji,
      customEmojiSets: customEmojiSets,
      isDownloading: isDownloading,
      seenByRecentPeers: seenByRecentPeers,
      isInSavedMessages: isInSavedMessages,
      noReplies: noReplies,
      poll: poll,
      story: story,
      onOpenThread: handleOpenThread,
      onReply: handleReply,
      onEdit: handleEdit,
      onPin: handlePin,
      onUnpin: handleUnpin,
      onForward: handleForward,
      onDelete: handleDelete,
      onReport: handleReport,
      onFaveSticker: handleFaveSticker,
      onUnfaveSticker: handleUnfaveSticker,
      onSelect: handleSelectMessage,
      onSend: handleScheduledMessageSend,
      onReschedule: handleOpenCalendar,
      onClose: closeMenu,
      onCopyLink: handleCopyLink,
      onCopyMessages: handleCopyMessages,
      onCopyNumber: handleCopyNumber,
      onDownload: handleDownloadClick,
      onSaveGif: handleSaveGif,
      onCancelVote: handleCancelVote,
      onClosePoll: openClosePollDialog,
      onShowSeenBy: handleOpenSeenByModal,
      onToggleReaction: handleToggleReaction,
      onSendPaidReaction: handleSendPaidReaction,
      onShowPaidReactionModal: handlePaidReactionModalOpen,
      onShowReactors: handleOpenReactorListModal,
      onReactionPickerOpen: handleReactionPickerOpen,
      onTranslate: handleTranslate,
      onShowOriginal: handleShowOriginal,
      onSelectLanguage: handleSelectLanguage,
      userFullName: userFullName,
      canGift: canGift
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_common_PinMessageModal_async__WEBPACK_IMPORTED_MODULE_16__["default"], {
      isOpen: isPinModalOpen,
      messageId: message.id,
      chatId: message.chatId,
      onClose: closePinModal
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_17__["default"], {
      isOpen: isClosePollDialogOpen,
      onClose: closeClosePollDialog,
      text: lang('lng_polls_stop_warning'),
      confirmLabel: lang('lng_polls_stop_sure'),
      confirmHandler: handlePollClose
    }), canReschedule && calendar]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  messageListType,
  detectedLanguage
}) => {
  const {
    threadId
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCurrentMessageList)(global) || {};
  const {
    defaultTags,
    topReactions,
    availableReactions
  } = global.reactions;
  const activeDownloads = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectActiveDownloads)(global);
  const chat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectChat)(global, message.chatId);
  const isPrivate = chat && (0,_util_entities_ids__WEBPACK_IMPORTED_MODULE_8__.isUserId)(chat.id);
  const chatFullInfo = !isPrivate ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectChatFullInfo)(global, message.chatId) : undefined;
  const user = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectUser)(global, message.chatId);
  const userFullName = user && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getUserFullName)(user);
  const {
    seenByExpiresAt,
    seenByMaxChatMembers,
    maxUniqueReactions,
    readDateExpiresAt
  } = global.appConfig || {};
  const reactionsLimit = chatFullInfo?.reactionsLimit || maxUniqueReactions;
  const {
    noOptions,
    canReplyGlobally,
    canPin,
    canUnpin,
    canDelete,
    canReport,
    canEdit,
    canFaveSticker,
    canUnfaveSticker,
    canCopy,
    canCopyLink,
    canSelect,
    canDownload,
    canSaveGif,
    canRevote,
    canClosePoll
  } = threadId && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectAllowedMessageActionsSlow)(global, message, threadId) || {};
  const canForward = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanForwardMessage)(global, message);
  const userStatus = isPrivate ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectUserStatus)(global, chat.id) : undefined;
  const isOwn = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isOwnMessage)(message);
  const chatBot = chat && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectBot)(global, chat.id);
  const isBot = Boolean(chatBot);
  const isMessageUnread = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsMessageUnread)(global, message);
  const canLoadReadDate = Boolean(isPrivate && isOwn && !isBot && !isMessageUnread && readDateExpiresAt && message.date > Date.now() / 1000 - readDateExpiresAt && !userStatus?.isReadDateRestricted && messageListType !== 'scheduled');
  const shouldRenderShowWhen = Boolean(canLoadReadDate && isPrivate && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectUserStatus)(global, chat.id)?.isReadDateRestrictedByMe);
  const isPinned = messageListType === 'pinned';
  const isScheduled = messageListType === 'scheduled';
  const isChannel = chat && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isChatChannel)(chat);
  const threadInfo = threadId && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectThreadInfo)(global, message.chatId, threadId);
  const isMessageThread = Boolean(threadInfo && !threadInfo?.isCommentsInfo && threadInfo?.fromChannelId);
  const topic = threadId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectTopic)(global, message.chatId, threadId) : undefined;
  const canSendText = chat && !(0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isUserRightBanned)(chat, 'sendPlain', chatFullInfo);
  const canReplyInChat = chat && threadId ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getCanPostInChat)(chat, topic, isMessageThread, chatFullInfo) && canSendText : false;
  const isLocal = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isMessageLocal)(message);
  const hasTtl = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.hasMessageTtl)(message);
  const canShowSeenBy = Boolean(!isLocal && chat && !isMessageUnread && seenByMaxChatMembers && seenByExpiresAt && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isChatGroup)(chat) && isOwn && !isScheduled && chat.membersCount && chat.membersCount <= seenByMaxChatMembers && message.date > Date.now() / 1000 - seenByExpiresAt);
  const isAction = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isActionMessage)(message);
  const canShowReactionsCount = !isLocal && !isChannel && !isScheduled && !isAction && !isPrivate && message.reactions && !(0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.areReactionsEmpty)(message.reactions) && message.reactions.canSeeList;
  const isProtected = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsMessageProtected)(global, message);
  const canCopyNumber = Boolean(message.content.contact);
  const isCurrentUserPremium = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsCurrentUserPremium)(global);
  const customEmojiSetsInfo = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectMessageCustomEmojiSets)(global, message);
  const customEmojiSetsNotFiltered = customEmojiSetsInfo?.map(set => (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectStickerSet)(global, set));
  const customEmojiSets = customEmojiSetsNotFiltered?.every(Boolean) ? customEmojiSetsNotFiltered : undefined;
  const translationRequestLanguage = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestedMessageTranslationLanguage)(global, message.chatId, message.id);
  const hasTranslation = translationRequestLanguage ? Boolean((0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectMessageTranslations)(global, message.chatId, translationRequestLanguage)[message.id]?.text) : undefined;
  const canTranslate = !hasTranslation && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanTranslateMessage)(global, message, detectedLanguage);
  const isChatTranslated = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestedChatTranslationLanguage)(global, message.chatId);
  const isInSavedMessages = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsChatWithSelf)(global, message.chatId);
  const poll = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPollFromMessage)(global, message);
  const storyData = message.content.storyData;
  const story = storyData ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeerStory)(global, storyData.peerId, storyData.id) : undefined;
  const canGift = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanGift)(global, message.chatId);
  return {
    threadId,
    chat,
    availableReactions,
    topReactions,
    defaultTagReactions: defaultTags,
    noOptions,
    canReport,
    canSendNow: isScheduled,
    canReschedule: isScheduled,
    canReply: !isPinned && !isScheduled && canReplyGlobally,
    canPin: !isScheduled && canPin,
    canUnpin: !isScheduled && canUnpin,
    canDelete,
    canEdit: !isPinned && canEdit,
    canForward: !isScheduled && canForward,
    canFaveSticker: !isScheduled && canFaveSticker,
    canUnfaveSticker: !isScheduled && canUnfaveSticker,
    canCopy: canCopyNumber || !isProtected && canCopy,
    canCopyLink: !isScheduled && canCopyLink,
    canSelect,
    canDownload: !isProtected && canDownload,
    canSaveGif: !isProtected && canSaveGif,
    canRevote,
    canClosePoll: !isScheduled && canClosePoll,
    activeDownloads,
    canShowSeenBy,
    canLoadReadDate,
    shouldRenderShowWhen,
    enabledReactions: chat?.isForbidden ? undefined : chatFullInfo?.enabledReactions,
    reactionsLimit,
    isPrivate,
    isCurrentUserPremium,
    hasFullInfo: Boolean(chatFullInfo),
    canShowReactionsCount,
    canShowReactionList: !isLocal && !isAction && !isScheduled && chat?.id !== _config__WEBPACK_IMPORTED_MODULE_3__.SERVICE_NOTIFICATIONS_USER_ID && !hasTtl,
    canBuyPremium: !isCurrentUserPremium && !(0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsPremiumPurchaseBlocked)(global),
    customEmojiSetsInfo,
    customEmojiSets,
    canScheduleUntilOnline: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanScheduleUntilOnline)(global, message.chatId),
    canTranslate,
    canShowOriginal: hasTranslation && !isChatTranslated,
    canSelectLanguage: hasTranslation && !isChatTranslated,
    isMessageTranslated: hasTranslation,
    canPlayAnimatedEmojis: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanPlayAnimatedEmojis)(global),
    isReactionPickerOpen: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsReactionPickerOpen)(global),
    isInSavedMessages,
    isChannel,
    canReplyInChat,
    isWithPaidReaction: chatFullInfo?.isPaidReactionAvailable,
    poll,
    story,
    userFullName,
    canGift
  };
})(ContextMenuContainer)));

/***/ }),

/***/ "./src/components/middle/message/LastEditTimeMenuItem.tsx":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/LastEditTimeMenuItem.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/placeholder/Skeleton */ "./src/components/ui/placeholder/Skeleton.tsx");
/* harmony import */ var _TimeMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TimeMenuItem.module.scss */ "./src/components/middle/message/TimeMenuItem.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");







function LastEditTimeMenuItem({
  message
}) {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    editDate
  } = message;
  const shouldRenderSkeleton = !editDate;
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "clock-edit",
    className: _TimeMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].item,
    children: shouldRenderSkeleton ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: _TimeMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].skeleton
    }) : Boolean(editDate) && lang('Chat.PrivateMessageEditTimestamp.Date', (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_1__.formatDateAtTime)(lang, editDate * 1000))
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(LastEditTimeMenuItem));

/***/ }),

/***/ "./src/components/middle/message/MessageContextMenu.scss":
/*!***************************************************************!*\
  !*** ./src/components/middle/message/MessageContextMenu.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/middle/message/MessageContextMenu.tsx":
/*!**************************************************************!*\
  !*** ./src/components/middle/message/MessageContextMenu.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_entities_ids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/entities/ids */ "./src/util/entities/ids.ts");
/* harmony import */ var _util_scrollLock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/scrollLock */ "./src/util/scrollLock.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _helpers_copyOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/copyOptions */ "./src/components/middle/message/helpers/copyOptions.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_AvatarList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/AvatarList */ "./src/components/common/AvatarList.tsx");
/* harmony import */ var _ui_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/Menu */ "./src/components/ui/Menu.tsx");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _ui_MenuSeparator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/MenuSeparator */ "./src/components/ui/MenuSeparator.tsx");
/* harmony import */ var _ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/placeholder/Skeleton */ "./src/components/ui/placeholder/Skeleton.tsx");
/* harmony import */ var _LastEditTimeMenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./LastEditTimeMenuItem */ "./src/components/middle/message/LastEditTimeMenuItem.tsx");
/* harmony import */ var _reactions_ReactionSelector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reactions/ReactionSelector */ "./src/components/middle/message/reactions/ReactionSelector.tsx");
/* harmony import */ var _ReadTimeMenuItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ReadTimeMenuItem */ "./src/components/middle/message/ReadTimeMenuItem.tsx");
/* harmony import */ var _MessageContextMenu_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MessageContextMenu.scss */ "./src/components/middle/message/MessageContextMenu.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");























const SCROLLBAR_WIDTH = 10;
const REACTION_SELECTOR_WIDTH_REM = 19.25;
const ANIMATION_DURATION = 200;
const MessageContextMenu = ({
  isReactionPickerOpen,
  availableReactions,
  topReactions,
  defaultTagReactions,
  isOpen,
  message,
  poll,
  story,
  isPrivate,
  isCurrentUserPremium,
  enabledReactions,
  isWithPaidReaction,
  reactionsLimit,
  anchor,
  targetHref,
  canSendNow,
  canReschedule,
  canBuyPremium,
  canReply,
  canQuote,
  canEdit,
  noReplies,
  canPin,
  canUnpin,
  canDelete,
  canForward,
  canReport,
  canFaveSticker,
  canUnfaveSticker,
  canCopy,
  canCopyLink,
  canSelect,
  canDownload,
  canSaveGif,
  canRevote,
  canClosePoll,
  canTranslate,
  canShowOriginal,
  canSelectLanguage,
  isDownloading,
  repliesThreadInfo,
  canShowSeenBy,
  canShowReactionsCount,
  canShowReactionList,
  seenByRecentPeers,
  hasCustomEmoji,
  customEmojiSets,
  canPlayAnimatedEmojis,
  isInSavedMessages,
  shouldRenderShowWhen,
  canLoadReadDate,
  onReply,
  onOpenThread,
  onEdit,
  onPin,
  onUnpin,
  onForward,
  onDelete,
  onFaveSticker,
  onReport,
  onUnfaveSticker,
  onSelect,
  onSend,
  onReschedule,
  onClose,
  onCloseAnimationEnd,
  onCopyLink,
  onCopyNumber,
  onDownload,
  onSaveGif,
  onCancelVote,
  onClosePoll,
  onShowSeenBy,
  onShowReactors,
  onToggleReaction,
  onSendPaidReaction,
  onShowPaidReactionModal,
  onCopyMessages,
  onReactionPickerOpen,
  onTranslate,
  onShowOriginal,
  onSelectLanguage,
  userFullName,
  canGift
}) => {
  const {
    showNotification,
    openStickerSet,
    openCustomEmojiSets,
    loadStickers,
    openGiftModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const menuRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const scrollableRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const noReactions = !isPrivate && !enabledReactions;
  const areReactionsPossible = message.areReactionsPossible;
  const withReactions = canShowReactionList && !noReactions || areReactionsPossible;
  const isEdited = 'isEdited' in message && message.isEdited;
  const seenByDates = message.seenByDates;
  const isPremiumGift = message.content.action?.type === 'giftPremium';
  const isGiftCode = message.content.action?.type === 'giftCode';
  const isStarGift = message.content.action?.type === 'starGift';
  const isStarGiftUnique = message.content.action?.type === 'starGiftUnique';
  const shouldShowGiftButton = (0,_util_entities_ids__WEBPACK_IMPORTED_MODULE_4__.isUserId)(message.chatId) && canGift && (isPremiumGift || isGiftCode || isStarGift || isStarGiftUnique);
  const [areItemsHidden, hideItems] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const [isReady, markIsReady, unmarkIsReady] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    isMobile,
    isDesktop
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const seenByDatesCount = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => seenByDates ? Object.keys(seenByDates).length : 0, [seenByDates]);
  const handleAfterCopy = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    showNotification({
      message: lang('Share.Link.Copied')
    });
    onClose();
  });
  const handleGiftClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    openGiftModal({
      forUserId: message.chatId
    });
    onClose();
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen && areItemsHidden && !isReactionPickerOpen) {
      onClose();
    }
  }, [onClose, isOpen, isReactionPickerOpen, areItemsHidden]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (customEmojiSets?.length) {
      customEmojiSets.map(customEmojiSet => {
        return loadStickers({
          stickerSetInfo: {
            id: customEmojiSet.id,
            accessHash: customEmojiSet.accessHash
          }
        });
      });
    }
  }, [customEmojiSets, openCustomEmojiSets]);
  const handleOpenCustomEmojiSets = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    if (!customEmojiSets) return;
    if (customEmojiSets.length === 1) {
      openStickerSet({
        stickerSetInfo: {
          shortName: customEmojiSets[0].shortName
        }
      });
    } else {
      openCustomEmojiSets({
        setIds: customEmojiSets.map(set => set.id)
      });
    }
    onClose();
  });
  const copyOptions = (0,_helpers_copyOptions__WEBPACK_IMPORTED_MODULE_8__.getMessageCopyOptions)(message, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.groupStatefulContent)({
    poll,
    story
  }), targetHref, canCopy, handleAfterCopy, canCopyLink ? onCopyLink : undefined, onCopyMessages, onCopyNumber);
  const getTriggerElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    return document.querySelector(`.Transition_slide-active > .MessageList div[data-message-id="${message.id}"]`);
  });
  const getRootElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => document.querySelector('.Transition_slide-active > .MessageList'));
  const getMenuElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => document.querySelector('.MessageContextMenu .bubble'));
  const getLayout = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    const extraHeightAudioPlayer = isMobile && document.querySelector('.AudioPlayer-content')?.offsetHeight || 0;
    const middleColumn = document.getElementById('MiddleColumn');
    const middleColumnComputedStyle = getComputedStyle(middleColumn);
    const headerToolsHeight = parseFloat(middleColumnComputedStyle.getPropertyValue('--middle-header-panes-height'));
    const extraHeightPinned = headerToolsHeight || 0;
    return {
      extraPaddingX: SCROLLBAR_WIDTH,
      extraTopPadding: document.querySelector('.MiddleHeader').offsetHeight,
      extraMarginTop: extraHeightPinned + extraHeightAudioPlayer,
      shouldAvoidNegativePosition: !isDesktop,
      menuElMinWidth: withReactions && isMobile ? REACTION_SELECTOR_WIDTH_REM * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__.REM : undefined
    };
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      unmarkIsReady();
      return;
    }
    setTimeout(() => {
      markIsReady();
    }, ANIMATION_DURATION);
  }, [isOpen, markIsReady, unmarkIsReady]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return (0,_util_scrollLock__WEBPACK_IMPORTED_MODULE_5__.disableScrolling)(scrollableRef.current, '.ReactionPicker');
  }, [isOpen]);
  const handleOpenMessageReactionPicker = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(position => {
    onReactionPickerOpen(position);
    hideItems();
  });
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_ui_Menu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    ref: menuRef,
    isOpen: isOpen,
    anchor: anchor,
    getTriggerElement: getTriggerElement,
    getRootElement: getRootElement,
    getMenuElement: getMenuElement,
    getLayout: getLayout,
    withMaxHeight: true,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('MessageContextMenu', 'fluid', withReactions && 'with-reactions'),
    onClose: onClose,
    onCloseAnimationEnd: onCloseAnimationEnd,
    children: [withReactions && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_reactions_ReactionSelector__WEBPACK_IMPORTED_MODULE_19__["default"], {
      enabledReactions: enabledReactions,
      topReactions: topReactions,
      allAvailableReactions: availableReactions,
      defaultTagReactions: defaultTagReactions,
      currentReactions: message.reactions?.results,
      reactionsLimit: reactionsLimit,
      onToggleReaction: onToggleReaction,
      onSendPaidReaction: onSendPaidReaction,
      onShowPaidReactionModal: onShowPaidReactionModal,
      isWithPaidReaction: isWithPaidReaction,
      isPrivate: isPrivate,
      isReady: isReady,
      canBuyPremium: canBuyPremium,
      isCurrentUserPremium: isCurrentUserPremium,
      isInSavedMessages: isInSavedMessages,
      canPlayAnimatedEmojis: canPlayAnimatedEmojis,
      onShowMore: handleOpenMessageReactionPicker,
      onClose: onClose,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(areItemsHidden && 'ReactionSelector-hidden')
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
      ref: scrollableRef,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('MessageContextMenu_items scrollable-content custom-scroll', areItemsHidden && 'MessageContextMenu_items-hidden'),
      dir: lang.isRtl ? 'rtl' : undefined,
      children: [shouldShowGiftButton && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "gift",
        onClick: handleGiftClick,
        children: message?.isOutgoing ? lang('SendAnotherGift') : lang('Conversation.ContextMenuSendGiftTo', userFullName)
      }), canSendNow && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "send-outline",
        onClick: onSend,
        children: lang('MessageScheduleSend')
      }), canReschedule && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "schedule",
        onClick: onReschedule,
        children: lang('MessageScheduleEditTime')
      }), canReply && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "reply",
        onClick: onReply,
        children: lang(canQuote ? 'lng_context_quote_and_reply' : 'Reply')
      }), !noReplies && Boolean(repliesThreadInfo?.messagesCount) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "replies",
        onClick: onOpenThread,
        children: lang('Conversation.ContextViewReplies', repliesThreadInfo.messagesCount, 'i')
      }), canEdit && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "edit",
        onClick: onEdit,
        children: lang('Edit')
      }), canFaveSticker && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "favorite",
        onClick: onFaveSticker,
        children: lang('AddToFavorites')
      }), canUnfaveSticker && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "favorite",
        onClick: onUnfaveSticker,
        children: lang('Stickers.RemoveFromFavorites')
      }), canTranslate && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "language",
        onClick: onTranslate,
        children: lang('TranslateMessage')
      }), canShowOriginal && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "language",
        onClick: onShowOriginal,
        children: lang('ShowOriginalButton')
      }), canSelectLanguage && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "web",
        onClick: onSelectLanguage,
        children: lang('lng_settings_change_lang')
      }), copyOptions.map(option => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: option.icon,
        onClick: option.handler,
        withPreventDefaultOnMouseDown: true,
        children: lang(option.label)
      }, option.label)), canPin && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "pin",
        onClick: onPin,
        children: lang('DialogPin')
      }), canUnpin && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "unpin",
        onClick: onUnpin,
        children: lang('DialogUnpin')
      }), canSaveGif && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "gifs",
        onClick: onSaveGif,
        children: lang('lng_context_save_gif')
      }), canRevote && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "revote",
        onClick: onCancelVote,
        children: lang('lng_polls_retract')
      }), canClosePoll && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "stop",
        onClick: onClosePoll,
        children: lang('lng_polls_stop')
      }), canDownload && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "download",
        onClick: onDownload,
        children: isDownloading ? lang('lng_context_cancel_download') : lang('lng_media_download')
      }), canForward && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "forward",
        onClick: onForward,
        children: lang('Forward')
      }), canSelect && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "select",
        onClick: onSelect,
        children: lang('Common.Select')
      }), canReport && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        icon: "flag",
        onClick: onReport,
        children: lang('lng_context_report_msg')
      }), canDelete && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
        destructive: true,
        icon: "delete",
        onClick: onDelete,
        children: lang('Delete')
      }), hasCustomEmoji && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuSeparator__WEBPACK_IMPORTED_MODULE_16__["default"], {
          size: "thick"
        }), !customEmojiSets && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
          children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_17__["default"], {
            inline: true,
            className: "menu-loading-row"
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_17__["default"], {
            inline: true,
            className: "menu-loading-row"
          })]
        }), customEmojiSets && customEmojiSets.length === 1 && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
          withWrap: true,
          onClick: handleOpenCustomEmojiSets,
          className: "menu-custom-emoji-sets",
          children: (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__["default"])(lang('MessageContainsEmojiPack', customEmojiSets[0].title), ['simple_markdown', 'emoji'])
        }), customEmojiSets && customEmojiSets.length > 1 && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
          withWrap: true,
          onClick: handleOpenCustomEmojiSets,
          className: "menu-custom-emoji-sets",
          children: (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__["default"])(lang('MessageContainsEmojiPacks', customEmojiSets.length), ['simple_markdown'])
        })]
      }), (canShowSeenBy || canShowReactionsCount) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuSeparator__WEBPACK_IMPORTED_MODULE_16__["default"], {
          size: hasCustomEmoji ? 'thin' : 'thick'
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
          icon: canShowReactionsCount ? 'heart-outline' : 'group',
          onClick: canShowReactionsCount ? onShowReactors : onShowSeenBy,
          disabled: !canShowReactionsCount && !seenByDatesCount,
          children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
            className: "MessageContextMenu--seen-by-label-wrapper",
            children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
              className: "MessageContextMenu--seen-by-label",
              dir: lang.isRtl ? 'rtl' : undefined,
              children: canShowReactionsCount && message.reactors?.count ? canShowSeenBy && seenByDatesCount ? lang('Chat.OutgoingContextMixedReactionCount', [message.reactors.count, seenByDatesCount]) : lang('Chat.ContextReactionCount', message.reactors.count, 'i') : seenByDatesCount === 1 && seenByRecentPeers ? (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_util_entities_ids__WEBPACK_IMPORTED_MODULE_4__.isUserId)(seenByRecentPeers[0].id) ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(seenByRecentPeers[0]) : seenByRecentPeers[0].title) : seenByDatesCount ? lang('Conversation.ContextMenuSeen', seenByDatesCount, 'i') : lang('Conversation.ContextMenuNoViews')
            })
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_common_AvatarList__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: "avatars",
            size: "micro",
            peers: seenByRecentPeers
          })]
        })]
      }), (canLoadReadDate || shouldRenderShowWhen || isEdited) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_MenuSeparator__WEBPACK_IMPORTED_MODULE_16__["default"], {
        size: hasCustomEmoji ? 'thin' : 'thick'
      }), (canLoadReadDate || shouldRenderShowWhen) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ReadTimeMenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
        canLoadReadDate: canLoadReadDate,
        shouldRenderShowWhen: shouldRenderShowWhen,
        message: message,
        closeContextMenu: onClose
      }), isEdited && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_LastEditTimeMenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
        message: message
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(MessageContextMenu));

/***/ }),

/***/ "./src/components/middle/message/ReadTimeMenuItem.tsx":
/*!************************************************************!*\
  !*** ./src/components/middle/message/ReadTimeMenuItem.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/placeholder/Skeleton */ "./src/components/ui/placeholder/Skeleton.tsx");
/* harmony import */ var _ui_Transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Transition */ "./src/components/ui/Transition.tsx");
/* harmony import */ var _TimeMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeMenuItem.module.scss */ "./src/components/middle/message/TimeMenuItem.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");









function ReadTimeMenuItem({
  message,
  shouldRenderShowWhen,
  canLoadReadDate,
  closeContextMenu
}) {
  const {
    openPrivacySettingsNoticeModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    readDate
  } = message;
  const shouldRenderSkeleton = canLoadReadDate && !readDate && !shouldRenderShowWhen;
  const handleOpenModal = () => {
    closeContextMenu();
    openPrivacySettingsNoticeModal({
      chatId: message.chatId,
      isReadDate: true
    });
  };
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: "message-read",
    className: _TimeMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].item,
    children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_Transition__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "fade",
      activeKey: shouldRenderSkeleton ? 1 : 2,
      className: _TimeMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].transition,
      children: shouldRenderSkeleton ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: _TimeMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].skeleton
      }) : (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [Boolean(readDate) && lang('PmReadAt', (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_2__.formatDateAtTime)(lang, readDate * 1000)), !readDate && shouldRenderShowWhen && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          children: [lang('PmRead'), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: _TimeMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].get,
            onClick: handleOpenModal,
            children: lang('PmReadShowWhen')
          })]
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ReadTimeMenuItem));

/***/ }),

/***/ "./src/components/middle/message/TimeMenuItem.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/TimeMenuItem.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"item":"TimeMenuItem-module__item","get":"TimeMenuItem-module__get","skeleton":"TimeMenuItem-module__skeleton","transition":"TimeMenuItem-module__transition"});

/***/ }),

/***/ "./src/components/middle/message/helpers/copyOptions.ts":
/*!**************************************************************!*\
  !*** ./src/components/middle/message/helpers/copyOptions.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMessageCopyOptions: () => (/* binding */ getMessageCopyOptions)
/* harmony export */ });
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_messageSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers/messageSummary */ "./src/global/helpers/messageSummary.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_getMessageIdsForSelectedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/getMessageIdsForSelectedText */ "./src/util/getMessageIdsForSelectedText.ts");
/* harmony import */ var _util_mediaLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/mediaLoader */ "./src/util/mediaLoader.ts");
/* harmony import */ var _common_helpers_renderMessageText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/helpers/renderMessageText */ "./src/components/common/helpers/renderMessageText.ts");








function getMessageCopyOptions(message, statefulContent, href, canCopy, afterEffect, onCopyLink, onCopyMessages, onCopyNumber) {
  const options = [];
  const text = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMessageText)(message);
  const photo = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMessagePhoto)(message) || (!(0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMessageWebPageVideo)(message) ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMessageWebPagePhoto)(message) : undefined);
  const contact = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMessageContact)(message);
  const mediaHash = photo ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getPhotoMediaHash)(photo, 'full') : undefined;
  const canImageBeCopied = canCopy && photo && (mediaHash || (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.hasMediaLocalBlobUrl)(photo)) && _util_clipboard__WEBPACK_IMPORTED_MODULE_4__.CLIPBOARD_ITEM_SUPPORTED && !_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_SAFARI;
  const selection = window.getSelection();
  if (canImageBeCopied) {
    options.push({
      label: 'lng_context_copy_image',
      icon: 'copy-media',
      handler: () => {
        Promise.resolve(mediaHash ? _util_mediaLoader__WEBPACK_IMPORTED_MODULE_6__.fetch(mediaHash, _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMediaFormat.BlobUrl) : photo.blobUrl).then(_util_clipboard__WEBPACK_IMPORTED_MODULE_4__.copyImageToClipboard);
        afterEffect?.();
      }
    });
  }
  if (canCopy && href) {
    options.push({
      label: 'lng_context_copy_link',
      icon: 'copy',
      handler: () => {
        (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_4__.copyTextToClipboard)(href);
        afterEffect?.();
      }
    });
  } else if (canCopy && text) {
    // Detect if the user has selection in the current message
    const hasSelection = Boolean(selection?.anchorNode?.parentNode && selection.anchorNode.parentNode.closest('.Message .content-inner') && selection.toString().replace(/(?:\r\n|\r|\n)/g, '') !== '' && checkMessageHasSelection(message));
    options.push({
      label: getCopyLabel(hasSelection),
      icon: 'copy',
      handler: () => {
        const messageIds = (0,_util_getMessageIdsForSelectedText__WEBPACK_IMPORTED_MODULE_5__["default"])();
        if (messageIds?.length && onCopyMessages) {
          onCopyMessages(messageIds);
        } else if (hasSelection) {
          document.execCommand('copy');
        } else {
          const clipboardText = (0,_common_helpers_renderMessageText__WEBPACK_IMPORTED_MODULE_7__.renderMessageText)({
            message,
            shouldRenderAsHtml: true
          });
          if (clipboardText) {
            (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_4__.copyHtmlToClipboard)(clipboardText.join(''), (0,_global_helpers_messageSummary__WEBPACK_IMPORTED_MODULE_2__.getMessageTextWithSpoilers)(message, statefulContent));
          }
        }
        afterEffect?.();
      }
    });
  }
  if (onCopyLink) {
    options.push({
      label: 'lng_context_copy_message_link',
      icon: 'link',
      handler: onCopyLink
    });
  }
  if (contact && onCopyNumber) {
    options.push({
      label: 'lng_profile_copy_phone',
      icon: 'copy',
      handler: () => {
        onCopyNumber();
        afterEffect?.();
      }
    });
  }
  return options;
}
function checkMessageHasSelection(message) {
  const selection = window.getSelection();
  const selectionParentNode = selection?.anchorNode?.parentNode;
  const selectedMessageElement = selectionParentNode?.closest('.Message.message-list-item');
  return (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMessageHtmlId)(message.id) === selectedMessageElement?.id;
}
function getCopyLabel(hasSelection) {
  if (hasSelection) {
    return 'lng_context_copy_selected';
  }
  return 'lng_context_copy_text';
}

/***/ }),

/***/ "./src/components/middle/message/helpers/getSelectionAsFormattedText.ts":
/*!******************************************************************************!*\
  !*** ./src/components/middle/message/helpers/getSelectionAsFormattedText.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectionAsFormattedText: () => (/* binding */ getSelectionAsFormattedText)
/* harmony export */ });
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _util_parseHtmlAsFormattedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/parseHtmlAsFormattedText */ "./src/util/parseHtmlAsFormattedText.ts");


const div = document.createElement('div');
const ALLOWED_QUOTE_ENTITIES = new Set([_api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Bold, _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Italic, _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Underline, _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Strike, _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Spoiler, _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.CustomEmoji]);
function getSelectionAsFormattedText(range) {
  const html = getSelectionAsHtml(range);
  const formattedText = (0,_util_parseHtmlAsFormattedText__WEBPACK_IMPORTED_MODULE_1__["default"])(html, false, true);
  return stripEntitiesForQuote(formattedText);
}
function getSelectionAsHtml(range) {
  const clonedSelection = range.cloneContents();
  div.appendChild(clonedSelection);
  const html = wrapHtmlWithMarkupTags(range, div.innerHTML);
  div.innerHTML = '';
  return html.replace(/<br\s*\/?>/gi, '\n').replace(/&nbsp;/gi, ' ') // Convert nbsp's to spaces
  .replace(/\u00a0/gi, ' ');
}
function stripEntitiesForQuote(text) {
  if (!text.entities) return text;
  const entities = text.entities.filter(entity => ALLOWED_QUOTE_ENTITIES.has(entity.type));
  return {
    ...text,
    entities: entities.length ? entities : undefined
  };
}
function wrapHtmlWithMarkupTags(range, html) {
  const container = range.commonAncestorContainer;
  if (container.nodeType === Node.ELEMENT_NODE && container.classList.contains('text-content')) {
    return html;
  }
  let currentElement = range.commonAncestorContainer.parentElement;
  while (currentElement && !currentElement.classList.contains('text-content')) {
    const tag = currentElement.tagName.toLowerCase();
    const entityType = currentElement.dataset.entityType;
    html = `<${tag} ${entityType ? `data-entity-type="${entityType}"` : ''}>${html}</${tag}>`;
    currentElement = currentElement.parentElement;
  }
  return html;
}

/***/ }),

/***/ "./src/components/middle/message/helpers/isSelectionRangeInsideMessage.ts":
/*!********************************************************************************!*\
  !*** ./src/components/middle/message/helpers/isSelectionRangeInsideMessage.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSelectionRangeInsideMessage: () => (/* binding */ isSelectionRangeInsideMessage)
/* harmony export */ });
function isSelectionRangeInsideMessage(range) {
  const ancestor = range.commonAncestorContainer;
  const el = ancestor.nodeType === Node.TEXT_NODE ? ancestor.parentNode : ancestor;
  return Boolean(el.closest('.message-content-wrapper .text-content')) && !(Boolean(el.closest('.EmbeddedMessage')) || Boolean(el.closest('.WebPage')));
}

/***/ }),

/***/ "./src/components/middle/message/hooks/useFocusMessage.ts":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/hooks/useFocusMessage.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFocusMessage)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/teact/teact-dom */ "./src/lib/teact/teact-dom.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_animateScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/animateScroll */ "./src/util/animateScroll.ts");






// This is used when the viewport was replaced.
const BOTTOM_FOCUS_OFFSET = 500;
const RELOCATED_FOCUS_OFFSET = _config__WEBPACK_IMPORTED_MODULE_2__.SCROLL_MAX_DISTANCE;
const FOCUS_MARGIN = 20;
function useFocusMessage({
  elementRef,
  chatId,
  isFocused,
  focusDirection,
  noFocusHighlight,
  isResizingContainer,
  isJustAdded,
  isQuote,
  scrollTargetPosition
}) {
  const isRelocatedRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(!isJustAdded);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const isRelocated = isRelocatedRef.current;
    isRelocatedRef.current = false;
    if (isFocused && elementRef.current) {
      const messagesContainer = elementRef.current.closest('.MessageList');
      // `noFocusHighlight` is always called with “scroll-to-bottom” buttons
      const isToBottom = noFocusHighlight;
      const scrollPosition = scrollTargetPosition || isToBottom ? 'end' : 'centerOrTop';
      const exec = () => {
        const maxDistance = focusDirection !== undefined ? isToBottom ? BOTTOM_FOCUS_OFFSET : RELOCATED_FOCUS_OFFSET : undefined;
        const result = (0,_util_animateScroll__WEBPACK_IMPORTED_MODULE_4__["default"])({
          container: messagesContainer,
          element: elementRef.current,
          position: scrollPosition,
          margin: FOCUS_MARGIN,
          maxDistance,
          forceDirection: focusDirection,
          forceNormalContainerHeight: isResizingContainer,
          shouldReturnMutationFn: true
        });
        if (isQuote) {
          const firstQuote = elementRef.current.querySelector('.is-quote');
          if (firstQuote) {
            (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMutation)(() => {
              (0,_lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__.addExtraClass)(firstQuote, 'animate');
            });
          }
        }
        return result;
      };
      if (isRelocated) {
        // We need this to override scroll setting from Message List layout effect
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestForcedReflow)(exec);
      } else {
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMeasure)(() => {
          (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMutation)(exec());
        });
      }
    }
  }, [elementRef, chatId, isFocused, focusDirection, noFocusHighlight, isResizingContainer, isQuote, scrollTargetPosition]);
}

/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionButton.module.scss":
/*!****************************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionButton.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"ReactionButton-module__root","chosen":"ReactionButton-module__chosen","paid":"ReactionButton-module__paid","outside":"ReactionButton-module__outside","animated-emoji":"ReactionButton-module__animated-emoji","animatedEmoji":"ReactionButton-module__animated-emoji","tag":"ReactionButton-module__tag","tail":"ReactionButton-module__tail","is-safari":"ReactionButton-module__is-safari","isSafari":"ReactionButton-module__is-safari","tail-fill":"ReactionButton-module__tail-fill","tailFill":"ReactionButton-module__tail-fill","tag-text":"ReactionButton-module__tag-text","tagText":"ReactionButton-module__tag-text","counter":"ReactionButton-module__counter","disabled":"ReactionButton-module__disabled","paidCounter":"ReactionButton-module__paidCounter"});

/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionButton.tsx":
/*!********************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionButton.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/data/useSelector */ "./src/hooks/data/useSelector.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useEffectWithPrevDeps */ "./src/hooks/useEffectWithPrevDeps.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/usePrevious */ "./src/hooks/usePrevious.ts");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");
/* harmony import */ var _common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/AnimatedCounter */ "./src/components/common/AnimatedCounter.tsx");
/* harmony import */ var _common_AvatarList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/AvatarList */ "./src/components/common/AvatarList.tsx");
/* harmony import */ var _common_reactions_PaidReactionEmoji__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/reactions/PaidReactionEmoji */ "./src/components/common/reactions/PaidReactionEmoji.tsx");
/* harmony import */ var _common_reactions_ReactionAnimatedEmoji__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/reactions/ReactionAnimatedEmoji */ "./src/components/common/reactions/ReactionAnimatedEmoji.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ReactionButton.module.scss */ "./src/components/middle/message/reactions/ReactionButton.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");





















const REACTION_SIZE = 1.25 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_5__.REM;
const MAX_SCALE = 3;
function selectStarsState(global) {
  return global.stars;
}
const ReactionButton = ({
  reaction,
  containerId,
  isOwnMessage,
  recentReactors,
  className,
  chosenClassName,
  chatId,
  messageId,
  isOutside,
  observeIntersection,
  onClick,
  onPaidClick
}) => {
  const {
    openStarsBalanceModal,
    resetLocalPaidReactions,
    openPaidReactionModal,
    requestWave
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const counterRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const animationRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const isPaid = reaction.reaction.type === 'paid';
  const starsState = (0,_hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_6__["default"])(selectStarsState);
  const areStarsLoaded = Boolean(starsState);
  const handlePaidClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])((count = 1) => {
    onPaidClick?.(count);
  });
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(e => {
    if (reaction.reaction.type === 'paid') {
      e.stopPropagation(); // Prevent default message double click behavior
      handlePaidClick();
      return;
    }
    onClick?.(reaction.reaction);
  });
  const {
    isContextMenuOpen,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_7__["default"])(ref, reaction.reaction.type !== 'paid', undefined, undefined, undefined, true);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isContextMenuOpen) {
      openPaidReactionModal({
        chatId,
        messageId
      });
      handleContextMenuClose();
      handleContextMenuHide();
    }
  }, [handleContextMenuClose, handleContextMenuHide, isContextMenuOpen, chatId, messageId]);
  (0,_hooks_useEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__["default"])(([prevReaction]) => {
    const amount = reaction.localAmount;
    const button = ref.current;
    if (!amount || !button || amount === prevReaction?.localAmount) return;
    if (areStarsLoaded && amount > starsState.balance.amount) {
      openStarsBalanceModal({
        originReaction: {
          chatId,
          messageId,
          amount
        }
      });
      resetLocalPaidReactions({
        chatId,
        messageId
      });
      return;
    }
    if (reaction.localAmount) {
      const {
        left,
        top
      } = button.getBoundingClientRect();
      const startX = left + button.offsetWidth / 2;
      const startY = top + button.offsetHeight / 2;
      requestWave({
        startX,
        startY
      });
    }
    const currentScale = Number(getComputedStyle(button).scale) || 1;
    animationRef.current?.cancel();
    // Animate scaling by 20%, and then returning to 1
    animationRef.current = button.animate([{
      scale: currentScale
    }, {
      scale: Math.min(currentScale * 1.2, MAX_SCALE),
      offset: 0.2
    }, {
      scale: 1
    }], {
      duration: 500 * currentScale,
      easing: 'ease-out'
    });
  }, [reaction, starsState?.balance, areStarsLoaded, chatId, messageId]);
  const prevAmount = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_11__["default"])(reaction.localAmount);
  const {
    shouldRender: shouldRenderPaidCounter
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_12__["default"])({
    isOpen: Boolean(reaction.localAmount),
    ref: counterRef,
    className: 'slow',
    withShouldRender: true
  });
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_ui_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].root, isOwnMessage && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].own, isPaid && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].paid, isOutside && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].outside, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isReactionChosen)(reaction) && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].chosen, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isReactionChosen)(reaction) && chosenClassName, className),
    size: "tiny",
    ref: ref,
    onMouseDown: handleBeforeContextMenu,
    onContextMenu: handleContextMenu,
    onClick: handleClick,
    children: [reaction.reaction.type === 'paid' ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_Sparkles__WEBPACK_IMPORTED_MODULE_17__["default"], {
        preset: "button"
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_reactions_PaidReactionEmoji__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].animatedEmoji,
        containerId: containerId,
        reaction: reaction.reaction,
        size: REACTION_SIZE,
        localAmount: reaction.localAmount,
        observeIntersection: observeIntersection
      }), shouldRenderPaidCounter && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_13__["default"], {
        ref: counterRef,
        text: `+${(0,_util_textFormat__WEBPACK_IMPORTED_MODULE_4__.formatIntegerCompact)(lang, reaction.localAmount || prevAmount)}`,
        className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].paidCounter
      })]
    }) : (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_reactions_ReactionAnimatedEmoji__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].animatedEmoji,
      containerId: containerId,
      reaction: reaction.reaction,
      size: REACTION_SIZE,
      observeIntersection: observeIntersection
    }), recentReactors?.length ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_AvatarList__WEBPACK_IMPORTED_MODULE_14__["default"], {
      size: "mini",
      peers: recentReactors
    }) : (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      text: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_4__.formatIntegerCompact)(lang, reaction.count + (reaction.localAmount || 0)),
      className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].counter
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ReactionButton));

/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionSelector.scss":
/*!***********************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionSelector.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionSelector.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionSelector.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/Link */ "./src/components/ui/Link.tsx");
/* harmony import */ var _ReactionSelectorCustomReaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReactionSelectorCustomReaction */ "./src/components/middle/message/reactions/ReactionSelectorCustomReaction.tsx");
/* harmony import */ var _ReactionSelectorReaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ReactionSelectorReaction */ "./src/components/middle/message/reactions/ReactionSelectorReaction.tsx");
/* harmony import */ var _ReactionSelector_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReactionSelector.scss */ "./src/components/middle/message/reactions/ReactionSelector.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");













const cn = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__.createClassNameBuilder)('ReactionSelector');
const REACTIONS_AMOUNT = 7;
const FADE_IN_DELAY = 20;
const ReactionSelector = ({
  allAvailableReactions,
  topReactions,
  defaultTagReactions,
  enabledReactions,
  currentReactions,
  reactionsLimit,
  isPrivate,
  isReady,
  canPlayAnimatedEmojis,
  className,
  isCurrentUserPremium,
  isInSavedMessages,
  isInStoryViewer,
  isForEffects,
  effectReactions,
  isWithPaidReaction,
  onClose,
  onToggleReaction,
  onSendPaidReaction,
  onShowPaidReactionModal,
  onShowMore
}) => {
  const {
    openPremiumModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const areReactionsLocked = isInSavedMessages && !isCurrentUserPremium && !isInStoryViewer;
  const shouldUseCurrentReactions = Boolean(reactionsLimit && currentReactions && currentReactions.length >= reactionsLimit);
  const availableReactions = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const reactions = (() => {
      if (shouldUseCurrentReactions) return currentReactions?.map(reaction => reaction.reaction);
      if (isForEffects) return effectReactions;
      if (isInSavedMessages) return defaultTagReactions;
      if (enabledReactions?.type === 'some') return enabledReactions.allowed;
      return allAvailableReactions?.map(reaction => reaction.reaction);
    })();
    const filteredReactions = reactions?.map(reaction => {
      const isCustomReaction = reaction.type === 'custom';
      const availableReaction = allAvailableReactions?.find(r => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isSameReaction)(r.reaction, reaction));
      if (isForEffects) return availableReaction;
      if (!isCustomReaction && !availableReaction || availableReaction?.isInactive) return undefined;
      if (!isPrivate && !shouldUseCurrentReactions && (!enabledReactions || !(0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.canSendReaction)(reaction, enabledReactions))) {
        return undefined;
      }
      return isCustomReaction ? reaction : availableReaction;
    }).filter(Boolean) || [];
    const sortedReactions = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.sortReactions)(filteredReactions, topReactions);
    if (isWithPaidReaction) {
      sortedReactions.unshift({
        type: 'paid'
      });
    }
    return sortedReactions;
  }, [allAvailableReactions, currentReactions, defaultTagReactions, enabledReactions, isInSavedMessages, isPrivate, topReactions, isForEffects, effectReactions, shouldUseCurrentReactions, isWithPaidReaction]);
  const reactionsToRender = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // Component can fit one more if we do not need show more button
    return availableReactions.length === REACTIONS_AMOUNT + 1 ? availableReactions : availableReactions.slice(0, REACTIONS_AMOUNT);
  }, [availableReactions]);
  const withMoreButton = reactionsToRender.length < availableReactions.length;
  const userReactionIndexes = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const chosenReactions = currentReactions?.filter(({
      chosenOrder
    }) => chosenOrder !== undefined) || [];
    return new Set(chosenReactions.map(({
      reaction
    }) => reactionsToRender.findIndex(r => r && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isSameReaction)('reaction' in r ? r.reaction : r, reaction))));
  }, [currentReactions, reactionsToRender]);
  const handleShowMoreClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    const bound = ref.current?.getBoundingClientRect() || {
      x: 0,
      y: 0
    };
    onShowMore({
      x: bound.x,
      y: bound.y
    });
  });
  const handleOpenPremiumModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    onClose?.();
    openPremiumModal({
      initialSection: 'saved_tags'
    });
  });
  const hintText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isInSavedMessages) {
      if (!isCurrentUserPremium) {
        const text = lang('lng_subscribe_tag_about');
        const parts = text.split('{link}');
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
          children: [parts[0], (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
            isPrimary: true,
            onClick: handleOpenPremiumModal,
            children: lang('lng_subscribe_tag_link')
          }), parts[1]]
        });
      }
      return lang('SavedTagReactionsHint2');
    }
    if (isInStoryViewer) {
      return lang('StoryReactionsHint');
    }
    if (isForEffects) {
      return lang('AddEffectMessageHint');
    }
    return undefined;
  }, [isCurrentUserPremium, isInSavedMessages, isInStoryViewer, lang, isForEffects]);
  if (!reactionsToRender.length) return undefined;
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(cn('&'), className),
    ref: ref,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: cn('bubble-small', lang.isRtl && 'isRtl')
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: cn('items-wrapper'),
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: cn('bubble-big', lang.isRtl && 'isRtl')
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: cn('items'),
        children: [hintText && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: cn('hint'),
          children: hintText
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: cn('reactions'),
          dir: lang.isRtl ? 'rtl' : undefined,
          children: [reactionsToRender.map((reaction, i) => 'reaction' in reaction ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ReactionSelectorReaction__WEBPACK_IMPORTED_MODULE_10__["default"], {
            isReady: isReady,
            onToggleReaction: onToggleReaction,
            reaction: reaction,
            noAppearAnimation: !canPlayAnimatedEmojis,
            chosen: userReactionIndexes.has(i),
            isLocked: areReactionsLocked
          }, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getReactionKey)(reaction.reaction)) : (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ReactionSelectorCustomReaction__WEBPACK_IMPORTED_MODULE_9__["default"], {
            isReady: isReady,
            onToggleReaction: onToggleReaction,
            onSendPaidReaction: onSendPaidReaction,
            onShowPaidReactionModal: onShowPaidReactionModal,
            reaction: reaction,
            noAppearAnimation: !canPlayAnimatedEmojis,
            chosen: userReactionIndexes.has(i),
            isLocked: areReactionsLocked,
            style: `--_animation-delay: ${(REACTIONS_AMOUNT - i) * FADE_IN_DELAY}ms`
          }, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getReactionKey)(reaction))), withMoreButton && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            color: "translucent",
            className: cn('show-more'),
            onClick: handleShowMoreClick,
            children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              name: "down"
            })
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ReactionSelector));

/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionSelectorCustomReaction.tsx":
/*!************************************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionSelectorCustomReaction.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _common_CustomEmoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReactionSelectorReaction.module.scss */ "./src/components/middle/message/reactions/ReactionSelectorReaction.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");











const REACTION_SIZE = 2 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_3__.REM;
const ReactionSelectorCustomReaction = ({
  reaction,
  chosen,
  isReady,
  noAppearAnimation,
  style,
  isLocked,
  onToggleReaction,
  onSendPaidReaction,
  onShowPaidReactionModal
}) => {
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (reaction.type === 'paid') {
      onSendPaidReaction?.();
      return;
    }
    onToggleReaction(reaction);
  });
  const {
    isContextMenuOpen,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, reaction.type !== 'paid', undefined, undefined, undefined, true);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isContextMenuOpen) {
      onShowPaidReactionModal?.();
      handleContextMenuClose();
      handleContextMenuHide();
    }
  }, [handleContextMenuClose, onShowPaidReactionModal, handleContextMenuHide, isContextMenuOpen]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].root, _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].custom, chosen && reaction.type !== 'paid' && _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].chosen, !noAppearAnimation && isReady && _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].customAnimated, noAppearAnimation && _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].visible),
    ref: ref,
    style: style,
    onClick: handleClick,
    onMouseDown: handleBeforeContextMenu,
    onContextMenu: handleContextMenu,
    children: [reaction.type === 'paid' ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_AnimatedIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tgsUrl: _common_helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__.LOCAL_TGS_URLS.StarReaction,
      size: REACTION_SIZE,
      noLoop: false
    }) : (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_CustomEmoji__WEBPACK_IMPORTED_MODULE_7__["default"], {
      documentId: reaction.documentId,
      size: REACTION_SIZE
    }), isLocked && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].lock,
      name: "lock-badge"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ReactionSelectorCustomReaction));

/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionSelectorReaction.module.scss":
/*!**************************************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionSelectorReaction.module.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"ReactionSelectorReaction-module__root","custom":"ReactionSelectorReaction-module__custom","visible":"ReactionSelectorReaction-module__visible","custom-animated":"ReactionSelectorReaction-module__custom-animated","customAnimated":"ReactionSelectorReaction-module__custom-animated","custom-fade-in":"ReactionSelectorReaction-module__custom-fade-in","customFadeIn":"ReactionSelectorReaction-module__custom-fade-in","chosen":"ReactionSelectorReaction-module__chosen","static-icon":"ReactionSelectorReaction-module__static-icon","staticIcon":"ReactionSelectorReaction-module__static-icon","lock":"ReactionSelectorReaction-module__lock"});

/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionSelectorReaction.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionSelectorReaction.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _common_AnimatedSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/AnimatedSticker */ "./src/components/common/AnimatedSticker.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReactionSelectorReaction.module.scss */ "./src/components/middle/message/reactions/ReactionSelectorReaction.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");









const REACTION_SIZE = 2 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_2__.REM;
const ReactionSelectorReaction = ({
  reaction,
  isReady,
  noAppearAnimation,
  chosen,
  isLocked,
  onToggleReaction
}) => {
  const mediaAppearData = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_4__["default"])(`sticker${reaction.appearAnimation?.id}`, !isReady || noAppearAnimation);
  const mediaData = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_4__["default"])(`document${reaction.selectAnimation?.id}`, !isReady || noAppearAnimation);
  const staticIconData = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_4__["default"])(`document${reaction.staticIcon?.id}`, !noAppearAnimation);
  const [isAnimationLoaded, markAnimationLoaded] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [isFirstPlay,, unmarkIsFirstPlay] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(true);
  const [isActivated, activate, deactivate] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])();
  function handleClick() {
    onToggleReaction(reaction.reaction);
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root, chosen && _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].chosen),
    onClick: handleClick,
    onMouseEnter: isReady && !isFirstPlay ? activate : undefined,
    children: [noAppearAnimation && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      className: _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].staticIcon,
      src: staticIconData,
      alt: reaction.reaction.emoticon,
      draggable: false
    }), !isAnimationLoaded && !noAppearAnimation && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_AnimatedSticker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      tgsUrl: mediaAppearData,
      play: isFirstPlay,
      noLoop: true,
      size: REACTION_SIZE,
      onEnded: unmarkIsFirstPlay,
      forceAlways: true
    }, reaction.appearAnimation?.id), !isFirstPlay && !noAppearAnimation && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_AnimatedSticker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      tgsUrl: mediaData,
      play: isActivated,
      noLoop: true,
      size: REACTION_SIZE,
      onLoad: markAnimationLoaded,
      onEnded: deactivate,
      forceAlways: true
    }, reaction.selectAnimation?.id), isLocked && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: _ReactionSelectorReaction_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].lock,
      name: "lock-badge"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ReactionSelectorReaction));

/***/ }),

/***/ "./src/components/middle/message/reactions/Reactions.scss":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/reactions/Reactions.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/middle/message/reactions/Reactions.tsx":
/*!***************************************************************!*\
  !*** ./src/components/middle/message/reactions/Reactions.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_keys_messageKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/keys/messageKey */ "./src/util/keys/messageKey.ts");
/* harmony import */ var _hooks_useEffectOnce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useEffectOnce */ "./src/hooks/useEffectOnce.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ReactionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReactionButton */ "./src/components/middle/message/reactions/ReactionButton.tsx");
/* harmony import */ var _SavedTagButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SavedTagButton */ "./src/components/middle/message/reactions/SavedTagButton.tsx");
/* harmony import */ var _Reactions_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reactions.scss */ "./src/components/middle/message/reactions/Reactions.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");













const MAX_RECENT_AVATARS = 3;
const PAID_SEND_DELAY = 5000;
const Reactions = ({
  message,
  threadId,
  isOutside,
  maxWidth,
  metaChildren,
  observeIntersection,
  noRecentReactors,
  isCurrentUserPremium,
  tags,
  isAccountFrozen
}) => {
  const {
    toggleReaction,
    addLocalPaidReaction,
    updateMiddleSearch,
    performMiddleSearch,
    openPremiumModal,
    resetLocalPaidReactions,
    showNotification,
    openFrozenAccountModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    results,
    areTags,
    recentReactions
  } = message.reactions;
  const withServiceReactions = Boolean(message.areReactionsPossible && message.reactions);
  const totalCount = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => results.reduce((acc, reaction) => acc + reaction.count, 0), [results]);
  const recentReactorsByReactionKey = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    return recentReactions?.reduce((acc, recentReaction) => {
      const {
        reaction,
        peerId
      } = recentReaction;
      const key = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getReactionKey)(reaction);
      const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, peerId);
      if (!peer) return acc;
      const peers = acc[key] || [];
      peers.push(peer);
      acc[key] = peers;
      return acc;
    }, {});
  }, [recentReactions]);
  const props = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const messageKey = (0,_util_keys_messageKey__WEBPACK_IMPORTED_MODULE_5__.getMessageKey)(message);
    return results.map(reaction => {
      const reactionKey = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getReactionKey)(reaction.reaction);
      const recentReactors = recentReactorsByReactionKey?.[reactionKey];
      const shouldHideRecentReactors = totalCount > MAX_RECENT_AVATARS || noRecentReactors;
      const tag = areTags ? tags?.[reactionKey] : undefined;
      return {
        reaction,
        reactionKey,
        messageKey,
        recentReactors: !shouldHideRecentReactors ? recentReactors : undefined,
        isChosen: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isReactionChosen)(reaction),
        tag
      };
    });
  }, [message, noRecentReactors, recentReactorsByReactionKey, results, areTags, tags, totalCount]);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(reaction => {
    if (isAccountFrozen) {
      openFrozenAccountModal();
      return;
    }
    if (areTags) {
      if (!isCurrentUserPremium) {
        openPremiumModal({
          initialSection: 'saved_tags'
        });
        return;
      }
      updateMiddleSearch({
        chatId: message.chatId,
        threadId,
        update: {
          savedTag: reaction
        }
      });
      performMiddleSearch({
        chatId: message.chatId,
        threadId
      });
      return;
    }
    toggleReaction({
      chatId: message.chatId,
      messageId: message.id,
      reaction
    });
  });
  const paidLocalCount = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => results.find(r => r.reaction.type === 'paid')?.localAmount || 0, [results]);
  const handlePaidClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(count => {
    if (isAccountFrozen) {
      openFrozenAccountModal();
      return;
    }
    addLocalPaidReaction({
      chatId: message.chatId,
      messageId: message.id,
      count
    });
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!paidLocalCount) return;
    showNotification({
      localId: (0,_util_keys_messageKey__WEBPACK_IMPORTED_MODULE_5__.getMessageKey)(message),
      title: lang('StarsSentTitle'),
      message: lang('StarsSentText', paidLocalCount),
      actionText: lang('StarsSentUndo'),
      cacheBreaker: paidLocalCount.toString(),
      action: {
        action: 'resetLocalPaidReactions',
        payload: {
          chatId: message.chatId,
          messageId: message.id
        }
      },
      dismissAction: {
        action: 'sendPaidReaction',
        payload: {
          chatId: message.chatId,
          messageId: message.id
        }
      },
      duration: PAID_SEND_DELAY,
      shouldShowTimer: true,
      disableClickDismiss: true,
      icon: 'star'
    });
  }, [lang, message, paidLocalCount]);
  const handleRemoveReaction = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(reaction => {
    if (isAccountFrozen) {
      openFrozenAccountModal();
      return;
    }
    toggleReaction({
      chatId: message.chatId,
      messageId: message.id,
      reaction
    });
  });

  // Reset paid reactions on unmount
  (0,_hooks_useEffectOnce__WEBPACK_IMPORTED_MODULE_6__["default"])(() => () => {
    resetLocalPaidReactions({
      chatId: message.chatId,
      messageId: message.id
    });
  });
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('Reactions', isOutside && 'is-outside', withServiceReactions && 'is-service'),
    style: maxWidth ? `max-width: ${maxWidth}px` : undefined,
    dir: lang.isRtl ? 'rtl' : 'ltr',
    children: [props.map(({
      reaction,
      recentReactors,
      messageKey,
      reactionKey,
      isChosen,
      tag
    }) => areTags ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SavedTagButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "message-reaction",
      chosenClassName: "chosen",
      containerId: messageKey,
      isOwnMessage: message.isOutgoing,
      isChosen: isChosen,
      reaction: reaction.reaction,
      tag: tag,
      withContextMenu: isCurrentUserPremium,
      onClick: handleClick,
      onRemove: handleRemoveReaction,
      observeIntersection: observeIntersection
    }, reactionKey) : (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ReactionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      chatId: message.chatId,
      messageId: message.id,
      className: "message-reaction",
      chosenClassName: "chosen",
      containerId: messageKey,
      isOwnMessage: message.isOutgoing,
      recentReactors: recentReactors,
      isOutside: isOutside,
      reaction: reaction,
      onClick: handleClick,
      onPaidClick: handlePaidClick,
      observeIntersection: observeIntersection
    }, reactionKey)), metaChildren]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Reactions));

/***/ }),

/***/ "./src/components/middle/message/reactions/SavedTagButton.tsx":
/*!********************************************************************!*\
  !*** ./src/components/middle/message/reactions/SavedTagButton.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_reactions_ReactionAnimatedEmoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/reactions/ReactionAnimatedEmoji */ "./src/components/common/reactions/ReactionAnimatedEmoji.tsx");
/* harmony import */ var _modals_prompt_PromptDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modals/prompt/PromptDialog */ "./src/components/modals/prompt/PromptDialog.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/Menu */ "./src/components/ui/Menu.tsx");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ReactionButton.module.scss */ "./src/components/middle/message/reactions/ReactionButton.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");















const REACTION_SIZE = 1.25 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_3__.REM;
const TITLE_MAX_LENGTH = 15;
const LOOP_LIMIT = 1;
const SavedTagButton = ({
  reaction,
  tag,
  containerId,
  isChosen,
  isOwnMessage,
  className,
  chosenClassName,
  withCount,
  isDisabled,
  withContextMenu,
  observeIntersection,
  onClick,
  onRemove
}) => {
  const {
    editSavedReactionTag
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const menuRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [isRenamePromptOpen, openRenamePrompt, closeRenamePrompt] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    title,
    count
  } = tag || {};
  const hasText = Boolean(title || withCount && count);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    onClick?.(reaction);
  });
  const handleRemoveClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    onRemove?.(reaction);
  });
  const handleRenameTag = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(newTitle => {
    editSavedReactionTag({
      reaction,
      title: newTitle
    });
    closeRenamePrompt();
  });
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, !withContextMenu, undefined, undefined, undefined, true);
  const getTriggerElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => ref.current);
  const getRootElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => document.body);
  const getMenuElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => menuRef.current);
  const getLayout = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => ({
    withPortal: true,
    shouldAvoidNegativePosition: true
  }));
  if (withCount && count === 0) {
    return undefined;
  }
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].root, _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tag, isOwnMessage && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].own, isChosen && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].chosen, isChosen && chosenClassName, isDisabled && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].disabled, className),
    size: "tiny",
    onClick: handleClick,
    onMouseDown: handleBeforeContextMenu,
    onContextMenu: handleContextMenu,
    ref: ref,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_common_reactions_ReactionAnimatedEmoji__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].animatedEmoji,
      containerId: containerId,
      reaction: reaction,
      loopLimit: LOOP_LIMIT,
      size: REACTION_SIZE,
      observeIntersection: observeIntersection
    }), hasText && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
      className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tagText,
      children: [title && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
        children: title
      }), withCount && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
        children: count
      })]
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("svg", {
      className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tail,
      width: "15",
      height: "30",
      viewBox: "0 0 15 30",
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("path", {
        className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tailFill,
        d: "m 0,30 c 3.1855,0 6.1803,-1.5176 8.0641,-4.0864 l 5.835,-7.9568 c 1.2906,-1.7599 1.2906,-4.1537 0,-5.9136 L 8.0641,4.08636 C 6.1803,1.51761 3.1855,0 0,0"
      })
    }), withContextMenu && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_modals_prompt_PromptDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isOpen: isRenamePromptOpen,
      maxLength: TITLE_MAX_LENGTH,
      title: lang(tag?.title ? 'SavedTagRenameTag' : 'SavedTagLabelTag'),
      subtitle: lang('SavedTagLabelTagText'),
      placeholder: lang('SavedTagLabelPlaceholder'),
      initialValue: tag?.title,
      onClose: closeRenamePrompt,
      onSubmit: handleRenameTag
    }), withContextMenu && contextMenuAnchor && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
      ref: menuRef,
      isOpen: isContextMenuOpen,
      anchor: contextMenuAnchor,
      getTriggerElement: getTriggerElement,
      getRootElement: getRootElement,
      getMenuElement: getMenuElement,
      getLayout: getLayout,
      autoClose: true,
      withPortal: true,
      onClose: handleContextMenuClose,
      onCloseAnimationEnd: handleContextMenuHide,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        icon: "tag-filter",
        onClick: handleClick,
        children: lang('SavedTagFilterByTag')
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        icon: "tag-name",
        onClick: openRenamePrompt,
        children: lang(tag?.title ? 'SavedTagRenameTag' : 'SavedTagLabelTag')
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        icon: "tag-crossed",
        destructive: true,
        onClick: handleRemoveClick,
        children: lang('SavedTagRemoveTag')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(SavedTagButton));

/***/ }),

/***/ "./src/components/modals/prompt/PromptDialog.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/modals/prompt/PromptDialog.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"subtitle":"PromptDialog-module__subtitle"});

/***/ }),

/***/ "./src/components/modals/prompt/PromptDialog.tsx":
/*!*******************************************************!*\
  !*** ./src/components/modals/prompt/PromptDialog.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_InputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/InputText */ "./src/components/ui/InputText.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _PromptDialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PromptDialog.module.scss */ "./src/components/modals/prompt/PromptDialog.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");








const PromptDialog = ({
  isOpen,
  title,
  subtitle,
  placeholder,
  submitText,
  maxLength,
  initialValue = '',
  onClose,
  onSubmit
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [text, setText] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handleTextChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    setText(e.target.value);
  });
  const handleSubmit = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    onSubmit(text);
  });
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "narrow",
    title: title,
    isOpen: isOpen,
    onClose: onClose,
    isSlim: true,
    children: [Boolean(subtitle) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _PromptDialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle,
      children: subtitle
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_InputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: placeholder,
      value: text,
      onChange: handleTextChange,
      maxLength: maxLength,
      teactExperimentControlled: true
    }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "dialog-buttons mt-2",
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "confirm-dialog-button",
        onClick: handleSubmit,
        children: submitText || lang('Save')
      }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "confirm-dialog-button",
        isText: true,
        onClick: onClose,
        children: lang('Cancel')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PromptDialog));

/***/ }),

/***/ "./src/hooks/schedulers/useTimeout.ts":
/*!********************************************!*\
  !*** ./src/hooks/schedulers/useTimeout.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLastCallback */ "./src/hooks/useLastCallback.ts");


function useTimeout(callback, delay) {
  const savedCallback = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(callback);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof delay !== 'number') {
      return undefined;
    }
    const id = setTimeout(() => savedCallback(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTimeout);

/***/ }),

/***/ "./src/hooks/useCanvasBlur.ts":
/*!************************************!*\
  !*** ./src/hooks/useCanvasBlur.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCanvasBlur)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fastBlur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fastBlur */ "./src/lib/fastBlur.js");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _useSyncEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSyncEffect */ "./src/hooks/useSyncEffect.ts");





const RADIUS = 2;
const ITERATIONS = 2;
function useCanvasBlur(dataUri, isDisabled = false, withRaf, radius = RADIUS, preferredWidth, preferredHeight) {
  const canvasRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isStarted = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_useSyncEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    if (!isDisabled) {
      isStarted.current = false;
    }
  }, [dataUri, isDisabled]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!dataUri || !canvas || isDisabled || isStarted.current) {
      return;
    }
    isStarted.current = true;
    const img = new Image();
    const processBlur = () => {
      const width = preferredWidth || img.width;
      const height = preferredHeight || img.height;
      const ctx = canvas.getContext('2d', {
        alpha: false
      });
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMutation)(() => {
        canvas.width = width;
        canvas.height = height;
        if (_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_CANVAS_FILTER_SUPPORTED) {
          ctx.filter = `blur(${radius}px)`;
        }
        ctx.drawImage(img, -radius * 2, -radius * 2, width + radius * 4, height + radius * 4);
        if (!_util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_CANVAS_FILTER_SUPPORTED) {
          (0,_lib_fastBlur__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx, 0, 0, width, height, radius, ITERATIONS);
        }
      });
    };
    img.onload = () => {
      if (withRaf) {
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMeasure)(processBlur);
      } else {
        processBlur();
      }
    };
    img.src = dataUri;
  }, [dataUri, isDisabled, preferredHeight, preferredWidth, radius, withRaf]);
  return canvasRef;
}

/***/ }),

/***/ "./src/hooks/useCustomBackground.ts":
/*!******************************************!*\
  !*** ./src/hooks/useCustomBackground.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _util_cacheApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cacheApi */ "./src/util/cacheApi.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/files */ "./src/util/files.ts");





const useCustomBackground = (theme, settingValue) => {
  const {
    setThemeSettings
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [value, setValue] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(settingValue);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settingValue) {
      return;
    }
    if (settingValue.startsWith('#')) {
      setValue(settingValue);
    } else {
      _util_cacheApi__WEBPACK_IMPORTED_MODULE_3__.fetch(_config__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_BG_CACHE_NAME, theme, _util_cacheApi__WEBPACK_IMPORTED_MODULE_3__.Type.Blob).then(blob => {
        const url = URL.createObjectURL(blob);
        (0,_util_files__WEBPACK_IMPORTED_MODULE_4__.preloadImage)(url).then(() => {
          setValue(`url(${url})`);
        });
      }).catch(() => {
        setThemeSettings({
          theme,
          background: undefined,
          backgroundColor: undefined,
          isBlurred: true,
          patternColor: theme === 'dark' ? _config__WEBPACK_IMPORTED_MODULE_2__.DARK_THEME_PATTERN_COLOR : _config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PATTERN_COLOR
        });
      });
    }
  }, [settingValue, theme]);
  return settingValue ? value : undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCustomBackground);

/***/ }),

/***/ "./src/hooks/useEnsureMessage.ts":
/*!***************************************!*\
  !*** ./src/hooks/useEnsureMessage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEnsureMessage)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");


function useEnsureMessage(chatId, messageId, message, replyOriginForId, isDisabled) {
  const {
    loadMessage
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDisabled) return;
    if (messageId && !message) {
      loadMessage({
        chatId,
        messageId,
        replyOriginForId: replyOriginForId
      });
    }
  }, [isDisabled, chatId, message, messageId, replyOriginForId]);
}

/***/ }),

/***/ "./src/hooks/useFolderManager.ts":
/*!***************************************!*\
  !*** ./src/hooks/useFolderManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFolderManagerForChatsCount: () => (/* binding */ useFolderManagerForChatsCount),
/* harmony export */   useFolderManagerForOrderedIds: () => (/* binding */ useFolderManagerForOrderedIds),
/* harmony export */   useFolderManagerForUnreadChatsByFolder: () => (/* binding */ useFolderManagerForUnreadChatsByFolder),
/* harmony export */   useFolderManagerForUnreadCounters: () => (/* binding */ useFolderManagerForUnreadCounters)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_folderManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/folderManager */ "./src/util/folderManager.ts");
/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForceUpdate */ "./src/hooks/useForceUpdate.ts");



function useFolderManagerForOrderedIds(folderId) {
  const forceUpdate = (0,_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_1__.addOrderedIdsCallback)(folderId, forceUpdate), [folderId, forceUpdate]);
  return (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_1__.getOrderedIds)(folderId);
}
function useFolderManagerForUnreadCounters() {
  const forceUpdate = (0,_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_1__.addUnreadCountersCallback)(forceUpdate), [forceUpdate]);
  return (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_1__.getUnreadCounters)();
}
function useFolderManagerForChatsCount() {
  const forceUpdate = (0,_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_1__.addChatsCountCallback)(forceUpdate), [forceUpdate]);
  return (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_1__.getChatsCount)();
}
function useFolderManagerForUnreadChatsByFolder() {
  const forceUpdate = (0,_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_1__.addUnreadChatsByFolderIdCallback)(forceUpdate), [forceUpdate]);
  return (0,_util_folderManager__WEBPACK_IMPORTED_MODULE_1__.getUnreadChatsByFolderId)();
}

/***/ }),

/***/ "./src/hooks/useHorizontalScroll.ts":
/*!******************************************!*\
  !*** ./src/hooks/useHorizontalScroll.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");

const useHorizontalScroll = (containerRef, isDisabled, shouldPreventDefault = false) => {
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDisabled) {
      return undefined;
    }
    const container = containerRef.current;
    function handleScroll(e) {
      // Ignore horizontal scroll and let it work natively (e.g. on touchpad)
      if (!e.deltaX) {
        container.scrollLeft += e.deltaY / 4;
        if (shouldPreventDefault) e.preventDefault();
      }
    }
    container.addEventListener('wheel', handleScroll, {
      passive: !shouldPreventDefault
    });
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [containerRef, isDisabled, shouldPreventDefault]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHorizontalScroll);

/***/ }),

/***/ "./src/hooks/useInputFocusOnOpen.ts":
/*!******************************************!*\
  !*** ./src/hooks/useInputFocusOnOpen.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useInputFocusOnOpen)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _useAppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAppLayout */ "./src/hooks/useAppLayout.ts");




// Focus slows down animation, also it breaks transition layout in Chrome
const FOCUS_DELAY_MS = 500;
const MODAL_HIDE_DELAY_MS = 300;
function useInputFocusOnOpen(inputRef, isOpen, onClose) {
  const {
    isMobile
  } = (0,_useAppLayout__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen) {
      if (!isMobile) {
        setTimeout(() => {
          (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
            if (inputRef.current?.isConnected) {
              inputRef.current.focus();
            }
          });
        }, FOCUS_DELAY_MS);
      }
    } else {
      if (inputRef.current?.isConnected) {
        inputRef.current.blur();
      }
      if (onClose) {
        setTimeout(onClose, MODAL_HIDE_DELAY_MS);
      }
    }
  }, [inputRef, isMobile, isOpen, onClose]);
}

/***/ }),

/***/ "./src/hooks/usePrevious.ts":
/*!**********************************!*\
  !*** ./src/hooks/usePrevious.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");


// This is not render-dependent and will never allow previous to match current
function usePrevious(current) {
  const prevRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (lastRef.current !== current) {
    prevRef.current = lastRef.current;
  }
  lastRef.current = current;
  return prevRef.current;
}

/***/ }),

/***/ "./src/hooks/useResizeMessageObserver.ts":
/*!***********************************************!*\
  !*** ./src/hooks/useResizeMessageObserver.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _util_animateScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/animateScroll */ "./src/util/animateScroll.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _useResizeObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _useThrottledCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useThrottledCallback */ "./src/hooks/useThrottledCallback.ts");






const BOTTOM_FOCUS_SCROLL_THRESHOLD = 5;
const THROTTLE_MS = 300;
const RESIZE_ANIMATION_DURATION = 400;
function useMessageResizeObserver(ref, shouldFocusOnResize = false) {
  const {
    focusLastMessage
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const messageHeightRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const handleResize = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(entry => {
    const lastHeight = messageHeightRef.current;
    const newHeight = entry.contentRect.height;
    messageHeightRef.current = newHeight;
    if ((0,_util_animateScroll__WEBPACK_IMPORTED_MODULE_2__.isAnimatingScroll)() || !lastHeight || newHeight <= lastHeight) return;
    const container = entry.target.closest('.MessageList');
    if (!container) return;
    (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.beginHeavyAnimation)(RESIZE_ANIMATION_DURATION);
    const resizeDiff = newHeight - lastHeight;
    const {
      offsetHeight,
      scrollHeight,
      scrollTop
    } = container;
    const currentScrollBottom = Math.round(scrollHeight - scrollTop - offsetHeight);
    const previousScrollBottom = currentScrollBottom - resizeDiff;
    if (previousScrollBottom <= BOTTOM_FOCUS_SCROLL_THRESHOLD) {
      focusLastMessage();
    }
  });
  const throttledResize = (0,_useThrottledCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(handleResize, [handleResize], THROTTLE_MS, false);
  (0,_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, throttledResize, !shouldFocusOnResize);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMessageResizeObserver);

/***/ }),

/***/ "./src/hooks/useRunDebounced.ts":
/*!**************************************!*\
  !*** ./src/hooks/useRunDebounced.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useRunDebounced)
/* harmony export */ });
/* harmony import */ var _useDebouncedCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDebouncedCallback */ "./src/hooks/useDebouncedCallback.ts");

function useRunDebounced(ms, noFirst, noLast, deps = []) {
  return (0,_useDebouncedCallback__WEBPACK_IMPORTED_MODULE_0__["default"])(cb => {
    cb();
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, deps, ms, noFirst, noLast);
}

/***/ }),

/***/ "./src/hooks/useSchedule.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useSchedule.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _useOldLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _components_common_CalendarModal_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/CalendarModal.async */ "./src/components/common/CalendarModal.async.tsx");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");








const useSchedule = (canScheduleUntilOnline, onCancel, openAt) => {
  const lang = (0,_useOldLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [onScheduled, setOnScheduled] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const handleMessageSchedule = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])((date, isWhenOnline = false) => {
    // Scheduled time can not be less than 10 seconds in future
    const scheduledAt = Math.round(Math.max(date.getTime(), Date.now() + 60 * 1000) / 1000) + (isWhenOnline ? 0 : (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_3__.getServerTimeOffset)());
    onScheduled?.(scheduledAt);
    setOnScheduled(undefined);
  });
  const handleMessageScheduleUntilOnline = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    handleMessageSchedule(new Date(_config__WEBPACK_IMPORTED_MODULE_1__.SCHEDULED_WHEN_ONLINE * 1000), true);
  });
  const handleCloseCalendar = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    setOnScheduled(undefined);
    onCancel?.();
  });
  const requestCalendar = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(whenScheduled => {
    setOnScheduled(() => whenScheduled);
  });
  const scheduledDefaultDate = openAt ? new Date(openAt * 1000) : new Date();
  scheduledDefaultDate.setSeconds(0);
  scheduledDefaultDate.setMilliseconds(0);
  const scheduledMaxDate = new Date();
  scheduledMaxDate.setFullYear(scheduledMaxDate.getFullYear() + 1);
  const calendar = (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_common_CalendarModal_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: Boolean(onScheduled),
    withTimePicker: true,
    selectedAt: scheduledDefaultDate.getTime(),
    maxAt: (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_2__.getDayStartAt)(scheduledMaxDate),
    isFutureMode: true,
    secondButtonLabel: canScheduleUntilOnline ? lang('Schedule.SendWhenOnline') : undefined,
    onClose: handleCloseCalendar,
    onSubmit: handleMessageSchedule,
    onSecondButtonClick: canScheduleUntilOnline ? handleMessageScheduleUntilOnline : undefined
  });
  return [requestCalendar, calendar];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSchedule);

/***/ }),

/***/ "./src/util/animateHorizontalScroll.ts":
/*!*********************************************!*\
  !*** ./src/util/animateHorizontalScroll.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animateHorizontalScroll)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/util/animation.ts");




const DEFAULT_DURATION = 300;
const stopById = new Map();
function animateHorizontalScroll(container, left, duration = DEFAULT_DURATION) {
  if (!(0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobal)())) {
    duration = 0;
  }
  const isRtl = container.getAttribute('dir') === 'rtl';
  const {
    scrollLeft,
    offsetWidth: containerWidth,
    scrollWidth,
    dataset: {
      scrollId
    }
  } = container;
  let path = left - scrollLeft;
  if (path < 0) {
    const remainingPath = -scrollLeft * (isRtl ? -1 : 1);
    path = Math.max(path, remainingPath);
  } else if (path > 0) {
    const remainingPath = scrollWidth - (scrollLeft + containerWidth);
    path = Math.min(path, remainingPath);
  }
  if (path === 0) {
    return Promise.resolve();
  }
  if (scrollId && stopById.has(scrollId)) {
    stopById.get(scrollId)();
  }
  const target = scrollLeft + path;
  return new Promise(resolve => {
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      if (duration === 0) {
        container.scrollLeft = target;
        resolve();
        return;
      }
      let isStopped = false;
      const id = Math.random().toString();
      container.dataset.scrollId = id;
      stopById.set(id, () => {
        isStopped = true;
      });
      container.style.scrollSnapType = 'none';
      const startAt = Date.now();
      function cleanup() {
        container.style.scrollSnapType = '';
        delete container.dataset.scrollId;
        stopById.delete(id);
      }
      (0,_animation__WEBPACK_IMPORTED_MODULE_3__.animate)(() => {
        if (isStopped) {
          cleanup();
          return false;
        }
        const t = Math.min((Date.now() - startAt) / duration, 1);
        const currentPath = path * (1 - transition(t));
        container.scrollLeft = Math.round(target - currentPath);
        if (t >= 1) {
          cleanup();
          resolve();
        }
        return t < 1;
      }, _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation);
    });
  });
}
function transition(t) {
  return 1 - (1 - t) ** 3.5;
}

/***/ }),

/***/ "./src/util/animateScroll.ts":
/*!***********************************!*\
  !*** ./src/util/animateScroll.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelScrollBlockingAnimation: () => (/* binding */ cancelScrollBlockingAnimation),
/* harmony export */   "default": () => (/* binding */ animateScroll),
/* harmony export */   isAnimatingScroll: () => (/* binding */ isAnimatingScroll),
/* harmony export */   restartCurrentScrollAnimation: () => (/* binding */ restartCurrentScrollAnimation)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _visibility_getOffsetToContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visibility/getOffsetToContainer */ "./src/util/visibility/getOffsetToContainer.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation */ "./src/util/animation.ts");









let isAnimating = false;
let currentArgs;
let onHeavyAnimationEnd;
function animateScroll(args) {
  currentArgs = args;
  const mutate = createMutateFunction(args);
  if (args.shouldReturnMutationFn) {
    return mutate;
  }
  (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation)(mutate);
  return undefined;
}
function restartCurrentScrollAnimation() {
  if (!isAnimating) {
    return;
  }
  (0,_animation__WEBPACK_IMPORTED_MODULE_8__.cancelSingleAnimation)();
  (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMeasure)(() => {
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation)(createMutateFunction(currentArgs));
  });
}
function createMutateFunction(args) {
  const {
    container,
    element,
    position,
    margin = 0,
    maxDistance = _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE,
    forceDirection,
    forceNormalContainerHeight
  } = args;
  let forceDuration = args.forceDuration;
  if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Static || !(0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)())) {
    forceDuration = 0;
  }
  const {
    offsetHeight: elementHeight
  } = element;
  const {
    scrollTop: currentScrollTop,
    offsetHeight: containerHeight,
    scrollHeight
  } = container;
  const elementTop = (0,_visibility_getOffsetToContainer__WEBPACK_IMPORTED_MODULE_7__["default"])(element, container).top;
  const targetContainerHeight = forceNormalContainerHeight && container.dataset.normalHeight ? Number(container.dataset.normalHeight) : containerHeight;
  let scrollTo;
  switch (position) {
    case 'start':
      scrollTo = elementTop - margin + (_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__.IS_ANDROID ? 1 : 0);
      break;
    case 'end':
      scrollTo = elementTop + elementHeight + margin - targetContainerHeight;
      break;
    // 'nearest' is not supported yet
    case 'nearest':
    case 'center':
    case 'centerOrTop':
      scrollTo = elementHeight < targetContainerHeight ? elementTop + elementHeight / 2 - targetContainerHeight / 2 : elementTop - margin;
      break;
  }
  const scrollFrom = calculateScrollFrom(container, scrollTo, maxDistance, forceDirection);
  let path = scrollTo - scrollFrom;
  if (path < 0) {
    const remainingPath = -scrollFrom;
    path = Math.max(path, remainingPath);
  } else if (path > 0) {
    const remainingPath = scrollHeight - (scrollFrom + targetContainerHeight);
    path = Math.min(path, remainingPath);
  }
  const absPath = Math.abs(path);
  return () => {
    if (absPath < 1) {
      if (currentScrollTop !== scrollFrom) {
        container.scrollTop = scrollFrom;
      }
      return;
    }
    const target = scrollFrom + path;
    if (forceDuration === 0) {
      container.scrollTop = target;
      return;
    }
    const transition = absPath <= _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_SHORT_TRANSITION_MAX_DISTANCE ? shortTransition : longTransition;
    const duration = forceDuration || _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MIN_DURATION + absPath / _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE * (_config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DURATION - _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MIN_DURATION);
    const startAt = Date.now();
    isAnimating = true;
    const prevOnHeavyAnimationEnd = onHeavyAnimationEnd;
    onHeavyAnimationEnd = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.beginHeavyAnimation)(undefined, true);
    prevOnHeavyAnimationEnd?.();
    (0,_animation__WEBPACK_IMPORTED_MODULE_8__.animateSingle)(() => {
      const t = Math.min((Date.now() - startAt) / duration, 1);
      const currentPath = path * (1 - transition(t));
      const newScrollTop = Math.round(target - currentPath);
      container.scrollTop = newScrollTop;
      isAnimating = t < 1 && newScrollTop !== target;
      if (!isAnimating) {
        currentArgs = undefined;
        onHeavyAnimationEnd?.();
        onHeavyAnimationEnd = undefined;
      }
      return isAnimating;
    }, _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation);
  };
}
function isAnimatingScroll() {
  return isAnimating;
}
function cancelScrollBlockingAnimation() {
  onHeavyAnimationEnd();
  onHeavyAnimationEnd = undefined;
}
function calculateScrollFrom(container, scrollTo, maxDistance = _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE, forceDirection) {
  const {
    scrollTop
  } = container;
  if (forceDirection === undefined) {
    const offset = scrollTo - scrollTop;
    if (offset < -maxDistance) {
      return scrollTop + (offset + maxDistance);
    } else if (offset > maxDistance) {
      return scrollTop + (offset - maxDistance);
    }
  } else if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Up) {
    return scrollTo + maxDistance;
  } else if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Down) {
    return Math.max(0, scrollTo - maxDistance);
  }
  return scrollTop;
}
function shortTransition(t) {
  return 1 - (1 - t) ** 3.5;
}
function longTransition(t) {
  return 1 - (1 - t) ** 6;
}

/***/ }),

/***/ "./src/util/getMessageIdsForSelectedText.ts":
/*!**************************************************!*\
  !*** ./src/util/getMessageIdsForSelectedText.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMessageIdsForSelectedText)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");

const ELEMENT_NODE = 1;
function getMessageIdsForSelectedText() {
  const selection = window.getSelection();
  let selectedFragments = selection?.rangeCount ? selection.getRangeAt(0).cloneContents() : undefined;
  const shouldIncludeLastMessage = selection?.focusNode && selection.focusOffset > 0 && hasParentWithClassName(selection.focusNode, _config__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_CONTENT_CLASS_NAME);
  if (!selectedFragments || selectedFragments.childElementCount === 0) {
    return undefined;
  }
  const messageIds = Array.from(selectedFragments.children).reduce((result, node) => {
    if (node.nodeType === ELEMENT_NODE && node.classList.contains('message-date-group')) {
      return Array.from(node.querySelectorAll('.Message')).reduce((acc, messageEl) => acc.concat(Number(messageEl.dataset.messageId)), result);
    } else if (node.nodeType === ELEMENT_NODE && node.classList.contains('Message')) {
      return result.concat(Number(node.dataset.messageId));
    }
    return result;
  }, []);

  // Cleanup a document fragment because it is playing media content in the background
  while (selectedFragments.firstChild) {
    selectedFragments.removeChild(selectedFragments.firstChild);
  }
  selectedFragments = undefined;
  if (!shouldIncludeLastMessage) {
    messageIds.pop();
  }
  return messageIds;
}
function hasParentWithClassName(element, className) {
  if (element.nodeType === ELEMENT_NODE && element.classList.contains(className)) {
    return true;
  }
  return element.parentNode ? hasParentWithClassName(element.parentNode, className) : false;
}

/***/ }),

/***/ "./src/util/objects/customPeer.ts":
/*!****************************************!*\
  !*** ./src/util/objects/customPeer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CUSTOM_PEER_EXCLUDED_CHAT_TYPES: () => (/* binding */ CUSTOM_PEER_EXCLUDED_CHAT_TYPES),
/* harmony export */   CUSTOM_PEER_HIDDEN: () => (/* binding */ CUSTOM_PEER_HIDDEN),
/* harmony export */   CUSTOM_PEER_INCLUDED_CHAT_TYPES: () => (/* binding */ CUSTOM_PEER_INCLUDED_CHAT_TYPES),
/* harmony export */   CUSTOM_PEER_PREMIUM: () => (/* binding */ CUSTOM_PEER_PREMIUM)
/* harmony export */ });
const CUSTOM_PEER_PREMIUM = {
  isCustomPeer: true,
  type: 'premium',
  titleKey: 'PrivacyPremium',
  subtitleKey: 'PrivacyPremiumText',
  avatarIcon: 'star',
  isAvatarSquare: true,
  withPremiumGradient: true
};
const CUSTOM_PEER_INCLUDED_CHAT_TYPES = [{
  isCustomPeer: true,
  type: 'contacts',
  titleKey: 'FilterContacts',
  avatarIcon: 'user',
  isAvatarSquare: true,
  peerColorId: 5
}, {
  isCustomPeer: true,
  type: 'nonContacts',
  titleKey: 'FilterNonContacts',
  avatarIcon: 'non-contacts',
  isAvatarSquare: true,
  peerColorId: 4
}, {
  isCustomPeer: true,
  type: 'groups',
  titleKey: 'FilterGroups',
  avatarIcon: 'group',
  isAvatarSquare: true,
  peerColorId: 3
}, {
  isCustomPeer: true,
  type: 'channels',
  titleKey: 'FilterChannels',
  avatarIcon: 'channel',
  isAvatarSquare: true,
  peerColorId: 1
}, {
  isCustomPeer: true,
  type: 'bots',
  titleKey: 'FilterBots',
  avatarIcon: 'bots',
  isAvatarSquare: true,
  peerColorId: 6
}];
const CUSTOM_PEER_EXCLUDED_CHAT_TYPES = [{
  isCustomPeer: true,
  type: 'excludeMuted',
  titleKey: 'FilterMuted',
  avatarIcon: 'mute',
  isAvatarSquare: true,
  peerColorId: 6
}, {
  isCustomPeer: true,
  type: 'excludeRead',
  titleKey: 'FilterRead',
  avatarIcon: 'readchats',
  isAvatarSquare: true,
  peerColorId: 4
}, {
  isCustomPeer: true,
  type: 'excludeArchived',
  titleKey: 'FilterArchived',
  avatarIcon: 'archive',
  isAvatarSquare: true,
  peerColorId: 5
}];
const CUSTOM_PEER_HIDDEN = {
  isCustomPeer: true,
  type: 'hidden',
  titleKey: 'StarsTransactionHidden',
  avatarIcon: 'author-hidden',
  peerColorId: 4
};

/***/ }),

/***/ "./src/util/parseHtmlAsFormattedText.ts":
/*!**********************************************!*\
  !*** ./src/util/parseHtmlAsFormattedText.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENTITY_CLASS_BY_NODE_NAME: () => (/* binding */ ENTITY_CLASS_BY_NODE_NAME),
/* harmony export */   "default": () => (/* binding */ parseHtmlAsFormattedText),
/* harmony export */   fixImageContent: () => (/* binding */ fixImageContent)
/* harmony export */ });
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");



const ENTITY_CLASS_BY_NODE_NAME = {
  B: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Bold,
  STRONG: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Bold,
  I: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Italic,
  EM: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Italic,
  INS: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Underline,
  U: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Underline,
  S: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Strike,
  STRIKE: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Strike,
  DEL: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Strike,
  CODE: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Code,
  PRE: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Pre,
  BLOCKQUOTE: _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Blockquote
};
const MAX_TAG_DEEPNESS = 3;
function parseHtmlAsFormattedText(html, withMarkdownLinks = false, skipMarkdown = false) {
  const fragment = document.createElement('div');
  fragment.innerHTML = skipMarkdown ? html : withMarkdownLinks ? parseMarkdown(parseMarkdownLinks(html)) : parseMarkdown(html);
  fixImageContent(fragment);
  const text = fragment.innerText.trim().replace(/\u200b+/g, '');
  const trimShift = fragment.innerText.indexOf(text[0]);
  let textIndex = -trimShift;
  let recursionDeepness = 0;
  const entities = [];
  function addEntity(node) {
    if (node.nodeType === Node.COMMENT_NODE) return;
    const {
      index,
      entity
    } = getEntityDataFromNode(node, text, textIndex);
    if (entity) {
      textIndex = index;
      entities.push(entity);
    } else if (node.textContent) {
      // Skip newlines on the beginning
      if (index === 0 && node.textContent.trim() === '') {
        return;
      }
      textIndex += node.textContent.length;
    }
    if (node.hasChildNodes() && recursionDeepness <= MAX_TAG_DEEPNESS) {
      recursionDeepness += 1;
      Array.from(node.childNodes).forEach(addEntity);
    }
  }
  Array.from(fragment.childNodes).forEach(node => {
    recursionDeepness = 1;
    addEntity(node);
  });
  return {
    text,
    entities: entities.length ? entities : undefined
  };
}
function fixImageContent(fragment) {
  fragment.querySelectorAll('img').forEach(node => {
    if (node.dataset.documentId) {
      // Custom Emoji
      node.textContent = node.alt || '';
    } else {
      // Regular emoji with image fallback
      node.replaceWith(node.alt || '');
    }
  });
}
function parseMarkdown(html) {
  let parsedHtml = html.slice(0);

  // Strip redundant nbsp's
  parsedHtml = parsedHtml.replace(/&nbsp;/g, ' ');

  // Replace <div><br></div> with newline (new line in Safari)
  parsedHtml = parsedHtml.replace(/<div><br([^>]*)?><\/div>/g, '\n');
  // Replace <br> with newline
  parsedHtml = parsedHtml.replace(/<br([^>]*)?>/g, '\n');

  // Strip redundant <div> tags
  parsedHtml = parsedHtml.replace(/<\/div>(\s*)<div>/g, '\n');
  parsedHtml = parsedHtml.replace(/<div>/g, '\n');
  parsedHtml = parsedHtml.replace(/<\/div>/g, '');

  // Pre
  parsedHtml = parsedHtml.replace(/^`{3}(.*?)[\n\r](.*?[\n\r]?)`{3}/gms, '<pre data-language="$1">$2</pre>');
  parsedHtml = parsedHtml.replace(/^`{3}[\n\r]?(.*?)[\n\r]?`{3}/gms, '<pre>$1</pre>');
  parsedHtml = parsedHtml.replace(/[`]{3}([^`]+)[`]{3}/g, '<pre>$1</pre>');

  // Code
  parsedHtml = parsedHtml.replace(/(?!<(code|pre)[^<]*|<\/)[`]{1}([^`\n]+)[`]{1}(?![^<]*<\/(code|pre)>)/g, '<code>$2</code>');

  // Custom Emoji markdown tag
  if (!_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__.IS_EMOJI_SUPPORTED) {
    // Prepare alt text for custom emoji
    parsedHtml = parsedHtml.replace(/\[<img[^>]+alt="([^"]+)"[^>]*>]/gm, '[$1]');
  }
  parsedHtml = parsedHtml.replace(/(?!<(?:code|pre)[^<]*|<\/)\[([^\]\n]+)\]\(customEmoji:(\d+)\)(?![^<]*<\/(?:code|pre)>)/g, '<img alt="$1" data-document-id="$2">');

  // Other simple markdown
  parsedHtml = parsedHtml.replace(/(?!<(code|pre)[^<]*|<\/)[*]{2}([^*\n]+)[*]{2}(?![^<]*<\/(code|pre)>)/g, '<b>$2</b>');
  parsedHtml = parsedHtml.replace(/(?!<(code|pre)[^<]*|<\/)[_]{2}([^_\n]+)[_]{2}(?![^<]*<\/(code|pre)>)/g, '<i>$2</i>');
  parsedHtml = parsedHtml.replace(/(?!<(code|pre)[^<]*|<\/)[~]{2}([^~\n]+)[~]{2}(?![^<]*<\/(code|pre)>)/g, '<s>$2</s>');
  parsedHtml = parsedHtml.replace(/(?!<(code|pre)[^<]*|<\/)[|]{2}([^|\n]+)[|]{2}(?![^<]*<\/(code|pre)>)/g, `<span data-entity-type="${_api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Spoiler}">$2</span>`);
  return parsedHtml;
}
function parseMarkdownLinks(html) {
  return html.replace(new RegExp(`\\[([^\\]]+?)]\\((${_config__WEBPACK_IMPORTED_MODULE_1__.RE_LINK_TEMPLATE}+?)\\)`, 'g'), (_, text, link) => {
    const url = link.includes('://') ? link : link.includes('@') ? `mailto:${link}` : `https://${link}`;
    return `<a href="${url}">${text}</a>`;
  });
}
function getEntityDataFromNode(node, rawText, textIndex) {
  const type = getEntityTypeFromNode(node);
  if (!type || !node.textContent) {
    return {
      index: textIndex,
      entity: undefined
    };
  }
  const rawIndex = rawText.indexOf(node.textContent, textIndex);
  // In some cases, last text entity ends with a newline (which gets trimmed from `rawText`).
  // In this case, `rawIndex` would return `-1`, so we use `textIndex` instead.
  const index = rawIndex >= 0 ? rawIndex : textIndex;
  const offset = rawText.substring(0, index).length;
  const {
    length
  } = rawText.substring(index, index + node.textContent.length);
  if (type === _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.TextUrl) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        url: node.href
      }
    };
  }
  if (type === _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.MentionName) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        userId: node.dataset.userId
      }
    };
  }
  if (type === _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Pre) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        language: node.dataset.language
      }
    };
  }
  if (type === _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.CustomEmoji) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        documentId: node.dataset.documentId
      }
    };
  }
  if (type === _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Timestamp) {
    const timestamp = Number(node.dataset.timestamp);
    if (Number.isNaN(timestamp)) {
      return {
        index,
        entity: undefined
      };
    }
    return {
      index,
      entity: {
        type,
        offset,
        length,
        timestamp
      }
    };
  }
  return {
    index,
    entity: {
      type,
      offset,
      length
    }
  };
}
function getEntityTypeFromNode(node) {
  if (node instanceof HTMLElement && node.dataset.entityType) {
    return node.dataset.entityType;
  }
  if (ENTITY_CLASS_BY_NODE_NAME[node.nodeName]) {
    return ENTITY_CLASS_BY_NODE_NAME[node.nodeName];
  }
  if (node.nodeName === 'A') {
    const anchor = node;
    if (anchor.dataset.entityType === _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.MentionName) {
      return _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.MentionName;
    }
    if (anchor.dataset.entityType === _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Url) {
      return _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Url;
    }
    if (anchor.href.startsWith('mailto:')) {
      return _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Email;
    }
    if (anchor.href.startsWith('tel:')) {
      return _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Phone;
    }
    if (anchor.href !== anchor.textContent) {
      return _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.TextUrl;
    }
    return _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.Url;
  }
  if (node.nodeName === 'SPAN') {
    return node.dataset.entityType;
  }
  if (node.nodeName === 'IMG') {
    if (node.dataset.documentId) {
      return _api_types__WEBPACK_IMPORTED_MODULE_0__.ApiMessageEntityTypes.CustomEmoji;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./src/util/scrollLock.ts":
/*!********************************!*\
  !*** ./src/util/scrollLock.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScrolling: () => (/* binding */ disableScrolling),
/* harmony export */   enableScrolling: () => (/* binding */ enableScrolling),
/* harmony export */   getTouchY: () => (/* binding */ getTouchY)
/* harmony export */ });
let scrollLockEl;
let excludedClosestSelector;
const IGNORED_KEYS = {
  Down: true,
  ArrowDown: true,
  Up: true,
  ArrowUp: true,
  Left: true,
  ArrowLeft: true,
  Right: true,
  ArrowRight: true,
  ' ': true,
  PageUp: true,
  PageDown: true,
  End: true,
  Home: true,
  Tab: true
};
function isTextBox(target) {
  if (!target || !(target instanceof HTMLElement)) return false;
  const element = target;
  const tagName = element.tagName.toLowerCase();
  if (tagName === 'textarea') return true;
  if (tagName !== 'input') return false;
  const type = element.getAttribute('type');
  if (!type) return false;
  const inputTypes = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week'];
  return inputTypes.indexOf(type.toLowerCase()) > -1;
}
const getTouchY = e => {
  return 'changedTouches' in e ? e.changedTouches[0].clientY : 0;
};
const preventDefault = e => {
  const deltaY = 'deltaY' in e ? e.deltaY : getTouchY(e);
  if (!scrollLockEl
  // Allow overlay scrolling
  || !scrollLockEl.contains(e.target)
  // Prevent top overscroll
  || scrollLockEl.scrollTop <= 0 && deltaY <= 0
  // Prevent bottom overscroll
  || scrollLockEl.scrollTop >= scrollLockEl.scrollHeight - scrollLockEl.offsetHeight && deltaY >= 0) {
    if (excludedClosestSelector && e.target.closest(excludedClosestSelector)) return;
    e.preventDefault();
  }
};
function preventDefaultForScrollKeys(e) {
  if (IGNORED_KEYS[e.key] && !isTextBox(e.target)) {
    e.preventDefault();
  }
}
function disableScrolling(el, _excludedClosestSelector) {
  scrollLockEl = el;
  excludedClosestSelector = _excludedClosestSelector;
  // Disable scrolling in Chrome
  document.addEventListener('wheel', preventDefault, {
    passive: false
  });
  document.addEventListener('touchmove', preventDefault, {
    passive: false
  });
  document.onkeydown = preventDefaultForScrollKeys;
  return enableScrolling;
}
function enableScrolling() {
  scrollLockEl = undefined;
  excludedClosestSelector = undefined;
  document.removeEventListener('wheel', preventDefault); // Enable scrolling in Chrome
  document.removeEventListener('touchmove', preventDefault);
  // eslint-disable-next-line no-null/no-null
  document.onkeydown = null;
}

/***/ }),

/***/ "./src/util/visibility/getOffsetToContainer.ts":
/*!*****************************************************!*\
  !*** ./src/util/visibility/getOffsetToContainer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetToContainer)
/* harmony export */ });
function getOffsetToContainer(element, container) {
  let offsetTop = 0;
  let offsetLeft = 0;
  let current = element;
  while (current && current !== container && !current.contains(container)) {
    offsetTop += current.offsetTop;
    offsetLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return {
    top: offsetTop,
    left: offsetLeft
  };
}

/***/ }),

/***/ "./src/util/visibility/isElementInViewport.ts":
/*!****************************************************!*\
  !*** ./src/util/visibility/isElementInViewport.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElementInViewport: () => (/* binding */ isElementInViewport)
/* harmony export */ });
/* harmony import */ var _windowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../windowSize */ "./src/util/windowSize.ts");

function isElementInViewport(el) {
  if (el.style.display === 'none') {
    return false;
  }
  const rect = el.getBoundingClientRect();
  const {
    height: windowHeight
  } = _windowSize__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  return rect.top <= windowHeight && rect.top + rect.height >= 0;
}

/***/ })

}]);
//# sourceMappingURL=src_components_common_AnimatedIconFromSticker_tsx-src_components_common_BadgeButton_tsx-src_c-0ff5a5.007f5f04d7cb5f72326f.js.map