(window.webpackJsonp=window.webpackJsonp||[]).push([["853a"],{"5pKv":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(e,t,a){e.exports=a("uekQ")},"H1/e":function(e,t,a){"use strict";var c,n=a("v7Px"),r=a.n(n),o=a("6BQ9"),s=a.n(o),l=a("doui"),i=a("MX0m"),b=a.n(i),u=a("q1tI"),d=a.n(u),m=a("XDT/"),f=a("d04V"),j=a.n(f),g=a("y7X9"),p={styles:d.a.createElement(b.a,{id:"942825015"},[".jsx-942825015{cursor:pointer;border:".concat(Object(g.b)(1)," solid lightgray;}")]),className:"jsx-942825015"},y={styles:d.a.createElement(b.a,{id:"943097829"},[".jsx-943097829{width:auto;padding-bottom:calc(100% - ".concat(Object(g.b)(14),");margin:").concat(Object(g.b)(5),";border-radius:50%;border:").concat(Object(g.b)(2)," solid gray;}"),"@media only screen and (max-width:400px){.jsx-943097829{padding-bottom:calc(100% - ".concat(Object(g.b)(6),");margin:").concat(Object(g.b)(2),";border:").concat(Object(g.b)(1)," solid gray;}}")]),className:"jsx-943097829"},O=[{styles:d.a.createElement(b.a,{id:"2099551365"},[".jsx-2099551365{border-color:gray;background:yellow;}"]),className:"jsx-2099551365"},{styles:d.a.createElement(b.a,{id:"4072791683"},[".jsx-4072791683{border-color:lightgray;background:red;}"]),className:"jsx-4072791683"},{styles:d.a.createElement(b.a,{id:"4155168077"},[".jsx-4155168077{border-color:gray;background:skyblue;}"]),className:"jsx-4155168077"},{styles:d.a.createElement(b.a,{id:"878509603"},[".jsx-878509603{border-color:lightgray;background:pink;}"]),className:"jsx-878509603"}],h=function(e){var t=e.rowNum,a=e.boards,c=e.onClickOnCell,n=a[0].length,r=function(e){return{styles:d.a.createElement(b.a,{id:"3912879270",dynamic:[Object(g.b)(80*e),Object(g.b)(20),e,Object(g.b)(2)]},[".__jsx-style-dynamic-selector{max-width:".concat(Object(g.b)(80*e),";margin:").concat(Object(g.b)(20)," auto;box-sizing:border-box;display:grid;grid-template-columns:repeat(").concat(e,",1fr);grid-gap:0;grid-auto-rows:auto;border:").concat(Object(g.b)(2)," solid black;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;}")]),className:b.a.dynamic([["3912879270",[Object(g.b)(80*e),Object(g.b)(20),e,Object(g.b)(2)]]])}}(n),o=Object(u.useCallback)(function(e,a){return{styles:d.a.createElement(b.a,{id:"726451075",dynamic:[t-e,a+1]},[".__jsx-style-dynamic-selector{grid-row:".concat(t-e," / span 1;grid-column:").concat(a+1," / span 1;}")]),className:b.a.dynamic([["726451075",[t-e,a+1]]])}},[t]),s=Object(u.useMemo)(function(){return j()(Array(n),function(e,a){return j()(Array(t),function(e,t){return o(t,a)})})},[n,t,o]);return d.a.createElement("div",{className:r.className},r.styles,a[0].map(function(e,n){return j()(Array(t),function(e,t){return d.a.createElement("button",{type:"button","aria-label":"board",key:"cell-".concat(n,"-").concat(t),className:"".concat(p.className," ").concat(s[n][t].className),onClick:c(n)},s[n][t].styles,p.styles,d.a.createElement("div",{className:"".concat(y.className).concat(a.reduce(function(e,c,r){return a[r][n]&1<<t&&" ".concat(O[r].className)||e},""))},y.styles,O.map(function(e){return e.styles})))})}))},x=a("V/h/"),E=a("g4rx"),N=["boards","win","filled","gameOver","turn"],w=function(e){var t=e.col,a=e.curRecord,c=e.fullBoard,n=e.checkAgainst,r=e.next;return a.filled&1<<t?Object(x.a)(a,function(e){var a=e.boards.reduce(function(e,a){return e|a[t]||a[t]},0)+1;e.boards[e.turn][t]^=a,c+1&a<<2&&(e.filled^=1<<t),!function(e){for(var t=e.board,a=e.piece,c=e.col,n=e.checkAgainst,r=e.fullBoard,o={curCol:0,curRound:0,leftDiag:0,rightDiag:0,row:0,checkAgainst:n};!(o.checkAgainst&a);)o.checkAgainst<<=1;if(!(t[c]&o.checkAgainst^o.checkAgainst))return!0;var s=1<<c;for(o.checkAgainst=n;!(o.checkAgainst&r^o.checkAgainst);){if(o.checkAgainst&s){for(o.curCol=o.curRound,o.row=t[o.curCol],o.rightDiag=t[o.curCol],o.leftDiag=t[o.curCol],o.curCol+=1;1<<o.curCol&o.checkAgainst;)o.leftDiag=o.leftDiag<<1&t[o.curCol],o.rightDiag=o.rightDiag>>1&t[o.curCol],o.row&=t[o.curCol],o.curCol+=1;if(o.leftDiag|o.rightDiag|o.row)return!0}o.checkAgainst<<=1,o.curRound+=1}return!1}({board:e.boards[e.turn],piece:a,col:t,checkAgainst:n,fullBoard:c})?e.filled?e.turn=r[e.turn]:e.gameOver=!0:(e.gameOver=!0,e.win=e.turn)}):a},k=function(e,t,a,c){return Object(x.a)(e,function(e){e.win=-1,e.filled=t,e.gameOver=!1,e.turn=e.turn||0,e.boards=c.map(function(){return a.slice()})})},v={record:{boards:[Array(7).fill(0),Array(7).fill(0)],win:-1,filled:Math.pow(2,7)-1,gameOver:!1,turn:0}},C={updateGameRecord:function(e,t){return Object(x.a)(e,function(e){N.forEach(function(a){void 0!==t[a]&&(e.record[a]=t[a])})})}},A=Object(E.a)(C);!function(e){e.CHANGE_RULES="CHANGE_RULES",e.CHANGE_PLAYERS="CHANGE_PLAYERS"}(c||(c={}));var _={styles:d.a.createElement(b.a,{id:"1423670017"},[".jsx-1423670017{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;margin:".concat(Object(g.b)(20)," auto;font-size:").concat(Object(g.b)(20),";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;border-top:").concat(Object(g.b)(1)," solid transparent;border-bottom:").concat(Object(g.b)(1)," solid transparent;height:100%;}"),".jsx-1423670017:hover{border-top:".concat(Object(g.b)(1)," solid black;border-bottom:").concat(Object(g.b)(1)," solid black;}")]),className:"jsx-1423670017"},R={styles:d.a.createElement(b.a,{id:"2472352108"},[".jsx-2472352108{margin:0 ".concat(Object(g.b)(10),";display:inline-block;}"),".jsx-2472352108:first-of-type{margin-left:0;}",".jsx-2472352108:last-of-type{margin-right:0;}"]),className:"jsx-2472352108"},S={styles:d.a.createElement(b.a,{id:"1336507868"},[".jsx-1336507868{display:inline-block;border:".concat(Object(g.b)(1)," solid lightgray;border-radius:50%;margin-right:").concat(Object(g.b)(10),";width:").concat(Object(g.b)(15),";height:").concat(Object(g.b)(15),";}")]),className:"jsx-1336507868"},G={styles:d.a.createElement(b.a,{id:"1920883996"},[".jsx-1920883996{height:".concat(Object(g.b)(25),";}")]),className:"jsx-1920883996"},D={styles:d.a.createElement(b.a,{id:"3055687915"},[".jsx-3055687915{display:block;text-align:center;font-size:".concat(Object(g.b)(16),";outline:none;margin:").concat(Object(g.b)(20)," auto;max-width:").concat(Object(g.b)(350),";border:").concat(Object(g.b)(1)," solid gray;height:100%;width:100%;}")]),className:"jsx-3055687915"};t.a=function(){var e=Object(m.a)(),t=e.state,a=e.dispatch,n=Object(u.useReducer)(A,v),o=Object(l.default)(n,2),i=o[0],f=o[1],j=Object(u.useState)(null),p=Object(l.default)(j,2),y=p[0],x=p[1],E=Object(u.useState)(""),N=Object(l.default)(E,2),C=N[0],H=N[1],P=t.setup,L=P.fullBoard,B=P.boardSetup,U=P.next,V=P.names,I=P.rowNum,z=P.checkAgainst,X=P.winRule,Y=i.record,T=Object(u.useCallback)(function(){f({type:"updateGameRecord",payload:k(Y,L,B,U)})},[Y,L,B,U]);Object(u.useEffect)(function(){T()},[t.setup]);var K=Object(u.useMemo)(function(){return function(e,t){return{styles:d.a.createElement(b.a,{id:"1653339563",dynamic:[Object(g.b)(40),Object(g.b)(36),Object(g.b)(1),Object(g.b)(1),e===c.CHANGE_RULES?"Change Rules":"Connect ".concat(t),Object(g.b)(1),Object(g.b)(1)]},[".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(g.b)(40)," auto;font-size:").concat(Object(g.b)(36),";border-top:").concat(Object(g.b)(1)," solid transparent;border-bottom:").concat(Object(g.b)(1)," solid transparent;cursor:pointer;}"),".__jsx-style-dynamic-selector::after{content:'".concat(e===c.CHANGE_RULES?"Change Rules":"Connect ".concat(t),"';}"),".__jsx-style-dynamic-selector:hover{border-top:".concat(Object(g.b)(1)," solid black;border-bottom:").concat(Object(g.b)(1)," solid black;}"),".__jsx-style-dynamic-selector:hover::after{content:'Change Rules';}"]),className:b.a.dynamic([["1653339563",[Object(g.b)(40),Object(g.b)(36),Object(g.b)(1),Object(g.b)(1),e===c.CHANGE_RULES?"Change Rules":"Connect ".concat(t),Object(g.b)(1),Object(g.b)(1)]]])}}(y,X)},[y,X]),M=Object(u.useMemo)(function(){return e=function(e,t){return e.gameOver?e.win>=0?"Winner is ".concat(t[e.turn],"!"):"Drawed":"It's ".concat(t[e.turn],"'s turn")}(Y,V),{styles:d.a.createElement(b.a,{id:"1144580068",dynamic:[Object(g.b)(20),Object(g.b)(20),Object(g.b)(1),Object(g.b)(1),e,Object(g.b)(1),Object(g.b)(1)]},[".__jsx-style-dynamic-selector{display:block;text-align:center;margin:".concat(Object(g.b)(20)," auto;font-size:").concat(Object(g.b)(20),";cursor:pointer;border-top:").concat(Object(g.b)(1)," solid transparent;border-bottom:").concat(Object(g.b)(1)," solid transparent;height:100%;}"),'.__jsx-style-dynamic-selector::after{content:"'.concat(e,'";}'),".__jsx-style-dynamic-selector:hover{border-top:".concat(Object(g.b)(1)," solid black;border-bottom:").concat(Object(g.b)(1)," solid black;}"),".__jsx-style-dynamic-selector:hover::after{content:'Restart Game';}"]),className:b.a.dynamic([["1144580068",[Object(g.b)(20),Object(g.b)(20),Object(g.b)(1),Object(g.b)(1),e,Object(g.b)(1),Object(g.b)(1)]]])};var e},[Y,V]),W=Object(u.useCallback)(function(){x(null),H("")},[x,H]),Q=Object(u.useCallback)(function(e){e&&e.focus()},[]),F=Object(u.useCallback)(function(e){return function(){y||f({type:"updateGameRecord",payload:Y.gameOver?k(Y,L,B,U):w({col:e,curRecord:Y,fullBoard:L,checkAgainst:z,next:U})})}},[f,w,Y,L,z,U,y]);return d.a.createElement("div",{className:"jsx-1472192811"},d.a.createElement(b.a,{id:"1472192811"},["body{touch-action:manipulation;}"]),d.a.createElement("h1",{className:"jsx-1472192811"},d.a.createElement("button",{type:"button","aria-label":"Title",onClick:function(){y!==c.CHANGE_RULES&&x(c.CHANGE_RULES)},className:"jsx-1472192811 "+(K.className||"")},K.styles)),d.a.createElement("div",{className:"jsx-1472192811 "+(G.className||"")},y===c.CHANGE_RULES?d.a.createElement("input",{ref:Q,"aria-label":"change-rules-label",type:"text",placeholder:"[column],[row],[number]",value:C,onChange:function(e){return H(e.target.value)},onKeyDown:function(e){if(13===e.which){try{var t=C.split(",").map(function(e){var t=s()(e.trim(),10);if(r()(t))throw new Error;return t});if(3!==t.length)throw new Error;a({type:"changeRules",payload:{rowNum:t[1],colNum:t[0],winRule:t[2]}})}catch(c){console.log("invalid input")}W()}else 27===e.keyCode&&W()},onBlur:function(){W()},className:"jsx-1472192811 "+(D.className||"")}):d.a.createElement("button",{type:"button","aria-label":"banner",onClick:function(){return T()},className:"jsx-1472192811 "+(M.className||"")},M.styles)),D.styles,G.styles,d.a.createElement("div",{className:"jsx-1472192811 "+(G.className||"")},y===c.CHANGE_PLAYERS?d.a.createElement("input",{ref:Q,"aria-label":"change-players-input",type:"text",placeholder:"up to 4 player's names with comma in between",value:C,onChange:function(e){return H(e.target.value)},onKeyDown:function(e){if(13===e.which){try{var t=C.split(",").map(function(e){return e.trim()});if(t.length<1||t.length>4)throw new Error;a({type:"changePlayers",payload:t})}catch(c){console.log("invalid input")}W()}else 27===e.keyCode&&W()},onBlur:function(){W()},className:"jsx-1472192811 "+(D.className||"")}):d.a.createElement("button",{type:"button","aria-label":"legend",onClick:function(){return x(c.CHANGE_PLAYERS)},className:"jsx-1472192811 "+(_.className||"")},_.styles,V.map(function(e,t){return d.a.createElement("div",{key:"legend-".concat(e),className:"jsx-1472192811 "+(R.className||"")},R.styles,d.a.createElement("div",{className:"jsx-1472192811 "+"".concat(S.className,"\n                  ").concat(O[t].className)},O[t].styles,S.styles),e)}))),d.a.createElement(h,{boards:Y.boards,rowNum:I,onClickOnCell:F}))}},TclB:function(e,t,a){a("Vzfy"),e.exports=a("WEpk").Number.isNaN},VmU1:function(e,t,a){"use strict";a.r(t);var c=a("q1tI"),n=a.n(c),r=a("ntF4"),o=a("8Rtz"),s=a("H1/e");t.default=function(){return n.a.createElement("div",null,n.a.createElement(r.a,{title:"Connect N",themeColor:"red",hrefPage:"/connect",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),n.a.createElement(s.a,null),n.a.createElement("p",null,n.a.createElement(o.a,{href:"/about"},n.a.createElement("a",null,"About"))))}},Vzfy:function(e,t,a){var c=a("Y7ZC");c(c.S,"Number",{isNaN:function(e){return e!=e}})},XWtR:function(e,t,a){var c=a("5T2Y").parseInt,n=a("oc46").trim,r=a("5pKv"),o=/^[-+]?0[xX]/;e.exports=8!==c(r+"08")||22!==c(r+"0x16")?function(e,t){var a=n(String(e),3);return c(a,t>>>0||(o.test(a)?16:10))}:c},dEVD:function(e,t,a){var c=a("Y7ZC"),n=a("XWtR");c(c.G+c.F*(parseInt!=n),{parseInt:n})},nStV:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/connect",function(){var e=a("VmU1");return{page:e.default||e}}])},oc46:function(e,t,a){var c=a("Y7ZC"),n=a("Jes0"),r=a("KUxP"),o=a("5pKv"),s="["+o+"]",l=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),b=function(e,t,a){var n={},s=r(function(){return!!o[e]()||"​"!="​"[e]()}),l=n[e]=s?t(u):o[e];a&&(n[a]=l),c(c.P+c.F*s,"String",n)},u=b.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(i,"")),e};e.exports=b},uekQ:function(e,t,a){a("dEVD"),e.exports=a("WEpk").parseInt},v7Px:function(e,t,a){e.exports=a("TclB")}},[["nStV","5d41","9da1"]]]);