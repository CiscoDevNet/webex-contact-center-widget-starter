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

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: DEFAULT_ID, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ID", function() { return DEFAULT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then(() => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, channel, client, id = DEFAULT_ID, libraries = [], language, region, version, mapIds, nonce, retries = 3, url = "https://maps.googleapis.com/maps/api/js", }) {
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.version = version;
        this.apiKey = apiKey;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.libraries = libraries;
        this.language = language;
        this.region = region;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.retries = retries;
        this.url = url;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
        };
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl() {
        let url = this.url;
        url += `?callback=${this.CALLBACK}`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        return url;
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve();
                }
                else {
                    reject(err);
                }
            });
        });
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const url = this.createUrl();
        const script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
            script.nonce = this.nonce;
        }
        document.head.appendChild(script);
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

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

#map {
  height: 400px; }

#pac-input {
  margin: .75rem 0 0 .75rem;
  height: 2.3rem;
  width: 12rem;
  padding: 20px; }

.controls {
  display: none; }

#map .controls {
  display: block; }

.action-container {
  padding: 10px 2px;
  display: flex;
  flex-direction: column; }

md-button {
  margin: 10px 0; }

/*# sourceURL=/Users/momeraj/Documents/cisco/webex-cc/sourcecode/webex-contact-center-widget-starter/Examples/Widgets/Map/src/components/App.scss */
/*# sourceURL=App.scss */
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb21lcmFqL0RvY3VtZW50cy9jaXNjby93ZWJleC1jYy9zb3VyY2Vjb2RlL3dlYmV4LWNvbnRhY3QtY2VudGVyLXdpZGdldC1zdGFydGVyL0V4YW1wbGVzL1dpZGdldHMvTWFwL3NyYy9jb21wb25lbnRzL0FwcC5zY3NzIiwiQXBwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQ01FO0FERUY7RUFDRSxjQUFjO0VBQ2QsNENBQTRDO0VBQzVDLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJBcHAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDaXNjbyBTeXN0ZW1zLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWQtcHJpbWFyeS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tZC1wcmltYXJ5LXRleHQtY29sb3IpO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuI3BhYy1pbnB1dCB7XG4gIG1hcmdpbjogLjc1cmVtIDAgMCAuNzVyZW07XG4gIGhlaWdodDogMi4zcmVtO1xuICB3aWR0aDogMTJyZW07XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXAgLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1kLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAwO1xufSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBDaXNjbyBTeXN0ZW1zLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kLXByaW1hcnktYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWQtcHJpbWFyeS10ZXh0LWNvbG9yKTsgfVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiA0MDBweDsgfVxuXG4jcGFjLWlucHV0IHtcbiAgbWFyZ2luOiAuNzVyZW0gMCAwIC43NXJlbTtcbiAgaGVpZ2h0OiAyLjNyZW07XG4gIHdpZHRoOiAxMnJlbTtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbiNtYXAgLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmFjdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG5tZC1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMDsgfVxuIl19 */`);
    

/***/ }),

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ "./src/components/App.scss");
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");
/* harmony import */ var _lightMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightMap */ "./src/components/lightMap.ts");
/* harmony import */ var _darkMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./darkMap */ "./src/components/darkMap.ts");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* eslint-disable @typescript-eslint/ban-ts-ignore */
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
        this.latitude = 47.6062;
        this.longitude = -122.3321;
        this.search = "";
        this.searchEnabled = false;
        this.apiKey = "";
        this.zoom = 12;
        this.lumos = false;
        this.darkTheme = false;
        this.loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__["Loader"]({
            apiKey: this.apiKey,
            version: "weekly",
            libraries: ["places"]
        });
        this.refreshTokenData = () => {
            var _a;
            const themeWrapper = this.closestElement("md-theme");
            // @ts-ignore
            this.lumos = themeWrapper.lumos;
            // @ts-ignore
            this.darkTheme = themeWrapper.darkTheme;
            const mapTheme = this.darkTheme ? _darkMap__WEBPACK_IMPORTED_MODULE_4__["darkMap"] : _lightMap__WEBPACK_IMPORTED_MODULE_3__["map"];
            (_a = this.map) === null || _a === void 0 ? void 0 : _a.setOptions({ styles: mapTheme });
        };
        this.updatePins = (places) => {
            let markers = [];
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            function clearMarkers() {
                return __awaiter(this, void 0, void 0, function* () {
                    markers.forEach(marker => {
                        marker.setMap(null);
                    });
                    markers = [];
                });
            }
            clearMarkers().then(() => {
                // For each place, get the icon, name and location.
                const bounds = new google.maps.LatLngBounds();
                places.forEach(place => {
                    if (!place.geometry) {
                        return;
                    }
                    const icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };
                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: this.map,
                        icon,
                        title: place.name,
                        position: place.geometry.location
                    }));
                    if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport);
                    }
                    else {
                        bounds.extend(place.geometry.location);
                    }
                });
                this.map.fitBounds(bounds);
            });
        };
        this.initMap = () => {
            if (!this.map) {
                const mapTheme = this.darkTheme ? _darkMap__WEBPACK_IMPORTED_MODULE_4__["darkMap"] : _lightMap__WEBPACK_IMPORTED_MODULE_3__["map"];
                this.loader
                    .load()
                    .then(() => {
                    if (this.mapDiv) {
                        this.map = new google.maps.Map(this.mapDiv, {
                            center: { lat: this.latitude, lng: this.longitude },
                            zoom: this.zoom,
                            styles: mapTheme,
                            mapTypeControl: false
                        });
                        this.mountSearchInput();
                    }
                })
                    .then(() => this.updateAttributeSearch());
            }
            else {
                this.updateAttributeSearch().then(() => {
                    var _a;
                    (_a = this.map) === null || _a === void 0 ? void 0 : _a.panTo({ lat: this.latitude, lng: this.longitude });
                    this.refreshTokenData();
                    this.mountSearchInput();
                });
            }
        };
        this.updateAttributeSearch = () => __awaiter(this, void 0, void 0, function* () {
            if (this.map && this.search) {
                const places = new google.maps.places.PlacesService(this.map);
                const attributeQuery = this.search.split(" ").join("%") || undefined;
                places.nearbySearch({
                    keyword: attributeQuery,
                    location: { lat: this.latitude, lng: this.longitude },
                    radius: 50000
                }, results => {
                    this.updatePins(results);
                });
            }
        });
        this.mountSearchInput = () => {
            if (this.searchEnabled) {
                this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.searchInput);
                // Create the search box and link it to the UI element.
                const searchBox = new google.maps.places.SearchBox(this.searchInput);
                // Bias the SearchBox results towards current map's viewport.
                this.map.addListener("bounds_changed", () => {
                    var _a;
                    searchBox.setBounds((_a = this.map) === null || _a === void 0 ? void 0 : _a.getBounds());
                });
                // Listen for the event fired when the user selects a prediction and retrieve
                // more details for that place.
                searchBox.addListener("places_changed", () => {
                    this.updatePins(searchBox.getPlaces());
                });
            }
        };
        this.generateSearchInput = () => {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <md-input
        id="pac-input"
        class="controls"
        type="text"
        shape="pill"
        placeholder="${this.search}"
      ></md-input>
    `;
        };
    }
    closestElement(selector, base = this) {
        function __closestFrom(el) {
            if (!el || el === document || el === window)
                return null;
            // @ts-ignore
            const found = el.closest(selector);
            // @ts-ignore
            return found ? found : __closestFrom(el.getRootNode().host);
        }
        return __closestFrom(base);
    }
    connectedCallback() {
        super.connectedCallback();
        this.loader.apiKey = this.apiKey;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        document.addEventListener("theme-changed", this.refreshTokenData);
        this.initMap();
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("apiKey") ||
            changedProperties.has("search") ||
            changedProperties.has("latitude") ||
            changedProperties.has("longitude") ||
            changedProperties.has("searchEnabled") ||
            changedProperties.has("zoom")) {
            this.initMap();
        }
    }
    static get styles() {
        return _App_scss__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="container">
        ${(this.searchEnabled && this.generateSearchInput()) || lit_html__WEBPACK_IMPORTED_MODULE_5__["nothing"]}
        <div id="map"></div>
      </div>
    `;
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number, reflect: true })
], MyCustomComponent.prototype, "latitude", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number, reflect: true })
], MyCustomComponent.prototype, "longitude", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String, reflect: true })
], MyCustomComponent.prototype, "search", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean, reflect: true, attribute: "search-enabled" })
], MyCustomComponent.prototype, "searchEnabled", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String, reflect: true, attribute: "api-key" })
], MyCustomComponent.prototype, "apiKey", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number, reflect: true })
], MyCustomComponent.prototype, "zoom", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "lumos", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "darkTheme", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "map", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "markers", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("#map")
], MyCustomComponent.prototype, "mapDiv", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("#pac-input")
], MyCustomComponent.prototype, "searchInput", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "loader", void 0);
MyCustomComponent = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("map-component")
], MyCustomComponent);
/* harmony default export */ __webpack_exports__["default"] = (MyCustomComponent);


/***/ }),

/***/ "./src/components/darkMap.ts":
/*!***********************************!*\
  !*** ./src/components/darkMap.ts ***!
  \***********************************/
/*! exports provided: darkMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkMap", function() { return darkMap; });
const darkMap = [
    {
        featureType: "all",
        elementType: "geometry",
        stylers: [
            {
                color: "#202c3e"
            }
        ]
    },
    {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
            {
                gamma: 0.01
            },
            {
                lightness: 20
            },
            {
                weight: 1.39
            },
            {
                color: "#ffffff"
            }
        ]
    },
    {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
            {
                weight: 0.96
            },
            {
                saturation: 9
            },
            {
                visibility: "on"
            },
            {
                color: "#000000"
            }
        ]
    },
    {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                lightness: 30
            },
            {
                saturation: 9
            },
            {
                color: "#29446b"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                saturation: 20
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                lightness: 20
            },
            {
                saturation: -20
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                lightness: 10
            },
            {
                saturation: -30
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#193a55"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
            {
                saturation: 25
            },
            {
                lightness: 25
            },
            {
                weight: 0.01
            }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                lightness: -20
            }
        ]
    }
];


/***/ }),

/***/ "./src/components/lightMap.ts":
/*!************************************!*\
  !*** ./src/components/lightMap.ts ***!
  \************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
const map = [
    {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#e0efef"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                hue: "#1900ff"
            },
            {
                color: "#c0e8e8"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                lightness: 100
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
            {
                visibility: "on"
            },
            {
                lightness: 700
            }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                color: "#7dcdcd"
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
/* harmony import */ var _wxcc_desktop_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wxcc-desktop/sdk */ "./node_modules/@wxcc-desktop/sdk/dist/index.js");
/* harmony import */ var _wxcc_desktop_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wxcc_desktop_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.ts");
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



let MyCustomComponent = class MyCustomComponent extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        /**
         * Configure your AgentX Environment with the default values needed.
         * Latitude / Longitude: where you want the map to be centered by default
         * Search-Enabled: what search term the map should load with
         * Search: toggle search input field on/off
         * Zoom: set default zoom level of map
         * !! API KEY REQUIRED !!
         * This Map Widget requires a Google Maps API Key that is configured to provide the JavaScript and Places API
         * Get your key by visiting https://developers.google.com/maps/documentation/javascript/get-api-key
         * Once Activated, place your API Key in the application config as an attribute
         * e.g. "attributes": { "title": "Maps Widget", "api-key": "AI----3W--w5I-etc" },
         */
        super(...arguments);
        this.latitude = 47.6062;
        this.longitude = -122.3321;
        this.search = "";
        this.searchEnabled = false;
        this.apiKey = "";
        this.zoom = 12;
        this.contacts = [];
        this.logger = _wxcc_desktop_sdk__WEBPACK_IMPORTED_MODULE_1__["Desktop"].logger.createLogger("[Widget-Using-JSAPI]");
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
      :host {
        display: block;
        height: 100%;
        position: relative;
        overflow: auto;
      }
    `;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <map-component
        api-key=${this.apiKey}
        search=${this.search}
        ?search-enabled=${this.searchEnabled}
        latitude=${this.latitude}
        longitude=${this.longitude}
      ></map-component>
    `;
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number, reflect: true })
], MyCustomComponent.prototype, "latitude", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number, reflect: true })
], MyCustomComponent.prototype, "longitude", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String, reflect: true })
], MyCustomComponent.prototype, "search", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean, reflect: true, attribute: "search-enabled" })
], MyCustomComponent.prototype, "searchEnabled", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String, reflect: true, attribute: "api-key" })
], MyCustomComponent.prototype, "apiKey", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number, reflect: true })
], MyCustomComponent.prototype, "zoom", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["internalProperty"])()
], MyCustomComponent.prototype, "contacts", void 0);
MyCustomComponent = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("map-widget")
], MyCustomComponent);
/* harmony default export */ __webpack_exports__["default"] = (MyCustomComponent);


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map