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
    id: "2056711615",
    __self: undefined
  }, ".jsx-2056711615{margin:0 ".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_9__["rem"])(10), ";display:inline-block;}first-of-type.jsx-2056711615:{margin-left:0;}last-of-type.jsx-2056711615:{margin-right:0;}")),
  className: "jsx-2056711615"
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
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1472192811",
    __self: this
  }, "body{touch-action:manipulation;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9OZXh0anNfVHNfRXNsaW50L3NyYy9jb21wb25lbnRzL0Nvbm5lY3ROL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwS1MsQUFHdUMsMEJBQzVCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9OZXh0anNfVHNfRXNsaW50L3NyYy9jb21wb25lbnRzL0Nvbm5lY3ROL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuaW1wb3J0IHVzZVJlZHVjZXJDb250ZXh0IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XG5pbXBvcnQgQm9hcmQsIHsgcGxheWVyQ2hlY2tlclN0eWxlcyB9IGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IHsgaW5pdGl0YWxTdGF0ZSwgcmVkdWNlciB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lJztcbmltcG9ydCB7IHJlc2V0R2FtZSwgcGxhY2VPbmVQaWVjZSwgZ2V0QmFubmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29ubmVjdE4nO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGVVdGlscyc7XG5cbmVudW0gU2V0dGluZ3Mge1xuICBDSEFOR0VfUlVMRVMgPSAnQ0hBTkdFX1JVTEVTJyxcbiAgQ0hBTkdFX1BMQVlFUlMgPSAnQ0hBTkdFX1BMQVlFUlMnLFxufVxuXG5jb25zdCB0aXRsZVN0eWxlc09uTiA9IChzZXR0aW5nOiBTZXR0aW5ncyB8IG51bGwsIHdpblJ1bGU6IG51bWJlcikgPT4gY3NzLnJlc29sdmVgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogJHtyZW0oNDApfSBhdXRvO1xuICBmb250LXNpemU6ICR7cmVtKDM2KX07XG4gIGJvcmRlci10b3A6ICR7cmVtKDEpfSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogJHtyZW0oMSl9IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOjphZnRlciB7XG4gICAgY29udGVudDogJyR7c2V0dGluZyA9PT0gU2V0dGluZ3MuQ0hBTkdFX1JVTEVTID8gJ1J1bGVzJyA6IGBDb25uZWN0ICR7d2luUnVsZX1gfSc7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGJvcmRlci10b3A6ICR7cmVtKDEpfSBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAke3JlbSgxKX0gc29saWQgYmxhY2s7XG4gIH1cblxuICA6aG92ZXIgOjphZnRlciB7XG4gICAgY29udGVudDogJyR7c2V0dGluZyA9PT0gU2V0dGluZ3MuQ0hBTkdFX1JVTEVTID8gJ1J1bGVzJyA6IGBDaGFuZ2UgUnVsZXNgfSc7XG4gIH1cbmA7XG5cbmNvbnN0IGJhbm5lclN0eWxlc09uQmFubmVyID0gKGJhbm5lcjogc3RyaW5nKSA9PiBjc3MucmVzb2x2ZWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAke3JlbSgyMCl9IGF1dG87XG4gIGZvbnQtc2l6ZTogJHtyZW0oMjApfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wOiAke3JlbSgxKX0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206ICR7cmVtKDEpfSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiJHtiYW5uZXJ9XCI7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGJvcmRlci10b3A6ICR7cmVtKDEpfSBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAke3JlbSgxKX0gc29saWQgYmxhY2s7XG4gIH1cblxuICA6aG92ZXIgOjphZnRlciB7XG4gICAgY29udGVudDogJ1Jlc3RhcnQgR2FtZSc7XG4gIH1cbmA7XG5cbmNvbnN0IGxlZ2VuZFN0eWxlcyA9IGNzcy5yZXNvbHZlYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXJnaW46ICR7cmVtKDIwKX0gYXV0bztcbiAgZm9udC1zaXplOiAke3JlbSgyMCl9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wOiAke3JlbSgxKX0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206ICR7cmVtKDEpfSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIDpob3ZlciB7XG4gICAgYm9yZGVyLXRvcDogJHtyZW0oMSl9IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206ICR7cmVtKDEpfSBzb2xpZCBibGFjaztcbiAgfVxuYDtcblxuY29uc3QgbGVnZW5kTGFiZWxTdHlsZXMgPSBjc3MucmVzb2x2ZWBcbiAgbWFyZ2luOiAwICR7cmVtKDEwKX07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBmaXJzdC1vZi10eXBlOiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgbGFzdC1vZi10eXBlOiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5gO1xuXG5jb25zdCBsZWdlbmRDb2xvclN0eWxlcyA9IGNzcy5yZXNvbHZlYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogJHtyZW0oMSl9IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgJHtyZW0oMTApfSAwIDA7XG4gIHdpZHRoOiAke3JlbSgxNSl9O1xuICBoZWlnaHQ6ICR7cmVtKDE1KX07XG5gO1xuXG5jb25zdCBpbnB1dENvbnRhaW5lclN0eWxlcyA9IGNzcy5yZXNvbHZlYFxuICBoZWlnaHQ6ICR7cmVtKDI1KX07XG5gO1xuXG5jb25zdCBpbnB1dFN0eWxlcyA9IGNzcy5yZXNvbHZlYFxuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6ICR7cmVtKDE2KX07XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogJHtyZW0oMjApfSBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cmVtKDM1MCl9O1xuICBib3JkZXI6ICR7cmVtKDEpfSBzb2xpZCBncmF5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgQ29ubmVjdE46IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlUmVkdWNlckNvbnRleHQoKTtcbiAgY29uc3QgW2dhbWVTdGF0ZSwgZ2FtZURpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGl0YWxTdGF0ZSk7XG4gIGNvbnN0IFtzZXR0aW5nLCB1cGRhdGVTZXR0aW5nXSA9IHVzZVN0YXRlPFNldHRpbmdzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpbnB1dFRleHQsIGNoYW5nZUlucHV0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgeyBmdWxsQm9hcmQsIGJvYXJkU2V0dXAsIG5leHQsIG5hbWVzLCByb3dOdW0sIGNoZWNrQWdhaW5zdCwgd2luUnVsZSB9ID0gc3RhdGUuc2V0dXA7XG4gIGNvbnN0IHsgcmVjb3JkOiBnYW1lUmVjb3JkIH0gPSBnYW1lU3RhdGU7XG5cbiAgY29uc3QgcmVzdGFydEdhbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZ2FtZURpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICd1cGRhdGVHYW1lUmVjb3JkJyxcbiAgICAgIHBheWxvYWQ6IHJlc2V0R2FtZShnYW1lUmVjb3JkLCBmdWxsQm9hcmQsIGJvYXJkU2V0dXAsIG5leHQpLFxuICAgIH0pO1xuICB9LCBbZ2FtZVJlY29yZCwgZnVsbEJvYXJkLCBib2FyZFNldHVwLCBuZXh0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXN0YXJ0R2FtZSgpO1xuICB9LCBbc3RhdGUuc2V0dXBdKTtcblxuICBjb25zdCB0aXRsZVN0eWxlcyA9IHVzZU1lbW8oKCkgPT4gdGl0bGVTdHlsZXNPbk4oc2V0dGluZywgd2luUnVsZSksIFtzZXR0aW5nLCB3aW5SdWxlXSk7XG4gIGNvbnN0IGJhbm5lclN0eWxlcyA9IHVzZU1lbW8oKCkgPT4gYmFubmVyU3R5bGVzT25CYW5uZXIoZ2V0QmFubmVyKGdhbWVSZWNvcmQsIG5hbWVzKSksIFtcbiAgICBnYW1lUmVjb3JkLFxuICAgIG5hbWVzLFxuICBdKTtcblxuICBjb25zdCBjbGVhclNldHRpbmcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdXBkYXRlU2V0dGluZyhudWxsKTtcbiAgICBjaGFuZ2VJbnB1dFRleHQoJycpO1xuICB9LCBbdXBkYXRlU2V0dGluZywgY2hhbmdlSW5wdXRUZXh0XSk7XG5cbiAgY29uc3QgZm9jdXNJbnB1dCA9IHVzZUNhbGxiYWNrKChub2RlOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgIGlmIChub2RlKSBub2RlLmZvY3VzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDbGlja09uQ2VsbCA9IHVzZUNhbGxiYWNrKFxuICAgIChjb2xJbmQ6IG51bWJlcikgPT4gKCkgPT4ge1xuICAgICAgaWYgKHNldHRpbmcpIHJldHVybjtcbiAgICAgIGdhbWVEaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICd1cGRhdGVHYW1lUmVjb3JkJyxcbiAgICAgICAgcGF5bG9hZDogZ2FtZVJlY29yZC5nYW1lT3ZlclxuICAgICAgICAgID8gcmVzZXRHYW1lKGdhbWVSZWNvcmQsIGZ1bGxCb2FyZCwgYm9hcmRTZXR1cCwgbmV4dClcbiAgICAgICAgICA6IHBsYWNlT25lUGllY2Uoe1xuICAgICAgICAgICAgICBjb2w6IGNvbEluZCxcbiAgICAgICAgICAgICAgY3VyUmVjb3JkOiBnYW1lUmVjb3JkLFxuICAgICAgICAgICAgICBmdWxsQm9hcmQsXG4gICAgICAgICAgICAgIGNoZWNrQWdhaW5zdCxcbiAgICAgICAgICAgICAgbmV4dCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBbZ2FtZURpc3BhdGNoLCBwbGFjZU9uZVBpZWNlLCBnYW1lUmVjb3JkLCBmdWxsQm9hcmQsIGNoZWNrQWdhaW5zdCwgbmV4dCwgc2V0dGluZ11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aDE+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGl0bGVTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChzZXR0aW5nICE9PSBTZXR0aW5ncy5DSEFOR0VfUlVMRVMpIHtcbiAgICAgICAgICAgICAgdXBkYXRlU2V0dGluZyhTZXR0aW5ncy5DSEFOR0VfUlVMRVMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGVTdHlsZXMuc3R5bGVzfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aW5wdXRDb250YWluZXJTdHlsZXMuY2xhc3NOYW1lfT5cbiAgICAgICAge3NldHRpbmcgPT09IFNldHRpbmdzLkNIQU5HRV9SVUxFUyA/IChcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17Zm9jdXNJbnB1dH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjaGFuZ2UtcnVsZXMtbGFiZWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIltjb2x1bW5dLFtyb3ddLFtudW1iZXJdXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBjaGFuZ2VJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlEb3duPXsoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRBcnJheSA9IGlucHV0VGV4dC5zcGxpdCgnLCcpLm1hcCh0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodGV4dC50cmltKCksIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTihudW0pKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKGlucHV0QXJyYXkubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoYW5nZVJ1bGVzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvd051bTogaW5wdXRBcnJheVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xOdW06IGlucHV0QXJyYXlbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgd2luUnVsZTogaW5wdXRBcnJheVsyXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgaW5wdXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXJTZXR0aW5nKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgIGNsZWFyU2V0dGluZygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFyU2V0dGluZygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImJhbm5lclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Jhbm5lclN0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXN0YXJ0R2FtZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtiYW5uZXJTdHlsZXMuc3R5bGVzfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7aW5wdXRTdHlsZXMuc3R5bGVzfVxuICAgICAge2lucHV0Q29udGFpbmVyU3R5bGVzLnN0eWxlc31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbnB1dENvbnRhaW5lclN0eWxlcy5jbGFzc05hbWV9PlxuICAgICAgICB7c2V0dGluZyA9PT0gU2V0dGluZ3MuQ0hBTkdFX1BMQVlFUlMgPyAoXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2ZvY3VzSW5wdXR9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2hhbmdlLXBsYXllcnMtaW5wdXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVwIHRvIDQgcGxheWVyJ3MgbmFtZXMgd2l0aCBjb21tYSBpbiBiZXR3ZWVuXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBjaGFuZ2VJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlEb3duPXsoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRBcnJheSA9IGlucHV0VGV4dC5zcGxpdCgnLCcpLm1hcCh0ZXh0ID0+IHRleHQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpbnB1dEFycmF5Lmxlbmd0aCA8IDEgfHwgaW5wdXRBcnJheS5sZW5ndGggPiA0KSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoYW5nZVBsYXllcnMnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBpbnB1dEFycmF5LFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBpbnB1dCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGVhclNldHRpbmcoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJTZXR0aW5nKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJTZXR0aW5nKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibGVnZW5kXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17bGVnZW5kU3R5bGVzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVNldHRpbmcoU2V0dGluZ3MuQ0hBTkdFX1BMQVlFUlMpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZWdlbmRTdHlsZXMuc3R5bGVzfVxuICAgICAgICAgICAge25hbWVzLm1hcCgobiwgaW5kKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsZWdlbmRMYWJlbFN0eWxlcy5jbGFzc05hbWV9IGtleT17YGxlZ2VuZC0ke259YH0+XG4gICAgICAgICAgICAgICAge2xlZ2VuZExhYmVsU3R5bGVzLnN0eWxlc31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2xlZ2VuZENvbG9yU3R5bGVzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICR7cGxheWVyQ2hlY2tlclN0eWxlc1tpbmRdLmNsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwbGF5ZXJDaGVja2VyU3R5bGVzW2luZF0uc3R5bGVzfVxuICAgICAgICAgICAgICAgICAge2xlZ2VuZENvbG9yU3R5bGVzLnN0eWxlc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7bn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEJvYXJkIGJvYXJkcz17Z2FtZVJlY29yZC5ib2FyZHN9IHJvd051bT17cm93TnVtfSBvbkNsaWNrT25DZWxsPXtoYW5kbGVDbGlja09uQ2VsbH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3ROO1xuIl19 */\n/*@ sourceURL=/Users/david.chen/Documents/projects/Nextjs_Ts_Eslint/src/components/ConnectN/index.tsx */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
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
//# sourceMappingURL=index.js.921009e30b64c26f2e4a.hot-update.js.map