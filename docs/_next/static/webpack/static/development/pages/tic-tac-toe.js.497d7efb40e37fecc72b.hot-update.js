webpackHotUpdate("static/development/pages/tic-tac-toe.js",{

/***/ "./pages/tic-tac-toe.tsx":
/*!*******************************!*\
  !*** ./pages/tic-tac-toe.tsx ***!
  \*******************************/
/*! exports provided: Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Head/ManifestHead */ "./src/components/Head/ManifestHead.tsx");
/* harmony import */ var _src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils/redux/dynamicStoreCallbackWrap */ "./src/utils/redux/dynamicStoreCallbackWrap.tsx");
/* harmony import */ var _src_components_ConnectN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/ConnectN */ "./src/components/ConnectN/index.tsx");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _src_redux_reducers_setup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/redux/reducers/setup */ "./src/redux/reducers/setup.ts");
/* harmony import */ var _src_redux_reducers_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/redux/reducers/game */ "./src/redux/reducers/game.ts");
/* harmony import */ var _src_redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/redux/actions/actionTypes */ "./src/redux/actions/actionTypes.ts");
/* harmony import */ var _src_utils_connectN_connectN__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/utils/connectN/connectN */ "./src/utils/connectN/connectN.ts");
/* harmony import */ var _src_utils_style_rem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/utils/style/rem */ "./src/utils/style/rem.ts");
var _jsxFileName = "/Users/david.chen/Documents/projects/next9/pages/tic-tac-toe.tsx";














