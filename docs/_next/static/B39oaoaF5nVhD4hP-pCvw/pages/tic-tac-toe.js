(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/E/P":function(t,e,a){"use strict";a.r(e);var n,c=a("qKvR"),o=a("q1tI"),r=a("ntF4"),i=a("Igcr"),b=a("iYmT"),l=a("doui"),u=a("/MKj"),s=a("d04V"),d=a.n(s),p=a("h2aq"),O=a("+PLY"),j=Object(c.a)(O.a,";cursor:pointer;width:100%;position:relative;background-color:white;&::before{display:block;content:'';width:100%;padding-bottom:100%;}"),f=Object(c.a)("position:absolute;left:0;right:0;top:0;bottom:0;& div{width:100%;height:100%;display:table;}& span{display:table-cell;text-align:center;vertical-align:middle;font-size:",Object(p.a)(60),";@media only screen and (max-width:248px){font-size:25vw;}}"),g=[{name:"1r7fflz",styles:"&::after{content:'O:';}"},{name:"b0hxp3",styles:"&::after{content:'X:';}"}],h=function(t){var e=t.rowNum,a=t.boards,n=t.onClickOnCell,r=function(t){return Object(c.a)("max-width:",Object(p.a)(80*t),";margin:",Object(p.a)(20)," auto;box-sizing:border-box;background-color:black;display:grid;grid-template-columns:repeat(",t,",1fr);grid-gap:",Object(p.a)(3),";grid-auto-rows:auto;border:",Object(p.a)(3)," solid white;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;")}(a[0].length),i=Object(o.useCallback)(function(t,a){return Object(c.a)("grid-row:",e-t," / span 1;grid-column:",a+1," / span 1;")},[e]);return Object(c.b)("div",{css:r},a[0].map(function(t,o){return d()(Array(e),function(t,e){return Object(c.b)("button",{type:"button","aria-label":"board",key:"cell-".concat(o,"-").concat(e),css:Object(b.a)([j,i(e,o)],""),onClick:n(o,e)},Object(c.b)("div",{css:f},Object(c.b)("div",null,Object(c.b)("span",null,a.reduce(function(t,n,c){return a[c][o]&1<<e&&["O","X"][c]||t},"")))))})}))},m=a("cLMx"),y=a("sLDa"),w=a("bZBi"),T=m.a.ticTacToe;!function(t){t.CHANGE_RULES_SETTINGS="CHANGE_RULES_SETTINGS",t.CHANGE_PLAYERS_SETTINGS="CHANGE_PLAYERS_SETTINGS"}(n||(n={}));var k=Object(c.a)(O.a,";display:block;text-align:center;margin:",Object(p.a)(40)," auto;font-size:",Object(p.a)(36),";border-top:",Object(p.a)(1)," solid transparent;border-bottom:",Object(p.a)(1)," solid transparent;::after{content:'Tic-Tac-Toe';}"),v=Object(c.a)(O.a,";display:flex;flex-flow:row wrap;margin:",Object(p.a)(20)," auto;font-size:",Object(p.a)(20),";justify-content:center;cursor:pointer;border-top:",Object(p.a)(1)," solid transparent;border-bottom:",Object(p.a)(1)," solid transparent;height:100%;:hover{border-top:",Object(p.a)(1)," solid black;border-bottom:",Object(p.a)(1)," solid black;}"),E=Object(c.a)("margin:0 ",Object(p.a)(10),";display:inline-block;:first-of-type{margin-left:0;}:last-of-type{margin-right:0;}"),C=Object(c.a)("display:inline-block;margin-right:",Object(p.a)(10),";width:",Object(p.a)(15),";height:",Object(p.a)(15),";"),S=Object(c.a)("height:",Object(p.a)(25),";"),N=Object(c.a)("display:block;text-align:center;font-size:",Object(p.a)(16),";outline:none;margin:",Object(p.a)(20)," auto;max-width:",Object(p.a)(350),";border:",Object(p.a)(1)," solid gray;height:100%;width:100%;"),_=Object(u.c)(function(t){return{setup:t.setup||{},game:t.game||{}}},function(t){return{resetGame:function(e){return t({type:y.e,payload:e})},placeOnePiece:function(e){return t({type:y.c,payload:e})},changePlayers:function(e){return t({type:y.a,payload:e})}}})(function(t){var e=t.setup,a=t.game,r=t.resetGame,i=t.placeOnePiece,u=t.changePlayers,s=Object(o.useState)(null),d=Object(l.default)(s,2),j=d[0],f=d[1],y=Object(o.useState)(""),_=Object(l.default)(y,2),x=_[0],G=_[1],I=e.fullBoard,P=e.boardSetup,A=e.next,R=e.names,L=e.rowNum,H=e.checkAgainst,z=e.fullColumn,Y=a.win,q=a.gameOver,B=a.turn,U=a.boards,X=Object(o.useCallback)(function(){f(null),G("")},[f,G]),K=Object(o.useCallback)(function(t){t&&t.focus()},[]),M=function(){return r({next:A,fullBoard:I,fullColumn:z,boardSetup:P,turn:B})};Object(o.useEffect)(function(){Object(w.a)(e)||M()},[e]);var D,J=Object(o.useCallback)(function(t){return G(t.target.value)},[G]);return Object(w.a)(a)||Object(w.a)(e)?null:Object(c.b)("div",null,Object(c.b)("h1",null,Object(c.b)("button",{type:"button","aria-label":"Title",css:k,onClick:function(){j!==n.CHANGE_RULES_SETTINGS&&f(n.CHANGE_RULES_SETTINGS)}})),Object(c.b)("div",{css:S},Object(c.b)("button",{type:"button","aria-label":"banner",css:(D=Object(m.b)({gameOver:q,turn:B,names:R,win:Y}),Object(c.a)(O.a,";display:block;text-align:center;margin:",Object(p.a)(20)," auto;font-size:",Object(p.a)(20),";cursor:pointer;border-top:",Object(p.a)(1)," solid transparent;border-bottom:",Object(p.a)(1),' solid transparent;height:100%;::after{content:"',D,'";}:hover{border-top:',Object(p.a)(1)," solid black;border-bottom:",Object(p.a)(1)," solid black;}:hover::after{content:'Restart Game';}")),onClick:M})),Object(c.b)("div",{css:S},j===n.CHANGE_PLAYERS_SETTINGS?Object(c.b)("input",{ref:K,"aria-label":"change-players-input",css:N,type:"text",placeholder:"change players' names, with comma in between",value:x,onChange:J,onKeyDown:function(t){if(13===t.which)try{var e=x.split(",").map(function(t){return t.trim()});u({gameType:T,names:e}),X()}catch(a){console.log(a)}else 27===t.keyCode&&X()},onBlur:X}):Object(c.b)("button",{type:"button","aria-label":"legend",css:v,onClick:function(){return f(n.CHANGE_PLAYERS_SETTINGS)}},R.map(function(t,e){return Object(c.b)("div",{css:E,key:"legend-".concat(t)},Object(c.b)("div",{css:Object(b.a)([C,g[e]],"")}),t)}))),Object(c.b)(h,{boards:U,rowNum:L,onClickOnCell:function(t,e){return function(){j||(q?M():function(t){var e=t.colInd,n=t.rowInd;i({gameType:T,colInd:e,rowInd:n,curRecord:a,fullColumn:z,checkAgainst:H,next:A})}({colInd:t,rowInd:e}))}}}))}),x=a("NrZH"),G=a("6nty");a.d(e,"Page",function(){return I});var I=function(){return Object(c.b)("section",null,Object(c.b)(r.a,{title:"Tic Tac Toe",themeColor:"red",hrefCanonical:"/tic-tac-toe",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(c.b)(_,null))};e.default=Object(i.a)({callback:function(t){t.substitueReducers({setup:x.a,game:G.a}),t.dispatch({type:y.d,payload:x.b.ticTacToe}),t.dispatch({type:y.e,payload:x.b.ticTacToe})},Child:I})},"5fqO":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tic-tac-toe",function(){var t=a("/E/P");return{page:t.default||t}}])}},[["5fqO",1,0]]]);