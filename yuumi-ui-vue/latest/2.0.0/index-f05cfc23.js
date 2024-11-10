import{_ as c,r,o as s,c as p,d as a,F as x,a as _,f as h,t as g,b as i,h as y,e as V,w as d,u as b,g as S}from"./index-9f5cfcb2.js";const Y={data(){return{value:null}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}]}},methods:{log(u){console.log(u)}}};function C(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:n.options,style:{margin:"0 10px 0 0",width:"100%"},onChange:n.log},null,8,["modelValue","options","onChange"]),(s(),p(x,null,_(["primary","success","warn","danger"],t=>a(o,{key:t,modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=f=>e.value=f),style:{margin:"0 10px 10px 0"},options:n.options,theme:t,onChange:n.log},null,8,["modelValue","options","theme","onChange"])),64))],64)}const O=c(Y,[["render",C]]),k=`<template>
  <YuumiSelect
    v-model="value"
    :options="options"
    style="margin: 0 10px 0 0; width: 100%"
    @change="log"
  />
  <YuumiSelect
    v-for="theme in ['primary', 'success', 'warn', 'danger']"
    :key="theme"
    v-model="value"
    style="margin: 0 10px 10px 0"
    :options="options"
    :theme="theme"
    @change="log"
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
        { label: "阳光玫瑰青提", value: "阳光玫瑰青提" },
        { label: "哈密瓜", value: "哈密瓜" }
      ]
    }
  },
  methods: {
    log(detail) {
      console.log(detail)
    }
  }
}
<\/script>
`,w={data(){return{value:null}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function E(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,_(["xl","lg","md","sm","xm"],t=>a(o,{key:t,modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=f=>e.value=f),style:{margin:"0 10px 10px 0"},options:n.options,size:t},null,8,["modelValue","options","size"])),64)}const P=c(w,[["render",E]]),U=`<template>
  <YuumiSelect
    v-for="size in ['xl', 'lg', 'md', 'sm', 'xm']"
    :key="size"
    v-model="value"
    style="margin: 0 10px 10px 0"
    :options="options"
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
`,G={data(){return{value:["香蕉","苹果"]}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function T(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:n.options,style:{margin:"0 10px 0 0",width:"100%"},multiple:""},null,8,["modelValue","options"]),(s(),p(x,null,_(["primary","success","warn","danger"],t=>a(o,{key:t,modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=f=>e.value=f),multiple:"",style:{margin:"0 10px 10px 0"},options:n.options,theme:t},null,8,["modelValue","options","theme"])),64))],64)}const K=c(G,[["render",T]]),z=`<template>
  <YuumiSelect
    v-model="value"
    :options="options"
    style="margin: 0 10px 0 0; width: 100%"
    multiple
  />
  <YuumiSelect
    v-for="theme in ['primary', 'success', 'warn', 'danger']"
    :key="theme"
    v-model="value"
    multiple
    style="margin: 0 10px 10px 0"
    :options="options"
    :theme="theme"
  />
</template>

<script>
export default {
  data() {
    return {
      value: ["香蕉", "苹果"]
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
`,B={data(){return{value:["香蕉","苹果"],value1:"香蕉"}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function M(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p("div",null,[a(o,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value1=t),options:n.options,style:{margin:"0 10px 10px 0"},disabled:""},null,8,["modelValue","options"]),a(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),options:n.options,style:{margin:"0 10px 10px 0"},theme:"success",disabled:"",multiple:""},null,8,["modelValue","options"])])}const A=c(B,[["render",M]]),N=`<template>
  <div>
    <YuumiSelect v-model="value1" :options="options" style="margin: 0 10px 10px 0" disabled />
    <YuumiSelect
      v-model="value"
      :options="options"
      style="margin: 0 10px 10px 0"
      theme="success"
      disabled
      multiple
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["香蕉", "苹果"],
      value1: "香蕉"
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
`,R={data(){return{value:["香蕉","苹果"],value1:"香蕉"}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function D(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p("div",null,[a(o,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value1=t),options:n.options,style:{margin:"0 10px 10px 0"},readonly:""},null,8,["modelValue","options"]),a(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),options:n.options,style:{margin:"0 10px 10px 0"},theme:"success",readonly:"",multiple:""},null,8,["modelValue","options"])])}const F=c(R,[["render",D]]),I=`<template>
  <div>
    <YuumiSelect v-model="value1" :options="options" style="margin: 0 10px 10px 0" readonly />
    <YuumiSelect
      v-model="value"
      :options="options"
      style="margin: 0 10px 10px 0"
      theme="success"
      readonly
      multiple
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["香蕉", "苹果"],
      value1: "香蕉"
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
`,L={data(){return{value:["丑橘","苹果"],value1:"丑橘"}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]},defaultValueOptions(){return[{label:"丑橘",value:"丑橘"}]}}},j=i("br",null,null,-1);function q(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value1=t),options:n.options,"fallback-options":n.defaultValueOptions,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","options","fallback-options"]),h(" "+g(e.value1),1),j,a(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),options:n.options,"fallback-options":n.defaultValueOptions,style:{margin:"0 10px 10px 0"},multiple:""},null,8,["modelValue","options","fallback-options"]),h(g(e.value),1)],64)}const H=c(L,[["render",q]]),J=`<template>
  <YuumiSelect
    v-model="value1"
    :options="options"
    :fallback-options="defaultValueOptions"
    style="margin: 0 10px 10px 0"
  />
  {{ value1 }}<br />
  <YuumiSelect
    v-model="value"
    :options="options"
    :fallback-options="defaultValueOptions"
    style="margin: 0 10px 10px 0"
    multiple
  />{{ value }}
