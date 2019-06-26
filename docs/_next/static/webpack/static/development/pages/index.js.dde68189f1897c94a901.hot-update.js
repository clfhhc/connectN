webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ConnectN/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/ConnectN/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/index */ "./src/models/index.tsx");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Board */ "./src/components/ConnectN/Board.tsx");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/game */ "./src/models/game.ts");
/* harmony import */ var _utils_connectN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/connectN */ "./src/utils/connectN.ts");
/* harmony import */ var _utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/styleUtils */ "./src/utils/styleUtils.ts");


var _jsxFileName = "/Users/david.chen/Documents/projects/Nextjs_Ts_Eslint/src/components/ConnectN/index.tsx";







var Settings;

(function (Settings) {
  Settings["CHANGE_RULES"] = "CHANGE_RULES";
  Settings["CHANGE_PLAYERS"] = "CHANGE_PLAYERS";
})(Settings || (Settings = {}));

var titleStylesOnN = function titleStylesOnN(setting, winRule) {
  return {
    styles: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3944537199",
      dynamic: [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(40), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(36), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Rules' : "Connect ".concat(winRule), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Ok!' : "Change Rules"],
      __self: this
    }, ".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(40), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(36), ";border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid transparent;cursor:pointer;}.__jsx-style-dynamic-selector::after{content:'").concat(setting === Settings.CHANGE_RULES ? 'Rules' : "Connect ".concat(winRule), "';}.__jsx-style-dynamic-selector:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid black;}.__jsx-style-dynamic-selector:hover::after{content:'").concat(setting === Settings.CHANGE_RULES ? 'Ok!' : "Change Rules", "';}")),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3944537199", [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(40), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(36), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Rules' : "Connect ".concat(winRule), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), setting === Settings.CHANGE_RULES ? 'Ok!' : "Change Rules"]]])
  };
};

var bannerStylesOnBanner = function bannerStylesOnBanner(banner) {
  return {
    styles: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2746256327",
      dynamic: [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), banner, Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1)],
      __self: this
    }, ".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(20), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(20), ";cursor:pointer;border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid transparent;}.__jsx-style-dynamic-selector::after{content:\"").concat(banner, "\";}.__jsx-style-dynamic-selector:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid black;}.__jsx-style-dynamic-selector:hover::after{content:'Restart Game';}")),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2746256327", [Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(20), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), banner, Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1)]]])
  };
};

var legendStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2892881646",
    __self: undefined
  }, ".jsx-2892881646{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(20), " auto;font-size:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(20), ";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid transparent;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid transparent;}.jsx-2892881646:hover{border-top:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid black;border-bottom:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid black;}")),
  className: "jsx-2892881646"
};
var legendLabelStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4124586048",
    __self: undefined
  }, ".jsx-4124586048{margin:0 ".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(10), ";display:inline-block;}")),
  className: "jsx-4124586048"
};
var legendColorStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3166081097",
    __self: undefined
  }, ".jsx-3166081097{display:inline-block;border:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(1), " solid lightgray;border-radius:50%;margin:0 ").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(10), ";width:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(15), ";height:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(15), ";}")),
  className: "jsx-3166081097"
};
var inputStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "526470568",
    __self: undefined
  }, ".jsx-526470568{display:block;text-align:center;font-size:".concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(16), ";outline:none;margin:0 auto;max-width:").concat(Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_8__["rem"])(200), ";width:100%;}")),
  className: "jsx-526470568"
};

var ConnectN = function ConnectN() {
  var _useReducerContext = Object(_models_index__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      state = _useReducerContext.state,
      dispatch = _useReducerContext.dispatch;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_models_game__WEBPACK_IMPORTED_MODULE_6__["reducer"], _models_game__WEBPACK_IMPORTED_MODULE_6__["inititalState"]),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useReducer, 2),
      gameState = _useReducer2[0],
      gameDispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      setting = _useState2[0],
      updateSetting = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
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
  var restartGame = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    gameDispatch({
      type: 'updateGameRecord',
      payload: Object(_utils_connectN__WEBPACK_IMPORTED_MODULE_7__["resetGame"])(gameRecord, fullBoard, boardSetup, next)
    });
  }, [gameRecord, fullBoard, boardSetup, next]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    restartGame();
  }, [state.setup]);
  var titleStyles = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return titleStylesOnN(setting, winRule);
  }, [setting, winRule]);
  var bannerStyles = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return bannerStylesOnBanner(Object(_utils_connectN__WEBPACK_IMPORTED_MODULE_7__["getBanner"])(gameRecord, names));
  }, [gameRecord, names]);
  var handleClickOnCell = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (colInd) {
    return function () {
      gameDispatch({
        type: 'updateGameRecord',
        payload: gameRecord.gameOver ? Object(_utils_connectN__WEBPACK_IMPORTED_MODULE_7__["resetGame"])(gameRecord, fullBoard, boardSetup, next) : Object(_utils_connectN__WEBPACK_IMPORTED_MODULE_7__["placeOnePiece"])({
          col: colInd,
          curRecord: gameRecord,
          fullBoard: fullBoard,
          checkAgainst: checkAgainst,
          next: next
        })
      });
    };
  }, [gameDispatch, _utils_connectN__WEBPACK_IMPORTED_MODULE_7__["placeOnePiece"], gameRecord, fullBoard, checkAgainst, next]);
  console.log(gameRecord);
  console.log(state.setup);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "button",
    className: titleStyles.className,
    onClick: function onClick() {
      if (setting !== Settings.CHANGE_RULES) {
        updateSetting(Settings.CHANGE_RULES);
      } else {
        updateSetting(null);

        try {
          var inputArray = inputText.split(',').map(function (text) {
            return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(text, 10);
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

        changeInputText('');
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, titleStyles.styles)), setting === Settings.CHANGE_RULES ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    className: inputStyles.className,
    type: "text",
    placeholder: "[column],[row],[number]",
    value: inputText,
    onChange: function onChange(e) {
      return changeInputText(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: bannerStyles.className,
    type: "button",
    onClick: function onClick() {
      return restartGame();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, bannerStyles.styles), inputStyles.styles, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: legendStyles.className,
    type: "button",
    onClick: function onClick() {
      return updateSetting(Settings.CHANGE_PLAYERS);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, legendStyles.styles, names.map(function (n, ind) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: legendLabelStyles.className,
      key: "legend-".concat(n),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, legendLabelStyles.styles, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "".concat(legendColorStyles.className, " ").concat(_Board__WEBPACK_IMPORTED_MODULE_5__["playerCheckerStyles"][ind].className),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, _Board__WEBPACK_IMPORTED_MODULE_5__["playerCheckerStyles"][ind].styles, legendColorStyles.styles), n);
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_5__["default"], {
    boards: gameRecord.boards,
    rowNum: rowNum,
    onClickOnCell: handleClickOnCell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConnectN);

/***/ })

})
//# sourceMappingURL=index.js.dde68189f1897c94a901.hot-update.js.map