import{_ as x,r,o as t,c as g,d as a,F as b,a as _,b as s,t as i,h as f,e as C,w as c,u as v,g as V}from"./index-569afd91.js";const k={data(){return{value:"17:05:04",value1:""}},methods:{onChange(o){console.log("onChange",o)}}};function y(o,n,m,p,e,u){const d=r("YuumiTimePicker");return t(),g(b,null,[a(d,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),style:{margin:"0 10px 10px 0"},"disabled-hours":()=>[19,20,21],onChange:u.onChange},null,8,["modelValue","onChange"]),a(d,{modelValue:e.value1,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value1=l),style:{margin:"0 10px 10px 0"},onChange:u.onChange},null,8,["modelValue","onChange"])],64)}const P=x(k,[["render",y]]),T=`<template>
  <YuumiTimePicker
    v-model="value"
    style="margin: 0 10px 10px 0"
    :disabled-hours="() => [19, 20, 21]"
    @change="onChange"
  />
  <YuumiTimePicker v-model="value1" style="margin: 0 10px 10px 0" @change="onChange" />
</template>

<script>
export default {
  data() {
    return {
      value: "17:05:04",
      value1: ""
    }
  },
  methods: {
    onChange(detail) {
      console.log("onChange", detail)
    }
  }
}
<\/script>
`,Y={data(){return{value:["17:05:04","18:05:04"],value1:[]}},methods:{onChange(o){console.log("onChange",o)}}};function E(o,n,m,p,e,u){const d=r("YuumiTimePicker");return t(),g(b,null,[a(d,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),range:"",style:{margin:"0 10px 10px 0"},onChange:u.onChange},null,8,["modelValue","onChange"]),a(d,{modelValue:e.value1,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value1=l),range:"",style:{margin:"0 10px 10px 0"},onChange:u.onChange},null,8,["modelValue","onChange"])],64)}const U=x(Y,[["render",E]]),H=`<template>
  <YuumiTimePicker v-model="value" range style="margin: 0 10px 10px 0" @change="onChange" />
  <YuumiTimePicker v-model="value1" range style="margin: 0 10px 10px 0" @change="onChange" />
</template>

<script>
export default {
  data() {
    return {
      value: ["17:05:04", "18:05:04"],
      value1: []
    }
  },
  methods: {
    onChange(detail) {
      console.log("onChange", detail)
    }
  }
}
<\/script>
`,S={data(){return{value:null}},methods:{onChange(o){console.log("onChange",o)}}};function M(o,n,m,p,e,u){const d=r("YuumiTimePicker");return t(),g(b,null,_(["xl","lg","md","sm","xm"],l=>a(d,{key:l,modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=h=>e.value=h),style:{margin:"0 10px 10px 0"},size:l,onChange:u.onChange},null,8,["modelValue","size","onChange"])),64)}const z=x(S,[["render",M]]),B=`<template>
  <YuumiTimePicker
    v-for="size in ['xl', 'lg', 'md', 'sm', 'xm']"
    :key="size"
    v-model="value"
    style="margin: 0 10px 10px 0"
    :size="size"
    @change="onChange"
  />
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  },
  methods: {
    onChange(detail) {
      console.log("onChange", detail)
    }
  }
}
<\/script>
`,w={data(){return{value:null,value1:null,value2:null,value3:"00:00:00",value4:["00:00:00","00:00:18"]}},methods:{disabledHours(){return[0,1,2,3,4,5]},disabledMinutes(o){return o===6?[0,1,2,3,4,5]:[58,59]},disabledSeconds(o,n){return n===6?[0,1,2,3,4,5]:[58,59]}}};function F(o,n,m,p,e,u){const d=r("YuumiTimePicker");return t(),g(b,null,[a(d,{disabled:"",style:{margin:"0 10px 10px 0"}}),a(d,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),disabled:"",style:{margin:"0 10px 10px 0"}},null,8,["modelValue"]),a(d,{modelValue:e.value1,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value1=l),"disabled-hours":u.disabledHours,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","disabled-hours"]),a(d,{modelValue:e.value2,"onUpdate:modelValue":n[2]||(n[2]=l=>e.value2=l),"disabled-hours":u.disabledHours,"disabled-minutes":u.disabledMinutes,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","disabled-hours","disabled-minutes"]),a(d,{modelValue:e.value3,"onUpdate:modelValue":n[3]||(n[3]=l=>e.value3=l),"disabled-hours":u.disabledHours,"disabled-minutes":u.disabledMinutes,"disabled-seconds":u.disabledSeconds,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"]),a(d,{modelValue:e.value4,"onUpdate:modelValue":n[4]||(n[4]=l=>e.value4=l),range:"","disabled-hours":u.disabledHours,"disabled-minutes":u.disabledMinutes,"disabled-seconds":u.disabledSeconds,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"]),s("div",null,"value -> "+i(e.value),1),s("div",null,"value1 -> "+i(e.value1),1),s("div",null,"value2 -> "+i(e.value2),1),s("div",null,"value3 -> "+i(e.value3),1),s("div",null,"value4 -> "+i(e.value4),1)],64)}const D=x(w,[["render",F]]),N=`<template>
  <YuumiTimePicker disabled style="margin: 0 10px 10px 0" />
  <YuumiTimePicker v-model="value" disabled style="margin: 0 10px 10px 0" />

  <YuumiTimePicker v-model="value1" :disabled-hours="disabledHours" style="margin: 0 10px 10px 0" />
  <YuumiTimePicker
    v-model="value2"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    style="margin: 0 10px 10px 0"
  />
  <YuumiTimePicker
    v-model="value3"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    style="margin: 0 10px 10px 0"
  />

  <YuumiTimePicker
    v-model="value4"
    range
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    style="margin: 0 10px 10px 0"
  />

  <div>value -> {{ value }}</div>
  <div>value1 -> {{ value1 }}</div>
  <div>value2 -> {{ value2 }}</div>
  <div>value3 -> {{ value3 }}</div>
  <div>value4 -> {{ value4 }}</div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      value1: null,
      value2: null,
      value3: "00:00:00",
      value4: ["00:00:00", "00:00:18"]
    }
  },
  methods: {
    disabledHours() {
      return [0, 1, 2, 3, 4, 5]
    },
    disabledMinutes(hour) {
      if (hour === 6) return [0, 1, 2, 3, 4, 5]
      return [58, 59]
    },
    disabledSeconds(_hour, minute) {
      if (minute === 6) return [0, 1, 2, 3, 4, 5]
      return [58, 59]
    }
  }
}
<\/script>
`,R={data(){return{value1:null,value2:null}}};function L(o,n,m,p,e,u){const d=r("YuumiTimePicker");return t(),g(b,null,[a(d,{modelValue:e.value1,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value1=l),style:{margin:"0 10px 10px 0"},clearable:""},null,8,["modelValue"]),a(d,{modelValue:e.value2,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value2=l),style:{margin:"0 10px 10px 0"},clearable:"",range:""},null,8,["modelValue"]),s("div",null,"value1 ==> "+i(e.value1),1),s("div",null,"value2 ==> "+i(e.value2),1)],64)}const j=x(R,[["render",L]]),q=`<template>
  <YuumiTimePicker v-model="value1" style="margin: 0 10px 10px 0" clearable />
  <YuumiTimePicker v-model="value2" style="margin: 0 10px 10px 0" clearable range />

  <div>value1 ==> {{ value1 }}</div>
  <div>value2 ==> {{ value2 }}</div>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null
    }
  }
}
<\/script>
`,A={data(){return{value:null}}};function G(o,n,m,p,e,u){const d=r("YuumiTimePicker");return t(),f(d,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),format:"h:m",style:{margin:"0 10px 10px 0"},clearable:""},null,8,["modelValue"])}const I=x(A,[["render",G]]),J=`<template>
  <YuumiTimePicker v-model="value" format="h:m" style="margin: 0 10px 10px 0" clearable />
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  }
}
<\/script>
`,K={class:"markdown-body"},O=s("h3",null,"基本用法",-1),Q=s("h3",null,"范围选择",-1),W=V('<h3>设置大小</h3><p>可选值为：<code class="">xl</code>、 <code class="">lg</code>、 <code class="">md</code>、 <code class="">sm</code>、 <code class="">xm</code>， 默认值 <code class="">md</code>。</p>',2),X=s("h3",null,"禁用",-1),Z=s("h3",null,"可清除",-1),$=s("h3",null,"其他格式",-1),ne={},le="",ae=C({__name:"index",setup(o,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(m,p)=>{const e=r("example-preview");return t(),g("div",K,[O,a(e,{code:v(T)},{default:c(()=>[a(P)]),_:1},8,["code"]),Q,a(e,{code:v(H)},{default:c(()=>[a(U)]),_:1},8,["code"]),W,a(e,{code:v(B)},{default:c(()=>[a(z)]),_:1},8,["code"]),X,a(e,{code:v(N)},{default:c(()=>[a(D)]),_:1},8,["code"]),Z,a(e,{code:v(q)},{default:c(()=>[a(j)]),_:1},8,["code"]),$,a(e,{code:v(J)},{default:c(()=>[a(I)]),_:1},8,["code"])])}}});export{ae as default,le as excerpt,ne as frontmatter};
