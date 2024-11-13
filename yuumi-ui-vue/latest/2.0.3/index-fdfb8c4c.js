import{_ as h,r as d,o as r,c as i,b as u,d as e,w as a,f as t,F as l,a as m,t as c,e as y,u as _,g}from"./index-098e058d.js";const f={};function v(p,o){const s=d("YuumiButton");return r(),i(l,null,[u("div",null,[e(s,{style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(" 默认按钮 ")]),_:1})]),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n)+" button ",1)]),_:2},1032,["theme"])),64))]),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,type:n,plain:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n)+" plain ",1)]),_:2},1032,["type"])),64))])],64)}const B=h(f,[["render",v]]),Y=`<template>
  <div>
    <YuumiButton style="margin: 0 10px 10px 0"> 默认按钮 </YuumiButton>
  </div>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      style="margin: 0 10px 10px 0"
    >
      {{ theme }} button
    </YuumiButton>
  </div>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :type="theme"
      plain
      style="margin: 0 10px 10px 0"
    >
      {{ theme }} plain
    </YuumiButton>
  </div>
</template>
`,w={};function k(p,o){const s=d("YuumiButton");return r(),i(l,null,m(["xl","lg","md","sm","xm"],n=>e(s,{key:n,size:n,style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(" size "+c(n),1)]),_:2},1032,["size"])),64)}const b=h(w,[["render",k]]),E=`<template>
  <YuumiButton
    v-for="size in ['xl', 'lg', 'md', 'sm', 'xm']"
    :key="size"
    :size="size"
    style="margin: 0 10px 10px 0"
  >
    size {{ size }}
  </YuumiButton>
</template>
`,z={};function $(p,o){const s=d("YuumiButton");return r(),i(l,null,[e(s,{splash:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(" 默认按钮 ")]),_:1}),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,splash:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n)+" button ",1)]),_:2},1032,["theme"])),64))]),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,plain:"",splash:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n)+" plain ",1)]),_:2},1032,["theme"])),64))])],64)}const C=h(z,[["render",$]]),S=`<template>
  <YuumiButton splash style="margin: 0 10px 10px 0"> 默认按钮 </YuumiButton>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      splash
      style="margin: 0 10px 10px 0"
    >
      {{ theme }} button
    </YuumiButton>
  </div>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      plain
      splash
      style="margin: 0 10px 10px 0"
    >
      {{ theme }} plain
    </YuumiButton>
  </div>
</template>
`,N={};function V(p,o){const s=d("YuumiButton");return r(),i(l,null,[e(s,{disabled:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(" 默认按钮 ")]),_:1}),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,disabled:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n)+" button ",1)]),_:2},1032,["theme"])),64))]),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,plain:"",disabled:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n)+" plain ",1)]),_:2},1032,["theme"])),64))])],64)}const D=h(N,[["render",V]]),F=`<template>
  <YuumiButton disabled style="margin: 0 10px 10px 0"> 默认按钮 </YuumiButton>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      disabled
      style="margin: 0 10px 10px 0"
    >
      {{ theme }} button
    </YuumiButton>
  </div>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      plain
      disabled
      style="margin: 0 10px 10px 0"
    >
      {{ theme }} plain
    </YuumiButton>
  </div>
</template>
`,L={};function T(p,o){const s=d("YuumiButton");return r(),i(l,null,[e(s,{round:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(" 默认按钮 ")]),_:1}),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,round:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n)+" button ",1)]),_:2},1032,["theme"])),64))]),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,plain:"",round:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n)+" plain ",1)]),_:2},1032,["theme"])),64))]),e(s,{circle:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(" 默 ")]),_:1}),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,circle:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n.slice(0,1)),1)]),_:2},1032,["theme"])),64))]),u("div",null,[(r(),i(l,null,m(["primary","success","danger","warn"],n=>e(s,{key:n,theme:n,plain:"",circle:"",style:{margin:"0 10px 10px 0"}},{default:a(()=>[t(c(n.slice(0,1)),1)]),_:2},1032,["theme"])),64))])],64)}const j=h(L,[["render",T]]),q=`<template>
  <YuumiButton round style="margin: 0 10px 10px 0"> 默认按钮 </YuumiButton>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      round
      style="margin: 0 10px 10px 0"
    >
      {{ theme }} button
    </YuumiButton>
  </div>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      plain
      round
      style="margin: 0 10px 10px 0"
    >
      {{ theme }} plain
    </YuumiButton>
  </div>

  <YuumiButton circle style="margin: 0 10px 10px 0"> 默 </YuumiButton>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      circle
      style="margin: 0 10px 10px 0"
    >
      {{ theme.slice(0, 1) }}
    </YuumiButton>
  </div>
  <div>
    <YuumiButton
      v-for="theme in ['primary', 'success', 'danger', 'warn']"
      :key="theme"
      :theme="theme"
      plain
      circle
      style="margin: 0 10px 10px 0"
    >
      {{ theme.slice(0, 1) }}
    </YuumiButton>
  </div>
</template>
`,A={class:"markdown-body"},G=u("h3",null,"基本用法",-1),H=u("p",null,[t("theme 可选值为 "),u("code",{class:""},"primary"),t("、 "),u("code",{class:""},"success"),t("、 "),u("code",{class:""},"warn"),t("、 "),u("code",{class:""},"danger"),t("。")],-1),I=g('<h3>大小设置</h3><p>可选值为 <code class="">xl</code>、 <code class="">lg</code>、 <code class="">md</code>、 <code class="">sm</code>、 <code class="">xm</code>，默认值为 <code class="">md</code>。</p>',2),J=u("h3",null,"开启点击效果",-1),K=u("p",null,[t("通过 "),u("code",{class:""},"splash"),t(" 开启")],-1),M=u("h3",null,"禁用状态",-1),O=u("h3",null,"圆角和圆形",-1),P=u("p",null,[t("通过 "),u("code",{class:""},"round"),t(" 和 "),u("code",{class:""},"circle"),t(" 设置。")],-1),R={},U="",W=y({__name:"index",setup(p,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(s,n)=>{const x=d("example-preview");return r(),i("div",A,[G,H,e(x,{code:_(Y)},{default:a(()=>[e(B)]),_:1},8,["code"]),I,e(x,{code:_(E)},{default:a(()=>[e(b)]),_:1},8,["code"]),J,K,e(x,{code:_(S)},{default:a(()=>[e(C)]),_:1},8,["code"]),M,e(x,{code:_(F)},{default:a(()=>[e(D)]),_:1},8,["code"]),O,P,e(x,{code:_(q)},{default:a(()=>[e(j)]),_:1},8,["code"])])}}});export{W as default,U as excerpt,R as frontmatter};
