import{_ as g,r as o,o as _,c as v,d as c,w as d,j as m,F as D,b as n,e as $,p as C,f as x,g as f,h as B,i as E,n as w,t as q,k as j}from"./index.495b204b.js";const V={data(){return{show:!1}},methods:{showDialog(){this.show=!0},onclose(){console.log("on close")},oncancel(){console.log("on cancel")},onconfirm(){console.log("on confirm")}}},H=n("span",null,"\u57FA\u672C\u7528\u6CD5",-1);function R(a,s,r,u,p,l){const e=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return _(),v(D,null,[c(e,{onClick:l.showDialog},{default:d(()=>[m(" show dialog ")]),_:1},8,["onClick"]),c(h,{modelValue:p.show,"onUpdate:modelValue":s[0]||(s[0]=t=>p.show=t),title:"dialog title",onClose:l.onclose,onCancel:l.oncancel,onConfirm:l.onconfirm},{default:d(()=>[c(i,{icon:"line-help"}),H]),_:1},8,["modelValue","onClose","onCancel","onConfirm"])],64)}var L=g(V,[["render",R]]);const N={components:{ImportDemo:L}};function A(a,s,r,u,p,l){const e=o("ImportDemo");return _(),$(e)}var U=g(N,[["render",A]]);const T={data(){return{show:!1,enable:null}},methods:{showDialog(a){this.enable=a,this.show=!0}}},S=n("span",null,"\u90E8\u5206\u663E\u793A",-1);function F(a,s,r,u,p,l){const e=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return _(),v(D,null,[c(e,{style:{margin:"0 10px 10px 0"},onClick:s[0]||(s[0]=t=>l.showDialog({closeEnable:!1}))},{default:d(()=>[m(" \u4E0D\u663E\u793A\u5173\u95ED ")]),_:1}),c(e,{style:{margin:"0 10px 10px 0"},onClick:s[1]||(s[1]=t=>l.showDialog({cancelEnable:!1}))},{default:d(()=>[m(" \u4E0D\u663E\u793A\u53D6\u6D88 ")]),_:1}),c(e,{style:{margin:"0 10px 10px 0"},onClick:s[2]||(s[2]=t=>l.showDialog({confirmEnable:!1}))},{default:d(()=>[m(" \u4E0D\u663E\u793A\u786E\u8BA4 ")]),_:1}),c(e,{style:{margin:"0 10px 10px 0"},onClick:s[3]||(s[3]=t=>l.showDialog({cancelEnable:!1,confirmEnable:!1}))},{default:d(()=>[m(" \u4E0D\u663E\u793A\u53D6\u6D88\u548C\u786E\u8BA4 ")]),_:1}),c(h,C({modelValue:p.show,"onUpdate:modelValue":s[4]||(s[4]=t=>p.show=t),title:"dialog title"},p.enable),{default:d(()=>[c(i,{icon:"line-help"}),S]),_:1},16,["modelValue"])],64)}var M=g(T,[["render",F]]);const z={components:{ImportDemo:M}};function P(a,s,r,u,p,l){const e=o("ImportDemo");return _(),$(e)}var G=g(z,[["render",P]]);const J={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},K=n("span",null,"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",-1);function O(a,s,r,u,p,l){const e=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return _(),v(D,null,[c(e,{onClick:l.showDialog},{default:d(()=>[m(" \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57 ")]),_:1},8,["onClick"]),c(h,{modelValue:p.show,"onUpdate:modelValue":s[0]||(s[0]=t=>p.show=t),title:"dialog title","cancel-text":"\u64A4\u9500","confirm-text":"\u4FDD\u5B58"},{default:d(()=>[c(i,{icon:"line-help"}),K]),_:1},8,["modelValue"])],64)}var Q=g(J,[["render",O]]);const W={components:{ImportDemo:Q}};function X(a,s,r,u,p,l){const e=o("ImportDemo");return _(),$(e)}var Z=g(W,[["render",X]]);const ss={data(){return{show:!1,timeout:0}},methods:{showDialog(){this.show=!0},hideDialog(){this.timeout&&clearTimeout(this.timeout),this.$yuumi.createMessage({message:"3s\u540E\u5173\u95ED",theme:"warn"}),this.timeout=setTimeout(()=>{this.show=!1},3e3)},onclose(){console.log("on close"),this.hideDialog()},oncancel(){console.log("on cancel"),this.hideDialog()},onconfirm(){console.log("on confirm"),this.hideDialog()}}},ns=n("span",null,"\u5F02\u6B65\u64CD\u4F5C",-1);function as(a,s,r,u,p,l){const e=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return _(),v(D,null,[c(e,{onClick:l.showDialog},{default:d(()=>[m(" \u5F02\u6B65\u64CD\u4F5C ")]),_:1},8,["onClick"]),c(h,{modelValue:p.show,"onUpdate:modelValue":s[0]||(s[0]=t=>p.show=t),title:"dialog title",sync:!1,onClose:l.onclose,onCancel:l.oncancel,onConfirm:l.onconfirm},{default:d(()=>[c(i,{icon:"line-help"}),ns]),_:1},8,["modelValue","onClose","onCancel","onConfirm"])],64)}var ls=g(ss,[["render",as]]);const ts={components:{ImportDemo:ls}};function es(a,s,r,u,p,l){const e=o("ImportDemo");return _(),$(e)}var os=g(ts,[["render",es]]);const ps={data(){return{show:!1}},methods:{showDialog(){this.show=!0},onEvent(a,s){console.log(`on ${s} event.`,a)}}},cs=n("span",null,"\u4E8B\u4EF6\u76D1\u542C",-1);function is(a,s,r,u,p,l){const e=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return _(),v(D,null,[c(e,{onClick:l.showDialog},{default:d(()=>[m(" \u4E8B\u4EF6\u76D1\u542C ")]),_:1},8,["onClick"]),c(h,{modelValue:p.show,"onUpdate:modelValue":s[0]||(s[0]=t=>p.show=t),title:"dialog title",onClose:s[1]||(s[1]=t=>l.onEvent(t,"close")),onCancel:s[2]||(s[2]=t=>l.onEvent(t,"cancel")),onConfirm:s[3]||(s[3]=t=>l.onEvent(t,"confirm")),onBeforeEnter:s[4]||(s[4]=t=>l.onEvent(t,"beforeEnter")),onAfterEnter:s[5]||(s[5]=t=>l.onEvent(t,"afterEnter")),onBeforeLeave:s[6]||(s[6]=t=>l.onEvent(t,"beforeLeave")),onAfterLeave:s[7]||(s[7]=t=>l.onEvent(t,"afterLeave"))},{default:d(()=>[c(i,{icon:"line-help"}),cs]),_:1},8,["modelValue"])],64)}var hs=g(ps,[["render",is]]);const rs={components:{ImportDemo:hs}};function us(a,s,r,u,p,l){const e=o("ImportDemo");return _(),$(e)}var ds=g(rs,[["render",us]]);const ms={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},gs=n("span",null,"\u963B\u6B62\u7A7F\u900F",-1);function _s(a,s,r,u,p,l){const e=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return _(),v(D,null,[c(e,{onClick:l.showDialog},{default:d(()=>[m(" \u963B\u6B62\u7A7F\u900F ")]),_:1},8,["onClick"]),c(h,{modelValue:p.show,"onUpdate:modelValue":s[0]||(s[0]=t=>p.show=t),title:"dialog title","stop-penetrate":!0},{default:d(()=>[c(i,{icon:"line-help"}),gs]),_:1},8,["modelValue"])],64)}var js=g(ms,[["render",_s]]);const vs={components:{ImportDemo:js}};function fs(a,s,r,u,p,l){const e=o("ImportDemo");return _(),$(e)}var ws=g(vs,[["render",fs]]);const qs={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},Ds=n("span",{style:{color:"red"}},"\u81EA\u5B9A\u4E49\u6807\u9898VNode",-1);function $s(a,s,r,u,p,l){const e=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return _(),v(D,null,[c(e,{onClick:l.showDialog},{default:d(()=>[m(" \u81EA\u5B9A\u4E49\u6807\u9898VNode ")]),_:1},8,["onClick"]),c(h,{modelValue:p.show,"onUpdate:modelValue":s[0]||(s[0]=t=>p.show=t)},{title:d(()=>[c(i,{icon:"line-help",style:{"vertical-align":"middle","margin-right":"5px"}}),Ds]),_:1},8,["modelValue"])],64)}var Ys=g(qs,[["render",$s]]);const ks={components:{ImportDemo:Ys}};function ys(a,s,r,u,p,l){const e=o("ImportDemo");return _(),$(e)}var bs=g(ks,[["render",ys]]);const I=x({components:{vdpv_0:U,vdpv_1:G,vdpv_2:Z,vdpv_3:os,vdpv_4:ds,vdpv_5:ws,vdpv_6:bs},setup(a){const s=f(),r=f(),u=f(),p=f(),l=f(),e=f(),i=f(),h=[s,r,u,p,l,e,i],t=B({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return{toggleCode:k=>{const y="vdpv_"+k;t[y+"Height"]===0?t[y+"Height"]=(h[k].value?h[k].value.offsetHeight:0)||0:t[y+"Height"]=0},...E(t),vdpv_0Ref:s,vdpv_1Ref:r,vdpv_2Ref:u,vdpv_3Ref:p,vdpv_4Ref:l,vdpv_5Ref:e,vdpv_6Ref:i}}});I.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u90E8\u5206\u663E\u793A",anchor:"\u90E8\u5206\u663E\u793A",level:3},{content:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",anchor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",level:3},{content:"\u5F02\u6B65\u64CD\u4F5C",anchor:"\u5F02\u6B65\u64CD\u4F5C",level:3},{content:"\u4E8B\u4EF6\u76D1\u542C",anchor:"\u4E8B\u4EF6\u76D1\u542C",level:3},{content:"\u963B\u6B62\u7A7F\u900F",anchor:"\u963B\u6B62\u7A7F\u900F",level:3},{content:"\u81EA\u5B9A\u4E49\u6807\u9898VNode",anchor:"\u81EA\u5B9A\u4E49\u6807\u9898vnode",level:3}]};const Is=I,Cs={class:"vuedoc"},xs=n("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[n("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),m(" \u57FA\u672C\u7528\u6CD5")],-1),Bs=n("pre",{style:{display:"none"}},null,-1),Es={class:"vuedoc-demo"},Vs={class:"vuedoc-demo__inner"},Hs={class:"vuedoc-demo__preview"},Rs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Ls=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog&quot;</span>&gt;</span>
    show dialog
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;dialog title&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;onclose&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;oncancel&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onconfirm&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-help&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u57FA\u672C\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDialog () {
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    },
    onclose () {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;on close&#39;</span>)
    },
    oncancel () {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;on cancel&#39;</span>)
    },
    onconfirm () {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;on confirm&#39;</span>)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ns=[Ls],As=n("h3",{id:"\u90E8\u5206\u663E\u793A","data-source-line":"6"},[n("a",{class:"markdownIt-Anchor",href:"#\u90E8\u5206\u663E\u793A"},"#"),m(" \u90E8\u5206\u663E\u793A")],-1),Us=n("pre",{style:{display:"none"}},null,-1),Ts={class:"vuedoc-demo"},Ss={class:"vuedoc-demo__inner"},Fs={class:"vuedoc-demo__preview"},Ms={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},zs=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog({closeEnable: false})&quot;</span>
  &gt;</span>
    \u4E0D\u663E\u793A\u5173\u95ED
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog({cancelEnable: false})&quot;</span>
  &gt;</span>
    \u4E0D\u663E\u793A\u53D6\u6D88
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog({confirmEnable: false})&quot;</span>
  &gt;</span>
    \u4E0D\u663E\u793A\u786E\u8BA4
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog({cancelEnable: false, confirmEnable: false})&quot;</span>
  &gt;</span>
    \u4E0D\u663E\u793A\u53D6\u6D88\u548C\u786E\u8BA4
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;dialog title&quot;</span>
    <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;enable&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-help&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u90E8\u5206\u663E\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">enable</span>: <span class="hljs-literal">null</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDialog (options) {
      <span class="hljs-built_in">this</span>.enable = options
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Ps=[zs],Gs=n("h3",{id:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57","data-source-line":"11"},[n("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57"},"#"),m(" \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57")],-1),Js=n("pre",{style:{display:"none"}},null,-1),Ks={class:"vuedoc-demo"},Os={class:"vuedoc-demo__inner"},Qs={class:"vuedoc-demo__preview"},Ws={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Xs=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog&quot;</span>&gt;</span>
    \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;dialog title&quot;</span>
    <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;\u64A4\u9500&quot;</span>
    <span class="hljs-attr">confirm-text</span>=<span class="hljs-string">&quot;\u4FDD\u5B58&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-help&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDialog () {
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Zs=[Xs],sn=n("h3",{id:"\u5F02\u6B65\u64CD\u4F5C","data-source-line":"16"},[n("a",{class:"markdownIt-Anchor",href:"#\u5F02\u6B65\u64CD\u4F5C"},"#"),m(" \u5F02\u6B65\u64CD\u4F5C")],-1),nn=n("pre",{style:{display:"none"}},null,-1),an={class:"vuedoc-demo"},ln={class:"vuedoc-demo__inner"},tn={class:"vuedoc-demo__preview"},en={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},on=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog&quot;</span>&gt;</span>
    \u5F02\u6B65\u64CD\u4F5C
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;dialog title&quot;</span>
    <span class="hljs-attr">:sync</span>=<span class="hljs-string">&quot;false&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;onclose&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;oncancel&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onconfirm&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-help&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5F02\u6B65\u64CD\u4F5C<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">timeout</span>: <span class="hljs-number">0</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDialog () {
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    },
    hideDialog () {
      <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.timeout) <span class="hljs-built_in">clearTimeout</span>(<span class="hljs-built_in">this</span>.timeout)

      <span class="hljs-built_in">this</span>.$yuumi.createMessage({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;3s\u540E\u5173\u95ED&#39;</span>, <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;warn&#39;</span> })

      <span class="hljs-built_in">this</span>.timeout = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">false</span>
      }, <span class="hljs-number">3000</span>)
    },
    onclose () {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;on close&#39;</span>)
      <span class="hljs-built_in">this</span>.hideDialog()
    },
    oncancel () {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;on cancel&#39;</span>)
      <span class="hljs-built_in">this</span>.hideDialog()
    },
    onconfirm () {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;on confirm&#39;</span>),
      <span class="hljs-built_in">this</span>.hideDialog()
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),pn=[on],cn=j('<h3 id="\u4E8B\u4EF6\u76D1\u542C" data-source-line="21"><a class="markdownIt-Anchor" href="#\u4E8B\u4EF6\u76D1\u542C">#</a> \u4E8B\u4EF6\u76D1\u542C</h3><p data-source-line="23"><code>close</code>\u3001<code>cancel</code>\u3001<code>confirm</code>\u3001<code>beforeEnter</code>\u3001<code>afterEnter</code>\u3001<code>beforeLeave</code>\u3001<code>afterLeave</code></p><pre style="display:none;"></pre>',3),hn={class:"vuedoc-demo"},rn={class:"vuedoc-demo__inner"},un={class:"vuedoc-demo__preview"},dn={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},mn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog&quot;</span>&gt;</span>
    \u4E8B\u4EF6\u76D1\u542C
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;dialog title&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;onEvent($event, &#39;close&#39;)&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onEvent($event, &#39;cancel&#39;)&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onEvent($event, &#39;confirm&#39;)&quot;</span>
    @<span class="hljs-attr">beforeEnter</span>=<span class="hljs-string">&quot;onEvent($event, &#39;beforeEnter&#39;)&quot;</span>
    @<span class="hljs-attr">afterEnter</span>=<span class="hljs-string">&quot;onEvent($event, &#39;afterEnter&#39;)&quot;</span>
    @<span class="hljs-attr">beforeLeave</span>=<span class="hljs-string">&quot;onEvent($event, &#39;beforeLeave&#39;)&quot;</span>
    @<span class="hljs-attr">afterLeave</span>=<span class="hljs-string">&quot;onEvent($event, &#39;afterLeave&#39;)&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-help&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u4E8B\u4EF6\u76D1\u542C<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDialog () {
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    },
    onEvent (e, type) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`on <span class="hljs-subst">\${type}</span> event.\`</span>, e)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),gn=[mn],_n=j('<h3 id="\u963B\u6B62\u7A7F\u900F" data-source-line="28"><a class="markdownIt-Anchor" href="#\u963B\u6B62\u7A7F\u900F">#</a> \u963B\u6B62\u7A7F\u900F</h3><p data-source-line="30"><code>close</code>\u3001<code>cancel</code>\u3001<code>confirm</code>\u3001<code>beforeEnter</code>\u3001<code>afterEnter</code>\u3001<code>beforeLeave</code>\u3001<code>afterLeave</code></p><pre style="display:none;"></pre>',3),jn={class:"vuedoc-demo"},vn={class:"vuedoc-demo__inner"},fn={class:"vuedoc-demo__preview"},wn={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},qn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog&quot;</span>&gt;</span>
    \u963B\u6B62\u7A7F\u900F
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;dialog title&quot;</span>
    <span class="hljs-attr">:stop-penetrate</span>=<span class="hljs-string">&quot;true&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-help&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u963B\u6B62\u7A7F\u900F<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDialog () {
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Dn=[qn],$n=n("h3",{id:"\u81EA\u5B9A\u4E49\u6807\u9898vnode","data-source-line":"35"},[n("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u6807\u9898vnode"},"#"),m(" \u81EA\u5B9A\u4E49\u6807\u9898VNode")],-1),Yn=n("pre",{style:{display:"none"}},null,-1),kn={class:"vuedoc-demo"},yn={class:"vuedoc-demo__inner"},bn={class:"vuedoc-demo__preview"},In={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Cn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog&quot;</span>&gt;</span>
    \u81EA\u5B9A\u4E49\u6807\u9898VNode
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span>
        <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;line-help&quot;</span>
        <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;vertical-align: middle; margin-right: 5px;&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: red;&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u6807\u9898VNode<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiDialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    showDialog () {
      <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),xn=[Cn];function Bn(a,s,r,u,p,l){const e=o("vdpv_0"),i=o("vdpv_1"),h=o("vdpv_2"),t=o("vdpv_3"),b=o("vdpv_4"),k=o("vdpv_5"),y=o("vdpv_6");return _(),v("div",Cs,[xs,Bs,n("div",Es,[n("div",Vs,[n("div",Hs,[c(e)]),n("div",{style:w({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[n("div",Rs,Ns,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=Y=>a.toggleCode(0))},q(a.vdpv_0Height>0?"hidden":"show"),1)])]),As,Us,n("div",Ts,[n("div",Ss,[n("div",Fs,[c(i)]),n("div",{style:w({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[n("div",Ms,Ps,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=Y=>a.toggleCode(1))},q(a.vdpv_1Height>0?"hidden":"show"),1)])]),Gs,Js,n("div",Ks,[n("div",Os,[n("div",Qs,[c(h)]),n("div",{style:w({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[n("div",Ws,Zs,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[2]||(s[2]=Y=>a.toggleCode(2))},q(a.vdpv_2Height>0?"hidden":"show"),1)])]),sn,nn,n("div",an,[n("div",ln,[n("div",tn,[c(t)]),n("div",{style:w({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[n("div",en,pn,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[3]||(s[3]=Y=>a.toggleCode(3))},q(a.vdpv_3Height>0?"hidden":"show"),1)])]),cn,n("div",hn,[n("div",rn,[n("div",un,[c(b)]),n("div",{style:w({height:a.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[n("div",dn,gn,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[4]||(s[4]=Y=>a.toggleCode(4))},q(a.vdpv_4Height>0?"hidden":"show"),1)])]),_n,n("div",jn,[n("div",vn,[n("div",fn,[c(k)]),n("div",{style:w({height:a.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[n("div",wn,Dn,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[5]||(s[5]=Y=>a.toggleCode(5))},q(a.vdpv_5Height>0?"hidden":"show"),1)])]),$n,Yn,n("div",kn,[n("div",yn,[n("div",bn,[c(y)]),n("div",{style:w({height:a.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[n("div",In,xn,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[6]||(s[6]=Y=>a.toggleCode(6))},q(a.vdpv_6Height>0?"hidden":"show"),1)])])])}var Vn=g(Is,[["render",Bn]]);export{Vn as default};
