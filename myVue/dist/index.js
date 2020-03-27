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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_runtime_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/runtime/index */ \"./src/runtime/index.js\");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/index */ \"./util/index.js\");\n/* harmony import */ var _src_instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/instance/lifecycle */ \"./src/instance/lifecycle.js\");\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patch */ \"./patch.js\");\n\n\n\n\n_src_runtime_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.$mount = function(el) {\n  el = el ? Object(_util_index__WEBPACK_IMPORTED_MODULE_1__[\"query\"])(el) : undefined\n\n  return Object(_src_instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__[\"mountComponent\"])(this, el)\n}\n\n_src_runtime_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.__patch__ = _patch__WEBPACK_IMPORTED_MODULE_3__[\"patch\"]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_runtime_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node-ops.js":
/*!*********************!*\
  !*** ./node-ops.js ***!
  \*********************/
/*! exports provided: tagName, parentNode, nextSibling, createElement, setTextContent, createTextNode, appendChild, insertBefore, createComment, removeChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagName\", function() { return tagName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parentNode\", function() { return parentNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextSibling\", function() { return nextSibling; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTextContent\", function() { return setTextContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTextNode\", function() { return createTextNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendChild\", function() { return appendChild; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertBefore\", function() { return insertBefore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComment\", function() { return createComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChild\", function() { return removeChild; });\nfunction tagName(node) {\n  return node.tagName\n}\n\nfunction parentNode (node) {\n  return node.parentNode\n}\n\nfunction nextSibling(node) {\n  return node.nextSibling\n}\n\nfunction createElement(tag, vnode) {\n  const elm = document.createElement(tag)\n  if (tag !== 'select') {\n    return elm\n  }\n\n  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {\n    elm.setAttribute('multiple', 'multiple')\n  }\n  return elm\n}\nfunction setTextContent (node, text) {\n  node.textContent = text\n}\nfunction createTextNode (text) {\n  return document.createTextNode(text)\n}\n\nfunction appendChild(node, child) {\n  node.appendChild(child)\n}\n\nfunction insertBefore(parentNode, newNode, referenceNode) {\n  parentNode.insertBefore(newNode, referenceNode)\n}\n\nfunction createComment(text) {\n  return document.createComment(text)\n}\n\nfunction removeChild(node, child) {\n  node.removeChild(child)\n}\n\n//# sourceURL=webpack:///./node-ops.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/setimmediate/setImmediate.js?");

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(scope, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(/*! setimmediate */ \"./node_modules/setimmediate/setImmediate.js\");\n// On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/timers-browserify/main.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./patch.js":
/*!******************!*\
  !*** ./patch.js ***!
  \******************/
/*! exports provided: patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return patch; });\n/* harmony import */ var _src_vdom_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/vdom/patch */ \"./src/vdom/patch.js\");\n/* harmony import */ var _node_ops__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-ops */ \"./node-ops.js\");\n\n\n\nconst patch = Object(_src_vdom_patch__WEBPACK_IMPORTED_MODULE_0__[\"createPatchFunction\"])({nodeOps: _node_ops__WEBPACK_IMPORTED_MODULE_1__})\n\n//# sourceURL=webpack:///./patch.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _instance_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance/index */ \"./src/instance/index.js\");\n/* harmony import */ var _global_api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-api/index */ \"./src/global-api/index.js\");\n\n\n\nObject(_global_api_index__WEBPACK_IMPORTED_MODULE_1__[\"initGlobalAPI\"])(_instance_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony default export */ __webpack_exports__[\"default\"] = (_instance_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/core/index.js?");

/***/ }),

/***/ "./src/global-api/extend.js":
/*!**********************************!*\
  !*** ./src/global-api/extend.js ***!
  \**********************************/
/*! exports provided: initExtend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initExtend\", function() { return initExtend; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants */ \"./util/constants.js\");\n\n\nfunction initExtend(Vue) {\n  Vue.cid = 0\n  let cid = 1\n  Vue.extend = function(extendOptions = {}) {\n    const Super = this\n    const SuperId = Super.cid\n    const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})\n    if (cachedCtors[SuperId]) {\n      return cachedCtors[SuperId]\n    }\n\n    const name = extendOptions.name || Super.options.name\n\n    if (name) {\n      Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"validateComponentName\"])(name)\n    }\n\n    const Sub = function VueComponent(options) {\n      this._init(options)\n    }\n\n    Sub.prototype = Object.create(Super.prototype)\n    Sub.prototype.constructor = Sub\n\n    Sub.cid = cid++\n\n    Sub.options = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"mergeOptions\"])(\n      Super.options,\n      extendOptions\n    )\n\n    Sub['super'] = Super\n\n    Sub.extend = Super.extend\n\n    _util_constants__WEBPACK_IMPORTED_MODULE_1__[\"ASSET_TYPES\"].forEach(function (type) {\n      Sub[type] = Super[type]\n    })\n    \n    if (name) {\n      Sub.options.components[name] = Sub\n    }\n\n    Sub.superOptions = Super.options\n    Sub.extendOptions = extendOptions\n    Sub.sealedOptions = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])({}, Sub.options)\n\n    cachedCtors[SuperId] = Sub\n\n    return Sub\n  }\n}\n\n//# sourceURL=webpack:///./src/global-api/extend.js?");

/***/ }),

/***/ "./src/global-api/index.js":
/*!*********************************!*\
  !*** ./src/global-api/index.js ***!
  \*********************************/
/*! exports provided: initGlobalAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initGlobalAPI\", function() { return initGlobalAPI; });\n/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ \"./src/global-api/extend.js\");\n/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants */ \"./util/constants.js\");\n\n\nfunction initGlobalAPI(Vue) {\n  Vue.options = Object.create(null)\n  Vue.options._base = Vue\n  _util_constants__WEBPACK_IMPORTED_MODULE_1__[\"ASSET_TYPES\"].forEach(type => {\n    Vue.options[type + 's'] = Object.create(null)\n  })\n  Object(_extend__WEBPACK_IMPORTED_MODULE_0__[\"initExtend\"])(Vue)\n}\n\n//# sourceURL=webpack:///./src/global-api/index.js?");

/***/ }),

/***/ "./src/instance/index.js":
/*!*******************************!*\
  !*** ./src/instance/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/instance/init.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/instance/render.js\");\n/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle */ \"./src/instance/lifecycle.js\");\n\n\n\n\n\nfunction Vue(options) {\n  if (!(this instanceof Vue)) {\n    console.warn('Vue is a constructor and should be called with the `new` keyword')\n  }\n\n  this._init(options)\n}\n\nObject(_init__WEBPACK_IMPORTED_MODULE_0__[\"initMixin\"])(Vue)\nObject(_render__WEBPACK_IMPORTED_MODULE_1__[\"renderMixin\"])(Vue)\nObject(_lifecycle__WEBPACK_IMPORTED_MODULE_2__[\"liftcycleMixin\"])(Vue)\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vue);\n\n//# sourceURL=webpack:///./src/instance/index.js?");

