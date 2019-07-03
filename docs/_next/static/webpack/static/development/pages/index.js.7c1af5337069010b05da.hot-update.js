webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Head */ "./src/components/Head/index.tsx");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _src_components_ConnectN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/ConnectN */ "./src/components/ConnectN/index.tsx");
var _jsxFileName = "/Users/david.chen/Documents/projects/Nextjs_Ts_Eslint/pages/index.tsx";





var Page = function Page() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Connect N",
    themeColor: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_ConnectN__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "About"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

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

/***/ }),

/***/ "./src/components/ConnectN/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/ConnectN/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-nan */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/index */ "./src/models/index.tsx");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Board */ "./src/components/ConnectN/Board.tsx");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/game */ "./src/models/game.ts");
/* harmony import */ var _utils_connectN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/connectN */ "./src/utils/connectN.ts");
/* harmony import */ var _utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/styleUtils */ "./src/utils/styleUtils.ts");



var _jsxFileName = "/Users/david.chen/Documents/projects/Nextjs_Ts_Eslint/src/components/ConnectN/index.tsx";







var Settings;

(function (Settings) {
  Settings["CHANGE_RULES"] = "CHANGE_RULES";
  Settings["CHANGE_PLAYERS"] = "CHANGE_PLAYERS";
})(Settings || (Settings = {}));

var titleStylesOnN = function titleStylesOnN(setting, winRule) {
  return {
    styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3700811658",
      dynamic: [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(40), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(36), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Rules' : "Connect ".concat(winRule), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Rules' : "Change Rules"],
      __self: this
    }, ".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(40), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(36), ";border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;cursor:pointer;}.__jsx-style-dynamic-selector::after{content:'").concat(setting === Settings.CHANGE_RULES ? 'Rules' : "Connect ".concat(winRule), "';}.__jsx-style-dynamic-selector:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;}.__jsx-style-dynamic-selector:hover::after{content:'").concat(setting === Settings.CHANGE_RULES ? 'Rules' : "Change Rules", "';}")),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["3700811658", [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(40), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(36), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Rules' : "Connect ".concat(winRule), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Rules' : "Change Rules"]]])
  };
};

var bannerStylesOnBanner = function bannerStylesOnBanner(banner) {
  return {
    styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "2746256327",
      dynamic: [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), banner, Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1)],
      __self: this
    }, ".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), ";cursor:pointer;border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;}.__jsx-style-dynamic-selector::after{content:\"").concat(banner, "\";}.__jsx-style-dynamic-selector:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;}.__jsx-style-dynamic-selector:hover::after{content:'Restart Game';}")),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2746256327", [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), banner, Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1)]]])
  };
};

var legendStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "95139721",
    __self: undefined
  }, ".jsx-95139721{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), ";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;}.jsx-95139721:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;}")),
  className: "jsx-95139721"
};
var legendLabelStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4124586048",
    __self: undefined
  }, ".jsx-4124586048{margin:0 ".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(10), ";display:inline-block;}")),
  className: "jsx-4124586048"
};
var legendColorStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3166081097",
    __self: undefined
  }, ".jsx-3166081097{display:inline-block;border:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid lightgray;border-radius:50%;margin:0 ").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(10), ";width:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(15), ";height:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(15), ";}")),
  className: "jsx-3166081097"
};
var inputStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2515912256",
    __self: undefined
  }, ".jsx-2515912256{display:block;text-align:center;font-size:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(16), ";outline:none;margin:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), " auto;max-width:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(300), ";width:100%;}")),
  className: "jsx-2515912256"
};

