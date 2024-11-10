import{_ as I,r as b,o as T,c as f,f as a,t,d as u,w as l,F as c,h as x,b as Y,e as g,u as d}from"./index-9f5cfcb2.js";const h={data(){return{value:"京"}},methods:{onChange(s){console.log("changed",s)}}};function C(s,i,_,r,e,p){const n=b("YuumiTabItem"),m=b("YuumiTabs");return T(),f(c,null,[a(" 当前选择的为："+t(e.value)+" ",1),u(m,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=v=>e.value=v),onChange:p.onChange},{default:l(()=>[u(n,{label:"北京市",value:"京"},{default:l(()=>[a(" 北京市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"上海市",value:"沪"},{default:l(()=>[a(" 上海市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"天津市",value:"津"},{default:l(()=>[a(" 天津市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"重庆市",value:"渝"},{default:l(()=>[a(" 重庆市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"河北省",value:"冀"},{default:l(()=>[a(" 河北省 简称 "+t(e.value),1)]),_:1}),u(n,{label:"河南省",value:"豫"},{default:l(()=>[a(" 河南省 简称 "+t(e.value),1)]),_:1}),u(n,{label:"山东省",value:"鲁"},{default:l(()=>[a(" 山东省 简称 "+t(e.value),1)]),_:1}),u(n,{label:"山西省",value:"晋"},{default:l(()=>[a(" 山西省 简称 "+t(e.value),1)]),_:1}),u(n,{label:"新疆维吾尔自治区",value:"新"},{default:l(()=>[a(" 新疆维吾尔自治区 简称 "+t(e.value),1)]),_:1}),u(n,{label:"西藏自治区",value:"藏"},{default:l(()=>[a(" 西藏自治区 简称 "+t(e.value),1)]),_:1})]),_:1},8,["modelValue","onChange"])],64)}const y=I(h,[["render",C]]),V=`<template>
  当前选择的为：{{ value }}
  <YuumiTabs v-model="value" @change="onChange">
    <YuumiTabItem label="北京市" value="京"> 北京市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="上海市" value="沪"> 上海市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="天津市" value="津"> 天津市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="重庆市" value="渝"> 重庆市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="河北省" value="冀"> 河北省 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="河南省" value="豫"> 河南省 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="山东省" value="鲁"> 山东省 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="山西省" value="晋"> 山西省 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="新疆维吾尔自治区" value="新">
      新疆维吾尔自治区 简称 {{ value }}
    </YuumiTabItem>
    <YuumiTabItem label="西藏自治区" value="藏"> 西藏自治区 简称 {{ value }} </YuumiTabItem>
  </YuumiTabs>
</template>

<script>
export default {
  data() {
    return {
      value: "京"
    }
  },
  methods: {
    onChange(detail) {
      console.log("changed", detail)
    }
  }
}
<\/script>
`,B={data(){return{value:"京"}}};function k(s,i,_,r,e,p){const n=b("YuumiTabItem"),m=b("YuumiTabs");return T(),x(m,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=v=>e.value=v),type:"card"},{default:l(()=>[u(n,{label:"北京市",value:"京"},{default:l(()=>[a(" 北京市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"上海市",value:"沪"},{default:l(()=>[a(" 上海市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"天津市",value:"津"},{default:l(()=>[a(" 天津市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"重庆市",value:"渝"},{default:l(()=>[a(" 重庆市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"河北省",value:"冀"},{default:l(()=>[a(" 河北省 简称 "+t(e.value),1)]),_:1}),u(n,{label:"河南省",value:"豫"},{default:l(()=>[a(" 河南省 简称 "+t(e.value),1)]),_:1}),u(n,{label:"山东省",value:"鲁"},{default:l(()=>[a(" 山东省 简称 "+t(e.value),1)]),_:1}),u(n,{label:"山西省",value:"晋"},{default:l(()=>[a(" 山西省 简称 "+t(e.value),1)]),_:1}),u(n,{label:"新疆维吾尔自治区",value:"新"},{default:l(()=>[a(" 新疆维吾尔自治区 简称 "+t(e.value),1)]),_:1}),u(n,{label:"西藏自治区",value:"藏"},{default:l(()=>[a(" 西藏自治区 简称 "+t(e.value),1)]),_:1})]),_:1},8,["modelValue"])}const P=I(B,[["render",k]]),E=`<template>
  <YuumiTabs v-model="value" type="card">
    <YuumiTabItem label="北京市" value="京"> 北京市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="上海市" value="沪"> 上海市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="天津市" value="津"> 天津市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="重庆市" value="渝"> 重庆市 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="河北省" value="冀"> 河北省 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="河南省" value="豫"> 河南省 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="山东省" value="鲁"> 山东省 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="山西省" value="晋"> 山西省 简称 {{ value }} </YuumiTabItem>
    <YuumiTabItem label="新疆维吾尔自治区" value="新">
      新疆维吾尔自治区 简称 {{ value }}
    </YuumiTabItem>
    <YuumiTabItem label="西藏自治区" value="藏"> 西藏自治区 简称 {{ value }} </YuumiTabItem>
  </YuumiTabs>
</template>

<script>
export default {
  data() {
    return {
      value: "京"
    }
  }
}
<\/script>
`,w={data(){return{value:"京"}}};function U(s,i,_,r,e,p){const n=b("YuumiTabItem"),m=b("YuumiTabs");return T(),x(m,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=v=>e.value=v)},{default:l(()=>[u(n,{label:"北京市",value:"京"},{label:l(v=>[a(t(v.label)+"(首都) ",1)]),default:l(()=>[a(" 北京市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"上海市",value:"沪"},{default:l(()=>[a(" 上海市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"天津市",value:"津"},{default:l(()=>[a(" 天津市 简称 "+t(e.value),1)]),_:1}),u(n,{label:"重庆市",value:"渝"},{default:l(()=>[a(" 重庆市 简称 "+t(e.value),1)]),_:1})]),_:1},8,["modelValue"])}const N=I(w,[["render",U]]),F=`<template>
  <YuumiTabs v-model="value">
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
      value: "京"
    }
  }
}
<\/script>
`,D={data(){return{position:"left",value:"鲁"}},methods:{setPosition(s){this.position=s}}},S={style:{height:"200px"}},j={style:{height:"200px"}};function q(s,i,_,r,e,p){const n=b("YuumiButton"),m=b("YuumiTabItem"),v=b("YuumiTabs");return T(),f(c,null,[u(n,{style:{margin:"0 10px 10px 0"},onClick:i[0]||(i[0]=o=>p.setPosition("top"))},{default:l(()=>[a(" top ")]),_:1}),u(n,{style:{margin:"0 10px 10px 0"},onClick:i[1]||(i[1]=o=>p.setPosition("bottom"))},{default:l(()=>[a(" bottom ")]),_:1}),u(n,{style:{margin:"0 10px 10px 0"},onClick:i[2]||(i[2]=o=>p.setPosition("left"))},{default:l(()=>[a(" left ")]),_:1}),u(n,{style:{margin:"0 10px 10px 0"},onClick:i[3]||(i[3]=o=>p.setPosition("right"))},{default:l(()=>[a(" right ")]),_:1}),Y("div",S,[u(v,{modelValue:e.value,"onUpdate:modelValue":i[4]||(i[4]=o=>e.value=o),position:e.position},{default:l(()=>[u(m,{label:"北京市",value:"京"},{label:l(o=>[a(t(o.label)+"(首都) ",1)]),default:l(()=>[a(" 北京市 简称 "+t(e.value),1)]),_:1}),u(m,{label:"上海市",value:"沪"},{default:l(()=>[a(" 上海市 简称 "+t(e.value),1)]),_:1}),u(m,{label:"天津市",value:"津"},{default:l(()=>[a(" 天津市 简称 "+t(e.value),1)]),_:1}),u(m,{label:"重庆市",value:"渝"},{default:l(()=>[a(" 重庆市 简称 "+t(e.value),1)]),_:1}),u(m,{label:"河北省",value:"冀"},{default:l(()=>[a(" 河北省 简称 "+t(e.value),1)]),_:1}),u(m,{label:"河南省",value:"豫"},{default:l(()=>[a(" 河南省 简称 "+t(e.value),1)]),_:1}),u(m,{label:"山东省",value:"鲁"},{default:l(()=>[a(" 山东省 简称 "+t(e.value),1)]),_:1}),u(m,{label:"山西省",value:"晋"},{default:l(()=>[a(" 山西省 简称 "+t(e.value),1)]),_:1}),u(m,{label:"新疆维吾尔自治区",value:"新"},{default:l(()=>[a(" 新疆维吾尔自治区 简称 "+t(e.value),1)]),_:1}),u(m,{label:"西藏自治区",value:"藏"},{default:l(()=>[a(" 西藏自治区 简称 "+t(e.value),1)]),_:1})]),_:1},8,["modelValue","position"])]),Y("div",j,[u(v,{modelValue:e.value,"onUpdate:modelValue":i[5]||(i[5]=o=>e.value=o),position:e.position,type:"card"},{default:l(()=>[u(m,{label:"北京市",value:"京"},{label:l(o=>[a(t(o.label)+"(首都) ",1)]),default:l(()=>[a(" 北京市 简称 "+t(e.value),1)]),_:1}),u(m,{label:"上海市",value:"沪"},{default:l(()=>[a(" 上海市 简称 "+t(e.value),1)]),_:1}),u(m,{label:"天津市",value:"津"},{default:l(()=>[a(" 天津市 简称 "+t(e.value),1)]),_:1}),u(m,{label:"重庆市",value:"渝"},{default:l(()=>[a(" 重庆市 简称 "+t(e.value),1)]),_:1}),u(m,{label:"河北省",value:"冀"},{default:l(()=>[a(" 河北省 简称 "+t(e.value),1)]),_:1}),u(m,{label:"河南省",value:"豫"},{default:l(()=>[a(" 河南省 简称 "+t(e.value),1)]),_:1}),u(m,{label:"山东省",value:"鲁"},{default:l(()=>[a(" 山东省 简称 "+t(e.value),1)]),_:1}),u(m,{label:"山西省",value:"晋"},{default:l(()=>[a(" 山西省 简称 "+t(e.value),1)]),_:1}),u(m,{label:"新疆维吾尔自治区",value:"新"},{default:l(()=>[a(" 新疆维吾尔自治区 简称 "+t(e.value),1)]),_:1}),u(m,{label:"西藏自治区",value:"藏"},{default:l(()=>[a(" 西藏自治区 简称 "+t(e.value),1)]),_:1})]),_:1},8,["modelValue","position"])])],64)}const z=I(D,[["render",q]]),A=`<template>
  <YuumiButton style="margin: 0 10px 10px 0" @click="setPosition('top')"> top </YuumiButton>
  <YuumiButton style="margin: 0 10px 10px 0" @click="setPosition('bottom')"> bottom </YuumiButton>
  <YuumiButton style="margin: 0 10px 10px 0" @click="setPosition('left')"> left </YuumiButton>
  <YuumiButton style="margin: 0 10px 10px 0" @click="setPosition('right')"> right </YuumiButton>

  <div style="height: 200px">
    <YuumiTabs v-model="value" :position="position">
      <YuumiTabItem label="北京市" value="京">
        <template #label="$props"> {{ $props.label }}(首都) </template>

        北京市 简称 {{ value }}
      </YuumiTabItem>
      <YuumiTabItem label="上海市" value="沪"> 上海市 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="天津市" value="津"> 天津市 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="重庆市" value="渝"> 重庆市 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="河北省" value="冀"> 河北省 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="河南省" value="豫"> 河南省 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="山东省" value="鲁"> 山东省 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="山西省" value="晋"> 山西省 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="新疆维吾尔自治区" value="新">
        新疆维吾尔自治区 简称 {{ value }}
      </YuumiTabItem>
      <YuumiTabItem label="西藏自治区" value="藏"> 西藏自治区 简称 {{ value }} </YuumiTabItem>
    </YuumiTabs>
  </div>

  <div style="height: 200px">
    <YuumiTabs v-model="value" :position="position" type="card">
      <YuumiTabItem label="北京市" value="京">
        <template #label="$props"> {{ $props.label }}(首都) </template>

        北京市 简称 {{ value }}
      </YuumiTabItem>
      <YuumiTabItem label="上海市" value="沪"> 上海市 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="天津市" value="津"> 天津市 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="重庆市" value="渝"> 重庆市 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="河北省" value="冀"> 河北省 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="河南省" value="豫"> 河南省 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="山东省" value="鲁"> 山东省 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="山西省" value="晋"> 山西省 简称 {{ value }} </YuumiTabItem>
      <YuumiTabItem label="新疆维吾尔自治区" value="新">
        新疆维吾尔自治区 简称 {{ value }}
      </YuumiTabItem>
      <YuumiTabItem label="西藏自治区" value="藏"> 西藏自治区 简称 {{ value }} </YuumiTabItem>
    </YuumiTabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: "left",
      value: "鲁"
    }
  },
  methods: {
    setPosition(value) {
      this.position = value
    }
  }
}
<\/script>
`,G={class:"markdown-body"},H=Y("h3",null,"基本用法",-1),J=Y("h3",null,"卡片风格",-1),K=Y("h3",null,"自定义标签页",-1),L=Y("h3",null,"自定义位置",-1),O={},Q="",R=g({__name:"index",setup(s,{expose:i}){return i({frontmatter:{},excerpt:void 0}),(_,r)=>{const e=b("example-preview");return T(),f("div",G,[H,u(e,{code:d(V)},{default:l(()=>[u(y)]),_:1},8,["code"]),J,u(e,{code:d(E)},{default:l(()=>[u(P)]),_:1},8,["code"]),K,u(e,{code:d(F)},{default:l(()=>[u(N)]),_:1},8,["code"]),L,u(e,{code:d(A)},{default:l(()=>[u(z)]),_:1},8,["code"])])}}});export{R as default,Q as excerpt,O as frontmatter};
