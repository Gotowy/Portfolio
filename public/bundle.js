/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/pw_maze_black.png */ \"./src/img/pw_maze_black.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&family=Rancho&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\n:root {\\n  --nav-hover: #222b;\\n  --navbar: #7779;\\n  --footer: #fff9;\\n  --white: #eee;\\n  --yellow: #db3;\\n  --bright-yellow: #fd5;\\n}\\n\\n@keyframes header {\\n  from {\\n    transform: translateY(-15px);\\n  }\\n  to {\\n    transform: none;\\n  }\\n}\\n@keyframes opacity {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes color {\\n  from {\\n    color: transparent;\\n  }\\n  to {\\n    color: var(--yellow);\\n  }\\n}\\n@keyframes shade {\\n  from {\\n    background-color: #111;\\n  }\\n  to {\\n    background-color: #000;\\n  }\\n}\\nnav {\\n  display: flex;\\n  position: fixed;\\n  z-index: 2;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  justify-content: space-between;\\n  background: var(--navbar);\\n}\\nnav .nav-btn {\\n  font-size: 1.4em;\\n  padding: 0.5em 2em;\\n  cursor: pointer;\\n}\\nnav .nav-btn:hover {\\n  transition: all 0.2s ease-in-out;\\n}\\nnav .home-btn {\\n  font-family: \\\"Rancho\\\";\\n  font-size: 2em;\\n}\\nnav .home-btn:hover {\\n  color: var(--nav-hover);\\n}\\nnav .navmenu {\\n  display: flex;\\n  align-items: center;\\n}\\nnav .navmenu .content-btn {\\n  height: max-content;\\n  margin: 0.2em;\\n  border-radius: 0.5em;\\n  user-select: none;\\n}\\nnav .navmenu .content-btn:hover {\\n  color: var(--bright-yellow);\\n  text-decoration: underline;\\n}\\nnav .navmenu .active {\\n  background: var(--nav-hover);\\n  color: var(--bright-yellow);\\n  text-decoration: none !important;\\n  cursor: default !important;\\n  pointer-events: none;\\n}\\n\\n.bg {\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\\"Rancho\\\";\\n  background: #000;\\n}\\n.bg .name {\\n  font-size: 4em;\\n  color: var(--yellow);\\n  -webkit-text-stroke: 1px #a70;\\n}\\n.bg .title {\\n  font-size: 2em;\\n}\\n.bg .yellow {\\n  animation: color 2s cubic-bezier(0.86, -0.04, 0.8, 0.42), opacity 0.5s;\\n}\\n.bg .visible {\\n  animation: opacity 2s cubic-bezier(1, -0.02, 0.6, -0.01);\\n}\\n\\n.shade {\\n  animation: shade 2s ease-out;\\n}\\n\\n.projects .projects-container {\\n  display: flex;\\n  justify-content: flex-start;\\n}\\n.projects .projects-container .projects-list {\\n  min-height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.projects .projects-container .projects-list .project {\\n  height: 6em;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 2px 0;\\n  padding: 2em;\\n  border: solid 1px #fff;\\n  border-radius: 20px 0 0 20px;\\n  width: 300px;\\n}\\n.projects .projects-container .projects-list .project span {\\n  cursor: pointer;\\n}\\n.projects .projects-container .projects-list .project:first-child {\\n  margin-top: 0;\\n  border-top: solid 1px #fff;\\n}\\n.projects .projects-container .projects-list .project:last-child {\\n  margin-bottom: 0;\\n  border-bottom: solid 1px #fff;\\n}\\n.projects .projects-container .projects-list .active {\\n  background: linear-gradient(0.25turn, transparent, #ccc2);\\n  border: none;\\n  margin: 0;\\n  color: var(--yellow);\\n}\\n.projects .projects-container .project-details {\\n  display: flex;\\n  width: 100%;\\n  background: #ccc2;\\n  border: solid 1px #fff;\\n  border-left: 0;\\n  border-radius: 0 20px 20px 0;\\n}\\n.projects .projects-container .project-details .project-preview {\\n  min-width: 30%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  text-align: center;\\n  padding: 2em;\\n}\\n.projects .projects-container .project-details .project-preview img {\\n  border-radius: 5px;\\n}\\n.projects .projects-container .project-details .project-preview .btn {\\n  border-radius: 10px;\\n  text-align: center;\\n  cursor: pointer;\\n  padding: 10px;\\n  margin: 10px 0;\\n  font-size: 18px;\\n}\\n.projects .projects-container .project-details .project-preview .filled-btn {\\n  background: #db3;\\n  color: #000;\\n}\\n.projects .projects-container .project-details .project-preview .filled-btn:hover {\\n  background: #fd5;\\n}\\n.projects .projects-container .project-details .project-preview .outlined-btn {\\n  color: #db3;\\n  border: 2px #db3 solid;\\n}\\n.projects .projects-container .project-details .project-preview .outlined-btn:hover {\\n  color: #fd5;\\n  border-color: #fd5;\\n  background: #fff1;\\n}\\n.projects .projects-container .project-details .project-desc {\\n  text-align: justify;\\n  padding: 2em;\\n}\\n.projects .projects-container .project-details .project-desc h3 {\\n  text-align: center;\\n}\\n\\nfooter {\\n  min-height: 200px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  color: var(--white);\\n  background: linear-gradient(transparent, var(--footer));\\n}\\nfooter a {\\n  color: var(--yellow);\\n  text-decoration: underline;\\n}\\nfooter a:hover {\\n  color: var(--bright-yellow);\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  /* Background pattern from Toptal Subtle Patterns */\\n  font-family: \\\"Poppins\\\";\\n  color: var(--white);\\n}\\nbody main {\\n  min-height: calc(100vh - 200px);\\n  min-width: 80%;\\n  max-width: 1200px;\\n  position: relative;\\n  margin-left: auto;\\n  margin-right: auto;\\n  padding: 7em 2em;\\n}\\nbody main h2 {\\n  margin-bottom: 1em;\\n  font-size: 2.5em;\\n  text-align: center;\\n  color: var(--yellow);\\n  animation: header 0.5s ease-out;\\n}\\nbody main section {\\n  animation: opacity 0.5s ease-out;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/html/about.html":
/*!*****************************!*\
  !*** ./src/html/about.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<section>\\r\\n    <h2>About me</h2>\\r\\n    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ad, iure atque architecto tenetur non. Ab doloribus eius omnis facere accusantium, natus non reprehenderit iusto quibusdam, suscipit, dolor cumque doloremque minus molestias vel harum nam distinctio consequatur odit rem velit exercitationem illo. Saepe corporis cupiditate repudiandae ad, ipsum dicta debitis, modi velit rem, vitae eius necessitatibus sit cum eveniet reprehenderit illo quae nam in. Iste, voluptatibus hic aperiam repudiandae quia, nam ad id accusamus quis, repellendus odio tempora impedit eveniet enim placeat repellat velit itaque ea totam? Voluptatem harum quasi iure perferendis quos quas quaerat aliquam neque illum voluptatum id temporibus numquam, ipsa recusandae itaque tempore! Nostrum blanditiis architecto doloribus autem ea totam facilis in est nesciunt debitis reprehenderit quia aperiam dolorem ipsa itaque nobis, eos doloremque consectetur! Doloribus ducimus placeat nisi asperiores laborum accusamus quaerat, necessitatibus error consequuntur accusantium eligendi! Error fugit nisi assumenda sequi. Aut cum dolore dolorum labore, doloribus dolorem eius enim, tenetur quam, architecto aliquid repellendus laboriosam? Veniam minus molestias nam eius. Facere eum quis corrupti! Vel nihil itaque blanditiis nemo a quasi eligendi eveniet facere, officia magnam voluptatum delectus, assumenda esse quibusdam vero. Repellendus quos ad pariatur tenetur laudantium perferendis culpa, laboriosam assumenda quam dolor.</p>\\r\\n</section>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/about.html?");

/***/ }),

