import{_,r as o,o as g,c as j,d as c,w as d,j as m,F as D,b as s,e as $,p as x,f as B,g as f,h as E,i as V,n as w,t as q,k as v}from"./index.477881a6.js";const H={data(){return{show:!1}},methods:{showDialog(){this.show=!0},onclose(){console.log("on close")},oncancel(){console.log("on cancel")},onconfirm(){console.log("on confirm")}}},R=s("span",null,"\u57FA\u672C\u7528\u6CD5",-1);function A(a,n,r,u,e,l){const t=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return g(),j(D,null,[c(t,{onClick:l.showDialog},{default:d(()=>[m(" show dialog ")]),_:1},8,["onClick"]),c(h,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=p=>e.show=p),title:"dialog title",onClose:l.onclose,onCancel:l.oncancel,onConfirm:l.onconfirm},{default:d(()=>[c(i,{icon:"line-help"}),R]),_:1},8,["modelValue","onClose","onCancel","onConfirm"])],64)}var L=_(H,[["render",A]]);const N={components:{ImportDemo:L}};function U(a,n,r,u,e,l){const t=o("ImportDemo");return g(),$(t)}var T=_(N,[["render",U]]);const S={data(){return{show:!1,enable:null}},methods:{showDialog(a){this.enable=a,this.show=!0}}},F=s("span",null,"\u90E8\u5206\u663E\u793A",-1);function M(a,n,r,u,e,l){const t=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return g(),j(D,null,[c(t,{style:{margin:"0 10px 10px 0"},onClick:n[0]||(n[0]=p=>l.showDialog({closeEnable:!1}))},{default:d(()=>[m(" \u4E0D\u663E\u793A\u5173\u95ED ")]),_:1}),c(t,{style:{margin:"0 10px 10px 0"},onClick:n[1]||(n[1]=p=>l.showDialog({cancelEnable:!1}))},{default:d(()=>[m(" \u4E0D\u663E\u793A\u53D6\u6D88 ")]),_:1}),c(t,{style:{margin:"0 10px 10px 0"},onClick:n[2]||(n[2]=p=>l.showDialog({confirmEnable:!1}))},{default:d(()=>[m(" \u4E0D\u663E\u793A\u786E\u8BA4 ")]),_:1}),c(t,{style:{margin:"0 10px 10px 0"},onClick:n[3]||(n[3]=p=>l.showDialog({cancelEnable:!1,confirmEnable:!1}))},{default:d(()=>[m(" \u4E0D\u663E\u793A\u53D6\u6D88\u548C\u786E\u8BA4 ")]),_:1}),c(h,x({modelValue:e.show,"onUpdate:modelValue":n[4]||(n[4]=p=>e.show=p),title:"dialog title"},e.enable),{default:d(()=>[c(i,{icon:"line-help"}),F]),_:1},16,["modelValue"])],64)}var z=_(S,[["render",M]]);const P={components:{ImportDemo:z}};function G(a,n,r,u,e,l){const t=o("ImportDemo");return g(),$(t)}var J=_(P,[["render",G]]);const K={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},O=s("span",null,"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",-1);function Q(a,n,r,u,e,l){const t=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return g(),j(D,null,[c(t,{onClick:l.showDialog},{default:d(()=>[m(" \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57 ")]),_:1},8,["onClick"]),c(h,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=p=>e.show=p),title:"dialog title","cancel-text":"\u64A4\u9500","confirm-text":"\u4FDD\u5B58"},{default:d(()=>[c(i,{icon:"line-help"}),O]),_:1},8,["modelValue"])],64)}var W=_(K,[["render",Q]]);const X={components:{ImportDemo:W}};function Z(a,n,r,u,e,l){const t=o("ImportDemo");return g(),$(t)}var ss=_(X,[["render",Z]]);const ns={data(){return{show:!1,timeout:0}},methods:{showDialog(){this.show=!0},hideDialog(){this.timeout&&clearTimeout(this.timeout),this.$yuumi.createMessage({message:"3s\u540E\u5173\u95ED",theme:"warn"}),this.timeout=setTimeout(()=>{this.show=!1},3e3)},onclose(){console.log("on close"),this.hideDialog()},oncancel(){console.log("on cancel"),this.hideDialog()},onconfirm(){console.log("on confirm"),this.hideDialog()}}},as=s("span",null,"\u5F02\u6B65\u64CD\u4F5C",-1);function ls(a,n,r,u,e,l){const t=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return g(),j(D,null,[c(t,{onClick:l.showDialog},{default:d(()=>[m(" \u5F02\u6B65\u64CD\u4F5C ")]),_:1},8,["onClick"]),c(h,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=p=>e.show=p),title:"dialog title",async:"",onClose:l.onclose,onCancel:l.oncancel,onConfirm:l.onconfirm},{default:d(()=>[c(i,{icon:"line-help"}),as]),_:1},8,["modelValue","onClose","onCancel","onConfirm"])],64)}var ts=_(ns,[["render",ls]]);const os={components:{ImportDemo:ts}};function es(a,n,r,u,e,l){const t=o("ImportDemo");return g(),$(t)}var ps=_(os,[["render",es]]);const cs={data(){return{show:!1}},methods:{showDialog(){this.show=!0},onEvent(a,n){console.log(`on ${n} event.`,a)}}},is=s("span",null,"\u4E8B\u4EF6\u76D1\u542C",-1);function hs(a,n,r,u,e,l){const t=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return g(),j(D,null,[c(t,{onClick:l.showDialog},{default:d(()=>[m(" \u4E8B\u4EF6\u76D1\u542C ")]),_:1},8,["onClick"]),c(h,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=p=>e.show=p),title:"dialog title",onClose:n[1]||(n[1]=p=>l.onEvent(p,"close")),onCancel:n[2]||(n[2]=p=>l.onEvent(p,"cancel")),onConfirm:n[3]||(n[3]=p=>l.onEvent(p,"confirm")),onBeforeEnter:n[4]||(n[4]=p=>l.onEvent(p,"beforeEnter")),onAfterEnter:n[5]||(n[5]=p=>l.onEvent(p,"afterEnter")),onBeforeLeave:n[6]||(n[6]=p=>l.onEvent(p,"beforeLeave")),onAfterLeave:n[7]||(n[7]=p=>l.onEvent(p,"afterLeave"))},{default:d(()=>[c(i,{icon:"line-help"}),is]),_:1},8,["modelValue"])],64)}var rs=_(cs,[["render",hs]]);const us={components:{ImportDemo:rs}};function ds(a,n,r,u,e,l){const t=o("ImportDemo");return g(),$(t)}var ms=_(us,[["render",ds]]);const _s={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},gs=s("span",null,"\u963B\u6B62\u7A7F\u900F",-1);function js(a,n,r,u,e,l){const t=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return g(),j(D,null,[c(t,{onClick:l.showDialog},{default:d(()=>[m(" \u963B\u6B62\u7A7F\u900F ")]),_:1},8,["onClick"]),c(h,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=p=>e.show=p),title:"dialog title","stop-penetrate":!0},{default:d(()=>[c(i,{icon:"line-help"}),gs]),_:1},8,["modelValue"])],64)}var vs=_(_s,[["render",js]]);const fs={components:{ImportDemo:vs}};function ws(a,n,r,u,e,l){const t=o("ImportDemo");return g(),$(t)}var qs=_(fs,[["render",ws]]);const Ds={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},$s=s("span",{style:{color:"red"}},"\u81EA\u5B9A\u4E49\u6807\u9898VNode",-1);function Ys(a,n,r,u,e,l){const t=o("YuumiButton"),i=o("YuumiIcon"),h=o("YuumiDialog");return g(),j(D,null,[c(t,{onClick:l.showDialog},{default:d(()=>[m(" \u81EA\u5B9A\u4E49\u6807\u9898VNode ")]),_:1},8,["onClick"]),c(h,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=p=>e.show=p)},{title:d(()=>[c(i,{icon:"line-help",style:{"vertical-align":"middle","margin-right":"5px"}}),$s]),_:1},8,["modelValue"])],64)}var ks=_(Ds,[["render",Ys]]);const ys={components:{ImportDemo:ks}};function Is(a,n,r,u,e,l){const t=o("ImportDemo");return g(),$(t)}var bs=_(ys,[["render",Is]]);const Cs={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}};function xs(a,n,r,u,e,l){const t=o("YuumiButton"),i=o("YuumiDialog");return g(),j(D,null,[c(t,{onClick:l.showDialog},{default:d(()=>[m(" \u81EA\u5B9A\u4E49\u5BBD\u5EA6 ")]),_:1},8,["onClick"]),c(i,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=h=>e.show=h),title:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6",width:"900px"},null,8,["modelValue"])],64)}var Bs=_(Cs,[["render",xs]]);const Es={components:{ImportDemo:Bs}};function Vs(a,n,r,u,e,l){const t=o("ImportDemo");return g(),$(t)}var Hs=_(Es,[["render",Vs]]);const C=B({components:{vdpv_0:T,vdpv_1:J,vdpv_2:ss,vdpv_3:ps,vdpv_4:ms,vdpv_5:qs,vdpv_6:bs,vdpv_7:Hs},setup(a){const n=f(),r=f(),u=f(),e=f(),l=f(),t=f(),i=f(),h=f(),p=[n,r,u,e,l,t,i,h],k=E({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0});return{toggleCode:y=>{const I="vdpv_"+y;k[I+"Height"]===0?k[I+"Height"]=(p[y].value?p[y].value.offsetHeight:0)||0:k[I+"Height"]=0},...V(k),vdpv_0Ref:n,vdpv_1Ref:r,vdpv_2Ref:u,vdpv_3Ref:e,vdpv_4Ref:l,vdpv_5Ref:t,vdpv_6Ref:i,vdpv_7Ref:h}}});C.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u90E8\u5206\u663E\u793A",anchor:"\u90E8\u5206\u663E\u793A",level:3},{content:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",anchor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",level:3},{content:"\u5F02\u6B65\u64CD\u4F5C",anchor:"\u5F02\u6B65\u64CD\u4F5C",level:3},{content:"\u4E8B\u4EF6\u76D1\u542C",anchor:"\u4E8B\u4EF6\u76D1\u542C",level:3},{content:"\u963B\u6B62\u7A7F\u900F",anchor:"\u963B\u6B62\u7A7F\u900F",level:3},{content:"\u81EA\u5B9A\u4E49\u6807\u9898VNode",anchor:"\u81EA\u5B9A\u4E49\u6807\u9898vnode",level:3},{content:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6 (v1.5.0)",anchor:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6-v150",level:3}]};const Rs=C,As={class:"vuedoc"},Ls=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),m(" \u57FA\u672C\u7528\u6CD5")],-1),Ns=s("pre",{style:{display:"none"}},null,-1),Us={class:"vuedoc-demo"},Ts={class:"vuedoc-demo__inner"},Ss={class:"vuedoc-demo__preview"},Fs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Ms=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),zs=[Ms],Ps=s("h3",{id:"\u90E8\u5206\u663E\u793A","data-source-line":"6"},[s("a",{class:"markdownIt-Anchor",href:"#\u90E8\u5206\u663E\u793A"},"#"),m(" \u90E8\u5206\u663E\u793A")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Js={class:"vuedoc-demo"},Ks={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Qs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Ws=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Xs=[Ws],Zs=s("h3",{id:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57","data-source-line":"11"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57"},"#"),m(" \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57")],-1),sn=s("pre",{style:{display:"none"}},null,-1),nn={class:"vuedoc-demo"},an={class:"vuedoc-demo__inner"},ln={class:"vuedoc-demo__preview"},tn={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},on=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),en=[on],pn=s("h3",{id:"\u5F02\u6B65\u64CD\u4F5C","data-source-line":"16"},[s("a",{class:"markdownIt-Anchor",href:"#\u5F02\u6B65\u64CD\u4F5C"},"#"),m(" \u5F02\u6B65\u64CD\u4F5C")],-1),cn=s("pre",{style:{display:"none"}},null,-1),hn={class:"vuedoc-demo"},rn={class:"vuedoc-demo__inner"},un={class:"vuedoc-demo__preview"},dn={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},mn=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog&quot;</span>&gt;</span>
    \u5F02\u6B65\u64CD\u4F5C
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;dialog title&quot;</span>
    <span class="hljs-attr">async</span>
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
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),_n=[mn],gn=v('<h3 id="\u4E8B\u4EF6\u76D1\u542C" data-source-line="21"><a class="markdownIt-Anchor" href="#\u4E8B\u4EF6\u76D1\u542C">#</a> \u4E8B\u4EF6\u76D1\u542C</h3><p data-source-line="23"><code>close</code>\u3001<code>cancel</code>\u3001<code>confirm</code>\u3001<code>beforeEnter</code>\u3001<code>afterEnter</code>\u3001<code>beforeLeave</code>\u3001<code>afterLeave</code></p><pre style="display:none;"></pre>',3),jn={class:"vuedoc-demo"},vn={class:"vuedoc-demo__inner"},fn={class:"vuedoc-demo__preview"},wn={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},qn=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Dn=[qn],$n=s("h3",{id:"\u963B\u6B62\u7A7F\u900F","data-source-line":"28"},[s("a",{class:"markdownIt-Anchor",href:"#\u963B\u6B62\u7A7F\u900F"},"#"),m(" \u963B\u6B62\u7A7F\u900F")],-1),Yn=s("p",{"data-source-line":"30"},"\u963B\u6B62 window \u7684\u6EDA\u52A8",-1),kn=s("pre",{style:{display:"none"}},null,-1),yn={class:"vuedoc-demo"},In={class:"vuedoc-demo__inner"},bn={class:"vuedoc-demo__preview"},Cn={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},xn=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Bn=[xn],En=s("h3",{id:"\u81EA\u5B9A\u4E49\u6807\u9898vnode","data-source-line":"35"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u6807\u9898vnode"},"#"),m(" \u81EA\u5B9A\u4E49\u6807\u9898VNode")],-1),Vn=s("pre",{style:{display:"none"}},null,-1),Hn={class:"vuedoc-demo"},Rn={class:"vuedoc-demo__inner"},An={class:"vuedoc-demo__preview"},Ln={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Nn=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Un=[Nn],Tn=s("h3",{id:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6-v150","data-source-line":"40"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u5BBD\u5EA6-v150"},"#"),m(" \u81EA\u5B9A\u4E49\u5BBD\u5EA6 (v1.5.0)")],-1),Sn=s("pre",{style:{display:"none"}},null,-1),Fn={class:"vuedoc-demo"},Mn={class:"vuedoc-demo__inner"},zn={class:"vuedoc-demo__preview"},Pn={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Gn=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showDialog&quot;</span>&gt;</span>
    \u81EA\u5B9A\u4E49\u5BBD\u5EA6
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiDialog</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u5BBD\u5EA6&quot;</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;900px&quot;</span>
  /&gt;</span>
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
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Jn=[Gn];function Kn(a,n,r,u,e,l){const t=o("vdpv_0"),i=o("vdpv_1"),h=o("vdpv_2"),p=o("vdpv_3"),k=o("vdpv_4"),b=o("vdpv_5"),y=o("vdpv_6"),I=o("vdpv_7");return g(),j("div",As,[Ls,Ns,s("div",Us,[s("div",Ts,[s("div",Ss,[c(t)]),s("div",{style:w({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Fs,zs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=Y=>a.toggleCode(0))},q(a.vdpv_0Height>0?"hidden":"show"),1)])]),Ps,Gs,s("div",Js,[s("div",Ks,[s("div",Os,[c(i)]),s("div",{style:w({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Qs,Xs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=Y=>a.toggleCode(1))},q(a.vdpv_1Height>0?"hidden":"show"),1)])]),Zs,sn,s("div",nn,[s("div",an,[s("div",ln,[c(h)]),s("div",{style:w({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",tn,en,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=Y=>a.toggleCode(2))},q(a.vdpv_2Height>0?"hidden":"show"),1)])]),pn,cn,s("div",hn,[s("div",rn,[s("div",un,[c(p)]),s("div",{style:w({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",dn,_n,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[3]||(n[3]=Y=>a.toggleCode(3))},q(a.vdpv_3Height>0?"hidden":"show"),1)])]),gn,s("div",jn,[s("div",vn,[s("div",fn,[c(k)]),s("div",{style:w({height:a.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",wn,Dn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[4]||(n[4]=Y=>a.toggleCode(4))},q(a.vdpv_4Height>0?"hidden":"show"),1)])]),$n,Yn,kn,s("div",yn,[s("div",In,[s("div",bn,[c(b)]),s("div",{style:w({height:a.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Cn,Bn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[5]||(n[5]=Y=>a.toggleCode(5))},q(a.vdpv_5Height>0?"hidden":"show"),1)])]),En,Vn,s("div",Hn,[s("div",Rn,[s("div",An,[c(y)]),s("div",{style:w({height:a.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ln,Un,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[6]||(n[6]=Y=>a.toggleCode(6))},q(a.vdpv_6Height>0?"hidden":"show"),1)])]),Tn,Sn,s("div",Fn,[s("div",Mn,[s("div",zn,[c(I)]),s("div",{style:w({height:a.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Pn,Jn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[7]||(n[7]=Y=>a.toggleCode(7))},q(a.vdpv_7Height>0?"hidden":"show"),1)])])])}var Qn=_(Rs,[["render",Kn]]);export{Qn as default};
