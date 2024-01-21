import{_ as g,r as u,o as p,c,F as f,a as x,d as n,w as l,f as s,t as _,e as D,u as v,g as Y,b as i}from"./index-569afd91.js";const B={data(){return{position:"right",show:!1}},methods:{showDrawer(a){this.position=a,this.show=!0}}};function b(a,e,w,h,t,r){const m=u("YuumiButton"),d=u("YuumiDrawer");return p(),c(f,null,[(p(),c(f,null,x(["right","left","top","bottom"],o=>n(m,{key:o,style:{margin:"0 10px 10px 0"},onClick:O=>r.showDrawer(o)},{default:l(()=>[s(_(o),1)]),_:2},1032,["onClick"])),64)),n(d,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=o=>t.show=o),position:t.position},{default:l(()=>[s(_(t.position),1)]),_:1},8,["modelValue","position"])],64)}const L=g(B,[["render",b]]),k=`<template>
  <template v-for="item in ['right', 'left', 'top', 'bottom']" :key="item">
    <YuumiButton style="margin: 0 10px 10px 0" @click="showDrawer(item)">
      {{ item }}
    </YuumiButton>
  </template>

  <YuumiDrawer v-model="show" :position="position">
    {{ position }}
  </YuumiDrawer>
</template>

<script>
export default {
  data() {
    return {
      position: "right",
      show: false
    }
  },
  methods: {
    showDrawer(position) {
      this.position = position
      this.show = true
    }
  }
}
<\/script>
`,C={data(){return{show:!1}},methods:{showDrawer(){this.show=!0},eventLog(a,e){console.log(e,a)}}};function V(a,e,w,h,t,r){const m=u("YuumiButton"),d=u("YuumiDrawer");return p(),c(f,null,[n(m,{onClick:e[0]||(e[0]=o=>r.showDrawer())},{default:l(()=>[s(" 默认(right) ")]),_:1}),n(d,{modelValue:t.show,"onUpdate:modelValue":e[1]||(e[1]=o=>t.show=o),onBeforeOpen:e[2]||(e[2]=o=>r.eventLog(o,"before-open")),onAfterOpen:e[3]||(e[3]=o=>r.eventLog(o,"after-open")),onBeforeClose:e[4]||(e[4]=o=>r.eventLog(o,"before-close")),onAfterClose:e[5]||(e[5]=o=>r.eventLog(o,"after-close"))},{default:l(()=>[s(" events ")]),_:1},8,["modelValue"])],64)}const y=g(C,[["render",V]]),E=`<template>
  <YuumiButton @click="showDrawer()"> 默认(right) </YuumiButton>

  <YuumiDrawer
    v-model="show"
    @before-open="eventLog($event, 'before-open')"
    @after-open="eventLog($event, 'after-open')"
    @before-close="eventLog($event, 'before-close')"
    @after-close="eventLog($event, 'after-close')"
  >
    events
  </YuumiDrawer>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDrawer() {
      this.show = true
    },
    eventLog(el, type) {
      console.log(type, el)
    }
  }
}
<\/script>
`,$={class:"markdown-body"},N=Y('<h3>基本用法</h3><p>position 可选值为 <code class="">top</code>、 <code class="">right</code>、 <code class="">bottom</code>、 <code class="">left</code>， 默认值 <code class="">right</code>。</p>',2),A=i("h3",null,"事件",-1),F=i("p",null,[i("code",{class:""},"before-open"),s(", "),i("code",{class:""},"after-open"),s(", "),i("code",{class:""},"before-close"),s(", "),i("code",{class:""},"after-close"),s("。")],-1),U={},T="",j=D({__name:"index",setup(a,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(w,h)=>{const t=u("example-preview");return p(),c("div",$,[N,n(t,{code:v(k)},{default:l(()=>[n(L)]),_:1},8,["code"]),A,F,n(t,{code:v(E)},{default:l(()=>[n(y)]),_:1},8,["code"])])}}});export{j as default,T as excerpt,U as frontmatter};
