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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/js/page-main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sources/js/page-main.js":
/*!*********************************!*\
  !*** ./sources/js/page-main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_main_main_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/main/main-banner */ \"./sources/pages/main/main-banner.js\");\n/* harmony import */ var _pages_main_main_banner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_main_main_banner__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_main_main_geography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/main/main-geography */ \"./sources/pages/main/main-geography.js\");\n/* harmony import */ var _pages_main_main_geography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_main_main_geography__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_main_main_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/main/main-info */ \"./sources/pages/main/main-info.js\");\n/* harmony import */ var _pages_main_main_info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_main_main_info__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_main_main_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/main/main-video */ \"./sources/pages/main/main-video.js\");\n/* harmony import */ var _pages_main_main_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_main_main_video__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_main_main_travel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/main/main-travel */ \"./sources/pages/main/main-travel.js\");\n/* harmony import */ var _pages_main_main_travel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_main_main_travel__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./sources/js/page-main.js?");

/***/ }),

/***/ "./sources/pages/main/main-banner.js":
/*!*******************************************!*\
  !*** ./sources/pages/main/main-banner.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {});\n\n//# sourceURL=webpack:///./sources/pages/main/main-banner.js?");

/***/ }),

/***/ "./sources/pages/main/main-geography.js":
/*!**********************************************!*\
  !*** ./sources/pages/main/main-geography.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.MainGeograthy = {\n    init: function init() {\n      var _this = this;\n\n      this.regionActiveTimeout = setTimeout(function () {});\n      this.setIcons();\n      this.regionsHover();\n      this.mapShowAnimate();\n\n      if (App.isPhone()) {\n        $(this.categoriesSelectSelector).on('change', function () {\n          var code = $(this).val(),\n              $categories = $(_this.categoriesSelector);\n\n          _this.triggerActive($categories.index($categories.filter('[data-code=' + code + ']')));\n        }).on('focusin focus', function (e) {\n          $(window).scrollTop($('.js--geography-trigger').offset().top);\n        });\n      } else {\n        $('.js--geography-map-categories-btn').on('click', function () {\n          _this.triggerActive($(_this.categoriesSelector).index($(this).parent()));\n        });\n      }\n    },\n    geographySelector: '.js--geography',\n    regionsSelector: '.js--geography-map-region',\n    iconsContainerSelector: '.js--geography-map-icons',\n    mapSelector: '.js--geography-map',\n    categoriesSelector: '.js--geography-map-categories',\n    infoWindowSelector: '.js--geography-map-info-window',\n    categoriesSelectSelector: '.js--geography-map-categories-select',\n    // расстановка иконок по регионам карты\n    setIcons: function setIcons() {\n      var $regions = $(this.regionsSelector),\n          $iconsContainer = $(this.iconsContainerSelector),\n          $map = $(this.mapSelector);\n\n      function setIcons() {\n        $iconsContainer.html('');\n        $regions.each(function () {\n          if ($(this).attr('data-no-icons') === undefined) {\n            var rect = $(this)[0].getBoundingClientRect();\n            var top = Math.floor(rect.top) - Math.floor($map.offset().top) + pageYOffset,\n                left = Math.floor(rect.left) - Math.floor($map.offset().left),\n                width = Math.floor(rect.width),\n                height = Math.floor(rect.height);\n            var icons = $(this).attr('data-icons');\n\n            if (icons !== undefined) {\n              icons = icons.split('|');\n              var $item = '<div data-code=\"' + $(this).attr('data-code') + '\" style=\"top:' + top + 'px; left:' + left + 'px; width: ' + width + 'px; height: ' + height + 'px;\">';\n              icons.map(function (item) {\n                $item += '<svg class=\"svg-icon\" data-code=\"' + item + '\"><use xlink:href=\"#map-icon-' + item + '\"></use></svg>';\n              });\n              $item += '</div>';\n              $iconsContainer.append($item);\n            }\n          }\n        });\n      }\n\n      setIcons();\n      $(window).on('resize', function () {\n        setIcons();\n      });\n    },\n    // установка активностей регионам в зависимости от категорий деятельности\n    triggerActive: function triggerActive() {\n      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      clearTimeout(this.regionActiveTimeout);\n\n      var _this = this;\n\n      var $geographyMap = $(this.mapSelector),\n          $regions = $(this.regionsSelector),\n          $categories = $(this.categoriesSelector),\n          $iconsContainer = $(this.iconsContainerSelector);\n      $geographyMap.attr('data-active-category', '');\n      var $activeItem = $categories.filter('._active');\n\n      if (index == false) {\n        index = 1;\n        if ($activeItem.length) index = $categories.index($activeItem) + 1;\n      }\n\n      if ($activeItem.length) $activeItem.removeClass('_active');\n      var $newActiveItem = $categories.eq(index);\n      if (!$newActiveItem.length) $newActiveItem = $categories.eq(1);\n      $newActiveItem.addClass('_active');\n      var code = $newActiveItem.attr('data-code');\n      $geographyMap.attr('data-active-category', code);\n      $regions.removeClass('_active');\n\n      if (code == 'all') {\n        $regions.addClass('_active');\n        $('> div', $iconsContainer).addClass('_active');\n      } else {\n        $regions.each(function () {\n          var icons = $(this).attr('data-icons');\n          var $icons = $('[data-code=' + $(this).attr(\"data-code\") + ']', $iconsContainer);\n\n          if (icons.indexOf(code) != -1) {\n            $(this).addClass('_active');\n            $icons.addClass('_active');\n          } else {\n            $(this).removeClass('_active');\n            $icons.removeClass('_active');\n          }\n        });\n      }\n\n      $(this.categoriesSelectSelector).val(code);\n      this.regionActiveTimeout = setTimeout(function () {\n        _this.triggerActive();\n      }, 8000);\n    },\n    // анимация появления карты\n    mapShowAnimate: function mapShowAnimate() {\n      var _this = this;\n\n      var $geography = $(this.geographySelector);\n      var geographyScene;\n\n      if (App.isPhone()) {\n        geographyScene = new ScrollMagic.Scene({\n          triggerElement: $('.js--geography-trigger')[0],\n          triggerHook: 1,\n          duration: $geography.innerHeight()\n        }).setTween(TweenMax.fromTo($geography, 1, {\n          \"clip-path\": 'circle(16% at 50% 65%)',\n          \"y\": '-90%'\n        }, {\n          \"clip-path\": 'circle(65% at 50% 50%)',\n          \"y\": '0%',\n          ease: Linear.easeNone\n        })).addTo(App.Animations.controller);\n        App.Animations.scenes.push(geographyScene);\n      } else if (App.isTablet()) {\n        geographyScene = new ScrollMagic.Scene({\n          duration: window.innerHeight\n        }).setTween(TweenMax.fromTo($geography, 1, {\n          \"clip-path\": 'circle(8% at calc(50% + 200px) 75%)'\n        }, {\n          \"clip-path\": 'circle(120% at calc(50% + 200px) 75%)',\n          ease: Linear.easeNone\n        })).addTo(App.Animations.controller);\n        App.Animations.scenes.push(geographyScene);\n      } else {\n        geographyScene = new ScrollMagic.Scene({\n          duration: window.innerHeight\n        }).setTween(TweenMax.fromTo($geography, 1, {\n          \"clip-path\": 'circle(8% at calc(50% + 400px) 75%)'\n        }, {\n          \"clip-path\": 'circle(120% at calc(50% + 400px) 75%)',\n          ease: Linear.easeNone\n        })).addTo(App.Animations.controller);\n        App.Animations.scenes.push(geographyScene);\n      }\n\n      geographyScene.on(\"progress\", function (event) {\n        if (!App.isMobile()) {\n          // кастыль для сафари\n          var percent = Math.floor(event.progress * 112) + 8;\n          $geography.css({\n            '-webkit-clip-path': 'circle(' + percent + '% at calc(50% + 400px) 75%)'\n          });\n        }\n\n        _this.triggerProgressClass(.05, '_map-open-05', event);\n\n        _this.triggerProgressClass(.5, '_map-open-50', event);\n\n        _this.triggerProgressClass(.7, '_map-open-70', event);\n\n        _this.triggerProgressClass(1, '_map-open-100', event);\n      });\n    },\n    // контроль прогресса анимации карты\n    triggerProgressClass: function triggerProgressClass(progress, className, event) {\n      var $page = $('.page');\n      var geographyProgressClass = className,\n          geographyProgressTrigger = progress;\n\n      if (event.progress >= geographyProgressTrigger && !$page.hasClass(geographyProgressClass)) {\n        $page.addClass(geographyProgressClass);\n\n        if (geographyProgressTrigger === .5) {\n          this.triggerActive(1);\n        }\n      } else if (event.progress < geographyProgressTrigger && $page.hasClass(geographyProgressClass)) {\n        $page.removeClass(geographyProgressClass);\n\n        if (geographyProgressTrigger === .5) {\n          clearTimeout(this.regionActiveTimeout);\n          $(this.categoriesSelector).removeClass('_active');\n          $(this.regionsSelector).removeClass('_active');\n          $('> div', $(this.iconsContainerSelector)).removeClass('_active');\n        }\n      }\n    },\n    // наведение курсора на регионы на карте\n    regionsHover: function regionsHover() {\n      var $regions = $(this.regionsSelector),\n          $infoWindow = $(this.infoWindowSelector),\n          $map = $(this.mapSelector);\n      $regions.on('mousemove', function (e) {\n        if ($(this).hasClass('_active')) {\n          var mapTop = $map.offset().top,\n              mapLeft = $map.offset().left;\n          $infoWindow.css({\n            'top': e.pageY - mapTop,\n            'left': e.pageX - mapLeft\n          }).addClass('_active').text($(this).attr('data-name'));\n        }\n      }).on('mouseout', function (e) {\n        $infoWindow.removeClass('_active');\n      });\n    }\n  };\n  App.MainGeograthy.init();\n});\n\n//# sourceURL=webpack:///./sources/pages/main/main-geography.js?");

/***/ }),

