webpackHotUpdate("static/development/pages/chart1.js",{

/***/ "./components/chart1.js":
/*!******************************!*\
  !*** ./components/chart1.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var _lib_chartFormatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/chartFormatters */ \"./lib/chartFormatters.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/matt/workspace/massdphcovid/components/chart1.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* \n *  Copyright 2020 <Matthew Leahy>\n *  \n *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), \n *  to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, \n *  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *  \n *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *  \n *  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \n *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \n *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER \n *  DEALINGS IN THE SOFTWARE.\n */\n\n\n\nvar _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n\nvar formatXAxis = function formatXAxis(tickItem) {\n  return moment(tickItem).format('D MMM');\n};\n\nvar formatTooltip = function formatTooltip(value, name, props) {\n  // console.log(`${value}\\t${_.startCase(name)}`);\n  return [value, _.startCase(name)];\n};\n\nvar Chart1 = function Chart1(_ref) {\n  var data = _ref.data,\n      scale = _ref.scale;\n  var yScale = 'auto';\n  var yTicks = null;\n\n  if (scale % 2 != 0) {\n    yScale = 'log'; //Roll up data\n\n    var rollUp = [];\n    var maxKey = 'dayMax';\n    data.map(function (values) {\n      rollUp.push({\n        maxKey: _.max([values.tests, values.cases, values.deaths, values.hospitalizations])\n      });\n    });\n    yTicks = Object(_lib_chartFormatters__WEBPACK_IMPORTED_MODULE_2__[\"GetLogTicks\"])(rollUp, maxKey);\n  }\n\n  return __jsx(\"div\", {\n    style: {\n      width: '100%',\n      height: 600\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"ResponsiveContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"LineChart\"], {\n    width: 800,\n    height: 300,\n    data: data,\n    margin: {\n      top: 5,\n      right: 30,\n      left: 20,\n      bottom: 5\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    type: \"monotone\",\n    dataKey: \"tests\",\n    stroke: \"#8884d8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 21\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    type: \"monotone\",\n    dataKey: \"cases\",\n    stroke: \"#FF0000\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    type: \"monotone\",\n    dataKey: \"deaths\",\n    stroke: \"#000000\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    type: \"monotone\",\n    dataKey: \"hospitalizations\",\n    stroke: \"#00FF00\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"XAxis\"], {\n    dataKey: \"date\",\n    tickFormatter: formatXAxis,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"YAxis\"], {\n    type: \"number\",\n    domain: ['auto', 'auto'],\n    scale: yScale,\n    ticks: yTicks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Brush\"], {\n    dataKey: \"date\",\n    tickFormatter: formatXAxis,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], {\n    labelFormatter: formatXAxis,\n    formatter: formatTooltip,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }))));\n};\n\n_c = Chart1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart1);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart1\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0MS5qcz81ZTEwIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwibW9tZW50IiwiZm9ybWF0WEF4aXMiLCJ0aWNrSXRlbSIsImZvcm1hdCIsImZvcm1hdFRvb2x0aXAiLCJ2YWx1ZSIsIm5hbWUiLCJwcm9wcyIsInN0YXJ0Q2FzZSIsIkNoYXJ0MSIsImRhdGEiLCJzY2FsZSIsInlTY2FsZSIsInlUaWNrcyIsInJvbGxVcCIsIm1heEtleSIsIm1hcCIsInZhbHVlcyIsInB1c2giLCJtYXgiLCJ0ZXN0cyIsImNhc2VzIiwiZGVhdGhzIiwiaG9zcGl0YWxpemF0aW9ucyIsIkdldExvZ1RpY2tzIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsK0NBQUQsQ0FBakI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLCtDQUFELENBQXRCOztBQUNBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBYztBQUM5QixTQUFPRixNQUFNLENBQUNFLFFBQUQsQ0FBTixDQUFpQkMsTUFBakIsQ0FBd0IsT0FBeEIsQ0FBUDtBQUNILENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBY0MsS0FBZCxFQUF3QjtBQUMxQztBQUNBLFNBQU8sQ0FBQ0YsS0FBRCxFQUFRUCxDQUFDLENBQUNVLFNBQUYsQ0FBWUYsSUFBWixDQUFSLENBQVA7QUFDSCxDQUhEOztBQUtBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXFCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNoQyxN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SixFQVNJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBREosQ0FESixDQURKO0FBaUJILENBL0JEOztLQUFNSyxNO0FBaUNTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2hhcnQxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gKiAgQ29weXJpZ2h0IDIwMjAgPE1hdHRoZXcgTGVhaHk+XG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCBcbiAqICB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBcbiAqICBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIFxuICogIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBCcnVzaCwgTGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIFJlc3BvbnNpdmVDb250YWluZXIsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IEdldExvZ1RpY2tzIH0gZnJvbSAnLi4vbGliL2NoYXJ0Rm9ybWF0dGVycyc7XG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxuY29uc3QgZm9ybWF0WEF4aXMgPSAodGlja0l0ZW0pID0+IHtcbiAgICByZXR1cm4gbW9tZW50KHRpY2tJdGVtKS5mb3JtYXQoJ0QgTU1NJyk7XG59XG5cbmNvbnN0IGZvcm1hdFRvb2x0aXAgPSAodmFsdWUsIG5hbWUsIHByb3BzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYCR7dmFsdWV9XFx0JHtfLnN0YXJ0Q2FzZShuYW1lKX1gKTtcbiAgICByZXR1cm4gW3ZhbHVlLCBfLnN0YXJ0Q2FzZShuYW1lKV07XG59XG5cbmNvbnN0IENoYXJ0MSA9ICh7IGRhdGEsIHNjYWxlIH0pID0+IHtcbiAgICBsZXQgeVNjYWxlID0gJ2F1dG8nO1xuICAgIGxldCB5VGlja3MgPSBudWxsO1xuICAgIGlmIChzY2FsZSAlIDIgIT0gMCkge1xuICAgICAgICB5U2NhbGUgPSAnbG9nJztcbiAgICAgICAgLy9Sb2xsIHVwIGRhdGFcbiAgICAgICAgY29uc3Qgcm9sbFVwID0gW107XG4gICAgICAgIGNvbnN0IG1heEtleSA9ICdkYXlNYXgnO1xuICAgICAgICBkYXRhLm1hcCgodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICByb2xsVXAucHVzaCh7IG1heEtleTogXy5tYXgoW3ZhbHVlcy50ZXN0cywgdmFsdWVzLmNhc2VzLCB2YWx1ZXMuZGVhdGhzLCB2YWx1ZXMuaG9zcGl0YWxpemF0aW9uc10pIH0pO1xuICAgICAgICB9KVxuICAgICAgICB5VGlja3MgPSBHZXRMb2dUaWNrcyhyb2xsVXAsIG1heEtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgd2lkdGg9ezgwMH0gaGVpZ2h0PXszMDB9IGRhdGE9e2RhdGF9IG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAzMCwgbGVmdDogMjAsIGJvdHRvbTogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInRlc3RzXCIgc3Ryb2tlPVwiIzg4ODRkOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJjYXNlc1wiIHN0cm9rZT1cIiNGRjAwMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwiZGVhdGhzXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJob3NwaXRhbGl6YXRpb25zXCIgc3Ryb2tlPVwiIzAwRkYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwiZGF0ZVwiIHRpY2tGb3JtYXR0ZXI9e2Zvcm1hdFhBeGlzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8WUF4aXMgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WydhdXRvJywgJ2F1dG8nXX0gc2NhbGU9e3lTY2FsZX0gdGlja3M9e3lUaWNrc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJydXNoIGRhdGFLZXk9XCJkYXRlXCIgdGlja0Zvcm1hdHRlcj17Zm9ybWF0WEF4aXN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGxhYmVsRm9ybWF0dGVyPXtmb3JtYXRYQXhpc30gZm9ybWF0dGVyPXtmb3JtYXRUb29sdGlwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0MTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/chart1.js\n");

/***/ })

})