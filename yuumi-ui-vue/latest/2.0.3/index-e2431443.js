import{_ as x,r as s,o as d,c as r,b as l,d as t,F as b,a as g,e as V,w as i,u as v,g as h,f as _}from"./index-098e058d.js";const I={data(){return{value:0}},methods:{onChange(u){console.log("`change` event: ",u)},onInput(u){console.log("`input` event: ",u)},onFocus(u){console.log("`focus` event: ",u)},onBlur(u){console.log("`blur` event: ",u)}}},N={style:{"margin-bottom":"16px"}};function Y(u,n,p,c,e,m){const a=s("YuumiNumberInput");return d(),r(b,null,[l("div",N,[t(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=o=>e.value=o),onChange:m.onChange,onInput:m.onInput,onFocus:m.onFocus,onBlur:m.onBlur},null,8,["modelValue","onChange","onInput","onFocus","onBlur"])]),l("div",null,[t(a,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=o=>e.value=o),disabled:""},null,8,["modelValue"])])],64)}const y=x(I,[["render",Y]]),C=`<template>
  <div style="margin-bottom: 16px">
    <YuumiNumberInput
      v-model="value"
      @change="onChange"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
  <div>
    <YuumiNumberInput v-model="value" disabled />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  },
  methods: {
    onChange(value) {
      console.log("\`change\` event: ", value)
    },
    onInput(value) {
      console.log("\`input\` event: ", value)
    },
    onFocus(e) {
      console.log("\`focus\` event: ", e)
    },
    onBlur(e) {
      console.log("\`blur\` event: ", e)
    }
  }
}
<\/script>
`,$={data(){return{value:10}}};function B(u,n,p,c,e,m){const a=s("YuumiNumberInput");return d(),r("div",null,[t(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=o=>e.value=o),max:10,min:-10},null,8,["modelValue"])])}const E=x($,[["render",B]]),z=`<template>
  <div>
    <YuumiNumberInput v-model="value" :max="10" :min="-10" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 10
    }
  }
}
<\/script>
`,U={data(){return{value:0}}};function F(u,n,p,c,e,m){const a=s("YuumiNumberInput");return d(),r("div",null,[t(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=o=>e.value=o),step:.1},null,8,["modelValue"])])}const k=x(U,[["render",F]]),w=`<template>
  <div>
    <YuumiNumberInput v-model="value" :step="0.1" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  }
}
<\/script>
`,S={data(){return{value:0}}};function P(u,n,p,c,e,m){const a=s("YuumiNumberInput");return d(),r(b,null,g(["xl","lg","md","sm","xm"],o=>l("div",{key:o,style:{"margin-bottom":"10px"}},[t(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=f=>e.value=f),size:o},null,8,["modelValue","size"])])),64)}const R=x(S,[["render",P]]),L=`<template>
  <div v-for="size in ['xl', 'lg', 'md', 'sm', 'xm']" :key="size" style="margin-bottom: 10px">
    <YuumiNumberInput v-model="value" :size="size" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  }
}
<\/script>
`,T={data(){return{value:0}}},j={style:{"margin-bottom":"10px"}},q={style:{"margin-bottom":"10px"}},A={style:{"margin-bottom":"10px"}},D={style:{"margin-bottom":"10px"}};function G(u,n,p,c,e,m){const a=s("YuumiNumberInput");return d(),r(b,null,[l("div",j,[t(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=o=>e.value=o),"hide-btn":"","btn-placement":"default"},null,8,["modelValue"])]),l("div",q,[t(a,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=o=>e.value=o),"btn-placement":"left"},null,8,["modelValue"])]),l("div",A,[t(a,{modelValue:e.value,"onUpdate:modelValue":n[2]||(n[2]=o=>e.value=o),"btn-placement":"right"},null,8,["modelValue"])]),l("div",D,[t(a,{modelValue:e.value,"onUpdate:modelValue":n[3]||(n[3]=o=>e.value=o),size:"xm","btn-placement":"right"},null,8,["modelValue"])])],64)}const H=x(T,[["render",G]]),J=`<template>
  <div style="margin-bottom: 10px">
    <YuumiNumberInput v-model="value" hide-btn btn-placement="default" />
  </div>

  <div style="margin-bottom: 10px">
    <YuumiNumberInput v-model="value" btn-placement="left" />
  </div>

  <div style="margin-bottom: 10px">
    <YuumiNumberInput v-model="value" btn-placement="right" />
  </div>

  <div style="margin-bottom: 10px">
    <YuumiNumberInput v-model="value" size="xm" btn-placement="right" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  }
}
<\/script>
`,K={class:"markdown-body"},M=l("h3",null,"基本用法",-1),O=l("h3",null,"设置范围",-1),Q=l("h3",null,"设置步长",-1),W=h('<h3>设置大小</h3><p>可选值 <code class="">xl</code>、<code class="">lg</code>、<code class="">md</code>、<code class="">sm</code>、<code class="">xm</code>，默认为 <code class="">md</code>。</p>',2),X=l("h3",null,"按钮位置",-1),Z=l("p",null,[_("可选值 "),l("code",{class:""},"default"),_("、"),l("code",{class:""},"left"),_("、"),l("code",{class:""},"right"),_("，默认为 "),l("code",{class:""},"default"),_("。")],-1),ne={},te="",oe=V({__name:"index",setup(u,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(p,c)=>{const e=s("example-preview");return d(),r("div",K,[M,t(e,{code:v(C)},{default:i(()=>[t(y)]),_:1},8,["code"]),O,t(e,{code:v(z)},{default:i(()=>[t(E)]),_:1},8,["code"]),Q,t(e,{code:v(w)},{default:i(()=>[t(k)]),_:1},8,["code"]),W,t(e,{code:v(L)},{default:i(()=>[t(R)]),_:1},8,["code"]),X,Z,t(e,{code:v(J)},{default:i(()=>[t(H)]),_:1},8,["code"])])}}});export{oe as default,te as excerpt,ne as frontmatter};
