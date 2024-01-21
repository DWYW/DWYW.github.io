import{_ as u,r as i,o as a,c as l,d as e,w as n,f as o,F as _,h as p,e as f,u as d,b as m}from"./index-569afd91.js";const x={};function v(c,r){const t=i("YuumiDivider");return a(),l(_,null,[e(t,null,{default:n(()=>[o("文本")]),_:1}),e(t,{align:"left"},{default:n(()=>[o(" 文本 ")]),_:1}),e(t,{align:"right"},{default:n(()=>[o(" 文本 ")]),_:1})],64)}const h=u(x,[["render",v]]),D=`<template>
  <YuumiDivider>文本</YuumiDivider>
  <YuumiDivider align="left"> 文本 </YuumiDivider>
  <YuumiDivider align="right"> 文本 </YuumiDivider>
</template>
`,Y={};function g(c,r){const t=i("YuumiDivider");return a(),p(t,{style:{margin:"20px 0",borderColor:"red",color:"green"}},{default:n(()=>[o(" 文本 ")]),_:1})}const C=u(Y,[["render",g]]),B=`<template>
  <YuumiDivider :style="{ margin: '20px 0', borderColor: 'red', color: 'green' }">
    文本
  </YuumiDivider>
</template>
`,w={class:"markdown-body"},E=m("h3",null,"基本用法",-1),b=m("h3",null,"自定义样式",-1),N={},V="",$=f({__name:"index",setup(c,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(t,k)=>{const s=i("example-preview");return a(),l("div",w,[E,e(s,{code:d(D)},{default:n(()=>[e(h)]),_:1},8,["code"]),b,e(s,{code:d(B)},{default:n(()=>[e(C)]),_:1},8,["code"])])}}});export{$ as default,V as excerpt,N as frontmatter};
