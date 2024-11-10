import{_ as h,r as m,o as l,c as N,a as $,d as t,w as n,f as c,t as v,F as x,b as r,j as _,h as y,Y as g,e as B,u as p}from"./index-9f5cfcb2.js";const Y={methods:{createNotification(a){this.$yuumi.createNotification({title:"基本用法",message:"基本用法",theme:a})}}};function k(a,e,d,f,s,o){const i=m("YuumiButton");return l(),N(x,null,$(["default","primary","success","warn","danger"],u=>t(i,{key:u,style:{margin:"0 10px 10px 0"},theme:u,onClick:W=>o.createNotification(u)},{default:n(()=>[c(v(u)+" notification ",1)]),_:2},1032,["theme","onClick"])),64)}const C=h(Y,[["render",k]]),b=`<template>
  <template v-for="theme in ['default', 'primary', 'success', 'warn', 'danger']" :key="theme">
    <YuumiButton style="margin: 0 10px 10px 0" :theme="theme" @click="createNotification(theme)">
      {{ theme }} notification
    </YuumiButton>
  </template>
</template>

<script>
export default {
  methods: {
    createNotification(theme) {
      this.$yuumi.createNotification({
        title: "基本用法",
        message: "基本用法",
        theme: theme
      })
    }
  }
}
<\/script>
`,V={data(){return{vnodes:[]}},beforeUnmount(){this.$yuumi.removeAllNotification()},methods:{createNotification(){this.vnodes.push(this.$yuumi.createNotification({title:"非自动关闭",message:"非自动关闭"+this.vnodes.length,duration:0}))},removeNotification(){this.$yuumi.removeNotification(this.vnodes.shift())}}};function w(a,e,d,f,s,o){const i=m("YuumiButton");return l(),N(x,null,[t(i,{style:{margin:"0 10px 10px 0"},onClick:o.createNotification},{default:n(()=>[c(" show notification ")]),_:1},8,["onClick"]),t(i,{onClick:e[0]||(e[0]=u=>o.removeNotification(a.vnode))},{default:n(()=>[c(" hide notification ")]),_:1})],64)}const E=h(V,[["render",w]]),I=`<template>
  <YuumiButton style="margin: 0 10px 10px 0" @click="createNotification">
    show notification
  </YuumiButton>
  <YuumiButton @click="removeNotification(vnode)"> hide notification </YuumiButton>
</template>

<script>
export default {
  data() {
    return {
      vnodes: []
    }
  },
  beforeUnmount() {
    this.$yuumi.removeAllNotification()
  },
  methods: {
    createNotification() {
      this.vnodes.push(
        this.$yuumi.createNotification({
          title: "非自动关闭",
          message: "非自动关闭" + this.vnodes.length,
          duration: 0
        })
      )
    },

    removeNotification() {
      this.$yuumi.removeNotification(this.vnodes.shift())
    }
  }
}
<\/script>
`,S={methods:{createNotification(a){this.$yuumi.createNotification({direction:a,title:"选择位置",message:"选择位置"})}}};function A(a,e,d,f,s,o){const i=m("YuumiButton");return l(),N(x,null,[r("div",null,[t(i,{style:{margin:"0 10px 10px 0"},onClick:e[0]||(e[0]=u=>o.createNotification("tl"))},{default:n(()=>[c(" top left ")]),_:1}),t(i,{style:{margin:"0 10px 10px 0"},onClick:e[1]||(e[1]=u=>o.createNotification("tr"))},{default:n(()=>[c(" top right ")]),_:1})]),r("div",null,[t(i,{style:{margin:"0 10px 10px 0"},onClick:e[2]||(e[2]=u=>o.createNotification("bl"))},{default:n(()=>[c(" bottom left ")]),_:1}),t(i,{style:{margin:"0 10px 10px 0"},onClick:e[3]||(e[3]=u=>o.createNotification("br"))},{default:n(()=>[c(" bottom right ")]),_:1})])],64)}const F=h(S,[["render",A]]),P=`<template>
  <div>
    <YuumiButton style="margin: 0 10px 10px 0" @click="createNotification('tl')">
      top left
    </YuumiButton>
    <YuumiButton style="margin: 0 10px 10px 0" @click="createNotification('tr')">
      top right
    </YuumiButton>
  </div>
  <div>
    <YuumiButton style="margin: 0 10px 10px 0" @click="createNotification('bl')">
      bottom left
    </YuumiButton>
    <YuumiButton style="margin: 0 10px 10px 0" @click="createNotification('br')">
      bottom right
    </YuumiButton>
  </div>
</template>

<script>
export default {
  methods: {
    createNotification(direction) {
      this.$yuumi.createNotification({
        direction,
        title: "选择位置",
        message: "选择位置"
      })
    }
  }
}
<\/script>
`,U={methods:{createNotification(){this.$yuumi.createNotification({title:_("span",{style:{color:"red"}},"VNode"),message:_("span",{style:{color:"red"}},["use ",_("span",{style:{backgroundColor:"green",color:"#fff"}},["VNode"]),", you can close it."])})}}};function j(a,e,d,f,s,o){const i=m("YuumiButton");return l(),y(i,{onClick:o.createNotification},{default:n(()=>[c(" 使用VNode ")]),_:1},8,["onClick"])}const D=h(U,[["render",j]]),L=`<template>
  <YuumiButton @click="createNotification"> 使用VNode </YuumiButton>
</template>

<script>
import { h } from "vue"
export default {
  methods: {
    createNotification() {
      this.$yuumi.createNotification({
        title: h("span", { style: { color: "red" } }, "VNode"),
        message: h(
          "span",
          {
            style: { color: "red" }
          },
          [
            "use ",
            h(
              "span",
              {
                style: { backgroundColor: "green", color: "#fff" }
              },
              ["VNode"]
            ),
            ", you can close it."
          ]
        )
      })
    }
  }
}
<\/script>
`,T={methods:{createNotification(){this.$yuumi.createNotification({title:"自定义图标",message:"自定义图标",icon:_(g,{icon:"flat-shield-correct"}),theme:"success"})}}};function q(a,e,d,f,s,o){const i=m("YuumiButton");return l(),y(i,{onClick:o.createNotification},{default:n(()=>[c(" 自定义图标 ")]),_:1},8,["onClick"])}const z=h(T,[["render",q]]),G=`<template>
  <YuumiButton @click="createNotification"> 自定义图标 </YuumiButton>
</template>

<script>
import { h } from "vue"
import { YuumiIcon } from "../../packages"

export default {
  methods: {
    createNotification() {
      this.$yuumi.createNotification({
        title: "自定义图标",
        message: "自定义图标",
        icon: h(YuumiIcon, {
          icon: "flat-shield-correct"
        }),
        theme: "success"
      })
    }
  }
}
<\/script>
`,H={class:"markdown-body"},J=r("h3",null,"基本用法",-1),K=r("h3",null,"非自动关闭",-1),M=r("p",null,[c("默认 "),r("code",{class:""},"3s"),c(" 后自动关闭")],-1),O=r("h3",null,"选择位置",-1),Q=r("h3",null,"使用VNode",-1),R=r("h3",null,"自定图标",-1),Z={},tt="",et=B({__name:"index",setup(a,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(d,f)=>{const s=m("example-preview");return l(),N("div",H,[J,t(s,{code:p(b)},{default:n(()=>[t(C)]),_:1},8,["code"]),K,M,t(s,{code:p(I)},{default:n(()=>[t(E)]),_:1},8,["code"]),O,t(s,{code:p(P)},{default:n(()=>[t(F)]),_:1},8,["code"]),Q,t(s,{code:p(L)},{default:n(()=>[t(D)]),_:1},8,["code"]),R,t(s,{code:p(G)},{default:n(()=>[t(z)]),_:1},8,["code"])])}}});export{et as default,tt as excerpt,Z as frontmatter};
