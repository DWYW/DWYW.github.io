var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,e=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{r as c,o,f as r,q as u,F as h,x as d,h as i,y as j,c as g,B as m,s as v,d as _,e as x,M as q,u as y,G as f,R as b}from"./vendor.642980ed.js";const I={data:()=>({value:""})};I.render=function(s,a,n,l,p,t){const e=c("YuumiInput");return o(),r(h,null,[u(e,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=s=>p.value=s),placeholder:"请输入",style:{margin:"0 10px 10px 0"}},null,8,["modelValue"]),(o(),r(h,null,d(["primary","success","error","warn"],(s=>u(e,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=s=>p.value=s),placeholder:"请输入",key:s,theme:s,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","theme"]))),64)),i("div",null,"输入的内容为："+j(p.value),1)],64)};const w={};w.render=function(s,a){const n=c("YuumiInput");return o(),g(n,{placeholder:"请输入","auto-focus":""})};const Y={data:()=>({value:"这是一段测试文字"})};Y.render=function(s,a,n,l,p,t){const e=c("YuumiInput");return o(),g(e,{placeholder:"maxlength = 5",maxlength:5,modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=s=>p.value=s)},null,8,["modelValue"])};const k={data:()=>({value:""})};k.render=function(s,a,n,l,p,t){const e=c("YuumiInput");return o(),r(h,null,d(["xl","lg","md","sm","xm"],((s,n)=>u(e,{key:s,modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=s=>p.value=s),placeholder:"请输入",style:{margin:"0 10px 10px 0"},size:s},null,8,["modelValue","size"]))),64)};const V={};V.render=function(s,a){const n=c("YuumiInput");return o(),r(h,null,[i("div",null,[u(n,{placeholder:"disabled",style:{margin:"0 10px 10px 0"},disabled:""}),(o(),r(h,null,d(["primary","success","warn","error"],((s,a)=>u(n,{key:a,placeholder:"disabled",style:{margin:"0 10px 10px 0"},theme:s,disabled:""},null,8,["theme"]))),64))]),i("div",null,[u(n,{placeholder:"readonly",style:{margin:"0 10px 10px 0"},readonly:""}),(o(),r(h,null,d(["primary","success","warn","error"],((s,a)=>u(n,{key:a,placeholder:"readonly",style:{margin:"0 10px 10px 0"},theme:s,readonly:""},null,8,["theme"]))),64))])],64)};const H={data:()=>({value1:"只能输入数字",value2:"2222",value3:""}),computed:{onlyNumber:()=>/^\d+$/,excludeNumber:()=>s=>/^[^\d]+$/.test(s),notBlank:()=>/^\S*$/}},C=m(),R=i("br",null,null,-1),z=m(),B=i("br",null,null,-1),O=m(),U=i("br",null,null,-1);H.render=function(s,a,n,l,p,t){const e=c("YuumiInput");return o(),r(h,null,[u(e,{placeholder:"只能输入数字",modelValue:p.value1,"onUpdate:modelValue":a[0]||(a[0]=s=>p.value1=s),limit:t.onlyNumber,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),i("span",null,j(p.value1),1),C,R,u(e,{placeholder:"不能输入数字",modelValue:p.value2,"onUpdate:modelValue":a[1]||(a[1]=s=>p.value2=s),limit:t.excludeNumber,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),i("span",null,j(p.value2),1),z,B,u(e,{placeholder:"不能输入空白字符",modelValue:p.value3,"onUpdate:modelValue":a[2]||(a[2]=s=>p.value3=s),limit:t.notBlank,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),i("span",null,j(p.value3),1),O,U],64)};const A={data:()=>({value:"这是一段测试文字"})};A.render=function(s,a,n,l,p,t){const e=c("YuumiInput");return o(),g(e,{placeholder:"一键清除",modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=s=>p.value=s),clearable:"",style:{width:"100%"}},null,8,["modelValue"])};const N={data:()=>({value:""})};N.render=function(s,a,n,l,p,t){const e=c("YuumiIcon"),d=c("YuumiInput"),i=c("YuumiButton"),j=c("YuumiSelect");return o(),r(h,null,[u(d,{style:{margin:"0 10px 10px 0"},placeholder:"mobile"},{prefixIcon:v((()=>[u(e,{icon:"line-mobile",style:{color:"#aaa"}})])),_:1}),u(d,{style:{margin:"0 10px 10px 0"},placeholder:"search"},{suffixIcon:v((()=>[u(e,{icon:"line-search",style:{color:"green"}})])),_:1}),u(d,{style:{margin:"0 10px 10px 0",width:"100%"},placeholder:"search"},{suffix:v((()=>[u(i,{style:{"line-height":"0",margin:"-1px -8px",border:"none","border-top-left-radius":"0px","border-bottom-left-radius":"0px"},theme:"primary"},{default:v((()=>[u(e,{icon:"line-search"})])),_:1})])),_:1}),u(d,{style:{margin:"0 10px 10px 0",width:"100%"},placeholder:"correct",clearable:"",modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=s=>p.value=s)},{prefix:v((()=>[u(j,{style:{display:"table",margin:"-1px -8px",border:"none","border-top-right-radius":"0px","border-bottom-right-radius":"0px"},options:[{label:"百度",value:"百度"},{label:"Google",value:"Google"}],modelValue:"Google"})])),suffix:v((()=>[u(i,{style:{"line-height":"0",margin:"-1px -8px",border:"none","border-top-left-radius":"0px","border-bottom-left-radius":"0px"},theme:"primary"},{default:v((()=>[u(e,{icon:"line-search"})])),_:1})])),_:1},8,["modelValue"])],64)};const G=_({components:{vdpv_0:I,vdpv_1:w,vdpv_2:Y,vdpv_3:k,vdpv_4:V,vdpv_5:H,vdpv_6:A,vdpv_7:N},setup(s){const c=x(),o=x(),r=x(),u=x(),h=x(),d=x(),i=x(),j=x(),g=[c,o,r,u,h,d,i,j],m=q({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0});return v=((s,a)=>{for(var n in a||(a={}))p.call(a,n)&&e(s,n,a[n]);if(l)for(var n of l(a))t.call(a,n)&&e(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===m[a+"Height"]?m[a+"Height"]=(g[s].value?g[s].value.offsetHeight:0)||0:m[a+"Height"]=0}},y(m)),a(v,n({vdpv_0Ref:c,vdpv_1Ref:o,vdpv_2Ref:r,vdpv_3Ref:u,vdpv_4Ref:h,vdpv_5Ref:d,vdpv_6Ref:i,vdpv_7Ref:j}));var v}});G.$vd={matter:{},toc:[{content:"基本用法",anchor:"基本用法",level:3},{content:"自动获取焦点 autoFocus",anchor:"自动获取焦点-autofocus",level:3},{content:"设置最大输入长度 maxlength",anchor:"设置最大输入长度-maxlength",level:3},{content:"大小设置 size",anchor:"大小设置-size",level:3},{content:"禁用和只读 disabled and readonly",anchor:"禁用和只读-disabled-and-readonly",level:3},{content:"限制输入 limit",anchor:"限制输入-limit",level:3},{content:"一键清除",anchor:"一键清除",level:3},{content:"插槽使用",anchor:"插槽使用",level:3}]};const $=G,S={class:"vuedoc  "},P=i("h3",{id:"基本用法","data-source-line":"1"},[i("a",{class:"markdownIt-Anchor",href:"#基本用法"},"#"),m(" 基本用法")],-1),F=i("pre",{style:{display:"none"}},null,-1),D={class:"vuedoc-demo "},E={class:"vuedoc-demo__inner"},M={class:"vuedoc-demo__preview"},J={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},K=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;theme in [&#39;primary&#39;, &#39;success&#39;, &#39;error&#39;, &#39;warn&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>输入的内容为：{{value}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],L=i("h3",{id:"自动获取焦点-autofocus","data-source-line":"20"},[i("a",{class:"markdownIt-Anchor",href:"#自动获取焦点-autofocus"},"#"),m(" 自动获取焦点 autoFocus")],-1),Q=i("pre",{style:{display:"none"}},null,-1),T={class:"vuedoc-demo "},W={class:"vuedoc-demo__inner"},X={class:"vuedoc-demo__preview"},Z={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ss=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入&quot;</span> <span class="hljs-attr">auto-focus</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],as=i("h3",{id:"设置最大输入长度-maxlength","data-source-line":"28"},[i("a",{class:"markdownIt-Anchor",href:"#设置最大输入长度-maxlength"},"#"),m(" 设置最大输入长度 maxlength")],-1),ns=i("pre",{style:{display:"none"}},null,-1),ls={class:"vuedoc-demo "},ps={class:"vuedoc-demo__inner"},ts={class:"vuedoc-demo__preview"},es={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},cs=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;maxlength = 5&quot;</span> <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;这是一段测试文字&#39;</span>\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],os=b('<h3 id="大小设置-size" data-source-line="45"><a class="markdownIt-Anchor" href="#大小设置-size">#</a> 大小设置 size</h3><p data-source-line="47">可选值 <code>xl</code>、<code>lg</code>、<code>md</code>、<code>sm</code>、<code>xm</code>，默认为 <code>md</code>。</p><pre style="display:none;"></pre>',3),rs={class:"vuedoc-demo "},us={class:"vuedoc-demo__inner"},hs={class:"vuedoc-demo__preview"},ds={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},is=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(size, index) in [&#39;xl&#39;, &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39;, &#39;xm&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;size&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],js=i("h3",{id:"禁用和只读-disabled-and-readonly","data-source-line":"67"},[i("a",{class:"markdownIt-Anchor",href:"#禁用和只读-disabled-and-readonly"},"#"),m(" 禁用和只读 disabled and readonly")],-1),gs=i("pre",{style:{display:"none"}},null,-1),ms={class:"vuedoc-demo "},vs={class:"vuedoc-demo__inner"},_s={class:"vuedoc-demo__preview"},xs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},qs=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in [&#39;primary&#39;, &#39;success&#39;, &#39;warn&#39;, &#39;error&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>\n      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span>\n      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>\n      <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;item&quot;</span>\n      <span class="hljs-attr">disabled</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;readonly&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">readonly</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in [&#39;primary&#39;, &#39;success&#39;, &#39;warn&#39;, &#39;error&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>\n      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;readonly&quot;</span>\n      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>\n      <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;item&quot;</span>\n      <span class="hljs-attr">readonly</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],ys=i("h3",{id:"限制输入-limit","data-source-line":"95"},[i("a",{class:"markdownIt-Anchor",href:"#限制输入-limit"},"#"),m(" 限制输入 limit")],-1),fs=i("pre",{style:{display:"none"}},null,-1),bs={class:"vuedoc-demo "},Is={class:"vuedoc-demo__inner"},ws={class:"vuedoc-demo__preview"},Ys={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},ks=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;只能输入数字&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;onlyNumber&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{value1}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;不能输入数字&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;excludeNumber&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{value2}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;不能输入空白字符&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span> <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;notBlank&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{value3}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value1</span>: <span class="hljs-string">&#39;只能输入数字&#39;</span>,\n      <span class="hljs-attr">value2</span>: <span class="hljs-string">&#39;2222&#39;</span>,\n      <span class="hljs-attr">value3</span>: <span class="hljs-string">&#39;&#39;</span>\n    }\n  },\n  <span class="hljs-attr">computed</span>: {\n    onlyNumber () {\n      <span class="hljs-keyword">return</span> <span class="hljs-regexp">/^\\d+$/</span>\n    },\n    excludeNumber () {\n      <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> <span class="hljs-regexp">/^[^\\d]+$/</span>.test(value)\n    },\n    notBlank () {\n      <span class="hljs-keyword">return</span> <span class="hljs-regexp">/^\\S*$/</span>\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],Vs=i("h3",{id:"一键清除","data-source-line":"133"},[i("a",{class:"markdownIt-Anchor",href:"#一键清除"},"#"),m(" 一键清除")],-1),Hs=i("pre",{style:{display:"none"}},null,-1),Cs={class:"vuedoc-demo "},Rs={class:"vuedoc-demo__inner"},zs={class:"vuedoc-demo__preview"},Bs={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Os=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;一键清除&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;这是一段测试文字&#39;</span>\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],Us=i("h3",{id:"插槽使用","data-source-line":"150"},[i("a",{class:"markdownIt-Anchor",href:"#插槽使用"},"#"),m(" 插槽使用")],-1),As=i("p",{"data-source-line":"152"},[m("使用 "),i("code",null,"prefixIcon"),m(", "),i("code",null,"suffixIcon"),m(", "),i("code",null,"prefix"),m(", "),i("code",null,"suffix"),m(" 插槽实现更多功能")],-1),Ns=i("pre",{style:{display:"none"}},null,-1),Gs={class:"vuedoc-demo "},$s={class:"vuedoc-demo__inner"},Ss={class:"vuedoc-demo__preview"},Ps={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Fs=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prefixIcon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-mobile&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #aaa;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">suffixIcon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-search&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: green;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0; width: 100%;&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">suffix</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;line-height: 0; margin: -1px -8px; border:none; border-top-left-radius: 0px; border-bottom-left-radius: 0px;&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n         <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-search&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0; width: 100%;&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;correct&quot;</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prefix</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSelect</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: table; margin: -1px -8px; border:none; border-top-right-radius: 0px; border-bottom-right-radius: 0px;&quot;</span>\n      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;[{label: &#39;百度&#39;, value: &#39;百度&#39;}, {label: &#39;Google&#39;, value: &#39;Google&#39;}]&quot;</span>\n      <span class="hljs-attr">modelValue</span>=<span class="hljs-string">&quot;Google&quot;</span>\n     &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiSelect</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">suffix</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;line-height: 0; margin: -1px -8px; border:none; border-top-left-radius: 0px; border-bottom-left-radius: 0px;&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n         <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-search&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>\n\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)];$.render=function(s,a,n,l,p,t){const e=c("vdpv_0"),h=c("vdpv_1"),d=c("vdpv_2"),g=c("vdpv_3"),m=c("vdpv_4"),v=c("vdpv_5"),_=c("vdpv_6"),x=c("vdpv_7");return o(),r("div",S,[P,F,i("div",D,[i("div",E,[i("div",M,[u(e)]),i("div",{style:f({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[i("div",J,K,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},j(s.vdpv_0Height>0?"hidden":"show"),1)])]),L,Q,i("div",T,[i("div",W,[i("div",X,[u(h)]),i("div",{style:f({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[i("div",Z,ss,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},j(s.vdpv_1Height>0?"hidden":"show"),1)])]),as,ns,i("div",ls,[i("div",ps,[i("div",ts,[u(d)]),i("div",{style:f({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[i("div",es,cs,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},j(s.vdpv_2Height>0?"hidden":"show"),1)])]),os,i("div",rs,[i("div",us,[i("div",hs,[u(g)]),i("div",{style:f({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[i("div",ds,is,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},j(s.vdpv_3Height>0?"hidden":"show"),1)])]),js,gs,i("div",ms,[i("div",vs,[i("div",_s,[u(m)]),i("div",{style:f({height:s.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[i("div",xs,qs,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(4))},j(s.vdpv_4Height>0?"hidden":"show"),1)])]),ys,fs,i("div",bs,[i("div",Is,[i("div",ws,[u(v)]),i("div",{style:f({height:s.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[i("div",Ys,ks,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(5))},j(s.vdpv_5Height>0?"hidden":"show"),1)])]),Vs,Hs,i("div",Cs,[i("div",Rs,[i("div",zs,[u(_)]),i("div",{style:f({height:s.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[i("div",Bs,Os,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=a=>s.toggleCode(6))},j(s.vdpv_6Height>0?"hidden":"show"),1)])]),Us,As,Ns,i("div",Gs,[i("div",$s,[i("div",Ss,[u(x)]),i("div",{style:f({height:s.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[i("div",Ps,Fs,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=a=>s.toggleCode(7))},j(s.vdpv_7Height>0?"hidden":"show"),1)])])])};export{$ as default};