/***/ "./src/html/autocomplete.html":
/*!************************************!*\
  !*** ./src/html/autocomplete.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"project-preview\\\">\\r\\n    <img src=\\\"https://images2.fanpop.com/images/photos/6700000/CheshireCatI-american-mcgees-alice-6722361-493-309.jpg\\\" alt=\\\"project-preview\\\" />\\r\\n    <a href=\\\"https://gotowy.github.io/netfilmoteka/\\\" target=\\\"_blank\\\">\\r\\n        <div class=\\\"btn filled-btn\\\">\\r\\n            Visit the page\\r\\n        </div>\\r\\n    </a>\\r\\n    <a href=\\\"https://github.com/gotowy/netfilmoteka/\\\" target=\\\"_blank\\\">\\r\\n        <div class=\\\"btn outlined-btn\\\">\\r\\n            <i class=\\\"fa fa-github\\\"></i> Source code\\r\\n        </div>\\r\\n    </a>\\r\\n\\r\\n</div>\\r\\n<div class=\\\"project-desc\\\">\\r\\n    <h3>Project</h3>\\r\\n    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eligendi tempore unde voluptatibus aut vitae ad explicabo praesentium cupiditate? Voluptatem, dicta commodi? Dicta vero eos ipsa iusto obcaecati dolorum eligendi alias debitis assumenda voluptas, at cumque laboriosam consectetur sunt excepturi sint accusantium sequi voluptatum. Facilis excepturi aperiam enim laudantium adipisci.</p>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/autocomplete.html?");

/***/ }),

