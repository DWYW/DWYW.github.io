import{_ as h,r as c,o as i,c as $,d,w as x,j as p,F as y,e as j,b as s,t as g,f as N,g as m,h as w,i as D,n as b,k}from"./index.edffa581.js";const I={data(){return{data:[{label:"\u4E00\u5E74\u7EA7",value:1,expand:!0,children:[{label:"1\u73ED",value:101,checked:!0},{label:"2\u73ED",value:102,disabled:!0,children:[{label:"\u5B9E\u9A8C\u73ED",value:10201},{label:"\u666E\u901A\u73ED",value:10202}]},{label:"3\u73ED",value:103}]},{label:"\u4E8C\u5E74\u7EA7",value:2,expand:!0,children:[{label:"1\u73ED",value:201},{label:"2\u73ED",value:202}]},{label:"\u4E09\u5E74\u7EA7",value:3,expand:!0,children:[{label:"1\u73ED",value:301},{label:"2\u73ED",value:302},{label:"3\u73ED",value:303}]}]}},methods:{onChecked(a){console.log("onChecked",a)},onNodeExpand(a){console.log("onNodeExpand",a)},onNodeClick(a){console.log("onNodeClick",a)},change(){this.data=[{label:"\u4E00\u5E74\u7EA7",value:1,expand:!0,children:[{label:"1\u73ED",value:101,checked:!0}]},{label:"\u4E09\u5E74\u7EA7",value:3,expand:!1,children:[{label:"1\u73ED",value:301}]}]},getTreeData(){console.log("tree data",this.$refs.tree.getTreeData())},getCheckedNodes(){console.log("slected nodes",this.$refs.tree.getCheckedNodes())}}};function T(a,n,u,o,e,t){const l=c("YuumiTree"),r=c("YuumiButton");return i(),$(y,null,[d(l,{ref:"tree",data:e.data,onChecked:t.onChecked,onNodeExpand:t.onNodeExpand,onNodeClick:t.onNodeClick},null,8,["data","onChecked","onNodeExpand","onNodeClick"]),d(r,{style:{"margin-right":"10px"},onClick:t.change},{default:x(()=>[p(" \u5207\u6362\u6570\u636E ")]),_:1},8,["onClick"]),d(r,{style:{"margin-right":"10px"},onClick:t.getTreeData},{default:x(()=>[p(" \u83B7\u53D6\u6570\u578B\u6570\u636E ")]),_:1},8,["onClick"]),d(r,{style:{"margin-right":"10px"},onClick:t.getCheckedNodes},{default:x(()=>[p(" \u83B7\u53D6\u9009\u4E2D\u7684\u8282\u70B9 ")]),_:1},8,["onClick"])],64)}var Y=h(I,[["render",T]]);const H={components:{ImportDemo:Y}};function E(a,n,u,o,e,t){const l=c("ImportDemo");return i(),j(l)}var B=h(H,[["render",E]]);const R={data(){return{data:[]}},mounted(){this.data=this.createChildren("")},methods:{createChildren(a){const n=Math.floor(5*Math.random()),u=[];for(let o=0;o<=n;o++){const e=a?`${a}-${o}`:`${o}`;u.push({label:e,value:e})}return u},loadData(a){return new Promise(n=>{setTimeout(()=>{Math.random()>.5?n(this.createChildren(a.nodeLabel)):n(null)},400)})},onChecked(a){console.log("onChecked",a)},onNodeExpand(a){console.log("onNodeExpand",a)},onNodeClick(a){console.log("onNodeClick",a)}}};function M(a,n,u,o,e,t){const l=c("YuumiTree");return i(),j(l,{data:e.data,"load-data":t.loadData,onChecked:t.onChecked,onNodeExpand:t.onNodeExpand,onNodeClick:t.onNodeClick},null,8,["data","load-data","onChecked","onNodeExpand","onNodeClick"])}var A=h(R,[["render",M]]);const P={components:{ImportDemo:A}};function V(a,n,u,o,e,t){const l=c("ImportDemo");return i(),j(l)}var S=h(P,[["render",V]]);const F={data(){return{data:[{label:"\u4E00\u5E74\u7EA7",value:1,children:[{label:"1\u73ED",value:101,checked:!0},{label:"2\u73ED",value:102,disabled:!0,children:[{label:"\u5B9E\u9A8C\u73ED",value:10201},{label:"\u666E\u901A\u73ED",value:10202}]},{label:"3\u73ED",value:103}]},{label:"\u4E8C\u5E74\u7EA7",value:2,children:[{label:"1\u73ED",value:201},{label:"2\u73ED",value:202}]},{label:"\u4E09\u5E74\u7EA7",value:3,expand:!0,children:[{label:"1\u73ED",value:301},{label:"2\u73ED",value:302},{label:"3\u73ED",value:303}]}]}}};function L(a,n,u,o,e,t){const l=c("YuumiTree");return i(),j(l,{data:e.data,checkable:!1},null,8,["data"])}var z=h(F,[["render",L]]);const G={components:{ImportDemo:z}};function J(a,n,u,o,e,t){const l=c("ImportDemo");return i(),j(l)}var K=h(G,[["render",J]]);const O={data(){return{data:[{label:"\u4E00\u5E74\u7EA7",value:1,children:[{label:"1\u73ED",value:101,checked:!0},{label:"2\u73ED",value:102,disabled:!0,children:[{label:"\u5B9E\u9A8C\u73ED",value:10201},{label:"\u666E\u901A\u73ED",value:10202}]},{label:"3\u73ED",value:103}]},{label:"\u4E8C\u5E74\u7EA7",value:2,children:[{label:"1\u73ED",value:201},{label:"2\u73ED",value:202}]},{label:"\u4E09\u5E74\u7EA7",value:3,expand:!0,children:[{label:"1\u73ED",value:301},{label:"2\u73ED",value:302},{label:"3\u73ED",value:303}]}]}}};function Q(a,n,u,o,e,t){const l=c("YuumiTree");return i(),j(l,{data:e.data,"expand-icon-visible":!1},null,8,["data"])}var U=h(O,[["render",Q]]);const W={components:{ImportDemo:U}};function X(a,n,u,o,e,t){const l=c("ImportDemo");return i(),j(l)}var Z=h(W,[["render",X]]);const ss={data(){return{data:[{icon:"line-calendar",label:"2021-12-11",value:"2021-12-11",children:[{icon:"line-clock",label:"06:00",value:"2021-12-11 06:00:00"},{icon:"line-clock",label:"08:00",value:"2021-12-11 08:00:00"},{icon:"line-clock",label:"10:00",value:"2021-12-11 10:00:00"}]},{icon:"line-calendar",label:"2021-12-12",value:"2021-12-12",children:[{icon:"line-clock",label:"06:00",value:"2021-12-12 06:00:00"},{icon:"line-clock",label:"08:00",value:"2021-12-12 08:00:00"},{icon:"line-clock",label:"10:00",value:"2021-12-12 10:00:00"}]}]}}};function as(a,n,u,o,e,t){const l=c("YuumiIcon"),r=c("YuumiTree");return i(),j(r,{data:e.data,checkable:!1},{default:x(({node:q})=>[d(l,{icon:q.icon},null,8,["icon"]),s("span",null,g(q.label),1)]),_:1},8,["data"])}var ns=h(ss,[["render",as]]);const ls={components:{ImportDemo:ns}};function ts(a,n,u,o,e,t){const l=c("ImportDemo");return i(),j(l)}var es=h(ls,[["render",ts]]);const C=N({components:{vdpv_0:B,vdpv_1:S,vdpv_2:K,vdpv_3:Z,vdpv_4:es},setup(a){const n=m(),u=m(),o=m(),e=m(),t=m(),l=[n,u,o,e,t],r=w({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return{toggleCode:v=>{const _="vdpv_"+v;r[_+"Height"]===0?r[_+"Height"]=(l[v].value?l[v].value.offsetHeight:0)||0:r[_+"Height"]=0},...D(r),vdpv_0Ref:n,vdpv_1Ref:u,vdpv_2Ref:o,vdpv_3Ref:e,vdpv_4Ref:t}}});C.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u5F02\u6B65\u52A0\u8F7D",anchor:"\u5F02\u6B65\u52A0\u8F7D",level:3},{content:"\u4E0D\u663E\u793Acheckbox",anchor:"\u4E0D\u663E\u793Acheckbox",level:3},{content:"\u4E0D\u663E\u793AexpandIcon",anchor:"\u4E0D\u663E\u793Aexpandicon",level:3},{content:"\u81EA\u5B9A\u4E49TreeNode",anchor:"\u81EA\u5B9A\u4E49treenode",level:3}]};const ps=C,os={class:"vuedoc"},cs=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),p(" \u57FA\u672C\u7528\u6CD5")],-1),us=s("pre",{style:{display:"none"}},null,-1),rs={class:"vuedoc-demo"},hs={class:"vuedoc-demo__inner"},is={class:"vuedoc-demo__preview"},ds={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},js=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tree&quot;</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
    @<span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;onChecked&quot;</span>
    @<span class="hljs-attr">node-expand</span>=<span class="hljs-string">&quot;onNodeExpand&quot;</span>
    @<span class="hljs-attr">node-click</span>=<span class="hljs-string">&quot;onNodeClick&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 10px;&quot;</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;change&quot;</span>
  &gt;</span>
    \u5207\u6362\u6570\u636E
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 10px;&quot;</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getTreeData&quot;</span>
  &gt;</span>
    \u83B7\u53D6\u6570\u578B\u6570\u636E
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 10px;&quot;</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getCheckedNodes&quot;</span>
  &gt;</span>
    \u83B7\u53D6\u9009\u4E2D\u7684\u8282\u70B9
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">data</span>: [
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E00\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">1</span>, <span class="hljs-string">&quot;expand&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">101</span>, <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">102</span>,<span class="hljs-string">&quot;disabled&quot;</span>:<span class="hljs-literal">true</span>,<span class="hljs-string">&quot;children&quot;</span>:[
            {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5B9E\u9A8C\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">10201</span>},
            {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u666E\u901A\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">10202</span>}
          ]},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;3\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">103</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E8C\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">2</span>, <span class="hljs-string">&quot;expand&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">201</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">202</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E09\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">3</span>, <span class="hljs-string">&quot;expand&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">301</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">302</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;3\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">303</span>}
        ]}
      ]
    }
  },
  <span class="hljs-attr">methods</span>: {
    onChecked (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onChecked&#39;</span>, detail)
    },
    onNodeExpand (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onNodeExpand&#39;</span>, detail)
    },
    onNodeClick (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onNodeClick&#39;</span>, detail)
    },
    change () {
      <span class="hljs-built_in">this</span>.data = [
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E00\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">1</span>, <span class="hljs-string">&quot;expand&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">101</span>, <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E09\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">3</span>, <span class="hljs-string">&quot;expand&quot;</span>: <span class="hljs-literal">false</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">301</span>}
        ]}
      ]
    },
    getTreeData () {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;tree data&quot;</span>, <span class="hljs-built_in">this</span>.$refs.tree.getTreeData())
    },
    <span class="hljs-function"><span class="hljs-title">getCheckedNodes</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;slected nodes&quot;</span>, <span class="hljs-built_in">this</span>.$refs.tree.getCheckedNodes())
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),gs=[js],qs=s("h3",{id:"\u5F02\u6B65\u52A0\u8F7D","data-source-line":"6"},[s("a",{class:"markdownIt-Anchor",href:"#\u5F02\u6B65\u52A0\u8F7D"},"#"),p(" \u5F02\u6B65\u52A0\u8F7D")],-1),vs=s("p",{"data-source-line":"8"},[p("\u8BBE\u7F6E "),s("code",null,"load-data"),p(" \u8FD4\u56DE "),s("code",null,"Promise<node[]>"),p("\u3002")],-1),_s=s("pre",{style:{display:"none"}},null,-1),ms={class:"vuedoc-demo"},bs={class:"vuedoc-demo__inner"},ks={class:"vuedoc-demo__preview"},fs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},xs=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
    <span class="hljs-attr">:load-data</span>=<span class="hljs-string">&quot;loadData&quot;</span>
    @<span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;onChecked&quot;</span>
    @<span class="hljs-attr">node-expand</span>=<span class="hljs-string">&quot;onNodeExpand&quot;</span>
    @<span class="hljs-attr">node-click</span>=<span class="hljs-string">&quot;onNodeClick&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">data</span>: []
    }
  },
  mounted () {
    <span class="hljs-built_in">this</span>.data = <span class="hljs-built_in">this</span>.createChildren(<span class="hljs-string">&#39;&#39;</span>)
  },
  <span class="hljs-attr">methods</span>: {
    createChildren (labelPrefix) {
      <span class="hljs-keyword">const</span> max = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-number">5</span> * <span class="hljs-built_in">Math</span>.random())
      <span class="hljs-keyword">const</span> children = []

      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt;= max; i++) {
        <span class="hljs-keyword">const</span> _value = labelPrefix ? <span class="hljs-string">\`<span class="hljs-subst">\${labelPrefix}</span>-<span class="hljs-subst">\${i}</span>\`</span> : <span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>
        children.push({
          <span class="hljs-attr">label</span>: _value,
          <span class="hljs-attr">value</span>: _value
        })
      }

      <span class="hljs-keyword">return</span> children
    },
    loadData (vm) {
      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-built_in">Math</span>.random() &gt; <span class="hljs-number">0.5</span> ? resolve(<span class="hljs-built_in">this</span>.createChildren(vm.nodeLabel)) : resolve(<span class="hljs-literal">null</span>)
        }, <span class="hljs-number">400</span>)
      })
    },
    onChecked (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onChecked&#39;</span>, detail)
    },
    onNodeExpand (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onNodeExpand&#39;</span>, detail)
    },
    onNodeClick (detail) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;onNodeClick&#39;</span>, detail)
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),$s=[xs],Cs=s("h3",{id:"\u4E0D\u663E\u793Acheckbox","data-source-line":"13"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E0D\u663E\u793Acheckbox"},"#"),p(" \u4E0D\u663E\u793Acheckbox")],-1),ys=s("p",{"data-source-line":"15"},[p("\u5C06 "),s("code",null,"checkable"),p(" \u8BBE\u7F6E\u4E3A "),s("code",null,"false"),p(", \u9ED8\u8BA4\u4E3A "),s("code",null,"true"),p(" \u3002")],-1),Ns=s("pre",{style:{display:"none"}},null,-1),ws={class:"vuedoc-demo"},Ds={class:"vuedoc-demo__inner"},Is={class:"vuedoc-demo__preview"},Ts={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ys=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
    <span class="hljs-attr">:checkable</span>=<span class="hljs-string">&quot;false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">data</span>: [
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E00\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">1</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">101</span>, <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">102</span>,<span class="hljs-string">&quot;disabled&quot;</span>:<span class="hljs-literal">true</span>,<span class="hljs-string">&quot;children&quot;</span>:[
            {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5B9E\u9A8C\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">10201</span>},
            {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u666E\u901A\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">10202</span>}
          ]},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;3\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">103</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E8C\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">2</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">201</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">202</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E09\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">3</span>, <span class="hljs-string">&quot;expand&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">301</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">302</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;3\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">303</span>}
        ]}
      ]
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Hs=[Ys],Es=s("h3",{id:"\u4E0D\u663E\u793Aexpandicon","data-source-line":"20"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E0D\u663E\u793Aexpandicon"},"#"),p(" \u4E0D\u663E\u793AexpandIcon")],-1),Bs=s("p",{"data-source-line":"22"},[p("\u5C06 "),s("code",null,"expandIconVisible"),p(" \u8BBE\u7F6E\u4E3A "),s("code",null,"false"),p(", \u9ED8\u8BA4\u4E3A "),s("code",null,"true"),p(" \u3002")],-1),Rs=s("pre",{style:{display:"none"}},null,-1),Ms={class:"vuedoc-demo"},As={class:"vuedoc-demo__inner"},Ps={class:"vuedoc-demo__preview"},Vs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ss=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
    <span class="hljs-attr">:expand-icon-visible</span>=<span class="hljs-string">&quot;false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">data</span>: [
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E00\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">1</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">101</span>, <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">102</span>,<span class="hljs-string">&quot;disabled&quot;</span>:<span class="hljs-literal">true</span>,<span class="hljs-string">&quot;children&quot;</span>:[
            {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5B9E\u9A8C\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">10201</span>},
            {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u666E\u901A\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">10202</span>}
          ]},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;3\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">103</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E8C\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">2</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">201</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">202</span>}
        ]},
        {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E09\u5E74\u7EA7&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">3</span>, <span class="hljs-string">&quot;expand&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;children&quot;</span>:[
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;1\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">301</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;2\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">302</span>},
          {<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;3\u73ED&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-number">303</span>}
        ]}
      ]
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Fs=[Ss],Ls=s("h3",{id:"\u81EA\u5B9A\u4E49treenode","data-source-line":"27"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49treenode"},"#"),p(" \u81EA\u5B9A\u4E49TreeNode")],-1),zs=s("pre",{style:{display:"none"}},null,-1),Gs={class:"vuedoc-demo"},Js={class:"vuedoc-demo__inner"},Ks={class:"vuedoc-demo__preview"},Os={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Qs=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
    <span class="hljs-attr">:checkable</span>=<span class="hljs-string">&quot;false&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;{ node }&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">:icon</span>=<span class="hljs-string">&quot;node.icon&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ node.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTree</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">data</span>: [
        { <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-calendar&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;2021-12-11&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2021-12-11&#39;</span>, <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-clock&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;06:00&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2021-12-11 06:00:00&#39;</span> },
          { <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-clock&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;08:00&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2021-12-11 08:00:00&#39;</span> },
          { <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-clock&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;10:00&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2021-12-11 10:00:00&#39;</span> }
        ]},
        { <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-calendar&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;2021-12-12&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2021-12-12&#39;</span>, <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-clock&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;06:00&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2021-12-12 06:00:00&#39;</span> },
          { <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-clock&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;08:00&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2021-12-12 08:00:00&#39;</span> },
          { <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;line-clock&quot;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;10:00&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2021-12-12 10:00:00&#39;</span> }
        ]}
      ]
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Us=[Qs];function Ws(a,n,u,o,e,t){const l=c("vdpv_0"),r=c("vdpv_1"),q=c("vdpv_2"),v=c("vdpv_3"),_=c("vdpv_4");return i(),$("div",os,[cs,us,s("div",rs,[s("div",hs,[s("div",is,[d(l)]),s("div",{style:b({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ds,gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=f=>a.toggleCode(0))},g(a.vdpv_0Height>0?"hidden":"show"),1)])]),qs,vs,_s,s("div",ms,[s("div",bs,[s("div",ks,[d(r)]),s("div",{style:b({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",fs,$s,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=f=>a.toggleCode(1))},g(a.vdpv_1Height>0?"hidden":"show"),1)])]),Cs,ys,Ns,s("div",ws,[s("div",Ds,[s("div",Is,[d(q)]),s("div",{style:b({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ts,Hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=f=>a.toggleCode(2))},g(a.vdpv_2Height>0?"hidden":"show"),1)])]),Es,Bs,Rs,s("div",Ms,[s("div",As,[s("div",Ps,[d(v)]),s("div",{style:b({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Vs,Fs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[3]||(n[3]=f=>a.toggleCode(3))},g(a.vdpv_3Height>0?"hidden":"show"),1)])]),Ls,zs,s("div",Gs,[s("div",Js,[s("div",Ks,[d(_)]),s("div",{style:b({height:a.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Os,Us,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[4]||(n[4]=f=>a.toggleCode(4))},g(a.vdpv_4Height>0?"hidden":"show"),1)])])])}var Zs=h(ps,[["render",Ws]]);export{Zs as default};