</template>

<script>
export default {
  data() {
    return {
      value: ["丑橘", "苹果"],
      value1: "丑橘"
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
    },
    defaultValueOptions() {
      return [{ label: "丑橘", value: "丑橘" }]
    }
  }
}
<\/script>
`,Q={data(){return{value:null}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]},defaultValueOptions(){return[{label:"丑橘",value:"丑橘"}]}},methods:{filterMethod(u,l){return u.label.indexOf(l)>-1}}};function W(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:n.options,filterable:"",style:{width:"100px",margin:"0 10px 10px 0"}},null,8,["modelValue","options"]),a(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),options:n.options,filterable:"","filter-method":n.filterMethod,style:{width:"100px",margin:"0 10px 10px 0"}},null,8,["modelValue","options","filter-method"])],64)}const X=c(Q,[["render",W]]),Z=`<template>
  <YuumiSelect
    v-model="value"
    :options="options"
    filterable
    style="width: 100px; margin: 0 10px 10px 0"
  />
  <YuumiSelect
    v-model="value"
    :options="options"
    filterable
    :filter-method="filterMethod"
    style="width: 100px; margin: 0 10px 10px 0"
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
    },
    defaultValueOptions() {
      return [{ label: "丑橘", value: "丑橘" }]
    }
  },
  methods: {
    filterMethod(item, keyword) {
      return item.label.indexOf(keyword) > -1
    }
  }
}
<\/script>
`,$={data(){return{value:"香蕉"}},computed:{optionKey(){return{label:"name",value:"text"}},options(){return[{name:"香蕉",text:"香蕉"},{name:"苹果",text:"苹果"},{name:"梨",text:"梨"},{name:"奇异果",text:"奇异果"},{name:"榴莲",text:"榴莲"},{name:"芒果",text:"芒果"},{name:"橘子",text:"橘子"},{name:"樱桃",text:"樱桃"},{name:"柚子",text:"柚子"},{name:"西瓜",text:"西瓜"},{name:"哈密瓜",text:"哈密瓜"}]}},methods:{onClear(){console.log("on clear console log")}}};function ee(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:n.options,"option-key":n.optionKey,clearable:"",style:{margin:"0 10px 10px 0"},onClear:n.onClear},null,8,["modelValue","options","option-key","onClear"]),i("span",null,g(e.value),1)],64)}const le=c($,[["render",ee]]),ne=`<template>
  <YuumiSelect
    v-model="value"
    :options="options"
    :option-key="optionKey"
    clearable
    style="margin: 0 10px 10px 0"
    @clear="onClear"
  />
  <span>{{ value }}</span>
</template>

