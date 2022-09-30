/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./mops-website/assets/js/index.js":
/*!*****************************************!*\
  !*** ./mops-website/assets/js/index.js ***!
  \*****************************************/
/***/ (function() {

var ham = $('#js-hamburger');
var nav = $('#js-nav');
var item = $('.js-item');
ham.on('click', function () {
  //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し

  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});
item.on('click', function () {
  //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し

  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});
$(function () {
  var navigation = $('.navigation');
  var contact = $('.navigation__item--contact');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 694) {
      //スクロールが500pxを越えたら
      navigation.addClass('black');
      contact.addClass('border-black');
    } else {
      //スクロールが500pxを越えなければ
      navigation.removeClass('black');
      contact.removeClass('border-black');
    }
  });
});

/***/ }),

/***/ "./mops-website/assets/scss/breadcrumb.scss":
/*!**************************************************!*\
  !*** ./mops-website/assets/scss/breadcrumb.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./mops-website/assets/scss/contact.scss":
/*!***********************************************!*\
  !*** ./mops-website/assets/scss/contact.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./mops-website/assets/scss/footer.scss":
/*!**********************************************!*\
  !*** ./mops-website/assets/scss/footer.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./mops-website/assets/scss/front-page.scss":
/*!**************************************************!*\
  !*** ./mops-website/assets/scss/front-page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./mops-website/assets/scss/navigation.scss":
/*!**************************************************!*\
  !*** ./mops-website/assets/scss/navigation.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./mops-website/assets/scss/news.scss":
/*!********************************************!*\
  !*** ./mops-website/assets/scss/news.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./mops-website/assets/scss/recruit.scss":
/*!***********************************************!*\
  !*** ./mops-website/assets/scss/recruit.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!********************************************!*\
  !*** ./mops-website/assets/js/all-dump.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/footer.scss */ "./mops-website/assets/scss/footer.scss");
/* harmony import */ var _scss_navigation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/navigation.scss */ "./mops-website/assets/scss/navigation.scss");
/* harmony import */ var _scss_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/breadcrumb.scss */ "./mops-website/assets/scss/breadcrumb.scss");
/* harmony import */ var _scss_front_page_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/front-page.scss */ "./mops-website/assets/scss/front-page.scss");
/* harmony import */ var _scss_recruit_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/recruit.scss */ "./mops-website/assets/scss/recruit.scss");
/* harmony import */ var _scss_contact_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/contact.scss */ "./mops-website/assets/scss/contact.scss");
/* harmony import */ var _scss_news_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/news.scss */ "./mops-website/assets/scss/news.scss");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.js */ "./mops-website/assets/js/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_7__);








}();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map