/***/ }),

/***/ "./src/instance/init.js":
/*!******************************!*\
  !*** ./src/instance/init.js ***!
  \******************************/
/*! exports provided: initMixin, resolveConstructorOptions, initInternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMixin\", function() { return initMixin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveConstructorOptions\", function() { return resolveConstructorOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initInternalComponent\", function() { return initInternalComponent; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifecycle */ \"./src/instance/lifecycle.js\");\n/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxy */ \"./src/instance/proxy.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/instance/render.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ \"./src/instance/state.js\");\n\n\n\n\n\nlet uid = 0\n\nfunction initMixin(Vue) {\n  Vue.prototype._init = function(options) {\n    const vm = this\n    vm._uid = uid++\n    if (options && options._isComponent) {\n      // optimize internal component instantiation\n      // since dynamic options merging is pretty slow, and none of the\n      // internal component options needs special treatment.\n      initInternalComponent(vm, options)\n    } else {\n      vm.$options = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"mergeOptions\"])(resolveConstructorOptions(vm.constructor), options, vm)\n    }\n\n    Object(_proxy__WEBPACK_IMPORTED_MODULE_2__[\"initProxy\"])(vm)\n\n    vm._self = vm\n    console.log('vm', vm)\n    Object(_render__WEBPACK_IMPORTED_MODULE_3__[\"initRender\"])(vm)\n    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"callHook\"])(vm, 'beforeCreate')\n\n    Object(_state__WEBPACK_IMPORTED_MODULE_4__[\"initState\"])(vm)\n\n    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"callHook\"])(vm, 'created')\n\n    if (vm.$options.el) {\n      vm.$mount(vm.$options.el)\n    }\n  }\n}\n\nfunction resolveConstructorOptions(Ctor) {\n  let options = Ctor.options\n  return options\n}\n\nfunction initInternalComponent(vm, options) {\n  const opts = vm.$options = Object.create(vm.constructor.options)\n  // doing this because it's faster than dynamic enumeration.\n  const parentVnode = options._parentVnode\n  opts.parent = options.parent\n  opts._parentVnode = parentVnode\n\n  const vnodeComponentOptions = parentVnode.componentOptions\n  opts.propsData = vnodeComponentOptions.propsData\n  opts._parentListeners = vnodeComponentOptions.listeners\n  opts._renderChildren = vnodeComponentOptions.children\n  opts._componentTag = vnodeComponentOptions.tag\n\n  if (options.render) {\n    opts.render = options.render\n    opts.staticRenderFns = options.staticRenderFns\n  }\n}\n\n//# sourceURL=webpack:///./src/instance/init.js?");

/***/ }),

/***/ "./src/instance/lifecycle.js":
/*!***********************************!*\
  !*** ./src/instance/lifecycle.js ***!
  \***********************************/
/*! exports provided: activeInstance, mountComponent, liftcycleMixin, callHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeInstance\", function() { return activeInstance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mountComponent\", function() { return mountComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liftcycleMixin\", function() { return liftcycleMixin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callHook\", function() { return callHook; });\n/* harmony import */ var _observer_watch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer/watch */ \"./src/observer/watch.js\");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n\n\n\nlet activeInstance = null\n\nfunction mountComponent(vm, el, hydrating) {\n  vm.$el = el\n\n  if (!vm.$options.render) {\n\n  } else {\n    callHook(vm, 'beforeMount')\n\n    var updateComponent\n\n    updateComponent = function() {\n      vm._update(vm._render(), hydrating)\n    }\n  }\n\n  new _observer_watch__WEBPACK_IMPORTED_MODULE_0__[\"Watcher\"](vm, updateComponent, _util_index__WEBPACK_IMPORTED_MODULE_1__[\"noop\"], {\n    before () {\n      if (vm._isMounted) {\n        callHook(vm, 'beforeUpdate')\n      }\n    }\n  }, true)\n\n  hydrating= false\n\n  if (vm.$vnode == null) {\n    vm._isMounted = true;\n    callHook(vm, 'mounted');\n  }\n  return vm\n}\n\nfunction liftcycleMixin(Vue) {\n  Vue.prototype._update = function(vnode, hydrating) {\n    const vm = this\n    const prevEl = vm.$el\n    const prevVnode = vm._vnode\n    const prevActiveInstance = activeInstance\n    activeInstance = vm\n\n    vm._vnode = vnode\n\n    if (!prevVnode) {\n      // initial render\n      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)\n    } else {\n      // updates\n      vm.$el = vm.__patch__(prevVnode, vnode)\n    }\n  }\n}\n\nfunction callHook(vm, hook) {\n  const handlers = vm.$options[hook]\n  if (handlers) {\n    for (let i = 0, j = handlers.length; i < j; i++) {\n      try {\n        handlers[i].call(vm)\n      } catch (e) {\n        console.error(e, vm, `${hook} hook`)\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/instance/lifecycle.js?");

/***/ }),

/***/ "./src/instance/proxy.js":
/*!*******************************!*\
  !*** ./src/instance/proxy.js ***!
  \*******************************/
/*! exports provided: initProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initProxy\", function() { return initProxy; });\nconst hasProxy = typeof Proxy !== 'undefined'\n\nconst gethandles = {\n  get(target, key) {\n    if (typeof key === 'string' && !(key in target)) {\n      console.warn(target, key)\n    }\n    return target[key] \n  }\n}\n\nfunction initProxy(vm) {\n  if (hasProxy) {\n    vm._renderProxy = new Proxy(vm, gethandles)\n  } else {\n    vm._renderProxy = vm\n  }\n}\n\n//# sourceURL=webpack:///./src/instance/proxy.js?");

/***/ }),

/***/ "./src/instance/render-helpers/index.js":
/*!**********************************************!*\
  !*** ./src/instance/render-helpers/index.js ***!
  \**********************************************/
/*! exports provided: installRenderHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"installRenderHelpers\", function() { return installRenderHelpers; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/index */ \"./util/index.js\");\n/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vdom/vnode */ \"./src/vdom/vnode.js\");\n\n\n\nfunction installRenderHelpers (target) {\n  target._n = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"toNumber\"]\n  target._s = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"toString\"]\n  target._v = _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__[\"createTextVNode\"]\n  target._e = _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__[\"createEmptyVNode\"]\n}\n\n\n//# sourceURL=webpack:///./src/instance/render-helpers/index.js?");

/***/ }),

/***/ "./src/instance/render.js":
/*!********************************!*\
  !*** ./src/instance/render.js ***!
  \********************************/