<script>
export default {
  data() {
    return {
      value: "香蕉"
    }
  },
  computed: {
    optionKey() {
      return {
        label: "name",
        value: "text"
      }
    },
    options() {
      return [
        { name: "香蕉", text: "香蕉" },
        { name: "苹果", text: "苹果" },
        { name: "梨", text: "梨" },
        { name: "奇异果", text: "奇异果" },
        { name: "榴莲", text: "榴莲" },
        { name: "芒果", text: "芒果" },
        { name: "橘子", text: "橘子" },
        { name: "樱桃", text: "樱桃" },
        { name: "柚子", text: "柚子" },
        { name: "西瓜", text: "西瓜" },
        { name: "哈密瓜", text: "哈密瓜" }
      ]
    }
  },
  methods: {
    onClear() {
      console.log("on clear console log")
    }
  }
}
<\/script>
`,ae={data(){return{value:null}},computed:{optionKey(){return{label:"name",value:"text"}},options(){return[{name:"香蕉",text:"香蕉"},{name:"苹果",text:"苹果"},{name:"梨",text:"梨"},{name:"奇异果",text:"奇异果"},{name:"榴莲",text:"榴莲"},{name:"芒果",text:"芒果"},{name:"橘子",text:"橘子"},{name:"樱桃",text:"樱桃"},{name:"柚子",text:"柚子"},{name:"西瓜",text:"西瓜"},{name:"哈密瓜",text:"哈密瓜"}]}}};function te(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:n.options,"option-key":n.optionKey,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","options","option-key"]),i("span",null,g(e.value),1)],64)}const oe=c(ae,[["render",te]]),ue=`<template>
  <YuumiSelect
    v-model="value"
    :options="options"
    :option-key="optionKey"
    style="margin: 0 10px 10px 0"
  />
  <span>{{ value }}</span>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  },
  computed: {
    optionKey() {
      return {
        label: "name",
        value: "text"
      }
    },
    options() {
      return [
        { name: "香蕉", text: "香蕉" },
        { name: "苹果", text: "苹果" },
        { name: "梨", text: "梨" },
        { name: "奇异果", text: "奇异果" },
        { name: "榴莲", text: "榴莲" },
        { name: "芒果", text: "芒果" },
        { name: "橘子", text: "橘子" },
        { name: "樱桃", text: "樱桃" },
        { name: "柚子", text: "柚子" },
        { name: "西瓜", text: "西瓜" },
        { name: "哈密瓜", text: "哈密瓜" }
      ]
    }
  }
}
<\/script>
`,se={data(){return{}}};function pe(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{style:{margin:"0 10px 10px 0"},options:[]}),a(o,{style:{margin:"0 10px 10px 0"},options:[],"options-empty-placeholder":"请设置相关选项"})],64)}const ie=c(se,[["render",pe]]),re=`<template>
  <YuumiSelect style="margin: 0 10px 10px 0" :options="[]" />

  <YuumiSelect
    style="margin: 0 10px 10px 0"
    :options="[]"
    options-empty-placeholder="请设置相关选项"
  />
</template>

<script>
export default {
  data() {
    return {}
  }
}
<\/script>
`,me={data(){return{options:[],sigle:"苹果",multiple:["芒果","橘子"]}},computed:{optionsGetter(){return()=>[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}]},optionsPromiseGetter(){return()=>new Promise(u=>{setTimeout(()=>{u([{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}])},5e3)})}},mounted(){setTimeout(()=>{this.options=[{label:"香蕉",value:"香蕉"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}]},1e3)},methods:{log(u){console.log(u)}}};function ve(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{modelValue:e.sigle,"onUpdate:modelValue":l[0]||(l[0]=t=>e.sigle=t),options:e.options,"options-loader":n.optionsGetter,style:{margin:"0 10px 0 0"},onChange:n.log},null,8,["modelValue","options","options-loader","onChange"]),a(o,{modelValue:e.multiple,"onUpdate:modelValue":l[1]||(l[1]=t=>e.multiple=t),options:[],"options-loader":n.optionsPromiseGetter,style:{margin:"0 10px 0 0"},multiple:"",onChange:n.log},null,8,["modelValue","options-loader","onChange"])],64)}const de=c(me,[["render",ve]]),be=`<template>
  <YuumiSelect
    v-model="sigle"
    :options="options"
    :options-loader="optionsGetter"
    style="margin: 0 10px 0 0"
    @change="log"
  />

  <YuumiSelect
    v-model="multiple"
    :options="[]"
    :options-loader="optionsPromiseGetter"
    style="margin: 0 10px 0 0"
    multiple
    @change="log"
  />
