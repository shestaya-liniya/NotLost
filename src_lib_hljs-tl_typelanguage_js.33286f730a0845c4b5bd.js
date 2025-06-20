"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_lib_hljs-tl_typelanguage_js"],{

/***/ "./src/lib/hljs-tl/typelanguage.js":
/*!*****************************************!*\
  !*** ./src/lib/hljs-tl/typelanguage.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hljs => {
  const IDENTIFIER_RE = '[a-zA-Z_0-9]+';
  const IDENTIFIER_WITH_NAMESPACE_RE = '[a-zA-Z_0-9.]+';
  const TL = [{
    className: 'keyword',
    begin: '---',
    end: '---'
  }, {
    className: 'number',
    begin: '#',
    end: '\\s',
    excludeBegin: true,
    excludeEnd: true
  }, {
    className: 'punctuation',
    match: '[:#?=<>]'
  }, {
    className: 'symbol',
    match: 'flags\\d*\\.\\d*' // Flagged parameters
  }, {
    className: 'built_in',
    match: 'flags:#' // Flags
  }, {
    className: 'title.class',
    match: `^${IDENTIFIER_RE}(?=\\.)` // Namespace
  }, {
    className: 'title.function',
    match: `^${IDENTIFIER_RE}(?=[\\s#])` // Identifier followed by space or #
  }, {
    className: 'title.function',
    match: `(?<=\\.)${IDENTIFIER_RE}(?=[\\s#])` // Identifier after namespace
  }, {
    className: 'params',
    match: `(?<=\\s)${IDENTIFIER_RE}(?=:)` // Parameter name
  }, {
    className: 'type',
    match: `(?<=[:?])${IDENTIFIER_WITH_NAMESPACE_RE}(?=\\s)` // Parameter type
  }, {
    className: 'variable.constant',
    match: `(?<=[:?])${IDENTIFIER_RE}(?=<)` // Generic type
  }, {
    className: 'type',
    match: `(?<=<)${IDENTIFIER_RE}(?=>)` // Type inside angle brackets
  }, {
    className: 'title.function.invoke',
    match: `(?<==\\s)${IDENTIFIER_RE}(?=;)` // Result identifier
  }, {
    className: 'title.class',
    match: `(?<==\\s)${IDENTIFIER_RE}(?=\\.)` // Result namespace
  }, {
    className: 'title.function.invoke',
    match: `(?<==\\s${IDENTIFIER_RE}\\.)${IDENTIFIER_RE}(?=;)` // Result identifier after namespace
  }];
  return {
    name: 'TypeLanguage',
    aliases: ['tl'],
    case_insensitive: false,
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.C_NUMBER_MODE].concat(TL)
  };
});

/***/ })

}]);
//# sourceMappingURL=src_lib_hljs-tl_typelanguage_js.33286f730a0845c4b5bd.js.map