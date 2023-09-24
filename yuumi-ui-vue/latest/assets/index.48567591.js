import{_ as m,r,o as h,c as _,F as j,a as k,d as u,w as v,j as c,t as g,e as q,f as y,g as w,h as b,i as Y,b as n,n as $,k as f}from"./index.495b204b.js";const x={data(){return{position:"right",show:!1}},methods:{showDrawer(e){this.position=e,this.show=!0}}};function B(e,s,i,d,t,l){const o=r("YuumiButton"),p=r("YuumiDrawer");return h(),_(j,null,[(h(),_(j,null,k(["right","left","top","bottom"],a=>u(o,{key:a,style:{margin:"0 10px 10px 0"},onClick:os=>l.showDrawer(a)},{default:v(()=>[c(g(a),1)]),_:2},1032,["onClick"])),64)),u(p,{modelValue:t.show,"onUpdate:modelValue":s[0]||(s[0]=a=>t.show=a),position:t.position},{default:v(()=>[c(g(t.position),1)]),_:1},8,["modelValue","position"])],64)}var C=m(x,[["render",B]]);const L={components:{ImportDemo:C}};function H(e,s,i,d,t,l){const o=r("ImportDemo");return h(),q(o)}var V=m(L,[["render",H]]);const I={data(){return{show:!1}},methods:{showDrawer(){this.show=!0},eventLog(e,s){console.log(s,e)}}};function R(e,s,i,d,t,l){const o=r("YuumiButton"),p=r("YuumiDrawer");return h(),_(j,null,[u(o,{onClick:s[0]||(s[0]=a=>l.showDrawer())},{default:v(()=>[c(" \u9ED8\u8BA4(right) ")]),_:1}),u(p,{modelValue:t.show,"onUpdate:modelValue":s[1]||(s[1]=a=>t.show=a),onBeforeOpen:s[2]||(s[2]=a=>l.eventLog(a,"before-open")),onAfterOpen:s[3]||(s[3]=a=>l.eventLog(a,"after-open")),onBeforeClose:s[4]||(s[4]=a=>l.eventLog(a,"before-close")),onAfterClose:s[5]||(s[5]=a=>l.eventLog(a,"after-close"))},{default:v(()=>[c(" events ")]),_:1},8,["modelValue"])],64)}var A=m(I,[["render",R]]);const N={components:{ImportDemo:A}};function S(e,s,i,d,t,l){const o=r("ImportDemo");return h(),q(o)}var F=m(N,[["render",S]]);const D=y({components:{vdpv_0:V,vdpv_1:F},setup(e){const s=w(),i=w(),d=[s,i],t=b({vdpv_0Height:0,vdpv_1Height:0});return{toggleCode:o=>{const p="vdpv_"+o;t[p+"Height"]===0?t[p+"Height"]=(d[o].value?d[o].value.offsetHeight:0)||0:t[p+"Height"]=0},...Y(t),vdpv_0Ref:s,vdpv_1Ref:i}}});D.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u4E8B\u4EF6",anchor:"\u4E8B\u4EF6",level:3}]};const O=D,U={class:"vuedoc"},z=f('<h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="1"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><p data-source-line="3">position \u53EF\u9009\u503C\u4E3A <code>top</code>\u3001 <code>right</code>\u3001 <code>bottom</code>\u3001 <code>left</code>\uFF0C \u9ED8\u8BA4\u503C <code>right</code>\u3002</p><pre style="display:none;"></pre>',3),E={class:"vuedoc-demo"},T={class:"vuedoc-demo__inner"},G={class:"vuedoc-demo__preview"},J={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},K=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in [&#39;right&#39;, &#39;left&#39;, &#39;top&#39;, &#39;bottom&#39;]&quot;</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDrawer(item)&quot;</span>
    &gt;</span>
      {{ item }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDrawer</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">:position</span>=<span class="hljs-string">&quot;position&quot;</span>
  &gt;</span>
    {{ position }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDrawer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;right&#39;</span>,
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDrawer (position) {
      <span class="hljs-built_in">this</span>.position = position
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),M=[K],P=n("h3",{id:"\u4E8B\u4EF6","data-source-line":"8"},[n("a",{class:"markdownIt-Anchor",href:"#\u4E8B\u4EF6"},"#"),c(" \u4E8B\u4EF6")],-1),Q=n("p",{"data-source-line":"10"},[n("code",null,"before-open"),c(", "),n("code",null,"after-open"),c(", "),n("code",null,"before-close"),c(", "),n("code",null,"after-close"),c("\u3002")],-1),W=n("pre",{style:{display:"none"}},null,-1),X={class:"vuedoc-demo"},Z={class:"vuedoc-demo__inner"},ss={class:"vuedoc-demo__preview"},ns={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},as=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDrawer()&quot;</span>&gt;</span>
    \u9ED8\u8BA4(right)
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDrawer</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    @<span class="hljs-attr">before-open</span>=<span class="hljs-string">&quot;eventLog($event, &#39;before-open&#39;)&quot;</span>
    @<span class="hljs-attr">after-open</span>=<span class="hljs-string">&quot;eventLog($event, &#39;after-open&#39;)&quot;</span>
    @<span class="hljs-attr">before-close</span>=<span class="hljs-string">&quot;eventLog($event, &#39;before-close&#39;)&quot;</span>
    @<span class="hljs-attr">after-close</span>=<span class="hljs-string">&quot;eventLog($event, &#39;after-close&#39;)&quot;</span>
  &gt;</span>
    events
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDrawer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDrawer () {
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    },
    eventLog (el, type) {
      <span class="hljs-built_in">console</span>.log(type, el)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),es=[as];function ts(e,s,i,d,t,l){const o=r("vdpv_0"),p=r("vdpv_1");return h(),_("div",U,[z,n("div",E,[n("div",T,[n("div",G,[u(o)]),n("div",{style:$({height:e.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[n("div",J,M,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=a=>e.toggleCode(0))},g(e.vdpv_0Height>0?"hidden":"show"),1)])]),P,Q,W,n("div",X,[n("div",Z,[n("div",ss,[u(p)]),n("div",{style:$({height:e.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[n("div",ns,es,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=a=>e.toggleCode(1))},g(e.vdpv_1Height>0?"hidden":"show"),1)])])])}var ps=m(O,[["render",ts]]);export{ps as default};