</template>

<script>
export default {
  data() {
    return {
      options: [],
      sigle: "苹果",
      multiple: ["芒果", "橘子"]
    }
  },
  computed: {
    optionsGetter() {
      return () => [
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
        { label: "阳光玫瑰青提", value: "阳光玫瑰青提" },
        { label: "哈密瓜", value: "哈密瓜" }
      ]
    },
    optionsPromiseGetter() {
      return () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve([
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
              { label: "阳光玫瑰青提", value: "阳光玫瑰青提" },
              { label: "哈密瓜", value: "哈密瓜" }
            ])
          }, 5000)
        })
    }
  },
  mounted() {
    setTimeout(() => {
      this.options = [
        { label: "香蕉", value: "香蕉" },
        { label: "梨", value: "梨" },
        { label: "奇异果", value: "奇异果" },
        { label: "榴莲", value: "榴莲" },
        { label: "芒果", value: "芒果" },
        { label: "橘子", value: "橘子" },
        { label: "樱桃", value: "樱桃" },
        { label: "柚子", value: "柚子" },
        { label: "西瓜", value: "西瓜" },
        { label: "阳光玫瑰青提", value: "阳光玫瑰青提" },
        { label: "哈密瓜", value: "哈密瓜" }
      ]
    }, 1000)
  },
  methods: {
    log(detail) {
      console.log(detail)
    }
  }
}
<\/script>
`,ce={data(){return{options:[],sigle:"苹果",multiple:["苹果"]}},computed:{defaultValueOptions(){return[{label:"苹果",value:"苹果"}]},optionsPromiseGetter(){return()=>new Promise(u=>{setTimeout(()=>{u([{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}])},200)})}},methods:{log(u){console.log(u)}}};function xe(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),p(x,null,[a(o,{modelValue:e.sigle,"onUpdate:modelValue":l[0]||(l[0]=t=>e.sigle=t),filterable:"","fallback-options":n.defaultValueOptions,remote:"","remote-method":n.optionsPromiseGetter,style:{margin:"0 10px 0 0"},onChange:n.log},null,8,["modelValue","fallback-options","remote-method","onChange"]),a(o,{modelValue:e.multiple,"onUpdate:modelValue":l[1]||(l[1]=t=>e.multiple=t),"fallback-options":n.defaultValueOptions,remote:"","remote-method":n.optionsPromiseGetter,style:{margin:"0 10px 0 0"},multiple:"",onChange:n.log},null,8,["modelValue","fallback-options","remote-method","onChange"])],64)}const fe=c(ce,[["render",xe]]),ge=`<template>
  <YuumiSelect
    v-model="sigle"
    filterable
    :fallback-options="defaultValueOptions"
    remote
    :remote-method="optionsPromiseGetter"
    style="margin: 0 10px 0 0"
    @change="log"
  />

  <YuumiSelect
    v-model="multiple"
    :fallback-options="defaultValueOptions"
    remote
    :remote-method="optionsPromiseGetter"
    style="margin: 0 10px 0 0"
    multiple
    @change="log"
  />
</template>

<script>
export default {
  data() {
    return {
      options: [],
      sigle: "苹果",
      multiple: ["苹果"]
    }
  },
  computed: {
    defaultValueOptions() {
      return [{ label: "苹果", value: "苹果" }]
    },
    optionsPromiseGetter() {
      return () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve([
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
              { label: "阳光玫瑰青提", value: "阳光玫瑰青提" },
              { label: "哈密瓜", value: "哈密瓜" }
            ])
          }, 200)
        })
    }
  },
  methods: {
    log(detail) {
      console.log(detail)
    }
  }
}
<\/script>
`,_e={data(){return{defaultValueOptions:[{label:"苹果",value:"苹果"}],createdOptions:[],sigle:""}},computed:{optionsPromiseGetter(){return()=>new Promise(u=>{setTimeout(()=>{u([{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"},...this.createdOptions])},200)})}},methods:{log(u){console.log(u)},onCreate(u){this.defaultValueOptions.push(u),setTimeout(()=>{const l={value:u.label,label:u.label};this.createdOptions.push(l),this.sigle=l.value,this.defaultValueOptions=[l]},400)}}};function he(u,l,m,v,e,n){const o=r("YuumiSelect");return s(),y(o,{modelValue:e.sigle,"onUpdate:modelValue":l[0]||(l[0]=t=>e.sigle=t),filterable:"","fallback-options":e.defaultValueOptions,remote:"","remote-method":n.optionsPromiseGetter,style:{margin:"0 10px 0 0"},onChange:n.log,"allow-create":"",onCreate:n.onCreate},null,8,["modelValue","fallback-options","remote-method","onChange","onCreate"])}const ye=c(_e,[["render",he]]),Ve=`<template>
  <YuumiSelect
    v-model="sigle"
    filterable
    :fallback-options="defaultValueOptions"
    remote
    :remote-method="optionsPromiseGetter"
    style="margin: 0 10px 0 0"
    @change="log"
    allow-create
    @create="onCreate"
  />