var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var commonKeyWords = publicRuntimeConfig.commonKeyWords;
var flexCenterStyles =  false ? undefined : {
  name: "149xvug-flexCenterStyles",
  styles: "display:flex;justify-content:center;label:flexCenterStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0OS9wYWdlcy90aWMtdGFjLXRvZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0I0QiIsImZpbGUiOiIvVXNlcnMvZGF2aWQuY2hlbi9Eb2N1bWVudHMvcHJvamVjdHMvbmV4dDkvcGFnZXMvdGljLXRhYy10b2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBNYW5pZmVzdEhlYWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZC9NYW5pZmVzdEhlYWQnO1xuaW1wb3J0IGR5bmFtaWNTdG9yZUNhbGxiYWNrV3JhcCBmcm9tICcuLi9zcmMvdXRpbHMvcmVkdXgvZHluYW1pY1N0b3JlQ2FsbGJhY2tXcmFwJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc3JjL3JlZHV4L3N0b3JlJztcbmltcG9ydCBDb25uZWN0TiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Db25uZWN0Tic7XG5pbXBvcnQgTGluayBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBzZXR1cCwgeyBpbml0aWFsU2V0dXAgfSBmcm9tICcuLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2V0dXAnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi4vc3JjL3JlZHV4L3JlZHVjZXJzL2dhbWUnO1xuaW1wb3J0IHsgUkVTRVRfU0VUVVAsIFJFU1RBUlRfR0FNRSB9IGZyb20gJy4uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IEFjdGlvbldpdGhQYXlsb2FkIH0gZnJvbSAnLi4vc3JjL3V0aWxzL3JlZHV4L3R5cGVzJztcbmltcG9ydCB7IEdhbWVUeXBlIH0gZnJvbSAnLi4vc3JjL3V0aWxzL2Nvbm5lY3ROL2Nvbm5lY3ROJztcbmltcG9ydCByZW0gZnJvbSAnLi4vc3JjL3V0aWxzL3N0eWxlL3JlbSc7XG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5jb25zdCB7IGNvbW1vbktleVdvcmRzIH0gPSBwdWJsaWNSdW50aW1lQ29uZmlnO1xuXG5jb25zdCBmbGV4Q2VudGVyU3R5bGVzID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IGxpbmtTdHlsZXMgPSBjc3NgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAke3JlbSgzMCl9O1xuICBib3JkZXI6ICR7cmVtKDEpfSBkb3R0ZWQgZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46ICR7cmVtKDEwKX0gYXV0bztcbmA7XG5cbmNvbnN0IGNhbGxiYWNrT25Nb3VudCA9IChzdG9yZTogU3RvcmUpID0+IHtcbiAgc3RvcmUuc3Vic3RpdHVlUmVkdWNlcnMoeyBzZXR1cCwgZ2FtZSB9KTtcbiAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9TRVRVUCwgcGF5bG9hZDogaW5pdGlhbFNldHVwLnRpY1RhY1RvZSB9KTtcbiAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBSRVNUQVJUX0dBTUUsIHBheWxvYWQ6IGluaXRpYWxTZXR1cC50aWNUYWNUb2UgfSk7XG59O1xuXG4vLyBjb25zdCBjYWxsYmFja09uVW5tb3VudCA9IChzdG9yZTogU3RvcmUpID0+IHtcbi8vICAgc3RvcmUucmVtb3ZlUmVkdWNlcnMoWydzZXR1cCcsICdnYW1lJ10pO1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IFBhZ2U6IEZDID0gKCkgPT4gKFxuICA8c2VjdGlvbj5cbiAgICA8TWFuaWZlc3RIZWFkXG4gICAgICB0aXRsZT1cIlRpYyBUYWMgVG9lXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiYSBzaW1wbGUgdGljLXRhYy10b2UgZ2FtZSB1c2luZyBiaXR3aXNlIG9wZXJhdGlvbnNcIlxuICAgICAga2V5d29yZHM9e2NvbW1vbktleVdvcmRzfVxuICAgICAgdGhlbWVDb2xvcj1cInJlZFwiXG4gICAgICBocmVmQ2Fub25pY2FsPVwiL3RpYy10YWMtdG9lXCJcbiAgICAgIGZhdkljb25QYXRoPVwiL3N0YXRpYy9pY29ucy9mYXZpY29uLmljb1wiXG4gICAgICBhcHBsZUljb25QYXRoPVwiL3N0YXRpYy9pY29ucy9pY29uMTkyeDE5Mi5wbmdcIlxuICAgICAgaHJlZk1hbmlmZXN0PVwiL3N0YXRpYy9tYW5pZmVzdC9tYW5pZmVzdC5qc29uXCJcbiAgICAvPlxuICAgIDxDb25uZWN0TiBnYW1lVHlwZT17R2FtZVR5cGUudGljVGFjVG9lfSAvPlxuICAgIDxkaXYgY3NzPXtmbGV4Q2VudGVyU3R5bGVzfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxkaXYgY3NzPXtsaW5rU3R5bGVzfT5pbmRleDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWNTdG9yZUNhbGxiYWNrV3JhcDxBY3Rpb25XaXRoUGF5bG9hZCwgU3RvcmU+KHtcbiAgY2FsbGJhY2tPbk1vdW50LFxuICAvLyBjYWxsYmFja09uVW5tb3VudCxcbiAgQ2hpbGQ6IFBhZ2UsXG59KTtcbiJdfQ== */"
};
var linkStyles =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("display:inline-block;font-size:", Object(_src_utils_style_rem__WEBPACK_IMPORTED_MODULE_11__["default"])(30), ";border:", Object(_src_utils_style_rem__WEBPACK_IMPORTED_MODULE_11__["default"])(1), " dotted gray;cursor:pointer;margin:", Object(_src_utils_style_rem__WEBPACK_IMPORTED_MODULE_11__["default"])(10), " auto;label:linkStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0OS9wYWdlcy90aWMtdGFjLXRvZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJzQiIsImZpbGUiOiIvVXNlcnMvZGF2aWQuY2hlbi9Eb2N1bWVudHMvcHJvamVjdHMvbmV4dDkvcGFnZXMvdGljLXRhYy10b2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBNYW5pZmVzdEhlYWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZC9NYW5pZmVzdEhlYWQnO1xuaW1wb3J0IGR5bmFtaWNTdG9yZUNhbGxiYWNrV3JhcCBmcm9tICcuLi9zcmMvdXRpbHMvcmVkdXgvZHluYW1pY1N0b3JlQ2FsbGJhY2tXcmFwJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc3JjL3JlZHV4L3N0b3JlJztcbmltcG9ydCBDb25uZWN0TiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Db25uZWN0Tic7XG5pbXBvcnQgTGluayBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBzZXR1cCwgeyBpbml0aWFsU2V0dXAgfSBmcm9tICcuLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2V0dXAnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi4vc3JjL3JlZHV4L3JlZHVjZXJzL2dhbWUnO1xuaW1wb3J0IHsgUkVTRVRfU0VUVVAsIFJFU1RBUlRfR0FNRSB9IGZyb20gJy4uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IEFjdGlvbldpdGhQYXlsb2FkIH0gZnJvbSAnLi4vc3JjL3V0aWxzL3JlZHV4L3R5cGVzJztcbmltcG9ydCB7IEdhbWVUeXBlIH0gZnJvbSAnLi4vc3JjL3V0aWxzL2Nvbm5lY3ROL2Nvbm5lY3ROJztcbmltcG9ydCByZW0gZnJvbSAnLi4vc3JjL3V0aWxzL3N0eWxlL3JlbSc7XG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5jb25zdCB7IGNvbW1vbktleVdvcmRzIH0gPSBwdWJsaWNSdW50aW1lQ29uZmlnO1xuXG5jb25zdCBmbGV4Q2VudGVyU3R5bGVzID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IGxpbmtTdHlsZXMgPSBjc3NgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAke3JlbSgzMCl9O1xuICBib3JkZXI6ICR7cmVtKDEpfSBkb3R0ZWQgZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46ICR7cmVtKDEwKX0gYXV0bztcbmA7XG5cbmNvbnN0IGNhbGxiYWNrT25Nb3VudCA9IChzdG9yZTogU3RvcmUpID0+IHtcbiAgc3RvcmUuc3Vic3RpdHVlUmVkdWNlcnMoeyBzZXR1cCwgZ2FtZSB9KTtcbiAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9TRVRVUCwgcGF5bG9hZDogaW5pdGlhbFNldHVwLnRpY1RhY1RvZSB9KTtcbiAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBSRVNUQVJUX0dBTUUsIHBheWxvYWQ6IGluaXRpYWxTZXR1cC50aWNUYWNUb2UgfSk7XG59O1xuXG4vLyBjb25zdCBjYWxsYmFja09uVW5tb3VudCA9IChzdG9yZTogU3RvcmUpID0+IHtcbi8vICAgc3RvcmUucmVtb3ZlUmVkdWNlcnMoWydzZXR1cCcsICdnYW1lJ10pO1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IFBhZ2U6IEZDID0gKCkgPT4gKFxuICA8c2VjdGlvbj5cbiAgICA8TWFuaWZlc3RIZWFkXG4gICAgICB0aXRsZT1cIlRpYyBUYWMgVG9lXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiYSBzaW1wbGUgdGljLXRhYy10b2UgZ2FtZSB1c2luZyBiaXR3aXNlIG9wZXJhdGlvbnNcIlxuICAgICAga2V5d29yZHM9e2NvbW1vbktleVdvcmRzfVxuICAgICAgdGhlbWVDb2xvcj1cInJlZFwiXG4gICAgICBocmVmQ2Fub25pY2FsPVwiL3RpYy10YWMtdG9lXCJcbiAgICAgIGZhdkljb25QYXRoPVwiL3N0YXRpYy9pY29ucy9mYXZpY29uLmljb1wiXG4gICAgICBhcHBsZUljb25QYXRoPVwiL3N0YXRpYy9pY29ucy9pY29uMTkyeDE5Mi5wbmdcIlxuICAgICAgaHJlZk1hbmlmZXN0PVwiL3N0YXRpYy9tYW5pZmVzdC9tYW5pZmVzdC5qc29uXCJcbiAgICAvPlxuICAgIDxDb25uZWN0TiBnYW1lVHlwZT17R2FtZVR5cGUudGljVGFjVG9lfSAvPlxuICAgIDxkaXYgY3NzPXtmbGV4Q2VudGVyU3R5bGVzfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxkaXYgY3NzPXtsaW5rU3R5bGVzfT5pbmRleDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWNTdG9yZUNhbGxiYWNrV3JhcDxBY3Rpb25XaXRoUGF5bG9hZCwgU3RvcmU+KHtcbiAgY2FsbGJhY2tPbk1vdW50LFxuICAvLyBjYWxsYmFja09uVW5tb3VudCxcbiAgQ2hpbGQ6IFBhZ2UsXG59KTtcbiJdfQ== */"));

