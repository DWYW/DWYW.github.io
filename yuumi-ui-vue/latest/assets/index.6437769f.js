import{f as g,_ as h,r as l,o as u,c as j,b as s,d as e,F as w,e as y,g as f,h as x,i as Y,n as q,t as $,k as m,j as I}from"./index.477881a6.js";const R=g({data(){return{ratio:1.07,image:"/demo.webp"}}}),C={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},V=s("span",null,"\u5BBD/\u9AD8\uFF1A",-1),D={style:{width:"300px"}};function F(a,n,c,i,d,r){const t=l("YuumiInput"),p=l("YuumiRatioImage");return u(),j(w,null,[s("div",C,[V,e(t,{modelValue:a.ratio,"onUpdate:modelValue":n[0]||(n[0]=o=>a.ratio=o),limit:/^\d+(\.\d*)?$/},null,8,["modelValue","limit"])]),s("div",D,[e(p,{ratio:a.ratio,image:a.image},null,8,["ratio","image"])])],64)}var H=h(R,[["render",F]]);const E={components:{ImportDemo:H}};function A(a,n,c,i,d,r){const t=l("ImportDemo");return u(),y(t)}var L=h(E,[["render",A]]);const S=g({data(){return{mode:"aspectFill",image:"/demo.webp"}},computed:{modeOptions(){return[{value:"scaleToFill",label:"scaleToFill"},{value:"aspectFit",label:"aspectFit"},{value:"aspectFill",label:"aspectFill"},{value:"top",label:"top"},{value:"bottom",label:"bottom"},{value:"center",label:"center"},{value:"left",label:"left"},{value:"right",label:"right"},{value:"top left",label:"top left"},{value:"top right",label:"top right"},{value:"bottom left",label:"bottom left"},{value:"bottom right",label:"bottom right"}]}}}),T={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},U=s("span",null,"\u88C1\u526A\u3001\u7F29\u653E\uFF1A",-1),B={style:{width:"300px","background-color":"#f5f5f5"}},N=s("p",null,"\u539F\u59CB\u56FE\u7247",-1),O=["src"];function z(a,n,c,i,d,r){const t=l("YuumiSelect"),p=l("YuumiRatioImage");return u(),j(w,null,[s("div",T,[U,e(t,{modelValue:a.mode,"onUpdate:modelValue":n[0]||(n[0]=o=>a.mode=o),options:a.modeOptions},null,8,["modelValue","options"])]),s("div",B,[e(p,{image:a.image,mode:a.mode},null,8,["image","mode"])]),s("div",null,[N,s("img",{src:a.image,style:{width:"100%",height:"auto"}},null,8,O)])],64)}var G=h(S,[["render",z]]);const J={components:{ImportDemo:G}};function K(a,n,c,i,d,r){const t=l("ImportDemo");return u(),y(t)}var M=h(J,[["render",K]]);const P=g({data(){return{radius:8,image:"/demo.webp"}}}),Q={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},W=s("span",null,"\u5706\u89D2\uFF1A",-1),X={style:{width:"300px"}};function Z(a,n,c,i,d,r){const t=l("YuumiInput"),p=l("YuumiRatioImage");return u(),j(w,null,[s("div",Q,[W,e(t,{modelValue:a.radius,"onUpdate:modelValue":n[0]||(n[0]=o=>a.radius=o),limit:/^\d*$/},null,8,["modelValue"])]),s("div",X,[e(p,{radius:a.radius,image:a.image},null,8,["radius","image"])])],64)}var ss=h(P,[["render",Z]]);const as={components:{ImportDemo:ss}};function ns(a,n,c,i,d,r){const t=l("ImportDemo");return u(),y(t)}var ts=h(as,[["render",ns]]);const ls=g({data(){return{avatar_default:"/avatar.webp",avatar:"/demo.webp"}}}),ps={style:{overflow:"hidden"}},es={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},os=s("div",{style:{"margin-right":"10px"}}," \u9ED8\u8BA4\u5934\u50CF ",-1),cs={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},is=s("div",{style:{"margin-right":"10px"}}," \u663E\u793A\u5934\u50CF ",-1),ds={style:{width:"100px"}};function rs(a,n,c,i,d,r){const t=l("YuumiInput"),p=l("YuumiRatioImage");return u(),j("div",ps,[s("div",es,[os,e(t,{modelValue:a.avatar_default,"onUpdate:modelValue":n[0]||(n[0]=o=>a.avatar_default=o)},null,8,["modelValue"])]),s("div",cs,[is,e(t,{modelValue:a.avatar,"onUpdate:modelValue":n[1]||(n[1]=o=>a.avatar=o)},null,8,["modelValue"])]),s("div",ds,[e(p,{radius:16,image:a.avatar,"placeholder-image":a.avatar_default},null,8,["image","placeholder-image"])])])}var hs=h(ls,[["render",rs]]);const us={components:{ImportDemo:hs}};function ms(a,n,c,i,d,r){const t=l("ImportDemo");return u(),y(t)}var gs=h(us,[["render",ms]]);const js=g({data(){return{image:"/demo.webp"}},methods:{onLoaded(a){console.log(a)},onError(a){console.log(a)}}}),vs={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},_s=s("span",null,"\u56FE\u7247\u5730\u5740\uFF1A",-1),fs={style:{width:"300px"}};function qs(a,n,c,i,d,r){const t=l("YuumiInput"),p=l("YuumiRatioImage");return u(),j(w,null,[s("div",vs,[_s,e(t,{modelValue:a.image,"onUpdate:modelValue":n[0]||(n[0]=o=>a.image=o)},null,8,["modelValue"])]),s("div",fs,[e(p,{image:a.image,onLoad:a.onLoaded,onError:a.onError},null,8,["image","onLoad","onError"])])],64)}var $s=h(js,[["render",qs]]);const ys={components:{ImportDemo:$s}};function bs(a,n,c,i,d,r){const t=l("ImportDemo");return u(),y(t)}var ws=h(ys,[["render",bs]]);const k=g({components:{vdpv_0:L,vdpv_1:M,vdpv_2:ts,vdpv_3:gs,vdpv_4:ws},setup(a){const n=f(),c=f(),i=f(),d=f(),r=f(),t=[n,c,i,d,r],p=x({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return{toggleCode:v=>{const _="vdpv_"+v;p[_+"Height"]===0?p[_+"Height"]=(t[v].value?t[v].value.offsetHeight:0)||0:p[_+"Height"]=0},...Y(p),vdpv_0Ref:n,vdpv_1Ref:c,vdpv_2Ref:i,vdpv_3Ref:d,vdpv_4Ref:r}}});k.$vd={matter:{},toc:[{content:"\u8BF4\u660E",anchor:"\u8BF4\u660E",level:3},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u7F29\u653E\u4E0E\u88C1\u526A",anchor:"\u7F29\u653E\u4E0E\u88C1\u526A",level:3},{content:"\u8BBE\u7F6E\u5706\u89D2",anchor:"\u8BBE\u7F6E\u5706\u89D2",level:3},{content:"\u8BBE\u7F6E\u9ED8\u8BA4\u56FE",anchor:"\u8BBE\u7F6E\u9ED8\u8BA4\u56FE",level:3},{content:"\u4E8B\u4EF6\u76D1\u542C",anchor:"\u4E8B\u4EF6\u76D1\u542C",level:3}]};const Is=k,ks={class:"vuedoc"},xs=m('<h3 id="\u8BF4\u660E" data-source-line="1"><a class="markdownIt-Anchor" href="#\u8BF4\u660E">#</a> \u8BF4\u660E</h3><blockquote data-source-line="2"><p>v1.5.0 \u5F00\u59CB\u652F\u6301</p></blockquote><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="4"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><p data-source-line="6">ratio \u8868\u793A\u77E9\u5F62\u7684\u5BBD\u9AD8\u6BD4\uFF0C\u9ED8\u8BA4\u4E3A1\u3002</p><pre style="display:none;"></pre>',5),Ys={class:"vuedoc-demo"},Rs={class:"vuedoc-demo__inner"},Cs={class:"vuedoc-demo__preview"},Vs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Ds=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center; margin-bottom: 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5BBD/\u9AD8\uFF1A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;ratio&quot;</span>
      <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;/^\\d+(\\.\\d*)?$/&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 300px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRatioImage</span>
      <span class="hljs-attr">:ratio</span>=<span class="hljs-string">&quot;ratio&quot;</span>
      <span class="hljs-attr">:image</span>=<span class="hljs-string">&quot;image&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
 <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">ratio</span>: <span class="hljs-number">1.07</span>,
    <span class="hljs-attr">image</span>: <span class="hljs-string">&quot;/demo.webp&quot;</span>
  }
 }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Fs=[Ds],Hs=s("h3",{id:"\u7F29\u653E\u4E0E\u88C1\u526A","data-source-line":"12"},[s("a",{class:"markdownIt-Anchor",href:"#\u7F29\u653E\u4E0E\u88C1\u526A"},"#"),I(" \u7F29\u653E\u4E0E\u88C1\u526A")],-1),Es=s("p",{"data-source-line":"13"},[I("\u9ED8\u8BA4\u4E3A "),s("code",null,"aspectFill")],-1),As=s("pre",{style:{display:"none"}},null,-1),Ls={class:"vuedoc-demo"},Ss={class:"vuedoc-demo__inner"},Ts={class:"vuedoc-demo__preview"},Us={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Bs=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center; margin-bottom: 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u88C1\u526A\u3001\u7F29\u653E\uFF1A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSelect</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;mode&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;modeOptions&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 300px; background-color: #f5f5f5;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRatioImage</span>
      <span class="hljs-attr">:image</span>=<span class="hljs-string">&quot;image&quot;</span>
      <span class="hljs-attr">:mode</span>=<span class="hljs-string">&quot;mode&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u539F\u59CB\u56FE\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: auto;&quot;</span>
    &gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
 <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">mode</span>: <span class="hljs-string">&quot;aspectFill&quot;</span>,
    <span class="hljs-attr">image</span>: <span class="hljs-string">&quot;/demo.webp&quot;</span>
  }
 },
 <span class="hljs-attr">computed</span>: {
  <span class="hljs-function"><span class="hljs-title">modeOptions</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;scaleToFill&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;scaleToFill&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;aspectFit&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;aspectFit&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;aspectFill&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;aspectFill&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;top&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;top&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;bottom&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;bottom&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;center&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;center&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;left&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;left&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;right&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;right&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;top left&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;top left&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;top right&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;top right&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;bottom left&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;bottom left&quot;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;bottom right&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;bottom right&quot;</span> }
    ]
  }
 }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ns=[Bs],Os=m('<br><table data-source-line="19"><thead><tr><th>\u6A21\u5F0F</th><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u7F29\u653E</td><td>scaleToFill</td><td>\u4E0D\u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u5BBD\u9AD8\u5B8C\u5168\u62C9\u4F38\u81F3\u586B\u6EE1\u5143\u7D20</td></tr><tr><td>\u7F29\u653E</td><td>aspectFit</td><td>\u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u957F\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\u3002</td></tr><tr><td>\u7F29\u653E</td><td>aspectFill</td><td>\u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u4FDD\u8BC1\u56FE\u7247\u7684\u77ED\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\u3002</td></tr><tr><td>\u88C1\u526A</td><td>top</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u9876\u90E8\u533A\u57DF</td></tr><tr><td>\u88C1\u526A</td><td>bottom</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u5E95\u90E8\u533A\u57DF</td></tr><tr><td>\u88C1\u526A</td><td>center</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u4E2D\u95F4\u533A\u57DF</td></tr><tr><td>\u88C1\u526A</td><td>left</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u5DE6\u8FB9\u533A\u57DF</td></tr><tr><td>\u88C1\u526A</td><td>right</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u53F3\u8FB9\u533A\u57DF</td></tr><tr><td>\u88C1\u526A</td><td>top left</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u5DE6\u4E0A\u8FB9\u533A\u57DF</td></tr><tr><td>\u88C1\u526A</td><td>top right</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u53F3\u4E0A\u8FB9\u533A\u57DF</td></tr><tr><td>\u88C1\u526A</td><td>bottom left</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u5DE6\u4E0B\u8FB9\u533A\u57DF</td></tr><tr><td>\u88C1\u526A</td><td>bottom right</td><td>\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u53F3\u4E0B\u8FB9\u533A\u57DF</td></tr></tbody></table><h3 id="\u8BBE\u7F6E\u5706\u89D2" data-source-line="35"><a class="markdownIt-Anchor" href="#\u8BBE\u7F6E\u5706\u89D2">#</a> \u8BBE\u7F6E\u5706\u89D2</h3><pre style="display:none;"></pre>',4),zs={class:"vuedoc-demo"},Gs={class:"vuedoc-demo__inner"},Js={class:"vuedoc-demo__preview"},Ks={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ms=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center; margin-bottom: 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5706\u89D2\uFF1A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radius&quot;</span>
      <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;/^\\d*$/&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 300px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRatioImage</span>
      <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;radius&quot;</span>
      <span class="hljs-attr">:image</span>=<span class="hljs-string">&quot;image&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
 <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">radius</span>: <span class="hljs-number">8</span>,
    <span class="hljs-attr">image</span>: <span class="hljs-string">&quot;/demo.webp&quot;</span>
  }
 }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ps=[Ms],Qs=s("h3",{id:"\u8BBE\u7F6E\u9ED8\u8BA4\u56FE","data-source-line":"40"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u9ED8\u8BA4\u56FE"},"#"),I(" \u8BBE\u7F6E\u9ED8\u8BA4\u56FE")],-1),Ws=s("pre",{style:{display:"none"}},null,-1),Xs={class:"vuedoc-demo"},Zs={class:"vuedoc-demo__inner"},sa={class:"vuedoc-demo__preview"},aa={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},na=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;overflow: hidden;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center; margin-bottom: 10px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 10px;&quot;</span>&gt;</span>
        \u9ED8\u8BA4\u5934\u50CF
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;avatar_default&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center; margin-bottom: 10px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 10px;&quot;</span>&gt;</span>
        \u663E\u793A\u5934\u50CF
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;avatar&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRatioImage</span>
        <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;16&quot;</span>
        <span class="hljs-attr">:image</span>=<span class="hljs-string">&quot;avatar&quot;</span>
        <span class="hljs-attr">:placeholder-image</span>=<span class="hljs-string">&quot;avatar_default&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
 <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">avatar_default</span>: <span class="hljs-string">&quot;/avatar.webp&quot;</span>,
    <span class="hljs-attr">avatar</span>: <span class="hljs-string">&quot;/demo.webp&quot;</span>
  }
 }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),ta=[na],la=s("h3",{id:"\u4E8B\u4EF6\u76D1\u542C","data-source-line":"45"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E8B\u4EF6\u76D1\u542C"},"#"),I(" \u4E8B\u4EF6\u76D1\u542C")],-1),pa=s("pre",{style:{display:"none"}},null,-1),ea={class:"vuedoc-demo"},oa={class:"vuedoc-demo__inner"},ca={class:"vuedoc-demo__preview"},ia={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},da=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center; margin-bottom: 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u56FE\u7247\u5730\u5740\uFF1A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;image&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 300px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRatioImage</span>
      <span class="hljs-attr">:image</span>=<span class="hljs-string">&quot;image&quot;</span>
      @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoaded&quot;</span>
      @<span class="hljs-attr">error</span>=<span class="hljs-string">&quot;onError&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
 <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">image</span>: <span class="hljs-string">&quot;/demo.webp&quot;</span>
  }
 },
 <span class="hljs-attr">methods</span>: {
  <span class="hljs-function"><span class="hljs-title">onLoaded</span>(<span class="hljs-params">e</span>)</span> {
    <span class="hljs-built_in">console</span>.log(e)
  },
  <span class="hljs-function"><span class="hljs-title">onError</span>(<span class="hljs-params">e</span>)</span> {
    <span class="hljs-built_in">console</span>.log(e)
  }
 }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),ra=[da];function ha(a,n,c,i,d,r){const t=l("vdpv_0"),p=l("vdpv_1"),o=l("vdpv_2"),v=l("vdpv_3"),_=l("vdpv_4");return u(),j("div",ks,[xs,s("div",Ys,[s("div",Rs,[s("div",Cs,[e(t)]),s("div",{style:q({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Vs,Fs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=b=>a.toggleCode(0))},$(a.vdpv_0Height>0?"hidden":"show"),1)])]),Hs,Es,As,s("div",Ls,[s("div",Ss,[s("div",Ts,[e(p)]),s("div",{style:q({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Us,Ns,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=b=>a.toggleCode(1))},$(a.vdpv_1Height>0?"hidden":"show"),1)])]),Os,s("div",zs,[s("div",Gs,[s("div",Js,[e(o)]),s("div",{style:q({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ks,Ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=b=>a.toggleCode(2))},$(a.vdpv_2Height>0?"hidden":"show"),1)])]),Qs,Ws,s("div",Xs,[s("div",Zs,[s("div",sa,[e(v)]),s("div",{style:q({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",aa,ta,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[3]||(n[3]=b=>a.toggleCode(3))},$(a.vdpv_3Height>0?"hidden":"show"),1)])]),la,pa,s("div",ea,[s("div",oa,[s("div",ca,[e(_)]),s("div",{style:q({height:a.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",ia,ra,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[4]||(n[4]=b=>a.toggleCode(4))},$(a.vdpv_4Height>0?"hidden":"show"),1)])])])}var ma=h(Is,[["render",ha]]);export{ma as default};
