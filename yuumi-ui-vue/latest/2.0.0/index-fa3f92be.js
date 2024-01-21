import{_ as k,r as d,o as r,c as p,d as o,w as u,f as a,F as h,b as c,t as x,a as _,h as b,e as f,u as C,g as Y}from"./index-569afd91.js";const y={data(){return{value1:null,value2:null}},methods:{onchange(i){console.log(i)},consoleLog(i,n){console.log(i,n)}}};function V(i,n,g,v,e,s){const t=d("YuumiCheckbox");return r(),p(h,null,[o(t,{modelValue:e.value1,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value1=l),unique:"香蕉",style:{margin:"0 10px 10px 0"},onChange:n[1]||(n[1]=l=>s.consoleLog(l,e.value1))},{default:u(()=>[a(" 香蕉 ")]),_:1},8,["modelValue"]),o(t,{modelValue:e.value2,"onUpdate:modelValue":n[2]||(n[2]=l=>e.value2=l),unique:"苹果",style:{margin:"0 10px 10px 0"},onChange:n[3]||(n[3]=l=>s.consoleLog(l,e.value2))},{default:u(()=>[a(" 苹果 ")]),_:1},8,["modelValue"])],64)}const q=k(y,[["render",V]]),L=`<template>
  <YuumiCheckbox
    v-model="value1"
    unique="香蕉"
    style="margin: 0 10px 10px 0"
    @change="consoleLog($event, value1)"
  >
    香蕉
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value2"
    unique="苹果"
    style="margin: 0 10px 10px 0"
    @change="consoleLog($event, value2)"
  >
    苹果
  </YuumiCheckbox>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null
    }
  },
  methods: {
    onchange(e) {
      console.log(e)
    },
    consoleLog(detail, value) {
      console.log(detail, value)
    }
  }
}
<\/script>
`,G={data(){return{value:null}},methods:{consoleLog(i){console.log(i)}}};function B(i,n,g,v,e,s){const t=d("YuumiCheckbox");return r(),p(h,null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),size:"xl",unique:"香蕉",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 香蕉 ")]),_:1},8,["modelValue","onChange"]),o(t,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value=l),size:"lg",unique:"苹果",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 苹果 ")]),_:1},8,["modelValue","onChange"]),o(t,{modelValue:e.value,"onUpdate:modelValue":n[2]||(n[2]=l=>e.value=l),size:"md",unique:"梨",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 梨 ")]),_:1},8,["modelValue","onChange"]),o(t,{modelValue:e.value,"onUpdate:modelValue":n[3]||(n[3]=l=>e.value=l),size:"sm",unique:"橘子",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 橘子 ")]),_:1},8,["modelValue","onChange"]),o(t,{modelValue:e.value,"onUpdate:modelValue":n[4]||(n[4]=l=>e.value=l),size:"xm",unique:"柚子",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 柚子 ")]),_:1},8,["modelValue","onChange"]),c("div",null,"是否选中："+x(e.value),1)],64)}const A=k(G,[["render",B]]),D=`<template>
  <YuumiCheckbox
    v-model="value"
    size="xl"
    unique="香蕉"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    香蕉
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value"
    size="lg"
    unique="苹果"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    苹果
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value"
    size="md"
    unique="梨"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    梨
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value"
    size="sm"
    unique="橘子"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    橘子
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value"
    size="xm"
    unique="柚子"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    柚子
  </YuumiCheckbox>
  <div>是否选中：{{ value }}</div>
</template>
<script>
export default {
  data() {
    return {
      value: null
    }
  },
  methods: {
    consoleLog(value) {
      console.log(value)
    }
  }
}
<\/script>
`,U={data(){return{value:!0}},methods:{consoleLog(i){console.log(i)}}};function E(i,n,g,v,e,s){const t=d("YuumiCheckbox");return r(),p(h,null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),disabled:"",unique:"香蕉",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 香蕉 ")]),_:1},8,["modelValue","onChange"]),o(t,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value=l),disabled:"",unique:"苹果",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 苹果 ")]),_:1},8,["modelValue","onChange"]),o(t,{modelValue:e.value,"onUpdate:modelValue":n[2]||(n[2]=l=>e.value=l),disabled:"",unique:"梨",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 梨 ")]),_:1},8,["modelValue","onChange"]),o(t,{modelValue:e.value,"onUpdate:modelValue":n[3]||(n[3]=l=>e.value=l),disabled:"",unique:"橘子",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 橘子 ")]),_:1},8,["modelValue","onChange"]),o(t,{modelValue:e.value,"onUpdate:modelValue":n[4]||(n[4]=l=>e.value=l),disabled:"",unique:"柚子",style:{margin:"0 10px 10px 0"},onChange:s.consoleLog},{default:u(()=>[a(" 柚子 ")]),_:1},8,["modelValue","onChange"]),c("div",null,"是否选中："+x(e.value),1)],64)}const z=k(U,[["render",E]]),w=`<template>
  <YuumiCheckbox
    v-model="value"
    disabled
    unique="香蕉"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    香蕉
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value"
    disabled
    unique="苹果"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    苹果
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value"
    disabled
    unique="梨"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    梨
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value"
    disabled
    unique="橘子"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    橘子
  </YuumiCheckbox>
  <YuumiCheckbox
    v-model="value"
    disabled
    unique="柚子"
    style="margin: 0 10px 10px 0"
    @change="consoleLog"
  >
    柚子
  </YuumiCheckbox>
  <div>是否选中：{{ value }}</div>
</template>
<script>
export default {
  data() {
    return {
      value: true
    }
  },
  methods: {
    consoleLog(value) {
      console.log(value)
    }
  }
}
<\/script>
`,N={data(){return{value:null}},methods:{consoleLog(i){console.log(i)}}};function S(i,n,g,v,e,s){const t=d("YuumiCheckbox");return r(),p(h,null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),unique:"设置",style:{margin:"0 10px 10px 0"},"checked-icon":{icon:"flat-lock"},"unchecked-icon":{icon:"flat-unlock"},onChange:s.consoleLog},{default:u(()=>[a(" 是否锁定 ")]),_:1},8,["modelValue","onChange"]),c("div",null,"当前选择的为："+x(e.value),1)],64)}const I=k(N,[["render",S]]),F=`<template>
  <YuumiCheckbox
    v-model="value"
    unique="设置"
    style="margin: 0 10px 10px 0"
    :checked-icon="{ icon: 'flat-lock' }"
    :unchecked-icon="{ icon: 'flat-unlock' }"
    @change="consoleLog"
  >
    是否锁定
  </YuumiCheckbox>
  <div>当前选择的为：{{ value }}</div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  },
  methods: {
    consoleLog(value) {
      console.log(value)
    }
  }
}
<\/script>
`,T={data(){return{value:null}},methods:{consoleLog(i){console.log(i)}}},j=c("div",null,"你最喜欢的水果是？（多选）",-1);function H(i,n,g,v,e,s){const t=d("YuumiCheckbox"),l=d("YuumiCheckboxGroup");return r(),p(h,null,[j,o(l,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=m=>e.value=m),onChange:s.consoleLog},{default:u(()=>[o(t,{unique:"A",style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(" A. 香蕉 ")]),_:1}),o(t,{unique:"B",style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(" B. 苹果 ")]),_:1}),o(t,{unique:"C",style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(" C. 柚子 ")]),_:1}),o(t,{unique:"D",style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(" D. 西瓜 ")]),_:1})]),_:1},8,["modelValue","onChange"]),c("div",null,"当前选择的为："+x(e.value),1)],64)}const J=k(T,[["render",H]]),K=`<template>
  <div>你最喜欢的水果是？（多选）</div>
  <YuumiCheckboxGroup v-model="value" @change="consoleLog">
    <YuumiCheckbox unique="A" style="margin: 0 10px 10px 0"> A. 香蕉 </YuumiCheckbox>
    <YuumiCheckbox unique="B" style="margin: 0 10px 10px 0"> B. 苹果 </YuumiCheckbox>
    <YuumiCheckbox unique="C" style="margin: 0 10px 10px 0"> C. 柚子 </YuumiCheckbox>
    <YuumiCheckbox unique="D" style="margin: 0 10px 10px 0"> D. 西瓜 </YuumiCheckbox>
  </YuumiCheckboxGroup>
  <div>当前选择的为：{{ value }}</div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  },
  methods: {
    consoleLog(value) {
      console.log(value)
    }
  }
}
<\/script>
`,M={data(){return{value:["A"]}},methods:{consoleLog(i){console.log(i)}}},O=c("div",null,"你最喜欢的水果是？（多选）",-1);function P(i,n,g,v,e,s){const t=d("YuumiCheckbox"),l=d("YuumiCheckboxGroup");return r(),p(h,null,[O,o(l,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=m=>e.value=m),disabled:"",onChange:s.consoleLog},{default:u(()=>[o(t,{unique:"A",style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(" A. 香蕉 ")]),_:1}),o(t,{unique:"B",style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(" B. 苹果 ")]),_:1}),o(t,{unique:"C",style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(" C. 柚子 ")]),_:1}),o(t,{unique:"D",style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(" D. 西瓜 ")]),_:1})]),_:1},8,["modelValue","onChange"]),c("div",null,"当前选择的为："+x(e.value),1)],64)}const Q=k(M,[["render",P]]),R=`<template>
  <div>你最喜欢的水果是？（多选）</div>
  <YuumiCheckboxGroup v-model="value" disabled @change="consoleLog">
    <YuumiCheckbox unique="A" style="margin: 0 10px 10px 0"> A. 香蕉 </YuumiCheckbox>
    <YuumiCheckbox unique="B" style="margin: 0 10px 10px 0"> B. 苹果 </YuumiCheckbox>
    <YuumiCheckbox unique="C" style="margin: 0 10px 10px 0"> C. 柚子 </YuumiCheckbox>
    <YuumiCheckbox unique="D" style="margin: 0 10px 10px 0"> D. 西瓜 </YuumiCheckbox>
  </YuumiCheckboxGroup>
  <div>当前选择的为：{{ value }}</div>
