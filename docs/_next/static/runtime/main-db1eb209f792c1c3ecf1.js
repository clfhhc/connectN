(window.webpackJsonp=window.webpackJsonp||[]).push([["af52"],{"+wdc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=null,r=!1,o=3,a=-1,u=-1,i=!1,l=!1;function c(){if(!i){var e=n.expirationTime;l?E():l=!0,x(d,e)}}function s(){var e=n,t=n.next;if(n===t)n=null;else{var r=n.previous;n=r.next=t,t.previous=r}e.next=e.previous=null,r=e.callback,t=e.expirationTime,e=e.priorityLevel;var a=o,i=u;o=e,u=t;try{var l=r()}finally{o=a,u=i}if("function"==typeof l)if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=l.next=l.previous=l;else{r=null,e=n;do{if(e.expirationTime>=t){r=e;break}e=e.next}while(e!==n);null===r?r=n:r===n&&(n=l,c()),(t=r.previous).next=r.previous=l,l.next=r,l.previous=t}}function f(){if(-1===a&&null!==n&&1===n.priorityLevel){i=!0;try{do{s()}while(null!==n&&1===n.priorityLevel)}finally{i=!1,null!==n?c():l=!1}}}function d(e){i=!0;var o=r;r=e;try{if(e)for(;null!==n;){var a=t.unstable_now();if(!(n.expirationTime<=a))break;do{s()}while(null!==n&&n.expirationTime<=a)}else if(null!==n)do{s()}while(null!==n&&!C())}finally{i=!1,r=o,null!==n?c():l=!1,f()}}var p,v,h=Date,m="function"==typeof setTimeout?setTimeout:void 0,y="function"==typeof clearTimeout?clearTimeout:void 0,g="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,_="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function w(e){p=g(function(t){y(v),e(t)}),v=m(function(){_(p),e(t.unstable_now())},100)}if("object"==typeof performance&&"function"==typeof performance.now){var b=performance;t.unstable_now=function(){return b.now()}}else t.unstable_now=function(){return h.now()};var x,E,C,P=null;if("undefined"!=typeof window?P=window:void 0!==e&&(P=e),P&&P._schedMock){var k=P._schedMock;x=k[0],E=k[1],C=k[2],t.unstable_now=k[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var M=null,T=function(e){if(null!==M)try{M(e)}finally{M=null}};x=function(e){null!==M?setTimeout(x,0,e):(M=e,setTimeout(T,0,!1))},E=function(){M=null},C=function(){return!1}}else{"undefined"!=typeof console&&("function"!=typeof g&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof _&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var I=null,R=!1,L=-1,O=!1,D=!1,j=0,A=33,N=33;C=function(){return j<=t.unstable_now()};var X=new MessageChannel,B=X.port2;X.port1.onmessage=function(){R=!1;var e=I,n=L;I=null,L=-1;var r=t.unstable_now(),o=!1;if(0>=j-r){if(!(-1!==n&&n<=r))return O||(O=!0,w(S)),I=e,void(L=n);o=!0}if(null!==e){D=!0;try{e(o)}finally{D=!1}}};var S=function(e){if(null!==I){w(S);var t=e-j+N;t<N&&A<N?(8>t&&(t=8),N=t<A?A:t):A=t,j=e+N,R||(R=!0,B.postMessage(void 0))}else O=!1};x=function(e,t){I=e,L=t,D||0>t?B.postMessage(void 0):O||(O=!0,w(S))},E=function(){I=null,R=!1,L=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=o,u=a;o=e,a=t.unstable_now();try{return n()}finally{o=r,a=u,f()}},t.unstable_next=function(e){switch(o){case 1:case 2:case 3:var n=3;break;default:n=o}var r=o,u=a;o=n,a=t.unstable_now();try{return e()}finally{o=r,a=u,f()}},t.unstable_scheduleCallback=function(e,r){var u=-1!==a?a:t.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)r=u+r.timeout;else switch(o){case 1:r=u+-1;break;case 2:r=u+250;break;case 5:r=u+1073741823;break;case 4:r=u+1e4;break;default:r=u+5e3}if(e={callback:e,priorityLevel:o,expirationTime:r,next:null,previous:null},null===n)n=e.next=e.previous=e,c();else{u=null;var i=n;do{if(i.expirationTime>r){u=i;break}i=i.next}while(i!==n);null===u?u=n:u===n&&(n=e,c()),(r=u.previous).next=u.previous=e,e.next=u,e.previous=r}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)n=null;else{e===n&&(n=t);var r=e.previous;r.next=t,t.previous=r}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=o;return function(){var r=o,u=a;o=n,a=t.unstable_now();try{return e.apply(this,arguments)}finally{o=r,a=u,f()}}},t.unstable_getCurrentPriorityLevel=function(){return o},t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<u||C())},t.unstable_continueExecution=function(){null!==n&&c()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return n}}).call(this,n("yLpj"))},"/h46":function(e,t,n){n("cHUd")("Map")},0:function(e,t,n){n("GbXU"),e.exports=n("BMP1")},"0KLy":function(e,t,n){"use strict";var r=n("KI45"),o=r(n("p0XB")),a=r(n("0iUn")),u=r(n("sLSF")),i=r(n("MI3g")),l=r(n("a7VT")),c=r(n("Tit0")),s=r(n("XXOK")),f=r(n("UXZV")),d=r(n("eVuF")),p=r(n("pLtp")),v=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=v(n("q1tI")),m=n("Q0KE"),y=[],g=[],_=!1;function w(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function b(e){var t={loading:!1,loaded:{},error:null},n=[];try{(0,p.default)(e).forEach(function(r){var o=w(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then(function(e){t.loaded[r]=e}).catch(function(e){t.error=e})})}catch(r){t.error=r}return t.promise=d.default.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function x(e,t){return h.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function E(e,t){var n,r=(0,f.default)({loader:null,loading:null,delay:200,timeout:null,render:x,webpack:null,modules:null},t),d=null;function p(){return d||(d=e(r.loader)),d.promise}if("undefined"==typeof window&&y.push(p),!_&&"undefined"!=typeof window&&"function"==typeof r.webpack){var v=r.webpack();g.push(function(e){var t=!0,n=!1,r=void 0;try{for(var o,a=(0,s.default)(v);!(t=(o=a.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return p()}}catch(i){n=!0,r=i}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}})}return(n=function(t){function n(t){var o;return(0,a.default)(this,n),(o=(0,i.default)(this,(0,l.default)(n).call(this,t))).retry=function(){o.setState({error:null,loading:!0,timedOut:!1}),d=e(r.loader),o._loadModule()},p(),o.state={error:d.error,pastDelay:!1,timedOut:!1,loading:d.loading,loaded:d.loaded},o}return(0,c.default)(n,t),(0,u.default)(n,[{key:"componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var e=this;if(this.context&&(0,o.default)(r.modules)&&r.modules.forEach(function(t){e.context(t)}),d.loading){"number"==typeof r.delay&&(0===r.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},r.timeout));var t=function(){e._mounted&&(e.setState({error:d.error,loaded:d.loaded,loading:d.loading}),e._clearTimeouts())};d.promise.then(function(){t()}).catch(function(e){t()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?h.default.createElement(r.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?r.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return p()}}]),n}(h.default.Component)).contextType=m.LoadableContext,n}function C(e){return E(w,e)}function P(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return d.default.all(n).then(function(){if(e.length)return P(e,t)})}C.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return E(b,e)},C.preloadAll=function(){return new d.default(function(e,t){P(y).then(e,t)})},C.preloadReady=function(e){return new d.default(function(t){var n=function(){return _=!0,t()};P(g,e).then(n,n)})},t.default=C},"8+Nu":function(e,t,n){var r=n("8bdy"),o=n("fprZ"),a=n("Bh1o");e.exports=function(e,t){return r(e)||o(e,t)||a()}},"8bdy":function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e))return e}},BMP1:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("IKlv")),a=o;window.next=a,o.default().catch(function(e){console.error("".concat(e.message,"\n").concat(e.stack))})},Bh1o:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},DqTX:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("eVuF")),a=r(n("/HRN")),u=r(n("WaGi"));Object.defineProperty(t,"__esModule",{value:!0});var i={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},l=function(){function e(){var t=this;(0,a.default)(this,e),this.updateHead=function(e){var n=t.updatePromise=o.default.resolve().then(function(){n===t.updatePromise&&(t.updatePromise=null,t.doUpdateHead(e))})},this.updatePromise=null}return(0,u.default)(e,[{key:"doUpdateHead",value:function(e){var t=this,n={};e.forEach(function(e){var t=n[e.type]||[];t.push(e),n[e.type]=t}),this.updateTitle(n.title?n.title[0]:null);["meta","base","link","style","script"].forEach(function(e){t.updateElements(e,n[e]||[])})}},{key:"updateTitle",value:function(e){var t="";if(e){var n=e.props.children;t="string"==typeof n?n:n.join("")}t!==document.title&&(document.title=t)}},{key:"updateElements",value:function(e,t){var n=document.getElementsByTagName("head")[0],r=Array.prototype.slice.call(n.querySelectorAll(e+".next-head")),o=t.map(c).filter(function(e){for(var t=0,n=r.length;t<n;t++){if(r[t].isEqualNode(e))return r.splice(t,1),!1}return!0});r.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)})}}]),e}();function c(e){var t=e.type,n=e.props,r=document.createElement(t);for(var o in n)if(n.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o){var a=i[o]||o.toLowerCase();r.setAttribute(a,n[o])}var u=n.children,l=n.dangerouslySetInnerHTML;return l?r.innerHTML=l.__html||"":u&&(r.textContent="string"==typeof u?u:u.join("")),r}t.default=l},GbXU:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/connectN/static//service-worker.js",{scope:"/connectN/"}).then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})},IKlv:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("UXZV")),a=r(n("8+Nu")),u=r(n("eVuF"));function i(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}var l=function(e){var n=e.App,r=e.Component,a=e.props,i=e.err;try{function l(){r=r||F.Component,a=a||F.props;var e,u,l=(0,o.default)({Component:r,err:i,router:t.router},a);F=l,t.emitter.emit("before-reactdom-render",{Component:r,ErrorComponent:t.ErrorComponent,appProps:l}),e=p.default.createElement(b.ErrorBoundary,{fn:function(e){return c({App:n,err:e}).catch(function(e){return console.error("Error rendering page: ",e)})}},p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(P.RouterContext.Provider,{value:m.makePublicRouterInstance(t.router)},p.default.createElement(C.DataManagerContext.Provider,{value:t.dataManager},p.default.createElement(E.HeadManagerContext.Provider,{value:G.updateHead},p.default.createElement(n,(0,o.default)({},l))))))),u=W,z&&"function"==typeof v.default.hydrate?(v.default.hydrate(e,u),z=!1):v.default.render(e,u),t.emitter.emit("after-reactdom-render",{Component:r,ErrorComponent:t.ErrorComponent,appProps:l})}var s=function(){if(!a&&r&&r!==t.ErrorComponent&&F.Component===t.ErrorComponent){var e=t.router,o=e.pathname,l=e.query,c=e.asPath;return u.default.resolve(g.loadGetInitialProps(n,{Component:r,router:t.router,ctx:{err:i,pathname:o,query:l,asPath:c}})).then(function(e){a=e})}}();return u.default.resolve(s&&s.then?s.then(l):l())}catch(f){return u.default.reject(f)}},c=function(e){try{var n=e.App,r=e.err;return console.error(r),u.default.resolve(q.loadPage("/_error")).then(function(a){function i(n){return u.default.resolve(l((0,o.default)({},e,{err:r,Component:t.ErrorComponent,props:n}))).then(function(){})}return t.ErrorComponent=a,e.props?i(e.props):u.default.resolve(g.loadGetInitialProps(n,{Component:t.ErrorComponent,router:t.router,ctx:{err:r,pathname:R,query:L,asPath:S}})).then(i)})}catch(a){return u.default.reject(a)}},s=function(e){try{var t=!1;function n(n){if(t)return n;var r=i(function(){return u.default.resolve(l(e)).then(function(){})},function(t){return u.default.resolve(c((0,o.default)({},e,{err:t}))).then(function(){})});return r&&r.then?r.then(function(){}):void 0}var r=function(){if(e.err)return u.default.resolve(c(e)).then(function(){t=!0})}();return u.default.resolve(r&&r.then?r.then(n):n(r))}catch(a){return u.default.reject(a)}},f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=f(n("q1tI")),v=d(n("i8i4")),h=d(n("DqTX")),m=n("nOHt"),y=d(n("kiME")),g=n("Bu4q"),_=d(n("zmvN")),w=f(n("PBx+")),b=n("XXkD"),x=d(n("0KLy")),E=n("IClC"),C=n("qS9g"),P=n("9EOK"),k=n("cuFY");window.Promise||(window.Promise=u.default);var M=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=M;var T=M.props,I=M.err,R=M.page,L=M.query,O=M.buildId,D=M.dynamicBuildId,j=M.assetPrefix,A=M.runtimeConfig,N=M.dynamicIds,X=JSON.parse(window.__NEXT_DATA__.dataManager);t.dataManager=new k.DataManager(X);var B=j||"";n.p="".concat(B,"/_next/"),w.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:A});var S=g.getURL(),q=new _.default(O,B),U=function(e){var t=(0,a.default)(e,2),n=t[0],r=t[1];return q.registerPage(n,r)};window.__NEXT_P&&window.__NEXT_P.map(U),window.__NEXT_P=[],window.__NEXT_P.push=U;var F,H,K,G=new h.default,W=document.getElementById("__next");t.emitter=y.default(),t.default=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).webpackHMR;try{return u.default.resolve(q.loadPage("/_app")).then(function(e){var n=!1;function r(e){return n?e:u.default.resolve(x.default.preloadReady(N||[])).then(function(){return!0===D&&q.onDynamicBuildId(),t.router=m.createRouter(R,L,S,{initialProps:T,pageLoader:q,App:K,Component:H,err:o}),t.router.subscribe(function(e){var n=e.App,r=e.Component,o=e.props,a=e.err;s({App:n,Component:r,props:o,err:a,emitter:t.emitter})}),s({App:K,Component:H,props:T,err:o,emitter:t.emitter}),t.emitter})}K=e;var o=I,a=i(function(){return u.default.resolve(q.loadPage(R)).then(function(e){H=e})},function(e){o=e});return a&&a.then?a.then(r):r(a)})}catch(e){return u.default.reject(e)}},t.render=s,t.renderError=c;var z=!0},LX0d:function(e,t,n){e.exports=n("UDep")},Q0KE:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.LoadableContext=o.createContext(null)},QCnb:function(e,t,n){"use strict";e.exports=n("+wdc")},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},XXkD:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("/HRN")),a=r(n("WaGi")),u=r(n("ZDA2")),i=r(n("/+P4")),l=r(n("N9n2")),c=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"render",value:function(){return this.props.children}}]),t}(c(n("q1tI")).default.Component);t.ErrorBoundary=s},cuFY:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("LX0d")),a=r(n("0iUn")),u=r(n("sLSF"));Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(t){(0,a.default)(this,e),this.data=new o.default(t)}return(0,u.default)(e,[{key:"getData",value:function(){return this.data}},{key:"get",value:function(e){return this.data.get(e)}},{key:"set",value:function(e,t){this.data.set(e,t)}},{key:"overwrite",value:function(e){this.data=new o.default(e)}}]),e}();t.DataManager=i},dVTT:function(e,t,n){n("aPfg")("Map")},fprZ:function(e,t,n){var r=n("XXOK");e.exports=function(e,t){var n=[],o=!0,a=!1,u=void 0;try{for(var i,l=r(e);!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(c){a=!0,u=c}finally{try{o||null==l.return||l.return()}finally{if(a)throw u}}return n}},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest,a=[],u=[],i={},l=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:l,headers:{keys:function(){return a},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var c in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){a.push(t=t.toLowerCase()),u.push([t,n]),i[t]=i[t]?i[t]+","+n:n}),n(l())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(c,t.headers[c]);o.send(t.body||null)})}},qS9g:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.DataManagerContext=o.createContext(null)},zmvN:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("eVuF")),a=r(n("ttDY")),u=r(n("/HRN")),i=r(n("WaGi")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=l(n("kiME")),s=l(n("m/Gl"));var f=function(e){if(!e||!e.supports)return!1;try{return e.supports("preload")}catch(t){return!1}}(document.createElement("link").relList),d=function(){function e(t,n){(0,u.default)(this,e),this.buildId=t,this.assetPrefix=n,this.pageCache={},this.prefetchCache=new a.default,this.pageRegisterEvents=c.default(),this.loadingRoutes={},this.promisedBuildId=o.default.resolve()}return(0,i.default)(e,[{key:"normalizeRoute",value:function(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}},{key:"loadPage",value:function(e){var t=this;return e=this.normalizeRoute(e),new o.default(function(n,r){var o=t.pageCache[e];if(o){var a=o.error,u=o.page;a?r(a):n(u)}else t.pageRegisterEvents.on(e,function o(a){var u=a.error,i=a.page;t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],u?r(u):n(i)}),document.getElementById("__NEXT_PAGE__".concat(e))||t.loadingRoutes[e]||(t.loadScript(e),t.loadingRoutes[e]=!0)})}},{key:"onDynamicBuildId",value:function(){var e=this;this.promisedBuildId=new o.default(function(t){s.default("".concat(e.assetPrefix,"/_next/static/HEAD_BUILD_ID")).then(function(e){if(e.ok)return e;var t=new Error("Failed to fetch HEAD buildId");throw t.res=e,t}).then(function(e){return e.text()}).then(function(t){e.buildId=t.trim()}).catch(function(){console.warn("Failed to load BUILD_ID from server. The following client-side page transition will likely 404 and cause a SSR.\nhttp://err.sh/zeit/next.js/head-build-id")}).then(t,t)})}},{key:"loadScript",value:function(e){try{var t=this;return o.default.resolve(t.promisedBuildId).then(function(){var n="/"===(e=t.normalizeRoute(e))?"/index.js":"".concat(e,".js"),r=document.createElement("script"),o="".concat(t.assetPrefix,"/_next/static/").concat(encodeURIComponent(t.buildId),"/pages").concat(n);r.crossOrigin=void 0,r.src=o,r.onerror=function(){var n=new Error("Error when loading route: ".concat(e));n.code="PAGE_LOAD_ERROR",t.pageRegisterEvents.emit(e,{error:n})},document.body.appendChild(r)})}catch(n){return o.default.reject(n)}}},{key:"registerPage",value:function(e,t){var n=this;!function(){try{var r=t(),o=r.error,a=r.page;n.pageCache[e]={error:o,page:a},n.pageRegisterEvents.emit(e,{error:o,page:a})}catch(o){n.pageCache[e]={error:o},n.pageRegisterEvents.emit(e,{error:o})}}()}},{key:"prefetch",value:function(e){try{var t=!1,n=this;function r(r){return t?r:"complete"===document.readyState?n.loadPage(e).catch(function(){}):new o.default(function(t){window.addEventListener("load",function(){n.loadPage(e).then(function(){return t()},function(){return t()})})})}var a="/"===(e=n.normalizeRoute(e))?"/index.js":"".concat(e,".js");if(n.prefetchCache.has(a))return o.default.resolve();if(n.prefetchCache.add(a),"connection"in navigator&&(-1!==(navigator.connection.effectiveType||"").indexOf("2g")||navigator.connection.saveData))return o.default.resolve();var u=function(){if(f)return o.default.resolve(n.promisedBuildId).then(function(){var e=document.createElement("link");e.rel="preload",e.crossOrigin=void 0,e.href="".concat(n.assetPrefix,"/_next/static/").concat(encodeURIComponent(n.buildId),"/pages").concat(a),e.as="script",document.head.appendChild(e),t=!0})}();return o.default.resolve(u&&u.then?u.then(r):r(u))}catch(i){return o.default.reject(i)}}},{key:"clearCache",value:function(e){e=this.normalizeRoute(e),delete this.pageCache[e],delete this.loadingRoutes[e];var t=document.getElementById("__NEXT_PAGE__".concat(e));t&&t.parentNode.removeChild(t)}}]),e}();t.default=d}},[[0,"5d41","9da1"]]]);