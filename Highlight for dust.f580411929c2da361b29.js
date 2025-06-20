(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["Highlight for dust"],{

/***/ "./node_modules/highlight.js/lib/languages/dust.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dust.js ***!
  \*********************************************************/
/***/ ((module) => {

/*
Language: Dust
Requires: xml.js
Author: Michael Allen <michael.allen@benefitfocus.com>
Description: Matcher for dust.js templates.
Website: https://www.dustjs.com
Category: template
*/

/** @type LanguageFn */
function dust(hljs) {
  const EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
  return {
    name: 'Dust',
    aliases: [ 'dst' ],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      {
        className: 'template-tag',
        begin: /\{[#\/]/,
        end: /\}/,
        illegal: /;/,
        contains: [
          {
            className: 'name',
            begin: /[a-zA-Z\.-]+/,
            starts: {
              endsWithParent: true,
              relevance: 0,
              contains: [ hljs.QUOTE_STRING_MODE ]
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{/,
        end: /\}/,
        illegal: /;/,
        keywords: EXPRESSION_KEYWORDS
      }
    ]
  };
}

module.exports = dust;


/***/ })

}]);
//# sourceMappingURL=Highlight for dust.f580411929c2da361b29.js.map