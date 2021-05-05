(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@wxcc-desktop/sdk/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@wxcc-desktop/sdk/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var i, n; }}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=62)}([function(e,t,n){window,e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t){e.exports=n(4)},function(e,t){e.exports=n(38)},function(e,t){e.exports=n(8)},function(e,t){e.exports=n(41)},function(e,t){e.exports=n(63)},function(e,t){e.exports=n(64)},function(e,t){e.exports=n(59)},function(e,t){e.exports=n(61)},function(e,t,n){"use strict";n.r(t),n.d(t,"createBrowserNotifications",(function(){return f})),n.d(t,"BrowserNotification",(function(){return l})),n.d(t,"Decorator",(function(){return p})),n.d(t,"Err",(function(){return d})),n.d(t,"Evt",(function(){return m})),n.d(t,"createHttp",(function(){return b})),n.d(t,"createLogger",(function(){return u})),n.d(t,"Logger",(function(){return a})),n.d(t,"createNotifications",(function(){return C})),n.d(t,"Notifications",(function(){return E})),n.d(t,"Signal",(function(){return k})),n.d(t,"I18N",(function(){return T}));var i=n(0),r=n.n(i),o=n(1);const s=(...e)=>e.map(e=>"string"==typeof e?e:JSON.stringify(e));var a;function u(e){const t=new a.Service(e);return a.POOL.addLogger(t),t}!function(e){e.MAX_LOGS_SIZE=1048576,e.LS_LOGS_KEY="uuip-logs";const t=/[\u0100-\uFFFF]/g;let n;!function(e){e[e.Trace=1]="Trace",e[e.Debug=2]="Debug",e[e.Warn=3]="Warn",e[e.Error=4]="Error",e[e.Fatal=5]="Fatal"}(n=e.Level||(e.Level={})),e.Service=class{constructor(e){this.loggerEmitter=r()(),this.prefix=e}log(t,...n){const i=s(this.prefix?[""+this.prefix,...n]:n),r=Date.now(),a=o.DateTime.fromMillis(r).toFormat("yyyy-LL-dd HH:mm:ss:SSS");switch(t){case e.Level.Trace:console.info(a,...i);break;case e.Level.Debug:console.log(a,...i);break;case e.Level.Warn:console.warn(a,...i);break;case e.Level.Error:case e.Level.Fatal:console.error(a,...i);break;default:console.log(...i)}const u={pfx:this.prefix,msgs:[...n],ts:r,lvl:t};this.emit("add",u)}info(...e){this.log(n.Trace,...e)}warn(...e){this.log(n.Warn,...e)}error(...e){this.log(n.Error,...e)}emit(e,...t){this.loggerEmitter.emit(e,...t)}addEventListener(e,t){return this.loggerEmitter.on(e,t),()=>{this.removeEventListener(e,t)}}removeEventListener(e,t){this.loggerEmitter.off(e,t)}};class i{constructor(){this.loggers=new Map,this.logsCollection=[],this.prefixedLogsCollections={},this.logRecordsSerializedLength=0,this.onLoggerAddRecord=e=>{this.addLogRecord(e),this.save()},this.restore()}static getSerializedJsonLogRecordBytesSize(e=""){const n=e.length;if(n){const i=e.replace(t,"").length;return 1*i+2*(n-i)}return n}get serializedJsonLogsBytesSize(){const e=this.logsCollection.length;return 2+this.logRecordsSerializedLength+1*(e-1)}save(){window.localStorage.setItem(e.LS_LOGS_KEY,JSON.stringify(this.logsCollection))}restore(){try{(JSON.parse(window.localStorage.getItem(e.LS_LOGS_KEY)||"[]")||[]).forEach(e=>this.addLogRecord(e))}catch(e){console.warn("Logger failed read logs from localStorage: ",e)}}addLogRecord(t){for(this.logsCollection.push(t),this.logRecordsSerializedLength+=i.getSerializedJsonLogRecordBytesSize(JSON.stringify(t)),this.prefixedLogsCollections[t.pfx]=this.prefixedLogsCollections[t.pfx]||new Set,this.prefixedLogsCollections[t.pfx].add(t);this.serializedJsonLogsBytesSize>e.MAX_LOGS_SIZE;)this.logsCollection.length&&this.removeLogRecord(this.logsCollection[0])}removeLogRecord(e){if(e){const t=this.logsCollection.indexOf(e);-1!==t&&(this.logsCollection.splice(t,1),this.logRecordsSerializedLength-=i.getSerializedJsonLogRecordBytesSize(JSON.stringify(e)),this.prefixedLogsCollections[e.pfx]&&this.prefixedLogsCollections[e.pfx].has(e)&&this.prefixedLogsCollections[e.pfx].delete(e))}}static getLogRecordReadable(e){return{prefix:e.pfx,messages:e.msgs,timestamp:o.DateTime.fromMillis(e.ts).toFormat("yyyy-LL-dd HH:mm:ss:SSS"),level:n[e.lvl]}}static getLogsReadableJson(e){const t=e=>e.map(e=>i.getLogRecordReadable(e));return JSON.stringify(Array.isArray(e)?t(e):Object.keys(e).reduce((n,i)=>(n[i]=t(e[i]),n),{}),null,2)}static getLogsReadableText(e){const t=e=>e.reduce((e,t)=>{const n=i.getLogRecordReadable(t);return e+(n.timestamp+" ")+n.prefix+" "+n.level+" "+s(n.messages).join(" ")+" \r\n"},"");return Array.isArray(e)?t(e):Object.keys(e).reduce((n,i)=>(n+=`[SERVICE "${i}" LOGS]: `)+t(e[i]),"")}static getLogsUrl(e){return"data:text/plain;charset=utf-8,"+encodeURIComponent(e)}static browserDownload(e,t){try{if(document&&document.createElement){const n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}else console.warn("Browser is not supported to download logs")}catch(e){}}addLogger(e){this.loggers.set(e.prefix,e),e.removeEventListener("add",this.onLoggerAddRecord),e.addEventListener("add",this.onLoggerAddRecord)}getAllLogsJsonUrl(){return i.getLogsUrl(i.getLogsReadableJson(this.logsCollection))}getAllPrefixedLogsJsonUrl(){return i.getLogsUrl(i.getLogsReadableJson(this.getAllPrefixedLogsCollections()))}getPrefixedLogsJsonUrl(e){return i.getLogsUrl(i.getLogsReadableJson(this.getPrefixedLogsCollection(e)))}getAllLogsTextUrl(){return i.getLogsUrl(i.getLogsReadableText(this.logsCollection))}getPrefixedLogsTextUrl(e){return i.getLogsUrl(i.getLogsReadableText(this.getPrefixedLogsCollection(e)))}browserDownloadAllLogsJson(){i.browserDownload(this.getAllLogsJsonUrl(),new Date+"_all_logs.json")}browserDownloadAllPrefixedLogsJson(){i.browserDownload(this.getAllPrefixedLogsJsonUrl(),new Date+"_all_prefixed_logs.json")}browserDownloadPrefixedLogsJson(e){i.browserDownload(this.getPrefixedLogsJsonUrl(e),`${new Date}_${e}_logs.json`)}browserDownloadAllLogsText(){i.browserDownload(this.getAllLogsTextUrl(),new Date+"_all_logs.log")}browserDownloadPrefixedLogsText(e){i.browserDownload(this.getPrefixedLogsTextUrl(e),`${new Date}_${e}_logs.log`)}cleanupAllLogs(){this.logsCollection.length=0,this.logRecordsSerializedLength=0,Object.keys(this.prefixedLogsCollections).forEach(e=>this.prefixedLogsCollections[e]=new Set),this.save()}cleanupPrefixedLogs(e){this.getPrefixedLogsCollection(e).forEach(e=>this.removeLogRecord(e)),this.prefixedLogsCollections[e]=new Set,this.save()}getAllLogsCollection(){return[...this.logsCollection]}getAllPrefixedLogsCollections(){return Object.keys(this.prefixedLogsCollections).reduce((e,t)=>(e[t]=this.getPrefixedLogsCollection(t),e),{})}getPrefixedLogsCollection(e){return Array.from(this.prefixedLogsCollections[e]||new Set)}}e.ServicesPool=i,e.POOL=new e.ServicesPool}(a||(a={}));const c=u("unified-ui-platform-sdk");var l,d;function f(e){return new l.Service(e)}function h(e,t){if(e.descriptor=e.descriptor||Object.getOwnPropertyDescriptor(e.target,e.key),"function"!=typeof e.descriptor.value)return console.warn(e.key,"Decorator must be used on function"),e.descriptor;const n=e.descriptor.value,i=e.target.constructor.name;return e.descriptor.value=function(){const e=[];for(let t=0;t<arguments.length;t++)e[t]=arguments[t];return t.call(this,n,e,i)},e.descriptor}!function(e){class t{constructor(e){this.defaultOptions=e||{}}static get isBrowserNotificationPromiseSupported(){try{window.Notification.requestPermission().then()}catch(e){return!1}return!0}get isBrowserNotificationSupported(){return!!("Notification"in window)}get isBrowserNotificationIconSupported(){return this.isBrowserNotificationSupported&&"icon"in window.Notification.prototype}get isBrowserNotificationImageSupported(){return this.isBrowserNotificationSupported&&"image"in window.Notification.prototype}get isBrowserNotificationBadgeSupported(){return this.isBrowserNotificationSupported&&"badge"in window.Notification.prototype}get isPermissionGranted(){return"granted"===window.Notification.permission}get isPermissionDenied(){return"denied"===window.Notification.permission}get isPermissionUnknown(){return!this.isPermissionGranted&&!this.isPermissionDenied}requestNotificationUserPermission(){return function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){this.isBrowserNotificationSupported?t.isBrowserNotificationPromiseSupported?yield window.Notification.requestPermission():yield new Promise(e=>window.Notification.requestPermission(t=>e(t))):c.warn("Browser notification is not supported...")}))}fire(e,t){return new window.Notification(e,Object.assign(Object.assign({},this.defaultOptions),t||{}))}}e.Service=t}(l||(l={})),function(e){class t extends Error{constructor(e,t){super(),this.isErr="yes",this.id=e,this.stack=(new Error).stack,"string"==typeof t?this.message=t:t instanceof Error?(this.message=t.message,this.name=t.name):this.message=""}}e.Message=t;class n extends Error{constructor(e,t){super(),this.isErr="yes",this.id=e,this.stack=(new Error).stack,this.details=t,this.message="{err.details}"}}e.Details=n,e.Create=class{}}(d||(d={}));var p,v,g=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};(v=p||(p={})).Debounce=function(e=250){return function(t,n,i){let r;return h({target:t,key:n,descriptor:i},(function(t,n){clearTimeout(r),r=window.setTimeout(()=>{clearTimeout(r),t.apply(this,n)},e)}))}},v.Evt=function(){return(e,t)=>{const n={get(){return new m(this,void 0!==t?t:e.key)},enumerable:!0,configurable:!0};return void 0!==t?Object.defineProperty(e,t,n):{kind:"method",placement:"prototype",key:e.key,descriptor:n}}},v.Exec=function(e,t=!0){return function(n,i,r){return h({target:n,key:i,descriptor:r},(function(n,r){return function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){const o="_"+i+"_exec_flag";if(t&&this[o])return void console.log("PREVENTING DOUBLE EXECUTION");const s=t=>{if(this[o]=t,"function"==typeof e)e.call(this,{isExec:t,ctx:this});else{const n=e;t?n.before&&n.before.call(this,this):n.after&&n.after.call(this,this)}};s(!0);const a=n.apply(this,r);return a instanceof Promise?a.then(()=>s(!1)).catch(()=>s(!1)):(console.warn("Must be async function to use [@Executing] decorator"),s(!1)),a}))}))}},v.Handle=function(e){return function(t,n,i){return h({target:t,key:n,descriptor:i},(function(t,i,r){return g(this,void 0,void 0,(function*(){const o=this,s=t=>g(this,void 0,void 0,(function*(){t.id&&"string"==typeof t.id&&"yes"===t.isErr||("string"==typeof t||t instanceof Error?t=new d.Message("system",t):(console.warn("Err must be 'string' or 'new Error()' instance"),t=new d.Message("system","")));const i=t;i.ctx=o;const s=`Error] ${r}.${n} [${i.id}]: ${i.message}`;if("function"==typeof e){const t=e;console.log("[Handled"+s);const n=t.call(o,i);n instanceof Promise&&(yield n)}else{const t=e;if(t[i.id]){console.log("[Handled"+s);const e=t[i.id].call(o,i);e instanceof Promise&&(yield e)}else if(t.handle){console.log("[Handled"+s);const e=t.handle.call(o,i);e instanceof Promise&&(yield e)}else console.warn("[Unhandled "+s);if(t.fallback){const e=t.fallback.call(o,i);e instanceof Promise&&(yield e)}}}));try{const e=t.apply(o,i);return e instanceof Promise?new Promise(t=>{e.then(t).catch(e=>g(this,void 0,void 0,(function*(){yield s(e),t(void 0)})))}):e}catch(e){return void(yield s(e))}}))}))}},v.Once=function(){return function(e,t,n){return h({target:e,key:t,descriptor:n},(function(e,n){const i="_"+t+"_once_flag";if(!this[i])return this[i]=!0,e.call(this,n)}))}},v.Throttle=function(e=1e3/60){return function(t,n,i){let r=void 0,o=Date.now();return h({target:t,key:n,descriptor:i},(function(t,n){const i=(...n)=>{const s=Date.now();window.clearTimeout(r),!o||s-o>=e?(o=s,t.apply(this,n)):r=window.setTimeout(()=>i(...n),e-(s-o))};i(...n)}))}};class m{constructor(e,t){this.target=e,this.eventName=t}emit(e,t={bubbles:!0,composed:!0,cancelable:!1}){this.target.dispatchEvent(new CustomEvent(this.eventName,Object.assign({detail:e},t)))}}var y=n(3),S=n.n(y),w=n(4);function b(e){const t=S.a.create();return t.accessToken=e,t.interceptors.request.use(e=>{if(!e.headers.Authorization&&t.accessToken&&(e.headers.Authorization="Bearer "+t.accessToken),!e.headers.TrackingID){const t=Object(w.v1)();e.headers.TrackingID=`uuip_${t}_1.0:1.0`}return e.headers["Content-Type"]||(e.headers["Content-Type"]="application/json"),e}),t}var E,k,O=n(2),L=n.n(O);function C(e={}){const t=new E.Service;return t.updateConfig(e),t}!function(e){let t,n;!function(e){let t,n,i,r,o,s,a,u;!function(e){e.Info="info",e.Warn="warn",e.Error="error",e.Success="success",e.Chat="chat",e.Default="default"}(t=e.Type||(e.Type={})),e.TYPES=Object.values(t),function(e){e.Silent="silent",e.AutoDismiss="autodismiss",e.Acknowledge="acknowledge"}(n=e.Mode||(e.Mode={})),e.MODES=Object.values(n),function(e){e.Added="added",e.Pended="pended",e.Activated="activated",e.Deactivated="deactivated",e.Removed="removed"}(i=e.Status||(e.Status={})),e.StatusWeight={[i.Added]:0,[i.Pended]:1,[i.Activated]:2,[i.Deactivated]:3,[i.Removed]:4},e.STATUSES=Object.values(i),function(e){e.User="user_add"}(r=e.AddEventReason||(e.AddEventReason={})),function(e){e.ServiceAutoPropagate="service_auto_propagate_pending",e.ServiceAutoDismiss="service_autodismiss_pending",e.UserSilent="user_silent_pending"}(o=e.PendingEventReason||(e.PendingEventReason={})),function(e){e.ServiceAutoPropagate="service_auto_propagate_activate"}(s=e.ActivateEventReason||(e.ActivateEventReason={})),function(e){e.UserNegative="user_negative_deactivate",e.UserPositive="user_positive_deactivate",e.UserNeutral="user_neutral_deactivate"}(a=e.DeactivateEventReason||(e.DeactivateEventReason={})),function(e){e.User="user_remove"}(u=e.RemoveEventReason||(e.RemoveEventReason={}))}(t=e.ItemMeta||(e.ItemMeta={})),function(e){e.STATUS_EVENTS=["add","pending","activate","deactivate","remove"],e.STATUS_EVENT_MAP={add:t.Status.Added,pending:t.Status.Pended,activate:t.Status.Activated,deactivate:t.Status.Deactivated,remove:t.Status.Removed},e.DISABLED_ITEM_MODE={[t.Mode.Silent]:!1,[t.Mode.AutoDismiss]:!1,[t.Mode.Acknowledge]:!1},e.ACTIVATED_ITEM_MODE_LIMIT={[t.Mode.Silent]:0,[t.Mode.AutoDismiss]:10,[t.Mode.Acknowledge]:1},e.AUTO_DISMISS_TIMEOUT=5e3}(n=e.ServiceMeta||(e.ServiceMeta={}));class i{constructor(){this.hubEmitter=r()()}emit(e,...t){this.hubEmitter.emit(e,...t)}addEventListener(e,t){this.hubEmitter.on(e,t)}addOnceEventListener(e,t){this.hubEmitter.once(e,t)}removeEventListener(e,t){this.hubEmitter.off(e,t)}removeAllEventListeners(){L()(this.hubEmitter)}}e.Item=class{constructor(e,n){this._serviceHubSubscriptions=[],this._itemEmitter=r()();const{type:i,mode:s,title:a,data:u,timestamp:c}=e.data;this.type=i,this.title=a,this.data=u,this._mode=s,this.timestamp=c||(new Date).toISOString(),this.datetime=o.DateTime.fromISO(this.timestamp).toLocaleString(o.DateTime.DATETIME_SHORT_WITH_SECONDS),this.options=Object.freeze(this.validateAuxOptions(e.options||{})),n&&(this._serviceHubAdapter=n,this._status=t.Status.Added,this._reason=t.AddEventReason.User,this.bindItemHubListeners())}get status(){return this._status}get reason(){return this._reason}get mode(){return this._mode}validateAuxOptions(e){let n={};return e&&void 0!==e.AUTO_DISMISS_TIMEOUT&&this.mode===t.Mode.AutoDismiss&&(n=Object.assign(Object.assign({},n),{AUTO_DISMISS_TIMEOUT:e.AUTO_DISMISS_TIMEOUT})),n}bindItemHubListeners(){if(this._serviceHubAdapter){{const e=(e,n,i)=>{this.timestamp in e&&(this._status=n,this._reason=i,n===t.Status.Removed&&(this.unbindItemHubListeners(),this.removeAllEventListeners()),this.emit("statusUpdate",n,i))};this._serviceHubAdapter.addEventListener("statusServiceUpdateResponse",e);const n=()=>{var t;null===(t=this._serviceHubAdapter)||void 0===t||t.removeEventListener("statusServiceUpdateResponse",e)};this._serviceHubSubscriptions.push(n)}{const e=(e,t)=>{this.timestamp in e&&(this._mode=t,this.emit("modeUpdate",t))};this._serviceHubAdapter.addEventListener("modeStatusUpdateResponse",e);const t=()=>{var t;null===(t=this._serviceHubAdapter)||void 0===t||t.removeEventListener("modeStatusUpdateResponse",e)};this._serviceHubSubscriptions.push(t)}}}unbindItemHubListeners(){this._serviceHubSubscriptions&&(this._serviceHubSubscriptions.forEach(e=>e()),this._serviceHubSubscriptions.length=0)}deactivate(e){this._status&&t.StatusWeight[this._status]<t.StatusWeight[t.Status.Deactivated]?this._serviceHubAdapter?this._serviceHubAdapter.emit("statusServiceUpdateRequest",this,t.Status.Deactivated,e):c.warn("Service hub adapter is not initialized for this notification item instance: ",this):c.warn(`Notification should have "${t.Status.Pended}" or "${t.Status.Activated}" status to be able change status to "${t.Status.Deactivated}".Current notification status is "${this._status}". Ignoring this change`)}pending(){this._status===t.Status.Activated||this.mode!==t.Mode.Silent?this._serviceHubAdapter?this._serviceHubAdapter.emit("statusServiceUpdateRequest",this,t.Status.Pended,t.PendingEventReason.UserSilent):c.warn("Service hub adapter is not initialized for this notification item instance: ",this):c.warn(`Notification should have "${t.Status.Activated}" status or not "${t.Mode.Silent}" mode, to be able change status to "${t.Status.Pended}" and mode to "${t.Mode.Silent}".Current notification status is "${this._status}" and mode is "${this.mode}". Ignoring this change`)}emit(e,...t){this._itemEmitter.emit(e,...t)}addEventListener(e,t){this._itemEmitter.on(e,t)}addOnceEventListener(e,t){this._itemEmitter.once(e,t)}removeEventListener(e,t){this._itemEmitter.off(e,t)}removeAllEventListeners(){L()(this._itemEmitter)}};const s=(e,t,n=(()=>0))=>[...e,...t].sort(n),a=(e,t)=>e.reduce((e,n)=>(-1===t.indexOf(n)&&e.push(n),e),[]);class u{constructor(){this.emitter=r()(),this.map={},this.status=u.createStatus(),this.serviceConfig={DISABLED_ITEM_MODE:Object.assign({},n.DISABLED_ITEM_MODE),ACTIVATED_ITEM_MODE_LIMIT:Object.assign({},n.ACTIVATED_ITEM_MODE_LIMIT),AUTO_DISMISS_TIMEOUT:n.AUTO_DISMISS_TIMEOUT},this.activeAutoDismissTimeoutRefs={},this.serviceHubAdapter=new i,this.bindServiceHubEvents()}static mergeConfig(e,...t){if(!t.length)return e;const n=t.shift(),i=e=>e&&"object"==typeof e&&!Array.isArray(e);if(i(e)&&i(n))for(const t in n)i(n[t])?(e[t]||Object.assign(e,{[t]:{}}),this.mergeConfig(e[t],n[t])):Object.assign(e,{[t]:n[t]});return this.mergeConfig(e,...t)}static createStatus(){return{[t.Status.Added]:this.createStatusHolderCollection(),[t.Status.Pended]:this.createStatusHolderCollection(),[t.Status.Activated]:this.createStatusHolderCollection(),[t.Status.Deactivated]:this.createStatusHolderCollection(),[t.Status.Removed]:this.createStatusHolderCollection()}}static createStatusHolderCollection(){return Object.assign([],Object.assign(Object.assign({ids:[]},this.createStatusHolderSubCollections(t.MODES)),this.createStatusHolderSubCollections(t.TYPES)))}static createStatusHolderSubCollections(e){return Object.assign({},e.reduce((e,t)=>(e[t]=[],e),{}))}updateNotificationsCollections(){const e=u.createStatus();this.status.added.ids.forEach(n=>{const i=this.map[n];t.STATUSES.forEach(t=>{-1!==this.status[t].ids.indexOf(i.timestamp)&&(e[t].push(i),e[t].ids.push(n),e[t][i.mode].push(i),e[t][i.type].push(i))})}),this.status=e}setAutoDismiss(e,n=(()=>{})){this.prepareUpdateNotifications(e).forEach(e=>{var i;if(e.mode===t.Mode.AutoDismiss){const t=()=>n(e);this.activeAutoDismissTimeoutRefs[e.timestamp]=window.setTimeout(t,null!==(i=e.options.AUTO_DISMISS_TIMEOUT)&&void 0!==i?i:this.serviceConfig.AUTO_DISMISS_TIMEOUT)}})}removeAutoDismiss(e,t=(()=>{})){this.prepareUpdateNotifications(e).forEach(e=>{e.timestamp in this.activeAutoDismissTimeoutRefs&&(t(e),window.clearTimeout(this.activeAutoDismissTimeoutRefs[e.timestamp]),delete this.activeAutoDismissTimeoutRefs[e.timestamp])})}update(e,t,n){const i=Array.isArray(n)?n:[n];if(i.length){const n=i.map(e=>e.timestamp);switch(e){case"add":i.forEach(e=>this.map[e.timestamp]=e),this.status.added.ids=s(this.status.added.ids,n,u.sortTimestampsFn);break;case"pending":this.status.pended.ids=s(this.status.pended.ids,n,u.sortTimestampsFn),this.status.activated.ids=a(this.status.activated.ids,n),this.status.deactivated.ids=a(this.status.deactivated.ids,n);break;case"activate":this.status.pended.ids=a(this.status.pended.ids,n),this.status.activated.ids=s(this.status.activated.ids,n,u.sortTimestampsFn),this.status.deactivated.ids=a(this.status.deactivated.ids,n);break;case"deactivate":this.status.pended.ids=a(this.status.pended.ids,n),this.status.activated.ids=a(this.status.activated.ids,n),this.status.deactivated.ids=s(this.status.deactivated.ids,n,u.sortTimestampsFn);break;case"remove":this.status.pended.ids=a(this.status.pended.ids,n),this.status.activated.ids=a(this.status.activated.ids,n),this.status.deactivated.ids=a(this.status.deactivated.ids,n),this.status.added.ids=a(this.status.added.ids,n),this.status.removed.ids=s(this.status.removed.ids,n,u.sortTimestampsFn),n.forEach(e=>delete this.map[e])}this.updateNotificationsCollections(),this.emit(e,i,t),this.propagate(e,t,i)}}propagate(e,n,i){const r=Array.isArray(i)?i:[i];if(r.length)switch(e){case"add":this.update("pending",t.PendingEventReason.ServiceAutoPropagate,r);break;case"pending":r.forEach(e=>{this.removeAutoDismiss(e)}),this.update("activate",t.ActivateEventReason.ServiceAutoPropagate,this.prepareActiveCandidatesNotifications(this.status.pended));break;case"activate":r.forEach(e=>{this.setAutoDismiss(e,e=>{e.mode===t.Mode.AutoDismiss&&this.serviceHubAdapter.emit("statusServiceUpdateRequest",e,t.Status.Pended,t.PendingEventReason.ServiceAutoDismiss)})});break;case"deactivate":r.forEach(e=>{this.removeAutoDismiss(e)}),this.update("activate",t.ActivateEventReason.ServiceAutoPropagate,this.prepareActiveCandidatesNotifications(this.status.pended));break;case"remove":this.update("deactivate",t.DeactivateEventReason.UserNegative,r)}}prepareAddNotifications(t){const n=Object.keys(this.serviceConfig.DISABLED_ITEM_MODE).reduce((e,t)=>(this.serviceConfig.DISABLED_ITEM_MODE[t]||e.push(t),e),[]).map(e=>`"${e}"`).join(", ");return(Array.isArray(t)?t:[t]).filter(e=>!this.serviceConfig.DISABLED_ITEM_MODE[e.data.mode]||(c.error(`Trying to .add(...) notification mode "${e.data.mode}" that is disabled in this notifications service instance by configuration.Current configuration is: "${JSON.stringify(this.config)}"Only ${n} allowed. Ignoring .add(${JSON.stringify(e)}) notification...`),!1)).map(t=>new e.Item(t,this.serviceHubAdapter))}prepareUpdateNotifications(e){return(Array.isArray(e)?e:[e]).reduce((e,t)=>(t.timestamp in this.map?e.push(t):c.error("Trying to handle untracked notification. Call .add(...) first...",JSON.stringify(t)),e),[])}prepareActiveCandidatesNotifications(e){const n=(Array.isArray(e)?e:[e]).reduce((e,t)=>(this.status.activated[t.mode].length+e[t.mode].length<this.serviceConfig.ACTIVATED_ITEM_MODE_LIMIT[t.mode]&&e[t.mode].push(t),e),u.createStatusHolderSubCollections(t.MODES));return Object.values(n).reduce((e,t)=>e.concat(t),[])}static sortByTimestampsFn(e,t){return u.sortTimestampsFn(e.timestamp,t.timestamp)}get added(){return this.status.added}get pended(){return this.status.pended}get activated(){return this.status.activated}get deactivated(){return this.status.deactivated}getNotificationStatus(e){return Object.keys(this.status).filter(e=>e!==t.Status.Added).find(t=>-1!==this.status[t].ids.indexOf(e.timestamp))}get config(){return Object.freeze(this.serviceConfig)}static validateUpdateConfig(e){const i=e;if(i.ACTIVATED_ITEM_MODE_LIMIT&&i.ACTIVATED_ITEM_MODE_LIMIT.acknowledge>n.ACTIVATED_ITEM_MODE_LIMIT.acknowledge)throw new Error(`\n          Max ${t.Mode.Acknowledge} limit is ${n.ACTIVATED_ITEM_MODE_LIMIT.acknowledge}\n        `);if(i.DISABLED_ITEM_MODE){if(!Object.keys(i.DISABLED_ITEM_MODE).reduce((e,t)=>(i.DISABLED_ITEM_MODE[t]&&e++,e),0))throw new Error("At least one notifications mode should be allowed in service instance");Object.keys(i.ACTIVATED_ITEM_MODE_LIMIT).forEach(e=>{e in i.DISABLED_ITEM_MODE&&i.DISABLED_ITEM_MODE[e]&&c.warn(`Changing configuration limit count for mode "${e}" won't have any effect, because this mode is disabled in notifications service instance`)}),"AUTO_DISMISS_TIMEOUT"in i&&i.DISABLED_ITEM_MODE[t.Mode.AutoDismiss]&&c.warn(`Changing "AUTO_DISMISS_TIMEOUT" configuration option won't have any effect,because "${t.Mode.AutoDismiss}" mode is disabled in notifications service instance`)}return!0}updateConfig(e){u.validateUpdateConfig(e)&&(this.serviceConfig=u.mergeConfig({},this.serviceConfig,e),c.info("Updated notifications service configuration: ",this.config))}add(e){const n=this.prepareAddNotifications(e);return this.update("add",t.AddEventReason.User,n),n}pending(e){const n=this.prepareUpdateNotifications(e);return this.serviceHubAdapter.emit("statusServiceUpdateRequest",n,t.Status.Pended,t.PendingEventReason.UserSilent),n}deactivate(e,n){const i=this.prepareUpdateNotifications(e);return this.serviceHubAdapter.emit("statusServiceUpdateRequest",i,t.Status.Deactivated,n),i}remove(e){const n=this.prepareUpdateNotifications(e);return this.serviceHubAdapter.emit("statusServiceUpdateRequest",n,t.Status.Removed,t.RemoveEventReason.User),n}pendingAllActivated(){return this.pending(this.status.activated)}pendingAll(){return this.pending([...this.status.pended,...this.status.activated])}deactivateAllActivated(e){return this.deactivate(this.status.activated,e)}deactivateAll(e){return this.deactivate([...this.status.pended,...this.status.activated],e)}removeAllDeactivated(){return this.remove(this.status.deactivated)}removeAll(){return this.remove(this.status.added)}addEventListener(e,t){this.emitter.on(e,t)}removeEventListener(e,t){this.emitter.off(e,t)}addOnceEventListener(e,t){this.emitter.once(e,t)}removeAllEventListeners(){L()(this.emitter)}emit(e,...t){this.emitter.emit(e,...t)}bindServiceHubEvents(){this.serviceHubAdapter.addEventListener("statusServiceUpdateRequest",(e,n,i)=>{const r=Array.isArray(e)?e:[e],o=r.reduce((e,t)=>(e[t.timestamp]=this.getNotificationStatus(t),e),{});{const e=r.filter(e=>(o[e.timestamp]===t.Status.Activated||e.mode!==t.Mode.Silent)&&n===t.Status.Pended);{const n=e.filter(e=>e.mode!==t.Mode.Silent);n.length&&this.serviceHubAdapter.emit("modeStatusUpdateResponse",n.reduce((e,t)=>(e[t.timestamp]=t,e),{}),t.Mode.Silent)}e.length&&this.update("pending",i,e)}{const e=r.filter(e=>{const i=o[e.timestamp];return(i===t.Status.Pended||i===t.Status.Activated)&&n===t.Status.Deactivated});e.length&&this.update("deactivate",i,e)}r.filter(e=>{const i=o[e.timestamp];return(i===t.Status.Pended||i===t.Status.Activated||i===t.Status.Deactivated)&&n===t.Status.Removed}).length&&this.update("remove",i,e)}),n.STATUS_EVENTS.forEach(e=>{this.addEventListener(e,(t,i)=>{const r=n.STATUS_EVENT_MAP[e],o=t.reduce((e,t)=>(e[t.timestamp]=t,e),{});this.serviceHubAdapter.emit("statusServiceUpdateResponse",o,r,i)})})}}u.sortTimestampsFn=(e,t)=>e>t?1:e<t?-1:0,e.Service=u}(E||(E={})),function(e){class t{constructor(){this.listeners=[],this.listenersOnce=[],this.listen=e=>(this.listeners.push(e),{stopListen:()=>this.stopListen(e)}),this.listenOnce=e=>(this.listenersOnce.push(e),{stopListenOnce:()=>this.stopListenOnce(e)}),this.stopListen=e=>{const t=this.listeners.indexOf(e,0);return t>-1&&(this.listeners.splice(t,1),!0)},this.stopListenOnce=e=>{const t=this.listenersOnce.indexOf(e,0);return t>-1&&(this.listenersOnce.splice(t,1),!0)},this.stopListenAll=()=>{this.listeners=[],this.listenersOnce=[]},this.send=e=>{this.listeners.forEach(t=>t(e)),this.listenersOnce.forEach(t=>t(e)),this.listenersOnce=[]}}}class n{constructor(){this.listeners=[],this.listenersOnce=[],this.listen=e=>(this.listeners.push(e),{stopListen:()=>this.stopListen(e)}),this.listenOnce=e=>(this.listenersOnce.push(e),{stopListenOnce:()=>this.stopListenOnce(e)}),this.stopListen=e=>{const t=this.listeners.indexOf(e,0);return t>-1&&(this.listeners.splice(t,1),!0)},this.stopListenOnce=e=>{const t=this.listenersOnce.indexOf(e,0);return t>-1&&(this.listenersOnce.splice(t,1),!0)},this.stopListenAll=()=>{this.listeners=[],this.listenersOnce=[]},this.send=()=>{this.listeners.forEach(e=>e()),this.listenersOnce.forEach(e=>e()),this.listenersOnce=[]}}}e.create=new class{withData(){const e=new t;return{signal:e,send:e.send,stopListenAll:e.stopListenAll}}empty(){const e=new n;return{signal:e,send:e.send,stopListenAll:e.stopListenAll}}}}(k||(k={}));var T,x,I=n(5),A=n.n(I),N=n(6),R=n.n(N),D=n(7),M=n.n(D);(x=T||(T={})).createService=e=>{const t=A.a.createInstance();{const n=e&&e.backend?e.backend:new R.a;t.use(n)}{const n=e&&e.languageDetector?e.languageDetector:new M.a;t.use(n)}return e&&e.logger&&t.use({log:"log"in e.logger?e.logger.log:e.logger.info,warn:e.logger.warn,error:e.logger.error,type:"logger"}),t},x.mergeServiceInitOptions=(...e)=>Object.assign.call(null,{},...e),x.createMixin=e=>{const t="i18n"in e?e.i18n:x.createService(),n="i18nInitOptions"in e?e.i18nInitOptions:null;n||c.info("i18n mixin instance waiting service initialization outside...");let i=!1;return e=>class extends e{constructor(){super(...arguments),this.onI18NInitialized=e=>this.requestUpdate(),this.onI18NLanguageChanged=e=>this.requestUpdate()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),t.on("initialized",this.onI18NInitialized),t.on("languageChanged",this.onI18NLanguageChanged),t.isInitialized||i||!n||(i=!0,t.init(n).finally(()=>i=!1))}disconnectedCallback(){t.off("initialized",this.onI18NInitialized),t.off("languageChanged",this.onI18NLanguageChanged),super.disconnectedCallback&&super.disconnectedCallback()}t(...e){return t.t(...e)}}}}])},function(e,t,n){"use strict";var i=n(10),r=Object.prototype.toString;function o(e){return"[object Array]"===r.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===r.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:s,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function n(n,i){"object"==typeof t[i]&&"object"==typeof n?t[i]=e(t[i],n):t[i]=n}for(var i=0,r=arguments.length;i<r;i++)c(arguments[i],n);return t},deepMerge:function e(){var t={};function n(n,i){"object"==typeof t[i]&&"object"==typeof n?t[i]=e(t[i],n):t[i]="object"==typeof n?e({},n):n}for(var i=0,r=arguments.length;i<r;i++)c(arguments[i],n);return t},extend:function(e,t,n){return c(t,(function(t,r){e[r]=n&&"function"==typeof t?i(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return i}))},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";var i,r,o,s,a,u,c,l=n(20),d=n(37),f=Function.prototype.apply,h=Function.prototype.call,p=Object.create,v=Object.defineProperty,g=Object.defineProperties,m=Object.prototype.hasOwnProperty,y={configurable:!0,enumerable:!1,writable:!0};r=function(e,t){var n,r;return d(t),r=this,i.call(this,e,n=function(){o.call(r,e,n),f.call(t,this,arguments)}),n.__eeOnceListener__=t,this},a={on:i=function(e,t){var n;return d(t),m.call(this,"__ee__")?n=this.__ee__:(n=y.value=p(null),v(this,"__ee__",y),y.value=null),n[e]?"object"==typeof n[e]?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:o=function(e,t){var n,i,r,o;if(d(t),!m.call(this,"__ee__"))return this;if(!(n=this.__ee__)[e])return this;if("object"==typeof(i=n[e]))for(o=0;r=i[o];++o)r!==t&&r.__eeOnceListener__!==t||(2===i.length?n[e]=i[o?0:1]:i.splice(o,1));else i!==t&&i.__eeOnceListener__!==t||delete n[e];return this},emit:s=function(e){var t,n,i,r,o;if(m.call(this,"__ee__")&&(r=this.__ee__[e]))if("object"==typeof r){for(n=arguments.length,o=new Array(n-1),t=1;t<n;++t)o[t-1]=arguments[t];for(r=r.slice(),t=0;i=r[t];++t)f.call(i,this,o)}else switch(arguments.length){case 1:h.call(r,this);break;case 2:h.call(r,this,arguments[1]);break;case 3:h.call(r,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,o=new Array(n-1),t=1;t<n;++t)o[t-1]=arguments[t];f.call(r,this,o)}}},u={on:l(i),once:l(r),off:l(o),emit:l(s)},c=g({},u),e.exports=t=function(e){return null==e?p(c):g(Object(e),u)},t.methods=a},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=[],r=i.forEach,o=i.slice;function s(e){return r.call(o.call(arguments,1),(function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])})),e}},function(e,t,n){"use strict";var i=n(31)();e.exports=function(e){return e!==i&&null!==e}},function(e,t,n){(function(i){var r;if("function"==typeof fetch&&(void 0!==i&&i.fetch?r=i.fetch:"undefined"!=typeof window&&window.fetch&&(r=window.fetch)),"undefined"==typeof window||void 0===window.document){var o=r||n(60);o.default&&(o=o.default),t.default=o,e.exports=t.default}}).call(this,n(18))},function(e,t,n){"use strict";var i=n(39),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t,n=arguments[1];if(i(e),void 0===n)r.call(e,"__ee__")&&delete e.__ee__;else{if(!(t=r.call(e,"__ee__")&&e.__ee__))return;t[n]&&delete t[n]}}},function(e,t,n){"use strict";e.exports=function(e){return null!=e}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}},function(e,t,n){"use strict";var i=n(1);function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(i.isURLSearchParams(t))o=t.toString();else{var s=[];i.forEach(t,(function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,(function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var i=n(1),r=n(48),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(a=n(14)),a),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){u.headers[e]=i.merge(o)})),e.exports=u}).call(this,n(47))},function(e,t,n){"use strict";var i=n(1),r=n(49),o=n(11),s=n(51),a=n(54),u=n(55),c=n(15);e.exports=function(e){return new Promise((function(t,l){var d=e.data,f=e.headers;i.isFormData(d)&&delete f["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",v=e.auth.password||"";f.Authorization="Basic "+btoa(p+":"+v)}var g=s(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),o(g,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};r(t,l,i),h=null}},h.onabort=function(){h&&(l(c("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){l(c("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(c(t,e,"ECONNABORTED",h)),h=null},i.isStandardBrowserEnv()){var m=n(56),y=(e.withCredentials||u(g))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(f[e.xsrfHeaderName]=y)}if("setRequestHeader"in h&&i.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:h.setRequestHeader(t,e)})),i.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),l(e),h=null)})),void 0===d&&(d=null),h.send(d)}))}},function(e,t,n){"use strict";var i=n(50);e.exports=function(e,t,n,r,o){var s=new Error(e);return i(s,t,n,r,o)}},function(e,t,n){"use strict";var i=n(1);e.exports=function(e,t){t=t||{};var n={},r=["url","method","params","data"],o=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];i.forEach(r,(function(e){void 0!==t[e]&&(n[e]=t[e])})),i.forEach(o,(function(r){i.isObject(t[r])?n[r]=i.deepMerge(e[r],t[r]):void 0!==t[r]?n[r]=t[r]:i.isObject(e[r])?n[r]=i.deepMerge(e[r]):void 0!==e[r]&&(n[r]=e[r])})),i.forEach(s,(function(i){void 0!==t[i]?n[i]=t[i]:void 0!==e[i]&&(n[i]=e[i])}));var a=r.concat(o).concat(s),u=Object.keys(t).filter((function(e){return-1===a.indexOf(e)}));return i.forEach(u,(function(i){void 0!==t[i]?n[i]=t[i]:void 0!==e[i]&&(n[i]=e[i])})),n}},function(e,t,n){"use strict";function i(e){this.message=e}i.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},i.prototype.__CANCEL__=!0,e.exports=i},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var i,r,o,s=n(5),a=n(7),u=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"function"==typeof fetch&&(void 0!==e&&e.fetch?i=e.fetch:"undefined"!=typeof window&&window.fetch&&(i=window.fetch)),"function"==typeof XMLHttpRequest&&(void 0!==e&&e.XMLHttpRequest?r=e.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&(r=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&(void 0!==e&&e.ActiveXObject?o=e.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(o=window.ActiveXObject)),i||!a||r||o||(i=u.a||a),"function"!=typeof i&&(i=void 0);var l=function(e,t){if(t&&"object"===c(t)){var n="";for(var i in t)n+="&"+encodeURIComponent(i)+"="+encodeURIComponent(t[i]);if(!n)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+n.slice(1)}return e};t.a=function(e,t,n,a){return"function"==typeof n&&(a=n,n=void 0),a=a||function(){},i?function(e,t,n,r){e.queryStringParams&&(t=l(t,e.queryStringParams));var o=Object(s.a)({},"function"==typeof e.customHeaders?e.customHeaders():e.customHeaders);n&&(o["Content-Type"]="application/json"),i(t,Object(s.a)({method:n?"POST":"GET",body:n?e.stringify(n):void 0,headers:o},"function"==typeof e.requestOptions?e.requestOptions(n):e.requestOptions)).then((function(e){if(!e.ok)return r(e.statusText||"Error",{status:e.status});e.text().then((function(t){r(null,{status:e.status,data:t})})).catch(r)})).catch(r)}(e,t,n,a):"function"==typeof XMLHttpRequest||"function"==typeof ActiveXObject?function(e,t,n,i){n&&"object"===c(n)&&(n=l("",n).slice(1)),e.queryStringParams&&(t=l(t,e.queryStringParams));try{var s;(s=r?new r:new o("MSXML2.XMLHTTP.3.0")).open(n?"POST":"GET",t,1),e.crossDomain||s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.withCredentials=!!e.withCredentials,n&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.overrideMimeType&&s.overrideMimeType("application/json");var a=e.customHeaders;if(a="function"==typeof a?a():a)for(var u in a)s.setRequestHeader(u,a[u]);s.onreadystatechange=function(){s.readyState>3&&i(s.status>=400?s.statusText:null,{status:s.status,data:s.responseText})},s.send(n)}catch(e){console&&console.log(e)}}(e,t,n,a):void 0}}).call(this,n(18))},function(e,t,n){"use strict";var i=n(9),r=n(21),o=n(25),s=n(33),a=n(34);(e.exports=function(e,t){var n,r,u,c,l;return arguments.length<2||"string"!=typeof e?(c=t,t=e,e=null):c=arguments[2],i(e)?(n=a.call(e,"c"),r=a.call(e,"e"),u=a.call(e,"w")):(n=u=!0,r=!1),l={value:t,configurable:n,enumerable:r,writable:u},c?o(s(c),l):l}).gs=function(e,t,n){var u,c,l,d;return"string"!=typeof e?(l=n,n=t,t=e,e=null):l=arguments[3],i(t)?r(t)?i(n)?r(n)||(l=n,n=void 0):n=void 0:(l=t,t=n=void 0):t=void 0,i(e)?(u=a.call(e,"c"),c=a.call(e,"e")):(u=!0,c=!1),d={get:t,set:n,configurable:u,enumerable:c},l?o(s(l),d):d}},function(e,t,n){"use strict";var i=n(22),r=/^\s*class[\s{/}]/,o=Function.prototype.toString;e.exports=function(e){return!!i(e)&&!r.test(o.call(e))}},function(e,t,n){"use strict";var i=n(23);e.exports=function(e){if("function"!=typeof e)return!1;if(!hasOwnProperty.call(e,"length"))return!1;try{if("number"!=typeof e.length)return!1;if("function"!=typeof e.call)return!1;if("function"!=typeof e.apply)return!1}catch(e){return!1}return!i(e)}},function(e,t,n){"use strict";var i=n(24);e.exports=function(e){if(!i(e))return!1;try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}},function(e,t,n){"use strict";var i=n(9),r={object:!0,function:!0,undefined:!0};e.exports=function(e){return!!i(e)&&hasOwnProperty.call(r,typeof e)}},function(e,t,n){"use strict";e.exports=n(26)()?Object.assign:n(27)},function(e,t,n){"use strict";e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},function(e,t,n){"use strict";var i=n(28),r=n(32),o=Math.max;e.exports=function(e,t){var n,s,a,u=o(arguments.length,2);for(e=Object(r(e)),a=function(i){try{e[i]=t[i]}catch(e){n||(n=e)}},s=1;s<u;++s)i(t=arguments[s]).forEach(a);if(void 0!==n)throw n;return e}},function(e,t,n){"use strict";e.exports=n(29)()?Object.keys:n(30)},function(e,t,n){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},function(e,t,n){"use strict";var i=n(6),r=Object.keys;e.exports=function(e){return r(i(e)?Object(e):e)}},function(e,t,n){"use strict";e.exports=function(){}},function(e,t,n){"use strict";var i=n(6);e.exports=function(e){if(!i(e))throw new TypeError("Cannot use null or undefined");return e}},function(e,t,n){"use strict";var i=n(6),r=Array.prototype.forEach,o=Object.create,s=function(e,t){var n;for(n in e)t[n]=e[n]};e.exports=function(e){var t=o(null);return r.call(arguments,(function(e){i(e)&&s(Object(e),t)})),t}},function(e,t,n){"use strict";e.exports=n(35)()?String.prototype.contains:n(36)},function(e,t,n){"use strict";var i="razdwatrzy";e.exports=function(){return"function"==typeof i.contains&&(!0===i.contains("dwa")&&!1===i.contains("foo"))}},function(e,t,n){"use strict";var i=String.prototype.indexOf;e.exports=function(e){return i.call(this,e,arguments[1])>-1}},function(e,t,n){"use strict";e.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return(c=u()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&a(r,n.prototype),r}).apply(null,arguments)}function l(e){var t="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return c(e,arguments,s(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),a(i,e)})(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function f(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t}(l(Error)),p=function(e){function t(t){return e.call(this,"Invalid DateTime: "+t.toMessage())||this}return o(t,e),t}(h),v=function(e){function t(t){return e.call(this,"Invalid Interval: "+t.toMessage())||this}return o(t,e),t}(h),g=function(e){function t(t){return e.call(this,"Invalid Duration: "+t.toMessage())||this}return o(t,e),t}(h),m=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t}(h),y=function(e){function t(t){return e.call(this,"Invalid unit "+t)||this}return o(t,e),t}(h),S=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t}(h),w=function(e){function t(){return e.call(this,"Zone is an abstract class")||this}return o(t,e),t}(h),b="numeric",E="short",k="long",O={year:b,month:b,day:b},L={year:b,month:E,day:b},C={year:b,month:E,day:b,weekday:E},T={year:b,month:k,day:b},x={year:b,month:k,day:b,weekday:k},I={hour:b,minute:b},A={hour:b,minute:b,second:b},N={hour:b,minute:b,second:b,timeZoneName:E},R={hour:b,minute:b,second:b,timeZoneName:k},D={hour:b,minute:b,hour12:!1},M={hour:b,minute:b,second:b,hour12:!1},_={hour:b,minute:b,second:b,hour12:!1,timeZoneName:E},j={hour:b,minute:b,second:b,hour12:!1,timeZoneName:k},V={year:b,month:b,day:b,hour:b,minute:b},P={year:b,month:b,day:b,hour:b,minute:b,second:b},q={year:b,month:E,day:b,hour:b,minute:b},U={year:b,month:E,day:b,hour:b,minute:b,second:b},F={year:b,month:E,day:b,weekday:E,hour:b,minute:b},H={year:b,month:k,day:b,hour:b,minute:b,timeZoneName:E},z={year:b,month:k,day:b,hour:b,minute:b,second:b,timeZoneName:E},Z={year:b,month:k,day:b,weekday:k,hour:b,minute:b,timeZoneName:k},J={year:b,month:k,day:b,weekday:k,hour:b,minute:b,second:b,timeZoneName:k};function B(e){return void 0===e}function G(e){return"number"==typeof e}function W(e){return"number"==typeof e&&e%1==0}function $(){try{return"undefined"!=typeof Intl&&Intl.DateTimeFormat}catch(e){return!1}}function K(){return!B(Intl.DateTimeFormat.prototype.formatToParts)}function Y(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function X(e,t,n){if(0!==e.length)return e.reduce((function(e,i){var r=[t(i),i];return e&&n(e[0],r[0])===e[0]?e:r}),null)[1]}function Q(e,t){return t.reduce((function(t,n){return t[n]=e[n],t}),{})}function ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function te(e,t,n){return W(e)&&e>=t&&e<=n}function ne(e,t){return void 0===t&&(t=2),e.toString().length<t?("0".repeat(t)+e).slice(-t):e.toString()}function ie(e){return B(e)||null===e||""===e?void 0:parseInt(e,10)}function re(e){if(!B(e)&&null!==e&&""!==e){var t=1e3*parseFloat("0."+e);return Math.floor(t)}}function oe(e,t,n){void 0===n&&(n=!1);var i=Math.pow(10,t);return(n?Math.trunc:Math.round)(e*i)/i}function se(e){return e%4==0&&(e%100!=0||e%400==0)}function ae(e){return se(e)?366:365}function ue(e,t){var n=function(e,t){return e-t*Math.floor(e/t)}(t-1,12)+1;return 2===n?se(e+(t-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function ce(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(t.getUTCFullYear()-1900),+t}function le(e){var t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,n=e-1,i=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7;return 4===t||3===i?53:52}function de(e){return e>99?e:e>60?1900+e:2e3+e}function fe(e,t,n,i){void 0===i&&(i=null);var r=new Date(e),o={hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};i&&(o.timeZone=i);var s=Object.assign({timeZoneName:t},o),a=$();if(a&&K()){var u=new Intl.DateTimeFormat(n,s).formatToParts(r).find((function(e){return"timezonename"===e.type.toLowerCase()}));return u?u.value:null}if(a){var c=new Intl.DateTimeFormat(n,o).format(r);return new Intl.DateTimeFormat(n,s).format(r).substring(c.length).replace(/^[, \u200e]+/,"")}return null}function he(e,t){var n=parseInt(e,10);Number.isNaN(n)&&(n=0);var i=parseInt(t,10)||0;return 60*n+(n<0||Object.is(n,-0)?-i:i)}function pe(e){var t=Number(e);if("boolean"==typeof e||""===e||Number.isNaN(t))throw new S("Invalid unit value "+e);return t}function ve(e,t,n){var i={};for(var r in e)if(ee(e,r)){if(n.indexOf(r)>=0)continue;var o=e[r];if(null==o)continue;i[t(r)]=pe(o)}return i}function ge(e,t){var n=Math.trunc(Math.abs(e/60)),i=Math.trunc(Math.abs(e%60)),r=e>=0?"+":"-";switch(t){case"short":return""+r+ne(n,2)+":"+ne(i,2);case"narrow":return""+r+n+(i>0?":"+i:"");case"techie":return""+r+ne(n,2)+ne(i,2);default:throw new RangeError("Value format "+t+" is out of range for property format")}}function me(e){return Q(e,["hour","minute","second","millisecond"])}var ye=/[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;function Se(e){return JSON.stringify(e,Object.keys(e).sort())}var we=["January","February","March","April","May","June","July","August","September","October","November","December"],be=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ee=["J","F","M","A","M","J","J","A","S","O","N","D"];function ke(e){switch(e){case"narrow":return Ee;case"short":return be;case"long":return we;case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var Oe=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Le=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ce=["M","T","W","T","F","S","S"];function Te(e){switch(e){case"narrow":return Ce;case"short":return Le;case"long":return Oe;case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var xe=["AM","PM"],Ie=["Before Christ","Anno Domini"],Ae=["BC","AD"],Ne=["B","A"];function Re(e){switch(e){case"narrow":return Ne;case"short":return Ae;case"long":return Ie;default:return null}}function De(e,t){for(var n,i="",r=f(e);!(n=r()).done;){var o=n.value;o.literal?i+=o.val:i+=t(o.val)}return i}var Me={D:O,DD:L,DDD:T,DDDD:x,t:I,tt:A,ttt:N,tttt:R,T:D,TT:M,TTT:_,TTTT:j,f:V,ff:q,fff:H,ffff:Z,F:P,FF:U,FFF:z,FFFF:J},_e=function(){function e(e,t){this.opts=t,this.loc=e,this.systemLoc=null}e.create=function(t,n){return void 0===n&&(n={}),new e(t,n)},e.parseFormat=function(e){for(var t=null,n="",i=!1,r=[],o=0;o<e.length;o++){var s=e.charAt(o);"'"===s?(n.length>0&&r.push({literal:i,val:n}),t=null,n="",i=!i):i||s===t?n+=s:(n.length>0&&r.push({literal:!1,val:n}),n=s,t=s)}return n.length>0&&r.push({literal:i,val:n}),r},e.macroTokenToFormatOpts=function(e){return Me[e]};var t=e.prototype;return t.formatWithSystemDefault=function(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,Object.assign({},this.opts,t)).format()},t.formatDateTime=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).format()},t.formatDateTimeParts=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).formatToParts()},t.resolvedOptions=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).resolvedOptions()},t.num=function(e,t){if(void 0===t&&(t=0),this.opts.forceSimple)return ne(e,t);var n=Object.assign({},this.opts);return t>0&&(n.padTo=t),this.loc.numberFormatter(n).format(e)},t.formatDateTimeFromString=function(t,n){var i=this,r="en"===this.loc.listingMode(),o=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar&&K(),s=function(e,n){return i.loc.extract(t,e,n)},a=function(e){return t.isOffsetFixed&&0===t.offset&&e.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,e.format):""},u=function(){return r?function(e){return xe[e.hour<12?0:1]}(t):s({hour:"numeric",hour12:!0},"dayperiod")},c=function(e,n){return r?function(e,t){return ke(t)[e.month-1]}(t,e):s(n?{month:e}:{month:e,day:"numeric"},"month")},l=function(e,n){return r?function(e,t){return Te(t)[e.weekday-1]}(t,e):s(n?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday")},d=function(e){return r?function(e,t){return Re(t)[e.year<0?0:1]}(t,e):s({era:e},"era")};return De(e.parseFormat(n),(function(n){switch(n){case"S":return i.num(t.millisecond);case"u":case"SSS":return i.num(t.millisecond,3);case"s":return i.num(t.second);case"ss":return i.num(t.second,2);case"m":return i.num(t.minute);case"mm":return i.num(t.minute,2);case"h":return i.num(t.hour%12==0?12:t.hour%12);case"hh":return i.num(t.hour%12==0?12:t.hour%12,2);case"H":return i.num(t.hour);case"HH":return i.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:i.opts.allowZ});case"ZZ":return a({format:"short",allowZ:i.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:i.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:i.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:i.loc.locale});case"z":return t.zoneName;case"a":return u();case"d":return o?s({day:"numeric"},"day"):i.num(t.day);case"dd":return o?s({day:"2-digit"},"day"):i.num(t.day,2);case"c":return i.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return i.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return o?s({month:"numeric",day:"numeric"},"month"):i.num(t.month);case"LL":return o?s({month:"2-digit",day:"numeric"},"month"):i.num(t.month,2);case"LLL":return c("short",!0);case"LLLL":return c("long",!0);case"LLLLL":return c("narrow",!0);case"M":return o?s({month:"numeric"},"month"):i.num(t.month);case"MM":return o?s({month:"2-digit"},"month"):i.num(t.month,2);case"MMM":return c("short",!1);case"MMMM":return c("long",!1);case"MMMMM":return c("narrow",!1);case"y":return o?s({year:"numeric"},"year"):i.num(t.year);case"yy":return o?s({year:"2-digit"},"year"):i.num(t.year.toString().slice(-2),2);case"yyyy":return o?s({year:"numeric"},"year"):i.num(t.year,4);case"yyyyyy":return o?s({year:"numeric"},"year"):i.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return i.num(t.weekYear.toString().slice(-2),2);case"kkkk":return i.num(t.weekYear,4);case"W":return i.num(t.weekNumber);case"WW":return i.num(t.weekNumber,2);case"o":return i.num(t.ordinal);case"ooo":return i.num(t.ordinal,3);case"q":return i.num(t.quarter);case"qq":return i.num(t.quarter,2);case"X":return i.num(Math.floor(t.ts/1e3));case"x":return i.num(t.ts);default:return function(n){var r=e.macroTokenToFormatOpts(n);return r?i.formatWithSystemDefault(t,r):n}(n)}}))},t.formatDurationFromString=function(t,n){var i,r=this,o=function(e){switch(e[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"M":return"month";case"y":return"year";default:return null}},s=e.parseFormat(n),a=s.reduce((function(e,t){var n=t.literal,i=t.val;return n?e:e.concat(i)}),[]),u=t.shiftTo.apply(t,a.map(o).filter((function(e){return e})));return De(s,(i=u,function(e){var t=o(e);return t?r.num(i.get(t),e.length):e}))},e}(),je=function(){function e(e,t){this.reason=e,this.explanation=t}return e.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},e}(),Ve=function(){function e(){}var t=e.prototype;return t.offsetName=function(e,t){throw new w},t.formatOffset=function(e,t){throw new w},t.offset=function(e){throw new w},t.equals=function(e){throw new w},r(e,[{key:"type",get:function(){throw new w}},{key:"name",get:function(){throw new w}},{key:"universal",get:function(){throw new w}},{key:"isValid",get:function(){throw new w}}]),e}(),Pe=null,qe=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.offsetName=function(e,t){return fe(e,t.format,t.locale)},n.formatOffset=function(e,t){return ge(this.offset(e),t)},n.offset=function(e){return-new Date(e).getTimezoneOffset()},n.equals=function(e){return"local"===e.type},r(t,[{key:"type",get:function(){return"local"}},{key:"name",get:function(){return $()?(new Intl.DateTimeFormat).resolvedOptions().timeZone:"local"}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return null===Pe&&(Pe=new t),Pe}}]),t}(Ve),Ue=RegExp("^"+ye.source+"$"),Fe={};var He={year:0,month:1,day:2,hour:3,minute:4,second:5};var ze={},Ze=function(e){function t(n){var i;return(i=e.call(this)||this).zoneName=n,i.valid=t.isValidZone(n),i}o(t,e),t.create=function(e){return ze[e]||(ze[e]=new t(e)),ze[e]},t.resetCache=function(){ze={},Fe={}},t.isValidSpecifier=function(e){return!(!e||!e.match(Ue))},t.isValidZone=function(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}},t.parseGMTOffset=function(e){if(e){var t=e.match(/^Etc\/GMT([+-]\d{1,2})$/i);if(t)return-60*parseInt(t[1])}return null};var n=t.prototype;return n.offsetName=function(e,t){return fe(e,t.format,t.locale,this.name)},n.formatOffset=function(e,t){return ge(this.offset(e),t)},n.offset=function(e){var t,n=new Date(e),i=(t=this.name,Fe[t]||(Fe[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),Fe[t]),r=i.formatToParts?function(e,t){for(var n=e.formatToParts(t),i=[],r=0;r<n.length;r++){var o=n[r],s=o.type,a=o.value,u=He[s];B(u)||(i[u]=parseInt(a,10))}return i}(i,n):function(e,t){var n=e.format(t).replace(/\u200E/g,""),i=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),r=i[1],o=i[2];return[i[3],r,o,i[4],i[5],i[6]]}(i,n),o=r[0],s=r[1],a=r[2],u=r[3],c=+n,l=c%1e3;return(ce({year:o,month:s,day:a,hour:24===u?0:u,minute:r[4],second:r[5],millisecond:0})-(c-=l>=0?l:1e3+l))/6e4},n.equals=function(e){return"iana"===e.type&&e.name===this.name},r(t,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),t}(Ve),Je=null,Be=function(e){function t(t){var n;return(n=e.call(this)||this).fixed=t,n}o(t,e),t.instance=function(e){return 0===e?t.utcInstance:new t(e)},t.parseSpecifier=function(e){if(e){var n=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new t(he(n[1],n[2]))}return null},r(t,null,[{key:"utcInstance",get:function(){return null===Je&&(Je=new t(0)),Je}}]);var n=t.prototype;return n.offsetName=function(){return this.name},n.formatOffset=function(e,t){return ge(this.fixed,t)},n.offset=function(){return this.fixed},n.equals=function(e){return"fixed"===e.type&&e.fixed===this.fixed},r(t,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+ge(this.fixed,"narrow")}},{key:"universal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}]),t}(Ve),Ge=function(e){function t(t){var n;return(n=e.call(this)||this).zoneName=t,n}o(t,e);var n=t.prototype;return n.offsetName=function(){return null},n.formatOffset=function(){return""},n.offset=function(){return NaN},n.equals=function(){return!1},r(t,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),t}(Ve);function We(e,t){var n;if(B(e)||null===e)return t;if(e instanceof Ve)return e;if("string"==typeof e){var i=e.toLowerCase();return"local"===i?t:"utc"===i||"gmt"===i?Be.utcInstance:null!=(n=Ze.parseGMTOffset(e))?Be.instance(n):Ze.isValidSpecifier(i)?Ze.create(e):Be.parseSpecifier(i)||new Ge(e)}return G(e)?Be.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new Ge(e)}var $e=function(){return Date.now()},Ke=null,Ye=null,Xe=null,Qe=null,et=!1,tt=function(){function e(){}return e.resetCaches=function(){ft.resetCache(),Ze.resetCache()},r(e,null,[{key:"now",get:function(){return $e},set:function(e){$e=e}},{key:"defaultZoneName",get:function(){return e.defaultZone.name},set:function(e){Ke=e?We(e):null}},{key:"defaultZone",get:function(){return Ke||qe.instance}},{key:"defaultLocale",get:function(){return Ye},set:function(e){Ye=e}},{key:"defaultNumberingSystem",get:function(){return Xe},set:function(e){Xe=e}},{key:"defaultOutputCalendar",get:function(){return Qe},set:function(e){Qe=e}},{key:"throwOnInvalid",get:function(){return et},set:function(e){et=e}}]),e}(),nt={};function it(e,t){void 0===t&&(t={});var n=JSON.stringify([e,t]),i=nt[n];return i||(i=new Intl.DateTimeFormat(e,t),nt[n]=i),i}var rt={};var ot={};function st(e,t){void 0===t&&(t={});var n=t,i=(n.base,function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["base"])),r=JSON.stringify([e,i]),o=ot[r];return o||(o=new Intl.RelativeTimeFormat(e,t),ot[r]=o),o}var at=null;function ut(e,t,n,i,r){var o=e.listingMode(n);return"error"===o?null:"en"===o?i(t):r(t)}var ct=function(){function e(e,t,n){if(this.padTo=n.padTo||0,this.floor=n.floor||!1,!t&&$()){var i={useGrouping:!1};n.padTo>0&&(i.minimumIntegerDigits=n.padTo),this.inf=function(e,t){void 0===t&&(t={});var n=JSON.stringify([e,t]),i=rt[n];return i||(i=new Intl.NumberFormat(e,t),rt[n]=i),i}(e,i)}}return e.prototype.format=function(e){if(this.inf){var t=this.floor?Math.floor(e):e;return this.inf.format(t)}return ne(this.floor?Math.floor(e):oe(e,3),this.padTo)},e}(),lt=function(){function e(e,t,n){var i;if(this.opts=n,this.hasIntl=$(),e.zone.universal&&this.hasIntl?(i="UTC",n.timeZoneName?this.dt=e:this.dt=0===e.offset?e:ui.fromMillis(e.ts+60*e.offset*1e3)):"local"===e.zone.type?this.dt=e:(this.dt=e,i=e.zone.name),this.hasIntl){var r=Object.assign({},this.opts);i&&(r.timeZone=i),this.dtf=it(t,r)}}var t=e.prototype;return t.format=function(){if(this.hasIntl)return this.dtf.format(this.dt.toJSDate());var e=function(e){switch(Se(Q(e,["weekday","era","year","month","day","hour","minute","second","timeZoneName","hour12"]))){case Se(O):return"M/d/yyyy";case Se(L):return"LLL d, yyyy";case Se(C):return"EEE, LLL d, yyyy";case Se(T):return"LLLL d, yyyy";case Se(x):return"EEEE, LLLL d, yyyy";case Se(I):return"h:mm a";case Se(A):return"h:mm:ss a";case Se(N):case Se(R):return"h:mm a";case Se(D):return"HH:mm";case Se(M):return"HH:mm:ss";case Se(_):case Se(j):return"HH:mm";case Se(V):return"M/d/yyyy, h:mm a";case Se(q):return"LLL d, yyyy, h:mm a";case Se(H):return"LLLL d, yyyy, h:mm a";case Se(Z):return"EEEE, LLLL d, yyyy, h:mm a";case Se(P):return"M/d/yyyy, h:mm:ss a";case Se(U):return"LLL d, yyyy, h:mm:ss a";case Se(F):return"EEE, d LLL yyyy, h:mm a";case Se(z):return"LLLL d, yyyy, h:mm:ss a";case Se(J):return"EEEE, LLLL d, yyyy, h:mm:ss a";default:return"EEEE, LLLL d, yyyy, h:mm a"}}(this.opts),t=ft.create("en-US");return _e.create(t).formatDateTimeFromString(this.dt,e)},t.formatToParts=function(){return this.hasIntl&&K()?this.dtf.formatToParts(this.dt.toJSDate()):[]},t.resolvedOptions=function(){return this.hasIntl?this.dtf.resolvedOptions():{locale:"en-US",numberingSystem:"latn",outputCalendar:"gregory"}},e}(),dt=function(){function e(e,t,n){this.opts=Object.assign({style:"long"},n),!t&&Y()&&(this.rtf=st(e,n))}var t=e.prototype;return t.format=function(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,n,i){void 0===n&&(n="always"),void 0===i&&(i=!1);var r={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===n&&o){var s="days"===e;switch(t){case 1:return s?"tomorrow":"next "+r[e][0];case-1:return s?"yesterday":"last "+r[e][0];case 0:return s?"today":"this "+r[e][0]}}var a=Object.is(t,-0)||t<0,u=Math.abs(t),c=1===u,l=r[e],d=i?c?l[1]:l[2]||l[1]:c?r[e][0]:e;return a?u+" "+d+" ago":"in "+u+" "+d}(t,e,this.opts.numeric,"long"!==this.opts.style)},t.formatToParts=function(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]},e}(),ft=function(){function e(e,t,n,i){var r=function(e){var t=e.indexOf("-u-");if(-1===t)return[e];var n,i=e.substring(0,t);try{n=it(e).resolvedOptions()}catch(e){n=it(i).resolvedOptions()}var r=n;return[i,r.numberingSystem,r.calendar]}(e),o=r[0],s=r[1],a=r[2];this.locale=o,this.numberingSystem=t||s||null,this.outputCalendar=n||a||null,this.intl=function(e,t,n){return $()?n||t?(e+="-u",n&&(e+="-ca-"+n),t&&(e+="-nu-"+t),e):e:[]}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}e.fromOpts=function(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)},e.create=function(t,n,i,r){void 0===r&&(r=!1);var o=t||tt.defaultLocale;return new e(o||(r?"en-US":function(){if(at)return at;if($()){var e=(new Intl.DateTimeFormat).resolvedOptions().locale;return at=e&&"und"!==e?e:"en-US"}return at="en-US"}()),n||tt.defaultNumberingSystem,i||tt.defaultOutputCalendar,o)},e.resetCache=function(){at=null,nt={},rt={},ot={}},e.fromObject=function(t){var n=void 0===t?{}:t,i=n.locale,r=n.numberingSystem,o=n.outputCalendar;return e.create(i,r,o)};var t=e.prototype;return t.listingMode=function(e){void 0===e&&(e=!0);var t=$()&&K(),n=this.isEnglish(),i=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar);return t||n&&i||e?!t||n&&i?"en":"intl":"error"},t.clone=function(t){return t&&0!==Object.getOwnPropertyNames(t).length?e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1):this},t.redefaultToEN=function(e){return void 0===e&&(e={}),this.clone(Object.assign({},e,{defaultToEN:!0}))},t.redefaultToSystem=function(e){return void 0===e&&(e={}),this.clone(Object.assign({},e,{defaultToEN:!1}))},t.months=function(e,t,n){var i=this;return void 0===t&&(t=!1),void 0===n&&(n=!0),ut(this,e,n,ke,(function(){var n=t?{month:e,day:"numeric"}:{month:e},r=t?"format":"standalone";return i.monthsCache[r][e]||(i.monthsCache[r][e]=function(e){for(var t=[],n=1;n<=12;n++){var i=ui.utc(2016,n,1);t.push(e(i))}return t}((function(e){return i.extract(e,n,"month")}))),i.monthsCache[r][e]}))},t.weekdays=function(e,t,n){var i=this;return void 0===t&&(t=!1),void 0===n&&(n=!0),ut(this,e,n,Te,(function(){var n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},r=t?"format":"standalone";return i.weekdaysCache[r][e]||(i.weekdaysCache[r][e]=function(e){for(var t=[],n=1;n<=7;n++){var i=ui.utc(2016,11,13+n);t.push(e(i))}return t}((function(e){return i.extract(e,n,"weekday")}))),i.weekdaysCache[r][e]}))},t.meridiems=function(e){var t=this;return void 0===e&&(e=!0),ut(this,void 0,e,(function(){return xe}),(function(){if(!t.meridiemCache){var e={hour:"numeric",hour12:!0};t.meridiemCache=[ui.utc(2016,11,13,9),ui.utc(2016,11,13,19)].map((function(n){return t.extract(n,e,"dayperiod")}))}return t.meridiemCache}))},t.eras=function(e,t){var n=this;return void 0===t&&(t=!0),ut(this,e,t,Re,(function(){var t={era:e};return n.eraCache[e]||(n.eraCache[e]=[ui.utc(-40,1,1),ui.utc(2017,1,1)].map((function(e){return n.extract(e,t,"era")}))),n.eraCache[e]}))},t.extract=function(e,t,n){var i=this.dtFormatter(e,t).formatToParts().find((function(e){return e.type.toLowerCase()===n}));return i?i.value:null},t.numberFormatter=function(e){return void 0===e&&(e={}),new ct(this.intl,e.forceSimple||this.fastNumbers,e)},t.dtFormatter=function(e,t){return void 0===t&&(t={}),new lt(e,this.intl,t)},t.relFormatter=function(e){return void 0===e&&(e={}),new dt(this.intl,this.isEnglish(),e)},t.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||$()&&new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")},t.equals=function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar},r(e,[{key:"fastNumbers",get:function(){var e;return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||$()&&"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}}]),e}();function ht(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t.reduce((function(e,t){return e+t.source}),"");return RegExp("^"+i+"$")}function pt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){var i=t[0],r=t[1],o=t[2],s=n(e,o),a=s[0],u=s[1],c=s[2];return[Object.assign(i,a),r||u,c]}),[{},null,1]).slice(0,2)}}function vt(e){if(null==e)return[null,null];for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var r=0,o=n;r<o.length;r++){var s=o[r],a=s[0],u=s[1],c=a.exec(e);if(c)return u(c)}return[null,null]}function gt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n){var i,r={};for(i=0;i<t.length;i++)r[t[i]]=ie(e[n+i]);return[r,null,n+i]}}var mt=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,yt=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,St=RegExp(""+yt.source+mt.source+"?"),wt=RegExp("(?:T"+St.source+")?"),bt=gt("weekYear","weekNumber","weekDay"),Et=gt("year","ordinal"),kt=RegExp(yt.source+" ?(?:"+mt.source+"|("+ye.source+"))?"),Ot=RegExp("(?: "+kt.source+")?");function Lt(e,t,n){var i=e[t];return B(i)?n:ie(i)}function Ct(e,t){return[{year:Lt(e,t),month:Lt(e,t+1,1),day:Lt(e,t+2,1)},null,t+3]}function Tt(e,t){return[{hour:Lt(e,t,0),minute:Lt(e,t+1,0),second:Lt(e,t+2,0),millisecond:re(e[t+3])},null,t+4]}function xt(e,t){var n=!e[t]&&!e[t+1],i=he(e[t+1],e[t+2]);return[{},n?null:Be.instance(i),t+3]}function It(e,t){return[{},e[t]?Ze.create(e[t]):null,t+1]}var At=/^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;function Nt(e){var t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],a=e[6],u=e[7],c=e[8],l="-"===t[0],d=function(e){return e&&l?-e:e};return[{years:d(ie(n)),months:d(ie(i)),weeks:d(ie(r)),days:d(ie(o)),hours:d(ie(s)),minutes:d(ie(a)),seconds:d(ie(u)),milliseconds:d(re(c))}]}var Rt={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e,t,n,i,r,o,s){var a={year:2===t.length?de(ie(t)):ie(t),month:be.indexOf(n)+1,day:ie(i),hour:ie(r),minute:ie(o)};return s&&(a.second=ie(s)),e&&(a.weekday=e.length>3?Oe.indexOf(e)+1:Le.indexOf(e)+1),a}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function _t(e){var t,n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],a=e[6],u=e[7],c=e[8],l=e[9],d=e[10],f=e[11],h=Dt(n,o,r,i,s,a,u);return t=c?Rt[c]:l?0:he(d,f),[h,new Be(t)]}var jt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Vt=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Pt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function qt(e){var t=e[1],n=e[2],i=e[3];return[Dt(t,e[4],i,n,e[5],e[6],e[7]),Be.utcInstance]}function Ut(e){var t=e[1],n=e[2],i=e[3],r=e[4],o=e[5],s=e[6];return[Dt(t,e[7],n,i,r,o,s),Be.utcInstance]}var Ft=ht(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,wt),Ht=ht(/(\d{4})-?W(\d\d)(?:-?(\d))?/,wt),zt=ht(/(\d{4})-?(\d{3})/,wt),Zt=ht(St),Jt=pt(Ct,Tt,xt),Bt=pt(bt,Tt,xt),Gt=pt(Et,Tt),Wt=pt(Tt,xt);var $t=ht(/(\d{4})-(\d\d)-(\d\d)/,Ot),Kt=ht(kt),Yt=pt(Ct,Tt,xt,It),Xt=pt(Tt,xt,It);var Qt={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},en=Object.assign({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},Qt),tn=Object.assign({years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},Qt),nn=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],rn=nn.slice(0).reverse();function on(e,t,n){void 0===n&&(n=!1);var i={values:n?t.values:Object.assign({},e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy};return new an(i)}function sn(e,t,n,i,r){var o=e[r][n],s=t[n]/o,a=!(Math.sign(s)===Math.sign(i[r]))&&0!==i[r]&&Math.abs(s)<=1?function(e){return e<0?Math.floor(e):Math.ceil(e)}(s):Math.trunc(s);i[r]+=a,t[n]-=a*o}var an=function(){function e(e){var t="longterm"===e.conversionAccuracy||!1;this.values=e.values,this.loc=e.loc||ft.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=t?tn:en,this.isLuxonDuration=!0}e.fromMillis=function(t,n){return e.fromObject(Object.assign({milliseconds:t},n))},e.fromObject=function(t){if(null==t||"object"!=typeof t)throw new S("Duration.fromObject: argument expected to be an object, got "+(null===t?"null":typeof t));return new e({values:ve(t,e.normalizeUnit,["locale","numberingSystem","conversionAccuracy","zone"]),loc:ft.fromObject(t),conversionAccuracy:t.conversionAccuracy})},e.fromISO=function(t,n){var i=function(e){return vt(e,[At,Nt])}(t)[0];if(i){var r=Object.assign(i,n);return e.fromObject(r)}return e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new S("need to specify a reason the Duration is invalid");var i=t instanceof je?t:new je(t,n);if(tt.throwOnInvalid)throw new g(i);return new e({invalid:i})},e.normalizeUnit=function(e){var t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new y(e);return t},e.isDuration=function(e){return e&&e.isLuxonDuration||!1};var t=e.prototype;return t.toFormat=function(e,t){void 0===t&&(t={});var n=Object.assign({},t,{floor:!1!==t.round&&!1!==t.floor});return this.isValid?_e.create(this.loc,n).formatDurationFromString(this,e):"Invalid Duration"},t.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{};var t=Object.assign({},this.values);return e.includeConfig&&(t.conversionAccuracy=this.conversionAccuracy,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},t.toISO=function(){if(!this.isValid)return null;var e="P";return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=oe(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e},t.toJSON=function(){return this.toISO()},t.toString=function(){return this.toISO()},t.valueOf=function(){return this.as("milliseconds")},t.plus=function(e){if(!this.isValid)return this;for(var t,n=un(e),i={},r=f(nn);!(t=r()).done;){var o=t.value;(ee(n.values,o)||ee(this.values,o))&&(i[o]=n.get(o)+this.get(o))}return on(this,{values:i},!0)},t.minus=function(e){if(!this.isValid)return this;var t=un(e);return this.plus(t.negate())},t.mapUnits=function(e){if(!this.isValid)return this;for(var t={},n=0,i=Object.keys(this.values);n<i.length;n++){var r=i[n];t[r]=pe(e(this.values[r],r))}return on(this,{values:t},!0)},t.get=function(t){return this[e.normalizeUnit(t)]},t.set=function(t){return this.isValid?on(this,{values:Object.assign(this.values,ve(t,e.normalizeUnit,[]))}):this},t.reconfigure=function(e){var t=void 0===e?{}:e,n=t.locale,i=t.numberingSystem,r=t.conversionAccuracy,o={loc:this.loc.clone({locale:n,numberingSystem:i})};return r&&(o.conversionAccuracy=r),on(this,o)},t.as=function(e){return this.isValid?this.shiftTo(e).get(e):NaN},t.normalize=function(){if(!this.isValid)return this;var e=this.toObject();return function(e,t){rn.reduce((function(n,i){return B(t[i])?n:(n&&sn(e,t,n,t,i),i)}),null)}(this.matrix,e),on(this,{values:e},!0)},t.shiftTo=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];if(!this.isValid)return this;if(0===n.length)return this;n=n.map((function(t){return e.normalizeUnit(t)}));for(var r,o,s={},a={},u=this.toObject(),c=f(nn);!(o=c()).done;){var l=o.value;if(n.indexOf(l)>=0){r=l;var d=0;for(var h in a)d+=this.matrix[h][l]*a[h],a[h]=0;G(u[l])&&(d+=u[l]);var p=Math.trunc(d);for(var v in s[l]=p,a[l]=d-p,u)nn.indexOf(v)>nn.indexOf(l)&&sn(this.matrix,u,v,s,l)}else G(u[l])&&(a[l]=u[l])}for(var g in a)0!==a[g]&&(s[r]+=g===r?a[g]:a[g]/this.matrix[r][g]);return on(this,{values:s},!0).normalize()},t.negate=function(){if(!this.isValid)return this;for(var e={},t=0,n=Object.keys(this.values);t<n.length;t++){var i=n[t];e[i]=-this.values[i]}return on(this,{values:e},!0)},t.equals=function(e){if(!this.isValid||!e.isValid)return!1;if(!this.loc.equals(e.loc))return!1;for(var t,n=f(nn);!(t=n()).done;){var i=t.value;if(this.values[i]!==e.values[i])return!1}return!0},r(e,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),e}();function un(e){if(G(e))return an.fromMillis(e);if(an.isDuration(e))return e;if("object"==typeof e)return an.fromObject(e);throw new S("Unknown duration argument "+e+" of type "+typeof e)}var cn="Invalid Interval";function ln(e,t){return e&&e.isValid?t&&t.isValid?t<e?dn.invalid("end before start","The end of an interval must be after its start, but you had start="+e.toISO()+" and end="+t.toISO()):null:dn.invalid("missing or invalid end"):dn.invalid("missing or invalid start")}var dn=function(){function e(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new S("need to specify a reason the Interval is invalid");var i=t instanceof je?t:new je(t,n);if(tt.throwOnInvalid)throw new v(i);return new e({invalid:i})},e.fromDateTimes=function(t,n){var i=ci(t),r=ci(n),o=ln(i,r);return null==o?new e({start:i,end:r}):o},e.after=function(t,n){var i=un(n),r=ci(t);return e.fromDateTimes(r,r.plus(i))},e.before=function(t,n){var i=un(n),r=ci(t);return e.fromDateTimes(r.minus(i),r)},e.fromISO=function(t,n){var i=(t||"").split("/",2),r=i[0],o=i[1];if(r&&o){var s,a,u,c;try{a=(s=ui.fromISO(r,n)).isValid}catch(o){a=!1}try{c=(u=ui.fromISO(o,n)).isValid}catch(o){c=!1}if(a&&c)return e.fromDateTimes(s,u);if(a){var l=an.fromISO(o,n);if(l.isValid)return e.after(s,l)}else if(c){var d=an.fromISO(r,n);if(d.isValid)return e.before(u,d)}}return e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.isInterval=function(e){return e&&e.isLuxonInterval||!1};var t=e.prototype;return t.length=function(e){return void 0===e&&(e="milliseconds"),this.isValid?this.toDuration.apply(this,[e]).get(e):NaN},t.count=function(e){if(void 0===e&&(e="milliseconds"),!this.isValid)return NaN;var t=this.start.startOf(e),n=this.end.startOf(e);return Math.floor(n.diff(t,e).get(e))+1},t.hasSame=function(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))},t.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},t.isAfter=function(e){return!!this.isValid&&this.s>e},t.isBefore=function(e){return!!this.isValid&&this.e<=e},t.contains=function(e){return!!this.isValid&&(this.s<=e&&this.e>e)},t.set=function(t){var n=void 0===t?{}:t,i=n.start,r=n.end;return this.isValid?e.fromDateTimes(i||this.s,r||this.e):this},t.splitAt=function(){var t=this;if(!this.isValid)return[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];for(var o=i.map(ci).filter((function(e){return t.contains(e)})).sort(),s=[],a=this.s,u=0;a<this.e;){var c=o[u]||this.e,l=+c>+this.e?this.e:c;s.push(e.fromDateTimes(a,l)),a=l,u+=1}return s},t.splitBy=function(t){var n=un(t);if(!this.isValid||!n.isValid||0===n.as("milliseconds"))return[];for(var i,r,o=this.s,s=[];o<this.e;)r=+(i=o.plus(n))>+this.e?this.e:i,s.push(e.fromDateTimes(o,r)),o=r;return s},t.divideEqually=function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]},t.overlaps=function(e){return this.e>e.s&&this.s<e.e},t.abutsStart=function(e){return!!this.isValid&&+this.e==+e.s},t.abutsEnd=function(e){return!!this.isValid&&+e.e==+this.s},t.engulfs=function(e){return!!this.isValid&&(this.s<=e.s&&this.e>=e.e)},t.equals=function(e){return!(!this.isValid||!e.isValid)&&(this.s.equals(e.s)&&this.e.equals(e.e))},t.intersection=function(t){if(!this.isValid)return this;var n=this.s>t.s?this.s:t.s,i=this.e<t.e?this.e:t.e;return n>i?null:e.fromDateTimes(n,i)},t.union=function(t){if(!this.isValid)return this;var n=this.s<t.s?this.s:t.s,i=this.e>t.e?this.e:t.e;return e.fromDateTimes(n,i)},e.merge=function(e){var t=e.sort((function(e,t){return e.s-t.s})).reduce((function(e,t){var n=e[0],i=e[1];return i?i.overlaps(t)||i.abutsStart(t)?[n,i.union(t)]:[n.concat([i]),t]:[n,t]}),[[],null]),n=t[0],i=t[1];return i&&n.push(i),n},e.xor=function(t){for(var n,i,r=null,o=0,s=[],a=t.map((function(e){return[{time:e.s,type:"s"},{time:e.e,type:"e"}]})),u=f((n=Array.prototype).concat.apply(n,a).sort((function(e,t){return e.time-t.time})));!(i=u()).done;){var c=i.value;1===(o+="s"===c.type?1:-1)?r=c.time:(r&&+r!=+c.time&&s.push(e.fromDateTimes(r,c.time)),r=null)}return e.merge(s)},t.difference=function(){for(var t=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.xor([this].concat(i)).map((function(e){return t.intersection(e)})).filter((function(e){return e&&!e.isEmpty()}))},t.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":cn},t.toISO=function(e){return this.isValid?this.s.toISO(e)+"/"+this.e.toISO(e):cn},t.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():cn},t.toISOTime=function(e){return this.isValid?this.s.toISOTime(e)+"/"+this.e.toISOTime(e):cn},t.toFormat=function(e,t){var n=(void 0===t?{}:t).separator,i=void 0===n?" – ":n;return this.isValid?""+this.s.toFormat(e)+i+this.e.toFormat(e):cn},t.toDuration=function(e,t){return this.isValid?this.e.diff(this.s,e,t):an.invalid(this.invalidReason)},t.mapEndpoints=function(t){return e.fromDateTimes(t(this.s),t(this.e))},r(e,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),e}(),fn=function(){function e(){}return e.hasDST=function(e){void 0===e&&(e=tt.defaultZone);var t=ui.local().setZone(e).set({month:12});return!e.universal&&t.offset!==t.set({month:6}).offset},e.isValidIANAZone=function(e){return Ze.isValidSpecifier(e)&&Ze.isValidZone(e)},e.normalizeZone=function(e){return We(e,tt.defaultZone)},e.months=function(e,t){void 0===e&&(e="long");var n=void 0===t?{}:t,i=n.locale,r=void 0===i?null:i,o=n.numberingSystem,s=void 0===o?null:o,a=n.outputCalendar,u=void 0===a?"gregory":a;return ft.create(r,s,u).months(e)},e.monthsFormat=function(e,t){void 0===e&&(e="long");var n=void 0===t?{}:t,i=n.locale,r=void 0===i?null:i,o=n.numberingSystem,s=void 0===o?null:o,a=n.outputCalendar,u=void 0===a?"gregory":a;return ft.create(r,s,u).months(e,!0)},e.weekdays=function(e,t){void 0===e&&(e="long");var n=void 0===t?{}:t,i=n.locale,r=void 0===i?null:i,o=n.numberingSystem,s=void 0===o?null:o;return ft.create(r,s,null).weekdays(e)},e.weekdaysFormat=function(e,t){void 0===e&&(e="long");var n=void 0===t?{}:t,i=n.locale,r=void 0===i?null:i,o=n.numberingSystem,s=void 0===o?null:o;return ft.create(r,s,null).weekdays(e,!0)},e.meridiems=function(e){var t=(void 0===e?{}:e).locale,n=void 0===t?null:t;return ft.create(n).meridiems()},e.eras=function(e,t){void 0===e&&(e="short");var n=(void 0===t?{}:t).locale,i=void 0===n?null:n;return ft.create(i,null,"gregory").eras(e)},e.features=function(){var e=!1,t=!1,n=!1,i=!1;if($()){e=!0,t=K(),i=Y();try{n="America/New_York"===new Intl.DateTimeFormat("en",{timeZone:"America/New_York"}).resolvedOptions().timeZone}catch(e){n=!1}}return{intl:e,intlTokens:t,zones:n,relative:i}},e}();function hn(e,t){var n=function(e){return e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()},i=n(t)-n(e);return Math.floor(an.fromMillis(i).as("days"))}function pn(e,t,n,i){var r=function(e,t,n){for(var i,r,o={},s=0,a=[["years",function(e,t){return t.year-e.year}],["months",function(e,t){return t.month-e.month+12*(t.year-e.year)}],["weeks",function(e,t){var n=hn(e,t);return(n-n%7)/7}],["days",hn]];s<a.length;s++){var u=a[s],c=u[0],l=u[1];if(n.indexOf(c)>=0){var d;i=c;var f,h=l(e,t);if((r=e.plus(((d={})[c]=h,d)))>t)e=e.plus(((f={})[c]=h-1,f)),h-=1;else e=r;o[c]=h}}return[e,o,r,i]}(e,t,n),o=r[0],s=r[1],a=r[2],u=r[3],c=t-o,l=n.filter((function(e){return["hours","minutes","seconds","milliseconds"].indexOf(e)>=0}));if(0===l.length){var d;if(a<t)a=o.plus(((d={})[u]=1,d));a!==o&&(s[u]=(s[u]||0)+c/(a-o))}var f,h=an.fromObject(Object.assign(s,i));return l.length>0?(f=an.fromMillis(c,i)).shiftTo.apply(f,l).plus(h):h}var vn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},gn={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},mn=vn.hanidec.replace(/[\[|\]]/g,"").split("");function yn(e,t){var n=e.numberingSystem;return void 0===t&&(t=""),new RegExp(""+vn[n||"latn"]+t)}function Sn(e,t){return void 0===t&&(t=function(e){return e}),{regex:e,deser:function(e){var n=e[0];return t(function(e){var t=parseInt(e,10);if(isNaN(t)){t="";for(var n=0;n<e.length;n++){var i=e.charCodeAt(n);if(-1!==e[n].search(vn.hanidec))t+=mn.indexOf(e[n]);else for(var r in gn){var o=gn[r],s=o[0],a=o[1];i>=s&&i<=a&&(t+=i-s)}}return parseInt(t,10)}return t}(n))}}}var wn="( |"+String.fromCharCode(160)+")",bn=new RegExp(wn,"g");function En(e){return e.replace(/\./g,"\\.?").replace(bn,wn)}function kn(e){return e.replace(/\./g,"").replace(bn," ").toLowerCase()}function On(e,t){return null===e?null:{regex:RegExp(e.map(En).join("|")),deser:function(n){var i=n[0];return e.findIndex((function(e){return kn(i)===kn(e)}))+t}}}function Ln(e,t){return{regex:e,deser:function(e){return he(e[1],e[2])},groups:t}}function Cn(e){return{regex:e,deser:function(e){return e[0]}}}var Tn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"}};var xn=null;function In(e,t){if(e.literal)return e;var n=_e.macroTokenToFormatOpts(e.val);if(!n)return e;var i=_e.create(t,n).formatDateTimeParts((xn||(xn=ui.fromMillis(1555555555555)),xn)).map((function(e){return function(e,t,n){var i=e.type,r=e.value;if("literal"===i)return{literal:!0,val:r};var o=n[i],s=Tn[i];return"object"==typeof s&&(s=s[o]),s?{literal:!1,val:s}:void 0}(e,0,n)}));return i.includes(void 0)?e:i}function An(e,t,n){var i=function(e,t){var n;return(n=Array.prototype).concat.apply(n,e.map((function(e){return In(e,t)})))}(_e.parseFormat(n),e),r=i.map((function(t){return n=t,r=yn(i=e),o=yn(i,"{2}"),s=yn(i,"{3}"),a=yn(i,"{4}"),u=yn(i,"{6}"),c=yn(i,"{1,2}"),l=yn(i,"{1,3}"),d=yn(i,"{1,6}"),f=yn(i,"{1,9}"),h=yn(i,"{2,4}"),p=yn(i,"{4,6}"),v=function(e){return{regex:RegExp((t=e.val,t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:function(e){return e[0]},literal:!0};var t},(g=function(e){if(n.literal)return v(e);switch(e.val){case"G":return On(i.eras("short",!1),0);case"GG":return On(i.eras("long",!1),0);case"y":return Sn(d);case"yy":return Sn(h,de);case"yyyy":return Sn(a);case"yyyyy":return Sn(p);case"yyyyyy":return Sn(u);case"M":return Sn(c);case"MM":return Sn(o);case"MMM":return On(i.months("short",!0,!1),1);case"MMMM":return On(i.months("long",!0,!1),1);case"L":return Sn(c);case"LL":return Sn(o);case"LLL":return On(i.months("short",!1,!1),1);case"LLLL":return On(i.months("long",!1,!1),1);case"d":return Sn(c);case"dd":return Sn(o);case"o":return Sn(l);case"ooo":return Sn(s);case"HH":return Sn(o);case"H":return Sn(c);case"hh":return Sn(o);case"h":return Sn(c);case"mm":return Sn(o);case"m":case"q":return Sn(c);case"qq":return Sn(o);case"s":return Sn(c);case"ss":return Sn(o);case"S":return Sn(l);case"SSS":return Sn(s);case"u":return Cn(f);case"a":return On(i.meridiems(),0);case"kkkk":return Sn(a);case"kk":return Sn(h,de);case"W":return Sn(c);case"WW":return Sn(o);case"E":case"c":return Sn(r);case"EEE":return On(i.weekdays("short",!1,!1),1);case"EEEE":return On(i.weekdays("long",!1,!1),1);case"ccc":return On(i.weekdays("short",!0,!1),1);case"cccc":return On(i.weekdays("long",!0,!1),1);case"Z":case"ZZ":return Ln(new RegExp("([+-]"+c.source+")(?::("+o.source+"))?"),2);case"ZZZ":return Ln(new RegExp("([+-]"+c.source+")("+o.source+")?"),2);case"z":return Cn(/[a-z_+-/]{1,256}?/i);default:return v(e)}}(n)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}).token=n,g;var n,i,r,o,s,a,u,c,l,d,f,h,p,v,g})),o=r.find((function(e){return e.invalidReason}));if(o)return{input:t,tokens:i,invalidReason:o.invalidReason};var s=function(e){return["^"+e.map((function(e){return e.regex})).reduce((function(e,t){return e+"("+t.source+")"}),"")+"$",e]}(r),a=s[0],u=s[1],c=RegExp(a,"i"),l=function(e,t,n){var i=e.match(t);if(i){var r={},o=1;for(var s in n)if(ee(n,s)){var a=n[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(r[a.token.val[0]]=a.deser(i.slice(o,o+u))),o+=u}return[i,r]}return[i,{}]}(t,c,u),d=l[0],f=l[1],h=f?function(e){var t;return t=B(e.Z)?B(e.z)?null:Ze.create(e.z):new Be(e.Z),B(e.q)||(e.M=3*(e.q-1)+1),B(e.h)||(e.h<12&&1===e.a?e.h+=12:12===e.h&&0===e.a&&(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),B(e.u)||(e.S=re(e.u)),[Object.keys(e).reduce((function(t,n){var i=function(e){switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}}(n);return i&&(t[i]=e[n]),t}),{}),t]}(f):[null,null],p=h[0],v=h[1];if(ee(f,"a")&&ee(f,"H"))throw new m("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:i,regex:c,rawMatches:d,matches:f,result:p,zone:v}}var Nn=[0,31,59,90,120,151,181,212,243,273,304,334],Rn=[0,31,60,91,121,152,182,213,244,274,305,335];function Dn(e,t){return new je("unit out of range","you specified "+t+" (of type "+typeof t+") as a "+e+", which is invalid")}function Mn(e,t,n){var i=new Date(Date.UTC(e,t-1,n)).getUTCDay();return 0===i?7:i}function _n(e,t,n){return n+(se(e)?Rn:Nn)[t-1]}function jn(e,t){var n=se(e)?Rn:Nn,i=n.findIndex((function(e){return e<t}));return{month:i+1,day:t-n[i]}}function Vn(e){var t,n=e.year,i=e.month,r=e.day,o=_n(n,i,r),s=Mn(n,i,r),a=Math.floor((o-s+10)/7);return a<1?a=le(t=n-1):a>le(n)?(t=n+1,a=1):t=n,Object.assign({weekYear:t,weekNumber:a,weekday:s},me(e))}function Pn(e){var t,n=e.weekYear,i=e.weekNumber,r=e.weekday,o=Mn(n,1,4),s=ae(n),a=7*i+r-o-3;a<1?a+=ae(t=n-1):a>s?(t=n+1,a-=ae(n)):t=n;var u=jn(t,a),c=u.month,l=u.day;return Object.assign({year:t,month:c,day:l},me(e))}function qn(e){var t=e.year,n=_n(t,e.month,e.day);return Object.assign({year:t,ordinal:n},me(e))}function Un(e){var t=e.year,n=jn(t,e.ordinal),i=n.month,r=n.day;return Object.assign({year:t,month:i,day:r},me(e))}function Fn(e){var t=W(e.year),n=te(e.month,1,12),i=te(e.day,1,ue(e.year,e.month));return t?n?!i&&Dn("day",e.day):Dn("month",e.month):Dn("year",e.year)}function Hn(e){var t=e.hour,n=e.minute,i=e.second,r=e.millisecond,o=te(t,0,23)||24===t&&0===n&&0===i&&0===r,s=te(n,0,59),a=te(i,0,59),u=te(r,0,999);return o?s?a?!u&&Dn("millisecond",r):Dn("second",i):Dn("minute",n):Dn("hour",t)}function zn(e){return new je("unsupported zone",'the zone "'+e.name+'" is not supported')}function Zn(e){return null===e.weekData&&(e.weekData=Vn(e.c)),e.weekData}function Jn(e,t){var n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ui(Object.assign({},n,t,{old:n}))}function Bn(e,t,n){var i=e-60*t*1e3,r=n.offset(i);if(t===r)return[i,t];i-=60*(r-t)*1e3;var o=n.offset(i);return r===o?[i,r]:[e-60*Math.min(r,o)*1e3,Math.max(r,o)]}function Gn(e,t){var n=new Date(e+=60*t*1e3);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Wn(e,t,n){return Bn(ce(e),t,n)}function $n(e,t){var n=e.o,i=e.c.year+Math.trunc(t.years),r=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),o=Object.assign({},e.c,{year:i,month:r,day:Math.min(e.c.day,ue(i,r))+Math.trunc(t.days)+7*Math.trunc(t.weeks)}),s=an.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Bn(ce(o),n,e.zone),u=a[0],c=a[1];return 0!==s&&(u+=s,c=e.zone.offset(u)),{ts:u,o:c}}function Kn(e,t,n,i,r){var o=n.setZone,s=n.zone;if(e&&0!==Object.keys(e).length){var a=t||s,u=ui.fromObject(Object.assign(e,n,{zone:a,setZone:void 0}));return o?u:u.setZone(s)}return ui.invalid(new je("unparsable",'the input "'+r+"\" can't be parsed as "+i))}function Yn(e,t,n){return void 0===n&&(n=!0),e.isValid?_e.create(ft.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Xn(e,t){var n=t.suppressSeconds,i=void 0!==n&&n,r=t.suppressMilliseconds,o=void 0!==r&&r,s=t.includeOffset,a=t.includeZone,u=void 0!==a&&a,c=t.spaceZone,l=void 0!==c&&c,d=t.format,f=void 0===d?"extended":d,h="basic"===f?"HHmm":"HH:mm";return i&&0===e.second&&0===e.millisecond||(h+="basic"===f?"ss":":ss",o&&0===e.millisecond||(h+=".SSS")),(u||s)&&l&&(h+=" "),u?h+="z":s&&(h+="basic"===f?"ZZZ":"ZZ"),Yn(e,h)}var Qn={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},ei={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ti={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ni=["year","month","day","hour","minute","second","millisecond"],ii=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],ri=["year","ordinal","hour","minute","second","millisecond"];function oi(e){var t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new y(e);return t}function si(e,t){for(var n,i=f(ni);!(n=i()).done;){var r=n.value;B(e[r])&&(e[r]=Qn[r])}var o=Fn(e)||Hn(e);if(o)return ui.invalid(o);var s=tt.now(),a=Wn(e,t.offset(s),t),u=a[0],c=a[1];return new ui({ts:u,zone:t,o:c})}function ai(e,t,n){var i=!!B(n.round)||n.round,r=function(e,r){return e=oe(e,i||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(e,r)},o=function(i){return n.calendary?t.hasSame(e,i)?0:t.startOf(i).diff(e.startOf(i),i).get(i):t.diff(e,i).get(i)};if(n.unit)return r(o(n.unit),n.unit);for(var s,a=f(n.units);!(s=a()).done;){var u=s.value,c=o(u);if(Math.abs(c)>=1)return r(c,u)}return r(0,n.units[n.units.length-1])}var ui=function(){function e(e){var t=e.zone||tt.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new je("invalid input"):null)||(t.isValid?null:zn(t));this.ts=B(e.ts)?tt.now():e.ts;var i=null,r=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t)){var o=[e.old.c,e.old.o];i=o[0],r=o[1]}else{var s=t.offset(this.ts);i=Gn(this.ts,s),i=(n=Number.isNaN(i.year)?new je("invalid input"):null)?null:i,r=n?null:s}this._zone=t,this.loc=e.loc||ft.create(),this.invalid=n,this.weekData=null,this.c=i,this.o=r,this.isLuxonDateTime=!0}e.local=function(t,n,i,r,o,s,a){return B(t)?new e({ts:tt.now()}):si({year:t,month:n,day:i,hour:r,minute:o,second:s,millisecond:a},tt.defaultZone)},e.utc=function(t,n,i,r,o,s,a){return B(t)?new e({ts:tt.now(),zone:Be.utcInstance}):si({year:t,month:n,day:i,hour:r,minute:o,second:s,millisecond:a},Be.utcInstance)},e.fromJSDate=function(t,n){void 0===n&&(n={});var i,r=(i=t,"[object Date]"===Object.prototype.toString.call(i)?t.valueOf():NaN);if(Number.isNaN(r))return e.invalid("invalid input");var o=We(n.zone,tt.defaultZone);return o.isValid?new e({ts:r,zone:o,loc:ft.fromObject(n)}):e.invalid(zn(o))},e.fromMillis=function(t,n){if(void 0===n&&(n={}),G(t))return t<-864e13||t>864e13?e.invalid("Timestamp out of range"):new e({ts:t,zone:We(n.zone,tt.defaultZone),loc:ft.fromObject(n)});throw new S("fromMillis requires a numerical input, but received a "+typeof t+" with value "+t)},e.fromSeconds=function(t,n){if(void 0===n&&(n={}),G(t))return new e({ts:1e3*t,zone:We(n.zone,tt.defaultZone),loc:ft.fromObject(n)});throw new S("fromSeconds requires a numerical input")},e.fromObject=function(t){var n=We(t.zone,tt.defaultZone);if(!n.isValid)return e.invalid(zn(n));var i=tt.now(),r=n.offset(i),o=ve(t,oi,["zone","locale","outputCalendar","numberingSystem"]),s=!B(o.ordinal),a=!B(o.year),u=!B(o.month)||!B(o.day),c=a||u,l=o.weekYear||o.weekNumber,d=ft.fromObject(t);if((c||s)&&l)throw new m("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new m("Can't mix ordinal dates with month/day");var h,p,v=l||o.weekday&&!c,g=Gn(i,r);v?(h=ii,p=ei,g=Vn(g)):s?(h=ri,p=ti,g=qn(g)):(h=ni,p=Qn);for(var y,S=!1,w=f(h);!(y=w()).done;){var b=y.value;B(o[b])?o[b]=S?p[b]:g[b]:S=!0}var E=(v?function(e){var t=W(e.weekYear),n=te(e.weekNumber,1,le(e.weekYear)),i=te(e.weekday,1,7);return t?n?!i&&Dn("weekday",e.weekday):Dn("week",e.week):Dn("weekYear",e.weekYear)}(o):s?function(e){var t=W(e.year),n=te(e.ordinal,1,ae(e.year));return t?!n&&Dn("ordinal",e.ordinal):Dn("year",e.year)}(o):Fn(o))||Hn(o);if(E)return e.invalid(E);var k=Wn(v?Pn(o):s?Un(o):o,r,n),O=new e({ts:k[0],zone:n,o:k[1],loc:d});return o.weekday&&c&&t.weekday!==O.weekday?e.invalid("mismatched weekday","you can't specify both a weekday of "+o.weekday+" and a date of "+O.toISO()):O},e.fromISO=function(e,t){void 0===t&&(t={});var n=function(e){return vt(e,[Ft,Jt],[Ht,Bt],[zt,Gt],[Zt,Wt])}(e);return Kn(n[0],n[1],t,"ISO 8601",e)},e.fromRFC2822=function(e,t){void 0===t&&(t={});var n=function(e){return vt(function(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(e),[Mt,_t])}(e);return Kn(n[0],n[1],t,"RFC 2822",e)},e.fromHTTP=function(e,t){void 0===t&&(t={});var n=function(e){return vt(e,[jt,qt],[Vt,qt],[Pt,Ut])}(e);return Kn(n[0],n[1],t,"HTTP",t)},e.fromFormat=function(t,n,i){if(void 0===i&&(i={}),B(t)||B(n))throw new S("fromFormat requires an input string and a format");var r=i,o=r.locale,s=void 0===o?null:o,a=r.numberingSystem,u=void 0===a?null:a,c=function(e,t,n){var i=An(e,t,n);return[i.result,i.zone,i.invalidReason]}(ft.fromOpts({locale:s,numberingSystem:u,defaultToEN:!0}),t,n),l=c[0],d=c[1],f=c[2];return f?e.invalid(f):Kn(l,d,i,"format "+n,t)},e.fromString=function(t,n,i){return void 0===i&&(i={}),e.fromFormat(t,n,i)},e.fromSQL=function(e,t){void 0===t&&(t={});var n=function(e){return vt(e,[$t,Yt],[Kt,Xt])}(e);return Kn(n[0],n[1],t,"SQL",e)},e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new S("need to specify a reason the DateTime is invalid");var i=t instanceof je?t:new je(t,n);if(tt.throwOnInvalid)throw new p(i);return new e({invalid:i})},e.isDateTime=function(e){return e&&e.isLuxonDateTime||!1};var t=e.prototype;return t.get=function(e){return this[e]},t.resolvedLocaleOpts=function(e){void 0===e&&(e={});var t=_e.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t.locale,numberingSystem:t.numberingSystem,outputCalendar:t.calendar}},t.toUTC=function(e,t){return void 0===e&&(e=0),void 0===t&&(t={}),this.setZone(Be.instance(e),t)},t.toLocal=function(){return this.setZone(tt.defaultZone)},t.setZone=function(t,n){var i=void 0===n?{}:n,r=i.keepLocalTime,o=void 0!==r&&r,s=i.keepCalendarTime,a=void 0!==s&&s;if((t=We(t,tt.defaultZone)).equals(this.zone))return this;if(t.isValid){var u=this.ts;if(o||a){var c=t.offset(this.ts);u=Wn(this.toObject(),c,t)[0]}return Jn(this,{ts:u,zone:t})}return e.invalid(zn(t))},t.reconfigure=function(e){var t=void 0===e?{}:e,n=t.locale,i=t.numberingSystem,r=t.outputCalendar;return Jn(this,{loc:this.loc.clone({locale:n,numberingSystem:i,outputCalendar:r})})},t.setLocale=function(e){return this.reconfigure({locale:e})},t.set=function(e){if(!this.isValid)return this;var t,n=ve(e,oi,[]);!B(n.weekYear)||!B(n.weekNumber)||!B(n.weekday)?t=Pn(Object.assign(Vn(this.c),n)):B(n.ordinal)?(t=Object.assign(this.toObject(),n),B(n.day)&&(t.day=Math.min(ue(t.year,t.month),t.day))):t=Un(Object.assign(qn(this.c),n));var i=Wn(t,this.o,this.zone);return Jn(this,{ts:i[0],o:i[1]})},t.plus=function(e){return this.isValid?Jn(this,$n(this,un(e))):this},t.minus=function(e){return this.isValid?Jn(this,$n(this,un(e).negate())):this},t.startOf=function(e){if(!this.isValid)return this;var t={},n=an.normalizeUnit(e);switch(n){case"years":t.month=1;case"quarters":case"months":t.day=1;case"weeks":case"days":t.hour=0;case"hours":t.minute=0;case"minutes":t.second=0;case"seconds":t.millisecond=0}if("weeks"===n&&(t.weekday=1),"quarters"===n){var i=Math.ceil(this.month/3);t.month=3*(i-1)+1}return this.set(t)},t.endOf=function(e){var t;return this.isValid?this.plus((t={},t[e]=1,t)).startOf(e).minus(1):this},t.toFormat=function(e,t){return void 0===t&&(t={}),this.isValid?_e.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):"Invalid DateTime"},t.toLocaleString=function(e){return void 0===e&&(e=O),this.isValid?_e.create(this.loc.clone(e),e).formatDateTime(this):"Invalid DateTime"},t.toLocaleParts=function(e){return void 0===e&&(e={}),this.isValid?_e.create(this.loc.clone(e),e).formatDateTimeParts(this):[]},t.toISO=function(e){return void 0===e&&(e={}),this.isValid?this.toISODate(e)+"T"+this.toISOTime(e):null},t.toISODate=function(e){var t=(void 0===e?{}:e).format,n="basic"===(void 0===t?"extended":t)?"yyyyMMdd":"yyyy-MM-dd";return this.year>9999&&(n="+"+n),Yn(this,n)},t.toISOWeekDate=function(){return Yn(this,"kkkk-'W'WW-c")},t.toISOTime=function(e){var t=void 0===e?{}:e,n=t.suppressMilliseconds,i=void 0!==n&&n,r=t.suppressSeconds,o=void 0!==r&&r,s=t.includeOffset,a=void 0===s||s,u=t.format;return Xn(this,{suppressSeconds:o,suppressMilliseconds:i,includeOffset:a,format:void 0===u?"extended":u})},t.toRFC2822=function(){return Yn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)},t.toHTTP=function(){return Yn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},t.toSQLDate=function(){return Yn(this,"yyyy-MM-dd")},t.toSQLTime=function(e){var t=void 0===e?{}:e,n=t.includeOffset,i=void 0===n||n,r=t.includeZone;return Xn(this,{includeOffset:i,includeZone:void 0!==r&&r,spaceZone:!0})},t.toSQL=function(e){return void 0===e&&(e={}),this.isValid?this.toSQLDate()+" "+this.toSQLTime(e):null},t.toString=function(){return this.isValid?this.toISO():"Invalid DateTime"},t.valueOf=function(){return this.toMillis()},t.toMillis=function(){return this.isValid?this.ts:NaN},t.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},t.toJSON=function(){return this.toISO()},t.toBSON=function(){return this.toJSDate()},t.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{};var t=Object.assign({},this.c);return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},t.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},t.diff=function(e,t,n){if(void 0===t&&(t="milliseconds"),void 0===n&&(n={}),!this.isValid||!e.isValid)return an.invalid(this.invalid||e.invalid,"created by diffing an invalid DateTime");var i,r=Object.assign({locale:this.locale,numberingSystem:this.numberingSystem},n),o=(i=t,Array.isArray(i)?i:[i]).map(an.normalizeUnit),s=e.valueOf()>this.valueOf(),a=pn(s?this:e,s?e:this,o,r);return s?a.negate():a},t.diffNow=function(t,n){return void 0===t&&(t="milliseconds"),void 0===n&&(n={}),this.diff(e.local(),t,n)},t.until=function(e){return this.isValid?dn.fromDateTimes(this,e):this},t.hasSame=function(e,t){if(!this.isValid)return!1;if("millisecond"===t)return this.valueOf()===e.valueOf();var n=e.valueOf();return this.startOf(t)<=n&&n<=this.endOf(t)},t.equals=function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)},t.toRelative=function(t){if(void 0===t&&(t={}),!this.isValid)return null;var n=t.base||e.fromObject({zone:this.zone}),i=t.padding?this<n?-t.padding:t.padding:0;return ai(n,this.plus(i),Object.assign(t,{numeric:"always",units:["years","months","days","hours","minutes","seconds"]}))},t.toRelativeCalendar=function(t){return void 0===t&&(t={}),this.isValid?ai(t.base||e.fromObject({zone:this.zone}),this,Object.assign(t,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},e.min=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];if(!n.every(e.isDateTime))throw new S("min requires all arguments be DateTimes");return X(n,(function(e){return e.valueOf()}),Math.min)},e.max=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];if(!n.every(e.isDateTime))throw new S("max requires all arguments be DateTimes");return X(n,(function(e){return e.valueOf()}),Math.max)},e.fromFormatExplain=function(e,t,n){void 0===n&&(n={});var i=n,r=i.locale,o=void 0===r?null:r,s=i.numberingSystem,a=void 0===s?null:s;return An(ft.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0}),e,t)},e.fromStringExplain=function(t,n,i){return void 0===i&&(i={}),e.fromFormatExplain(t,n,i)},r(e,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?Zn(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?Zn(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?Zn(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?qn(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?fn.months("short",{locale:this.locale})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?fn.months("long",{locale:this.locale})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?fn.weekdays("short",{locale:this.locale})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?fn.weekdays("long",{locale:this.locale})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.universal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return se(this.year)}},{key:"daysInMonth",get:function(){return ue(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?ae(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?le(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return O}},{key:"DATE_MED",get:function(){return L}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return C}},{key:"DATE_FULL",get:function(){return T}},{key:"DATE_HUGE",get:function(){return x}},{key:"TIME_SIMPLE",get:function(){return I}},{key:"TIME_WITH_SECONDS",get:function(){return A}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return N}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return R}},{key:"TIME_24_SIMPLE",get:function(){return D}},{key:"TIME_24_WITH_SECONDS",get:function(){return M}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return _}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return j}},{key:"DATETIME_SHORT",get:function(){return V}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return P}},{key:"DATETIME_MED",get:function(){return q}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return U}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return F}},{key:"DATETIME_FULL",get:function(){return H}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return z}},{key:"DATETIME_HUGE",get:function(){return Z}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return J}}]),e}();function ci(e){if(ui.isDateTime(e))return e;if(e&&e.valueOf&&G(e.valueOf()))return ui.fromJSDate(e);if(e&&"object"==typeof e)return ui.fromObject(e);throw new S("Unknown datetime argument: "+e+", of type "+typeof e)}t.DateTime=ui,t.Duration=an,t.FixedOffsetZone=Be,t.IANAZone=Ze,t.Info=fn,t.Interval=dn,t.InvalidZone=Ge,t.LocalZone=qe,t.Settings=tt,t.Zone=Ve},function(e,t,n){"use strict";var i=n(40);e.exports=function(e){if(!i(e))throw new TypeError(e+" is not an Object");return e}},function(e,t,n){"use strict";var i=n(6),r={function:!0,object:!0};e.exports=function(e){return i(e)&&r[typeof e]||!1}},function(e,t,n){e.exports=n(42)},function(e,t,n){"use strict";var i=n(1),r=n(10),o=n(43),s=n(16);function a(e){var t=new o(e),n=r(o.prototype.request,t);return i.extend(n,o.prototype,t),i.extend(n,t),n}var u=a(n(13));u.Axios=o,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=n(17),u.CancelToken=n(57),u.isCancel=n(12),u.all=function(e){return Promise.all(e)},u.spread=n(58),e.exports=u,e.exports.default=u},function(e,t,n){"use strict";var i=n(1),r=n(11),o=n(44),s=n(45),a=n(16);function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=a(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}})),i.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=u},function(e,t,n){"use strict";var i=n(1);function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){i.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},function(e,t,n){"use strict";var i=n(1),r=n(46),o=n(12),s=n(13);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return a(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(a(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var i=n(1);e.exports=function(e,t,n){return i.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var u,c=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&h())}function h(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";var i=n(1);e.exports=function(e,t){i.forEach(e,(function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])}))}},function(e,t,n){"use strict";var i=n(15);e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(i("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,i,r){return e.config=t,n&&(e.code=n),e.request=i,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var i=n(52),r=n(53);e.exports=function(e,t){return e&&!i(t)?r(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var i=n(1),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(i.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=i.trim(e.substr(0,o)).toLowerCase(),n=i.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},function(e,t,n){"use strict";var i=n(1);e.exports=i.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var i=e;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=i.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var i=n(1);e.exports=i.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),i.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.isString(r)&&a.push("path="+r),i.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var i=n(17);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new i(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var i=n(5),r=n(19);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(e){return JSON.parse(e)},stringify:JSON.stringify,parsePayload:function(e,t,n){return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n||"")},request:r.a,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};o(this,e),this.services=t,this.options=n,this.allOptions=i,this.type="backend",this.init(t,n,i)}var t,n,r;return t=e,(n=[{key:"init",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=Object(i.a)(n,this.options||{},a()),this.allOptions=r,this.options.reloadInterval&&setInterval((function(){return t.reload()}),this.options.reloadInterval)}},{key:"readMulti",value:function(e,t,n){var i=this.options.loadPath;"function"==typeof this.options.loadPath&&(i=this.options.loadPath(e,t));var r=this.services.interpolator.interpolate(i,{lng:e.join("+"),ns:t.join("+")});this.loadUrl(r,n,e,t)}},{key:"read",value:function(e,t,n){var i=this.options.loadPath;"function"==typeof this.options.loadPath&&(i=this.options.loadPath([e],[t]));var r=this.services.interpolator.interpolate(i,{lng:e,ns:t});this.loadUrl(r,n,e,t)}},{key:"loadUrl",value:function(e,t,n,i){var r=this;this.options.request(this.options,e,void 0,(function(o,s){if(s&&(s.status>=500&&s.status<600||!s.status))return t("failed loading "+e,!0);if(s&&s.status>=400&&s.status<500)return t("failed loading "+e,!1);if(!s&&o&&o.message&&o.message.indexOf("Failed to fetch")>-1)return t("failed loading "+e,!0);if(o)return t(o,!1);var a,u;try{a="string"==typeof s.data?r.options.parse(s.data,n,i):s.data}catch(t){u="failed parsing "+e+" to json"}if(u)return t(u,!1);t(null,a)}))}},{key:"create",value:function(e,t,n,i){var r=this;if(this.options.addPath){"string"==typeof e&&(e=[e]);var o=this.options.parsePayload(t,n,i);e.forEach((function(e){var n=r.services.interpolator.interpolate(r.options.addPath,{lng:e,ns:t});r.options.request(r.options,n,o,(function(e,t){}))}))}}},{key:"reload",value:function(){var e=this,t=this.services,n=t.backendConnector,i=t.languageUtils,r=t.logger,o=n.language;if(!o||"cimode"!==o.toLowerCase()){var s=[],a=function(e){i.toResolveHierarchy(e).forEach((function(e){s.indexOf(e)<0&&s.push(e)}))};a(o),this.allOptions.preload&&this.allOptions.preload.forEach((function(e){return a(e)})),s.forEach((function(t){e.allOptions.ns.forEach((function(e){n.read(t,e,"read",null,null,(function(i,o){i&&r.warn("loading namespace ".concat(e," for language ").concat(t," failed"),i),!i&&o&&r.log("loaded namespace ".concat(e," for language ").concat(t),o),n.loaded("".concat(t,"|").concat(e),i,o)}))}))}))}}}])&&s(t.prototype,n),r&&s(t,r),e}();u.type="backend",t.default=u},function(e,t,n){"use strict";var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("unable to locate global object")}();e.exports=t=i.fetch,i.fetch&&(t.default=i.fetch.bind(i)),t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response},function(e,t,n){"use strict";n.r(t);var i=n(2),r=n(3),o=[],s=o.forEach,a=o.slice;function u(e){return s.call(a.call(arguments,1),(function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])})),e}var c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,l=function(e,t,n){var i=n||{};i.path=i.path||"/";var r=e+"="+encodeURIComponent(t);if(i.maxAge>0){var o=i.maxAge-0;if(isNaN(o))throw new Error("maxAge should be a Number");r+="; Max-Age="+Math.floor(o)}if(i.domain){if(!c.test(i.domain))throw new TypeError("option domain is invalid");r+="; Domain="+i.domain}if(i.path){if(!c.test(i.path))throw new TypeError("option path is invalid");r+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");r+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r},d=function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+60*n*1e3)),i&&(r.domain=i),document.cookie=l(e,encodeURIComponent(t),r)},f=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},h={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!=typeof document){var n=f(e.lookupCookie);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!=typeof document&&d(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},p={name:"querystring",lookup:function(e){var t;if("undefined"!=typeof window)for(var n=window.location.search.substring(1).split("&"),i=0;i<n.length;i++){var r=n[i].indexOf("=");if(r>0)n[i].substring(0,r)===e.lookupQuerystring&&(t=n[i].substring(r+1))}return t}},v=null,g=function(){if(null!==v)return v;try{v="undefined"!==window&&null!==window.localStorage;window.localStorage.setItem("i18next.translate.boo","foo"),window.localStorage.removeItem("i18next.translate.boo")}catch(e){v=!1}return v},m={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&g()){var n=window.localStorage.getItem(e.lookupLocalStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&g()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},y=null,S=function(){if(null!==y)return y;try{y="undefined"!==window&&null!==window.sessionStorage;window.sessionStorage.setItem("i18next.translate.boo","foo"),window.sessionStorage.removeItem("i18next.translate.boo")}catch(e){y=!1}return y},w={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&S()){var n=window.sessionStorage.getItem(e.lookupSessionStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&S()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},b={name:"navigator",lookup:function(e){var t=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)t.push(navigator.languages[n]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},E={name:"htmlTag",lookup:function(e){var t,n=e.htmlTag||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},k={name:"path",lookup:function(e){var t;if("undefined"!=typeof window){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array)if("number"==typeof e.lookupFromPathIndex){if("string"!=typeof n[e.lookupFromPathIndex])return;t=n[e.lookupFromPathIndex].replace("/","")}else t=n[0].replace("/","")}return t}},O={name:"subdomain",lookup:function(e){var t;if("undefined"!=typeof window){var n=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);n instanceof Array&&(t="number"==typeof e.lookupFromSubdomainIndex?n[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):n[0].replace("http://","").replace("https://","").replace(".",""))}return t}};var L=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(i.a)(this,e),this.type="languageDetector",this.detectors={},this.init(t,n)}return Object(r.a)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=u(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(h),this.addDetector(p),this.addDetector(m),this.addDetector(w),this.addDetector(b),this.addDetector(E),this.addDetector(k),this.addDetector(O)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var n=[];return e.forEach((function(e){if(t.detectors[e]){var i=t.detectors[e].lookup(t.options);i&&"string"==typeof i&&(i=[i]),i&&(n=n.concat(i))}})),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var n=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach((function(t){n.detectors[t]&&n.detectors[t].cacheUserLanguage(e,n.options)})))}}]),e}();L.type="languageDetector",t.default=L},function(e,t,n){"use strict";n.r(t),n.d(t,"Desktop",(function(){return se}));var i=n(0);const r=Object(i.createLogger)("agentx-js-api"),o=(e,t)=>({info:(...n)=>e.info(t,...n),warn:(...n)=>e.warn(t,...n),error:(...n)=>e.error(t,...n)});class s{constructor(e){this.logger=e.logger}check(e){return e?!!e.isInited||(this.logger.error("SERVICE still not initialized... Await it's init(...) first."),!1):(this.logger.error("SERVICE is not defined..."),!1)}}const a=e=>new s(e);var u=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};const c={rps:120,tag:"jsapi"},l={rps:0,tag:"jsapi"},d={tag:"jsapi"},f=e=>e.actionsChannels.createSource("fireGeneralSilentNotification/Req",c),h=e=>e.actionsChannels.createSource("fireGeneralAutoDismissNotification/Req",l),p=e=>e.actionsChannels.createDestination("fireGeneralAutoDismissNotification/Res",l),v=e=>e.actionsChannels.createSource("fireGeneralAcknowledgeNotification/Req",l),g=e=>e.actionsChannels.createDestination("fireGeneralAcknowledgeNotification/Res",l),m=e=>e.actionsChannels.createSource("addCustomTask",c),y=e=>e.actionsChannels.createSource("getToken/Req",l),S=e=>e.actionsChannels.createDestination("getToken/Res",d),w=e=>e.actionsChannels.createSource("getTaskMap/Req",l),b=e=>e.actionsChannels.createDestination("getTaskMap/Res",d),E=e=>e.actionsChannels.createSource("getMediaTypeQueue/Req",l),k=e=>e.actionsChannels.createDestination("getMediaTypeQueue/Res",d),O=e=>e.actionsChannels.createSource("getIdleCodes/Req",l),L=e=>e.actionsChannels.createDestination("getIdleCodes/Res",d),C=e=>e.actionsChannels.createSource("getWrapUpCodes/Req",l),T=e=>e.actionsChannels.createDestination("getWrapUpCodes/Res",d);class x{constructor(e){this.lastReqTs=Date.now(),this.lastReqN=0,this.logger=e.logger,this.serviceChecker=e.serviceChecker}checkService(){return this.serviceChecker.check(this.SERVICE)}getNextReqId(){const e=Date.now();return this.lastReqTs!==e?(this.lastReqTs=e,this.lastReqN=0):this.lastReqN++,`${this.lastReqTs}_${this.lastReqN}`}init(e){e&&(this.SERVICE=e),this.checkService()&&(this.sourceActionsChannels={fireGeneralSilentNotification:f(this.SERVICE),fireGeneralAutoDismissNotification:h(this.SERVICE),fireGeneralAcknowledgeNotification:v(this.SERVICE),addCustomTask:m(this.SERVICE),getToken:y(this.SERVICE),getTaskMap:w(this.SERVICE),getMediaTypeQueue:E(this.SERVICE),getIdleCodes:O(this.SERVICE),getWrapUpCodes:C(this.SERVICE)},this.destinationActionsChannels={fireGeneralAutoDismissNotification:p(this.SERVICE),fireGeneralAcknowledgeNotification:g(this.SERVICE),getToken:S(this.SERVICE),getTaskMap:b(this.SERVICE),getMediaTypeQueue:k(this.SERVICE),getIdleCodes:L(this.SERVICE),getWrapUpCodes:T(this.SERVICE)},this.logger.info("Inited"))}cleanup(){this.SERVICE=void 0,this.logger.info("Cleaned")}fireGeneralSilentNotification(...e){this.checkService()&&this.sourceActionsChannels.fireGeneralSilentNotification.send(...e)}fireGeneralAutoDismissNotification(...e){return u(this,void 0,void 0,(function*(){if(this.checkService())return yield new Promise(t=>{const n=this.getNextReqId(),r=({args:[e,o,s,a]})=>{a===n&&(s!==i.Notifications.ItemMeta.Mode.AutoDismiss&&s!==i.Notifications.ItemMeta.Mode.Silent||e===i.Notifications.ItemMeta.Status.Deactivated&&(t([e,o,s]),this.destinationActionsChannels.fireGeneralAutoDismissNotification.removeListener(r)))};this.destinationActionsChannels.fireGeneralAutoDismissNotification.addListener(r),this.sourceActionsChannels.fireGeneralAutoDismissNotification.send(...e)})}))}fireGeneralAcknowledgeNotification(...e){return u(this,void 0,void 0,(function*(){if(this.checkService())return yield new Promise(t=>{const n=this.getNextReqId(),r=({args:[e,o,s,a]})=>{a===n&&(s!==i.Notifications.ItemMeta.Mode.Acknowledge&&s!==i.Notifications.ItemMeta.Mode.Silent||e===i.Notifications.ItemMeta.Status.Deactivated&&(t([e,o,s]),this.destinationActionsChannels.fireGeneralAcknowledgeNotification.removeListener(r)))};this.destinationActionsChannels.fireGeneralAcknowledgeNotification.addListener(r),this.sourceActionsChannels.fireGeneralAcknowledgeNotification.send(...e)})}))}addCustomTask(...e){this.checkService()&&this.sourceActionsChannels.addCustomTask.send(...e)}getTaskMap(){return u(this,void 0,void 0,(function*(){if(this.checkService())return yield new Promise(e=>{const t=this.getNextReqId(),n=({args:[i,r]})=>{r===t&&(e(i),this.destinationActionsChannels.getTaskMap.removeListener(n))};this.destinationActionsChannels.getTaskMap.addListener(n),this.sourceActionsChannels.getTaskMap.send(t)})}))}getMediaTypeQueue(e){return u(this,void 0,void 0,(function*(){if(this.checkService())return yield new Promise(t=>{const n=this.getNextReqId(),i=({args:[e,r]})=>{r===n&&(t(e),this.destinationActionsChannels.getMediaTypeQueue.removeListener(i))};this.destinationActionsChannels.getMediaTypeQueue.addListener(i),this.sourceActionsChannels.getMediaTypeQueue.send(e,n)})}))}getToken(){return u(this,void 0,void 0,(function*(){if(this.checkService())return yield new Promise(e=>{const t=this.getNextReqId(),n=({args:[i,r]})=>{r===t&&(e(i),this.destinationActionsChannels.getToken.removeListener(n))};this.destinationActionsChannels.getToken.addListener(n),this.sourceActionsChannels.getToken.send(t)})}))}getIdleCodes(){return u(this,void 0,void 0,(function*(){if(this.checkService())return yield new Promise(e=>{const t=this.getNextReqId(),n=({args:[i,r]})=>{r===t&&(e(i),this.destinationActionsChannels.getIdleCodes.removeListener(n))};this.destinationActionsChannels.getIdleCodes.addListener(n),this.sourceActionsChannels.getIdleCodes.send(t)})}))}getWrapUpCodes(){return u(this,void 0,void 0,(function*(){if(this.checkService())return yield new Promise(e=>{const t=this.getNextReqId(),n=({args:[i,r]})=>{r===t&&(e(i),this.destinationActionsChannels.getWrapUpCodes.removeListener(n))};this.destinationActionsChannels.getWrapUpCodes.addListener(n),this.sourceActionsChannels.getWrapUpCodes.send(t)})}))}}const I=o(r,"[Actions JSAPI] =>");class A{constructor(e){this.isInited=!1,this.listeners=new Map,this.listenersOnce=new Map,this.logger=e.logger}init(e){this.aqmServiceEntity=e.aqmServiceEntity,this.aqmServiceEntityString=e.aqmServiceEntityString,this.isInited=!0}cleanup(){this.removeAllEventListeners(),this.aqmServiceEntity=void 0,this.aqmServiceEntityString=void 0,this.isInited=!1}_addEventListener(e,t,n){var i,r,o;const s=n?"listenersOnce":"listeners";this[s].has(e)||this[s].set(e,new Map);const a=this[s].get(e),u=n?"listenOnce":"listen",c=i=>{let r=null;return n&&(r=this.aqmServiceEntity[e].listenOnce(()=>this.removeOnceEventListener(e,t))),()=>{var t;if(i){n?(i.stopListenOnce(),r&&r.stopListenOnce()):i.stopListen();const o=[];o.push(`UnBound "${e}"`),n&&o.push("Once"),this.aqmServiceEntityString&&o.push(`from "${this.aqmServiceEntityString}"`),null===(t=this.logger)||void 0===t||t.info(o.join(" "))}}};if(this.aqmServiceEntity)if(e in this.aqmServiceEntity&&u in this.aqmServiceEntity[e]){const r=this.aqmServiceEntity[e][u](t);a.set(t,c(r));const o=[];o.push(`Bound "${e}"`),n&&o.push("Once"),this.aqmServiceEntityString&&o.push(`to "${this.aqmServiceEntityString}"`),null===(i=this.logger)||void 0===i||i.info(o.join(" "))}else null===(r=this.logger)||void 0===r||r.warn(`EventName "${e}" is not recognized, so won't be subscribed...`);else null===(o=this.logger)||void 0===o||o.error(`"${this.aqmServiceEntityString}" is not ready yet. .init(...) first...`)}_removeEventListener(e,t,n){const i=n?"listenersOnce":"listeners";if(this[i].has(e)){const n=this[i].get(e);if(n){if(n.has(t)){n.get(t)(),n.delete(t)}n.size<1&&this[i].delete(e)}}}addEventListener(e,t){this._addEventListener(e,t,!1)}addOnceEventListener(e,t){this._addEventListener(e,t,!0)}removeEventListener(e,t){this._removeEventListener(e,t,!1)}removeOnceEventListener(e,t){this._removeEventListener(e,t,!0)}removeAllEventListeners(){["listeners","listenersOnce"].forEach(e=>{this[e].forEach((e,t)=>{e.forEach((e,t)=>e()),e.clear()}),this[e].clear()})}}const N=e=>new A(e);var R=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};class D{constructor(e){this.logger=e.logger,this.aqmEvents=e.aqmEvents,this.serviceChecker=e.serviceChecker}checkService(){return this.serviceChecker.check(this.SERVICE)}init(e){e&&(this.SERVICE=e),this.checkService()&&(this.aqmEvents.init({aqmServiceEntity:this.SERVICE.aqm.contact,aqmServiceEntityString:"SERVICE.aqm.contact"}),this.logger.info("Inited"))}cleanup(){this.aqmEvents.cleanup(),this.SERVICE=void 0,this.logger.info("Cleaned")}accept(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.accept(e)}))}consultAccept(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.consultAccept(e)}))}buddyAgents(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.buddyAgents(e)}))}end(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.end(e)}))}consultEnd(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.consultEnd(e)}))}cancelCtq(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.cancelCtq(e)}))}wrapup(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.wrapup(e)}))}vteamTransfer(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.vteamTransfer(e)}))}blindTransfer(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.blindTransfer(e)}))}hold(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.hold(e)}))}unHold(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.unHold(e)}))}consult(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.consult(e)}))}consultConference(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.consultConference(e)}))}decline(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.decline(e)}))}consultTransfer(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.consultTransfer(e)}))}vteamList(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.vteamList(e)}))}pauseRecording(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.pauseRecording(e)}))}resumeRecording(e){var t;return R(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.contact.resumeRecording(e)}))}addEventListener(e,t){this.checkService()&&this.aqmEvents.addEventListener(e,t)}addOnceEventListener(e,t){this.checkService()&&this.aqmEvents.addOnceEventListener(e,t)}removeEventListener(e,t){this.aqmEvents.removeEventListener(e,t)}removeOnceEventListener(e,t){this.aqmEvents.removeOnceEventListener(e,t)}removeAllEventListeners(){this.aqmEvents.removeAllEventListeners()}}const M=o(r,"[AgentContact JSAPI] =>"),_=o(M,"[AqmServiceEvents: Contact] => ");var j=n(4),V=n.n(j),P=n(8),q=n.n(P),U=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};const F={agentName:void 0,agentProfileID:void 0,agentSessionId:void 0,teamId:void 0,teamName:void 0,dn:void 0,status:void 0,subStatus:void 0,idleCodes:void 0,wrapupCodes:void 0,outDialRegex:void 0,isOutboundEnabledForTenant:void 0,isOutboundEnabledForAgent:void 0};class H{constructor(e){this.emitter=V()(),this.listeners=new Set,this.teams=[],this.latestData=JSON.parse(JSON.stringify(F)),this.logger=e.logger,this.serviceChecker=e.serviceChecker}checkService(){return this.serviceChecker.check(this.SERVICE)}emit(e,...t){this.emitter.emit(e,...t)}update(e){const t=Object.keys(e).reduce((t,n)=>{const i=e[n],r=this.latestData[n];return JSON.stringify(i)!==JSON.stringify(r)&&t.push({name:n,value:i,oldValue:r}),t},[]);t.length&&(t.forEach(e=>this.latestData[e.name]=e.value),this.emit("updated",t))}static getOutdialRegex(e){if(e&&e.dialPlanEntity){const t=e.dialPlanEntity.find(e=>"Any Format"===e.name);if(t)return t.regex}return""}static findTeamName(e,t){const n=e.find(e=>e.teamId===t);return(null==n?void 0:n.teamName)||""}init(e){return U(this,void 0,void 0,(function*(){e&&(this.SERVICE=e),this.checkService()&&(yield this.fetchLatestData(),this.subscribeSelfDataEvents(),this.logger.info("Inited"))}))}cleanup(){this.unsubscribeSelfDataEvents(),this.removeAllEventListeners(),this.SERVICE=void 0,this.update(JSON.parse(JSON.stringify(F))),this.logger.info("Cleaned")}fetchLatestData(){var e,t,n;return U(this,void 0,void 0,(function*(){const i=(null===(e=this.SERVICE)||void 0===e?void 0:e.conf.profile)?null===(t=this.SERVICE)||void 0===t?void 0:t.conf.profile:yield null===(n=this.SERVICE)||void 0===n?void 0:n.conf.fetchProfile();if(i){const{teams:e,agentName:t,agentProfileID:n,defaultDn:r,defaultIdleName:o,agentSubStatus:s,idleCodes:a,wrapupCodes:u,dialPlan:c,isOutboundEnabledForTenant:l,isOutboundEnabledForAgent:d}=i;this.teams=e;const f=r,h=o,p=s,v=H.getOutdialRegex(c);this.update({agentName:t,agentProfileID:n,dn:f,status:h,subStatus:p,idleCodes:a,wrapupCodes:u,outDialRegex:v,isOutboundEnabledForTenant:l,isOutboundEnabledForAgent:d})}}))}subscribeSelfDataEvents(){var e,t,n,i;if(this.checkService()){{const t=null===(e=this.SERVICE)||void 0===e?void 0:e.aqm.agent.eAgentReloginSuccess.listen(({data:e})=>{const{agentSessionId:t,teamId:n,dn:i,status:r,subStatus:o}=e,s=H.findTeamName(this.teams,n);this.update({agentSessionId:t,teamId:n,teamName:s,dn:i,status:r,subStatus:o})});this.listeners.add(()=>null==t?void 0:t.stopListen())}{const e=null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.agent.eAgentStationLoginSuccess.listen(({data:e})=>{const{agentSessionId:t,teamId:n,status:i,subStatus:r}=e,o=H.findTeamName(this.teams,n);this.update({agentSessionId:t,teamId:n,teamName:o,status:i,subStatus:r})});this.listeners.add(()=>null==e?void 0:e.stopListen())}{const e=null===(n=this.SERVICE)||void 0===n?void 0:n.aqm.agent.eAgentStateChangeSuccess.listen(({data:e})=>{const{agentSessionId:t,status:n,subStatus:i}=e;this.update({agentSessionId:t,status:n,subStatus:i})});this.listeners.add(()=>null==e?void 0:e.stopListen())}{const e=null===(i=this.SERVICE)||void 0===i?void 0:i.aqm.agent.eAgentDNRegistered.listen(({data:e})=>{const{dn:t}=e;this.update({dn:t})});this.listeners.add(()=>null==e?void 0:e.stopListen())}}}unsubscribeSelfDataEvents(){this.listeners.forEach(e=>e()),this.listeners.clear()}stateChange(e){var t;return U(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.agent.stateChange({data:e})}))}mockOutdialAniList(){var e;return U(this,void 0,void 0,(function*(){if(this.checkService())return null===(e=this.SERVICE)||void 0===e?void 0:e.aqm.agent.mockOutdialAniList({p:null})}))}fetchAddressBooks(){var e;return U(this,void 0,void 0,(function*(){if(this.checkService())return null===(e=this.SERVICE)||void 0===e?void 0:e.aqm.agent.fetchAddressBooks({p:null})}))}addEventListener(e,t){this.checkService()&&this.emitter.on(e,t)}removeEventListener(e,t){this.checkService()&&this.emitter.off(e,t)}removeAllEventListeners(){q()(this.emitter)}}const z=o(r,"[AgentInfo JSAPI] =>");var Z=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};class J{constructor(e){this.emitter=V()(),this.logger=e.logger,this.agentxSERVICE=e.SERVICE}waitUntil(e){return Z(this,void 0,void 0,(function*(){if("function"==typeof e){yield new Promise(e=>setTimeout(e,1e3/30));!e()&&(yield this.waitUntil(e))}}))}checkService(e){return Z(this,void 0,void 0,(function*(){e?(e.isInited||(this.logger.warn("SERVICE is not inited. Awaiting it's initAgentxServices(...)..."),yield this.waitUntil(()=>e.isInited)),this.logger.info("SERVICE is inited. Continuing..."),this.emit("inited")):this.logger.error("SERVICE is not defiend...")}))}emit(e,...t){this.emitter.emit(e,...t)}init(){return Z(this,void 0,void 0,(function*(){this.agentxSERVICE?yield this.checkService(this.agentxSERVICE):this.logger.error("SERVICE is not defined...")}))}cleanup(){this.agentxSERVICE=void 0,this.emit("cleaned"),this.logger.info("Cleaned")}get clientLocale(){return null!=window.navigator.languages?window.navigator.languages[0]:window.navigator.language}addEventListener(e,t){this.emitter.on(e,t)}removeEventListener(e,t){this.emitter.off(e,t)}}const B=o(r,"[Config JSAPI] =>");var G=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};class W{constructor(e){this.logger=e.logger,this.aqmEvents=e.aqmEvents,this.serviceChecker=e.serviceChecker}checkService(){return this.serviceChecker.check(this.SERVICE)}init(e){e&&(this.SERVICE=e),this.checkService()&&(this.aqmEvents.init({aqmServiceEntity:this.SERVICE.aqm.dialer,aqmServiceEntityString:"SERVICE.aqm.dialer"}),this.logger.info("Inited"))}cleanup(){this.aqmEvents.cleanup(),this.SERVICE=void 0,this.logger.info("Cleaned")}startOutdial(e){var t;return G(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.dialer.startOutdial(e)}))}updateCadVariables(e){var t;return G(this,void 0,void 0,(function*(){if(this.checkService())return null===(t=this.SERVICE)||void 0===t?void 0:t.aqm.dialer.updateCadVariables(e)}))}addEventListener(e,t){this.checkService()&&this.aqmEvents.addEventListener(e,t)}addOnceEventListener(e,t){this.checkService()&&this.aqmEvents.addOnceEventListener(e,t)}removeEventListener(e,t){this.aqmEvents.removeEventListener(e,t)}removeOnceEventListener(e,t){this.aqmEvents.removeOnceEventListener(e,t)}removeAllEventListeners(){this.aqmEvents.removeAllEventListeners()}}const $=o(r,"[Dialer JSAPI] =>"),K=o($,"[AqmServiceEvents: Dialer] =>");class Y{constructor(e){this.logger=e.logger,this.serviceChecker=e.serviceChecker}checkService(){return this.serviceChecker.check(this.SERVICE)}init(e){e&&(this.SERVICE=e),this.checkService()&&this.logger.info("Inited")}cleanup(){this.SERVICE=void 0,this.logger.info("Cleaned")}createInstance(e){return i.I18N.createService(e)}createMixin(e){return i.I18N.createMixin(e)}get DEFAULT_INIT_OPTIONS(){var e;if(this.checkService())return null===(e=this.SERVICE)||void 0===e?void 0:e.i18n.DEFAULT_INIT_OPTIONS}getMergedInitOptions(...e){return i.I18N.mergeServiceInitOptions(...e)}}const X=o(r,"[I18N JSAPI] =>");class Q{constructor(e){this.clientLoggers=new Map,this.logger=e.logger}createLogger(e){const t=Object(i.createLogger)(e);return this.clientLoggers.set(e,t),this.logger.info(`Client logger created: "${e}"`),t}cleanupLogs(e){this.clientLoggers.has(e)&&i.Logger.POOL.cleanupPrefixedLogs(e)}browserDownloadLogsJson(e){this.clientLoggers.has(e)&&i.Logger.POOL.browserDownloadPrefixedLogsJson(e)}browserDownloadLogsText(e){this.clientLoggers.has(e)&&i.Logger.POOL.browserDownloadPrefixedLogsText(e)}getLogsCollection(e){if(this.clientLoggers.has(e))return i.Logger.POOL.getPrefixedLogsCollection(e)}getLogsJsonUrl(e){if(this.clientLoggers.has(e))return i.Logger.POOL.getPrefixedLogsJsonUrl(e)}getLogsTextUrl(e){if(this.clientLoggers.has(e))return i.Logger.POOL.getPrefixedLogsTextUrl(e)}}const ee=o(r,"[Logger JSAPI] =>");class te{constructor(e){this.logger=e.logger,this.aqmEvents=e.aqmEvents,this.serviceChecker=e.serviceChecker}checkService(){return this.serviceChecker.check(this.SERVICE)}init(e){e&&(this.SERVICE=e),this.checkService()&&(this.aqmEvents.init({aqmServiceEntity:this.SERVICE.aqm.screenpop,aqmServiceEntityString:"SERVICE.aqm.screenpop"}),this.logger.info("Inited"))}cleanup(){this.aqmEvents.cleanup(),this.SERVICE=void 0,this.logger.info("Cleaned")}addEventListener(e,t){this.checkService()&&this.aqmEvents.addEventListener(e,t)}addOnceEventListener(e,t){this.checkService()&&this.aqmEvents.addOnceEventListener(e,t)}removeEventListener(e,t){this.aqmEvents.removeEventListener(e,t)}removeOnceEventListener(e,t){this.aqmEvents.removeOnceEventListener(e,t)}removeAllEventListeners(){this.aqmEvents.removeAllEventListeners()}}const ne=o(r,"[ScreenPop JSAPI] =>"),ie=o(ne,"[AqmServiceEvents: ScreenPop] =>");class re{constructor(e){this.logger=e.logger,this.serviceChecker=e.serviceChecker}checkService(){return this.serviceChecker.check(this.SERVICE)}init(e){e&&(this.SERVICE=e),this.checkService()&&this.logger.info("Inited")}cleanup(){this.SERVICE=void 0,this.logger.info("Cleaned")}listenKeyPress(...e){var t;this.checkService()&&(null===(t=this.SERVICE)||void 0===t||t.shortcut.event.listenKeyPress(...e))}listenKeyConflict(...e){var t;this.checkService()&&(null===(t=this.SERVICE)||void 0===t||t.shortcut.event.listenKeyConflict(...e))}listenConflictResolved(...e){var t;this.checkService()&&(null===(t=this.SERVICE)||void 0===t||t.shortcut.event.listenConflictResolved(...e))}register(...e){var t;this.checkService()&&(null===(t=this.SERVICE)||void 0===t||t.shortcut.register(...e))}unregisterKeys(...e){var t;this.checkService()&&(null===(t=this.SERVICE)||void 0===t||t.shortcut.unregisterKeys(...e))}getRegisteredKeys(){var e;if(this.checkService())return null===(e=this.SERVICE)||void 0===e?void 0:e.shortcut.getRegisteredKeys()}get DEFAULT_SHORTCUT_KEYS(){var e;return null===(e=this.SERVICE)||void 0===e?void 0:e.shortcut.DEFAULT_SHORTCUT_KEYS}get MODIFIERS(){var e;return null===(e=this.SERVICE)||void 0===e?void 0:e.shortcut.MODIFIERS}get REGISTERED_KEYS(){var e;return null===(e=this.SERVICE)||void 0===e?void 0:e.shortcut.REGISTERED_KEYS}}const oe=o(r,"[ShortcutKey JSAPI] =>"),se=(()=>{AGENTX_SERVICE?r.info('Found global "AGENTX_SERVICE"!'):r.error('Missed global "AGENTX_SERVICE"...');const e=(t=AGENTX_SERVICE,new J({logger:B,SERVICE:t}));var t;const n=new Q({logger:ee}),i=new re({logger:oe,serviceChecker:a({logger:oe})}),o=new x({logger:I,serviceChecker:a({logger:I})}),s=new H({logger:z,serviceChecker:a({logger:z})}),u=new D({logger:M,serviceChecker:a({logger:M}),aqmEvents:N({logger:_})}),c=new W({logger:$,aqmEvents:N({logger:K}),serviceChecker:a({logger:$})}),l=new te({logger:ne,aqmEvents:N({logger:ie}),serviceChecker:a({logger:ne})}),d=new Y({logger:X,serviceChecker:a({logger:X})});return e.addEventListener("inited",()=>{u.init(AGENTX_SERVICE),s.init(AGENTX_SERVICE),c.init(AGENTX_SERVICE),l.init(AGENTX_SERVICE),i.init(AGENTX_SERVICE),o.init(AGENTX_SERVICE),d.init(AGENTX_SERVICE)}),e.addEventListener("cleaned",()=>{u.cleanup(),s.cleanup(),c.cleanup(),l.cleanup(),i.cleanup(),d.cleanup(),o.cleanup()}),{config:e,logger:n,shortcutKey:i,actions:o,agentContact:u,agentStateInfo:s,dialer:c,screenpop:l,i18n:d}})()},function(e,t,n){"use strict";n.r(t),n.d(t,"v1",(function(){return h})),n.d(t,"v3",(function(){return b})),n.d(t,"v4",(function(){return E})),n.d(t,"v5",(function(){return L}));var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function o(){if(!i)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}for(var s=[],a=0;a<256;++a)s[a]=(a+256).toString(16).substr(1);var u,c,l=function(e,t){var n=t||0,i=s;return[i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]]].join("")},d=0,f=0;var h=function(e,t,n){var i=t&&n||0,r=t||[],s=(e=e||{}).node||u,a=void 0!==e.clockseq?e.clockseq:c;if(null==s||null==a){var h=e.random||(e.rng||o)();null==s&&(s=u=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==a&&(a=c=16383&(h[6]<<8|h[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:f+1,g=p-d+(v-f)/1e4;if(g<0&&void 0===e.clockseq&&(a=a+1&16383),(g<0||p>d)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=p,f=v,c=a;var m=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;r[i++]=m>>>24&255,r[i++]=m>>>16&255,r[i++]=m>>>8&255,r[i++]=255&m;var y=p/4294967296*1e4&268435455;r[i++]=y>>>8&255,r[i++]=255&y,r[i++]=y>>>24&15|16,r[i++]=y>>>16&255,r[i++]=a>>>8|128,r[i++]=255&a;for(var S=0;S<6;++S)r[i+S]=s[S];return t||l(r)};var p=function(e,t,n){var i=function(e,i,r,o){var s=r&&o||0;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e)),"string"==typeof i&&(i=function(e){var t=[];return e.replace(/[a-fA-F0-9]{2}/g,(function(e){t.push(parseInt(e,16))})),t}(i)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(i)||16!==i.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var a=n(i.concat(e));if(a[6]=15&a[6]|t,a[8]=63&a[8]|128,r)for(var u=0;u<16;++u)r[s+u]=a[u];return r||l(a)};try{i.name=e}catch(e){}return i.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",i.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",i};function v(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function g(e,t,n,i,r,o){return v((s=v(v(t,e),v(i,o)))<<(a=r)|s>>>32-a,n);var s,a}function m(e,t,n,i,r,o,s){return g(t&n|~t&i,e,t,r,o,s)}function y(e,t,n,i,r,o,s){return g(t&i|n&~i,e,t,r,o,s)}function S(e,t,n,i,r,o,s){return g(t^n^i,e,t,r,o,s)}function w(e,t,n,i,r,o,s){return g(n^(t|~i),e,t,r,o,s)}var b=p("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Array(t.length);for(var n=0;n<t.length;n++)e[n]=t.charCodeAt(n)}return function(e){var t,n,i,r=[],o=32*e.length;for(t=0;t<o;t+=8)n=e[t>>5]>>>t%32&255,i=parseInt("0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n),16),r.push(i);return r}(function(e,t){var n,i,r,o,s;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var a=1732584193,u=-271733879,c=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)i=a,r=u,o=c,s=l,a=m(a,u,c,l,e[n],7,-680876936),l=m(l,a,u,c,e[n+1],12,-389564586),c=m(c,l,a,u,e[n+2],17,606105819),u=m(u,c,l,a,e[n+3],22,-1044525330),a=m(a,u,c,l,e[n+4],7,-176418897),l=m(l,a,u,c,e[n+5],12,1200080426),c=m(c,l,a,u,e[n+6],17,-1473231341),u=m(u,c,l,a,e[n+7],22,-45705983),a=m(a,u,c,l,e[n+8],7,1770035416),l=m(l,a,u,c,e[n+9],12,-1958414417),c=m(c,l,a,u,e[n+10],17,-42063),u=m(u,c,l,a,e[n+11],22,-1990404162),a=m(a,u,c,l,e[n+12],7,1804603682),l=m(l,a,u,c,e[n+13],12,-40341101),c=m(c,l,a,u,e[n+14],17,-1502002290),u=m(u,c,l,a,e[n+15],22,1236535329),a=y(a,u,c,l,e[n+1],5,-165796510),l=y(l,a,u,c,e[n+6],9,-1069501632),c=y(c,l,a,u,e[n+11],14,643717713),u=y(u,c,l,a,e[n],20,-373897302),a=y(a,u,c,l,e[n+5],5,-701558691),l=y(l,a,u,c,e[n+10],9,38016083),c=y(c,l,a,u,e[n+15],14,-660478335),u=y(u,c,l,a,e[n+4],20,-405537848),a=y(a,u,c,l,e[n+9],5,568446438),l=y(l,a,u,c,e[n+14],9,-1019803690),c=y(c,l,a,u,e[n+3],14,-187363961),u=y(u,c,l,a,e[n+8],20,1163531501),a=y(a,u,c,l,e[n+13],5,-1444681467),l=y(l,a,u,c,e[n+2],9,-51403784),c=y(c,l,a,u,e[n+7],14,1735328473),u=y(u,c,l,a,e[n+12],20,-1926607734),a=S(a,u,c,l,e[n+5],4,-378558),l=S(l,a,u,c,e[n+8],11,-2022574463),c=S(c,l,a,u,e[n+11],16,1839030562),u=S(u,c,l,a,e[n+14],23,-35309556),a=S(a,u,c,l,e[n+1],4,-1530992060),l=S(l,a,u,c,e[n+4],11,1272893353),c=S(c,l,a,u,e[n+7],16,-155497632),u=S(u,c,l,a,e[n+10],23,-1094730640),a=S(a,u,c,l,e[n+13],4,681279174),l=S(l,a,u,c,e[n],11,-358537222),c=S(c,l,a,u,e[n+3],16,-722521979),u=S(u,c,l,a,e[n+6],23,76029189),a=S(a,u,c,l,e[n+9],4,-640364487),l=S(l,a,u,c,e[n+12],11,-421815835),c=S(c,l,a,u,e[n+15],16,530742520),u=S(u,c,l,a,e[n+2],23,-995338651),a=w(a,u,c,l,e[n],6,-198630844),l=w(l,a,u,c,e[n+7],10,1126891415),c=w(c,l,a,u,e[n+14],15,-1416354905),u=w(u,c,l,a,e[n+5],21,-57434055),a=w(a,u,c,l,e[n+12],6,1700485571),l=w(l,a,u,c,e[n+3],10,-1894986606),c=w(c,l,a,u,e[n+10],15,-1051523),u=w(u,c,l,a,e[n+1],21,-2054922799),a=w(a,u,c,l,e[n+8],6,1873313359),l=w(l,a,u,c,e[n+15],10,-30611744),c=w(c,l,a,u,e[n+6],15,-1560198380),u=w(u,c,l,a,e[n+13],21,1309151649),a=w(a,u,c,l,e[n+4],6,-145523070),l=w(l,a,u,c,e[n+11],10,-1120210379),c=w(c,l,a,u,e[n+2],15,718787259),u=w(u,c,l,a,e[n+9],21,-343485551),a=v(a,i),u=v(u,r),c=v(c,o),l=v(l,s);return[a,u,c,l]}(function(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var i=8*e.length;for(t=0;t<i;t+=8)n[t>>5]|=(255&e[t/8])<<t%32;return n}(e),8*e.length))}));var E=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var s=0;s<16;++s)t[i+s]=r[s];return t||l(r)};function k(e,t,n,i){switch(e){case 0:return t&n^~t&i;case 1:return t^n^i;case 2:return t&n^t&i^n&i;case 3:return t^n^i}}function O(e,t){return e<<t|e>>>32-t}var L=p("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var i=unescape(encodeURIComponent(e));e=new Array(i.length);for(var r=0;r<i.length;r++)e[r]=i.charCodeAt(r)}e.push(128);var o=e.length/4+2,s=Math.ceil(o/16),a=new Array(s);for(r=0;r<s;r++){a[r]=new Array(16);for(var u=0;u<16;u++)a[r][u]=e[64*r+4*u]<<24|e[64*r+4*u+1]<<16|e[64*r+4*u+2]<<8|e[64*r+4*u+3]}for(a[s-1][14]=8*(e.length-1)/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=8*(e.length-1)&4294967295,r=0;r<s;r++){for(var c=new Array(80),l=0;l<16;l++)c[l]=a[r][l];for(l=16;l<80;l++)c[l]=O(c[l-3]^c[l-8]^c[l-14]^c[l-16],1);var d=n[0],f=n[1],h=n[2],p=n[3],v=n[4];for(l=0;l<80;l++){var g=Math.floor(l/20),m=O(d,5)+k(g,f,h,p)+v+t[g]+c[l]>>>0;v=p,p=h,h=O(f,30)>>>0,f=d,d=m}n[0]=n[0]+d>>>0,n[1]=n[1]+f>>>0,n[2]=n[2]+h>>>0,n[3]=n[3]+p>>>0,n[4]=n[4]+v>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}))},function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t);var s=n(2),a=n(3);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?u(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}var h={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){console&&console[e]&&console[e].apply(console,t)}},p=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(s.a)(this,e),this.init(t,n)}return Object(a.a)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||h,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,i){return i&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,o({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),v=function(){function e(){Object(s.a)(this,e),this.observers={}}return Object(a.a)(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach((function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((function(e){return e!==t})):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(this.observers[e]){var r=[].concat(this.observers[e]);r.forEach((function(e){e.apply(void 0,n)}))}if(this.observers["*"]){var o=[].concat(this.observers["*"]);o.forEach((function(t){t.apply(t,[e].concat(n))}))}}}]),e}();function g(){var e,t,n=new Promise((function(n,i){e=n,t=i}));return n.resolve=e,n.reject=t,n}function m(e){return null==e?"":""+e}function y(e,t,n){e.forEach((function(e){t[e]&&(n[e]=t[e])}))}function S(e,t,n){function i(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function r(){return!e||"string"==typeof e}for(var o="string"!=typeof t?[].concat(t):t.split(".");o.length>1;){if(r())return{};var s=i(o.shift());!e[s]&&n&&(e[s]=new n),e=e[s]}return r()?{}:{obj:e,k:i(o.shift())}}function w(e,t,n){var i=S(e,t,Object);i.obj[i.k]=n}function b(e,t){var n=S(e,t),i=n.obj,r=n.k;if(i)return i[r]}function E(e,t,n){var i=b(e,n);return void 0!==i?i:b(t,n)}function k(e,t,n){for(var i in t)"__proto__"!==i&&"constructor"!==i&&(i in e?"string"==typeof e[i]||e[i]instanceof String||"string"==typeof t[i]||t[i]instanceof String?n&&(e[i]=t[i]):k(e[i],t[i],n):e[i]=t[i]);return e}function O(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function C(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(function(e){return L[e]})):e}var T="undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,x=function(e){function t(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Object(s.a)(this,t),n=c(this,l(t).call(this)),T&&v.call(u(n)),n.data=e||{},n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return f(t,e),Object(a.a)(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,o=[e,t];return n&&"string"!=typeof n&&(o=o.concat(n)),n&&"string"==typeof n&&(o=o.concat(r?n.split(r):n)),e.indexOf(".")>-1&&(o=e.split(".")),b(this.data,o)}},{key:"addResource",value:function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},o=this.options.keySeparator;void 0===o&&(o=".");var s=[e,t];n&&(s=s.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(i=t,t=(s=e.split("."))[1]),this.addNamespaces(t),w(this.data,s,i),r.silent||this.emit("added",e,t,n,i)}},{key:"addResources",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in n)"string"!=typeof n[r]&&"[object Array]"!==Object.prototype.toString.apply(n[r])||this.addResource(e,t,r,n[r],{silent:!0});i.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},a=[e,t];e.indexOf(".")>-1&&(i=n,n=t,t=(a=e.split("."))[1]),this.addNamespaces(t);var u=b(this.data,a)||{};i?k(u,n,r):u=o({},u,n),w(this.data,a,u),s.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?o({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(v),I={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,i,r){var o=this;return e.forEach((function(e){o.processors[e]&&(t=o.processors[e].process(t,n,i,r))})),t}},A={},N=function(e){function t(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s.a)(this,t),n=c(this,l(t).call(this)),T&&v.call(u(n)),y(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,u(n)),n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=p.create("translator"),n}return f(t,e),Object(a.a)(t,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");var i=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,r=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var o=e.match(this.interpolator.nestingRegexp);if(o&&o.length>0)return{key:e,namespaces:r};var s=e.split(n);(n!==i||n===i&&this.options.ns.indexOf(s[0])>-1)&&(r=s.shift()),e=s.join(i)}return"string"==typeof r&&(r=[r]),{key:e,namespaces:r}}},{key:"translate",value:function(e,t,n){var r=this;if("object"!==i(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var s=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,a=this.extractFromKey(e[e.length-1],t),u=a.key,c=a.namespaces,l=c[c.length-1],d=t.lng||this.language,f=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&"cimode"===d.toLowerCase()){if(f){var h=t.nsSeparator||this.options.nsSeparator;return l+h+u}return u}var p=this.resolve(e,t),v=p&&p.res,g=p&&p.usedKey||u,m=p&&p.exactUsedKey||u,y=Object.prototype.toString.apply(v),S=["[object Number]","[object Function]","[object RegExp]"],w=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,E="string"!=typeof v&&"boolean"!=typeof v&&"number"!=typeof v;if(b&&v&&E&&S.indexOf(y)<0&&("string"!=typeof w||"[object Array]"!==y)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,v,t):"key '".concat(u," (").concat(this.language,")' returned an object instead of string.");if(s){var k="[object Array]"===y,O=k?[]:{},L=k?m:g;for(var C in v)if(Object.prototype.hasOwnProperty.call(v,C)){var T="".concat(L).concat(s).concat(C);O[C]=this.translate(T,o({},t,{joinArrays:!1,ns:c})),O[C]===T&&(O[C]=v[C])}v=O}}else if(b&&"string"==typeof w&&"[object Array]"===y)(v=v.join(w))&&(v=this.extendTranslation(v,e,t,n));else{var x=!1,I=!1;if(!this.isValidLookup(v)&&void 0!==t.defaultValue){if(x=!0,void 0!==t.count){var A=this.pluralResolver.getSuffix(d,t.count);v=t["defaultValue".concat(A)]}v||(v=t.defaultValue)}this.isValidLookup(v)||(I=!0,v=u);var N=t.defaultValue&&t.defaultValue!==v&&this.options.updateMissing;if(I||x||N){if(this.logger.log(N?"updateKey":"missingKey",d,l,u,N?t.defaultValue:v),s){var R=this.resolve(u,o({},t,{keySeparator:!1}));R&&R.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var D=[],M=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&M&&M[0])for(var _=0;_<M.length;_++)D.push(M[_]);else"all"===this.options.saveMissingTo?D=this.languageUtils.toResolveHierarchy(t.lng||this.language):D.push(t.lng||this.language);var j=function(e,n){r.options.missingKeyHandler?r.options.missingKeyHandler(e,l,n,N?t.defaultValue:v,N,t):r.backendConnector&&r.backendConnector.saveMissing&&r.backendConnector.saveMissing(e,l,n,N?t.defaultValue:v,N,t),r.emit("missingKey",e,l,n,v)};if(this.options.saveMissing){var V=void 0!==t.count&&"string"!=typeof t.count;this.options.saveMissingPlurals&&V?D.forEach((function(e){r.pluralResolver.getPluralFormsOfKey(e,u).forEach((function(t){return j([e],t)}))})):j(D,u)}}v=this.extendTranslation(v,e,t,p,n),I&&v===u&&this.options.appendNamespaceToMissingKey&&(v="".concat(l,":").concat(u)),I&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(v))}return v}},{key:"extendTranslation",value:function(e,t,n,i,r){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(o({},n,{interpolation:o({},this.options.interpolation,n.interpolation)}));var a,u=n.interpolation&&n.interpolation.skipOnVariables||this.options.interpolation.skipOnVariables;if(u){var c=e.match(this.interpolator.nestingRegexp);a=c&&c.length}var l=n.replace&&"string"!=typeof n.replace?n.replace:n;if(this.options.interpolation.defaultVariables&&(l=o({},this.options.interpolation.defaultVariables,l)),e=this.interpolator.interpolate(e,l,n.lng||this.language,n),u){var d=e.match(this.interpolator.nestingRegexp);a<(d&&d.length)&&(n.nest=!1)}!1!==n.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return r&&r[0]===i[0]&&!n.context?(s.logger.warn("It seems you are nesting recursively key: ".concat(i[0]," in key: ").concat(t[0])),null):s.translate.apply(s,i.concat([t]))}),n)),n.interpolation&&this.interpolator.reset()}var f=n.postProcess||this.options.postProcess,h="string"==typeof f?[f]:f;return null!=e&&h&&h.length&&!1!==n.applyPostProcessor&&(e=I.handle(h,e,t,this.options&&this.options.postProcessPassResolved?o({i18nResolved:i},n):n,this)),e}},{key:"resolve",value:function(e){var t,n,i,r,o,s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((function(e){if(!s.isValidLookup(t)){var u=s.extractFromKey(e,a),c=u.key;n=c;var l=u.namespaces;s.options.fallbackNS&&(l=l.concat(s.options.fallbackNS));var d=void 0!==a.count&&"string"!=typeof a.count,f=void 0!==a.context&&"string"==typeof a.context&&""!==a.context,h=a.lngs?a.lngs:s.languageUtils.toResolveHierarchy(a.lng||s.language,a.fallbackLng);l.forEach((function(e){s.isValidLookup(t)||(o=e,!A["".concat(h[0],"-").concat(e)]&&s.utils&&s.utils.hasLoadedNamespace&&!s.utils.hasLoadedNamespace(o)&&(A["".concat(h[0],"-").concat(e)]=!0,s.logger.warn('key "'.concat(n,'" for languages "').concat(h.join(", "),'" won\'t get resolved as namespace "').concat(o,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),h.forEach((function(n){if(!s.isValidLookup(t)){r=n;var o,u,l=c,h=[l];if(s.i18nFormat&&s.i18nFormat.addLookupKeys)s.i18nFormat.addLookupKeys(h,c,n,e,a);else d&&(o=s.pluralResolver.getSuffix(n,a.count)),d&&f&&h.push(l+o),f&&h.push(l+="".concat(s.options.contextSeparator).concat(a.context)),d&&h.push(l+=o);for(;u=h.pop();)s.isValidLookup(t)||(i=u,t=s.getResource(n,e,u,a))}})))}))}})),{res:t,usedKey:n,exactUsedKey:i,usedLng:r,usedNS:o}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i)}}]),t}(v);function R(e){return e.charAt(0).toUpperCase()+e.slice(1)}var D=function(){function e(t){Object(s.a)(this,e),this.options=t,this.whitelist=this.options.supportedLngs||!1,this.supportedLngs=this.options.supportedLngs||!1,this.logger=p.create("languageUtils")}return Object(a.a)(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map((function(e){return e.toLowerCase()})):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=R(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=R(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=R(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return this.logger.deprecate("languageUtils.isWhitelisted",'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),this.isSupportedCode(e)}},{key:"isSupportedCode",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}},{key:"getBestMatchFromCodes",value:function(e){var t,n=this;return e?(e.forEach((function(e){if(!t){var i=n.formatLanguageCode(e);n.options.supportedLngs&&!n.isSupportedCode(i)||(t=i)}})),!t&&this.options.supportedLngs&&e.forEach((function(e){if(!t){var i=n.getLanguagePartFromCode(e);if(n.isSupportedCode(i))return t=i;t=n.options.supportedLngs.find((function(e){if(0===e.indexOf(i))return e}))}})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],o=function(e){e&&(n.isSupportedCode(e)?r.push(e):n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(e))):"string"==typeof e&&o(this.formatLanguageCode(e)),i.forEach((function(e){r.indexOf(e)<0&&o(n.formatLanguageCode(e))})),r}}]),e}(),M=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],_={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}};function j(){var e={};return M.forEach((function(t){t.lngs.forEach((function(n){e[n]={numbers:t.nr,plurals:_[t.fc]}}))})),e}var V=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(s.a)(this,e),this.languageUtils=t,this.options=n,this.logger=p.create("pluralResolver"),this.rules=j()}return Object(a.a)(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,i=[],r=this.getRule(e);return r?(r.numbers.forEach((function(r){var o=n.getSuffix(e,r);i.push("".concat(t).concat(o))})),i):i}},{key:"getSuffix",value:function(e,t){var n=this,i=this.getRule(e);if(i){var r=i.noAbs?i.plurals(t):i.plurals(Math.abs(t)),o=i.numbers[r];this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]&&(2===o?o="plural":1===o&&(o=""));var s=function(){return n.options.prepend&&o.toString()?n.options.prepend+o.toString():o.toString()};return"v1"===this.options.compatibilityJSON?1===o?"":"number"==typeof o?"_plural_".concat(o.toString()):s():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),P=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s.a)(this,e),this.logger=p.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return Object(a.a)(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:C,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?O(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?O(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?O(t.nestingPrefix):t.nestingPrefixEscaped||O("$t("),this.nestingSuffix=t.nestingSuffix?O(t.nestingSuffix):t.nestingSuffixEscaped||O(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,i){var r,o,s,a=this,u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(e){return e.replace(/\$/g,"$$$$")}var l=function(e){if(e.indexOf(a.formatSeparator)<0){var r=E(t,u,e);return a.alwaysFormat?a.format(r,void 0,n):r}var o=e.split(a.formatSeparator),s=o.shift().trim(),c=o.join(a.formatSeparator).trim();return a.format(E(t,u,s),c,n,i)};this.resetRegExp();var d=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,f=i&&i.interpolation&&i.interpolation.skipOnVariables||this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(e){return c(e)}},{regex:this.regexp,safeValue:function(e){return a.escapeValue?c(a.escape(e)):c(e)}}].forEach((function(t){for(s=0;r=t.regex.exec(e);){if(void 0===(o=l(r[1].trim())))if("function"==typeof d){var n=d(e,r,i);o="string"==typeof n?n:""}else{if(f){o=r[0];continue}a.logger.warn("missed to pass in variable ".concat(r[1]," for interpolating ").concat(e)),o=""}else"string"==typeof o||a.useRawValueToEscape||(o=m(o));if(e=e.replace(r[0],t.safeValue(o)),t.regex.lastIndex=0,++s>=a.maxReplaces)break}})),e}},{key:"nest",value:function(e,t){var n,i,r=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=o({},s);function u(e,t){var n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;var i=e.split(new RegExp("".concat(n,"[ ]*{"))),r="{".concat(i[1]);e=i[0],r=(r=this.interpolate(r,a)).replace(/'/g,'"');try{a=JSON.parse(r),t&&(a=o({},t,a))}catch(t){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),t),"".concat(e).concat(n).concat(r)}return delete a.defaultValue,e}for(a.applyPostProcessor=!1,delete a.defaultValue;n=this.nestingRegexp.exec(e);){var c=[],l=!1;if(n[0].includes(this.formatSeparator)&&!/{.*}/.test(n[1])){var d=n[1].split(this.formatSeparator).map((function(e){return e.trim()}));n[1]=d.shift(),c=d,l=!0}if((i=t(u.call(this,n[1].trim(),a),a))&&n[0]===e&&"string"!=typeof i)return i;"string"!=typeof i&&(i=m(i)),i||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),i=""),l&&(i=c.reduce((function(e,t){return r.format(e,t,s.lng,s)}),i.trim())),e=e.replace(n[0],i),this.regexp.lastIndex=0}return e}}]),e}();var q=function(e){function t(e,n,i){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Object(s.a)(this,t),r=c(this,l(t).call(this)),T&&v.call(u(r)),r.backend=e,r.store=n,r.services=i,r.languageUtils=i.languageUtils,r.options=o,r.logger=p.create("backendConnector"),r.state={},r.queue=[],r.backend&&r.backend.init&&r.backend.init(i,o.backend,o),r}return f(t,e),Object(a.a)(t,[{key:"queueLoad",value:function(e,t,n,i){var r=this,o=[],s=[],a=[],u=[];return e.forEach((function(e){var i=!0;t.forEach((function(t){var a="".concat(e,"|").concat(t);!n.reload&&r.store.hasResourceBundle(e,t)?r.state[a]=2:r.state[a]<0||(1===r.state[a]?s.indexOf(a)<0&&s.push(a):(r.state[a]=1,i=!1,s.indexOf(a)<0&&s.push(a),o.indexOf(a)<0&&o.push(a),u.indexOf(t)<0&&u.push(t)))})),i||a.push(e)})),(o.length||s.length)&&this.queue.push({pending:s,loaded:{},errors:[],callback:i}),{toLoad:o,pending:s,toLoadLanguages:a,toLoadNamespaces:u}}},{key:"loaded",value:function(e,t,n){var i=e.split("|"),r=i[0],o=i[1];t&&this.emit("failedLoading",r,o,t),n&&this.store.addResourceBundle(r,o,n),this.state[e]=t?-1:2;var s={};this.queue.forEach((function(n){var i,a,u,c,l,d;i=n.loaded,a=o,c=S(i,[r],Object),l=c.obj,d=c.k,l[d]=l[d]||[],u&&(l[d]=l[d].concat(a)),u||l[d].push(a),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach((function(e){s[e]||(s[e]=[]),n.loaded[e].length&&n.loaded[e].forEach((function(t){s[e].indexOf(t)<0&&s[e].push(t)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",s),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,s=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,(function(a,u){a&&u&&r<5?setTimeout((function(){i.read.call(i,e,t,n,r+1,2*o,s)}),o):s(a,u)})):s(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var o=this.queueLoad(e,t,i,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach((function(e){n.loadOne(e)}))}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=e.split("|"),r=i[0],o=i[1];this.read(r,o,"read",void 0,void 0,(function(i,s){i&&t.logger.warn("".concat(n,"loading namespace ").concat(o," for language ").concat(r," failed"),i),!i&&s&&t.logger.log("".concat(n,"loaded namespace ").concat(o," for language ").concat(r),s),t.loaded(e,i,s)}))}},{key:"saveMissing",value:function(e,t,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)?this.logger.warn('did not save key "'.concat(n,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null!=n&&""!==n&&(this.backend&&this.backend.create&&this.backend.create(e,t,n,i,null,o({},s,{isUpdate:r})),e&&e[0]&&this.store.addResource(e[0],t,n,i))}}]),t}(v);function U(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===i(e[1])&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"===i(e[2])||"object"===i(e[3])){var n=e[3]||e[2];Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,n,i){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!1}}}function F(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&(e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e.supportedLngs=e.whitelist),e.nonExplicitWhitelist&&(e.nonExplicitSupportedLngs=e.nonExplicitWhitelist),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function H(){}var z=new(function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(Object(s.a)(this,t),e=c(this,l(t).call(this)),T&&v.call(u(e)),e.options=F(n),e.services={},e.logger=p,e.modules={external:[]},i&&!e.isInitialized&&!n.isClone){if(!e.options.initImmediate)return e.init(n,i),c(e,u(e));setTimeout((function(){e.init(n,i)}),0)}return e}return f(t,e),Object(a.a)(t,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;function i(e){return e?"function"==typeof e?new e:e:null}if("function"==typeof t&&(n=t,t={}),t.whitelist&&!t.supportedLngs&&this.logger.deprecate("whitelist",'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),t.nonExplicitWhitelist&&!t.nonExplicitSupportedLngs&&this.logger.deprecate("whitelist",'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),this.options=o({},U(),this.options,F(t)),this.format=this.options.interpolation.format,n||(n=H),!this.options.isClone){this.modules.logger?p.init(i(this.modules.logger),this.options):p.init(null,this.options);var r=new D(this.options);this.store=new x(this.options.resources,this.options);var s=this.services;s.logger=p,s.resourceStore=this.store,s.languageUtils=r,s.pluralResolver=new V(r,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),s.interpolator=new P(this.options),s.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},s.backendConnector=new q(i(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];e.emit.apply(e,[t].concat(i))})),this.modules.languageDetector&&(s.languageDetector=i(this.modules.languageDetector),s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=i(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new N(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];e.emit.apply(e,[t].concat(i))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");var a=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];a.forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}}));var u=["addResource","addResources","addResourceBundle","removeResourceBundle"];u.forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments),e}}));var c=g(),l=function(){e.changeLanguage(e.options.lng,(function(t,i){e.isInitialized=!0,e.options.isClone||e.logger.log("initialized",e.options),e.emit("initialized",e.options),c.resolve(i),n(t,i)}))};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),c}},{key:"loadResources",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H,i=n,r="string"==typeof e?e:this.language;if("function"==typeof e&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&"cimode"===r.toLowerCase())return i();var o=[],s=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach((function(e){o.indexOf(e)<0&&o.push(e)}))};if(r)s(r);else{var a=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);a.forEach((function(e){return s(e)}))}this.options.preload&&this.options.preload.forEach((function(e){return s(e)})),this.services.backendConnector.load(o,this.options.ns,i)}else i(null)}},{key:"reloadResources",value:function(e,t,n){var i=g();return e||(e=this.languages),t||(t=this.options.ns),n||(n=H),this.services.backendConnector.reload(e,t,(function(e){i.resolve(),n(e)})),i}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&I.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this;this.isLanguageChangingTo=e;var i=g();this.emit("languageChanging",e);var r=function(e){var r="string"==typeof e?e:n.services.languageUtils.getBestMatchFromCodes(e);r&&(n.language||(n.language=r,n.languages=n.services.languageUtils.toResolveHierarchy(r)),n.translator.language||n.translator.changeLanguage(r),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(r)),n.loadResources(r,(function(e){!function(e,r){r?(n.language=r,n.languages=n.services.languageUtils.toResolveHierarchy(r),n.translator.changeLanguage(r),n.isLanguageChangingTo=void 0,n.emit("languageChanged",r),n.logger.log("languageChanged",r)):n.isLanguageChangingTo=void 0,i.resolve((function(){return n.t.apply(n,arguments)})),t&&t(e,(function(){return n.t.apply(n,arguments)}))}(e,r)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(r):r(e):r(this.services.languageDetector.detect()),i}},{key:"getFixedT",value:function(e,t){var n=this,r=function e(t,r){var s;if("object"!==i(r)){for(var a=arguments.length,u=new Array(a>2?a-2:0),c=2;c<a;c++)u[c-2]=arguments[c];s=n.options.overloadTranslationOptionHandler([t,r].concat(u))}else s=o({},r);return s.lng=s.lng||e.lng,s.lngs=s.lngs||e.lngs,s.ns=s.ns||e.ns,n.t(t,s)};return"string"==typeof e?r.lng=e:r.lngs=e,r.ns=t,r}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var i=this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;var s=function(e,n){var i=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===i||2===i};if(n.precheck){var a=n.precheck(this,s);if(void 0!==a)return a}return!!this.hasResourceBundle(i,e)||(!this.services.backendConnector.backend||!(!s(i,e)||r&&!s(o,e)))}},{key:"loadNamespaces",value:function(e,t){var n=this,i=g();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)})),this.loadResources((function(e){i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=g();"string"==typeof e&&(e=[e]);var i=this.options.preload||[],r=e.filter((function(e){return i.indexOf(e)<0}));return r.length?(this.options.preload=i.concat(r),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return"rtl";return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr"}},{key:"createInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new t(e,n)}},{key:"cloneInstance",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H,r=o({},this.options,n,{isClone:!0}),s=new t(r),a=["store","services","language"];return a.forEach((function(t){s[t]=e[t]})),s.services=o({},this.services),s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s.translator=new N(s.services,s.options),s.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];s.emit.apply(s,[e].concat(n))})),s.init(r,i),s.translator.options=s.options,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}}]),t}(v));t.default=z}])}));

/***/ }),

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/*! exports provided: supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return CSSResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return unsafeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
    (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
    ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `supportsAdoptingStyleSheets` is true then we assume
            // CSSStyleSheet is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/*! exports provided: customElement, property, internalProperty, state, query, queryAsync, queryAll, eventOptions, queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalProperty", function() { return internalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return queryAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return eventOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return queryAssignedNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const legacyCustomElement = (tagName, clazz) => {
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The name of the custom element to define.
 */
