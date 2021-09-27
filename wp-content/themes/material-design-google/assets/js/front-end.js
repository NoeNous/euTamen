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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@material/animation/util.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/animation/util.js ***!
  \**************************************************/
/*! exports provided: getCorrectPropertyName, getCorrectEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrectPropertyName", function() { return getCorrectPropertyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrectEventName", function() { return getCorrectEventName; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation',
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform',
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition',
    },
};
var jsEventTypeMap = {
    animationend: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationEnd',
        standard: 'animationend',
    },
    animationiteration: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationIteration',
        standard: 'animationiteration',
    },
    animationstart: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationStart',
        standard: 'animationstart',
    },
    transitionend: {
        cssProperty: 'transition',
        prefixed: 'webkitTransitionEnd',
        standard: 'transitionend',
    },
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
    if (isWindow(windowObj) && eventType in jsEventTypeMap) {
        var el = windowObj.document.createElement('div');
        var _a = jsEventTypeMap[eventType], standard = _a.standard, prefixed = _a.prefixed, cssProperty = _a.cssProperty;
        var isStandard = cssProperty in el.style;
        return isStandard ? standard : prefixed;
    }
    return eventType;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root_.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root_.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/checkbox/component.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/component.js ***!
  \******************************************************/
/*! exports provided: MDCCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() { return MDCCheckbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_animation_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/animation/util */ "./node_modules/@material/animation/util.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/checkbox/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var CB_PROTO_PROPS = ['checked', 'indeterminate'];
var MDCCheckbox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCCheckbox, _super);
    function MDCCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ripple_ = _this.createRipple_();
        return _this;
    }
    MDCCheckbox.attachTo = function (root) {
        return new MDCCheckbox(root);
    };
    Object.defineProperty(MDCCheckbox.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "checked", {
        get: function () {
            return this.nativeControl_.checked;
        },
        set: function (checked) {
            this.nativeControl_.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
        get: function () {
            return this.nativeControl_.indeterminate;
        },
        set: function (indeterminate) {
            this.nativeControl_.indeterminate = indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "disabled", {
        get: function () {
            return this.nativeControl_.disabled;
        },
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "value", {
        get: function () {
            return this.nativeControl_.value;
        },
        set: function (value) {
            this.nativeControl_.value = value;
        },
        enumerable: true,
        configurable: true
    });
    MDCCheckbox.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange_ = function () { return _this.foundation_.handleChange(); };
        this.handleAnimationEnd_ = function () { return _this.foundation_.handleAnimationEnd(); };
        this.nativeControl_.addEventListener('change', this.handleChange_);
        this.listen(Object(_material_animation_util__WEBPACK_IMPORTED_MODULE_1__["getCorrectEventName"])(window, 'animationend'), this.handleAnimationEnd_);
        this.installPropertyChangeHooks_();
    };
    MDCCheckbox.prototype.destroy = function () {
        this.ripple_.destroy();
        this.nativeControl_.removeEventListener('change', this.handleChange_);
        this.unlisten(Object(_material_animation_util__WEBPACK_IMPORTED_MODULE_1__["getCorrectEventName"])(window, 'animationend'), this.handleAnimationEnd_);
        this.uninstallPropertyChangeHooks_();
        _super.prototype.destroy.call(this);
    };
    MDCCheckbox.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            forceLayout: function () { return _this.root_.offsetWidth; },
            hasNativeControl: function () { return !!_this.nativeControl_; },
            isAttachedToDOM: function () { return Boolean(_this.root_.parentNode); },
            isChecked: function () { return _this.checked; },
            isIndeterminate: function () { return _this.indeterminate; },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            removeNativeControlAttr: function (attr) { return _this.nativeControl_.removeAttribute(attr); },
            setNativeControlAttr: function (attr, value) { return _this.nativeControl_.setAttribute(attr, value); },
            setNativeControlDisabled: function (disabled) { return _this.nativeControl_.disabled = disabled; },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_7__["MDCCheckboxFoundation"](adapter);
    };
    MDCCheckbox.prototype.createRipple_ = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCRipple"].createAdapter(this), { deregisterInteractionHandler: function (evtType, handler) { return _this.nativeControl_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_3__["applyPassive"])()); }, isSurfaceActive: function () { return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_4__["matches"])(_this.nativeControl_, ':active'); }, isUnbounded: function () { return true; }, registerInteractionHandler: function (evtType, handler) { return _this.nativeControl_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_3__["applyPassive"])()); } });
        return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCRipple"](this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCRippleFoundation"](adapter));
    };
    MDCCheckbox.prototype.installPropertyChangeHooks_ = function () {
        var _this = this;
        var nativeCb = this.nativeControl_;
        var cbProto = Object.getPrototypeOf(nativeCb);
        CB_PROTO_PROPS.forEach(function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
            // We have to check for this descriptor, since some browsers (Safari) don't support its return.
            // See: https://bugs.webkit.org/show_bug.cgi?id=49739
            if (!validDescriptor(desc)) {
                return;
            }
            // Type cast is needed for compatibility with Closure Compiler.
            var nativeGetter = desc.get;
            var nativeCbDesc = {
                configurable: desc.configurable,
                enumerable: desc.enumerable,
                get: nativeGetter,
                set: function (state) {
                    desc.set.call(nativeCb, state);
                    _this.foundation_.handleChange();
                },
            };
            Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        });
    };
    MDCCheckbox.prototype.uninstallPropertyChangeHooks_ = function () {
        var nativeCb = this.nativeControl_;
        var cbProto = Object.getPrototypeOf(nativeCb);
        CB_PROTO_PROPS.forEach(function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
            if (!validDescriptor(desc)) {
                return;
            }
            Object.defineProperty(nativeCb, controlState, desc);
        });
    };
    Object.defineProperty(MDCCheckbox.prototype, "nativeControl_", {
        get: function () {
            var NATIVE_CONTROL_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_7__["MDCCheckboxFoundation"].strings.NATIVE_CONTROL_SELECTOR;
            var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
            if (!el) {
                throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
            }
            return el;
        },
        enumerable: true,
        configurable: true
    });
    return MDCCheckbox;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__["MDCComponent"]));

function validDescriptor(inputPropDesc) {
    return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/checkbox/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/constants.js ***!
  \******************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    BACKGROUND: 'mdc-checkbox__background',
    CHECKED: 'mdc-checkbox--checked',
    CHECKMARK: 'mdc-checkbox__checkmark',
    CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
    DISABLED: 'mdc-checkbox--disabled',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    MIXEDMARK: 'mdc-checkbox__mixedmark',
    NATIVE_CONTROL: 'mdc-checkbox__native-control',
    ROOT: 'mdc-checkbox',
    SELECTED: 'mdc-checkbox--selected',
    UPGRADED: 'mdc-checkbox--upgraded',
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
    NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
};
var numbers = {
    ANIM_END_LATCH_MS: 250,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/checkbox/foundation.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/checkbox/foundation.js ***!
  \*******************************************************/
/*! exports provided: MDCCheckboxFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() { return MDCCheckboxFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/checkbox/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCCheckboxFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCCheckboxFoundation, _super);
    function MDCCheckboxFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;
        _this.currentCheckState_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INIT;
        _this.currentAnimationClass_ = '';
        _this.animEndLatchTimer_ = 0;
        _this.enableAnimationEndHandler_ = false;
        return _this;
    }
    Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                hasNativeControl: function () { return false; },
                isAttachedToDOM: function () { return false; },
                isChecked: function () { return false; },
                isIndeterminate: function () { return false; },
                removeClass: function () { return undefined; },
                removeNativeControlAttr: function () { return undefined; },
                setNativeControlAttr: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCCheckboxFoundation.prototype.init = function () {
        this.currentCheckState_ = this.determineCheckState_();
        this.updateAriaChecked_();
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].UPGRADED);
    };
    MDCCheckboxFoundation.prototype.destroy = function () {
        clearTimeout(this.animEndLatchTimer_);
    };
    MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
        this.adapter_.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
        }
    };
    /**
     * Handles the animationend event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
        var _this = this;
        if (!this.enableAnimationEndHandler_) {
            return;
        }
        clearTimeout(this.animEndLatchTimer_);
        this.animEndLatchTimer_ = setTimeout(function () {
            _this.adapter_.removeClass(_this.currentAnimationClass_);
            _this.enableAnimationEndHandler_ = false;
        }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ANIM_END_LATCH_MS);
    };
    /**
     * Handles the change event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleChange = function () {
        this.transitionCheckState_();
    };
    MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
        if (!this.adapter_.hasNativeControl()) {
            return;
        }
        var oldState = this.currentCheckState_;
        var newState = this.determineCheckState_();
        if (oldState === newState) {
            return;
        }
        this.updateAriaChecked_();
        var TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
        var SELECTED = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED;
        if (newState === TRANSITION_STATE_UNCHECKED) {
            this.adapter_.removeClass(SELECTED);
        }
        else {
            this.adapter_.addClass(SELECTED);
        }
        // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.
        if (this.currentAnimationClass_.length > 0) {
            clearTimeout(this.animEndLatchTimer_);
            this.adapter_.forceLayout();
            this.adapter_.removeClass(this.currentAnimationClass_);
        }
        this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
        this.currentCheckState_ = newState;
        // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.
        if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
            this.adapter_.addClass(this.currentAnimationClass_);
            this.enableAnimationEndHandler_ = true;
        }
    };
    MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
        var TRANSITION_STATE_INDETERMINATE = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
        if (this.adapter_.isIndeterminate()) {
            return TRANSITION_STATE_INDETERMINATE;
        }
        return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    };
    MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
        var TRANSITION_STATE_INIT = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
        var _a = MDCCheckboxFoundation.cssClasses, ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;
        switch (oldState) {
            case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                    return '';
                }
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
            case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
            default: // TRANSITION_STATE_INDETERMINATE
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
    };
    MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.adapter_.isIndeterminate()) {
            this.adapter_.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_INDETERMINATE_VALUE);
        }
        else {
            // The on/off state does not need to keep track of aria-checked, since
            // the screenreader uses the checked property on the checkbox element.
            this.adapter_.removeNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR);
        }
    };
    return MDCCheckboxFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCCheckboxFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/checkbox/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/checkbox/index.js ***!
  \**************************************************/
/*! exports provided: MDCCheckbox, cssClasses, strings, numbers, MDCCheckboxFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/checkbox/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCCheckbox"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/checkbox/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/checkbox/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCCheckboxFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/*! exports provided: applyPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@material/dom/focus-trap.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/dom/focus-trap.js ***!
  \**************************************************/
/*! exports provided: FocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */
var FocusTrap = /** @class */ (function () {
    function FocusTrap(root, options) {
        if (options === void 0) { options = {}; }
        this.root = root;
        this.options = options;
        // Previously focused element before trapping focus.
        this.elFocusedBeforeTrapFocus = null;
    }
    /**
     * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
     * otherwises sets initial focus to the first focusable child element.
     */
    FocusTrap.prototype.trapFocus = function () {
        var focusableEls = this.getFocusableElements(this.root);
        if (focusableEls.length === 0) {
            throw new Error('FocusTrap: Element must have at least one focusable child.');
        }
        this.elFocusedBeforeTrapFocus =
            document.activeElement instanceof HTMLElement ? document.activeElement :
                null;
        this.wrapTabFocus(this.root, focusableEls);
        if (!this.options.skipInitialFocus) {
            this.focusInitialElement(focusableEls, this.options.initialFocusEl);
        }
    };
    /**
     * Releases focus from `root`. Also restores focus to the previously focused
     * element.
     */
    FocusTrap.prototype.releaseFocus = function () {
        [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS))
            .forEach(function (sentinelEl) {
            sentinelEl.parentElement.removeChild(sentinelEl);
        });
        if (this.elFocusedBeforeTrapFocus) {
            this.elFocusedBeforeTrapFocus.focus();
        }
    };
    /**
     * Wraps tab focus within `el` by adding two hidden sentinel divs which are
     * used to mark the beginning and the end of the tabbable region. When
     * focused, these sentinel elements redirect focus to the first/last
     * children elements of the tabbable region, ensuring that focus is trapped
     * within that region.
     */
    FocusTrap.prototype.wrapTabFocus = function (el, focusableEls) {
        var sentinelStart = this.createSentinel();
        var sentinelEnd = this.createSentinel();
        sentinelStart.addEventListener('focus', function () {
            if (focusableEls.length > 0) {
                focusableEls[focusableEls.length - 1].focus();
            }
        });
        sentinelEnd.addEventListener('focus', function () {
            if (focusableEls.length > 0) {
                focusableEls[0].focus();
            }
        });
        el.insertBefore(sentinelStart, el.children[0]);
        el.appendChild(sentinelEnd);
    };
    /**
     * Focuses on `initialFocusEl` if defined and a child of the root element.
     * Otherwise, focuses on the first focusable child element of the root.
     */
    FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
        var focusIndex = 0;
        if (initialFocusEl) {
            focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
        }
        focusableEls[focusIndex].focus();
    };
    FocusTrap.prototype.getFocusableElements = function (root) {
        var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
        return focusableEls.filter(function (el) {
            var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' ||
                el.getAttribute('disabled') != null ||
                el.getAttribute('hidden') != null ||
                el.getAttribute('aria-hidden') === 'true';
            var isTabbableAndVisible = el.tabIndex >= 0 &&
                el.getBoundingClientRect().width > 0 &&
                !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
            var isProgrammaticallyHidden = false;
            if (isTabbableAndVisible) {
                var style = getComputedStyle(el);
                isProgrammaticallyHidden =
                    style.display === 'none' || style.visibility === 'hidden';
            }
            return isTabbableAndVisible && !isProgrammaticallyHidden;
        });
    };
    FocusTrap.prototype.createSentinel = function () {
        var sentinel = document.createElement('div');
        sentinel.setAttribute('tabindex', '0');
        // Don't announce in screen readers.
        sentinel.setAttribute('aria-hidden', 'true');
        sentinel.classList.add(FOCUS_SENTINEL_CLASS);
        return sentinel;
    };
    return FocusTrap;
}());

//# sourceMappingURL=focus-trap.js.map

/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/*! exports provided: closest, matches, estimateScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateScrollWidth", function() { return estimateScrollWidth; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/drawer/component.js ***!
  \****************************************************/
