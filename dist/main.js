/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --clr-primary: rgb(242, 242, 242);\n  --ff-primary: 'Rubik', Arial;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  color: var(--clr-primary);\n  font-family: var(--ff-primary);\n}\n\n.app-container {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  width: clamp(370px, 90%, 1100px);\n  margin-inline: auto;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  border-radius: 12px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  transition: 500ms;\n}\n\nmain {\n  display: grid;\n  align-items: flex-end;\n  position: relative;\n  height: 54vh;\n}\n\n@media screen and (max-width: 640px) {\n  .app-container {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n  }\n  main {\n    display: grid;\n    align-items: flex-end;\n    height: 30vh;\n  }\n}\n\n.app-header {\n  font-size: 2em;\n  position: absolute;\n  top: 2%;\n  left: 7%;\n  padding-top: 1em;\n}\n\n.weather-info {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  padding-bottom: 3em;\n  position: absolute;\n  left: 5%;\n  z-index: 10;\n}\n\n.temperature {\n  font-size: 5em;\n}\n\n.location {\n  font-size: 2.8em;\n}\n\n#location-input {\n  color: white;\n}\n\n.sidebar {\n  background: rgba(110, 110, 110, 0.25);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 6em;\n}\n\n.search-bar {\n  display: flex;\n  justify-content: center;\n  padding-top: 2em;\n  max-width: 90%;\n  margin-inline: auto;\n}\n\n@media screen and (max-width: 499px) {\n  .app-header {\n    font-size: 1em;\n  }\n  .temperature {\n    font-size: 3.2em;\n  }\n  .location {\n    font-size: 1.7em;\n  }\n  .weather-status {\n    font-size: 0.9em;\n  }\n  .weather-info {\n    padding-bottom: 0;\n  }\n  .sidebar {\n    padding-bottom: 2em;\n  }\n}\n\n#location-input {\n  background: none;\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 1.1em;\n  width: 85%;\n}\n#location-input:focus {\n  outline: none;\n}\n#location-input::placeholder {\n  color: #ccc;\n  font-size: 0.8em;\n}\n\n.confirm-location {\n  width: 1.6em;\n  padding: 4px;\n}\n.confirm-location:hover {\n  background-color: rgb(85, 83, 83);\n}\n\n.weather-details {\n  padding-top: 3em;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5em;\n  width: 80%;\n}\n\n.weather-details-header {\n  font-weight: bold;\n  padding-bottom: 1em;\n  font-size: 1.2em;\n}\n\n.cloudy,\n.humidity,\n.wind {\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n}\n\n.converter {\n  display: flex;\n  margin-inline: auto;\n  margin-top: 3em;\n  gap: 0.8em;\n  align-items: center;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 27px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;EAChC,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B;qCACmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,aAAa;IACb,qBAAqB;IACrB,YAAY;EACd;AACF;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qCAAqC;EACrC,2BAA2B;EAC3B,mCAAmC;EACnC,2CAA2C;EAC3C,6BAA6B;EAC7B,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE;IACE,cAAc;EAChB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;;EAGE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --clr-primary: rgb(242, 242, 242);\n  --ff-primary: 'Rubik', Arial;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  color: var(--clr-primary);\n  font-family: var(--ff-primary);\n}\n\n.app-container {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  width: clamp(370px, 90%, 1100px);\n  margin-inline: auto;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  border-radius: 12px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  transition: 500ms;\n}\n\nmain {\n  display: grid;\n  align-items: flex-end;\n  position: relative;\n  height: 54vh;\n}\n\n@media screen and (max-width: 640px) {\n  .app-container {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n  }\n  main {\n    display: grid;\n    align-items: flex-end;\n    height: 30vh;\n  }\n}\n\n.app-header {\n  font-size: 2em;\n  position: absolute;\n  top: 2%;\n  left: 7%;\n  padding-top: 1em;\n}\n\n.weather-info {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  padding-bottom: 3em;\n  position: absolute;\n  left: 5%;\n  z-index: 10;\n}\n\n.temperature {\n  font-size: 5em;\n}\n\n.location {\n  font-size: 2.8em;\n}\n\n#location-input {\n  color: white;\n}\n\n.sidebar {\n  background: rgba(110, 110, 110, 0.25);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 6em;\n}\n\n.search-bar {\n  display: flex;\n  justify-content: center;\n  padding-top: 2em;\n  max-width: 90%;\n  margin-inline: auto;\n}\n\n@media screen and (max-width: 499px) {\n  .app-header {\n    font-size: 1em;\n  }\n  .temperature {\n    font-size: 3.2em;\n  }\n  .location {\n    font-size: 1.7em;\n  }\n  .weather-status {\n    font-size: 0.9em;\n  }\n  .weather-info {\n    padding-bottom: 0;\n  }\n  .sidebar {\n    padding-bottom: 2em;\n  }\n}\n\n#location-input {\n  background: none;\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 1.1em;\n  width: 85%;\n}\n#location-input:focus {\n  outline: none;\n}\n#location-input::placeholder {\n  color: #ccc;\n  font-size: 0.8em;\n}\n\n.confirm-location {\n  width: 1.6em;\n  padding: 4px;\n}\n.confirm-location:hover {\n  background-color: rgb(85, 83, 83);\n}\n\n.weather-details {\n  padding-top: 3em;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5em;\n  width: 80%;\n}\n\n.weather-details-header {\n  font-weight: bold;\n  padding-bottom: 1em;\n  font-size: 1.2em;\n}\n\n.cloudy,\n.humidity,\n.wind {\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n}\n\n.converter {\n  display: flex;\n  margin-inline: auto;\n  margin-top: 3em;\n  gap: 0.8em;\n  align-items: center;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 27px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayDOM */ "./src/displayDOM");
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */


