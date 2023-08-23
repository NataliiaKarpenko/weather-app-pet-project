/*! For license information please see 551.d963e8ac.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[551],{9551:function(t,r,e){e.r(r),e.d(r,{default:function(){return N}});var n,o,a,i,c,u,s,l=e(5861),f=e(9439),h=e(2791),p=e(1087),d=e(8808),v=e(1003),y=e(9657),g=e(990),m=e(8992),w=e(168),x=e(6444),b=x.default.div(n||(n=(0,w.Z)(["\n  margin-top: 20px;\n  padding: 15px;\n  flex-grow: 1;\n  border-radius: 20px;\n  background-color: ",";\n\n  @media "," {\n    padding: 30px;\n  }\n"])),(function(t){return t.theme.dark.contentBackground}),(function(t){return t.theme.media.tab})),L=x.default.li(o||(o=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  height: calc((100%) / 7);\n  font-size: 18px;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ",";\n  }\n\n  @media "," {\n    font-size: 20px;\n  }\n"])),(function(t){return t.theme.dark.secondaryText}),(function(t){return t.theme.media.tab})),E=x.default.p(a||(a=(0,w.Z)(["\n  text-transform: uppercase;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",";\n\n  @media "," {\n    font-size: 20px;\n  }\n"])),(function(t){return t.theme.dark.secondaryText}),(function(t){return t.theme.media.tab})),j=x.default.div(i||(i=(0,w.Z)(["\n  width: calc(100% / 4);\n  font-weight: 500;\n\n  &:first-child {\n    color: ",";\n  }\n\n  &:nth-child(2) {\n    margin-right: 10px;\n  }\n\n  &:nth-child(3) {\n    color: ",";\n  }\n\n  &:nth-child(4) {\n    text-align: end;\n    color: ",";\n  }\n"])),(function(t){return t.theme.dark.secondaryText}),(function(t){return t.theme.dark.primaryText}),(function(t){return t.theme.dark.secondaryText})),k=x.default.span(c||(c=(0,w.Z)(["\n  color: ",";\n"])),(function(t){return t.theme.dark.primaryText})),_=x.default.span(u||(u=(0,w.Z)(["\n  color: ",";\n"])),(function(t){return t.theme.dark.secondaryText})),O=x.default.img(s||(s=(0,w.Z)(["\n  width: 100px;\n"]))),Z=e(184);function S(){S=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(O){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var a=r&&r.prototype instanceof h?r:h,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:b(t,e,c)}),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==r&&e.call(g,a)&&(v=g);var m=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(n,a,i,c){var u=l(t[n],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=L(i,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new x(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(m),u(m,c,"Generator"),u(m,a,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}var T=function(){var t=(0,h.useState)([]),r=(0,f.Z)(t,2),e=r[0],n=r[1],o=(0,h.useState)(!1),a=(0,f.Z)(o,2),i=a[0],c=a[1],u=(0,h.useState)(!1),s=(0,f.Z)(u,2),w=s[0],x=s[1],T=(0,p.lr)(),N=(0,f.Z)(T,1)[0].get("city"),G=(0,d.c)().isFahrenheit;return(0,h.useEffect)((function(){x(!0);var t=function(){var t=(0,l.Z)(S().mark((function t(r){var e;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.sx)(r);case 3:e=t.sent,r&&(n(e.daily.slice(0,7)),c(!1),x(!1)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c(!0);case 10:return t.prev=10,x(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(r){return t.apply(this,arguments)}}();t(N)}),[N]),(0,Z.jsxs)(Z.Fragment,{children:[w&&(0,Z.jsx)(m.Z,{}),!i&&!w&&(0,Z.jsxs)(b,{children:[(0,Z.jsx)(E,{children:"7-day forecast"}),(0,Z.jsx)("ul",{children:e.map((function(t){var r=G?"F":"C";return(0,Z.jsxs)(L,{children:[(0,Z.jsx)(j,{children:(0,y.bq)(t.dt)}),(0,Z.jsx)(j,{children:(0,Z.jsx)(O,{src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png "),alt:t.weather[0].main})}),(0,Z.jsx)(j,{children:t.weather[0].main}),(0,Z.jsxs)(j,{children:[(0,Z.jsx)(k,{children:(0,g.d)(G,t.temp.max)}),"/",(0,Z.jsx)(_,{children:(0,g.d)(G,t.temp.min)}),"\xb0",r]})]},t.dt)}))})]})]})},N=function(){return(0,Z.jsx)("div",{children:(0,Z.jsx)(T,{})})}},1003:function(t,r,e){e.d(r,{Et:function(){return p},NW:function(){return l},fE:function(){return s},sx:function(){return f}});var n=e(5861),o=e(1243),a=e(9657);function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(Z){s=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var a=r&&r.prototype instanceof p?r:p,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:L(t,e,c)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==r&&e.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,a,i,c){var u=f(t[n],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=E(i,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new b(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var c="https://api.openweathermap.org/",u="5293d8454b519c30f6f6331f38c85b4c",s=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"data/2.5/weather?q=").concat(r,"&appid=").concat(u,"&units=metric"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"data/2.5/forecast?q=").concat(r,"&appid=").concat(u,"&units=metric"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,a,s,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"geo/1.0/direct?q=").concat(r,"&limit=1&appid=").concat(u));case 2:return e=t.sent,n=e.data[0],a=n.lat,s=n.lon,t.next=6,o.Z.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(s,"&appid=").concat(u,"&units=metric"));case 6:return l=t.sent,t.abrupt("return",l.data);case 8:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=r.coords.latitude,n=r.coords.longitude,t.next=5,o.Z.get("".concat(c,"data/2.5/weather?lat=").concat(e,"&lon=").concat(n,"&appid=").concat(u,"&units=metric"));case 5:return a=t.sent,s=a.data,t.abrupt("return",s.name);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(i().mark((function t(){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"geolocation"in navigator||console.log("Geolocation is not available"),t.prev=1,t.next=4,new Promise((function(t,r){navigator.geolocation.getCurrentPosition((function(r){return t(r)}),(function(t){return r(t)}))}));case 4:return r=t.sent,t.next=7,h(r);case 7:return e=t.sent,console.log(e),t.abrupt("return",e);case 12:t.prev=12,t.t0=t.catch(1),console.log("Geolocation error or API error:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,s,l,f,h,p,d;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"geo/1.0/direct?q=").concat(r,"&limit=1&appid=").concat(u));case 2:return e=t.sent,n=e.data[0],s=n.lat,l=n.lon,console.log(s),t.next=7,o.Z.get("http://api.timezonedb.com/v2.1/get-time-zone?key=".concat("6ANWSK2XPW9R","&format=json&by=position&lat=").concat(s,"&lng=").concat(l));case 7:return f=t.sent,console.log(f),h=new Date(f.data.formatted),p=(0,a.Hr)(h.getHours()),d=(0,a.Hr)(h.getHours()),console.log("".concat(p,":").concat(d)),t.abrupt("return","".concat(p,":").concat(d));case 14:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}();d("oslo")},9657:function(t,r,e){e.d(r,{Do:function(){return i},Hr:function(){return a},LE:function(){return c},bq:function(){return o}});var n=new Date,o=function(t){var r=new Date(1e3*t),e=new Date,n=r.getDay(),o=e.getDay(),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return a[n]===a[o]?"Today":a[n]};function a(t){return String(t).padStart(2,"0")}var i=function(t){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},c=function(){return a(["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()])}},990:function(t,r,e){e.d(r,{d:function(){return n}});var n=function(t,r){return t?Math.round(9*r/5+32):Math.round(r)}}}]);
//# sourceMappingURL=551.d963e8ac.chunk.js.map