var ConnectN = function ConnectN() {
  var _useReducerContext = Object(_models_index__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      state = _useReducerContext.state,
      dispatch = _useReducerContext.dispatch;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(_models_game__WEBPACK_IMPORTED_MODULE_7__["reducer"], _models_game__WEBPACK_IMPORTED_MODULE_7__["inititalState"]),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      gameState = _useReducer2[0],
      gameDispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      setting = _useState2[0],
      updateSetting = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      inputText = _useState4[0],
      changeInputText = _useState4[1];

  var _state$setup = state.setup,
      fullBoard = _state$setup.fullBoard,
      boardSetup = _state$setup.boardSetup,
      next = _state$setup.next,
      names = _state$setup.names,
      rowNum = _state$setup.rowNum,
      checkAgainst = _state$setup.checkAgainst,
      winRule = _state$setup.winRule;
  var gameRecord = gameState.record;
  var restartGame = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    gameDispatch({
      type: 'updateGameRecord',
      payload: Object(_utils_connectN__WEBPACK_IMPORTED_MODULE_8__["resetGame"])(gameRecord, fullBoard, boardSetup, next)
    });
  }, [gameRecord, fullBoard, boardSetup, next]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    restartGame();
  }, [state.setup]);
  var titleStyles = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return titleStylesOnN(setting, winRule);
  }, [setting, winRule]);
  var bannerStyles = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return bannerStylesOnBanner(Object(_utils_connectN__WEBPACK_IMPORTED_MODULE_8__["getBanner"])(gameRecord, names));
  }, [gameRecord, names]);
  var clearSetting = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    updateSetting(null);
    changeInputText('');
  }, [updateSetting, changeInputText]);
  var focusInput = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (node) {
    if (node) node.focus();
  }, []);
  var handleClickOnCell = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (colInd) {
    return function () {
      if (setting) return;
      gameDispatch({
        type: 'updateGameRecord',
        payload: gameRecord.gameOver ? Object(_utils_connectN__WEBPACK_IMPORTED_MODULE_8__["resetGame"])(gameRecord, fullBoard, boardSetup, next) : Object(_utils_connectN__WEBPACK_IMPORTED_MODULE_8__["placeOnePiece"])({
          col: colInd,
          curRecord: gameRecord,
          fullBoard: fullBoard,
          checkAgainst: checkAgainst,
          next: next
        })
      });
    };
  }, [gameDispatch, _utils_connectN__WEBPACK_IMPORTED_MODULE_8__["placeOnePiece"], gameRecord, fullBoard, checkAgainst, next, setting]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "button",
    className: titleStyles.className,
    onClick: function onClick() {
      if (setting !== Settings.CHANGE_RULES) {
        updateSetting(Settings.CHANGE_RULES);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, titleStyles.styles)), setting === Settings.CHANGE_RULES ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    ref: focusInput,
    className: inputStyles.className,
    type: "text",
    placeholder: "[column],[row],[number]",
    value: inputText,
    onChange: function onChange(e) {
      return changeInputText(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.which === 13) {
        try {
          var inputArray = inputText.split(',').map(function (text) {
            var num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(text.trim(), 10);

            if (_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default()(num)) throw new Error();
            return num;
          });
          if (inputArray.length !== 3) throw new Error();
          dispatch({
            type: 'changeRules',
            payload: {
              rowNum: inputArray[1],
              colNum: inputArray[0],
              winRule: inputArray[2]
            }
          });
        } catch (err) {
          console.log('invalid input');
        }

        clearSetting();
      } else if (e.keyCode === 27) {
        clearSetting();
      }
    },
    onBlur: function onBlur() {
      clearSetting();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    className: bannerStyles.className,
    type: "button",
    onClick: function onClick() {
      return restartGame();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, bannerStyles.styles), inputStyles.styles, setting === Settings.CHANGE_PLAYERS ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    ref: focusInput,
    className: inputStyles.className,
    type: "text",
    placeholder: "up to 4 player's names with comma in between",
    value: inputText,
    onChange: function onChange(e) {
      return changeInputText(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.which === 13) {
        try {
          var inputArray = inputText.split(',').map(function (text) {
            return text.trim();
          });
          if (inputArray.length < 1 || inputArray.length > 4) throw new Error();
          dispatch({
            type: 'changePlayers',
            payload: inputArray
          });
        } catch (err) {
          console.log('invalid input');
        }

        clearSetting();
      } else if (e.keyCode === 27) {
        clearSetting();
      }
    },
    onBlur: function onBlur() {
      clearSetting();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    className: legendStyles.className,
    type: "button",
    onClick: function onClick() {
      return updateSetting(Settings.CHANGE_PLAYERS);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, legendStyles.styles, names.map(function (n, ind) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: legendLabelStyles.className,
      key: "legend-".concat(n),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, legendLabelStyles.styles, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "".concat(legendColorStyles.className, "\n                ").concat(_Board__WEBPACK_IMPORTED_MODULE_6__["playerCheckerStyles"][ind].className),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, _Board__WEBPACK_IMPORTED_MODULE_6__["playerCheckerStyles"][ind].styles, legendColorStyles.styles), n);
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_6__["default"], {
    boards: gameRecord.boards,
    rowNum: rowNum,
    onClickOnCell: handleClickOnCell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConnectN);

/***/ }),

/***/ "./src/components/Link/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Link/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/david.chen/Documents/projects/Nextjs_Ts_Eslint/src/components/Link/index.tsx";




var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;

var PrefixedLink = function PrefixedLink(_ref) {
  var href = _ref.href,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? href : _ref$as,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    as: "".concat(linkPrefix).concat(as),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PrefixedLink);

/***/ })

})
//# sourceMappingURL=index.js.7c1af5337069010b05da.hot-update.js.map