</template>

<script>
export default {
  data() {
    return {
      value: ["A"]
    }
  },
  methods: {
    consoleLog(value) {
      console.log(value)
    }
  }
}
<\/script>
`,W={data(){return{value:!1,fruits:[{key:"A",name:"香蕉"},{key:"B",name:"苹果"},{key:"C",name:"柚子"},{key:"D",name:"西瓜"}],selected:[]}},computed:{indeterminate(){return this.selected.length!==this.fruits.length&&this.selected.length>0}},methods:{onAllChanged(i){this.selected=i.checked?this.fruits.map(n=>n.key):[]},onGroupChange(){this.selected.length===this.fruits.length&&!this.value?this.value=!0:this.selected.length!==this.fruits.length&&this.value&&(this.value=!1)}}},X=c("div",null,"你最喜欢的水果是？（多选）",-1);function Z(i,n,g,v,e,s){const t=d("YuumiCheckbox"),l=d("YuumiCheckboxGroup");return r(),p(h,null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=m=>e.value=m),unique:"all",style:{margin:"0 10px 10px 0"},indeterminate:s.indeterminate,onChange:s.onAllChanged},{default:u(()=>[a(" 全选 ")]),_:1},8,["modelValue","indeterminate","onChange"]),X,o(l,{modelValue:e.selected,"onUpdate:modelValue":n[1]||(n[1]=m=>e.selected=m),onChange:s.onGroupChange},{default:u(()=>[(r(!0),p(h,null,_(e.fruits,m=>(r(),b(t,{key:m.key,unique:m.key,style:{margin:"0 10px 10px 0"}},{default:u(()=>[a(x(m.key)+". "+x(m.name),1)]),_:2},1032,["unique"]))),128))]),_:1},8,["modelValue","onChange"]),c("div",null,"当前选择的为："+x(e.selected),1)],64)}const $=k(W,[["render",Z]]),ee=`<template>
  <YuumiCheckbox
    v-model="value"
    unique="all"
    style="margin: 0 10px 10px 0"
    :indeterminate="indeterminate"
    @change="onAllChanged"
  >
    全选
  </YuumiCheckbox>

  <div>你最喜欢的水果是？（多选）</div>

  <YuumiCheckboxGroup v-model="selected" @change="onGroupChange">
    <template v-for="item in fruits" :key="item.key">
      <YuumiCheckbox :unique="item.key" style="margin: 0 10px 10px 0">
        {{ item.key }}. {{ item.name }}
      </YuumiCheckbox>
    </template>
  </YuumiCheckboxGroup>

  <div>当前选择的为：{{ selected }}</div>
