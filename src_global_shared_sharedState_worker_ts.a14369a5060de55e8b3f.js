/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/util/data/freeze.ts":
/*!*********************************!*\
  !*** ./src/util/data/freeze.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepFreeze: () => (/* binding */ deepFreeze)
/* harmony export */ });
function deepFreeze(o) {
  if (!o) return o;
  Object.values(o).forEach(v => Object.isFrozen(v) || deepFreeze(v));
  return Object.freeze(o);
}

/***/ }),

/***/ "./src/util/deepDiff.ts":
/*!******************************!*\
  !*** ./src/util/deepDiff.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepDiff: () => (/* binding */ deepDiff)
/* harmony export */ });
/* harmony import */ var _iteratees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iteratees */ "./src/util/iteratees.ts");

const EQUAL = Symbol('EQUAL');
const DELETE = {
  __delete: true
};
const DELETE_ALL_CHILDREN = {
  __deleteAllChildren: true
};
function deepDiff(value1, value2) {
  if (value1 === value2) {
    return EQUAL;
  }
  const type1 = typeof value1;
  const type2 = typeof value2;
  if (type1 !== type2) {
    return value2;
  }
  if (Array.isArray(value1) && Array.isArray(value2) && areSortedArraysDeepEqual(value1, value2)) {
    return EQUAL;
  }
  if (!(0,_iteratees__WEBPACK_IMPORTED_MODULE_0__.isLiteralObject)(value1) || !(0,_iteratees__WEBPACK_IMPORTED_MODULE_0__.isLiteralObject)(value2)) {
    return value2;
  }
  const object1 = value1;
  const object2 = value2;
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (!keys2.length) {
    return !keys1.length ? EQUAL : DELETE_ALL_CHILDREN;
  }
  const allKeys = (0,_iteratees__WEBPACK_IMPORTED_MODULE_0__.unique)(keys1.concat(keys2));
  const diff = allKeys.reduce((acc, key) => {
    const subValue1 = object1[key];
    const subValue2 = object2[key];
    if (!object2.hasOwnProperty(key)) {
      acc[key] = DELETE;
      return acc;
    }
    if (!object1.hasOwnProperty(key)) {
      acc[key] = subValue2;
      return acc;
    }
    const subDiff = deepDiff(subValue1, subValue2);
    if (subDiff !== EQUAL) {
      acc[key] = subDiff;
    }
    return acc;
  }, {});
  if (Object.keys(diff).length === 0) {
    return EQUAL;
  }
  return diff;
}
function areSortedArraysDeepEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((item, i) => deepDiff(item, array2[i]) === EQUAL);
}

/***/ }),

/***/ "./src/util/deepMerge.ts":
/*!*******************************!*\
  !*** ./src/util/deepMerge.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepMerge: () => (/* binding */ deepMerge)
/* harmony export */ });
/* harmony import */ var _iteratees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iteratees */ "./src/util/iteratees.ts");

function deepMerge(value1, value2) {
  if (value1 === value2) {
    return value2;
  }
  if (!(0,_iteratees__WEBPACK_IMPORTED_MODULE_0__.isLiteralObject)(value2)) {
    return value2;
  }
  if (!(0,_iteratees__WEBPACK_IMPORTED_MODULE_0__.isLiteralObject)(value1)) {
    return reduceDiff(value2);
  }
  if ('__deleteAllChildren' in value2) {
    return {};
  }
  const allKeys = (0,_iteratees__WEBPACK_IMPORTED_MODULE_0__.unique)(Object.keys(value1).concat(Object.keys(value2)));
  return allKeys.reduce((acc, key) => {
    const oldValue = value1[key];
    if (!value2.hasOwnProperty(key)) {
      acc[key] = oldValue;
    } else {
      const newValue = value2[key];
      if (!newValue?.__delete) {
        acc[key] = deepMerge(oldValue, newValue);
      }
    }
    return acc;
  }, {});
}
function reduceDiff(diff) {
  if (diff.__deleteAllChildren) {
    return {};
  }
  return Object.entries(diff).reduce((acc, [key, value]) => {
    if (!value?.__delete) {
      acc[key] = (0,_iteratees__WEBPACK_IMPORTED_MODULE_0__.isLiteralObject)(value) ? reduceDiff(value) : value;
    }
    return acc;
  }, {});
}

