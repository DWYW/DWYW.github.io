(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5bcdc14"],{4724:function(s,a,t){a=s.exports=t("2350")(!1),a.push([s.i,"\n.inline .btn--wp {\n  margin: 0 10px 10px 0;\n}\n.loading-wrapper {\n  padding: 20px 0;\n}\n",""])},a0e9:function(s,a,t){var r=t("4724");"string"===typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);var n=t("499e").default;n("40ffff96",r,!0,{})},ce39:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{laoding:[],loading1:!1}},methods:{addLoading1:function(s){var a=this.$_createLoading({type:s});a.show(),window.setTimeout(function(){a.hide()},3e3)},toggleLoading:function(){var s=this;this.loading1=!0,setTimeout(function(){s.loading1=!1},2e3)}}},n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("loading 加载")]),s._v(" "),t("h3",[s._v("基本用法")]),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",{ref:"base",staticClass:"inline loading-wrapper"},[t("bee-button",{on:{click:function(a){s.addLoading1(0)}}},[s._v("第一种")]),s._v(" "),t("bee-button",{attrs:{theme:"success"},on:{click:function(a){s.addLoading1(1)}}},[s._v("第二种")]),s._v(" "),t("bee-button",{attrs:{theme:"error"},on:{click:function(a){s.addLoading1(2)}}},[s._v("第三种")])],1)]],2),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'inline loading-wrapper'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'base'")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"addLoading1(0)"')]),s._v(">")]),s._v("第一种"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"addLoading1(1)"')]),s._v(">")]),s._v("第二种"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"addLoading1(2)"')]),s._v(">")]),s._v("第三种"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    addLoading1 (type) {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" item = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$_createLoading({\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": type\n      })\n\n      item.show()\n\n      "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".setTimeout("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        item.hide()\n      }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(")\n    } \n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),t("h3",[s._v("通过指令添加")]),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading1,expression:"loading1"}],ref:"base",staticClass:"inline loading-wrapper",attrs:{"data-type":"1","data-text":"loading"}},[t("bee-button",{on:{click:s.toggleLoading}},[s._v("显示loading")])],1)]],2),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'inline loading-wrapper'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'base'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-loading")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'loading1'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data-type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data-text")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'loading'")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"toggleLoading"')]),s._v(">")]),s._v("显示loading"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    data () {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    },\n    toggleLoading () {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading1 = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n\n      setTimeout("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading1 = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),t("h3",[s._v("options")]),s._v(" "),s._m(0)],1)},e=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("parent")]),s._v(" "),t("td",[s._v("要添加的节点")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("body")])]),s._v(" "),t("tr",[t("td",[s._v("type")]),s._v(" "),t("td",[s._v("类型")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("0,1,2")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("display")]),s._v(" "),t("td",[s._v("文字和loading之间的排列方式")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("block,inline")]),s._v(" "),t("td",[s._v("block")])]),s._v(" "),t("tr",[t("td",[s._v("text")]),s._v(" "),t("td",[s._v("加载提示的文字")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("加载中")])])])])}],l=t("2455");function v(s){t("a0e9")}var _=!1,p=v,c=null,i=null,h=Object(l["a"])(r,n,e,_,p,c,i);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-b5bcdc14.d8d454bb.js.map