/*! exports provided: initRender, renderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRender\", function() { return initRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMixin\", function() { return renderMixin; });\n/* harmony import */ var _vdom_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom/create-element */ \"./src/vdom/create-element.js\");\n/* harmony import */ var _render_helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-helpers/index */ \"./src/instance/render-helpers/index.js\");\n\n\nfunction initRender(vm) {\n  vm._c = (a, b, c, d) => Object(_vdom_create_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(vm, a, b, c, d, false)\n  vm.$createElement = (a, b, c, d) => Object(_vdom_create_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(vm, a, b, c, d, true)\n}\n\nfunction renderMixin(Vue) {\n  Object(_render_helpers_index__WEBPACK_IMPORTED_MODULE_1__[\"installRenderHelpers\"])(Vue.prototype)\n  Vue.prototype._render = function() {\n    const vm = this\n    const { render, _parentVnode } = vm.$options\n\n    vm.$vnode = _parentVnode\n\n    let vnode\n    try {\n      vnode = render.call(vm._renderProxy, vm.$createElement)\n    } catch (error) {\n      console.error('render error', error)\n    }\n\n    vnode.parent = _parentVnode\n\n    return vnode\n  }\n}\n\n//# sourceURL=webpack:///./src/instance/render.js?");

/***/ }),

/***/ "./src/instance/state.js":
/*!*******************************!*\
  !*** ./src/instance/state.js ***!
  \*******************************/
/*! exports provided: initState, proxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initState\", function() { return initState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proxy\", function() { return proxy; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer/index */ \"./src/observer/index.js\");\n\n\nfunction initState(vm) {\n  vm._watchers = []\n  \n  const opts = vm.$options\n\n  if (opts.data) {\n    initDate(vm)\n  }\n}\n\nfunction initDate(vm) {\n  let data = vm.$options.data\n  data = vm._data = (typeof data === 'function') ? getData(data, vm) : data || {}\n  \n  if (!Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"])(data)) {\n    data = {}\n  }\n\n  const keys = Object.keys(data)\n  let i = keys.length\n  while (i--) {\n    const key = keys[i]\n    proxy(vm, `_data`, key)\n  }\n  Object(_observer_index__WEBPACK_IMPORTED_MODULE_1__[\"observe\"])(data, true)\n}\n\nconst sharedPropertyDefinition = {\n  enumerable: true,\n  configurable: true,\n  get: _util_index__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n  set: _util_index__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]\n}\n\nfunction proxy(target, sourceKey, key) {\n  sharedPropertyDefinition.get = function proxyGetter() {\n    return this[sourceKey][key]\n  }\n  sharedPropertyDefinition.set = function proxySetter(val) {\n    this[sourceKey][key] = val\n  }\n  Object.defineProperty(target, key, sharedPropertyDefinition)\n}\n\nfunction getData(data, vm) {\n  try {\n    return data.call(vm, vm)\n  } catch (e) {\n    console.error(e, vm, `data()`)\n    return {}\n  } finally {\n  }\n}\n\n//# sourceURL=webpack:///./src/instance/state.js?");

/***/ }),

/***/ "./src/observer/dep.js":
/*!*****************************!*\
  !*** ./src/observer/dep.js ***!
  \*****************************/
/*! exports provided: Dep, pushTarget, popTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dep\", function() { return Dep; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushTarget\", function() { return pushTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popTarget\", function() { return popTarget; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n\n\nlet uid = 0\n\nclass Dep{\n  constructor () {\n    this.id = uid++\n    this.subs = []\n  }\n  addSub (sub) {\n    this.subs.push(sub)\n  }\n  removeSub (sub) {\n    Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"remove\"])(this.subs, sub)\n  }\n  depend () {\n    if (Dep.target) {\n      Dep.target.addDep(this)\n    }\n  }\n  notify () {\n    // stabilize the subscriber list first\n    const subs = this.subs.slice()\n    for (let i = 0, l = subs.length; i < l; i++) {\n      subs[i].update()\n    }\n  }\n}\nDep.target = null\nconst targetStack = []\nfunction pushTarget (_target) {\n  if (Dep.target) targetStack.push(Dep.target)\n  Dep.target = _target\n}\n\nfunction popTarget () {\n  Dep.target = targetStack.pop()\n}\n\n//# sourceURL=webpack:///./src/observer/dep.js?");

/***/ }),

/***/ "./src/observer/index.js":
/*!*******************************!*\
  !*** ./src/observer/index.js ***!
  \*******************************/
/*! exports provided: shouldObserve, observe, Observer, defineReactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shouldObserve\", function() { return shouldObserve; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observe\", function() { return observe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defineReactive\", function() { return defineReactive; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom/vnode */ \"./src/vdom/vnode.js\");\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dep */ \"./src/observer/dep.js\");\n\n\n\nlet shouldObserve = true\n\nfunction observe(value, asRootData) {\n  if (!Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(value) || value instanceof _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__[\"VNode\"]) {\n    return\n  }\n  let ob\n  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(value, '__ob__') && value.__ob__ instanceof Observer) {\n    ob = value.__ob__\n  } else if (\n    shouldObserve &&\n    (Array.isArray(value) || Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"])(value)) &&\n    Object.isExtensible(value) &&\n    !value._isVue\n  ) {\n    ob = new Observer(value)\n  }\n}\nclass Observer{\n  constructor (value) {\n    this.value = value\n    this.dep = new _dep__WEBPACK_IMPORTED_MODULE_2__[\"Dep\"]()\n    this.vmCount = 0\n    Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"def\"])(value, '__ob__', this)\n    if (Array.isArray(value)) {\n      this.observeArray(value)\n    } else {\n      this.walk(value)\n    }\n  }\n  walk (obj) {\n    const keys = Object.keys(obj)\n    for (let i = 0; i < keys.length; i++) {\n      defineReactive(obj, keys[i])\n    }\n  }\n  observeArray (items) {\n    for (let i = 0, l = items.length; i < l; i++) {\n      observe(items[i])\n    }\n  }\n}\n\nfunction defineReactive (obj, key, val, customSetter, shallow) {\n  const dep = new _dep__WEBPACK_IMPORTED_MODULE_2__[\"Dep\"]()\n\n  const property = Object.getOwnPropertyDescriptor(obj, key)\n  if (property && property.configurable === false) {\n    return\n  }\n  const getter = property && property.get\n  const setter = property && property.set\n\n  if ((!getter || setter) && arguments.length === 2) {\n    val = obj[key]\n  }\n\n  let childOb = !shallow && observe(val)\n\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function reactiveGetter() {\n      const value = getter ? getter.call(obj) : val\n      if (_dep__WEBPACK_IMPORTED_MODULE_2__[\"Dep\"].target) {\n        dep.depend()\n        if (childOb) {\n          childOb.dep.depend()\n          if (Array.isArray(value)) {\n            dependArray(value)\n          }\n        }\n      }\n      return value\n    },\n    set: function reactiveSetter(newVal) {\n      const value = getter ? getter.call(obj) : val\n      if (newVal === value || (newVal !== newVal && value !== value)) {\n        return\n      }\n      if (setter) {\n        setter.call(obj, newVal)\n      } else {\n        val = newVal\n      }\n      childOb = !shallow && observe(newVal)\n      dep.notify()\n    }\n  })\n}\n\nfunction dependArray (value) {\n  for (let e, i = 0, l = value.length; i < l; i++) {\n    e = value[i]\n    e && e.__ob__ && e.__ob__.dep.depend()\n    if (Array.isArray(e)) {\n      dependArray(e)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/observer/index.js?");

/***/ }),

