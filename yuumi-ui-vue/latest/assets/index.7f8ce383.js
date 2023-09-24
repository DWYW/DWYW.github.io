import{_,r,q as w,s as k,o as j,e as v,w as c,d as h,j as o,t as i,m as y,f as $,g as f,h as I,i as Y,c as C,b as s,n as q,k as b}from"./index.495b204b.js";const D={data(){return{loading:!0,value:"\u4EAC"}},mounted(){this.showLoading()},methods:{showLoading(){this.loading=!0,setTimeout(()=>{this.loading=!1},400)}}};function L(a,n,p,u,l,e){const t=r("YuumiTabItem"),d=r("YuumiTabs"),m=w("loading");return k((j(),v(d,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=g=>l.value=g),onChange:e.showLoading},{default:c(()=>[h(t,{label:"\u5317\u4EAC\u5E02",value:"\u4EAC"},{label:c(({$props:g})=>[o(i(g.label)+"(\u9996\u90FD) ",1)]),default:c(()=>[o(" \u5317\u4EAC\u5E02 \u7B80\u79F0 "+i(l.value),1)]),_:1}),h(t,{label:"\u4E0A\u6D77\u5E02",value:"\u6CAA"},{default:c(()=>[o(" \u4E0A\u6D77\u5E02 \u7B80\u79F0 "+i(l.value),1)]),_:1}),h(t,{label:"\u5929\u6D25\u5E02",value:"\u6D25"},{default:c(()=>[o(" \u5929\u6D25\u5E02 \u7B80\u79F0 "+i(l.value),1)]),_:1}),h(t,{label:"\u91CD\u5E86\u5E02",value:"\u6E1D"},{default:c(()=>[o(" \u91CD\u5E86\u5E02 \u7B80\u79F0 "+i(l.value),1)]),_:1})]),_:1},8,["modelValue","onChange"])),[[m,l.loading]])}var x=_(D,[["render",L]]);const H={components:{ImportDemo:x}};function B(a,n,p,u,l,e){const t=r("ImportDemo");return j(),v(t)}var V=_(H,[["render",B]]);const R={methods:{showLoading(){const{createLoading:a,removeLoading:n}=this.$yuumi,p=a();setTimeout(()=>{n(p)},1e3)}}};function N(a,n,p,u,l,e){const t=r("YuumiButton");return j(),v(t,{onClick:e.showLoading},{default:c(()=>[o(" show global loading ")]),_:1},8,["onClick"])}var M=_(R,[["render",N]]);const z={components:{ImportDemo:M}};function A(a,n,p,u,l,e){const t=r("ImportDemo");return j(),v(t)}var S=_(z,[["render",A]]);const U={data(){return{spinner:"circle",loading:!1}},computed:{loadingData(){let a=this.spinner;return a==="custom"&&(a=y("svg",{width:"48px",height:"48px",viewBox:"0 0 100 100",innerHTML:'<path fill="none" stroke="#e90c59" stroke-width="8" stroke-dasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px"><animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"/></path>'})),{value:this.loading,spinner:a}}},mounted(){this.showLoading()},methods:{showLoading(){this.loading=!0,setTimeout(()=>{this.loading=!1},400)}}};function E(a,n,p,u,l,e){const t=r("YuumiTabItem"),d=r("YuumiTabs"),m=w("loading");return k((j(),v(d,{modelValue:l.spinner,"onUpdate:modelValue":n[0]||(n[0]=g=>l.spinner=g),onChange:e.showLoading},{default:c(()=>[h(t,{label:"\u5706\u73AF",value:"circle"},{default:c(()=>[o(i(e.loadingData),1)]),_:1}),h(t,{label:"\u65B9\u5757",value:"rect"},{default:c(()=>[o(i(e.loadingData),1)]),_:1}),h(t,{label:"\u81EA\u5B9A\u4E49",value:"custom"},{default:c(()=>[o(i(e.loadingData),1)]),_:1})]),_:1},8,["modelValue","onChange"])),[[m,e.loadingData]])}var F=_(U,[["render",E]]);const G={components:{ImportDemo:F}};function J(a,n,p,u,l,e){const t=r("ImportDemo");return j(),v(t)}var K=_(G,[["render",J]]);const T=$({components:{vdpv_0:V,vdpv_1:S,vdpv_2:K},setup(a){const n=f(),p=f(),u=f(),l=[n,p,u],e=I({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:d=>{const m="vdpv_"+d;e[m+"Height"]===0?e[m+"Height"]=(l[d].value?l[d].value.offsetHeight:0)||0:e[m+"Height"]=0},...Y(e),vdpv_0Ref:n,vdpv_1Ref:p,vdpv_2Ref:u}}});T.$vd={matter:{},toc:[{content:"\u5C40\u90E8\u52A0\u8F7D",anchor:"\u5C40\u90E8\u52A0\u8F7D",level:3},{content:"\u5168\u5C40\u52A0\u8F7D",anchor:"\u5168\u5C40\u52A0\u8F7D",level:3},{content:"\u81EA\u5B9A\u4E49loading",anchor:"\u81EA\u5B9A\u4E49loading",level:3}]};const O=T,P={class:"vuedoc"},Q=s("h3",{id:"\u5C40\u90E8\u52A0\u8F7D","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u5C40\u90E8\u52A0\u8F7D"},"#"),o(" \u5C40\u90E8\u52A0\u8F7D")],-1),W=s("pre",{style:{display:"none"}},null,-1),X={class:"vuedoc-demo"},Z={class:"vuedoc-demo__inner"},ss={class:"vuedoc-demo__preview"},as={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ns=b(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabs</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;showLoading&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5317\u4EAC\u5E02&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u4EAC&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">label</span>=<span class="hljs-string">&quot;{ $props }&quot;</span>&gt;</span>
        {{ $props.label }}(\u9996\u90FD)
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

      \u5317\u4EAC\u5E02 \u7B80\u79F0 {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u4E0A\u6D77\u5E02&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u6CAA&quot;</span>
    &gt;</span>
      \u4E0A\u6D77\u5E02 \u7B80\u79F0 {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5929\u6D25\u5E02&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u6D25&quot;</span>
    &gt;</span>
      \u5929\u6D25\u5E02 \u7B80\u79F0 {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u91CD\u5E86\u5E02&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u6E1D&quot;</span>
    &gt;</span>
      \u91CD\u5E86\u5E02 \u7B80\u79F0 {{ value }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabs</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;\u4EAC&quot;</span>
    }
  },
  mounted () {
    <span class="hljs-built_in">this</span>.showLoading()
  },
  <span class="hljs-attr">methods</span>: {
    showLoading () {
      <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>
      }, <span class="hljs-number">400</span>)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),ts=[ns],ls=s("h3",{id:"\u5168\u5C40\u52A0\u8F7D","data-source-line":"6"},[s("a",{class:"markdownIt-Anchor",href:"#\u5168\u5C40\u52A0\u8F7D"},"#"),o(" \u5168\u5C40\u52A0\u8F7D")],-1),es=s("pre",{style:{display:"none"}},null,-1),os={class:"vuedoc-demo"},ps={class:"vuedoc-demo__inner"},cs={class:"vuedoc-demo__preview"},is={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},rs=b(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showLoading&quot;</span>&gt;</span>
    show global loading
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    showLoading () {
      <span class="hljs-keyword">const</span> { createLoading, removeLoading } = <span class="hljs-built_in">this</span>.$yuumi
      <span class="hljs-keyword">const</span> vnode = createLoading()

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        removeLoading(vnode)
      }, <span class="hljs-number">1000</span>)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),hs=[rs],us=s("h3",{id:"\u81EA\u5B9A\u4E49loading","data-source-line":"13"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49loading"},"#"),o(" \u81EA\u5B9A\u4E49loading")],-1),ds=s("pre",{style:{display:"none"}},null,-1),ms={class:"vuedoc-demo"},gs={class:"vuedoc-demo__inner"},_s={class:"vuedoc-demo__preview"},js={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},vs=b(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabs</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;spinner&quot;</span>
    <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;loadingData&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;showLoading&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5706\u73AF&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;circle&quot;</span>
    &gt;</span>
      {{ loadingData }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65B9\u5757&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;rect&quot;</span>
    &gt;</span>
      {{ loadingData }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;custom&quot;</span>
    &gt;</span>
      {{ loadingData }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabs</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> { h } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">spinner</span>: <span class="hljs-string">&quot;circle&quot;</span>,
      <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">computed</span>: {
    loadingData () {
      <span class="hljs-keyword">let</span> spinner = <span class="hljs-built_in">this</span>.spinner

      <span class="hljs-keyword">if</span> (spinner === <span class="hljs-string">&#39;custom&#39;</span>) {
        spinner = h(<span class="hljs-string">&#39;svg&#39;</span>, {
          <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;48px&#39;</span>,
          <span class="hljs-attr">height</span>: <span class="hljs-string">&#39;48px&#39;</span> ,
          <span class="hljs-attr">viewBox</span>: <span class="hljs-string">&#39;0 0 100 100&#39;</span>,
          <span class="hljs-attr">innerHTML</span>: <span class="hljs-string">\`&lt;path fill=&quot;none&quot; stroke=&quot;#e90c59&quot; stroke-width=&quot;8&quot; stroke-dasharray=&quot;42.76482137044271 42.76482137044271&quot; d=&quot;M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z&quot; stroke-linecap=&quot;round&quot; style=&quot;transform:scale(0.8);transform-origin:50px 50px&quot;&gt;&lt;animate attributeName=&quot;stroke-dashoffset&quot; repeatCount=&quot;indefinite&quot; dur=&quot;1s&quot; keyTimes=&quot;0;1&quot; values=&quot;0;256.58892822265625&quot;/&gt;&lt;/path&gt;\`</span>
        })
      }

      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span> : <span class="hljs-built_in">this</span>.loading,
        <span class="hljs-attr">spinner</span>: spinner
      }
    }
  },
  mounted () {
    <span class="hljs-built_in">this</span>.showLoading()
  },
  <span class="hljs-attr">methods</span>: {
    showLoading () {
      <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>
      }, <span class="hljs-number">400</span>)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),fs=[vs];function qs(a,n,p,u,l,e){const t=r("vdpv_0"),d=r("vdpv_1"),m=r("vdpv_2");return j(),C("div",P,[Q,W,s("div",X,[s("div",Z,[s("div",ss,[h(t)]),s("div",{style:q({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",as,ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=g=>a.toggleCode(0))},i(a.vdpv_0Height>0?"hidden":"show"),1)])]),ls,es,s("div",os,[s("div",ps,[s("div",cs,[h(d)]),s("div",{style:q({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",is,hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=g=>a.toggleCode(1))},i(a.vdpv_1Height>0?"hidden":"show"),1)])]),us,ds,s("div",ms,[s("div",gs,[s("div",_s,[h(m)]),s("div",{style:q({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",js,fs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=g=>a.toggleCode(2))},i(a.vdpv_2Height>0?"hidden":"show"),1)])])])}var ws=_(O,[["render",qs]]);export{ws as default};
