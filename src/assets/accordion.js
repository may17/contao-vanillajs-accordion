parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PuDV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var t=function(t){t.style.display="block";var e=t.scrollHeight+"px";return t.style.display="",e},e=function(t,e){return t.setAttribute("role",e)},i=function(t,e){return t.classList.contains(e)},r=function(t,e){return setTimeout(e,t)},s=function(e){var i=t(e);e.classList.add("active"),e.style.height=i,r(350,function(){e.setAttribute("aria-hidden","false"),e.style.height=""})},n=function(t){t.style.height=t.scrollHeight+"px",r(1,function(){t.style.height="0"}),r(350,function(){t.classList.remove("active"),t.setAttribute("aria-hidden","true")})},a=function(t,e){t.classList.add("active"),t.setAttribute("aria-expanded","true"),s(e)},c=function(t,e){t.classList.remove("active"),t.setAttribute("aria-expanded","false"),n(e)},o=function(t){Array.from(t).forEach(function(t){e(t,"tablist");var r=t.querySelector(".toggler"),s=t.querySelector(".accordion");e(s,"tabpanel"),e(r,"tab"),r.setAttribute("tabindex",0),r.setAttribute("aria-expanded","false"),s.setAttribute("aria-hidden","true"),r.addEventListener("click",function(t){i(this,"active")?c(this,s):a(this,s)})})};exports.init=o;
},{}]},{},["PuDV"], null)
//# sourceMappingURL=/accordion.js.map