const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
    legacyCustomElement(tagName, classOrDescriptor) :
    standardCustomElement(tagName, classOrDescriptor);
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign(Object.assign({}, element), { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 * @deprecated `internalProperty` will be renamed to `state` in lit-element 3.0.
 *     Please update to `state` now to be compatible with 3.0.
 */
function internalProperty(options) {
    return property({ attribute: false, hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged });
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
const state = internalProperty;
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        if (cache) {
            const prop = name !== undefined ? name : protoOrDescriptor.key;
            const key = typeof prop === 'symbol' ? Symbol() : `__${prop}`;
            descriptor.get = function () {
                if (this[key] === undefined) {
                    (this[key] =
                        this.renderRoot.querySelector(selector));
                }
                return this[key];
            };
        }
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            async get() {
                await this.updateComplete;
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelectorAll(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
const standardEventOptions = (options, element) => {
    return Object.assign(Object.assign({}, element), { finisher(clazz) {
            Object.assign(clazz.prototype[element.key], options);
        } });
};
const legacyEventOptions = 
// tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
    Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}`>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
    // Return value typed as any to prevent TypeScript from complaining that
    // standard decorator function signature does not match TypeScript decorator
    // signature
    // TODO(kschaaf): unclear why it was only failing on this decorator and not
    // the others
    return ((protoOrDescriptor, name) => (name !== undefined) ?
        legacyEventOptions(options, protoOrDescriptor, name) :
        standardEventOptions(options, protoOrDescriptor));
}
// x-browser support for matches
// tslint:disable-next-line:no-any
const ElementProto = Element.prototype;
const legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given named `slot`. Note, the type of
 * this property should be annotated as `NodeListOf<HTMLElement>`.
 *
 * @param slotName A string name of the slot.
 * @param flatten A boolean which when true flattens the assigned nodes,
 * meaning any assigned nodes that are slot elements are replaced with their
 * assigned nodes.
 * @param selector A string which filters the results to elements that match
 * the given css selector.
 *
 * * @example
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes('list', true, '.item')
 *   listItems;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAssignedNodes(slotName = '', flatten = false, selector = '') {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                const slotSelector = `slot${slotName ? `[name=${slotName}]` : ':not([name])'}`;
                const slot = this.renderRoot.querySelector(slotSelector);
                let nodes = slot && slot.assignedNodes({ flatten });
                if (nodes && selector) {
                    nodes = nodes.filter((node) => node.nodeType === Node.ELEMENT_NODE &&
                        // tslint:disable-next-line:no-any testing existence on older browsers
                        (node.matches ?
                            node.matches(selector) :
                            legacyMatches.call(node, selector)));
                }
                return nodes;
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return defaultConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return UpdatingElement; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        const descriptor = this.getPropertyDescriptor(name, key, options);
        if (descriptor !== undefined) {
            Object.defineProperty(this.prototype, name, descriptor);
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this
                    .requestUpdateInternal(name, oldValue, options);
            },
            configurable: true,
            enumerable: true
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */
    static getPropertyOptions(name) {
        return this._classProperties && this._classProperties.get(name) ||
            defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
            superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._updateState = 0;
        this._updatePromise =
            new Promise((res) => this._enableUpdatingResolver = res);
        this._changedProperties = new Map();
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        // Ensure first connection completes an update. Updates cannot complete
        // before connection.
        this.enableUpdating();
    }
    enableUpdating() {
        if (this._enableUpdatingResolver !== undefined) {
            this._enableUpdatingResolver();
            this._enableUpdatingResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        // tslint:disable-next-line:no-unnecessary-type-assertion
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor.getPropertyOptions(propName);
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    requestUpdateInternal(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            options = options || ctor.getPropertyOptions(name);
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._updatePromise = this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this.requestUpdateInternal(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this._updatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        const result = this.performUpdate();
        // If `performUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this._hasRequestedUpdate;
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this._hasRequestedUpdate) {
            return;
        }
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
            else {
                this._markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
            throw e;
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     * @deprecated Override `getUpdateComplete()` instead for forward
     *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
     */
    _getUpdateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async getUpdateComplete() {
     *       await super.getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    getUpdateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
        this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement[_a] = true;
//# sourceMappingURL=updating-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement, ReactiveElement, customElement, property, internalProperty, state, query, queryAsync, queryAll, eventOptions, queryAssignedNodes, html, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css, LitElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]; });

/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "internalProperty", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["internalProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "state", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["state"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAssignedNodes"]; });

/* harmony import */ var lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["SVGTemplateResult"]; });

/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["css"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The main LitElement module, which defines the [[`LitElement`]] base class and
 * related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import [[`LitElement`]] and [[`html`]] from this module to create a
 * component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends [[`UpdatingElement`]] and adds lit-html templating.
 * The `UpdatingElement` class is provided for users that want to build
 * their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.5.0');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */
const renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */
class LitElement extends _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"] {
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    static getStyles() {
        return this.styles;
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Only gather styles once per class
        if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
            return;
        }
        // Take care not to call `this.getStyles()` multiple times since this
        // generates new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.getStyles();
        if (Array.isArray(userStyles)) {
            // De-duplicate styles preserving the _last_ instance in the set.
            // This is a performance optimization to avoid duplicated styles that can
            // occur especially when composing via subclassing.
            // The last item is kept to try to preserve the cascade order with the
            // assumption that it's most important that last added styles override
            // previous styles.
            const addStyles = (styles, set) => styles.reduceRight((set, s) => 
            // Note: On IE set.add() does not return the set
            Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
            // Array.from does not work on Set in IE, otherwise return
            // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
            const set = addStyles(userStyles, new Set());
            const styles = [];
            set.forEach((v) => styles.unshift(v));
            this._styles = styles;
        }
        else {
            this._styles = userStyles === undefined ? [] : [userStyles];
        }
        // Ensure that there are no invalid CSSStyleSheet instances here. They are
        // invalid in two conditions.
        // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
        //     this is impossible to check except via .replaceSync or use
        // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
        //     false)
        this._styles = this._styles.map((s) => {
            if (s instanceof CSSStyleSheet && !_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
                // Flatten the cssText from the passed constructible stylesheet (or
                // undetectable non-constructible stylesheet). The user might have
                // expected to update their stylesheets over time, but the alternative
                // is a crash.
                const cssText = Array.prototype.slice.call(s.cssRules)
                    .reduce((css, rule) => css + rule.cssText, '');
                return Object(_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"])(cssText);
            }
            return s;
        });
    }
    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    initialize() {
        super.initialize();
        this.constructor._getUniqueStyles();
        this.renderRoot = this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow(this.constructor.shadowRootOptions);
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const templateResult = this.render();
        super.update(changedProperties);
        // If render is not implemented by the component, don't call lit-html render
        if (templateResult !== renderNotImplemented) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */
    render() {
        return renderNotImplemented;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */
LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */
LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_0__["render"];
/** @nocollapse */
LitElement.shadowRootOptions = { mode: 'open' };
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/class-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/class-map.js ***!
  \*******************************************************/
/*! exports provided: classMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return classMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// IE11 doesn't support classList on SVG elements, so we emulate it with a Set
class ClassList {
    constructor(element) {
        this.classes = new Set();
        this.changed = false;
        this.element = element;
        const classList = (element.getAttribute('class') || '').split(/\s+/);
        for (const cls of classList) {
            this.classes.add(cls);
        }
    }
    add(cls) {
        this.classes.add(cls);
        this.changed = true;
    }
    remove(cls) {
        this.classes.delete(cls);
        this.changed = true;
    }
    commit() {
        if (this.changed) {
            let classString = '';
            this.classes.forEach((cls) => classString += cls + ' ');
            this.element.setAttribute('class', classString);
        }
    }
}
/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */
const previousClassesCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `class` if the property value is truthy; if the property value is
 * falsey, the property name is removed from the element's `class`. For example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */
const classMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((classInfo) => (part) => {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || (part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"]) ||
        part.committer.name !== 'class' || part.committer.parts.length > 1) {
        throw new Error('The `classMap` directive must be used in the `class` attribute ' +
            'and must be the only part in the attribute.');
    }
    const { committer } = part;
    const { element } = committer;
    let previousClasses = previousClassesCache.get(part);
    if (previousClasses === undefined) {
        // Write static classes once
        // Use setAttribute() because className isn't a string on SVG elements
        element.setAttribute('class', committer.strings.join(' '));
        previousClassesCache.set(part, previousClasses = new Set());
    }
    const classList = (element.classList || new ClassList(element));
    // Remove old classes that no longer apply
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.
    previousClasses.forEach((name) => {
        if (!(name in classInfo)) {
            classList.remove(name);
            previousClasses.delete(name);
        }
    });
    // Add or remove classes based on their classMap value
    for (const name in classInfo) {
        const value = classInfo[name];
        if (value != previousClasses.has(name)) {
            // We explicitly want a loose truthy check of `value` because it seems
            // more convenient that '' and 0 are skipped.
            if (value) {
                classList.add(name);
                previousClasses.add(name);
            }
            else {
                classList.remove(name);
                previousClasses.delete(name);
            }
        }
    }
    if (typeof classList.commit === 'function') {
        classList.commit();
    }
});
//# sourceMappingURL=class-map.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

const previousValues = new WeakMap();
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((value) => (part) => {
    const previousValue = previousValues.get(part);
    if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
        // If the value is undefined, remove the attribute, but only if the value
        // was previously defined.
        if (previousValue !== undefined || !previousValues.has(part)) {
            const name = part.committer.name;
            part.committer.element.removeAttribute(name);
        }
    }
    else if (value !== previousValue) {
        part.setValue(value);
    }
    previousValues.set(part, value);
});
//# sourceMappingURL=if-defined.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' &&
    window.customElements != null &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}
//# sourceMappingURL=modify-template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === '' && strings[1] === '') {
            const v = parts[0].value;
            if (typeof v === 'symbol') {
                return String(v);
            }
            if (typeof v === 'string' || !isIterable(v)) {
                return v;
            }
        }
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) {
            return;
        }
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, shadyTemplateFactory, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadyTemplateFactory", function() { return shadyTemplateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @packageDocumentation
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */







// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_5__["marker"]);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new _template_js__WEBPACK_IMPORTED_MODULE_5__["Template"](result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) {
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, content.firstChild);
    }
    else {
        content.insertBefore(condensedStyle, content.firstChild);
    }
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render = (result, container, options) => {
    if (!options || typeof options !== 'object' || !options.scopeName) {
        throw new Error('The `scopeName` option is required.');
    }
    const scopeName = options.scopeName;
    const hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"] ?
            part.value.template :
            undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        container.appendChild(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};
//# sourceMappingURL=shady-render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
const commentMarker = ` ${_template_js__WEBPACK_IMPORTED_MODULE_1__["marker"]} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        let value = this.getHTML();
        if (policy !== undefined) {
            // this is secure because `this.strings` is a TemplateStringsArray.
            // TODO: validate this when
            // https://github.com/tc39/proposal-array-is-template-object is
            // implemented.
            value = policy.createHTML(value);
        }
        template.innerHTML = value;
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.0');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  var minus = input < 0 ? "-" : "";
  var target = minus ? input * -1 : input;
  var result;

  if (target.toString().length < n) {
    result = ("0".repeat(n) + target).slice(-n);
  } else {
    result = target.toString();
  }

  return "" + minus + result;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
      minutes = Math.trunc(Math.abs(offset % 60)),
      sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

    case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      base = _opts.base,
      cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Outside of the supported range Etc/GMT-14 to Etc/GMT+12.
      // 2. Not a whole hour, e.g. UTC+4:30.
      var gmtOffset = -1 * (dt.offset / 60);

      if (gmtOffset >= -14 && gmtOffset <= 12 && gmtOffset % 1 === 0) {
        z = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";

        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO time parsing


var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing

var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";

  var maybeNegate = function maybeNegate(num) {
    return num && hasNegativePrefix ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr)),
    milliseconds: maybeNegate(parseMillis(millisecondsStr))
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  ;

  Duration.fromISOTime = function fromISOTime(text, opts) {
    var _parseISOTimeOnly = parseISOTimeOnly(text),
        parsed = _parseISOTimeOnly[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return null;
    var millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;
    opts = Object.assign({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";

      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    var str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}.
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start, startIsValid;

      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      var end, endIsValid;

      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.now().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["quarters", function (a, b) {
    return b.quarter - a.quarter;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "( |" + NBSP + ")";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s.replace(/\./g, "") // ignore dots that were made optional
  .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
  .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + Math.trunc(dur.years),
      month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }),
      millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includePrefix = _ref.includePrefix,
      includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  var str = toTechFormat(dt, fmt);

  if (includePrefix) {
    str = "T" + str;
  }

  return str;
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
    var u = _step.value;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */


  DateTime.now = function now() {
    return new DateTime({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  ;

  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({});
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$includePrefix = _ref6.includePrefix,
        includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      includePrefix: includePrefix,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.now(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    var inputMs = otherDateTime.valueOf();
    var otherZoneDateTime = this.setZone(otherDateTime.zone, {
      keepLocalTime: true
    });
    return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return DATE_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

var VERSION = "1.26.0";

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.VERSION = VERSION;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./src/components/App.scss":
/*!*********************************!*\
  !*** ./src/components/App.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

           
        /* harmony default export */ __webpack_exports__["default"] = (lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
:host {
  display: block;
  background-color: var(--md-primary-bg-color);
  color: var(--md-primary-text-color); }

.container {
  display: flex;
  flex-direction: row;
  height: 100%; }
  .container > customer-summary {
    height: 100%;
    margin-right: 1rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.16); }
  .container.compact {
    flex-direction: column;
    justify-content: space-between;
    align-items: center; }
    .container.compact > customer-summary {
      margin: 1rem;
      border-radius: 8px;
      height: 20rem;
      width: 90%;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.18); }
    .container.compact > customer-visits {
      width: auto; }

table {
  display: block; }
  table tr {
    display: flex;
    flex-direction: row;
    margin-top: 8px; }
    table tr .title {
      width: 7rem;
      color: var(--md-secondary-text-color, #545454); }
    table tr .value {
      flex: 1;
      color: var(--md-primary-text-color, #121212); }

.compact table {
  flex-grow: 1;
  overflow: auto; }

/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/CRM/src/components/App.scss */
/*# sourceURL=App.scss */
/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/CRM/src/components/TableStyles.scss */
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb21lcmFqL0RvY3VtZW50cy9jaXNjby93ZWJleC1jYy9zb3VyY2Vjb2RlL3dlYmV4LWNvbnRhY3QtY2VudGVyLXdpZGdldC1zdGFydGVyL0V4YW1wbGVzL1dpZGdldHMvQ1JNL3NyYy9jb21wb25lbnRzL0FwcC5zY3NzIiwiQXBwLnNjc3MiLCIvVXNlcnMvbW9tZXJhai9Eb2N1bWVudHMvY2lzY28vd2ViZXgtY2Mvc291cmNlY29kZS93ZWJleC1jb250YWN0LWNlbnRlci13aWRnZXQtc3RhcnRlci9FeGFtcGxlcy9XaWRnZXRzL0NSTS9zcmMvY29tcG9uZW50cy9UYWJsZVN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUNNRTtBRElGO0VBQ0ksY0FBYztFQUNkLDRDQUE0QztFQUM1QyxtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtFQUhoQjtJQU1RLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEVBQTRFLEVBQUE7RUFScEY7SUFZUSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0lBZDNCO01BZ0JZLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFVBQVU7TUFDViw0RUFBNEUsRUFBQTtJQXBCeEY7TUF3QlksV0FBVyxFQUFBOztBRXZDckI7RUFDRSxjQUFjLEVBQUE7RUFEaEI7SUFJSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtJQU5uQjtNQVNNLFdBQVc7TUFDWCw4Q0FBOEMsRUFBQTtJQVZwRDtNQWNNLE9BQU87TUFDUCw0Q0FBNEMsRUFBQTs7QUYrQnBEO0VBRU0sWUFBWTtFQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJBcHAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDaXNjbyBTeXN0ZW1zLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuQGltcG9ydCBcIi4vVGFibGVTdHlsZXNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kLXByaW1hcnktYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tZC1wcmltYXJ5LXRleHQtY29sb3IpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgPiBjdXN0b21lci1zdW1tYXJ5IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuICAgIFxuICAgICYuY29tcGFjdCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgPiBjdXN0b21lci1zdW1tYXJ5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICAgICAgfVxuXG4gICAgICAgID4gY3VzdG9tZXItdmlzaXRzIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSB0YWJsZVxuXG4uY29tcGFjdCB7XG4gICAgdGFibGUge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENpc2NvIFN5c3RlbXMsIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWQtcHJpbWFyeS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tZC1wcmltYXJ5LXRleHQtY29sb3IpOyB9XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7IH1cbiAgLmNvbnRhaW5lciA+IGN1c3RvbWVyLXN1bW1hcnkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE2KTsgfVxuICAuY29udGFpbmVyLmNvbXBhY3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAuY29udGFpbmVyLmNvbXBhY3QgPiBjdXN0b21lci1zdW1tYXJ5IHtcbiAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGhlaWdodDogMjByZW07XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE4KTsgfVxuICAgIC5jb250YWluZXIuY29tcGFjdCA+IGN1c3RvbWVyLXZpc2l0cyB7XG4gICAgICB3aWR0aDogYXV0bzsgfVxuXG50YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG4gIHRhYmxlIHRyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogOHB4OyB9XG4gICAgdGFibGUgdHIgLnRpdGxlIHtcbiAgICAgIHdpZHRoOiA3cmVtO1xuICAgICAgY29sb3I6IHZhcigtLW1kLXNlY29uZGFyeS10ZXh0LWNvbG9yLCAjNTQ1NDU0KTsgfVxuICAgIHRhYmxlIHRyIC52YWx1ZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgY29sb3I6IHZhcigtLW1kLXByaW1hcnktdGV4dC1jb2xvciwgIzEyMTIxMik7IH1cblxuLmNvbXBhY3QgdGFibGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG4iLCJAbWl4aW4gdGFibGUge1xuICB0YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIFxuICAgIHRyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICBcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIHdpZHRoOiA3cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWQtc2Vjb25kYXJ5LXRleHQtY29sb3IsICM1NDU0NTQpO1xuICAgICAgfVxuICBcbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tZC1wcmltYXJ5LXRleHQtY29sb3IsICMxMjEyMTIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */`);
    

