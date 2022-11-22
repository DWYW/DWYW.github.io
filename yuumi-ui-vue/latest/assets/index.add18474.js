import{_ as g,r,o as i,c as h,b as n,d as c,F as d,e as m,f as _,g as v,h as q,i as f,n as y,t as b,k as u}from"./index.9a20c984.js";const T={data(){return{page1:{page:1,pageTotal:2,total:20},page2:{page:"3",pageTotal:"20",total:200},page3:{page:"18",pageTotal:"145",total:"2885"}}},methods:{consoleLog(t){console.log(t)}}},x={style:{"margin-bottom":"20px"}},$={style:{"margin-bottom":"20px"}},k={style:{"margin-bottom":"20px"}};function P(t,l,o,p,s,e){const a=r("YuumiPagination");return i(),h(d,null,[n("div",x,[c(a,{page:s.page1.page,"page-total":s.page1.pageTotal,total:s.page1.total,align:"left"},null,8,["page","page-total","total"])]),n("div",$,[c(a,{page:s.page2.page,"page-total":s.page2.pageTotal,total:s.page2.total,align:"right"},null,8,["page","page-total","total"])]),n("div",k,[c(a,{page:s.page3.page,"page-total":s.page3.pageTotal,total:s.page3.total},null,8,["page","page-total","total"])])],64)}var Y=g(T,[["render",P]]);const w={components:{ImportDemo:Y}};function H(t,l,o,p,s,e){const a=r("ImportDemo");return i(),m(a)}var C=g(w,[["render",H]]);const j=_({components:{vdpv_0:C},setup(t){const l=v(),o=[l],p=q({vdpv_0Height:0});return{toggleCode:e=>{const a="vdpv_"+e;p[a+"Height"]===0?p[a+"Height"]=(o[e].value?o[e].value.offsetHeight:0)||0:p[a+"Height"]=0},...f(p),vdpv_0Ref:l}}});j.$vd={matter:{},toc:[{content:"pagination \u5206\u9875",anchor:"pagination-\u5206\u9875",level:2},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3}]};const I=j,B={class:"vuedoc"},D=u('<h2 id="pagination-\u5206\u9875" data-source-line="1"><a class="markdownIt-Anchor" href="#pagination-\u5206\u9875">#</a> pagination \u5206\u9875</h2><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),N={class:"vuedoc-demo"},R={class:"vuedoc-demo__inner"},S={class:"vuedoc-demo__preview"},V={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},A=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 20px;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiPagination</span> <span class="hljs-attr">:page</span>=<span class="hljs-string">&quot;page1.page&quot;</span> <span class="hljs-attr">:page-total</span>=<span class="hljs-string">&quot;page1.pageTotal&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;page1.total&quot;</span> <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiPagination</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 20px;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiPagination</span> <span class="hljs-attr">:page</span>=<span class="hljs-string">&quot;page2.page&quot;</span> <span class="hljs-attr">:page-total</span>=<span class="hljs-string">&quot;page2.pageTotal&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;page2.total&quot;</span> <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiPagination</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 20px;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiPagination</span> <span class="hljs-attr">:page</span>=<span class="hljs-string">&quot;page3.page&quot;</span> <span class="hljs-attr">:page-total</span>=<span class="hljs-string">&quot;page3.pageTotal&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;page3.total&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiPagination</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">page1</span>: {
        <span class="hljs-attr">page</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">pageTotal</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">total</span>: <span class="hljs-number">20</span>
      },
      <span class="hljs-attr">page2</span>: {
        <span class="hljs-attr">page</span>: <span class="hljs-string">&quot;3&quot;</span>,
        <span class="hljs-attr">pageTotal</span>: <span class="hljs-string">&quot;20&quot;</span>,
        <span class="hljs-attr">total</span>: <span class="hljs-number">200</span>
      },
      <span class="hljs-attr">page3</span>: {
        <span class="hljs-attr">page</span>: <span class="hljs-string">&quot;18&quot;</span>,
        <span class="hljs-attr">pageTotal</span>: <span class="hljs-string">&quot;145&quot;</span>,
        <span class="hljs-attr">total</span>: <span class="hljs-string">&quot;2885&quot;</span>
      }
    }
  },
  <span class="hljs-attr">methods</span>: {
    consoleLog (value) {
      <span class="hljs-built_in">console</span>.log(value)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),F=[A];function L(t,l,o,p,s,e){const a=r("vdpv_0");return i(),h("div",B,[D,n("div",N,[n("div",R,[n("div",S,[c(a)]),n("div",{style:y({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[n("div",V,F,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:l[0]||(l[0]=z=>t.toggleCode(0))},b(t.vdpv_0Height>0?"hidden":"show"),1)])])])}var G=g(I,[["render",L]]);export{G as default};
