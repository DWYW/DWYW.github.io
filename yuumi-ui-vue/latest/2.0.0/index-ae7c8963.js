import{_ as d,r as u,o as r,c as i,d as e,F as f,a as h,h as b,w as t,f as s,e as g,u as m,b as _,g as w}from"./index-569afd91.js";const y={data(){return{value:!1}}};function S(p,n,a,x,l,v){const c=u("YuumiSwitch");return r(),i(f,null,[e(c,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=o=>l.value=o),style:{margin:"0 10px 10px 0"}},null,8,["modelValue"]),e(c,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=o=>l.value=o),style:{margin:"0 10px 10px 0"}},null,8,["modelValue"])],64)}const Y=d(y,[["render",S]]),$=`<template>
  <YuumiSwitch v-model="value" style="margin: 0 10px 10px 0" />
  <YuumiSwitch v-model="value" style="margin: 0 10px 10px 0" />
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
<\/script>
`,V={data(){return{value:null}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function E(p,n,a,x,l,v){const c=u("YuumiSwitch");return r(),i(f,null,h(["xl","lg","md","sm","xm"],o=>e(c,{key:o,style:{margin:"0 10px 10px 0"},size:o},null,8,["size"])),64)}const C=d(V,[["render",E]]),z=`<template>
  <YuumiSwitch
    v-for="size in ['xl', 'lg', 'md', 'sm', 'xm']"
    :key="size"
    style="margin: 0 10px 10px 0"
    :size="size"
  />
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  },
  computed: {
    options() {
      return [
        { label: "香蕉", value: "香蕉" },
        { label: "苹果", value: "苹果" },
        { label: "梨", value: "梨" },
        { label: "奇异果", value: "奇异果" },
        { label: "榴莲", value: "榴莲" },
        { label: "芒果", value: "芒果" },
        { label: "橘子", value: "橘子" },
        { label: "樱桃", value: "樱桃" },
        { label: "柚子", value: "柚子" },
        { label: "西瓜", value: "西瓜" },
        { label: "哈密瓜", value: "哈密瓜" }
      ]
    }
  }
}
<\/script>
`,k={data(){return{value:!1}}};function B(p,n,a,x,l,v){const c=u("YuumiSwitch");return r(),b(c,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=o=>l.value=o),style:{margin:"0 10px 10px 0"},"open-color":"green","close-color":"red"},{open:t(()=>[s(" 开 ")]),close:t(()=>[s(" 关 ")]),_:1},8,["modelValue"])}const N=d(k,[["render",B]]),U=`<template>
  <YuumiSwitch v-model="value" style="margin: 0 10px 10px 0" open-color="green" close-color="red">
    <template #open> 开 </template>
    <template #close> 关 </template>
  </YuumiSwitch>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
<\/script>
`,D={};function F(p,n){const a=u("YuumiSwitch");return r(),i("div",null,[e(a,{style:{margin:"0 10px 10px 0"},disabled:""}),e(a,{style:{margin:"0 10px 10px 0"},"open-color":"green","close-color":"red",disabled:""},{open:t(()=>[s(" 开 ")]),close:t(()=>[s(" 关 ")]),_:1})])}const R=d(D,[["render",F]]),L=`<template>
  <div>
    <YuumiSwitch style="margin: 0 10px 10px 0" disabled />
    <YuumiSwitch style="margin: 0 10px 10px 0" open-color="green" close-color="red" disabled>
      <template #open> 开 </template>
      <template #close> 关 </template>
    </YuumiSwitch>
  </div>
</template>
`,T={};function j(p,n){const a=u("YuumiSwitch");return r(),i("div",null,[e(a,{style:{margin:"0 10px 10px 0"},readonly:""}),e(a,{style:{margin:"0 10px 10px 0"},"open-color":"green","close-color":"red",readonly:""},{open:t(()=>[s(" 开 ")]),close:t(()=>[s(" 关 ")]),_:1})])}const q=d(T,[["render",j]]),A=`<template>
  <div>
    <YuumiSwitch style="margin: 0 10px 10px 0" readonly />
    <YuumiSwitch style="margin: 0 10px 10px 0" open-color="green" close-color="red" readonly>
      <template #open> 开 </template>
      <template #close> 关 </template>
    </YuumiSwitch>
  </div>
</template>
`,G={class:"markdown-body"},H=_("h3",null,"基本用法",-1),I=w('<h3>设置大小</h3><p>可选值为：<code class="">xl</code>、 <code class="">lg</code>、 <code class="">md</code>、 <code class="">sm</code>、 <code class="">xm</code>， 默认值 <code class="">md</code>。</p>',2),J=_("h3",null,"设置颜色和内容",-1),K=_("h3",null,"禁用",-1),M=_("h3",null,"只读",-1),P={},Q="",W=g({__name:"index",setup(p,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(a,x)=>{const l=u("example-preview");return r(),i("div",G,[H,e(l,{code:m($)},{default:t(()=>[e(Y)]),_:1},8,["code"]),I,e(l,{code:m(z)},{default:t(()=>[e(C)]),_:1},8,["code"]),J,e(l,{code:m(U)},{default:t(()=>[e(N)]),_:1},8,["code"]),K,e(l,{code:m(L)},{default:t(()=>[e(R)]),_:1},8,["code"]),M,e(l,{code:m(A)},{default:t(()=>[e(q)]),_:1},8,["code"])])}}});export{W as default,Q as excerpt,P as frontmatter};
