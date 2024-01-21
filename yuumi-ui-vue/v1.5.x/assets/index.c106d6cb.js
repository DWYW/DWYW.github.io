import{_ as m,r,o as i,c as g,d as c,w as _,j as u,F as j,a as y,b as s,t as v,e as q,f as $,g as x,h as w,i as k,n as Y,k as I}from"./index.477881a6.js";const C={computed:{icon(){return{primary:"line-help",warn:"line-info",success:"line-circle-correct",danger:"line-circle-close"}}}},H=s("span",null,"default message",-1);function W(l,n,p,t,h,e){const a=r("YuumiIcon"),d=r("YuumiWarning");return i(),g(j,null,[c(d,{style:{margin:"0 10px 10px 0"}},{default:_(()=>[c(a,{icon:"line-help",style:{"vertical-align":"middle"}}),u(),H]),_:1}),(i(),g(j,null,y(["primary","success","warn","danger"],o=>c(d,{key:o,style:{margin:"0 10px 10px 0"},theme:o},{default:_(()=>[c(a,{icon:e.icon[o],style:{"vertical-align":"middle"}},null,8,["icon"]),u(),s("span",null,v(o)+" message",1)]),_:2},1032,["theme"])),64))],64)}var B=m(C,[["render",W]]);const D={components:{ImportDemo:B}};function N(l,n,p,t,h,e){const a=r("ImportDemo");return i(),q(a)}var V=m(D,[["render",N]]);const f=$({components:{vdpv_0:V},setup(l){const n=x(),p=[n],t=w({vdpv_0Height:0});return{toggleCode:e=>{const a="vdpv_"+e;t[a+"Height"]===0?t[a+"Height"]=(p[e].value?p[e].value.offsetHeight:0)||0:t[a+"Height"]=0},...k(t),vdpv_0Ref:n}}});f.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3}]};const R=f,S={class:"vuedoc"},F=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),u(" \u57FA\u672C\u7528\u6CD5")],-1),b=s("pre",{style:{display:"none"}},null,-1),z={class:"vuedoc-demo"},A={class:"vuedoc-demo__inner"},E={class:"vuedoc-demo__preview"},L={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},T=I(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiWarning</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span>
      <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-help&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;vertical-align: middle;&quot;</span>
    /&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>default message<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiWarning</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;theme in [&#39;primary&#39;, &#39;success&#39;, &#39;warn&#39;, &#39;danger&#39;]&quot;</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;theme&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiWarning</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span>
        <span class="hljs-attr">:icon</span>=<span class="hljs-string">&quot;icon[theme]&quot;</span>
        <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;vertical-align: middle;&quot;</span>
      /&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ theme }} message<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiWarning</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">computed</span>: {
    icon () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">primary</span>: <span class="hljs-string">&#39;line-help&#39;</span>,
        <span class="hljs-attr">warn</span>: <span class="hljs-string">&#39;line-info&#39;</span>,
        <span class="hljs-attr">success</span>: <span class="hljs-string">&#39;line-circle-correct&#39;</span>,
        <span class="hljs-attr">danger</span>: <span class="hljs-string">&#39;line-circle-close&#39;</span>,
      }
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),G=[T];function J(l,n,p,t,h,e){const a=r("vdpv_0");return i(),g("div",S,[F,b,s("div",z,[s("div",A,[s("div",E,[c(a)]),s("div",{style:Y({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",L,G,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=d=>l.toggleCode(0))},v(l.vdpv_0Height>0?"hidden":"show"),1)])])])}var M=m(R,[["render",J]]);export{M as default};
