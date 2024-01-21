import{_ as r,r as o,o as i,c as v,b as s,d as c,F as y,e as b,a as w,f as k,g,h as V,i as N,n as f,t as q,k as m,j as h}from"./index.477881a6.js";const C={data(){return{value:0}},methods:{onChange(a){console.log("`change` event: ",a)},onInput(a){console.log("`input` event: ",a)},onFocus(a){console.log("`focus` event: ",a)},onBlur(a){console.log("`blur` event: ",a)}}},D={style:{"margin-bottom":"16px"}};function H(a,n,u,d,l,p){const t=o("YuumiNumberInput");return i(),v(y,null,[s("div",D,[c(t,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),onChange:p.onChange,onInput:p.onInput,onFocus:p.onFocus,onBlur:p.onBlur},null,8,["modelValue","onChange","onInput","onFocus","onBlur"])]),s("div",null,[c(t,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=e=>l.value=e),disabled:""},null,8,["modelValue"])])],64)}var Y=r(C,[["render",H]]);const R={components:{ImportDemo:Y}};function B(a,n,u,d,l,p){const t=o("ImportDemo");return i(),b(t)}var U=r(R,[["render",B]]);const z={data(){return{value:10}}};function F(a,n,u,d,l,p){const t=o("YuumiNumberInput");return i(),v("div",null,[c(t,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),max:10,min:-10},null,8,["modelValue"])])}var A=r(z,[["render",F]]);const S={components:{ImportDemo:A}};function E(a,n,u,d,l,p){const t=o("ImportDemo");return i(),b(t)}var L=r(S,[["render",E]]);const T={data(){return{value:0}}};function G(a,n,u,d,l,p){const t=o("YuumiNumberInput");return i(),v("div",null,[c(t,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),step:.1},null,8,["modelValue","step"])])}var J=r(T,[["render",G]]);const K={components:{ImportDemo:J}};function M(a,n,u,d,l,p){const t=o("ImportDemo");return i(),b(t)}var O=r(K,[["render",M]]);const P={data(){return{value:0}}};function Q(a,n,u,d,l,p){const t=o("YuumiNumberInput");return i(),v(y,null,w(["xl","lg","md","sm","xm"],e=>s("div",{key:e,style:{"margin-bottom":"10px"}},[c(t,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=$=>l.value=$),size:e},null,8,["modelValue","size"])])),64)}var W=r(P,[["render",Q]]);const X={components:{ImportDemo:W}};function Z(a,n,u,d,l,p){const t=o("ImportDemo");return i(),b(t)}var ss=r(X,[["render",Z]]);const ns={data(){return{value:0}}},as={style:{"margin-bottom":"10px"}},ls={style:{"margin-bottom":"10px"}},ts={style:{"margin-bottom":"10px"}},es={style:{"margin-bottom":"10px"}};function ps(a,n,u,d,l,p){const t=o("YuumiNumberInput");return i(),v(y,null,[s("div",as,[c(t,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),"show-btn":!1,"btn-placement":"default"},null,8,["modelValue"])]),s("div",ls,[c(t,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=e=>l.value=e),"btn-placement":"left"},null,8,["modelValue"])]),s("div",ts,[c(t,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=e=>l.value=e),"btn-placement":"right"},null,8,["modelValue"])]),s("div",es,[c(t,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=e=>l.value=e),size:"xm","btn-placement":"right"},null,8,["modelValue"])])],64)}var os=r(ns,[["render",ps]]);const cs={components:{ImportDemo:os}};function us(a,n,u,d,l,p){const t=o("ImportDemo");return i(),b(t)}var ds=r(cs,[["render",us]]);const x=k({components:{vdpv_0:U,vdpv_1:L,vdpv_2:O,vdpv_3:ss,vdpv_4:ds},setup(a){const n=g(),u=g(),d=g(),l=g(),p=g(),t=[n,u,d,l,p],e=V({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return{toggleCode:_=>{const j="vdpv_"+_;e[j+"Height"]===0?e[j+"Height"]=(t[_].value?t[_].value.offsetHeight:0)||0:e[j+"Height"]=0},...N(e),vdpv_0Ref:n,vdpv_1Ref:u,vdpv_2Ref:d,vdpv_3Ref:l,vdpv_4Ref:p}}});x.$vd={matter:{},toc:[{content:"NumberInput \u8BA1\u6570\u5668",anchor:"numberinput-\u8BA1\u6570\u5668",level:2},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u8BBE\u7F6E\u8303\u56F4",anchor:"\u8BBE\u7F6E\u8303\u56F4",level:3},{content:"\u8BBE\u7F6E\u6B65\u957F",anchor:"\u8BBE\u7F6E\u6B65\u957F",level:3},{content:"\u8BBE\u7F6E\u5927\u5C0F",anchor:"\u8BBE\u7F6E\u5927\u5C0F",level:3},{content:"\u6309\u94AE\u4F4D\u7F6E",anchor:"\u6309\u94AE\u4F4D\u7F6E",level:3}]};const rs=x,is={class:"vuedoc"},hs=m('<h2 id="numberinput-\u8BA1\u6570\u5668" data-source-line="1"><a class="markdownIt-Anchor" href="#numberinput-\u8BA1\u6570\u5668">#</a> NumberInput \u8BA1\u6570\u5668</h2><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),ms={class:"vuedoc-demo"},vs={class:"vuedoc-demo__inner"},_s={class:"vuedoc-demo__preview"},js={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},gs=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 16px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
      @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;onFocus&quot;</span>
      @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;onBlur&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      <span class="hljs-attr">disabled</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    onChange (value) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\`change\` event: &quot;</span>, value)
    },
    <span class="hljs-function"><span class="hljs-title">onInput</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\`input\` event: &quot;</span>, value)
    },
    <span class="hljs-function"><span class="hljs-title">onFocus</span>(<span class="hljs-params">e</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\`focus\` event: &quot;</span>, e)
    },
    <span class="hljs-function"><span class="hljs-title">onBlur</span>(<span class="hljs-params">e</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\`blur\` event: &quot;</span>, e)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),fs=[gs],qs=s("h3",{id:"\u8BBE\u7F6E\u8303\u56F4","data-source-line":"8"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u8303\u56F4"},"#"),h(" \u8BBE\u7F6E\u8303\u56F4")],-1),bs=s("pre",{style:{display:"none"}},null,-1),$s={class:"vuedoc-demo"},Is={class:"vuedoc-demo__inner"},ys={class:"vuedoc-demo__preview"},xs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ws=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;10&quot;</span>
      <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;-10&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">10</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),ks=[ws],Vs=s("h3",{id:"\u8BBE\u7F6E\u6B65\u957F","data-source-line":"13"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u6B65\u957F"},"#"),h(" \u8BBE\u7F6E\u6B65\u957F")],-1),Ns=s("pre",{style:{display:"none"}},null,-1),Cs={class:"vuedoc-demo"},Ds={class:"vuedoc-demo__inner"},Hs={class:"vuedoc-demo__preview"},Ys={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Rs=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;0.1&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Bs=[Rs],Us=m('<h3 id="\u8BBE\u7F6E\u5927\u5C0F" data-source-line="18"><a class="markdownIt-Anchor" href="#\u8BBE\u7F6E\u5927\u5C0F">#</a> \u8BBE\u7F6E\u5927\u5C0F</h3><p data-source-line="20">\u53EF\u9009\u503C <code>xl</code>\u3001<code>lg</code>\u3001<code>md</code>\u3001<code>sm</code>\u3001<code>xm</code>\uFF0C\u9ED8\u8BA4\u4E3A <code>md</code>\u3002</p><pre style="display:none;"></pre>',3),zs={class:"vuedoc-demo"},Fs={class:"vuedoc-demo__inner"},As={class:"vuedoc-demo__preview"},Ss={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Es=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;size in [&#39;xl&#39;, &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39;, &#39;xm&#39;]&quot;</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;size&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 10px&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;size&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ls=[Es],Ts=s("h3",{id:"\u6309\u94AE\u4F4D\u7F6E","data-source-line":"25"},[s("a",{class:"markdownIt-Anchor",href:"#\u6309\u94AE\u4F4D\u7F6E"},"#"),h(" \u6309\u94AE\u4F4D\u7F6E")],-1),Gs=s("p",{"data-source-line":"27"},[h("\u53EF\u9009\u503C "),s("code",null,"default"),h("\u3001"),s("code",null,"left"),h("\u3001"),s("code",null,"right"),h("\uFF0C\u9ED8\u8BA4\u4E3A "),s("code",null,"default"),h("\u3002")],-1),Js=s("pre",{style:{display:"none"}},null,-1),Ks={class:"vuedoc-demo"},Ms={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Ps={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Qs=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      <span class="hljs-attr">:show-btn</span>=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">btn-placement</span>=<span class="hljs-string">&quot;default&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      <span class="hljs-attr">btn-placement</span>=<span class="hljs-string">&quot;left&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      <span class="hljs-attr">btn-placement</span>=<span class="hljs-string">&quot;right&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNumberInput</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xm&quot;</span>
      <span class="hljs-attr">btn-placement</span>=<span class="hljs-string">&quot;right&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ws=[Qs];function Xs(a,n,u,d,l,p){const t=o("vdpv_0"),e=o("vdpv_1"),$=o("vdpv_2"),_=o("vdpv_3"),j=o("vdpv_4");return i(),v("div",is,[hs,s("div",ms,[s("div",vs,[s("div",_s,[c(t)]),s("div",{style:f({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",js,fs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=I=>a.toggleCode(0))},q(a.vdpv_0Height>0?"hidden":"show"),1)])]),qs,bs,s("div",$s,[s("div",Is,[s("div",ys,[c(e)]),s("div",{style:f({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",xs,ks,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=I=>a.toggleCode(1))},q(a.vdpv_1Height>0?"hidden":"show"),1)])]),Vs,Ns,s("div",Cs,[s("div",Ds,[s("div",Hs,[c($)]),s("div",{style:f({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ys,Bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=I=>a.toggleCode(2))},q(a.vdpv_2Height>0?"hidden":"show"),1)])]),Us,s("div",zs,[s("div",Fs,[s("div",As,[c(_)]),s("div",{style:f({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ss,Ls,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[3]||(n[3]=I=>a.toggleCode(3))},q(a.vdpv_3Height>0?"hidden":"show"),1)])]),Ts,Gs,Js,s("div",Ks,[s("div",Ms,[s("div",Os,[c(j)]),s("div",{style:f({height:a.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ps,Ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[4]||(n[4]=I=>a.toggleCode(4))},q(a.vdpv_4Height>0?"hidden":"show"),1)])])])}var sn=r(rs,[["render",Xs]]);export{sn as default};
