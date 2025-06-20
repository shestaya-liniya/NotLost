"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_common_PeerBadge_tsx-src_components_common_pickers_PickerModal_tsx-src_compone-326c9b"],{

/***/ "./src/components/common/PeerBadge.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/common/PeerBadge.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PeerBadge-module__root","top":"PeerBadge-module__top","badge":"PeerBadge-module__badge","text":"PeerBadge-module__text"});

/***/ }),

/***/ "./src/components/common/PeerBadge.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/PeerBadge.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PeerBadge.module.scss */ "./src/components/common/PeerBadge.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");







const PeerBadge = ({
  peer: avatarPeer,
  avatarWebPhoto,
  avatarSize,
  text,
  badgeText,
  badgeIcon,
  className,
  badgeClassName,
  badgeIconClassName,
  textClassName,
  onClick
}) => {
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root, onClick && _PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].clickable, className),
    onClick: onClick,
    children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: _PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].top,
      children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: avatarSize,
        peer: avatarPeer,
        webPhoto: avatarWebPhoto
      }), badgeText && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badge, badgeClassName),
        dir: lang.isRtl ? 'rtl' : 'ltr',
        children: [badgeIcon && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: badgeIcon,
          className: badgeIconClassName
        }), badgeText]
      })]
    }), text && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].text, textClassName),
      children: text
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PeerBadge));

/***/ }),

/***/ "./src/components/common/pickers/PickerModal.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/common/pickers/PickerModal.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"content":"PickerModal-module__content","fixedHeight":"PickerModal-module__fixedHeight","withSearch":"PickerModal-module__withSearch","header":"PickerModal-module__header","buttonWrapper":"PickerModal-module__buttonWrapper"});

/***/ }),

/***/ "./src/components/common/pickers/PickerModal.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/pickers/PickerModal.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PickerModal.module.scss */ "./src/components/common/pickers/PickerModal.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");







const PickerModal = ({
  confirmButtonText,
  isConfirmDisabled,
  shouldAdaptToSearch,
  withFixedHeight,
  onConfirm,
  withPremiumGradient,
  ...modalProps
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const hasButton = Boolean(confirmButtonText || onConfirm);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...modalProps,
    isSlim: true,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(shouldAdaptToSearch && _PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].withSearch, withFixedHeight && _PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fixedHeight, modalProps.className),
    contentClassName: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].content, modalProps.contentClassName),
    headerClassName: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].header, modalProps.headerClassName),
    children: [modalProps.children, hasButton && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: _PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].buttonWrapper,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        withPremiumGradient: withPremiumGradient,
        onClick: onConfirm || modalProps.onClose,
        color: "primary",
        size: "smaller",
        disabled: isConfirmDisabled,
        children: confirmButtonText || lang('Confirm')
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PickerModal));

/***/ }),

/***/ "./src/components/modals/common/TableAboutModal.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/modals/common/TableAboutModal.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"TableAboutModal-module__root","title":"TableAboutModal-module__title","description":"TableAboutModal-module__description","secondary":"TableAboutModal-module__secondary","topIcon":"TableAboutModal-module__topIcon","listItemIcon":"TableAboutModal-module__listItemIcon","content":"TableAboutModal-module__content","separator":"TableAboutModal-module__separator"});

/***/ }),

/***/ "./src/components/modals/common/TableAboutModal.tsx":
/*!**********************************************************!*\
  !*** ./src/components/modals/common/TableAboutModal.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/ListItem */ "./src/components/ui/ListItem.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _ui_Separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Separator */ "./src/components/ui/Separator.tsx");
/* harmony import */ var _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableAboutModal.module.scss */ "./src/components/modals/common/TableAboutModal.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");









