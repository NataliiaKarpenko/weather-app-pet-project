/*! For license information please see 154.f4543d6d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[154],{5304:function(t,e,r){r.d(e,{_:function(){return a}});var n,o=r(168),a=r(6444).default.div(n||(n=(0,o.Z)(["\n  @media "," {\n    width: 100%;\n    max-width: 345px;\n  }\n  @media "," {\n    width: 345px;\n  }\n\n  @media "," {\n    width: 550px;\n  }\n\n  @media "," {\n    width: 650px;\n  }\n"])),(function(t){return t.theme.media.sx}),(function(t){return t.theme.media.phone}),(function(t){return t.theme.media.tab}),(function(t){return t.theme.media.desktop}))},9154:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(3433),o=r(9439),a=r(2791),i=r(5861),c=r(5218),u=r(1003),s=r(184);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var y={};u(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&r.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,a,i,c){var u=f(t[n],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var f=function(t){var e=t.city,r=(0,a.useState)(""),n=(0,o.Z)(r,2),f=n[0],h=n[1],p=(0,a.useState)(""),d=(0,o.Z)(p,2),v=d[0],y=d[1],g=(0,a.useState)(""),m=(0,o.Z)(g,2),w=m[0],x=m[1],b=(0,a.useState)(""),L=(0,o.Z)(b,2),E=L[0],j=L[1],_=(0,a.useState)(""),k=(0,o.Z)(_,2),S=k[0],O=k[1];return(0,a.useEffect)((function(){var t=function(){var t=(0,i.Z)(l().mark((function t(){var r,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e),t.next=4,(0,u.fE)(e);case 4:return r=t.sent,t.next=7,(0,u.z7)(e);case 7:n=t.sent,O(n),console.log(n),j(r.data.name),y(r.data.main.temp),h(r.data.weather[0].icon),x(r.data.weather[0].main),console.log(r),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),e&&("Request failed with status code 404"===t.t0.message?c.Am.error("There is no result matching your query. Check its spelling or enter another city",{id:"error1"}):c.Am.error("API error: ".concat(t.t0.message),{id:"error2"}));case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}();t(e)}),[e]),console.log(S),(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(f,"@2x.png"),alt:"".concat(w)}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{style:{color:"white"},children:E}),(0,s.jsx)("p",{style:{color:"white"},children:S})]}),(0,s.jsx)("p",{style:{color:"white"},children:v})]})},h=r(1087),p=r(5304),d=["Brasilia","Kyiv","Berlin","London","Madrid","Bucharest","Warsaw","\tAmsterdam","Rome","Dublin","Riga","Budapest","Sao Paulo","Osaka","Beijing","Cairo","New York","Seoul","Athens","Copenhagen","Tallinn","Prague","Manila","Delhi","Brussels","Shanghai","Lagos","Vienna","Mexico City","Mumbai","Edinburgh"],v=function(){var t=(0,a.useState)([]),e=(0,o.Z)(t,2),r=e[0],i=e[1],c=(0,h.lr)(),u=(0,o.Z)(c,1)[0].get("city");return(0,a.useEffect)((function(){var t=function(){var t=d.sort((function(){return.5-Math.random()}));return u?[u].concat((0,n.Z)(t.slice(0,4))):t.slice(0,5)}();i(t)}),[u]),console.log(r),(0,s.jsx)(p._,{children:(0,s.jsx)("ul",{children:r.map((function(t){return(0,s.jsx)(f,{city:t})}))})})},y=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(v,{})})}},1003:function(t,e,r){r.d(e,{Et:function(){return p},NW:function(){return l},fE:function(){return s},sx:function(){return f},z7:function(){return d}});var n=r(5861),o=r(1243),a=r(9657);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&r.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,a,i,c){var u=f(t[n],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var c="https://api.openweathermap.org/",u="5293d8454b519c30f6f6331f38c85b4c",s=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"data/2.5/weather?q=").concat(e,"&appid=").concat(u,"&units=metric"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"data/2.5/forecast?q=").concat(e,"&appid=").concat(u,"&units=metric"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n,a,s,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"geo/1.0/direct?q=").concat(e,"&limit=1&appid=").concat(u));case 2:return r=t.sent,n=r.data[0],a=n.lat,s=n.lon,t.next=6,o.Z.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(s,"&appid=").concat(u,"&units=metric"));case 6:return l=t.sent,t.abrupt("return",l.data);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n,a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.coords.latitude,n=e.coords.longitude,t.next=5,o.Z.get("".concat(c,"data/2.5/weather?lat=").concat(r,"&lon=").concat(n,"&appid=").concat(u,"&units=metric"));case 5:return a=t.sent,s=a.data,t.abrupt("return",s.name);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"geolocation"in navigator||console.log("Geolocation is not available"),t.prev=1,t.next=4,new Promise((function(t,e){navigator.geolocation.getCurrentPosition((function(e){return t(e)}),(function(t){return e(t)}))}));case 4:return e=t.sent,t.next=7,h(e);case 7:return r=t.sent,console.log(r),t.abrupt("return",r);case 12:t.prev=12,t.t0=t.catch(1),console.log("Geolocation error or API error:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n,s,l,f,h,p,d;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"geo/1.0/direct?q=").concat(e,"&limit=1&appid=").concat(u));case 2:return r=t.sent,n=r.data[0],s=n.lat,l=n.lon,console.log(s),t.next=7,o.Z.get("http://api.timezonedb.com/v2.1/get-time-zone?key=".concat("6ANWSK2XPW9R","&format=json&by=position&lat=").concat(s,"&lng=").concat(l));case 7:return f=t.sent,console.log(f),h=new Date(f.data.formatted),p=(0,a.Hr)(h.getHours()),d=(0,a.Hr)(h.getHours()),console.log("".concat(p,":").concat(d)),t.abrupt("return","".concat(p,":").concat(d));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();d("oslo")},9657:function(t,e,r){r.d(e,{Do:function(){return i},Hr:function(){return a},LE:function(){return c},bq:function(){return o}});var n=new Date,o=function(t){var e=new Date(1e3*t),r=new Date,n=e.getDay(),o=r.getDay(),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return a[n]===a[o]?"Today":a[n]};function a(t){return String(t).padStart(2,"0")}var i=function(t){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},c=function(){return a(["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()])}}}]);
//# sourceMappingURL=154.f4543d6d.chunk.js.map