/***/ "./src/html/contact.html":
/*!*******************************!*\
  !*** ./src/html/contact.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<section>\\r\\n    <h2>Contact me</h2>\\r\\n    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam asperiores aut placeat quia magni commodi est voluptates inventore, sapiente, iste laboriosam repudiandae esse maiores hic eum molestias quibusdam quas quo minima voluptatibus in? Quo nam dignissimos molestias nesciunt commodi quos, laborum eius corporis eaque nulla asperiores praesentium eligendi vel consectetur, amet voluptatem pariatur labore dolor? Consectetur temporibus expedita ratione dignissimos quam iure tempora sunt, magnam eaque, ad autem at consequatur provident! Cum amet vel, qui error sapiente sunt adipisci, natus cupiditate ea, eveniet quisquam. Placeat deserunt est, excepturi officiis perferendis dicta perspiciatis ab beatae, vel quod, mollitia quos sit accusamus.</p>\\r\\n</section>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/contact.html?");

/***/ }),

/***/ "./src/html/footer.html":
/*!******************************!*\
  !*** ./src/html/footer.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div>\\r\\n    &copy ADAM RYBAK 2022<br />\\r\\n    <a href=\\\"https://github.com/Gotowy/Portfolio\\\" target=\\\"_blank\\\">\\r\\n      <i class=\\\"fa fa-github\\\"></i> Source Code\\r\\n    </a>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/footer.html?");

/***/ }),

/***/ "./src/html/home.html":
/*!****************************!*\
  !*** ./src/html/home.html ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<section>\\r\\n    <h2>Home</h2>\\r\\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem suscipit, molestiae laudantium nesciunt doloremque quia hic rem totam ipsa sit ea pariatur libero quod iusto! Labore aperiam quibusdam, explicabo dolorum numquam libero pariatur laboriosam sed asperiores distinctio mollitia fugit alias commodi error odit quos assumenda unde atque vel veritatis, dicta ea minima vero. Necessitatibus iusto vitae dolores aut numquam eius nobis autem rerum incidunt pariatur est natus itaque illum rem iure, illo harum dolorum quasi omnis nisi ipsum. Aperiam velit hic mollitia in molestiae ullam commodi expedita, aliquid suscipit praesentium illum ad debitis nesciunt earum eligendi, accusantium nobis delectus culpa.</p>\\r\\n</section>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/home.html?");

/***/ }),

/***/ "./src/html/navbar.html":
/*!******************************!*\
  !*** ./src/html/navbar.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<nav>\\r\\n    <div class=\\\"nav-btn home-btn\\\" value=\\\"about\\\" title=\\\"About me\\\">Adam Rybak - Portfolio</div>\\r\\n    <ul class=\\\"navmenu\\\">\\r\\n        <li class=\\\"nav-btn content-btn\\\" value=\\\"about\\\">About&nbsp;me</li>\\r\\n        <li class=\\\"nav-btn content-btn\\\" value=\\\"projects\\\">Projects</li>\\r\\n        <li class=\\\"nav-btn content-btn\\\" value=\\\"contact\\\">Contact</li>\\r\\n    </ul>\\r\\n</nav>\\r\\n\\r\\n<section>\\r\\n    <div class=\\\"bg shade\\\">\\r\\n        <div class=\\\"name yellow\\\">Adam Rybak</div>\\r\\n        <div class=\\\"title visible\\\">FRONT-END DEVELOPER PORTFOLIO</div>\\r\\n    </div>\\r\\n</section>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/navbar.html?");

/***/ }),

