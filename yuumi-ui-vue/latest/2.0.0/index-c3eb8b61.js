import{_ as p,r as s,o as h,c as _,d as o,w as r,f as t,F as C,h as v,b as a,t as f,i as N,e as g,u as b}from"./index-9f5cfcb2.js";const E={data(){return{data:[{label:"一年级",value:1,expand:!0,children:[{label:"1班",value:101,checked:!0},{label:"2班",value:102,disabled:!0,checked:!0,children:[{label:"实验班",value:10201},{label:"普通班",value:10202}]},{label:"3班",value:103}]},{label:"二年级",value:2,expand:!0,children:[{label:"1班",value:201},{label:"2班",value:202}]},{label:"三年级",value:3,expand:!0,children:[{label:"1班",value:301},{label:"2班",value:302},{label:"3班",value:303}]}]}},methods:{onChecked(e){console.log("onChecked",e)},onNodeExpand(e){console.log("onNodeExpand",e)},onNodeClick(e){console.log("onNodeClick",e)},change(){this.data=[{label:"一年级",value:1,expand:!0,children:[{label:"1班",value:101,checked:!0}]},{label:"三年级",value:3,expand:!1,children:[{label:"1班",value:301}]}]},getTreeData(){console.log("tree data",this.$refs.tree.getTreeData())},getCheckedNodes(){console.log("slected nodes",this.$refs.tree.getCheckedNodes())}}};function Y(e,d,i,u,n,l){const c=s("YuumiTree"),m=s("YuumiButton");return h(),_(C,null,[o(c,{ref:"tree",data:n.data,onChecked:l.onChecked,onNodeExpand:l.onNodeExpand,onNodeClick:l.onNodeClick},null,8,["data","onChecked","onNodeExpand","onNodeClick"]),o(m,{style:{"margin-right":"10px"},onClick:l.change},{default:r(()=>[t(" 切换数据 ")]),_:1},8,["onClick"]),o(m,{style:{"margin-right":"10px"},onClick:l.getTreeData},{default:r(()=>[t(" 获取数型数据 ")]),_:1},8,["onClick"]),o(m,{style:{"margin-right":"10px"},onClick:l.getCheckedNodes},{default:r(()=>[t(" 获取选中的节点 ")]),_:1},8,["onClick"])],64)}const T=p(E,[["render",Y]]),$=`<template>
  <YuumiTree
    ref="tree"
    :data="data"
    @checked="onChecked"
    @node-expand="onNodeExpand"
    @node-click="onNodeClick"
  />
  <YuumiButton style="margin-right: 10px" @click="change"> 切换数据 </YuumiButton>
  <YuumiButton style="margin-right: 10px" @click="getTreeData"> 获取数型数据 </YuumiButton>
  <YuumiButton style="margin-right: 10px" @click="getCheckedNodes"> 获取选中的节点 </YuumiButton>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一年级",
          value: 1,
          expand: true,
          children: [
            { label: "1班", value: 101, checked: true },
            {
              label: "2班",
              value: 102,
              disabled: true,
              checked: true,
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
          expand: true,
          children: [
            { label: "1班", value: 201 },
            { label: "2班", value: 202 }
          ]
        },
        {
          label: "三年级",
          value: 3,
          expand: true,
          children: [
            { label: "1班", value: 301 },
            { label: "2班", value: 302 },
            { label: "3班", value: 303 }
          ]
        }
      ]
    }
  },
  methods: {
    onChecked(detail) {
      console.log("onChecked", detail)
    },
    onNodeExpand(detail) {
      console.log("onNodeExpand", detail)
    },
    onNodeClick(detail) {
      console.log("onNodeClick", detail)
    },
    change() {
      this.data = [
        {
          label: "一年级",
          value: 1,
          expand: true,
          children: [{ label: "1班", value: 101, checked: true }]
        },
        { label: "三年级", value: 3, expand: false, children: [{ label: "1班", value: 301 }] }
      ]
    },
    getTreeData() {
      console.log("tree data", this.$refs.tree.getTreeData())
    },
    getCheckedNodes() {
      console.log("slected nodes", this.$refs.tree.getCheckedNodes())
    }
  }
}
<\/script>
`,B={data(){return{data:[{label:"一年级",value:1,children:[{label:"1班",value:101},{label:"2班",value:102,children:[{label:"实验班",value:10201},{label:"普通班",value:10202}]},{label:"3班",value:103}]},{label:"二年级",value:2,children:[{label:"1班",value:201},{label:"2班",value:202}]},{label:"三年级",value:3,children:[{label:"1班",value:301},{label:"2班",value:302},{label:"3班",value:303}]}]}},methods:{onChecked(e){console.log("onChecked",e)},onNodeExpand(e){console.log("onNodeExpand",e)},onNodeClick(e){console.log("onNodeClick",e)}}};function y(e,d,i,u,n,l){const c=s("YuumiTree");return h(),v(c,{inline:"",data:n.data,onChecked:l.onChecked,onNodeExpand:l.onNodeExpand,onNodeClick:l.onNodeClick},null,8,["data","onChecked","onNodeExpand","onNodeClick"])}const D=p(B,[["render",y]]),I=`<template>
  <YuumiTree
    inline
    :data="data"
    @checked="onChecked"
    @node-expand="onNodeExpand"
    @node-click="onNodeClick"
  />
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一年级",
          value: 1,
          children: [
            { label: "1班", value: 101 },
            {
              label: "2班",
              value: 102,
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
          children: [
            { label: "1班", value: 201 },
            { label: "2班", value: 202 }
          ]
        },
        {
          label: "三年级",
          value: 3,
          children: [
            { label: "1班", value: 301 },
            { label: "2班", value: 302 },
            { label: "3班", value: 303 }
          ]
        }
      ]
    }
  },
  methods: {
    onChecked(detail) {
      console.log("onChecked", detail)
    },
    onNodeExpand(detail) {
      console.log("onNodeExpand", detail)
    },
    onNodeClick(detail) {
      console.log("onNodeClick", detail)
    }
  }
}
<\/script>
`,w={data(){return{data:[]}},mounted(){this.data=this.createChildren("")},methods:{createChildren(e){const d=Math.floor(5*Math.random()),i=[];for(let u=0;u<=d;u++){const n=e?`${e}-${u}`:`${u}`;i.push({label:n,value:n})}return i},loadData(e){return new Promise(d=>{setTimeout(()=>{Math.random()>.5?d(this.createChildren(e.nodeLabel)):d(null)},400)})},onChecked(e){console.log("onChecked",e)},onNodeExpand(e){console.log("onNodeExpand",e)},onNodeClick(e){console.log("onNodeClick",e)}}};function M(e,d,i,u,n,l){const c=s("YuumiTree");return h(),v(c,{data:n.data,"load-data":l.loadData,onChecked:l.onChecked,onNodeExpand:l.onNodeExpand,onNodeClick:l.onNodeClick},null,8,["data","load-data","onChecked","onNodeExpand","onNodeClick"])}const P=p(w,[["render",M]]),V=`<template>
  <YuumiTree
    :data="data"
    :load-data="loadData"
    @checked="onChecked"
    @node-expand="onNodeExpand"
    @node-click="onNodeClick"
  />
</template>
<script>
export default {
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.data = this.createChildren("")
  },
  methods: {
    createChildren(labelPrefix) {
      const max = Math.floor(5 * Math.random())
      const children = []

      for (let i = 0; i <= max; i++) {
        const _value = labelPrefix ? \`\${labelPrefix}-\${i}\` : \`\${i}\`
        children.push({
          label: _value,
          value: _value
        })
      }

      return children
    },
    loadData(vm) {
      return new Promise(resolve => {
        setTimeout(() => {
          Math.random() > 0.5 ? resolve(this.createChildren(vm.nodeLabel)) : resolve(null)
        }, 400)
      })
    },
    onChecked(detail) {
      console.log("onChecked", detail)
    },
    onNodeExpand(detail) {
      console.log("onNodeExpand", detail)
    },
    onNodeClick(detail) {
      console.log("onNodeClick", detail)
    }
  }
}
<\/script>
`,L={data(){return{data:[{label:"一年级",value:1,children:[{label:"1班",value:101,checked:!0},{label:"2班",value:102,disabled:!0,children:[{label:"实验班",value:10201},{label:"普通班",value:10202}]},{label:"3班",value:103}]},{label:"二年级",value:2,children:[{label:"1班",value:201},{label:"2班",value:202}]},{label:"三年级",value:3,expand:!0,children:[{label:"1班",value:301},{label:"2班",value:302},{label:"3班",value:303}]}]}}};function A(e,d,i,u,n,l){const c=s("YuumiTree");return h(),v(c,{data:n.data,checkable:!1},null,8,["data"])}const F=p(L,[["render",A]]),S=`<template>
  <YuumiTree :data="data" :checkable="false" />
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一年级",
          value: 1,
          children: [
            { label: "1班", value: 101, checked: true },
            {
              label: "2班",
              value: 102,
              disabled: true,
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
          children: [
            { label: "1班", value: 201 },
            { label: "2班", value: 202 }
          ]
        },
        {
          label: "三年级",
          value: 3,
          expand: true,
          children: [
            { label: "1班", value: 301 },
            { label: "2班", value: 302 },
            { label: "3班", value: 303 }
          ]
        }
      ]
    }
  }
}
<\/script>
`,j={data(){return{data:[{label:"一年级",value:1,children:[{label:"1班",value:101,checked:!0},{label:"2班",value:102,disabled:!0,children:[{label:"实验班",value:10201},{label:"普通班",value:10202}]},{label:"3班",value:103}]},{label:"二年级",value:2,children:[{label:"1班",value:201},{label:"2班",value:202}]},{label:"三年级",value:3,expand:!0,children:[{label:"1班",value:301},{label:"2班",value:302},{label:"3班",value:303}]}]}}};function q(e,d,i,u,n,l){const c=s("YuumiTree");return h(),v(c,{data:n.data,"expand-icon-visible":!1},null,8,["data"])}const z=p(j,[["render",q]]),G=`<template>
  <YuumiTree :data="data" :expand-icon-visible="false" />
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一年级",
          value: 1,
          children: [
            { label: "1班", value: 101, checked: true },
            {
              label: "2班",
              value: 102,
              disabled: true,
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
          children: [
            { label: "1班", value: 201 },
            { label: "2班", value: 202 }
          ]
        },
        {
          label: "三年级",
          value: 3,
          expand: true,
          children: [
            { label: "1班", value: 301 },
            { label: "2班", value: 302 },
            { label: "3班", value: 303 }
          ]
        }
      ]
    }
  }
}
<\/script>
`,H={data(){return{data:[{icon:"line-calendar",label:"2021-12-11",value:"2021-12-11",children:[{icon:"line-clock",label:"06:00",value:"2021-12-11 06:00:00"},{icon:"line-clock",label:"08:00",value:"2021-12-11 08:00:00"},{icon:"line-clock",label:"10:00",value:"2021-12-11 10:00:00"}]},{icon:"line-calendar",label:"2021-12-12",value:"2021-12-12",children:[{icon:"line-clock",label:"06:00",value:"2021-12-12 06:00:00"},{icon:"line-clock",label:"08:00",value:"2021-12-12 08:00:00"},{icon:"line-clock",label:"10:00",value:"2021-12-12 10:00:00"}]}]}}};function J(e,d,i,u,n,l){const c=s("YuumiIcon"),m=s("YuumiTree");return h(),v(m,{data:n.data},{default:r(({node:k,isLeaf:x})=>[o(c,{icon:k.icon},null,8,["icon"]),a("span",null,f(k.label),1),x?N("",!0):(h(),v(c,{key:0,icon:"line-arrow-right"}))]),_:1},8,["data"])}const K=p(H,[["render",J]]),O=`<template>
  <YuumiTree :data="data">
    <template #default="{ node, isLeaf }">
      <YuumiIcon :icon="node.icon" />
      <span>{{ node.label }}</span>
      <YuumiIcon v-if="!isLeaf" icon="line-arrow-right"></YuumiIcon>
    </template>
  </YuumiTree>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          icon: "line-calendar",
          label: "2021-12-11",
          value: "2021-12-11",
          children: [
            { icon: "line-clock", label: "06:00", value: "2021-12-11 06:00:00" },
            { icon: "line-clock", label: "08:00", value: "2021-12-11 08:00:00" },
            { icon: "line-clock", label: "10:00", value: "2021-12-11 10:00:00" }
          ]
        },
        {
          icon: "line-calendar",
          label: "2021-12-12",
          value: "2021-12-12",
          children: [
            { icon: "line-clock", label: "06:00", value: "2021-12-12 06:00:00" },
            { icon: "line-clock", label: "08:00", value: "2021-12-12 08:00:00" },
            { icon: "line-clock", label: "10:00", value: "2021-12-12 10:00:00" }
          ]
        }
      ]
    }
  }
}
<\/script>
`,Q={class:"markdown-body"},R=a("h3",null,"基本用法",-1),U=a("h3",null,"inline",-1),W=a("h3",null,"异步加载",-1),X=a("p",null,[t("设置 "),a("code",{class:""},"load-data"),t(" 返回 "),a("code",{class:""},"Promise<node[]>"),t("。")],-1),Z=a("h3",null,"不显示checkbox",-1),ee=a("p",null,[t("将 "),a("code",{class:""},"checkable"),t(" 设置为 "),a("code",{class:""},"false"),t(", 默认为 "),a("code",{class:""},"true"),t(" 。")],-1),ne=a("h3",null,"不显示expandIcon",-1),le=a("p",null,[t("将 "),a("code",{class:""},"expandIconVisible"),t(" 设置为 "),a("code",{class:""},"false"),t(", 默认为 "),a("code",{class:""},"true"),t(" 。")],-1),ae=a("h3",null,"自定义TreeNode",-1),te={},de="",ce=g({__name:"index",setup(e,{expose:d}){return d({frontmatter:{},excerpt:void 0}),(i,u)=>{const n=s("example-preview");return h(),_("div",Q,[R,o(n,{code:b($)},{default:r(()=>[o(T)]),_:1},8,["code"]),U,o(n,{code:b(I)},{default:r(()=>[o(D)]),_:1},8,["code"]),W,X,o(n,{code:b(V)},{default:r(()=>[o(P)]),_:1},8,["code"]),Z,ee,o(n,{code:b(S)},{default:r(()=>[o(F)]),_:1},8,["code"]),ne,le,o(n,{code:b(G)},{default:r(()=>[o(z)]),_:1},8,["code"]),ae,o(n,{code:b(O)},{default:r(()=>[o(K)]),_:1},8,["code"])])}}});export{ce as default,de as excerpt,te as frontmatter};