/***/ "./sources/pages/main/main-info.js":
/*!*****************************************!*\
  !*** ./sources/pages/main/main-info.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  // закругленные тексты\n  var $cowText = $('.main-info__item__circle-text._cow');\n  var cowTextCircle = new CircleType($cowText[0]);\n  cowTextCircle.radius($cowText.innerWidth() * .5).dir(-1);\n  var $traktorText = $('.main-info__item__circle-text._traktor');\n  var traktorTextCircle = new CircleType($traktorText[0]);\n  traktorTextCircle.radius($traktorText.innerWidth() * .5).dir(-1);\n  var $kolosText = $('.main-info__item__circle-text._kolos');\n  var kolosTextCircle = new CircleType($kolosText[0]);\n  kolosTextCircle.radius($kolosText.innerWidth() * .5).dir(-1); // анимации\n\n  var $title = $('.main-info__title'),\n      $titleWrap = $('.main-info__title-wrap'),\n      titleDuration = $titleWrap.innerHeight() - $title.innerHeight(),\n      headerHeight = $('.header').innerHeight();\n  var titleSceneOptions = {\n    triggerElement: $titleWrap[0],\n    triggerHook: .15,\n    offset: $title.innerHeight() * .5,\n    duration: titleDuration\n  };\n\n  if (App.isPhone()) {\n    titleSceneOptions.triggerHook = 0;\n    titleSceneOptions.offset = $title.innerHeight() * -0.5;\n  }\n\n  App.Animations.scenes.push(new ScrollMagic.Scene(titleSceneOptions).setPin($title[0], {\n    pushFollowers: false\n  }).addTo(App.Animations.controller));\n  var $titleLine = $('.main-info__title > div > span');\n  App.Animations.scenes.push(new ScrollMagic.Scene({\n    triggerElement: $titleWrap[0],\n    triggerHook: .15,\n    offset: $title.innerHeight() * .5,\n    duration: titleDuration\n  }).setTween(TweenMax.from($titleLine, 1, {\n    width: 0,\n    ease: Linear.easeNone\n  })).addTo(App.Animations.controller));\n  var $milkBg = $('.main-info__item__milk-bg');\n  var $milk1 = $('.main-info__item__milk._1');\n  App.Animations.scenes.push(new ScrollMagic.Scene({\n    triggerElement: $milkBg[0],\n    triggerHook: 1,\n    duration: window.innerHeight * .7\n  }).setTween(TweenMax.from($milk1, 1, {\n    rotation: -10,\n    scale: .8,\n    ease: Linear.easeNone\n  })).addTo(App.Animations.controller));\n  var $milk2 = $('.main-info__item__milk._2');\n  App.Animations.scenes.push(new ScrollMagic.Scene({\n    triggerElement: $milkBg[0],\n    triggerHook: 1,\n    duration: window.innerHeight * .7\n  }).setTween(TweenMax.from($milk2, 1, {\n    rotation: 10,\n    scale: .8,\n    ease: Linear.easeNone\n  })).addTo(App.Animations.controller));\n  var $milk3 = $('.main-info__item__milk._3');\n  App.Animations.scenes.push(new ScrollMagic.Scene({\n    triggerElement: $milkBg[0],\n    triggerHook: 1,\n    duration: window.innerHeight * .7\n  }).setTween(TweenMax.from($milk3, 1, {\n    y: 100,\n    scale: .8,\n    ease: Linear.easeNone\n  })).addTo(App.Animations.controller));\n  var $milk4 = $('.main-info__item__milk._4');\n  App.Animations.scenes.push(new ScrollMagic.Scene({\n    triggerElement: $milkBg[0],\n    triggerHook: 1,\n    duration: window.innerHeight * .7\n  }).setTween(TweenMax.from($milk4, 1, {\n    x: -50,\n    scale: .8,\n    ease: Linear.easeNone\n  })).addTo(App.Animations.controller));\n\n  function milk567(index, x, y) {\n    var $milk = $('.main-info__item__milk._' + index);\n    App.Animations.scenes.push(new ScrollMagic.Scene({\n      triggerElement: $milkBg[0],\n      triggerHook: 1,\n      duration: window.innerHeight * .7\n    }).setTween(TweenMax.from($milk, 1, {\n      x: x,\n      y: y,\n      scale: .8,\n      ease: Linear.easeNone\n    })).addTo(App.Animations.controller));\n  }\n\n  milk567(5, 50, -50);\n  milk567(6, 50, -50);\n  milk567(7, 100, -80);\n  $('.main-info__item').each(function () {\n    if (!$(this).hasClass('_last')) {\n      App.Animations.scenes.push(new ScrollMagic.Scene({\n        triggerElement: $(this)[0],\n        triggerHook: .1\n      }).setClassToggle($(this)[0], \"_fade\").addTo(App.Animations.controller));\n    }\n\n    var $circleText = $('.main-info__item__circle-text', $(this));\n    var from = -25,\n        to = 25;\n\n    if ($circleText.hasClass('_cow')) {\n      from = -75;\n      to = -25;\n    } else if ($circleText.hasClass('_traktor')) {\n      from = -25;\n      to = 25;\n    } else if ($circleText.hasClass('_kolos')) {\n      from = -45;\n      to = 0;\n    }\n\n    App.Animations.scenes.push(new ScrollMagic.Scene({\n      triggerElement: $(this)[0],\n      triggerHook: .75,\n      duration: window.innerHeight * .75\n    }).setTween(TweenMax.fromTo($circleText, 1, {\n      rotation: from\n    }, {\n      rotation: to,\n      ease: Linear.easeNone\n    })).addTo(App.Animations.controller));\n  });\n});\n\n//# sourceURL=webpack:///./sources/pages/main/main-info.js?");

/***/ }),