/***/ "./src/observer/scheduler.js":
/*!***********************************!*\
  !*** ./src/observer/scheduler.js ***!
  \***********************************/
/*! exports provided: queueWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queueWatcher\", function() { return queueWatcher; });\n/* harmony import */ var _util_next_tick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/next-tick */ \"./util/next-tick.js\");\n\n\nconst queue = []\nlet has = {}\nlet waiting = false\nlet flushing = false\nlet index = 0\n\nfunction flushSchedulerQueue () {\n  flushing = true\n  let watcher, id\n  queue.sort((a, b) => a.id - b.id)\n  for (index = 0; index < queue.length; index++) {\n    watcher = queue[index]\n    if (watcher.before) {\n      watcher.before()\n    }\n    id = watcher.id\n    has[id] = null\n    watcher.run()\n  }\n}\n\n\nfunction queueWatcher (watcher) {\n  const id = watcher.id\n  if (has[id] == null) {\n    has[id] = true\n    if (!flushing) {\n      queue.push(watcher)\n    }\n    if (!waiting) {\n      waiting = true\n      Object(_util_next_tick__WEBPACK_IMPORTED_MODULE_0__[\"nextTick\"])(flushSchedulerQueue)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/observer/scheduler.js?");

/***/ }),

/***/ "./src/observer/watch.js":
/*!*******************************!*\
  !*** ./src/observer/watch.js ***!
  \*******************************/
/*! exports provided: Watcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Watcher\", function() { return Watcher; });\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/observer/dep.js\");\n/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ \"./src/observer/scheduler.js\");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n\n\n\n\nlet uid = 0\n\nclass Watcher {\n  constructor(\n    vm,\n    expOrFn,\n    cb,\n    options,\n    isRenderWatcher\n  ) {\n    this.vm = vm\n    if (isRenderWatcher) {\n      vm._watcher = this\n    }\n    vm._watchers.push(this)\n    if (options) {\n      this.deep = !!options.deep\n      this.user = !!options.user\n      this.computed = !!options.computed\n      this.sync = !!options.sync\n      this.before = options.before\n    } else {\n      this.deep = this.user = this.computed = this.sync = false\n    }\n\n    this.cb = cb\n    this.id = ++uid // uid for batching\n    this.active = true\n    this.dirty = this.computed // for computed watchers\n    this.deps = []\n    this.newDeps = []\n    this.depIds = new Set()\n    this.newDepIds = new Set()\n    this.expression =  true\n      ? expOrFn.toString()\n      : undefined\n    if (typeof expOrFn === 'function') {\n      this.getter = expOrFn\n    }\n\n    if (this.computed) {\n      this.value = undefined\n      this.dep = new _dep__WEBPACK_IMPORTED_MODULE_0__[\"Dep\"]()\n    } else {\n      this.value = this.get()\n    }\n  }\n\n  get() {\n    Object(_dep__WEBPACK_IMPORTED_MODULE_0__[\"pushTarget\"])(this)\n    let value\n    const vm = this.vm\n\n    try {\n      value = this.getter.call(vm, vm)\n    } catch(err) {\n      console.error('watch get err', err)\n    } finally {\n      // if (this.deep) {\n      //   traverse(value)\n      // }\n      Object(_dep__WEBPACK_IMPORTED_MODULE_0__[\"popTarget\"])()\n      this.cleanupDeps()\n    }\n\n    return value\n  }\n\n  cleanupDeps () {\n    let i = this.deps.length\n    while (i--) {\n      const dep = this.deps[i]\n      if (!this.newDepIds.has(dep.id)) {\n        dep.removeSub(this)\n      }\n    }\n    let tmp = this.depIds\n    this.depIds = this.newDepIds\n    this.newDepIds = tmp\n    this.newDepIds.clear()\n    tmp = this.deps\n    this.deps = this.newDeps\n    this.newDeps = tmp\n    this.newDeps.length = 0\n  }\n  addDep (dep) {\n    const id = dep.id\n    if (!this.newDepIds.has(id)) {\n      this.newDepIds.add(id)\n      this.newDeps.push(dep)\n      if (!this.depIds.has(id)) {\n        dep.addSub(this)\n      }\n    }\n  }\n\n  update () {\n    Object(_scheduler__WEBPACK_IMPORTED_MODULE_1__[\"queueWatcher\"])(this)\n  }\n\n  run () {\n    if (this.active) {\n      this.getAndInvoke(this.cb)\n    }\n  }\n\n  getAndInvoke (cb) {\n    const value = this.get()\n    if (\n      value !== this.value ||\n      Object(_util_index__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(value) ||\n      this.deep\n    ) {\n      const oldValue = this.value\n      this.value = value\n      this.dirty = false\n      if (this.user) {\n        try {\n          cb.call(this.vm, value, oldValue)\n        } catch (e) {\n          console.error(e, this.vm, `callback for watcher \"${this.expression}\"`)\n        }\n      } else {\n        cb.call(this.vm, value, oldValue)\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/observer/watch.js?");

/***/ }),

/***/ "./src/runtime/index.js":
/*!******************************!*\
  !*** ./src/runtime/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/runtime/index.js?");

/***/ }),

/***/ "./src/vdom/create-component.js":
/*!**************************************!*\
  !*** ./src/vdom/create-component.js ***!
  \**************************************/
