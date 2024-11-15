import{_,r as f,o as n,c as l,F as s,a as u,b as i,t as m,d as t,w as c,e as w,u as k}from"./index-098e058d.js";const Y={data(){return{type:Array(10).fill("line")}},computed:{iconCount(){return this.icons.reduce((d,a)=>d+a.children.length,0)},icons(){return[{name:"常用类",line:["line-add","line-edit","line-loading","line-correct","line-rect-correct","line-circle-correct","line-close","line-setting","line-help","line-info","line-exit","line-delete","line-remove","line-disabled","line-search","line-praise","line-screen","line-order","line-catalog","line-menu","line-menu1","line-share","line-heart"],flat:["flat-add","flat-edit","flat-loading","flat-correct","flat-rect-correct","flat-circle-correct","flat-close","flat-setting","flat-help","flat-info","flat-exit","flat-delete","flat-remove","flat-disabled","flat-search","flat-praise","flat-screen","flat-order","flat-catalog","flat-menu","flat-menu1","flat-share","flat-heart"]},{name:"表单",line:["radio-selected","radio-unselected","checkbox-selected","checkbox-unselected","line-checkbox-indeterminate","line-mobile","line-phone","line-key","line-lock","line-unlock","line-circle","line-circle-dot","line-circle-close","line-rect","line-fold","line-unfold","line-eye","line-eye-close","line-shield-info","line-shield-correct","line-calendar","line-clock","line-mail","line-drag"],flat:["flat-checkbox-indeterminate","flat-mobile","flat-phone","flat-key","flat-lock","flat-unlock","flat-circle","flat-circle-dot","flat-circle-close","flat-rect","flat-fold","flat-unfold","flat-eye","flat-eye-close","flat-shield-info","flat-shield-correct","flat-calendar","flat-clock","flat-mail","flat-drag"]},{name:"方向",line:["line-prev","line-next","line-arrow-top","line-arrow-bottom","line-arrow-left","line-arrow-right"],flat:["flat-arrow-top","flat-arrow-bottom","flat-arrow-left","flat-arrow-right"]},{name:"文件",line:["line-file","line-file-add","line-file-setting","line-image","line-video","line-music","line-upload","line-download","line-cloud-upload","line-cloud-download"],flat:["flat-file","flat-file-add","flat-file-setting","flat-image","flat-video","flat-music","flat-upload","flat-download","flat-cloud-upload","flat-cloud-download"]},{name:"文件夹",line:["line-folder","line-folder-add","line-folder-setting"],flat:["flat-folder","flat-folder-add","flat-folder-setting"]},{name:"人员组织",line:["line-user","line-user-add","line-user-setting","line-user-disabled","line-user-remove","line-users","line-user-order"],flat:["flat-user","flat-user-add","flat-user-setting","flat-user-disabled","flat-user-remove","flat-users","flat-user-order"]},{name:"状态",line:["line-empty","line-finger"],flat:["flat-empty","flat-finger"]},{name:"交通",line:["line-car","line-steering-wheel"],flat:["flat-car","flat-steering-wheel"]},{name:"证件",line:["line-identity"],flat:["flat-identity"]},{name:"媒体",line:["line-pause","line-play","line-voice","line-muted","line-fullscreen","line-fullscreen-exit"],flat:["flat-pause","flat-play","flat-voice","flat-muted","flat-fullscreen","flat-fullscreen-exit"]}]}}},I={style:{overflow:"hidden"}},T={class:"group-name",style:{"font-weight":"bold","padding-bottom":"10px"}},z={class:"group-icons"},C={style:{"font-size":"12px"}},V={class:"group-icons"},B={style:{"font-size":"12px"}};function $(d,a,v,b,o,x){const p=f("YuumiIcon"),h=f("YuumiTabItem"),y=f("YuumiTabs");return n(),l("div",I,[(n(!0),l(s,null,u(x.icons,(r,g)=>(n(),l("div",{key:r.name,class:"group-item"},[i("div",T,m(r.name),1),t(y,{modelValue:o.type[g],"onUpdate:modelValue":e=>o.type[g]=e},{default:c(()=>[t(h,{label:"线性",value:"line"},{default:c(()=>[i("div",z,[(n(!0),l(s,null,u(r.line,e=>(n(),l("div",{key:e,style:{display:"inline-block",width:"20%",height:"100px","font-size":"28px","vertical-align":"text-bottom","text-align":"center","font-weight":"bold"}},[t(p,{icon:e},null,8,["icon"]),i("div",C,m(e),1)]))),128))])]),_:2},1024),t(h,{label:"扁平",value:"flat"},{default:c(()=>[i("div",V,[(n(!0),l(s,null,u(r.flat,e=>(n(),l("div",{key:e,style:{display:"inline-block",width:"20%",height:"100px","font-size":"28px","vertical-align":"text-bottom","text-align":"center","font-weight":"bold"}},[t(p,{icon:e},null,8,["icon"]),i("div",B,m(e),1)]))),128))])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])}const E=_(Y,[["render",$]]),A=`<template>
  <div style="overflow: hidden">
    <div v-for="(group, index) in icons" :key="group.name" class="group-item">
      <div class="group-name" style="font-weight: bold; padding-bottom: 10px">
        {{ group.name }}
      </div>

      <YuumiTabs v-model="type[index]">
        <YuumiTabItem label="线性" value="line">
          <div class="group-icons">
            <div
              v-for="icon in group.line"
              :key="icon"
              style="
                display: inline-block;
                width: 20%;
                height: 100px;
                font-size: 28px;
                vertical-align: text-bottom;
                text-align: center;
                font-weight: bold;
              "
            >
              <YuumiIcon :icon="icon" />
              <div style="font-size: 12px">
                {{ icon }}
              </div>
            </div>
          </div>
        </YuumiTabItem>

        <YuumiTabItem label="扁平" value="flat">
          <div class="group-icons">
            <div
              v-for="icon in group.flat"
              :key="icon"
              style="
                display: inline-block;
                width: 20%;
                height: 100px;
                font-size: 28px;
                vertical-align: text-bottom;
                text-align: center;
                font-weight: bold;
              "
            >
              <YuumiIcon :icon="icon" />
              <div style="font-size: 12px">
                {{ icon }}
              </div>
            </div>
          </div>
        </YuumiTabItem>
      </YuumiTabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: Array(10).fill("line")
    }
  },
  computed: {
    iconCount() {
      return this.icons.reduce((acc, item) => {
        return acc + item.children.length
      }, 0)
    },
    icons() {
      return [
        {
          name: "常用类",
          line: [
            "line-add",
            "line-edit",
            "line-loading",
            "line-correct",
            "line-rect-correct",
            "line-circle-correct",
            "line-close",
            "line-setting",
            "line-help",
            "line-info",
            "line-exit",
            "line-delete",
            "line-remove",
            "line-disabled",
            "line-search",
            "line-praise",
            "line-screen",
            "line-order",
            "line-catalog",
            "line-menu",
            "line-menu1",
            "line-share",
            "line-heart"
          ],
          flat: [
            "flat-add",
            "flat-edit",
            "flat-loading",
            "flat-correct",
            "flat-rect-correct",
            "flat-circle-correct",
            "flat-close",
            "flat-setting",
            "flat-help",
            "flat-info",
            "flat-exit",
            "flat-delete",
            "flat-remove",
            "flat-disabled",
            "flat-search",
            "flat-praise",
            "flat-screen",
            "flat-order",
            "flat-catalog",
            "flat-menu",
            "flat-menu1",
            "flat-share",
            "flat-heart"
          ]
        },
        {
          name: "表单",
          line: [
            "radio-selected",
            "radio-unselected",
            "checkbox-selected",
            "checkbox-unselected",
            "line-checkbox-indeterminate",
            "line-mobile",
            "line-phone",
            "line-key",
            "line-lock",
            "line-unlock",
            "line-circle",
            "line-circle-dot",
            "line-circle-close",
            "line-rect",
            "line-fold",
            "line-unfold",
            "line-eye",
            "line-eye-close",
            "line-shield-info",
            "line-shield-correct",
            "line-calendar",
            "line-clock",
            "line-mail",
            "line-drag"
          ],
          flat: [
            "flat-checkbox-indeterminate",
            "flat-mobile",
            "flat-phone",
            "flat-key",
            "flat-lock",
            "flat-unlock",
            "flat-circle",
            "flat-circle-dot",
            "flat-circle-close",
            "flat-rect",
            "flat-fold",
            "flat-unfold",
            "flat-eye",
            "flat-eye-close",
            "flat-shield-info",
            "flat-shield-correct",
            "flat-calendar",
            "flat-clock",
            "flat-mail",
            "flat-drag"
          ]
        },
        {
          name: "方向",
          line: [
            "line-prev",
            "line-next",
            "line-arrow-top",
            "line-arrow-bottom",
            "line-arrow-left",
            "line-arrow-right"
          ],
          flat: ["flat-arrow-top", "flat-arrow-bottom", "flat-arrow-left", "flat-arrow-right"]
        },
        {
          name: "文件",
          line: [
            "line-file",
            "line-file-add",
            "line-file-setting",
            "line-image",
            "line-video",
            "line-music",
            "line-upload",
            "line-download",
            "line-cloud-upload",
            "line-cloud-download"
          ],
          flat: [
            "flat-file",
            "flat-file-add",
            "flat-file-setting",
            "flat-image",
            "flat-video",
            "flat-music",
            "flat-upload",
            "flat-download",
            "flat-cloud-upload",
            "flat-cloud-download"
          ]
        },
        {
          name: "文件夹",
          line: ["line-folder", "line-folder-add", "line-folder-setting"],
          flat: ["flat-folder", "flat-folder-add", "flat-folder-setting"]
        },
        {
          name: "人员组织",
          line: [
            "line-user",
            "line-user-add",
            "line-user-setting",
            "line-user-disabled",
            "line-user-remove",
            "line-users",
            "line-user-order"
          ],
          flat: [
            "flat-user",
            "flat-user-add",
            "flat-user-setting",
            "flat-user-disabled",
            "flat-user-remove",
            "flat-users",
            "flat-user-order"
          ]
        },
        {
          name: "状态",
          line: ["line-empty", "line-finger"],
          flat: ["flat-empty", "flat-finger"]
        },
        {
          name: "交通",
          line: ["line-car", "line-steering-wheel"],
          flat: ["flat-car", "flat-steering-wheel"]
        },
        {
          name: "证件",
          line: ["line-identity"],
          flat: ["flat-identity"]
        },
        {
          name: "媒体",
          line: [
            "line-pause",
            "line-play",
            "line-voice",
            "line-muted",
            "line-fullscreen",
            "line-fullscreen-exit"
          ],
          flat: [
            "flat-pause",
            "flat-play",
            "flat-voice",
            "flat-muted",
            "flat-fullscreen",
            "flat-fullscreen-exit"
          ]
        }
      ]
    }
  }
}
<\/script>
`,F={class:"markdown-body"},N=i("h3",null,"基本用法",-1),D={},L="",S=w({__name:"index",setup(d,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(v,b)=>{const o=f("example-preview");return n(),l("div",F,[N,t(o,{code:k(A)},{default:c(()=>[t(E)]),_:1},8,["code"])])}}});export{S as default,L as excerpt,D as frontmatter};