/***/ "./sources/pages/main/main-travel.js":
/*!*******************************************!*\
  !*** ./sources/pages/main/main-travel.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var controller = new ScrollMagic.Controller();\n  var $images = $('.main-travel__images');\n  var triggerHook = 1;\n  $('.main-travel__img').each(function () {\n    new ScrollMagic.Scene({\n      triggerElement: $images[0],\n      triggerHook: triggerHook,\n      duration: $images.innerHeight()\n    }).setTween(TweenMax.from($(this), 1, {\n      x: '100%'\n    })).addTo(controller);\n    triggerHook -= .1;\n  });\n});\n\n//# sourceURL=webpack:///./sources/pages/main/main-travel.js?");

/***/ }),

/***/ "./sources/pages/main/main-video.js":
/*!******************************************!*\
  !*** ./sources/pages/main/main-video.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var controller = new ScrollMagic.Controller();\n  var $block = $('.main-video'),\n      blockHeigth = $block.innerHeight(),\n      $bg = $('.main-video__bg');\n  new ScrollMagic.Scene({\n    triggerElement: $block[0],\n    triggerHook: 1,\n    duration: blockHeigth + window.innerHeight\n  }).setTween(TweenMax.fromTo($bg, 1, {\n    y: blockHeigth * .2 * -1\n  }, {\n    y: blockHeigth * .2,\n    ease: Linear.easeNone\n  })).addTo(controller);\n});\n\n//# sourceURL=webpack:///./sources/pages/main/main-video.js?");

/***/ })

/******/ });