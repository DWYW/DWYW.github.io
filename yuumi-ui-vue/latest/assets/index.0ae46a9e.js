import{_ as d,r as h,o as u,c as g,b as s,d as o,t as c,F as $,e as _,f as Y,g as v,h as D,i as H,n as m,j as f,k as j}from"./index.495b204b.js";const U={data(){return{value:10}},methods:{onChange(l){console.log(l)}}},R={style:{display:"flex","align-items":"center"}},A={style:{flex:"1 1 auto"}},B={style:{flex:"0 0 60px"}},F={style:{display:"flex","align-items":"center"}},N={style:{flex:"1 1 auto"}},z={style:{flex:"0 0 60px"}};function E(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g($,null,[s("div",R,[s("div",A,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",B,c(a.value),1)]),s("div",F,[s("div",N,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),disabled:""},null,8,["modelValue"])]),s("div",z,c(a.value),1)])],64)}var T=d(U,[["render",E]]);const G={components:{ImportDemo:T}};function J(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var K=d(G,[["render",J]]);const L={data(){return{value:20}},methods:{onChange(l){console.log(l)}}},M={style:{display:"flex","align-items":"center"}},O={style:{flex:"1 1 auto"}},P={style:{flex:"0 0 60px"}},Q={style:{display:"flex","align-items":"center"}},W={style:{flex:"1 1 auto"}},X={style:{flex:"0 0 60px"}};function Z(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g($,null,[s("div",M,[s("div",O,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),step:10,onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",P,c(a.value),1)]),s("div",Q,[s("div",W,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),"show-stops":!0,step:10,onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",X,c(a.value),1)])],64)}var ss=d(L,[["render",Z]]);const as={components:{ImportDemo:ss}};function ns(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var ls=d(as,[["render",ns]]);const ts={data(){return{value:-10}},methods:{onChange(l){console.log(l)}}},es={style:{display:"flex","align-items":"center"}},ps={style:{flex:"1 1 auto"}},os={style:{flex:"0 0 60px"}};function cs(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g("div",es,[s("div",ps,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),min:-50,max:50,onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",os,c(a.value),1)])}var hs=d(ts,[["render",cs]]);const is={components:{ImportDemo:hs}};function rs(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var ds=d(is,[["render",rs]]);const us={data(){return{value:0}},methods:{onChange(l){console.log(l)}}},gs={style:{display:"flex","align-items":"center"}},js={style:{flex:"1 1 auto"}},vs={style:{flex:"0 0 60px"}};function ms(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g("div",gs,[s("div",js,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),"show-tooltip":!1,onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",vs,c(a.value),1)])}var _s=d(us,[["render",ms]]);const qs={components:{ImportDemo:_s}};function fs(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var ys=d(qs,[["render",fs]]);const xs={data(){return{value:10}},methods:{formatter(l){return(l/100).toFixed(2)},onChange(l){console.log(l)}}},Cs={style:{display:"flex","align-items":"center"}},$s={style:{flex:"1 1 auto"}},bs={style:{flex:"0 0 60px"}};function ws(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g("div",Cs,[s("div",$s,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),formatter:p.formatter,onChange:p.onChange},null,8,["modelValue","formatter","onChange"])]),s("div",bs,c(p.formatter(a.value)),1)])}var Vs=d(xs,[["render",ws]]);const ks={components:{ImportDemo:Vs}};function Is(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var Ss=d(ks,[["render",Is]]);const Ys={data(){return{btnColor:"yellow",backgroundColors:["#f5f5f5","#888888"],colors:["yellow","red"],value:50}},methods:{onChanging(l){this.btnColor=l>50?"red":"yellow"},onChange(l){console.log(l)}}},Ds={style:{display:"flex","align-items":"center"}},Hs={style:{flex:"1 1 auto"}},Us={style:{flex:"0 0 60px"}},Rs={style:{display:"flex","align-items":"center"}},As={style:{flex:"1 1 auto"}},Bs={style:{flex:"0 0 60px"}};function Fs(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g("div",null,[s("div",Ds,[s("div",Hs,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),"btn-color":a.btnColor,"background-colors":a.backgroundColors,colors:a.colors,onChange:p.onChange,onChanging:p.onChanging},null,8,["modelValue","btn-color","background-colors","colors","onChange","onChanging"])]),s("div",Us,c(a.value),1)]),s("div",Rs,[s("div",As,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),"btn-color":a.btnColor,"background-colors":a.backgroundColors,colors:a.colors,disabled:""},null,8,["modelValue","btn-color","background-colors","colors"])]),s("div",Bs,c(a.value),1)])])}var Ns=d(Ys,[["render",Fs]]);const zs={components:{ImportDemo:Ns}};function Es(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var Ts=d(zs,[["render",Es]]);const Gs={data(){return{value:[20,50]}}},Js={style:{display:"flex","align-items":"center"}},Ks={style:{flex:"1 1 auto"}},Ls={style:{flex:"0 0 60px"}},Ms={style:{display:"flex","align-items":"center"}},Os={style:{flex:"1 1 auto"}},Ps={style:{flex:"0 0 60px"}};function Qs(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g($,null,[s("div",Js,[s("div",Ks,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),range:""},null,8,["modelValue"])]),s("div",Ls,c(a.value),1)]),s("div",Ms,[s("div",Os,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),range:"",disabled:""},null,8,["modelValue"])]),s("div",Ps,c(a.value),1)])],64)}var Ws=d(Gs,[["render",Qs]]);const Xs={components:{ImportDemo:Ws}};function Zs(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var sa=d(Xs,[["render",Zs]]);const aa={data(){return{btnColor:"yellow",backgroundColors:["#f5f5f5","#888888"],colors:["yellow","red"],value:10,value1:[30,70],value2:[40,60]}},methods:{onChange(l){console.log(l)},onChanging(l){this.btnColor=l>50?"red":"yellow"}}},na={style:{display:"flex","justify-content":"space-around"}},la={style:{flex:"1 1 100px"}},ta={style:{height:"300px","text-align":"center"}},ea={style:{"text-align":"center"}},pa={style:{flex:"1 1 100px"}},oa={style:{height:"300px","text-align":"center"}},ca={style:{"text-align":"center"}},ha={style:{flex:"1 1 100px"}},ia={style:{height:"300px","text-align":"center"}},ra={style:{"text-align":"center"}},da={style:{flex:"1 1 100px"}},ua={style:{height:"300px","text-align":"center"}},ga={style:{"text-align":"center"}},ja={style:{flex:"1 1 100px"}},va={style:{height:"300px","text-align":"center"}},ma={style:{"text-align":"center"}},_a={style:{flex:"1 1 100px"}},qa={style:{height:"300px","text-align":"center"}},fa={style:{"text-align":"center"}};function ya(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g("div",na,[s("div",la,[s("div",ta,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),vertical:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",ea,c(a.value),1)]),s("div",pa,[s("div",oa,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),vertical:"","btn-color":a.btnColor,"background-colors":a.backgroundColors,colors:a.colors,onChange:p.onChange,onChanging:p.onChanging},null,8,["modelValue","btn-color","background-colors","colors","onChange","onChanging"])]),s("div",ca,c(a.value),1)]),s("div",ha,[s("div",ia,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e),vertical:"",disabled:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",ra,c(a.value),1)]),s("div",da,[s("div",ua,[o(t,{modelValue:a.value1,"onUpdate:modelValue":n[3]||(n[3]=e=>a.value1=e),vertical:"",range:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",ga,c(a.value1),1)]),s("div",ja,[s("div",va,[o(t,{modelValue:a.value2,"onUpdate:modelValue":n[4]||(n[4]=e=>a.value2=e),vertical:"",range:"",step:10,onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",ma,c(a.value2),1)]),s("div",_a,[s("div",qa,[o(t,{modelValue:a.value2,"onUpdate:modelValue":n[5]||(n[5]=e=>a.value2=e),vertical:"",range:"",step:10,"show-stops":!0,onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",fa,c(a.value2),1)])])}var xa=d(aa,[["render",ya]]);const Ca={components:{ImportDemo:xa}};function $a(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var ba=d(Ca,[["render",$a]]);const wa={data(){return{value:10,value1:[20,50]}},methods:{onChange(l){console.log(l)}}},Va={style:{display:"flex","align-items":"center"}},ka={style:{flex:"1 1 auto"}},Ia={style:{flex:"0 0 60px"}},Sa={style:{display:"flex","align-items":"center"}},Ya={style:{flex:"1 1 auto"}},Da={style:{flex:"0 0 60px"}},Ha={style:{display:"flex","justify-content":"space-around"}},Ua={style:{flex:"1 1 100px"}},Ra={style:{height:"300px","text-align":"center"}},Aa={style:{"text-align":"center"}},Ba={style:{flex:"1 1 100px"}},Fa={style:{height:"300px","text-align":"center"}},Na={style:{"text-align":"center"}};function za(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g($,null,[s("div",Va,[s("div",ka,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),reverse:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",Ia,c(a.value),1)]),s("div",Sa,[s("div",Ya,[o(t,{modelValue:a.value1,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value1=e),reverse:"",range:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",Da,c(a.value1),1)]),s("div",Ha,[s("div",Ua,[s("div",Ra,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e),vertical:"",reverse:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",Aa,c(a.value),1)]),s("div",Ba,[s("div",Fa,[o(t,{modelValue:a.value1,"onUpdate:modelValue":n[3]||(n[3]=e=>a.value1=e),range:"",vertical:"",reverse:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",Na,c(a.value1),1)])])],64)}var Ea=d(wa,[["render",za]]);const Ta={components:{ImportDemo:Ea}};function Ga(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var Ja=d(Ta,[["render",Ga]]);const Ka={data(){return{value:10,value1:[20,50]}},methods:{onChange(l){console.log(l)}}},La={style:{display:"flex","align-items":"center"}},Ma={style:{flex:"1 1 auto"}},Oa={style:{flex:"0 0 60px"}},Pa={style:{display:"flex","align-items":"center"}},Qa={style:{flex:"1 1 auto"}},Wa={style:{flex:"0 0 60px"}},Xa={style:{display:"flex","justify-content":"space-around"}},Za={style:{flex:"1 1 100px"}},sn={style:{height:"300px","text-align":"center"}},an={style:{"text-align":"center"}},nn={style:{flex:"1 1 100px"}},ln={style:{height:"300px","text-align":"center"}},tn={style:{"text-align":"center"}};function en(l,n,i,r,a,p){const t=h("YuumiSlider");return u(),g($,null,[s("div",La,[s("div",Ma,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),reverse:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",Oa,c(a.value),1)]),s("div",Pa,[s("div",Qa,[o(t,{modelValue:a.value1,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value1=e),placement:"bottom",range:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",Wa,c(a.value1),1)]),s("div",Xa,[s("div",Za,[s("div",sn,[o(t,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e),vertical:"",reverse:"",placement:"left",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",an,c(a.value),1)]),s("div",nn,[s("div",ln,[o(t,{modelValue:a.value1,"onUpdate:modelValue":n[3]||(n[3]=e=>a.value1=e),range:"",vertical:"",onChange:p.onChange},null,8,["modelValue","onChange"])]),s("div",tn,c(a.value1),1)])])],64)}var pn=d(Ka,[["render",en]]);const on={components:{ImportDemo:pn}};function cn(l,n,i,r,a,p){const t=h("ImportDemo");return u(),_(t)}var hn=d(on,[["render",cn]]);const S=Y({components:{vdpv_0:K,vdpv_1:ls,vdpv_2:ds,vdpv_3:ys,vdpv_4:Ss,vdpv_5:Ts,vdpv_6:sa,vdpv_7:ba,vdpv_8:Ja,vdpv_9:hn},setup(l){const n=v(),i=v(),r=v(),a=v(),p=v(),t=v(),e=v(),b=v(),w=v(),V=v(),k=[n,i,r,a,p,t,e,b,w,V],y=D({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0});return{toggleCode:x=>{const C="vdpv_"+x;y[C+"Height"]===0?y[C+"Height"]=(k[x].value?k[x].value.offsetHeight:0)||0:y[C+"Height"]=0},...H(y),vdpv_0Ref:n,vdpv_1Ref:i,vdpv_2Ref:r,vdpv_3Ref:a,vdpv_4Ref:p,vdpv_5Ref:t,vdpv_6Ref:e,vdpv_7Ref:b,vdpv_8Ref:w,vdpv_9Ref:V}}});S.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u8BBE\u7F6E\u6B65\u957F",anchor:"\u8BBE\u7F6E\u6B65\u957F",level:3},{content:"\u8BBE\u7F6E\u6700\u5927\u503C/\u6700\u5C0F\u503C",anchor:"\u8BBE\u7F6E\u6700\u5927\u503C\u6700\u5C0F\u503C",level:3},{content:"\u9690\u85CFtooltip",anchor:"\u9690\u85CFtooltip",level:3},{content:"\u81EA\u5B9A\u4E49\u663E\u793A",anchor:"\u81EA\u5B9A\u4E49\u663E\u793A",level:3},{content:"\u81EA\u5B9A\u4E49\u989C\u8272",anchor:"\u81EA\u5B9A\u4E49\u989C\u8272",level:3},{content:"\u9009\u62E9\u8303\u56F4",anchor:"\u9009\u62E9\u8303\u56F4",level:3},{content:"\u5782\u76F4\u6A21\u5F0F",anchor:"\u5782\u76F4\u6A21\u5F0F",level:3},{content:"\u53CD\u8F6C\u6A21\u5F0F",anchor:"\u53CD\u8F6C\u6A21\u5F0F",level:3},{content:"\u8BBE\u7F6Etooltip\u4F4D\u7F6E",anchor:"\u8BBE\u7F6Etooltip\u4F4D\u7F6E",level:3}]};const rn=S,dn={class:"vuedoc"},un=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),f(" \u57FA\u672C\u7528\u6CD5")],-1),gn=s("pre",{style:{display:"none"}},null,-1),jn={class:"vuedoc-demo"},vn={class:"vuedoc-demo__inner"},mn={class:"vuedoc-demo__preview"},_n={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},qn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">disabled</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">10</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),fn=[qn],yn=s("h3",{id:"\u8BBE\u7F6E\u6B65\u957F","data-source-line":"6"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u6B65\u957F"},"#"),f(" \u8BBE\u7F6E\u6B65\u957F")],-1),xn=s("pre",{style:{display:"none"}},null,-1),Cn={class:"vuedoc-demo"},$n={class:"vuedoc-demo__inner"},bn={class:"vuedoc-demo__preview"},wn={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Vn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">:show-stops</span>=<span class="hljs-string">&quot;true&quot;</span>
        <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">20</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),kn=[Vn],In=s("h3",{id:"\u8BBE\u7F6E\u6700\u5927\u503C\u6700\u5C0F\u503C","data-source-line":"11"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u6700\u5927\u503C\u6700\u5C0F\u503C"},"#"),f(" \u8BBE\u7F6E\u6700\u5927\u503C/\u6700\u5C0F\u503C")],-1),Sn=s("pre",{style:{display:"none"}},null,-1),Yn={class:"vuedoc-demo"},Dn={class:"vuedoc-demo__inner"},Hn={class:"vuedoc-demo__preview"},Un={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Rn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;-50&quot;</span>
        <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;50&quot;</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: -<span class="hljs-number">10</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),An=[Rn],Bn=s("h3",{id:"\u9690\u85CFtooltip","data-source-line":"17"},[s("a",{class:"markdownIt-Anchor",href:"#\u9690\u85CFtooltip"},"#"),f(" \u9690\u85CFtooltip")],-1),Fn=s("pre",{style:{display:"none"}},null,-1),Nn={class:"vuedoc-demo"},zn={class:"vuedoc-demo__inner"},En={class:"vuedoc-demo__preview"},Tn={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Gn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">:show-tooltip</span>=<span class="hljs-string">&quot;false&quot;</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Jn=[Gn],Kn=s("h3",{id:"\u81EA\u5B9A\u4E49\u663E\u793A","data-source-line":"23"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u663E\u793A"},"#"),f(" \u81EA\u5B9A\u4E49\u663E\u793A")],-1),Ln=s("pre",{style:{display:"none"}},null,-1),Mn={class:"vuedoc-demo"},On={class:"vuedoc-demo__inner"},Pn={class:"vuedoc-demo__preview"},Qn={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Wn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ formatter(value) }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">10</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    formatter (value) {
      <span class="hljs-keyword">return</span> (value / <span class="hljs-number">100</span>).toFixed(<span class="hljs-number">2</span>)
    },
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Xn=[Wn],Zn=s("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272","data-source-line":"28"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u989C\u8272"},"#"),f(" \u81EA\u5B9A\u4E49\u989C\u8272")],-1),sl=s("pre",{style:{display:"none"}},null,-1),al={class:"vuedoc-demo"},nl={class:"vuedoc-demo__inner"},ll={class:"vuedoc-demo__preview"},tl={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},el=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
          <span class="hljs-attr">:btn-color</span>=<span class="hljs-string">&quot;btnColor&quot;</span>
          <span class="hljs-attr">:background-colors</span>=<span class="hljs-string">&quot;backgroundColors&quot;</span>
          <span class="hljs-attr">:colors</span>=<span class="hljs-string">&quot;colors&quot;</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
          @<span class="hljs-attr">changing</span>=<span class="hljs-string">&quot;onChanging&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
        {{ value }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
          <span class="hljs-attr">:btn-color</span>=<span class="hljs-string">&quot;btnColor&quot;</span>
          <span class="hljs-attr">:background-colors</span>=<span class="hljs-string">&quot;backgroundColors&quot;</span>
          <span class="hljs-attr">:colors</span>=<span class="hljs-string">&quot;colors&quot;</span>
          <span class="hljs-attr">disabled</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
        {{ value }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">btnColor</span>: <span class="hljs-string">&quot;yellow&quot;</span>,
      <span class="hljs-attr">backgroundColors</span>: [<span class="hljs-string">&quot;#f5f5f5&quot;</span>, <span class="hljs-string">&quot;#888888&quot;</span>],
      <span class="hljs-attr">colors</span>: [<span class="hljs-string">&quot;yellow&quot;</span>, <span class="hljs-string">&quot;red&quot;</span>],
      <span class="hljs-attr">value</span>: <span class="hljs-number">50</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChanging</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">this</span>.btnColor = value &gt; <span class="hljs-number">50</span> ? <span class="hljs-string">&quot;red&quot;</span>: <span class="hljs-string">&quot;yellow&quot;</span>
    },
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),pl=[el],ol=s("h3",{id:"\u9009\u62E9\u8303\u56F4","data-source-line":"33"},[s("a",{class:"markdownIt-Anchor",href:"#\u9009\u62E9\u8303\u56F4"},"#"),f(" \u9009\u62E9\u8303\u56F4")],-1),cl=s("pre",{style:{display:"none"}},null,-1),hl={class:"vuedoc-demo"},il={class:"vuedoc-demo__inner"},rl={class:"vuedoc-demo__preview"},dl={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},ul=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">range</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">range</span>
        <span class="hljs-attr">disabled</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: [<span class="hljs-number">20</span>, <span class="hljs-number">50</span>]
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),gl=[ul],jl=s("h3",{id:"\u5782\u76F4\u6A21\u5F0F","data-source-line":"38"},[s("a",{class:"markdownIt-Anchor",href:"#\u5782\u76F4\u6A21\u5F0F"},"#"),f(" \u5782\u76F4\u6A21\u5F0F")],-1),vl=s("pre",{style:{display:"none"}},null,-1),ml={class:"vuedoc-demo"},_l={class:"vuedoc-demo__inner"},ql={class:"vuedoc-demo__preview"},fl={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},yl=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; justify-content: space-around;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px; text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
          <span class="hljs-attr">vertical</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px; text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
          <span class="hljs-attr">vertical</span>
          <span class="hljs-attr">:btn-color</span>=<span class="hljs-string">&quot;btnColor&quot;</span>
          <span class="hljs-attr">:background-colors</span>=<span class="hljs-string">&quot;backgroundColors&quot;</span>
          <span class="hljs-attr">:colors</span>=<span class="hljs-string">&quot;colors&quot;</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
          @<span class="hljs-attr">changing</span>=<span class="hljs-string">&quot;onChanging&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px;text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
          <span class="hljs-attr">vertical</span>
          <span class="hljs-attr">disabled</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px;text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
          <span class="hljs-attr">vertical</span>
          <span class="hljs-attr">range</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value1 }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px;text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
          <span class="hljs-attr">vertical</span>
          <span class="hljs-attr">range</span>
          <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value2 }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px;text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
          <span class="hljs-attr">vertical</span>
          <span class="hljs-attr">range</span>
          <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span>
          <span class="hljs-attr">:show-stops</span>=<span class="hljs-string">&quot;true&quot;</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value2 }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">btnColor</span>: <span class="hljs-string">&quot;yellow&quot;</span>,
      <span class="hljs-attr">backgroundColors</span>: [<span class="hljs-string">&quot;#f5f5f5&quot;</span>, <span class="hljs-string">&quot;#888888&quot;</span>],
      <span class="hljs-attr">colors</span>: [<span class="hljs-string">&quot;yellow&quot;</span>, <span class="hljs-string">&quot;red&quot;</span>],
      <span class="hljs-attr">value</span>: <span class="hljs-number">10</span>,
      <span class="hljs-attr">value1</span>: [<span class="hljs-number">30</span>, <span class="hljs-number">70</span>],
      <span class="hljs-attr">value2</span>: [<span class="hljs-number">40</span>, <span class="hljs-number">60</span>]
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    },
    <span class="hljs-function"><span class="hljs-title">onChanging</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">this</span>.btnColor = value &gt; <span class="hljs-number">50</span> ? <span class="hljs-string">&quot;red&quot;</span>: <span class="hljs-string">&quot;yellow&quot;</span>
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),xl=[yl],Cl=s("h3",{id:"\u53CD\u8F6C\u6A21\u5F0F","data-source-line":"43"},[s("a",{class:"markdownIt-Anchor",href:"#\u53CD\u8F6C\u6A21\u5F0F"},"#"),f(" \u53CD\u8F6C\u6A21\u5F0F")],-1),$l=s("pre",{style:{display:"none"}},null,-1),bl={class:"vuedoc-demo"},wl={class:"vuedoc-demo__inner"},Vl={class:"vuedoc-demo__preview"},kl={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},Il=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">reverse</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
        <span class="hljs-attr">reverse</span>
        <span class="hljs-attr">range</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value1 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; justify-content: space-around;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px; text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
          <span class="hljs-attr">vertical</span>
          <span class="hljs-attr">reverse</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px; text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
          <span class="hljs-attr">range</span>
          <span class="hljs-attr">vertical</span>
          <span class="hljs-attr">reverse</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value1 }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">10</span>,
      <span class="hljs-attr">value1</span>: [<span class="hljs-number">20</span>, <span class="hljs-number">50</span>]
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Sl=[Il],Yl=j('<h3 id="\u8BBE\u7F6Etooltip\u4F4D\u7F6E" data-source-line="48"><a class="markdownIt-Anchor" href="#\u8BBE\u7F6Etooltip\u4F4D\u7F6E">#</a> \u8BBE\u7F6Etooltip\u4F4D\u7F6E</h3><p data-source-line="50">\u53EF\u9009\u503C</p><p data-source-line="52"><code>auto</code>, <code>auto-start</code>, <code>auto-end</code></p><p data-source-line="54"><code>top</code>, <code>top-start</code>, <code>top-end</code></p><p data-source-line="56"><code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code></p><p data-source-line="58"><code>right</code>, <code>right-start</code>, <code>right-end</code></p><p data-source-line="60"><code>left</code>, <code>left-start</code>, <code>left-end</code></p><p data-source-line="62">\u9ED8\u8BA4\u503C\u4E3A <code>top|right</code></p><pre style="display:none;"></pre>',9),Dl={class:"vuedoc-demo"},Hl={class:"vuedoc-demo__inner"},Ul={class:"vuedoc-demo__preview"},Rl={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},Al=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
        <span class="hljs-attr">reverse</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; align-items: center;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 auto;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
        <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom&quot;</span>
        <span class="hljs-attr">range</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 0 0 60px;&quot;</span>&gt;</span>
      {{ value1 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: flex; justify-content: space-around;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px; text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
          <span class="hljs-attr">vertical</span>
          <span class="hljs-attr">reverse</span>
          <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;left&quot;</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;flex: 1 1 100px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot; height: 300px; text-align: center;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiSlider</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
          <span class="hljs-attr">range</span>
          <span class="hljs-attr">vertical</span>
          @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>
        {{ value1 }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">10</span>,
      <span class="hljs-attr">value1</span>: [<span class="hljs-number">20</span>, <span class="hljs-number">50</span>]
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),Bl=[Al];function Fl(l,n,i,r,a,p){const t=h("vdpv_0"),e=h("vdpv_1"),b=h("vdpv_2"),w=h("vdpv_3"),V=h("vdpv_4"),k=h("vdpv_5"),y=h("vdpv_6"),I=h("vdpv_7"),x=h("vdpv_8"),C=h("vdpv_9");return u(),g("div",dn,[un,gn,s("div",jn,[s("div",vn,[s("div",mn,[o(t)]),s("div",{style:m({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",_n,fn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=q=>l.toggleCode(0))},c(l.vdpv_0Height>0?"hidden":"show"),1)])]),yn,xn,s("div",Cn,[s("div",$n,[s("div",bn,[o(e)]),s("div",{style:m({height:l.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",wn,kn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=q=>l.toggleCode(1))},c(l.vdpv_1Height>0?"hidden":"show"),1)])]),In,Sn,s("div",Yn,[s("div",Dn,[s("div",Hn,[o(b)]),s("div",{style:m({height:l.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Un,An,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=q=>l.toggleCode(2))},c(l.vdpv_2Height>0?"hidden":"show"),1)])]),Bn,Fn,s("div",Nn,[s("div",zn,[s("div",En,[o(w)]),s("div",{style:m({height:l.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Tn,Jn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[3]||(n[3]=q=>l.toggleCode(3))},c(l.vdpv_3Height>0?"hidden":"show"),1)])]),Kn,Ln,s("div",Mn,[s("div",On,[s("div",Pn,[o(V)]),s("div",{style:m({height:l.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Qn,Xn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[4]||(n[4]=q=>l.toggleCode(4))},c(l.vdpv_4Height>0?"hidden":"show"),1)])]),Zn,sl,s("div",al,[s("div",nl,[s("div",ll,[o(k)]),s("div",{style:m({height:l.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",tl,pl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[5]||(n[5]=q=>l.toggleCode(5))},c(l.vdpv_5Height>0?"hidden":"show"),1)])]),ol,cl,s("div",hl,[s("div",il,[s("div",rl,[o(y)]),s("div",{style:m({height:l.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",dl,gl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[6]||(n[6]=q=>l.toggleCode(6))},c(l.vdpv_6Height>0?"hidden":"show"),1)])]),jl,vl,s("div",ml,[s("div",_l,[s("div",ql,[o(I)]),s("div",{style:m({height:l.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",fl,xl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[7]||(n[7]=q=>l.toggleCode(7))},c(l.vdpv_7Height>0?"hidden":"show"),1)])]),Cl,$l,s("div",bl,[s("div",wl,[s("div",Vl,[o(x)]),s("div",{style:m({height:l.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",kl,Sl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[8]||(n[8]=q=>l.toggleCode(8))},c(l.vdpv_8Height>0?"hidden":"show"),1)])]),Yl,s("div",Dl,[s("div",Hl,[s("div",Ul,[o(C)]),s("div",{style:m({height:l.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",Rl,Bl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[9]||(n[9]=q=>l.toggleCode(9))},c(l.vdpv_9Height>0?"hidden":"show"),1)])])])}var zl=d(rn,[["render",Fl]]);export{zl as default};
