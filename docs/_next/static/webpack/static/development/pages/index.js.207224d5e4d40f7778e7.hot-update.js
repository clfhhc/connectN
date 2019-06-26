webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ConnectN/Board.tsx":
/*!*******************************************!*\
  !*** ./src/components/ConnectN/Board.tsx ***!
  \*******************************************/
/*! exports provided: playerCheckerStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerCheckerStyles", function() { return playerCheckerStyles; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/styleUtils */ "./src/utils/styleUtils.ts");

var _jsxFileName = "/Users/david.chen/Documents/projects/Nextjs_Ts_Eslint/src/components/ConnectN/Board.tsx";




var boardStylesOnColNum = function boardStylesOnColNum(colNum) {
  return {
    styles: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3912879270",
      dynamic: [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(80 * colNum), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(20), colNum, Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(2)],
      __self: this
    }, ".__jsx-style-dynamic-selector{max-width:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(80 * colNum), ";margin:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(20), " auto;box-sizing:border-box;display:grid;grid-template-columns:repeat(").concat(colNum, ",1fr);grid-gap:0;grid-auto-rows:auto;border:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), " solid black;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;}")),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3912879270", [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(80 * colNum), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(20), colNum, Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(2)]]])
  };
};

var cellStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "942825015",
    __self: undefined
  }, ".jsx-942825015{cursor:pointer;border:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(1), " solid lightgray;}")),
  className: "jsx-942825015"
};
var checkerStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "943097829",
    __self: undefined
  }, ".jsx-943097829{width:auto;padding-bottom:calc(100% - ".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(2 * 7), ");margin:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(5), ";border-radius:50%;border:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), " solid gray;}@media only screen and (max-width:400px){.jsx-943097829{padding-bottom:calc(100% - ").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(2 * 3), ");margin:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), ";border:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_3__["rem"])(1), " solid gray;}}")),
  className: "jsx-943097829"
};
var playerCheckerStyles = [{
  styles: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2099551365",
    __self: undefined
  }, ".jsx-2099551365{border-color:gray;background:yellow;}"),
  className: "jsx-2099551365"
}, {
  styles: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4072791683",
    __self: undefined
  }, ".jsx-4072791683{border-color:lightgray;background:red;}"),
  className: "jsx-4072791683"
}, {
  styles: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4155168077",
    __self: undefined
  }, ".jsx-4155168077{border-color:gray;background:skyblue;}"),
  className: "jsx-4155168077"
}, {
  styles: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "878509603",
    __self: undefined
  }, ".jsx-878509603{border-color:lightgray;background:pink;}"),
  className: "jsx-878509603"
}];

var Board = function Board(_ref) {
  var rowNum = _ref.rowNum,
      boards = _ref.boards,
      onClickOnCell = _ref.onClickOnCell;
  var colNum = boards[0].length;
  var boardStyles = boardStylesOnColNum(colNum);
  var cellGridPos = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (rowInd, colInd) {
    return {
      styles: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "726451075",
        dynamic: [rowNum - rowInd, colInd + 1],
        __self: this
      }, ".__jsx-style-dynamic-selector{grid-row:".concat(rowNum - rowInd, " / span 1;grid-column:").concat(colInd + 1, " / span 1;}")),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["726451075", [rowNum - rowInd, colInd + 1]]])
    };
  }, [rowNum]);
  var cellGridPosStyles = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(colNum), function (_c, colInd) {
      return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(rowNum), function (_r, rowInd) {
        return cellGridPos(rowInd, colInd);
      });
    });
  }, [colNum, rowNum, cellGridPos]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: boardStyles.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, boardStyles.styles, boards[0].map(function (_c, colInd) {
    return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(rowNum), function (_r, rowInd) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        // eslint-disable-next-line react/no-array-index-key
        key: "cell-".concat(colInd, "-").concat(rowInd),
        type: "button",
        className: "".concat(cellStyles.className, " ").concat(cellGridPosStyles[colInd][rowInd].className),
        onClick: onClickOnCell(colInd),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, cellGridPosStyles[colInd][rowInd].styles, cellStyles.styles, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "".concat(checkerStyles.className).concat(boards.reduce(function (result, _n, ind) {
          return boards[ind][colInd] & 1 << rowInd && " ".concat(playerCheckerStyles[ind].className) || result;
        }, '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, checkerStyles.styles, playerCheckerStyles.map(function (styles) {
        return styles.styles;
      })));
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ })

})
//# sourceMappingURL=index.js.207224d5e4d40f7778e7.hot-update.js.map