</template>
<script>
export default {
  data() {
    return {
      value: false,
      fruits: [
        { key: "A", name: "香蕉" },
        { key: "B", name: "苹果" },
        { key: "C", name: "柚子" },
        { key: "D", name: "西瓜" }
      ],
      selected: []
    }
  },
  computed: {
    indeterminate() {
      return this.selected.length !== this.fruits.length && this.selected.length > 0
    }
  },
  methods: {
    onAllChanged(detail) {
      this.selected = detail.checked ? this.fruits.map(item => item.key) : []
    },

    onGroupChange() {
      if (this.selected.length === this.fruits.length && !this.value) {
        this.value = true
      } else if (this.selected.length !== this.fruits.length && this.value) {
        this.value = false
      }
    }
  }
}
<\/script>
`,ne={data(){return{value:["A"]}},methods:{consoleLog(i){console.log(i)}}},oe=c("div",null,"你最喜欢的水果是？（多选）",-1);function ue(i,n,g,v,e,s){const t=d("YuumiCheckbox"),l=d("YuumiCheckboxGroup");return r(),p(h,null,[oe,o(l,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=m=>e.value=m),block:"",onChange:s.consoleLog},{default:u(()=>[o(t,{unique:"A"},{default:u(()=>[a(" A. 香蕉 ")]),_:1}),o(t,{unique:"B"},{default:u(()=>[a(" B. 苹果 ")]),_:1}),o(t,{unique:"C"},{default:u(()=>[a(" C. 柚子 ")]),_:1}),o(t,{unique:"D"},{default:u(()=>[a(" D. 西瓜 ")]),_:1})]),_:1},8,["modelValue","onChange"]),c("div",null,"当前选择的为："+x(e.value),1)],64)}const le=k(ne,[["render",ue]]),te=`<template>
  <div>你最喜欢的水果是？（多选）</div>
  <YuumiCheckboxGroup v-model="value" block @change="consoleLog">
    <YuumiCheckbox unique="A"> A. 香蕉 </YuumiCheckbox>
    <YuumiCheckbox unique="B"> B. 苹果 </YuumiCheckbox>
    <YuumiCheckbox unique="C"> C. 柚子 </YuumiCheckbox>
    <YuumiCheckbox unique="D"> D. 西瓜 </YuumiCheckbox>
  </YuumiCheckboxGroup>
  <div>当前选择的为：{{ value }}</div>
