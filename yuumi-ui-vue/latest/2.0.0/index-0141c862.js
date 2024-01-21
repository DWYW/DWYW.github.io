import{_ as x,r,o as p,c as s,d as n,F as c,a as g,f as y,t as f,b as i,e as V,w as d,u as b,g as h}from"./index-569afd91.js";const S={data(){return{value:null}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}]}},methods:{log(o){console.log(o)}}};function Y(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,[n(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:a.options,style:{margin:"0 10px 0 0",width:"100%"},onChange:a.log},null,8,["modelValue","options","onChange"]),(p(),s(c,null,g(["primary","success","warn","danger"],t=>n(u,{key:t,modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=_=>e.value=_),style:{margin:"0 10px 10px 0"},options:a.options,theme:t,onChange:a.log},null,8,["modelValue","options","theme","onChange"])),64))],64)}const C=x(S,[["render",Y]]),E=`<template>
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
`,k={data(){return{value:null}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function w(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,g(["xl","lg","md","sm","xm"],t=>n(u,{key:t,modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=_=>e.value=_),style:{margin:"0 10px 10px 0"},options:a.options,size:t},null,8,["modelValue","options","size"])),64)}const U=x(k,[["render",w]]),O=`<template>
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
`,K={data(){return{value:["香蕉","苹果"]}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function G(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,[n(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:a.options,style:{margin:"0 10px 0 0",width:"100%"},multiple:""},null,8,["modelValue","options"]),(p(),s(c,null,g(["primary","success","warn","danger"],t=>n(u,{key:t,modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=_=>e.value=_),multiple:"",style:{margin:"0 10px 10px 0"},options:a.options,theme:t},null,8,["modelValue","options","theme"])),64))],64)}const P=x(K,[["render",G]]),z=`<template>
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
`,M={data(){return{value:["香蕉","苹果"],value1:"香蕉"}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function B(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s("div",null,[n(u,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value1=t),options:a.options,style:{margin:"0 10px 10px 0"},disabled:""},null,8,["modelValue","options"]),n(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),options:a.options,style:{margin:"0 10px 10px 0"},theme:"success",disabled:"",multiple:""},null,8,["modelValue","options"])])}const T=x(M,[["render",B]]),N=`<template>
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
`,D={data(){return{value:["香蕉","苹果"],value1:"香蕉"}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]}}};function A(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s("div",null,[n(u,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value1=t),options:a.options,style:{margin:"0 10px 10px 0"},readonly:""},null,8,["modelValue","options"]),n(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),options:a.options,style:{margin:"0 10px 10px 0"},theme:"success",readonly:"",multiple:""},null,8,["modelValue","options"])])}const F=x(D,[["render",A]]),I=`<template>
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
`,R={data(){return{value:["丑橘","苹果"],value1:"丑橘"}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]},defaultValueOptions(){return[{label:"丑橘",value:"丑橘"}]}}},L=i("br",null,null,-1);function j(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,[n(u,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value1=t),options:a.options,"fallback-options":a.defaultValueOptions,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","options","fallback-options"]),y(" "+f(e.value1),1),L,n(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),options:a.options,"fallback-options":a.defaultValueOptions,style:{margin:"0 10px 10px 0"},multiple:""},null,8,["modelValue","options","fallback-options"]),y(f(e.value),1)],64)}const q=x(R,[["render",j]]),H=`<template>
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
`,J={data(){return{value:null}},computed:{options(){return[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"哈密瓜",value:"哈密瓜"}]},defaultValueOptions(){return[{label:"丑橘",value:"丑橘"}]}},methods:{filterMethod(o,l){return o.label.indexOf(l)>-1}}};function Q(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,[n(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:a.options,filterable:"",style:{width:"100px",margin:"0 10px 10px 0"}},null,8,["modelValue","options"]),n(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),options:a.options,filterable:"","filter-method":a.filterMethod,style:{width:"100px",margin:"0 10px 10px 0"}},null,8,["modelValue","options","filter-method"])],64)}const W=x(J,[["render",Q]]),X=`<template>
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
`,Z={data(){return{value:"香蕉"}},computed:{optionKey(){return{label:"name",value:"text"}},options(){return[{name:"香蕉",text:"香蕉"},{name:"苹果",text:"苹果"},{name:"梨",text:"梨"},{name:"奇异果",text:"奇异果"},{name:"榴莲",text:"榴莲"},{name:"芒果",text:"芒果"},{name:"橘子",text:"橘子"},{name:"樱桃",text:"樱桃"},{name:"柚子",text:"柚子"},{name:"西瓜",text:"西瓜"},{name:"哈密瓜",text:"哈密瓜"}]}},methods:{onClear(){console.log("on clear console log")}}};function $(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,[n(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:a.options,"option-key":a.optionKey,clearable:"",style:{margin:"0 10px 10px 0"},onClear:a.onClear},null,8,["modelValue","options","option-key","onClear"]),i("span",null,f(e.value),1)],64)}const ee=x(Z,[["render",$]]),le=`<template>
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
`,ne={data(){return{value:null}},computed:{optionKey(){return{label:"name",value:"text"}},options(){return[{name:"香蕉",text:"香蕉"},{name:"苹果",text:"苹果"},{name:"梨",text:"梨"},{name:"奇异果",text:"奇异果"},{name:"榴莲",text:"榴莲"},{name:"芒果",text:"芒果"},{name:"橘子",text:"橘子"},{name:"樱桃",text:"樱桃"},{name:"柚子",text:"柚子"},{name:"西瓜",text:"西瓜"},{name:"哈密瓜",text:"哈密瓜"}]}}};function ae(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,[n(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:a.options,"option-key":a.optionKey,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","options","option-key"]),i("span",null,f(e.value),1)],64)}const te=x(ne,[["render",ae]]),ue=`<template>
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
`,oe={data(){return{}}};function pe(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,[n(u,{style:{margin:"0 10px 10px 0"},options:[]}),n(u,{style:{margin:"0 10px 10px 0"},options:[],"options-empty-placeholder":"请设置相关选项"})],64)}const se=x(oe,[["render",pe]]),ie=`<template>
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
`,re={data(){return{options:[],sigle:"苹果",multiple:["芒果","橘子"]}},computed:{optionsGetter(){return()=>[{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}]},optionsPromiseGetter(){return()=>new Promise(o=>{setTimeout(()=>{o([{label:"香蕉",value:"香蕉"},{label:"苹果",value:"苹果"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}])},5e3)})}},mounted(){setTimeout(()=>{this.options=[{label:"香蕉",value:"香蕉"},{label:"梨",value:"梨"},{label:"奇异果",value:"奇异果"},{label:"榴莲",value:"榴莲"},{label:"芒果",value:"芒果"},{label:"橘子",value:"橘子"},{label:"樱桃",value:"樱桃"},{label:"柚子",value:"柚子"},{label:"西瓜",value:"西瓜"},{label:"阳光玫瑰青提",value:"阳光玫瑰青提"},{label:"哈密瓜",value:"哈密瓜"}]},1e3)},methods:{log(o){console.log(o)}}};function me(o,l,m,v,e,a){const u=r("YuumiSelect");return p(),s(c,null,[n(u,{modelValue:e.sigle,"onUpdate:modelValue":l[0]||(l[0]=t=>e.sigle=t),options:e.options,"options-loader":a.optionsGetter,style:{margin:"0 10px 0 0"},onChange:a.log},null,8,["modelValue","options","options-loader","onChange"]),n(u,{modelValue:e.multiple,"onUpdate:modelValue":l[1]||(l[1]=t=>e.multiple=t),options:[],"options-loader":a.optionsPromiseGetter,style:{margin:"0 10px 0 0"},multiple:"",onChange:a.log},null,8,["modelValue","options-loader","onChange"])],64)}const ve=x(re,[["render",me]]),de=`<template>
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
`,be={class:"markdown-body"},ce=i("h3",null,"基本用法",-1),xe=h('<h3>设置大小</h3><p>可选值为：<code class="">xl</code>、 <code class="">lg</code>、 <code class="">md</code>、 <code class="">sm</code>、 <code class="">xm</code>， 默认值 <code class="">md</code>。</p>',2),_e=i("h3",null,"多选",-1),fe=i("h3",null,"禁用",-1),ge=i("h3",null,"只读",-1),ye=i("h3",null,"初始值不包含在下拉选择项中",-1),Ve=i("h3",null,"单选模式下可搜索",-1),he=i("h3",null,"可清除",-1),Se=i("h3",null,"映射",-1),Ye=i("h3",null,"空选项的提示词",-1),Ce=i("h3",null,"异步选项",-1),ke={},we="",Ue=V({__name:"index",setup(o,{expose:l}){return l({frontmatter:{},excerpt:void 0}),(m,v)=>{const e=r("example-preview");return p(),s("div",be,[ce,n(e,{code:b(E)},{default:d(()=>[n(C)]),_:1},8,["code"]),xe,n(e,{code:b(O)},{default:d(()=>[n(U)]),_:1},8,["code"]),_e,n(e,{code:b(z)},{default:d(()=>[n(P)]),_:1},8,["code"]),fe,n(e,{code:b(N)},{default:d(()=>[n(T)]),_:1},8,["code"]),ge,n(e,{code:b(I)},{default:d(()=>[n(F)]),_:1},8,["code"]),ye,n(e,{code:b(H)},{default:d(()=>[n(q)]),_:1},8,["code"]),Ve,n(e,{code:b(X)},{default:d(()=>[n(W)]),_:1},8,["code"]),he,n(e,{code:b(le)},{default:d(()=>[n(ee)]),_:1},8,["code"]),Se,n(e,{code:b(ue)},{default:d(()=>[n(te)]),_:1},8,["code"]),Ye,n(e,{code:b(ie)},{default:d(()=>[n(se)]),_:1},8,["code"]),Ce,n(e,{code:b(de)},{default:d(()=>[n(ve)]),_:1},8,["code"])])}}});export{Ue as default,we as excerpt,ke as frontmatter};