/*! exports provided: createComponent, createComponentInstanceForVnode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComponent\", function() { return createComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComponentInstanceForVnode\", function() { return createComponentInstanceForVnode; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom/vnode */ \"./src/vdom/vnode.js\");\n/* harmony import */ var _instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../instance/lifecycle */ \"./src/instance/lifecycle.js\");\n\n\n\n\nfunction createComponent(Ctor, data, context, children, tag) {\n  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isUndef\"])(Ctor)) {\n    return\n  }\n  const baseCtor = context.$options._base\n  let asyncFactory\n  data = data || {}\n  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(Ctor)) {\n    Ctor = baseCtor.extend(Ctor)\n  }\n\n  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isUndef\"])(Ctor.cid)) {\n\n  }\n  \n  var propsData\n\n  var listeners\n\n  installComponentHooks(data)\n\n  const name = Ctor.options.name || tag\n  \n  const vnode = new _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__[\"VNode\"](`vue-component-${Ctor.cid}${name ? `-${name}` : ''}`, data, undefined, undefined, undefined, context,\n  { Ctor, propsData, listeners, tag, children },asyncFactory\n  )\n\n  return vnode\n}\n\nfunction createComponentInstanceForVnode(vnode, parent) {\n  const options = {\n    _isComponent: true,\n    _parentVnode: vnode,\n    parent\n  }\n  return new vnode.componentOptions.Ctor(options)\n}\n\nconst componentVNodeHooks = {\n  init(vnode, hydrating) {\n    const child = vnode.componentInstance = createComponentInstanceForVnode(\n      vnode,\n      _instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__[\"activeInstance\"]\n    )\n    child.$mount(vnode.elm, hydrating)\n  },\n  insert(vnode) {\n    const { componentInstance } = vnode\n    if (!componentInstance._isMounted) {\n      componentInstance._isMounted = true\n      Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__[\"callHook\"])(componentInstance, 'mounted')\n    }\n  },\n  destroy (vnode) {\n    const { componentInstance } = vnode\n    if (!componentInstance._isDestroyed) {\n      componentInstance.$destroy()\n    }\n  }\n}\n\nconst hooksToMerge = Object.keys(componentVNodeHooks)\n\nfunction installComponentHooks(data) {\n  const hooks = data.hook || (data.hook = {})\n  for (let index = 0; index < hooksToMerge.length; index++) {\n    const key = hooksToMerge[index];\n    const existing = hooks[key]\n    const toMerge = componentVNodeHooks[key]\n    if (existing !== toMerge && !(existing && existing._merged)) {\n      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge\n    }\n  }\n}\n\nfunction mergeHook (f1, f2) {\n  const merged = (a, b) => {\n    // flow complains about extra args which is why we use any\n    f1(a, b)\n    f2(a, b)\n  }\n  merged._merged = true\n  return merged\n}\n\n\n//# sourceURL=webpack:///./src/vdom/create-component.js?");

/***/ }),

/***/ "./src/vdom/create-element.js":
/*!************************************!*\
  !*** ./src/vdom/create-element.js ***!
  \************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n/* harmony import */ var _util_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/options */ \"./util/options.js\");\n/* harmony import */ var _util_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/element */ \"./util/element.js\");\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vnode */ \"./src/vdom/vnode.js\");\n/* harmony import */ var _helpers_normalize_children__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/normalize-children */ \"./src/vdom/helpers/normalize-children.js\");\n/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-component */ \"./src/vdom/create-component.js\");\n\n\n\n\n\n\n\nconst SIMPLE_NORMALIZE = 1\nconst ALWAYS_NORMALIZE = 2\n\nfunction createElement(context, tag, data, children, normalizationType, alwaysNormalize) {\n  if (Array.isArray(data) || Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isPrimitive\"])(data)) {\n    normalizationType = children\n    children = data\n    data = undefined\n  }\n\n  return _createElement(context, tag, data, children, normalizationType)\n}\n\nfunction _createElement(context, tag, data, children, normalizationType) {\n  if (!tag) {\n    return Object(_vnode__WEBPACK_IMPORTED_MODULE_3__[\"createEmptyVNode\"])()\n  }\n  if (Array.isArray(children) &&\n    typeof children[0] === 'function'\n  ) {\n    data = data || {}\n    data.scopedSlots = { default: children[0] }\n    children.length = 0\n  }\n  if (normalizationType === ALWAYS_NORMALIZE) {\n    children = Object(_helpers_normalize_children__WEBPACK_IMPORTED_MODULE_4__[\"normalizeChildren\"])(children)\n  } else if (normalizationType === SIMPLE_NORMALIZE) {\n    children = Object(_helpers_normalize_children__WEBPACK_IMPORTED_MODULE_4__[\"simpleNormalizeChildren\"])(children)\n  }\n\n  let vnode\n  if (typeof tag === 'string') {\n    let Ctor\n    if (Object(_util_element__WEBPACK_IMPORTED_MODULE_2__[\"isReservedTag\"])(tag)) {\n      vnode = new _vnode__WEBPACK_IMPORTED_MODULE_3__[\"VNode\"](\n        tag, data, children,\n        undefined, undefined, context\n      )\n    } else if(Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(Ctor = Object(_util_options__WEBPACK_IMPORTED_MODULE_1__[\"resolveAsset\"])(context.$options, 'components', tag))) {\n      vnode = Object(_create_component__WEBPACK_IMPORTED_MODULE_5__[\"createComponent\"])(Ctor, data, context, children, tag)\n    }\n  } else {\n    vnode = Object(_create_component__WEBPACK_IMPORTED_MODULE_5__[\"createComponent\"])(tag, data, context, children)\n  }\n\n  if (vnode) {\n    return vnode\n  } else {\n    return Object(_vnode__WEBPACK_IMPORTED_MODULE_3__[\"createEmptyVNode\"])()\n  }\n\n}\n\n//# sourceURL=webpack:///./src/vdom/create-element.js?");

/***/ }),

/***/ "./src/vdom/helpers/normalize-children.js":
/*!************************************************!*\
  !*** ./src/vdom/helpers/normalize-children.js ***!
  \************************************************/
/*! exports provided: normalizeChildren, simpleNormalizeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeChildren\", function() { return normalizeChildren; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"simpleNormalizeChildren\", function() { return simpleNormalizeChildren; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/index */ \"./util/index.js\");\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vnode */ \"./src/vdom/vnode.js\");\n\n\nfunction normalizeChildren(children) {\n  return Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isPrimitive\"])(children) \n    ? [Object(_vnode__WEBPACK_IMPORTED_MODULE_1__[\"createTextVNode\"])(children)]\n    : Array.isArray(children)\n      ? normalizeArrayChildren(children)\n      : undefined\n}\n\nfunction normalizeArrayChildren(children) {\n\n}\n\nfunction simpleNormalizeChildren (children) {\n  for (let i = 0; i < children.length; i++) {\n    if (Array.isArray(children[i])) {\n      return Array.prototype.concat.apply([], children)\n    }\n  }\n  return children\n}\n\n//# sourceURL=webpack:///./src/vdom/helpers/normalize-children.js?");

/***/ }),

/***/ "./src/vdom/patch.js":
/*!***************************!*\
  !*** ./src/vdom/patch.js ***!
  \***************************/
