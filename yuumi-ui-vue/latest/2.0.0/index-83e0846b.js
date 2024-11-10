import{_ as c,r as l,o as s,c as i,b as o,d as n,F as u,e as _,w as d,u as x}from"./index-9f5cfcb2.js";const v={data(){return{page1:{page:1,pageTotal:2,total:20},page2:{page:"3",pageTotal:"20",total:200},page3:{page:"18",pageTotal:"145",total:"2885"}}},methods:{consoleLog(p){console.log(p)}}},f={style:{"margin-bottom":"20px"}},h={style:{"margin-bottom":"20px"}},T={style:{"margin-bottom":"20px"}};function b(p,a,r,m,e,P){const g=l("YuumiPagination");return s(),i(u,null,[o("div",f,[n(g,{page:e.page1.page,"page-total":e.page1.pageTotal,total:e.page1.total,align:"left",onChange:a[0]||(a[0]=t=>e.page1.page=t)},null,8,["page","page-total","total"])]),o("div",h,[n(g,{page:e.page2.page,"page-total":e.page2.pageTotal,total:e.page2.total,align:"right",onChange:a[1]||(a[1]=t=>e.page2.page=t)},null,8,["page","page-total","total"])]),o("div",T,[n(g,{page:e.page3.page,"page-total":e.page3.pageTotal,total:e.page3.total,onChange:a[2]||(a[2]=t=>e.page3.page=t)},null,8,["page","page-total","total"])])],64)}const y=c(v,[["render",b]]),C=`<template>
  <div style="margin-bottom: 20px">
    <YuumiPagination
      :page="page1.page"
      :page-total="page1.pageTotal"
      :total="page1.total"
      align="left"
      @change="page => (page1.page = page)"
    />
  </div>
  <div style="margin-bottom: 20px">
    <YuumiPagination
      :page="page2.page"
      :page-total="page2.pageTotal"
      :total="page2.total"
      align="right"
      @change="page => (page2.page = page)"
    />
  </div>

  <div style="margin-bottom: 20px">
    <YuumiPagination
      :page="page3.page"
      :page-total="page3.pageTotal"
      :total="page3.total"
      @change="page => (page3.page = page)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      page1: {
        page: 1,
        pageTotal: 2,
        total: 20
      },
      page2: {
        page: "3",
        pageTotal: "20",
        total: 200
      },
      page3: {
        page: "18",
        pageTotal: "145",
        total: "2885"
      }
    }
  },
  methods: {
    consoleLog(value) {
      console.log(value)
    }
  }
}
<\/script>
`,w={class:"markdown-body"},B=o("h3",null,"基本用法",-1),k={},E="",F=_({__name:"index",setup(p,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(r,m)=>{const e=l("example-preview");return s(),i("div",w,[B,n(e,{code:x(C)},{default:d(()=>[n(y)]),_:1},8,["code"])])}}});export{F as default,E as excerpt,k as frontmatter};