/***/ "./src/html/netfilmoteka.html":
/*!************************************!*\
  !*** ./src/html/netfilmoteka.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"project-preview\\\">\\r\\n    <img src=\\\"https://images2.fanpop.com/images/photos/6700000/CheshireCatI-american-mcgees-alice-6722361-493-309.jpg\\\" alt=\\\"project-preview\\\" />\\r\\n    <a href=\\\"https://gotowy.github.io/netfilmoteka/\\\" target=\\\"_blank\\\">\\r\\n        <div class=\\\"btn filled-btn\\\">\\r\\n            Visit the page\\r\\n        </div>\\r\\n    </a>\\r\\n    <a href=\\\"https://github.com/gotowy/netfilmoteka/\\\" target=\\\"_blank\\\">\\r\\n        <div class=\\\"btn outlined-btn\\\">\\r\\n            <i class=\\\"fa fa-github\\\"></i> Source code\\r\\n        </div>\\r\\n    </a>\\r\\n\\r\\n</div>\\r\\n<div class=\\\"project-desc\\\">\\r\\n    <h3>Project</h3>\\r\\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, consequatur asperiores! Pariatur beatae quod dolores unde temporibus dicta, iste eum facere officia voluptatem fuga assumenda, in quaerat facilis atque et praesentium eligendi quas? Nobis doloremque totam expedita labore rerum, molestias tempora eligendi cupiditate ullam quasi in, autem et a nam esse inventore aliquid. Sint quo voluptates at, esse nemo porro beatae eligendi soluta excepturi reprehenderit, necessitatibus veritatis nobis ab omnis provident? Unde, accusantium repellendus quos sit quod magni libero nulla consectetur beatae minima repudiandae cum incidunt, officiis iste qui quia, cupiditate tenetur enim labore? Voluptatum eveniet saepe necessitatibus voluptatibus minus.</p>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/netfilmoteka.html?");

/***/ }),

/***/ "./src/html/portfolio.html":
/*!*********************************!*\
  !*** ./src/html/portfolio.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"project-preview\\\">\\r\\n    <img src=\\\"https://images2.fanpop.com/images/photos/6700000/CheshireCatI-american-mcgees-alice-6722361-493-309.jpg\\\" alt=\\\"project-preview\\\" />\\r\\n    <a href=\\\"https://gotowy.github.io/netfilmoteka/\\\" target=\\\"_blank\\\">\\r\\n        <div class=\\\"btn filled-btn\\\">\\r\\n            Visit the page\\r\\n        </div>\\r\\n    </a>\\r\\n    <a href=\\\"https://github.com/gotowy/netfilmoteka/\\\" target=\\\"_blank\\\">\\r\\n        <div class=\\\"btn outlined-btn\\\">\\r\\n            <i class=\\\"fa fa-github\\\"></i> Source code\\r\\n        </div>\\r\\n    </a>\\r\\n\\r\\n</div>\\r\\n<div class=\\\"project-desc\\\">\\r\\n    <h3>Project</h3>\\r\\n    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, dolorum?</p>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/portfolio.html?");

/***/ }),

/***/ "./src/html/project-details.html":
/*!***************************************!*\
  !*** ./src/html/project-details.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/project-details.html?");

/***/ }),

