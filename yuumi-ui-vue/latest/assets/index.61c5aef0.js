import{_ as c,r as u,o as i,c as r,d,e as j,f as q,g,h as v,i as _,b as l,n as m,t as b,j as N,k as f}from"./index.adb58741.js";const k={data(){return{data:[{label:"\u4E00\u5E74\u7EA7",value:1,icon:"line-setting",children:[{label:"1\u73ED",value:101,checked:!0},{label:"2\u73ED",value:102,disabled:!0,icon:"line-setting",children:[{label:"\u5B9E\u9A8C\u73ED",value:10201},{label:"\u666E\u901A\u73ED",value:10202}]},{label:"3\u73ED",value:103}]},{label:"\u4E8C\u5E74\u7EA7",value:2,icon:"line-setting",children:[{label:"1\u73ED",value:201},{label:"2\u73ED",value:202}]},{label:"\u4E09\u5E74\u7EA7",value:3,icon:"line-setting",expand:!0,children:[{label:"1\u73ED",value:301},{label:"2\u73ED",value:302},{label:"3\u73ED",value:303}]}],selectedNode:null}},methods:{onNodeExpand(s){console.log("onNodeExpand",s)},onNodeClick(s){console.log("onNodeClick",s),s.node.children||(this.selectedNode=s.node)},onEvent(s){console.log("onEvent",s)}}},x={style:{width:"200px"}};function E(s,t,o,e,p,n){const a=u("YuumiNavMenu");return i(),r("div",x,[d(a,{data:p.data,"selected-node":p.selectedNode,onNodeExpand:n.onNodeExpand,onNodeClick:n.onNodeClick,onNodeMouseenter:n.onEvent,onNodeMouseleave:n.onEvent},null,8,["data","selected-node","onNodeExpand","onNodeClick","onNodeMouseenter","onNodeMouseleave"])])}var C=c(k,[["render",E]]);const $={components:{ImportDemo:C}};function y(s,t,o,e,p,n){const a=u("ImportDemo");return i(),j(a)}var w=c($,[["render",y]]);const h=q({components:{vdpv_0:w},setup(s){const t=g(),o=[t],e=v({vdpv_0Height:0});return{toggleCode:n=>{const a="vdpv_"+n;e[a+"Height"]===0?e[a+"Height"]=(o[n].value?o[n].value.offsetHeight:0)||0:e[a+"Height"]=0},..._(e),vdpv_0Ref:t}}});h.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3}]};const H=h,M={class:"vuedoc"},B=l("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[l("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),N(" \u57FA\u672C\u7528\u6CD5")],-1),D=l("pre",{style:{display:"none"}},null,-1),I={class:"vuedoc-demo"},V={class:"vuedoc-demo__inner"},R={class:"vuedoc-demo__preview"},S={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Y=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiNavMenu</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
      <span class="hljs-attr">:selected-node</span>=<span class="hljs-string">&quot;selectedNode&quot;</span>
      @<span class="hljs-attr">node-expand</span>=<span class="hljs-string">&quot;onNodeExpand&quot;</span>
      @<span class="hljs-attr">node-click</span>=<span class="hljs-string">&quot;onNodeClick&quot;</span>
      @<span class="hljs-attr">node-mouseenter</span>=<span class="hljs-string">&quot;onEvent&quot;</span>
      @<span class="hljs-attr">node-mouseleave</span>=<span class="hljs-string">&quot;onEvent&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">data</span>: [
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E00\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">1</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-setting&quot;</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">101</span>, <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">102</span>,<span class="hljs-string">&quot;disabled&quot;</span>:<span class="hljs-literal">true</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-setting&quot;</span>, <span class="hljs-string">&quot;children&quot;</span>:[
            {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5B9E\u9A8C\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">10201</span>},
            {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u666E\u901A\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">10202</span>}
          ]},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;3\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">103</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E8C\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">2</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-setting&quot;</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">201</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">202</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E09\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">3</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-setting&quot;</span>, <span class="hljs-string">&quot;expand&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">301</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">302</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;3\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">303</span>}
        ]}
      ],
      <span class="hljs-attr">selectedNode</span>: <span class="hljs-literal">null</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    onNodeExpand (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onNodeExpand&#39;</span>, detail)
    },
    onNodeClick (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onNodeClick&#39;</span>, detail)
      <span class="hljs-keyword">if</span> (!detail.node.children) {
        <span class="hljs-built_in">this</span>.selectedNode = detail.node
      }
    },
    onEvent (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onEvent&#39;</span>, detail)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),z=[Y];function A(s,t,o,e,p,n){const a=u("vdpv_0");return i(),r("div",M,[B,D,l("div",I,[l("div",V,[l("div",R,[d(a)]),l("div",{style:m({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[l("div",S,z,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[0]||(t[0]=T=>s.toggleCode(0))},b(s.vdpv_0Height>0?"hidden":"show"),1)])])])}var G=c(H,[["render",A]]);export{G as default};
