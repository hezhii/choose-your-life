!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";"usr strict";e(1);var r=document.querySelectorAll(".item"),o=!0,i=!1,a=void 0;try{for(var s,c=r[Symbol.iterator]();!(o=(s=c.next()).done);o=!0)!function(){var t=s.value;t.addEventListener("click",function(){if(t.className.includes("active"))t.className="item";else{var n=document.querySelectorAll(".active");n&&2===n.length&&(n[Math.floor(2*Math.random())].className="item"),t.className="active item"}})}()}catch(t){i=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw a}}},function(t,n,e){var r=e(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;e(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){n=t.exports=e(3)(void 0),n.push([t.i,"body {\n  display: table-cell;\n  height: 100vh;\n  width: 100vw;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 34px;\n  color: #98AFC7; }\n\n.main {\n  display: inline-block; }\n\n.item {\n  position: relative;\n  padding-left: 87px;\n  height: 80px;\n  cursor: pointer;\n  text-align: left;\n  -wekit-transition: all 0.2s;\n  transition: all 0.2s; }\n  .item.active {\n    color: #253368; }\n    .item.active .switch {\n      background-color: #008CFF; }\n    .item.active .inner {\n      margin-left: 24px;\n      -webkit-animation-duration: 0.5s;\n      animation-duration: 0.5s;\n      box-shadow: 0 3px 6px 0 rgba(0, 35, 11, 0.3); }\n\n.switch {\n  position: absolute;\n  left: 0;\n  padding: 3px;\n  box-sizing: border-box;\n  width: 66px;\n  border-radius: 30px;\n  background-color: #E3EDF9;\n  -wekit-transition: all 0.2s;\n  transition: all 0.2s; }\n\n.inner {\n  margin-left: 0;\n  height: 35px;\n  width: 35px;\n  border-radius: 30px;\n  background-color: white;\n  -wekit-transition: all 0.2s, margin 0.5s;\n  transition: all 0.2s, margin 0.5s;\n  box-shadow: 0 3px 6px 0 rgba(0, 35, 11, 0.2); }\n",""])},function(t,n){function e(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[e].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){function r(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],n))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],n));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],s=i[1],c=i[2],u=i[3],l={css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(l):e.push(r[a]={id:a,parts:[l]})}return e}function i(t,n){var e=m(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),y.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=y.indexOf(t);n>=0&&y.splice(n,1)}function s(t){var n=document.createElement("style");return t.attrs.type="text/css",u(n,t.attrs),i(t,n),n}function c(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(n,t.attrs),i(t,n),n}function u(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function l(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var u=g++;e=b||(b=s(n)),r=f.bind(null,e,u,!1),o=f.bind(null,e,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=c(n),r=d.bind(null,e,n),o=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=s(n),r=p.bind(null,e),o=function(){a(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}function f(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function p(t,n){var e=n.css,r=n.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function d(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},v=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var n={};return function(e){return void 0===n[e]&&(n[e]=t.call(this,e)),n[e]}}(function(t){return document.querySelector(t)}),b=null,g=0,y=[],x=e(5);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=v()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=o(t,n);return r(e,n),function(t){for(var i=[],a=0;a<e.length;a++){var s=e[a],c=h[s.id];c.refs--,i.push(c)}if(t){r(o(t,n),n)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var w=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);