(window.webpackJsonp=window.webpackJsonp||[]).push([["e6cc"],{"8Rtz":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("PBx+"),i=n.n(o),l=n("YFqc"),c=n.n(l),u=i()().publicRuntimeConfig.linkPrefix;t.a=function(e){var t=e.href,n=e.as,r=void 0===n?t:n,o=e.children,i=e.passHref;return a.a.createElement(c.a,{href:t,as:"".concat(u).concat(r),passHref:i},o)}},"9Jkg":function(e,t,n){e.exports=n("oh+g")},L6Kr:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("m/Pd"),i=n.n(o);t.a=function(e){var t=e.title,n=void 0===t?"":t,r=e.description,o=void 0===r?n:r,l=e.charset,c=void 0===l?"utf-8":l,u=e.viewportScale,s=void 0===u?1:u,f=e.keywords,p=void 0===f?n:f,h=e.refresh,d=e.themeColor,m=e.children;return a.a.createElement(i.a,null,a.a.createElement("title",null,n),a.a.createElement("meta",{charSet:c,key:"charset"}),a.a.createElement("meta",{name:"description",content:o,key:"description"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=".concat(s),key:"viewport"}),a.a.createElement("meta",{name:"keywords",content:p,key:"keywords"}),a.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge",key:"UA-compatible"}),h&&a.a.createElement("meta",{httpEquiv:"refresh",content:"".concat(h),key:"refresh"}),d&&a.a.createElement("meta",{name:"theme-color",content:d,key:"theme-color"}),m)}},TaPz:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("L6Kr"),i=n("8Rtz");t.default=function(){return a.a.createElement("div",null,a.a.createElement(o.a,{title:"About",themeColor:"white"},a.a.createElement(i.a,{href:"/",passHref:!0},a.a.createElement("link",{rel:"canonical"}))),a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"Connect N is using bitwise to check winning condition."),a.a.createElement("p",null,"by David Chen"),a.a.createElement("p",null,a.a.createElement(i.a,{href:"/"},a.a.createElement("a",null,"Connect 4"))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("9Jkg")),o=r(n("/HRN")),i=r(n("WaGi")),l=r(n("ZDA2")),c=r(n("/+P4")),u=r(n("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("CxY0"),h=s(n("q1tI")),d=(f(n("17x9")),s(n("nOHt"))),m=n("Bu4q");function v(e){return e&&"object"==typeof e?m.formatWithValidation(e):e}var E=function(e){function t(){var e,n,r,a,i;return(0,o.default)(this,t),(e=(0,l.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:v(e),as:v(t)}},r=null,a=null,i=null,function(e,t){if(e===r&&t===a)return i;var o=n(e,t);return r=e,a=t,i=o,o}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=p.resolve(c,i),l=l?p.resolve(c,l):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=l.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=d.Router._rewriteUrlForNextExport(i.href)),h.default.cloneElement(o,i)}}]),t}(h.Component);t.default=E},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){var e=n("TaPz");return{page:e.default||e}}])},"oh+g":function(e,t,n){var r=n("WEpk"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}},[["hIud","5d41","9da1"]]]);