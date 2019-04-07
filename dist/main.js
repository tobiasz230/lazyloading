/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ "./utils/constants.js");





function removeImages(selector) {
  var images = document.querySelectorAll(selector);
  images.forEach(function (item) {
    item.remove();
  });
}

function lazyLoad(selector) {
  var photoContainer = document.querySelectorAll(selector);
  photoContainer.forEach(function (item) {
    if (item.offsetTop < window.innerHeight + window.pageYOffset && item.offsetTop > window.pageYOffset - item.clientHeight) {
      var imageSrc = window.innerWidth > _utils_constants__WEBPACK_IMPORTED_MODULE_1__["RWD_BREAKPOINTS"].xs ? item.getAttribute('data-src') : item.getAttribute('data-src-small');
      var checkImage = item.querySelector('.fp-image');

      if (!checkImage) {
        var newImage = new Image();
        newImage.src = imageSrc;
        newImage.classList.add('photo_img', 'fp-image');

        newImage.onload = function () {
          item.append(newImage);
        };
      } else if (imageSrc !== checkImage.src) {
        removeImages('.fp-image');
      }
    }
  });
}

;
Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(function (data) {
  var container = document.getElementById('root');

  if (data.error) {
    container.append('Ups... Coś poszło nie tak!');
  }

  var results = data.result.results;
  results.forEach(function (item) {
    var thumbnails = item.thumbnails;
    var photoContainer = document.createElement('div');
    photoContainer.classList.add('photo', 'fp-lazy-image');
    photoContainer.setAttribute('data-src', thumbnails[3].src);
    photoContainer.setAttribute('data-src-small', thumbnails[0].src);
    container.append(photoContainer);
  });
  lazyLoad('.fp-lazy-image');
}); //events

Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["onScrollEnd"])(250, function () {
  return lazyLoad('.fp-lazy-image');
});
Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["onResizeEnd"])(10, function () {
  return lazyLoad('.fp-lazy-image');
});

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: RWD_BREAKPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RWD_BREAKPOINTS", function() { return RWD_BREAKPOINTS; });
var RWD_BREAKPOINTS = {
  xs: 800
};

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: onScrollEnd, onResizeEnd, fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onScrollEnd", function() { return onScrollEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onResizeEnd", function() { return onResizeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
// function ajax(method, url) {
//     return new Promise(function(resolve, reject) {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.addEventListener('load', function() {
//             if (this.status === 200) {
//                 resolve(xhr.response);
//             } else {
//                 reject({
//                     status: this.status,
//                     statusText: xhr.statusText
//                 });
//             }
//         });
//         xhr.addEventListener('error', function() {
//             reject({
//                 status: this.status,
//                 statusText: xhr.statusText
//             });
//         });
//         xhr.send();
//     });
// }
// export function getData (method, url, callback) {
//     ajax(method, url)
//     .then(function(response) {
//         callback(response);
//     }).catch(function(err) {
//         console.error('[ERROR]', err);
//         err.error = true;
//         callback(err);
//     });
// };
function onScrollEnd(delay, callback) {
  var isScrolling; //events

  window.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      callback();
    }, delay);
  }, false);
}
;
function onResizeEnd(delay, callback) {
  var isResizing = null;
  window.addEventListener('resize', function () {
    clearTimeout(isResizing);
    isResizing = setTimeout(function () {
      callback();
    }, delay);
  });
}
function fetchData(callback) {
  fetch('https://b2c-www.redefine.pl/rpc/navigation/', {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'text/plain',
      'Referer': 'https://www.ipla.tv/wideo/serial/Pierwsza-milosc/828?seasonId=829',
      'Origin': 'https://www.ipla.tv',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
      'Accept': 'application/json, text/plain, */*'
    },
    body: JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: "getCategoryContentWithFlatNavigation",
      params: {
        ua: "www_iplatv/12345 (Mozilla/5.0 Macintosh; Intel Mac OS X 10_10_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/69.0.3497.100 Safari/537.36)",
        catid: 829,
        limit: 300,
        offset: 0,
        clientId: "c921d668-1fdc-4e71-b15ee8338d2c9bb2"
      }
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    callback(err);
  });
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map