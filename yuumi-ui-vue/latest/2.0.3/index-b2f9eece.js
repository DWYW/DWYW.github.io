import{_ as v,r,o as m,c as x,b as d,d as o,t as y,F as c,h as b,e as D,w as g,u as p}from"./index-098e058d.js";const h={data(){return{value1:null,value2:null}},methods:{log(a,e){console.log(a,e)}}},V={style:{margin:"0 10px 10px 0"}},w={style:{margin:"0 10px 10px 0"}};function f(a,e,i,s,l,t){const u=r("YuumiDatePicker");return m(),x(c,null,[d("div",V,[o(u,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value1=n),style:{"margin-right":"10px"},onChange:e[1]||(e[1]=n=>t.log("change",n))},null,8,["modelValue"]),o(u,{modelValue:l.value1,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value1=n),onChange:e[3]||(e[3]=n=>t.log("change",n))},null,8,["modelValue"]),d("div",null,y(l.value1),1)]),d("div",w,[o(u,{modelValue:l.value2,"onUpdate:modelValue":e[4]||(e[4]=n=>l.value2=n),type:"datetime",style:{"margin-right":"10px"},onChange:e[5]||(e[5]=n=>t.log("change",n))},null,8,["modelValue"]),o(u,{modelValue:l.value2,"onUpdate:modelValue":e[6]||(e[6]=n=>l.value2=n),type:"datetime",onChange:e[7]||(e[7]=n=>t.log("change",n))},null,8,["modelValue"]),d("div",null,y(l.value2),1)])],64)}const Y=v(h,[["render",f]]),k=`<template>
  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker v-model="value1" style="margin-right: 10px" @change="log('change', $event)" />

    <YuumiDatePicker v-model="value1" @change="log('change', $event)" />

    <div>{{ value1 }}</div>
  </div>

  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value2"
      type="datetime"
      style="margin-right: 10px"
      @change="log('change', $event)"
    />

    <YuumiDatePicker v-model="value2" type="datetime" @change="log('change', $event)" />

    <div>{{ value2 }}</div>
  </div>
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
    log(type, value) {
      console.log(type, value)
    }
  }
}
<\/script>
`,P={data(){return{value1:null,value2:null}},methods:{log(a,e){console.log(a,e)}}},C={style:{margin:"0 10px 10px 0"}},_={style:{margin:"0 10px 10px 0"}};function S(a,e,i,s,l,t){const u=r("YuumiDatePicker");return m(),x(c,null,[d("div",C,[o(u,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value1=n),type:"range",style:{margin:"0 10px 10px 0"},onChange:e[1]||(e[1]=n=>t.log("change",n))},null,8,["modelValue"]),o(u,{modelValue:l.value1,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value1=n),type:"range",onChange:e[3]||(e[3]=n=>t.log("change",n))},null,8,["modelValue"]),d("div",null,y(l.value1),1)]),d("div",_,[o(u,{modelValue:l.value2,"onUpdate:modelValue":e[4]||(e[4]=n=>l.value2=n),type:"rangetime",style:{margin:"0 10px 10px 0"},onChange:e[5]||(e[5]=n=>t.log("change",n))},null,8,["modelValue"]),o(u,{modelValue:l.value2,"onUpdate:modelValue":e[6]||(e[6]=n=>l.value2=n),type:"rangetime",onChange:e[7]||(e[7]=n=>t.log("change",n))},null,8,["modelValue"]),d("div",null,y(l.value2),1)])],64)}const U=v(P,[["render",S]]),M=`<template>
  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value1"
      type="range"
      style="margin: 0 10px 10px 0"
      @change="log('change', $event)"
    />
    <YuumiDatePicker v-model="value1" type="range" @change="log('change', $event)" />

    <div>{{ value1 }}</div>
  </div>

  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value2"
      type="rangetime"
      style="margin: 0 10px 10px 0"
      @change="log('change', $event)"
    />
    <YuumiDatePicker v-model="value2" type="rangetime" @change="log('change', $event)" />

    <div>{{ value2 }}</div>
  </div>
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
    log(type, value) {
      console.log(type, value)
    }
  }
}
<\/script>
`,H={data(){return{value1:null,value2:null}},methods:{log(a,e){console.log(a,e)}}};function E(a,e,i,s,l,t){const u=r("YuumiDatePicker");return m(),x(c,null,[o(u,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value1=n),type:"range",disabled:"",style:{margin:"0 10px 10px 0"},onChange:e[1]||(e[1]=n=>t.log("change",n))},null,8,["modelValue"]),o(u,{modelValue:l.value2,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value2=n),type:"rangetime",disabled:"",style:{margin:"0 10px 10px 0"},onChange:e[3]||(e[3]=n=>t.log("change",n))},null,8,["modelValue"])],64)}const B=v(H,[["render",E]]),F=`<template>
  <YuumiDatePicker
    v-model="value1"
    type="range"
    disabled
    style="margin: 0 10px 10px 0"
    @change="log('change', $event)"
  />

  <YuumiDatePicker
    v-model="value2"
    type="rangetime"
    disabled
    style="margin: 0 10px 10px 0"
    @change="log('change', $event)"
  />
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
    log(type, value) {
      console.log(type, value)
    }
  }
}
<\/script>
`,T={data(){return{value1:null,value2:null}},methods:{log(a,e){console.log(a,e)},disabledBeforeDates(a){return a.getTime()<Date.now()},disabledAfterDates(a){return a.getTime()>Date.now()}}};function A(a,e,i,s,l,t){const u=r("YuumiDatePicker");return m(),x(c,null,[o(u,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value1=n),"disabled-dates":t.disabledBeforeDates,style:{margin:"0 10px 10px 0"},onChange:e[1]||(e[1]=n=>t.log("change",n))},null,8,["modelValue","disabled-dates"]),o(u,{modelValue:l.value2,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value2=n),type:"range","disabled-dates":t.disabledAfterDates,style:{margin:"0 10px 10px 0"},onChange:e[3]||(e[3]=n=>t.log("change",n))},null,8,["modelValue","disabled-dates"])],64)}const N=v(T,[["render",A]]),j=`<template>
  <YuumiDatePicker
    v-model="value1"
    :disabled-dates="disabledBeforeDates"
    style="margin: 0 10px 10px 0"
    @change="log('change', $event)"
  />

  <YuumiDatePicker
    v-model="value2"
    type="range"
    :disabled-dates="disabledAfterDates"
    style="margin: 0 10px 10px 0"
    @change="log('change', $event)"
  />
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
    log(type, value) {
      console.log(type, value)
    },
    disabledBeforeDates(value) {
      return value.getTime() < Date.now()
    },
    disabledAfterDates(value) {
      return value.getTime() > Date.now()
    }
  }
}
<\/script>
`,q={data(){const a=new Date;return a.setHours(0),a.setMinutes(0),a.setSeconds(0),{value1:new Date(a.toString()),value2:[new Date(a.toString()),new Date(a.toString())],value3:new Date(a.toString()),value4:[new Date(a.toString()),new Date(a.toString())],value5:new Date(a.toString()),value6:[new Date(a.toString()),new Date(a.toString())]}},methods:{log(a,e){console.log(a,e)},disabledHours({year:a,month:e,date:i}){const s=new Date;return s.getFullYear()===a&&s.getMonth()===e&&s.getDate()===i?[0,1,2,3,4,5,6]:[]},disabledMinutes({year:a,month:e,date:i,hours:s}){const l=new Date;return l.getFullYear()===a&&l.getMonth()===e&&l.getDate()===i&&s===7?[0,1,2,3,4,5,6]:[]},disabledSeconds({year:a,month:e,date:i,hours:s,minutes:l}){const t=new Date;return t.getFullYear()===a&&t.getMonth()===e&&t.getDate()===i&&s===7&&l===7?[0,1,2,3,4,5,6,7,8]:[]}}},z={style:{margin:"0 10px 10px 0"}},G={style:{margin:"0 10px 10px 0"}},I={style:{margin:"0 10px 10px 0"}},J={style:{margin:"0 10px 10px 0"}},K={style:{margin:"0 10px 10px 0"}},L={style:{margin:"0 10px 10px 0"}};function O(a,e,i,s,l,t){const u=r("YuumiDatePicker");return m(),x(c,null,[d("div",z,[o(u,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value1=n),type:"datetime","disabled-hours":t.disabledHours,onChange:e[1]||(e[1]=n=>t.log("change",n))},null,8,["modelValue","disabled-hours"])]),d("div",G,[o(u,{modelValue:l.value2,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value2=n),type:"rangetime","disabled-hours":t.disabledHours,onChange:e[3]||(e[3]=n=>t.log("change",n))},null,8,["modelValue","disabled-hours"])]),d("div",I,[o(u,{modelValue:l.value3,"onUpdate:modelValue":e[4]||(e[4]=n=>l.value3=n),type:"datetime","disabled-hours":t.disabledHours,"disabled-minutes":t.disabledMinutes,onChange:e[5]||(e[5]=n=>t.log("change",n))},null,8,["modelValue","disabled-hours","disabled-minutes"])]),d("div",J,[o(u,{modelValue:l.value4,"onUpdate:modelValue":e[6]||(e[6]=n=>l.value4=n),type:"rangetime","disabled-hours":t.disabledHours,"disabled-minutes":t.disabledMinutes,onChange:e[7]||(e[7]=n=>t.log("change",n))},null,8,["modelValue","disabled-hours","disabled-minutes"])]),d("div",K,[o(u,{modelValue:l.value5,"onUpdate:modelValue":e[8]||(e[8]=n=>l.value5=n),type:"datetime","disabled-hours":t.disabledHours,"disabled-minutes":t.disabledMinutes,"disabled-seconds":t.disabledSeconds,onChange:e[9]||(e[9]=n=>t.log("change",n))},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])]),d("div",L,[o(u,{modelValue:l.value6,"onUpdate:modelValue":e[10]||(e[10]=n=>l.value6=n),type:"rangetime","disabled-hours":t.disabledHours,"disabled-minutes":t.disabledMinutes,"disabled-seconds":t.disabledSeconds,onChange:e[11]||(e[11]=n=>t.log("change",n))},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])])],64)}const Q=v(q,[["render",O]]),R=`<template>
  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value1"
      type="datetime"
      :disabled-hours="disabledHours"
      @change="log('change', $event)"
    />
  </div>

  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value2"
      type="rangetime"
      :disabled-hours="disabledHours"
      @change="log('change', $event)"
    />
  </div>

  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value3"
      type="datetime"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      @change="log('change', $event)"
    />
  </div>

  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value4"
      type="rangetime"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      @change="log('change', $event)"
    />
  </div>

  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value5"
      type="datetime"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
      @change="log('change', $event)"
    />
  </div>

  <div style="margin: 0 10px 10px 0">
    <YuumiDatePicker
      v-model="value6"
      type="rangetime"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
      @change="log('change', $event)"
    />
  </div>
</template>

<script>
export default {
  data() {
    const now = new Date()
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)
    return {
      value1: new Date(now.toString()),
      value2: [new Date(now.toString()), new Date(now.toString())],
      value3: new Date(now.toString()),
      value4: [new Date(now.toString()), new Date(now.toString())],
      value5: new Date(now.toString()),
      value6: [new Date(now.toString()), new Date(now.toString())]
    }
  },
  methods: {
    log(type, value) {
      console.log(type, value)
    },
    disabledHours({ year, month, date }) {
      const now = new Date()
      if (now.getFullYear() === year && now.getMonth() === month && now.getDate() === date) {
        return [0, 1, 2, 3, 4, 5, 6]
      } else {
        return []
      }
    },
    disabledMinutes({ year, month, date, hours }) {
      const now = new Date()
      if (
        now.getFullYear() === year &&
        now.getMonth() === month &&
        now.getDate() === date &&
        hours === 7
      ) {
        return [0, 1, 2, 3, 4, 5, 6]
      } else {
        return []
      }
    },

    disabledSeconds({ year, month, date, hours, minutes }) {
      const now = new Date()
      if (
        now.getFullYear() === year &&
        now.getMonth() === month &&
        now.getDate() === date &&
        hours === 7 &&
        minutes === 7
      ) {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8]
      } else {
        return []
      }
    }
  }
}
<\/script>
`,W={data(){return{value1:null,value2:null}},methods:{log(a,e){console.log(a,e)}}};function X(a,e,i,s,l,t){const u=r("YuumiDatePicker");return m(),x(c,null,[o(u,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value1=n),clearable:"",style:{margin:"0 10px 10px 0"},onChange:e[1]||(e[1]=n=>t.log("change",n))},null,8,["modelValue"]),o(u,{modelValue:l.value2,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value2=n),type:"range",clearable:"",style:{margin:"0 10px 10px 0"},onChange:e[3]||(e[3]=n=>t.log("change",n))},null,8,["modelValue"])],64)}const Z=v(W,[["render",X]]),$=`<template>
  <YuumiDatePicker
    v-model="value1"
    clearable
    style="margin: 0 10px 10px 0"
    @change="log('change', $event)"
  />
  <YuumiDatePicker
    v-model="value2"
    type="range"
    clearable
    style="margin: 0 10px 10px 0"
    @change="log('change', $event)"
  />
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
    log(type, value) {
      console.log(type, value)
    }
  }
}
<\/script>
`,ee={data(){return{value:null}},methods:{log(a,e){console.log(a,e)}}};function ne(a,e,i,s,l,t){const u=r("YuumiDatePicker");return m(),b(u,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n),type:"range",maxdays:7,style:{margin:"0 10px 10px 0"},onChange:e[1]||(e[1]=n=>t.log("change",n))},null,8,["modelValue"])}const le=v(ee,[["render",ne]]),te=`<template>
  <YuumiDatePicker
    v-model="value"
    type="range"
    :maxdays="7"
    style="margin: 0 10px 10px 0"
    @change="log('change', $event)"
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
    log(type, value) {
      console.log(type, value)
    }
  }
}
<\/script>
`,ae={class:"markdown-body"},oe=d("h3",null,"基本用法",-1),ue=d("h3",null,"范围选择",-1),de=d("h3",null,"禁用",-1),se=d("h3",null,"禁用日期",-1),ie=d("h3",null,"禁用时间",-1),re=d("h3",null,"一键清除",-1),me=d("h3",null,"最长天数",-1),pe={},ve="",xe=D({__name:"index",setup(a,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(i,s)=>{const l=r("example-preview");return m(),x("div",ae,[oe,o(l,{code:p(k)},{default:g(()=>[o(Y)]),_:1},8,["code"]),ue,o(l,{code:p(M)},{default:g(()=>[o(U)]),_:1},8,["code"]),de,o(l,{code:p(F)},{default:g(()=>[o(B)]),_:1},8,["code"]),se,o(l,{code:p(j)},{default:g(()=>[o(N)]),_:1},8,["code"]),ie,o(l,{code:p(R)},{default:g(()=>[o(Q)]),_:1},8,["code"]),re,o(l,{code:p($)},{default:g(()=>[o(Z)]),_:1},8,["code"]),me,o(l,{code:p(te)},{default:g(()=>[o(le)]),_:1},8,["code"])])}}});export{xe as default,ve as excerpt,pe as frontmatter};