/***/ }),

/***/ "./src/components/Summary.scss":
/*!*************************************!*\
  !*** ./src/components/Summary.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

           
        /* harmony default export */ __webpack_exports__["default"] = (lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
:host {
  /* Font Size */
  --font-size-small: 12px;
  --font-size-medium: 14px;
  --font-size-large: 16px;
  /* Spacing tokens */
  --space-token-cardinal: 5px;
  --space-token-even: 2px;
  --space-error-input: 4px 8px;
  /* Heights */
  --error-input-height: 32px;
  /* Font Weight */
  --font-weight-lite: 300;
  /* Font family */
  --font-family: "CiscoSansTT Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-light: "CiscoSansTT Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
  /* Colors */
  --light-green-color: #44cf50;
  --color-gray-70: #545454;
  --color-link: #00a0d1;
  --color-error-detail: #535759;
  --color-gray-border: #ccc;
  --color-error-text: #a12512;
  --color-count-notifications: #fff;
  --visits-line-color: #dedede;
  --avatar-border-color: #07c1e4;
  /* Border radius */
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-radius-large: 12px;
  --border-radius-circle: 100%;
  /* Animation */
  --ease-in-out-quint: cubic-bezier(0.83, 0, 0.17, 1);
  --default-animation-duration: 300ms;
  --quick-animation-duration: 150ms;
  /* Box shadow */
  --box-shadow: 0 0 4px 2px rgba(0, 160, 209, 0.75); }

.summary-container {
  box-sizing: border-box;
  padding: 1rem;
  height: 100%;
  font-size: 0.75rem;
  min-width: 19.5rem;
  display: flex;
  flex-direction: column; }

.cust-info-header {
  display: grid;
  gap: 0px 1rem;
  grid-auto-columns: max-content;
  grid-template-areas: "avatar h1 h1 h1" "avatar age age age" "avatar phone phone phone"; }
  .cust-info-header md-avatar {
    grid-area: avatar;
    align-self: center; }
  .cust-info-header h1 {
    font-size: 0.875rem;
    grid-area: h1;
    margin: 0; }
  .cust-info-header div.age-gender {
    grid-area: age;
    color: var(--md-secondary-text-color, #545454); }
  .cust-info-header div.phone {
    grid-area: phone;
    color: var(--md-secondary-text-color, #545454); }

md-avatar::part(avatar) {
  width: 3.75rem;
  height: 3.75rem;
  border: 2px solid var(--avatar-border-color, #07c1e4);
  border-radius: 100%; }

md-badge::part(badge) {
  margin: 1rem 0;
  border-radius: 0.25rem; }

md-button {
  margin: 0.5rem 0; }

/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/CRM/src/components/Summary.scss */
/*# sourceURL=Summary.scss */
/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/CRM/src/assets/styles/variables.scss */
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb21lcmFqL0RvY3VtZW50cy9jaXNjby93ZWJleC1jYy9zb3VyY2Vjb2RlL3dlYmV4LWNvbnRhY3QtY2VudGVyLXdpZGdldC1zdGFydGVyL0V4YW1wbGVzL1dpZGdldHMvQ1JNL3NyYy9jb21wb25lbnRzL1N1bW1hcnkuc2NzcyIsIlN1bW1hcnkuc2NzcyIsIi9Vc2Vycy9tb21lcmFqL0RvY3VtZW50cy9jaXNjby93ZWJleC1jYy9zb3VyY2Vjb2RlL3dlYmV4LWNvbnRhY3QtY2VudGVyLXdpZGdldC1zdGFydGVyL0V4YW1wbGVzL1dpZGdldHMvQ1JNL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUNNRTtBQ05GOzs7Ozs7RURhRTtBQ0xGO0VBQ0UsY0FBQTtFQUNBLHVCQUFrQjtFQUNsQix3QkFBbUI7RUFDbkIsdUJBQWtCO0VBRWxCLG1CQUFBO0VBQ0EsMkJBQXVCO0VBQ3ZCLHVCQUFtQjtFQUNuQiw0QkFBb0I7RUFFcEIsWUFBQTtFQUNBLDBCQUFxQjtFQUVyQixnQkFBQTtFQUNBLHVCQUFtQjtFQUVuQixnQkFBQTtFQUNBLG9GQUFjO0VBQ2Qsd0ZBQW9CO0VBRXBCLFdBQUE7RUFDQSw0QkFBb0I7RUFDcEIsd0JBQWdCO0VBQ2hCLHFCQUFhO0VBQ2IsNkJBQXFCO0VBQ3JCLHlCQUFvQjtFQUNwQiwyQkFBbUI7RUFDbkIsaUNBQTRCO0VBQzVCLDRCQUFvQjtFQUNwQiw4QkFBc0I7RUFFdEIsa0JBQUE7RUFDQSwwQkFBc0I7RUFDdEIsMkJBQXVCO0VBQ3ZCLDJCQUFzQjtFQUN0Qiw0QkFBdUI7RUFFdkIsY0FBQTtFQUNBLG1EQUFvQjtFQUNwQixtQ0FBNkI7RUFDN0IsaUNBQTJCO0VBRTNCLGVBQUE7RUFDQSxpREFBYSxFQUFBOztBRjFDZjtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNGQUc0QixFQUFBO0VBUDlCO0lBU0ksaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBVnRCO0lBYUksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTLEVBQUE7RUFmYjtJQWtCSSxjQUFjO0lBQ2QsOENBQThDLEVBQUE7RUFuQmxEO0lBc0JJLGdCQUFnQjtJQUNoQiw4Q0FBOEMsRUFBQTs7QUFJbEQ7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFEQUFxRDtFQUNyRCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoiU3VtbWFyeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENpc2NvIFN5c3RlbXMsIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuQGltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi9UYWJsZVN0eWxlc1wiO1xuXG4uc3VtbWFyeS1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWluLXdpZHRoOiAxOS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY3VzdC1pbmZvLWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMHB4IDFyZW07XG4gIGdyaWQtYXV0by1jb2x1bW5zOiBtYXgtY29udGVudDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImF2YXRhciBoMSBoMSBoMVwiXG4gICAgXCJhdmF0YXIgYWdlIGFnZSBhZ2VcIlxuICAgIFwiYXZhdGFyIHBob25lIHBob25lIHBob25lXCI7XG4gIG1kLWF2YXRhciB7XG4gICAgZ3JpZC1hcmVhOiBhdmF0YXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGdyaWQtYXJlYTogaDE7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGRpdi5hZ2UtZ2VuZGVyIHtcbiAgICBncmlkLWFyZWE6IGFnZTtcbiAgICBjb2xvcjogdmFyKC0tbWQtc2Vjb25kYXJ5LXRleHQtY29sb3IsICM1NDU0NTQpO1xuICB9XG4gIGRpdi5waG9uZSB7XG4gICAgZ3JpZC1hcmVhOiBwaG9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWQtc2Vjb25kYXJ5LXRleHQtY29sb3IsICM1NDU0NTQpO1xuICB9XG59XG5cbm1kLWF2YXRhcjo6cGFydChhdmF0YXIpIHtcbiAgd2lkdGg6IDMuNzVyZW07XG4gIGhlaWdodDogMy43NXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYXZhdGFyLWJvcmRlci1jb2xvciwgIzA3YzFlNCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbm1kLWJhZGdlOjpwYXJ0KGJhZGdlKSB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5tZC1idXR0b24ge1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENpc2NvIFN5c3RlbXMsIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENpc2NvIFN5c3RlbXMsIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuOmhvc3Qge1xuICAvKiBGb250IFNpemUgKi9cbiAgLS1mb250LXNpemUtc21hbGw6IDEycHg7XG4gIC0tZm9udC1zaXplLW1lZGl1bTogMTRweDtcbiAgLS1mb250LXNpemUtbGFyZ2U6IDE2cHg7XG4gIC8qIFNwYWNpbmcgdG9rZW5zICovXG4gIC0tc3BhY2UtdG9rZW4tY2FyZGluYWw6IDVweDtcbiAgLS1zcGFjZS10b2tlbi1ldmVuOiAycHg7XG4gIC0tc3BhY2UtZXJyb3ItaW5wdXQ6IDRweCA4cHg7XG4gIC8qIEhlaWdodHMgKi9cbiAgLS1lcnJvci1pbnB1dC1oZWlnaHQ6IDMycHg7XG4gIC8qIEZvbnQgV2VpZ2h0ICovXG4gIC0tZm9udC13ZWlnaHQtbGl0ZTogMzAwO1xuICAvKiBGb250IGZhbWlseSAqL1xuICAtLWZvbnQtZmFtaWx5OiBcIkNpc2NvU2Fuc1RUIFJlZ3VsYXJcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtZmFtaWx5LWxpZ2h0OiBcIkNpc2NvU2Fuc1RUIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLyogQ29sb3JzICovXG4gIC0tbGlnaHQtZ3JlZW4tY29sb3I6ICM0NGNmNTA7XG4gIC0tY29sb3ItZ3JheS03MDogIzU0NTQ1NDtcbiAgLS1jb2xvci1saW5rOiAjMDBhMGQxO1xuICAtLWNvbG9yLWVycm9yLWRldGFpbDogIzUzNTc1OTtcbiAgLS1jb2xvci1ncmF5LWJvcmRlcjogI2NjYztcbiAgLS1jb2xvci1lcnJvci10ZXh0OiAjYTEyNTEyO1xuICAtLWNvbG9yLWNvdW50LW5vdGlmaWNhdGlvbnM6ICNmZmY7XG4gIC0tdmlzaXRzLWxpbmUtY29sb3I6ICNkZWRlZGU7XG4gIC0tYXZhdGFyLWJvcmRlci1jb2xvcjogIzA3YzFlNDtcbiAgLyogQm9yZGVyIHJhZGl1cyAqL1xuICAtLWJvcmRlci1yYWRpdXMtc21hbGw6IDRweDtcbiAgLS1ib3JkZXItcmFkaXVzLW1lZGl1bTogOHB4O1xuICAtLWJvcmRlci1yYWRpdXMtbGFyZ2U6IDEycHg7XG4gIC0tYm9yZGVyLXJhZGl1cy1jaXJjbGU6IDEwMCU7XG4gIC8qIEFuaW1hdGlvbiAqL1xuICAtLWVhc2UtaW4tb3V0LXF1aW50OiBjdWJpYy1iZXppZXIoMC44MywgMCwgMC4xNywgMSk7XG4gIC0tZGVmYXVsdC1hbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAtLXF1aWNrLWFuaW1hdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIC8qIEJveCBzaGFkb3cgKi9cbiAgLS1ib3gtc2hhZG93OiAwIDAgNHB4IDJweCByZ2JhKDAsIDE2MCwgMjA5LCAwLjc1KTsgfVxuXG4uc3VtbWFyeS1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWluLXdpZHRoOiAxOS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5jdXN0LWluZm8taGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwcHggMXJlbTtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImF2YXRhciBoMSBoMSBoMVwiIFwiYXZhdGFyIGFnZSBhZ2UgYWdlXCIgXCJhdmF0YXIgcGhvbmUgcGhvbmUgcGhvbmVcIjsgfVxuICAuY3VzdC1pbmZvLWhlYWRlciBtZC1hdmF0YXIge1xuICAgIGdyaWQtYXJlYTogYXZhdGFyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxuICAuY3VzdC1pbmZvLWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBncmlkLWFyZWE6IGgxO1xuICAgIG1hcmdpbjogMDsgfVxuICAuY3VzdC1pbmZvLWhlYWRlciBkaXYuYWdlLWdlbmRlciB7XG4gICAgZ3JpZC1hcmVhOiBhZ2U7XG4gICAgY29sb3I6IHZhcigtLW1kLXNlY29uZGFyeS10ZXh0LWNvbG9yLCAjNTQ1NDU0KTsgfVxuICAuY3VzdC1pbmZvLWhlYWRlciBkaXYucGhvbmUge1xuICAgIGdyaWQtYXJlYTogcGhvbmU7XG4gICAgY29sb3I6IHZhcigtLW1kLXNlY29uZGFyeS10ZXh0LWNvbG9yLCAjNTQ1NDU0KTsgfVxuXG5tZC1hdmF0YXI6OnBhcnQoYXZhdGFyKSB7XG4gIHdpZHRoOiAzLjc1cmVtO1xuICBoZWlnaHQ6IDMuNzVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWF2YXRhci1ib3JkZXItY29sb3IsICMwN2MxZTQpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlOyB9XG5cbm1kLWJhZGdlOjpwYXJ0KGJhZGdlKSB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB9XG5cbm1kLWJ1dHRvbiB7XG4gIG1hcmdpbjogMC41cmVtIDA7IH1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBDaXNjbyBTeXN0ZW1zLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbiBcbjpob3N0IHtcbiAgLyogRm9udCBTaXplICovXG4gIC0tZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuICAtLWZvbnQtc2l6ZS1tZWRpdW06IDE0cHg7XG4gIC0tZm9udC1zaXplLWxhcmdlOiAxNnB4O1xuXG4gIC8qIFNwYWNpbmcgdG9rZW5zICovXG4gIC0tc3BhY2UtdG9rZW4tY2FyZGluYWw6IDVweDtcbiAgLS1zcGFjZS10b2tlbi1ldmVuOiAycHg7XG4gIC0tc3BhY2UtZXJyb3ItaW5wdXQ6IDRweCA4cHg7XG5cbiAgLyogSGVpZ2h0cyAqL1xuICAtLWVycm9yLWlucHV0LWhlaWdodDogMzJweDtcblxuICAvKiBGb250IFdlaWdodCAqL1xuICAtLWZvbnQtd2VpZ2h0LWxpdGU6IDMwMDtcblxuICAvKiBGb250IGZhbWlseSAqL1xuICAtLWZvbnQtZmFtaWx5OiBcIkNpc2NvU2Fuc1RUIFJlZ3VsYXJcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtZmFtaWx5LWxpZ2h0OiBcIkNpc2NvU2Fuc1RUIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuICAvKiBDb2xvcnMgKi9cbiAgLS1saWdodC1ncmVlbi1jb2xvcjogIzQ0Y2Y1MDtcbiAgLS1jb2xvci1ncmF5LTcwOiAjNTQ1NDU0O1xuICAtLWNvbG9yLWxpbms6ICMwMGEwZDE7XG4gIC0tY29sb3ItZXJyb3ItZGV0YWlsOiAjNTM1NzU5O1xuICAtLWNvbG9yLWdyYXktYm9yZGVyOiAjY2NjO1xuICAtLWNvbG9yLWVycm9yLXRleHQ6ICNhMTI1MTI7XG4gIC0tY29sb3ItY291bnQtbm90aWZpY2F0aW9uczogI2ZmZjtcbiAgLS12aXNpdHMtbGluZS1jb2xvcjogI2RlZGVkZTtcbiAgLS1hdmF0YXItYm9yZGVyLWNvbG9yOiAjMDdjMWU0O1xuXG4gIC8qIEJvcmRlciByYWRpdXMgKi9cbiAgLS1ib3JkZXItcmFkaXVzLXNtYWxsOiA0cHg7XG4gIC0tYm9yZGVyLXJhZGl1cy1tZWRpdW06IDhweDtcbiAgLS1ib3JkZXItcmFkaXVzLWxhcmdlOiAxMnB4O1xuICAtLWJvcmRlci1yYWRpdXMtY2lyY2xlOiAxMDAlO1xuXG4gIC8qIEFuaW1hdGlvbiAqL1xuICAtLWVhc2UtaW4tb3V0LXF1aW50OiBjdWJpYy1iZXppZXIoMC44MywgMCwgMC4xNywgMSk7XG4gIC0tZGVmYXVsdC1hbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAtLXF1aWNrLWFuaW1hdGlvbi1kdXJhdGlvbjogMTUwbXM7XG5cbiAgLyogQm94IHNoYWRvdyAqL1xuICAtLWJveC1zaGFkb3c6IDAgMCA0cHggMnB4IHJnYmEoMCwgMTYwLCAyMDksIDAuNzUpO1xufVxuIl19 */`);
    

/***/ }),

/***/ "./src/components/Summary.ts":
/*!***********************************!*\
  !*** ./src/components/Summary.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _Summary_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Summary.scss */ "./src/components/Summary.scss");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let CustomerSummary = class CustomerSummary extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.compact = false;
    }
    get resizeClassMap() {
        return {
            compact: this.compact
        };
    }
    getValue(search) {
        var _a;
        let value;
        const result = (_a = this.customerData) === null || _a === void 0 ? void 0 : _a.filter(x => x.label === search);
        value = result[0].value;
        return value;
    }
    static get styles() {
        return _Summary_scss__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="summary-container" part="summary">
        <section class="cust-info-header">
          <md-avatar
            src=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.getValue("Picture"))}
            size="56"
          ></md-avatar>
          <h1>${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.getValue("Name"))}</h1>
          <div class="age-gender">
            ${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.getValue("Age"))} years old,
            ${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.getValue("Gender"))}
          </div>
          <div class="phone">
            <md-icon name="icon-audio-call_14" size="10"></md-icon>
            ${this.phoneNumber || Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.getValue("Phone"))}
          </div>
        </section>

        <md-badge small color="green" pill="false"
          >MRN# ${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.getValue("MRN"))}</md-badge
        >
        <slot class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])(this.resizeClassMap)}"></slot>
      </div>
    `;
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], CustomerSummary.prototype, "compact", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String, attribute: "phone-number" })
], CustomerSummary.prototype, "phoneNumber", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object, attribute: false })
], CustomerSummary.prototype, "customerData", void 0);
CustomerSummary = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("customer-summary")
], CustomerSummary);
/* harmony default export */ __webpack_exports__["default"] = (CustomerSummary);


