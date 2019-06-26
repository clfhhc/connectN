webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/models/setup.ts":
/*!*****************************!*\
  !*** ./src/models/setup.ts ***!
  \*****************************/
/*! exports provided: inititalState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inititalState", function() { return inititalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _utils_createReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createReducer */ "./src/utils/createReducer.ts");
/* harmony import */ var _utils_setState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/setState */ "./src/utils/setState.ts");



/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["draftState"] }] */

var maxRow = 12;
var maxCol = 12;
var minRow = 3;
var minCol = 3;
var inititalState = {
  rowNum: 6,
  colNum: 7,
  winRule: 4,
  names: ['O', 'X'],
  next: [1, 0],
  fullBoard: Math.pow(2, 7) - 1,
  checkAgainst: Math.pow(2, 4) - 1,
  boardSetup: Array(7).fill(0)
};
var reducerObj = {
  resetSetup: _utils_setState__WEBPACK_IMPORTED_MODULE_2__["setInitialState"],
  changePlayers: function changePlayers(state, names) {
    if (names.length > 4) return state;
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draftState) {
      draftState.names = names;
      draftState.next = names.map(function (_, ind) {
        return ind + 1 === names.length ? 0 : ind + 1;
      });
    });
  },
  changeRules: function changeRules(state, _ref) {
    var rowNum = _ref.rowNum,
        colNum = _ref.colNum,
        winRule = _ref.winRule;
    if (winRule > rowNum || winRule > colNum || winRule < 3) return state;
    if (colNum > maxCol || colNum < minCol || rowNum > maxRow || rowNum < minRow) return state;
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draftState) {
      draftState.rowNum = rowNum;
      draftState.colNum = colNum;
      draftState.winRule = winRule;
      draftState.fullBoard = Math.pow(2, colNum) - 1;
      draftState.checkAgainst = Math.pow(2, winRule) - 1;
      draftState.boardSetup = Array(colNum).fill(0);
    });
  }
};
var reducer = Object(_utils_createReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(reducerObj);

/***/ })

})
//# sourceMappingURL=index.js.381fe1015330b47b5d10.hot-update.js.map