var callbackOnMount = function callbackOnMount(store) {
  store.substitueReducers({
    setup: _src_redux_reducers_setup__WEBPACK_IMPORTED_MODULE_7__["default"],
    game: _src_redux_reducers_game__WEBPACK_IMPORTED_MODULE_8__["default"]
  });
  store.dispatch({
    type: _src_redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_9__["RESET_SETUP"],
    payload: _src_redux_reducers_setup__WEBPACK_IMPORTED_MODULE_7__["initialSetup"].ticTacToe
  });
  store.dispatch({
    type: _src_redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_9__["RESTART_GAME"],
    payload: _src_redux_reducers_setup__WEBPACK_IMPORTED_MODULE_7__["initialSetup"].ticTacToe
  });
}; // const callbackOnUnmount = (store: Store) => {
//   store.removeReducers(['setup', 'game']);
// };


var Page = function Page() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Tic Tac Toe",
    description: "a simple tic-tac-toe game using bitwise operations",
    keywords: commonKeyWords,
    themeColor: "red",
    hrefCanonical: "/tic-tac-toe",
    favIconPath: "/static/icons/favicon.ico",
    appleIconPath: "/static/icons/icon192x192.png",
    hrefManifest: "/static/manifest/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_ConnectN__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gameType: _src_utils_connectN_connectN__WEBPACK_IMPORTED_MODULE_10__["GameType"].ticTacToe,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: flexCenterStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: linkStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "index")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_4__["default"])({
  callbackOnMount: callbackOnMount,
  // callbackOnUnmount,
  Child: Page
}));

/***/ })

})
//# sourceMappingURL=tic-tac-toe.js.497d7efb40e37fecc72b.hot-update.js.map