import{_ as c,r as u,o as s,c as r,b as l,d as t,w as e,f as i,F as _,h,e as f,u as d}from"./index-569afd91.js";const g={},x={style:{width:"400px"}},Y={style:{display:"flex","flex-direction":"row","justify-content":"space-between"}},y={style:{overflow:"hidden"}},w={style:{float:"left",display:"flex","flex-direction":"column"}},B={style:{float:"right",display:"flex","flex-direction":"column"}},T={style:{display:"flex","flex-direction":"row","justify-content":"space-between","margin-top":"10px"}};function v(m,p){const o=u("YuumiButton"),n=u("YuumiTooltip");return s(),r("div",x,[l("div",Y,[t(n,{content:"top start tooltip message",placement:"top-start"},{default:e(()=>[t(o,{style:{width:"120px"}},{default:e(()=>[i(" top start ")]),_:1})]),_:1}),t(n,{content:"top center tooltip message",placement:"top"},{default:e(()=>[t(o,{style:{width:"120px"}},{default:e(()=>[i(" top ")]),_:1})]),_:1}),t(n,{content:"top end tooltip message",placement:"top-end"},{default:e(()=>[t(o,{style:{width:"120px"}},{default:e(()=>[i(" top end ")]),_:1})]),_:1})]),l("div",y,[l("div",w,[t(n,{content:"left start tooltip message",placement:"left-start"},{default:e(()=>[t(o,{style:{"margin-top":"10px",width:"120px"}},{default:e(()=>[i(" left start ")]),_:1})]),_:1}),t(n,{content:"left center tooltip message",placement:"left"},{default:e(()=>[t(o,{style:{"margin-top":"10px",width:"120px"}},{default:e(()=>[i(" left ")]),_:1})]),_:1}),t(n,{content:"left end tooltip message",placement:"left-end"},{default:e(()=>[t(o,{style:{"margin-top":"10px",width:"120px"}},{default:e(()=>[i(" left end ")]),_:1})]),_:1})]),l("div",B,[t(n,{content:"right start tooltip message",placement:"right-start"},{default:e(()=>[t(o,{style:{"margin-top":"10px",width:"120px"}},{default:e(()=>[i(" right start ")]),_:1})]),_:1}),t(n,{content:"right center tooltip message",placement:"right"},{default:e(()=>[t(o,{style:{"margin-top":"10px",width:"120px"}},{default:e(()=>[i(" right ")]),_:1})]),_:1}),t(n,{content:"right end tooltip message",placement:"right-end"},{default:e(()=>[t(o,{style:{"margin-top":"10px",width:"120px"}},{default:e(()=>[i(" right end ")]),_:1})]),_:1})])]),l("div",T,[t(n,{content:"bottom start tooltip message",placement:"bottom-start"},{default:e(()=>[t(o,{style:{width:"120px"}},{default:e(()=>[i(" bottom start ")]),_:1})]),_:1}),t(n,{content:"bottom center tooltip message",placement:"bottom"},{default:e(()=>[t(o,{style:{width:"120px"}},{default:e(()=>[i(" bottom ")]),_:1})]),_:1}),t(n,{content:"bottom end tooltip message",placement:"bottom-end"},{default:e(()=>[t(o,{style:{width:"120px"}},{default:e(()=>[i(" bottom end ")]),_:1})]),_:1})])])}const b=c(g,[["render",v]]),$=`<template>
  <div style="width: 400px">
    <div style="display: flex; flex-direction: row; justify-content: space-between">
      <YuumiTooltip content="top start tooltip message" placement="top-start">
        <YuumiButton style="width: 120px"> top start </YuumiButton>
      </YuumiTooltip>

      <YuumiTooltip content="top center tooltip message" placement="top">
        <YuumiButton style="width: 120px"> top </YuumiButton>
      </YuumiTooltip>

      <YuumiTooltip content="top end tooltip message" placement="top-end">
        <YuumiButton style="width: 120px"> top end </YuumiButton>
      </YuumiTooltip>
    </div>

    <div style="overflow: hidden">
      <div style="float: left; display: flex; flex-direction: column">
        <YuumiTooltip content="left start tooltip message" placement="left-start">
          <YuumiButton style="margin-top: 10px; width: 120px"> left start </YuumiButton>
        </YuumiTooltip>

        <YuumiTooltip content="left center tooltip message" placement="left">
          <YuumiButton style="margin-top: 10px; width: 120px"> left </YuumiButton>
        </YuumiTooltip>

        <YuumiTooltip content="left end tooltip message" placement="left-end">
          <YuumiButton style="margin-top: 10px; width: 120px"> left end </YuumiButton>
        </YuumiTooltip>
      </div>

      <div style="float: right; display: flex; flex-direction: column">
        <YuumiTooltip content="right start tooltip message" placement="right-start">
          <YuumiButton style="margin-top: 10px; width: 120px"> right start </YuumiButton>
        </YuumiTooltip>

        <YuumiTooltip content="right center tooltip message" placement="right">
          <YuumiButton style="margin-top: 10px; width: 120px"> right </YuumiButton>
        </YuumiTooltip>

        <YuumiTooltip content="right end tooltip message" placement="right-end">
          <YuumiButton style="margin-top: 10px; width: 120px"> right end </YuumiButton>
        </YuumiTooltip>
      </div>
    </div>

    <div
      style="display: flex; flex-direction: row; justify-content: space-between; margin-top: 10px"
    >
      <YuumiTooltip content="bottom start tooltip message" placement="bottom-start">
        <YuumiButton style="width: 120px"> bottom start </YuumiButton>
      </YuumiTooltip>

      <YuumiTooltip content="bottom center tooltip message" placement="bottom">
        <YuumiButton style="width: 120px"> bottom </YuumiButton>
      </YuumiTooltip>

      <YuumiTooltip content="bottom end tooltip message" placement="bottom-end">
        <YuumiButton style="width: 120px"> bottom end </YuumiButton>
      </YuumiTooltip>
    </div>
  </div>
</template>
`,k={};function C(m,p){const o=u("YuumiButton"),n=u("YuumiTooltip");return s(),r(_,null,[t(n,{content:"light tooltip message",theme:"light"},{default:e(()=>[t(o,{style:{width:"120px","margin-right":"20px"}},{default:e(()=>[i(" light ")]),_:1})]),_:1}),t(n,{content:"dark tooltip message",theme:"dark"},{default:e(()=>[t(o,{style:{width:"120px","margin-right":"20px"}},{default:e(()=>[i(" dark ")]),_:1})]),_:1})],64)}const E=c(k,[["render",C]]),j=`<template>
  <YuumiTooltip content="light tooltip message" theme="light">
    <YuumiButton style="width: 120px; margin-right: 20px"> light </YuumiButton>
  </YuumiTooltip>

  <YuumiTooltip content="dark tooltip message" theme="dark">
    <YuumiButton style="width: 120px; margin-right: 20px"> dark </YuumiButton>
  </YuumiTooltip>
</template>
`,N={},V=l("div",null,"tooltip message",-1),F=l("div",null,"more...",-1);function S(m,p){const o=u("YuumiButton"),n=u("YuumiTooltip");return s(),h(n,{content:"light tooltip message"},{content:e(()=>[V,F]),default:e(()=>[t(o,{style:{width:"120px","margin-right":"20px"}},{default:e(()=>[i(" light ")]),_:1})]),_:1})}const q=c(N,[["render",S]]),z=`<template>
  <YuumiTooltip content="light tooltip message">
    <template #content>
      <div>tooltip message</div>
      <div>more...</div>
    </template>
    <YuumiButton style="width: 120px; margin-right: 20px"> light </YuumiButton>
  </YuumiTooltip>
</template>
`,A={class:"markdown-body"},D=l("h3",null,"基本用法",-1),G=l("h3",null,"主题 Theme",-1),H=l("h3",null,"Content 插槽",-1),J={},K="",L=f({__name:"index",setup(m,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(o,n)=>{const a=u("example-preview");return s(),r("div",A,[D,t(a,{code:d($)},{default:e(()=>[t(b)]),_:1},8,["code"]),G,t(a,{code:d(j)},{default:e(()=>[t(E)]),_:1},8,["code"]),H,t(a,{code:d(z)},{default:e(()=>[t(q)]),_:1},8,["code"])])}}});export{L as default,K as excerpt,J as frontmatter};