/*! exports provided: MDCDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDrawer", function() { return MDCDrawer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/focus-trap */ "./node_modules/@material/dom/focus-trap.js");
/* harmony import */ var _material_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/list/component */ "./node_modules/@material/list/component.js");
/* harmony import */ var _material_list_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/list/foundation */ "./node_modules/@material/list/foundation.js");
/* harmony import */ var _dismissible_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dismissible/foundation */ "./node_modules/@material/drawer/dismissible/foundation.js");
/* harmony import */ var _modal_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/foundation */ "./node_modules/@material/drawer/modal/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./node_modules/@material/drawer/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var cssClasses = _dismissible_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDismissibleDrawerFoundation"].cssClasses, strings = _dismissible_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDismissibleDrawerFoundation"].strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */
var MDCDrawer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDrawer, _super);
    function MDCDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCDrawer.attachTo = function (root) {
        return new MDCDrawer(root);
    };
    Object.defineProperty(MDCDrawer.prototype, "open", {
        /**
         * @return boolean Proxies to the foundation's `open`/`close` methods.
         * Also returns true if drawer is in the open position.
         */
        get: function () {
            return this.foundation_.isOpen();
        },
        /**
         * Toggles the drawer open and closed.
         */
        set: function (isOpen) {
            if (isOpen) {
                this.foundation_.open();
            }
            else {
                this.foundation_.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDrawer.prototype, "list", {
        get: function () {
            return this.list_;
        },
        enumerable: true,
        configurable: true
    });
    MDCDrawer.prototype.initialize = function (focusTrapFactory, listFactory) {
        if (focusTrapFactory === void 0) { focusTrapFactory = function (el) { return new _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_2__["FocusTrap"](el); }; }
        if (listFactory === void 0) { listFactory = function (el) { return new _material_list_component__WEBPACK_IMPORTED_MODULE_3__["MDCList"](el); }; }
        var listEl = this.root_.querySelector("." + _material_list_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"].cssClasses.ROOT);
        if (listEl) {
            this.list_ = listFactory(listEl);
            this.list_.wrapFocus = true;
        }
        this.focusTrapFactory_ = focusTrapFactory;
    };
    MDCDrawer.prototype.initialSyncWithDOM = function () {
        var _this = this;
        var MODAL = cssClasses.MODAL;
        var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
        this.scrim_ = this.root_.parentNode.querySelector(SCRIM_SELECTOR);
        if (this.scrim_ && this.root_.classList.contains(MODAL)) {
            this.handleScrimClick_ = function () { return _this.foundation_.handleScrimClick(); };
            this.scrim_.addEventListener('click', this.handleScrimClick_);
            this.focusTrap_ = _util__WEBPACK_IMPORTED_MODULE_7__["createFocusTrapInstance"](this.root_, this.focusTrapFactory_);
        }
        this.handleKeydown_ = function (evt) { return _this.foundation_.handleKeydown(evt); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation_.handleTransitionEnd(evt); };
        this.listen('keydown', this.handleKeydown_);
        this.listen('transitionend', this.handleTransitionEnd_);
    };
    MDCDrawer.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('transitionend', this.handleTransitionEnd_);
        if (this.list_) {
            this.list_.destroy();
        }
        var MODAL = cssClasses.MODAL;
        if (this.scrim_ && this.handleScrimClick_ && this.root_.classList.contains(MODAL)) {
            this.scrim_.removeEventListener('click', this.handleScrimClick_);
            // Ensure drawer is closed to hide scrim and release focus
            this.open = false;
        }
    };
    MDCDrawer.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            elementHasClass: function (element, className) { return element.classList.contains(className); },
            saveFocus: function () { return _this.previousFocus_ = document.activeElement; },
            restoreFocus: function () {
                var previousFocus = _this.previousFocus_;
                if (previousFocus && previousFocus.focus && _this.root_.contains(document.activeElement)) {
                    previousFocus.focus();
                }
            },
            focusActiveNavigationItem: function () {
                var activeNavItemEl = _this.root_.querySelector("." + _material_list_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"].cssClasses.LIST_ITEM_ACTIVATED_CLASS);
                if (activeNavItemEl) {
                    activeNavItemEl.focus();
                }
            },
            notifyClose: function () { return _this.emit(strings.CLOSE_EVENT, {}, true /* shouldBubble */); },
            notifyOpen: function () { return _this.emit(strings.OPEN_EVENT, {}, true /* shouldBubble */); },
            trapFocus: function () { return _this.focusTrap_.trapFocus(); },
            releaseFocus: function () { return _this.focusTrap_.releaseFocus(); },
        };
        // tslint:enable:object-literal-sort-keys
        var DISMISSIBLE = cssClasses.DISMISSIBLE, MODAL = cssClasses.MODAL;
        if (this.root_.classList.contains(DISMISSIBLE)) {
            return new _dismissible_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDismissibleDrawerFoundation"](adapter);
        }
        else if (this.root_.classList.contains(MODAL)) {
            return new _modal_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCModalDrawerFoundation"](adapter);
        }
        else {
            throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
        }
    };
    return MDCDrawer;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/drawer/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANIMATE: 'mdc-drawer--animate',
    CLOSING: 'mdc-drawer--closing',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    OPENING: 'mdc-drawer--opening',
    ROOT: 'mdc-drawer',
};
var strings = {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/dismissible/foundation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/drawer/dismissible/foundation.js ***!
  \*****************************************************************/
/*! exports provided: MDCDismissibleDrawerFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDismissibleDrawerFoundation", function() { return MDCDismissibleDrawerFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/drawer/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDismissibleDrawerFoundation, _super);
    function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDismissibleDrawerFoundation.defaultAdapter, adapter)) || this;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                elementHasClass: function () { return false; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                focusActiveNavigationItem: function () { return undefined; },
                trapFocus: function () { return undefined; },
                releaseFocus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCDismissibleDrawerFoundation.prototype.destroy = function () {
        if (this.animationFrame_) {
            cancelAnimationFrame(this.animationFrame_);
        }
        if (this.animationTimer_) {
            clearTimeout(this.animationTimer_);
        }
    };
    /**
     * Opens the drawer from the closed state.
     */
    MDCDismissibleDrawerFoundation.prototype.open = function () {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
        });
        this.adapter_.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */
    MDCDismissibleDrawerFoundation.prototype.close = function () {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
        return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
        return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING) || this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */
    MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
        return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */
    MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */
    MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
        var OPENING = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING, CLOSING = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING, OPEN = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN, ANIMATE = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ANIMATE, ROOT = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
        var isRootElement = this.isElement_(evt.target) && this.adapter_.elementHasClass(evt.target, ROOT);
        if (!isRootElement) {
            return;
        }
        if (this.isClosing()) {
            this.adapter_.removeClass(OPEN);
            this.closed_();
            this.adapter_.restoreFocus();
            this.adapter_.notifyClose();
        }
        else {
            this.adapter_.focusActiveNavigationItem();
            this.opened_();
            this.adapter_.notifyOpen();
        }
        this.adapter_.removeClass(ANIMATE);
        this.adapter_.removeClass(OPENING);
        this.adapter_.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */
    MDCDismissibleDrawerFoundation.prototype.opened_ = function () { }; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */
    MDCDismissibleDrawerFoundation.prototype.closed_ = function () { }; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCDismissibleDrawerFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/drawer/index.js ***!
  \************************************************/
/*! exports provided: util, MDCDrawer, cssClasses, strings, MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/drawer/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/drawer/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDrawer", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCDrawer"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/drawer/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony import */ var _dismissible_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dismissible/foundation */ "./node_modules/@material/drawer/dismissible/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDismissibleDrawerFoundation", function() { return _dismissible_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCDismissibleDrawerFoundation"]; });

/* harmony import */ var _modal_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/foundation */ "./node_modules/@material/drawer/modal/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCModalDrawerFoundation", function() { return _modal_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCModalDrawerFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/modal/foundation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/drawer/modal/foundation.js ***!
  \***********************************************************/
/*! exports provided: MDCModalDrawerFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCModalDrawerFoundation", function() { return MDCModalDrawerFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dismissible_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dismissible/foundation */ "./node_modules/@material/drawer/dismissible/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */
var MDCModalDrawerFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCModalDrawerFoundation, _super);
    function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */
    MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */
    MDCModalDrawerFoundation.prototype.opened_ = function () {
        this.adapter_.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */
    MDCModalDrawerFoundation.prototype.closed_ = function () {
        this.adapter_.releaseFocus();
    };
    return MDCModalDrawerFoundation;
}(_dismissible_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCDismissibleDrawerFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCModalDrawerFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/drawer/util.js ***!
  \***********************************************/
/*! exports provided: createFocusTrapInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrapInstance", function() { return createFocusTrapInstance; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
    return focusTrapFactory(surfaceEl, {
        // Component handles focusing on active nav item.
        skipInitialFocus: true,
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/component.js ***!
  \************************************************************/
/*! exports provided: MDCFloatingLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function() { return MDCFloatingLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/floating-label/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCFloatingLabel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabel, _super);
    function MDCFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel.attachTo = function (root) {
        return new MDCFloatingLabel(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */
    MDCFloatingLabel.prototype.shake = function (shouldShake) {
        this.foundation_.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MDCFloatingLabel.prototype.float = function (shouldFloat) {
        this.foundation_.float(shouldFloat);
    };
    MDCFloatingLabel.prototype.getWidth = function () {
        return this.foundation_.getWidth();
    };
    MDCFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            getWidth: function () { return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["estimateScrollWidth"])(_this.root_); },
            registerInteractionHandler: function (evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return _this.unlisten(evtType, handler);
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCFloatingLabelFoundation"](adapter);
    };
    return MDCFloatingLabel;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/constants.js ***!
  \************************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/floating-label/foundation.js ***!
  \*************************************************************/
/*! exports provided: MDCFloatingLabelFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function() { return MDCFloatingLabelFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/floating-label/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter_.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter_.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter_.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter_.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFloatingLabelFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/floating-label/index.js ***!
  \********************************************************/
/*! exports provided: MDCFloatingLabel, cssClasses, MDCFloatingLabelFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/floating-label/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCFloatingLabel"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/floating-label/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/floating-label/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/component.js ***!
  \*********************************************************/
/*! exports provided: MDCLineRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRipple", function() { return MDCLineRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/line-ripple/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRipple = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRipple, _super);
    function MDCLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple.attachTo = function (root) {
        return new MDCLineRipple(root);
    };
    /**
     * Activates the line ripple
     */
    MDCLineRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MDCLineRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        this.foundation_.setRippleCenter(xCoordinate);
    };
    MDCLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setStyle: function (propertyName, value) { return _this.root_.style.setProperty(propertyName, value); },
            registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLineRippleFoundation"](adapter);
    };
    return MDCLineRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/constants.js ***!
  \*********************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/line-ripple/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCLineRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function() { return MDCLineRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/line-ripple/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRippleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
        _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
                this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCLineRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/list/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/component.js ***!
  \**************************************************/
/*! exports provided: MDCList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCList", function() { return MDCList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/list/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCList, _super);
    function MDCList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList.prototype, "vertical", {
        set: function (value) {
            this.foundation_.setVerticalOrientation(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "listElements", {
        get: function () {
            return [].slice.call(this.root_.querySelectorAll("." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "wrapFocus", {
        set: function (value) {
            this.foundation_.setWrapFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "singleSelection", {
        set: function (isSingleSelectionList) {
            this.foundation_.setSingleSelection(isSingleSelectionList);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "selectedIndex", {
        get: function () {
            return this.foundation_.getSelectedIndex();
        },
        set: function (index) {
            this.foundation_.setSelectedIndex(index);
        },
        enumerable: true,
        configurable: true
    });
    MDCList.attachTo = function (root) {
        return new MDCList(root);
    };
    MDCList.prototype.initialSyncWithDOM = function () {
        this.handleClick_ = this.handleClickEvent_.bind(this);
        this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
        this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
        this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
        this.listen('keydown', this.handleKeydown_);
        this.listen('click', this.handleClick_);
        this.listen('focusin', this.focusInEventListener_);
        this.listen('focusout', this.focusOutEventListener_);
        this.layout();
        this.initializeListType();
    };
    MDCList.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('click', this.handleClick_);
        this.unlisten('focusin', this.focusInEventListener_);
        this.unlisten('focusout', this.focusOutEventListener_);
    };
    MDCList.prototype.layout = function () {
        var direction = this.root_.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ORIENTATION);
        this.vertical = direction !== _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ORIENTATION_HORIZONTAL;
        // List items need to have at least tabindex=-1 to be focusable.
        [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])'))
            .forEach(function (el) {
            el.setAttribute('tabindex', '-1');
        });
        // Child button/a elements are not tabbable until the list item is focused.
        [].slice.call(this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].FOCUSABLE_CHILD_ELEMENTS))
            .forEach(function (el) { return el.setAttribute('tabindex', '-1'); });
        this.foundation_.layout();
    };
    /**
     * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
     */
    MDCList.prototype.initializeListType = function () {
        var _this = this;
        var checkboxListItems = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ROLE_CHECKBOX_SELECTOR);
        var singleSelectedListItem = this.root_.querySelector("\n      ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_SELECTED_CLASS + "\n    ");
        var radioSelectedListItem = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex =
                [].map.call(preselectedItems, function (listItem) { return _this.listElements.indexOf(listItem); });
        }
        else if (singleSelectedListItem) {
            if (singleSelectedListItem.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS)) {
                this.foundation_.setUseActivatedClass(true);
            }
            this.singleSelection = true;
            this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
        }
        else if (radioSelectedListItem) {
            this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
    };
    /**
     * Updates the list item at itemIndex to the desired isEnabled state.
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
        this.foundation_.setEnabled(itemIndex, isEnabled);
    };
    MDCList.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.add(className);
                }
            },
            focusItemAtIndex: function (index) {
                var element = _this.listElements[index];
                if (element) {
                    element.focus();
                }
            },
            getAttributeForElementIndex: function (index, attr) { return _this.listElements[index].getAttribute(attr); },
            getFocusedElementIndex: function () { return _this.listElements.indexOf(document.activeElement); },
            getListItemCount: function () { return _this.listElements.length; },
            hasCheckboxAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function (index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function () {
                return _this.root_.contains(document.activeElement);
            },
            isRootFocused: function () { return document.activeElement === _this.root_; },
            listItemAtIndexHasClass: function (index, className) { return _this.listElements[index].classList.contains(className); },
            notifyAction: function (index) {
                _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_EVENT, { index: index }, /** shouldBubble */ true);
            },
            removeClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.remove(className);
                }
            },
            setAttributeForElementIndex: function (index, attr, value) {
                var element = _this.listElements[index];
                if (element) {
                    element.setAttribute(attr, value);
                }
            },
            setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var listItemChildren = [].slice.call(element.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                listItemChildren.forEach(function (el) { return el.setAttribute('tabindex', tabIndexValue); });
            },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"](adapter);
    };
    /**
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     */
    MDCList.prototype.getListItemIndex_ = function (evt) {
        var eventTarget = evt.target;
        var nearestParent = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["closest"])(eventTarget, "." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS + ", ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].ROOT);
        // Get the index of the element if it is a list item.
        if (nearestParent && Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(nearestParent, "." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS)) {
            return this.listElements.indexOf(nearestParent);
        }
        return -1;
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleFocusInEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusIn(evt, index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleFocusOutEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusOut(evt, index);
    };
    /**
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     */
    MDCList.prototype.handleKeydownEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        this.foundation_.handleKeydown(evt, target.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS), index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleClickEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
        var toggleCheckbox = !Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(target, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(index, toggleCheckbox);
    };
    return MDCList;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/list/constants.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/constants.js ***!
  \**************************************************/
/*! exports provided: strings, cssClasses, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list',
};
var strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
};
var numbers = {
    UNSET_INDEX: -1,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/list/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/list/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCListFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCListFoundation", function() { return MDCListFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
var MDCListFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCListFoundation.defaultAdapter, adapter)) || this;
        _this.wrapFocus_ = false;
        _this.isVertical_ = true;
        _this.isSingleSelectionList_ = false;
        _this.selectedIndex_ = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX;
        _this.focusedItemIndex_ = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX;
        _this.useActivatedClass_ = false;
        _this.ariaCurrentAttrValue_ = null;
        _this.isCheckboxList_ = false;
        _this.isRadioList_ = false;
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClassForElementIndex: function () { return undefined; },
                focusItemAtIndex: function () { return undefined; },
                getAttributeForElementIndex: function () { return null; },
                getFocusedElementIndex: function () { return 0; },
                getListItemCount: function () { return 0; },
                hasCheckboxAtIndex: function () { return false; },
                hasRadioAtIndex: function () { return false; },
                isCheckboxCheckedAtIndex: function () { return false; },
                isFocusInsideList: function () { return false; },
                isRootFocused: function () { return false; },
                listItemAtIndexHasClass: function () { return false; },
                notifyAction: function () { return undefined; },
                removeClassForElementIndex: function () { return undefined; },
                setAttributeForElementIndex: function () { return undefined; },
                setCheckedCheckboxOrRadioAtIndex: function () { return undefined; },
                setTabIndexForListItemChildren: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter_.getListItemCount() === 0) {
            return;
        }
        if (this.adapter_.hasCheckboxAtIndex(0)) {
            this.isCheckboxList_ = true;
        }
        else if (this.adapter_.hasRadioAtIndex(0)) {
            this.isRadioList_ = true;
        }
    };
    /**
     * Sets the private wrapFocus_ variable.
     */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus_ = value;
    };
    /**
     * Sets the isVertical_ private variable.
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical_ = value;
    };
    /**
     * Sets the isSingleSelectionList_ private variable.
     */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList_ = value;
    };
    /**
     * Sets the useActivatedClass_ private variable.
     */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass_ = useActivated;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex_;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isCheckboxList_) {
            this.setCheckboxAtIndex_(index);
        }
        else if (this.isRadioList_) {
            this.setRadioAtIndex_(index);
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
         * is moved to next element.
         */
        setTimeout(function () {
            if (!_this.adapter_.isFocusInsideList()) {
                _this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
        var isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
        var isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
        var isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
        var isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
        var isHome = evt.key === 'Home' || evt.keyCode === 36;
        var isEnd = evt.key === 'End' || evt.keyCode === 35;
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        if (this.adapter_.isRootFocused()) {
            if (isArrowUp || isEnd) {
                evt.preventDefault();
                this.focusLastElement();
            }
            else if (isArrowDown || isHome) {
                evt.preventDefault();
                this.focusFirstElement();
            }
            return;
        }
        var currentIndex = this.adapter_.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        var nextIndex;
        if ((this.isVertical_ && isArrowDown) || (!this.isVertical_ && isArrowRight)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusFirstElement();
        }
        else if (isEnd) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusLastElement();
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
                var target = evt.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent_(evt);
                if (this.isSelectableList_()) {
                    this.setSelectedIndexOnAction_(currentIndex);
                }
                this.adapter_.notifyAction(currentIndex);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex !== undefined) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    };
    /**
     * Click handler for the list.
     */
    MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
        if (index === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
            return;
        }
        if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(index, toggleCheckbox);
        }
        this.adapter_.notifyAction(index);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter_.getListItemCount();
        var nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter_.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        this.adapter_.focusItemAtIndex(0);
        return 0;
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        var lastIndex = this.adapter_.getListItemCount() - 1;
        this.adapter_.focusItemAtIndex(lastIndex);
        return lastIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
        if (!this.isIndexValid_(itemIndex)) {
            return;
        }
        if (isEnabled) {
            this.adapter_.removeClassForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
            this.adapter_.setAttributeForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_DISABLED, 'false');
        }
        else {
            this.adapter_.addClassForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
            this.adapter_.setAttributeForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_DISABLED, 'true');
        }
    };
    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     */
    MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
        var target = evt.target;
        var tagName = ("" + target.tagName).toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
        if (this.selectedIndex_ === index) {
            return;
        }
        var selectedClassName = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass_) {
            selectedClassName = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
            this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
        }
        this.adapter_.addClassForElementIndex(index, selectedClassName);
        this.setAriaForSingleSelectionAtIndex_(index);
        this.selectedIndex_ = index;
    };
    /**
     * Sets aria attribute for single selection at given index.
     */
    MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
        // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
        if (this.selectedIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
            this.ariaCurrentAttrValue_ =
                this.adapter_.getAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        var ariaAttribute = isAriaCurrent ? _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CURRENT : _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED;
        if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
        this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, 'false');
        }
        this.adapter_.setAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, 'true');
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
        for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
            var isChecked = false;
            if (index.indexOf(i) >= 0) {
                isChecked = true;
            }
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter_.setAttributeForElementIndex(i, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, isChecked ? 'true' : 'false');
        }
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
        if (this.focusedItemIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
            this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
        }
        else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
        }
        this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio list.
     */
    MDCListFoundation.prototype.isSelectableList_ = function () {
        return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
        var targetIndex = 0;
        if (this.isSelectableList_()) {
            if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
                targetIndex = this.selectedIndex_;
            }
            else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
                targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) { return Math.min(currentIndex, minIndex); });
            }
        }
        this.setTabindexAtIndex_(targetIndex);
    };
    MDCListFoundation.prototype.isIndexValid_ = function (index) {
        var _this = this;
        if (index instanceof Array) {
            if (!this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            }
            else {
                return index.some(function (i) { return _this.isIndexInRange_(i); });
            }
        }
        else if (typeof index === 'number') {
            if (this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
            }
            return this.isIndexInRange_(index);
        }
        else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange_ = function (index) {
        var listSize = this.adapter_.getListItemCount();
        return index >= 0 && index < listSize;
    };
    /**
     * Sets selected index on user action, toggles checkbox / radio based on toggleCheckbox value.
     * User interaction should not toggle list item(s) when disabled.
     */
    MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
        if (toggleCheckbox === void 0) { toggleCheckbox = true; }
        if (this.adapter_.listItemAtIndexHasClass(index, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS)) {
            return;
        }
        if (this.isCheckboxList_) {
            this.toggleCheckboxAtIndex_(index, toggleCheckbox);
        }
        else {
            this.setSelectedIndex(index);
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
        var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);
        if (toggleCheckbox) {
            isChecked = !isChecked;
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }
        this.adapter_.setAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, isChecked ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.
        var selectedIndexes = this.selectedIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX ? [] : this.selectedIndex_.slice();
        if (isChecked) {
            selectedIndexes.push(index);
        }
        else {
            selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
        }
        this.selectedIndex_ = selectedIndexes;
    };
    return MDCListFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCListFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/component.js ***!
  \*************************************************************/