async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1f8466b46ae8431d9b7115619232703&q=${location}`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    // console.log(weatherData);
    (0,_displayDOM__WEBPACK_IMPORTED_MODULE_0__.displayWeatherData)(weatherData);
    (0,_displayDOM__WEBPACK_IMPORTED_MODULE_0__.setBackground)(weatherData);
  } catch (error) {
    alert(`ERROR: No matching location found.`);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);


/***/ }),

/***/ "./src/displayDOM":
/*!************************!*\
  !*** ./src/displayDOM ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayWeatherData": () => (/* binding */ displayWeatherData),
/* harmony export */   "initaliseDOM": () => (/* binding */ initaliseDOM),
/* harmony export */   "setBackground": () => (/* binding */ setBackground)
/* harmony export */ });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* eslint-disable import/no-cycle */


function initaliseDOM() {
  const submitLocation = document.querySelector('.confirm-location');
  submitLocation.addEventListener('click', () => {
    const locationInput = document.getElementById('location-input').value;
    console.log(locationInput);
    (0,_API__WEBPACK_IMPORTED_MODULE_0__["default"])(locationInput);
  });

  const searchInput = document.getElementById('location-input');
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const locationInput = document.getElementById('location-input').value;
      (0,_API__WEBPACK_IMPORTED_MODULE_0__["default"])(locationInput);
    }
  });
}

function displayWeatherData(data) {
  const toggle = document.querySelector('.toggle');
  const temperature = document.querySelector('.temperature');

  if (toggle.checked) {
    temperature.innerHTML = `${data.current.temp_f}°`;
  } else {
    temperature.innerHTML = `${data.current.temp_c}°`;
  }

  const location = document.querySelector('.location');
  location.innerHTML = data.location.name;

  const weatherStatus = document.querySelector('.weather-status');
  weatherStatus.innerHTML = data.current.condition.text;

  const cloudy = document.querySelector('.cloudy-value');
  cloudy.innerHTML = `${data.current.cloud}%`;

  const humidity = document.querySelector('.humidity-value');
  humidity.innerHTML = `${data.current.humidity}%`;

  const wind = document.querySelector('.wind-value');
  wind.innerHTML = `${data.current.wind_kph}km/h`;
}

function setBackground(data) {
  const weatherCondition = data.current.condition.text;

  if (weatherCondition === 'Partly cloudy') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/Partly-cloudy.jpg)';
  } else if (
    weatherCondition === 'Light rain' ||
    weatherCondition === 'Light drizzle' ||
    weatherCondition === 'Light sleet showers'
  ) {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/light-rain.jpg)';
  } else if (weatherCondition === 'Overcast') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/overcast.jpg)';
  } else if (weatherCondition === 'Clear') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/clear.jpg)';
  } else if (weatherCondition === 'Fog' || weatherCondition === 'Mist') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/fog.jpg)';
  } else if (weatherCondition === 'Sunny') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/sunny.jpg)';
  } else if (weatherCondition === 'Patchy rain possible') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/patchy-rain.jpg)';
  } else if (
    weatherCondition === 'Moderate rain' ||
    weatherCondition === 'Moderate or heavy rain shower'
  ) {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/moderate-rain.jpg)';
  } else if (
    weatherCondition === 'Thundery outbreaks possible' ||
    weatherCondition === 'Moderate or heavy rain with thunder' ||
    weatherCondition === 'Patchy light rain with thunder'
  ) {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/thunder.jpg)';
  } else if (weatherCondition === 'Light snow') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/lightsnow.jpg)';
  } else if (weatherCondition === 'Heavy snow') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/heavy-snow.jpg)';
  } else if (weatherCondition === 'Cloudy') {
    document.querySelector('.app-container').style.backgroundImage =
      'url(img/cloudy.jpg)';
  }
}

const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
  let tempValue = document.querySelector('.temperature').innerText;
  tempValue = +tempValue.substring(0, tempValue.length - 1);

  if (toggle.checked) {
    tempValue = (tempValue * 9) / 5 + 32;
    tempValue = Math.round(tempValue * 10) / 10;
    document.querySelector('.temperature').innerText = `${tempValue}°`;
  } else {
    tempValue = Math.round((tempValue - 32) * (5 / 9) * 10) / 10;
    document.querySelector('.temperature').innerText = `${tempValue}°`;
  }
});




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _displayDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayDOM */ "./src/displayDOM");




(0,_API__WEBPACK_IMPORTED_MODULE_1__["default"])('melbourne');
(0,_displayDOM__WEBPACK_IMPORTED_MODULE_2__.initaliseDOM)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7QUFDUzs7QUFFNUMsZ0RBQWM7QUFDZCx5REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5RE9NIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNsci1wcmltYXJ5OiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAtLWZmLXByaW1hcnk6ICdSdWJpaycsIEFyaWFsO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgd2lkdGg6IGNsYW1wKDM3MHB4LCA5MCUsIDExMDBweCk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOXB4IDM4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDE1cHggMTJweDtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDU0dmg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxuICAuYXBwLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICB9XFxufVxcblxcbi5hcHAtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyJTtcXG4gIGxlZnQ6IDclO1xcbiAgcGFkZGluZy10b3A6IDFlbTtcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgcGFkZGluZy1ib3R0b206IDNlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDVlbTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMi44ZW07XFxufVxcblxcbiNsb2NhdGlvbi1pbnB1dCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC4yNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogNmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTlweCkge1xcbiAgLmFwcC1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG4gIC50ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMy4yZW07XFxuICB9XFxuICAubG9jYXRpb24ge1xcbiAgICBmb250LXNpemU6IDEuN2VtO1xcbiAgfVxcbiAgLndlYXRoZXItc3RhdHVzIHtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gIH1cXG4gIC53ZWF0aGVyLWluZm8ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcXG4gIH1cXG59XFxuXFxuI2xvY2F0aW9uLWlucHV0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICB3aWR0aDogODUlO1xcbn1cXG4jbG9jYXRpb24taW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2xvY2F0aW9uLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi5jb25maXJtLWxvY2F0aW9uIHtcXG4gIHdpZHRoOiAxLjZlbTtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuLmNvbmZpcm0tbG9jYXRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCA4MywgODMpO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzIHtcXG4gIHBhZGRpbmctdG9wOiAzZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNWVtO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlscy1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLmNsb3VkeSxcXG4uaHVtaWRpdHksXFxuLndpbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udmVydGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbiAgZ2FwOiAwLjhlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCO3FDQUNtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLDJDQUEyQztFQUMzQyw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2xyLXByaW1hcnk6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gIC0tZmYtcHJpbWFyeTogJ1J1YmlrJywgQXJpYWw7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICB3aWR0aDogY2xhbXAoMzcwcHgsIDkwJSwgMTEwMHB4KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTVweCAxMnB4O1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTR2aDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXG4gIC5hcHAtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gIH1cXG59XFxuXFxuLmFwcC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIlO1xcbiAgbGVmdDogNyU7XFxuICBwYWRkaW5nLXRvcDogMWVtO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNSU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAyLjhlbTtcXG59XFxuXFxuI2xvY2F0aW9uLWlucHV0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjI1KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctYm90dG9tOiA2ZW07XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAyZW07XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5OXB4KSB7XFxuICAuYXBwLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcbiAgLnRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiAzLjJlbTtcXG4gIH1cXG4gIC5sb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43ZW07XFxuICB9XFxuICAud2VhdGhlci1zdGF0dXMge1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgfVxcbiAgLndlYXRoZXItaW5mbyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcbiAgLnNpZGViYXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbiAgfVxcbn1cXG5cXG4jbG9jYXRpb24taW5wdXQge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIHdpZHRoOiA4NSU7XFxufVxcbiNsb2NhdGlvbi1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jbG9jYXRpb24taW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLmNvbmZpcm0tbG9jYXRpb24ge1xcbiAgd2lkdGg6IDEuNmVtO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG4uY29uZmlybS1sb2NhdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDgzLCA4Myk7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMge1xcbiAgcGFkZGluZy10b3A6IDNlbTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41ZW07XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzLWhlYWRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4uY2xvdWR5LFxcbi5odW1pZGl0eSxcXG4ud2luZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb252ZXJ0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAzZW07XFxuICBnYXA6IDAuOGVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogMjdweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG59XFxuXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG5pbXBvcnQgeyBkaXNwbGF5V2VhdGhlckRhdGEsIHNldEJhY2tncm91bmQgfSBmcm9tICcuL2Rpc3BsYXlET00nO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xZjg0NjZiNDZhZTg0MzFkOWI3MTE1NjE5MjMyNzAzJnE9JHtsb2NhdGlvbn1gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIGRpc3BsYXlXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgc2V0QmFja2dyb3VuZCh3ZWF0aGVyRGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoYEVSUk9SOiBObyBtYXRjaGluZyBsb2NhdGlvbiBmb3VuZC5gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vQVBJJztcblxuZnVuY3Rpb24gaW5pdGFsaXNlRE9NKCkge1xuICBjb25zdCBzdWJtaXRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWxvY2F0aW9uJyk7XG4gIHN1Ym1pdExvY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24taW5wdXQnKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbklucHV0KTtcbiAgICBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbklucHV0KTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24taW5wdXQnKTtcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLWlucHV0JykudmFsdWU7XG4gICAgICBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbklucHV0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSkge1xuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG5cbiAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LnRlbXBfZn3CsGA7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LnRlbXBfY33CsGA7XG4gIH1cblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xuICBsb2NhdGlvbi5pbm5lckhUTUwgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG5cbiAgY29uc3Qgd2VhdGhlclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXN0YXR1cycpO1xuICB3ZWF0aGVyU3RhdHVzLmlubmVySFRNTCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcblxuICBjb25zdCBjbG91ZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvdWR5LXZhbHVlJyk7XG4gIGNsb3VkeS5pbm5lckhUTUwgPSBgJHtkYXRhLmN1cnJlbnQuY2xvdWR9JWA7XG5cbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktdmFsdWUnKTtcbiAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuXG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC12YWx1ZScpO1xuICB3aW5kLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC53aW5kX2twaH1rbS9oYDtcbn1cblxuZnVuY3Rpb24gc2V0QmFja2dyb3VuZChkYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgaWYgKHdlYXRoZXJDb25kaXRpb24gPT09ICdQYXJ0bHkgY2xvdWR5Jykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICd1cmwoaW1nL1BhcnRseS1jbG91ZHkuanBnKSc7XG4gIH0gZWxzZSBpZiAoXG4gICAgd2VhdGhlckNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHJhaW4nIHx8XG4gICAgd2VhdGhlckNvbmRpdGlvbiA9PT0gJ0xpZ2h0IGRyaXp6bGUnIHx8XG4gICAgd2VhdGhlckNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHNsZWV0IHNob3dlcnMnXG4gICkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICd1cmwoaW1nL2xpZ2h0LXJhaW4uanBnKSc7XG4gIH0gZWxzZSBpZiAod2VhdGhlckNvbmRpdGlvbiA9PT0gJ092ZXJjYXN0Jykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICd1cmwoaW1nL292ZXJjYXN0LmpwZyknO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJDb25kaXRpb24gPT09ICdDbGVhcicpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRhaW5lcicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAndXJsKGltZy9jbGVhci5qcGcpJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVyQ29uZGl0aW9uID09PSAnRm9nJyB8fCB3ZWF0aGVyQ29uZGl0aW9uID09PSAnTWlzdCcpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRhaW5lcicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAndXJsKGltZy9mb2cuanBnKSc7XG4gIH0gZWxzZSBpZiAod2VhdGhlckNvbmRpdGlvbiA9PT0gJ1N1bm55Jykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICd1cmwoaW1nL3N1bm55LmpwZyknO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJDb25kaXRpb24gPT09ICdQYXRjaHkgcmFpbiBwb3NzaWJsZScpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRhaW5lcicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAndXJsKGltZy9wYXRjaHktcmFpbi5qcGcpJztcbiAgfSBlbHNlIGlmIChcbiAgICB3ZWF0aGVyQ29uZGl0aW9uID09PSAnTW9kZXJhdGUgcmFpbicgfHxcbiAgICB3ZWF0aGVyQ29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInXG4gICkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICd1cmwoaW1nL21vZGVyYXRlLXJhaW4uanBnKSc7XG4gIH0gZWxzZSBpZiAoXG4gICAgd2VhdGhlckNvbmRpdGlvbiA9PT0gJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZScgfHxcbiAgICB3ZWF0aGVyQ29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXInIHx8XG4gICAgd2VhdGhlckNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcidcbiAgKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1jb250YWluZXInKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgJ3VybChpbWcvdGh1bmRlci5qcGcpJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVyQ29uZGl0aW9uID09PSAnTGlnaHQgc25vdycpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRhaW5lcicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAndXJsKGltZy9saWdodHNub3cuanBnKSc7XG4gIH0gZWxzZSBpZiAod2VhdGhlckNvbmRpdGlvbiA9PT0gJ0hlYXZ5IHNub3cnKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1jb250YWluZXInKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgJ3VybChpbWcvaGVhdnktc25vdy5qcGcpJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVyQ29uZGl0aW9uID09PSAnQ2xvdWR5Jykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICd1cmwoaW1nL2Nsb3VkeS5qcGcpJztcbiAgfVxufVxuXG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxldCB0ZW1wVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKS5pbm5lclRleHQ7XG4gIHRlbXBWYWx1ZSA9ICt0ZW1wVmFsdWUuc3Vic3RyaW5nKDAsIHRlbXBWYWx1ZS5sZW5ndGggLSAxKTtcblxuICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICB0ZW1wVmFsdWUgPSAodGVtcFZhbHVlICogOSkgLyA1ICsgMzI7XG4gICAgdGVtcFZhbHVlID0gTWF0aC5yb3VuZCh0ZW1wVmFsdWUgKiAxMCkgLyAxMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKS5pbm5lclRleHQgPSBgJHt0ZW1wVmFsdWV9wrBgO1xuICB9IGVsc2Uge1xuICAgIHRlbXBWYWx1ZSA9IE1hdGgucm91bmQoKHRlbXBWYWx1ZSAtIDMyKSAqICg1IC8gOSkgKiAxMCkgLyAxMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKS5pbm5lclRleHQgPSBgJHt0ZW1wVmFsdWV9wrBgO1xuICB9XG59KTtcblxuZXhwb3J0IHsgaW5pdGFsaXNlRE9NLCBkaXNwbGF5V2VhdGhlckRhdGEsIHNldEJhY2tncm91bmQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vQVBJJztcbmltcG9ydCB7IGluaXRhbGlzZURPTSB9IGZyb20gJy4vZGlzcGxheURPTSc7XG5cbmdldFdlYXRoZXJEYXRhKCdtZWxib3VybmUnKTtcbmluaXRhbGlzZURPTSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9