const TableAboutModal = ({
  isOpen,
  listItemData,
  headerIconName,
  header,
  footer,
  buttonText,
  hasBackdrop,
  withSeparator,
  onClose,
  onButtonClick,
  contentClassName
}) => {
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: isOpen,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root, contentClassName),
    contentClassName: _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].content,
    hasAbsoluteCloseButton: true,
    absoluteCloseButtonColor: hasBackdrop ? 'translucent-white' : undefined,
    onClose: onClose,
    children: [headerIconName && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].topIcon,
      children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: headerIconName
      })
    }), header, (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: listItemData?.map(([icon, title, subtitle]) => {
        return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isStatic: true,
          multiline: true,
          icon: icon,
          iconClassName: _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].listItemIcon,
          children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "title",
            children: title
          }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "subtitle",
            children: subtitle
          })]
        });
      })
    }), withSeparator && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_Separator__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].separator
    }), footer, buttonText && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "smaller",
      onClick: onButtonClick || onClose,
      children: buttonText
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(TableAboutModal));

/***/ }),

/***/ "./src/components/modals/common/TableInfoModal.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/modals/common/TableInfoModal.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"content":"TableInfoModal-module__content","title":"TableInfoModal-module__title","value":"TableInfoModal-module__value","table":"TableInfoModal-module__table","noFooter":"TableInfoModal-module__noFooter","cell":"TableInfoModal-module__cell","fullWidth":"TableInfoModal-module__fullWidth","avatar":"TableInfoModal-module__avatar","chatItem":"TableInfoModal-module__chatItem"});

/***/ }),

/***/ "./src/components/modals/common/TableInfoModal.tsx":
/*!*********************************************************!*\
  !*** ./src/components/modals/common/TableInfoModal.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_PeerChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/PeerChip */ "./src/components/common/PeerChip.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableInfoModal.module.scss */ "./src/components/modals/common/TableInfoModal.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");










const TableInfoModal = ({
  isOpen,
  title,
  tableData,
  headerAvatarPeer,
  header,
  modalHeader,
  footer,
  buttonText,
  className,
  hasBackdrop,
  onClose,
  onButtonClick,
  withBalanceBar,
  isLowStackPriority
}) => {
  const {
    openChat
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const handleOpenChat = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(peerId => {
    openChat({
      id: peerId
    });
    onClose();
  });
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: isOpen,
    hasCloseButton: Boolean(title),
    hasAbsoluteCloseButton: !title,
    absoluteCloseButtonColor: hasBackdrop ? 'translucent-white' : undefined,
    isSlim: true,
    header: modalHeader,
    title: title,
    className: className,
    contentClassName: _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].content,
    onClose: onClose,
    withBalanceBar: withBalanceBar,
    isLowStackPriority: isLowStackPriority,
    children: [headerAvatarPeer && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      peer: headerAvatarPeer,
      size: "jumbo",
      className: _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].avatar
    }), header, (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].table,
      children: tableData?.map(([label, value]) => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [Boolean(label) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cell, _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].title),
          children: label
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cell, _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].value, !label && _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].fullWidth),
          children: typeof value === 'object' && 'chatId' in value ? (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_PeerChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
            peerId: value.chatId,
            className: _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].chatItem,
            forceShowSelf: true,
            withEmojiStatus: value.withEmojiStatus,
            clickArg: value.chatId,
            onClick: handleOpenChat
          }) : value
        })]
      }))
    }), footer, buttonText && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: !footer ? _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].noFooter : undefined,
      size: "smaller",
      onClick: onButtonClick || onClose,
      children: buttonText
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(TableInfoModal));

/***/ }),

/***/ "./src/components/modals/stars/StarTopupOptionList.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/modals/stars/StarTopupOptionList.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"options":"StarTopupOptionList-module__options","option":"StarTopupOptionList-module__option","active":"StarTopupOptionList-module__active","wideOption":"StarTopupOptionList-module__wideOption","optionTop":"StarTopupOptionList-module__optionTop","stackedStars":"StarTopupOptionList-module__stackedStars","stackedStar":"StarTopupOptionList-module__stackedStar","optionBottom":"StarTopupOptionList-module__optionBottom","moreOptions":"StarTopupOptionList-module__moreOptions","iconDown":"StarTopupOptionList-module__iconDown"});

