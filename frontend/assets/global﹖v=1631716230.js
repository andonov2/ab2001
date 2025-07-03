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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/js/global.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sources/components/animations/animations.js":
/*!*****************************************************!*\
  !*** ./sources/components/animations/animations.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Animations = {\n    controller: new ScrollMagic.Controller(),\n    scenes: [],\n    init: function init() {}\n  };\n  App.Animations.init();\n});\n\n//# sourceURL=webpack:///./sources/components/animations/animations.js?");

/***/ }),

/***/ "./sources/components/header/header.js":
/*!*********************************************!*\
  !*** ./sources/components/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Header = {\n    burgerMenuIsOpen: false,\n    init: function init() {\n      this.fixOnScroll();\n      this.burgerMenu();\n    },\n    headerSelector: '.js--header',\n    fixOnScroll: function fixOnScroll() {\n      var y = $(window).scrollTop(),\n          $header = $(this.headerSelector),\n          triggerY = window.innerHeight + 150;\n\n      if (App.isPhone()) {\n        var $geographyTrigger = $('.js--geography-trigger');\n\n        if ($geographyTrigger.length) {\n          triggerY = $('.js--geography-trigger').offset().top;\n        } else {\n          triggerY = $header.innerHeight();\n        }\n      }\n\n      function updateHead() {\n        var newY = $(window).scrollTop(),\n            isUp = newY <= y,\n            isDown = newY > y;\n\n        if (newY > triggerY && !$header.hasClass('_fix')) {\n          $header.addClass('_fix');\n        } else if (newY <= triggerY && $header.hasClass('_fix')) {\n          $header.removeClass('_fix');\n        }\n\n        if (isUp) {\n          $header.addClass('_fix-show');\n        } else if (isDown && $header.hasClass('_fix')) {\n          $header.removeClass('_fix-show');\n        }\n\n        y = newY;\n      }\n\n      updateHead();\n      $(window).on('scroll', function (e) {\n        updateHead();\n      });\n    },\n    burgerSelector: '.js--header-burger',\n    burgerMenu: function burgerMenu() {\n      var $header = $(this.headerSelector);\n      $(this.burgerSelector).on('click', function () {\n        if (!$header.hasClass('_burger-open')) {\n          $header.addClass('_burger-open');\n          App.Header.burgerMenuIsOpen = true;\n        } else {\n          $header.removeClass('_burger-open');\n          App.Header.burgerMenuIsOpen = false;\n        }\n      });\n      $(document).on('click', function (e) {\n        if (!$header.is(e.target) && !$header.has(e.target).length) {\n          $header.removeClass('_burger-open');\n          App.Header.burgerMenuIsOpen = false;\n        }\n      });\n    }\n  };\n  App.Header.init();\n});\n\n//# sourceURL=webpack:///./sources/components/header/header.js?");

/***/ }),

/***/ "./sources/components/lazy/lazy.js":
/*!*****************************************!*\
  !*** ./sources/components/lazy/lazy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Lazy = {\n    init: function init() {\n      var observer = lozad('.lazy:not(.loaded)', {\n        loaded: function loaded(el) {\n          el.classList.add('loaded');\n          $(el).trigger('loaded');\n        }\n      });\n      observer.observe();\n    }\n  };\n  App.Lazy.init();\n});\n\n//# sourceURL=webpack:///./sources/components/lazy/lazy.js?");

/***/ }),

/***/ "./sources/components/seo/seo.js":
/*!***************************************!*\
  !*** ./sources/components/seo/seo.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Seo = {\n    init: function init() {\n      this.phoneClick();\n      this.emailClick();\n      this.targetLinkClick();\n    },\n    send: function send(eventType, eventName) {\n      try {\n        switch (eventType) {\n          case 'socIconClick':\n            dataLayer.push({\n              'event': 'Social',\n              'eventCategory': 'Social',\n              'eventAction': 'click',\n              'eventLabel': eventName\n            });\n            break;\n\n          case 'VideoClick':\n            dataLayer.push({\n              'event': 'Video',\n              'eventCategory': 'Video',\n              'eventAction': 'click'\n            });\n            break;\n        }\n      } catch (e) {\n        console.log(e);\n      }\n    },\n    phoneClick: function phoneClick() {\n      $(document).on('click', 'a[href^=tel]', function () {\n        dataLayer.push({\n          'event': 'Phone',\n          'eventCategory': 'Phone',\n          'eventAction': 'click',\n          'eventLabel': $(this).attr('href').replace('tel:', '')\n        });\n      });\n    },\n    emailClick: function emailClick() {\n      $(document).on('click', 'a[href^=mailto]', function () {\n        dataLayer.push({\n          'event': 'Email',\n          'eventCategory': 'Email',\n          'eventAction': 'click',\n          'eventLabel': $(this).attr('href').replace('mailto:', '')\n        });\n      });\n    },\n    targetLinkClick: function targetLinkClick() {\n      $(document).on('click', 'a[target=_blank]', function () {\n        if ($(this).attr('onclick') == undefined) {\n          dataLayer.push({\n            'event': 'Links',\n            'eventCategory': 'Links',\n            'eventAction': 'click',\n            'eventLabel': $(this).attr('href')\n          });\n        }\n      });\n    }\n  };\n  App.Seo.init();\n});\n\n//# sourceURL=webpack:///./sources/components/seo/seo.js?");

/***/ }),

/***/ "./sources/js/global.js":
/*!******************************!*\
  !*** ./sources/js/global.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_lazy_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/lazy/lazy */ \"./sources/components/lazy/lazy.js\");\n/* harmony import */ var _components_lazy_lazy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ \"./sources/components/header/header.js\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/animations/animations */ \"./sources/components/animations/animations.js\");\n/* harmony import */ var _components_animations_animations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_animations_animations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo/seo */ \"./sources/components/seo/seo.js\");\n/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_seo_seo__WEBPACK_IMPORTED_MODULE_3__);\n//components\n\n\n\n\n\n//# sourceURL=webpack:///./sources/js/global.js?");

/***/ })

/******/ });