/***/ "./src/html/projects.html":
/*!********************************!*\
  !*** ./src/html/projects.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<section class=\\\"projects\\\">\\r\\n    <h2>My projects</h2>\\r\\n    <div class=\\\"projects-container\\\">\\r\\n        <ul class=\\\"projects-list\\\">\\r\\n            <li class=\\\"project\\\" value=\\\"portfolio\\\"><span>Portfolio</span></li>\\r\\n            <li class=\\\"project\\\" value=\\\"netfilmoteka\\\"><span>netFilmoteka</span></li>\\r\\n            <li class=\\\"project\\\" value=\\\"raffaele\\\"><span>Pizzeria Raffaele</span></li>\\r\\n            <li class=\\\"project\\\" value=\\\"autocomplete\\\"><span>Autocomplete</span></li>\\r\\n        </ul>\\r\\n        <article class=\\\"project-details\\\"></article>\\r\\n    </div>\\r\\n</section>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/projects.html?");

/***/ }),

/***/ "./src/html/raffaele.html":
/*!********************************!*\
  !*** ./src/html/raffaele.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"project-preview\\\">\\r\\n    <img src=\\\"https://images2.fanpop.com/images/photos/6700000/CheshireCatI-american-mcgees-alice-6722361-493-309.jpg\\\" alt=\\\"project-preview\\\" />\\r\\n    <a href=\\\"https://gotowy.github.io/netfilmoteka/\\\" target=\\\"_blank\\\">\\r\\n        <div class=\\\"btn filled-btn\\\">\\r\\n            Visit the page\\r\\n        </div>\\r\\n    </a>\\r\\n    <a href=\\\"https://github.com/gotowy/netfilmoteka/\\\" target=\\\"_blank\\\">\\r\\n        <div class=\\\"btn outlined-btn\\\">\\r\\n            <i class=\\\"fa fa-github\\\"></i> Source code\\r\\n        </div>\\r\\n    </a>\\r\\n\\r\\n</div>\\r\\n<div class=\\\"project-desc\\\">\\r\\n    <h3>Project</h3>\\r\\n    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sequi laboriosam dolores ducimus nisi labore necessitatibus ipsam, quia illum unde. Non, dolores ullam? Reiciendis excepturi enim, id porro veritatis dolor!</p>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://portfolio/./src/html/raffaele.html?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\r\nconst services_1 = __webpack_require__(/*! ./ts/services */ \"./src/ts/services.ts\");\r\nconst navbar_1 = __webpack_require__(/*! ./ts/navbar */ \"./src/ts/navbar.ts\");\r\n(0, navbar_1.addNavbar)();\r\n(0, services_1.injectHtmlTemplate)('about.html', 'main');\r\n(0, services_1.injectHtmlTemplate)('footer.html', 'footer');\r\n\n\n//# sourceURL=webpack://portfolio/./src/index.ts?");

/***/ }),

/***/ "./src/ts/navbar.ts":
/*!**************************!*\
  !*** ./src/ts/navbar.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.addNavbar = void 0;\r\nconst services_1 = __webpack_require__(/*! ./services */ \"./src/ts/services.ts\");\r\nconst addNavbar = () => {\r\n    (0, services_1.injectHtmlTemplate)('navbar.html', '.navbar');\r\n    const homeButton = document.querySelector('.home-btn');\r\n    const contentButtons = document.querySelectorAll('.content-btn');\r\n    homeButton === null || homeButton === void 0 ? void 0 : homeButton.addEventListener('click', () => {\r\n        (0, services_1.removeClass)('yellow', '.name');\r\n        (0, services_1.addClass)('yellow', '.name');\r\n        (0, services_1.removeClass)('visible', '.title');\r\n        (0, services_1.addClass)('visible', '.title');\r\n        (0, services_1.removeClass)('shade', '.bg');\r\n        (0, services_1.addClass)('shade', '.bg');\r\n        (0, services_1.removeClass)('active', '.content-btn[class*=\"active\"]');\r\n        (0, services_1.scroll)('.bg');\r\n    });\r\n    contentButtons === null || contentButtons === void 0 ? void 0 : contentButtons.forEach((item) => {\r\n        item.addEventListener('click', () => {\r\n            (0, services_1.listenerCallback)(item, '.content-btn', 'main');\r\n            (0, services_1.scroll)('main');\r\n            if (item.getAttribute('value') === \"projects\") {\r\n                console.log(item.getAttribute('value'));\r\n                const projects = document.querySelectorAll('.project');\r\n                projects === null || projects === void 0 ? void 0 : projects.forEach((project) => {\r\n                    project.addEventListener('click', () => (0, services_1.listenerCallback)(project, '.project', '.project-details'));\r\n                });\r\n            }\r\n        });\r\n    });\r\n};\r\nexports.addNavbar = addNavbar;\r\n\n\n//# sourceURL=webpack://portfolio/./src/ts/navbar.ts?");

