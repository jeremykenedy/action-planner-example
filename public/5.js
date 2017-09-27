webpackJsonp([5],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-3\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Home.vue":
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e434539c\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row align-center" }, [
    _c("div", { staticClass: "small-12 columns" }, [
      _c(
        "div",
        {
          staticClass:
            "callout max600 centered text-center secondary mt-50 shadow"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "button large warning", attrs: { to: "/create" } },
            [_vm._v("GET STARTED")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "callout-header primary" }, [
      _c("h1", [_vm._v("90 Day Action Planner")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row align-center" }, [
      _c("div", { staticClass: "columns small-12 large-7" }, [
        _c("blockquote", { staticClass: "text-left" }, [
          _vm._v(
            "\n            90 days is the perfect unit of time to make headway on your big-picture goals and to give them the focus they need.\n            "
          ),
          _c("cite", [
            _c(
              "a",
              {
                attrs: {
                  target: "_blank",
                  href:
                    "https://www.fastcompany.com/3068537/work-smart/the-one-page-cheat-sheet-to-your-most-productive-90-days-ever"
                }
              },
              [_vm._v("\n                Fast Company\n              ")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns large-7" }, [
        _c("div", { staticClass: "callout text-left" }, [
          _c("ul", { staticClass: "steps circle-bullets" }, [
            _c("li", [
              _c("span", [_vm._v("1")]),
              _vm._v(" PICK THREE THINGS TO FOCUS ON")
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", [_vm._v("2")]),
              _vm._v(" DECIDE HOW YOU’LL JUDGE YOUR PROGRESS")
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", [_vm._v("3")]),
              _vm._v(
                " IDENTIFY WHICH STEPS TO TAKE (AND WHO’S GOING TO TAKE THEM)"
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e434539c", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-3\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Home.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e434539c\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Home.vue")
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
Component.options.__file = "resources/assets/js/pages/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e434539c", Component.options)
  } else {
    hotAPI.reload("data-v-e434539c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});