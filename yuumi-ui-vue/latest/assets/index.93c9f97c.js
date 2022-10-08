import{_ as h,r as c,o as r,e as i,w as C,c as $,d as q,u as w,l as y,b as s,t as v,f as N,g as m,h as I,i as Y,n as b,j as u,k}from"./index.eb4fdf2c.js";const T={data(){return{data:[{label:"\u4E00\u5E74\u7EA7",value:1,children:[{label:"1\u73ED",value:101,checked:!0},{label:"2\u73ED",value:102,disabled:!0,children:[{label:"\u5B9E\u9A8C\u73ED",value:10201},{label:"\u666E\u901A\u73ED",value:10202}]},{label:"3\u73ED",value:103}]},{label:"\u4E8C\u5E74\u7EA7",value:2,children:[{label:"1\u73ED",value:201},{label:"2\u73ED",value:202}]},{label:"\u4E09\u5E74\u7EA7",value:3,expand:!0,children:[{label:"1\u73ED",value:301},{label:"2\u73ED",value:302},{label:"3\u73ED",value:303}]}]}},methods:{onChecked(a){console.log("onChecked",a)},onNodeExpand(a){console.log("onNodeExpand",a)},onNodeClick(a){console.log("onNodeClick",a)}}};function D(a,n,o,p,t,e){const l=c("YuumiTree");return r(),i(l,{data:t.data,onChecked:e.onChecked,onNodeExpand:e.onNodeExpand,onNodeClick:e.onNodeClick},null,8,["data","onChecked","onNodeExpand","onNodeClick"])}var E=h(T,[["render",D]]);const H={components:{ImportDemo:E}};function R(a,n,o,p,t,e){const l=c("ImportDemo");return r(),i(l)}var M=h(H,[["render",R]]);const V={data(){return{data:[]}},mounted(){this.data=this.createChildren("")},methods:{createChildren(a){const n=Math.floor(5*Math.random()),o=[];for(let p=0;p<=n;p++){const t=a?`${a}-${p}`:`${p}`;o.push({label:t,value:t})}return o},loadData(a){return new Promise(n=>{setTimeout(()=>{Math.random()>.5?n(this.createChildren(a.nodeLabel)):n(null)},400)})},onChecked(a){console.log("onChecked",a)},onNodeExpand(a){console.log("onNodeExpand",a)},onNodeClick(a){console.log("onNodeClick",a)}}};function A(a,n,o,p,t,e){const l=c("YuumiTree");return r(),i(l,{data:t.data,"load-data":e.loadData,onChecked:e.onChecked,onNodeExpand:e.onNodeExpand,onNodeClick:e.onNodeClick},null,8,["data","load-data","onChecked","onNodeExpand","onNodeClick"])}var P=h(V,[["render",A]]);const B={components:{ImportDemo:P}};function S(a,n,o,p,t,e){const l=c("ImportDemo");return r(),i(l)}var z=h(B,[["render",S]]);const L={data(){return{data:[{label:"\u4E00\u5E74\u7EA7",value:1,children:[{label:"1\u73ED",value:101,checked:!0},{label:"2\u73ED",value:102,disabled:!0,children:[{label:"\u5B9E\u9A8C\u73ED",value:10201},{label:"\u666E\u901A\u73ED",value:10202}]},{label:"3\u73ED",value:103}]},{label:"\u4E8C\u5E74\u7EA7",value:2,children:[{label:"1\u73ED",value:201},{label:"2\u73ED",value:202}]},{label:"\u4E09\u5E74\u7EA7",value:3,expand:!0,children:[{label:"1\u73ED",value:301},{label:"2\u73ED",value:302},{label:"3\u73ED",value:303}]}]}}};function F(a,n,o,p,t,e){const l=c("YuumiTree");return r(),i(l,{data:t.data,checkable:!1},null,8,["data"])}var G=h(L,[["render",F]]);const J={components:{ImportDemo:G}};function K(a,n,o,p,t,e){const l=c("ImportDemo");return r(),i(l)}var O=h(J,[["render",K]]);const Q={data(){return{data:[{label:"\u4E00\u5E74\u7EA7",value:1,children:[{label:"1\u73ED",value:101,checked:!0},{label:"2\u73ED",value:102,disabled:!0,children:[{label:"\u5B9E\u9A8C\u73ED",value:10201},{label:"\u666E\u901A\u73ED",value:10202}]},{label:"3\u73ED",value:103}]},{label:"\u4E8C\u5E74\u7EA7",value:2,children:[{label:"1\u73ED",value:201},{label:"2\u73ED",value:202}]},{label:"\u4E09\u5E74\u7EA7",value:3,expand:!0,children:[{label:"1\u73ED",value:301},{label:"2\u73ED",value:302},{label:"3\u73ED",value:303}]}]}}};function U(a,n,o,p,t,e){const l=c("YuumiTree");return r(),i(l,{data:t.data,"expand-icon-visible":!1},null,8,["data"])}var W=h(Q,[["render",U]]);const X={components:{ImportDemo:W}};function Z(a,n,o,p,t,e){const l=c("ImportDemo");return r(),i(l)}var ss=h(X,[["render",Z]]);const as={data(){return{data:[{icon:"line-calendar",label:"2021-12-11",value:"2021-12-11",children:[{icon:"line-clock",label:"06:00",value:"2021-12-11 06:00:00"},{icon:"line-clock",label:"08:00",value:"2021-12-11 08:00:00"},{icon:"line-clock",label:"10:00",value:"2021-12-11 10:00:00"}]},{icon:"line-calendar",label:"2021-12-12",value:"2021-12-12",children:[{icon:"line-clock",label:"06:00",value:"2021-12-12 06:00:00"},{icon:"line-clock",label:"08:00",value:"2021-12-12 08:00:00"},{icon:"line-clock",label:"10:00",value:"2021-12-12 10:00:00"}]}]}}};function ns(a,n,o,p,t,e){const l=c("YuumiIcon"),d=c("YuumiTree");return r(),i(d,{data:t.data,checkable:!1},{default:C(({node:j,isExpandChildren:g})=>[j.children&&j.children.length>0?(r(),$("div",{key:0,class:w(["expand-icon",{__active:g}])},[q(l,{icon:"flat-arrow-bottom"})],2)):y("",!0),q(l,{icon:j.icon},null,8,["icon"]),s("div",null,v(j.label),1)]),_:1},8,["data"])}var ls=h(as,[["render",ns]]);const ts={components:{ImportDemo:ls}};function es(a,n,o,p,t,e){const l=c("ImportDemo");return r(),i(l)}var ps=h(ts,[["render",es]]);const x=N({components:{vdpv_0:M,vdpv_1:z,vdpv_2:O,vdpv_3:ss,vdpv_4:ps},setup(a){const n=m(),o=m(),p=m(),t=m(),e=m(),l=[n,o,p,t,e],d=I({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return{toggleCode:g=>{const _="vdpv_"+g;d[_+"Height"]===0?d[_+"Height"]=(l[g].value?l[g].value.offsetHeight:0)||0:d[_+"Height"]=0},...Y(d),vdpv_0Ref:n,vdpv_1Ref:o,vdpv_2Ref:p,vdpv_3Ref:t,vdpv_4Ref:e}}});x.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u5F02\u6B65\u52A0\u8F7D",anchor:"\u5F02\u6B65\u52A0\u8F7D",level:3},{content:"\u4E0D\u663E\u793Acheckbox",anchor:"\u4E0D\u663E\u793Acheckbox",level:3},{content:"\u4E0D\u663E\u793AexpandIcon",anchor:"\u4E0D\u663E\u793Aexpandicon",level:3},{content:"\u81EA\u5B9A\u4E49TreeNode",anchor:"\u81EA\u5B9A\u4E49treenode",level:3}]};const os=x,cs={class:"vuedoc"},us=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),u(" \u57FA\u672C\u7528\u6CD5")],-1),rs=s("pre",{style:{display:"none"}},null,-1),hs={class:"vuedoc-demo"},is={class:"vuedoc-demo__inner"},ds={class:"vuedoc-demo__preview"},js={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},gs=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
    @<span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;onChecked&quot;</span>
    @<span class="hljs-attr">node-expand</span>=<span class="hljs-string">&quot;onNodeExpand&quot;</span>
    @<span class="hljs-attr">node-click</span>=<span class="hljs-string">&quot;onNodeClick&quot;</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTree</span>&gt;</span>
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
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),qs=[gs],vs=s("h3",{id:"\u5F02\u6B65\u52A0\u8F7D","data-source-line":"6"},[s("a",{class:"markdownIt-Anchor",href:"#\u5F02\u6B65\u52A0\u8F7D"},"#"),u(" \u5F02\u6B65\u52A0\u8F7D")],-1),_s=s("p",{"data-source-line":"8"},[u("\u8BBE\u7F6E "),s("code",null,"load-data"),u(" \u8FD4\u56DE "),s("code",null,"Promise<node[]>"),u("\u3002")],-1),ms=s("pre",{style:{display:"none"}},null,-1),bs={class:"vuedoc-demo"},ks={class:"vuedoc-demo__inner"},fs={class:"vuedoc-demo__preview"},$s={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},xs=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
    <span class="hljs-attr">:load-data</span>=<span class="hljs-string">&quot;loadData&quot;</span>
    @<span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;onChecked&quot;</span>
    @<span class="hljs-attr">node-expand</span>=<span class="hljs-string">&quot;onNodeExpand&quot;</span>
    @<span class="hljs-attr">node-click</span>=<span class="hljs-string">&quot;onNodeClick&quot;</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTree</span>&gt;</span>
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
</span></code></pre></div>`,1),Cs=[xs],ws=s("h3",{id:"\u4E0D\u663E\u793Acheckbox","data-source-line":"13"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E0D\u663E\u793Acheckbox"},"#"),u(" \u4E0D\u663E\u793Acheckbox")],-1),ys=s("p",{"data-source-line":"15"},[u("\u5C06 "),s("code",null,"checkable"),u(" \u8BBE\u7F6E\u4E3A "),s("code",null,"false"),u(", \u9ED8\u8BA4\u4E3A "),s("code",null,"true"),u(" \u3002")],-1),Ns=s("pre",{style:{display:"none"}},null,-1),Is={class:"vuedoc-demo"},Ys={class:"vuedoc-demo__inner"},Ts={class:"vuedoc-demo__preview"},Ds={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Es=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:checkable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTree</span>&gt;</span>
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
</span></code></pre></div>`,1),Hs=[Es],Rs=s("h3",{id:"\u4E0D\u663E\u793Aexpandicon","data-source-line":"20"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E0D\u663E\u793Aexpandicon"},"#"),u(" \u4E0D\u663E\u793AexpandIcon")],-1),Ms=s("p",{"data-source-line":"22"},[u("\u5C06 "),s("code",null,"expandIconVisible"),u(" \u8BBE\u7F6E\u4E3A "),s("code",null,"false"),u(", \u9ED8\u8BA4\u4E3A "),s("code",null,"true"),u(" \u3002")],-1),Vs=s("pre",{style:{display:"none"}},null,-1),As={class:"vuedoc-demo"},Ps={class:"vuedoc-demo__inner"},Bs={class:"vuedoc-demo__preview"},Ss={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},zs=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:expand-icon-visible</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTree</span>&gt;</span>
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
</span></code></pre></div>`,1),Ls=[zs],Fs=s("h3",{id:"\u81EA\u5B9A\u4E49treenode","data-source-line":"27"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49treenode"},"#"),u(" \u81EA\u5B9A\u4E49TreeNode")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Js={class:"vuedoc-demo"},Ks={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Qs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Us=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:checkable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;{ node, isExpandChildren }&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;[&#39;expand-icon&#39;, { &#39;__active&#39;: isExpandChildren }]&quot;</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;node.children &amp;&amp; node.children.length &gt; 0&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;flat-arrow-bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">:icon</span>=<span class="hljs-string">&quot;node.icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{node.label}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
</span></code></pre></div>`,1),Ws=[Us];function Xs(a,n,o,p,t,e){const l=c("vdpv_0"),d=c("vdpv_1"),j=c("vdpv_2"),g=c("vdpv_3"),_=c("vdpv_4");return r(),$("div",cs,[us,rs,s("div",hs,[s("div",is,[s("div",ds,[q(l)]),s("div",{style:b({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",js,qs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=f=>a.toggleCode(0))},v(a.vdpv_0Height>0?"hidden":"show"),1)])]),vs,_s,ms,s("div",bs,[s("div",ks,[s("div",fs,[q(d)]),s("div",{style:b({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",$s,Cs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=f=>a.toggleCode(1))},v(a.vdpv_1Height>0?"hidden":"show"),1)])]),ws,ys,Ns,s("div",Is,[s("div",Ys,[s("div",Ts,[q(j)]),s("div",{style:b({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ds,Hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=f=>a.toggleCode(2))},v(a.vdpv_2Height>0?"hidden":"show"),1)])]),Rs,Ms,Vs,s("div",As,[s("div",Ps,[s("div",Bs,[q(g)]),s("div",{style:b({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ss,Ls,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[3]||(n[3]=f=>a.toggleCode(3))},v(a.vdpv_3Height>0?"hidden":"show"),1)])]),Fs,Gs,s("div",Js,[s("div",Ks,[s("div",Os,[q(_)]),s("div",{style:b({height:a.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Qs,Ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[4]||(n[4]=f=>a.toggleCode(4))},v(a.vdpv_4Height>0?"hidden":"show"),1)])])])}var sa=h(os,[["render",Xs]]);export{sa as default};
