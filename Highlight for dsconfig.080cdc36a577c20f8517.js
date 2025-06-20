(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["Highlight for dsconfig"],{

/***/ "./node_modules/highlight.js/lib/languages/dsconfig.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dsconfig.js ***!
  \*************************************************************/
/***/ ((module) => {

/*
 Language: dsconfig
 Description: dsconfig batch configuration language for LDAP directory servers
 Contributors: Jacob Childress <jacobc@gmail.com>
 Category: enterprise, config
 */

/** @type LanguageFn */
function dsconfig(hljs) {
  const QUOTED_PROPERTY = {
    className: 'string',
    begin: /"/,
    end: /"/
  };
  const APOS_PROPERTY = {
    className: 'string',
    begin: /'/,
    end: /'/
  };
  const UNQUOTED_PROPERTY = {
    className: 'string',
    begin: /[\w\-?]+:\w+/,
    end: /\W/,
    relevance: 0
  };
  const VALUELESS_PROPERTY = {
    className: 'string',
    begin: /\w+(\-\w+)*/,
    end: /(?=\W)/,
    relevance: 0
  };

  return {
    keywords: 'dsconfig',
    contains: [
      {
        className: 'keyword',
        begin: '^dsconfig',
        end: /\s/,
        excludeEnd: true,
        relevance: 10
      },
      {
        className: 'built_in',
        begin: /(list|create|get|set|delete)-(\w+)/,
        end: /\s/,
        excludeEnd: true,
        illegal: '!@#$%^&*()',
        relevance: 10
      },
      {
        className: 'built_in',
        begin: /--(\w+)/,
        end: /\s/,
        excludeEnd: true
      },
      QUOTED_PROPERTY,
      APOS_PROPERTY,
      UNQUOTED_PROPERTY,
      VALUELESS_PROPERTY,
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = dsconfig;


/***/ })

}]);
//# sourceMappingURL=Highlight for dsconfig.080cdc36a577c20f8517.js.map