/***/ }),

/***/ "./src/util/iteratees.ts":
/*!*******************************!*\
  !*** ./src/util/iteratees.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areSortedArraysEqual: () => (/* binding */ areSortedArraysEqual),
/* harmony export */   areSortedArraysIntersecting: () => (/* binding */ areSortedArraysIntersecting),
/* harmony export */   buildCollectionByCallback: () => (/* binding */ buildCollectionByCallback),
/* harmony export */   buildCollectionByKey: () => (/* binding */ buildCollectionByKey),
/* harmony export */   cloneDeep: () => (/* binding */ cloneDeep),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   compareFields: () => (/* binding */ compareFields),
/* harmony export */   excludeSortedArray: () => (/* binding */ excludeSortedArray),
/* harmony export */   findIntersectionWithSet: () => (/* binding */ findIntersectionWithSet),
/* harmony export */   findLast: () => (/* binding */ findLast),
/* harmony export */   isInsideSortedArrayRange: () => (/* binding */ isInsideSortedArrayRange),
/* harmony export */   isLiteralObject: () => (/* binding */ isLiteralObject),
/* harmony export */   mapValues: () => (/* binding */ mapValues),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   omitUndefined: () => (/* binding */ omitUndefined),
/* harmony export */   orderBy: () => (/* binding */ orderBy),
/* harmony export */   partition: () => (/* binding */ partition),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   pickTruthy: () => (/* binding */ pickTruthy),
/* harmony export */   split: () => (/* binding */ split),
/* harmony export */   unique: () => (/* binding */ unique),
/* harmony export */   uniqueByField: () => (/* binding */ uniqueByField)
/* harmony export */ });
function buildCollectionByKey(collection, key) {
  return collection.reduce((byKey, member) => {
    byKey[member[key]] = member;
    return byKey;
  }, {});
}
function buildCollectionByCallback(collection, callback) {
  return collection.reduce((byKey, member) => {
    const [key, value] = callback(member);
    byKey[key] = value;
    return byKey;
  }, {});
}
function mapValues(byKey, callback) {
  return Object.keys(byKey).reduce((newByKey, key, index) => {
    newByKey[key] = callback(byKey[key], key, index, byKey);
    return newByKey;
  }, {});
}
function pick(object, keys) {
  return keys.reduce((result, key) => {
    result[key] = object[key];
    return result;
  }, {});
}
function pickTruthy(object, keys) {
  return keys.reduce((result, key) => {
    if (object[key]) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
function omit(object, keys) {
  const stringKeys = new Set(keys.map(String));
  const savedKeys = Object.keys(object).filter(key => !stringKeys.has(key));
  return pick(object, savedKeys);
}
function omitUndefined(object) {
  return Object.keys(object).reduce((result, stringKey) => {
    const key = stringKey;
    if (object[key] !== undefined) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
function orderBy(collection, orderRule, mode = 'asc') {
  function compareValues(a, b, currentOrderRule, isAsc) {
    const aValue = (typeof currentOrderRule === 'function' ? currentOrderRule(a) : a[currentOrderRule]) || 0;
    const bValue = (typeof currentOrderRule === 'function' ? currentOrderRule(b) : b[currentOrderRule]) || 0;

    // @ts-expect-error Rely on the JS to handle the comparison
    return isAsc ? aValue - bValue : bValue - aValue;
  }
  if (Array.isArray(orderRule)) {
    const [mode1, mode2] = Array.isArray(mode) ? mode : [mode, mode];
    const [orderRule1, orderRule2] = orderRule;
    const isAsc1 = mode1 === 'asc';
    const isAsc2 = mode2 === 'asc';
    return collection.sort((a, b) => {
      return compareValues(a, b, orderRule1, isAsc1) || compareValues(a, b, orderRule2, isAsc2);
    });
  }
  const isAsc = mode === 'asc';
  return collection.sort((a, b) => {
    return compareValues(a, b, orderRule, isAsc);
  });
}
function unique(array) {
  return Array.from(new Set(array));
}
function uniqueByField(array, field) {
  return [...new Map(array.map(item => [item[field], item])).values()];
}
function compact(array) {
  return array.filter(Boolean);
}
function areSortedArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((item, i) => item === array2[i]);
}
function areSortedArraysIntersecting(array1, array2) {
  return array1[0] <= array2[array2.length - 1] && array1[array1.length - 1] >= array2[0];
}
function isInsideSortedArrayRange(value, array) {
  return array[0] <= value && value <= array[array.length - 1];
}
function findIntersectionWithSet(array, set) {
  return array.filter(a => set.has(a));
}
/**
 * Exlude elements from base array. Both arrays should be sorted in same order
 * @param base
 * @param toExclude
 * @returns New array without excluded elements
 */
function excludeSortedArray(base, toExclude) {
  if (!base?.length) return base;
  const result = [];
  let excludeIndex = 0;
  for (let i = 0; i < base.length; i++) {
    if (toExclude[excludeIndex] === base[i]) {
      excludeIndex += 1;
    } else {
      result.push(base[i]);
    }
  }
  return result;
}
function split(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
function partition(array, filter) {
  const pass = [];
  const fail = [];
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e));
  return [pass, fail];
}
function cloneDeep(value) {
  if (!isObject(value)) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(cloneDeep);
  }
  return Object.keys(value).reduce((acc, key) => {
    acc[key] = cloneDeep(value[key]);
    return acc;
  }, {});
}
function isLiteralObject(value) {
  return isObject(value) && !Array.isArray(value);
}
function isObject(value) {
  // eslint-disable-next-line no-null/no-null
  return typeof value === 'object' && value !== null;
}
function findLast(array, predicate) {
  let cursor = array.length;
  while (cursor--) {
    if (predicate(array[cursor], cursor, array)) {
      return array[cursor];
    }
  }
  return undefined;
}
function compareFields(a, b) {
  return Number(b) - Number(a);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************************!*\
  !*** ./src/global/shared/sharedState.worker.ts ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_data_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/data/freeze */ "./src/util/data/freeze.ts");
/* harmony import */ var _util_deepDiff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/deepDiff */ "./src/util/deepDiff.ts");
/* harmony import */ var _util_deepMerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/deepMerge */ "./src/util/deepMerge.ts");



let state;
const ports = [];
self.onconnect = e => {
  const port = e.ports[0];
  ports.push(port);
  port.start();
  port.onmessage = event => {
    const data = event.data;
    switch (data.type) {
      case 'reqGetFullState':
        {
          const localState = data.localState;
          if (!state) {
            // First tab to load, use this state as the source of truth.
            state = localState;
          }
          sendToClient(port, {
            type: 'fullState',
            state
          });
          break;
        }
      case 'reqUpdateState':
        {
          if (!state) return; // Client should request full state first
          const prevState = state;
          state = (0,_util_deepMerge__WEBPACK_IMPORTED_MODULE_2__.deepMerge)(state, data.update);
          state.isInitial = undefined; // Remove the flag

          const diff = (0,_util_deepDiff__WEBPACK_IMPORTED_MODULE_1__.deepDiff)(prevState, state);
          if (typeof diff !== 'symbol') {
            broadcast({
              type: 'stateUpdate',
              update: diff
            }, port);
          }
          break;
        }
    }
  };
};
function sendToClient(port, message) {
  port.postMessage(message);
}
function broadcast(message, ignorePort) {
  // Iterate backwards to safely remove ports if needed.
  for (let i = ports.length - 1; i >= 0; i--) {
    if (ports[i] === ignorePort) {
      // Prevent infinite loopback
      continue;
    }
    try {
      sendToClient(ports[i], message);
    } catch (e) {
      ports.splice(i, 1);
    }
  }
}

// DEBUG
self.getState = () => (0,_util_data_freeze__WEBPACK_IMPORTED_MODULE_0__.deepFreeze)(state);
})();

/******/ })()
;
//# sourceMappingURL=src_global_shared_sharedState_worker_ts.a14369a5060de55e8b3f.js.map