import{_,e as i,r as o,o as s,c as d,d as n,b as a,w as l,f as x,t as b,F as v,u as y}from"./index-569afd91.js";const h=i({data(){return{ratio:"1"}}}),R={style:{width:"300px"}};function $(e,t,c,u,r,k){const p=o("YuumiInput"),m=o("YuumiRatioRect");return s(),d(v,null,[n(p,{modelValue:e.ratio,"onUpdate:modelValue":t[0]||(t[0]=f=>e.ratio=f),limit:/^\d+(\.\d*)?$/},null,8,["modelValue","limit"]),a("div",R,[n(m,{ratio:Number(e.ratio),style:{"background-color":"blue","border-radius":"4px",display:"flex","justify-content":"center","align-items":"center",color:"#ffffff"}},{default:l(()=>[x(" ratio: "+b(e.ratio),1)]),_:1},8,["ratio"])])],64)}const w=_(h,[["render",$]]),Y=`<template>
  <YuumiInput v-model="ratio" :limit="/^\\d+(\\.\\d*)?$/" />
  <div style="width: 300px">
    <YuumiRatioRect
      :ratio="Number(ratio)"
      style="
        background-color: blue;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
      "
    >
      ratio: {{ ratio }}
    </YuumiRatioRect>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      ratio: "1"
    }
  }
})
<\/script>
`,g={class:"markdown-body"},C=a("h3",null,"基本用法",-1),V=a("p",null,"ratio 表示矩形的宽高比，默认为1。",-1),N={},E="",I=i({__name:"index",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(c,u)=>{const r=o("example-preview");return s(),d("div",g,[C,V,n(r,{code:y(Y)},{default:l(()=>[n(w)]),_:1},8,["code"])])}}});export{I as default,E as excerpt,N as frontmatter};
