import{_ as u,r as t,o as d,c,d as l,e as v,w as p,u as b,b as _}from"./index-098e058d.js";const h={data(){const e=[{label:"一年级",value:1,icon:"line-setting",expand:!0,children:[{label:"1班",value:101,checked:!0},{label:"2班",value:102,disabled:!0,icon:"line-setting",children:[{label:"实验班",value:10201},{label:"普通班",value:10202}]},{label:"3班",value:103}]},{label:"二年级",value:2,icon:"line-setting",children:[{label:"1班",value:201},{label:"2班",value:202}]},{label:"三年级",value:3,icon:"line-setting",children:[{label:"1班",value:301},{label:"2班",value:302},{label:"3班",value:303}]}];return{data:e,selectedNode:e[0].children[0]}},methods:{onNodeExpand(e){console.log("onNodeExpand",e)},onNodeClick(e){console.log("onNodeClick",e),e.node.children||(this.selectedNode=e.node)},onEvent(e){console.log("onEvent",e)}}},x={style:{width:"200px"}};function N(e,a,i,s,n,o){const r=t("YuumiNavs");return d(),c("div",x,[l(r,{data:n.data,"selected-node":n.selectedNode,onNodeExpand:o.onNodeExpand,onNodeClick:o.onNodeClick},null,8,["data","selected-node","onNodeExpand","onNodeClick"])])}const m=u(h,[["render",N]]),f=`<template>
  <div style="width: 200px">
    <YuumiNavs
      :data="data"
      :selected-node="selectedNode"
      @node-expand="onNodeExpand"
      @node-click="onNodeClick"
    />
  </div>
</template>
<script>
export default {
  data() {
    const navs = [
      {
        label: "一年级",
        value: 1,
        icon: "line-setting",
        expand: true,
        children: [
          { label: "1班", value: 101, checked: true },
          {
            label: "2班",
            value: 102,
            disabled: true,
            icon: "line-setting",
            children: [
              { label: "实验班", value: 10201 },
              { label: "普通班", value: 10202 }
            ]
          },
          { label: "3班", value: 103 }
        ]
      },
      {
        label: "二年级",
        value: 2,
        icon: "line-setting",
        children: [
          { label: "1班", value: 201 },
          { label: "2班", value: 202 }
        ]
      },
      {
        label: "三年级",
        value: 3,
        icon: "line-setting",
        children: [
          { label: "1班", value: 301 },
          { label: "2班", value: 302 },
          { label: "3班", value: 303 }
        ]
      }
    ]
    return {
      data: navs,
      selectedNode: navs[0].children[0]
    }
  },
  methods: {
    onNodeExpand(detail) {
      console.log("onNodeExpand", detail)
    },
    onNodeClick(detail) {
      console.log("onNodeClick", detail)
      if (!detail.node.children) {
        this.selectedNode = detail.node
      }
    },
    onEvent(detail) {
      console.log("onEvent", detail)
    }
  }
}
<\/script>
`,E={class:"markdown-body"},g=_("h3",null,"基本用法",-1),C={},w="",B=v({__name:"index",setup(e,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(i,s)=>{const n=t("example-preview");return d(),c("div",E,[g,l(n,{code:b(f)},{default:p(()=>[l(m)]),_:1},8,["code"])])}}});export{B as default,w as excerpt,C as frontmatter};
