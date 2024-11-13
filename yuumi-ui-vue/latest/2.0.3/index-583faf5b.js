import{_,r as u,o as c,h as x,w as n,f as l,c as f,d as t,F as $,e as y,u as d,b as h}from"./index-098e058d.js";const A={data(){return{}},methods:{showAlert(){this.$yuumi.createAlert({title:"基本用法",content:"基本用法",onClose:()=>{this.$yuumi.createMessage({message:"close",theme:"info"})},onCancel:()=>{this.$yuumi.createMessage({message:"cancel",theme:"warn"})},onConfirm:()=>{this.$yuumi.createMessage({message:"confirm",theme:"success"})}})}}};function g(a,e,i,m,r,o){const s=u("YuumiButton");return c(),x(s,{style:{margin:"0 10px 10px 0"},onClick:o.showAlert},{default:n(()=>[l(" 基本用法 ")]),_:1},8,["onClick"])}const w=_(A,[["render",g]]),B=`<template>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showAlert"> 基本用法 </YuumiButton>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showAlert() {
      this.$yuumi.createAlert({
        title: "基本用法",
        content: "基本用法",
        onClose: () => {
          this.$yuumi.createMessage({ message: "close", theme: "info" })
        },
        onCancel: () => {
          this.$yuumi.createMessage({ message: "cancel", theme: "warn" })
        },
        onConfirm: () => {
          this.$yuumi.createMessage({ message: "confirm", theme: "success" })
        }
      })
    }
  }
}
<\/script>
`,C={data(){return{}},methods:{showAlert(a){this.$yuumi.createAlert({...a,title:"部分显示",content:"部分显示"})}}};function Y(a,e,i,m,r,o){const s=u("YuumiButton");return c(),f($,null,[t(s,{style:{margin:"0 10px 10px 0"},onClick:e[0]||(e[0]=p=>o.showAlert({closeEnable:!1}))},{default:n(()=>[l(" 不显示关闭 ")]),_:1}),t(s,{style:{margin:"0 10px 10px 0"},onClick:e[1]||(e[1]=p=>o.showAlert({cancelEnable:!1}))},{default:n(()=>[l(" 不显示取消 ")]),_:1}),t(s,{style:{margin:"0 10px 10px 0"},onClick:e[2]||(e[2]=p=>o.showAlert({confirmEnable:!1}))},{default:n(()=>[l(" 不显示确认 ")]),_:1})],64)}const k=_(C,[["render",Y]]),E=`<template>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showAlert({ closeEnable: false })">
    不显示关闭
  </YuumiButton>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showAlert({ cancelEnable: false })">
    不显示取消
  </YuumiButton>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showAlert({ confirmEnable: false })">
    不显示确认
  </YuumiButton>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showAlert(options) {
      this.$yuumi.createAlert({
        ...options,
        title: "部分显示",
        content: "部分显示"
      })
    }
  }
}
<\/script>
`,v={data(){return{}},methods:{showAlert(){this.$yuumi.createAlert({title:t("span",{style:{color:"red"}},"自定义标题"),content:t("span",{style:{color:"green"}},"自定义内容"),cancelText:"撤销",confirmText:"保存"})}}};function b(a,e,i,m,r,o){const s=u("YuumiButton");return c(),x(s,{style:{margin:"0 10px 10px 0"},onClick:e[0]||(e[0]=p=>o.showAlert())},{default:n(()=>[l(" 自定义显示 ")]),_:1})}const M=_(v,[["render",b]]),N=`<template>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showAlert()"> 自定义显示 </YuumiButton>
</template>

<script>
import { createVNode } from "vue"
export default {
  data() {
    return {}
  },
  methods: {
    showAlert() {
      this.$yuumi.createAlert({
        title: createVNode("span", { style: { color: "red" } }, "自定义标题"),
        content: createVNode("span", { style: { color: "green" } }, "自定义内容"),
        cancelText: "撤销",
        confirmText: "保存"
      })
    }
  }
}
<\/script>
`,V={data(){return{}},methods:{showAlert(){this.$yuumi.createAlert({stopPenetrate:!0,title:"阻止穿透",content:"阻止穿透"})}}};function T(a,e,i,m,r,o){const s=u("YuumiButton");return c(),x(s,{style:{margin:"0 10px 10px 0"},onClick:e[0]||(e[0]=p=>o.showAlert())},{default:n(()=>[l(" 阻止穿透 ")]),_:1})}const P=_(V,[["render",T]]),F=`<template>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showAlert()"> 阻止穿透 </YuumiButton>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showAlert() {
      this.$yuumi.createAlert({
        stopPenetrate: true,
        title: "阻止穿透",
        content: "阻止穿透"
      })
    }
  }
}
<\/script>
`,H={data(){return{}},methods:{showAlert(){this.$yuumi.createAlert({alignCenter:!0,title:"居中显示",content:"居中显示"})}}};function S(a,e,i,m,r,o){const s=u("YuumiButton");return c(),x(s,{style:{margin:"0 10px 10px 0"},onClick:e[0]||(e[0]=p=>o.showAlert())},{default:n(()=>[l(" 居中显示 ")]),_:1})}const j=_(H,[["render",S]]),q=`<template>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showAlert()"> 居中显示 </YuumiButton>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showAlert() {
      this.$yuumi.createAlert({
        alignCenter: true,
        title: "居中显示",
        content: "居中显示"
      })
    }
  }
}
<\/script>
`,z={class:"markdown-body"},D=h("h3",null,"基本用法",-1),G=h("h3",null,"部分显示",-1),I=h("h3",null,"自定义显示",-1),J=h("h3",null,"阻止穿透",-1),K=h("h3",null,"居中显示",-1),O={},Q="",R=y({__name:"index",setup(a,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(i,m)=>{const r=u("example-preview");return c(),f("div",z,[D,t(r,{code:d(B)},{default:n(()=>[t(w)]),_:1},8,["code"]),G,t(r,{code:d(E)},{default:n(()=>[t(k)]),_:1},8,["code"]),I,t(r,{code:d(N)},{default:n(()=>[t(M)]),_:1},8,["code"]),J,t(r,{code:d(F)},{default:n(()=>[t(P)]),_:1},8,["code"]),K,t(r,{code:d(q)},{default:n(()=>[t(j)]),_:1},8,["code"])])}}});export{R as default,Q as excerpt,O as frontmatter};
