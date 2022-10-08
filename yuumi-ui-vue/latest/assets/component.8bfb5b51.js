import{_ as g,f as C,y as v,g as r,z as A,A as B,B as w,r as _,c as o,b as t,t as d,d as p,w as f,k as D,o as u,F as E,a as F,u as k,C as y}from"./index.eb4fdf2c.js";var S=[{label:"\u5FEB\u901F\u5F00\u59CB",children:[{name:"Install",label:"\u5B89\u88C5",path:"/doc/install"}]},{label:"\u57FA\u7840\u7EC4\u4EF6",children:[{name:"Icon",label:"\u56FE\u6807",path:"/doc/icon"},{name:"Button",label:"\u6309\u94AE",path:"/doc/button"},{name:"Input",label:"\u8F93\u5165\u6846",path:"/doc/input"},{name:"Select",label:"\u9009\u9879",path:"/doc/select"},{name:"Cascader",label:"\u7EA7\u8054\u9009\u62E9",path:"/doc/cascader"},{name:"Radio",label:"\u5355\u9009\u6846",path:"/doc/radio"},{name:"Checkbox",label:"\u590D\u9009\u6846",path:"/doc/checkbox"},{name:"Switch",label:"\u5F00\u5173",path:"/doc/switch"},{name:"TimePicker",label:"\u65F6\u95F4\u9009\u62E9\u5668",path:"/doc/time-picker"},{name:"DatePicker",label:"\u65E5\u671F\u9009\u62E9\u5668",path:"/doc/date-picker"},{name:"Table",label:"\u8868\u683C",path:"/doc/table"},{name:"Warning",label:"\u8B66\u544A\u6846",path:"/doc/warning"}]},{label:"\u5F39\u51FA\u5C42",children:[{name:"Dialog",label:"\u5BF9\u8BDD\u6846",path:"/doc/dialog"},{name:"Alert",label:"\u5F39\u7A97",path:"/doc/alert"},{name:"Message",label:"\u6D88\u606F",path:"/doc/message"},{name:"Notification",label:"\u901A\u77E5",path:"/doc/notification"},{name:"Drawer",label:"\u62BD\u5C49",path:"/doc/drawer"},{name:"Tooltip",label:"\u6587\u672C\u63D0\u793A",path:"/doc/tooltip"}]},{label:"\u5176\u4ED6",children:[{name:"Pagination",label:"\u5206\u9875",path:"/doc/pagination"},{name:"Divider",label:"\u5206\u5272\u7EBF",path:"/doc/divider"},{name:"Step",label:"\u6B65\u9AA4\u6761",path:"/doc/step"},{name:"Tabs",label:"\u6807\u7B7E\u9875",path:"/doc/tabs"},{name:"Loading",label:"\u52A0\u8F7D",path:"/doc/loading"},{name:"Empty",label:"\u7A7A\u72B6\u6001",path:"/doc/empty"},{name:"Tree",label:"\u6811\u5F62\u7EC4\u4EF6",path:"/doc/tree"},{name:"Menu",label:"\u4FA7\u8FB9\u680F\u83DC\u5355\u7EC4\u4EF6",path:"/doc/menu"}]}],$="/yuumi-ui-vue/latest/assets/logo.84b5ae60.png";const R=C({setup(){const l=y(),m=v(()=>"v1.1.12"),h=v(()=>S);function b(e){!e.path||l.push(e.path)}const s=r(),c=r();function n(){const e=c.value.getBoundingClientRect(),a=s.value.getBoundingClientRect();c.value.setAttribute("style",`padding-left: ${a.width+20}px;`),s.value.setAttribute("style",`left: ${e.left}px;`)}A(()=>{n(),window.addEventListener("resize",n,!1)}),B(()=>{window.removeEventListener("resize",n,!1)});const i=r();return w(()=>l.currentRoute.value,(e,a)=>{e.fullPath!==a.fullPath&&(i.value.$refs.body.scrollTop=0)}),{appVersion:m,navs:h,toNavDetail:b,asideEl:s,mainEl:c,mainScrollbar:i}}}),N={class:"page"},x={class:"header"},T={class:"header-main"},V=D('<div class="logo" data-v-368d4261><a href="#/" data-v-368d4261><img class="img" src="'+$+'" alt="" data-v-368d4261><div class="name" data-v-368d4261>YUUMI</div></a></div><div class="_expand" data-v-368d4261></div><div class="_active" data-v-368d4261>\u7EC4\u4EF6</div>',3),z={class:"version"},I={class:"aside",ref:"asideEl"},P={class:"group-name"},L=["onClick"],M={class:"nav-name"},U={class:"nav-label"},Y={class:"component"},W={class:"main",ref:"mainEl"};function j(l,m,h,b,s,c){const n=_("YuumiScrollbar"),i=_("router-view");return u(),o("div",N,[t("header",x,[t("div",T,[V,t("div",z,d(l.appVersion),1)])]),t("aside",I,[p(n,null,{default:f(()=>[(u(!0),o(E,null,F(l.navs,e=>(u(),o("section",{class:"group",key:e.label},[t("div",P,d(e.label),1),(u(!0),o(E,null,F(e.children,a=>(u(),o("nav",{class:k({active:a.path===l.$route.path}),key:a.label,onClick:q=>l.toNavDetail(a)},[t("span",M,d(a.name),1),t("span",U,d(a.label),1)],10,L))),128))]))),128))]),_:1})],512),t("div",Y,[p(n,{ref:"mainScrollbar"},{default:f(()=>[t("div",W,[p(i,{class:"component-view"})],512)]),_:1},512)])])}var H=g(R,[["render",j],["__scopeId","data-v-368d4261"]]);export{H as default};