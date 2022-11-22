import{_ as v,r as h,o as l,c as p,F as d,a as f,b as s,t as g,d as c,w as m,e as x,f as k,g as w,h as $,i as I,n as Y,j as T,k as z}from"./index.9a20c984.js";const C={data(){return{type:Array(10).fill("line")}},computed:{iconCount(){return this.icons.reduce((e,a)=>e+a.children.length,0)},icons(){return[{name:"\u5E38\u7528\u7C7B",line:["line-add","line-edit","line-loading","line-correct","line-rect-correct","line-circle-correct","line-close","line-setting","line-help","line-info","line-exit","line-delete","line-remove","line-disabled","line-search","line-praise","line-screen","line-order","line-catalog","line-menu","line-menu1","line-share","line-heart"],flat:["flat-add","flat-edit","flat-loading","flat-correct","flat-rect-correct","flat-circle-correct","flat-close","flat-setting","flat-help","flat-info","flat-exit","flat-delete","flat-remove","flat-disabled","flat-search","flat-praise","flat-screen","flat-order","flat-catalog","flat-menu","flat-menu1","flat-share","flat-heart"]},{name:"\u8868\u5355",line:["radio-selected","radio-unselected","checkbox-selected","checkbox-unselected","line-checkbox-indeterminate","line-mobile","line-phone","line-key","line-lock","line-unlock","line-circle","line-circle-dot","line-circle-close","line-rect","line-fold","line-unfold","line-eye","line-eye-close","line-shield-info","line-shield-correct","line-calendar","line-clock","line-mail"],flat:["flat-checkbox-indeterminate","flat-mobile","flat-phone","flat-key","flat-lock","flat-unlock","flat-circle","flat-circle-dot","flat-circle-close","flat-rect","flat-fold","flat-unfold","flat-eye","flat-eye-close","flat-shield-info","flat-shield-correct","flat-calendar","flat-clock","flat-mail"]},{name:"\u65B9\u5411",line:["line-prev","line-next","line-arrow-top","line-arrow-bottom","line-arrow-left","line-arrow-right"],flat:["flat-arrow-top","flat-arrow-bottom","flat-arrow-left","flat-arrow-right"]},{name:"\u6587\u4EF6",line:["line-file","line-file-add","line-file-setting"],flat:["flat-file","flat-file-add","flat-file-setting"]},{name:"\u6587\u4EF6\u5939",line:["line-folder","line-folder-add","line-folder-setting"],flat:["flat-folder","flat-folder-add","flat-folder-setting"]},{name:"\u4EBA\u5458\u7EC4\u7EC7",line:["line-user","line-user-add","line-user-setting","line-user-disabled","line-user-remove","line-users","line-user-order"],flat:["flat-user","flat-user-add","flat-user-setting","flat-user-disabled","flat-user-remove","flat-users","flat-user-order"]},{name:"\u72B6\u6001",line:["line-empty","line-finger"],flat:["flat-empty","flat-finger"]},{name:"\u4EA4\u901A",line:["line-car","line-steering-wheel"],flat:["flat-car","flat-steering-wheel"]},{name:"\u8BC1\u4EF6",line:["line-identity"],flat:["flat-identity"]},{name:"\u5A92\u4F53",line:["line-pause","line-play","line-voice","line-muted","line-fullscreen","line-fullscreen-exit"],flat:["flat-pause","flat-play","flat-voice","flat-muted","flat-fullscreen","flat-fullscreen-exit"]}]}}},V={style:{overflow:"hidden"}},H={class:"group-name",style:{"font-weight":"bold","padding-bottom":"10px"}},B={class:"group-icons"},D={style:{"font-size":"12px"}},N={class:"group-icons"},A={style:{"font-size":"12px"}};function R(e,a,r,o,u,i){const n=h("YuumiIcon"),j=h("YuumiTabItem"),b=h("YuumiTabs");return l(),p("div",V,[(l(!0),p(d,null,f(i.icons,(q,_)=>(l(),p("div",{class:"group-item",key:q.name},[s("div",H,g(q.name),1),c(b,{modelValue:u.type[_],"onUpdate:modelValue":t=>u.type[_]=t},{default:m(()=>[c(j,{label:"\u7EBF\u6027",value:"line"},{default:m(()=>[s("div",B,[(l(!0),p(d,null,f(q.line,t=>(l(),p("div",{style:{display:"inline-block",width:"20%",height:"100px","font-size":"28px","vertical-align":"text-bottom","text-align":"center","font-weight":"bold"},key:t},[c(n,{icon:t},null,8,["icon"]),s("div",D,g(t),1)]))),128))])]),_:2},1024),c(j,{label:"\u6241\u5E73",value:"flat"},{default:m(()=>[s("div",N,[(l(!0),p(d,null,f(q.flat,t=>(l(),p("div",{style:{display:"inline-block",width:"20%",height:"100px","font-size":"28px","vertical-align":"text-bottom","text-align":"center","font-weight":"bold"},key:t},[c(n,{icon:t},null,8,["icon"]),s("div",A,g(t),1)]))),128))])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])}var S=v(C,[["render",R]]);const F={components:{ImportDemo:S}};function U(e,a,r,o,u,i){const n=h("ImportDemo");return l(),x(n)}var E=v(F,[["render",U]]);const y=k({components:{vdpv_0:E},setup(e){const a=w(),r=[a],o=$({vdpv_0Height:0});return{toggleCode:i=>{const n="vdpv_"+i;o[n+"Height"]===0?o[n+"Height"]=(r[i].value?r[i].value.offsetHeight:0)||0:o[n+"Height"]=0},...I(o),vdpv_0Ref:a}}});y.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3}]};const L=y,G={class:"vuedoc"},J=s("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[s("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),T(" \u57FA\u672C\u7528\u6CD5")],-1),K=s("pre",{style:{display:"none"}},null,-1),M={class:"vuedoc-demo"},O={class:"vuedoc-demo__inner"},P={class:"vuedoc-demo__preview"},Q={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},W=z(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;overflow: hidden;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;group,index in icons&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;group.name&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-name&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-weight: bold; padding-bottom: 10px;&quot;</span>&gt;</span>{{group.name}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;type[index]&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7EBF\u6027&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;line&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-icons&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: inline-block; width: 20%; height: 100px; font-size: 28px; vertical-align: text-bottom; text-align: center; font-weight: bold;&quot;</span>
          <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;icon in group.line&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;icon&quot;</span>
          &gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">:icon</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 12px;&quot;</span>&gt;</span>{{icon}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTabItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6241\u5E73&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;flat&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;group-icons&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: inline-block; width: 20%; height: 100px; font-size: 28px; vertical-align: text-bottom; text-align: center; font-weight: bold;&quot;</span>
          <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;icon in group.flat&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;icon&quot;</span>
          &gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span> <span class="hljs-attr">:icon</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">YuumiIcon</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 12px;&quot;</span>&gt;</span>{{icon}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">type</span>: <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>).fill(<span class="hljs-string">&#39;line&#39;</span>)
    }
  },
  <span class="hljs-attr">computed</span>: {
    iconCount () {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.icons.reduce(<span class="hljs-function">(<span class="hljs-params">acc, item</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> acc + item.children.length
        }, <span class="hljs-number">0</span>)
    },
    icons () {
      <span class="hljs-keyword">return</span> [{
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5E38\u7528\u7C7B&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-add&quot;</span>,
          <span class="hljs-string">&quot;line-edit&quot;</span>,
          <span class="hljs-string">&quot;line-loading&quot;</span>,
          <span class="hljs-string">&quot;line-correct&quot;</span>,
          <span class="hljs-string">&quot;line-rect-correct&quot;</span>,
          <span class="hljs-string">&quot;line-circle-correct&quot;</span>,
          <span class="hljs-string">&quot;line-close&quot;</span>,
          <span class="hljs-string">&quot;line-setting&quot;</span>,
          <span class="hljs-string">&quot;line-help&quot;</span>,
          <span class="hljs-string">&quot;line-info&quot;</span>,
          <span class="hljs-string">&quot;line-exit&quot;</span>,
          <span class="hljs-string">&quot;line-delete&quot;</span>,
          <span class="hljs-string">&quot;line-remove&quot;</span>,
          <span class="hljs-string">&quot;line-disabled&quot;</span>,
          <span class="hljs-string">&quot;line-search&quot;</span>,
          <span class="hljs-string">&quot;line-praise&quot;</span>,
          <span class="hljs-string">&quot;line-screen&quot;</span>,
          <span class="hljs-string">&quot;line-order&quot;</span>,
          <span class="hljs-string">&quot;line-catalog&quot;</span>,
          <span class="hljs-string">&quot;line-menu&quot;</span>,
          <span class="hljs-string">&quot;line-menu1&quot;</span>,
          <span class="hljs-string">&quot;line-share&quot;</span>,
          <span class="hljs-string">&quot;line-heart&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-add&quot;</span>,
          <span class="hljs-string">&quot;flat-edit&quot;</span>,
          <span class="hljs-string">&quot;flat-loading&quot;</span>,
          <span class="hljs-string">&quot;flat-correct&quot;</span>,
          <span class="hljs-string">&quot;flat-rect-correct&quot;</span>,
          <span class="hljs-string">&quot;flat-circle-correct&quot;</span>,
          <span class="hljs-string">&quot;flat-close&quot;</span>,
          <span class="hljs-string">&quot;flat-setting&quot;</span>,
          <span class="hljs-string">&quot;flat-help&quot;</span>,
          <span class="hljs-string">&quot;flat-info&quot;</span>,
          <span class="hljs-string">&quot;flat-exit&quot;</span>,
          <span class="hljs-string">&quot;flat-delete&quot;</span>,
          <span class="hljs-string">&quot;flat-remove&quot;</span>,
          <span class="hljs-string">&quot;flat-disabled&quot;</span>,
          <span class="hljs-string">&quot;flat-search&quot;</span>,
          <span class="hljs-string">&quot;flat-praise&quot;</span>,
          <span class="hljs-string">&quot;flat-screen&quot;</span>,
          <span class="hljs-string">&quot;flat-order&quot;</span>,
          <span class="hljs-string">&quot;flat-catalog&quot;</span>,
          <span class="hljs-string">&quot;flat-menu&quot;</span>,
          <span class="hljs-string">&quot;flat-menu1&quot;</span>,
          <span class="hljs-string">&quot;flat-share&quot;</span>,
          <span class="hljs-string">&quot;flat-heart&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u8868\u5355&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;radio-selected&quot;</span>,
          <span class="hljs-string">&quot;radio-unselected&quot;</span>,
          <span class="hljs-string">&quot;checkbox-selected&quot;</span>,
          <span class="hljs-string">&quot;checkbox-unselected&quot;</span>,
          <span class="hljs-string">&quot;line-checkbox-indeterminate&quot;</span>,
          <span class="hljs-string">&quot;line-mobile&quot;</span>,
          <span class="hljs-string">&quot;line-phone&quot;</span>,
          <span class="hljs-string">&quot;line-key&quot;</span>,
          <span class="hljs-string">&quot;line-lock&quot;</span>,
          <span class="hljs-string">&quot;line-unlock&quot;</span>,
          <span class="hljs-string">&quot;line-circle&quot;</span>,
          <span class="hljs-string">&quot;line-circle-dot&quot;</span>,
          <span class="hljs-string">&quot;line-circle-close&quot;</span>,
          <span class="hljs-string">&quot;line-rect&quot;</span>,
          <span class="hljs-string">&quot;line-fold&quot;</span>,
          <span class="hljs-string">&quot;line-unfold&quot;</span>,
          <span class="hljs-string">&quot;line-eye&quot;</span>,
          <span class="hljs-string">&quot;line-eye-close&quot;</span>,
          <span class="hljs-string">&quot;line-shield-info&quot;</span>,
          <span class="hljs-string">&quot;line-shield-correct&quot;</span>,
          <span class="hljs-string">&quot;line-calendar&quot;</span>,
          <span class="hljs-string">&quot;line-clock&quot;</span>,
          <span class="hljs-string">&quot;line-mail&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-checkbox-indeterminate&quot;</span>,
          <span class="hljs-string">&quot;flat-mobile&quot;</span>,
          <span class="hljs-string">&quot;flat-phone&quot;</span>,
          <span class="hljs-string">&quot;flat-key&quot;</span>,
          <span class="hljs-string">&quot;flat-lock&quot;</span>,
          <span class="hljs-string">&quot;flat-unlock&quot;</span>,
          <span class="hljs-string">&quot;flat-circle&quot;</span>,
          <span class="hljs-string">&quot;flat-circle-dot&quot;</span>,
          <span class="hljs-string">&quot;flat-circle-close&quot;</span>,
          <span class="hljs-string">&quot;flat-rect&quot;</span>,
          <span class="hljs-string">&quot;flat-fold&quot;</span>,
          <span class="hljs-string">&quot;flat-unfold&quot;</span>,
          <span class="hljs-string">&quot;flat-eye&quot;</span>,
          <span class="hljs-string">&quot;flat-eye-close&quot;</span>,
          <span class="hljs-string">&quot;flat-shield-info&quot;</span>,
          <span class="hljs-string">&quot;flat-shield-correct&quot;</span>,
          <span class="hljs-string">&quot;flat-calendar&quot;</span>,
          <span class="hljs-string">&quot;flat-clock&quot;</span>,
          <span class="hljs-string">&quot;flat-mail&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u65B9\u5411&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-prev&quot;</span>,
          <span class="hljs-string">&quot;line-next&quot;</span>,
          <span class="hljs-string">&quot;line-arrow-top&quot;</span>,
          <span class="hljs-string">&quot;line-arrow-bottom&quot;</span>,
          <span class="hljs-string">&quot;line-arrow-left&quot;</span>,
          <span class="hljs-string">&quot;line-arrow-right&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-arrow-top&quot;</span>,
          <span class="hljs-string">&quot;flat-arrow-bottom&quot;</span>,
          <span class="hljs-string">&quot;flat-arrow-left&quot;</span>,
          <span class="hljs-string">&quot;flat-arrow-right&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u6587\u4EF6&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-file&quot;</span>,
          <span class="hljs-string">&quot;line-file-add&quot;</span>,
          <span class="hljs-string">&quot;line-file-setting&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-file&quot;</span>,
          <span class="hljs-string">&quot;flat-file-add&quot;</span>,
          <span class="hljs-string">&quot;flat-file-setting&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u6587\u4EF6\u5939&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-folder&quot;</span>,
          <span class="hljs-string">&quot;line-folder-add&quot;</span>,
          <span class="hljs-string">&quot;line-folder-setting&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-folder&quot;</span>,
          <span class="hljs-string">&quot;flat-folder-add&quot;</span>,
          <span class="hljs-string">&quot;flat-folder-setting&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u4EBA\u5458\u7EC4\u7EC7&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-user&quot;</span>,
          <span class="hljs-string">&quot;line-user-add&quot;</span>,
          <span class="hljs-string">&quot;line-user-setting&quot;</span>,
          <span class="hljs-string">&quot;line-user-disabled&quot;</span>,
          <span class="hljs-string">&quot;line-user-remove&quot;</span>,
          <span class="hljs-string">&quot;line-users&quot;</span>,
          <span class="hljs-string">&quot;line-user-order&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-user&quot;</span>,
          <span class="hljs-string">&quot;flat-user-add&quot;</span>,
          <span class="hljs-string">&quot;flat-user-setting&quot;</span>,
          <span class="hljs-string">&quot;flat-user-disabled&quot;</span>,
          <span class="hljs-string">&quot;flat-user-remove&quot;</span>,
          <span class="hljs-string">&quot;flat-users&quot;</span>,
          <span class="hljs-string">&quot;flat-user-order&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u72B6\u6001&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-empty&quot;</span>,
          <span class="hljs-string">&quot;line-finger&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-empty&quot;</span>,
          <span class="hljs-string">&quot;flat-finger&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u4EA4\u901A&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-car&quot;</span>,
          <span class="hljs-string">&quot;line-steering-wheel&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-car&quot;</span>,
          <span class="hljs-string">&quot;flat-steering-wheel&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u8BC1\u4EF6&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-identity&quot;</span>,
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-identity&quot;</span>
        ]
      }, {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5A92\u4F53&quot;</span>,
        <span class="hljs-attr">line</span>: [
          <span class="hljs-string">&quot;line-pause&quot;</span>,
          <span class="hljs-string">&quot;line-play&quot;</span>,
          <span class="hljs-string">&quot;line-voice&quot;</span>,
          <span class="hljs-string">&quot;line-muted&quot;</span>,
          <span class="hljs-string">&quot;line-fullscreen&quot;</span>,
          <span class="hljs-string">&quot;line-fullscreen-exit&quot;</span>
        ],
        <span class="hljs-attr">flat</span>: [
          <span class="hljs-string">&quot;flat-pause&quot;</span>,
          <span class="hljs-string">&quot;flat-play&quot;</span>,
          <span class="hljs-string">&quot;flat-voice&quot;</span>,
          <span class="hljs-string">&quot;flat-muted&quot;</span>,
          <span class="hljs-string">&quot;flat-fullscreen&quot;</span>,
          <span class="hljs-string">&quot;flat-fullscreen-exit&quot;</span>
        ]
      }]
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre></div>`,1),X=[W];function Z(e,a,r,o,u,i){const n=h("vdpv_0");return l(),p("div",G,[J,K,s("div",M,[s("div",O,[s("div",P,[c(n)]),s("div",{style:Y({height:e.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Q,X,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=j=>e.toggleCode(0))},g(e.vdpv_0Height>0?"hidden":"show"),1)])])])}var ns=v(L,[["render",Z]]);export{ns as default};