/***/ }),

/***/ "./src/components/VisitBadge.scss":
/*!****************************************!*\
  !*** ./src/components/VisitBadge.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

           
        /* harmony default export */ __webpack_exports__["default"] = (lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
:host {
  /* Font Size */
  --font-size-small: 12px;
  --font-size-medium: 14px;
  --font-size-large: 16px;
  /* Spacing tokens */
  --space-token-cardinal: 5px;
  --space-token-even: 2px;
  --space-error-input: 4px 8px;
  /* Heights */
  --error-input-height: 32px;
  /* Font Weight */
  --font-weight-lite: 300;
  /* Font family */
  --font-family: "CiscoSansTT Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-light: "CiscoSansTT Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
  /* Colors */
  --light-green-color: #44cf50;
  --color-gray-70: #545454;
  --color-link: #00a0d1;
  --color-error-detail: #535759;
  --color-gray-border: #ccc;
  --color-error-text: #a12512;
  --color-count-notifications: #fff;
  --visits-line-color: #dedede;
  --avatar-border-color: #07c1e4;
  /* Border radius */
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-radius-large: 12px;
  --border-radius-circle: 100%;
  /* Animation */
  --ease-in-out-quint: cubic-bezier(0.83, 0, 0.17, 1);
  --default-animation-duration: 300ms;
  --quick-animation-duration: 150ms;
  /* Box shadow */
  --box-shadow: 0 0 4px 2px rgba(0, 160, 209, 0.75); }

:host {
  width: 100vw; }

.menu-trigger::part(button) {
  padding: 0;
  height: 100%; }

.mock-badge {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--md-primary-text-color, #777);
  background-color: var(--md-primary-bg-color, #fff);
  border-radius: 1.5rem;
  padding: 0.25rem 1rem 0.25rem 0;
  height: 1rem;
  white-space: nowrap;
  font-size: 0.625rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.18);
  z-index: 1;
  cursor: pointer; }
  .mock-badge:hover {
    background-color: var(--badge-cyan-bg-color, #e6fbff); }
  .mock-badge span {
    display: inline-flex;
    align-items: center; }
  .mock-badge .split-separator {
    margin: 0 0.25rem; }

md-menu-overlay::part(overlay-content) {
  width: 16.5rem; }

.visit-overlay-content {
  display: flex;
  flex-direction: column;
  width: 100%; }

.visit-details-header {
  border-bottom: 1px solid var(--color-gray-border, #cccccc);
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start; }
  .visit-details-header:nth-child(2) {
    width: 80%;
    text-align: start; }
  .visit-details-header h2,
  .visit-details-header h3 {
    margin: 0; }
  .visit-details-header h2 {
    font-size: 0.875rem; }
  .visit-details-header h3 {
    font-size: 0.625rem;
    font-weight: lighter;
    color: var(--primary-text-color, #777); }

.visit-details-content {
  padding: 1rem; }

table {
  display: block; }
  table tr {
    display: flex;
    flex-direction: row;
    margin-top: 8px; }
    table tr .title {
      width: 7rem;
      color: var(--md-secondary-text-color, #545454); }
    table tr .value {
      flex: 1;
      color: var(--md-primary-text-color, #121212); }

/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/CRM/src/components/VisitBadge.scss */
/*# sourceURL=VisitBadge.scss */
/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/CRM/src/assets/styles/variables.scss */
/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/CRM/src/components/TableStyles.scss */
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb21lcmFqL0RvY3VtZW50cy9jaXNjby93ZWJleC1jYy9zb3VyY2Vjb2RlL3dlYmV4LWNvbnRhY3QtY2VudGVyLXdpZGdldC1zdGFydGVyL0V4YW1wbGVzL1dpZGdldHMvQ1JNL3NyYy9jb21wb25lbnRzL1Zpc2l0QmFkZ2Uuc2NzcyIsIlZpc2l0QmFkZ2Uuc2NzcyIsIi9Vc2Vycy9tb21lcmFqL0RvY3VtZW50cy9jaXNjby93ZWJleC1jYy9zb3VyY2Vjb2RlL3dlYmV4LWNvbnRhY3QtY2VudGVyLXdpZGdldC1zdGFydGVyL0V4YW1wbGVzL1dpZGdldHMvQ1JNL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL21vbWVyYWovRG9jdW1lbnRzL2Npc2NvL3dlYmV4LWNjL3NvdXJjZWNvZGUvd2ViZXgtY29udGFjdC1jZW50ZXItd2lkZ2V0LXN0YXJ0ZXIvRXhhbXBsZXMvV2lkZ2V0cy9DUk0vc3JjL2NvbXBvbmVudHMvVGFibGVTdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VDTUU7QUNORjs7Ozs7O0VEYUU7QUNMRjtFQUNFLGNBQUE7RUFDQSx1QkFBa0I7RUFDbEIsd0JBQW1CO0VBQ25CLHVCQUFrQjtFQUVsQixtQkFBQTtFQUNBLDJCQUF1QjtFQUN2Qix1QkFBbUI7RUFDbkIsNEJBQW9CO0VBRXBCLFlBQUE7RUFDQSwwQkFBcUI7RUFFckIsZ0JBQUE7RUFDQSx1QkFBbUI7RUFFbkIsZ0JBQUE7RUFDQSxvRkFBYztFQUNkLHdGQUFvQjtFQUVwQixXQUFBO0VBQ0EsNEJBQW9CO0VBQ3BCLHdCQUFnQjtFQUNoQixxQkFBYTtFQUNiLDZCQUFxQjtFQUNyQix5QkFBb0I7RUFDcEIsMkJBQW1CO0VBQ25CLGlDQUE0QjtFQUM1Qiw0QkFBb0I7RUFDcEIsOEJBQXNCO0VBRXRCLGtCQUFBO0VBQ0EsMEJBQXNCO0VBQ3RCLDJCQUF1QjtFQUN2QiwyQkFBc0I7RUFDdEIsNEJBQXVCO0VBRXZCLGNBQUE7RUFDQSxtREFBb0I7RUFDcEIsbUNBQTZCO0VBQzdCLGlDQUEyQjtFQUUzQixlQUFBO0VBQ0EsaURBQWEsRUFBQTs7QUZ4Q2Y7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGtEQUFrRDtFQUNsRCxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDRFQUE0RTtFQUM1RSxVQUFVO0VBQ1YsZUFBZSxFQUFBO0VBYmpCO0lBZ0JJLHFEQUFxRCxFQUFBO0VBaEJ6RDtJQW1CSSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUE7RUFwQnZCO0lBdUJJLGlCQUFpQixFQUFBOztBQUlyQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDBEQUEwRDtFQUMxRCxhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix1QkFBdUIsRUFBQTtFQUx6QjtJQVFJLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQVRyQjs7SUFjSSxTQUFTLEVBQUE7RUFkYjtJQWtCSSxtQkFBbUIsRUFBQTtFQWxCdkI7SUFzQkksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixzQ0FBc0MsRUFBQTs7QUFJMUM7RUFDRSxhQUFhLEVBQUE7O0FHdEZiO0VBQ0UsY0FBYyxFQUFBO0VBRGhCO0lBSUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7SUFObkI7TUFTTSxXQUFXO01BQ1gsOENBQThDLEVBQUE7SUFWcEQ7TUFjTSxPQUFPO01BQ1AsNENBQTRDLEVBQUEiLCJmaWxlIjoiVmlzaXRCYWRnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENpc2NvIFN5c3RlbXMsIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG5AaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuQGltcG9ydCBcIi4vVGFibGVTdHlsZXNcIjtcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5tZW51LXRyaWdnZXI6OnBhcnQoYnV0dG9uKSB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vY2stYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1tZC1wcmltYXJ5LXRleHQtY29sb3IsICM3NzcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZC1wcmltYXJ5LWJnLWNvbG9yLCAjZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gMC4yNXJlbSAwO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWRnZS1jeWFuLWJnLWNvbG9yLCAjZTZmYmZmKTtcbiAgfVxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zcGxpdC1zZXBhcmF0b3Ige1xuICAgIG1hcmdpbjogMCAwLjI1cmVtO1xuICB9XG59XG5cbm1kLW1lbnUtb3ZlcmxheTo6cGFydChvdmVybGF5LWNvbnRlbnQpIHtcbiAgd2lkdGg6IDE2LjVyZW07XG59XG5cbi52aXNpdC1vdmVybGF5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZpc2l0LWRldGFpbHMtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktYm9yZGVyLCAjY2NjY2NjKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG5cbiAgaDIsXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDAuNjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IsICM3NzcpO1xuICB9XG59XG5cbi52aXNpdC1kZXRhaWxzLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5AaW5jbHVkZSB0YWJsZTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBDaXNjbyBTeXN0ZW1zLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbi8qKlxuICogQ29weXJpZ2h0IChjKSBDaXNjbyBTeXN0ZW1zLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbjpob3N0IHtcbiAgLyogRm9udCBTaXplICovXG4gIC0tZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuICAtLWZvbnQtc2l6ZS1tZWRpdW06IDE0cHg7XG4gIC0tZm9udC1zaXplLWxhcmdlOiAxNnB4O1xuICAvKiBTcGFjaW5nIHRva2VucyAqL1xuICAtLXNwYWNlLXRva2VuLWNhcmRpbmFsOiA1cHg7XG4gIC0tc3BhY2UtdG9rZW4tZXZlbjogMnB4O1xuICAtLXNwYWNlLWVycm9yLWlucHV0OiA0cHggOHB4O1xuICAvKiBIZWlnaHRzICovXG4gIC0tZXJyb3ItaW5wdXQtaGVpZ2h0OiAzMnB4O1xuICAvKiBGb250IFdlaWdodCAqL1xuICAtLWZvbnQtd2VpZ2h0LWxpdGU6IDMwMDtcbiAgLyogRm9udCBmYW1pbHkgKi9cbiAgLS1mb250LWZhbWlseTogXCJDaXNjb1NhbnNUVCBSZWd1bGFyXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLS1mb250LWZhbWlseS1saWdodDogXCJDaXNjb1NhbnNUVCBMaWdodFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC8qIENvbG9ycyAqL1xuICAtLWxpZ2h0LWdyZWVuLWNvbG9yOiAjNDRjZjUwO1xuICAtLWNvbG9yLWdyYXktNzA6ICM1NDU0NTQ7XG4gIC0tY29sb3ItbGluazogIzAwYTBkMTtcbiAgLS1jb2xvci1lcnJvci1kZXRhaWw6ICM1MzU3NTk7XG4gIC0tY29sb3ItZ3JheS1ib3JkZXI6ICNjY2M7XG4gIC0tY29sb3ItZXJyb3ItdGV4dDogI2ExMjUxMjtcbiAgLS1jb2xvci1jb3VudC1ub3RpZmljYXRpb25zOiAjZmZmO1xuICAtLXZpc2l0cy1saW5lLWNvbG9yOiAjZGVkZWRlO1xuICAtLWF2YXRhci1ib3JkZXItY29sb3I6ICMwN2MxZTQ7XG4gIC8qIEJvcmRlciByYWRpdXMgKi9cbiAgLS1ib3JkZXItcmFkaXVzLXNtYWxsOiA0cHg7XG4gIC0tYm9yZGVyLXJhZGl1cy1tZWRpdW06IDhweDtcbiAgLS1ib3JkZXItcmFkaXVzLWxhcmdlOiAxMnB4O1xuICAtLWJvcmRlci1yYWRpdXMtY2lyY2xlOiAxMDAlO1xuICAvKiBBbmltYXRpb24gKi9cbiAgLS1lYXNlLWluLW91dC1xdWludDogY3ViaWMtYmV6aWVyKDAuODMsIDAsIDAuMTcsIDEpO1xuICAtLWRlZmF1bHQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgLS1xdWljay1hbmltYXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAvKiBCb3ggc2hhZG93ICovXG4gIC0tYm94LXNoYWRvdzogMCAwIDRweCAycHggcmdiYSgwLCAxNjAsIDIwOSwgMC43NSk7IH1cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7IH1cblxuLm1lbnUtdHJpZ2dlcjo6cGFydChidXR0b24pIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5tb2NrLWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tbWQtcHJpbWFyeS10ZXh0LWNvbG9yLCAjNzc3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWQtcHJpbWFyeS1iZy1jb2xvciwgI2ZmZik7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtIDAuMjVyZW0gMDtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDAuNjI1cmVtO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLm1vY2stYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhZGdlLWN5YW4tYmctY29sb3IsICNlNmZiZmYpOyB9XG4gIC5tb2NrLWJhZGdlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLm1vY2stYmFkZ2UgLnNwbGl0LXNlcGFyYXRvciB7XG4gICAgbWFyZ2luOiAwIDAuMjVyZW07IH1cblxubWQtbWVudS1vdmVybGF5OjpwYXJ0KG92ZXJsYXktY29udGVudCkge1xuICB3aWR0aDogMTYuNXJlbTsgfVxuXG4udmlzaXQtb3ZlcmxheS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnZpc2l0LWRldGFpbHMtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktYm9yZGVyLCAjY2NjY2NjKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gIC52aXNpdC1kZXRhaWxzLWhlYWRlcjpudGgtY2hpbGQoMikge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7IH1cbiAgLnZpc2l0LWRldGFpbHMtaGVhZGVyIGgyLFxuICAudmlzaXQtZGV0YWlscy1oZWFkZXIgaDMge1xuICAgIG1hcmdpbjogMDsgfVxuICAudmlzaXQtZGV0YWlscy1oZWFkZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07IH1cbiAgLnZpc2l0LWRldGFpbHMtaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDAuNjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IsICM3NzcpOyB9XG5cbi52aXNpdC1kZXRhaWxzLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtOyB9XG5cbnRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cbiAgdGFibGUgdHIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgICB0YWJsZSB0ciAudGl0bGUge1xuICAgICAgd2lkdGg6IDdyZW07XG4gICAgICBjb2xvcjogdmFyKC0tbWQtc2Vjb25kYXJ5LXRleHQtY29sb3IsICM1NDU0NTQpOyB9XG4gICAgdGFibGUgdHIgLnZhbHVlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBjb2xvcjogdmFyKC0tbWQtcHJpbWFyeS10ZXh0LWNvbG9yLCAjMTIxMjEyKTsgfVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENpc2NvIFN5c3RlbXMsIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuIFxuOmhvc3Qge1xuICAvKiBGb250IFNpemUgKi9cbiAgLS1mb250LXNpemUtc21hbGw6IDEycHg7XG4gIC0tZm9udC1zaXplLW1lZGl1bTogMTRweDtcbiAgLS1mb250LXNpemUtbGFyZ2U6IDE2cHg7XG5cbiAgLyogU3BhY2luZyB0b2tlbnMgKi9cbiAgLS1zcGFjZS10b2tlbi1jYXJkaW5hbDogNXB4O1xuICAtLXNwYWNlLXRva2VuLWV2ZW46IDJweDtcbiAgLS1zcGFjZS1lcnJvci1pbnB1dDogNHB4IDhweDtcblxuICAvKiBIZWlnaHRzICovXG4gIC0tZXJyb3ItaW5wdXQtaGVpZ2h0OiAzMnB4O1xuXG4gIC8qIEZvbnQgV2VpZ2h0ICovXG4gIC0tZm9udC13ZWlnaHQtbGl0ZTogMzAwO1xuXG4gIC8qIEZvbnQgZmFtaWx5ICovXG4gIC0tZm9udC1mYW1pbHk6IFwiQ2lzY29TYW5zVFQgUmVndWxhclwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1mYW1pbHktbGlnaHQ6IFwiQ2lzY29TYW5zVFQgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4gIC8qIENvbG9ycyAqL1xuICAtLWxpZ2h0LWdyZWVuLWNvbG9yOiAjNDRjZjUwO1xuICAtLWNvbG9yLWdyYXktNzA6ICM1NDU0NTQ7XG4gIC0tY29sb3ItbGluazogIzAwYTBkMTtcbiAgLS1jb2xvci1lcnJvci1kZXRhaWw6ICM1MzU3NTk7XG4gIC0tY29sb3ItZ3JheS1ib3JkZXI6ICNjY2M7XG4gIC0tY29sb3ItZXJyb3ItdGV4dDogI2ExMjUxMjtcbiAgLS1jb2xvci1jb3VudC1ub3RpZmljYXRpb25zOiAjZmZmO1xuICAtLXZpc2l0cy1saW5lLWNvbG9yOiAjZGVkZWRlO1xuICAtLWF2YXRhci1ib3JkZXItY29sb3I6ICMwN2MxZTQ7XG5cbiAgLyogQm9yZGVyIHJhZGl1cyAqL1xuICAtLWJvcmRlci1yYWRpdXMtc21hbGw6IDRweDtcbiAgLS1ib3JkZXItcmFkaXVzLW1lZGl1bTogOHB4O1xuICAtLWJvcmRlci1yYWRpdXMtbGFyZ2U6IDEycHg7XG4gIC0tYm9yZGVyLXJhZGl1cy1jaXJjbGU6IDEwMCU7XG5cbiAgLyogQW5pbWF0aW9uICovXG4gIC0tZWFzZS1pbi1vdXQtcXVpbnQ6IGN1YmljLWJlemllcigwLjgzLCAwLCAwLjE3LCAxKTtcbiAgLS1kZWZhdWx0LWFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIC0tcXVpY2stYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTBtcztcblxuICAvKiBCb3ggc2hhZG93ICovXG4gIC0tYm94LXNoYWRvdzogMCAwIDRweCAycHggcmdiYSgwLCAxNjAsIDIwOSwgMC43NSk7XG59XG4iLCJAbWl4aW4gdGFibGUge1xuICB0YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIFxuICAgIHRyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICBcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIHdpZHRoOiA3cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWQtc2Vjb25kYXJ5LXRleHQtY29sb3IsICM1NDU0NTQpO1xuICAgICAgfVxuICBcbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tZC1wcmltYXJ5LXRleHQtY29sb3IsICMxMjEyMTIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */`);
    

/***/ }),

/***/ "./src/components/VisitBadge.ts":
/*!**************************************!*\
  !*** ./src/components/VisitBadge.ts ***!
  \**************************************/
/*! exports provided: VisitTypeNames, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitTypeNames", function() { return VisitTypeNames; });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _VisitBadge_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisitBadge.scss */ "./src/components/VisitBadge.scss");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const VisitTypeNames = [
    "General Visit",
    "Follow-up Visit",
    "Full Body Checkup",
    "Medical Tests"
];
let VisitBadge = class VisitBadge extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this.o2Limit = 80;
        this.visitType = "General Visit";
        this.VISITTYPES = {
            "General Visit": { icon: "icon-document_12", color: "blue" },
            "Follow-up Visit": { icon: "icon-document_12", color: "violet" },
            "Full Body Checkup": { icon: "icon-file-locked_12", color: "orange" },
            "Medical Tests": { icon: "icon-document_12", color: "green" }
        };
        this.fixOverlayPosition = () => {
            const yCoord = this.menu.getBoundingClientRect().top;
            const xCoord = this.menu.getBoundingClientRect().left;
            this.menu.style.position = "fixed";
            this.menu.style.zIndex = "100";
            this.menu.style.top = yCoord.toString() + "px";
            this.menu.style.left = xCoord.toString() + "px";
        };
        this.matrixPosition = (date) => {
            const time = luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].fromISO(date).toLocal();
            const hour = time.hour;
            const day = time.ordinal;
            const formattedDate = time.toSQLDate();
            // this breaks hard-coded height of 400px into hour-sized chunks, & compensates for out-of-range hours and 33px baseline shift.
            const xPosition = (400 / 9) * (hour - 7) - 33;
            const yPosition = (100 / 365) * day;
            return [xPosition, yPosition, formattedDate];
        };
        this.getVisitIcon = () => {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <md-icon
        name=${this.VISITTYPES[this.visitType].icon}
        color="default"
      ></md-icon>
    `;
        };
        this.formatO2Stat = (stat) => {
            if (stat < this.o2Limit) {
                return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <span style="color: red; line-height: normal"
          >%${stat.toString()}<md-icon
            name="icon-warning_16"
            color="red"
            style="position:relative; bottom: -3px"
          ></md-icon
        ></span>
      `;
            }
            else {
                return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <span>%${stat.toString()}</span>
      `;
            }
        };
        this.handleKeydown = (e) => {
            if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                this.fixOverlayPosition();
            }
        };
        this.closeMenu = () => {
            this.menu ? (this.menu.isOpen = false) : null;
            this.menu.removeAttribute("style");
        };
        this.visitDetailsOverlay = (visit, formattedDate) => {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="visit-details-header">
        <md-badge small circle color=${this.VISITTYPES[this.visitType].color}>
          ${this.getVisitIcon()}
        </md-badge>
        <div>
          <h2>${visit.title}</h2>
          <h3>${formattedDate}</h3>
        </div>
        <div>
          <md-button
            hasremovestyle
            class="md-close md-modal__close"
            aria-label="Close Modal"
            @click=${this.closeMenu}
          >
            <md-icon name="cancel_14"></md-icon>
          </md-button>
        </div>
      </div>
      <div class="visit-details-content">
        <table>
          <tr>
            <td class="title">
              Facility
            </td>
            <td class="value">
              ${visit.facility}
            </td>
          </tr>
          <tr>
            <td class="title">
              Clinician
            </td>
            <td class="value">
              ${visit.clinician}
            </td>
          </tr>
          <tr>
            <td class="title">
              Department
            </td>
            <td class="value">
              <span>${visit.department}</span>
            </td>
          </tr>
          <tr>
            <td class="title">
              Condition
            </td>
            <td class="value">
              <span>${visit.condition}</span>
            </td>
          </tr>
          <tr>
            <td class="title">
              Type
            </td>
            <td class="value">
              <span>${visit.type}</span>
            </td>
          </tr>
          <tr>
            <td class="title">
              O2 Stat
            </td>
            <td class="value">
              ${this.formatO2Stat(visit.O2Stat)}
            </td>
          </tr>
        </table>
      </div>
    `;
        };
        this.renderVisitBadge = (visit) => {
            const [bottom, left, formattedDate] = this.matrixPosition(visit.date);
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div
        class="wrapper"
        style="position: absolute; bottom: ${bottom}px; left: ${left}%"
      >
        <md-menu-overlay
          @menu-overlay-close=${this.closeMenu}
          @menu-overlay-open=${this.fixOverlayPosition}
        >
          <md-button
            slot="menu-trigger"
            class="menu-trigger"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <md-tooltip message="${visit.title}" class="mock-badge">
              <span>
                <md-badge
                  circle
                  small
                  color=${this.VISITTYPES[this.visitType].color}
                  style="margin-right: .25rem"
                >
                  ${this.getVisitIcon()}
                </md-badge>
                ${visit.title}
                <span class="split-separator"> | </span>
                <span>
                  ${formattedDate}
                </span>
              </span>
            </md-tooltip>
          </md-button>
          <div class="visit-overlay-content">
            ${this.visitDetailsOverlay(visit, formattedDate)}
          </div>
        </md-menu-overlay>
      </div>
    `;
        };
    }
    connectedCallback() {
        var _a, _b;
        super.connectedCallback();
        ((_a = this.visit) === null || _a === void 0 ? void 0 : _a.type) ? this.visitType = (_b = this.visit) === null || _b === void 0 ? void 0 : _b.title : null;
    }
    static get styles() {
        return _VisitBadge_scss__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${this.visit ? this.renderVisitBadge(this.visit) : lit_html__WEBPACK_IMPORTED_MODULE_3__["nothing"]}
    `;
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Number, attribute: "o2-limit" })
], VisitBadge.prototype, "o2Limit", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: String, attribute: "visit-type" })
], VisitBadge.prototype, "visitType", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Object, attribute: false })
], VisitBadge.prototype, "visit", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("md-menu-overlay")
], VisitBadge.prototype, "menu", void 0);
VisitBadge = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("visit-badge")
], VisitBadge);
/* harmony default export */ __webpack_exports__["default"] = (VisitBadge);


/***/ }),

/***/ "./src/components/Visits.scss":
/*!************************************!*\
  !*** ./src/components/Visits.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

           
        /* harmony default export */ __webpack_exports__["default"] = (lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
:host {
  width: 100vw; }

.visits-container {
  padding: 1rem; }

.filters {
  display: flex;
  justify-content: space-between;
  align-items: baseline; }
  .filters md-combobox {
    flex-grow: 1;
    z-index: 100; }
  .filters md-badge {
    margin-left: 0.75rem;
    flex-grow: 2; }
    .filters md-badge::part(badge) {
      border-radius: 0.25rem; }
  .filters .more-actions {
    width: 3rem;
    display: flex;
    justify-content: space-between; }

.matrix-wrapper {
  position: relative;
  border-radius: 0.5rem;
  width: 100%;
  height: 25rem;
  overflow: auto; }

.visits-grid {
  font-size: 0.75rem;
  display: grid;
  grid-template-columns: 1fr 16fr;
  grid-template-rows: 10fr auto;
  gap: 0.6rem;
  grid-template-areas: "time grid" "year month";
  margin-top: 1rem; }

.visits-matrix {
  background-color: var(--md-secondary-bg-color, #f7f7f7);
  position: relative;
  width: 100%;
  height: 100%;
  grid-area: grid; }

.visits-matrix::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: repeating-linear-gradient(to right, transparent, transparent 3px, var(--md-secondary-bg-color, #f7f7f7) 3px, var(--md-secondary-bg-color, #f7f7f7) 7px), repeating-linear-gradient(to bottom, transparent, transparent 5.37%, var(--md-quaternary-bg-color, #dedede) 5.57%, var(--md-quaternary-bg-color, #dedede) 5.57%);
  z-index: 0; }

.visits-matrix::after {
  content: "";
  position: absolute;
  background-color: var(--md-secondary-bg-color, #f7f7f7);
  top: 0px;
  left: 100%;
  height: 100%;
  width: 50%; }

.time {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  grid-area: time; }

.months {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-area: month; }

.year {
  grid-area: year; }

.months-line {
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 1rem;
  margin: 1rem 0; }

div.month-line {
  background: var(--visits-line-color, #dedede);
  content: " ";
  display: flex;
  flex-grow: 1;
  height: 0.125rem;
  margin: 0;
  position: relative; }

div.month-line::before {
  background: var(--md-primary-bg-color, #f7f7f7);
  border: 2px solid var(--visits-line-color, #dedede);
  content: " ";
  border-radius: 50%;
  height: 0.625rem;
  width: 0.625rem;
  align-self: center;
  position: absolute; }

div.month-line:last-child {
  flex: 0 1 0; }

.month-names {
  display: flex;
  justify-content: space-between; }

/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/CRM/src/components/Visits.scss */
/*# sourceURL=Visits.scss */
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb21lcmFqL0RvY3VtZW50cy9jaXNjby93ZWJleC1jYy9zb3VyY2Vjb2RlL3dlYmV4LWNvbnRhY3QtY2VudGVyLXdpZGdldC1zdGFydGVyL0V4YW1wbGVzL1dpZGdldHMvQ1JNL3NyYy9jb21wb25lbnRzL1Zpc2l0cy5zY3NzIiwiVmlzaXRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQ01FO0FERUY7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQixFQUFBO0VBSHZCO0lBTUksWUFBWTtJQUNaLFlBQVksRUFBQTtFQVBoQjtJQVdJLG9CQUFvQjtJQUNwQixZQUFZLEVBQUE7SUFaaEI7TUFlTSxzQkFBc0IsRUFBQTtFQWY1QjtJQW9CSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QixFQUFBOztBQUlsQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCw2Q0FFYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHVEQUF1RDtFQUN2RCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFVQWFHO0VBQ0QsVUFBVSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1REFBdUQ7RUFDdkQsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsNkNBQTZDO0VBQzdDLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsK0NBQStDO0VBQy9DLG1EQUFtRDtFQUNuRCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYiw4QkFBOEIsRUFBQSIsImZpbGUiOiJWaXNpdHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDaXNjbyBTeXN0ZW1zLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi52aXNpdHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmZpbHRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblxuICBtZC1jb21ib2JveCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuXG4gIG1kLWJhZGdlIHtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICBmbGV4LWdyb3c6IDI7XG5cbiAgICAmOjpwYXJ0KGJhZGdlKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5tb3JlLWFjdGlvbnMge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG5cbi5tYXRyaXgtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi52aXNpdHMtZ3JpZCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTZmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMGZyIGF1dG87XG4gIGdhcDogMC42cmVtO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwidGltZSBncmlkXCJcbiAgICBcInllYXIgbW9udGhcIjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnZpc2l0cy1tYXRyaXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZC1zZWNvbmRhcnktYmctY29sb3IsICNmN2Y3ZjcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtYXJlYTogZ3JpZDtcbn1cblxuLnZpc2l0cy1tYXRyaXg6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICB0cmFuc3BhcmVudCAzcHgsXG4gICAgICB2YXIoLS1tZC1zZWNvbmRhcnktYmctY29sb3IsICNmN2Y3ZjcpIDNweCxcbiAgICAgIHZhcigtLW1kLXNlY29uZGFyeS1iZy1jb2xvciwgI2Y3ZjdmNykgN3B4XG4gICAgKSxcbiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gYm90dG9tLFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICB0cmFuc3BhcmVudCA1LjM3JSxcbiAgICAgIHZhcigtLW1kLXF1YXRlcm5hcnktYmctY29sb3IsICNkZWRlZGUpIDUuNTclLFxuICAgICAgdmFyKC0tbWQtcXVhdGVybmFyeS1iZy1jb2xvciwgI2RlZGVkZSkgNS41NyVcbiAgICApO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi52aXNpdHMtbWF0cml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWQtc2Vjb25kYXJ5LWJnLWNvbG9yLCAjZjdmN2Y3KTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBncmlkLWFyZWE6IHRpbWU7XG59XG5cbi5tb250aHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ3JpZC1hcmVhOiBtb250aDtcbn1cblxuLnllYXIge1xuICBncmlkLWFyZWE6IHllYXI7XG59XG5cbi5tb250aHMtbGluZSB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuZGl2Lm1vbnRoLWxpbmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12aXNpdHMtbGluZS1jb2xvciwgI2RlZGVkZSk7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMC4xMjVyZW07XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5kaXYubW9udGgtbGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWQtcHJpbWFyeS1iZy1jb2xvciwgI2Y3ZjdmNyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXZpc2l0cy1saW5lLWNvbG9yLCAjZGVkZWRlKTtcbiAgY29udGVudDogXCIgXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAwLjYyNXJlbTtcbiAgd2lkdGg6IDAuNjI1cmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2Lm1vbnRoLWxpbmU6bGFzdC1jaGlsZCB7XG4gIGZsZXg6IDAgMSAwO1xufVxuXG4ubW9udGgtbmFtZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgQ2lzY28gU3lzdGVtcywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDB2dzsgfVxuXG4udmlzaXRzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW07IH1cblxuLmZpbHRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgfVxuICAuZmlsdGVycyBtZC1jb21ib2JveCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHotaW5kZXg6IDEwMDsgfVxuICAuZmlsdGVycyBtZC1iYWRnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgZmxleC1ncm93OiAyOyB9XG4gICAgLmZpbHRlcnMgbWQtYmFkZ2U6OnBhcnQoYmFkZ2UpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cbiAgLmZpbHRlcnMgLm1vcmUtYWN0aW9ucyB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cblxuLm1hdHJpeC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cmVtO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4udmlzaXRzLWdyaWQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE2ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTBmciBhdXRvO1xuICBnYXA6IDAuNnJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0aW1lIGdyaWRcIiBcInllYXIgbW9udGhcIjtcbiAgbWFyZ2luLXRvcDogMXJlbTsgfVxuXG4udmlzaXRzLW1hdHJpeCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kLXNlY29uZGFyeS1iZy1jb2xvciwgI2Y3ZjdmNyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC1hcmVhOiBncmlkOyB9XG5cbi52aXNpdHMtbWF0cml4OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCAzcHgsIHZhcigtLW1kLXNlY29uZGFyeS1iZy1jb2xvciwgI2Y3ZjdmNykgM3B4LCB2YXIoLS1tZC1zZWNvbmRhcnktYmctY29sb3IsICNmN2Y3ZjcpIDdweCksIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQgNS4zNyUsIHZhcigtLW1kLXF1YXRlcm5hcnktYmctY29sb3IsICNkZWRlZGUpIDUuNTclLCB2YXIoLS1tZC1xdWF0ZXJuYXJ5LWJnLWNvbG9yLCAjZGVkZWRlKSA1LjU3JSk7XG4gIHotaW5kZXg6IDA7IH1cblxuLnZpc2l0cy1tYXRyaXg6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZC1zZWNvbmRhcnktYmctY29sb3IsICNmN2Y3ZjcpO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlOyB9XG5cbi50aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ3JpZC1hcmVhOiB0aW1lOyB9XG5cbi5tb250aHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ3JpZC1hcmVhOiBtb250aDsgfVxuXG4ueWVhciB7XG4gIGdyaWQtYXJlYTogeWVhcjsgfVxuXG4ubW9udGhzLWxpbmUge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7IH1cblxuZGl2Lm1vbnRoLWxpbmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12aXNpdHMtbGluZS1jb2xvciwgI2RlZGVkZSk7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMC4xMjVyZW07XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbmRpdi5tb250aC1saW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tZC1wcmltYXJ5LWJnLWNvbG9yLCAjZjdmN2Y3KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdmlzaXRzLWxpbmUtY29sb3IsICNkZWRlZGUpO1xuICBjb250ZW50OiBcIiBcIjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDAuNjI1cmVtO1xuICB3aWR0aDogMC42MjVyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbmRpdi5tb250aC1saW5lOmxhc3QtY2hpbGQge1xuICBmbGV4OiAwIDEgMDsgfVxuXG4ubW9udGgtbmFtZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiJdfQ== */`);
    

/***/ }),

/***/ "./src/components/Visits.ts":
/*!**********************************!*\
  !*** ./src/components/Visits.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _Visits_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Visits.scss */ "./src/components/Visits.scss");
/* harmony import */ var _VisitBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisitBadge */ "./src/components/VisitBadge.ts");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CustomerVisits = class CustomerVisits extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.filterSelection = undefined;
        this.generateTime = (i) => {
            if (typeof i === "number") {
                if (i >= 8 && i <= 16) {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
          <div class="time-of-day">
            ${String(i).padStart(2, "0")}:00
          </div>
        `;
                }
            }
            else if (typeof i === "undefined") {
                return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="month-line"></div>
      `;
            }
            else if (typeof i === "string") {
                return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="month">
          ${i}
        </div>
      `;
            }
        };
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        let visits = (_a = this.customerData) === null || _a === void 0 ? void 0 : _a.filter(i => i.type === "visits")[0];
        // @ts-ignore
        this.visits = visits.value;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("filterSelection")) {
            this.render();
        }
    }
    static get styles() {
        return _Visits_scss__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    render() {
        var _a, _b;
        const hours = [...Array(24).keys()];
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="visits-container" part="visits">
        <div class="filters">
          <md-combobox
            searchable
            .options=${_VisitBadge__WEBPACK_IMPORTED_MODULE_2__["VisitTypeNames"]}
            placeholder="Filter by Visit Type"
            allow-custom-value
            shape="pill"
            @change-selected=${(e) => {
            this.filterSelection = e.detail.value;
        }}
            @remove-all-selected=${() => {
            this.filterSelection = undefined;
        }}
          ></md-combobox>
          <md-badge color="violet" small
            >${(_a = this.visits) === null || _a === void 0 ? void 0 : _a.length} visits</md-badge
          >
          <div class="more-actions">
            <md-button hasRemoveStyle>
              <md-icon name="icon-filter_16"></md-icon>
            </md-button>
            <md-button hasRemoveStyle>
              <md-icon name="icon-more-adr_16"></md-icon>
            </md-button>
          </div>
        </div>
        <div class="visits-grid">
          <div class="time">
            ${hours.map(i => this.generateTime(i))}
          </div>
          <div class="year">2020</div>
          <div class="months">
            <div class="months-line">
              ${months.map(i => this.generateTime(undefined))}
            </div>
            <div class="month-names">
              ${months.map(i => this.generateTime(i))}
            </div>
          </div>
          <div class="matrix-wrapper">
            <div class="visits-matrix">
              ${(_b = this.visits) === null || _b === void 0 ? void 0 : _b.map((visit) => {
            if (this.filterSelection === undefined) {
                return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                    <visit-badge
                      .visit=${visit}
                    ></visit-badge>
                  `;
            }
            else {
                return visit.title === this.filterSelection
                    ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                        <visit-badge
                          .visit=${visit}
                        ></visit-badge>
                      `
                    : lit_html__WEBPACK_IMPORTED_MODULE_3__["nothing"];
            }
        })}
            </div>
          </div>
          <div class="date"></div>
        </div>
      </div>
    `;
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array, attribute: false })
], CustomerVisits.prototype, "visits", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object, attribute: false })
], CustomerVisits.prototype, "customerData", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], CustomerVisits.prototype, "filterSelection", void 0);
CustomerVisits = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("customer-visits")
], CustomerVisits);
/* harmony default export */ __webpack_exports__["default"] = (CustomerVisits);


