import{_ as v,r,k as T,l as x,o as c,h as f,w as n,d as a,f as s,t as u,j as w,e as Y,c as L,u as _,b}from"./index-9f5cfcb2.js";const C={data(){return{loading:!0,value:"京"}},mounted(){this.showLoading()},methods:{showLoading(){this.loading=!0,setTimeout(()=>{this.loading=!1},400)}}};function k(i,t,d,p,e,l){const o=r("YuumiTabItem"),h=r("YuumiTabs"),g=T("loading");return x((c(),f(h,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=m=>e.value=m),onChange:l.showLoading},{default:n(()=>[a(o,{label:"北京市",value:"京"},{label:n(m=>[s(u(m.label)+"(首都) ",1)]),default:n(()=>[s(" 北京市 简称 "+u(e.value),1)]),_:1}),a(o,{label:"上海市",value:"沪"},{default:n(()=>[s(" 上海市 简称 "+u(e.value),1)]),_:1}),a(o,{label:"天津市",value:"津"},{default:n(()=>[s(" 天津市 简称 "+u(e.value),1)]),_:1}),a(o,{label:"重庆市",value:"渝"},{default:n(()=>[s(" 重庆市 简称 "+u(e.value),1)]),_:1})]),_:1},8,["modelValue","onChange"])),[[g,e.loading]])}const I=v(C,[["render",k]]),D=`<template>
  <YuumiTabs v-model="value" v-loading="loading" @change="showLoading">
    <YuumiTabItem label="北京市" value="京">
      <template #label="$props"> {{ $props.label }}(首都) </template>

      北京市 简称 {{ value }}
    </YuumiTabItem>
    <YuumiTabItem label="上海市" value="沪"> 上海市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="天津市" value="津"> 天津市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="重庆市" value="渝"> 重庆市 简称 {{ value }} </YuumiTabItem>
  </YuumiTabs>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      value: "京"
    }
  },
  mounted() {
    this.showLoading()
  },
  methods: {
    showLoading() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
      }, 400)
    }
  }
}
<\/script>
`,y={methods:{showLoading(){const{createLoading:i,removeLoading:t}=this.$yuumi,d=i();setTimeout(()=>{t(d)},1e3)}}};function B(i,t,d,p,e,l){const o=r("YuumiButton");return c(),f(o,{onClick:l.showLoading},{default:n(()=>[s(" show global loading ")]),_:1},8,["onClick"])}const V=v(y,[["render",B]]),E=`<template>
  <YuumiButton @click="showLoading"> show global loading </YuumiButton>
</template>

<script>
export default {
  methods: {
    showLoading() {
      const { createLoading, removeLoading } = this.$yuumi
      const vnode = createLoading()

      setTimeout(() => {
        removeLoading(vnode)
      }, 1000)
    }
  }
}
<\/script>
`,N={data(){return{spinner:"circle",loading:!1}},computed:{loadingData(){let i=this.spinner;return i==="custom"&&(i=w("svg",{width:"48px",height:"48px",viewBox:"0 0 100 100",innerHTML:'<path fill="none" stroke="#e90c59" stroke-width="8" stroke-dasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px"><animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"/></path>'})),{value:this.loading,spinner:i}}},mounted(){this.showLoading()},methods:{showLoading(){this.loading=!0,setTimeout(()=>{this.loading=!1},400)}}};function $(i,t,d,p,e,l){const o=r("YuumiTabItem"),h=r("YuumiTabs"),g=T("loading");return x((c(),f(h,{modelValue:e.spinner,"onUpdate:modelValue":t[0]||(t[0]=m=>e.spinner=m),onChange:l.showLoading},{default:n(()=>[a(o,{label:"圆环",value:"circle"},{default:n(()=>[s(u(l.loadingData),1)]),_:1}),a(o,{label:"方块",value:"rect"},{default:n(()=>[s(u(l.loadingData),1)]),_:1}),a(o,{label:"自定义",value:"custom"},{default:n(()=>[s(u(l.loadingData),1)]),_:1})]),_:1},8,["modelValue","onChange"])),[[g,l.loadingData]])}const M=v(N,[["render",$]]),z=`<template>
  <YuumiTabs v-model="spinner" v-loading="loadingData" @change="showLoading">
    <YuumiTabItem label="圆环" value="circle">
      {{ loadingData }}
    </YuumiTabItem>
    <YuumiTabItem label="方块" value="rect">
      {{ loadingData }}
    </YuumiTabItem>
    <YuumiTabItem label="自定义" value="custom">
      {{ loadingData }}
    </YuumiTabItem>
  </YuumiTabs>
</template>

<script>
import { h } from "vue"

export default {
  data() {
    return {
      spinner: "circle",
      loading: false
    }
  },
  computed: {
    loadingData() {
      let spinner = this.spinner

      if (spinner === "custom") {
        spinner = h("svg", {
          width: "48px",
          height: "48px",
          viewBox: "0 0 100 100",
          innerHTML: \`<path fill="none" stroke="#e90c59" stroke-width="8" stroke-dasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px"><animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"/></path>\`
        })
      }

      return {
        value: this.loading,
        spinner: spinner
      }
    }
  },
  mounted() {
    this.showLoading()
  },
  methods: {
    showLoading() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
      }, 400)
    }
  }
}
<\/script>
`,G={class:"markdown-body"},H=b("h3",null,"局部加载",-1),U=b("h3",null,"全局加载",-1),j=b("h3",null,"自定义loading",-1),q={},A="",F=Y({__name:"index",setup(i,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(d,p)=>{const e=r("example-preview");return c(),L("div",G,[H,a(e,{code:_(D)},{default:n(()=>[a(I)]),_:1},8,["code"]),U,a(e,{code:_(E)},{default:n(()=>[a(V)]),_:1},8,["code"]),j,a(e,{code:_(z)},{default:n(()=>[a(M)]),_:1},8,["code"])])}}});export{F as default,A as excerpt,q as frontmatter};