/*! exports provided: createPatchFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPatchFunction\", function() { return createPatchFunction; });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/index */ \"./util/index.js\");\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnode */ \"./src/vdom/vnode.js\");\n/* harmony import */ var _util_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/element */ \"./util/element.js\");\n\n\n\nfunction sameVnode (a, b) {\n  return (\n    a.key === b.key && (\n      (\n        a.tag === b.tag &&\n        a.isComment === b.isComment &&\n        Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(a.data) === Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(b.data) &&\n        sameInputType(a, b)\n      ) || (\n        Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isTrue\"])(a.isAsyncPlaceholder) &&\n        a.asyncFactory === b.asyncFactory &&\n        Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isUndef\"])(b.asyncFactory.error)\n      )\n    )\n  )\n}\nfunction sameInputType (a, b) {\n  if (a.tag !== 'input') return true\n  let i\n  const typeA = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i = a.data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i = i.attrs) && i.type\n  const typeB = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i = b.data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i = i.attrs) && i.type\n  return typeA === typeB || Object(_util_element__WEBPACK_IMPORTED_MODULE_2__[\"isTextInputType\"])(typeA) && Object(_util_element__WEBPACK_IMPORTED_MODULE_2__[\"isTextInputType\"])(typeB)\n}\nfunction createPatchFunction(backend) {\n  const { modules, nodeOps } = backend\n\n  function emptyNodeAt(elm) {\n    return new _vnode__WEBPACK_IMPORTED_MODULE_1__[\"VNode\"](nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)\n  }\n\n  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {\n    let i = vnode.data\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i)) {\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i = i.hook) && Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i = i.init)) {\n        i(vnode, false /* hydrating */)\n      }\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(vnode.componentInstance)) {\n        initComponent(vnode, insertedVnodeQueue)\n        insert(parentElm, vnode.elm, refElm);\n        return true\n      }\n    }\n    \n  }\n  function isPatchable (vnode) {\n    while (vnode.componentInstance) {\n      vnode = vnode.componentInstance._vnode\n    }\n    return Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(vnode.tag)\n  }\n\n  function initComponent(vnode, insertedVnodeQueue) {\n    vnode.elm = vnode.componentInstance.$el\n    if (isPatchable(vnode)) {\n      invokeCreateHooks(vnode, insertedVnodeQueue);\n    }\n  }\n\n  function createElm(\n    vnode,\n    insertedVnodeQueue,\n    parentElm,\n    refElm,\n    nested,\n    ownerArray,\n    index\n  ) {\n    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {\n      return\n    }\n    const data = vnode.data\n    const children = vnode.children\n    const tag = vnode.tag\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(tag)) {\n      vnode.elm = nodeOps.createElement(tag, vnode)\n\n      createChildren(vnode, children, insertedVnodeQueue)\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(data)) {\n        invokeCreateHooks(vnode, insertedVnodeQueue)\n      }\n      insert(parentElm, vnode.elm, refElm)\n    } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isTrue\"])(vnode.isComment)) {\n      vnode.elm = nodeOps.createComment(vnode.text)\n      insert(parentElm, vnode.elm, refElm)\n    } else {\n      vnode.elm = nodeOps.createTextNode(vnode.text)\n      insert(parentElm, vnode.elm, refElm)\n    }\n    \n  }\n\n  function invokeCreateHooks (vnode, insertedVnodeQueue) {\n    let i\n    // for (let i = 0; i < cbs.create.length; ++i) {\n    //   cbs.create[i](emptyNode, vnode)\n    // }\n    i = vnode.data.hook // Reuse variable\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i)) {\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i.create)) i.create(emptyNode, vnode)\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(i.insert)) insertedVnodeQueue.push(vnode)\n    }\n  }\n\n  function createChildren(vnode, children, insertedVnodeQueue) {\n    if (Array.isArray(children)) {\n      for (let i = 0; i < children.length; ++i) {\n        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)\n      }\n    } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isPrimitive\"])(vnode.text)) {\n      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)))\n    }\n  }\n\n  function insert(parentElm, elm, ref) {\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(parentElm)) {\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(ref)) {\n        if (ref.parentNode === parentElm) {\n          nodeOps.insertBefore(parentElm, elm, ref)\n        }\n      } else {\n        nodeOps.appendChild(parentElm, elm)\n      }\n    }\n  }\n  function invokeInsertHook (vnode, queue, initial) {\n    // delay insert hooks for component root nodes, invoke them after the\n    // element is really inserted\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isTrue\"])(initial) && Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(vnode.parent)) {\n      vnode.parent.data.pendingInsert = queue\n    } else {\n      for (let i = 0; i < queue.length; ++i) {\n        queue[i].data.hook.insert(queue[i])\n      }\n    }\n  }\n  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {\n    for (; startIdx <= endIdx; ++startIdx) {\n      const ch = vnodes[startIdx]\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(ch)) {\n\n        removeNode(ch.elm)\n      }\n    }\n  }\n  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {\n    for (; startIdx <= endIdx; ++startIdx) {\n      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx)\n    }\n  }\n  function removeNode (el) {\n    const parent = nodeOps.parentNode(el)\n    // element may have already been removed due to v-html / v-text\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(parent)) {\n      nodeOps.removeChild(parent, el)\n    }\n  }\n  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {\n    if (oldVnode === vnode) {\n      return\n    }\n    const elm = vnode.elm = oldVnode.elm\n\n    const oldCh = oldVnode.children\n    const ch = vnode.children\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isUndef\"])(vnode.text)) {\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(oldCh) && Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(ch)) {\n        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)\n      } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(ch)) {\n        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(oldVnode.text)) nodeOps.setTextContent(elm, '')\n        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)\n      } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(oldCh)) {\n        removeVnodes(elm, oldCh, 0, oldCh.length - 1)\n      } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(oldVnode.text)) {\n        nodeOps.setTextContent(elm, '')\n      }\n    } else if (oldVnode.text !== vnode.text) {\n      nodeOps.setTextContent(elm, vnode.text)\n    }\n  }\n  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly){\n    let oldStartIdx = 0\n    let newStartIdx = 0\n    let oldEndIdx = oldCh.length - 1\n    let oldStartVnode = oldCh[0]\n    let oldEndVnode = oldCh[oldEndIdx]\n    let newEndIdx = newCh.length - 1\n    let newStartVnode = newCh[0]\n    let newEndVnode = newCh[newEndIdx]\n    let oldKeyToIdx, idxInOld, vnodeToMove, refElm\n    const canMove = !removeOnly\n\n    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isUndef\"])(oldStartVnode)) {\n        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left\n      } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isUndef\"])(oldEndVnode)) {\n        oldEndVnode = oldCh[--oldEndIdx]\n      } else if (sameVnode(oldStartVnode, newStartVnode)) {\n        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)\n        oldStartVnode = oldCh[++oldStartIdx]\n        newStartVnode = newCh[++newStartIdx]\n      } else if (sameVnode(oldEndVnode, newEndVnode)) {\n        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)\n        oldEndVnode = oldCh[--oldEndIdx]\n        newEndVnode = newCh[--newEndIdx]\n      } else if (sameVnode(oldStartVnode, newEndVnode)) {\n        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)\n        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))\n        oldStartVnode = oldCh[++oldStartIdx]\n        newEndVnode = newCh[--newEndIdx]\n      } else if (sameVnode(oldEndVnode, newStartVnode)) {\n        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)\n        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)\n        oldEndVnode = oldCh[--oldEndIdx]\n        newStartVnode = newCh[++oldStartIdx]\n      } else {\n\n      }\n    }\n    if (oldStartIdx > oldEndIdx) {\n      refElm = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isUndef\"])(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm\n      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)\n    } else if (newStartIdx > newEndIdx) {\n      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)\n    }\n  }\n  return function path(oldVnode, vnode, hydrating, removeOnly) {\n    const insertedVnodeQueue = []\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isUndef\"])(oldVnode)) {\n      createElm(vnode, insertedVnodeQueue);\n    } else {\n      const isRealElement = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(oldVnode.nodeType)\n      if (!isRealElement && sameVnode(oldVnode, vnode)) {\n        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)\n      } else {\n        if (isRealElement) {\n\n\n          oldVnode = emptyNodeAt(oldVnode)\n        }\n\n        const oldElm = oldVnode.elm\n        const parentElm = nodeOps.parentNode(oldElm)\n\n        createElm(\n          vnode,\n          insertedVnodeQueue,\n          parentElm,\n          nodeOps.nextSibling(oldElm)\n        )\n        \n        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"isDef\"])(parentElm)) {\n          removeVnodes(parentElm, [oldVnode], 0, 0)\n        }\n      }\n    }\n    invokeInsertHook(vnode, insertedVnodeQueue, false);\n    return vnode.elm\n  }\n}\n\n//# sourceURL=webpack:///./src/vdom/patch.js?");

