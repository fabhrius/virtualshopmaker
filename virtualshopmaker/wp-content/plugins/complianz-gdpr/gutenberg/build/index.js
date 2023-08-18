(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),o=n(26),s=n(372),a=n(327),i=n(97),c=n(109),l=n(985),u=n(61),d=n(655),p=n(263);e.exports=function(e){return new Promise((function(t,n){var f,m=e.data,h=e.headers,g=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}r.isFormData(m)&&delete h["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(b+":"+E)}var w=i(e.baseURL,e.url);function x(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,s={data:g&&"text"!==g&&"json"!==g?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};o((function(e){t(e),v()}),(function(e){n(e),v()}),s),y=null}}if(y.open(e.method.toUpperCase(),a(w,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=x:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(x)},y.onabort=function(){y&&(n(u("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(u("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||d.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var S=(e.withCredentials||l(w))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;S&&(h[e.xsrfHeaderName]=S)}"setRequestHeader"in y&&r.forEach(h,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete h[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),g&&"json"!==g&&(y.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){y&&(n(!e||e&&e.type?new p("canceled"):e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),m||(m=null),y.send(m)}))}},609:(e,t,n)=>{"use strict";var r=n(867),o=n(849),s=n(321),a=n(185),i=function e(t){var n=new s(t),i=o(s.prototype.request,n);return r.extend(i,s.prototype,n),r.extend(i,n),i.create=function(n){return e(a(t,n))},i}(n(655));i.Axios=s,i.Cancel=n(263),i.CancelToken=n(972),i.isCancel=n(502),i.VERSION=n(288).version,i.all=function(e){return Promise.all(e)},i.spread=n(713),i.isAxiosError=n(268),e.exports=i,e.exports.default=i},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),o=n(327),s=n(782),a=n(572),i=n(185),c=n(875),l=c.validators;function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e,t){if("string"==typeof e?(t=t||{}).url=e:t=e||{},!t.url)throw new Error("Provided config url is not valid");(t=i(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!o){var d=[a,void 0];for(Array.prototype.unshift.apply(d,r),d=d.concat(u),s=Promise.resolve(t);d.length;)s=s.then(d.shift(),d.shift());return s}for(var p=t;r.length;){var f=r.shift(),m=r.shift();try{p=f(p)}catch(e){m(e);break}}try{s=a(p)}catch(e){return Promise.reject(e)}for(;u.length;)s=s.then(u.shift(),u.shift());return s},u.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(i(r||{},{method:e,url:t,data:n}))}})),e.exports=u},782:(e,t,n)=>{"use strict";var r=n(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,n)=>{"use strict";var r=n(793),o=n(303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,o,s){var a=new Error(e);return r(a,t,n,o,s)}},572:(e,t,n)=>{"use strict";var r=n(867),o=n(527),s=n(502),a=n(655),i=n(263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new i("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var l={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||s,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867),o=n(655);e.exports=function(e,t,n){var s=this||o;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),o=n(16),s=n(481),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,l={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(448)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(i(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw s(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){l.headers[e]=r.merge(a)})),e.exports=l},288:e=>{e.exports={version:"0.25.0"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,a={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,n)=>{"use strict";var r=n(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var s=r[o],a=t[s];if(a){var i=e[s],c=void 0===i||a(i,s,e);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}},validators:o}},867:(e,t,n)=>{"use strict";var r=n(849),o=Object.prototype.toString;function s(e){return Array.isArray(e)}function a(e){return void 0===e}function i(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:i,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&i(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:l,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return c(e)&&u(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function n(n,r){l(t[r])&&l(n)?t[r]=e(t[r],n):l(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.apply(this,arguments)}const t=window.wp.element;var r=n(669),o=n.n(r);const{__}=wp.i18n,{registerBlockType:s}=wp.blocks,{InspectorControls:a,RichText:i,BlockControls:c,useBlockProps:l}=wp.blockEditor,{PanelBody:u,PanelRow:d,SelectControl:p,TextControl:f,TextareaControl:m,ToolbarButton:h,ToolbarGroup:g,Icon:v}=wp.components,y=()=>(0,t.createElement)(v,{icon:(0,t.createElement)("svg",{id:"uuid-098657ec-4091-4c5d-b2f8-761b37dc9655",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 19.26"},(0,t.createElement)("path",{className:"uuid-fb9dd603-42c0-4281-8513-899f01887edf",d:"m13.54,4.47c-.06-.06-.15-.06-.21,0l-4.9,4.9.21.21,4.9-4.9c.06-.06.06-.16,0-.21h0Zm-4.48,3.19c-.06-.06-.15-.06-.21,0l-1.06,1.06.21.21,1.06-1.06c.06-.06.06-.15,0-.21ZM15.14,1.21c.46,0,.9.19,1.22.53.61.66.56,1.7-.08,2.34l-2.89,2.89c-.06.06-.06.15,0,.21.06.06.15.06.21,0l2.89-2.89c.76-.76.8-2.05.04-2.81-.38-.38-.88-.57-1.39-.57s-1,.19-1.39.57l-6.6,6.6.21.21L13.96,1.7c.31-.32.73-.49,1.17-.49h0Zm-5.64,3.46c-.06-.06-.15-.06-.21,0l-2.77,2.78.21.21,2.78-2.78c.06-.06.06-.15,0-.21h0Zm.74-.52l3.09-3.09c.48-.48,1.13-.75,1.81-.75.52,0,1.01.16,1.43.44.06.04.14.04.19-.02.07-.07.06-.18-.02-.23-.48-.33-1.04-.49-1.6-.49-.73,0-1.47.28-2.03.84l-3.09,3.1c-.06.06-.06.15,0,.21.06.06.16.06.21,0h0Zm2.63,3.56c-.06-.06-.15-.06-.21,0l-2.3,2.3c-.06.06-.06.15,0,.21h0c.06.06.15.06.21,0l2.3-2.3c.06-.06.06-.15,0-.21h0Zm3.46-2.39l-5.97,5.97.21.21,5.97-5.97c.06-.06.06-.15,0-.21-.06-.06-.16-.06-.22,0Zm1.2-4.03c-.05-.08-.17-.09-.23-.03-.05.05-.06.13-.02.19.28.42.43.91.43,1.42,0,.64-.23,1.24-.65,1.71-.06.06-.06.15,0,.21.06.06.16.06.22,0,.88-.98.97-2.43.25-3.5h0Zm-3.24,2.66l.93-.93c.06-.06.06-.15,0-.21-.06-.06-.15-.06-.21,0l-.93.93c-.06.06-.06.15,0,.21.06.06.16.06.21,0h0Zm1.59-1.84c-.2-.19-.47-.29-.73-.29s-.54.1-.75.31l-4.8,4.81c-.06.06-.06.15,0,.21.06.06.15.06.21,0l4.78-4.79c.12-.12.28-.21.46-.24.24-.03.47.05.63.21.14.14.22.33.22.53s-.08.39-.22.53l-6.6,6.6.21.21,6.57-6.57c.42-.42.44-1.13.01-1.54h0Z"}),(0,t.createElement)("g",null,(0,t.createElement)("rect",{className:"uuid-fb9dd603-42c0-4281-8513-899f01887edf",x:"7.81",y:"5.93",width:"2.91",height:"5.64",transform:"translate(-3.47 9.11) rotate(-45)"}),(0,t.createElement)("path",{className:"uuid-fb9dd603-42c0-4281-8513-899f01887edf",d:"m10.7,11.35l-4.62-4.62h0l-1.28-1.28c-.55-.55-1.27-.83-1.99-.83s-1.44.27-1.99.83c-1.1,1.1-1.1,2.89,0,3.99l3.54,3.54h0l1.6,1.6c.06.06.15.06.21,0,0,0,0,0,0,0s0,0,0,0l.36-.36.03.88s0,.04.01.06c0,.02.02.04.03.05.06.06.15.06.21,0h0s0-.01,0-.01l3.82-3.82h0s.04-.04.04-.04Z"}),(0,t.createElement)("path",{className:"uuid-fb9dd603-42c0-4281-8513-899f01887edf",d:"m11.09,10.9l4.62-4.62h0l1.28-1.28c.55-.55.83-1.27.83-1.99s-.27-1.44-.83-1.99c-1.1-1.1-2.89-1.1-3.99,0l-3.54,3.54h0l-1.6,1.6c-.06.06-.06.15,0,.21,0,0,0,0,0,0s0,0,0,0l.36.36-.88.03s-.04,0-.06.01c-.02,0-.04.02-.05.03-.06.06-.06.15,0,.21h0s0,.01,0,.01l3.82,3.82h0s.04.04.04.04Z"})))});s("complianz/document",{title:__("Legal document - Complianz","complianz-gdpr"),icon:y,category:"widgets",example:{attributes:{preview:!0}},keywords:[__("Privacy Statement","complianz-gdpr"),__("Cookie Policy","complianz-gdpr"),__("Disclaimer","complianz-gdpr")],attributes:{documentSyncStatus:{type:"string",default:"sync"},customDocument:{type:"string",default:""},hasDocuments:{type:"string",default:"false"},content:{type:"string",source:"children",selector:"p"},selectedDocument:{type:"string",default:""},documents:{type:"array"},document:{type:"array"},preview:{type:"boolean",default:!1}},edit:e=>{let{className:n,isSelected:r,attributes:s,setAttributes:c}=e;const[l,f]=(0,t.useState)([]),[m,h]=(0,t.useState)(!1),[g,v]=(0,t.useState)(s.selectedDocument),[y,b]=(0,t.useState)(s.documentSyncStatus),[E,w]=(0,t.useState)(""),x=(0,t.useRef)([]);(0,t.useEffect)((()=>{o().get(complianz.site_url+"complianz/v1/documents").then((e=>{let t=e.data;f(t),h(!0);let n=!1;t&&0!==g&&(n=t.find((e=>e.id===g)),0===t.length&&c({hasDocuments:!1}));let r="";n&&(r=n.content),s.customDocument&&s.customDocument.length>0&&(r=s.customDocument),r=k(r),w(r)}))}),[]);const S=e=>{v(e),c({selectedDocument:e})};(0,t.useEffect)((()=>{const e=setTimeout((()=>{let e=C(E);c({customDocument:e})}),500);return()=>clearTimeout(e)}),[E]);const C=e=>{const t=document.createRange().createContextualFragment(e);t.querySelectorAll("span#cmplz-manage-consent-container-nojavascript, span#cmplz-manage-consent-container, span.cmplz-datarequest").forEach((e=>{let t=document.createElement("div");t.innerHTML=e.innerHTML,Array.from(e.attributes).forEach((e=>{t.setAttribute(e.nodeName,e.nodeValue)})),e.replaceWith(t)}));let n=document.createElement("div");n.appendChild(t.cloneNode(!0)),Array.from(x.current).forEach((e=>{n.setAttribute(e.nodeName,e.nodeValue)}));let r=document.createElement("div");return r.appendChild(n),r.innerHTML},k=e=>{let t=document.createRange().createContextualFragment(e);t.querySelectorAll("div#cmplz-document").forEach((n=>{e=n.innerHTML,x.current=n.attributes,t=document.createRange().createContextualFragment(e)}));let n=0;t.querySelectorAll("details,li").forEach((e=>{n++,e.setAttribute("key",n)})),t.querySelectorAll("div#cmplz-manage-consent-container-nojavascript, div#cmplz-manage-consent-container, div.cmplz-datarequest").forEach((e=>{let t=document.createElement("span");t.innerHTML=e.innerHTML,Array.from(e.attributes).forEach((e=>{t.setAttribute(e.nodeName,e.nodeValue)})),e.replaceWith(t)}));let r=document.createElement("div");return r.appendChild(t.cloneNode(!0)),r.innerHTML},z=e=>{b(e),c({documentSyncStatus:e});const t=l.find((e=>e.id===g));let n=k(t.content);w(n),c({customDocument:t.content})};let T=[{value:0,label:__("Select a document","complianz-gdpr")}],O=__("Loading...","complianz-gdpr"),N=[{value:"sync",label:__("Synchronize document with Complianz","complianz-gdpr")},{value:"unlink",label:__("Edit document and stop synchronization","complianz-gdpr")}];if(s.hasDocuments||(O=__("No documents found. Please finish the Complianz Privacy Suite wizard to generate documents","complianz-gdpr")),s.preview)return(0,t.createElement)("img",{alt:"preview",src:complianz.cmplz_preview});if(m&&(O=__(r?"Select a document type from the dropdownlist":"Click this block to show the options","complianz-gdpr"),l.forEach((e=>{T.push({value:e.id,label:e.title})}))),0!==s.selectedDocument&&m&&s.selectedDocument.length>0){const e=l.find((e=>e.id===s.selectedDocument));e&&(O=e.content)}if("sync"===y)return[!!r&&(0,t.createElement)(a,{key:"inspector-document"},(0,t.createElement)(u,{title:__("Document settings","complianz-gdpr"),initialOpen:!0},(0,t.createElement)(d,{key:"1"},(0,t.createElement)(p,{onChange:e=>S(e),value:g,label:__("Select a document","complianz-gdpr"),options:T})),(0,t.createElement)(d,{key:"2"},(0,t.createElement)(p,{onChange:e=>z(e),value:y,label:__("Document sync status","complianz-gdpr"),options:N})))),(0,t.createElement)("div",{key:s.selectedDocument,className:n,dangerouslySetInnerHTML:{__html:O}})];{let e=m?E:__("Loading...","complianz-gdpr"),o=n+" cmplz-unlinked-mode";return[!!r&&(0,t.createElement)(a,{key:"inspector-document-settings"},(0,t.createElement)(u,{title:__("Document settings","complianz-gdpr"),initialOpen:!0},(0,t.createElement)(d,{key:"1"},(0,t.createElement)(p,{onChange:e=>S(e),value:s.selectedDocument,label:__("Select a document","complianz-gdpr"),options:T})),(0,t.createElement)(d,{key:"2"},(0,t.createElement)(p,{onChange:e=>z(e),value:y,label:__("Document sync status","complianz-gdpr"),options:N})))),(0,t.createElement)(i,{key:"rich-text-cmplz",className:o,value:e,onChange:e=>(e=>{w(e)})(e)})]}},save:function(){return null}}),s("complianz/consent-area",{title:__("Consent Area Block"),icon:y,category:"widgets",example:{attributes:{preview:!0}},attributes:{category:{type:"string",default:"marketing"},service:{type:"service",default:"general"},blockId:{type:"string",default:""},postId:{type:"integer",default:-1},placeholderContent:{type:"string",default:""},consentedContent:{type:"string",default:""}},edit:n=>{const{getCurrentPostId:r}=wp.data.select("core/editor"),o=r(),{attributes:s,setAttributes:i,isSelected:v,className:y}=n,[b,E]=(0,t.useState)("consented"),[w,x]=(0,t.useState)(!1);(0,t.useEffect)((()=>{if(i({postId:o,category:s.category,service:s.service}),""===s.blockId){let e=(Math.random()+1).toString(36).substring(7);i({blockId:e})}}),[s]);const S=l();let C=!complianz.user_can_unfiltered_html;return[!!v&&(0,t.createElement)(a,{key:"inspector-document-settings"},(0,t.createElement)(u,{title:__("Document settings","complianz-gdpr"),initialOpen:!0},(0,t.createElement)(d,{key:"1"},(0,t.createElement)(p,{disabled:C,label:__("Category","complianz-gdpr"),value:s.category,options:[{label:__("Preferences","complianz-gdpr"),value:"preferences"},{label:__("Statistics","complianz-gdpr"),value:"statistics"},{label:__("Marketing","complianz-gdpr"),value:"marketing"}],onChange:e=>i({category:e})})),(0,t.createElement)(d,{key:"2"},(0,t.createElement)(f,{disabled:C,label:__("Service","complianz-gdpr"),value:s.service,onChange:e=>i({service:e})})),(0,t.createElement)(d,{key:"3"},(0,t.createElement)(p,{disabled:C,label:__("View"),value:b,options:[{label:__("Placeholder","complianz-gdpr"),value:"placeholder"},{label:__("Default","complianz-gdpr"),value:"consented"}],onChange:e=>(e=>{E(e)})(e)})))),(0,t.createElement)("div",e({},S,{key:"cmplz-consent-area"}),(0,t.createElement)(c,null,(0,t.createElement)(g,null,(0,t.createElement)(h,{className:"components-tab-button",isPressed:!w,onClick:()=>x(!1)},"HTML"),(0,t.createElement)(h,{className:"components-tab-button",isPressed:w,onClick:()=>x(!0)},__("Preview")))),C&&(0,t.createElement)("div",null,__("You do not have sufficient permissions to edit this block.","complianz-gdpr")),!w&&(0,t.createElement)(t.Fragment,null,"placeholder"===b&&(0,t.createElement)(m,{key:"1",disabled:C,placeholder:__("You can add custom HTML to create your own placeholder. This placeholder is visible before consent.","complianz-gdpr"),className:y,value:s.placeholderContent,onChange:e=>i({placeholderContent:e})}),"consented"===b&&(0,t.createElement)(m,{key:"2",disabled:C,placeholder:__("You can add custom HTML that requires consent. In the right-side bar you will find the options for this custom block. For instructions, please go to complianz.io/gutenberg for more information.","complianz-gdpr"),className:y,value:s.consentedContent,onChange:e=>i({consentedContent:e})})),!!w&&(0,t.createElement)(t.Fragment,null,"placeholder"===b&&(0,t.createElement)("div",{dangerouslySetInnerHTML:{__html:s.placeholderContent}}),"consented"===b&&(0,t.createElement)("div",{dangerouslySetInnerHTML:{__html:s.consentedContent}})))]},save:function(){return null}})})()})();