/*! exports provided: MDCNotchedOutline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function() { return MDCNotchedOutline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/floating-label/foundation */ "./node_modules/@material/floating-label/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/notched-outline/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCNotchedOutline = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutline, _super);
    function MDCNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline.attachTo = function (root) {
        return new MDCNotchedOutline(root);
    };
    MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
        this.notchElement_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NOTCH_ELEMENT_SELECTOR);
        var label = this.root_.querySelector('.' + _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"].cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label.style.transitionDuration = '';
            });
        }
        else {
            this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].NO_LABEL);
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MDCNotchedOutline.prototype.notch = function (notchWidth) {
        this.foundation_.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MDCNotchedOutline.prototype.closeNotch = function () {
        this.foundation_.closeNotch();
    };
    MDCNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setNotchWidthProperty: function (width) { return _this.notchElement_.style.setProperty('width', width + 'px'); },
            removeNotchWidthProperty: function () { return _this.notchElement_.style.removeProperty('width'); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCNotchedOutlineFoundation"](adapter);
    };
    return MDCNotchedOutline;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/constants.js ***!
  \*************************************************************/
/*! exports provided: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/notched-outline/foundation.js ***!
  \**************************************************************/
/*! exports provided: MDCNotchedOutlineFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function() { return MDCNotchedOutlineFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter_.setNotchWidthProperty(notchWidth);
        this.adapter_.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter_.removeClass(OUTLINE_NOTCHED);
        this.adapter_.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCNotchedOutlineFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCRipple = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = { isUnbounded: undefined }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root_.classList.add(className); },
            browserSupportsCssVars: function () { return _util__WEBPACK_IMPORTED_MODULE_5__["supportsCssVariables"](window); },
            computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root_.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            isSurfaceActive: function () { return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(instance.root_, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            removeClass: function (className) { return instance.root_.classList.remove(className); },
            updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        }
        else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize_ = initialSize - 1;
        }
        else {
            this.initialSize_ = initialSize;
        }
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/ripple/index.js ***!
  \************************************************/
/*! exports provided: util, MDCRipple, cssClasses, strings, numbers, MDCRippleFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/ripple/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCRipple"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/*! exports provided: supportsCssVariables, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    supportsCssVars =
        explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/component.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-bar/component.js ***!
  \*****************************************************/
/*! exports provided: MDCTabBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabBar", function() { return MDCTabBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_tab_scroller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/tab-scroller/component */ "./node_modules/@material/tab-scroller/component.js");
/* harmony import */ var _material_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/tab/component */ "./node_modules/@material/tab/component.js");
/* harmony import */ var _material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/tab/foundation */ "./node_modules/@material/tab/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-bar/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var strings = _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabBarFoundation"].strings;
var tabIdCounter = 0;
var MDCTabBar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabBar, _super);
    function MDCTabBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabBar.attachTo = function (root) {
        return new MDCTabBar(root);
    };
    Object.defineProperty(MDCTabBar.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            this.tabList_.forEach(function (tab) { return tab.focusOnActivate = focusOnActivate; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabBar.prototype, "useAutomaticActivation", {
        set: function (useAutomaticActivation) {
            this.foundation_.setUseAutomaticActivation(useAutomaticActivation);
        },
        enumerable: true,
        configurable: true
    });
    MDCTabBar.prototype.initialize = function (tabFactory, tabScrollerFactory) {
        if (tabFactory === void 0) { tabFactory = function (el) { return new _material_tab_component__WEBPACK_IMPORTED_MODULE_3__["MDCTab"](el); }; }
        if (tabScrollerFactory === void 0) { tabScrollerFactory = function (el) { return new _material_tab_scroller_component__WEBPACK_IMPORTED_MODULE_2__["MDCTabScroller"](el); }; }
        this.tabList_ = this.instantiateTabs_(tabFactory);
        this.tabScroller_ = this.instantiateTabScroller_(tabScrollerFactory);
    };
    MDCTabBar.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleTabInteraction_ = function (evt) { return _this.foundation_.handleTabInteraction(evt); };
        this.handleKeyDown_ = function (evt) { return _this.foundation_.handleKeyDown(evt); };
        this.listen(_material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabFoundation"].strings.INTERACTED_EVENT, this.handleTabInteraction_);
        this.listen('keydown', this.handleKeyDown_);
        for (var i = 0; i < this.tabList_.length; i++) {
            if (this.tabList_[i].active) {
                this.scrollIntoView(i);
                break;
            }
        }
    };
    MDCTabBar.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unlisten(_material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabFoundation"].strings.INTERACTED_EVENT, this.handleTabInteraction_);
        this.unlisten('keydown', this.handleKeyDown_);
        this.tabList_.forEach(function (tab) { return tab.destroy(); });
        if (this.tabScroller_) {
            this.tabScroller_.destroy();
        }
    };
    MDCTabBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            scrollTo: function (scrollX) { return _this.tabScroller_.scrollTo(scrollX); },
            incrementScroll: function (scrollXIncrement) { return _this.tabScroller_.incrementScroll(scrollXIncrement); },
            getScrollPosition: function () { return _this.tabScroller_.getScrollPosition(); },
            getScrollContentWidth: function () { return _this.tabScroller_.getScrollContentWidth(); },
            getOffsetWidth: function () { return _this.root_.offsetWidth; },
            isRTL: function () { return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl'; },
            setActiveTab: function (index) { return _this.foundation_.activateTab(index); },
            activateTabAtIndex: function (index, clientRect) { return _this.tabList_[index].activate(clientRect); },
            deactivateTabAtIndex: function (index) { return _this.tabList_[index].deactivate(); },
            focusTabAtIndex: function (index) { return _this.tabList_[index].focus(); },
            getTabIndicatorClientRectAtIndex: function (index) { return _this.tabList_[index].computeIndicatorClientRect(); },
            getTabDimensionsAtIndex: function (index) { return _this.tabList_[index].computeDimensions(); },
            getPreviousActiveTabIndex: function () {
                for (var i = 0; i < _this.tabList_.length; i++) {
                    if (_this.tabList_[i].active) {
                        return i;
                    }
                }
                return -1;
            },
            getFocusedTabIndex: function () {
                var tabElements = _this.getTabElements_();
                var activeElement = document.activeElement;
                return tabElements.indexOf(activeElement);
            },
            getIndexOfTabById: function (id) {
                for (var i = 0; i < _this.tabList_.length; i++) {
                    if (_this.tabList_[i].id === id) {
                        return i;
                    }
                }
                return -1;
            },
            getTabListLength: function () { return _this.tabList_.length; },
            notifyTabActivated: function (index) {
                return _this.emit(strings.TAB_ACTIVATED_EVENT, { index: index }, true);
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabBarFoundation"](adapter);
    };
    /**
     * Activates the tab at the given index
     * @param index The index of the tab
     */
    MDCTabBar.prototype.activateTab = function (index) {
        this.foundation_.activateTab(index);
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index THe index of the tab
     */
    MDCTabBar.prototype.scrollIntoView = function (index) {
        this.foundation_.scrollIntoView(index);
    };
    /**
     * Returns all the tab elements in a nice clean array
     */
    MDCTabBar.prototype.getTabElements_ = function () {
        return [].slice.call(this.root_.querySelectorAll(strings.TAB_SELECTOR));
    };
    /**
     * Instantiates tab components on all child tab elements
     */
    MDCTabBar.prototype.instantiateTabs_ = function (tabFactory) {
        return this.getTabElements_().map(function (el) {
            el.id = el.id || "mdc-tab-" + ++tabIdCounter;
            return tabFactory(el);
        });
    };
    /**
     * Instantiates tab scroller component on the child tab scroller element
     */
    MDCTabBar.prototype.instantiateTabScroller_ = function (tabScrollerFactory) {
        var tabScrollerElement = this.root_.querySelector(strings.TAB_SCROLLER_SELECTOR);
        if (tabScrollerElement) {
            return tabScrollerFactory(tabScrollerElement);
        }
        return null;
    };
    return MDCTabBar;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-bar/constants.js ***!
  \*****************************************************/
/*! exports provided: numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    HOME_KEY: 'Home',
    SPACE_KEY: 'Space',
    TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
    TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
    TAB_SELECTOR: '.mdc-tab',
};
var numbers = {
    ARROW_LEFT_KEYCODE: 37,
    ARROW_RIGHT_KEYCODE: 39,
    END_KEYCODE: 35,
    ENTER_KEYCODE: 13,
    EXTRA_SCROLL_AMOUNT: 20,
    HOME_KEYCODE: 36,
    SPACE_KEYCODE: 32,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/foundation.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/tab-bar/foundation.js ***!
  \******************************************************/
/*! exports provided: MDCTabBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabBarFoundation", function() { return MDCTabBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-bar/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ACCEPTABLE_KEYS = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].END_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].HOME_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ENTER_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SPACE_KEY);
var KEYCODE_MAP = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this by hand
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ARROW_LEFT_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_LEFT_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ARROW_RIGHT_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_RIGHT_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].END_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].END_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].HOME_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].HOME_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ENTER_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ENTER_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].SPACE_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SPACE_KEY);
var MDCTabBarFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabBarFoundation, _super);
    function MDCTabBarFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTabBarFoundation.defaultAdapter, adapter)) || this;
        _this.useAutomaticActivation_ = false;
        return _this;
    }
    Object.defineProperty(MDCTabBarFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                scrollTo: function () { return undefined; },
                incrementScroll: function () { return undefined; },
                getScrollPosition: function () { return 0; },
                getScrollContentWidth: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                isRTL: function () { return false; },
                setActiveTab: function () { return undefined; },
                activateTabAtIndex: function () { return undefined; },
                deactivateTabAtIndex: function () { return undefined; },
                focusTabAtIndex: function () { return undefined; },
                getTabIndicatorClientRectAtIndex: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                getTabDimensionsAtIndex: function () { return ({ rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 }); },
                getPreviousActiveTabIndex: function () { return -1; },
                getFocusedTabIndex: function () { return -1; },
                getIndexOfTabById: function () { return -1; },
                getTabListLength: function () { return 0; },
                notifyTabActivated: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Switches between automatic and manual activation modes.
     * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
     */
    MDCTabBarFoundation.prototype.setUseAutomaticActivation = function (useAutomaticActivation) {
        this.useAutomaticActivation_ = useAutomaticActivation;
    };
    MDCTabBarFoundation.prototype.activateTab = function (index) {
        var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();
        if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
            return;
        }
        var previousClientRect;
        if (previousActiveIndex !== -1) {
            this.adapter_.deactivateTabAtIndex(previousActiveIndex);
            previousClientRect = this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex);
        }
        this.adapter_.activateTabAtIndex(index, previousClientRect);
        this.scrollIntoView(index);
        this.adapter_.notifyTabActivated(index);
    };
    MDCTabBarFoundation.prototype.handleKeyDown = function (evt) {
        // Get the key from the event
        var key = this.getKeyFromEvent_(evt);
        // Early exit if the event key isn't one of the keyboard navigation keys
        if (key === undefined) {
            return;
        }
        // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple
        if (!this.isActivationKey_(key)) {
            evt.preventDefault();
        }
        if (this.useAutomaticActivation_) {
            if (this.isActivationKey_(key)) {
                return;
            }
            var index = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), key);
            this.adapter_.setActiveTab(index);
            this.scrollIntoView(index);
        }
        else {
            var focusedTabIndex = this.adapter_.getFocusedTabIndex();
            if (this.isActivationKey_(key)) {
                this.adapter_.setActiveTab(focusedTabIndex);
            }
            else {
                var index = this.determineTargetFromKey_(focusedTabIndex, key);
                this.adapter_.focusTabAtIndex(index);
                this.scrollIntoView(index);
            }
        }
    };
    /**
     * Handles the MDCTab:interacted event
     */
    MDCTabBarFoundation.prototype.handleTabInteraction = function (evt) {
        this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(evt.detail.tabId));
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoView = function (index) {
        // Early exit if the index is out of range
        if (!this.indexIsInRange_(index)) {
            return;
        }
        // Always scroll to 0 if scrolling to the 0th index
        if (index === 0) {
            return this.adapter_.scrollTo(0);
        }
        // Always scroll to the max value if scrolling to the Nth index
        // MDCTabScroller.scrollTo() will never scroll past the max possible value
        if (index === this.adapter_.getTabListLength() - 1) {
            return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
        }
        if (this.isRTL_()) {
            return this.scrollIntoViewRTL_(index);
        }
        this.scrollIntoView_(index);
    };
    /**
     * Private method for determining the index of the destination tab based on what key was pressed
     * @param origin The original index from which to determine the destination
     * @param key The name of the key
     */
    MDCTabBarFoundation.prototype.determineTargetFromKey_ = function (origin, key) {
        var isRTL = this.isRTL_();
        var maxIndex = this.adapter_.getTabListLength() - 1;
        var shouldGoToEnd = key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].END_KEY;
        var shouldDecrement = key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_LEFT_KEY && !isRTL || key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_RIGHT_KEY && isRTL;
        var shouldIncrement = key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_RIGHT_KEY && !isRTL || key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_LEFT_KEY && isRTL;
        var index = origin;
        if (shouldGoToEnd) {
            index = maxIndex;
        }
        else if (shouldDecrement) {
            index -= 1;
        }
        else if (shouldIncrement) {
            index += 1;
        }
        else {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }
        else if (index > maxIndex) {
            index = 0;
        }
        return index;
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrement_ = function (index, nextIndex, scrollPosition, barWidth) {
        var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
        var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
        var leftIncrement = relativeContentRight - _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft + _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].EXTRA_SCROLL_AMOUNT;
        if (nextIndex < index) {
            return Math.min(leftIncrement, 0);
        }
        return Math.max(rightIncrement, 0);
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     * @param scrollContentWidth The width of the scroll content
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrementRTL_ = function (index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
        var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
        var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
        var leftIncrement = relativeContentRight + _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft - _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].EXTRA_SCROLL_AMOUNT;
        if (nextIndex > index) {
            return Math.max(leftIncrement, 0);
        }
        return Math.min(rightIncrement, 0);
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge_ = function (index, tabDimensions, scrollPosition, barWidth) {
        /**
         * Tabs are laid out in the Tab Scroller like this:
         *
         *    Scroll Position
         *    +---+
         *    |   |   Bar Width
         *    |   +-----------------------------------+
         *    |   |                                   |
         *    |   V                                   V
         *    |   +-----------------------------------+
         *    V   |             Tab Scroller          |
         *    +------------+--------------+-------------------+
         *    |    Tab     |      Tab     |        Tab        |
         *    +------------+--------------+-------------------+
         *        |                                   |
         *        +-----------------------------------+
         *
         * To determine the next adjacent index, we look at the Tab root left and
         * Tab root right, both relative to the scroll position. If the Tab root
         * left is less than 0, then we know it's out of view to the left. If the
         * Tab root right minus the bar width is greater than 0, we know the Tab is
         * out of view to the right. From there, we either increment or decrement
         * the index.
         */
        var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
        var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
        var relativeRootDelta = relativeRootLeft + relativeRootRight;
        var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
        var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;
        if (leftEdgeIsCloser) {
            return index - 1;
        }
        if (rightEdgeIsCloser) {
            return index + 1;
        }
        return -1;
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     * @param scrollContentWidth The width of the scroller content
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function (index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
        var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
        var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
        var rootDelta = rootLeft + rootRight;
        var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
        var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;
        if (leftEdgeIsCloser) {
            return index + 1;
        }
        if (rightEdgeIsCloser) {
            return index - 1;
        }
        return -1;
    };
    /**
     * Returns the key associated with a keydown event
     * @param evt The keydown event
     */
    MDCTabBarFoundation.prototype.getKeyFromEvent_ = function (evt) {
        if (ACCEPTABLE_KEYS.has(evt.key)) {
            return evt.key;
        }
        return KEYCODE_MAP.get(evt.keyCode);
    };
    MDCTabBarFoundation.prototype.isActivationKey_ = function (key) {
        return key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SPACE_KEY || key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ENTER_KEY;
    };
    /**
     * Returns whether a given index is inclusively between the ends
     * @param index The index to test
     */
    MDCTabBarFoundation.prototype.indexIsInRange_ = function (index) {
        return index >= 0 && index < this.adapter_.getTabListLength();
    };
    /**
     * Returns the view's RTL property
     */
    MDCTabBarFoundation.prototype.isRTL_ = function () {
        return this.adapter_.isRTL();
    };
    /**
     * Scrolls the tab at the given index into view for left-to-right user agents.
     * @param index The index of the tab to scroll into view
     */
    MDCTabBarFoundation.prototype.scrollIntoView_ = function (index) {
        var scrollPosition = this.adapter_.getScrollPosition();
        var barWidth = this.adapter_.getOffsetWidth();
        var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
        var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);
        if (!this.indexIsInRange_(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
        this.adapter_.incrementScroll(scrollIncrement);
    };
    /**
     * Scrolls the tab at the given index into view in RTL
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoViewRTL_ = function (index) {
        var scrollPosition = this.adapter_.getScrollPosition();
        var barWidth = this.adapter_.getOffsetWidth();
        var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
        var scrollWidth = this.adapter_.getScrollContentWidth();
        var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);
        if (!this.indexIsInRange_(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
        this.adapter_.incrementScroll(scrollIncrement);
    };
    return MDCTabBarFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab-bar/index.js ***!
  \*************************************************/
/*! exports provided: MDCTabBar, numbers, strings, MDCTabBarFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/tab-bar/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTabBar", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTabBar"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-bar/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-bar/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTabBarFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTabBarFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/component.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-indicator/component.js ***!
  \***********************************************************/
/*! exports provided: MDCTabIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabIndicator", function() { return MDCTabIndicator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _fading_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fading-foundation */ "./node_modules/@material/tab-indicator/fading-foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
/* harmony import */ var _sliding_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliding-foundation */ "./node_modules/@material/tab-indicator/sliding-foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCTabIndicator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabIndicator, _super);
    function MDCTabIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabIndicator.attachTo = function (root) {
        return new MDCTabIndicator(root);
    };
    MDCTabIndicator.prototype.initialize = function () {
        this.content_ = this.root_.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCTabIndicatorFoundation"].strings.CONTENT_SELECTOR);
    };
    MDCTabIndicator.prototype.computeContentClientRect = function () {
        return this.foundation_.computeContentClientRect();
    };
    MDCTabIndicator.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            computeContentClientRect: function () { return _this.content_.getBoundingClientRect(); },
            setContentStyleProperty: function (prop, value) { return _this.content_.style.setProperty(prop, value); },
        };
        // tslint:enable:object-literal-sort-keys
        if (this.root_.classList.contains(_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCTabIndicatorFoundation"].cssClasses.FADE)) {
            return new _fading_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFadingTabIndicatorFoundation"](adapter);
        }
        // Default to the sliding indicator
        return new _sliding_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCSlidingTabIndicatorFoundation"](adapter);
    };
    MDCTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
        this.foundation_.activate(previousIndicatorClientRect);
    };
    MDCTabIndicator.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    return MDCTabIndicator;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-indicator/constants.js ***!
  \***********************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition',
};
var strings = {
    CONTENT_SELECTOR: '.mdc-tab-indicator__content',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/fading-foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/fading-foundation.js ***!
  \*******************************************************************/
/*! exports provided: MDCFadingTabIndicatorFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFadingTabIndicatorFoundation", function() { return MDCFadingTabIndicatorFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */
var MDCFadingTabIndicatorFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFadingTabIndicatorFoundation, _super);
    function MDCFadingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFadingTabIndicatorFoundation.prototype.activate = function () {
        this.adapter_.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
    };
    MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter_.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
    };
    return MDCFadingTabIndicatorFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFadingTabIndicatorFoundation);
//# sourceMappingURL=fading-foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/foundation.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/foundation.js ***!
  \************************************************************/
/*! exports provided: MDCTabIndicatorFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabIndicatorFoundation", function() { return MDCTabIndicatorFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-indicator/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTabIndicatorFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabIndicatorFoundation, _super);
    function MDCTabIndicatorFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTabIndicatorFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                computeContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                setContentStyleProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
        return this.adapter_.computeContentClientRect();
    };
    return MDCTabIndicatorFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabIndicatorFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/sliding-foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/sliding-foundation.js ***!
  \********************************************************************/
/*! exports provided: MDCSlidingTabIndicatorFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSlidingTabIndicatorFoundation", function() { return MDCSlidingTabIndicatorFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */
var MDCSlidingTabIndicatorFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSlidingTabIndicatorFoundation, _super);
    function MDCSlidingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
        // Early exit if no indicator is present to handle cases where an indicator
        // may be activated without a prior indicator state
        if (!previousIndicatorClientRect) {
            this.adapter_.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
            return;
        }
        // This animation uses the FLIP approach. You can read more about it at the link below:
        // https://aerotwist.com/blog/flip-your-animations/
        // Calculate the dimensions based on the dimensions of the previous indicator
        var currentClientRect = this.computeContentClientRect();
        var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        this.adapter_.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.NO_TRANSITION);
        this.adapter_.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
        // Force repaint before updating classes and transform to ensure the transform properly takes effect
        this.computeContentClientRect();
        this.adapter_.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.NO_TRANSITION);
        this.adapter_.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
        this.adapter_.setContentStyleProperty('transform', '');
    };
    MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter_.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
    };
    return MDCSlidingTabIndicatorFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCSlidingTabIndicatorFoundation);
//# sourceMappingURL=sliding-foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/component.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/component.js ***!
  \**********************************************************/
