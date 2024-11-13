import{_ as x,r as i,o as s,c as g,d as l,b as u,t as _,F as v,h as Y,a as C,f as h,w as p,e as V,u as c,g as w}from"./index-098e058d.js";const k={data(){return{value:""}},methods:{onChange(d){console.log(d)}}};function I(d,n,m,y,e,r){const o=i("YuumiInput");return s(),g(v,null,[l(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),placeholder:"请输入",style:{margin:"0 10px 10px 0"},onChange:r.onChange},null,8,["modelValue","onChange"]),u("div",null,"输入的内容为："+_(e.value),1)],64)}const B=x(k,[["render",I]]),E=`<template>
  <YuumiInput
    v-model="value"
    placeholder="请输入"
    style="margin: 0 10px 10px 0"
    @change="onChange"
  />
  <div>输入的内容为：{{ value }}</div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    }
  },
  methods: {
    onChange(e) {
      console.log(e)
    }
  }
}
<\/script>
`,U={data(){return{value:""}}};function z(d,n,m,y,e,r){const o=i("YuumiInput");return s(),Y(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),placeholder:"请输入","auto-focus":""},null,8,["modelValue"])}const S=x(U,[["render",z]]),G=`<template>
  <YuumiInput v-model="value" placeholder="请输入" auto-focus />
</template>

<script>
export default {
  data() {
    return {
      value: ""
    }
  }
}
<\/script>
`,N={data(){return{value:"这是一段超出长度的文字"}}};function F(d,n,m,y,e,r){const o=i("YuumiInput");return s(),g(v,null,[l(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),placeholder:"maxlength = 5",maxlength:5},null,8,["modelValue"]),u("div",null,"输入的内容为："+_(e.value),1)],64)}const R=x(N,[["render",F]]),D=`<template>
  <YuumiInput v-model="value" placeholder="maxlength = 5" :maxlength="5" />

  <div>输入的内容为：{{ value }}</div>
</template>
<script>
export default {
  data() {
    return {
      value: "这是一段超出长度的文字"
    }
  }
}
<\/script>
`,L={data(){return{value:""}}};function A(d,n,m,y,e,r){const o=i("YuumiInput");return s(),g(v,null,C(["xl","lg","md","sm","xm"],t=>l(o,{key:t,modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=f=>e.value=f),placeholder:"请输入",style:{margin:"0 10px 10px 0"},size:t},null,8,["modelValue","size"])),64)}const M=x(L,[["render",A]]),T=`<template>
  <template v-for="size in ['xl', 'lg', 'md', 'sm', 'xm']" :key="size">
    <YuumiInput v-model="value" placeholder="请输入" style="margin: 0 10px 10px 0" :size="size" />
  </template>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    }
  }
}
<\/script>
`,$={};function j(d,n){const m=i("YuumiInput");return s(),g("div",null,[l(m,{placeholder:"disabled",style:{margin:"0 10px 10px 0"},disabled:""})])}const q=x($,[["render",j]]),H=`<template>
  <div>
    <YuumiInput placeholder="disabled" style="margin: 0 10px 10px 0" disabled />
  </div>
</template>
`,J={};function K(d,n){const m=i("YuumiInput");return s(),g("div",null,[l(m,{placeholder:"readonly",style:{margin:"0 10px 10px 0"},readonly:""})])}const O=x(J,[["render",K]]),P=`<template>
  <div>
    <YuumiInput placeholder="readonly" style="margin: 0 10px 10px 0" readonly />
  </div>
</template>
`,Q={data(){return{value1:"只能输入数字",value2:"2222",value3:"",value4:""}},computed:{onlyNumber(){return/^\d+$/},excludeNumber(){return d=>/^[^\d]+$/.test(d)},notBlank(){return/^\S*$/}}},W=u("br",null,null,-1),X=u("br",null,null,-1),Z=u("br",null,null,-1),ee=u("br",null,null,-1);function ne(d,n,m,y,e,r){const o=i("YuumiInput");return s(),g(v,null,[l(o,{modelValue:e.value1,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value1=t),placeholder:"只能输入数字",limit:r.onlyNumber,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),u("span",null,_(e.value1),1),h(),W,l(o,{modelValue:e.value2,"onUpdate:modelValue":n[1]||(n[1]=t=>e.value2=t),placeholder:"不能输入数字",limit:r.excludeNumber,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),u("span",null,_(e.value2),1),h(),X,l(o,{modelValue:e.value3,"onUpdate:modelValue":n[2]||(n[2]=t=>e.value3=t),placeholder:"不能输入空白字符",limit:r.notBlank,style:{margin:"0 10px 10px 0"}},null,8,["modelValue","limit"]),u("span",null,_(e.value3),1),h(),Z,l(o,{modelValue:e.value4,"onUpdate:modelValue":n[3]||(n[3]=t=>e.value4=t),placeholder:"不能输入空白字符",trim:"",style:{margin:"0 10px 10px 0"}},null,8,["modelValue"]),u("span",null,_(e.value4),1),h(),ee],64)}const le=x(Q,[["render",ne]]),oe=`<template>
  <YuumiInput
    v-model="value1"
    placeholder="只能输入数字"
    :limit="onlyNumber"
    style="margin: 0 10px 10px 0"
  />
  <span>{{ value1 }}</span> <br />

  <YuumiInput
    v-model="value2"
    placeholder="不能输入数字"
    :limit="excludeNumber"
    style="margin: 0 10px 10px 0"
  />
  <span>{{ value2 }}</span> <br />

  <YuumiInput
    v-model="value3"
    placeholder="不能输入空白字符"
    :limit="notBlank"
    style="margin: 0 10px 10px 0"
  />
  <span>{{ value3 }}</span> <br />

  <YuumiInput v-model="value4" placeholder="不能输入空白字符" trim style="margin: 0 10px 10px 0" />
  <span>{{ value4 }}</span> <br />
</template>

<script>
export default {
  data() {
    return {
      value1: "只能输入数字",
      value2: "2222",
      value3: "",
      value4: ""
    }
  },
  computed: {
    onlyNumber() {
      return /^\\d+$/
    },
    excludeNumber() {
      return value => /^[^\\d]+$/.test(value)
    },
    notBlank() {
      return /^\\S*$/
    }
  }
}
<\/script>
`,te={data(){return{value:"这是一段测试文字"}},methods:{onClear(d){console.log("onclear",d)}}};function ue(d,n,m,y,e,r){const o=i("YuumiInput");return s(),Y(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),placeholder:"一键清除",clearable:"",style:{width:"100%"},onClear:r.onClear},null,8,["modelValue","onClear"])}const re=x(te,[["render",ue]]),ae=`<template>
  <YuumiInput
    v-model="value"
    placeholder="一键清除"
    clearable
    style="width: 100%"
    @clear="onClear"
  />
</template>
<script>
export default {
  data() {
    return {
      value: "这是一段测试文字"
    }
  },
  methods: {
    onClear(e) {
      console.log("onclear", e)
    }
  }
}
<\/script>
`,de={data(){return{mobile:"",keyword:"",type:"Google"}},methods:{onChange(d){console.log("onchange",d)}}};function pe(d,n,m,y,e,r){const o=i("YuumiInput"),t=i("YuumiIcon"),f=i("YuumiButton"),b=i("YuumiSelect");return s(),g(v,null,[l(o,{modelValue:e.mobile,"onUpdate:modelValue":n[0]||(n[0]=a=>e.mobile=a),style:{margin:"0 10px 10px 0"},placeholder:"keyword","prefix-icon":"line-mobile",onChange:r.onChange},null,8,["modelValue","onChange"]),l(o,{modelValue:e.keyword,"onUpdate:modelValue":n[1]||(n[1]=a=>e.keyword=a),style:{margin:"0 10px 10px 0"},placeholder:"keyword","suffix-icon":"line-search",onChange:r.onChange},null,8,["modelValue","onChange"]),l(o,{modelValue:e.keyword,"onUpdate:modelValue":n[2]||(n[2]=a=>e.keyword=a),style:{margin:"0 10px 10px 0",width:"100%"},placeholder:"keyword",onChange:r.onChange},{suffix:p(()=>[l(f,{style:{"line-height":"0",border:"none","border-radius":"0px"},type:"primary"},{default:p(()=>[l(t,{icon:"line-search",style:{"font-size":"16px"}})]),_:1})]),_:1},8,["modelValue","onChange"]),l(o,{modelValue:e.keyword,"onUpdate:modelValue":n[4]||(n[4]=a=>e.keyword=a),style:{margin:"0 10px 10px 0",width:"100%"},placeholder:"keyword",onChange:r.onChange},{prefix:p(()=>[l(b,{modelValue:e.type,"onUpdate:modelValue":n[3]||(n[3]=a=>e.type=a),style:{"border-right":"none","border-color":"var(--color-border)",background:"#f5f5f5",display:"table","border-top-right-radius":"0px","border-bottom-right-radius":"0px"},options:[{label:"百度",value:"百度"},{label:"Google",value:"Google"}]},null,8,["modelValue"])]),suffix:p(()=>[l(f,{style:{"border-radius":"0px"},type:"primary"},{default:p(()=>[l(t,{icon:"line-search",style:{"font-size":"16px"}})]),_:1})]),_:1},8,["modelValue","onChange"])],64)}const ie=x(de,[["render",pe]]),me=`<template>
  <YuumiInput
    v-model="mobile"
    style="margin: 0 10px 10px 0"
    placeholder="keyword"
    prefix-icon="line-mobile"
    @change="onChange"
  />

  <YuumiInput
    v-model="keyword"
    style="margin: 0 10px 10px 0"
    placeholder="keyword"
    suffix-icon="line-search"
    @change="onChange"
  />

  <YuumiInput
    v-model="keyword"
    style="margin: 0 10px 10px 0; width: 100%"
    placeholder="keyword"
    @change="onChange"
  >
    <template #suffix>
      <YuumiButton style="line-height: 0; border: none; border-radius: 0px" type="primary">
        <YuumiIcon icon="line-search" style="font-size: 16px" />
      </YuumiButton>
    </template>
  </YuumiInput>

  <YuumiInput
    v-model="keyword"
    style="margin: 0 10px 10px 0; width: 100%"
    placeholder="keyword"
    @change="onChange"
  >
    <template #prefix>
      <YuumiSelect
        v-model="type"
        style="
          border-right: none;
          border-color: var(--color-border);
          background: #f5f5f5;
          display: table;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        "
        :options="[
          { label: '百度', value: '百度' },
          { label: 'Google', value: 'Google' }
        ]"
      />
    </template>

    <template #suffix>
      <YuumiButton style="border-radius: 0px" type="primary">
        <YuumiIcon icon="line-search" style="font-size: 16px" />
      </YuumiButton>
    </template>
  </YuumiInput>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      keyword: "",
      type: "Google"
    }
  },
  methods: {
    onChange(e) {
      console.log("onchange", e)
    }
  }
}
<\/script>
`,se={data(){return{value:"",mobile:"",keyword:"",type:"Google"}},methods:{onChange(d){console.log("onchange",d)}}};function ce(d,n,m,y,e,r){const o=i("YuumiInput"),t=i("YuumiIcon"),f=i("YuumiButton"),b=i("YuumiSelect");return s(),g(v,null,[l(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a),style:{margin:"0 10px 10px 0"},placeholder:"keyword",round:"",onChange:r.onChange},null,8,["modelValue","onChange"]),l(o,{modelValue:e.mobile,"onUpdate:modelValue":n[1]||(n[1]=a=>e.mobile=a),style:{margin:"0 10px 10px 0"},placeholder:"keyword","prefix-icon":"line-mobile",round:"",onChange:r.onChange},null,8,["modelValue","onChange"]),l(o,{modelValue:e.keyword,"onUpdate:modelValue":n[2]||(n[2]=a=>e.keyword=a),style:{margin:"0 10px 10px 0"},placeholder:"keyword","suffix-icon":"line-search",round:"",onChange:r.onChange},null,8,["modelValue","onChange"]),l(o,{modelValue:e.keyword,"onUpdate:modelValue":n[3]||(n[3]=a=>e.keyword=a),style:{margin:"0 10px 10px 0",width:"100%"},placeholder:"keyword",round:"",onChange:r.onChange},{suffix:p(()=>[l(f,{style:{"line-height":"0",border:"none","border-radius":"0px"},type:"primary"},{default:p(()=>[l(t,{icon:"line-search",style:{"font-size":"16px"}})]),_:1})]),_:1},8,["modelValue","onChange"]),l(o,{modelValue:e.keyword,"onUpdate:modelValue":n[5]||(n[5]=a=>e.keyword=a),style:{margin:"0 10px 10px 0",width:"100%"},placeholder:"keyword",round:"",onChange:r.onChange},{prefix:p(()=>[l(b,{modelValue:e.type,"onUpdate:modelValue":n[4]||(n[4]=a=>e.type=a),style:{"border-right":"none","border-color":"var(--color-border)",background:"#f5f5f5",display:"table","border-radius":"80px","border-top-right-radius":"0px","border-bottom-right-radius":"0px"},options:[{label:"百度",value:"百度"},{label:"Google",value:"Google"}]},null,8,["modelValue"])]),suffix:p(()=>[l(f,{style:{"border-radius":"0px"},type:"primary"},{default:p(()=>[l(t,{icon:"line-search",style:{"font-size":"16px"}})]),_:1})]),_:1},8,["modelValue","onChange"])],64)}const xe=x(se,[["render",ce]]),he=`<template>
  <YuumiInput
    v-model="value"
    style="margin: 0 10px 10px 0"
    placeholder="keyword"
    round
    @change="onChange"
  />

  <YuumiInput
    v-model="mobile"
    style="margin: 0 10px 10px 0"
    placeholder="keyword"
    prefix-icon="line-mobile"
    round
    @change="onChange"
  />

  <YuumiInput
    v-model="keyword"
    style="margin: 0 10px 10px 0"
    placeholder="keyword"
    suffix-icon="line-search"
    round
    @change="onChange"
  />

  <YuumiInput
    v-model="keyword"
    style="margin: 0 10px 10px 0; width: 100%"
    placeholder="keyword"
    round
    @change="onChange"
  >
    <template #suffix>
      <YuumiButton style="line-height: 0; border: none; border-radius: 0px" type="primary">
        <YuumiIcon icon="line-search" style="font-size: 16px" />
      </YuumiButton>
    </template>
  </YuumiInput>

  <YuumiInput
    v-model="keyword"
    style="margin: 0 10px 10px 0; width: 100%"
    placeholder="keyword"
    round
    @change="onChange"
  >
    <template #prefix>
      <YuumiSelect
        v-model="type"
        style="
          border-right: none;
          border-color: var(--color-border);
          background: #f5f5f5;
          display: table;
          border-radius: 80px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        "
        :options="[
          { label: '百度', value: '百度' },
          { label: 'Google', value: 'Google' }
        ]"
      />
    </template>

    <template #suffix>
      <YuumiButton style="border-radius: 0px" type="primary">
        <YuumiIcon icon="line-search" style="font-size: 16px" />
      </YuumiButton>
    </template>
  </YuumiInput>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      mobile: "",
      keyword: "",
      type: "Google"
    }
  },
  methods: {
    onChange(e) {
      console.log("onchange", e)
    }
  }
}
<\/script>
`,ge={class:"markdown-body"},ye=u("h3",null,"基本用法",-1),fe=u("h3",null,"自动获取焦点 autoFocus",-1),_e=u("h3",null,"设置最大输入长度 maxlength",-1),ve=w('<h3>大小设置 size</h3><p>可选值 <code class="">xl</code>、<code class="">lg</code>、<code class="">md</code>、<code class="">sm</code>、<code class="">xm</code>，默认为 <code class="">md</code>。</p>',2),be=u("h3",null,"禁用 disabled",-1),Ye=u("h3",null,"只读 readonly",-1),Ce=u("h3",null,"限制输入 limit",-1),Ve=u("h3",null,"一键清除",-1),we=u("h3",null,"插槽使用",-1),ke=u("p",null,[h("使用 "),u("code",{class:""},"prefixIcon"),h(", "),u("code",{class:""},"suffixIcon"),h(", "),u("code",{class:""},"prefix"),h(", "),u("code",{class:""},"suffix"),h(" 插槽实现更多功能")],-1),Ie=u("h3",null,"圆角",-1),Ee={},Ue="",ze=V({__name:"index",setup(d,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(m,y)=>{const e=i("example-preview");return s(),g("div",ge,[ye,l(e,{code:c(E)},{default:p(()=>[l(B)]),_:1},8,["code"]),fe,l(e,{code:c(G)},{default:p(()=>[l(S)]),_:1},8,["code"]),_e,l(e,{code:c(D)},{default:p(()=>[l(R)]),_:1},8,["code"]),ve,l(e,{code:c(T)},{default:p(()=>[l(M)]),_:1},8,["code"]),be,l(e,{code:c(H)},{default:p(()=>[l(q)]),_:1},8,["code"]),Ye,l(e,{code:c(P)},{default:p(()=>[l(O)]),_:1},8,["code"]),Ce,l(e,{code:c(oe)},{default:p(()=>[l(le)]),_:1},8,["code"]),Ve,l(e,{code:c(ae)},{default:p(()=>[l(re)]),_:1},8,["code"]),we,ke,l(e,{code:c(me)},{default:p(()=>[l(ie)]),_:1},8,["code"]),Ie,l(e,{code:c(he)},{default:p(()=>[l(xe)]),_:1},8,["code"])])}}});export{ze as default,Ue as excerpt,Ee as frontmatter};
