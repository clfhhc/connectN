(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("23aj");return{page:e.default||e}}])},"/eQG":function(e,t,r){r("v5Dd");var n=r("WEpk").Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},"23aj":function(e,t,r){"use strict";r.r(t);var n,a=r("q1tI"),o=r.n(a),c=r("ntF4"),i=r("8Rtz"),s=r("v7Px"),l=r.n(s),u=r("6BQ9"),f=r.n(u),p=r("doui"),d=r("MX0m"),b=r.n(d),h=r("XDT/"),m=r("d04V"),y=r.n(m),v=r("y7X9"),g={styles:o.a.createElement(b.a,{id:"942825015"},[".jsx-942825015{cursor:pointer;border:".concat(Object(v.b)(1)," solid lightgray;}")]),className:"jsx-942825015"},j={styles:o.a.createElement(b.a,{id:"943097829"},[".jsx-943097829{width:auto;padding-bottom:calc(100% - ".concat(Object(v.b)(14),");margin:").concat(Object(v.b)(5),";border-radius:50%;border:").concat(Object(v.b)(2)," solid gray;}"),"@media only screen and (max-width:400px){.jsx-943097829{padding-bottom:calc(100% - ".concat(Object(v.b)(6),");margin:").concat(Object(v.b)(2),";border:").concat(Object(v.b)(1)," solid gray;}}")]),className:"jsx-943097829"},O=[{styles:o.a.createElement(b.a,{id:"2099551365"},[".jsx-2099551365{border-color:gray;background:yellow;}"]),className:"jsx-2099551365"},{styles:o.a.createElement(b.a,{id:"4072791683"},[".jsx-4072791683{border-color:lightgray;background:red;}"]),className:"jsx-4072791683"},{styles:o.a.createElement(b.a,{id:"4155168077"},[".jsx-4155168077{border-color:gray;background:skyblue;}"]),className:"jsx-4155168077"},{styles:o.a.createElement(b.a,{id:"878509603"},[".jsx-878509603{border-color:lightgray;background:pink;}"]),className:"jsx-878509603"}],w=function(e){var t=e.rowNum,r=e.boards,n=e.onClickOnCell,c=r[0].length,i=function(e){return{styles:o.a.createElement(b.a,{id:"3912879270",dynamic:[Object(v.b)(80*e),Object(v.b)(20),e,Object(v.b)(2)]},[".__jsx-style-dynamic-selector{max-width:".concat(Object(v.b)(80*e),";margin:").concat(Object(v.b)(20)," auto;box-sizing:border-box;display:grid;grid-template-columns:repeat(").concat(e,",1fr);grid-gap:0;grid-auto-rows:auto;border:").concat(Object(v.b)(2)," solid black;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;}")]),className:b.a.dynamic([["3912879270",[Object(v.b)(80*e),Object(v.b)(20),e,Object(v.b)(2)]]])}}(c),s=Object(a.useCallback)(function(e,r){return{styles:o.a.createElement(b.a,{id:"726451075",dynamic:[t-e,r+1]},[".__jsx-style-dynamic-selector{grid-row:".concat(t-e," / span 1;grid-column:").concat(r+1," / span 1;}")]),className:b.a.dynamic([["726451075",[t-e,r+1]]])}},[t]),l=Object(a.useMemo)(function(){return y()(Array(c),function(e,r){return y()(Array(t),function(e,t){return s(t,r)})})},[c,t,s]);return o.a.createElement("div",{className:i.className},i.styles,r[0].map(function(e,a){return y()(Array(t),function(e,t){return o.a.createElement("button",{type:"button","aria-label":"board",key:"cell-".concat(a,"-").concat(t),className:"".concat(g.className," ").concat(l[a][t].className),onClick:n(a)},l[a][t].styles,g.styles,o.a.createElement("div",{className:"".concat(j.className).concat(r.reduce(function(e,n,o){return r[o][a]&1<<t&&" ".concat(O[o].className)||e},""))},j.styles,O.map(function(e){return e.styles})))})}))},E=r("V/h/"),x=r("g4rx"),k=["boards","win","filled","gameOver","turn"],N=function(e){var t=e.col,r=e.curRecord,n=e.fullBoard,a=e.checkAgainst,o=e.next;return r.filled&1<<t?Object(E.a)(r,function(e){var r=e.boards.reduce(function(e,r){return e|r[t]||r[t]},0)+1;e.boards[e.turn][t]^=r,n+1&r<<2&&(e.filled^=1<<t),!function(e){for(var t=e.board,r=e.piece,n=e.col,a=e.checkAgainst,o=e.fullBoard,c={curCol:0,curRound:0,leftDiag:0,rightDiag:0,row:0,checkAgainst:a};!(c.checkAgainst&r);)c.checkAgainst<<=1;if(!(t[n]&c.checkAgainst^c.checkAgainst))return!0;var i=1<<n;for(c.checkAgainst=a;!(c.checkAgainst&o^c.checkAgainst);){if(c.checkAgainst&i){for(c.curCol=c.curRound,c.row=t[c.curCol],c.rightDiag=t[c.curCol],c.leftDiag=t[c.curCol],c.curCol+=1;1<<c.curCol&c.checkAgainst;)c.leftDiag=c.leftDiag<<1&t[c.curCol],c.rightDiag=c.rightDiag>>1&t[c.curCol],c.row&=t[c.curCol],c.curCol+=1;if(c.leftDiag|c.rightDiag|c.row)return!0}c.checkAgainst<<=1,c.curRound+=1}return!1}({board:e.boards[e.turn],piece:r,col:t,checkAgainst:a,fullBoard:n})?e.filled?e.turn=o[e.turn]:e.gameOver=!0:(e.gameOver=!0,e.win=e.turn)}):r},A=function(e,t,r,n){return Object(E.a)(e,function(e){e.win=-1,e.filled=t,e.gameOver=!1,e.turn=e.turn||0,e.boards=n.map(function(){return r.slice()})})},P={record:{boards:[Array(7).fill(0),Array(7).fill(0)],win:-1,filled:Math.pow(2,7)-1,gameOver:!1,turn:0}},C={updateGameRecord:function(e,t){return Object(E.a)(e,function(e){k.forEach(function(r){void 0!==t[r]&&(e.record[r]=t[r])})})}},R=Object(x.a)(C);!function(e){e.CHANGE_RULES="CHANGE_RULES",e.CHANGE_PLAYERS="CHANGE_PLAYERS"}(n||(n={}));var _={styles:o.a.createElement(b.a,{id:"95139721"},[".jsx-95139721{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;margin:".concat(Object(v.b)(20)," auto;font-size:").concat(Object(v.b)(20),";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;border-top:").concat(Object(v.b)(1)," solid transparent;border-bottom:").concat(Object(v.b)(1)," solid transparent;}"),".jsx-95139721:hover{border-top:".concat(Object(v.b)(1)," solid black;border-bottom:").concat(Object(v.b)(1)," solid black;}")]),className:"jsx-95139721"},z={styles:o.a.createElement(b.a,{id:"4124586048"},[".jsx-4124586048{margin:0 ".concat(Object(v.b)(10),";display:inline-block;}")]),className:"jsx-4124586048"},D={styles:o.a.createElement(b.a,{id:"3166081097"},[".jsx-3166081097{display:inline-block;border:".concat(Object(v.b)(1)," solid lightgray;border-radius:50%;margin:0 ").concat(Object(v.b)(10),";width:").concat(Object(v.b)(15),";height:").concat(Object(v.b)(15),";}")]),className:"jsx-3166081097"},S={styles:o.a.createElement(b.a,{id:"291324850"},[".jsx-291324850{display:block;text-align:center;font-size:".concat(Object(v.b)(16),";outline:none;margin:").concat(Object(v.b)(20)," auto;max-width:").concat(Object(v.b)(350),";border:").concat(Object(v.b)(1)," solid gray;width:100%;}")]),className:"jsx-291324850"},F=function(){var e=Object(h.a)(),t=e.state,r=e.dispatch,c=Object(a.useReducer)(R,P),i=Object(p.default)(c,2),s=i[0],u=i[1],d=Object(a.useState)(null),m=Object(p.default)(d,2),y=m[0],g=m[1],j=Object(a.useState)(""),E=Object(p.default)(j,2),x=E[0],k=E[1],C=t.setup,F=C.fullBoard,G=C.boardSetup,T=C.next,U=C.names,H=C.rowNum,I=C.checkAgainst,L=C.winRule,M=s.record,B=Object(a.useCallback)(function(){u({type:"updateGameRecord",payload:A(M,F,G,T)})},[M,F,G,T]);Object(a.useEffect)(function(){B()},[t.setup]);var K=Object(a.useMemo)(function(){return function(e,t){return{styles:o.a.createElement(b.a,{id:"3700811658",dynamic:[Object(v.b)(40),Object(v.b)(36),Object(v.b)(1),Object(v.b)(1),e===n.CHANGE_RULES?"Rules":"Connect ".concat(t),Object(v.b)(1),Object(v.b)(1),e===n.CHANGE_RULES?"Rules":"Change Rules"]},[".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(v.b)(40)," auto;font-size:").concat(Object(v.b)(36),";border-top:").concat(Object(v.b)(1)," solid transparent;border-bottom:").concat(Object(v.b)(1)," solid transparent;cursor:pointer;}"),".__jsx-style-dynamic-selector::after{content:'".concat(e===n.CHANGE_RULES?"Rules":"Connect ".concat(t),"';}"),".__jsx-style-dynamic-selector:hover{border-top:".concat(Object(v.b)(1)," solid black;border-bottom:").concat(Object(v.b)(1)," solid black;}"),".__jsx-style-dynamic-selector:hover::after{content:'".concat(e===n.CHANGE_RULES?"Rules":"Change Rules","';}")]),className:b.a.dynamic([["3700811658",[Object(v.b)(40),Object(v.b)(36),Object(v.b)(1),Object(v.b)(1),e===n.CHANGE_RULES?"Rules":"Connect ".concat(t),Object(v.b)(1),Object(v.b)(1),e===n.CHANGE_RULES?"Rules":"Change Rules"]]])}}(y,L)},[y,L]),X=Object(a.useMemo)(function(){return e=function(e,t){return e.gameOver?e.win>=0?"Winner is ".concat(t[e.turn],"!"):"Drawed":"It's ".concat(t[e.turn],"'s turn")}(M,U),{styles:o.a.createElement(b.a,{id:"2746256327",dynamic:[Object(v.b)(20),Object(v.b)(20),Object(v.b)(1),Object(v.b)(1),e,Object(v.b)(1),Object(v.b)(1)]},[".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(v.b)(20)," auto;font-size:").concat(Object(v.b)(20),";cursor:pointer;border-top:").concat(Object(v.b)(1)," solid transparent;border-bottom:").concat(Object(v.b)(1)," solid transparent;}"),'.__jsx-style-dynamic-selector::after{content:"'.concat(e,'";}'),".__jsx-style-dynamic-selector:hover{border-top:".concat(Object(v.b)(1)," solid black;border-bottom:").concat(Object(v.b)(1)," solid black;}"),".__jsx-style-dynamic-selector:hover::after{content:'Restart Game';}"]),className:b.a.dynamic([["2746256327",[Object(v.b)(20),Object(v.b)(20),Object(v.b)(1),Object(v.b)(1),e,Object(v.b)(1),Object(v.b)(1)]]])};var e},[M,U]),J=Object(a.useCallback)(function(){g(null),k("")},[g,k]),q=Object(a.useCallback)(function(e){e&&e.focus()},[]),Y=Object(a.useCallback)(function(e){return function(){y||u({type:"updateGameRecord",payload:M.gameOver?A(M,F,G,T):N({col:e,curRecord:M,fullBoard:F,checkAgainst:I,next:T})})}},[u,N,M,F,I,T,y]);return o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement("button",{type:"button","aria-label":"Title",className:K.className,onClick:function(){y!==n.CHANGE_RULES&&g(n.CHANGE_RULES)}},K.styles)),y===n.CHANGE_RULES?o.a.createElement("input",{ref:q,"aria-label":"change-rules-label",className:S.className,type:"text",placeholder:"[column],[row],[number]",value:x,onChange:function(e){return k(e.target.value)},onKeyDown:function(e){if(13===e.which){try{var t=x.split(",").map(function(e){var t=f()(e.trim(),10);if(l()(t))throw new Error;return t});if(3!==t.length)throw new Error;r({type:"changeRules",payload:{rowNum:t[1],colNum:t[0],winRule:t[2]}})}catch(n){console.log("invalid input")}J()}else 27===e.keyCode&&J()},onBlur:function(){J()}}):o.a.createElement("button",{type:"button","aria-label":"banner",className:X.className,onClick:function(){return B()}},X.styles),S.styles,y===n.CHANGE_PLAYERS?o.a.createElement("input",{ref:q,"aria-label":"change-players-input",className:S.className,type:"text",placeholder:"up to 4 player's names with comma in between",value:x,onChange:function(e){return k(e.target.value)},onKeyDown:function(e){if(13===e.which){try{var t=x.split(",").map(function(e){return e.trim()});if(t.length<1||t.length>4)throw new Error;r({type:"changePlayers",payload:t})}catch(n){console.log("invalid input")}J()}else 27===e.keyCode&&J()},onBlur:function(){J()}}):o.a.createElement("button",{type:"button","aria-label":"legend",className:_.className,onClick:function(){return g(n.CHANGE_PLAYERS)}},_.styles,U.map(function(e,t){return o.a.createElement("div",{className:z.className,key:"legend-".concat(e)},z.styles,o.a.createElement("div",{className:"".concat(D.className,"\n                ").concat(O[t].className)},O[t].styles,D.styles),e)})),o.a.createElement(w,{boards:M.boards,rowNum:H,onClickOnCell:Y}))};t.default=function(){return o.a.createElement("div",null,o.a.createElement(c.a,{title:"Connect N",themeColor:"#ffffff",hrefPage:"/",favIconPath:"/static/icons/favicon.ico",hrefManifest:"/static/manifest/manifest.json"}),o.a.createElement(F,null),o.a.createElement("p",null,o.a.createElement(i.a,{href:"/about"},o.a.createElement("a",null,"About"))))}},"4mXO":function(e,t,r){e.exports=r("7TPF")},"5pKv":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(e,t,r){e.exports=r("uekQ")},"7TPF":function(e,t,r){r("AUvm"),e.exports=r("WEpk").Object.getOwnPropertySymbols},"8Rtz":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("PBx+"),c=r.n(o),i=r("YFqc"),s=r.n(i),l=c()().publicRuntimeConfig.linkPrefix;t.a=function(e){var t=e.href,r=e.as,n=void 0===r?t:r,o=e.children,c=e.passHref;return a.a.createElement(s.a,{href:t,as:"".concat(l).concat(n),passHref:c},o)}},"9Jkg":function(e,t,r){e.exports=r("oh+g")},"Jo+v":function(e,t,r){e.exports=r("/eQG")},TclB:function(e,t,r){r("Vzfy"),e.exports=r("WEpk").Number.isNaN},"V/h/":function(e,t,r){"use strict";(function(e){var r,n="undefined"!=typeof Symbol?Symbol("immer-nothing"):((r={})["immer-nothing"]=!0,r),a="undefined"!=typeof Symbol&&Symbol.for?Symbol.for("immer-draftable"):"__$immer_draftable",o="undefined"!=typeof Symbol&&Symbol.for?Symbol.for("immer-state"):"__$immer_state";function c(e){return!!e&&!!e[o]}function i(e){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e))return!0;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype||(!!e[a]||!!e.constructor[a])}var s=Object.assign||function(e,t){for(var r in t)d(t,r)&&(e[r]=t[r]);return e},l="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function u(e,t){if(void 0===t&&(t=!1),Array.isArray(e))return e.slice();var r=Object.create(Object.getPrototypeOf(e));return l(e).forEach(function(n){if(n!==o){var a=Object.getOwnPropertyDescriptor(e,n),c=a.value;if(a.get){if(!t)throw new Error("Immer drafts cannot have computed properties");c=a.get.call(e)}a.enumerable?r[n]=c:Object.defineProperty(r,n,{value:c,writable:!0,configurable:!0})}}),r}function f(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)t(r,e[r],e);else l(e).forEach(function(r){return t(r,e[r],e)})}function p(e,t){var r=Object.getOwnPropertyDescriptor(e,t);return!!r&&r.enumerable}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function b(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}var h=function(e){this.drafts=[],this.parent=e,this.canAutoFreeze=!0,this.patches=null};function m(e){e[o].revoke()}h.prototype.usePatches=function(e){e&&(this.patches=[],this.inversePatches=[],this.patchListener=e)},h.prototype.revoke=function(){this.leave(),this.drafts.forEach(m),this.drafts=null},h.prototype.leave=function(){this===h.current&&(h.current=this.parent)},h.current=null,h.enter=function(){return this.current=new h(this.current)};var y={};function v(e,t){var r=Array.isArray(e),n=x(e);f(n,function(t){!function(e,t,r){var n=y[t];n?n.enumerable=r:y[t]=n={configurable:!0,enumerable:r,get:function(){return function(e,t){k(e);var r=O(j(e),t);if(e.finalizing)return r;if(r===O(e.base,t)&&i(r))return E(e),e.copy[t]=v(r,e);return r}(this[o],t)},set:function(e){!function(e,t,r){if(k(e),e.assigned[t]=!0,!e.modified){if(b(r,O(j(e),t)))return;w(e),E(e)}e.copy[t]=r}(this[o],t,e)}};Object.defineProperty(e,t,n)}(n,t,r||p(e,t))});var a,c,s,l=t?t.scope:h.current;return a=n,c=o,s={scope:l,modified:!1,finalizing:!1,finalized:!1,assigned:{},parent:t,base:e,draft:n,copy:null,revoke:g,revoked:!1},Object.defineProperty(a,c,{value:s,enumerable:!1,writable:!0}),l.drafts.push(n),n}function g(){this.revoked=!0}function j(e){return e.copy||e.base}function O(e,t){var r=e[o];if(r&&!r.finalizing){r.finalizing=!0;var n=e[t];return r.finalizing=!1,n}return e[t]}function w(e){e.modified||(e.modified=!0,e.parent&&w(e.parent))}function E(e){e.copy||(e.copy=x(e.base))}function x(e){var t=e&&e[o];if(t){t.finalizing=!0;var r=u(t.draft,!0);return t.finalizing=!1,r}return u(e)}function k(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(j(e)))}function N(e){for(var t=e.length-1;t>=0;t--){var r=e[t][o];r.modified||(Array.isArray(r.base)?P(r)&&w(r):A(r)&&w(r))}}function A(e){for(var t=e.base,r=e.draft,n=Object.keys(r),a=n.length-1;a>=0;a--){var c=n[a],i=t[c];if(void 0===i&&!d(t,c))return!0;var s=r[c],l=s&&s[o];if(l?l.base!==i:!b(s,i))return!0}return n.length!==Object.keys(t).length}function P(e){var t=e.draft;if(t.length!==e.base.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}var C=Object.freeze({willFinalize:function(e,t,r){e.drafts.forEach(function(e){e[o].finalizing=!0}),r?c(t)&&t[o].scope===e&&N(e.drafts):(e.patches&&function e(t){if(t&&"object"==typeof t){var r=t[o];if(r){var n=r.base,a=r.draft,c=r.assigned;if(Array.isArray(t)){if(P(r)){if(w(r),c.length=!0,a.length<n.length)for(var i=a.length;i<n.length;i++)c[i]=!1;else for(var s=n.length;s<a.length;s++)c[s]=!0;for(var l=0;l<a.length;l++)void 0===c[l]&&e(a[l])}}else Object.keys(a).forEach(function(t){void 0!==n[t]||d(n,t)?c[t]||e(a[t]):(c[t]=!0,w(r))}),Object.keys(n).forEach(function(e){void 0!==a[e]||d(a,e)||(c[e]=!1,w(r))})}}}(e.drafts[0]),N(e.drafts))},createProxy:v});function R(e,t){var r=t?t.scope:h.current,n={scope:r,modified:!1,finalized:!1,assigned:{},parent:t,base:e,draft:null,drafts:{},copy:null,revoke:null},a=Array.isArray(e)?Proxy.revocable([n],z):Proxy.revocable(n,_),o=a.revoke,c=a.proxy;return n.draft=c,n.revoke=o,r.drafts.push(c),c}var _={get:function(e,t){if(t===o)return e;var r=e.drafts;if(!e.modified&&d(r,t))return r[t];var n=D(e)[t];if(e.finalized||!i(n))return n;if(e.modified){if(n!==S(e.base,t))return n;r=e.copy}return r[t]=R(n,e)},has:function(e,t){return t in D(e)},ownKeys:function(e){return Reflect.ownKeys(D(e))},set:function(e,t,r){if(!e.modified){var n=S(e.base,t),a=r?b(n,r)||r===e.drafts[t]:b(n,r)&&t in e.base;if(a)return!0;F(e)}return e.assigned[t]=!0,e.copy[t]=r,!0},deleteProperty:function(e,t){(void 0!==S(e.base,t)||t in e.base)&&(e.assigned[t]=!1,F(e));e.copy&&delete e.copy[t];return!0},getOwnPropertyDescriptor:function(e,t){var r=D(e),n=Reflect.getOwnPropertyDescriptor(r,t);n&&(n.writable=!0,n.configurable=!Array.isArray(r)||"length"!==t);return n},defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},z={};function D(e){return e.copy||e.base}function S(e,t){var r=e[o],n=Reflect.getOwnPropertyDescriptor(r?D(r):e,t);return n&&n.value}function F(e){e.modified||(e.modified=!0,e.copy=s(u(e.base),e.drafts),e.drafts=null,e.parent&&F(e.parent))}f(_,function(e,t){z[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),z.deleteProperty=function(e,t){if(isNaN(parseInt(t)))throw new Error("Immer only supports deleting array indices");return _.deleteProperty.call(this,e[0],t)},z.set=function(e,t,r){if("length"!==t&&isNaN(parseInt(t)))throw new Error("Immer only supports setting array indices and the 'length' property");return _.set.call(this,e[0],t,r)};var G=Object.freeze({willFinalize:function(){},createProxy:R});function T(e,t,r,n){Array.isArray(e.base)?function(e,t,r,n){var a,o,c=e.base,i=e.copy,s=e.assigned;i.length<c.length&&(c=(a=[i,c])[0],i=a[1],r=(o=[n,r])[0],n=o[1]);var l=i.length-c.length,u=0;for(;c[u]===i[u]&&u<c.length;)++u;var f=c.length;for(;f>u&&c[f-1]===i[f+l-1];)--f;for(var p=u;p<f;++p)if(s[p]&&i[p]!==c[p]){var d=t.concat([p]);r.push({op:"replace",path:d,value:i[p]}),n.push({op:"replace",path:d,value:c[p]})}for(var b=f!=c.length,h=r.length,m=f+l-1;m>=f;--m){var y=t.concat([m]);r[h+m-f]={op:"add",path:y,value:i[m]},b&&n.push({op:"remove",path:y})}b||n.push({op:"replace",path:t.concat(["length"]),value:c.length})}(e,t,r,n):function(e,t,r,n){var a=e.base,o=e.copy;f(e.assigned,function(e,c){var i=a[e],s=o[e],l=c?e in a?"replace":"add":"remove";if(i!==s||"replace"!==l){var u=t.concat(e);r.push("remove"===l?{op:l,path:u}:{op:l,path:u,value:s}),n.push("add"===l?{op:"remove",path:u}:"remove"===l?{op:"add",path:u,value:i}:{op:"replace",path:u,value:i})}})}(e,t,r,n)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r],a=n.path;if(0===a.length&&"replace"===n.op)e=n.value;else{for(var o=e,c=0;c<a.length-1;c++)if(!(o=o[a[c]])||"object"!=typeof o)throw new Error("Cannot apply patch, path doesn't resolve: "+a.join("/"));var i=a[a.length-1];switch(n.op){case"replace":o[i]=n.value;break;case"add":Array.isArray(o)?o.splice(i,0,n.value):o[i]=n.value;break;case"remove":Array.isArray(o)?o.splice(i,1):delete o[i];break;default:throw new Error("Unsupported patch operation: "+n.op)}}}return e}var H={useProxies:"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect,autoFreeze:void 0===e&&"verifyMinified"===function(){}.name,onAssign:null,onDelete:null,onCopy:null},I=function(e){s(this,H,e),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this)};I.prototype.produce=function(e,t,r){var a,o=this;if("function"==typeof e&&"function"!=typeof t){var c=t;t=e;var s=this;return function(e){var r=this;void 0===e&&(e=c);for(var n=[],a=arguments.length-1;a-- >0;)n[a]=arguments[a+1];return s.produce(e,function(e){return t.call.apply(t,[r,e].concat(n))})}}if("function"!=typeof t)throw new Error("The first or second argument to `produce` must be a function");if(void 0!==r&&"function"!=typeof r)throw new Error("The third argument to `produce` must be a function or undefined");if(i(e)){var l=h.enter(),u=this.createProxy(e),f=!0;try{a=t(u),f=!1}finally{f?l.revoke():l.leave()}return a instanceof Promise?a.then(function(e){return l.usePatches(r),o.processResult(e,l)},function(e){throw l.revoke(),e}):(l.usePatches(r),this.processResult(a,l))}return void 0===(a=t(e))?e:a!==n?a:void 0},I.prototype.createDraft=function(e){if(!i(e))throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object");var t=h.enter(),r=this.createProxy(e);return r[o].isManual=!0,t.leave(),r},I.prototype.finishDraft=function(e,t){var r=e&&e[o];if(!r||!r.isManual)throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`");if(r.finalized)throw new Error("The given draft is already finalized");var n=r.scope;return n.usePatches(t),this.processResult(void 0,n)},I.prototype.setAutoFreeze=function(e){this.autoFreeze=e},I.prototype.setUseProxies=function(e){this.useProxies=e,s(this,e?G:C)},I.prototype.applyPatches=function(e,t){return c(e)?U(e,t):this.produce(e,function(e){return U(e,t)})},I.prototype.processResult=function(e,t){var r=t.drafts[0],a=void 0!==e&&e!==r;if(this.willFinalize(t,e,a),a){if(r[o].modified)throw t.revoke(),new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");i(e)&&(e=this.finalize(e,null,t)),t.patches&&(t.patches.push({op:"replace",path:[],value:e}),t.inversePatches.push({op:"replace",path:[],value:r[o].base}))}else e=this.finalize(r,[],t);return t.revoke(),t.patches&&t.patchListener(t.patches,t.inversePatches),e!==n?e:void 0},I.prototype.finalize=function(e,t,r){var n=this,a=e[o];if(!a)return Object.isFrozen(e)?e:this.finalizeTree(e,null,r);if(a.scope!==r)return e;if(!a.modified)return a.base;if(!a.finalized){if(a.finalized=!0,this.finalizeTree(a.draft,t,r),this.onDelete)if(this.useProxies){var c=a.assigned;for(var i in c)c[i]||this.onDelete(a,i)}else{var s=a.base,l=a.copy;f(s,function(e){d(l,e)||n.onDelete(a,e)})}this.onCopy&&this.onCopy(a),this.autoFreeze&&r.canAutoFreeze&&Object.freeze(a.copy),t&&r.patches&&T(a,t,r.patches,r.inversePatches)}return a.copy},I.prototype.finalizeTree=function(e,t,r){var n=this,a=e[o];a&&(this.useProxies||(a.copy=u(a.draft,!0)),e=a.copy);var s=!!t&&!!r.patches,l=function(o,u,d){if(u===d)throw Error("Immer forbids circular references");var h=!!a&&d===e;if(c(u)){var m=h&&s&&!a.assigned[o]?t.concat(o):null;if(c(u=n.finalize(u,m,r))&&(r.canAutoFreeze=!1),Array.isArray(d)||p(d,o)?d[o]=u:Object.defineProperty(d,o,{value:u}),h&&u===a.base[o])return}else{if(h&&b(u,a.base[o]))return;i(u)&&!Object.isFrozen(u)&&f(u,l)}h&&n.onAssign&&n.onAssign(a,o,u)};return f(e,l),e};var L=new I,M=L.produce;L.setAutoFreeze.bind(L),L.setUseProxies.bind(L),L.applyPatches.bind(L),L.createDraft.bind(L),L.finishDraft.bind(L);t.a=M}).call(this,r("8oxB"))},Vzfy:function(e,t,r){var n=r("Y7ZC");n(n.S,"Number",{isNaN:function(e){return e!=e}})},"XDT/":function(e,t,r){"use strict";var n=r("doui"),a=r("q1tI");var o={};var c=function(e,t){var r=Object(a.createContext)(o),n=function(){return Object(a.useContext)(r)};return n.Context=r,n.Provider=function(n){var o=e(n),c=t?Object(a.useMemo)(function(){return o},t(o)):o;return Object(a.createElement)(r.Provider,{value:c},n.children)},n},i=r("hfKm"),s=r.n(i);function l(e,t,r){return t in e?s()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=r("Jo+v"),f=r.n(u),p=r("4mXO"),d=r.n(p),b=r("pLtp"),h=r.n(b);function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=h()(r);"function"==typeof d.a&&(n=n.concat(d()(r).filter(function(e){return f()(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}var y,v,g,j=r("V/h/"),O=r("g4rx"),w={rowNum:6,colNum:7,winRule:4,names:["O","X"],next:[1,0],fullBoard:Math.pow(2,7)-1,checkAgainst:Math.pow(2,4)-1,boardSetup:Array(7).fill(0)},E={resetSetup:function(e,t){return t},changePlayers:function(e,t){return t.length>4?e:Object(j.a)(e,function(e){e.names=t,e.next=t.map(function(e,r){return r+1===t.length?0:r+1})})},changeRules:function(e,t){var r=t.rowNum,n=t.colNum,a=t.winRule;return a>r||a>n||a<3?e:n>12||n<3||r>10||r<3?e:Object(j.a)(e,function(e){e.rowNum=r,e.colNum=n,e.winRule=a,e.fullBoard=Math.pow(2,n)-1,e.checkAgainst=Math.pow(2,a)-1,e.boardSetup=Array(n).fill(0)})}},x=Object(O.a)(E),k={setup:w},N=(y={setup:x},v=h()(y).reduce(function(e,t){return"function"==typeof y[t]?m({},e,l({},t,y[t])):e},{}),g=h()(v),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=!1,n={};return g.forEach(function(a){var o=v[a],c=e[a],i=o(c,t);n[a]=i,r=r||i!==c}),r?n:e});var A=c(function(){var e=Object(a.useReducer)(N,k),t=Object(n.default)(e,2);return{state:t[0],dispatch:t[1]}},function(e){return[e.state]});t.a=A},XWtR:function(e,t,r){var n=r("5T2Y").parseInt,a=r("oc46").trim,o=r("5pKv"),c=/^[-+]?0[xX]/;e.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(e,t){var r=a(String(e),3);return n(r,t>>>0||(c.test(r)?16:10))}:n},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),a=n(r("9Jkg")),o=n(r("/HRN")),c=n(r("WaGi")),i=n(r("ZDA2")),s=n(r("/+P4")),l=n(r("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=r("CxY0"),d=u(r("q1tI")),b=(f(r("17x9")),u(r("nOHt"))),h=r("Bu4q");function m(e){return e&&"object"==typeof e?h.formatWithValidation(e):e}var y=function(e){function t(){var e,r,n,a,c;return(0,o.default)(this,t),(e=(0,i.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:m(e),as:m(t)}},n=null,a=null,c=null,function(e,t){if(e===n&&t===a)return c;var o=r(e,t);return n=e,a=t,c=o,o}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,a=r.target;if("A"!==n||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),c=o.href,i=o.as;if(function(e){var t=p.parse(e,!1,!0),r=p.parse(h.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(c)){var s=window.location.pathname;c=p.resolve(s,c),i=i?p.resolve(s,i):c,t.preventDefault();var l=e.props.scroll;null==l&&(l=i.indexOf("#")<0),b.default[e.props.replace?"replace":"push"](c,i,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,l.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=p.resolve(e,t);b.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),c={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(c.href=a||n),c.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(c.href=b.Router._rewriteUrlForNextExport(c.href)),d.default.cloneElement(o,c)}}]),t}(d.Component);t.default=y},dEVD:function(e,t,r){var n=r("Y7ZC"),a=r("XWtR");n(n.G+n.F*(parseInt!=a),{parseInt:a})},g4rx:function(e,t,r){"use strict";t.a=function(e){return function(t,r){return r.type in e?e[r.type](t,r.payload):t}}},ntF4:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("m/Pd"),c=r.n(o),i=r("o9SG"),s=r.n(i),l=r("8Rtz");t.a=function(e){var t=e.title,r=void 0===t?"":t,n=e.description,o=void 0===n?r:n,i=e.charset,u=void 0===i?"utf-8":i,f=e.hrefPage,p=e.hrefManifest,d=e.viewportScale,b=e.themeColor,h=e.favIconPath,m=e.keywords,y=void 0===m?r:m,v=e.refresh,g=e.children;return a.a.createElement(c.a,null,a.a.createElement("title",null,r),a.a.createElement("meta",{charSet:u}),a.a.createElement("meta",{name:"description",content:o}),a.a.createElement(l.a,{href:p,passHref:!0},a.a.createElement(s.a,{themeColor:b,initialScale:d})),f&&a.a.createElement(l.a,{href:f,passHref:!0},a.a.createElement("link",{rel:"canonical"})),h&&a.a.createElement(l.a,{href:h,passHref:!0},a.a.createElement("link",{rel:"shortcut icon",type:"image/x-icon"})),a.a.createElement("meta",{name:"keywords",content:y}),a.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),v&&a.a.createElement("meta",{httpEquiv:"refresh",content:"".concat(v)}),g)}},o9SG:function(e,t,r){const{createElement:n}=r("q1tI");e.exports=(({href:e="/static/manifest/manifest.json",themeColor:t="#FFFFFF",initialScale:r="1"})=>{return[n("meta",{name:"viewport",content:"width=device-width","initial-scale":r}),n("meta",{name:"theme-color",content:t}),n("link",{rel:"manifest",href:e})]})},oc46:function(e,t,r){var n=r("Y7ZC"),a=r("Jes0"),o=r("KUxP"),c=r("5pKv"),i="["+c+"]",s=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),u=function(e,t,r){var a={},i=o(function(){return!!c[e]()||"​"!="​"[e]()}),s=a[e]=i?t(f):c[e];r&&(a[r]=s),n(n.P+n.F*i,"String",a)},f=u.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(l,"")),e};e.exports=u},"oh+g":function(e,t,r){var n=r("WEpk"),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},uekQ:function(e,t,r){r("dEVD"),e.exports=r("WEpk").parseInt},v5Dd:function(e,t,r){var n=r("NsO/"),a=r("vwuL").f;r("zn7N")("getOwnPropertyDescriptor",function(){return function(e,t){return a(n(e),t)}})},v7Px:function(e,t,r){e.exports=r("TclB")}},[["/EDR","5d41","9da1"]]]);