/*! exports provided: MDCTabScroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScroller", function() { return MDCTabScroller; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-scroller/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/tab-scroller/util.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCTabScroller = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabScroller, _super);
    function MDCTabScroller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScroller.attachTo = function (root) {
        return new MDCTabScroller(root);
    };
    MDCTabScroller.prototype.initialize = function () {
        this.area_ = this.root_.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabScrollerFoundation"].strings.AREA_SELECTOR);
        this.content_ = this.root_.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabScrollerFoundation"].strings.CONTENT_SELECTOR);
    };
    MDCTabScroller.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction_ = function () { return _this.foundation_.handleInteraction(); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation_.handleTransitionEnd(evt); };
        this.area_.addEventListener('wheel', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.addEventListener('touchstart', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.addEventListener('pointerdown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.addEventListener('mousedown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.addEventListener('keydown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
    };
    MDCTabScroller.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.area_.removeEventListener('wheel', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.removeEventListener('touchstart', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.removeEventListener('pointerdown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.removeEventListener('mousedown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.removeEventListener('keydown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
    };
    MDCTabScroller.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            eventTargetMatchesSelector: function (evtTarget, selector) { return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(evtTarget, selector); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            addScrollAreaClass: function (className) { return _this.area_.classList.add(className); },
            setScrollAreaStyleProperty: function (prop, value) { return _this.area_.style.setProperty(prop, value); },
            setScrollContentStyleProperty: function (prop, value) { return _this.content_.style.setProperty(prop, value); },
            getScrollContentStyleValue: function (propName) { return window.getComputedStyle(_this.content_).getPropertyValue(propName); },
            setScrollAreaScrollLeft: function (scrollX) { return _this.area_.scrollLeft = scrollX; },
            getScrollAreaScrollLeft: function () { return _this.area_.scrollLeft; },
            getScrollContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            getScrollAreaOffsetWidth: function () { return _this.area_.offsetWidth; },
            computeScrollAreaClientRect: function () { return _this.area_.getBoundingClientRect(); },
            computeScrollContentClientRect: function () { return _this.content_.getBoundingClientRect(); },
            computeHorizontalScrollbarHeight: function () { return _util__WEBPACK_IMPORTED_MODULE_5__["computeHorizontalScrollbarHeight"](document); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabScrollerFoundation"](adapter);
    };
    /**
     * Returns the current visual scroll position
     */
    MDCTabScroller.prototype.getScrollPosition = function () {
        return this.foundation_.getScrollPosition();
    };
    /**
     * Returns the width of the scroll content
     */
    MDCTabScroller.prototype.getScrollContentWidth = function () {
        return this.content_.offsetWidth;
    };
    /**
     * Increments the scroll value by the given amount
     * @param scrollXIncrement The pixel value by which to increment the scroll value
     */
    MDCTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
        this.foundation_.incrementScroll(scrollXIncrement);
    };
    /**
     * Scrolls to the given pixel position
     * @param scrollX The pixel value to scroll to
     */
    MDCTabScroller.prototype.scrollTo = function (scrollX) {
        this.foundation_.scrollTo(scrollX);
    };
    return MDCTabScroller;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/constants.js ***!
  \**********************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
    SCROLL_TEST: 'mdc-tab-scroller__test',
};
var strings = {
    AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
    CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/foundation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/foundation.js ***!
  \***********************************************************/
/*! exports provided: MDCTabScrollerFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerFoundation", function() { return MDCTabScrollerFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-scroller/constants.js");
/* harmony import */ var _rtl_default_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rtl-default-scroller */ "./node_modules/@material/tab-scroller/rtl-default-scroller.js");
/* harmony import */ var _rtl_negative_scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rtl-negative-scroller */ "./node_modules/@material/tab-scroller/rtl-negative-scroller.js");
/* harmony import */ var _rtl_reverse_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rtl-reverse-scroller */ "./node_modules/@material/tab-scroller/rtl-reverse-scroller.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCTabScrollerFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabScrollerFoundation, _super);
    function MDCTabScrollerFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTabScrollerFoundation.defaultAdapter, adapter)) || this;
        /**
         * Controls whether we should handle the transitionend and interaction events during the animation.
         */
        _this.isAnimating_ = false;
        return _this;
    }
    Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                eventTargetMatchesSelector: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addScrollAreaClass: function () { return undefined; },
                setScrollAreaStyleProperty: function () { return undefined; },
                setScrollContentStyleProperty: function () { return undefined; },
                getScrollContentStyleValue: function () { return ''; },
                setScrollAreaScrollLeft: function () { return undefined; },
                getScrollAreaScrollLeft: function () { return 0; },
                getScrollContentOffsetWidth: function () { return 0; },
                getScrollAreaOffsetWidth: function () { return 0; },
                computeScrollAreaClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                computeScrollContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                computeHorizontalScrollbarHeight: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabScrollerFoundation.prototype.init = function () {
        // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
        // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
        var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
        this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
        this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    };
    /**
     * Computes the current visual scroll position
     */
    MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
        if (this.isRTL_()) {
            return this.computeCurrentScrollPositionRTL_();
        }
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
        return scrollLeft - currentTranslateX;
    };
    /**
     * Handles interaction events that occur during transition
     */
    MDCTabScrollerFoundation.prototype.handleInteraction = function () {
        // Early exit if we aren't animating
        if (!this.isAnimating_) {
            return;
        }
        // Prevent other event listeners from handling this event
        this.stopScrollAnimation_();
    };
    /**
     * Handles the transitionend event
     */
    MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
        // Early exit if we aren't animating or the event was triggered by a different element.
        var evtTarget = evt.target;
        if (!this.isAnimating_ ||
            !this.adapter_.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
            return;
        }
        this.isAnimating_ = false;
        this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    };
    /**
     * Increment the scroll value by the scrollXIncrement using animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        this.animate_(this.getIncrementScrollOperation_(scrollXIncrement));
    };
    /**
     * Increment the scroll value by the scrollXIncrement without animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScrollImmediate = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        var operation = this.getIncrementScrollOperation_(scrollXIncrement);
        if (operation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation_();
        this.adapter_.setScrollAreaScrollLeft(operation.finalScrollPosition);
    };
    /**
     * Scrolls to the given scrollX value
     */
    MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
        if (this.isRTL_()) {
            return this.scrollToRTL_(scrollX);
        }
        this.scrollTo_(scrollX);
    };
    /**
     * @return Browser-specific {@link MDCTabScrollerRTL} instance.
     */
    MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
        if (!this.rtlScrollerInstance_) {
            this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
        }
        return this.rtlScrollerInstance_;
    };
    /**
     * @return translateX value from a CSS matrix transform function string.
     */
    MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function () {
        var transformValue = this.adapter_.getScrollContentStyleValue('transform');
        // Early exit if no transform is present
        if (transformValue === 'none') {
            return 0;
        }
        // The transform value comes back as a matrix transformation in the form
        // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
        // we're going to grab all the parenthesized values, strip out tx, and
        // parse it.
        var match = /\((.+?)\)/.exec(transformValue);
        if (!match) {
            return 0;
        }
        var matrixParams = match[1];
        // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
        // @ts-ignore These unused variables should retain their semantic names for clarity.
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](matrixParams.split(','), 6), a = _a[0], b = _a[1], c = _a[2], d = _a[3], tx = _a[4], ty = _a[5];
        return parseFloat(tx); // tslint:disable-line:ban
    };
    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param scrollX The distance to scroll
     */
    MDCTabScrollerFoundation.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function () {
        var translateX = this.calculateCurrentTranslateX_();
        return this.getRTLScroller().getScrollPositionRTL(translateX);
    };
    MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    /**
     * Internal scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollTo_ = function (scrollX) {
        var currentScrollX = this.getScrollPosition();
        var safeScrollX = this.clampScrollValue_(scrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        this.animate_({
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        });
    };
    /**
     * Internal RTL scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollToRTL_ = function (scrollX) {
        var animation = this.getRTLScroller().scrollToRTL(scrollX);
        this.animate_(animation);
    };
    /**
     * Internal method to compute the increment scroll operation values.
     * @param scrollX The desired scroll position increment
     * @return MDCTabScrollerAnimation with the sanitized values for performing the scroll operation.
     */
    MDCTabScrollerFoundation.prototype.getIncrementScrollOperation_ = function (scrollX) {
        if (this.isRTL_()) {
            return this.getRTLScroller().incrementScrollRTL(scrollX);
        }
        var currentScrollX = this.getScrollPosition();
        var targetScrollX = scrollX + currentScrollX;
        var safeScrollX = this.clampScrollValue_(targetScrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        return {
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        };
    };
    /**
     * Animates the tab scrolling
     * @param animation The animation to apply
     */
    MDCTabScrollerFoundation.prototype.animate_ = function (animation) {
        var _this = this;
        // Early exit if translateX is 0, which means there's no animation to perform
        if (animation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation_();
        // This animation uses the FLIP approach.
        // Read more here: https://aerotwist.com/blog/flip-your-animations/
        this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
        this.adapter_.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)");
        // Force repaint
        this.adapter_.computeScrollAreaClientRect();
        requestAnimationFrame(function () {
            _this.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
            _this.adapter_.setScrollContentStyleProperty('transform', 'none');
        });
        this.isAnimating_ = true;
    };
    /**
     * Stops scroll animation
     */
    MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function () {
        this.isAnimating_ = false;
        var currentScrollPosition = this.getAnimatingScrollPosition_();
        this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
        this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
        this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
    };
    /**
     * Gets the current scroll position during animation
     */
    MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function () {
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
        if (this.isRTL_()) {
            return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
        }
        return scrollLeft - currentTranslateX;
    };
    /**
     * Determines the RTL Scroller to use
     */
    MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function () {
        // Browsers have three different implementations of scrollLeft in RTL mode,
        // dependent on the browser. The behavior is based off the max LTR
        // scrollLeft value and 0.
        //
        // * Default scrolling in RTL *
        //    - Left-most value: 0
        //    - Right-most value: Max LTR scrollLeft value
        //
        // * Negative scrolling in RTL *
        //    - Left-most value: Negated max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // * Reverse scrolling in RTL *
        //    - Left-most value: Max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // We use those principles below to determine which RTL scrollLeft
        // behavior is implemented in the current browser.
        var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
        var newScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        // If the newScrollLeft value is negative,then we know that the browser has
        // implemented negative RTL scrolling, since all other implementations have
        // only positive values.
        if (newScrollLeft < 0) {
            // Undo the scrollLeft test check
            this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
            return new _rtl_negative_scroller__WEBPACK_IMPORTED_MODULE_4__["MDCTabScrollerRTLNegative"](this.adapter_);
        }
        var rootClientRect = this.adapter_.computeScrollAreaClientRect();
        var contentClientRect = this.adapter_.computeScrollContentClientRect();
        var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
        // Undo the scrollLeft test check
        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
        // By calculating the clientRect of the root element and the clientRect of
        // the content element, we can determine how much the scroll value changed
        // when we performed the scrollLeft subtraction above.
        if (rightEdgeDelta === newScrollLeft) {
            return new _rtl_reverse_scroller__WEBPACK_IMPORTED_MODULE_5__["MDCTabScrollerRTLReverse"](this.adapter_);
        }
        return new _rtl_default_scroller__WEBPACK_IMPORTED_MODULE_3__["MDCTabScrollerRTLDefault"](this.adapter_);
    };
    MDCTabScrollerFoundation.prototype.isRTL_ = function () {
        return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
    };
    return MDCTabScrollerFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-default-scroller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-default-scroller.js ***!
  \*********************************************************************/
/*! exports provided: MDCTabScrollerRTLDefault, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerRTLDefault", function() { return MDCTabScrollerRTLDefault; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCTabScrollerRTLDefault = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabScrollerRTLDefault, _super);
    function MDCTabScrollerRTLDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var right = this.calculateScrollEdges_().right;
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(right - currentScrollLeft);
    };
    MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
        return scrollX;
    };
    MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    return MDCTabScrollerRTLDefault;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__["MDCTabScrollerRTL"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerRTLDefault);
//# sourceMappingURL=rtl-default-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-negative-scroller.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-negative-scroller.js ***!
  \**********************************************************************/
/*! exports provided: MDCTabScrollerRTLNegative, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerRTLNegative", function() { return MDCTabScrollerRTLNegative; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCTabScrollerRTLNegative = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabScrollerRTLNegative, _super);
    function MDCTabScrollerRTLNegative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        return Math.round(translateX - currentScrollLeft);
    };
    MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(-scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX - translateX;
    };
    MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: rootWidth - contentWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLNegative;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__["MDCTabScrollerRTL"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerRTLNegative);
//# sourceMappingURL=rtl-negative-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-reverse-scroller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-reverse-scroller.js ***!
  \*********************************************************************/
/*! exports provided: MDCTabScrollerRTLReverse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerRTLReverse", function() { return MDCTabScrollerRTLReverse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCTabScrollerRTLReverse = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabScrollerRTLReverse, _super);
    function MDCTabScrollerRTLReverse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(currentScrollLeft - translateX);
    };
    MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX + translateX;
    };
    MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: contentWidth - rootWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLReverse;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__["MDCTabScrollerRTL"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerRTLReverse);
//# sourceMappingURL=rtl-reverse-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-scroller.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-scroller.js ***!
  \*************************************************************/
/*! exports provided: MDCTabScrollerRTL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerRTL", function() { return MDCTabScrollerRTL; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScrollerRTL = /** @class */ (function () {
    function MDCTabScrollerRTL(adapter) {
        this.adapter_ = adapter;
    }
    return MDCTabScrollerRTL;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerRTL);
//# sourceMappingURL=rtl-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-scroller/util.js ***!
  \*****************************************************/
/*! exports provided: computeHorizontalScrollbarHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHorizontalScrollbarHeight", function() { return computeHorizontalScrollbarHeight; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-scroller/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 */
var horizontalScrollbarHeight_;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 */
function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
    if (shouldCacheResult === void 0) { shouldCacheResult = true; }
    if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
        return horizontalScrollbarHeight_;
    }
    var el = documentObj.createElement('div');
    el.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__["cssClasses"].SCROLL_TEST);
    documentObj.body.appendChild(el);
    var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
    documentObj.body.removeChild(el);
    if (shouldCacheResult) {
        horizontalScrollbarHeight_ = horizontalScrollbarHeight;
    }
    return horizontalScrollbarHeight;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/tab/component.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab/component.js ***!
  \*************************************************/
/*! exports provided: MDCTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTab", function() { return MDCTab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _material_tab_indicator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/tab-indicator/component */ "./node_modules/@material/tab-indicator/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCTab = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTab, _super);
    function MDCTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTab.attachTo = function (root) {
        return new MDCTab(root);
    };
    MDCTab.prototype.initialize = function (rippleFactory, tabIndicatorFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"](el, foundation); }; }
        if (tabIndicatorFactory === void 0) { tabIndicatorFactory = function (el) { return new _material_tab_indicator_component__WEBPACK_IMPORTED_MODULE_4__["MDCTabIndicator"](el); }; }
        this.id = this.root_.id;
        var rippleSurface = this.root_.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"].strings.RIPPLE_SELECTOR);
        var rippleAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"].createAdapter(this), { addClass: function (className) { return rippleSurface.classList.add(className); }, removeClass: function (className) { return rippleSurface.classList.remove(className); }, updateCssVariable: function (varName, value) { return rippleSurface.style.setProperty(varName, value); } });
        var rippleFoundation = new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"](rippleAdapter);
        this.ripple_ = rippleFactory(this.root_, rippleFoundation);
        var tabIndicatorElement = this.root_.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"].strings.TAB_INDICATOR_SELECTOR);
        this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
        this.content_ = this.root_.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"].strings.CONTENT_SELECTOR);
    };
    MDCTab.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick_ = function () { return _this.foundation_.handleClick(); };
        this.listen('click', this.handleClick_);
    };
    MDCTab.prototype.destroy = function () {
        this.unlisten('click', this.handleClick_);
        this.ripple_.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCTab.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            activateIndicator: function (previousIndicatorClientRect) { return _this.tabIndicator_.activate(previousIndicatorClientRect); },
            deactivateIndicator: function () { return _this.tabIndicator_.deactivate(); },
            notifyInteracted: function () { return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"].strings.INTERACTED_EVENT, { tabId: _this.id }, true /* bubble */); },
            getOffsetLeft: function () { return _this.root_.offsetLeft; },
            getOffsetWidth: function () { return _this.root_.offsetWidth; },
            getContentOffsetLeft: function () { return _this.content_.offsetLeft; },
            getContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            focus: function () { return _this.root_.focus(); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"](adapter);
    };
    Object.defineProperty(MDCTab.prototype, "active", {
        /**
         * Getter for the active state of the tab
         */
        get: function () {
            return this.foundation_.isActive();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            this.foundation_.setFocusOnActivate(focusOnActivate);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activates the tab
     */
    MDCTab.prototype.activate = function (computeIndicatorClientRect) {
        this.foundation_.activate(computeIndicatorClientRect);
    };
    /**
     * Deactivates the tab
     */
    MDCTab.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    /**
     * Returns the indicator's client rect
     */
    MDCTab.prototype.computeIndicatorClientRect = function () {
        return this.tabIndicator_.computeContentClientRect();
    };
    MDCTab.prototype.computeDimensions = function () {
        return this.foundation_.computeDimensions();
    };
    /**
     * Focuses the tab
     */
    MDCTab.prototype.focus = function () {
        this.root_.focus();
    };
    return MDCTab;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab/constants.js ***!
  \*************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVE: 'mdc-tab--active',
};
var strings = {
    ARIA_SELECTED: 'aria-selected',
    CONTENT_SELECTOR: '.mdc-tab__content',
    INTERACTED_EVENT: 'MDCTab:interacted',
    RIPPLE_SELECTOR: '.mdc-tab__ripple',
    TABINDEX: 'tabIndex',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab/foundation.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/tab/foundation.js ***!
  \**************************************************/
/*! exports provided: MDCTabFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabFoundation", function() { return MDCTabFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTabFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTabFoundation, _super);
    function MDCTabFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTabFoundation.defaultAdapter, adapter)) || this;
        _this.focusOnActivate_ = true;
        return _this;
    }
    Object.defineProperty(MDCTabFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                activateIndicator: function () { return undefined; },
                deactivateIndicator: function () { return undefined; },
                notifyInteracted: function () { return undefined; },
                getOffsetLeft: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                getContentOffsetLeft: function () { return 0; },
                getContentOffsetWidth: function () { return 0; },
                focus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabFoundation.prototype.handleClick = function () {
        // It's up to the parent component to keep track of the active Tab and
        // ensure we don't activate a Tab that's already active.
        this.adapter_.notifyInteracted();
    };
    MDCTabFoundation.prototype.isActive = function () {
        return this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ACTIVE);
    };
    /**
     * Sets whether the tab should focus itself when activated
     */
    MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
        this.focusOnActivate_ = focusOnActivate;
    };
    /**
     * Activates the Tab
     */
    MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ACTIVE);
        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED, 'true');
        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TABINDEX, '0');
        this.adapter_.activateIndicator(previousIndicatorClientRect);
        if (this.focusOnActivate_) {
            this.adapter_.focus();
        }
    };
    /**
     * Deactivates the Tab
     */
    MDCTabFoundation.prototype.deactivate = function () {
        // Early exit
        if (!this.isActive()) {
            return;
        }
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ACTIVE);
        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED, 'false');
        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TABINDEX, '-1');
        this.adapter_.deactivateIndicator();
    };
    /**
     * Returns the dimensions of the Tab
     */
    MDCTabFoundation.prototype.computeDimensions = function () {
        var rootWidth = this.adapter_.getOffsetWidth();
        var rootLeft = this.adapter_.getOffsetLeft();
        var contentWidth = this.adapter_.getContentOffsetWidth();
        var contentLeft = this.adapter_.getContentOffsetLeft();
        return {
            contentLeft: rootLeft + contentLeft,
            contentRight: rootLeft + contentLeft + contentWidth,
            rootLeft: rootLeft,
            rootRight: rootLeft + rootWidth,
        };
    };
    return MDCTabFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/component.js ***!
  \*************************************************************************/
/*! exports provided: MDCTextFieldCharacterCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return MDCTextFieldCharacterCounter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounter, _super);
    function MDCTextFieldCharacterCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldCharacterCounter.attachTo = function (root) {
        return new MDCTextFieldCharacterCounter(root);
    };
    Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldCharacterCounterFoundation"](adapter);
    };
    return MDCTextFieldCharacterCounter;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/constants.js ***!
  \*************************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ROOT: 'mdc-text-field-character-counter',
};
var strings = {
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/foundation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/foundation.js ***!
  \**************************************************************************/
/*! exports provided: MDCTextFieldCharacterCounterFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return MDCTextFieldCharacterCounterFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounterFoundation, _super);
    function MDCTextFieldCharacterCounterFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */
        get: function () {
            return {
                setContent: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter_.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldCharacterCounterFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/index.js ***!
  \*********************************************************************/
/*! exports provided: MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, characterCountCssClasses, characterCountStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldCharacterCounter"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/component.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/component.js ***!
  \*******************************************************/
/*! exports provided: MDCTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return MDCTextField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_floating_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/floating-label/component */ "./node_modules/@material/floating-label/component.js");
/* harmony import */ var _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/line-ripple/component */ "./node_modules/@material/line-ripple/component.js");
/* harmony import */ var _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/notched-outline/component */ "./node_modules/@material/notched-outline/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _character_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./character-counter/component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony import */ var _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-counter/foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony import */ var _helper_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper-text/component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony import */ var _helper_text_foundation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper-text/foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon/component */ "./node_modules/@material/textfield/icon/component.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
















