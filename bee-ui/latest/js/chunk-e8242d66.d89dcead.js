(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8242d66"],{2311:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-page"},[n("Header"),n("div",{staticClass:"page-body"},[n("Nav",{attrs:{left:t.left}}),n("bee-scrollbar",{ref:"scrollbar",attrs:{"scroll-element":t.scrollDom},on:{"update:scrollElement":function(e){t.scrollDom=e},"update:scroll-element":function(e){t.scrollDom=e}}},[n("div",{ref:"PW",staticClass:"pageer"},[n("router-view",{staticClass:"contentper md"}),n("iframe",{ref:"reference",staticClass:"resize-reference",attrs:{src:"about:blank",frameborder:"0"}})],1)])],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["system-header",{fixed:t.fixed}]},[n("div",{staticClass:"header-content"},[n("router-link",{staticClass:"to-home",attrs:{to:"/"}}),n("ul",{staticClass:"header-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{class:[{actived:/components/.test(t.$route.path)}],attrs:{to:"/components/install"}},[t._v("组件")])],1),t._m(0)])],1)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item github"},[n("a",{attrs:{href:"https://github.com/DWYW/bee-ui",target:"_blank"}})])}],o={props:{fixed:{type:Boolean,default:!0}}},c=o,i=(n("a901"),n("2877")),u=Object(i["a"])(c,r,l,!1,null,null,null),f=u.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"nav",staticClass:"system-nav",style:{left:t.left}},[n("bee-scrollbar",{attrs:{"show-type":"hover"}},[n("ul",{staticClass:"groupper"},t._l(t.navs,(function(e,a){return n("li",{key:"group-"+a,staticClass:"bee-group-item"},[n("p",{staticClass:"group-label"},[t._v(t._s(e.label))]),e.children?n("ul",{staticClass:"navper"},t._l(e.children,(function(e,s){return n("li",{key:"nav-"+a+"-"+s,staticClass:"nav-item"},[n("router-link",{attrs:{to:"/components/"+e.path,"active-class":"actived"}},[t._v(t._s(e.label))])],1)})),0):t._e()])})),0)])],1)},d=[],m=n("0a57"),h={props:{left:null},data:function(){return{navs:m["a"]}}},p=h,b=(n("c4da"),Object(i["a"])(p,v,d,!1,null,null,null)),C=b.exports,_=n("9f12"),g=n("53fe"),w=function(){function t(){Object(_["a"])(this,t)}return Object(g["a"])(t,null,[{key:"add",value:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.addEventListener?t.addEventListener(e,n,a):t.attachEvent?t.attachEvent("on".concat(e),n,a):t["on".concat(e)]=n}},{key:"remove",value:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener?t.removeEventListener(e,n,a):t.detachEvent?t.detachEvent("on".concat(e),n,a):t["on".concat(e)]=null}}]),t}(),k={components:{Header:f,Nav:C},data:function(){return{left:null,scrollDom:null}},mounted:function(){var t=this;this.mountLeft(),w.add(window,"resize",this.mountLeft),this.$refs.reference.contentWindow.onresize=function(){t.$refs.scrollbar.updateSizeConfig()}},beforeDestroy:function(){w.remove(window,"resize",this.mountLeft)},methods:{mountLeft:function(){this.left="".concat(this.$refs.PW.getBoundingClientRect().left+10,"px")}},watch:{$route:function(){var t=this;this.$nextTick((function(){t.scrollDom.scrollTop=0}))}}},E=k,y=(n("b21b"),Object(i["a"])(E,a,s,!1,null,null,null));e["default"]=y.exports},"328b":function(t,e,n){},"3a35":function(t,e,n){},9353:function(t,e,n){},a901:function(t,e,n){"use strict";var a=n("328b"),s=n.n(a);s.a},b21b:function(t,e,n){"use strict";var a=n("9353"),s=n.n(a);s.a},c4da:function(t,e,n){"use strict";var a=n("3a35"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-e8242d66.d89dcead.js.map