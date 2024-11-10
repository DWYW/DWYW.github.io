import{_,e as s,r as i,o as r,c as u,b as e,d as n,F as h,w as g,u as v,f as b,g as $}from"./index-9f5cfcb2.js";const y=s({data(){return{ratio:"1.07",image:"./images/demo.webp"}}}),x={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},w=e("span",null,"宽/高：",-1),Y={style:{width:"300px"}};function I(t,o,p,c,l,f){const d=i("YuumiInput"),m=i("YuumiRatioImage");return r(),u(h,null,[e("div",x,[w,n(d,{modelValue:t.ratio,"onUpdate:modelValue":o[0]||(o[0]=a=>t.ratio=a),limit:/^\d+(\.\d*)?$/},null,8,["modelValue","limit"])]),e("div",Y,[n(m,{ratio:Number(t.ratio),image:t.image},null,8,["ratio","image"])])],64)}const V=_(y,[["render",I]]),F=`<template>
  <div style="display: flex; align-items: center; margin-bottom: 10px">
    <span>宽/高：</span>

    <YuumiInput v-model="ratio" :limit="/^\\d+(\\.\\d*)?$/" />
  </div>

  <div style="width: 300px">
    <YuumiRatioImage :ratio="Number(ratio)" :image="image" />
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      ratio: "1.07",
      image: "./images/demo.webp"
    }
  }
})
<\/script>
`,E=s({data(){return{mode:"aspectFill",image:"./images/demo.webp"}},computed:{modeOptions(){return[{value:"scaleToFill",label:"scaleToFill"},{value:"aspectFit",label:"aspectFit"},{value:"aspectFill",label:"aspectFill"},{value:"top",label:"top"},{value:"bottom",label:"bottom"},{value:"center",label:"center"},{value:"left",label:"left"},{value:"right",label:"right"},{value:"top left",label:"top left"},{value:"top right",label:"top right"},{value:"bottom left",label:"bottom left"},{value:"bottom right",label:"bottom right"}]}}}),C={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},R=e("span",null,"裁剪、缩放：",-1),N={style:{width:"300px","background-color":"#f5f5f5"}},L=e("p",null,"原始图片",-1),T=["src"];function U(t,o,p,c,l,f){const d=i("YuumiSelect"),m=i("YuumiRatioImage");return r(),u(h,null,[e("div",C,[R,n(d,{modelValue:t.mode,"onUpdate:modelValue":o[0]||(o[0]=a=>t.mode=a),options:t.modeOptions},null,8,["modelValue","options"])]),e("div",N,[n(m,{image:t.image,mode:t.mode},null,8,["image","mode"])]),e("div",null,[L,e("img",{src:t.image,style:{width:"100%",height:"auto"}},null,8,T)])],64)}const k=_(E,[["render",U]]),B=`<template>
  <div style="display: flex; align-items: center; margin-bottom: 10px">
    <span>裁剪、缩放：</span>

    <YuumiSelect v-model="mode" :options="modeOptions" />
  </div>

  <div style="width: 300px; background-color: #f5f5f5">
    <YuumiRatioImage :image="image" :mode="mode" />
  </div>

  <div>
    <p>原始图片</p>
    <img :src="image" style="width: 100%; height: auto" />
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      mode: "aspectFill",
      image: "./images/demo.webp"
    }
  },
  computed: {
    modeOptions() {
      return [
        { value: "scaleToFill", label: "scaleToFill" },
        { value: "aspectFit", label: "aspectFit" },
        { value: "aspectFill", label: "aspectFill" },
        { value: "top", label: "top" },
        { value: "bottom", label: "bottom" },
        { value: "center", label: "center" },
        { value: "left", label: "left" },
        { value: "right", label: "right" },
        { value: "top left", label: "top left" },
        { value: "top right", label: "top right" },
        { value: "bottom left", label: "bottom left" },
        { value: "bottom right", label: "bottom right" }
      ]
    }
  }
})
<\/script>
`,O=s({data(){return{radius:"8",image:"./images/demo.webp"}}}),S={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},M=e("span",null,"圆角：",-1),P={style:{width:"300px"}};function j(t,o,p,c,l,f){const d=i("YuumiInput"),m=i("YuumiRatioImage");return r(),u(h,null,[e("div",S,[M,n(d,{modelValue:t.radius,"onUpdate:modelValue":o[0]||(o[0]=a=>t.radius=a),limit:/^\d*$/},null,8,["modelValue"])]),e("div",P,[n(m,{radius:Number(t.radius),image:t.image},null,8,["radius","image"])])],64)}const q=_(O,[["render",j]]),z=`<template>
  <div style="display: flex; align-items: center; margin-bottom: 10px">
    <span>圆角：</span>

    <YuumiInput v-model="radius" :limit="/^\\d*$/" />
  </div>

  <div style="width: 300px">
    <YuumiRatioImage :radius="Number(radius)" :image="image" />
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      radius: "8",
      image: "./images/demo.webp"
    }
  }
})
<\/script>
`,A=s({data(){return{avatar_default:"./images/avatar.webp",avatar:"./images/demo.webp"}}}),D={style:{overflow:"hidden"}},G={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},H=e("div",{style:{"margin-right":"10px"}},"默认头像",-1),J={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},K=e("div",{style:{"margin-right":"10px"}},"显示头像",-1),Q={style:{width:"100px"}};function W(t,o,p,c,l,f){const d=i("YuumiInput"),m=i("YuumiRatioImage");return r(),u("div",D,[e("div",G,[H,n(d,{modelValue:t.avatar_default,"onUpdate:modelValue":o[0]||(o[0]=a=>t.avatar_default=a)},null,8,["modelValue"])]),e("div",J,[K,n(d,{modelValue:t.avatar,"onUpdate:modelValue":o[1]||(o[1]=a=>t.avatar=a)},null,8,["modelValue"])]),e("div",Q,[n(m,{radius:16,image:t.avatar,"placeholder-image":t.avatar_default},null,8,["image","placeholder-image"])])])}const X=_(A,[["render",W]]),Z=`<template>
  <div style="overflow: hidden">
    <div style="display: flex; align-items: center; margin-bottom: 10px">
      <div style="margin-right: 10px">默认头像</div>
      <YuumiInput v-model="avatar_default" />
    </div>

    <div style="display: flex; align-items: center; margin-bottom: 10px">
      <div style="margin-right: 10px">显示头像</div>
      <YuumiInput v-model="avatar" />
    </div>

    <div style="width: 100px">
      <YuumiRatioImage :radius="16" :image="avatar" :placeholder-image="avatar_default" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      avatar_default: "./images/avatar.webp",
      avatar: "./images/demo.webp"
    }
  }
})
<\/script>
`,tt=s({data(){return{image:"./images/demo.webp"}},methods:{onLoaded(t){console.log(t)},onError(t){console.log(t)}}}),et={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},nt=e("span",null,"图片地址：",-1),ot={style:{width:"300px"}};function at(t,o,p,c,l,f){const d=i("YuumiInput"),m=i("YuumiRatioImage");return r(),u(h,null,[e("div",et,[nt,n(d,{modelValue:t.image,"onUpdate:modelValue":o[0]||(o[0]=a=>t.image=a)},null,8,["modelValue"])]),e("div",ot,[n(m,{image:t.image,onLoad:t.onLoaded,onError:t.onError},null,8,["image","onLoad","onError"])])],64)}const it=_(tt,[["render",at]]),lt=`<template>
  <div style="display: flex; align-items: center; margin-bottom: 10px">
    <span>图片地址：</span>

    <YuumiInput v-model="image" />
  </div>

  <div style="width: 300px">
    <YuumiRatioImage :image="image" @load="onLoaded" @error="onError" />
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      image: "./images/demo.webp"
    }
  },
  methods: {
    onLoaded(e) {
      console.log(e)
    },
    onError(e) {
      console.log(e)
    }
  }
})
<\/script>
`,dt={class:"markdown-body"},mt=e("h3",null,"基本用法",-1),st=e("p",null,"ratio 表示矩形的宽高比，默认为1。",-1),rt=e("h3",null,"缩放与裁剪",-1),ut=e("p",null,[b("默认为 "),e("code",{class:""},"aspectFill")],-1),pt=$("<table><thead><tr><th>模式</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>缩放</td><td>scaleToFill</td><td>不保持纵横比缩放图片，使图片的宽高完全拉伸至填满元素</td></tr><tr><td>缩放</td><td>aspectFit</td><td>保持纵横比缩放图片，使图片的长边能完全显示出来。</td></tr><tr><td>缩放</td><td>aspectFill</td><td>保持纵横比缩放图片，只保证图片的短边能完全显示出来。</td></tr><tr><td>裁剪</td><td>top</td><td>不缩放图片，只显示图片的顶部区域</td></tr><tr><td>裁剪</td><td>bottom</td><td>不缩放图片，只显示图片的底部区域</td></tr><tr><td>裁剪</td><td>center</td><td>不缩放图片，只显示图片的中间区域</td></tr><tr><td>裁剪</td><td>left</td><td>不缩放图片，只显示图片的左边区域</td></tr><tr><td>裁剪</td><td>right</td><td>不缩放图片，只显示图片的右边区域</td></tr><tr><td>裁剪</td><td>top left</td><td>不缩放图片，只显示图片的左上边区域</td></tr><tr><td>裁剪</td><td>top right</td><td>不缩放图片，只显示图片的右上边区域</td></tr><tr><td>裁剪</td><td>bottom left</td><td>不缩放图片，只显示图片的左下边区域</td></tr><tr><td>裁剪</td><td>bottom right</td><td>不缩放图片，只显示图片的右下边区域</td></tr></tbody></table><h3>设置圆角</h3>",2),ct=e("h3",null,"设置默认图",-1),gt=e("h3",null,"事件监听",-1),_t={},ft="",ht=s({__name:"index",setup(t,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(p,c)=>{const l=i("example-preview");return r(),u("div",dt,[mt,st,n(l,{code:v(F)},{default:g(()=>[n(V)]),_:1},8,["code"]),rt,ut,n(l,{code:v(B)},{default:g(()=>[n(k)]),_:1},8,["code"]),pt,n(l,{code:v(z)},{default:g(()=>[n(q)]),_:1},8,["code"]),ct,n(l,{code:v(Z)},{default:g(()=>[n(X)]),_:1},8,["code"]),gt,n(l,{code:v(lt)},{default:g(()=>[n(it)]),_:1},8,["code"])])}}});export{ht as default,ft as excerpt,_t as frontmatter};
