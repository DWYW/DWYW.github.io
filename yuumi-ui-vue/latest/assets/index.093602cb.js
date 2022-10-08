import{_ as d,r as p,o as u,c as x,a as C,d as h,w as m,j as o,t as v,F as w,e as _,b as s,m as N,Y,f as I,g as f,h as b,i as D,n as $,k as y}from"./index.eb4fdf2c.js";const H={methods:{createNotification(n){this.$yuumi.createNotification({title:"\u57FA\u672C\u7528\u6CD5",message:"\u57FA\u672C\u7528\u6CD5",theme:n})}}};function V(n,a,c,i,r,e){const t=p("YuumiButton");return u(),x(w,null,C(["default","primary","success","warn","error"],l=>h(t,{key:l,style:{margin:"0 10px 10px 0"},theme:l,onClick:q=>e.createNotification(l)},{default:m(()=>[o(v(l)+" notification",1)]),_:2},1032,["theme","onClick"])),64)}var R=d(H,[["render",V]]);const A={components:{ImportDemo:R}};function S(n,a,c,i,r,e){const t=p("ImportDemo");return u(),_(t)}var F=d(A,[["render",S]]);const U={data(){return{vnodes:[]}},beforeUnmount(){this.$yuumi.removeAllNotification()},methods:{createNotification(){this.vnodes.push(this.$yuumi.createNotification({title:"\u975E\u81EA\u52A8\u5173\u95ED",message:"\u975E\u81EA\u52A8\u5173\u95ED"+this.vnodes.length,duration:0}))},removeNotification(n){this.$yuumi.removeNotification(this.vnodes.shift())}}};function z(n,a,c,i,r,e){const t=p("YuumiButton");return u(),x(w,null,[h(t,{style:{margin:"0 10px 10px 0"},onClick:e.createNotification},{default:m(()=>[o("show notification")]),_:1},8,["onClick"]),h(t,{onClick:a[0]||(a[0]=l=>e.removeNotification(n.vnode))},{default:m(()=>[o("hide notification")]),_:1})],64)}var E=d(U,[["render",z]]);const L={components:{ImportDemo:E}};function T(n,a,c,i,r,e){const t=p("ImportDemo");return u(),_(t)}var G=d(L,[["render",T]]);const J={methods:{createNotification(n){this.$yuumi.createNotification({direction:n,title:"\u9009\u62E9\u4F4D\u7F6E",message:"\u9009\u62E9\u4F4D\u7F6E"})}}};function K(n,a,c,i,r,e){const t=p("YuumiButton");return u(),x(w,null,[s("div",null,[h(t,{onClick:a[0]||(a[0]=l=>e.createNotification("tl")),style:{margin:"0 10px 10px 0"}},{default:m(()=>[o("top left")]),_:1}),h(t,{onClick:a[1]||(a[1]=l=>e.createNotification("tr")),style:{margin:"0 10px 10px 0"}},{default:m(()=>[o("top right")]),_:1})]),s("div",null,[h(t,{onClick:a[2]||(a[2]=l=>e.createNotification("bl")),style:{margin:"0 10px 10px 0"}},{default:m(()=>[o("bottom left")]),_:1}),h(t,{onClick:a[3]||(a[3]=l=>e.createNotification("br")),style:{margin:"0 10px 10px 0"}},{default:m(()=>[o("bottom right")]),_:1})])],64)}var M=d(J,[["render",K]]);const O={components:{ImportDemo:M}};function P(n,a,c,i,r,e){const t=p("ImportDemo");return u(),_(t)}var Q=d(O,[["render",P]]);const W={methods:{createNotification(){this.$yuumi.createNotification({title:N("span",{style:{color:"red"}},"VNode"),message:N("span",{style:{color:"red"}},["use ",N("span",{style:{backgroundColor:"green",color:"#fff"}},["VNode"]),", you can close it."])})}}};function X(n,a,c,i,r,e){const t=p("YuumiButton");return u(),_(t,{onClick:e.createNotification},{default:m(()=>[o("\u4F7F\u7528VNode")]),_:1},8,["onClick"])}var Z=d(W,[["render",X]]);const ss={components:{ImportDemo:Z}};function as(n,a,c,i,r,e){const t=p("ImportDemo");return u(),_(t)}var ns=d(ss,[["render",as]]);const ts={components:{YuumiIcon:Y},methods:{createNotification(){this.$yuumi.createNotification({title:"\u81EA\u5B9A\u4E49\u56FE\u6807",message:"\u81EA\u5B9A\u4E49\u56FE\u6807",icon:N(Y,{icon:"flat-shield-correct"}),theme:"success"})}}};function es(n,a,c,i,r,e){const t=p("YuumiButton");return u(),_(t,{onClick:e.createNotification},{default:m(()=>[o("\u81EA\u5B9A\u4E49\u56FE\u6807")]),_:1},8,["onClick"])}var ls=d(ts,[["render",es]]);const os={components:{ImportDemo:ls}};function ps(n,a,c,i,r,e){const t=p("ImportDemo");return u(),_(t)}var cs=d(os,[["render",ps]]);const B=I({components:{vdpv_0:F,vdpv_1:G,vdpv_2:Q,vdpv_3:ns,vdpv_4:cs},setup(n){const a=f(),c=f(),i=f(),r=f(),e=f(),t=[a,c,i,r,e],l=b({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return{toggleCode:j=>{const g="vdpv_"+j;l[g+"Height"]===0?l[g+"Height"]=(t[j].value?t[j].value.offsetHeight:0)||0:l[g+"Height"]=0},...D(l),vdpv_0Ref:a,vdpv_1Ref:c,vdpv_2Ref:i,vdpv_3Ref:r,vdpv_4Ref:e}}});B.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u975E\u81EA\u52A8\u5173\u95ED",anchor:"\u975E\u81EA\u52A8\u5173\u95ED",level:3},{content:"\u9009\u62E9\u4F4D\u7F6E",anchor:"\u9009\u62E9\u4F4D\u7F6E",level:3},{content:"\u4F7F\u7528VNode",anchor:"\u4F7F\u7528vnode",level:3},{content:"\u81EA\u5B9A\u4E49\u56FE\u6807",anchor:"\u81EA\u5B9A\u4E49\u56FE\u6807",level:3}]};const is=B,rs={class:"vuedoc"},hs=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),o(" \u57FA\u672C\u7528\u6CD5")],-1),ds=s("pre",{style:{display:"none"}},null,-1),us={class:"vuedoc-demo"},ms={class:"vuedoc-demo__inner"},_s={class:"vuedoc-demo__preview"},vs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},js=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;theme in [&#39;default&#39;, &#39;primary&#39;, &#39;success&#39;, &#39;warn&#39;, &#39;error&#39;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;theme&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createNotification(theme)&quot;</span>&gt;</span>{{theme}} notification<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    createNotification (theme) {
      <span class="hljs-built_in">this</span>.$yuumi.createNotification({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u57FA\u672C\u7528\u6CD5&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u57FA\u672C\u7528\u6CD5&#39;</span>,
        <span class="hljs-attr">theme</span>: theme
      })
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),gs=[js],fs=s("h3",{id:"\u975E\u81EA\u52A8\u5173\u95ED","data-source-line":"6"},[s("a",{class:"markdownIt-Anchor",href:"#\u975E\u81EA\u52A8\u5173\u95ED"},"#"),o(" \u975E\u81EA\u52A8\u5173\u95ED")],-1),$s=s("p",{"data-source-line":"8"},[o("\u9ED8\u8BA4 "),s("code",null,"3s"),o(" \u540E\u81EA\u52A8\u5173\u95ED")],-1),ys=s("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo"},Ns={class:"vuedoc-demo__inner"},xs={class:"vuedoc-demo__preview"},qs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ws=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createNotification&quot;</span>&gt;</span>show notification<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;removeNotification(vnode)&quot;</span>&gt;</span>hide notification<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">vnodes</span>: []
    }
  },
  beforeUnmount () {
    <span class="hljs-built_in">this</span>.$yuumi.removeAllNotification()
  },
  <span class="hljs-attr">methods</span>: {
    createNotification () {
      <span class="hljs-built_in">this</span>.vnodes.push(<span class="hljs-built_in">this</span>.$yuumi.createNotification({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u975E\u81EA\u52A8\u5173\u95ED&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u975E\u81EA\u52A8\u5173\u95ED&#39;</span> + <span class="hljs-built_in">this</span>.vnodes.length,
        <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>
      }))
    },

    removeNotification (vnode) {
      <span class="hljs-built_in">this</span>.$yuumi.removeNotification(<span class="hljs-built_in">this</span>.vnodes.shift())
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ys=[ws],Bs=s("h3",{id:"\u9009\u62E9\u4F4D\u7F6E","data-source-line":"14"},[s("a",{class:"markdownIt-Anchor",href:"#\u9009\u62E9\u4F4D\u7F6E"},"#"),o(" \u9009\u62E9\u4F4D\u7F6E")],-1),Cs=s("pre",{style:{display:"none"}},null,-1),Is={class:"vuedoc-demo"},bs={class:"vuedoc-demo__inner"},Ds={class:"vuedoc-demo__preview"},Hs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Vs=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createNotification(&#39;tl&#39;)&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span>top left<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createNotification(&#39;tr&#39;)&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span>top right<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createNotification(&#39;bl&#39;)&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span>bottom left<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createNotification(&#39;br&#39;)&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>&gt;</span>bottom right<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { h } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    createNotification (direction) {
      <span class="hljs-built_in">this</span>.$yuumi.createNotification({
        direction,
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u9009\u62E9\u4F4D\u7F6E&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u9009\u62E9\u4F4D\u7F6E&#39;</span>
      })
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Rs=[Vs],As=s("h3",{id:"\u4F7F\u7528vnode","data-source-line":"19"},[s("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528vnode"},"#"),o(" \u4F7F\u7528VNode")],-1),Ss=s("pre",{style:{display:"none"}},null,-1),Fs={class:"vuedoc-demo"},Us={class:"vuedoc-demo__inner"},zs={class:"vuedoc-demo__preview"},Es={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ls=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createNotification&quot;</span>&gt;</span>\u4F7F\u7528VNode<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { h } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    createNotification () {
      <span class="hljs-built_in">this</span>.$yuumi.createNotification({
        <span class="hljs-attr">title</span>: h(<span class="hljs-string">&#39;span&#39;</span>, { <span class="hljs-attr">style</span>: { <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;red&#39;</span> } }, <span class="hljs-string">&#39;VNode&#39;</span>),
        <span class="hljs-attr">message</span>: h(<span class="hljs-string">&#39;span&#39;</span>, {
          <span class="hljs-attr">style</span>: { <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;red&#39;</span> }
        }, [<span class="hljs-string">&#39;use &#39;</span> , h(<span class="hljs-string">&#39;span&#39;</span>, {
          <span class="hljs-attr">style</span>: {<span class="hljs-attr">backgroundColor</span>: <span class="hljs-string">&#39;green&#39;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#fff&#39;</span>}
        }, [<span class="hljs-string">&#39;VNode&#39;</span>]) ,<span class="hljs-string">&#39;, you can close it.&#39;</span>])
      })
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ts=[Ls],Gs=s("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807","data-source-line":"24"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u56FE\u6807"},"#"),o(" \u81EA\u5B9A\u4E49\u56FE\u6807")],-1),Js=s("pre",{style:{display:"none"}},null,-1),Ks={class:"vuedoc-demo"},Ms={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Ps={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Qs=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createNotification&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { h, defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { YuumiIcon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../packages&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    YuumiIcon
  },
  <span class="hljs-attr">methods</span>: {
    createNotification () {
      <span class="hljs-built_in">this</span>.$yuumi.createNotification({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u56FE\u6807&quot;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u56FE\u6807&quot;</span>,
        <span class="hljs-attr">icon</span>: h(YuumiIcon, {
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;flat-shield-correct&#39;</span>
        }),
        <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;success&#39;</span>
      })
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ws=[Qs];function Xs(n,a,c,i,r,e){const t=p("vdpv_0"),l=p("vdpv_1"),q=p("vdpv_2"),j=p("vdpv_3"),g=p("vdpv_4");return u(),x("div",rs,[hs,ds,s("div",us,[s("div",ms,[s("div",_s,[h(t)]),s("div",{style:$({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",vs,gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=k=>n.toggleCode(0))},v(n.vdpv_0Height>0?"hidden":"show"),1)])]),fs,$s,ys,s("div",ks,[s("div",Ns,[s("div",xs,[h(l)]),s("div",{style:$({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",qs,Ys,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=k=>n.toggleCode(1))},v(n.vdpv_1Height>0?"hidden":"show"),1)])]),Bs,Cs,s("div",Is,[s("div",bs,[s("div",Ds,[h(q)]),s("div",{style:$({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Hs,Rs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=k=>n.toggleCode(2))},v(n.vdpv_2Height>0?"hidden":"show"),1)])]),As,Ss,s("div",Fs,[s("div",Us,[s("div",zs,[h(j)]),s("div",{style:$({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Es,Ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=k=>n.toggleCode(3))},v(n.vdpv_3Height>0?"hidden":"show"),1)])]),Gs,Js,s("div",Ks,[s("div",Ms,[s("div",Os,[h(g)]),s("div",{style:$({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ps,Ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=k=>n.toggleCode(4))},v(n.vdpv_4Height>0?"hidden":"show"),1)])])])}var sa=d(is,[["render",Xs]]);export{sa as default};
