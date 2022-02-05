var s=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,o=(n,a,l)=>a in n?s(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l;import{r as p,o as i,f as c,F as r,x as u,h,y as q,q as d,d as g,e as j,M as f,u as m,G as v,B as b,R as y}from"./vendor.642980ed.js";const k={computed:{iconCount(){return this.icons.reduce(((s,n)=>s+n.children.length),0)},icons:()=>[{name:"常用类",children:["add","edit","circle-loading","correct","line-close","line-rect-correct","flat-rect-correct","line-edit","flat-edit","line-disabled","flat-disabled","line-delete","flat-delete","line-exit","flat-exit","line-remove","flat-remove","line-search","flat-search","line-setting","flat-setting","line-like","flat-like","line-info","flat-info","line-help","flat-help","line-circle-correct","flat-circle-correct","line-circle-close","flat-circle-close"]},{name:"表单",children:["radio-unselect","radio-select","checkbox-unselect","line-checkbox-indeterminate","flat-checkbox-indeterminate","line-checkbox-select","flat-checkbox-select","line-unlock","flat-unlock","line-lock","flat-lock","line-key","flat-key","line-shield-correct","flat-shield-correct","line-shield-info","flat-shield-info","line-unfold","flat-unfold","line-fold","flat-fold","line-eye","flat-eye","line-eye-close","flat-eye-close","line-mobile","flat-mobile","line-calendar","flat-calendar","line-clock","flat-clock"]},{name:"方向",children:["line-left","line-right","line-top","line-bottom","flat-arrow-left-small","flat-arrow-right-small","flat-arrow-top-small","flat-arrow-bottom-small","flat-arrow-left","flat-arrow-right","flat-arrow-top","flat-arrow-bottom","line-prev","line-next"]},{name:"文件",children:["line-file","flat-file","line-file-add","flat-file-add","line-file-remove","flat-file-remove","line-file-disabled","flat-file-disabled","line-file-setting","flat-folder-setting"]},{name:"文件夹",children:["line-folder","flat-folder","line-folder-add","flat-folder-add","line-folder-remove","flat-folder-remove","line-folder-disabled","flat-folder-disabled","line-folder-setting","flat-folder-setting"]},{name:"人员",children:["line-user","flat-user","line-user-add","flat-user-add","line-user-disabled","flat-user-disabled","line-user-remove","flat-user-remove","line-user-setting","flat-user-setting","line-users","flat-users"]},{name:"状态",children:["empty"]}]}},w={style:{overflow:"hidden"}},x={class:"group-name",style:{"font-weight":"bold","padding-bottom":"10px"}},_={class:"group-icons"},O={style:{"font-size":"12px"}};k.render=function(s,n,a,l,t,e){const o=p("YuumiIcon");return i(),c("div",w,[(i(!0),c(r,null,u(e.icons,(s=>(i(),c("div",{class:"group-item",key:s.name},[h("div",x,q(s.name),1),h("div",_,[(i(!0),c(r,null,u(s.children,(s=>(i(),c("div",{style:{display:"inline-block",width:"120px",height:"100px","font-size":"28px","vertical-align":"text-bottom","text-align":"center","font-weight":"bold"},key:s},[d(o,{icon:s},null,8,["icon"]),h("div",O,q(s),1)])))),128))])])))),128))])};const H=g({components:{vdpv_0:k},setup(s){const p=j(),i=[p],c=f({vdpv_0Height:0});return r=((s,n)=>{for(var a in n||(n={}))t.call(n,a)&&o(s,a,n[a]);if(l)for(var a of l(n))e.call(n,a)&&o(s,a,n[a]);return s})({toggleCode:s=>{const n="vdpv_"+s;0===c[n+"Height"]?c[n+"Height"]=(i[s].value?i[s].value.offsetHeight:0)||0:c[n+"Height"]=0}},m(c)),n(r,a({vdpv_0Ref:p}));var r}});H.$vd={matter:{},toc:[{content:"基本用法",anchor:"基本用法",level:3}]};const C=H,I={class:"vuedoc  "},P=h("h3",{id:"基本用法","data-source-line":"1"},[h("a",{class:"markdownIt-Anchor",href:"#基本用法"},"#"),b(" 基本用法")],-1),z=h("pre",{style:{display:"none"}},null,-1),R={class:"vuedoc-demo "},Y={class:"vuedoc-demo__inner"},A={class:"vuedoc-demo__preview"},B={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},D=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;overflow: hidden;&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;group in icons&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;group.name&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-name&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-weight: bold; padding-bottom: 10px;&quot;</span>&gt;</span>{{group.name}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-icons&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: inline-block; width: 120px; height: 100px; font-size: 28px; vertical-align: text-bottom; text-align: center; font-weight: bold;&quot;</span>\n      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;icon in group.children&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;icon&quot;</span>\n      &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">:icon</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 12px;&quot;</span>&gt;</span>{{icon}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">computed</span>: {\n    iconCount () {\n        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.icons.reduce(<span class="hljs-function">(<span class="hljs-params">acc, item</span>) =&gt;</span> {\n          <span class="hljs-keyword">return</span> acc + item.children.length\n        }, <span class="hljs-number">0</span>)\n    },\n    icons () {\n      <span class="hljs-keyword">return</span> [{\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;常用类&quot;</span>,\n        <span class="hljs-attr">children</span>: [\n          <span class="hljs-string">&quot;add&quot;</span>, <span class="hljs-string">&quot;edit&quot;</span>, <span class="hljs-string">&quot;circle-loading&quot;</span>, <span class="hljs-string">&quot;correct&quot;</span>, <span class="hljs-string">&quot;line-close&quot;</span>,\n          <span class="hljs-string">&quot;line-rect-correct&quot;</span>, <span class="hljs-string">&quot;flat-rect-correct&quot;</span>,\n          <span class="hljs-string">&quot;line-edit&quot;</span>, <span class="hljs-string">&quot;flat-edit&quot;</span>,\n          <span class="hljs-string">&quot;line-disabled&quot;</span>,<span class="hljs-string">&quot;flat-disabled&quot;</span>,\n          <span class="hljs-string">&quot;line-delete&quot;</span>,<span class="hljs-string">&quot;flat-delete&quot;</span>,\n          <span class="hljs-string">&quot;line-exit&quot;</span>,<span class="hljs-string">&quot;flat-exit&quot;</span>,\n          <span class="hljs-string">&quot;line-remove&quot;</span>, <span class="hljs-string">&quot;flat-remove&quot;</span>,\n          <span class="hljs-string">&quot;line-search&quot;</span>, <span class="hljs-string">&quot;flat-search&quot;</span>,\n          <span class="hljs-string">&quot;line-setting&quot;</span>, <span class="hljs-string">&quot;flat-setting&quot;</span>,\n          <span class="hljs-string">&quot;line-like&quot;</span>, <span class="hljs-string">&quot;flat-like&quot;</span>,\n          <span class="hljs-string">&quot;line-info&quot;</span>, <span class="hljs-string">&quot;flat-info&quot;</span>,\n          <span class="hljs-string">&quot;line-help&quot;</span>, <span class="hljs-string">&quot;flat-help&quot;</span>,\n          <span class="hljs-string">&quot;line-circle-correct&quot;</span>, <span class="hljs-string">&quot;flat-circle-correct&quot;</span>,\n          <span class="hljs-string">&quot;line-circle-close&quot;</span>, <span class="hljs-string">&quot;flat-circle-close&quot;</span>,\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;表单&quot;</span>,\n        <span class="hljs-attr">children</span>: [\n          <span class="hljs-string">&quot;radio-unselect&quot;</span>, <span class="hljs-string">&quot;radio-select&quot;</span>,\n          <span class="hljs-string">&quot;checkbox-unselect&quot;</span>, <span class="hljs-string">&quot;line-checkbox-indeterminate&quot;</span>, <span class="hljs-string">&quot;flat-checkbox-indeterminate&quot;</span>, <span class="hljs-string">&quot;line-checkbox-select&quot;</span>, <span class="hljs-string">&quot;flat-checkbox-select&quot;</span>,\n          <span class="hljs-string">&quot;line-unlock&quot;</span>, <span class="hljs-string">&quot;flat-unlock&quot;</span>,\n          <span class="hljs-string">&quot;line-lock&quot;</span>,  <span class="hljs-string">&quot;flat-lock&quot;</span>,\n          <span class="hljs-string">&quot;line-key&quot;</span>, <span class="hljs-string">&quot;flat-key&quot;</span>,\n          <span class="hljs-string">&quot;line-shield-correct&quot;</span>, <span class="hljs-string">&quot;flat-shield-correct&quot;</span>,\n          <span class="hljs-string">&quot;line-shield-info&quot;</span>, <span class="hljs-string">&quot;flat-shield-info&quot;</span>,\n          <span class="hljs-string">&quot;line-unfold&quot;</span>, <span class="hljs-string">&quot;flat-unfold&quot;</span>,\n          <span class="hljs-string">&quot;line-fold&quot;</span>, <span class="hljs-string">&quot;flat-fold&quot;</span>,\n          <span class="hljs-string">&quot;line-eye&quot;</span>, <span class="hljs-string">&quot;flat-eye&quot;</span>,\n          <span class="hljs-string">&quot;line-eye-close&quot;</span>, <span class="hljs-string">&quot;flat-eye-close&quot;</span>,\n          <span class="hljs-string">&quot;line-mobile&quot;</span>, <span class="hljs-string">&quot;flat-mobile&quot;</span>,\n          <span class="hljs-string">&quot;line-calendar&quot;</span>, <span class="hljs-string">&quot;flat-calendar&quot;</span>,\n          <span class="hljs-string">&quot;line-clock&quot;</span>, <span class="hljs-string">&quot;flat-clock&quot;</span>,\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;方向&quot;</span>,\n        <span class="hljs-attr">children</span>: [\n          <span class="hljs-string">&quot;line-left&quot;</span>, <span class="hljs-string">&quot;line-right&quot;</span>, <span class="hljs-string">&quot;line-top&quot;</span>, <span class="hljs-string">&quot;line-bottom&quot;</span>,\n          <span class="hljs-string">&quot;flat-arrow-left-small&quot;</span>, <span class="hljs-string">&quot;flat-arrow-right-small&quot;</span>, <span class="hljs-string">&quot;flat-arrow-top-small&quot;</span>, <span class="hljs-string">&quot;flat-arrow-bottom-small&quot;</span>,\n          <span class="hljs-string">&quot;flat-arrow-left&quot;</span>, <span class="hljs-string">&quot;flat-arrow-right&quot;</span>, <span class="hljs-string">&quot;flat-arrow-top&quot;</span>, <span class="hljs-string">&quot;flat-arrow-bottom&quot;</span>,\n          <span class="hljs-string">&quot;line-prev&quot;</span>, <span class="hljs-string">&quot;line-next&quot;</span>,\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;文件&quot;</span>,\n        <span class="hljs-attr">children</span>: [\n          <span class="hljs-string">&quot;line-file&quot;</span>, <span class="hljs-string">&quot;flat-file&quot;</span>,\n          <span class="hljs-string">&quot;line-file-add&quot;</span>, <span class="hljs-string">&quot;flat-file-add&quot;</span>,\n          <span class="hljs-string">&quot;line-file-remove&quot;</span>, <span class="hljs-string">&quot;flat-file-remove&quot;</span>,\n          <span class="hljs-string">&quot;line-file-disabled&quot;</span>, <span class="hljs-string">&quot;flat-file-disabled&quot;</span>,\n          <span class="hljs-string">&quot;line-file-setting&quot;</span>,<span class="hljs-string">&quot;flat-folder-setting&quot;</span>,\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;文件夹&quot;</span>,\n        <span class="hljs-attr">children</span>: [\n          <span class="hljs-string">&quot;line-folder&quot;</span>, <span class="hljs-string">&quot;flat-folder&quot;</span>,\n          <span class="hljs-string">&quot;line-folder-add&quot;</span>, <span class="hljs-string">&quot;flat-folder-add&quot;</span>,\n          <span class="hljs-string">&quot;line-folder-remove&quot;</span>, <span class="hljs-string">&quot;flat-folder-remove&quot;</span>,\n          <span class="hljs-string">&quot;line-folder-disabled&quot;</span>, <span class="hljs-string">&quot;flat-folder-disabled&quot;</span>,\n          <span class="hljs-string">&quot;line-folder-setting&quot;</span>,<span class="hljs-string">&quot;flat-folder-setting&quot;</span>,\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;人员&quot;</span>,\n        <span class="hljs-attr">children</span>: [\n          <span class="hljs-string">&quot;line-user&quot;</span>, <span class="hljs-string">&quot;flat-user&quot;</span>,\n          <span class="hljs-string">&quot;line-user-add&quot;</span>, <span class="hljs-string">&quot;flat-user-add&quot;</span>,\n          <span class="hljs-string">&quot;line-user-disabled&quot;</span>, <span class="hljs-string">&quot;flat-user-disabled&quot;</span>,\n          <span class="hljs-string">&quot;line-user-remove&quot;</span>, <span class="hljs-string">&quot;flat-user-remove&quot;</span>,\n          <span class="hljs-string">&quot;line-user-setting&quot;</span>,<span class="hljs-string">&quot;flat-user-setting&quot;</span>,\n          <span class="hljs-string">&quot;line-users&quot;</span>, <span class="hljs-string">&quot;flat-users&quot;</span>,\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;状态&quot;</span>,\n        <span class="hljs-attr">children</span>: [\n          <span class="hljs-string">&quot;empty&quot;</span>\n        ]\n      }]\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)];C.render=function(s,n,a,l,t,e){const o=p("vdpv_0");return i(),c("div",I,[P,z,h("div",R,[h("div",Y,[h("div",A,[d(o)]),h("div",{style:v({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[h("div",B,D,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=n=>s.toggleCode(0))},q(s.vdpv_0Height>0?"hidden":"show"),1)])])])};export{C as default};