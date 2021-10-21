(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Carlos\\Documents\\GitHub\\reto-inicial\\pages\\index.tsx";


const Wallpaper = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "components_Navbar_Navbar_tsx-components_Sections_Motivacion_tsx-components_Uikit_tsx-componen-23ceeb").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Wallpaper */ "./components/Wallpaper.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/Wallpaper */ "./components/Wallpaper.tsx")],
    modules: ["index.tsx -> " + '../components/Wallpaper']
  }
});
const Navbar = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "components_Navbar_Navbar_tsx-components_Sections_Motivacion_tsx-components_Uikit_tsx-componen-23ceeb").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.tsx")],
    modules: ["index.tsx -> " + '../components/Navbar/Navbar']
  }
});
const Motivacion = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "components_Navbar_Navbar_tsx-components_Sections_Motivacion_tsx-components_Uikit_tsx-componen-23ceeb").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Sections/Motivacion */ "./components/Sections/Motivacion.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/Sections/Motivacion */ "./components/Sections/Motivacion.tsx")],
    modules: ["index.tsx -> " + '../components/Sections/Motivacion']
  }
});

const myApp = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wallpaper, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Navbar, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Motivacion, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 1
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myApp);

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBYjtBQUFBO0FBQUEsRUFBdEI7QUFDQSxNQUFNcUMsVUFBVSxHQUFHckMsbURBQU8sQ0FBQyxNQUFLLGtSQUFOO0FBQUE7QUFBQSx3Q0FBYSwrRUFBYjtBQUFBLGdDQUFhLG1DQUFiO0FBQUE7QUFBQSxFQUExQjs7QUFFQSxNQUFNc0MsS0FBSyxHQUFHLG1CQUNkO0FBQUEsMEJBQ0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsMkJBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBOztBQVNBLGlFQUFlQSxLQUFmOzs7Ozs7Ozs7O0FDZEEsdUhBQXFEOzs7Ozs7Ozs7Ozs7QUNBckQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXRvLWluaWNpYWwvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9yZXRvLWluaWNpYWwvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcmV0by1pbmljaWFsLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9yZXRvLWluaWNpYWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiIiwid2VicGFjazovL3JldG8taW5pY2lhbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmV0by1pbmljaWFsL2V4dGVybmFsIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiIiwid2VicGFjazovL3JldG8taW5pY2lhbC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSlcbiAgICA7XG59XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAoeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSk9PntcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zXG4gICAgICAgIDtcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmR5bmFtaWNPcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgY29uc3Qgc3VzcGVuc2VPcHRpb25zID0gbG9hZGFibGVPcHRpb25zO1xuICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMpIHtcbiAgICAgICAgLy8gRXJyb3IgaWYgcmVhY3Qgcm9vdCBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGFkZCBlcnJvciBkb2Mgd2hlbiB0aGlzIGZlYXR1cmUgaXMgc3RhYmxlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIHJldHVybiBsb2FkYWJsZUZuKHN1c3BlbnNlT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICAgICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCIsImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFdhbGxwYXBlciA9IGR5bmFtaWMoKCk9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvV2FsbHBhcGVyJykpXHJcbmNvbnN0IE5hdmJhciA9IGR5bmFtaWMoKCk9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcicpKVxyXG5jb25zdCBNb3RpdmFjaW9uID0gZHluYW1pYygoKT0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9TZWN0aW9ucy9Nb3RpdmFjaW9uJykpO1xyXG5cclxuY29uc3QgbXlBcHAgPSAoKSA9PlxyXG48ZGl2PlxyXG4gICAgPFdhbGxwYXBlci8+XHJcbiAgICA8TmF2YmFyLz5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPE1vdGl2YWNpb24vPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXlBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5vU1NSIiwiZGVmYXVsdCIsImR5bmFtaWMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJzdXNwZW5zZU9wdGlvbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMiLCJfX05FWFRfUkVBQ1RfUk9PVCIsInN1c3BlbnNlIiwiRXJyb3IiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciIsIldhbGxwYXBlciIsIk5hdmJhciIsIk1vdGl2YWNpb24iLCJteUFwcCJdLCJzb3VyY2VSb290IjoiIn0=