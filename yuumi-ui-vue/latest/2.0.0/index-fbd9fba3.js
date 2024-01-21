import{_,r as u,o as s,c as r,d as t,w as e,f as n,F as Y,h as f,b as c,e as v,u as a}from"./index-569afd91.js";const k={data(){return{step:0}},methods:{setStep(l){this.step=Math.min(Math.max(0,this.step+l),3)}}};function E(l,o,i,m,p,S){const d=u("YuumiStepItem"),h=u("YuumiStep"),I=u("YuumiButton");return s(),r(Y,null,[t(h,{active:p.step},{default:e(()=>[t(d,{title:"step 1"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(d,{title:"step 2"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(d,{title:"step 3"},{default:e(()=>[n(" 这里描述信息 ")]),_:1})]),_:1},8,["active"]),t(I,{style:{margin:"10px"},onClick:o[0]||(o[0]=x=>S.setStep(-1))},{default:e(()=>[n(" prev step ")]),_:1}),t(I,{onClick:o[1]||(o[1]=x=>S.setStep(1))},{default:e(()=>[n(" next step ")]),_:1})],64)}const y=_(k,[["render",E]]),$=`<template>
  <YuumiStep :active="step">
    <YuumiStepItem title="step 1"> 这里描述信息 </YuumiStepItem>
    <YuumiStepItem title="step 2"> 这里描述信息 </YuumiStepItem>

    <YuumiStepItem title="step 3"> 这里描述信息 </YuumiStepItem>
  </YuumiStep>

  <YuumiButton style="margin: 10px" @click="setStep(-1)"> prev step </YuumiButton>
  <YuumiButton @click="setStep(1)"> next step </YuumiButton>
</template>

<script>
export default {
  data() {
    return {
      step: 0
    }
  },
  methods: {
    setStep(step) {
      this.step = Math.min(Math.max(0, this.step + step), 3)
    }
  }
}
<\/script>
`,B={};function C(l,o){const i=u("YuumiStepItem"),m=u("YuumiStep"),p=u("YuumiIcon");return s(),r(Y,null,[t(m,{active:1},{default:e(()=>[t(i,{title:"设置账号",icon:"line-edit"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"设置密码",icon:"line-key"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"完成",icon:"line-shield-correct"},{default:e(()=>[n(" 这里描述信息 ")]),_:1})]),_:1}),t(m,{active:1},{default:e(()=>[t(i,{title:"设置账号"},{icon:e(()=>[t(p,{icon:"line-edit"})]),default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"设置密码"},{icon:e(()=>[t(p,{icon:"line-key"})]),default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"完成"},{icon:e(()=>[t(p,{icon:"line-shield-correct"})]),default:e(()=>[n(" 这里描述信息 ")]),_:1})]),_:1})],64)}const g=_(B,[["render",C]]),b=`<template>
  <YuumiStep :active="1">
    <YuumiStepItem title="设置账号" icon="line-edit"> 这里描述信息 </YuumiStepItem>
    <YuumiStepItem title="设置密码" icon="line-key"> 这里描述信息 </YuumiStepItem>
    <YuumiStepItem title="完成" icon="line-shield-correct"> 这里描述信息 </YuumiStepItem>
  </YuumiStep>

  <YuumiStep :active="1">
    <YuumiStepItem title="设置账号">
      <template #icon>
        <YuumiIcon icon="line-edit"></YuumiIcon>
      </template>
      这里描述信息
    </YuumiStepItem>
    <YuumiStepItem title="设置密码">
      <template #icon>
        <YuumiIcon icon="line-key"></YuumiIcon>
      </template>
      这里描述信息
    </YuumiStepItem>
    <YuumiStepItem title="完成">
      <template #icon>
        <YuumiIcon icon="line-shield-correct"></YuumiIcon>
      </template>
      这里描述信息
    </YuumiStepItem>
  </YuumiStep>
</template>
`,M={};function w(l,o){const i=u("YuumiStepItem"),m=u("YuumiStep");return s(),f(m,{active:1,mini:""},{default:e(()=>[t(i,{title:"step 1"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"step 2"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"step 3"},{default:e(()=>[n(" 这里描述信息 ")]),_:1})]),_:1})}const V=_(M,[["render",w]]),N=`<template>
  <YuumiStep :active="1" mini>
    <YuumiStepItem title="step 1"> 这里描述信息 </YuumiStepItem>
    <YuumiStepItem title="step 2"> 这里描述信息 </YuumiStepItem>
    <YuumiStepItem title="step 3"> 这里描述信息 </YuumiStepItem>
  </YuumiStep>
</template>
`,F={};function T(l,o){const i=u("YuumiStepItem"),m=u("YuumiStep");return s(),f(m,{active:1,mini:"",error:""},{default:e(()=>[t(i,{title:"step 1"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"Error"},{default:e(()=>[n(" 这里错误描述信息 ")]),_:1}),t(i,{title:"step 3"},{default:e(()=>[n(" 这里描述信息 ")]),_:1})]),_:1})}const j=_(F,[["render",T]]),q=`<template>
  <YuumiStep :active="1" mini error>
    <YuumiStepItem title="step 1"> 这里描述信息 </YuumiStepItem>
    <YuumiStepItem title="Error"> 这里错误描述信息 </YuumiStepItem>
    <YuumiStepItem title="step 3"> 这里描述信息 </YuumiStepItem>
  </YuumiStep>
</template>
`,z={},A={style:{height:"300px",display:"inline-block","margin-right":"50px"}},D={style:{height:"300px",display:"inline-block"}};function G(l,o){const i=u("YuumiStepItem"),m=u("YuumiStep");return s(),r(Y,null,[c("div",A,[t(m,{active:1,direction:"vertical"},{default:e(()=>[t(i,{title:"step 1"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"step 2"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"step 3"},{default:e(()=>[n(" 这里描述信息 ")]),_:1})]),_:1})]),c("div",D,[t(m,{active:2,direction:"vertical",mini:""},{default:e(()=>[t(i,{title:"step 1"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"step 2"},{default:e(()=>[n(" 这里描述信息 ")]),_:1}),t(i,{title:"step 3"},{default:e(()=>[n(" 这里描述信息 ")]),_:1})]),_:1})])],64)}const H=_(z,[["render",G]]),J=`<template>
  <div style="height: 300px; display: inline-block; margin-right: 50px">
    <YuumiStep :active="1" direction="vertical">
      <YuumiStepItem title="step 1"> 这里描述信息 </YuumiStepItem>
      <YuumiStepItem title="step 2"> 这里描述信息 </YuumiStepItem>
      <YuumiStepItem title="step 3"> 这里描述信息 </YuumiStepItem>
    </YuumiStep>
  </div>

  <div style="height: 300px; display: inline-block">
    <YuumiStep :active="2" direction="vertical" mini>
      <YuumiStepItem title="step 1"> 这里描述信息 </YuumiStepItem>
      <YuumiStepItem title="step 2"> 这里描述信息 </YuumiStepItem>
      <YuumiStepItem title="step 3"> 这里描述信息 </YuumiStepItem>
    </YuumiStep>
  </div>
</template>
`,K={class:"markdown-body"},L=c("h3",null,"基本用法",-1),O=c("p",null,[n("通过 "),c("code",{class:""},"active"),n(" 指定当前的步骤，初始值为 0。")],-1),P=c("h3",null,"自定义图标",-1),Q=c("h3",null,"mini版",-1),R=c("h3",null,"Error",-1),U=c("h3",null,"垂直的",-1),X={},Z="",tt=v({__name:"index",setup(l,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(i,m)=>{const p=u("example-preview");return s(),r("div",K,[L,O,t(p,{code:a($)},{default:e(()=>[t(y)]),_:1},8,["code"]),P,t(p,{code:a(b)},{default:e(()=>[t(g)]),_:1},8,["code"]),Q,t(p,{code:a(N)},{default:e(()=>[t(V)]),_:1},8,["code"]),R,t(p,{code:a(q)},{default:e(()=>[t(j)]),_:1},8,["code"]),U,t(p,{code:a(J)},{default:e(()=>[t(H)]),_:1},8,["code"])])}}});export{tt as default,Z as excerpt,X as frontmatter};
