import{e as b,_ as w,r as h,o as p,h as C,w as o,c as _,a as $,F as Y,d as e,f as d,b as l,i as x,t as T,u as f}from"./index-098e058d.js";const S=b({data(){return{columns:[{title:"姓名",prop:"name"},{title:"语文",prop:"chinese"},{title:"数学",prop:"math"},{title:"英语",prop:"english"}],students:[{name:"Dwayne Johnson",chinese:0,math:80,english:90},{name:"李四",chinese:86,math:70,english:92},{name:"王五",chinese:96,math:90,english:80},{name:"小丽",chinese:83,math:89,english:92},{name:"小红",chinese:79,math:99,english:100},{name:"小明",chinese:88,math:80,english:95}]}}});function E(t,i,s,u,a,r){const n=h("YuumiTableColumn"),m=h("YuumiTable");return p(),C(m,{data:t.students},{default:o(()=>[(p(!0),_(Y,null,$(t.columns,c=>(p(),C(n,{key:c.prop,title:c.title,prop:c.prop},null,8,["title","prop"]))),128))]),_:1},8,["data"])}const N=w(S,[["render",E]]),A=`<template>
  <YuumiTable :data="students">
    <template v-for="item in columns" :key="item.prop">
      <YuumiTableColumn :title="item.title" :prop="item.prop" />
    </template>
  </YuumiTable>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      columns: [
        { title: "姓名", prop: "name" },
        { title: "语文", prop: "chinese" },
        { title: "数学", prop: "math" },
        { title: "英语", prop: "english" }
      ],
      students: [
        { name: "Dwayne Johnson", chinese: 0, math: 80, english: 90 },
        { name: "李四", chinese: 86, math: 70, english: 92 },
        { name: "王五", chinese: 96, math: 90, english: 80 },
        { name: "小丽", chinese: 83, math: 89, english: 92 },
        { name: "小红", chinese: 79, math: 99, english: 100 },
        { name: "小明", chinese: 88, math: 80, english: 95 }
      ]
    }
  }
})
<\/script>

<style lang="scss" scoped></style>
`,F=b({data(){return{students:[{name:"张三",chinese:10,math:80,english:90},{name:"李四",chinese:86,math:70,english:92},{name:"王五",chinese:96,math:90,english:80},{name:"小丽",chinese:83,math:89,english:92},{name:"小红",chinese:79,math:99,english:100},{name:"小明",chinese:88,math:80,english:95}]}}});function k(t,i,s,u,a,r){const n=h("YuumiTableColumn"),m=h("YuumiTable");return p(),C(m,{data:t.students,stripe:""},{default:o(()=>[e(n,{title:"姓名",prop:"name"}),e(n,{width:150,title:"语文",prop:"chinese"}),e(n,{width:150,title:"数学",prop:"math"}),e(n,{width:150,title:"英语",prop:"english"})]),_:1},8,["data"])}const V=w(F,[["render",k]]),R=`<template>
  <YuumiTable :data="students" stripe>
    <YuumiTableColumn title="姓名" prop="name" />
    <YuumiTableColumn :width="150" title="语文" prop="chinese" />
    <YuumiTableColumn :width="150" title="数学" prop="math" />
    <YuumiTableColumn :width="150" title="英语" prop="english" />
  </YuumiTable>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      students: [
        { name: "张三", chinese: 10, math: 80, english: 90 },
        { name: "李四", chinese: 86, math: 70, english: 92 },
        { name: "王五", chinese: 96, math: 90, english: 80 },
        { name: "小丽", chinese: 83, math: 89, english: 92 },
        { name: "小红", chinese: 79, math: 99, english: 100 },
        { name: "小明", chinese: 88, math: 80, english: 95 }
      ]
    }
  }
})
<\/script>

<style lang="scss" scoped></style>
`,z=b({data(){return{size:"default",students:[{name:"张三",chinese:10,math:80,english:90},{name:"李四",chinese:86,math:70,english:92},{name:"王五",chinese:96,math:90,english:80},{name:"小丽",chinese:83,math:89,english:92},{name:"小红",chinese:79,math:99,english:100},{name:"小明",chinese:88,math:80,english:95}]}}}),I=l("span",null,"size:",-1);function j(t,i,s,u,a,r){const n=h("YuumiRadio"),m=h("YuumiRadioGroup"),c=h("YuumiTableColumn"),y=h("YuumiTable");return p(),_(Y,null,[I,e(m,{modelValue:t.size,"onUpdate:modelValue":i[0]||(i[0]=g=>t.size=g)},{default:o(()=>[e(n,{unique:"default",style:{margin:"0 10px 10px 0"}},{default:o(()=>[d(" default ")]),_:1}),e(n,{unique:"middle",style:{margin:"0 10px 10px 0"}},{default:o(()=>[d(" middle ")]),_:1}),e(n,{unique:"small",style:{margin:"0 10px 10px 0"}},{default:o(()=>[d(" small ")]),_:1})]),_:1},8,["modelValue"]),e(y,{data:t.students,stripe:"",size:t.size},{default:o(()=>[e(c,{title:"姓名",prop:"name"}),e(c,{width:150,title:"语文",prop:"chinese"}),e(c,{width:150,title:"数学",prop:"math"}),e(c,{width:150,title:"英语",prop:"english"})]),_:1},8,["data","size"])],64)}const M=w(z,[["render",j]]),O=`<template>
  <span>size:</span>
  <YuumiRadioGroup v-model="size">
    <YuumiRadio unique="default" style="margin: 0 10px 10px 0"> default </YuumiRadio>
    <YuumiRadio unique="middle" style="margin: 0 10px 10px 0"> middle </YuumiRadio>
    <YuumiRadio unique="small" style="margin: 0 10px 10px 0"> small </YuumiRadio>
  </YuumiRadioGroup>

  <YuumiTable :data="students" stripe :size="size">
    <YuumiTableColumn title="姓名" prop="name" />
    <YuumiTableColumn :width="150" title="语文" prop="chinese" />
    <YuumiTableColumn :width="150" title="数学" prop="math" />
    <YuumiTableColumn :width="150" title="英语" prop="english" />
  </YuumiTable>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      size: "default",
      students: [
        { name: "张三", chinese: 10, math: 80, english: 90 },
        { name: "李四", chinese: 86, math: 70, english: 92 },
        { name: "王五", chinese: 96, math: 90, english: 80 },
        { name: "小丽", chinese: 83, math: 89, english: 92 },
        { name: "小红", chinese: 79, math: 99, english: 100 },
        { name: "小明", chinese: 88, math: 80, english: 95 }
      ]
    }
  }
})
<\/script>

<style lang="scss" scoped></style>
`,q=b({data(){return{students:[{name:"张三",chinese:10,math:80,english:90},{name:"李四",chinese:86,math:70,english:92},{name:"王五",chinese:96,math:90,english:80},{name:"小丽",chinese:83,math:89,english:92},{name:"小红",chinese:79,math:99,english:100},{name:"小明",chinese:88,math:80,english:95}]}},methods:{rowClassName({rowIndex:t}){switch(console.log(t),t%4){case 0:return"__success";case 1:return"__warn";case 2:return"__error";case 3:return"__info"}},cellClassName({colIndex:t,rowIndex:i}){switch((i+t)%4){case 0:return"__success";case 1:return"__warn";case 2:return"__error";case 3:return"__info"}}}});function G(t,i,s,u,a,r){const n=h("YuumiTableColumn"),m=h("YuumiTable");return p(),C(m,{data:t.students,"row-class-name":t.rowClassName,"cell-class-name":t.cellClassName},{default:o(()=>[e(n,{title:"姓名",prop:"name"}),e(n,{width:150,title:"语文",prop:"chinese"}),e(n,{width:150,title:"数学",prop:"math"}),e(n,{width:150,title:"英语",prop:"english"})]),_:1},8,["data","row-class-name","cell-class-name"])}const U=w(q,[["render",G],["__scopeId","data-v-be3cd216"]]),J=`<template>
  <YuumiTable :data="students" :row-class-name="rowClassName" :cell-class-name="cellClassName">
    <YuumiTableColumn title="姓名" prop="name" />
    <YuumiTableColumn :width="150" title="语文" prop="chinese" />
    <YuumiTableColumn :width="150" title="数学" prop="math" />
    <YuumiTableColumn :width="150" title="英语" prop="english" />
  </YuumiTable>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      students: [
        { name: "张三", chinese: 10, math: 80, english: 90 },
        { name: "李四", chinese: 86, math: 70, english: 92 },
        { name: "王五", chinese: 96, math: 90, english: 80 },
        { name: "小丽", chinese: 83, math: 89, english: 92 },
        { name: "小红", chinese: 79, math: 99, english: 100 },
        { name: "小明", chinese: 88, math: 80, english: 95 }
      ]
    }
  },
  methods: {
    rowClassName({ rowIndex }: any) {
      console.log(rowIndex)
      switch (rowIndex % 4) {
        case 0:
          return "__success"
        case 1:
          return "__warn"
        case 2:
          return "__error"
        case 3:
          return "__info"
      }
    },
    cellClassName({ colIndex, rowIndex }: any) {
      switch ((rowIndex + colIndex) % 4) {
        case 0:
          return "__success"
        case 1:
          return "__warn"
        case 2:
          return "__error"
        case 3:
          return "__info"
      }
    }
  }
})
<\/script>

<style lang="scss" scoped>
.yuumi-table :deep() table {
  tr.__success td {
    background-color: rgba(#00b450, 0.15);
  }

  tr.__warn td {
    background-color: rgba(#ffc107, 0.15);
  }

  tr.__error td {
    background-color: rgba(#dc3545, 0.15);
  }

  tr.__info td {
    background-color: rgba(#0d6efd, 0.15);
  }

  td.__success {
    color: rgba(#00b450, 1);
  }

  td.__warn {
    color: rgba(#ffc107, 1);
  }

  td.__error {
    color: rgba(#dc3545, 1);
  }

  td.__info {
    color: rgba(#0d6efd, 1);
  }
}
</style>
`,L=b({data(){return{students:[{name:"张三",chinese:110,math:145,english:136,physics:108,chemistry:97,biology:72},{name:"李四",chinese:114,math:125,english:132,physics:101,chemistry:94,biology:76},{name:"王五",chinese:105,math:132,english:124,physics:90,chemistry:87,biology:78},{name:"小丽",chinese:96,math:115,english:106,physics:98,chemistry:91,biology:70},{name:"小红",chinese:112,math:135,english:113,physics:98,chemistry:87,biology:76},{name:"小明",chinese:105,math:125,english:124,physics:101,chemistry:77,biology:73},{name:"李明",chinese:102,math:135,english:118,physics:99,chemistry:67,biology:72},{name:"韩梅",chinese:100,math:105,english:109,physics:100,chemistry:93,biology:78}].map(t=>(t.summary=Object.values(t).filter(i=>typeof i=="number").reduce((i,s)=>i+s,0),t))}}}),H={style:{height:"320px",margin:"0 0 40px"}},K={style:{height:"320px"}};function P(t,i,s,u,a,r){const n=h("YuumiTableColumn"),m=h("YuumiTable");return p(),_(Y,null,[l("div",H,[e(m,{data:t.students},{default:o(()=>[e(n,{title:"姓名",prop:"name",fixed:"left"}),e(n,{width:120,title:"语文",prop:"chinese"}),e(n,{width:120,title:"数学",prop:"math"}),e(n,{width:120,title:"英语",prop:"english"}),e(n,{width:120,title:"物理",prop:"physics"}),e(n,{width:120,title:"化学",prop:"chemistry"}),e(n,{width:120,title:"生物",prop:"biology"}),e(n,{width:120,title:"总分",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])]),l("div",K,[e(m,{data:t.students,border:""},{default:o(()=>[e(n,{title:"姓名",prop:"name",fixed:"left"}),e(n,{width:120,title:"语文",prop:"chinese"}),e(n,{width:120,title:"数学",prop:"math"}),e(n,{width:120,title:"英语",prop:"english"}),e(n,{width:120,title:"物理",prop:"physics"}),e(n,{width:120,title:"化学",prop:"chemistry"}),e(n,{width:120,title:"生物",prop:"biology"}),e(n,{width:120,title:"总分",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])])],64)}const Q=w(L,[["render",P]]),W=`<template>
  <div style="height: 320px; margin: 0 0 40px">
    <YuumiTable :data="students">
      <YuumiTableColumn title="姓名" prop="name" fixed="left" />
      <YuumiTableColumn :width="120" title="语文" prop="chinese" />
      <YuumiTableColumn :width="120" title="数学" prop="math" />
      <YuumiTableColumn :width="120" title="英语" prop="english" />
      <YuumiTableColumn :width="120" title="物理" prop="physics" />
      <YuumiTableColumn :width="120" title="化学" prop="chemistry" />
      <YuumiTableColumn :width="120" title="生物" prop="biology" />
      <YuumiTableColumn :width="120" title="总分" prop="summary" fixed="right" align="center" />
    </YuumiTable>
  </div>

  <div style="height: 320px">
    <YuumiTable :data="students" border>
      <YuumiTableColumn title="姓名" prop="name" fixed="left" />
      <YuumiTableColumn :width="120" title="语文" prop="chinese" />
      <YuumiTableColumn :width="120" title="数学" prop="math" />
      <YuumiTableColumn :width="120" title="英语" prop="english" />
      <YuumiTableColumn :width="120" title="物理" prop="physics" />
      <YuumiTableColumn :width="120" title="化学" prop="chemistry" />
      <YuumiTableColumn :width="120" title="生物" prop="biology" />
      <YuumiTableColumn :width="120" title="总分" prop="summary" fixed="right" align="center" />
    </YuumiTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      students: [
        {
          name: "张三",
          chinese: 110,
          math: 145,
          english: 136,
          physics: 108,
          chemistry: 97,
          biology: 72
        },
        {
          name: "李四",
          chinese: 114,
          math: 125,
          english: 132,
          physics: 101,
          chemistry: 94,
          biology: 76
        },
        {
          name: "王五",
          chinese: 105,
          math: 132,
          english: 124,
          physics: 90,
          chemistry: 87,
          biology: 78
        },
        {
          name: "小丽",
          chinese: 96,
          math: 115,
          english: 106,
          physics: 98,
          chemistry: 91,
          biology: 70
        },
        {
          name: "小红",
          chinese: 112,
          math: 135,
          english: 113,
          physics: 98,
          chemistry: 87,
          biology: 76
        },
        {
          name: "小明",
          chinese: 105,
          math: 125,
          english: 124,
          physics: 101,
          chemistry: 77,
          biology: 73
        },
        {
          name: "李明",
          chinese: 102,
          math: 135,
          english: 118,
          physics: 99,
          chemistry: 67,
          biology: 72
        },
        {
          name: "韩梅",
          chinese: 100,
          math: 105,
          english: 109,
          physics: 100,
          chemistry: 93,
          biology: 78
        }
      ].map((item: { [key: string]: string | number }) => {
        item.summary = (
          Object.values(item).filter(value => typeof value === "number") as number[]
        ).reduce((acc, value) => acc + value, 0)
        return item
      })
    }
  }
})
<\/script>

<style lang="scss" scoped></style>
`,X=b({data(){return{students:[{name:"张三",chinese:110,math:145,english:136,physics:108,chemistry:97,biology:72},{name:"李四",chinese:114,math:125,english:132,physics:101,chemistry:94,biology:76},{name:"王五",chinese:105,math:132,english:124,physics:90,chemistry:87,biology:78},{name:"小丽",chinese:96,math:115,english:106,physics:98,chemistry:91,biology:70},{name:"小红",chinese:112,math:135,english:113,physics:98,chemistry:87,biology:76},{name:"小明",chinese:105,math:125,english:124,physics:101,chemistry:77,biology:73},{name:"李明",chinese:102,math:135,english:118,physics:99,chemistry:67,biology:72},{name:"韩梅",chinese:100,math:105,english:109,physics:100,chemistry:93,biology:78}].map(t=>(t.summary=Object.values(t).filter(i=>typeof i=="number").reduce((i,s)=>i+s,0),t))}},methods:{getAverages({data:t,columns:i}){const s=Array(i.length).fill(0);return t.forEach(u=>{i.forEach((a,r)=>{if(r==0&&(s[r]="平均分"),typeof s[r]!="number")return;const n=Number(u[a.props.prop]);if(n.toString()==="NaN"){s[r]="N/A";return}s[r]+=n})}),s.map(u=>typeof u!="number"?u:(u/t.length).toFixed(2))}}}),Z={style:{height:"320px",margin:"0 0 40px"}},ee={style:{height:"320px"}};function ne(t,i,s,u,a,r){const n=h("YuumiTableColumn"),m=h("YuumiTable");return p(),_(Y,null,[l("div",Z,[e(m,{data:t.students,summary:""},{default:o(()=>[e(n,{title:"姓名",prop:"name",fixed:"left"}),e(n,{width:150,title:"语文",prop:"chinese"}),e(n,{width:150,title:"数学",prop:"math"}),e(n,{width:150,title:"英语",prop:"english"}),e(n,{width:150,title:"物理",prop:"physics"}),e(n,{width:150,title:"化学",prop:"chemistry"}),e(n,{width:150,title:"生物",prop:"biology"}),e(n,{width:150,title:"总分",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])]),l("div",ee,[e(m,{data:t.students,border:"",summary:"","summary-method":t.getAverages},{default:o(()=>[e(n,{title:"姓名",prop:"name",fixed:"left"}),e(n,{width:150,title:"语文",prop:"chinese"}),e(n,{width:150,title:"数学",prop:"math"}),e(n,{width:150,title:"英语",prop:"english"}),e(n,{width:150,title:"物理",prop:"physics"}),e(n,{width:150,title:"化学",prop:"chemistry"}),e(n,{width:150,title:"生物",prop:"biology"}),e(n,{width:150,title:"总分",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data","summary-method"])])],64)}const te=w(X,[["render",ne]]),ie=`<template>
  <div style="height: 320px; margin: 0 0 40px">
    <YuumiTable :data="students" summary>
      <YuumiTableColumn title="姓名" prop="name" fixed="left" />
      <YuumiTableColumn :width="150" title="语文" prop="chinese" />
      <YuumiTableColumn :width="150" title="数学" prop="math" />
      <YuumiTableColumn :width="150" title="英语" prop="english" />
      <YuumiTableColumn :width="150" title="物理" prop="physics" />
      <YuumiTableColumn :width="150" title="化学" prop="chemistry" />
      <YuumiTableColumn :width="150" title="生物" prop="biology" />
      <YuumiTableColumn :width="150" title="总分" prop="summary" fixed="right" align="center" />
    </YuumiTable>
  </div>

  <div style="height: 320px">
    <YuumiTable :data="students" border summary :summary-method="getAverages">
      <YuumiTableColumn title="姓名" prop="name" fixed="left" />
      <YuumiTableColumn :width="150" title="语文" prop="chinese" />
      <YuumiTableColumn :width="150" title="数学" prop="math" />
      <YuumiTableColumn :width="150" title="英语" prop="english" />
      <YuumiTableColumn :width="150" title="物理" prop="physics" />
      <YuumiTableColumn :width="150" title="化学" prop="chemistry" />
      <YuumiTableColumn :width="150" title="生物" prop="biology" />
      <YuumiTableColumn :width="150" title="总分" prop="summary" fixed="right" align="center" />
    </YuumiTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      students: [
        {
          name: "张三",
          chinese: 110,
          math: 145,
          english: 136,
          physics: 108,
          chemistry: 97,
          biology: 72
        },
        {
          name: "李四",
          chinese: 114,
          math: 125,
          english: 132,
          physics: 101,
          chemistry: 94,
          biology: 76
        },
        {
          name: "王五",
          chinese: 105,
          math: 132,
          english: 124,
          physics: 90,
          chemistry: 87,
          biology: 78
        },
        {
          name: "小丽",
          chinese: 96,
          math: 115,
          english: 106,
          physics: 98,
          chemistry: 91,
          biology: 70
        },
        {
          name: "小红",
          chinese: 112,
          math: 135,
          english: 113,
          physics: 98,
          chemistry: 87,
          biology: 76
        },
        {
          name: "小明",
          chinese: 105,
          math: 125,
          english: 124,
          physics: 101,
          chemistry: 77,
          biology: 73
        },
        {
          name: "李明",
          chinese: 102,
          math: 135,
          english: 118,
          physics: 99,
          chemistry: 67,
          biology: 72
        },
        {
          name: "韩梅",
          chinese: 100,
          math: 105,
          english: 109,
          physics: 100,
          chemistry: 93,
          biology: 78
        }
      ].map((item: { [key: string]: string | number }) => {
        item.summary = (
          Object.values(item).filter(value => typeof value === "number") as number[]
        ).reduce((acc, value) => acc + value, 0)
        return item
      })
    }
  },
  methods: {
    getAverages({ data, columns }: any) {
      const sum = Array(columns.length).fill(0)

      data.forEach((row: any) => {
        columns.forEach((column: any, index: number) => {
          if (index == 0) sum[index] = "平均分"

          if (typeof sum[index] !== "number") return

          const itemValue = Number(row[column.props.prop])
          if (itemValue.toString() === "NaN") {
            sum[index] = "N/A"
            return
          }

          sum[index] += itemValue
        })
      })

      return sum.map(item => {
        if (typeof item !== "number") return item
        return (item / data.length).toFixed(2)
      })
    }
  }
})
<\/script>

<style lang="scss" scoped></style>
`,se=b({data(){return{students:[{name:"张三",chinese:110,math:145,english:136,physics:108,chemistry:97,biology:72},{name:"李四",chinese:114,math:125,english:132,physics:101,chemistry:94,biology:76},{name:"王五",chinese:105,math:132,english:124,physics:90,chemistry:87,biology:78},{name:"小丽",chinese:96,math:115,english:106,physics:98,chemistry:91,biology:70},{name:"小红",chinese:112,math:135,english:113,physics:98,chemistry:87,biology:76},{name:"小明",chinese:105,math:125,english:124,physics:101,chemistry:77,biology:73},{name:"李明",chinese:102,math:135,english:118,physics:99,chemistry:67,biology:72},{name:"韩梅",chinese:100,math:105,english:109,physics:100,chemistry:93,biology:78}].map(t=>(t.summary=Object.values(t).filter(i=>typeof i=="number").reduce((i,s)=>i+s,0),t))}},methods:{getAverages({data:t,columns:i}){const s=Array(i.length).fill(0);return t.forEach(u=>{i.forEach((a,r)=>{if(r==0&&(s[r]="平均分"),typeof s[r]!="number")return;const n=Number(u[a.props.prop]);if(n.toString()==="NaN"){s[r]="N/A";return}s[r]+=n})}),s.map(u=>typeof u!="number"?u:(u/t.length).toFixed(2))},toggleRowsSelected(t){this.$refs.table.toggleRowsSelection(this.students.slice(1,3),t)},getSelections(){const t=this.$refs.table.selections;console.log(t)},logSelectionEventDetail(...t){console.log(t)}}}),le={style:{height:"320px",margin:"0 0 10px"}};function oe(t,i,s,u,a,r){const n=h("YuumiTableColumn"),m=h("YuumiTable"),c=h("YuumiButton");return p(),_(Y,null,[l("div",le,[e(m,{ref:"table",data:t.students,summary:"",onSelect:i[0]||(i[0]=y=>t.logSelectionEventDetail(y,"select")),onSelectAll:i[1]||(i[1]=y=>t.logSelectionEventDetail(y,"selectAll")),onSelectionChange:i[2]||(i[2]=y=>t.logSelectionEventDetail(y,"selectionChange"))},{default:o(()=>[e(n,{width:45,type:"selection",fixed:"left"}),e(n,{title:"姓名",prop:"name",fixed:"left"}),e(n,{width:150,title:"语文",prop:"chinese"}),e(n,{width:150,title:"数学",prop:"math"}),e(n,{width:150,title:"英语",prop:"english"}),e(n,{width:150,title:"物理",prop:"physics"}),e(n,{width:150,title:"化学",prop:"chemistry"}),e(n,{width:150,title:"生物",prop:"biology"}),e(n,{width:150,title:"总分",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])]),l("div",null,[e(c,{style:{margin:"0 10px 10px 0"},onClick:i[3]||(i[3]=y=>t.toggleRowsSelected(!0))},{default:o(()=>[d(" 设置第二和第三行选中 ")]),_:1}),e(c,{style:{margin:"0 10px 10px 0"},onClick:i[4]||(i[4]=y=>t.toggleRowsSelected(!1))},{default:o(()=>[d(" 取消第二和第三行选中 ")]),_:1}),e(c,{style:{margin:"0 10px 10px 0"},onClick:t.getSelections},{default:o(()=>[d(" 获取选中的行 ")]),_:1},8,["onClick"])])],64)}const ue=w(se,[["render",oe]]),ae=`<template>
  <div style="height: 320px; margin: 0 0 10px">
    <YuumiTable
      ref="table"
      :data="students"
      summary
      @select="logSelectionEventDetail($event, 'select')"
      @selectAll="logSelectionEventDetail($event, 'selectAll')"
      @selectionChange="logSelectionEventDetail($event, 'selectionChange')"
    >
      <YuumiTableColumn :width="45" type="selection" fixed="left" />
      <YuumiTableColumn title="姓名" prop="name" fixed="left" />
      <YuumiTableColumn :width="150" title="语文" prop="chinese" />
      <YuumiTableColumn :width="150" title="数学" prop="math" />
      <YuumiTableColumn :width="150" title="英语" prop="english" />
      <YuumiTableColumn :width="150" title="物理" prop="physics" />
      <YuumiTableColumn :width="150" title="化学" prop="chemistry" />
      <YuumiTableColumn :width="150" title="生物" prop="biology" />
      <YuumiTableColumn :width="150" title="总分" prop="summary" fixed="right" align="center" />
    </YuumiTable>
  </div>

  <div>
    <YuumiButton style="margin: 0 10px 10px 0" @click="toggleRowsSelected(true)">
      设置第二和第三行选中
    </YuumiButton>
    <YuumiButton style="margin: 0 10px 10px 0" @click="toggleRowsSelected(false)">
      取消第二和第三行选中
    </YuumiButton>
    <YuumiButton style="margin: 0 10px 10px 0" @click="getSelections"> 获取选中的行 </YuumiButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      students: [
        {
          name: "张三",
          chinese: 110,
          math: 145,
          english: 136,
          physics: 108,
          chemistry: 97,
          biology: 72
        },
        {
          name: "李四",
          chinese: 114,
          math: 125,
          english: 132,
          physics: 101,
          chemistry: 94,
          biology: 76
        },
        {
          name: "王五",
          chinese: 105,
          math: 132,
          english: 124,
          physics: 90,
          chemistry: 87,
          biology: 78
        },
        {
          name: "小丽",
          chinese: 96,
          math: 115,
          english: 106,
          physics: 98,
          chemistry: 91,
          biology: 70
        },
        {
          name: "小红",
          chinese: 112,
          math: 135,
          english: 113,
          physics: 98,
          chemistry: 87,
          biology: 76
        },
        {
          name: "小明",
          chinese: 105,
          math: 125,
          english: 124,
          physics: 101,
          chemistry: 77,
          biology: 73
        },
        {
          name: "李明",
          chinese: 102,
          math: 135,
          english: 118,
          physics: 99,
          chemistry: 67,
          biology: 72
        },
        {
          name: "韩梅",
          chinese: 100,
          math: 105,
          english: 109,
          physics: 100,
          chemistry: 93,
          biology: 78
        }
      ].map((item: { [key: string]: string | number }) => {
        item.summary = (
          Object.values(item).filter(value => typeof value === "number") as number[]
        ).reduce((acc, value) => acc + value, 0)
        return item
      })
    }
  },
  methods: {
    getAverages({ data, columns }: any) {
      const sum = Array(columns.length).fill(0)

      data.forEach((row: any) => {
        columns.forEach((column: any, index: number) => {
          if (index == 0) sum[index] = "平均分"

          if (typeof sum[index] !== "number") return

          const itemValue = Number(row[column.props.prop])
          if (itemValue.toString() === "NaN") {
            sum[index] = "N/A"
            return
          }

          sum[index] += itemValue
        })
      })

      return sum.map(item => {
        if (typeof item !== "number") return item
        return (item / data.length).toFixed(2)
      })
    },

    toggleRowsSelected(value: boolean) {
      (this.$refs.table as any).toggleRowsSelection(this.students.slice(1, 3), value)
    },

    getSelections() {
      const selections = (this.$refs.table as any).selections
      console.log(selections)
    },
    logSelectionEventDetail(...args: any[]) {
      console.log(args)
    }
  }
})
<\/script>

<style lang="scss" scoped></style>
`,me=b({data(){return{students:[]}}}),re={style:{margin:"0 0 40px"}};function he(t,i,s,u,a,r){const n=h("YuumiTableColumn"),m=h("YuumiTable");return p(),_(Y,null,[l("div",re,[e(m,{data:t.students},{default:o(()=>[e(n,{title:"姓名",prop:"name",fixed:"left"}),e(n,{width:120,title:"语文",prop:"chinese"}),e(n,{width:120,title:"数学",prop:"math"}),e(n,{width:120,title:"英语",prop:"english"}),e(n,{width:120,title:"物理",prop:"physics"}),e(n,{width:120,title:"化学",prop:"chemistry"}),e(n,{width:120,title:"生物",prop:"biology"}),e(n,{width:120,title:"总分",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])]),l("div",null,[e(m,{data:t.students,"empty-placeholder":"这是一个自定义提示",border:""},{default:o(()=>[e(n,{title:"姓名",prop:"name",fixed:"left"}),e(n,{width:120,title:"语文",prop:"chinese"}),e(n,{width:120,title:"数学",prop:"math"}),e(n,{width:120,title:"英语",prop:"english"}),e(n,{width:120,title:"总分",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])])],64)}const pe=w(me,[["render",he]]),ce=`<template>
  <div style="margin: 0 0 40px">
    <YuumiTable :data="students">
      <YuumiTableColumn title="姓名" prop="name" fixed="left" />
      <YuumiTableColumn :width="120" title="语文" prop="chinese" />
      <YuumiTableColumn :width="120" title="数学" prop="math" />
      <YuumiTableColumn :width="120" title="英语" prop="english" />
      <YuumiTableColumn :width="120" title="物理" prop="physics" />
      <YuumiTableColumn :width="120" title="化学" prop="chemistry" />
      <YuumiTableColumn :width="120" title="生物" prop="biology" />
      <YuumiTableColumn :width="120" title="总分" prop="summary" fixed="right" align="center" />
    </YuumiTable>
  </div>

  <div>
    <YuumiTable :data="students" empty-placeholder="这是一个自定义提示" border>
      <YuumiTableColumn title="姓名" prop="name" fixed="left" />
      <YuumiTableColumn :width="120" title="语文" prop="chinese" />
      <YuumiTableColumn :width="120" title="数学" prop="math" />
      <YuumiTableColumn :width="120" title="英语" prop="english" />
      <YuumiTableColumn :width="120" title="总分" prop="summary" fixed="right" align="center" />
    </YuumiTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      students: []
    }
  }
})
<\/script>

<style lang="scss" scoped></style>
`,de=b({data(){return{students:[{name:"张三",chinese:110,math:145,english:136,physics:108,chemistry:97,biology:72},{name:"李四",chinese:114,math:125,english:132,physics:101,chemistry:94,biology:76},{name:"王五",chinese:105,math:132,english:124,physics:90,chemistry:87,biology:78},{name:"小丽",chinese:96,math:115,english:106,physics:98,chemistry:91,biology:70},{name:"小红",chinese:112,math:135,english:113,physics:98,chemistry:87,biology:76},{name:"小明",chinese:105,math:125,english:124,physics:101,chemistry:77,biology:73},{name:"李明",chinese:102,math:135,english:118,physics:99,chemistry:67,biology:72},{name:"韩梅",chinese:100,math:105,english:109,physics:100,chemistry:93,biology:78}],onlyShowMain:!1,showSummary:!0}},computed:{studentScore(){return this.students.map(t=>{const i=Object.entries(t).filter(s=>typeof s[1]=="number");return t.summary=i.reduce((s,[u,a])=>this.onlyShowMain?/chinese|math|english/.test(u)?s+a:s:/summary/.test(u)?s:s+a,0),t})}},methods:{getAverages({data:t,columns:i}){const s=Array(i.length).fill(0);return t.forEach(u=>{i.forEach((a,r)=>{if(r==0&&(s[r]="平均分"),typeof s[r]!="number")return;const n=Number(u[a.props.prop]);if(n.toString()==="NaN"){s[r]="";return}s[r]+=n})}),s.map(u=>typeof u!="number"?u:(u/t.length).toFixed(2))}}}),ye={style:{margin:"0 10px 10px 0",display:"flex","align-items":"center"}},ge=l("span",null,"只显示主科",-1),be=l("span",{style:{"margin-left":"20px"}},"显示总计",-1),fe={style:{height:"530px"}};function _e(t,i,s,u,a,r){const n=h("YuumiSwitch"),m=h("YuumiTableColumn"),c=h("YuumiIcon"),y=h("YuumiTable");return p(),_(Y,null,[l("div",ye,[ge,e(n,{modelValue:t.onlyShowMain,"onUpdate:modelValue":i[0]||(i[0]=g=>t.onlyShowMain=g),size:"sm"},null,8,["modelValue"]),be,e(n,{modelValue:t.showSummary,"onUpdate:modelValue":i[1]||(i[1]=g=>t.showSummary=g),size:"sm"},null,8,["modelValue"])]),l("div",fe,[e(y,{data:t.studentScore,border:"",summary:"","summary-method":t.getAverages},{default:o(()=>[e(m,{title:"姓名",prop:"name",fixed:"left"}),e(m,{width:150,title:"语文",prop:"chinese"}),e(m,{width:150,title:"数学",prop:"math"}),e(m,{width:150,title:"英语",prop:"english"}),t.onlyShowMain?x("",!0):(p(),_(Y,{key:0},[e(m,{width:150,title:"物理",prop:"physics"}),e(m,{width:150,title:"化学",prop:"chemistry"}),e(m,{width:150,title:"生物",prop:"biology"})],64)),t.showSummary?(p(),C(m,{key:1,width:150,title:"总分",prop:"summary",fixed:"right",align:"center"},{header:o(({props:g})=>[l("span",null,T(g.title)+"(班级)",1)]),default:o(({row:g,rowIndex:v,props:D,content:B})=>[l("div",null,"index: "+T(v),1),l("div",null,"value: "+T(g[D.prop]),1),B>640?(p(),C(c,{key:0,icon:"flat-praise",style:{color:"green"}})):x("",!0)]),footer:o(({props:g,value:v})=>[d(" 班级"+T(g.title)+" ",1),l("span",null,T(v),1)]),_:1})):x("",!0)]),_:1},8,["data","summary-method"])])],64)}const we=w(de,[["render",_e]]),Ye=`<template>
  <div style="margin: 0 10px 10px 0; display: flex; align-items: center">
    <span>只显示主科</span>
    <YuumiSwitch v-model="onlyShowMain" size="sm" />

    <span style="margin-left: 20px">显示总计</span>
    <YuumiSwitch v-model="showSummary" size="sm" />
  </div>
  <div style="height: 530px">
    <YuumiTable :data="studentScore" border summary :summary-method="getAverages">
      <YuumiTableColumn title="姓名" prop="name" fixed="left" />
      <YuumiTableColumn :width="150" title="语文" prop="chinese" />
      <YuumiTableColumn :width="150" title="数学" prop="math" />
      <YuumiTableColumn :width="150" title="英语" prop="english" />

      <template v-if="!onlyShowMain">
        <YuumiTableColumn :width="150" title="物理" prop="physics" />
        <YuumiTableColumn :width="150" title="化学" prop="chemistry" />
        <YuumiTableColumn :width="150" title="生物" prop="biology" />
      </template>

      <template v-if="showSummary">
        <YuumiTableColumn :width="150" title="总分" prop="summary" fixed="right" align="center">
          <template #header="{ props }">
            <span>{{ props.title }}(班级)</span>
          </template>

          <template #default="{ row, rowIndex, props, content }">
            <div>index: {{ rowIndex }}</div>
            <div>value: {{ row[props.prop] }}</div>
            <YuumiIcon v-if="content > 640" icon="flat-praise" style="color: green" />
          </template>

          <template #footer="{ props, value }">
            班级{{ props.title }} <span>{{ value }}</span>
          </template>
        </YuumiTableColumn>
      </template>
    </YuumiTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      students: [
        {
          name: "张三",
          chinese: 110,
          math: 145,
          english: 136,
          physics: 108,
          chemistry: 97,
          biology: 72
        },
        {
          name: "李四",
          chinese: 114,
          math: 125,
          english: 132,
          physics: 101,
          chemistry: 94,
          biology: 76
        },
        {
          name: "王五",
          chinese: 105,
          math: 132,
          english: 124,
          physics: 90,
          chemistry: 87,
          biology: 78
        },
        {
          name: "小丽",
          chinese: 96,
          math: 115,
          english: 106,
          physics: 98,
          chemistry: 91,
          biology: 70
        },
        {
          name: "小红",
          chinese: 112,
          math: 135,
          english: 113,
          physics: 98,
          chemistry: 87,
          biology: 76
        },
        {
          name: "小明",
          chinese: 105,
          math: 125,
          english: 124,
          physics: 101,
          chemistry: 77,
          biology: 73
        },
        {
          name: "李明",
          chinese: 102,
          math: 135,
          english: 118,
          physics: 99,
          chemistry: 67,
          biology: 72
        },
        {
          name: "韩梅",
          chinese: 100,
          math: 105,
          english: 109,
          physics: 100,
          chemistry: 93,
          biology: 78
        }
      ],
      onlyShowMain: false,
      showSummary: true
    }
  },
  computed: {
    studentScore(): any[] {
      return this.students.map((item: { [key: string]: string | number }) => {
        const projects = Object.entries(item).filter(entry => typeof entry[1] === "number") as [
          string,
          number
        ][]
        item.summary = projects.reduce((acc, [key, value]) => {
          if (this.onlyShowMain) {
            return /chinese|math|english/.test(key) ? acc + value : acc
          } else {
            return /summary/.test(key) ? acc : acc + value
          }
        }, 0)

        return item
      })
    }
  },
  methods: {
    getAverages({ data, columns }: any) {
      const sum: (number | string)[] = Array(columns.length).fill(0)

      data.forEach((row: any) => {
        columns.forEach((column: any, index: number) => {
          if (index == 0) sum[index] = "平均分"

          if (typeof sum[index] !== "number") return

          const itemValue = Number(row[column.props.prop])

          if (itemValue.toString() === "NaN") {
            sum[index] = ""
            return
          }

          (sum[index] as number) += itemValue
        })
      })

      return sum.map(item => {
        if (typeof item !== "number") return item
        return (item / data.length).toFixed(2)
      })
    }
  }
})
<\/script>

<style lang="scss" scoped></style>
`,Ce={class:"markdown-body"},Te=l("h3",null,"基本用法",-1),ve=l("h3",null,"斑马线",-1),xe=l("h3",null,"紧凑程度",-1),De=l("h3",null,"自定义样式",-1),Be=l("p",null,[d("通过 "),l("code",{class:""},"rowClassName"),d(" 和 "),l("code",{class:""},"cellClassName"),d(" 实现自定义样式。")],-1),$e=l("h3",null,"浮动头 和 浮动列",-1),Se=l("h3",null,"总结栏",-1),Ee=l("p",null,[d("通过 "),l("code",{class:""},"summary"),d(" 和 "),l("code",{class:""},"summary-method"),d(" 实现总结栏。")],-1),Ne=l("h3",null,"多选",-1),Ae=l("h3",null,"空表格",-1),Fe=l("h3",null,"使用插槽实现更多",-1),Ve={},Re="",ze=b({__name:"index",setup(t,{expose:i}){return i({frontmatter:{},excerpt:void 0}),(s,u)=>{const a=h("example-preview");return p(),_("div",Ce,[Te,e(a,{code:f(A)},{default:o(()=>[e(N)]),_:1},8,["code"]),ve,e(a,{code:f(R)},{default:o(()=>[e(V)]),_:1},8,["code"]),xe,e(a,{code:f(O)},{default:o(()=>[e(M)]),_:1},8,["code"]),De,Be,e(a,{code:f(J)},{default:o(()=>[e(U)]),_:1},8,["code"]),$e,e(a,{code:f(W)},{default:o(()=>[e(Q)]),_:1},8,["code"]),Se,Ee,e(a,{code:f(ie)},{default:o(()=>[e(te)]),_:1},8,["code"]),Ne,e(a,{code:f(ae)},{default:o(()=>[e(ue)]),_:1},8,["code"]),Ae,e(a,{code:f(ce)},{default:o(()=>[e(pe)]),_:1},8,["code"]),Fe,e(a,{code:f(Ye)},{default:o(()=>[e(we)]),_:1},8,["code"])])}}});export{ze as default,Re as excerpt,Ve as frontmatter};
