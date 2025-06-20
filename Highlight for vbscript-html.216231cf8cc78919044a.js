(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["Highlight for vbscript-html"],{

/***/ "./node_modules/highlight.js/lib/languages/vbscript-html.js":
/*!******************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbscript-html.js ***!
  \******************************************************************/
/***/ ((module) => {

/*
Language: VBScript in HTML
Requires: xml.js, vbscript.js
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Description: "Bridge" language defining fragments of VBScript in HTML within <% .. %>
Website: https://en.wikipedia.org/wiki/VBScript
Category: scripting
*/

function vbscriptHtml(hljs) {
  return {
    name: 'VBScript in HTML',
    subLanguage: 'xml',
    contains: [
      {
        begin: '<%',
        end: '%>',
        subLanguage: 'vbscript'
      }
    ]
  };
}

module.exports = vbscriptHtml;


/***/ })

}]);
//# sourceMappingURL=Highlight for vbscript-html.216231cf8cc78919044a.js.map