/***/ }),

/***/ "./src/vdom/vnode.js":
/*!***************************!*\
  !*** ./src/vdom/vnode.js ***!
  \***************************/
/*! exports provided: VNode, createEmptyVNode, createTextVNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VNode\", function() { return VNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEmptyVNode\", function() { return createEmptyVNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTextVNode\", function() { return createTextVNode; });\nclass VNode{\n  constructor(tag, data, children, text, elm, context, componentOptions, asyncFactory) {\n    this.tag = tag\n    this.data = data\n    this.children = children\n    this.text = text\n    this.elm = elm\n    this.ns = undefined\n    this.context = context\n    this.fnContext = undefined\n    this.fnOptions = undefined\n    this.fnScopeId = undefined\n    this.key = data && data.key\n    this.componentOptions = componentOptions\n    this.componentInstance = undefined\n    this.parent = undefined\n    this.raw = false\n    this.isStatic = false\n    this.isRootInsert = true\n    this.isComment = false\n    this.isCloned = false\n    this.isOnce = false\n    this.asyncFactory = asyncFactory\n    this.asyncMeta = undefined\n    this.isAsyncPlaceholder = false\n  }\n}\n\n\nfunction createEmptyVNode(text = '') {\n  const node = new VNode()\n  node.text = text\n  node.isComment = true\n  return node\n}\n\nfunction createTextVNode(val) {\n  return new VNode(undefined, undefined, undefined, String(val))\n}\n\n//# sourceURL=webpack:///./src/vdom/vnode.js?");

/***/ }),

/***/ "./util/basic.js":
/*!***********************!*\
  !*** ./util/basic.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar LIFECYCLE_HOOKS = [\n  'beforeCreate',\n  'created',\n  'beforeMount',\n  'mounted',\n  'beforeUpdate',\n  'updated',\n  'beforeDestroy',\n  'destroyed',\n  'activated',\n  'deactivated',\n  'errorCaptured'\n];\n\nlet strats = {}\n/**\n * Hooks and props are merged as arrays.\n */\nfunction mergeHook (\n  parentVal,\n  childVal\n) {\n  return childVal\n    ? parentVal\n      ? parentVal.concat(childVal)\n      : Array.isArray(childVal)\n        ? childVal\n        : [childVal]\n    : parentVal\n}\n\nLIFECYCLE_HOOKS.forEach(function (hook) {\n  strats[hook] = mergeHook;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (strats);\n\n//# sourceURL=webpack:///./util/basic.js?");

/***/ }),

/***/ "./util/constants.js":
/*!***************************!*\
  !*** ./util/constants.js ***!
  \***************************/
/*! exports provided: SSR_ATTR, ASSET_TYPES, LIFECYCLE_HOOKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SSR_ATTR\", function() { return SSR_ATTR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ASSET_TYPES\", function() { return ASSET_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIFECYCLE_HOOKS\", function() { return LIFECYCLE_HOOKS; });\nconst SSR_ATTR = 'data-server-rendered'\n\nconst ASSET_TYPES = [\n  'component',\n  'directive',\n  'filter'\n]\n\nconst LIFECYCLE_HOOKS = [\n  'beforeCreate',\n  'created',\n  'beforeMount',\n  'mounted',\n  'beforeUpdate',\n  'updated',\n  'beforeDestroy',\n  'destroyed',\n  'activated',\n  'deactivated',\n  'errorCaptured'\n]\n\n\n//# sourceURL=webpack:///./util/constants.js?");

/***/ }),

/***/ "./util/element.js":
/*!*************************!*\
  !*** ./util/element.js ***!
  \*************************/
