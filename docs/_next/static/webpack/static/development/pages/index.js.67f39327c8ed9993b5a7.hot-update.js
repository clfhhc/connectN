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
      id: "1653339563",
      dynamic: [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(40), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(36), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Change Rules' : "Connect ".concat(winRule), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1)],
      __self: this
    }, ".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(40), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(36), ";border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid transparent;cursor:pointer;}.__jsx-style-dynamic-selector::after{content:'").concat(setting === Settings.CHANGE_RULES ? 'Change Rules' : "Connect ".concat(winRule), "';}.__jsx-style-dynamic-selector:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid black;}.__jsx-style-dynamic-selector:hover::after{content:'Change Rules';}")),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1653339563", [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(40), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(36), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Change Rules' : "Connect ".concat(winRule), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1)]]])
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
    id: "2472352108",
    __self: undefined
  }, ".jsx-2472352108{margin:0 ".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(10), ";display:inline-block;}.jsx-2472352108:first-of-type{margin-left:0;}.jsx-2472352108:last-of-type{margin-right:0;}")),
  className: "jsx-2472352108"
};
var legendColorStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1336507868",
    __self: undefined
  }, ".jsx-1336507868{display:inline-block;border:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(1), " solid lightgray;border-radius:50%;margin-right:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(10), ";width:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(15), ";height:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(15), ";}")),
  className: "jsx-1336507868"
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
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1472192811",
    __self: this
  }, "body{touch-action:manipulation;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9OZXh0anNfVHNfRXNsaW50L3NyYy9jb21wb25lbnRzL0Nvbm5lY3ROL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwS1MsQUFHdUMsMEJBQzVCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9OZXh0anNfVHNfRXNsaW50L3NyYy9jb21wb25lbnRzL0Nvbm5lY3ROL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuaW1wb3J0IHVzZVJlZHVjZXJDb250ZXh0IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XG5pbXBvcnQgQm9hcmQsIHsgcGxheWVyQ2hlY2tlclN0eWxlcyB9IGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IHsgaW5pdGl0YWxTdGF0ZSwgcmVkdWNlciB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lJztcbmltcG9ydCB7IHJlc2V0R2FtZSwgcGxhY2VPbmVQaWVjZSwgZ2V0QmFubmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29ubmVjdE4nO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGVVdGlscyc7XG5cbmVudW0gU2V0dGluZ3Mge1xuICBDSEFOR0VfUlVMRVMgPSAnQ0hBTkdFX1JVTEVTJyxcbiAgQ0hBTkdFX1BMQVlFUlMgPSAnQ0hBTkdFX1BMQVlFUlMnLFxufVxuXG5jb25zdCB0aXRsZVN0eWxlc09uTiA9IChzZXR0aW5nOiBTZXR0aW5ncyB8IG51bGwsIHdpblJ1bGU6IG51bWJlcikgPT4gY3NzLnJlc29sdmVgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogJHtyZW0oNDApfSBhdXRvO1xuICBmb250LXNpemU6ICR7cmVtKDM2KX07XG4gIGJvcmRlci10b3A6ICR7cmVtKDEpfSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogJHtyZW0oMSl9IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOjphZnRlciB7XG4gICAgY29udGVudDogJyR7c2V0dGluZyA9PT0gU2V0dGluZ3MuQ0hBTkdFX1JVTEVTID8gJ0NoYW5nZSBSdWxlcycgOiBgQ29ubmVjdCAke3dpblJ1bGV9YH0nO1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICBib3JkZXItdG9wOiAke3JlbSgxKX0gc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogJHtyZW0oMSl9IHNvbGlkIGJsYWNrO1xuICB9XG5cbiAgOmhvdmVyIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdDaGFuZ2UgUnVsZXMnO1xuICB9XG5gO1xuXG5jb25zdCBiYW5uZXJTdHlsZXNPbkJhbm5lciA9IChiYW5uZXI6IHN0cmluZykgPT4gY3NzLnJlc29sdmVgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogJHtyZW0oMjApfSBhdXRvO1xuICBmb250LXNpemU6ICR7cmVtKDIwKX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXRvcDogJHtyZW0oMSl9IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAke3JlbSgxKX0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcblxuICA6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiR7YmFubmVyfVwiO1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICBib3JkZXItdG9wOiAke3JlbSgxKX0gc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogJHtyZW0oMSl9IHNvbGlkIGJsYWNrO1xuICB9XG5cbiAgOmhvdmVyIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdSZXN0YXJ0IEdhbWUnO1xuICB9XG5gO1xuXG5jb25zdCBsZWdlbmRTdHlsZXMgPSBjc3MucmVzb2x2ZWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWFyZ2luOiAke3JlbSgyMCl9IGF1dG87XG4gIGZvbnQtc2l6ZTogJHtyZW0oMjApfTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXRvcDogJHtyZW0oMSl9IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAke3JlbSgxKX0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcblxuICA6aG92ZXIge1xuICAgIGJvcmRlci10b3A6ICR7cmVtKDEpfSBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAke3JlbSgxKX0gc29saWQgYmxhY2s7XG4gIH1cbmA7XG5cbmNvbnN0IGxlZ2VuZExhYmVsU3R5bGVzID0gY3NzLnJlc29sdmVgXG4gIG1hcmdpbjogMCAke3JlbSgxMCl9O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIDpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuYDtcblxuY29uc3QgbGVnZW5kQ29sb3JTdHlsZXMgPSBjc3MucmVzb2x2ZWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6ICR7cmVtKDEpfSBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAke3JlbSgxMCl9O1xuICB3aWR0aDogJHtyZW0oMTUpfTtcbiAgaGVpZ2h0OiAke3JlbSgxNSl9O1xuYDtcblxuY29uc3QgaW5wdXRDb250YWluZXJTdHlsZXMgPSBjc3MucmVzb2x2ZWBcbiAgaGVpZ2h0OiAke3JlbSgyNSl9O1xuYDtcblxuY29uc3QgaW5wdXRTdHlsZXMgPSBjc3MucmVzb2x2ZWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAke3JlbSgxNil9O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46ICR7cmVtKDIwKX0gYXV0bztcbiAgbWF4LXdpZHRoOiAke3JlbSgzNTApfTtcbiAgYm9yZGVyOiAke3JlbSgxKX0gc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IENvbm5lY3ROOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZVJlZHVjZXJDb250ZXh0KCk7XG4gIGNvbnN0IFtnYW1lU3RhdGUsIGdhbWVEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpdGFsU3RhdGUpO1xuICBjb25zdCBbc2V0dGluZywgdXBkYXRlU2V0dGluZ10gPSB1c2VTdGF0ZTxTZXR0aW5ncyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaW5wdXRUZXh0LCBjaGFuZ2VJbnB1dFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IHsgZnVsbEJvYXJkLCBib2FyZFNldHVwLCBuZXh0LCBuYW1lcywgcm93TnVtLCBjaGVja0FnYWluc3QsIHdpblJ1bGUgfSA9IHN0YXRlLnNldHVwO1xuICBjb25zdCB7IHJlY29yZDogZ2FtZVJlY29yZCB9ID0gZ2FtZVN0YXRlO1xuXG4gIGNvbnN0IHJlc3RhcnRHYW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGdhbWVEaXNwYXRjaCh7XG4gICAgICB0eXBlOiAndXBkYXRlR2FtZVJlY29yZCcsXG4gICAgICBwYXlsb2FkOiByZXNldEdhbWUoZ2FtZVJlY29yZCwgZnVsbEJvYXJkLCBib2FyZFNldHVwLCBuZXh0KSxcbiAgICB9KTtcbiAgfSwgW2dhbWVSZWNvcmQsIGZ1bGxCb2FyZCwgYm9hcmRTZXR1cCwgbmV4dF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVzdGFydEdhbWUoKTtcbiAgfSwgW3N0YXRlLnNldHVwXSk7XG5cbiAgY29uc3QgdGl0bGVTdHlsZXMgPSB1c2VNZW1vKCgpID0+IHRpdGxlU3R5bGVzT25OKHNldHRpbmcsIHdpblJ1bGUpLCBbc2V0dGluZywgd2luUnVsZV0pO1xuICBjb25zdCBiYW5uZXJTdHlsZXMgPSB1c2VNZW1vKCgpID0+IGJhbm5lclN0eWxlc09uQmFubmVyKGdldEJhbm5lcihnYW1lUmVjb3JkLCBuYW1lcykpLCBbXG4gICAgZ2FtZVJlY29yZCxcbiAgICBuYW1lcyxcbiAgXSk7XG5cbiAgY29uc3QgY2xlYXJTZXR0aW5nID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHVwZGF0ZVNldHRpbmcobnVsbCk7XG4gICAgY2hhbmdlSW5wdXRUZXh0KCcnKTtcbiAgfSwgW3VwZGF0ZVNldHRpbmcsIGNoYW5nZUlucHV0VGV4dF0pO1xuXG4gIGNvbnN0IGZvY3VzSW5wdXQgPSB1c2VDYWxsYmFjaygobm9kZTogSFRNTElucHV0RWxlbWVudCB8IG51bGwpID0+IHtcbiAgICBpZiAobm9kZSkgbm9kZS5mb2N1cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tPbkNlbGwgPSB1c2VDYWxsYmFjayhcbiAgICAoY29sSW5kOiBudW1iZXIpID0+ICgpID0+IHtcbiAgICAgIGlmIChzZXR0aW5nKSByZXR1cm47XG4gICAgICBnYW1lRGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAndXBkYXRlR2FtZVJlY29yZCcsXG4gICAgICAgIHBheWxvYWQ6IGdhbWVSZWNvcmQuZ2FtZU92ZXJcbiAgICAgICAgICA/IHJlc2V0R2FtZShnYW1lUmVjb3JkLCBmdWxsQm9hcmQsIGJvYXJkU2V0dXAsIG5leHQpXG4gICAgICAgICAgOiBwbGFjZU9uZVBpZWNlKHtcbiAgICAgICAgICAgICAgY29sOiBjb2xJbmQsXG4gICAgICAgICAgICAgIGN1clJlY29yZDogZ2FtZVJlY29yZCxcbiAgICAgICAgICAgICAgZnVsbEJvYXJkLFxuICAgICAgICAgICAgICBjaGVja0FnYWluc3QsXG4gICAgICAgICAgICAgIG5leHQsXG4gICAgICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW2dhbWVEaXNwYXRjaCwgcGxhY2VPbmVQaWVjZSwgZ2FtZVJlY29yZCwgZnVsbEJvYXJkLCBjaGVja0FnYWluc3QsIG5leHQsIHNldHRpbmddXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGgxPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3RpdGxlU3R5bGVzLmNsYXNzTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZyAhPT0gU2V0dGluZ3MuQ0hBTkdFX1JVTEVTKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVNldHRpbmcoU2V0dGluZ3MuQ0hBTkdFX1JVTEVTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlU3R5bGVzLnN0eWxlc31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lucHV0Q29udGFpbmVyU3R5bGVzLmNsYXNzTmFtZX0+XG4gICAgICAgIHtzZXR0aW5nID09PSBTZXR0aW5ncy5DSEFOR0VfUlVMRVMgPyAoXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2ZvY3VzSW5wdXR9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2hhbmdlLXJ1bGVzLWxhYmVsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJbY29sdW1uXSxbcm93XSxbbnVtYmVyXVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gY2hhbmdlSW5wdXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0QXJyYXkgPSBpbnB1dFRleHQuc3BsaXQoJywnKS5tYXAodGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHRleHQudHJpbSgpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIuaXNOYU4obnVtKSkgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmIChpbnB1dEFycmF5Lmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGFuZ2VSdWxlcycsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3dOdW06IGlucHV0QXJyYXlbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgY29sTnVtOiBpbnB1dEFycmF5WzBdLFxuICAgICAgICAgICAgICAgICAgICAgIHdpblJ1bGU6IGlucHV0QXJyYXlbMl0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIGlucHV0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsZWFyU2V0dGluZygpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgICBjbGVhclNldHRpbmcoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhclNldHRpbmcoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJiYW5uZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtiYW5uZXJTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVzdGFydEdhbWUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YmFubmVyU3R5bGVzLnN0eWxlc31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2lucHV0U3R5bGVzLnN0eWxlc31cbiAgICAgIHtpbnB1dENvbnRhaW5lclN0eWxlcy5zdHlsZXN9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aW5wdXRDb250YWluZXJTdHlsZXMuY2xhc3NOYW1lfT5cbiAgICAgICAge3NldHRpbmcgPT09IFNldHRpbmdzLkNIQU5HRV9QTEFZRVJTID8gKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtmb2N1c0lucHV0fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNoYW5nZS1wbGF5ZXJzLWlucHV0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1cCB0byA0IHBsYXllcidzIG5hbWVzIHdpdGggY29tbWEgaW4gYmV0d2VlblwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gY2hhbmdlSW5wdXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0QXJyYXkgPSBpbnB1dFRleHQuc3BsaXQoJywnKS5tYXAodGV4dCA9PiB0ZXh0LnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICBpZiAoaW5wdXRBcnJheS5sZW5ndGggPCAxIHx8IGlucHV0QXJyYXkubGVuZ3RoID4gNCkgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGFuZ2VQbGF5ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogaW5wdXRBcnJheSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgaW5wdXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXJTZXR0aW5nKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgIGNsZWFyU2V0dGluZygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFyU2V0dGluZygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxlZ2VuZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2xlZ2VuZFN0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVTZXR0aW5nKFNldHRpbmdzLkNIQU5HRV9QTEFZRVJTKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGVnZW5kU3R5bGVzLnN0eWxlc31cbiAgICAgICAgICAgIHtuYW1lcy5tYXAoKG4sIGluZCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bGVnZW5kTGFiZWxTdHlsZXMuY2xhc3NOYW1lfSBrZXk9e2BsZWdlbmQtJHtufWB9PlxuICAgICAgICAgICAgICAgIHtsZWdlbmRMYWJlbFN0eWxlcy5zdHlsZXN9XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtsZWdlbmRDb2xvclN0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAke3BsYXllckNoZWNrZXJTdHlsZXNbaW5kXS5jbGFzc05hbWV9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGxheWVyQ2hlY2tlclN0eWxlc1tpbmRdLnN0eWxlc31cbiAgICAgICAgICAgICAgICAgIHtsZWdlbmRDb2xvclN0eWxlcy5zdHlsZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge259XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCb2FyZCBib2FyZHM9e2dhbWVSZWNvcmQuYm9hcmRzfSByb3dOdW09e3Jvd051bX0gb25DbGlja09uQ2VsbD17aGFuZGxlQ2xpY2tPbkNlbGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0TjtcbiJdfQ== */\n/*@ sourceURL=/Users/david.chen/Documents/projects/Nextjs_Ts_Eslint/src/components/ConnectN/index.tsx */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-1472192811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
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
      lineNumber: 178
    },
    __self: this
  }, titleStyles.styles)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1472192811" + " " + (inputContainerStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
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
      lineNumber: 193
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
      lineNumber: 231
    },
    __self: this
  }, bannerStyles.styles)), inputStyles.styles, inputContainerStyles.styles, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1472192811" + " " + (inputContainerStyles.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
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
      lineNumber: 245
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
      lineNumber: 275
    },
    __self: this
  }, legendStyles.styles, names.map(function (n, ind) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: "legend-".concat(n),
      className: "jsx-1472192811" + " " + (legendLabelStyles.className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, legendLabelStyles.styles, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1472192811" + " " + "".concat(legendColorStyles.className, "\n                  ").concat(_Board__WEBPACK_IMPORTED_MODULE_6__["playerCheckerStyles"][ind].className),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, _Board__WEBPACK_IMPORTED_MODULE_6__["playerCheckerStyles"][ind].styles, legendColorStyles.styles), n);
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_6__["default"], {
    boards: gameRecord.boards,
    rowNum: rowNum,
    onClickOnCell: handleClickOnCell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConnectN);

/***/ })

})
//# sourceMappingURL=index.js.67f39327c8ed9993b5a7.hot-update.js.map