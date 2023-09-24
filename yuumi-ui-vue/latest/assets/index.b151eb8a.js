import{f as h,_ as i,r as p,o as d,c as m,d as r,b as s,w as j,j as _,t as v,F as $,e as y,g as k,h as w,i as R,n as q,k as x}from"./index.495b204b.js";const C=h({data(){return{ratio:1}}}),b={style:{width:"300px"}};function H(a,n,l,e,c,o){const t=p("YuumiInput"),u=p("YuumiRatioRect");return d(),m($,null,[r(t,{modelValue:a.ratio,"onUpdate:modelValue":n[0]||(n[0]=g=>a.ratio=g),limit:/^\d+(\.\d*)?$/},null,8,["modelValue","limit"]),s("div",b,[r(u,{ratio:a.ratio,style:{"background-color":"blue","border-radius":"4px",display:"flex","justify-content":"center","align-items":"center",color:"#ffffff"}},{default:j(()=>[_(" ratio: "+v(a.ratio),1)]),_:1},8,["ratio"])])],64)}var I=i(C,[["render",H]]);const V={components:{ImportDemo:I}};function Y(a,n,l,e,c,o){const t=p("ImportDemo");return d(),y(t)}var B=i(V,[["render",Y]]);const f=h({components:{vdpv_0:B},setup(a){const n=k(),l=[n],e=w({vdpv_0Height:0});return{toggleCode:o=>{const t="vdpv_"+o;e[t+"Height"]===0?e[t+"Height"]=(l[o].value?l[o].value.offsetHeight:0)||0:e[t+"Height"]=0},...R(e),vdpv_0Ref:n}}});f.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3}]};const D=f,N={class:"vuedoc"},S=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),_(" \u57FA\u672C\u7528\u6CD5")],-1),F=s("p",{"data-source-line":"3"},"ratio \u8868\u793A\u77E9\u5F62\u7684\u5BBD\u9AD8\u6BD4\uFF0C\u9ED8\u8BA4\u4E3A1\u3002",-1),z=s("pre",{style:{display:"none"}},null,-1),A={class:"vuedoc-demo"},E={class:"vuedoc-demo__inner"},T={class:"vuedoc-demo__preview"},U={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},G=x(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiInput</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;ratio&quot;</span>
    <span class="hljs-attr">:limit</span>=<span class="hljs-string">&quot;/^\\d+(\\.\\d*)?$/&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 300px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRatioRect</span>
      <span class="hljs-attr">:ratio</span>=<span class="hljs-string">&quot;ratio&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;background-color: blue; border-radius: 4px; display: flex; justify-content: center; align-items: center; color: #ffffff;&quot;</span>
    &gt;</span>
      ratio: {{ ratio }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiRatioRect</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
 <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">ratio</span>: <span class="hljs-number">1</span>
  }
 }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),J=[G];function K(a,n,l,e,c,o){const t=p("vdpv_0");return d(),m("div",N,[S,F,z,s("div",A,[s("div",E,[s("div",T,[r(t)]),s("div",{style:q({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",U,J,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=u=>a.toggleCode(0))},v(a.vdpv_0Height>0?"hidden":"show"),1)])])])}var M=i(D,[["render",K]]);export{M as default};
