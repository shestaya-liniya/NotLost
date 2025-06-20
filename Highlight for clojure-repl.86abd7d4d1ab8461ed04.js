(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["Highlight for clojure-repl"],{

/***/ "./node_modules/highlight.js/lib/languages/clojure-repl.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clojure-repl.js ***!
  \*****************************************************************/
/***/ ((module) => {

/*
Language: Clojure REPL
Description: Clojure REPL sessions
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Requires: clojure.js
Website: https://clojure.org
Category: lisp
*/

/** @type LanguageFn */
function clojureRepl(hljs) {
  return {
    name: 'Clojure REPL',
    contains: [
      {
        className: 'meta.prompt',
        begin: /^([\w.-]+|\s*#_)?=>/,
        starts: {
          end: /$/,
          subLanguage: 'clojure'
        }
      }
    ]
  };
}

module.exports = clojureRepl;


/***/ })

}]);
//# sourceMappingURL=Highlight for clojure-repl.86abd7d4d1ab8461ed04.js.map