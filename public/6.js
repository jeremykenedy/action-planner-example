webpackJsonp([6],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-3\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Goal.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    next: function next() {
      this.$store.dispatch('goToNextStep');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-11ed2666\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Goal.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "secondary callout shadow" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("form", [
      _c("label", [_vm._v("What area would you like to focus on?")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "button expanded",
          attrs: { type: "submit" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.next($event)
            }
          }
        },
        [_vm._v("Next")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "callout-header" }, [
      _c("h4", [_vm._v("Focus area")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "What area you would like to focus on within the\n       next 90 days?"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group" }, [
      _c("span", { staticClass: "input-group-label" }, [
        _c("i", { staticClass: "fa fa-trophy" })
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "input-group-field",
        attrs: { type: "text", placeholder: "Title for your focus area" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11ed2666", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/Goal.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-3\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Goal.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-11ed2666\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Goal.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/Goal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Goal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11ed2666", Component.options)
  } else {
    hotAPI.reload("data-v-11ed2666", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});