/***/ }),

/***/ "./src/ts/services.ts":
/*!****************************!*\
  !*** ./src/ts/services.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.scroll = exports.removeClass = exports.addClass = exports.listenerCallback = exports.injectHtmlTemplate = void 0;\r\nconst injectHtmlTemplate = (templateFileName, cssSelector) => {\r\n    const container = document.querySelector(cssSelector);\r\n    const template = __webpack_require__(\"./src/html sync recursive ^\\\\.\\\\/.*$\")(`./${templateFileName}`).default;\r\n    if (container && template)\r\n        container.innerHTML = template;\r\n};\r\nexports.injectHtmlTemplate = injectHtmlTemplate;\r\nconst listenerCallback = (item, selector, container) => {\r\n    const value = item.getAttribute('value');\r\n    (0, exports.injectHtmlTemplate)(`${value}.html`, container);\r\n    (0, exports.removeClass)('active', `${selector}[class*=\"active\"]`);\r\n    (0, exports.addClass)('active', `${selector}[value=\"${value}\"]`);\r\n};\r\nexports.listenerCallback = listenerCallback;\r\nconst addClass = (className, cssSelector) => {\r\n    const element = document.querySelector(cssSelector);\r\n    setTimeout(() => element === null || element === void 0 ? void 0 : element.classList.add(className), 0);\r\n};\r\nexports.addClass = addClass;\r\nconst removeClass = (className, cssSelector) => {\r\n    const element = document.querySelector(cssSelector);\r\n    element === null || element === void 0 ? void 0 : element.classList.remove(className);\r\n};\r\nexports.removeClass = removeClass;\r\nconst scroll = (cssSelector) => {\r\n    const element = document.querySelector(cssSelector);\r\n    element === null || element === void 0 ? void 0 : element.scrollIntoView({\r\n        block: \"start\",\r\n        behavior: \"smooth\",\r\n    });\r\n};\r\nexports.scroll = scroll;\r\n\n\n//# sourceURL=webpack://portfolio/./src/ts/services.ts?");

/***/ }),

/***/ "./src/html sync recursive ^\\.\\/.*$":
/*!*********************************!*\
  !*** ./src/html/ sync ^\.\/.*$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./about.\": \"./src/html/about.html\",\n\t\"./about.html\": \"./src/html/about.html\",\n\t\"./autocomplete.\": \"./src/html/autocomplete.html\",\n\t\"./autocomplete.html\": \"./src/html/autocomplete.html\",\n\t\"./contact.\": \"./src/html/contact.html\",\n\t\"./contact.html\": \"./src/html/contact.html\",\n\t\"./footer.\": \"./src/html/footer.html\",\n\t\"./footer.html\": \"./src/html/footer.html\",\n\t\"./home.\": \"./src/html/home.html\",\n\t\"./home.html\": \"./src/html/home.html\",\n\t\"./navbar.\": \"./src/html/navbar.html\",\n\t\"./navbar.html\": \"./src/html/navbar.html\",\n\t\"./netfilmoteka.\": \"./src/html/netfilmoteka.html\",\n\t\"./netfilmoteka.html\": \"./src/html/netfilmoteka.html\",\n\t\"./portfolio.\": \"./src/html/portfolio.html\",\n\t\"./portfolio.html\": \"./src/html/portfolio.html\",\n\t\"./project-details.\": \"./src/html/project-details.html\",\n\t\"./project-details.html\": \"./src/html/project-details.html\",\n\t\"./projects.\": \"./src/html/projects.html\",\n\t\"./projects.html\": \"./src/html/projects.html\",\n\t\"./raffaele.\": \"./src/html/raffaele.html\",\n\t\"./raffaele.html\": \"./src/html/raffaele.html\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/html sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://portfolio/./src/html/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/img/pw_maze_black.png":
/*!***********************************!*\
  !*** ./src/img/pw_maze_black.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"84ef8784a2ea511872fa.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/pw_maze_black.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;