var MDCTextField = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextField, _super);
    function MDCTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextField.attachTo = function (root) {
        return new MDCTextField(root);
    };
    MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__["MDCRipple"](el, foundation); }; }
        if (lineRippleFactory === void 0) { lineRippleFactory = function (el) { return new _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCLineRipple"](el); }; }
        if (helperTextFactory === void 0) { helperTextFactory = function (el) { return new _helper_text_component__WEBPACK_IMPORTED_MODULE_13__["MDCTextFieldHelperText"](el); }; }
        if (characterCounterFactory === void 0) { characterCounterFactory = function (el) { return new _character_counter_component__WEBPACK_IMPORTED_MODULE_9__["MDCTextFieldCharacterCounter"](el); }; }
        if (iconFactory === void 0) { iconFactory = function (el) { return new _icon_component__WEBPACK_IMPORTED_MODULE_15__["MDCTextFieldIcon"](el); }; }
        if (labelFactory === void 0) { labelFactory = function (el) { return new _material_floating_label_component__WEBPACK_IMPORTED_MODULE_4__["MDCFloatingLabel"](el); }; }
        if (outlineFactory === void 0) { outlineFactory = function (el) { return new _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_6__["MDCNotchedOutline"](el); }; }
        this.input_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].INPUT_SELECTOR);
        var labelElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LABEL_SELECTOR);
        this.label_ = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LINE_RIPPLE_SELECTOR);
        this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].OUTLINE_SELECTOR);
        this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
        // Helper text
        var helperTextStrings = _helper_text_foundation__WEBPACK_IMPORTED_MODULE_14__["MDCTextFieldHelperTextFoundation"].strings;
        var nextElementSibling = this.root_.nextElementSibling;
        var hasHelperLine = (nextElementSibling && nextElementSibling.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].HELPER_LINE));
        var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
        this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null;
        // Character counter
        var characterCounterStrings = _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__["MDCTextFieldCharacterCounterFoundation"].strings;
        var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR);
        // If character counter is not found in root element search in sibling element.
        if (!characterCounterEl && hasHelperLine && nextElementSibling) {
            characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
        }
        this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
        // Leading icon
        var leadingIconEl = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LEADING_ICON_SELECTOR);
        this.leadingIcon_ = leadingIconEl ? iconFactory(leadingIconEl) : null;
        // Trailing icon
        var trailingIconEl = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].TRAILING_ICON_SELECTOR);
        this.trailingIcon_ = trailingIconEl ? iconFactory(trailingIconEl) : null;
        this.ripple = this.createRipple_(rippleFactory);
    };
    MDCTextField.prototype.destroy = function () {
        if (this.ripple) {
            this.ripple.destroy();
        }
        if (this.lineRipple_) {
            this.lineRipple_.destroy();
        }
        if (this.helperText_) {
            this.helperText_.destroy();
        }
        if (this.characterCounter_) {
            this.characterCounter_.destroy();
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.destroy();
        }
        if (this.trailingIcon_) {
            this.trailingIcon_.destroy();
        }
        if (this.label_) {
            this.label_.destroy();
        }
        if (this.outline_) {
            this.outline_.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Initializes the Text Field's internal state based on the environment's
     * state.
     */
    MDCTextField.prototype.initialSyncWithDOM = function () {
        this.disabled = this.input_.disabled;
    };
    Object.defineProperty(MDCTextField.prototype, "value", {
        get: function () {
            return this.foundation_.getValue();
        },
        /**
         * @param value The value to set on the input.
         */
        set: function (value) {
            this.foundation_.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "disabled", {
        get: function () {
            return this.foundation_.isDisabled();
        },
        /**
         * @param disabled Sets the Text Field disabled or enabled.
         */
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "valid", {
        get: function () {
            return this.foundation_.isValid();
        },
        /**
         * @param valid Sets the Text Field valid or invalid.
         */
        set: function (valid) {
            this.foundation_.setValid(valid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "required", {
        get: function () {
            return this.input_.required;
        },
        /**
         * @param required Sets the Text Field to required.
         */
        set: function (required) {
            this.input_.required = required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "pattern", {
        get: function () {
            return this.input_.pattern;
        },
        /**
         * @param pattern Sets the input element's validation pattern.
         */
        set: function (pattern) {
            this.input_.pattern = pattern;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "minLength", {
        get: function () {
            return this.input_.minLength;
        },
        /**
         * @param minLength Sets the input element's minLength.
         */
        set: function (minLength) {
            this.input_.minLength = minLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "maxLength", {
        get: function () {
            return this.input_.maxLength;
        },
        /**
         * @param maxLength Sets the input element's maxLength.
         */
        set: function (maxLength) {
            // Chrome throws exception if maxLength is set to a value less than zero
            if (maxLength < 0) {
                this.input_.removeAttribute('maxLength');
            }
            else {
                this.input_.maxLength = maxLength;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "min", {
        get: function () {
            return this.input_.min;
        },
        /**
         * @param min Sets the input element's min.
         */
        set: function (min) {
            this.input_.min = min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "max", {
        get: function () {
            return this.input_.max;
        },
        /**
         * @param max Sets the input element's max.
         */
        set: function (max) {
            this.input_.max = max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "step", {
        get: function () {
            return this.input_.step;
        },
        /**
         * @param step Sets the input element's step.
         */
        set: function (step) {
            this.input_.step = step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
        /**
         * Sets the helper text element content.
         */
        set: function (content) {
            this.foundation_.setHelperTextContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
        /**
         * Sets the aria label of the leading icon.
         */
        set: function (label) {
            this.foundation_.setLeadingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function (content) {
            this.foundation_.setLeadingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
        /**
         * Sets the aria label of the trailing icon.
         */
        set: function (label) {
            this.foundation_.setTrailingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
        /**
         * Sets the text content of the trailing icon.
         */
        set: function (content) {
            this.foundation_.setTrailingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
        /**
         * Enables or disables the use of native validation. Use this for custom validation.
         * @param useNativeValidation Set this to false to ignore native input validation.
         */
        set: function (useNativeValidation) {
            this.foundation_.setUseNativeValidation(useNativeValidation);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Focuses the input element.
     */
    MDCTextField.prototype.focus = function () {
        this.input_.focus();
    };
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    MDCTextField.prototype.layout = function () {
        var openNotch = this.foundation_.shouldFloat;
        this.foundation_.notchOutline(openNotch);
    };
    MDCTextField.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_());
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_12__["MDCTextFieldFoundation"](adapter, this.getFoundationMap_());
    };
    MDCTextField.prototype.getRootAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            registerTextFieldInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterTextFieldInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            registerValidationAttributeChangeHandler: function (handler) {
                var getAttributesList = function (mutationsList) {
                    return mutationsList
                        .map(function (mutation) { return mutation.attributeName; })
                        .filter(function (attributeName) { return attributeName; });
                };
                var observer = new MutationObserver(function (mutationsList) { return handler(getAttributesList(mutationsList)); });
                var config = { attributes: true };
                observer.observe(_this.input_, config);
                return observer;
            },
            deregisterValidationAttributeChangeHandler: function (observer) { return observer.disconnect(); },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getInputAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getNativeInput: function () { return _this.input_; },
            isFocused: function () { return document.activeElement === _this.input_; },
            registerInputInteractionHandler: function (evtType, handler) {
                return _this.input_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            deregisterInputInteractionHandler: function (evtType, handler) {
                return _this.input_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getLabelAdapterMethods_ = function () {
        var _this = this;
        return {
            floatLabel: function (shouldFloat) { return _this.label_ && _this.label_.float(shouldFloat); },
            getLabelWidth: function () { return _this.label_ ? _this.label_.getWidth() : 0; },
            hasLabel: function () { return Boolean(_this.label_); },
            shakeLabel: function (shouldShake) { return _this.label_ && _this.label_.shake(shouldShake); },
        };
    };
    MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
        var _this = this;
        return {
            activateLineRipple: function () {
                if (_this.lineRipple_) {
                    _this.lineRipple_.activate();
                }
            },
            deactivateLineRipple: function () {
                if (_this.lineRipple_) {
                    _this.lineRipple_.deactivate();
                }
            },
            setLineRippleTransformOrigin: function (normalizedX) {
                if (_this.lineRipple_) {
                    _this.lineRipple_.setRippleCenter(normalizedX);
                }
            },
        };
    };
    MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
        var _this = this;
        return {
            closeOutline: function () { return _this.outline_ && _this.outline_.closeNotch(); },
            hasOutline: function () { return Boolean(_this.outline_); },
            notchOutline: function (labelWidth) { return _this.outline_ && _this.outline_.notch(labelWidth); },
        };
    };
    /**
     * @return A map of all subcomponents to subfoundations.
     */
    MDCTextField.prototype.getFoundationMap_ = function () {
        return {
            characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
            helperText: this.helperText_ ? this.helperText_.foundation : undefined,
            leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
            trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined,
        };
    };
    MDCTextField.prototype.createRipple_ = function (rippleFactory) {
        var _this = this;
        var isTextArea = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].TEXTAREA);
        var isOutlined = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].OUTLINED);
        if (isTextArea || isOutlined) {
            return null;
        }
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__["MDCRipple"].createAdapter(this), { isSurfaceActive: function () { return _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"](_this.input_, ':active'); }, registerInteractionHandler: function (evtType, handler) { return _this.input_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])()); }, deregisterInteractionHandler: function (evtType, handler) {
                return _this.input_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            } });
        // tslint:enable:object-literal-sort-keys
        return rippleFactory(this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_8__["MDCRippleFoundation"](adapter));
    };
    return MDCTextField;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/constants.js ***!
  \*******************************************************/
/*! exports provided: cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function() { return VALIDATION_ATTR_WHITELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function() { return ALWAYS_FLOAT_TYPES; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses = {
    DENSE: 'mdc-text-field--dense',
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    FULLWIDTH: 'mdc-text-field--fullwidth',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
};
var numbers = {
    DENSE_LABEL_SCALE: 0.923,
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color', 'date', 'datetime-local', 'month', 'range', 'time', 'week',
];

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/foundation.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/foundation.js ***!
  \********************************************************/
/*! exports provided: MDCTextFieldFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return MDCTextFieldFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;
        _this.isFocused_ = false;
        _this.receivedUserInput_ = false;
        _this.isValid_ = true;
        _this.useNativeValidation_ = true;
        _this.helperText_ = foundationMap.helperText;
        _this.characterCounter_ = foundationMap.characterCounter;
        _this.leadingIcon_ = foundationMap.leadingIcon;
        _this.trailingIcon_ = foundationMap.trailingIcon;
        _this.inputFocusHandler_ = function () { return _this.activateFocus(); };
        _this.inputBlurHandler_ = function () { return _this.deactivateFocus(); };
        _this.inputInputHandler_ = function () { return _this.handleInput(); };
        _this.setPointerXOffset_ = function (evt) { return _this.setTransformOrigin(evt); };
        _this.textFieldInteractionHandler_ = function () { return _this.handleTextFieldInteraction(); };
        _this.validationAttributeChangeHandler_ = function (attributesList) { return _this.handleValidationAttributeChange(attributesList); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
        get: function () {
            var type = this.getNativeInput_().type;
            return _constants__WEBPACK_IMPORTED_MODULE_2__["ALWAYS_FLOAT_TYPES"].indexOf(type) >= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused_ && !this.isValid() && !!this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () { return new MutationObserver(function () { return undefined; }); },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var _this = this;
        if (this.adapter_.isFocused()) {
            this.inputFocusHandler_();
        }
        else if (this.adapter_.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter_.floatLabel(true);
        }
        this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.validationObserver_ =
            this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
        this.setCharacterCounter_(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var _this = this;
        this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter_.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput_ = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (_constants__WEBPACK_IMPORTED_MODULE_2__["VALIDATION_ATTR_WHITELIST"].indexOf(attributeName) > -1) {
                _this.styleValidity_(true);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setCharacterCounter_(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter_.hasOutline()) {
            return;
        }
        if (openNotch) {
            var isDense = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DENSE);
            var labelScale = isDense ? _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DENSE_LABEL_SCALE : _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
        }
        else {
            this.adapter_.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused_ = true;
        this.styleFocused_(this.isFocused_);
        this.adapter_.activateLineRipple();
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
        if (this.helperText_) {
            this.helperText_.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter_.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setCharacterCounter_(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput_) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused_ = false;
        this.adapter_.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        this.styleFocused_(this.isFocused_);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput_ = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput_().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput_().value = value;
        }
        this.setCharacterCounter_(value.length);
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation_
            ? this.isNativeInputValid_() : this.isValid_;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.isValid_ = isValid;
        this.styleValidity_(isValid);
        var shouldShake = !isValid && !this.isFocused_ && !!this.getValue();
        if (this.adapter_.hasLabel()) {
            this.adapter_.shakeLabel(shouldShake);
        }
    };
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation_ = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput_().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput_().disabled = disabled;
        this.styleDisabled_(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText_) {
            this.helperText_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total character limit.
     */
    MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
        if (!this.characterCounter_) {
            return;
        }
        var maxLength = this.getNativeInput_().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter_.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied value.
     */
    MDCTextFieldFoundation.prototype.isBadInput_ = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput_().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
        return this.getNativeInput_().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter_.removeClass(INVALID);
        }
        else {
            this.adapter_.addClass(INVALID);
        }
        if (this.helperText_) {
            this.helperText_.setValidity(isValid);
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter_.addClass(FOCUSED);
        }
        else {
            this.adapter_.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter_.addClass(DISABLED);
            this.adapter_.removeClass(INVALID);
        }
        else {
            this.adapter_.removeClass(DISABLED);
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.setDisabled(isDisabled);
        }
        if (this.trailingIcon_) {
            this.trailingIcon_.setDisabled(isDisabled);
        }
    };
    /**
     * @return The native text input element from the host environment, or an object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
        // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
        // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
        // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/component.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/component.js ***!
  \*******************************************************************/
/*! exports provided: MDCTextFieldHelperText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return MDCTextFieldHelperText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperText = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperText, _super);
    function MDCTextFieldHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText.attachTo = function (root) {
        return new MDCTextFieldHelperText(root);
    };
    Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldHelperTextFoundation"](adapter);
    };
    return MDCTextFieldHelperText;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/constants.js ***!
  \*******************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
    ROOT: 'mdc-text-field-helper-text',
};
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/foundation.js ***!
  \********************************************************************/
/*! exports provided: MDCTextFieldHelperTextFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return MDCTextFieldHelperTextFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperTextFoundation, _super);
    function MDCTextFieldHelperTextFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the content of the helper text field.
     */
    MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */
    MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to the screen reader.
     */
    MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE, 'alert');
        }
        else {
            this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide_();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN, 'true');
    };
    return MDCTextFieldHelperTextFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldHelperTextFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/index.js ***!
  \***************************************************************/
/*! exports provided: MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, helperTextCssClasses, helperTextStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldHelperText"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldHelperTextFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/component.js ***!
  \************************************************************/
/*! exports provided: MDCTextFieldIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return MDCTextFieldIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldIcon = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIcon, _super);
    function MDCTextFieldIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon.attachTo = function (root) {
        return new MDCTextFieldIcon(root);
    };
    Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root_.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"](adapter);
    };
    return MDCTextFieldIcon;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/constants.js ***!
  \************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button',
};
var cssClasses = {
    ROOT: 'mdc-text-field__icon',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/foundation.js ***!
  \*************************************************************/
/*! exports provided: MDCTextFieldIconFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return MDCTextFieldIconFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldIconFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIconFoundation, _super);
    function MDCTextFieldIconFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.destroy = function () {
        var _this = this;
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter_.setAttr('tabindex', '-1');
            this.adapter_.removeAttr('role');
        }
        else {
            this.adapter_.setAttr('tabindex', this.savedTabIndex_);
            this.adapter_.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter_.setAttr('aria-label', label);
    };
    MDCTextFieldIconFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            evt.preventDefault(); // stop click from causing host label to focus
            // input
            this.adapter_.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldIconFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/icon/index.js ***!
  \********************************************************/
/*! exports provided: MDCTextFieldIcon, MDCTextFieldIconFoundation, iconCssClasses, iconStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/icon/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldIcon"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldIconFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/textfield/index.js ***!
  \***************************************************/
/*! exports provided: MDCTextField, cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES, MDCTextFieldFoundation, MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, characterCountCssClasses, characterCountStrings, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, helperTextCssClasses, helperTextStrings, MDCTextFieldIcon, MDCTextFieldIconFoundation, iconCssClasses, iconStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextField"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["VALIDATION_ATTR_WHITELIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["ALWAYS_FLOAT_TYPES"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldFoundation"]; });

/* harmony import */ var _character_counter_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-counter/index */ "./node_modules/@material/textfield/character-counter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountStrings"]; });

/* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/@material/textfield/helper-text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperTextFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextStrings"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/index */ "./node_modules/@material/textfield/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIconFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconStrings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/component.js ***!
  \*********************************************************/
/*! exports provided: MDCTopAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBar", function() { return MDCTopAppBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _fixed_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixed/foundation */ "./node_modules/@material/top-app-bar/fixed/foundation.js");
/* harmony import */ var _short_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./short/foundation */ "./node_modules/@material/top-app-bar/short/foundation.js");
/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCTopAppBar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBar, _super);
    function MDCTopAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar.attachTo = function (root) {
        return new MDCTopAppBar(root);
    };
    MDCTopAppBar.prototype.initialize = function (rippleFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el) { return _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"].attachTo(el); }; }
        this.navIcon_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_ITEM_SELECTOR));
        if (this.navIcon_) {
            icons.push(this.navIcon_);
        }
        this.iconRipples_ = icons.map(function (icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget_ = window;
    };
    MDCTopAppBar.prototype.initialSyncWithDOM = function () {
        this.handleNavigationClick_ = this.foundation_.handleNavigationClick.bind(this.foundation_);
        this.handleWindowResize_ = this.foundation_.handleWindowResize.bind(this.foundation_);
        this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
        this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
        if (this.navIcon_) {
            this.navIcon_.addEventListener('click', this.handleNavigationClick_);
        }
        var isFixed = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS);
        var isShort = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.addEventListener('resize', this.handleWindowResize_);
        }
    };
    MDCTopAppBar.prototype.destroy = function () {
        this.iconRipples_.forEach(function (iconRipple) { return iconRipple.destroy(); });
        this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
        if (this.navIcon_) {
            this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
        }
        var isFixed = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS);
        var isShort = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.removeEventListener('resize', this.handleWindowResize_);
        }
        _super.prototype.destroy.call(this);
    };
    MDCTopAppBar.prototype.setScrollTarget = function (target) {
        // Remove scroll handler from the previous scroll target
        this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
        this.scrollTarget_ = target;
        // Initialize scroll handler on the new scroll target
        this.handleTargetScroll_ =
            this.foundation_.handleTargetScroll.bind(this.foundation_);
        this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
    };
    MDCTopAppBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setStyle: function (property, value) { return _this.root_.style.setProperty(property, value); },
            getTopAppBarHeight: function () { return _this.root_.clientHeight; },
            notifyNavigationIconClicked: function () { return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NAVIGATION_EVENT, {}); },
            getViewportScrollY: function () {
                var win = _this.scrollTarget_;
                var el = _this.scrollTarget_;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function () { return _this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_ITEM_SELECTOR).length; },
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS)) {
            foundation = new _short_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCShortTopAppBarFoundation"](adapter);
        }
        else if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS)) {
            foundation = new _fixed_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCFixedTopAppBarFoundation"](adapter);
        }
        else {
            foundation = new _standard_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCTopAppBarFoundation"](adapter);
        }
        return foundation;
    };
    return MDCTopAppBar;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/constants.js ***!
  \*********************************************************/
/*! exports provided: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
};
var numbers = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128,
};
var strings = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/fixed/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/fixed/foundation.js ***!
  \****************************************************************/
/*! exports provided: MDCFixedTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFixedTopAppBarFoundation", function() { return MDCFixedTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFixedTopAppBarFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFixedTopAppBarFoundation, _super);
    function MDCFixedTopAppBarFoundation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */
        _this.wasScrolled_ = false;
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     * @override
     */
    MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled_) {
                this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = false;
            }
        }
        else {
            if (!this.wasScrolled_) {
                this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = true;
            }
        }
    };
    return MDCFixedTopAppBarFoundation;
}(_standard_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFixedTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCTopAppBarBaseFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarBaseFoundation", function() { return MDCTopAppBarBaseFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBarBaseFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarBaseFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                getTopAppBarHeight: function () { return 0; },
                notifyNavigationIconClicked: function () { return undefined; },
                getViewportScrollY: function () { return 0; },
                getTotalActionItems: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () { }; // tslint:disable-line:no-empty
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () { }; // tslint:disable-line:no-empty
    MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
        this.adapter_.notifyNavigationIconClicked();
    };
    return MDCTopAppBarBaseFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTopAppBarBaseFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/top-app-bar/index.js ***!
  \*****************************************************/
