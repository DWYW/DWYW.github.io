import{_ as i,r as o,o as d,c as M,a as I,d as u,w as j,j as r,t as g,F as C,e as _,m as w,Y,f as q,g as f,h as x,i as b,b as s,n as $,k as y}from"./index.adb58741.js";const D={methods:{createMessage(a){this.$yuumi.createMessage({message:"this is a message",theme:a})}}};function H(a,e,p,c,l,t){const n=o("YuumiButton");return d(),M(C,null,I(["default","primary","success","warn","danger"],h=>u(n,{key:h,style:{margin:"0 10px 10px 0"},theme:h,onClick:m=>t.createMessage(h)},{default:j(()=>[r(g(h)+" message ",1)]),_:2},1032,["theme","onClick"])),64)}var R=i(D,[["render",H]]);const N={components:{ImportDemo:R}};function V(a,e,p,c,l,t){const n=o("ImportDemo");return d(),_(n)}var A=i(N,[["render",V]]);const S={data(){return{vnode:null}},beforeUnmount(){this.$yuumi.removeAllMessage()},methods:{createMessage(){const a=this.vnode;a&&this.removeMessage(a),this.vnode=this.$yuumi.createMessage({message:"this is a message, you can close it.",duration:0})},removeMessage(a){this.$yuumi.removeMessage(a)}}};function F(a,e,p,c,l,t){const n=o("YuumiButton");return d(),M(C,null,[u(n,{onClick:t.createMessage},{default:j(()=>[r(" show message ")]),_:1},8,["onClick"]),u(n,{onClick:e[0]||(e[0]=h=>t.removeMessage(l.vnode))},{default:j(()=>[r(" hide message ")]),_:1})],64)}var U=i(S,[["render",F]]);const z={components:{ImportDemo:U}};function E(a,e,p,c,l,t){const n=o("ImportDemo");return d(),_(n)}var L=i(z,[["render",E]]);const T={data(){return{vnode:null}},methods:{createMessage(){this.vnode=this.$yuumi.createMessage({message:w("span",{style:{color:"red"}},["this is a ",w("span",{style:{backgroundColor:"green",color:"#fff"}},["message"]),", you can close it."])})}}};function G(a,e,p,c,l,t){const n=o("YuumiButton");return d(),_(n,{onClick:t.createMessage},{default:j(()=>[r(" \u4F7F\u7528VNode ")]),_:1},8,["onClick"])}var J=i(T,[["render",G]]);const K={components:{ImportDemo:J}};function O(a,e,p,c,l,t){const n=o("ImportDemo");return d(),_(n)}var P=i(K,[["render",O]]);const Q={data(){return{vnode:null}},methods:{createMessage(){this.vnode=this.$yuumi.createMessage({message:"custom icon",icon:w(Y,{icon:"line-shield-info"})})}}};function W(a,e,p,c,l,t){const n=o("YuumiButton");return d(),_(n,{onClick:t.createMessage},{default:j(()=>[r(" \u81EA\u5B9A\u4E49\u56FE\u6807 ")]),_:1},8,["onClick"])}var X=i(Q,[["render",W]]);const Z={components:{ImportDemo:X}};function ss(a,e,p,c,l,t){const n=o("ImportDemo");return d(),_(n)}var as=i(Z,[["render",ss]]);const B=q({components:{vdpv_0:A,vdpv_1:L,vdpv_2:P,vdpv_3:as},setup(a){const e=f(),p=f(),c=f(),l=f(),t=[e,p,c,l],n=x({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return{toggleCode:m=>{const v="vdpv_"+m;n[v+"Height"]===0?n[v+"Height"]=(t[m].value?t[m].value.offsetHeight:0)||0:n[v+"Height"]=0},...b(n),vdpv_0Ref:e,vdpv_1Ref:p,vdpv_2Ref:c,vdpv_3Ref:l}}});B.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u975E\u81EA\u52A8\u5173\u95ED",anchor:"\u975E\u81EA\u52A8\u5173\u95ED",level:3},{content:"\u4F7F\u7528VNode",anchor:"\u4F7F\u7528vnode",level:3},{content:"\u81EA\u5B9A\u4E49\u56FE\u6807",anchor:"\u81EA\u5B9A\u4E49\u56FE\u6807",level:3}]};const ns=B,es={class:"vuedoc"},ts=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),r(" \u57FA\u672C\u7528\u6CD5")],-1),ls=s("pre",{style:{display:"none"}},null,-1),os={class:"vuedoc-demo"},ps={class:"vuedoc-demo__inner"},cs={class:"vuedoc-demo__preview"},rs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},is=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;theme in [&#39;default&#39;, &#39;primary&#39;, &#39;success&#39;, &#39;warn&#39;, &#39;danger&#39;]&quot;</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;theme&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createMessage(theme)&quot;</span>
    &gt;</span>
      {{ theme }} message
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    createMessage (theme) {
      <span class="hljs-built_in">this</span>.$yuumi.createMessage({
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;this is a message&#39;</span>,
        <span class="hljs-attr">theme</span>: theme
      })
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),ds=[is],hs=s("h3",{id:"\u975E\u81EA\u52A8\u5173\u95ED","data-source-line":"6"},[s("a",{class:"markdownIt-Anchor",href:"#\u975E\u81EA\u52A8\u5173\u95ED"},"#"),r(" \u975E\u81EA\u52A8\u5173\u95ED")],-1),us=s("pre",{style:{display:"none"}},null,-1),ms={class:"vuedoc-demo"},_s={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},gs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},js=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createMessage&quot;</span>&gt;</span>
    show message
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;removeMessage(vnode)&quot;</span>&gt;</span>
    hide message
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">vnode</span>: <span class="hljs-literal">null</span>
    }
  },
  beforeUnmount () {
    <span class="hljs-built_in">this</span>.$yuumi.removeAllMessage()
  },
  <span class="hljs-attr">methods</span>: {
    createMessage () {
      <span class="hljs-keyword">const</span> vnode = <span class="hljs-built_in">this</span>.vnode
      <span class="hljs-keyword">if</span> (vnode) {
        <span class="hljs-built_in">this</span>.removeMessage(vnode)
      }

      <span class="hljs-built_in">this</span>.vnode = <span class="hljs-built_in">this</span>.$yuumi.createMessage({
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;this is a message, you can close it.&#39;</span>,
        <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>
      })
    },

    removeMessage (vnode) {
      <span class="hljs-built_in">this</span>.$yuumi.removeMessage(vnode)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),fs=[js],$s=s("h3",{id:"\u4F7F\u7528vnode","data-source-line":"11"},[s("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528vnode"},"#"),r(" \u4F7F\u7528VNode")],-1),ys=s("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo"},ws={class:"vuedoc-demo__inner"},Ms={class:"vuedoc-demo__preview"},Cs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Bs=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createMessage&quot;</span>&gt;</span>
    \u4F7F\u7528VNode
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { h } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">vnode</span>: <span class="hljs-literal">null</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    createMessage () {
      <span class="hljs-built_in">this</span>.vnode = <span class="hljs-built_in">this</span>.$yuumi.createMessage({
        <span class="hljs-attr">message</span>: h(<span class="hljs-string">&#39;span&#39;</span>, {
          <span class="hljs-attr">style</span>: {
            <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;red&#39;</span>
          }
        }, [<span class="hljs-string">&#39;this is a &#39;</span> , h(<span class="hljs-string">&#39;span&#39;</span>, {
          <span class="hljs-attr">style</span>: {<span class="hljs-attr">backgroundColor</span>: <span class="hljs-string">&#39;green&#39;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#fff&#39;</span>}
        }, [<span class="hljs-string">&#39;message&#39;</span>]) ,<span class="hljs-string">&#39;, you can close it.&#39;</span>])
      })
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Is=[Bs],Ys=s("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807","data-source-line":"16"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u56FE\u6807"},"#"),r(" \u81EA\u5B9A\u4E49\u56FE\u6807")],-1),qs=s("pre",{style:{display:"none"}},null,-1),xs={class:"vuedoc-demo"},bs={class:"vuedoc-demo__inner"},Ds={class:"vuedoc-demo__preview"},Hs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Rs=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;createMessage&quot;</span>&gt;</span>
    \u81EA\u5B9A\u4E49\u56FE\u6807
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { h } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { YuumiIcon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../packages&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">vnode</span>: <span class="hljs-literal">null</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    createMessage () {
      <span class="hljs-built_in">this</span>.vnode = <span class="hljs-built_in">this</span>.$yuumi.createMessage({
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;custom icon&quot;</span>,
        <span class="hljs-attr">icon</span>: h(YuumiIcon, {
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;line-shield-info&#39;</span>
        })
      })
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ns=[Rs];function Vs(a,e,p,c,l,t){const n=o("vdpv_0"),h=o("vdpv_1"),m=o("vdpv_2"),v=o("vdpv_3");return d(),M("div",es,[ts,ls,s("div",os,[s("div",ps,[s("div",cs,[u(n)]),s("div",{style:$({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",rs,ds,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[0]||(e[0]=k=>a.toggleCode(0))},g(a.vdpv_0Height>0?"hidden":"show"),1)])]),hs,us,s("div",ms,[s("div",_s,[s("div",vs,[u(h)]),s("div",{style:$({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",gs,fs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[1]||(e[1]=k=>a.toggleCode(1))},g(a.vdpv_1Height>0?"hidden":"show"),1)])]),$s,ys,s("div",ks,[s("div",ws,[s("div",Ms,[u(m)]),s("div",{style:$({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Cs,Is,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[2]||(e[2]=k=>a.toggleCode(2))},g(a.vdpv_2Height>0?"hidden":"show"),1)])]),Ys,qs,s("div",xs,[s("div",bs,[s("div",Ds,[u(v)]),s("div",{style:$({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Hs,Ns,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[3]||(e[3]=k=>a.toggleCode(3))},g(a.vdpv_3Height>0?"hidden":"show"),1)])])])}var Ss=i(ns,[["render",Vs]]);export{Ss as default};
