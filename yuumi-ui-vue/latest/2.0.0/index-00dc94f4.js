import{_ as x,r as t,o as a,c as r,d as e,w as s,f,F as p,a as h,b as c,t as y,e as v,u as Y}from"./index-9f5cfcb2.js";const w={computed:{icon(){return{primary:"line-help",warn:"line-info",success:"line-circle-correct",danger:"line-circle-close"}}}},W=c("span",null,"default message",-1);function k(u,i,d,_,l,g){const o=t("YuumiIcon"),m=t("YuumiWarning");return a(),r(p,null,[e(m,{style:{margin:"0 10px 10px 0"}},{default:s(()=>[e(o,{icon:"line-help",style:{"vertical-align":"middle"}}),f(),W]),_:1}),(a(),r(p,null,h(["primary","success","warn","danger"],n=>e(m,{key:n,style:{margin:"0 10px 10px 0"},theme:n},{default:s(()=>[e(o,{icon:g.icon[n],style:{"vertical-align":"middle"}},null,8,["icon"]),c("span",null,y(n)+" message",1)]),_:2},1032,["theme"])),64))],64)}const B=x(w,[["render",k]]),$=`<template>
  <YuumiWarning style="margin: 0 10px 10px 0">
    <YuumiIcon icon="line-help" style="vertical-align: middle" /> <span>default message</span>
  </YuumiWarning>

  <template v-for="theme in ['primary', 'success', 'warn', 'danger']" :key="theme">
    <YuumiWarning style="margin: 0 10px 10px 0" :theme="theme">
      <YuumiIcon :icon="icon[theme]" style="vertical-align: middle" />
      <span>{{ theme }} message</span>
    </YuumiWarning>
  </template>
</template>

<script>
export default {
  computed: {
    icon() {
      return {
        primary: "line-help",
        warn: "line-info",
        success: "line-circle-correct",
        danger: "line-circle-close"
      }
    }
  }
}
<\/script>
`,C={class:"markdown-body"},I=c("h3",null,"基本用法",-1),N={},V="",b=v({__name:"index",setup(u,{expose:i}){return i({frontmatter:{},excerpt:void 0}),(d,_)=>{const l=t("example-preview");return a(),r("div",C,[I,e(l,{code:Y($)},{default:s(()=>[e(B)]),_:1},8,["code"])])}}});export{b as default,V as excerpt,N as frontmatter};