</template>

<script>
export default {
  data() {
    return {
      value: ["A"]
    }
  },
  methods: {
    consoleLog(value) {
      console.log(value)
    }
  }
}
<\/script>
`,ae={class:"markdown-body"},ie=c("h2",null,"checkbox 复选框",-1),se=c("h3",null,"基本用法",-1),ce=Y('<h3>设置大小</h3><p>可选值为：<code class="">xl</code>、 <code class="">lg</code>、 <code class="">md</code>、 <code class="">sm</code>、 <code class="">xm</code>， 默认值 <code class="">md</code>。</p>',2),me=c("h3",null,"禁用",-1),de=c("h3",null,"更改图标",-1),re=c("h2",null,"checkbox-group 复选组",-1),pe=c("h3",null,"基本用法",-1),xe=c("h3",null,"禁用",-1),he=c("h3",null,"中间状态",-1),ge=c("p",null,[a("可以通过 "),c("code",{class:""},"indeterminateIcon"),a(" 设置中间态的icon。")],-1),ve=c("h3",null,"block",-1),ke={},_e="",be=f({__name:"index",setup(i,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(g,v)=>{const e=d("example-preview");return r(),p("div",ae,[ie,se,o(e,{code:C(L)},{default:u(()=>[o(q)]),_:1},8,["code"]),ce,o(e,{code:C(D)},{default:u(()=>[o(A)]),_:1},8,["code"]),me,o(e,{code:C(w)},{default:u(()=>[o(z)]),_:1},8,["code"]),de,o(e,{code:C(F)},{default:u(()=>[o(I)]),_:1},8,["code"]),re,pe,o(e,{code:C(K)},{default:u(()=>[o(J)]),_:1},8,["code"]),xe,o(e,{code:C(R)},{default:u(()=>[o(Q)]),_:1},8,["code"]),he,ge,o(e,{code:C(ee)},{default:u(()=>[o($)]),_:1},8,["code"]),ve,o(e,{code:C(te)},{default:u(()=>[o(le)]),_:1},8,["code"])])}}});export{be as default,_e as excerpt,ke as frontmatter};