/*! exports provided: MDCTopAppBar, cssClasses, numbers, strings, MDCTopAppBarBaseFoundation, MDCFixedTopAppBarFoundation, MDCShortTopAppBarFoundation, MDCTopAppBarFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/top-app-bar/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBar", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTopAppBar"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarBaseFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]; });

/* harmony import */ var _fixed_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixed/foundation */ "./node_modules/@material/top-app-bar/fixed/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFixedTopAppBarFoundation", function() { return _fixed_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCFixedTopAppBarFoundation"]; });

/* harmony import */ var _short_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short/foundation */ "./node_modules/@material/top-app-bar/short/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCShortTopAppBarFoundation", function() { return _short_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCShortTopAppBarFoundation"]; });

/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarFoundation", function() { return _standard_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTopAppBarFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/short/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/short/foundation.js ***!
  \****************************************************************/
/*! exports provided: MDCShortTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCShortTopAppBarFoundation", function() { return MDCShortTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.isCollapsed_ = false;
        _this.isAlwaysCollapsed_ = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function () {
            return this.isCollapsed_;
        },
        enumerable: true,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.adapter_.getTotalActionItems() > 0) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_HAS_ACTION_ITEM_CLASS);
        }
        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
        this.setAlwaysCollapsed(this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS));
    };
    /**
     * Set if the short top app bar should always be collapsed.
     *
     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
     */
    MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
        this.isAlwaysCollapsed_ = !!value;
        if (this.isAlwaysCollapsed_) {
            this.collapse_();
        }
        else {
            // let maybeCollapseBar_ determine if the bar should be collapsed
            this.maybeCollapseBar_();
        }
    };
    MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
        return this.isAlwaysCollapsed_;
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     * @override
     */
    MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
        this.maybeCollapseBar_();
    };
    MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
        if (this.isAlwaysCollapsed_) {
            return;
        }
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.isCollapsed_) {
                this.uncollapse_();
            }
        }
        else {
            if (!this.isCollapsed_) {
                this.collapse_();
            }
        }
    };
    MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS);
        this.isCollapsed_ = false;
    };
    MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS);
        this.isCollapsed_ = true;
    };
    return MDCShortTopAppBarFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCShortTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/standard/foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/standard/foundation.js ***!
  \*******************************************************************/
/*! exports provided: MDCTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarFoundation", function() { return MDCTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * Indicates if the top app bar was docked in the previous scroll handler iteration.
         */
        _this.wasDocked_ = true;
        /**
         * Indicates if the top app bar is docked in the fully shown position.
         */
        _this.isDockedShowing_ = true;
        /**
         * Variable for current scroll position of the top app bar
         */
        _this.currentAppBarOffsetTop_ = 0;
        /**
         * Used to prevent the top app bar from being scrolled out of view during resize events
         */
        _this.isCurrentlyBeingResized_ = false;
        /**
         * The timeout that's used to throttle the resize events
         */
        _this.resizeThrottleId_ = INITIAL_VALUE;
        /**
         * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
         */
        _this.resizeDebounceId_ = INITIAL_VALUE;
        _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
        _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
        return _this;
    }
    MDCTopAppBarFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.adapter_.setStyle('top', '');
    };
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @override
     */
    MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition_;
        this.lastScrollPosition_ = currentScrollPosition;
        // If the window is being resized the lastScrollPosition_ needs to be updated but the
        // current scroll of the top app bar should stay in the same position.
        if (!this.isCurrentlyBeingResized_) {
            this.currentAppBarOffsetTop_ -= diff;
            if (this.currentAppBarOffsetTop_ > 0) {
                this.currentAppBarOffsetTop_ = 0;
            }
            else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
            }
            this.moveTopAppBar_();
        }
    };
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @override
     */
    MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
        var _this = this;
        // Throttle resize events 10 p/s
        if (!this.resizeThrottleId_) {
            this.resizeThrottleId_ = setTimeout(function () {
                _this.resizeThrottleId_ = INITIAL_VALUE;
                _this.throttledResizeHandler_();
            }, _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        }
        this.isCurrentlyBeingResized_ = true;
        if (this.resizeDebounceId_) {
            clearTimeout(this.resizeDebounceId_);
        }
        this.resizeDebounceId_ = setTimeout(function () {
            _this.handleTargetScroll();
            _this.isCurrentlyBeingResized_ = false;
            _this.resizeDebounceId_ = INITIAL_VALUE;
        }, _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    /**
     * Function to determine if the DOM needs to update.
     */
    MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
        var offscreenBoundaryTop = -this.topAppBarHeight_;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        // If it's partially showing, it can't be docked.
        if (partiallyShowing) {
            this.wasDocked_ = false;
        }
        else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked_) {
                this.wasDocked_ = true;
                return true;
            }
            else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                this.isDockedShowing_ = hasAnyPixelsOnscreen;
                return true;
            }
        }
        return partiallyShowing;
    };
    /**
     * Function to move the top app bar if needed.
     */
    MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
        if (this.checkForUpdate_()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop_;
            if (Math.abs(offset) >= this.topAppBarHeight_) {
                offset = -_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].MAX_TOP_APP_BAR_HEIGHT;
            }
            this.adapter_.setStyle('top', offset + 'px');
        }
    };
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */
    MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
        var currentHeight = this.adapter_.getTopAppBarHeight();
        if (this.topAppBarHeight_ !== currentHeight) {
            this.wasDocked_ = false;
            // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.
            this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
            this.topAppBarHeight_ = currentHeight;
        }
        this.handleTargetScroll();
    };
    return MDCTopAppBarFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./theme/assets/css/src/front-end.css":
/*!********************************************!*\
  !*** ./theme/assets/css/src/front-end.css ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./theme/assets/src/front-end/components/comments.js":
/*!***********************************************************!*\
  !*** ./theme/assets/src/front-end/components/comments.js ***!
  \***********************************************************/
/*! exports provided: commentsInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsInit", function() { return commentsInit; });
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/index.js");
/* harmony import */ var _material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/checkbox */ "./node_modules/@material/checkbox/index.js");
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



var commentsInit = function commentsInit() {
  var commentForm = document.querySelector('#commentform');

  if (!commentForm) {
    return;
  }

  var fields = [];

  var _iterator = _createForOfIteratorHelper(commentForm.querySelectorAll('.mdc-text-field')),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;
      fields.push(new _material_textfield__WEBPACK_IMPORTED_MODULE_0__["MDCTextField"](field));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(commentForm.querySelectorAll('.mdc-checkbox')),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var checkbox = _step2.value;
      new _material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MDCCheckbox"](checkbox);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(commentForm.querySelectorAll('.mdc-button')),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var button = _step3.value;
      new _material_ripple__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"](button);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  commentForm.addEventListener('submit', function (event) {
    var isValid = true;
    fields.forEach(function (field) {
      if (field.required && !field.valid) {
        isValid = false; // Blur the field so error styles are rendered.

        field.foundation_.deactivateFocus();
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/dark-mode-switch.js":
/*!*******************************************************************!*\
  !*** ./theme/assets/src/front-end/components/dark-mode-switch.js ***!
  \*******************************************************************/
/*! exports provided: ICONS, initDarkModeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDarkModeSwitch", function() { return initDarkModeSwitch; });
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
var body = document.body;
var ICONS = {
  DARK_MODE: 'dark_mode',
  LIGHT_MODE: 'light_mode'
};
var localStorageDarkMode = window.localStorage.getItem('materialDesignDarkMode');
var switcher;
var switcherIcon;
var darkModeEnabled = false;

var maybeToggleDarkMode = function maybeToggleDarkMode(event) {
  event.preventDefault();
  var target = event.target;

  if (!target) {
    return;
  }

  if (darkModeEnabled) {
    body.setAttribute('data-color-scheme', 'dark');
    switcherIcon.textContent = ICONS.LIGHT_MODE;
  } else {
    body.setAttribute('data-color-scheme', 'light');
    switcherIcon.textContent = ICONS.DARK_MODE;
  }
};

var testMediaQuery = function testMediaQuery(event) {
  if (event.matches) {
    darkModeEnabled = true;
    switcherIcon.textContent = ICONS.LIGHT_MODE;
  } else {
    darkModeEnabled = false;
    switcherIcon.textContent = ICONS.DARK_MODE;
  }
};

var initDarkModeSwitch = function initDarkModeSwitch() {
  if (!body) {
    return;
  }

  switcher = document.querySelector('.dark-mode__button');

  if (!switcher) {
    return;
  }

  switcherIcon = switcher.querySelector('.dark-mode__icon');
  var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', testMediaQuery);
  switcher.addEventListener('click', function (event) {
    darkModeEnabled = !darkModeEnabled;
    maybeToggleDarkMode(event); // @TODO: Make them expire?

    window.localStorage.setItem('materialDesignDarkMode', JSON.stringify(darkModeEnabled));
  }); // Bail if set by localStorage.

  if (localStorageDarkMode) {
    darkModeEnabled = JSON.parse(localStorageDarkMode);
    maybeToggleDarkMode({
      preventDefault: function preventDefault() {},
      target: true
    });
    return;
  }

  testMediaQuery(mediaQuery);

  if (window.materialDesign.darkModeStatus && 'active' === window.materialDesign.darkModeStatus) {
    darkModeEnabled = true;
    maybeToggleDarkMode({
      preventDefault: function preventDefault() {},
      target: true
    });
  }
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/drawer.js":
/*!*********************************************************!*\
  !*** ./theme/assets/src/front-end/components/drawer.js ***!
  \*********************************************************/
/*! exports provided: drawerInit, drawerHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerInit", function() { return drawerInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerHandler", function() { return drawerHandler; });
/* harmony import */ var _material_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/drawer */ "./node_modules/@material/drawer/index.js");
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

var drawerElement = document.querySelector('.mdc-drawer');
var drawerInit = function drawerInit() {
  if (!drawerElement) {
    return;
  }

  var drawer = new _material_drawer__WEBPACK_IMPORTED_MODULE_0__["MDCDrawer"](drawerElement);
  drawer.singleSelection = true;
  var listElement = drawerElement.querySelector('.mdc-list');
  listElement.addEventListener('click', function () {
    drawer.open = false;
  });
  var firstElement = listElement.querySelector('.mdc-list-item');

  if (firstElement) {
    firstElement.setAttribute('tabindex', 0);
  }

  var closeButton = drawerElement.querySelector('.mdc-drawer__close');

  if (!closeButton) {
    return drawer;
  }

  closeButton.addEventListener('click', function () {
    drawer.open = false;
  });
  return drawer;
};
var drawerHandler = function drawerHandler(topAppBar, drawer) {
  topAppBar.listen('MDCTopAppBar:nav', function () {
    drawer.open = !drawer.open;
  });
  drawer.listen('MDCDrawer:closed', function () {
    topAppBar.navIcon_.focus();
  });
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/embeds.js":
/*!*********************************************************!*\
  !*** ./theme/assets/src/front-end/components/embeds.js ***!
  \*********************************************************/
/*! exports provided: embedsInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embedsInit", function() { return embedsInit; });
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
var makeFit = function makeFit() {
  document.querySelectorAll('iframe, object, video').forEach(function (video) {
    var container = video.parentNode; // Skip videos we want to ignore.

    if (video.classList.contains('intrinsic-ignore') || video.parentNode.classList.contains('intrinsic-ignore')) {
      return true;
    }

    if (!video.dataset.origwidth) {
      // Get the video element proportions.
      video.setAttribute('data-origwidth', video.width);
      video.setAttribute('data-origheight', video.height);
    }

    var iTargetWidth = container.offsetWidth; // Get ratio from proportions.

    var ratio = iTargetWidth / video.dataset.origwidth; // Scale based on ratio, thus retaining proportions.

    video.style.width = iTargetWidth + 'px';
    video.style.height = video.dataset.origheight * ratio + 'px';
  });
};

var embedsInit = function embedsInit() {
  makeFit();
  window.addEventListener('resize', makeFit);
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/floating-label.js":
/*!*****************************************************************!*\
  !*** ./theme/assets/src/front-end/components/floating-label.js ***!
  \*****************************************************************/
/*! exports provided: floatingLabelInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floatingLabelInit", function() { return floatingLabelInit; });
/* harmony import */ var _material_floating_label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/floating-label */ "./node_modules/@material/floating-label/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var floatingLabelInit = function floatingLabelInit() {
  var floatingLabels = document.querySelectorAll('.mdc-floating-label');

  if (!floatingLabels) {
    return;
  }

  var _iterator = _createForOfIteratorHelper(floatingLabels),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var floatingLabel = _step.value;
      new _material_floating_label__WEBPACK_IMPORTED_MODULE_0__["MDCFloatingLabel"](floatingLabel);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/masonry.js":
/*!**********************************************************!*\
  !*** ./theme/assets/src/front-end/components/masonry.js ***!
  \**********************************************************/
/*! exports provided: masonryInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "masonryInit", function() { return masonryInit; });
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
var gridElement = null;
var masonryInit = function masonryInit() {
  gridElement = document.querySelector('.masonry-grid-theme');

  if (!gridElement) {
    return;
  }

  var mediaQuery = window.matchMedia('(min-width: 840px)');
  mediaQuery.addEventListener('change', handleResize);
  handleResize(mediaQuery);
};

var handleResize = function handleResize(mediaQuery) {
  if (mediaQuery.matches) {
    resizeAllGridItems();
  }
};

var resizeAllGridItems = function resizeAllGridItems() {
  var cells = gridElement.querySelectorAll('.post-card__container');

  if (!cells) {
    return;
  }

  cells.forEach(resizeGridItem);
};

var resizeGridItem = function resizeGridItem(cell) {
  if (!cell) {
    return;
  }

  var rowHeight = parseInt(window.getComputedStyle(gridElement).getPropertyValue('grid-auto-rows'), 10);
  var rowGap = parseInt(window.getComputedStyle(gridElement).getPropertyValue('grid-row-gap'), 10);
  var contentHeight = cell.querySelector('.post-card').getBoundingClientRect().height;
  var rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
  cell.style.gridRowEnd = 'span ' + rowSpan;
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/navigation.js":
/*!*************************************************************!*\
  !*** ./theme/assets/src/front-end/components/navigation.js ***!
  \*************************************************************/
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
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  var container = document.getElementById('site-navigation');

  if (!container) {
    return;
  }

  var button = container.getElementsByTagName('button')[0];

  if ('undefined' === typeof button) {
    return;
  }

  var menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.

  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');

  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }

  button.onclick = function () {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  }; // Get all the link elements within the menu.


  var links = menu.getElementsByTagName('a'); // Each time a menu link is focused or blurred, toggle focus.

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }
  /**
   * Sets or removes .focus class on an element.
   */


  function toggleFocus() {
    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

    while (-1 === self.className.indexOf('nav-menu')) {
      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }
  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */


  (function (navContainer) {
    var i;
    var parentLink = navContainer.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

    if ('ontouchstart' in window) {
      var touchStartFn = function touchStartFn(e) {
        var menuItem = this.parentNode;

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();

          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }

            menuItem.parentNode.children[i].classList.remove('focus');
          }

          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  })(container);
})();

/***/ }),

