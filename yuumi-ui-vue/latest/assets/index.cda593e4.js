var s=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(n,a,l)=>a in n?s(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l;import{r as o,o as i,f as c,F as r,x as u,h,y as q,q as g,s as j,d,e as f,M as m,u as v,G as b,B as y,R as w}from"./vendor.642980ed.js";const x={data:()=>({type:Array(9).fill("line")}),computed:{iconCount(){return this.icons.reduce(((s,n)=>s+n.children.length),0)},icons:()=>[{name:"常用类",line:["line-add","line-edit","line-loading","line-correct","line-rect-correct","line-circle-correct","line-close","line-setting","line-help","line-info","line-exit","line-delete","line-remove","line-disabled","line-search","line-praise","line-screen","line-order"],flat:["flat-add","flat-edit","flat-loading","flat-correct","flat-rect-correct","flat-circle-correct","flat-close","flat-setting","flat-help","flat-info","flat-exit","flat-delete","flat-remove","flat-disabled","flat-search","flat-praise","flat-screen","flat-order"]},{name:"表单",line:["radio-selected","radio-unselected","checkbox-selected","checkbox-unselected","line-checkbox-indeterminate","line-mobile","line-phone","line-key","line-lock","line-unlock","line-circle","line-circle-dot","line-circle-close","line-rect","line-fold","line-unfold","line-eye","line-eye-close","line-shield-info","line-shield-correct","line-calendar","line-clock"],flat:["flat-checkbox-indeterminate","flat-mobile","flat-phone","flat-key","flat-lock","flat-unlock","flat-circle","flat-circle-dot","flat-circle-close","flat-rect","flat-fold","flat-unfold","flat-eye","flat-eye-close","flat-shield-info","flat-shield-correct","flat-calendar","flat-clock"]},{name:"方向",line:["line-prev","line-next","line-arrow-top","line-arrow-bottom","line-arrow-left","line-arrow-right"],flat:["flat-arrow-top","flat-arrow-bottom","flat-arrow-left","flat-arrow-right"]},{name:"文件",line:["line-file","line-file-add","line-file-setting"],flat:["flat-file","flat-file-add","flat-file-setting"]},{name:"文件夹",line:["line-folder","line-folder-add","line-folder-setting"],flat:["flat-folder","flat-folder-add","flat-folder-setting"]},{name:"人员组织",line:["line-user","line-user-add","line-user-setting","line-user-disabled","line-user-remove","line-users"],flat:["flat-user","flat-user-add","flat-user-setting","flat-user-disabled","flat-user-remove","flat-users"]},{name:"状态",line:["line-empty"],flat:["flat-empty"]},{name:"交通",line:["line-car","line-steering-wheel"],flat:["flat-car","flat-steering-wheel"]},{name:"证件",line:["line-identity"],flat:["flat-identity"]}]}},k={style:{overflow:"hidden"}},_={class:"group-name",style:{"font-weight":"bold","padding-bottom":"10px"}},Y={class:"group-icons"},I={style:{"font-size":"12px"}},O={class:"group-icons"},z={style:{"font-size":"12px"}};x.render=function(s,n,a,l,t,e){const p=o("YuumiIcon"),d=o("YuumiTabItem"),f=o("YuumiTabs");return i(),c("div",k,[(i(!0),c(r,null,u(e.icons,((s,n)=>(i(),c("div",{class:"group-item",key:s.name},[h("div",_,q(s.name),1),g(f,{modelValue:t.type[n],"onUpdate:modelValue":s=>t.type[n]=s},{default:j((()=>[g(d,{label:"线性",value:"line"},{default:j((()=>[h("div",Y,[(i(!0),c(r,null,u(s.line,(s=>(i(),c("div",{style:{display:"inline-block",width:"20%",height:"100px","font-size":"28px","vertical-align":"text-bottom","text-align":"center","font-weight":"bold"},key:s},[g(p,{icon:s},null,8,["icon"]),h("div",I,q(s),1)])))),128))])])),_:2},1024),g(d,{label:"扁平",value:"flat"},{default:j((()=>[h("div",O,[(i(!0),c(r,null,u(s.flat,(s=>(i(),c("div",{style:{display:"inline-block",width:"20%",height:"100px","font-size":"28px","vertical-align":"text-bottom","text-align":"center","font-weight":"bold"},key:s},[g(p,{icon:s},null,8,["icon"]),h("div",z,q(s),1)])))),128))])])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])])))),128))])};const T=d({components:{vdpv_0:x},setup(s){const o=f(),i=[o],c=m({vdpv_0Height:0});return r=((s,n)=>{for(var a in n||(n={}))t.call(n,a)&&p(s,a,n[a]);if(l)for(var a of l(n))e.call(n,a)&&p(s,a,n[a]);return s})({toggleCode:s=>{const n="vdpv_"+s;0===c[n+"Height"]?c[n+"Height"]=(i[s].value?i[s].value.offsetHeight:0)||0:c[n+"Height"]=0}},v(c)),n(r,a({vdpv_0Ref:o}));var r}});T.$vd={matter:{},toc:[{content:"基本用法",anchor:"基本用法",level:3}]};const H=T,C={class:"vuedoc  "},P=h("h3",{id:"基本用法","data-source-line":"1"},[h("a",{class:"markdownIt-Anchor",href:"#基本用法"},"#"),y(" 基本用法")],-1),V=h("pre",{style:{display:"none"}},null,-1),A={class:"vuedoc-demo "},R={class:"vuedoc-demo__inner"},U={class:"vuedoc-demo__preview"},B={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},D=[w('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;overflow: hidden;&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;group,index in icons&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;group.name&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-name&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-weight: bold; padding-bottom: 10px;&quot;</span>&gt;</span>{{group.name}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;type[index]&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;线性&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;line&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-icons&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: inline-block; width: 20%; height: 100px; font-size: 28px; vertical-align: text-bottom; text-align: center; font-weight: bold;&quot;</span>\n          <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;icon in group.line&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;icon&quot;</span>\n          &gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">:icon</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 12px;&quot;</span>&gt;</span>{{icon}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;扁平&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;flat&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-icons&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: inline-block; width: 20%; height: 100px; font-size: 28px; vertical-align: text-bottom; text-align: center; font-weight: bold;&quot;</span>\n          <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;icon in group.flat&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;icon&quot;</span>\n          &gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">:icon</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 12px;&quot;</span>&gt;</span>{{icon}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabs</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">type</span>: <span class="hljs-built_in">Array</span>(<span class="hljs-number">9</span>).fill(<span class="hljs-string">&#39;line&#39;</span>)\n    }\n  },\n  <span class="hljs-attr">computed</span>: {\n    iconCount () {\n        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.icons.reduce(<span class="hljs-function">(<span class="hljs-params">acc, item</span>) =&gt;</span> {\n          <span class="hljs-keyword">return</span> acc + item.children.length\n        }, <span class="hljs-number">0</span>)\n    },\n    icons () {\n      <span class="hljs-keyword">return</span> [{\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;常用类&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;line-add&quot;</span>,\n          <span class="hljs-string">&quot;line-edit&quot;</span>,\n          <span class="hljs-string">&quot;line-loading&quot;</span>,\n          <span class="hljs-string">&quot;line-correct&quot;</span>,\n          <span class="hljs-string">&quot;line-rect-correct&quot;</span>,\n          <span class="hljs-string">&quot;line-circle-correct&quot;</span>,\n          <span class="hljs-string">&quot;line-close&quot;</span>,\n          <span class="hljs-string">&quot;line-setting&quot;</span>,\n          <span class="hljs-string">&quot;line-help&quot;</span>,\n          <span class="hljs-string">&quot;line-info&quot;</span>,\n          <span class="hljs-string">&quot;line-exit&quot;</span>,\n          <span class="hljs-string">&quot;line-delete&quot;</span>,\n          <span class="hljs-string">&quot;line-remove&quot;</span>,\n          <span class="hljs-string">&quot;line-disabled&quot;</span>,\n          <span class="hljs-string">&quot;line-search&quot;</span>,\n          <span class="hljs-string">&quot;line-praise&quot;</span>,\n          <span class="hljs-string">&quot;line-screen&quot;</span>,\n          <span class="hljs-string">&quot;line-order&quot;</span>\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-add&quot;</span>,\n          <span class="hljs-string">&quot;flat-edit&quot;</span>,\n          <span class="hljs-string">&quot;flat-loading&quot;</span>,\n          <span class="hljs-string">&quot;flat-correct&quot;</span>,\n          <span class="hljs-string">&quot;flat-rect-correct&quot;</span>,\n          <span class="hljs-string">&quot;flat-circle-correct&quot;</span>,\n          <span class="hljs-string">&quot;flat-close&quot;</span>,\n          <span class="hljs-string">&quot;flat-setting&quot;</span>,\n          <span class="hljs-string">&quot;flat-help&quot;</span>,\n          <span class="hljs-string">&quot;flat-info&quot;</span>,\n          <span class="hljs-string">&quot;flat-exit&quot;</span>,\n          <span class="hljs-string">&quot;flat-delete&quot;</span>,\n          <span class="hljs-string">&quot;flat-remove&quot;</span>,\n          <span class="hljs-string">&quot;flat-disabled&quot;</span>,\n          <span class="hljs-string">&quot;flat-search&quot;</span>,\n          <span class="hljs-string">&quot;flat-praise&quot;</span>,\n          <span class="hljs-string">&quot;flat-screen&quot;</span>,\n          <span class="hljs-string">&quot;flat-order&quot;</span>\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;表单&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;radio-selected&quot;</span>,\n          <span class="hljs-string">&quot;radio-unselected&quot;</span>,\n          <span class="hljs-string">&quot;checkbox-selected&quot;</span>,\n          <span class="hljs-string">&quot;checkbox-unselected&quot;</span>,\n          <span class="hljs-string">&quot;line-checkbox-indeterminate&quot;</span>,\n          <span class="hljs-string">&quot;line-mobile&quot;</span>,\n          <span class="hljs-string">&quot;line-phone&quot;</span>,\n          <span class="hljs-string">&quot;line-key&quot;</span>,\n          <span class="hljs-string">&quot;line-lock&quot;</span>,\n          <span class="hljs-string">&quot;line-unlock&quot;</span>,\n          <span class="hljs-string">&quot;line-circle&quot;</span>,\n          <span class="hljs-string">&quot;line-circle-dot&quot;</span>,\n          <span class="hljs-string">&quot;line-circle-close&quot;</span>,\n          <span class="hljs-string">&quot;line-rect&quot;</span>,\n          <span class="hljs-string">&quot;line-fold&quot;</span>,\n          <span class="hljs-string">&quot;line-unfold&quot;</span>,\n          <span class="hljs-string">&quot;line-eye&quot;</span>,\n          <span class="hljs-string">&quot;line-eye-close&quot;</span>,\n          <span class="hljs-string">&quot;line-shield-info&quot;</span>,\n          <span class="hljs-string">&quot;line-shield-correct&quot;</span>,\n          <span class="hljs-string">&quot;line-calendar&quot;</span>,\n          <span class="hljs-string">&quot;line-clock&quot;</span>\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-checkbox-indeterminate&quot;</span>,\n          <span class="hljs-string">&quot;flat-mobile&quot;</span>,\n          <span class="hljs-string">&quot;flat-phone&quot;</span>,\n          <span class="hljs-string">&quot;flat-key&quot;</span>,\n          <span class="hljs-string">&quot;flat-lock&quot;</span>,\n          <span class="hljs-string">&quot;flat-unlock&quot;</span>,\n          <span class="hljs-string">&quot;flat-circle&quot;</span>,\n          <span class="hljs-string">&quot;flat-circle-dot&quot;</span>,\n          <span class="hljs-string">&quot;flat-circle-close&quot;</span>,\n          <span class="hljs-string">&quot;flat-rect&quot;</span>,\n          <span class="hljs-string">&quot;flat-fold&quot;</span>,\n          <span class="hljs-string">&quot;flat-unfold&quot;</span>,\n          <span class="hljs-string">&quot;flat-eye&quot;</span>,\n          <span class="hljs-string">&quot;flat-eye-close&quot;</span>,\n          <span class="hljs-string">&quot;flat-shield-info&quot;</span>,\n          <span class="hljs-string">&quot;flat-shield-correct&quot;</span>,\n          <span class="hljs-string">&quot;flat-calendar&quot;</span>,\n          <span class="hljs-string">&quot;flat-clock&quot;</span>\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;方向&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;line-prev&quot;</span>,\n          <span class="hljs-string">&quot;line-next&quot;</span>,\n          <span class="hljs-string">&quot;line-arrow-top&quot;</span>,\n          <span class="hljs-string">&quot;line-arrow-bottom&quot;</span>,\n          <span class="hljs-string">&quot;line-arrow-left&quot;</span>,\n          <span class="hljs-string">&quot;line-arrow-right&quot;</span>\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-arrow-top&quot;</span>,\n          <span class="hljs-string">&quot;flat-arrow-bottom&quot;</span>,\n          <span class="hljs-string">&quot;flat-arrow-left&quot;</span>,\n          <span class="hljs-string">&quot;flat-arrow-right&quot;</span>\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;文件&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;line-file&quot;</span>,\n          <span class="hljs-string">&quot;line-file-add&quot;</span>,\n          <span class="hljs-string">&quot;line-file-setting&quot;</span>\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-file&quot;</span>,\n          <span class="hljs-string">&quot;flat-file-add&quot;</span>,\n          <span class="hljs-string">&quot;flat-file-setting&quot;</span>\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;文件夹&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;line-folder&quot;</span>,\n          <span class="hljs-string">&quot;line-folder-add&quot;</span>,\n          <span class="hljs-string">&quot;line-folder-setting&quot;</span>\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-folder&quot;</span>,\n          <span class="hljs-string">&quot;flat-folder-add&quot;</span>,\n          <span class="hljs-string">&quot;flat-folder-setting&quot;</span>\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;人员组织&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;line-user&quot;</span>,\n          <span class="hljs-string">&quot;line-user-add&quot;</span>,\n          <span class="hljs-string">&quot;line-user-setting&quot;</span>,\n          <span class="hljs-string">&quot;line-user-disabled&quot;</span>,\n          <span class="hljs-string">&quot;line-user-remove&quot;</span>,\n          <span class="hljs-string">&quot;line-users&quot;</span>\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-user&quot;</span>,\n          <span class="hljs-string">&quot;flat-user-add&quot;</span>,\n          <span class="hljs-string">&quot;flat-user-setting&quot;</span>,\n          <span class="hljs-string">&quot;flat-user-disabled&quot;</span>,\n          <span class="hljs-string">&quot;flat-user-remove&quot;</span>,\n          <span class="hljs-string">&quot;flat-users&quot;</span>\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;状态&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;line-empty&quot;</span>\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-empty&quot;</span>\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;交通&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;line-car&quot;</span>,\n          <span class="hljs-string">&quot;line-steering-wheel&quot;</span>\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-car&quot;</span>,\n          <span class="hljs-string">&quot;flat-steering-wheel&quot;</span>\n        ]\n      }, {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;证件&quot;</span>,\n        <span class="hljs-attr">line</span>: [\n          <span class="hljs-string">&quot;line-identity&quot;</span>,\n        ],\n        <span class="hljs-attr">flat</span>: [\n          <span class="hljs-string">&quot;flat-identity&quot;</span>\n        ]\n      }]\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)];H.render=function(s,n,a,l,t,e){const p=o("vdpv_0");return i(),c("div",C,[P,V,h("div",A,[h("div",R,[h("div",U,[g(p)]),h("div",{style:b({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[h("div",B,D,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=n=>s.toggleCode(0))},q(s.vdpv_0Height>0?"hidden":"show"),1)])])])};export{H as default};