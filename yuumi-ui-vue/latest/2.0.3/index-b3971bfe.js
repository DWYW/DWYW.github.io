import{_ as h,r as i,o as m,c as f,a as x,d as n,w as s,f as r,t as $,F as v,j as _,h as M,Y as y,e as B,u as p,b as g}from"./index-098e058d.js";const k={methods:{createMessage(e){this.$yuumi.createMessage({message:"this is a message",theme:e})}}};function Y(e,c,d,l,t,o){const a=i("YuumiButton");return m(),f(v,null,x(["default","primary","success","warn","danger"],u=>n(a,{key:u,style:{margin:"0 10px 10px 0"},theme:u,onClick:J=>o.createMessage(u)},{default:s(()=>[r($(u)+" message ",1)]),_:2},1032,["theme","onClick"])),64)}const C=h(k,[["render",Y]]),w=`<template>
  <template v-for="theme in ['default', 'primary', 'success', 'warn', 'danger']" :key="theme">
    <YuumiButton style="margin: 0 10px 10px 0" :theme="theme" @click="createMessage(theme)">
      {{ theme }} message
    </YuumiButton>
  </template>
</template>

<script>
export default {
  methods: {
    createMessage(theme) {
      this.$yuumi.createMessage({
        message: "this is a message",
        theme: theme
      })
    }
  }
}
<\/script>
`,E={data(){return{vnode:null}},beforeUnmount(){this.$yuumi.removeAllMessage()},methods:{createMessage(){const e=this.vnode;e&&this.removeMessage(e),this.vnode=this.$yuumi.createMessage({message:"this is a message, you can close it.",duration:0})},removeMessage(e){this.$yuumi.removeMessage(e)}}};function N(e,c,d,l,t,o){const a=i("YuumiButton");return m(),f(v,null,[n(a,{onClick:o.createMessage},{default:s(()=>[r(" show message ")]),_:1},8,["onClick"]),n(a,{onClick:c[0]||(c[0]=u=>o.removeMessage(t.vnode))},{default:s(()=>[r(" hide message ")]),_:1})],64)}const V=h(E,[["render",N]]),b=`<template>
  <YuumiButton @click="createMessage"> show message </YuumiButton>
  <YuumiButton @click="removeMessage(vnode)"> hide message </YuumiButton>
</template>

<script>
export default {
  data() {
    return {
      vnode: null
    }
  },
  beforeUnmount() {
    this.$yuumi.removeAllMessage()
  },
  methods: {
    createMessage() {
      const vnode = this.vnode
      if (vnode) {
        this.removeMessage(vnode)
      }

      this.vnode = this.$yuumi.createMessage({
        message: "this is a message, you can close it.",
        duration: 0
      })
    },

    removeMessage(vnode) {
      this.$yuumi.removeMessage(vnode)
    }
  }
}
<\/script>
`,I={data(){return{vnode:null}},methods:{createMessage(){this.vnode=this.$yuumi.createMessage({message:_("span",{style:{color:"red"}},["this is a ",_("span",{style:{backgroundColor:"green",color:"#fff"}},["message"]),", you can close it."])})}}};function S(e,c,d,l,t,o){const a=i("YuumiButton");return m(),M(a,{onClick:o.createMessage},{default:s(()=>[r(" 使用VNode ")]),_:1},8,["onClick"])}const A=h(I,[["render",S]]),F=`<template>
  <YuumiButton @click="createMessage"> 使用VNode </YuumiButton>
</template>

<script>
import { h } from "vue"
export default {
  data() {
    return {
      vnode: null
    }
  },
  methods: {
    createMessage() {
      this.vnode = this.$yuumi.createMessage({
        message: h(
          "span",
          {
            style: {
              color: "red"
            }
          },
          [
            "this is a ",
            h(
              "span",
              {
                style: { backgroundColor: "green", color: "#fff" }
              },
              ["message"]
            ),
            ", you can close it."
          ]
        )
      })
    }
  }
}
<\/script>
`,U={data(){return{vnode:null}},methods:{createMessage(){this.vnode=this.$yuumi.createMessage({message:"custom icon",icon:_(y,{icon:"line-shield-info"})})}}};function j(e,c,d,l,t,o){const a=i("YuumiButton");return m(),M(a,{onClick:o.createMessage},{default:s(()=>[r(" 自定义图标 ")]),_:1},8,["onClick"])}const D=h(U,[["render",j]]),L=`<template>
  <YuumiButton @click="createMessage"> 自定义图标 </YuumiButton>
</template>

<script>
import { h } from "vue"
import { YuumiIcon } from "../../packages"

export default {
  data() {
    return {
      vnode: null
    }
  },
  methods: {
    createMessage() {
      this.vnode = this.$yuumi.createMessage({
        message: "custom icon",
        icon: h(YuumiIcon, {
          icon: "line-shield-info"
        })
      })
    }
  }
}
<\/script>
`,T={class:"markdown-body"},q=g("h3",null,"基本用法",-1),z=g("h3",null,"非自动关闭",-1),G=g("h3",null,"使用VNode",-1),H=g("h3",null,"自定义图标",-1),O={},P="",Q=B({__name:"index",setup(e,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(d,l)=>{const t=i("example-preview");return m(),f("div",T,[q,n(t,{code:p(w)},{default:s(()=>[n(C)]),_:1},8,["code"]),z,n(t,{code:p(b)},{default:s(()=>[n(V)]),_:1},8,["code"]),G,n(t,{code:p(F)},{default:s(()=>[n(A)]),_:1},8,["code"]),H,n(t,{code:p(L)},{default:s(()=>[n(D)]),_:1},8,["code"])])}}});export{Q as default,P as excerpt,O as frontmatter};
