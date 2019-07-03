webpackHotUpdate("static/development/pages/index.js",{

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
      id: "1144580068",
      dynamic: [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), banner, Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1)],
      __self: this
    }, ".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), ";cursor:pointer;border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;height:100%;}.__jsx-style-dynamic-selector::after{content:\"").concat(banner, "\";}.__jsx-style-dynamic-selector:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;}.__jsx-style-dynamic-selector:hover::after{content:'Restart Game';}")),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1144580068", [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), banner, Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1)]]])
  };
};

var legendStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1423670017",
    __self: undefined
  }, ".jsx-1423670017{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), ";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;height:100%;}.jsx-1423670017:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;}")),
  className: "jsx-1423670017"
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
    id: "168987365",
    __self: undefined
  }, ".jsx-168987365{display:inline-block;border:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid lightgray;border-radius:50%;margin:0 ").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(10), " 0 0;width:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(15), ";height:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(15), ";}")),
  className: "jsx-168987365"
};
var inputContainerStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1920883996",
    __self: undefined
  }, ".jsx-1920883996{height:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(25), ";}")),
  className: "jsx-1920883996"
};
var inputStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3055687915",
    __self: undefined
  }, ".jsx-3055687915{display:block;text-align:center;font-size:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(16), ";outline:none;margin:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(20), " auto;max-width:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(350), ";border:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid gray;height:100%;width:100%;}")),
  className: "jsx-3055687915"
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
    className: "jsx-1472192811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1472192811",
    __self: this
  }, "body{touch-action:manipulation;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9OZXh0anNfVHNfRXNsaW50L3NyYy9jb21wb25lbnRzL0Nvbm5lY3ROL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtS1MsQUFHdUMsMEJBQzVCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9OZXh0anNfVHNfRXNsaW50L3NyYy9jb21wb25lbnRzL0Nvbm5lY3ROL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuaW1wb3J0IHVzZVJlZHVjZXJDb250ZXh0IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XG5pbXBvcnQgQm9hcmQsIHsgcGxheWVyQ2hlY2tlclN0eWxlcyB9IGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IHsgaW5pdGl0YWxTdGF0ZSwgcmVkdWNlciB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lJztcbmltcG9ydCB7IHJlc2V0R2FtZSwgcGxhY2VPbmVQaWVjZSwgZ2V0QmFubmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29ubmVjdE4nO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGVVdGlscyc7XG5cbmVudW0gU2V0dGluZ3Mge1xuICBDSEFOR0VfUlVMRVMgPSAnQ0hBTkdFX1JVTEVTJyxcbiAgQ0hBTkdFX1BMQVlFUlMgPSAnQ0hBTkdFX1BMQVlFUlMnLFxufVxuXG5jb25zdCB0aXRsZVN0eWxlc09uTiA9IChzZXR0aW5nOiBTZXR0aW5ncyB8IG51bGwsIHdpblJ1bGU6IG51bWJlcikgPT4gY3NzLnJlc29sdmVgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogJHtyZW0oNDApfSBhdXRvO1xuICBmb250LXNpemU6ICR7cmVtKDM2KX07XG4gIGJvcmRlci10b3A6ICR7cmVtKDEpfSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogJHtyZW0oMSl9IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOjphZnRlciB7XG4gICAgY29udGVudDogJyR7c2V0dGluZyA9PT0gU2V0dGluZ3MuQ0hBTkdFX1JVTEVTID8gJ1J1bGVzJyA6IGBDb25uZWN0ICR7d2luUnVsZX1gfSc7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGJvcmRlci10b3A6ICR7cmVtKDEpfSBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAke3JlbSgxKX0gc29saWQgYmxhY2s7XG4gIH1cblxuICA6aG92ZXIgOjphZnRlciB7XG4gICAgY29udGVudDogJyR7c2V0dGluZyA9PT0gU2V0dGluZ3MuQ0hBTkdFX1JVTEVTID8gJ1J1bGVzJyA6IGBDaGFuZ2UgUnVsZXNgfSc7XG4gIH1cbmA7XG5cbmNvbnN0IGJhbm5lclN0eWxlc09uQmFubmVyID0gKGJhbm5lcjogc3RyaW5nKSA9PiBjc3MucmVzb2x2ZWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAke3JlbSgyMCl9IGF1dG87XG4gIGZvbnQtc2l6ZTogJHtyZW0oMjApfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wOiAke3JlbSgxKX0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206ICR7cmVtKDEpfSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiJHtiYW5uZXJ9XCI7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGJvcmRlci10b3A6ICR7cmVtKDEpfSBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAke3JlbSgxKX0gc29saWQgYmxhY2s7XG4gIH1cblxuICA6aG92ZXIgOjphZnRlciB7XG4gICAgY29udGVudDogJ1Jlc3RhcnQgR2FtZSc7XG4gIH1cbmA7XG5cbmNvbnN0IGxlZ2VuZFN0eWxlcyA9IGNzcy5yZXNvbHZlYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXJnaW46ICR7cmVtKDIwKX0gYXV0bztcbiAgZm9udC1zaXplOiAke3JlbSgyMCl9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wOiAke3JlbSgxKX0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206ICR7cmVtKDEpfSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIDpob3ZlciB7XG4gICAgYm9yZGVyLXRvcDogJHtyZW0oMSl9IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206ICR7cmVtKDEpfSBzb2xpZCBibGFjaztcbiAgfVxuYDtcblxuY29uc3QgbGVnZW5kTGFiZWxTdHlsZXMgPSBjc3MucmVzb2x2ZWBcbiAgbWFyZ2luOiAwICR7cmVtKDEwKX07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbmA7XG5cbmNvbnN0IGxlZ2VuZENvbG9yU3R5bGVzID0gY3NzLnJlc29sdmVgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAke3JlbSgxKX0gc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCAke3JlbSgxMCl9IDAgMDtcbiAgd2lkdGg6ICR7cmVtKDE1KX07XG4gIGhlaWdodDogJHtyZW0oMTUpfTtcbmA7XG5cbmNvbnN0IGlucHV0Q29udGFpbmVyU3R5bGVzID0gY3NzLnJlc29sdmVgXG4gIGhlaWdodDogJHtyZW0oMjUpfTtcbmA7XG5cbmNvbnN0IGlucHV0U3R5bGVzID0gY3NzLnJlc29sdmVgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogJHtyZW0oMTYpfTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAke3JlbSgyMCl9IGF1dG87XG4gIG1heC13aWR0aDogJHtyZW0oMzUwKX07XG4gIGJvcmRlcjogJHtyZW0oMSl9IHNvbGlkIGdyYXk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBDb25uZWN0TjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VSZWR1Y2VyQ29udGV4dCgpO1xuICBjb25zdCBbZ2FtZVN0YXRlLCBnYW1lRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aXRhbFN0YXRlKTtcbiAgY29uc3QgW3NldHRpbmcsIHVwZGF0ZVNldHRpbmddID0gdXNlU3RhdGU8U2V0dGluZ3MgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lucHV0VGV4dCwgY2hhbmdlSW5wdXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCB7IGZ1bGxCb2FyZCwgYm9hcmRTZXR1cCwgbmV4dCwgbmFtZXMsIHJvd051bSwgY2hlY2tBZ2FpbnN0LCB3aW5SdWxlIH0gPSBzdGF0ZS5zZXR1cDtcbiAgY29uc3QgeyByZWNvcmQ6IGdhbWVSZWNvcmQgfSA9IGdhbWVTdGF0ZTtcblxuICBjb25zdCByZXN0YXJ0R2FtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBnYW1lRGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ3VwZGF0ZUdhbWVSZWNvcmQnLFxuICAgICAgcGF5bG9hZDogcmVzZXRHYW1lKGdhbWVSZWNvcmQsIGZ1bGxCb2FyZCwgYm9hcmRTZXR1cCwgbmV4dCksXG4gICAgfSk7XG4gIH0sIFtnYW1lUmVjb3JkLCBmdWxsQm9hcmQsIGJvYXJkU2V0dXAsIG5leHRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlc3RhcnRHYW1lKCk7XG4gIH0sIFtzdGF0ZS5zZXR1cF0pO1xuXG4gIGNvbnN0IHRpdGxlU3R5bGVzID0gdXNlTWVtbygoKSA9PiB0aXRsZVN0eWxlc09uTihzZXR0aW5nLCB3aW5SdWxlKSwgW3NldHRpbmcsIHdpblJ1bGVdKTtcbiAgY29uc3QgYmFubmVyU3R5bGVzID0gdXNlTWVtbygoKSA9PiBiYW5uZXJTdHlsZXNPbkJhbm5lcihnZXRCYW5uZXIoZ2FtZVJlY29yZCwgbmFtZXMpKSwgW1xuICAgIGdhbWVSZWNvcmQsXG4gICAgbmFtZXMsXG4gIF0pO1xuXG4gIGNvbnN0IGNsZWFyU2V0dGluZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB1cGRhdGVTZXR0aW5nKG51bGwpO1xuICAgIGNoYW5nZUlucHV0VGV4dCgnJyk7XG4gIH0sIFt1cGRhdGVTZXR0aW5nLCBjaGFuZ2VJbnB1dFRleHRdKTtcblxuICBjb25zdCBmb2N1c0lucHV0ID0gdXNlQ2FsbGJhY2soKG5vZGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgaWYgKG5vZGUpIG5vZGUuZm9jdXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrT25DZWxsID0gdXNlQ2FsbGJhY2soXG4gICAgKGNvbEluZDogbnVtYmVyKSA9PiAoKSA9PiB7XG4gICAgICBpZiAoc2V0dGluZykgcmV0dXJuO1xuICAgICAgZ2FtZURpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ3VwZGF0ZUdhbWVSZWNvcmQnLFxuICAgICAgICBwYXlsb2FkOiBnYW1lUmVjb3JkLmdhbWVPdmVyXG4gICAgICAgICAgPyByZXNldEdhbWUoZ2FtZVJlY29yZCwgZnVsbEJvYXJkLCBib2FyZFNldHVwLCBuZXh0KVxuICAgICAgICAgIDogcGxhY2VPbmVQaWVjZSh7XG4gICAgICAgICAgICAgIGNvbDogY29sSW5kLFxuICAgICAgICAgICAgICBjdXJSZWNvcmQ6IGdhbWVSZWNvcmQsXG4gICAgICAgICAgICAgIGZ1bGxCb2FyZCxcbiAgICAgICAgICAgICAgY2hlY2tBZ2FpbnN0LFxuICAgICAgICAgICAgICBuZXh0LFxuICAgICAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtnYW1lRGlzcGF0Y2gsIHBsYWNlT25lUGllY2UsIGdhbWVSZWNvcmQsIGZ1bGxCb2FyZCwgY2hlY2tBZ2FpbnN0LCBuZXh0LCBzZXR0aW5nXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoMT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aXRsZVN0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNldHRpbmcgIT09IFNldHRpbmdzLkNIQU5HRV9SVUxFUykge1xuICAgICAgICAgICAgICB1cGRhdGVTZXR0aW5nKFNldHRpbmdzLkNIQU5HRV9SVUxFUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZVN0eWxlcy5zdHlsZXN9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbnB1dENvbnRhaW5lclN0eWxlcy5jbGFzc05hbWV9PlxuICAgICAgICB7c2V0dGluZyA9PT0gU2V0dGluZ3MuQ0hBTkdFX1JVTEVTID8gKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtmb2N1c0lucHV0fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNoYW5nZS1ydWxlcy1sYWJlbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0U3R5bGVzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiW2NvbHVtbl0sW3Jvd10sW251bWJlcl1cIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IGNoYW5nZUlucHV0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbktleURvd249eyhlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEFycmF5ID0gaW5wdXRUZXh0LnNwbGl0KCcsJykubWFwKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludCh0ZXh0LnRyaW0oKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoaW5wdXRBcnJheS5sZW5ndGggIT09IDMpIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hhbmdlUnVsZXMnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93TnVtOiBpbnB1dEFycmF5WzFdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbE51bTogaW5wdXRBcnJheVswXSxcbiAgICAgICAgICAgICAgICAgICAgICB3aW5SdWxlOiBpbnB1dEFycmF5WzJdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBpbnB1dCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGVhclNldHRpbmcoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJTZXR0aW5nKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJTZXR0aW5nKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiYmFubmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YmFubmVyU3R5bGVzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc3RhcnRHYW1lKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Jhbm5lclN0eWxlcy5zdHlsZXN9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpbnB1dFN0eWxlcy5zdHlsZXN9XG4gICAgICB7aW5wdXRDb250YWluZXJTdHlsZXMuc3R5bGVzfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lucHV0Q29udGFpbmVyU3R5bGVzLmNsYXNzTmFtZX0+XG4gICAgICAgIHtzZXR0aW5nID09PSBTZXR0aW5ncy5DSEFOR0VfUExBWUVSUyA/IChcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17Zm9jdXNJbnB1dH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjaGFuZ2UtcGxheWVycy1pbnB1dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0U3R5bGVzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXAgdG8gNCBwbGF5ZXIncyBuYW1lcyB3aXRoIGNvbW1hIGluIGJldHdlZW5cIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IGNoYW5nZUlucHV0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbktleURvd249eyhlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEFycmF5ID0gaW5wdXRUZXh0LnNwbGl0KCcsJykubWFwKHRleHQgPT4gdGV4dC50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgaWYgKGlucHV0QXJyYXkubGVuZ3RoIDwgMSB8fCBpbnB1dEFycmF5Lmxlbmd0aCA+IDQpIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hhbmdlUGxheWVycycsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGlucHV0QXJyYXksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIGlucHV0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsZWFyU2V0dGluZygpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgICBjbGVhclNldHRpbmcoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhclNldHRpbmcoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsZWdlbmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtsZWdlbmRTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlU2V0dGluZyhTZXR0aW5ncy5DSEFOR0VfUExBWUVSUyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xlZ2VuZFN0eWxlcy5zdHlsZXN9XG4gICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpbmQpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xlZ2VuZExhYmVsU3R5bGVzLmNsYXNzTmFtZX0ga2V5PXtgbGVnZW5kLSR7bn1gfT5cbiAgICAgICAgICAgICAgICB7bGVnZW5kTGFiZWxTdHlsZXMuc3R5bGVzfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7bGVnZW5kQ29sb3JTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgJHtwbGF5ZXJDaGVja2VyU3R5bGVzW2luZF0uY2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BsYXllckNoZWNrZXJTdHlsZXNbaW5kXS5zdHlsZXN9XG4gICAgICAgICAgICAgICAgICB7bGVnZW5kQ29sb3JTdHlsZXMuc3R5bGVzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8Qm9hcmQgYm9hcmRzPXtnYW1lUmVjb3JkLmJvYXJkc30gcm93TnVtPXtyb3dOdW19IG9uQ2xpY2tPbkNlbGw9e2hhbmRsZUNsaWNrT25DZWxsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdE47XG4iXX0= */\n/*@ sourceURL=/Users/david.chen/Documents/projects/Nextjs_Ts_Eslint/src/components/ConnectN/index.tsx */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-1472192811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "button",
    "aria-label": "Title",
    onClick: function onClick() {
      if (setting !== Settings.CHANGE_RULES) {
        updateSetting(Settings.CHANGE_RULES);
      }
    },
    className: "jsx-1472192811" + " " + (titleStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, titleStyles.styles)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1472192811" + " " + (inputContainerStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, setting === Settings.CHANGE_RULES ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    ref: focusInput,
    "aria-label": "change-rules-label",
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
    className: "jsx-1472192811" + " " + (inputStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "button",
    "aria-label": "banner",
    onClick: function onClick() {
      return restartGame();
    },
    className: "jsx-1472192811" + " " + (bannerStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, bannerStyles.styles)), inputStyles.styles, inputContainerStyles.styles, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1472192811" + " " + (inputContainerStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, setting === Settings.CHANGE_PLAYERS ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    ref: focusInput,
    "aria-label": "change-players-input",
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
    className: "jsx-1472192811" + " " + (inputStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "button",
    "aria-label": "legend",
    onClick: function onClick() {
      return updateSetting(Settings.CHANGE_PLAYERS);
    },
    className: "jsx-1472192811" + " " + (legendStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, legendStyles.styles, names.map(function (n, ind) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: "legend-".concat(n),
      className: "jsx-1472192811" + " " + (legendLabelStyles.className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, legendLabelStyles.styles, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1472192811" + " " + "".concat(legendColorStyles.className, "\n                  ").concat(_Board__WEBPACK_IMPORTED_MODULE_6__["playerCheckerStyles"][ind].className),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, _Board__WEBPACK_IMPORTED_MODULE_6__["playerCheckerStyles"][ind].styles, legendColorStyles.styles), n);
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_6__["default"], {
    boards: gameRecord.boards,
    rowNum: rowNum,
    onClickOnCell: handleClickOnCell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConnectN);

/***/ })

})
//# sourceMappingURL=index.js.39a2be41dcfebcb15bea.hot-update.js.map