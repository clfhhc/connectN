webpackHotUpdate("static/development/pages/connectN.js",{

/***/ "./src/redux/reducers/game.ts":
/*!************************************!*\
  !*** ./src/redux/reducers/game.ts ***!
  \************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/redux/actions/actionTypes.ts");
/* harmony import */ var _utils_common_objectAssign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/objectAssign */ "./src/utils/common/objectAssign.ts");
/* harmony import */ var _utils_connectN_connectN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/connectN/connectN */ "./src/utils/connectN/connectN.ts");




var initialState = {
  boards: [[], []],
  win: -1,
  filledBoard: [],
  filledColumn: 0,
  gameOver: true,
  turn: 0
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_GAME_RECORD"]:
      {
        return Object(_utils_common_objectAssign__WEBPACK_IMPORTED_MODULE_2__["default"])()({}, state, action.payload);
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PLACE_ONE_PIECE"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, Object(_utils_connectN_connectN__WEBPACK_IMPORTED_MODULE_3__["placeOnePiece"])(action.payload));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["RESTART_GAME"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, Object(_utils_connectN_connectN__WEBPACK_IMPORTED_MODULE_3__["resetGame"])(action.payload));
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=connectN.js.a405d4f6d88612514f68.hot-update.js.map