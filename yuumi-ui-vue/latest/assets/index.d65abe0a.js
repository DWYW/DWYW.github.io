import{_ as h,r as p,o as u,c as j,d as e,F as I,a as D,b as s,t as m,e as _,j as i,w as y,f as C,g as f,h as z,i as R,n as x,k as v}from"./index.eb4fdf2c.js";const B={data(){return{value:""}}};function N(n,a,c,r,l,d){const t=p("YuumiInput");return u(),j(I,null,[e(t,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value=o),placeholder:"\u8BF7\u8F93\u5165",style:{margin:"0 10px 10px 0"}},null,8,["modelValue"]),(u(),j(I,null,D(["primary","success","error","warn"],o=>e(t,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=g=>l.value=g),placeholder:"\u8BF7\u8F93\u5165",key:o,theme:o,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","theme"])),64)),s("div",null,"\u8F93\u5165\u7684\u5185\u5BB9\u4E3A\uFF1A"+m(l.value),1)],64)}var A=h(B,[["render",N]]);const S={components:{ImportDemo:A}};function U(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var G=h(S,[["render",U]]);const F={};function E(n,a){const c=p("YuumiInput");return u(),_(c,{placeholder:"\u8BF7\u8F93\u5165","auto-focus":""})}var L=h(F,[["render",E]]);const T={components:{ImportDemo:L}};function J(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var K=h(T,[["render",J]]);const M={data(){return{value:"\u8FD9\u662F\u4E00\u6BB5\u6D4B\u8BD5\u6587\u5B57"}}};function O(n,a,c,r,l,d){const t=p("YuumiInput");return u(),_(t,{placeholder:"maxlength = 5",maxlength:5,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value=o)},null,8,["modelValue"])}var P=h(M,[["render",O]]);const Q={components:{ImportDemo:P}};function W(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var X=h(Q,[["render",W]]);const Z={data(){return{value:""}}};function ss(n,a,c,r,l,d){const t=p("YuumiInput");return u(),j(I,null,D(["xl","lg","md","sm","xm"],o=>e(t,{key:o,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=g=>l.value=g),placeholder:"\u8BF7\u8F93\u5165",style:{margin:"0 10px 10px 0"},size:o},null,8,["modelValue","size"])),64)}var as=h(Z,[["render",ss]]);const ns={components:{ImportDemo:as}};function ls(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var ts=h(ns,[["render",ls]]);const es={};function ps(n,a){const c=p("YuumiInput");return u(),j("div",null,[e(c,{placeholder:"disabled",style:{margin:"0 10px 10px 0"},disabled:""}),(u(),j(I,null,D(["primary","success","warn","error"],(r,l)=>e(c,{key:l,placeholder:"disabled",style:{margin:"0 10px 10px 0"},theme:r,disabled:""},null,8,["theme"])),64))])}var os=h(es,[["render",ps]]);const cs={components:{ImportDemo:os}};function rs(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var us=h(cs,[["render",rs]]);const ds={};function hs(n,a){const c=p("YuumiInput");return u(),j("div",null,[e(c,{placeholder:"readonly",style:{margin:"0 10px 10px 0"},readonly:""}),(u(),j(I,null,D(["primary","success","warn","error"],(r,l)=>e(c,{key:l,placeholder:"readonly",style:{margin:"0 10px 10px 0"},theme:r,readonly:""},null,8,["theme"])),64))])}var is=h(ds,[["render",hs]]);const ms={components:{ImportDemo:is}};function _s(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var gs=h(ms,[["render",_s]]);const js={data(){return{value1:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57",value2:"2222",value3:""}},computed:{onlyNumber(){return/^\d+$/},excludeNumber(){return n=>/^[^\d]+$/.test(n)},notBlank(){return/^\S*$/}}},vs=s("br",null,null,-1),fs=s("br",null,null,-1),xs=s("br",null,null,-1);function qs(n,a,c,r,l,d){const t=p("YuumiInput");return u(),j(I,null,[e(t,{placeholder:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57",modelValue:l.value1,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value1=o),limit:d.onlyNumber,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),s("span",null,m(l.value1),1),i(),vs,e(t,{placeholder:"\u4E0D\u80FD\u8F93\u5165\u6570\u5B57",modelValue:l.value2,"onUpdate:modelValue":a[1]||(a[1]=o=>l.value2=o),limit:d.excludeNumber,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),s("span",null,m(l.value2),1),i(),fs,e(t,{placeholder:"\u4E0D\u80FD\u8F93\u5165\u7A7A\u767D\u5B57\u7B26",modelValue:l.value3,"onUpdate:modelValue":a[2]||(a[2]=o=>l.value3=o),limit:d.notBlank,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),s("span",null,m(l.value3),1),i(),xs],64)}var ys=h(js,[["render",qs]]);const Is={components:{ImportDemo:ys}};function $s(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var Ys=h(Is,[["render",$s]]);const bs={data(){return{value:"\u8FD9\u662F\u4E00\u6BB5\u6D4B\u8BD5\u6587\u5B57"}}};function ws(n,a,c,r,l,d){const t=p("YuumiInput");return u(),_(t,{placeholder:"\u4E00\u952E\u6E05\u9664",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value=o),clearable:"",style:{width:"100%"}},null,8,["modelValue"])}var ks=h(bs,[["render",ws]]);const Ds={components:{ImportDemo:ks}};function Vs(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var Hs=h(Ds,[["render",Vs]]);const Cs={data(){return{value:""}}};function zs(n,a,c,r,l,d){const t=p("YuumiIcon"),o=p("YuumiInput"),g=p("YuumiButton"),$=p("YuumiSelect");return u(),j(I,null,[e(o,{style:{margin:"0 10px 10px 0"},placeholder:"mobile"},{prefixIcon:y(()=>[e(t,{icon:"line-mobile",style:{color:"#aaa","font-size":"16px"}})]),_:1}),e(o,{style:{margin:"0 10px 10px 0"},placeholder:"search"},{suffixIcon:y(()=>[e(t,{icon:"line-search",style:{color:"green","font-size":"16px"}})]),_:1}),e(o,{style:{margin:"0 10px 10px 0",width:"100%"},placeholder:"search"},{suffix:y(()=>[e(g,{style:{"line-height":"0",margin:"-1px -8px",border:"none","border-top-left-radius":"0px","border-bottom-left-radius":"0px"},theme:"primary"},{default:y(()=>[e(t,{icon:"line-search",style:{"font-size":"16px"}})]),_:1})]),_:1}),e(o,{style:{margin:"0 10px 10px 0",width:"100%"},placeholder:"correct",clearable:"",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=Y=>l.value=Y)},{prefix:y(()=>[e($,{style:{display:"table",margin:"-1px -8px",border:"none","border-top-right-radius":"0px","border-bottom-right-radius":"0px"},options:[{label:"\u767E\u5EA6",value:"\u767E\u5EA6"},{label:"Google",value:"Google"}],modelValue:"Google"})]),suffix:y(()=>[e(g,{style:{"line-height":"0",margin:"-1px -8px",border:"none","border-top-left-radius":"0px","border-bottom-left-radius":"0px"},theme:"primary"},{default:y(()=>[e(t,{icon:"line-search",style:{"font-size":"16px"}})]),_:1})]),_:1},8,["modelValue"])],64)}var Rs=h(Cs,[["render",zs]]);const Bs={components:{ImportDemo:Rs}};function Ns(n,a,c,r,l,d){const t=p("ImportDemo");return u(),_(t)}var As=h(Bs,[["render",Ns]]);const H=C({components:{vdpv_0:G,vdpv_1:K,vdpv_2:X,vdpv_3:ts,vdpv_4:us,vdpv_5:gs,vdpv_6:Ys,vdpv_7:Hs,vdpv_8:As},setup(n){const a=f(),c=f(),r=f(),l=f(),d=f(),t=f(),o=f(),g=f(),$=f(),Y=[a,c,r,l,d,t,o,g,$],b=z({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0});return{toggleCode:w=>{const k="vdpv_"+w;b[k+"Height"]===0?b[k+"Height"]=(Y[w].value?Y[w].value.offsetHeight:0)||0:b[k+"Height"]=0},...R(b),vdpv_0Ref:a,vdpv_1Ref:c,vdpv_2Ref:r,vdpv_3Ref:l,vdpv_4Ref:d,vdpv_5Ref:t,vdpv_6Ref:o,vdpv_7Ref:g,vdpv_8Ref:$}}});H.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u81EA\u52A8\u83B7\u53D6\u7126\u70B9 autoFocus",anchor:"\u81EA\u52A8\u83B7\u53D6\u7126\u70B9-autofocus",level:3},{content:"\u8BBE\u7F6E\u6700\u5927\u8F93\u5165\u957F\u5EA6 maxlength",anchor:"\u8BBE\u7F6E\u6700\u5927\u8F93\u5165\u957F\u5EA6-maxlength",level:3},{content:"\u5927\u5C0F\u8BBE\u7F6E size",anchor:"\u5927\u5C0F\u8BBE\u7F6E-size",level:3},{content:"\u7981\u7528 disabled",anchor:"\u7981\u7528-disabled",level:3},{content:"\u53EA\u8BFB readonly",anchor:"\u53EA\u8BFB-readonly",level:3},{content:"\u9650\u5236\u8F93\u5165 limit",anchor:"\u9650\u5236\u8F93\u5165-limit",level:3},{content:"\u4E00\u952E\u6E05\u9664",anchor:"\u4E00\u952E\u6E05\u9664",level:3},{content:"\u63D2\u69FD\u4F7F\u7528",anchor:"\u63D2\u69FD\u4F7F\u7528",level:3}]};const Ss=H,Us={class:"vuedoc"},Gs=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),i(" \u57FA\u672C\u7528\u6CD5")],-1),Fs=s("pre",{style:{display:"none"}},null,-1),Es={class:"vuedoc-demo"},Ls={class:"vuedoc-demo__inner"},Ts={class:"vuedoc-demo__preview"},Js={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Ks=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;theme in [&#39;primary&#39;, &#39;success&#39;, &#39;error&#39;, &#39;warn&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u8F93\u5165\u7684\u5185\u5BB9\u4E3A\uFF1A{{value}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ms=[Ks],Os=s("h3",{id:"\u81EA\u52A8\u83B7\u53D6\u7126\u70B9-autofocus","data-source-line":"6"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u52A8\u83B7\u53D6\u7126\u70B9-autofocus"},"#"),i(" \u81EA\u52A8\u83B7\u53D6\u7126\u70B9 autoFocus")],-1),Ps=s("pre",{style:{display:"none"}},null,-1),Qs={class:"vuedoc-demo"},Ws={class:"vuedoc-demo__inner"},Xs={class:"vuedoc-demo__preview"},Zs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},sa=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span> <span class="hljs-attr">auto-focus</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span></code></pre></div>`,1),aa=[sa],na=s("h3",{id:"\u8BBE\u7F6E\u6700\u5927\u8F93\u5165\u957F\u5EA6-maxlength","data-source-line":"12"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u6700\u5927\u8F93\u5165\u957F\u5EA6-maxlength"},"#"),i(" \u8BBE\u7F6E\u6700\u5927\u8F93\u5165\u957F\u5EA6 maxlength")],-1),la=s("pre",{style:{display:"none"}},null,-1),ta={class:"vuedoc-demo"},ea={class:"vuedoc-demo__inner"},pa={class:"vuedoc-demo__preview"},oa={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ca=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;maxlength = 5&quot;</span> <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u8FD9\u662F\u4E00\u6BB5\u6D4B\u8BD5\u6587\u5B57&#39;</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),ra=[ca],ua=v('<h3 id="\u5927\u5C0F\u8BBE\u7F6E-size" data-source-line="17"><a class="markdownIt-Anchor" href="#\u5927\u5C0F\u8BBE\u7F6E-size">#</a> \u5927\u5C0F\u8BBE\u7F6E size</h3><p data-source-line="19">\u53EF\u9009\u503C <code>xl</code>\u3001<code>lg</code>\u3001<code>md</code>\u3001<code>sm</code>\u3001<code>xm</code>\uFF0C\u9ED8\u8BA4\u4E3A <code>md</code>\u3002</p><pre style="display:none;"></pre>',3),da={class:"vuedoc-demo"},ha={class:"vuedoc-demo__inner"},ia={class:"vuedoc-demo__preview"},ma={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},_a=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;size in [&#39;xl&#39;, &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39;, &#39;xm&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;size&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),ga=[_a],ja=s("h3",{id:"\u7981\u7528-disabled","data-source-line":"24"},[s("a",{class:"markdownIt-Anchor",href:"#\u7981\u7528-disabled"},"#"),i(" \u7981\u7528 disabled")],-1),va=s("pre",{style:{display:"none"}},null,-1),fa={class:"vuedoc-demo"},xa={class:"vuedoc-demo__inner"},qa={class:"vuedoc-demo__preview"},ya={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Ia=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in [&#39;primary&#39;, &#39;success&#39;, &#39;warn&#39;, &#39;error&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;item&quot;</span>
      <span class="hljs-attr">disabled</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span></code></pre></div>`,1),$a=[Ia],Ya=s("h3",{id:"\u53EA\u8BFB-readonly","data-source-line":"29"},[s("a",{class:"markdownIt-Anchor",href:"#\u53EA\u8BFB-readonly"},"#"),i(" \u53EA\u8BFB readonly")],-1),ba=s("pre",{style:{display:"none"}},null,-1),wa={class:"vuedoc-demo"},ka={class:"vuedoc-demo__inner"},Da={class:"vuedoc-demo__preview"},Va={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ha=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;readonly&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">readonly</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in [&#39;primary&#39;, &#39;success&#39;, &#39;warn&#39;, &#39;error&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;readonly&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;item&quot;</span>
      <span class="hljs-attr">readonly</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span></code></pre></div>`,1),Ca=[Ha],za=s("h3",{id:"\u9650\u5236\u8F93\u5165-limit","data-source-line":"34"},[s("a",{class:"markdownIt-Anchor",href:"#\u9650\u5236\u8F93\u5165-limit"},"#"),i(" \u9650\u5236\u8F93\u5165 limit")],-1),Ra=s("pre",{style:{display:"none"}},null,-1),Ba={class:"vuedoc-demo"},Na={class:"vuedoc-demo__inner"},Aa={class:"vuedoc-demo__preview"},Sa={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ua=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u53EA\u80FD\u8F93\u5165\u6570\u5B57&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;onlyNumber&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{value1}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u4E0D\u80FD\u8F93\u5165\u6570\u5B57&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;excludeNumber&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{value2}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u4E0D\u80FD\u8F93\u5165\u7A7A\u767D\u5B57\u7B26&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span> <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;notBlank&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{value3}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value1</span>: <span class="hljs-string">&#39;\u53EA\u80FD\u8F93\u5165\u6570\u5B57&#39;</span>,
      <span class="hljs-attr">value2</span>: <span class="hljs-string">&#39;2222&#39;</span>,
      <span class="hljs-attr">value3</span>: <span class="hljs-string">&#39;&#39;</span>
    }
  },
  <span class="hljs-attr">computed</span>: {
    onlyNumber () {
      <span class="hljs-keyword">return</span> <span class="hljs-regexp">/^\\d+$/</span>
    },
    excludeNumber () {
      <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> <span class="hljs-regexp">/^[^\\d]+$/</span>.test(value)
    },
    notBlank () {
      <span class="hljs-keyword">return</span> <span class="hljs-regexp">/^\\S*$/</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ga=[Ua],Fa=s("h3",{id:"\u4E00\u952E\u6E05\u9664","data-source-line":"39"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E00\u952E\u6E05\u9664"},"#"),i(" \u4E00\u952E\u6E05\u9664")],-1),Ea=s("pre",{style:{display:"none"}},null,-1),La={class:"vuedoc-demo"},Ta={class:"vuedoc-demo__inner"},Ja={class:"vuedoc-demo__preview"},Ka={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Ma=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u4E00\u952E\u6E05\u9664&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u8FD9\u662F\u4E00\u6BB5\u6D4B\u8BD5\u6587\u5B57&#39;</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Oa=[Ma],Pa=s("h3",{id:"\u63D2\u69FD\u4F7F\u7528","data-source-line":"44"},[s("a",{class:"markdownIt-Anchor",href:"#\u63D2\u69FD\u4F7F\u7528"},"#"),i(" \u63D2\u69FD\u4F7F\u7528")],-1),Qa=s("p",{"data-source-line":"46"},[i("\u4F7F\u7528 "),s("code",null,"prefixIcon"),i(", "),s("code",null,"suffixIcon"),i(", "),s("code",null,"prefix"),i(", "),s("code",null,"suffix"),i(" \u63D2\u69FD\u5B9E\u73B0\u66F4\u591A\u529F\u80FD")],-1),Wa=s("pre",{style:{display:"none"}},null,-1),Xa={class:"vuedoc-demo"},Za={class:"vuedoc-demo__inner"},sn={class:"vuedoc-demo__preview"},an={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},nn=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prefixIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-mobile&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #aaa;font-size: 16px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">suffixIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-search&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: green;font-size: 16px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0; width: 100%;&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">suffix</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;line-height: 0; margin: -1px -8px; border:none; border-top-left-radius: 0px; border-bottom-left-radius: 0px;&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
         <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-search&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 16px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>


  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0; width: 100%;&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;correct&quot;</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prefix</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSelect</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: table; margin: -1px -8px; border:none; border-top-right-radius: 0px; border-bottom-right-radius: 0px;&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;[{label: &#39;\u767E\u5EA6&#39;, value: &#39;\u767E\u5EA6&#39;}, {label: &#39;Google&#39;, value: &#39;Google&#39;}]&quot;</span>
      <span class="hljs-attr">modelValue</span>=<span class="hljs-string">&quot;Google&quot;</span>
     &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiSelect</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">suffix</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;line-height: 0; margin: -1px -8px; border:none; border-top-left-radius: 0px; border-bottom-left-radius: 0px;&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
         <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-search&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 16px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiInput</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),ln=[nn];function tn(n,a,c,r,l,d){const t=p("vdpv_0"),o=p("vdpv_1"),g=p("vdpv_2"),$=p("vdpv_3"),Y=p("vdpv_4"),b=p("vdpv_5"),V=p("vdpv_6"),w=p("vdpv_7"),k=p("vdpv_8");return u(),j("div",Us,[Gs,Fs,s("div",Es,[s("div",Ls,[s("div",Ts,[e(t)]),s("div",{style:x({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Js,Ms,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=q=>n.toggleCode(0))},m(n.vdpv_0Height>0?"hidden":"show"),1)])]),Os,Ps,s("div",Qs,[s("div",Ws,[s("div",Xs,[e(o)]),s("div",{style:x({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Zs,aa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=q=>n.toggleCode(1))},m(n.vdpv_1Height>0?"hidden":"show"),1)])]),na,la,s("div",ta,[s("div",ea,[s("div",pa,[e(g)]),s("div",{style:x({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",oa,ra,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=q=>n.toggleCode(2))},m(n.vdpv_2Height>0?"hidden":"show"),1)])]),ua,s("div",da,[s("div",ha,[s("div",ia,[e($)]),s("div",{style:x({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",ma,ga,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=q=>n.toggleCode(3))},m(n.vdpv_3Height>0?"hidden":"show"),1)])]),ja,va,s("div",fa,[s("div",xa,[s("div",qa,[e(Y)]),s("div",{style:x({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",ya,$a,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=q=>n.toggleCode(4))},m(n.vdpv_4Height>0?"hidden":"show"),1)])]),Ya,ba,s("div",wa,[s("div",ka,[s("div",Da,[e(b)]),s("div",{style:x({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Va,Ca,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=q=>n.toggleCode(5))},m(n.vdpv_5Height>0?"hidden":"show"),1)])]),za,Ra,s("div",Ba,[s("div",Na,[s("div",Aa,[e(V)]),s("div",{style:x({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Sa,Ga,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=q=>n.toggleCode(6))},m(n.vdpv_6Height>0?"hidden":"show"),1)])]),Fa,Ea,s("div",La,[s("div",Ta,[s("div",Ja,[e(w)]),s("div",{style:x({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ka,Oa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=q=>n.toggleCode(7))},m(n.vdpv_7Height>0?"hidden":"show"),1)])]),Pa,Qa,Wa,s("div",Xa,[s("div",Za,[s("div",sn,[e(k)]),s("div",{style:x({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",an,ln,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=q=>n.toggleCode(8))},m(n.vdpv_8Height>0?"hidden":"show"),1)])])])}var pn=h(Ss,[["render",tn]]);export{pn as default};