</template>

<script>
export default {
  data() {
    return {
      defaultValueOptions: [{ label: "苹果", value: "苹果" }],
      createdOptions: [],
      sigle: ""
    }
  },
  computed: {
    optionsPromiseGetter() {
      return () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve([
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
              { label: "阳光玫瑰青提", value: "阳光玫瑰青提" },
              { label: "哈密瓜", value: "哈密瓜" },
              ...this.createdOptions
            ])
          }, 200)
        })
    }
  },
  methods: {
    log(detail) {
      console.log(detail)
    },
    onCreate(detail) {
      this.defaultValueOptions.push(detail)
      setTimeout(() => {
        const _option = { value: detail.label, label: detail.label }
        this.createdOptions.push(_option)
        this.sigle = _option.value
        this.defaultValueOptions = [_option]
      }, 400)
    }
  }
}
<\/script>
`,Se={class:"markdown-body"},Ye=i("h3",null,"基本用法",-1),Ce=S('<h3>设置大小</h3><p>可选值为：<code class="">xl</code>、 <code class="">lg</code>、 <code class="">md</code>、 <code class="">sm</code>、 <code class="">xm</code>， 默认值 <code class="">md</code>。</p>',2),Oe=i("h3",null,"多选",-1),ke=i("h3",null,"禁用",-1),we=i("h3",null,"只读",-1),Ee=i("h3",null,"初始值不包含在下拉选择项中",-1),Pe=i("h3",null,"单选模式下可搜索",-1),Ue=i("h3",null,"可清除",-1),Ge=i("h3",null,"映射",-1),Te=i("h3",null,"空选项的提示词",-1),Ke=i("h3",null,"异步选项",-1),ze=i("h3",null,"远程加载",-1),Be=i("h3",null,"新建条目",-1),Ae={},Ne="",Re=V({__name:"index",setup(u,{expose:l}){return l({frontmatter:{},excerpt:void 0}),(m,v)=>{const e=r("example-preview");return s(),p("div",Se,[Ye,a(e,{code:b(k)},{default:d(()=>[a(O)]),_:1},8,["code"]),Ce,a(e,{code:b(U)},{default:d(()=>[a(P)]),_:1},8,["code"]),Oe,a(e,{code:b(z)},{default:d(()=>[a(K)]),_:1},8,["code"]),ke,a(e,{code:b(N)},{default:d(()=>[a(A)]),_:1},8,["code"]),we,a(e,{code:b(I)},{default:d(()=>[a(F)]),_:1},8,["code"]),Ee,a(e,{code:b(J)},{default:d(()=>[a(H)]),_:1},8,["code"]),Pe,a(e,{code:b(Z)},{default:d(()=>[a(X)]),_:1},8,["code"]),Ue,a(e,{code:b(ne)},{default:d(()=>[a(le)]),_:1},8,["code"]),Ge,a(e,{code:b(ue)},{default:d(()=>[a(oe)]),_:1},8,["code"]),Te,a(e,{code:b(re)},{default:d(()=>[a(ie)]),_:1},8,["code"]),Ke,a(e,{code:b(be)},{default:d(()=>[a(de)]),_:1},8,["code"]),ze,a(e,{code:b(ge)},{default:d(()=>[a(fe)]),_:1},8,["code"]),Be,a(e,{code:b(Ve)},{default:d(()=>[a(ye)]),_:1},8,["code"])])}}});export{Re as default,Ne as excerpt,Ae as frontmatter};
