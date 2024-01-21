import{_ as u,r as o,o as i,c as b,d as c,F as x,e as m,a as C,f as V,g as j,h as D,i as T,b as a,n as _,t as g,j as k,k as v}from"./index.477881a6.js";const H={data(){return{value:new Date("Thu Sep 09 2021 17:05:04 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)"),value1:null}},methods:{onChange(n){console.log("onChange",n)}}};function I(n,s,r,d,l,p){const e=o("YuumiTimePicker");return i(),b(x,null,[c(e,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),style:{margin:"0 10px 10px 0"},onChange:p.onChange},null,8,["modelValue","onChange"]),c(e,{modelValue:l.value1,"onUpdate:modelValue":s[1]||(s[1]=t=>l.value1=t),style:{margin:"0 10px 10px 0"},onChange:p.onChange},null,8,["modelValue","onChange"])],64)}var P=u(H,[["render",I]]);const Y={components:{ImportDemo:P}};function R(n,s,r,d,l,p){const e=o("ImportDemo");return i(),m(e)}var S=u(Y,[["render",R]]);const M={data(){return{value:[new Date("Thu Sep 09 2021 17:05:04 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)"),new Date("Thu Sep 09 2021 18:05:04 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)")],value1:null}},methods:{onChange(n){console.log("onChange",n)}}};function U(n,s,r,d,l,p){const e=o("YuumiTimePicker");return i(),b(x,null,[c(e,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),range:"",style:{margin:"0 10px 10px 0"},onChange:p.onChange},null,8,["modelValue","onChange"]),c(e,{modelValue:l.value1,"onUpdate:modelValue":s[1]||(s[1]=t=>l.value1=t),range:"",style:{margin:"0 10px 10px 0"},onChange:p.onChange},null,8,["modelValue","onChange"])],64)}var z=u(M,[["render",U]]);const A={components:{ImportDemo:z}};function G(n,s,r,d,l,p){const e=o("ImportDemo");return i(),m(e)}var B=u(A,[["render",G]]);const N={data(){return{value:null}},methods:{onChange(n){console.log("onChange",n)}}};function F(n,s,r,d,l,p){const e=o("YuumiTimePicker");return i(),b(x,null,C(["xl","lg","md","sm","xm"],t=>c(e,{key:t,modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=h=>l.value=h),style:{margin:"0 10px 10px 0"},size:t,onChange:p.onChange},null,8,["modelValue","size","onChange"])),64)}var E=u(N,[["render",F]]);const L={components:{ImportDemo:E}};function J(n,s,r,d,l,p){const e=o("ImportDemo");return i(),m(e)}var K=u(L,[["render",J]]);const O={data(){return{value:new Date(2021,8,10,0,0,0),value1:new Date(2021,8,10,0,0,0),value2:new Date(2021,8,10,0,0,0),value3:new Date(2021,8,10,0,0,0)}},methods:{disabledHours(){return[0,1,2,3,4,5]},disabledMinutes({hours:n}){return n===6?[0,1,2,3,4,5]:[58,59]},disabledSeconds({minutes:n}){return n===6?[0,1,2,3,4,5]:[58,59]}}};function Q(n,s,r,d,l,p){const e=o("YuumiTimePicker");return i(),b(x,null,[c(e,{disabled:"",style:{margin:"0 10px 10px 0"}}),c(e,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),disabled:"",style:{margin:"0 10px 10px 0"}},null,8,["modelValue"]),c(e,{modelValue:l.value1,"onUpdate:modelValue":s[1]||(s[1]=t=>l.value1=t),"disabled-hours":p.disabledHours,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","disabled-hours"]),c(e,{modelValue:l.value2,"onUpdate:modelValue":s[2]||(s[2]=t=>l.value2=t),"disabled-hours":p.disabledHours,"disabled-minutes":p.disabledMinutes,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","disabled-hours","disabled-minutes"]),c(e,{modelValue:l.value3,"onUpdate:modelValue":s[3]||(s[3]=t=>l.value3=t),"disabled-hours":p.disabledHours,"disabled-minutes":p.disabledMinutes,"disabled-seconds":p.disabledSeconds,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])],64)}var W=u(O,[["render",Q]]);const X={components:{ImportDemo:W}};function Z(n,s,r,d,l,p){const e=o("ImportDemo");return i(),m(e)}var ss=u(X,[["render",Z]]);const as={data(){return{value1:null,value2:null}}};function ns(n,s,r,d,l,p){const e=o("YuumiTimePicker");return i(),b(x,null,[c(e,{modelValue:l.value1,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value1=t),style:{margin:"0 10px 10px 0"},clearable:""},null,8,["modelValue"]),c(e,{modelValue:l.value2,"onUpdate:modelValue":s[1]||(s[1]=t=>l.value2=t),style:{margin:"0 10px 10px 0"},clearable:"",range:""},null,8,["modelValue"])],64)}var ls=u(as,[["render",ns]]);const es={components:{ImportDemo:ls}};function ts(n,s,r,d,l,p){const e=o("ImportDemo");return i(),m(e)}var ps=u(es,[["render",ts]]);const os={data(){return{value:null}}};function cs(n,s,r,d,l,p){const e=o("YuumiTimePicker");return i(),m(e,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),format:"h:m",style:{margin:"0 10px 10px 0"},clearable:""},null,8,["modelValue"])}var rs=u(os,[["render",cs]]);const ds={components:{ImportDemo:rs}};function us(n,s,r,d,l,p){const e=o("ImportDemo");return i(),m(e)}var is=u(ds,[["render",us]]);const $=V({components:{vdpv_0:S,vdpv_1:B,vdpv_2:K,vdpv_3:ss,vdpv_4:ps,vdpv_5:is},setup(n){const s=j(),r=j(),d=j(),l=j(),p=j(),e=j(),t=[s,r,d,l,p,e],h=D({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0});return{toggleCode:f=>{const q="vdpv_"+f;h[q+"Height"]===0?h[q+"Height"]=(t[f].value?t[f].value.offsetHeight:0)||0:h[q+"Height"]=0},...T(h),vdpv_0Ref:s,vdpv_1Ref:r,vdpv_2Ref:d,vdpv_3Ref:l,vdpv_4Ref:p,vdpv_5Ref:e}}});$.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u8303\u56F4\u9009\u62E9",anchor:"\u8303\u56F4\u9009\u62E9",level:3},{content:"\u8BBE\u7F6E\u5927\u5C0F",anchor:"\u8BBE\u7F6E\u5927\u5C0F",level:3},{content:"\u7981\u7528",anchor:"\u7981\u7528",level:3},{content:"\u53EF\u6E05\u9664",anchor:"\u53EF\u6E05\u9664",level:3},{content:"\u5176\u4ED6\u683C\u5F0F",anchor:"\u5176\u4ED6\u683C\u5F0F",level:3}]};const hs=$,ms={class:"vuedoc"},vs=a("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[a("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),k(" \u57FA\u672C\u7528\u6CD5")],-1),js=a("pre",{style:{display:"none"}},null,-1),_s={class:"vuedoc-demo"},gs={class:"vuedoc-demo__inner"},bs={class:"vuedoc-demo__preview"},fs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},qs=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-string">&#39;Thu Sep 09 2021 17:05:04 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)&#39;</span>),
      <span class="hljs-attr">value1</span>: <span class="hljs-literal">null</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    onChange (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;onChange&quot;</span>, detail)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),ys=[qs],xs=a("h3",{id:"\u8303\u56F4\u9009\u62E9","data-source-line":"5"},[a("a",{class:"markdownIt-Anchor",href:"#\u8303\u56F4\u9009\u62E9"},"#"),k(" \u8303\u56F4\u9009\u62E9")],-1),ks=a("pre",{style:{display:"none"}},null,-1),ws={class:"vuedoc-demo"},$s={class:"vuedoc-demo__inner"},Cs={class:"vuedoc-demo__preview"},Vs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Ds=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">range</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">range</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: [<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-string">&#39;Thu Sep 09 2021 17:05:04 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)&#39;</span>), <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-string">&#39;Thu Sep 09 2021 18:05:04 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)&#39;</span>)],
      <span class="hljs-attr">value1</span>: <span class="hljs-literal">null</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    onChange (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;onChange&quot;</span>, detail)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Ts=[Ds],Hs=v('<h3 id="\u8BBE\u7F6E\u5927\u5C0F" data-source-line="9"><a class="markdownIt-Anchor" href="#\u8BBE\u7F6E\u5927\u5C0F">#</a> \u8BBE\u7F6E\u5927\u5C0F</h3><p data-source-line="11">\u53EF\u9009\u503C\u4E3A\uFF1A<code>xl</code>\u3001 <code>lg</code>\u3001 <code>md</code>\u3001 <code>sm</code>\u3001 <code>xm</code>\uFF0C \u9ED8\u8BA4\u503C <code>md</code>\u3002</p><pre style="display:none;"></pre>',3),Is={class:"vuedoc-demo"},Ps={class:"vuedoc-demo__inner"},Ys={class:"vuedoc-demo__preview"},Rs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ss=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;size in [&#39;xl&#39;, &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39;, &#39;xm&#39;]&quot;</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;size&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;size&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    onChange (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;onChange&quot;</span>, detail)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Ms=[Ss],Us=a("h3",{id:"\u7981\u7528","data-source-line":"16"},[a("a",{class:"markdownIt-Anchor",href:"#\u7981\u7528"},"#"),k(" \u7981\u7528")],-1),zs=a("pre",{style:{display:"none"}},null,-1),As={class:"vuedoc-demo"},Gs={class:"vuedoc-demo__inner"},Bs={class:"vuedoc-demo__preview"},Ns={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Fs=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">disabled</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">disabled</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
  /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">:disabled-hours</span>=<span class="hljs-string">&quot;disabledHours&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">:disabled-hours</span>=<span class="hljs-string">&quot;disabledHours&quot;</span>
    <span class="hljs-attr">:disabled-minutes</span>=<span class="hljs-string">&quot;disabledMinutes&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
    <span class="hljs-attr">:disabled-hours</span>=<span class="hljs-string">&quot;disabledHours&quot;</span>
    <span class="hljs-attr">:disabled-minutes</span>=<span class="hljs-string">&quot;disabledMinutes&quot;</span>
    <span class="hljs-attr">:disabled-seconds</span>=<span class="hljs-string">&quot;disabledSeconds&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2021</span>, <span class="hljs-number">8</span>, <span class="hljs-number">10</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>),
      <span class="hljs-attr">value1</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2021</span>, <span class="hljs-number">8</span>, <span class="hljs-number">10</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>),
      <span class="hljs-attr">value2</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2021</span>, <span class="hljs-number">8</span>, <span class="hljs-number">10</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>),
      <span class="hljs-attr">value3</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2021</span>, <span class="hljs-number">8</span>, <span class="hljs-number">10</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>),
    }
  },
  <span class="hljs-attr">methods</span>: {
    disabledHours () {
      <span class="hljs-keyword">return</span> [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]
    },
    disabledMinutes ({hours}) {
      <span class="hljs-keyword">if</span> (hours === <span class="hljs-number">6</span>) <span class="hljs-keyword">return</span> [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]
      <span class="hljs-keyword">return</span> [<span class="hljs-number">58</span>, <span class="hljs-number">59</span>]
    },
    disabledSeconds ({minutes}) {
      <span class="hljs-keyword">if</span> (minutes === <span class="hljs-number">6</span>) <span class="hljs-keyword">return</span> [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]
      <span class="hljs-keyword">return</span> [<span class="hljs-number">58</span>, <span class="hljs-number">59</span>]
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Es=[Fs],Ls=a("h3",{id:"\u53EF\u6E05\u9664","data-source-line":"21"},[a("a",{class:"markdownIt-Anchor",href:"#\u53EF\u6E05\u9664"},"#"),k(" \u53EF\u6E05\u9664")],-1),Js=a("pre",{style:{display:"none"}},null,-1),Ks={class:"vuedoc-demo"},Os={class:"vuedoc-demo__inner"},Qs={class:"vuedoc-demo__preview"},Ws={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Xs=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    <span class="hljs-attr">clearable</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    <span class="hljs-attr">clearable</span>
    <span class="hljs-attr">range</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value1</span>: <span class="hljs-literal">null</span>,
      <span class="hljs-attr">value2</span>: <span class="hljs-literal">null</span>,
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Zs=[Xs],sa=a("h3",{id:"\u5176\u4ED6\u683C\u5F0F","data-source-line":"26"},[a("a",{class:"markdownIt-Anchor",href:"#\u5176\u4ED6\u683C\u5F0F"},"#"),k(" \u5176\u4ED6\u683C\u5F0F")],-1),aa=a("pre",{style:{display:"none"}},null,-1),na={class:"vuedoc-demo"},la={class:"vuedoc-demo__inner"},ea={class:"vuedoc-demo__preview"},ta={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},pa=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTimePicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;h:m&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    <span class="hljs-attr">clearable</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),oa=[pa];function ca(n,s,r,d,l,p){const e=o("vdpv_0"),t=o("vdpv_1"),h=o("vdpv_2"),w=o("vdpv_3"),f=o("vdpv_4"),q=o("vdpv_5");return i(),b("div",ms,[vs,js,a("div",_s,[a("div",gs,[a("div",bs,[c(e)]),a("div",{style:_({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[a("div",fs,ys,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=y=>n.toggleCode(0))},g(n.vdpv_0Height>0?"hidden":"show"),1)])]),xs,ks,a("div",ws,[a("div",$s,[a("div",Cs,[c(t)]),a("div",{style:_({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[a("div",Vs,Ts,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=y=>n.toggleCode(1))},g(n.vdpv_1Height>0?"hidden":"show"),1)])]),Hs,a("div",Is,[a("div",Ps,[a("div",Ys,[c(h)]),a("div",{style:_({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[a("div",Rs,Ms,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[2]||(s[2]=y=>n.toggleCode(2))},g(n.vdpv_2Height>0?"hidden":"show"),1)])]),Us,zs,a("div",As,[a("div",Gs,[a("div",Bs,[c(w)]),a("div",{style:_({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[a("div",Ns,Es,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[3]||(s[3]=y=>n.toggleCode(3))},g(n.vdpv_3Height>0?"hidden":"show"),1)])]),Ls,Js,a("div",Ks,[a("div",Os,[a("div",Qs,[c(f)]),a("div",{style:_({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[a("div",Ws,Zs,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[4]||(s[4]=y=>n.toggleCode(4))},g(n.vdpv_4Height>0?"hidden":"show"),1)])]),sa,aa,a("div",na,[a("div",la,[a("div",ea,[c(q)]),a("div",{style:_({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[a("div",ta,oa,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[5]||(s[5]=y=>n.toggleCode(5))},g(n.vdpv_5Height>0?"hidden":"show"),1)])])])}var da=u(hs,[["render",ca]]);export{da as default};
