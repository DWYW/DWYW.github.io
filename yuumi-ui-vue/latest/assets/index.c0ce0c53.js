import{f as y,_ as m,r as c,o as j,e as q,w as i,d as n,c as Y,j as u,F as $,b as l,l as x,t as _,g as v,h as F,i as S,n as f,k as w}from"./index.adb58741.js";const I=y({data(){return{students:[{name:"Dwayne Johnson",chinese:10,math:80,english:90},{name:"\u674E\u56DB",chinese:86,math:70,english:92},{name:"\u738B\u4E94",chinese:96,math:90,english:80},{name:"\u5C0F\u4E3D",chinese:83,math:89,english:92},{name:"\u5C0F\u7EA2",chinese:79,math:99,english:100},{name:"\u5C0F\u660E",chinese:88,math:80,english:95}]}}});function A(a,t,p,e,o,h){const s=c("YuumiTableColumn"),r=c("YuumiTable");return j(),q(r,{data:a.students},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name"}),n(s,{width:150,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:150,title:"\u6570\u5B66",prop:"math"}),n(s,{width:150,title:"\u82F1\u8BED",prop:"english"})]),_:1},8,["data"])}var N=m(I,[["render",A]]);const R={components:{ImportDemo:N}};function H(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var V=m(R,[["render",H]]);const M=y({data(){return{students:[{name:"\u5F20\u4E09",chinese:10,math:80,english:90},{name:"\u674E\u56DB",chinese:86,math:70,english:92},{name:"\u738B\u4E94",chinese:96,math:90,english:80},{name:"\u5C0F\u4E3D",chinese:83,math:89,english:92},{name:"\u5C0F\u7EA2",chinese:79,math:99,english:100},{name:"\u5C0F\u660E",chinese:88,math:80,english:95}]}}});function z(a,t,p,e,o,h){const s=c("YuumiTableColumn"),r=c("YuumiTable");return j(),q(r,{data:a.students,stripe:""},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name"}),n(s,{width:150,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:150,title:"\u6570\u5B66",prop:"math"}),n(s,{width:150,title:"\u82F1\u8BED",prop:"english"})]),_:1},8,["data"])}var O=m(M,[["render",z]]);const G={components:{ImportDemo:O}};function J(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var U=m(G,[["render",J]]);const K=y({data(){return{size:"default",students:[{name:"\u5F20\u4E09",chinese:10,math:80,english:90},{name:"\u674E\u56DB",chinese:86,math:70,english:92},{name:"\u738B\u4E94",chinese:96,math:90,english:80},{name:"\u5C0F\u4E3D",chinese:83,math:89,english:92},{name:"\u5C0F\u7EA2",chinese:79,math:99,english:100},{name:"\u5C0F\u660E",chinese:88,math:80,english:95}]}}}),L=l("span",null,"size:",-1);function P(a,t,p,e,o,h){const s=c("YuumiRadio"),r=c("YuumiRadioGroup"),d=c("YuumiTableColumn"),g=c("YuumiTable");return j(),Y($,null,[L,n(r,{modelValue:a.size,"onUpdate:modelValue":t[0]||(t[0]=b=>a.size=b)},{default:i(()=>[n(s,{unique:"default",style:{margin:"0 10px 10px 0"}},{default:i(()=>[u(" default ")]),_:1}),n(s,{unique:"middle",style:{margin:"0 10px 10px 0"}},{default:i(()=>[u(" middle ")]),_:1}),n(s,{unique:"small",style:{margin:"0 10px 10px 0"}},{default:i(()=>[u(" small ")]),_:1})]),_:1},8,["modelValue"]),n(g,{data:a.students,stripe:"",size:a.size},{default:i(()=>[n(d,{title:"\u59D3\u540D",prop:"name"}),n(d,{width:150,title:"\u8BED\u6587",prop:"chinese"}),n(d,{width:150,title:"\u6570\u5B66",prop:"math"}),n(d,{width:150,title:"\u82F1\u8BED",prop:"english"})]),_:1},8,["data","size"])],64)}var Q=m(K,[["render",P]]);const W={components:{ImportDemo:Q}};function X(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var Z=m(W,[["render",X]]);const ss=y({data(){return{students:[{name:"\u5F20\u4E09",chinese:10,math:80,english:90},{name:"\u674E\u56DB",chinese:86,math:70,english:92},{name:"\u738B\u4E94",chinese:96,math:90,english:80},{name:"\u5C0F\u4E3D",chinese:83,math:89,english:92},{name:"\u5C0F\u7EA2",chinese:79,math:99,english:100},{name:"\u5C0F\u660E",chinese:88,math:80,english:95}]}},methods:{rowClassName({rowIndex:a}){switch(console.log(a),a%4){case 0:return"__success";case 1:return"__warn";case 2:return"__error";case 3:return"__info"}},cellClassName({colIndex:a,rowIndex:t}){switch((t+a)%4){case 0:return"__success";case 1:return"__warn";case 2:return"__error";case 3:return"__info"}}}});function as(a,t,p,e,o,h){const s=c("YuumiTableColumn"),r=c("YuumiTable");return j(),q(r,{data:a.students,"row-class-name":a.rowClassName,"cell-class-name":a.cellClassName},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name"}),n(s,{width:150,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:150,title:"\u6570\u5B66",prop:"math"}),n(s,{width:150,title:"\u82F1\u8BED",prop:"english"})]),_:1},8,["data","row-class-name","cell-class-name"])}var ns=m(ss,[["render",as],["__scopeId","data-v-2ac7e306"]]);const ls={components:{ImportDemo:ns}};function ts(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var ps=m(ls,[["render",ts]]);const es=y({data(){return{students:[{name:"\u5F20\u4E09",chinese:110,math:145,english:136,physics:108,chemistry:97,biology:72},{name:"\u674E\u56DB",chinese:114,math:125,english:132,physics:101,chemistry:94,biology:76},{name:"\u738B\u4E94",chinese:105,math:132,english:124,physics:90,chemistry:87,biology:78},{name:"\u5C0F\u4E3D",chinese:96,math:115,english:106,physics:98,chemistry:91,biology:70},{name:"\u5C0F\u7EA2",chinese:112,math:135,english:113,physics:98,chemistry:87,biology:76},{name:"\u5C0F\u660E",chinese:105,math:125,english:124,physics:101,chemistry:77,biology:73},{name:"\u674E\u660E",chinese:102,math:135,english:118,physics:99,chemistry:67,biology:72},{name:"\u97E9\u6885",chinese:100,math:105,english:109,physics:100,chemistry:93,biology:78}].map(a=>(a.summary=Object.values(a).filter(t=>typeof t=="number").reduce((t,p)=>t+p,0),a))}}}),cs={style:{height:"320px",margin:"0 0 40px"}},hs={style:{height:"320px"}};function rs(a,t,p,e,o,h){const s=c("YuumiTableColumn"),r=c("YuumiTable");return j(),Y($,null,[l("div",cs,[n(r,{data:a.students},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name",fixed:"left"}),n(s,{width:120,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:120,title:"\u6570\u5B66",prop:"math"}),n(s,{width:120,title:"\u82F1\u8BED",prop:"english"}),n(s,{width:120,title:"\u7269\u7406",prop:"physics"}),n(s,{width:120,title:"\u5316\u5B66",prop:"chemistry"}),n(s,{width:120,title:"\u751F\u7269",prop:"biology"}),n(s,{width:120,title:"\u603B\u5206",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])]),l("div",hs,[n(r,{data:a.students,border:""},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name",fixed:"left"}),n(s,{width:120,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:120,title:"\u6570\u5B66",prop:"math"}),n(s,{width:120,title:"\u82F1\u8BED",prop:"english"}),n(s,{width:120,title:"\u7269\u7406",prop:"physics"}),n(s,{width:120,title:"\u5316\u5B66",prop:"chemistry"}),n(s,{width:120,title:"\u751F\u7269",prop:"biology"}),n(s,{width:120,title:"\u603B\u5206",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])])],64)}var os=m(es,[["render",rs]]);const us={components:{ImportDemo:os}};function is(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var js=m(us,[["render",is]]);const ms=y({data(){return{students:[{name:"\u5F20\u4E09",chinese:110,math:145,english:136,physics:108,chemistry:97,biology:72},{name:"\u674E\u56DB",chinese:114,math:125,english:132,physics:101,chemistry:94,biology:76},{name:"\u738B\u4E94",chinese:105,math:132,english:124,physics:90,chemistry:87,biology:78},{name:"\u5C0F\u4E3D",chinese:96,math:115,english:106,physics:98,chemistry:91,biology:70},{name:"\u5C0F\u7EA2",chinese:112,math:135,english:113,physics:98,chemistry:87,biology:76},{name:"\u5C0F\u660E",chinese:105,math:125,english:124,physics:101,chemistry:77,biology:73},{name:"\u674E\u660E",chinese:102,math:135,english:118,physics:99,chemistry:67,biology:72},{name:"\u97E9\u6885",chinese:100,math:105,english:109,physics:100,chemistry:93,biology:78}].map(a=>(a.summary=Object.values(a).filter(t=>typeof t=="number").reduce((t,p)=>t+p,0),a))}},methods:{getAverages({data:a,columns:t}){const p=Array(t.length).fill(0);return a.forEach(e=>{t.forEach((o,h)=>{if(h==0&&(p[h]="\u5E73\u5747\u5206"),typeof p[h]!="number")return;const s=Number(e[o.props.prop]);if(s.toString()==="NaN"){p[h]="N/A";return}p[h]+=s})}),p.map(e=>typeof e!="number"?e:(e/a.length).toFixed(2))}}}),gs={style:{height:"320px",margin:"0 0 40px"}},ds={style:{height:"320px"}};function qs(a,t,p,e,o,h){const s=c("YuumiTableColumn"),r=c("YuumiTable");return j(),Y($,null,[l("div",gs,[n(r,{data:a.students,summary:""},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name",fixed:"left"}),n(s,{width:150,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:150,title:"\u6570\u5B66",prop:"math"}),n(s,{width:150,title:"\u82F1\u8BED",prop:"english"}),n(s,{width:150,title:"\u7269\u7406",prop:"physics"}),n(s,{width:150,title:"\u5316\u5B66",prop:"chemistry"}),n(s,{width:150,title:"\u751F\u7269",prop:"biology"}),n(s,{width:150,title:"\u603B\u5206",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])]),l("div",ds,[n(r,{data:a.students,border:"",summary:"","summary-method":a.getAverages},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name",fixed:"left"}),n(s,{width:150,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:150,title:"\u6570\u5B66",prop:"math"}),n(s,{width:150,title:"\u82F1\u8BED",prop:"english"}),n(s,{width:150,title:"\u7269\u7406",prop:"physics"}),n(s,{width:150,title:"\u5316\u5B66",prop:"chemistry"}),n(s,{width:150,title:"\u751F\u7269",prop:"biology"}),n(s,{width:150,title:"\u603B\u5206",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data","summary-method"])])],64)}var bs=m(ms,[["render",qs]]);const _s={components:{ImportDemo:bs}};function ys(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var vs=m(_s,[["render",ys]]);const fs=y({data(){return{students:[{name:"\u5F20\u4E09",chinese:110,math:145,english:136,physics:108,chemistry:97,biology:72},{name:"\u674E\u56DB",chinese:114,math:125,english:132,physics:101,chemistry:94,biology:76},{name:"\u738B\u4E94",chinese:105,math:132,english:124,physics:90,chemistry:87,biology:78},{name:"\u5C0F\u4E3D",chinese:96,math:115,english:106,physics:98,chemistry:91,biology:70},{name:"\u5C0F\u7EA2",chinese:112,math:135,english:113,physics:98,chemistry:87,biology:76},{name:"\u5C0F\u660E",chinese:105,math:125,english:124,physics:101,chemistry:77,biology:73},{name:"\u674E\u660E",chinese:102,math:135,english:118,physics:99,chemistry:67,biology:72},{name:"\u97E9\u6885",chinese:100,math:105,english:109,physics:100,chemistry:93,biology:78}].map(a=>(a.summary=Object.values(a).filter(t=>typeof t=="number").reduce((t,p)=>t+p,0),a))}},methods:{getAverages({data:a,columns:t}){const p=Array(t.length).fill(0);return a.forEach(e=>{t.forEach((o,h)=>{if(h==0&&(p[h]="\u5E73\u5747\u5206"),typeof p[h]!="number")return;const s=Number(e[o.props.prop]);if(s.toString()==="NaN"){p[h]="N/A";return}p[h]+=s})}),p.map(e=>typeof e!="number"?e:(e/a.length).toFixed(2))},toggleRowsSelected(a){this.$refs.table.toggleRowsSelection(this.students.slice(1,3),a)},getSelections(){const a=this.$refs.table.selections;console.log(a)},logSelectionEventDetail(...a){console.log(a)}}}),ws={style:{height:"320px",margin:"0 0 10px"}};function Cs(a,t,p,e,o,h){const s=c("YuumiTableColumn"),r=c("YuumiTable"),d=c("YuumiButton");return j(),Y($,null,[l("div",ws,[n(r,{ref:"table",data:a.students,summary:"",onSelect:t[0]||(t[0]=g=>a.logSelectionEventDetail(g,"select")),onSelectAll:t[1]||(t[1]=g=>a.logSelectionEventDetail(g,"selectAll")),onSelectionChange:t[2]||(t[2]=g=>a.logSelectionEventDetail(g,"selectionChange"))},{default:i(()=>[n(s,{width:45,type:"selection",fixed:"left"}),n(s,{title:"\u59D3\u540D",prop:"name",fixed:"left"}),n(s,{width:150,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:150,title:"\u6570\u5B66",prop:"math"}),n(s,{width:150,title:"\u82F1\u8BED",prop:"english"}),n(s,{width:150,title:"\u7269\u7406",prop:"physics"}),n(s,{width:150,title:"\u5316\u5B66",prop:"chemistry"}),n(s,{width:150,title:"\u751F\u7269",prop:"biology"}),n(s,{width:150,title:"\u603B\u5206",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])]),l("div",null,[n(d,{style:{margin:"0 10px 10px 0"},onClick:t[3]||(t[3]=g=>a.toggleRowsSelected(!0))},{default:i(()=>[u(" \u8BBE\u7F6E\u7B2C\u4E8C\u548C\u7B2C\u4E09\u884C\u9009\u4E2D ")]),_:1}),n(d,{style:{margin:"0 10px 10px 0"},onClick:t[4]||(t[4]=g=>a.toggleRowsSelected(!1))},{default:i(()=>[u(" \u53D6\u6D88\u7B2C\u4E8C\u548C\u7B2C\u4E09\u884C\u9009\u4E2D ")]),_:1}),n(d,{style:{margin:"0 10px 10px 0"},onClick:a.getSelections},{default:i(()=>[u(" \u83B7\u53D6\u9009\u4E2D\u7684\u884C ")]),_:1},8,["onClick"])])],64)}var ks=m(fs,[["render",Cs]]);const Ys={components:{ImportDemo:ks}};function $s(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var Ts=m(Ys,[["render",$s]]);const Es=y({data(){return{students:[]}}}),Ds={style:{margin:"0 0 40px"}};function xs(a,t,p,e,o,h){const s=c("YuumiTableColumn"),r=c("YuumiTable");return j(),Y($,null,[l("div",Ds,[n(r,{data:a.students},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name",fixed:"left"}),n(s,{width:120,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:120,title:"\u6570\u5B66",prop:"math"}),n(s,{width:120,title:"\u82F1\u8BED",prop:"english"}),n(s,{width:120,title:"\u7269\u7406",prop:"physics"}),n(s,{width:120,title:"\u5316\u5B66",prop:"chemistry"}),n(s,{width:120,title:"\u751F\u7269",prop:"biology"}),n(s,{width:120,title:"\u603B\u5206",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])]),l("div",null,[n(r,{data:a.students,"empty-placeholder":"\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u63D0\u793A",border:""},{default:i(()=>[n(s,{title:"\u59D3\u540D",prop:"name",fixed:"left"}),n(s,{width:120,title:"\u8BED\u6587",prop:"chinese"}),n(s,{width:120,title:"\u6570\u5B66",prop:"math"}),n(s,{width:120,title:"\u82F1\u8BED",prop:"english"}),n(s,{width:120,title:"\u7269\u7406",prop:"physics"}),n(s,{width:120,title:"\u5316\u5B66",prop:"chemistry"}),n(s,{width:120,title:"\u751F\u7269",prop:"biology"}),n(s,{width:120,title:"\u603B\u5206",prop:"summary",fixed:"right",align:"center"})]),_:1},8,["data"])])],64)}var Bs=m(Es,[["render",xs]]);const Fs={components:{ImportDemo:Bs}};function Ss(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var Is=m(Fs,[["render",Ss]]);const As=y({data(){return{students:[{name:"\u5F20\u4E09",chinese:110,math:145,english:136,physics:108,chemistry:97,biology:72},{name:"\u674E\u56DB",chinese:114,math:125,english:132,physics:101,chemistry:94,biology:76},{name:"\u738B\u4E94",chinese:105,math:132,english:124,physics:90,chemistry:87,biology:78},{name:"\u5C0F\u4E3D",chinese:96,math:115,english:106,physics:98,chemistry:91,biology:70},{name:"\u5C0F\u7EA2",chinese:112,math:135,english:113,physics:98,chemistry:87,biology:76},{name:"\u5C0F\u660E",chinese:105,math:125,english:124,physics:101,chemistry:77,biology:73},{name:"\u674E\u660E",chinese:102,math:135,english:118,physics:99,chemistry:67,biology:72},{name:"\u97E9\u6885",chinese:100,math:105,english:109,physics:100,chemistry:93,biology:78}],onlyShowMain:!1,showSummary:!0}},computed:{studentScore(){return this.students.map(a=>{const t=Object.entries(a).filter(p=>typeof p[1]=="number");return a.summary=t.reduce((p,[e,o])=>this.onlyShowMain?/chinese|math|english/.test(e)?p+o:p:/summary/.test(e)?p:p+o,0),a})}},methods:{toggleMain(){this.onlyShowMain=!this.onlyShowMain},toggleSummary(){this.showSummary=!this.showSummary},getAverages({data:a,columns:t}){const p=Array(t.length).fill(0);return a.forEach(e=>{t.forEach((o,h)=>{if(h==0&&(p[h]="\u5E73\u5747\u5206"),typeof p[h]!="number")return;const s=Number(e[o.props.prop]);if(s.toString()==="NaN"){p[h]="";return}p[h]+=s})}),p.map(e=>typeof e!="number"?e:(e/a.length).toFixed(2))}}}),Ns={style:{height:"530px"}};function Rs(a,t,p,e,o,h){const s=c("YuumiButton"),r=c("YuumiTableColumn"),d=c("YuumiIcon"),g=c("YuumiTable");return j(),Y($,null,[l("div",null,[n(s,{style:{margin:"0 10px 10px 0"},onClick:a.toggleMain},{default:i(()=>[u(" \u662F\u5426\u53EA\u663E\u793A\u4E3B\u79D1 ")]),_:1},8,["onClick"]),n(s,{style:{margin:"0 10px 10px 0"},onClick:a.toggleSummary},{default:i(()=>[u(" \u662F\u5426\u663E\u793A\u603B\u8BA1 ")]),_:1},8,["onClick"])]),l("div",Ns,[n(g,{data:a.studentScore,border:"",summary:"","summary-method":a.getAverages},{default:i(()=>[n(r,{title:"\u59D3\u540D",prop:"name",fixed:"left"}),n(r,{width:150,title:"\u8BED\u6587",prop:"chinese"}),n(r,{width:150,title:"\u6570\u5B66",prop:"math"}),n(r,{width:150,title:"\u82F1\u8BED",prop:"english"}),a.onlyShowMain?x("",!0):(j(),Y($,{key:0},[n(r,{width:150,title:"\u7269\u7406",prop:"physics"}),n(r,{width:150,title:"\u5316\u5B66",prop:"chemistry"}),n(r,{width:150,title:"\u751F\u7269",prop:"biology"})],64)),a.showSummary?(j(),q(r,{key:1,width:150,title:"\u603B\u5206",prop:"summary",fixed:"right",align:"center"},{header:i(({$props:b})=>[l("span",null,_(b.title)+"(\u73ED\u7EA7)",1)]),default:i(({$props:b,$attrs:C,$value:D})=>[u(_(a.students[C.rowIndex][b.prop])+" ",1),D>640?(j(),q(d,{key:0,icon:"flat-praise",style:{color:"green"}})):x("",!0)]),footer:i(({$value:b})=>[l("span",null,_(b),1),u("(\u73ED\u7EA7) ")]),_:1})):x("",!0)]),_:1},8,["data","summary-method"])])],64)}var Hs=m(As,[["render",Rs]]);const Vs={components:{ImportDemo:Hs}};function Ms(a,t,p,e,o,h){const s=c("ImportDemo");return j(),q(s)}var zs=m(Vs,[["render",Ms]]);const B=y({components:{vdpv_0:V,vdpv_1:U,vdpv_2:Z,vdpv_3:ps,vdpv_4:js,vdpv_5:vs,vdpv_6:Ts,vdpv_7:Is,vdpv_8:zs},setup(a){const t=v(),p=v(),e=v(),o=v(),h=v(),s=v(),r=v(),d=v(),g=v(),b=[t,p,e,o,h,s,r,d,g],C=F({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0});return{toggleCode:T=>{const E="vdpv_"+T;C[E+"Height"]===0?C[E+"Height"]=(b[T].value?b[T].value.offsetHeight:0)||0:C[E+"Height"]=0},...S(C),vdpv_0Ref:t,vdpv_1Ref:p,vdpv_2Ref:e,vdpv_3Ref:o,vdpv_4Ref:h,vdpv_5Ref:s,vdpv_6Ref:r,vdpv_7Ref:d,vdpv_8Ref:g}}});B.$vd={matter:{},toc:[{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u6591\u9A6C\u7EBF",anchor:"\u6591\u9A6C\u7EBF",level:3},{content:"\u7D27\u51D1\u7A0B\u5EA6",anchor:"\u7D27\u51D1\u7A0B\u5EA6",level:3},{content:"\u81EA\u5B9A\u4E49\u6837\u5F0F",anchor:"\u81EA\u5B9A\u4E49\u6837\u5F0F",level:3},{content:"\u6D6E\u52A8\u5934 \u548C \u6D6E\u52A8\u5217",anchor:"\u6D6E\u52A8\u5934-\u548C-\u6D6E\u52A8\u5217",level:3},{content:"\u603B\u7ED3\u680F",anchor:"\u603B\u7ED3\u680F",level:3},{content:"\u591A\u9009",anchor:"\u591A\u9009",level:3},{content:"\u7A7A\u8868\u683C",anchor:"\u7A7A\u8868\u683C",level:3},{content:"\u4F7F\u7528\u63D2\u69FD\u5B9E\u73B0\u66F4\u591A",anchor:"\u4F7F\u7528\u63D2\u69FD\u5B9E\u73B0\u66F4\u591A",level:3}]};const Os=B,Gs={class:"vuedoc"},Js=l("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-source-line":"1"},[l("a",{class:"markdownIt-Anchor",href:"#\u57FA\u672C\u7528\u6CD5"},"#"),u(" \u57FA\u672C\u7528\u6CD5")],-1),Us=l("pre",{style:{display:"none"}},null,-1),Ks={class:"vuedoc-demo"},Ls={class:"vuedoc-demo__inner"},Ps={class:"vuedoc-demo__preview"},Qs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Ws=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">students</span>: [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Dwayne Johnson&#39;</span>,  <span class="hljs-attr">chinese</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">80</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">90</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">86</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">70</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">92</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">96</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">90</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">80</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u4E3D&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">83</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">89</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">92</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u7EA2&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">79</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">99</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">100</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">88</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">80</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">95</span>}
      ]
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></code></pre></div>`,1),Xs=[Ws],Zs=l("h3",{id:"\u6591\u9A6C\u7EBF","data-source-line":"6"},[l("a",{class:"markdownIt-Anchor",href:"#\u6591\u9A6C\u7EBF"},"#"),u(" \u6591\u9A6C\u7EBF")],-1),sa=l("pre",{style:{display:"none"}},null,-1),aa={class:"vuedoc-demo"},na={class:"vuedoc-demo__inner"},la={class:"vuedoc-demo__preview"},ta={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},pa=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>
    <span class="hljs-attr">stripe</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">students</span>: [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>,  <span class="hljs-attr">chinese</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">80</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">90</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">86</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">70</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">92</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">96</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">90</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">80</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u4E3D&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">83</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">89</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">92</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u7EA2&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">79</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">99</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">100</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">88</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">80</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">95</span>}
      ]
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</span></code></pre></div>`,1),ea=[pa],ca=l("h3",{id:"\u7D27\u51D1\u7A0B\u5EA6","data-source-line":"11"},[l("a",{class:"markdownIt-Anchor",href:"#\u7D27\u51D1\u7A0B\u5EA6"},"#"),u(" \u7D27\u51D1\u7A0B\u5EA6")],-1),ha=l("pre",{style:{display:"none"}},null,-1),ra={class:"vuedoc-demo"},oa={class:"vuedoc-demo__inner"},ua={class:"vuedoc-demo__preview"},ia={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ja=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>size:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRadioGroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRadio</span>
      <span class="hljs-attr">unique</span>=<span class="hljs-string">&quot;default&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    &gt;</span>
      default
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiRadio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRadio</span>
      <span class="hljs-attr">unique</span>=<span class="hljs-string">&quot;middle&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    &gt;</span>
      middle
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiRadio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiRadio</span>
      <span class="hljs-attr">unique</span>=<span class="hljs-string">&quot;small&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
    &gt;</span>
      small
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiRadio</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiRadioGroup</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>
    <span class="hljs-attr">stripe</span>
    <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;size&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">students</span>: [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>,  <span class="hljs-attr">chinese</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">80</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">90</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">86</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">70</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">92</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">96</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">90</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">80</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u4E3D&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">83</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">89</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">92</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u7EA2&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">79</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">99</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">100</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">88</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">80</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">95</span>}
      ]
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</span></code></pre></div>`,1),ma=[ja],ga=l("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F","data-source-line":"16"},[l("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u6837\u5F0F"},"#"),u(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),da=l("p",{"data-source-line":"18"},[u("\u901A\u8FC7 "),l("code",null,"rowClassName"),u(" \u548C "),l("code",null,"cellClassName"),u(" \u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),qa=l("pre",{style:{display:"none"}},null,-1),ba={class:"vuedoc-demo"},_a={class:"vuedoc-demo__inner"},ya={class:"vuedoc-demo__preview"},va={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},fa=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>
    <span class="hljs-attr">:row-class-name</span>=<span class="hljs-string">&quot;rowClassName&quot;</span>
    <span class="hljs-attr">:cell-class-name</span>=<span class="hljs-string">&quot;cellClassName&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">students</span>: [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>,  <span class="hljs-attr">chinese</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">80</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">90</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">86</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">70</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">92</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">96</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">90</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">80</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u4E3D&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">83</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">89</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">92</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u7EA2&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">79</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">99</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">100</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">88</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">80</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">95</span>}
      ]
    }
  },
  <span class="hljs-attr">methods</span>: {
    rowClassName ({ rowIndex }: <span class="hljs-built_in">any</span>) {
      <span class="hljs-built_in">console</span>.log(rowIndex)
      <span class="hljs-keyword">switch</span> (rowIndex % <span class="hljs-number">4</span>) {
        <span class="hljs-keyword">case</span> <span class="hljs-number">0</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;__success&#39;</span>
        <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;__warn&#39;</span>
        <span class="hljs-keyword">case</span> <span class="hljs-number">2</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;__error&#39;</span>
        <span class="hljs-keyword">case</span> <span class="hljs-number">3</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;__info&#39;</span>
      }
    },
    cellClassName ({ colIndex, rowIndex}: <span class="hljs-built_in">any</span>) {
      <span class="hljs-keyword">switch</span> ((rowIndex + colIndex) % <span class="hljs-number">4</span>) {
        <span class="hljs-keyword">case</span> <span class="hljs-number">0</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;__success&#39;</span>
        <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;__warn&#39;</span>
        <span class="hljs-keyword">case</span> <span class="hljs-number">2</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;__error&#39;</span>
        <span class="hljs-keyword">case</span> <span class="hljs-number">3</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;__info&#39;</span>
      }
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
<span class="hljs-selector-class">.yuumi-table</span> :deep() table {
  tr.__success td {
    background-color: rgba(<span class="hljs-number">#00b450</span>, <span class="hljs-number">0.15</span>);
  }

  <span class="hljs-selector-tag">tr</span><span class="hljs-selector-class">.__warn</span> <span class="hljs-selector-tag">td</span> {
    <span class="hljs-attribute">background-color</span>: rgba(<span class="hljs-number">#ffc107</span>, <span class="hljs-number">0.15</span>);
  }

  <span class="hljs-selector-tag">tr</span><span class="hljs-selector-class">.__error</span> <span class="hljs-selector-tag">td</span> {
    <span class="hljs-attribute">background-color</span>: rgba(<span class="hljs-number">#dc3545</span>, <span class="hljs-number">0.15</span>);
  }

  <span class="hljs-selector-tag">tr</span><span class="hljs-selector-class">.__info</span> <span class="hljs-selector-tag">td</span> {
    <span class="hljs-attribute">background-color</span>: rgba(<span class="hljs-number">#0d6efd</span>, <span class="hljs-number">0.15</span>);
  }

  <span class="hljs-selector-tag">td</span><span class="hljs-selector-class">.__success</span> {
    <span class="hljs-attribute">color</span>: rgba(<span class="hljs-number">#00b450</span>, <span class="hljs-number">1</span>);
  }

  <span class="hljs-selector-tag">td</span><span class="hljs-selector-class">.__warn</span> {
    <span class="hljs-attribute">color</span>: rgba(<span class="hljs-number">#ffc107</span>, <span class="hljs-number">1</span>);
  }

  <span class="hljs-selector-tag">td</span><span class="hljs-selector-class">.__error</span> {
    <span class="hljs-attribute">color</span>: rgba(<span class="hljs-number">#dc3545</span>, <span class="hljs-number">1</span>);
  }

  <span class="hljs-selector-tag">td</span><span class="hljs-selector-class">.__info</span> {
    <span class="hljs-attribute">color</span>: rgba(<span class="hljs-number">#0d6efd</span>, <span class="hljs-number">1</span>);
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></code></pre></div>`,1),wa=[fa],Ca=l("h3",{id:"\u6D6E\u52A8\u5934-\u548C-\u6D6E\u52A8\u5217","data-source-line":"23"},[l("a",{class:"markdownIt-Anchor",href:"#\u6D6E\u52A8\u5934-\u548C-\u6D6E\u52A8\u5217"},"#"),u(" \u6D6E\u52A8\u5934 \u548C \u6D6E\u52A8\u5217")],-1),ka=l("pre",{style:{display:"none"}},null,-1),Ya={class:"vuedoc-demo"},$a={class:"vuedoc-demo__inner"},Ta={class:"vuedoc-demo__preview"},Ea={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Da=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 320px; margin: 0 0 40px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7269\u7406&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;physics&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5316\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chemistry&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u751F\u7269&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;biology&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u603B\u5206&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;summary&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;right&quot;</span>
        <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 320px; &quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>
      <span class="hljs-attr">border</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7269\u7406&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;physics&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5316\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chemistry&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u751F\u7269&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;biology&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u603B\u5206&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;summary&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;right&quot;</span>
        <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">students</span>: [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">110</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">145</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">136</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">108</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">97</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">72</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">114</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">125</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">132</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">94</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">76</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">132</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">124</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">90</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">87</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">78</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u4E3D&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">96</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">115</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">106</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">98</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">91</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">70</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u7EA2&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">112</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">135</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">113</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">98</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">87</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">76</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">125</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">124</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">77</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">73</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">135</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">118</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">99</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">67</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">72</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u97E9\u6885&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">105</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">109</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">93</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">78</span> },
      ].map(<span class="hljs-function">(<span class="hljs-params">item: {[key: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">string</span>|<span class="hljs-built_in">number</span>}</span>) =&gt;</span> {
        item.summary = (<span class="hljs-built_in">Object</span>.values(item).filter(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> <span class="hljs-keyword">typeof</span> value === <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">as</span> <span class="hljs-built_in">number</span>[]).reduce(<span class="hljs-function">(<span class="hljs-params">acc, value</span>) =&gt;</span> acc + value, <span class="hljs-number">0</span>)
        <span class="hljs-keyword">return</span> item
      })
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></code></pre></div>`,1),xa=[Da],Ba=l("h3",{id:"\u603B\u7ED3\u680F","data-source-line":"28"},[l("a",{class:"markdownIt-Anchor",href:"#\u603B\u7ED3\u680F"},"#"),u(" \u603B\u7ED3\u680F")],-1),Fa=l("p",{"data-source-line":"30"},[u("\u901A\u8FC7 "),l("code",null,"rowClassName"),u(" \u548C "),l("code",null,"cellClassName"),u(" \u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),Sa=l("pre",{style:{display:"none"}},null,-1),Ia={class:"vuedoc-demo"},Aa={class:"vuedoc-demo__inner"},Na={class:"vuedoc-demo__preview"},Ra={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ha=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 320px; margin: 0 0 40px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>
      <span class="hljs-attr">summary</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7269\u7406&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;physics&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5316\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chemistry&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u751F\u7269&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;biology&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u603B\u5206&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;summary&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;right&quot;</span>
        <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 320px; &quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>
      <span class="hljs-attr">border</span>
      <span class="hljs-attr">summary</span>
      <span class="hljs-attr">:summary-method</span>=<span class="hljs-string">&quot;getAverages&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7269\u7406&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;physics&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5316\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chemistry&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u751F\u7269&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;biology&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u603B\u5206&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;summary&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;right&quot;</span>
        <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">students</span>: [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">110</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">145</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">136</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">108</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">97</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">72</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">114</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">125</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">132</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">94</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">76</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">132</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">124</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">90</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">87</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">78</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u4E3D&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">96</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">115</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">106</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">98</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">91</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">70</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u7EA2&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">112</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">135</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">113</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">98</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">87</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">76</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">125</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">124</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">77</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">73</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">135</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">118</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">99</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">67</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">72</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u97E9\u6885&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">105</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">109</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">93</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">78</span> },
      ].map(<span class="hljs-function">(<span class="hljs-params">item: {[key: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">string</span>|<span class="hljs-built_in">number</span>}</span>) =&gt;</span> {
        item.summary = (<span class="hljs-built_in">Object</span>.values(item).filter(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> <span class="hljs-keyword">typeof</span> value === <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">as</span> <span class="hljs-built_in">number</span>[]).reduce(<span class="hljs-function">(<span class="hljs-params">acc, value</span>) =&gt;</span> acc + value, <span class="hljs-number">0</span>)
        <span class="hljs-keyword">return</span> item
      })
    }
  },
  <span class="hljs-attr">methods</span>: {
    getAverages ({ data, columns }: <span class="hljs-built_in">any</span>) {
      <span class="hljs-keyword">const</span> sum = <span class="hljs-built_in">Array</span>(columns.length).fill(<span class="hljs-number">0</span>)

      data.forEach(<span class="hljs-function">(<span class="hljs-params">row: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
        columns.forEach(<span class="hljs-function">(<span class="hljs-params">column: <span class="hljs-built_in">any</span>, index: <span class="hljs-built_in">number</span></span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (index == <span class="hljs-number">0</span>) sum[index] = <span class="hljs-string">&#39;\u5E73\u5747\u5206&#39;</span>

          <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> sum[index] !== <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">return</span>

          <span class="hljs-keyword">const</span> itemValue = <span class="hljs-built_in">Number</span>(row[column.props.prop])
          <span class="hljs-keyword">if</span> (itemValue.toString() === <span class="hljs-string">&#39;NaN&#39;</span>) {
            sum[index] = <span class="hljs-string">&#39;N/A&#39;</span>
            <span class="hljs-keyword">return</span>
          }

          sum[index] += itemValue
        })
      })

      <span class="hljs-keyword">return</span> sum.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> item !== <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">return</span> item
        <span class="hljs-keyword">return</span> (item / data.length).toFixed(<span class="hljs-number">2</span>)
      })
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></code></pre></div>`,1),Va=[Ha],Ma=l("h3",{id:"\u591A\u9009","data-source-line":"35"},[l("a",{class:"markdownIt-Anchor",href:"#\u591A\u9009"},"#"),u(" \u591A\u9009")],-1),za=l("pre",{style:{display:"none"}},null,-1),Oa={class:"vuedoc-demo"},Ga={class:"vuedoc-demo__inner"},Ja={class:"vuedoc-demo__preview"},Ua={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ka=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 320px; margin: 0 0 10px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;table&quot;</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>
      <span class="hljs-attr">summary</span>
      @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;logSelectionEventDetail($event, &#39;select&#39;)&quot;</span>
      @<span class="hljs-attr">selectAll</span>=<span class="hljs-string">&quot;logSelectionEventDetail($event, &#39;selectAll&#39;)&quot;</span>
      @<span class="hljs-attr">selectionChange</span>=<span class="hljs-string">&quot;logSelectionEventDetail($event, &#39;selectionChange&#39;)&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;45&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7269\u7406&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;physics&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5316\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chemistry&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u751F\u7269&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;biology&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u603B\u5206&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;summary&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;right&quot;</span>
        <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRowsSelected(true)&quot;</span>
    &gt;</span>
      \u8BBE\u7F6E\u7B2C\u4E8C\u548C\u7B2C\u4E09\u884C\u9009\u4E2D
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRowsSelected(false)&quot;</span>
    &gt;</span>
      \u53D6\u6D88\u7B2C\u4E8C\u548C\u7B2C\u4E09\u884C\u9009\u4E2D
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getSelections&quot;</span>
    &gt;</span>
      \u83B7\u53D6\u9009\u4E2D\u7684\u884C
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">students</span>: [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">110</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">145</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">136</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">108</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">97</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">72</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">114</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">125</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">132</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">94</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">76</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">132</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">124</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">90</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">87</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">78</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u4E3D&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">96</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">115</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">106</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">98</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">91</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">70</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u7EA2&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">112</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">135</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">113</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">98</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">87</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">76</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">125</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">124</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">77</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">73</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">135</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">118</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">99</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">67</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">72</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u97E9\u6885&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">105</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">109</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">93</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">78</span> },
      ].map(<span class="hljs-function">(<span class="hljs-params">item: {[key: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">string</span>|<span class="hljs-built_in">number</span>}</span>) =&gt;</span> {
        item.summary = (<span class="hljs-built_in">Object</span>.values(item).filter(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> <span class="hljs-keyword">typeof</span> value === <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">as</span> <span class="hljs-built_in">number</span>[]).reduce(<span class="hljs-function">(<span class="hljs-params">acc, value</span>) =&gt;</span> acc + value, <span class="hljs-number">0</span>)
        <span class="hljs-keyword">return</span> item
      })
    }
  },
  <span class="hljs-attr">methods</span>: {
    getAverages ({ data, columns }: <span class="hljs-built_in">any</span>) {
      <span class="hljs-keyword">const</span> sum = <span class="hljs-built_in">Array</span>(columns.length).fill(<span class="hljs-number">0</span>)

      data.forEach(<span class="hljs-function">(<span class="hljs-params">row: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
        columns.forEach(<span class="hljs-function">(<span class="hljs-params">column: <span class="hljs-built_in">any</span>, index: <span class="hljs-built_in">number</span></span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (index == <span class="hljs-number">0</span>) sum[index] = <span class="hljs-string">&#39;\u5E73\u5747\u5206&#39;</span>

          <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> sum[index] !== <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">return</span>

          <span class="hljs-keyword">const</span> itemValue = <span class="hljs-built_in">Number</span>(row[column.props.prop])
          <span class="hljs-keyword">if</span> (itemValue.toString() === <span class="hljs-string">&#39;NaN&#39;</span>) {
            sum[index] = <span class="hljs-string">&#39;N/A&#39;</span>
            <span class="hljs-keyword">return</span>
          }

          sum[index] += itemValue
        })
      })

      <span class="hljs-keyword">return</span> sum.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> item !== <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">return</span> item
        <span class="hljs-keyword">return</span> (item / data.length).toFixed(<span class="hljs-number">2</span>)
      })
    },

    toggleRowsSelected (value: <span class="hljs-built_in">boolean</span>) {
      (<span class="hljs-built_in">this</span>.$refs.table <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).toggleRowsSelection(<span class="hljs-built_in">this</span>.students.slice(<span class="hljs-number">1</span>,<span class="hljs-number">3</span>), value)
    },

    getSelections () {
      <span class="hljs-keyword">const</span> selections = (<span class="hljs-built_in">this</span>.$refs.table <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).selections
      <span class="hljs-built_in">console</span>.log(selections)
    },
    logSelectionEventDetail (...args: <span class="hljs-built_in">any</span>[]) {
      <span class="hljs-built_in">console</span>.log(args)
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></code></pre></div>`,1),La=[Ka],Pa=l("h3",{id:"\u7A7A\u8868\u683C","data-source-line":"40"},[l("a",{class:"markdownIt-Anchor",href:"#\u7A7A\u8868\u683C"},"#"),u(" \u7A7A\u8868\u683C")],-1),Qa=l("pre",{style:{display:"none"}},null,-1),Wa={class:"vuedoc-demo"},Xa={class:"vuedoc-demo__inner"},Za={class:"vuedoc-demo__preview"},sn={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},an=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 0 40px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7269\u7406&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;physics&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5316\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chemistry&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u751F\u7269&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;biology&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u603B\u5206&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;summary&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;right&quot;</span>
        <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;students&quot;</span>
      <span class="hljs-attr">empty-placeholder</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u63D0\u793A&quot;</span>
      <span class="hljs-attr">border</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7269\u7406&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;physics&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5316\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chemistry&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u751F\u7269&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;biology&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;120&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u603B\u5206&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;summary&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;right&quot;</span>
        <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">students</span>: []
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></code></pre></div>`,1),nn=[an],ln=l("h3",{id:"\u4F7F\u7528\u63D2\u69FD\u5B9E\u73B0\u66F4\u591A","data-source-line":"45"},[l("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528\u63D2\u69FD\u5B9E\u73B0\u66F4\u591A"},"#"),u(" \u4F7F\u7528\u63D2\u69FD\u5B9E\u73B0\u66F4\u591A")],-1),tn=l("pre",{style:{display:"none"}},null,-1),pn={class:"vuedoc-demo"},en={class:"vuedoc-demo__inner"},cn={class:"vuedoc-demo__preview"},hn={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},rn=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-light"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleMain&quot;</span>
    &gt;</span>
      \u662F\u5426\u53EA\u663E\u793A\u4E3B\u79D1
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiButton</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 10px 10px 0;&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleSummary&quot;</span>
    &gt;</span>
      \u662F\u5426\u663E\u793A\u603B\u8BA1
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 530px; &quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTable</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;studentScore&quot;</span>
      <span class="hljs-attr">border</span>
      <span class="hljs-attr">summary</span>
      <span class="hljs-attr">:summary-method</span>=<span class="hljs-string">&quot;getAverages&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span>
        <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BED\u6587&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chinese&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6570\u5B66&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;math&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
        <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u82F1\u8BED&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;english&quot;</span>
      /&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;!onlyShowMain&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
          <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
          <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7269\u7406&quot;</span>
          <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;physics&quot;</span>
        /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
          <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
          <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5316\u5B66&quot;</span>
          <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;chemistry&quot;</span>
        /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
          <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
          <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u751F\u7269&quot;</span>
          <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;biology&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;showSummary&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YuumiTableColumn</span>
          <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>
          <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u603B\u5206&quot;</span>
          <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;summary&quot;</span>
          <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;right&quot;</span>
          <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span>
        &gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">header</span>=<span class="hljs-string">&quot;{$props}&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ $props.title }}(\u73ED\u7EA7)<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;{$props, $attrs, $value}&quot;</span>&gt;</span>
            {{ students[$attrs.rowIndex][$props.prop] }}
            <span class="hljs-tag">&lt;<span class="hljs-name">YuumiIcon</span>
              <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;$value &gt; 640&quot;</span>
              <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;flat-praise&quot;</span>
              <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: green;&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>=<span class="hljs-string">&quot;{$value}&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ $value }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>(\u73ED\u7EA7)
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTableColumn</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">YuumiTable</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span></span><span class="typescript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">students</span>: [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">110</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">145</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">136</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">108</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">97</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">72</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">114</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">125</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">132</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">94</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">76</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">132</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">124</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">90</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">87</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">78</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u4E3D&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">96</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">115</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">106</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">98</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">91</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">70</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u7EA2&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">112</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">135</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">113</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">98</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">87</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">76</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5C0F\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">125</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">124</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">77</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">73</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u660E&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">135</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">118</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">99</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">67</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">72</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u97E9\u6885&#39;</span>, <span class="hljs-attr">chinese</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">math</span>: <span class="hljs-number">105</span>,  <span class="hljs-attr">english</span>: <span class="hljs-number">109</span>, <span class="hljs-attr">physics</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">chemistry</span>: <span class="hljs-number">93</span>, <span class="hljs-attr">biology</span>: <span class="hljs-number">78</span> }
      ],
      <span class="hljs-attr">onlyShowMain</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">showSummary</span>: <span class="hljs-literal">true</span>
    }
  },
  <span class="hljs-attr">computed</span>: {
    studentScore (): <span class="hljs-built_in">any</span>[] {
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.students.map(<span class="hljs-function">(<span class="hljs-params">item: {[key: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">string</span>|<span class="hljs-built_in">number</span>}</span>) =&gt;</span> {
        <span class="hljs-keyword">const</span> projects = <span class="hljs-built_in">Object</span>.entries(item).filter(<span class="hljs-function">(<span class="hljs-params">entry</span>) =&gt;</span> <span class="hljs-keyword">typeof</span> entry[<span class="hljs-number">1</span>] === <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">as</span> [<span class="hljs-built_in">string</span>, <span class="hljs-built_in">number</span>][]
        item.summary = projects.reduce(<span class="hljs-function">(<span class="hljs-params">acc, [key, value]</span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.onlyShowMain) {
            <span class="hljs-keyword">return</span> <span class="hljs-regexp">/chinese|math|english/</span>.test(key) ? acc + value : acc
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">return</span> <span class="hljs-regexp">/summary/</span>.test(key) ? acc : acc + value
          }
        }, <span class="hljs-number">0</span>)

        <span class="hljs-keyword">return</span> item
      })
    }
  },
  <span class="hljs-attr">methods</span>: {
    toggleMain () {
      <span class="hljs-built_in">this</span>.onlyShowMain = !<span class="hljs-built_in">this</span>.onlyShowMain
    },
    toggleSummary () {
      <span class="hljs-built_in">this</span>.showSummary = !<span class="hljs-built_in">this</span>.showSummary
    },
    getAverages ({ data, columns }: <span class="hljs-built_in">any</span>) {
      <span class="hljs-keyword">const</span> sum: (<span class="hljs-built_in">number</span>|<span class="hljs-built_in">string</span>)[] = <span class="hljs-built_in">Array</span>(columns.length).fill(<span class="hljs-number">0</span>)

      data.forEach(<span class="hljs-function">(<span class="hljs-params">row: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
        columns.forEach(<span class="hljs-function">(<span class="hljs-params">column: <span class="hljs-built_in">any</span>, index: <span class="hljs-built_in">number</span></span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (index == <span class="hljs-number">0</span>) sum[index] = <span class="hljs-string">&#39;\u5E73\u5747\u5206&#39;</span>

          <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> sum[index] !== <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">return</span>

          <span class="hljs-keyword">const</span> itemValue = <span class="hljs-built_in">Number</span>(row[column.props.prop])

          <span class="hljs-keyword">if</span> (itemValue.toString() === <span class="hljs-string">&#39;NaN&#39;</span>) {
            sum[index] = <span class="hljs-string">&#39;&#39;</span>
            <span class="hljs-keyword">return</span>
          }

          (sum[index] <span class="hljs-keyword">as</span> <span class="hljs-built_in">number</span>) += itemValue
        })
      })

      <span class="hljs-keyword">return</span> sum.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> item !== <span class="hljs-string">&#39;number&#39;</span>) <span class="hljs-keyword">return</span> item
        <span class="hljs-keyword">return</span> (item / data.length).toFixed(<span class="hljs-number">2</span>)
      })
    }
  }
})
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span></span><span class="scss">
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></code></pre></div>`,1),on=[rn];function un(a,t,p,e,o,h){const s=c("vdpv_0"),r=c("vdpv_1"),d=c("vdpv_2"),g=c("vdpv_3"),b=c("vdpv_4"),C=c("vdpv_5"),D=c("vdpv_6"),T=c("vdpv_7"),E=c("vdpv_8");return j(),Y("div",Gs,[Js,Us,l("div",Ks,[l("div",Ls,[l("div",Ps,[n(s)]),l("div",{style:f({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[l("div",Qs,Xs,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[0]||(t[0]=k=>a.toggleCode(0))},_(a.vdpv_0Height>0?"hidden":"show"),1)])]),Zs,sa,l("div",aa,[l("div",na,[l("div",la,[n(r)]),l("div",{style:f({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[l("div",ta,ea,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[1]||(t[1]=k=>a.toggleCode(1))},_(a.vdpv_1Height>0?"hidden":"show"),1)])]),ca,ha,l("div",ra,[l("div",oa,[l("div",ua,[n(d)]),l("div",{style:f({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[l("div",ia,ma,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[2]||(t[2]=k=>a.toggleCode(2))},_(a.vdpv_2Height>0?"hidden":"show"),1)])]),ga,da,qa,l("div",ba,[l("div",_a,[l("div",ya,[n(g)]),l("div",{style:f({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[l("div",va,wa,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[3]||(t[3]=k=>a.toggleCode(3))},_(a.vdpv_3Height>0?"hidden":"show"),1)])]),Ca,ka,l("div",Ya,[l("div",$a,[l("div",Ta,[n(b)]),l("div",{style:f({height:a.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[l("div",Ea,xa,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[4]||(t[4]=k=>a.toggleCode(4))},_(a.vdpv_4Height>0?"hidden":"show"),1)])]),Ba,Fa,Sa,l("div",Ia,[l("div",Aa,[l("div",Na,[n(C)]),l("div",{style:f({height:a.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[l("div",Ra,Va,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[5]||(t[5]=k=>a.toggleCode(5))},_(a.vdpv_5Height>0?"hidden":"show"),1)])]),Ma,za,l("div",Oa,[l("div",Ga,[l("div",Ja,[n(D)]),l("div",{style:f({height:a.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[l("div",Ua,La,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[6]||(t[6]=k=>a.toggleCode(6))},_(a.vdpv_6Height>0?"hidden":"show"),1)])]),Pa,Qa,l("div",Wa,[l("div",Xa,[l("div",Za,[n(T)]),l("div",{style:f({height:a.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[l("div",sn,nn,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[7]||(t[7]=k=>a.toggleCode(7))},_(a.vdpv_7Height>0?"hidden":"show"),1)])]),ln,tn,l("div",pn,[l("div",en,[l("div",cn,[n(E)]),l("div",{style:f({height:a.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[l("div",hn,on,512)],4),l("div",{class:"vuedoc-demo__footer",onClick:t[8]||(t[8]=k=>a.toggleCode(8))},_(a.vdpv_8Height>0?"hidden":"show"),1)])])])}var mn=m(Os,[["render",un]]);export{mn as default};
