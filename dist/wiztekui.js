!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wiztekui",[],t):"object"==typeof exports?exports.wiztekui=t():e.wiztekui=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(e,t){e.exports=function(e,t,n,o,i,a){var r,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(r=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId=i);var c;if(a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):o&&(c=o),c){var l=d.functional,f=l?d.render:d.beforeCreate;l?(d._injectStyles=c,d.render=function(e,t){return c.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:s,options:d}}},function(e,t,n){"use strict";t.a={name:"wzButton",props:{type:{type:String,default:""},size:{type:String,default:""},icon:{type:String,default:""},nativeType:{type:String,default:"button"},autofocus:Boolean,loading:Boolean,disabled:Boolean},computed:{buttonSize:function(){return this.size},buttonDisabled:function(){return this.disabled}},methods:{handleClick:function(e){this.$emit("change",e)}}}},function(e,t,n){"use strict";t.a={name:"wzCard",props:{header:{},bodyStyle:{},shadow:{type:String},type:{type:String,default:""}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=n(6),a=[o.a,i.a],r=function e(t){a.forEach(function(e){t.component(e.name,e)}),"undefined"!=typeof window&&window.Vue&&e(window.Vue)};t.default={install:r}},function(e,t,n){"use strict";var o=n(1),i=n(5),a=n(0),r=a(o.a,i.a,!1,null,null,null);t.a=r.exports},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"wz-button",class:[e.type?"wz-button--"+e.type:"",e.buttonSize?"wz-button--"+e.buttonSize:"",{"is-disabled":e.buttonDisabled,"is-loading":e.loading}],attrs:{autofocus:e.autofocus,type:e.nativeType,disabled:e.buttonDisabled||e.loading},on:{click:e.handleClick}},[e.loading?n("i",{staticClass:"wz-icon-loading"}):e._e(),e._v(" "),e.icon&&!e.loading?n("i",{class:e.icon}):e._e(),e._v(" "),e.$slots.default?n("span",[e._t("default")],2):e._e()])},i=[],a={render:o,staticRenderFns:i};t.a=a},function(e,t,n){"use strict";var o=n(2),i=n(7),a=n(0),r=a(o.a,i.a,!1,null,null,null);t.a=r.exports},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wz-card",class:[e.shadow?"is-"+e.shadow+"-shadow":"is-always-shadow",e.type?"wz-card--"+e.type:""]},[e.$slots.header||e.header?n("div",{class:["wz-card__header",e.type?"wz-card__header--"+e.type:""]},[e._t("header",[e._v(e._s(e.header))])],2):e._e(),e._v(" "),n("div",{staticClass:"wz-card__body",style:e.bodyStyle},[e._t("default")],2)])},i=[],a={render:o,staticRenderFns:i};t.a=a}])});