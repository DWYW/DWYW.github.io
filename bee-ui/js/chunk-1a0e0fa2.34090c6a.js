(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a0e0fa2"],{8827:function(s,t,a){t=s.exports=a("2350")(!1),t.push([s.i,"\n.inline .btn--wp {\n  margin: 0 10px 10px 0;\n}\n",""])},e4df:function(s,t,a){var r=a("8827");"string"===typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);var e=a("499e").default;e("518d6554",r,!0,{})},ee30:function(s,t,a){"use strict";a.r(t);var r={data:function(){return{messages:[]}},methods:{notify1:function(s){var t={message:"这是一段提示文字。",duration:3};s&&(t.type=s),this.$_createNotify(t).show()},notify2:function(s){var t={title:"非自动",message:"非自动关闭",duration:0};s&&(t.type=s),this.$_createNotify(t).show()}}},e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("notification 通知")]),s._v(" "),a("h3",[s._v("基本用法")]),s._v(" "),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("div",{staticClass:"inline"},[a("bee-button",{on:{click:function(t){s.notify1()}}},[s._v("默认")]),s._v(" "),a("bee-button",{attrs:{theme:"primary"},on:{click:function(t){s.notify1("warn")}}},[s._v("warn")]),s._v(" "),a("bee-button",{attrs:{theme:"success"},on:{click:function(t){s.notify1("success")}}},[s._v("success")]),s._v(" "),a("bee-button",{attrs:{theme:"error"},on:{click:function(t){s.notify1("error")}}},[s._v("error")])],1)]],2),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'inline'")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"notify1()"')]),s._v(">")]),s._v("默认"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'primary'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"notify1('warn')\"")]),s._v(">")]),s._v("warn"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"notify1('success')\"")]),s._v(">")]),s._v("success"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"notify1('error')\"")]),s._v(">")]),s._v("error"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    notify1 (type) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" options = {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'这是一段提示文字。'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n      }\n\n      type ? options.type = type : "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$_createNotify(options).show()\n    }\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("非自动关闭")]),s._v(" "),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("div",{staticClass:"inline"},[a("bee-button",{on:{click:function(t){s.notify2()}}},[s._v("默认")]),s._v(" "),a("bee-button",{attrs:{theme:"primary"},on:{click:function(t){s.notify2("warn")}}},[s._v("warn")]),s._v(" "),a("bee-button",{attrs:{theme:"success"},on:{click:function(t){s.notify2("success")}}},[s._v("success")]),s._v(" "),a("bee-button",{attrs:{theme:"error"},on:{click:function(t){s.notify2("error")}}},[s._v("error")])],1)]],2),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'inline'")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"notify2()"')]),s._v(">")]),s._v("默认"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'primary'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"notify2('warn')\"")]),s._v(">")]),s._v("warn"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"notify2('success')\"")]),s._v(">")]),s._v("success"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"notify2('error')\"")]),s._v(">")]),s._v("error"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("bee-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    notify2 (type) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" options = {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'非自动'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'非自动关闭'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      }\n\n      type ? options.type = type : "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$_createNotify(options).show()\n    }\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("options")]),s._v(" "),s._m(0)],1)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",[s._v("类型")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("info,warn,success,error")]),s._v(" "),a("td",[s._v("info")])]),s._v(" "),a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("显示的时长")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("3")])]),s._v(" "),a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("通知的标题")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("message")]),s._v(" "),a("td",[s._v("通知的信息")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("-")])])])])}],v=a("2455");function l(s){a("e4df")}var _=!1,p=l,c=null,h=null,i=Object(v["a"])(r,e,n,_,p,c,h);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-1a0e0fa2.34090c6a.js.map