/***/ }),

/***/ "./src/components/modals/stars/StarTopupOptionList.tsx":
/*!*************************************************************!*\
  !*** ./src/components/modals/stars/StarTopupOptionList.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_formatCurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/formatCurrency */ "./src/util/formatCurrency.tsx");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StarTopupOptionList.module.scss */ "./src/components/modals/stars/StarTopupOptionList.module.scss");
/* harmony import */ var _teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @teact/jsx-runtime */ "./src/lib/teact/jsx-runtime.ts");













const MAX_STARS_COUNT = 6;
const StarTopupOptionList = ({
  isActive,
  className,
  options,
  selectedStarOption,
  selectedStarCount,
  starsNeeded,
  onClick
}) => {
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const [areOptionsExtended, markOptionsExtended, unmarkOptionsExtended] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isActive) {
      unmarkOptionsExtended();
    }
  }, [isActive]);
  const [renderingOptions, canExtend] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!options) return [undefined, false];
    const maxOption = options.reduce((max, option) => max.stars > option.stars ? max : option);
    const forceShowAll = starsNeeded && maxOption.stars < starsNeeded;
    const result = [];
    let currentStackedStarsCount = 0;
    let canExtendOptions = false;
    options.forEach((option, index) => {
      if (!option.isExtended) currentStackedStarsCount++;
      if (starsNeeded && !forceShowAll && option.stars < starsNeeded) return;
      if (!areOptionsExtended && option.isExtended) {
        canExtendOptions = true;
        return;
      }
      result.push({
        option,
        starsCount: Math.min(currentStackedStarsCount, MAX_STARS_COUNT),
        isWide: index === options.length - 1
      });
    });
    return [result, canExtendOptions];
  }, [areOptionsExtended, options, starsNeeded]);
  return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].options, className),
    children: [renderingOptions?.map(({
      option,
      starsCount,
      isWide
    }) => {
      const length = renderingOptions?.length;
      const isOdd = length % 2 === 0;
      const isActiveOption = option === selectedStarOption;
      let perUserStarCount;
      if (option && 'winners' in option) {
        const winner = option.winners.find(opt => opt.users === selectedStarCount) || option.winners.reduce((max, opt) => opt.users > max.users ? opt : max, option.winners[0]);
        perUserStarCount = winner?.perUserStars;
      }
      return (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].option, !isOdd && isWide && _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].wideOption, isActiveOption && _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].active),
        onClick: () => onClick?.(option),
        children: [(0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].optionTop,
          children: ["+", (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(option.stars), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].stackedStars,
            dir: lang.isRtl ? 'ltr' : 'rtl',
            children: Array.from({
              length: starsCount
            }).map(() => (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].stackedStar,
              type: "gold",
              size: "big"
            }))
          })]
        }), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].optionBottom,
          children: (0,_util_formatCurrency__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(lang, option.amount, option.currency)
        }), (isActiveOption || selectedStarOption && 'winners' in selectedStarOption) && Boolean(perUserStarCount) && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].optionBottom,
          children: (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].perUserStars,
            children: (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_4__["default"])(oldLang('BoostGift.Stars.PerUser', (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(perUserStarCount)))
          })
        })]
      }, option.stars);
    }), !areOptionsExtended && canExtend && (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].moreOptions,
      isText: true,
      noForcedUpperCase: true,
      onClick: markOptionsExtended,
      children: [oldLang('Stars.Purchase.ShowMore'), (0,_teact_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].iconDown,
        name: "down"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(StarTopupOptionList));

/***/ })

}]);
//# sourceMappingURL=src_components_common_PeerBadge_tsx-src_components_common_pickers_PickerModal_tsx-src_compone-326c9b.8ddcec0353d6e16499a9.js.map