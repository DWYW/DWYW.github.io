(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21da19"],{d1b8:function(s,t,a){"use strict";a.r(t);var l=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Dialog")]),a("h3",[s._v("基本用法")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("bee-button",{on:{click:function(t){s.base.show=!0}}},[s._v("open dialog")]),a("bee-dialog",{attrs:{width:"400px",title:"自定义标题",cancelText:"❌",confirmText:"✔️"},on:{beforeEnter:s.beforeEnter,afterLeave:s.afterLeave,close:s.close,cancel:s.cancel,confirm:s.confirm},model:{value:s.base.show,callback:function(t){s.$set(s.base,"show",t)},expression:"base.show"}},[a("p",[s._v("这里是一段测试内容")]),a("div",[a("bee-select",{attrs:{options:s.options},model:{value:s.base.fruit,callback:function(t){s.$set(s.base,"fruit",t)},expression:"base.fruit"}})],1)])]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'base.show = true'")]),s._v(">")]),s._v("open dialog"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'base.show'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'400px'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'自定义标题'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cancelText")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'❌'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("confirmText")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'✔️'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@beforeEnter")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'beforeEnter'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@afterLeave")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'afterLeave'")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@close")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'close'")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@cancel")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cancel'")]),s._v("         \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@confirm")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'confirm'")]),s._v("\n  >")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("这里是一段测试内容"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'options'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'base.fruit'")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-select")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("base")]),s._v(": {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fruit")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n      }\n    }\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n    options () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("  [{\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'香蕉'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }, {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'苹果'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n      }, {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'梨'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n      }, {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'奇异果'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      }]\n    }\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    beforeEnter () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'before enter'")]),s._v(")\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".base.fruit = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n    },\n\n    afterLeave () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'after leave'")]),s._v(")\n    },\n\n    close () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'close event'")]),s._v(")\n    },\n    cancel () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cancel event'")]),s._v(")\n    },\n    confirm () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'confirm event'")]),s._v(")\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'you selected:'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".base.fruit, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".options.find("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("item")]),s._v(" =>")]),s._v(" item.value === "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".base.fruit))\n    }\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("按钮的显示")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("bee-button",{staticStyle:{"margin-right":"10px"},on:{click:function(t){s.closeDisabled=!0}}},[s._v("不显示关闭")]),a("bee-button",{staticStyle:{"margin-right":"10px"},on:{click:function(t){s.cancelDisabled=!0}}},[s._v("不显示取消")]),a("bee-button",{staticStyle:{"margin-right":"10px"},on:{click:function(t){s.confirmDisabled=!0}}},[s._v("不显示确认")]),a("bee-button",{staticStyle:{"margin-right":"10px"},on:{click:function(t){s.footerDisabled=!0}}},[s._v("不显示确认和取消")]),a("bee-dialog",{attrs:{"close-visible":!1},model:{value:s.closeDisabled,callback:function(t){s.closeDisabled=t},expression:"closeDisabled"}},[s._v("不显示关闭")]),a("bee-dialog",{attrs:{"cancel-visible":!1},model:{value:s.cancelDisabled,callback:function(t){s.cancelDisabled=t},expression:"cancelDisabled"}},[s._v("不显示取消")]),a("bee-dialog",{attrs:{"confirm-visible":!1},model:{value:s.confirmDisabled,callback:function(t){s.confirmDisabled=t},expression:"confirmDisabled"}},[s._v("不显示确认")]),a("bee-dialog",{attrs:{"cancel-visible":!1,"confirm-visible":!1},model:{value:s.footerDisabled,callback:function(t){s.footerDisabled=t},expression:"footerDisabled"}},[s._v("不显示确认和取消")])]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'closeDisabled = true'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'margin-right: 10px;'")]),s._v(">")]),s._v("不显示关闭"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cancelDisabled = true'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'margin-right: 10px;'")]),s._v(">")]),s._v("不显示取消"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'confirmDisabled = true'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'margin-right: 10px;'")]),s._v(">")]),s._v("不显示确认"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'footerDisabled = true'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'margin-right: 10px;'")]),s._v(">")]),s._v("不显示确认和取消"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'closeDisabled'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":close-visible")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'false'")]),s._v(">")]),s._v("不显示关闭"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cancelDisabled'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cancel-visible")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'false'")]),s._v(">")]),s._v("不显示取消"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'confirmDisabled'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":confirm-visible")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'false'")]),s._v(">")]),s._v("不显示确认"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'footerDisabled'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cancel-visible")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'false'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":confirm-visible")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'false'")]),s._v(">")]),s._v("不显示确认和取消"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("阻止提交关闭")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("bee-button",{on:{click:function(t){s.stopConfirmHide=!0}}},[s._v("阻止提交关闭")]),a("bee-dialog",{attrs:{"loading-text":"处理中","loading-type":"pie",loading:s.loading,sync:!1},on:{cancel:s.cancel,confirm:s.confirmSync},model:{value:s.stopConfirmHide,callback:function(t){s.stopConfirmHide=t},expression:"stopConfirmHide"}},[s._v("阻止提交关闭")])]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'stopConfirmHide = true'")]),s._v(">")]),s._v("阻止提交关闭"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'stopConfirmHide'")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading-text")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'处理中'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading-type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'pie'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":loading")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'loading'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'false'")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@cancel")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cancel'")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@confirm")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'confirmSync'")]),s._v(" \n  >")]),s._v("阻止提交关闭"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-dialog")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stopConfirmHide")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    cancel () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cancel event'")]),s._v(")\n    },\n    confirmSync (done) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n\n      setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        done()\n      }, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n    }\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("属性")]),s._m(0),a("br"),a("br"),a("h3",[s._v("事件")]),s._m(1),a("br"),s._m(2)],1)},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("说明")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")]),a("th",[s._v("版本支持")])])]),a("tbody",[a("tr",[a("td",[s._v("value")]),a("td",[s._v("dialog是否显示，可使用 v-model 双向绑定数据。")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("—")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("width")]),a("td",[s._v("dialog的宽度")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("500px")]),a("td",[s._v("*")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("标题")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("提示")]),a("td",[s._v("*")])]),a("tr",[a("td",[s._v("closeVisible")]),a("td",[s._v("是否显示关闭按钮")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("cancelVisible")]),a("td",[s._v("是否显示取消按钮")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("cancelText")]),a("td",[s._v("取消按钮显示的文字")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("取消")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("confirmVisible")]),a("td",[s._v("是否显示确定按钮")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("confirmText")]),a("td",[s._v("确定按钮显示的文字")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("确定")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("loading")]),a("td",[s._v("是否添加loading效果")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("loadingType")]),a("td",[s._v("loading类型")]),a("td",[s._v("String")]),a("td",[a("a",{attrs:{href:"#/components/loading"}},[s._v("详细见loading")])]),a("td",[a("a",{attrs:{href:"#/components/loading"}},[s._v("详细见loading")])]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("loadingText")]),a("td",[s._v("loading加载提示的文字")]),a("td",[s._v("String")]),a("td",[a("a",{attrs:{href:"#/components/loading"}},[s._v("详细见loading")])]),a("td",[a("a",{attrs:{href:"#/components/loading"}},[s._v("详细见loading")])]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("sync")]),a("td",[s._v("confirm事件是否是同步事件")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("stopPenetrate")]),a("td",[s._v("是否阻止鼠标的穿透行为")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")]),a("td",[s._v("1.0.0")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件")]),a("th",[s._v("说明")]),a("th",[s._v("版本支持")])])]),a("tbody",[a("tr",[a("td",[s._v("beforeEnter")]),a("td",[s._v("出现之前的回调")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("afterLeave")]),a("td",[s._v("消失之后的回调")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("close")]),a("td",[s._v("关闭行为的回调")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("cancel")]),a("td",[s._v("取消行为的回调")]),a("td",[s._v("1.0.0")])]),a("tr",[a("td",[s._v("confirm")]),a("td",[s._v("确认行为的回调")]),a("td",[s._v("1.0.0")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("blockquote",[a("p",[s._v("1.0.0之前，关于 close 的事件执行，"),a("br"),s._v(" closeBtnFun 和 cancelBtnFun 如果都设定了，则执行 closeBtnFun；如果设定了其中一个，则执行其中的一个。"),a("br"),a("br"),s._v(" 1.0.0开始，"),a("br"),s._v(" cancel事件执行完之后，如果存在close事件，则自动调用close事件。")])])}],r=(a("7db0"),{data:function(){return{base:{show:!1,fruit:null},closeDisabled:!1,cancelDisabled:!1,confirmDisabled:!1,footerDisabled:!1,stopConfirmHide:!1,loading:!1}},computed:{options:function(){return[{label:"香蕉",value:1},{label:"苹果",value:2},{label:"梨",value:3},{label:"奇异果",value:4}]}},methods:{beforeEnter:function(){console.log("before enter"),this.base.fruit=null},afterLeave:function(){console.log("after leave")},close:function(){console.log("close event")},cancel:function(){console.log("cancel event")},confirm:function(){var s=this;console.log("confirm event"),console.log("you selected:",this.base.fruit,this.options.find((function(t){return t.value===s.base.fruit})))},confirmSync:function(s){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1,s()}),1e3)}}}),n=r,v=a("2877"),_=Object(v["a"])(n,l,e,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d21da19.baac27fd.js.map