/*! exports provided: isReservedTag, isHTMLTag, isSVG, isTextInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isReservedTag\", function() { return isReservedTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLTag\", function() { return isHTMLTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSVG\", function() { return isSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTextInputType\", function() { return isTextInputType; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./util/index.js\");\n\n\nconst isReservedTag = (tag) => {\n  return isHTMLTag(tag) || isSVG(tag)\n}\n\nconst isHTMLTag = Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"makeMap\"])(\n  'html,body,base,head,link,meta,style,title,' +\n  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +\n  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +\n  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +\n  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +\n  'embed,object,param,source,canvas,script,noscript,del,ins,' +\n  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +\n  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +\n  'output,progress,select,textarea,' +\n  'details,dialog,menu,menuitem,summary,' +\n  'content,element,shadow,template,blockquote,iframe,tfoot'\n)\n\n// this map is intentionally selective, only covering SVG elements that may\n// contain child elements.\nconst isSVG = Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"makeMap\"])(\n  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +\n  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +\n  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',\n  true\n)\n\nconst isTextInputType = Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"makeMap\"])('text,number,password,search,email,tel,url')\n\n\n//# sourceURL=webpack:///./util/element.js?");

/***/ }),

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! exports provided: mergeOptions, hasOwn, query, isPrimitive, makeMap, noop, isUndef, isDef, isTrue, isFalse, isPlainObject, isObject, validateComponentName, isBuiltInTag, extend, toString, toNumber, def, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeOptions\", function() { return mergeOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasOwn\", function() { return hasOwn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return query; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPrimitive\", function() { return isPrimitive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeMap\", function() { return makeMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return noop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUndef\", function() { return isUndef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDef\", function() { return isDef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTrue\", function() { return isTrue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFalse\", function() { return isFalse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPlainObject\", function() { return isPlainObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateComponentName\", function() { return validateComponentName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBuiltInTag\", function() { return isBuiltInTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toString\", function() { return toString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toNumber\", function() { return toNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"def\", function() { return def; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ \"./util/basic.js\");\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ \"./util/element.js\");\n\n\nfunction mergeOptions (parent, child, vm) {\n  const options = {}\n  let key \n  for (key in parent) {\n    mergeField(key)\n  }\n\n  for (key in child) {\n    if (!hasOwn(parent, key)) {\n      mergeField(key)\n    }\n  }\n  function mergeField (key) {\n    const strat = _basic__WEBPACK_IMPORTED_MODULE_0__[\"default\"][key] || defaultStrat\n    options[key] = strat(parent[key], child[key], vm, key)\n  }\n  return options\n}\n\nconst defaultStrat = function (parentVal, childVal) {\n  return childVal === undefined\n    ? parentVal\n    : childVal\n}\n\nconst hasOwnProperty = Object.prototype.hasOwnProperty\nconst hasOwn = function (obj, key) {\n  return hasOwnProperty.call(obj, key)\n}\n\n\nfunction query(el) {\n  if (typeof el === 'string') {\n    const selected = document.querySelector(el)\n    if (!selected) {\n      return document.createElement('div')\n    }\n    return selected\n  } else {\n    return el\n  }\n}\n\nfunction isPrimitive(value) {\n  return (typeof value === 'string' || typeof value === 'boolean' ||  typeof value === 'number' ||\n  typeof value === 'symbol')\n}\n\nfunction makeMap (\n  str,\n  expectsLowerCase\n) {\n  const map = Object.create(null)\n  const list = str.split(',')\n  for (let i = 0; i < list.length; i++) {\n    map[list[i]] = true\n  }\n  return expectsLowerCase\n    ? val => map[val.toLowerCase()]\n    : val => map[val]\n}\n\nfunction noop () {}\n\nfunction isUndef (v) {\n  return v === undefined || v === null\n}\n\nfunction isDef (v) {\n  return v !== undefined && v !== null\n}\n\nfunction isTrue (v) {\n  return v === true\n}\n\nfunction isFalse (v) {\n  return v === false\n}\n\nconst _toString = Object.prototype.toString\n\nfunction isPlainObject(obj) {\n  return _toString.call(obj) === '[object Object]'\n}\n\nfunction isObject(obj) {\n  return  obj !== null && typeof obj === 'object'\n}\n\nfunction validateComponentName (name) {\n  if (!/^[a-zA-Z][\\w-]*$/.test(name)) {\n    console.warn(\n      'Invalid component name: \"' + name + '\". Component names ' +\n      'can only contain alphanumeric characters and the hyphen, ' +\n      'and must start with a letter.'\n    )\n  }\n  if (isBuiltInTag(name) || Object(_element__WEBPACK_IMPORTED_MODULE_1__[\"isReservedTag\"])(name)) {\n    console.warn(\n      'Do not use built-in or reserved HTML elements as component ' +\n      'id: ' + name\n    )\n  }\n}\n\nconst isBuiltInTag = makeMap('slot,component', true)\n\nfunction extend (to, _from) {\n  for (const key in _from) {\n    to[key] = _from[key]\n  }\n  return to\n}\n\nfunction toString (val) {\n  return val == null\n    ? ''\n    : typeof val === 'object'\n      ? JSON.stringify(val, null, 2)\n      : String(val)\n}\n\nfunction toNumber (val) {\n  const n = parseFloat(val)\n  return isNaN(n) ? val : n\n}\n\nfunction def (obj, key, val, enumerable) {\n  Object.defineProperty(obj, key, {\n    value: val,\n    enumerable: !!enumerable,\n    writable: true,\n    configurable: true\n  })\n}\n\nfunction remove (arr, item) {\n  if (arr.length) {\n    const index = arr.indexOf(item)\n    if (index > -1) {\n      return arr.splice(index, 1)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./util/index.js?");

/***/ }),

/***/ "./util/next-tick.js":
/*!***************************!*\
  !*** ./util/next-tick.js ***!
  \***************************/
/*! exports provided: nextTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextTick\", function() { return nextTick; });\nconst callbacks = []\nlet pending = false\nfunction flushCallbacks () {\n  pending = false\n  const copies = callbacks.slice(0)\n  callbacks.length = 0\n  for (let i = 0; i < copies.length; i++) {\n    copies[i]()\n  }\n}\n\nlet microTimerFunc\nlet macroTimerFunc\nlet useMacroTask = false\n\nif (typeof setImmediate !== 'undefined') {\n  macroTimerFunc = () => {\n    setImmediate(flushCallbacks)\n  }\n} else {\n  macroTimerFunc = () => {\n    setTimeout(flushCallbacks, 0)\n  }\n}\n\nif (typeof Promise !== 'undefined') {\n  const p = Promise.resolve()\n  microTimerFunc = () => {\n    p.then(flushCallbacks)\n  }\n} else {\n  microTimerFunc = macroTimerFunc\n}\n\n\nfunction nextTick(cb, ctx) {\n  callbacks.push(() => {\n    if (cb) {\n      try {\n        cb.call(ctx)\n      } catch (error) {\n        console.error(error, 'nextTick')\n      }\n    } else if (_resolve) {\n      _resolve(ctx)\n    }\n  })\n  if (!pending) {\n    pending = true\n    if (useMacroTask) {\n      macroTimerFunc()\n    } else {\n      microTimerFunc()\n    }\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ \"./node_modules/timers-browserify/main.js\").setImmediate))\n\n//# sourceURL=webpack:///./util/next-tick.js?");

/***/ }),

/***/ "./util/options.js":
/*!*************************!*\
  !*** ./util/options.js ***!
  \*************************/
/*! exports provided: resolveAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveAsset\", function() { return resolveAsset; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./util/index.js\");\n\n\nfunction resolveAsset (options, type, id) {\n  if (typeof id !== 'string') {\n    return\n  }\n\n  const assets = options[type]\n\n  if (Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(assets, id)) return assets[id]\n}\n\n//# sourceURL=webpack:///./util/options.js?");

/***/ })

/******/ });