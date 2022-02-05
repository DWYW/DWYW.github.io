var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{r as o,S as c,D as i,o as h,c as u,s as r,q as d,B as g,y as j,l as m,d as v,e as _,M as q,u as b,f,h as w,G as y,R as k}from"./vendor.642980ed.js";const T={data:()=>({loading:!0,value:"京"}),mounted(){this.showLoading()},methods:{showLoading(){this.loading=!0,setTimeout((()=>{this.loading=!1}),400)}}};T.render=function(s,a,n,l,t,e){const p=o("YuumiTabItem"),m=o("YuumiTabs"),v=c("loading");return i((h(),u(m,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),onChange:e.showLoading},{default:r((()=>[d(p,{label:"北京市",value:"京"},{label:r((({$props:s})=>[g(j(s.label)+"(首都)",1)])),default:r((()=>[g(" 北京市 简称 "+j(t.value),1)])),_:1}),d(p,{label:"上海市",value:"沪"},{default:r((()=>[g("上海市 简称 "+j(t.value),1)])),_:1}),d(p,{label:"天津市",value:"津"},{default:r((()=>[g("天津市 简称 "+j(t.value),1)])),_:1}),d(p,{label:"重庆市",value:"渝"},{default:r((()=>[g("重庆市 简称 "+j(t.value),1)])),_:1})])),_:1},8,["modelValue","onChange"])),[[v,t.loading]])};const Y={methods:{showLoading(){const{createLoading:s,removeLoading:a}=this.$yuumi,n=s();setTimeout((()=>{a(n)}),1e3)}}},L=g("show global loading");Y.render=function(s,a,n,l,t,e){const p=o("YuumiButton");return h(),u(p,{onClick:e.showLoading},{default:r((()=>[L])),_:1},8,["onClick"])};const x={data:()=>({spinner:"circle",loading:!1}),computed:{loadingData(){let s=this.spinner;return"custom"===s&&(s=m("svg",{width:"48px",height:"48px",viewBox:"0 0 100 100",innerHTML:'<path fill="none" stroke="#e90c59" stroke-width="8" stroke-dasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px"><animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"/></path>'})),{value:this.loading,spinner:s}}},mounted(){this.showLoading()},methods:{showLoading(){this.loading=!0,setTimeout((()=>{this.loading=!1}),400)}}};x.render=function(s,a,n,l,t,e){const p=o("YuumiTabItem"),m=o("YuumiTabs"),v=c("loading");return i((h(),u(m,{modelValue:t.spinner,"onUpdate:modelValue":a[0]||(a[0]=s=>t.spinner=s),onChange:e.showLoading},{default:r((()=>[d(p,{label:"圆环",value:"circle"},{default:r((()=>[g(j(e.loadingData),1)])),_:1}),d(p,{label:"方块",value:"rect"},{default:r((()=>[g(j(e.loadingData),1)])),_:1}),d(p,{label:"自定义",value:"custom"},{default:r((()=>[g(j(e.loadingData),1)])),_:1})])),_:1},8,["modelValue","onChange"])),[[v,e.loadingData]])};const C=v({components:{vdpv_0:T,vdpv_1:Y,vdpv_2:x},setup(s){const o=_(),c=_(),i=_(),h=[o,c,i],u=q({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return r=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))e.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===u[a+"Height"]?u[a+"Height"]=(h[s].value?h[s].value.offsetHeight:0)||0:u[a+"Height"]=0}},b(u)),a(r,n({vdpv_0Ref:o,vdpv_1Ref:c,vdpv_2Ref:i}));var r}});C.$vd={matter:{},toc:[{content:"局部加载",anchor:"局部加载",level:3},{content:"全局加载",anchor:"全局加载",level:3},{content:"自定义loading",anchor:"自定义loading",level:3}]};const I=C,H={class:"vuedoc  "},D=w("h3",{id:"局部加载","data-source-line":"1"},[w("a",{class:"markdownIt-Anchor",href:"#局部加载"},"#"),g(" 局部加载")],-1),O=w("pre",{style:{display:"none"}},null,-1),R={class:"vuedoc-demo "},B={class:"vuedoc-demo__inner"},V={class:"vuedoc-demo__preview"},$={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},M=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;showLoading&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;北京市&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;京&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">label</span>=<span class="hljs-string">&quot;{ $props }&quot;</span>&gt;</span>{{$props.label}}(首都)<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      北京市 简称 {{value}}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;上海市&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;沪&quot;</span>&gt;</span>上海市 简称 {{value}}<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;天津市&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;津&quot;</span>&gt;</span>天津市 简称 {{value}}<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;重庆市&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;渝&quot;</span>&gt;</span>重庆市 简称 {{value}}<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;京&quot;</span>\n    }\n  },\n  mounted () {\n    <span class="hljs-built_in">this</span>.showLoading()\n  },\n  <span class="hljs-attr">methods</span>: {\n    showLoading () {\n      <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>\n\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>\n      }, <span class="hljs-number">400</span>)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],P=w("h3",{id:"全局加载","data-source-line":"41"},[w("a",{class:"markdownIt-Anchor",href:"#全局加载"},"#"),g(" 全局加载")],-1),A=w("pre",{style:{display:"none"}},null,-1),z={class:"vuedoc-demo "},N={class:"vuedoc-demo__inner"},S={class:"vuedoc-demo__preview"},U={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},E=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showLoading&quot;</span>&gt;</span>show global loading<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">methods</span>: {\n    showLoading () {\n      <span class="hljs-keyword">const</span> { createLoading, removeLoading } = <span class="hljs-built_in">this</span>.$yuumi\n      <span class="hljs-keyword">const</span> vnode = createLoading()\n\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        removeLoading(vnode)\n      }, <span class="hljs-number">1000</span>)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],G=w("h3",{id:"自定义loading","data-source-line":"65"},[w("a",{class:"markdownIt-Anchor",href:"#自定义loading"},"#"),g(" 自定义loading")],-1),F=w("pre",{style:{display:"none"}},null,-1),J={class:"vuedoc-demo "},K={class:"vuedoc-demo__inner"},Q={class:"vuedoc-demo__preview"},W={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},X=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;spinner&quot;</span> <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;loadingData&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;showLoading&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;圆环&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>{{loadingData}}<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;方块&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;rect&quot;</span>&gt;</span>{{loadingData}}<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;自定义&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;custom&quot;</span>&gt;</span>{{loadingData}}<span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> { h, withDirectives, resolveDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">spinner</span>: <span class="hljs-string">&quot;circle&quot;</span>,\n      <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>\n    }\n  },\n  <span class="hljs-attr">computed</span>: {\n    loadingData () {\n      <span class="hljs-keyword">let</span> spinner = <span class="hljs-built_in">this</span>.spinner\n\n      <span class="hljs-keyword">if</span> (spinner === <span class="hljs-string">&#39;custom&#39;</span>) {\n        spinner = h(<span class="hljs-string">&#39;svg&#39;</span>, {\n          <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;48px&#39;</span>,\n          <span class="hljs-attr">height</span>: <span class="hljs-string">&#39;48px&#39;</span> ,\n          <span class="hljs-attr">viewBox</span>: <span class="hljs-string">&#39;0 0 100 100&#39;</span>,\n          <span class="hljs-attr">innerHTML</span>: <span class="hljs-string">`&lt;path fill=&quot;none&quot; stroke=&quot;#e90c59&quot; stroke-width=&quot;8&quot; stroke-dasharray=&quot;42.76482137044271 42.76482137044271&quot; d=&quot;M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z&quot; stroke-linecap=&quot;round&quot; style=&quot;transform:scale(0.8);transform-origin:50px 50px&quot;&gt;&lt;animate attributeName=&quot;stroke-dashoffset&quot; repeatCount=&quot;indefinite&quot; dur=&quot;1s&quot; keyTimes=&quot;0;1&quot; values=&quot;0;256.58892822265625&quot;/&gt;&lt;/path&gt;`</span>\n        })\n      }\n\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span> : <span class="hljs-built_in">this</span>.loading,\n        <span class="hljs-attr">spinner</span>: spinner\n      }\n    }\n  },\n  mounted () {\n    <span class="hljs-built_in">this</span>.showLoading()\n  },\n  <span class="hljs-attr">methods</span>: {\n    showLoading () {\n      <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>\n\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>\n      }, <span class="hljs-number">400</span>)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)];I.render=function(s,a,n,l,t,e){const p=o("vdpv_0"),c=o("vdpv_1"),i=o("vdpv_2");return h(),f("div",H,[D,O,w("div",R,[w("div",B,[w("div",V,[d(p)]),w("div",{style:y({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[w("div",$,M,512)],4),w("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},j(s.vdpv_0Height>0?"hidden":"show"),1)])]),P,A,w("div",z,[w("div",N,[w("div",S,[d(c)]),w("div",{style:y({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[w("div",U,E,512)],4),w("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},j(s.vdpv_1Height>0?"hidden":"show"),1)])]),G,F,w("div",J,[w("div",K,[w("div",Q,[d(i)]),w("div",{style:y({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[w("div",W,X,512)],4),w("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},j(s.vdpv_2Height>0?"hidden":"show"),1)])])])};export{I as default};