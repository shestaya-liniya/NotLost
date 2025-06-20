(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["Highlight for brainfuck"],{

/***/ "./node_modules/highlight.js/lib/languages/brainfuck.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/brainfuck.js ***!
  \**************************************************************/
/***/ ((module) => {

/*
Language: Brainfuck
Author: Evgeny Stepanischev <imbolk@gmail.com>
Website: https://esolangs.org/wiki/Brainfuck
*/

/** @type LanguageFn */
function brainfuck(hljs) {
  const LITERAL = {
    className: 'literal',
    begin: /[+-]+/,
    relevance: 0
  };
  return {
    name: 'Brainfuck',
    aliases: [ 'bf' ],
    contains: [
      hljs.COMMENT(
        /[^\[\]\.,\+\-<> \r\n]/,
        /[\[\]\.,\+\-<> \r\n]/,
        {
          contains: [
            {
              match: /[ ]+[^\[\]\.,\+\-<> \r\n]/,
              relevance: 0
            }
          ],
          returnEnd: true,
          relevance: 0
        }
      ),
      {
        className: 'title',
        begin: '[\\[\\]]',
        relevance: 0
      },
      {
        className: 'string',
        begin: '[\\.,]',
        relevance: 0
      },
      {
        // this mode works as the only relevance counter
        // it looks ahead to find the start of a run of literals
        // so only the runs are counted as relevant
        begin: /(?=\+\+|--)/,
        contains: [ LITERAL ]
      },
      LITERAL
    ]
  };
}

module.exports = brainfuck;


/***/ })

}]);
//# sourceMappingURL=Highlight for brainfuck.e6a62d0a945aa307fb09.js.map