/***/ }),

/***/ "./src/customer-data/mock-customer-blob.ts":
/*!*************************************************!*\
  !*** ./src/customer-data/mock-customer-blob.ts ***!
  \*************************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [
    { "type": "meta", "label": "ID", "value": "6009c1d89966d3040ab6732e" },
    { "type": "header", "label": "MRN", "value": "366A7-234BZ" },
    { "type": "meta", "label": "Active Account", "value": false },
    { "type": "meta", "label": "Balance", "value": "$1,315.22" },
    { "type": "header", "label": "Picture", "value": "https://i.pravatar.cc/300" },
    { "type": "header", "label": "Age", "value": 40 },
    { "type": "header", "label": "Name", "value": "Jonathan Gadot" },
    { "type": "header", "label": "Gender", "value": "male" },
    { "type": "header", "label": "DOB", "value": "01/15/1973" },
    { "type": "contact", "label": "Company", "value": "Cisco Inc." },
    { "type": "contact", "label": "Email", "value": "melendezbonner@pearlesex.com" },
    { "type": "header", "label": "Phone", "value": "+1 (800) 471-2389" },
    { "type": "summary", "label": "Address", "value": "808 Pine Street, Neibert, New Hampshire, 1619" },
    { "type": "meta", "label": "About", "value": "Pariatur incididunt deserunt elit aliquip ipsum in ullamco id cupidatat et Lorem sunt. Do in cupidatat commodo nulla excepteur. Non anim deserunt eiusmod ea ipsum cupidatat. Voluptate sit elit cupidatat ipsum nostrud consectetur nostrud irure in cillum amet ullamco.\r\n" },
    { "type": "meta", "label": "Registered Date", "value": "2017-03-30T07:34:25 +07:00" },
    { "type": "meta", "label": "Latitude", "value": -24.814666 },
    { "type": "meta", "label": "Longitude", "value": 25.892618 },
    {
        "type": "summary", "label": "Next To Kin", "value": {
            name: "Mona",
            "phone number": "(+1) 245-1234-000",
            email: "mona@website.com"
        }
    },
    { "type": "summary", "label": "Allergies", "value": ["penecillin", "aspirin"] },
    {
        "type": "summary", "label": "Conditions", "value": [
            "High blood pressure",
            "Low level cholesterol",
            "High triglyceride levels"
        ]
    },
    {
        "type": "summary", "label": "Insurance", "value": {
            provider: "Active (Silver Plan)",
            planName: "United Health Care Group",
            planNumber: "911-897726-04",
            groupNumber: "80840",
            memberID: "500000004"
        }
    },
    {
        "type": "visits", "label": "Visits", "value": [
            {
                title: "General Visit",
                summary: "",
                date: "2020-03-20T08:13:22",
                facility: "BOSCO Polyclinic",
                clinician: "Cr. Amy Grace",
                department: "Accident and Emergency",
                condition: "Throat irritation",
                type: "Out patient",
                O2Stat: 75
            },
            {
                title: "Follow-up Visit",
                summary: "eiusmod laboris sint cupidatat et aliquip mollit occaecat ut aliqua cupidatat eiusmod duis laborum ex sint amet amet pariatur ipsum elit anim duis est et elit id ut laborum elit",
                date: "2020-11-20T10:13:22",
                facility: "ZILPHUR",
                clinician: "Dr. Higgins Avila",
                department: "dolore fugiat",
                condition: "quis",
                type: "et",
                O2Stat: 11
            },
            {
                title: "Full Body Checkup",
                summary: "magna consectetur elit minim enim exercitation tempor aute est esse labore officia ea sunt nulla nostrud id enim occaecat consectetur voluptate do excepteur ipsum aute deserunt officia pariatur exercitation nulla",
                date: "2020-02-18T11:02:13",
                facility: "QIAO",
                clinician: "Dr. Lucille Whitehead",
                department: "sit ex",
                condition: "ut",
                type: "duis",
                O2Stat: 5
            },
            {
                title: "General Visit",
                summary: "dolor ut laborum consectetur excepteur consequat sunt aliqua laboris eu consectetur occaecat laboris aute exercitation Lorem labore qui ut officia minim anim duis irure mollit aliqua eu anim consequat aliqua",
                date: "2020-05-22T09:04:46",
                facility: "INJOY",
                clinician: "Dr. Kellie Christian",
                department: "et commodo",
                condition: "culpa",
                type: "consequat",
                O2Stat: 80
            },
            {
                title: "Medical Tests",
                summary: "ea sit exercitation consequat sint exercitation mollit occaecat ea nostrud nisi ipsum ullamco ex occaecat enim commodo dolor commodo consequat nulla tempor voluptate commodo ea incididunt culpa sint aute minim",
                date: "2020-02-19T14:53:32",
                facility: "FREAKIN",
                clinician: "Dr. Warren Manning",
                department: "dolor cupidatat",
                condition: "ipsum",
                type: "culpa",
                O2Stat: 79
            },
            {
                title: "General Visit",
                summary: "tempor pariatur sit ullamco irure proident culpa dolor id proident pariatur tempor sit do consequat commodo cillum culpa nisi mollit officia cupidatat sint qui anim officia dolor dolore excepteur pariatur",
                date: "2020-10-14T16:04:36",
                facility: "OPTIQUE",
                clinician: "Dr. Sonia Sullivan",
                department: "officia consectetur",
                condition: "aute",
                type: "laborum",
                O2Stat: 11
            },
            {
                title: "Medical Tests",
                summary: "aliqua exercitation et eiusmod sit labore esse veniam amet labore consequat eu irure eu aliqua in officia non duis esse deserunt ad amet cillum veniam adipisicing consectetur mollit et mollit",
                date: "2020-03-26T13:01:37",
                facility: "EMOLTRA",
                clinician: "Dr. Frank Valencia",
                department: "eiusmod culpa",
                condition: "duis",
                type: "laboris",
                O2Stat: 33
            }
        ]
    }
];


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _wxcc_desktop_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wxcc-desktop/sdk */ "./node_modules/@wxcc-desktop/sdk/dist/index.js");
/* harmony import */ var _wxcc_desktop_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wxcc_desktop_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Summary */ "./src/components/Summary.ts");
/* harmony import */ var _components_Visits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Visits */ "./src/components/Visits.ts");
/* harmony import */ var _customer_data_mock_customer_blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-data/mock-customer-blob */ "./src/customer-data/mock-customer-blob.ts");
/* harmony import */ var _components_App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/App.scss */ "./src/components/App.scss");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let MyCustomComponent = class MyCustomComponent extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.compact = false;
        this.assignedContacts = [];
    }
    connectedCallback() {
        super.connectedCallback();
        this.customerData = _customer_data_mock_customer_blob__WEBPACK_IMPORTED_MODULE_5__["data"];
        this.getTaskMap();
        this.phoneNumber =
            this.assignedContacts[0].interaction.callAssociatedData &&
                this.assignedContacts[0].interaction.callAssociatedData["ani"]["value"];
    }
    getTaskMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const taskMap = yield _wxcc_desktop_sdk__WEBPACK_IMPORTED_MODULE_2__["Desktop"].actions.getTaskMap();
            console.log(taskMap);
            this.assignedContacts = Array.from(taskMap.values());
            console.log(this.assignedContacts[0]);
        });
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // @ts-ignore
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const cr = entry.contentRect;
                if (cr.width > 589) {
                    this.compact = false;
                }
                else {
                    this.compact = true;
                }
            }
        });
        ro.observe(this.container);
    }
    get resizeClassMap() {
        return {
            compact: this.compact
        };
    }
    getValue(x) {
        if (Array.isArray(x)) {
            return x.join(", ");
        }
        else if (typeof x === "object" && x !== null) {
            const values = Object.values(x);
            const dataString = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        ${values.map(item => {
                return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <span>${item}</span><br />
          `;
            })}
      `;
            return dataString;
        }
        else
            return x;
    }
    static get styles() {
        return [
            _components_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"],
            lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        :host {
          display: block;
          height: 100%;
          position: relative;
          overflow: auto;
        }
      `
        ];
    }
    // re-wire the SDK to find the phone number and pipe that into the Summary
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.resizeClassMap)}">
        <customer-summary
          .customerData=${this.customerData ? this.customerData : undefined}
          ?compact=${this.compact}
          phone-number=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_7__["ifDefined"])(this.phoneNumber)}
        >
          <table>
            ${this.customerData
            .filter((x) => x.type === "summary")
            .map((x) => {
            console.log(x.result);
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                  <tr>
                    <td class="title">${x.label}</td>
                    <td class="value">${this.getValue(x.value)}</td>
                  </tr>
                `;
        })}
          </table>
        </customer-summary>
        <customer-visits .customerData=${this.customerData}></customer-visits>
      </div>
    `;
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String, attribute: "phone-number" })
], MyCustomComponent.prototype, "phoneNumber", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "compact", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "customerData", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])(".container")
], MyCustomComponent.prototype, "container", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "assignedContacts", void 0);
MyCustomComponent = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("crm-widget")
], MyCustomComponent);
/* harmony default export */ __webpack_exports__["default"] = (MyCustomComponent);


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map