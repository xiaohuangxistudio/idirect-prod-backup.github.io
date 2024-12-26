import{_ as B,s as R,c as p,b as a,a as n,w as s,r as i,o as d,F as g,e as b,f as l,t as m,g as y}from"./index-Cm55Gr8Q.js";const N={name:"DriverHomePage",data(){return{onlineButtonChecked:!1,activeName:"a",isRefreshing:!1,acceptData:[{id:1,name:"订单 #1",shopAddress:"Test Road 测试路",customerAddress:"Customer Road 测试路",shopTimestamp:"餐厅名称",customerTimestamp:"客户名称",kmDescription:"3km"},{id:1,name:"订单 #1",shopAddress:"Test Road 测试路",customerAddress:"Customer Road 测试路",shopTimestamp:"餐厅名称",customerTimestamp:"客户名称",kmDescription:"10km"}],pickupData:[{id:1,name:"订单 #1",address:"地址 1",time:"30mins"}],deliveryData:[{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"},{id:1,name:"订单 #A",address:"地址 A",time:"25mins"}]}},computed:{hasAcceptData(){return this.acceptData.length>0},hasPickupData(){return this.pickupData.length>0},hasDeliveryData(){return this.deliveryData.length>0}},methods:{onSwitchChange(u){console.log("开关状态:",u),R(`当前状态: ${u?"上线":"下线"}`)},onRefresh(){this.isRefreshing=!0,setTimeout(()=>{this.isRefreshing=!1,R("刷新完成")},1e3)}}},U={class:"home"},z={class:"header"},P={class:"switch-container"},S={class:"scrollable-content"},F={class:"tab-content"},H={class:"tags-container"},E={class:"scrollable-content"},I={class:"tab-content"},L={class:"scrollable-content"},j={class:"tab-content"},q={class:"footer"};function G(u,t,J,K,o,r){const D=i("van-switch"),V=i("van-notice-bar"),A=i("el-timeline-item"),x=i("el-timeline"),c=i("van-tag"),w=i("van-button"),_=i("el-card"),f=i("el-empty"),h=i("van-pull-refresh"),v=i("van-tab"),C=i("van-tabs"),k=i("van-tabbar-item"),T=i("van-tabbar");return d(),p("div",U,[a("div",z,[a("div",P,[t[6]||(t[6]=a("span",{class:"switch-label"},"下线",-1)),n(D,{modelValue:o.onlineButtonChecked,"onUpdate:modelValue":t[0]||(t[0]=e=>o.onlineButtonChecked=e),onChange:r.onSwitchChange},null,8,["modelValue","onChange"]),t[7]||(t[7]=a("span",{class:"switch-label"},"上线",-1))]),n(V,{"left-icon":"volume-o",text:"雨天倍率x1.2开启中 雨天倍率x1.2开启中 雨天倍率x1.2开启中 雨天倍率x1.2开启中 "}),n(C,{active:o.activeName,"onUpdate:active":t[4]||(t[4]=e=>o.activeName=e),class:"tab-container",swipeable:""},{default:s(()=>[n(v,{title:"待接单",name:"a"},{default:s(()=>[a("div",S,[n(h,{modelValue:o.isRefreshing,"onUpdate:modelValue":t[1]||(t[1]=e=>o.isRefreshing=e),onRefresh:r.onRefresh},{default:s(()=>[a("div",F,[r.hasAcceptData?(d(!0),p(g,{key:0},b(o.acceptData,e=>(d(),p("div",{key:e.id},[n(_,{style:{"margin-bottom":"10px"}},{header:s(()=>[l(m(e.name),1)]),default:s(()=>[n(x,{style:{"max-width":"600px","margin-top":"10px"}},{default:s(()=>[n(A,{timestamp:e.shopTimestamp},{default:s(()=>[a("strong",null,m(e.shopAddress),1)]),_:2},1032,["timestamp"]),n(A,{timestamp:e.customerTimestamp},{default:s(()=>[a("strong",null,m(e.customerAddress),1)]),_:2},1032,["timestamp"])]),_:2},1024),a("div",H,[n(c,{type:"warning",size:"medium",plain:""},{default:s(()=>[l(m(e.kmDescription),1)]),_:2},1024),n(c,{type:"primary",size:"medium",plain:""},{default:s(()=>t[8]||(t[8]=[l("高优先级")])),_:1}),n(c,{type:"success",size:"medium",plain:""},{default:s(()=>t[9]||(t[9]=[l("新订单")])),_:1}),n(c,{type:"danger",size:"medium",plain:""},{default:s(()=>t[10]||(t[10]=[l("已超时")])),_:1})]),n(w,{type:"primary",size:"large",round:"",block:""},{default:s(()=>t[11]||(t[11]=[l("接单")])),_:1})]),_:2},1024)]))),128)):(d(),y(f,{key:1,description:"暂无待接单订单"}))])]),_:1},8,["modelValue","onRefresh"])])]),_:1}),n(v,{title:"待领取",name:"b"},{default:s(()=>[a("div",E,[n(h,{modelValue:o.isRefreshing,"onUpdate:modelValue":t[2]||(t[2]=e=>o.isRefreshing=e),onRefresh:r.onRefresh},{default:s(()=>[a("div",I,[r.hasPickupData?(d(!0),p(g,{key:0},b(o.pickupData,e=>(d(),p("div",{key:e.id},[n(_,{style:{"margin-bottom":"10px"}},{header:s(()=>[l(m(e.name),1)]),default:s(()=>[a("p",null,"店铺位置: "+m(e.address),1),a("p",null,"订单号: "+m(e.name),1)]),_:2},1024)]))),128)):(d(),y(f,{key:1,description:"暂无待领取订单"}))])]),_:1},8,["modelValue","onRefresh"])])]),_:1}),n(v,{title:"待配送",name:"c"},{default:s(()=>[a("div",L,[n(h,{modelValue:o.isRefreshing,"onUpdate:modelValue":t[3]||(t[3]=e=>o.isRefreshing=e),onRefresh:r.onRefresh},{default:s(()=>[a("div",j,[r.hasDeliveryData?(d(!0),p(g,{key:0},b(o.deliveryData,e=>(d(),p("div",{key:e.id},[n(_,{style:{"margin-bottom":"10px"}},{header:s(()=>[l(m(e.name),1)]),default:s(()=>[a("p",null,"店铺位置: "+m(e.address),1),a("p",null,"订单号: "+m(e.name),1)]),_:2},1024)]))),128)):(d(),y(f,{key:1,description:"暂无待配送订单"}))])]),_:1},8,["modelValue","onRefresh"])])]),_:1})]),_:1},8,["active"])]),a("div",q,[n(T,{modelValue:u.active,"onUpdate:modelValue":t[5]||(t[5]=e=>u.active=e)},{default:s(()=>[n(k,{icon:"home-o"},{default:s(()=>t[12]||(t[12]=[l("跑腿订单")])),_:1}),n(k,{icon:"friends-o"},{default:s(()=>t[13]||(t[13]=[l("我的")])),_:1})]),_:1},8,["modelValue"])])])}const O=B(N,[["render",G],["__scopeId","data-v-8c3f966e"]]);export{O as default};