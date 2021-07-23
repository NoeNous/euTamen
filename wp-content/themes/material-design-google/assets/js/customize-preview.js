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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./theme/assets/css/src/customize-preview.css":
/*!****************************************************!*\
  !*** ./theme/assets/css/src/customize-preview.css ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./theme/assets/src/customizer/customize-preview.js":
/*!**********************************************************!*\
  !*** ./theme/assets/src/customizer/customize-preview.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Customizer enhancements for a better user experience.
 *
 * Contains extra logic for our Customizer controls & settings.
 *
 * @since 1.0.0
 */

/* global jQuery, materialDesignThemeColorControls */
(function ($) {
  var api = wp.customize;
  var parentApi = window.parent.wp.customize;
  Object.keys(materialDesignThemeColorControls).forEach(function (control) {
    api(control, function (value) {
      return value.bind(generatePreviewStyles);
    });
  }); // Site title and description.

  api('blogname', function (value) {
    value.bind(function (to) {
      $('.site-title a').text(to);
    });
  });
  api('blogdescription', function (value) {
    value.bind(function (to) {
      $('.site-description').text(to);
    });
  }); // Header text color.

  api('header_textcolor', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        $('.site-title, .site-description').css({
          clip: 'rect(1px, 1px, 1px, 1px)',
          position: 'absolute'
        });
      } else {
        $('.site-title, .site-description').css({
          clip: 'auto',
          position: 'relative'
        });
        $('.site-title a, .site-description').css({
          color: to
        });
      }
    });
  }); // Archive width

  api('material_archive_width', function (value) {
    value.bind(function (to) {
      if ('wide' === to) {
        $('.content-area').removeClass('material-archive__normal');
        $('.content-area').addClass('material-archive__wide');
      } else {
        $('.content-area').removeClass('material-archive__wide');
        $('.content-area').addClass('material-archive__normal');
      }
    });
  });
  /**
   * Add styles to elements in the preview pane.
   *
   * @since 1.0.0
   *
   * @return {void}
   */

  var generatePreviewStyles = function generatePreviewStyles() {
    var stylesheetID = 'material-customizer-preview-styles';
    var stylesheet = $('#' + stylesheetID),
        styles = ''; // If the stylesheet doesn't exist, create it and append it to <head>.

    if (!stylesheet.length) {
      $('head').append('<style id="' + stylesheetID + '"></style>');
      stylesheet = $('#' + stylesheetID);
    } // Generate the styles.


    Object.keys(materialDesignThemeColorControls).forEach(function (control) {
      var cssVar = materialDesignThemeColorControls[control];
      var color = parentApi(control).get();

      if (!color) {
        return;
      }

      styles += "".concat(cssVar, ": ").concat(color, ";");
      styles += "".concat(cssVar, "-rgb: ").concat(hexToRgb(color).join(','), ";");

      if ('--mdc-theme-background' === cssVar) {
        styles += "\n\t\t\t\t\t--mdc-theme-text-primary-on-background: rgba(--mdc-theme-on-background-rgb, 0.87);\n\t\t\t\t\t--mdc-theme-text-secondary-on-background: rgba(--mdc-theme-on-background-rgb, 0.54);\n\t\t\t\t\t--mdc-theme-text-hint-on-background: rgba(--mdc-theme-on-background-rgb, 0.38);\n\t\t\t\t\t--mdc-theme-text-disabled-on-background: rgba(--mdc-theme-on-background-rgb, 0.38);\n\t\t\t\t\t--mdc-theme-text-icon-on-background: rgba(--mdc-theme-on-background-rgb, 0.38);";
      }
    }); // Header colors should fallback to primary colors.

    if (!styles.includes('--mdc-theme-header')) {
      styles += "--mdc-theme-header: var(--mdc-theme-primary);";
      styles += "--mdc-theme-header-rgb: var(--mdc-theme-primary-rgb);";
    }

    if (!styles.includes('--mdc-theme-on-header')) {
      styles += "--mdc-theme-on-header: var(--mdc-theme-on-primary);";
      styles += "--mdc-theme-on-header-rgb: var(--mdc-theme-on-primary-rgb);";
    }

    styles = ":root {\n\t\t\t".concat(styles, "\n\t\t}"); // Add styles.

    stylesheet.html(styles);
  };

  var hexToRgb = function hexToRgb(hex) {
    return !hex ? [] : hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
      return '#' + r + r + g + g + b + b;
    }).substring(1).match(/.{2}/g).map(function (x) {
      return parseInt(x, 16);
    });
  };
})(jQuery);

/***/ }),

/***/ 1:
/*!*************************************************************************************************************!*\
  !*** multi ./theme/assets/src/customizer/customize-preview.js ./theme/assets/css/src/customize-preview.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./theme/assets/src/customizer/customize-preview.js */"./theme/assets/src/customizer/customize-preview.js");
module.exports = __webpack_require__(/*! ./theme/assets/css/src/customize-preview.css */"./theme/assets/css/src/customize-preview.css");


/***/ })

/******/ });
//# sourceMappingURL=customize-preview.js.map