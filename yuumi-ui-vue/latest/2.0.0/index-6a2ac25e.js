import{_ as w,r as i,o as p,c as h,d as o,w as s,f as d,F as Y,b as m,m as D,e as x,u as g,g as v}from"./index-569afd91.js";const E={data(){return{show:!1}},methods:{showDialog(){this.show=!0},onclose(){console.log("on close")},oncancel(){console.log("on cancel")},onconfirm(){console.log("on confirm")}}},C=m("span",null,"基本用法",-1);function B(r,n,f,_,e,t){const u=i("YuumiButton"),a=i("YuumiIcon"),c=i("YuumiDialog");return p(),h(Y,null,[o(u,{onClick:t.showDialog},{default:s(()=>[d(" show dialog ")]),_:1},8,["onClick"]),o(c,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=l=>e.show=l),title:"dialog title",onClose:t.onclose,onCancel:t.oncancel,onConfirm:t.onconfirm},{default:s(()=>[o(a,{icon:"line-help"}),C]),_:1},8,["modelValue","onClose","onCancel","onConfirm"])],64)}const V=w(E,[["render",B]]),k=`<template>
  <YuumiButton @click="showDialog"> show dialog </YuumiButton>
  <YuumiDialog
    v-model="show"
    title="dialog title"
    @close="onclose"
    @cancel="oncancel"
    @confirm="onconfirm"
  >
    <YuumiIcon icon="line-help" />
    <span>基本用法</span>
  </YuumiDialog>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDialog() {
      this.show = true
    },
    onclose() {
      console.log("on close")
    },
    oncancel() {
      console.log("on cancel")
    },
    onconfirm() {
      console.log("on confirm")
    }
  }
}
<\/script>
`,b={data(){return{show:!1,enable:null}},methods:{showDialog(r){this.enable=r,this.show=!0}}},$=m("span",null,"部分显示",-1);function y(r,n,f,_,e,t){const u=i("YuumiButton"),a=i("YuumiIcon"),c=i("YuumiDialog");return p(),h(Y,null,[o(u,{style:{margin:"0 10px 10px 0"},onClick:n[0]||(n[0]=l=>t.showDialog({closeEnable:!1}))},{default:s(()=>[d(" 不显示关闭 ")]),_:1}),o(u,{style:{margin:"0 10px 10px 0"},onClick:n[1]||(n[1]=l=>t.showDialog({cancelEnable:!1}))},{default:s(()=>[d(" 不显示取消 ")]),_:1}),o(u,{style:{margin:"0 10px 10px 0"},onClick:n[2]||(n[2]=l=>t.showDialog({confirmEnable:!1}))},{default:s(()=>[d(" 不显示确认 ")]),_:1}),o(u,{style:{margin:"0 10px 10px 0"},onClick:n[3]||(n[3]=l=>t.showDialog({cancelEnable:!1,confirmEnable:!1}))},{default:s(()=>[d(" 不显示取消和确认 ")]),_:1}),o(c,D({modelValue:e.show,"onUpdate:modelValue":n[4]||(n[4]=l=>e.show=l),title:"dialog title"},e.enable),{default:s(()=>[o(a,{icon:"line-help"}),$]),_:1},16,["modelValue"])],64)}const I=w(b,[["render",y]]),L=`<template>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showDialog({ closeEnable: false })">
    不显示关闭
  </YuumiButton>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showDialog({ cancelEnable: false })">
    不显示取消
  </YuumiButton>
  <YuumiButton style="margin: 0 10px 10px 0" @click="showDialog({ confirmEnable: false })">
    不显示确认
  </YuumiButton>
  <YuumiButton
    style="margin: 0 10px 10px 0"
    @click="showDialog({ cancelEnable: false, confirmEnable: false })"
  >
    不显示取消和确认
  </YuumiButton>

  <YuumiDialog v-model="show" title="dialog title" v-bind="enable">
    <YuumiIcon icon="line-help" />
    <span>部分显示</span>
  </YuumiDialog>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      enable: null
    }
  },
  methods: {
    showDialog(options) {
      this.enable = options
      this.show = true
    }
  }
}
<\/script>
`,N={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},U=m("span",null,"自定义按钮文字",-1);function T(r,n,f,_,e,t){const u=i("YuumiButton"),a=i("YuumiIcon"),c=i("YuumiDialog");return p(),h(Y,null,[o(u,{onClick:t.showDialog},{default:s(()=>[d(" 自定义按钮文字 ")]),_:1},8,["onClick"]),o(c,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=l=>e.show=l),title:"dialog title","cancel-text":"撤销","confirm-text":"保存"},{default:s(()=>[o(a,{icon:"line-help"}),U]),_:1},8,["modelValue"])],64)}const A=w(N,[["render",T]]),P=`<template>
  <YuumiButton @click="showDialog"> 自定义按钮文字 </YuumiButton>
  <YuumiDialog v-model="show" title="dialog title" cancel-text="撤销" confirm-text="保存">
    <YuumiIcon icon="line-help" />
    <span>自定义按钮文字</span>
  </YuumiDialog>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDialog() {
      this.show = true
    }
  }
}
<\/script>
`,S={data(){return{show:!1,timeout:0}},methods:{showDialog(){this.show=!0},hideDialog(){this.timeout&&clearTimeout(this.timeout),this.$yuumi.createMessage({message:"3s后关闭",theme:"warn"}),this.timeout=setTimeout(()=>{this.show=!1},3e3)},onclose(){console.log("on close"),this.hideDialog()},oncancel(){console.log("on cancel"),this.hideDialog()},onconfirm(){console.log("on confirm"),this.hideDialog()}}},F=m("span",null,"异步操作",-1);function M(r,n,f,_,e,t){const u=i("YuumiButton"),a=i("YuumiIcon"),c=i("YuumiDialog");return p(),h(Y,null,[o(u,{onClick:t.showDialog},{default:s(()=>[d(" 异步操作 ")]),_:1},8,["onClick"]),o(c,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=l=>e.show=l),title:"dialog title",async:"",onClose:t.onclose,onCancel:t.oncancel,onConfirm:t.onconfirm},{default:s(()=>[o(a,{icon:"line-help"}),F]),_:1},8,["modelValue","onClose","onCancel","onConfirm"])],64)}const W=w(S,[["render",M]]),j=`<template>
  <YuumiButton @click="showDialog"> 异步操作 </YuumiButton>
  <YuumiDialog
    v-model="show"
    title="dialog title"
    async
    @close="onclose"
    @cancel="oncancel"
    @confirm="onconfirm"
  >
    <YuumiIcon icon="line-help" />
    <span>异步操作</span>
  </YuumiDialog>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      timeout: 0
    }
  },
  methods: {
    showDialog() {
      this.show = true
    },
    hideDialog() {
      if (this.timeout) clearTimeout(this.timeout)

      this.$yuumi.createMessage({ message: "3s后关闭", theme: "warn" })

      this.timeout = setTimeout(() => {
        this.show = false
      }, 3000)
    },
    onclose() {
      console.log("on close")
      this.hideDialog()
    },
    oncancel() {
      console.log("on cancel")
      this.hideDialog()
    },
    onconfirm() {
      console.log("on confirm"), this.hideDialog()
    }
  }
}
<\/script>
`,q={data(){return{show:!1}},methods:{showDialog(){this.show=!0},onEvent(r,n){console.log(`on ${n} event.`,r)}}},z=m("span",null,"事件监听",-1);function G(r,n,f,_,e,t){const u=i("YuumiButton"),a=i("YuumiIcon"),c=i("YuumiDialog");return p(),h(Y,null,[o(u,{onClick:t.showDialog},{default:s(()=>[d(" 事件监听 ")]),_:1},8,["onClick"]),o(c,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=l=>e.show=l),title:"dialog title",onClose:n[1]||(n[1]=l=>t.onEvent(l,"close")),onCancel:n[2]||(n[2]=l=>t.onEvent(l,"cancel")),onConfirm:n[3]||(n[3]=l=>t.onEvent(l,"confirm")),onBeforeEnter:n[4]||(n[4]=l=>t.onEvent(l,"beforeEnter")),onAfterEnter:n[5]||(n[5]=l=>t.onEvent(l,"afterEnter")),onBeforeLeave:n[6]||(n[6]=l=>t.onEvent(l,"beforeLeave")),onAfterLeave:n[7]||(n[7]=l=>t.onEvent(l,"afterLeave"))},{default:s(()=>[o(a,{icon:"line-help"}),z]),_:1},8,["modelValue"])],64)}const H=w(q,[["render",G]]),J=`<template>
  <YuumiButton @click="showDialog"> 事件监听 </YuumiButton>

  <YuumiDialog
    v-model="show"
    title="dialog title"
    @close="onEvent($event, 'close')"
    @cancel="onEvent($event, 'cancel')"
    @confirm="onEvent($event, 'confirm')"
    @beforeEnter="onEvent($event, 'beforeEnter')"
    @afterEnter="onEvent($event, 'afterEnter')"
    @beforeLeave="onEvent($event, 'beforeLeave')"
    @afterLeave="onEvent($event, 'afterLeave')"
  >
    <YuumiIcon icon="line-help" />
    <span>事件监听</span>
  </YuumiDialog>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDialog() {
      this.show = true
    },
    onEvent(e, type) {
      console.log(\`on \${type} event.\`, e)
    }
  }
}
<\/script>
`,K={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},O=m("span",null,"阻止穿透",-1);function Q(r,n,f,_,e,t){const u=i("YuumiButton"),a=i("YuumiIcon"),c=i("YuumiDialog");return p(),h(Y,null,[o(u,{onClick:t.showDialog},{default:s(()=>[d(" 阻止穿透 ")]),_:1},8,["onClick"]),o(c,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=l=>e.show=l),title:"dialog title","stop-penetrate":!0},{default:s(()=>[o(a,{icon:"line-help"}),O]),_:1},8,["modelValue"])],64)}const R=w(K,[["render",Q]]),X=`<template>
  <YuumiButton @click="showDialog"> 阻止穿透 </YuumiButton>

  <YuumiDialog v-model="show" title="dialog title" :stop-penetrate="true">
    <YuumiIcon icon="line-help" />
    <span>阻止穿透</span>
  </YuumiDialog>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDialog() {
      this.show = true
    }
  }
}
<\/script>
`,Z={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}},nn=m("span",{style:{color:"red"}},"自定义标题VNode",-1);function on(r,n,f,_,e,t){const u=i("YuumiButton"),a=i("YuumiIcon"),c=i("YuumiDialog");return p(),h(Y,null,[o(u,{onClick:t.showDialog},{default:s(()=>[d(" 自定义标题VNode ")]),_:1},8,["onClick"]),o(c,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=l=>e.show=l)},{title:s(()=>[o(a,{icon:"line-help",style:{"vertical-align":"middle","margin-right":"5px"}}),nn]),_:1},8,["modelValue"])],64)}const en=w(Z,[["render",on]]),tn=`<template>
  <YuumiButton @click="showDialog"> 自定义标题VNode </YuumiButton>

  <YuumiDialog v-model="show">
    <template #title>
      <YuumiIcon icon="line-help" style="vertical-align: middle; margin-right: 5px" />
      <span style="color: red">自定义标题VNode</span>
    </template>
  </YuumiDialog>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDialog() {
      this.show = true
    }
  }
}
<\/script>
`,ln={data(){return{show:!1}},methods:{showDialog(){this.show=!0}}};function sn(r,n,f,_,e,t){const u=i("YuumiButton"),a=i("YuumiDialog");return p(),h(Y,null,[o(u,{onClick:t.showDialog},{default:s(()=>[d(" 自定义宽度 ")]),_:1},8,["onClick"]),o(a,{modelValue:e.show,"onUpdate:modelValue":n[0]||(n[0]=c=>e.show=c),title:"自定义宽度",width:"900px"},null,8,["modelValue"])],64)}const un=w(ln,[["render",sn]]),an=`<template>
  <YuumiButton @click="showDialog"> 自定义宽度 </YuumiButton>

  <YuumiDialog v-model="show" title="自定义宽度" width="900px" />
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDialog() {
      this.show = true
    }
  }
}
<\/script>
`,cn={class:"markdown-body"},mn=m("h3",null,"基本用法",-1),rn=m("h3",null,"部分显示",-1),dn=m("h3",null,"自定义按钮文字",-1),pn=m("h3",null,"异步操作",-1),hn=v('<h3>事件监听</h3><p><code class="">close</code>、<code class="">cancel</code>、<code class="">confirm</code>、<code class="">beforeEnter</code>、<code class="">afterEnter</code>、<code class="">beforeLeave</code>、<code class="">afterLeave</code></p>',2),fn=m("h3",null,"阻止穿透",-1),_n=m("p",null,"阻止 window 的滚动",-1),gn=m("h3",null,"自定义标题VNode",-1),wn=m("h3",null,"自定义宽度",-1),Dn={},xn="",vn=x({__name:"index",setup(r,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(f,_)=>{const e=i("example-preview");return p(),h("div",cn,[mn,o(e,{code:g(k)},{default:s(()=>[o(V)]),_:1},8,["code"]),rn,o(e,{code:g(L)},{default:s(()=>[o(I)]),_:1},8,["code"]),dn,o(e,{code:g(P)},{default:s(()=>[o(A)]),_:1},8,["code"]),pn,o(e,{code:g(j)},{default:s(()=>[o(W)]),_:1},8,["code"]),hn,o(e,{code:g(J)},{default:s(()=>[o(H)]),_:1},8,["code"]),fn,_n,o(e,{code:g(X)},{default:s(()=>[o(R)]),_:1},8,["code"]),gn,o(e,{code:g(tn)},{default:s(()=>[o(en)]),_:1},8,["code"]),wn,o(e,{code:g(an)},{default:s(()=>[o(un)]),_:1},8,["code"])])}}});export{vn as default,xn as excerpt,Dn as frontmatter};