/***/ "./theme/assets/src/front-end/components/ripple.js":
/*!*********************************************************!*\
  !*** ./theme/assets/src/front-end/components/ripple.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/index.js");
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


var init = function init() {
  var surface = document.querySelectorAll('.mdc-ripple-surface');

  if (surface) {
    [].forEach.call(surface, function (node) {
      return new _material_ripple__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](node);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./theme/assets/src/front-end/components/scroll.js":
/*!*********************************************************!*\
  !*** ./theme/assets/src/front-end/components/scroll.js ***!
  \*********************************************************/
/*! exports provided: scrollInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollInit", function() { return scrollInit; });
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
var scrollInit = function scrollInit() {
  var topTrigger = document.getElementById('back-to-top');

  if (!topTrigger) {
    return;
  }

  topTrigger.addEventListener('click', scrollToTop);
};

var scrollToTop = function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/search.js":
/*!*********************************************************!*\
  !*** ./theme/assets/src/front-end/components/search.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/index.js");




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
 * Shows / Hides search box at the top of the page
 */

var Search = /*#__PURE__*/function () {
  /**
   * Store elements
   *
   * @param {*} element
   */
  function Search(element) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Search);

    if (!element) {
      return;
    }

    this.element = element;
    this.trigger = element.querySelector('.search__button');
    this.backTrigger = element.querySelector('.button__back');
    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
    this.closeRipple = false;
    this.attachEvents();
  }
  /**
   * Add events to trigger and hide search
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Search, [{
    key: "attachEvents",
    value: function attachEvents() {
      var _this = this;

      if (!this.trigger) {
        return;
      }

      this.trigger.addEventListener('click', this.showSearch);
      document.addEventListener('keydown', function (event) {
        _this.keepFocusInSearch(event);

        _this.closeOnEscape(event);
      });

      if (!this.backTrigger) {
        return;
      }

      this.backTrigger.addEventListener('click', this.hideSearch);
    }
    /**
     * Show search
     */

  }, {
    key: "showSearch",
    value: function showSearch() {
      var input = this.element.querySelector('.mdc-text-field__input');
      this.element.classList.add('-with-search');

      if (!input) {
        return;
      }

      input.focus();

      if (!this.closeRipple) {
        this.closeRipple = new _material_ripple__WEBPACK_IMPORTED_MODULE_3__["MDCRipple"](this.backTrigger);
        this.closeRipple.unbounded = true;
      }
    }
    /**
     * Hide search
     */

  }, {
    key: "hideSearch",
    value: function hideSearch() {
      this.element.classList.remove('-with-search');
      this.trigger.focus();
    }
    /**
     * Loop focus when search form is active
     *
     * @param {*} event Triggered event
     */

  }, {
    key: "keepFocusInSearch",
    value: function keepFocusInSearch(event) {
      if (!this.element.classList.contains('-with-search')) {
        return;
      }

      var searchContainer = this.element.querySelector('.top-app-bar__search');
      var selectors = 'input, a, button';

      var elements = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(searchContainer.querySelectorAll(selectors));

      if (!elements) {
        return;
      }

      var firstElement = elements[0];
      var lastElement = elements[elements.length - 1];
      var _document = document,
          activeElement = _document.activeElement;
      var shiftKey = event.shiftKey,
          key = event.key;
      var isTabbing = 'Tab' === key;

      if (!shiftKey && isTabbing && lastElement === activeElement) {
        event.preventDefault();
        firstElement.focus();
      }

      if (shiftKey && isTabbing && firstElement === activeElement) {
        event.preventDefault();
        lastElement.focus();
      }
    }
    /**
     * Close form when pressing Esc
     *
     * @param {*} event Triggered event
     */

  }, {
    key: "closeOnEscape",
    value: function closeOnEscape(event) {
      if (!this.element.classList.contains('-with-search')) {
        return;
      }

      if ('Escape' !== event.key) {
        return;
      }

      this.element.classList.remove('-with-search');
      this.trigger.focus();
    }
  }]);

  return Search;
}();

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./theme/assets/src/front-end/components/skip-link-focus-fix.js":
/*!**********************************************************************!*\
  !*** ./theme/assets/src/front-end/components/skip-link-focus-fix.js ***!
  \**********************************************************************/
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
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */

/* global navigator, location */
(function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);

  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1);

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      var element = document.getElementById(id);

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
})();

/***/ }),

/***/ "./theme/assets/src/front-end/components/tab-bar.js":
/*!**********************************************************!*\
  !*** ./theme/assets/src/front-end/components/tab-bar.js ***!
  \**********************************************************/
/*! exports provided: tabBarInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabBarInit", function() { return tabBarInit; });
/* harmony import */ var _material_tab_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/tab-bar */ "./node_modules/@material/tab-bar/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var tabBarInit = function tabBarInit() {
  var tabBarElements = document.querySelectorAll('.mdc-tab-bar');

  if (!tabBarElements) {
    return;
  }

  var _iterator = _createForOfIteratorHelper(tabBarElements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tabBarElement = _step.value;
      var tabBar = new _material_tab_bar__WEBPACK_IMPORTED_MODULE_0__["MDCTabBar"](tabBarElement);
      var activeTab = tabBarElement.querySelector('.mdc-tab--active');

      if (activeTab) {
        tabBar.foundation_.scrollIntoView(tabBar.foundation_.adapter_.getIndexOfTabById(activeTab.id));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/textfield.js":
/*!************************************************************!*\
  !*** ./theme/assets/src/front-end/components/textfield.js ***!
  \************************************************************/
/*! exports provided: textFieldInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textFieldInit", function() { return textFieldInit; });
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var textFieldInit = function textFieldInit() {
  var textFieldElements = document.querySelectorAll('.mdc-text-field:not(.comment-field)');

  if (!textFieldElements) {
    return;
  }

  var _iterator = _createForOfIteratorHelper(textFieldElements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var textFieldElement = _step.value;
      var input = new _material_textfield__WEBPACK_IMPORTED_MODULE_0__["MDCTextField"](textFieldElement);

      if (input.trailingIcon_) {
        input.trailingIcon_.root_.addEventListener('click', handleClick);
        input.trailingIcon_.root_.addEventListener('keydown', handleKeydown);
        input.trailingIcon_.root_.addEventListener('keyup', handleKeyup);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
/**
 * Submit form when clicking icon
 *
 * @param {*} event Triggered event
 */

var handleClick = function handleClick(event) {
  submitForm(event);
};
/**
 * Handle space and enter keys
 * Prevent space from scrolling page
 *
 * @param {*} event Triggered event
 */


var handleKeydown = function handleKeydown(event) {
  if ('Space' === event.code || 32 === event.keyCode) {
    event.preventDefault();
  }

  if ('Enter' === event.code || 13 === event.keyCode) {
    submitForm(event);
  }
};
/**
 * Trigger form with space key
 *
 * @param {*} event Triggered event
 */


var handleKeyup = function handleKeyup(event) {
  if ('Space' === event.code || 32 === event.keyCode) {
    event.preventDefault();
    submitForm(event);
  }
};
/**
 * Submit form if available
 *
 * @param {*} event Previously triggered event
 */


var submitForm = function submitForm(event) {
  if ('button' !== event.currentTarget.getAttribute('role')) {
    return;
  }

  var currentTarget = event.currentTarget;
  var form = currentTarget.closest('form');

  if (!form) {
    return;
  }

  form.submit();
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/top-app-bar.js":
/*!**************************************************************!*\
  !*** ./theme/assets/src/front-end/components/top-app-bar.js ***!
  \**************************************************************/
/*! exports provided: topAppBarInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topAppBarInit", function() { return topAppBarInit; });
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/top-app-bar */ "./node_modules/@material/top-app-bar/index.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./theme/assets/src/front-end/components/search.js");
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

/* global MutationObserver */


var topAppBarInit = function topAppBarInit() {
  var topAppBarElement = document.querySelector('.mdc-top-app-bar');

  if (!topAppBarElement) {
    return;
  }

  new _search__WEBPACK_IMPORTED_MODULE_1__["default"](topAppBarElement);
  setTopAppBarPosition();
  return new _material_top_app_bar__WEBPACK_IMPORTED_MODULE_0__["MDCTopAppBar"](topAppBarElement);
};
/**
 * Set top app bar top position when WP admin bar is rendered.
 */

var setTopAppBarPosition = function setTopAppBarPosition() {
  var topAppBarElement = document.querySelector('.admin-bar .mdc-top-app-bar');

  if (!topAppBarElement) {
    return;
  }

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
      var top = parseInt(topAppBarElement.style.top, 10);

      if (top >= -128) {
        top += 32; // WP admin bar height is 32px.
      }

      observer.disconnect();
      topAppBarElement.style.top = "".concat(top, "px");
      observe();
    });
  });

  var observe = function observe() {
    observer.observe(topAppBarElement, {
      attributes: true,
      attributeFilter: ['style']
    });
  };

  observe();
};

/***/ }),

/***/ "./theme/assets/src/front-end/components/widgets.js":
/*!**********************************************************!*\
  !*** ./theme/assets/src/front-end/components/widgets.js ***!
  \**********************************************************/
/*! exports provided: widgetsInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetsInit", function() { return widgetsInit; });
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
 * File swidgets.js.
 *
 * Enables keyboard navigation for default widgets.
 */
var widgetsInit = function widgetsInit() {
  var widgets = document.querySelectorAll('.widget');

  if (!widgets) {
    return;
  }

  widgets.forEach(function (widget) {
    var firstElement = widget.querySelector('.mdc-list-item');

    if (!firstElement) {
      return;
    }

    firstElement.setAttribute('tabindex', 0);

    if (widget.classList.contains('widget_recent_comments')) {
      return;
    }

    var items = widget.querySelectorAll('.mdc-list-item');

    if (!items) {
      return;
    }

    items.forEach(function (item) {
      var link = item.querySelector('a');

      if (!link) {
        return;
      }

      item.addEventListener('click', function (event) {
        if ('A' === event.target.tagName) {
          return event;
        }

        link.click();
      });
      item.addEventListener('keydown', function (event) {
        link.setAttribute('tabindex', '-1');

        if ('Space' === event.code || 'Enter' === event.code) {
          link.click();
        }
      });
    });
  });
};

/***/ }),

/***/ "./theme/assets/src/front-end/index.js":
/*!*********************************************!*\
  !*** ./theme/assets/src/front-end/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_top_app_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/top-app-bar */ "./theme/assets/src/front-end/components/top-app-bar.js");
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/drawer */ "./theme/assets/src/front-end/components/drawer.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scroll */ "./theme/assets/src/front-end/components/scroll.js");
/* harmony import */ var _components_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ripple */ "./theme/assets/src/front-end/components/ripple.js");
/* harmony import */ var _components_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/textfield */ "./theme/assets/src/front-end/components/textfield.js");
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/comments */ "./theme/assets/src/front-end/components/comments.js");
/* harmony import */ var _components_floating_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/floating-label */ "./theme/assets/src/front-end/components/floating-label.js");
/* harmony import */ var _components_tab_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tab-bar */ "./theme/assets/src/front-end/components/tab-bar.js");
/* harmony import */ var _components_embeds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/embeds */ "./theme/assets/src/front-end/components/embeds.js");
/* harmony import */ var _components_widgets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/widgets */ "./theme/assets/src/front-end/components/widgets.js");
/* harmony import */ var _components_masonry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/masonry */ "./theme/assets/src/front-end/components/masonry.js");
/* harmony import */ var _components_dark_mode_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dark-mode-switch */ "./theme/assets/src/front-end/components/dark-mode-switch.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navigation */ "./theme/assets/src/front-end/components/navigation.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_navigation__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/skip-link-focus-fix */ "./theme/assets/src/front-end/components/skip-link-focus-fix.js");
/* harmony import */ var _components_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_13__);
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














document.addEventListener('DOMContentLoaded', function () {
  var topAppBar = Object(_components_top_app_bar__WEBPACK_IMPORTED_MODULE_0__["topAppBarInit"])();
  var drawer = Object(_components_drawer__WEBPACK_IMPORTED_MODULE_1__["drawerInit"])();

  if (topAppBar && drawer) {
    Object(_components_drawer__WEBPACK_IMPORTED_MODULE_1__["drawerHandler"])(topAppBar, drawer);
  }

  Object(_components_scroll__WEBPACK_IMPORTED_MODULE_2__["scrollInit"])();
  Object(_components_floating_label__WEBPACK_IMPORTED_MODULE_6__["floatingLabelInit"])();
  Object(_components_tab_bar__WEBPACK_IMPORTED_MODULE_7__["tabBarInit"])();
  Object(_components_textfield__WEBPACK_IMPORTED_MODULE_4__["textFieldInit"])();
  Object(_components_ripple__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_components_comments__WEBPACK_IMPORTED_MODULE_5__["commentsInit"])();
  Object(_components_embeds__WEBPACK_IMPORTED_MODULE_8__["embedsInit"])();
  Object(_components_widgets__WEBPACK_IMPORTED_MODULE_9__["widgetsInit"])();
  Object(_components_masonry__WEBPACK_IMPORTED_MODULE_10__["masonryInit"])();
  Object(_components_dark_mode_switch__WEBPACK_IMPORTED_MODULE_11__["initDarkModeSwitch"])();
});

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./theme/assets/src/front-end/index.js ./theme/assets/css/src/front-end.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./theme/assets/src/front-end/index.js */"./theme/assets/src/front-end/index.js");
module.exports = __webpack_require__(/*! ./theme/assets/css/src/front-end.css */"./theme/assets/css/src/front-end.css");


/***/ })

/******/ });
//# sourceMappingURL=front-end.js.map