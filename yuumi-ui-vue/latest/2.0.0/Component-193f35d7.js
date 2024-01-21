import{e as v,o,c as s,b as e,t as n,F as f,a as g,q as k,_ as w,s as S,v as h,x as C,y as I,r as u,d,w as b,g as $,p as x,n as N,h as T}from"./index-569afd91.js";const A="/yuumi-ui-vue/latest/2.0.0/logo-84b5ae60.png",B={class:"group-item"},D={class:"group-item__name"},E=["onClick"],R={class:"nav-item__name"},V={class:"nav-item__label"},G=v({__name:"AsideGroup",props:{group:{}},setup(l){return(t,i)=>(o(),s("section",B,[e("p",D,n(t.group.label),1),(o(!0),s(f,null,g(t.group.children,a=>(o(),s("nav",{key:a.label,onClick:c=>t.$router.push(a.path),class:k(["nav-item",{"is-actived":a.path===t.$route.path}])},[e("span",R,n(a.name),1),e("span",V,n(a.label),1)],10,E))),128))]))}});const P=w(G,[["__scopeId","data-v-75a6fe75"]]),Y=[{label:"快速开始",children:[{name:"Install",label:"安装",path:"/doc/install"},{name:"Theme",label:"主题",path:"/doc/theme"}]},{label:"基础组件",children:[{name:"Icon",label:"图标",path:"/doc/icon"},{name:"Button",label:"按钮",path:"/doc/button"},{name:"Input",label:"输入框",path:"/doc/input"},{name:"NumberInput",label:"计数器",path:"/doc/number-input"},{name:"Select",label:"选项",path:"/doc/select"},{name:"Cascader",label:"级联选择",path:"/doc/cascader"},{name:"Radio",label:"单选框",path:"/doc/radio"},{name:"Checkbox",label:"复选框",path:"/doc/checkbox"},{name:"Switch",label:"开关",path:"/doc/switch"},{name:"TimePicker",label:"时间选择器",path:"/doc/time-picker"},{name:"DatePicker",label:"日期选择器",path:"/doc/date-picker"},{name:"Table",label:"表格",path:"/doc/table"},{name:"Warning",label:"警告框",path:"/doc/warning"},{name:"Slider",label:"滑块",path:"/doc/slider"}]},{label:"弹出层",children:[{name:"Dialog",label:"对话框",path:"/doc/dialog"},{name:"Alert",label:"弹窗",path:"/doc/alert"},{name:"Message",label:"消息",path:"/doc/message"},{name:"Notification",label:"通知",path:"/doc/notification"},{name:"Drawer",label:"抽屉",path:"/doc/drawer"},{name:"Tooltip",label:"文本提示",path:"/doc/tooltip"}]},{label:"布局",children:[{name:"RatioRect",label:"等比矩形",path:"/doc/ratiorect"},{name:"RatioImage",label:"等比图片",path:"/doc/ratioimage"}]},{label:"其他",children:[{name:"Pagination",label:"分页",path:"/doc/pagination"},{name:"Divider",label:"分割线",path:"/doc/divider"},{name:"Step",label:"步骤条",path:"/doc/step"},{name:"Tabs",label:"标签页",path:"/doc/tabs"},{name:"Loading",label:"加载",path:"/doc/loading"},{name:"Empty",label:"空状态",path:"/doc/empty"},{name:"Tree",label:"树形组件",path:"/doc/tree"},{name:"Navs",label:"侧边栏菜单组件",path:"/doc/navs"}]}],F=l=>(x("data-v-d2c21afe"),l=l(),N(),l),L={class:"component-view"},M={class:"header"},U={class:"header__content row"},q=$('<div class="row__prefix" data-v-d2c21afe><a class="header__logo" href="#/" data-v-d2c21afe><img class="img" src="'+A+'" alt="" data-v-d2c21afe><div class="name" data-v-d2c21afe>YUUMI</div></a></div><div class="row__content" data-v-d2c21afe></div>',2),z={class:"row__suffix"},W=F(()=>e("span",{class:"header__menu-item is-actived"},"组件",-1)),j={class:"header__menu-item"},H={class:"view__body"},J={class:"view__body-content"},K={class:"view__aside"},O={class:"view__aside-body"},Q=v({__name:"Component",setup(l){const t=S(),i=h(()=>"v2.0.0"),a=h(()=>Y),c={mainEl:C()};return I(()=>t.path,(_,p)=>{_!==p&&c.mainEl.value.scrollTo({top:0,behavior:"smooth"})}),(_,p)=>{const y=u("router-view"),r=u("YuumiScrollbar");return o(),s("div",L,[e("header",M,[e("div",U,[q,e("div",z,[W,e("span",j,n(i.value),1)])])]),e("div",H,[d(r,{dynamic:"",ref:c.mainEl},{default:b(()=>[e("div",J,[e("main",null,[d(y,{class:"component-body"})])])]),_:1},512)]),e("div",K,[e("div",O,[e("aside",null,[d(r,null,{default:b(()=>[(o(!0),s(f,null,g(a.value,m=>(o(),T(P,{class:"group",key:m.label,group:m},null,8,["group"]))),128))]),_:1})])])])])}}});const Z=w(Q,[["__scopeId","data-v-d2c21afe"]]);export{Z as default};