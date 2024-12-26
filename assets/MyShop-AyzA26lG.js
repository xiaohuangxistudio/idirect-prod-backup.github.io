import{_ as x,x as b,m as C,c as r,a as e,b as a,w as _,F as L,e as S,g as w,r as n,o as i,f as c,t as m}from"./index-Cm55Gr8Q.js";const B={name:"MyShop",data(){return{shops:[]}},mounted(){this.fetchShops()},methods:{goBack(){this.$router.push("/merchant/setting")},async fetchShops(){try{this.showLoading=b({message:"疯狂加载中...",forbidClick:!0,loadingType:"spinner",duration:5e3});const o=await C.get("/api/merchant/getMyShopsV1");if(o.data.code===200){const{shopInfo:s,staticImageCdn:l}=o.data.data;console.log(s),console.log(l),s.forEach(d=>{d.fullLogoUrl=l+d.logo}),this.shops=s}else this.shops=[]}catch(o){console.error("Fetch shops error:",o)}finally{this.showLoading&&this.showLoading.close()}},navigateToAddShop(){this.$router.push("/merchant/add-shop")},editShop(o){console.log("Edit shop:",o),this.$router.push({path:"/merchant/edit-shop",query:{id:o.id}})}}},z={class:"page"},T={class:"tab-content"},N={key:0,class:"shop-list"},V={class:"shop-info"},E={class:"shop-name"},F={class:"shop-address"},I={class:"shop-phone"};function M(o,s,l,d,g,p){const v=n("van-nav-bar"),u=n("van-button"),f=n("van-loading"),y=n("van-image"),h=n("van-icon"),k=n("van-empty");return i(),r("div",z,[e(v,{title:"我的商店","left-text":"返回","left-arrow":"",onClickLeft:p.goBack},null,8,["onClickLeft"]),a("div",T,[e(u,{type:"primary",block:"",icon:"plus",onClick:p.navigateToAddShop},{default:_(()=>s[0]||(s[0]=[c(" 添加商店 ")])),_:1},8,["onClick"]),g.shops.length?(i(),r("div",N,[(i(!0),r(L,null,S(g.shops,t=>(i(),r("div",{key:t.id,class:"shop-item"},[e(y,{class:"shop-logo",src:t.fullLogoUrl,radius:"8px",alt:"店铺Logo"},{loading:_(()=>[e(f,{type:"spinner",size:"20"})]),_:2},1032,["src"]),a("div",V,[a("div",E,[e(h,{name:"shop-o",size:"18px"}),c(" "+m(t.name),1)]),a("div",F,[e(h,{name:"location-o",size:"16px"}),c(" "+m(t.houseNumber+" "+t.address),1)]),a("div",I,[e(h,{name:"phone-o",size:"16px"}),c(" "+m(t.phone),1)])]),e(u,{size:"small",type:"primary",plain:"",onClick:$=>p.editShop(t)},{default:_(()=>s[1]||(s[1]=[c(" 编辑 ")])),_:2},1032,["onClick"])]))),128))])):(i(),w(k,{key:1,description:"暂无商店信息"}))])])}const U=x(B,[["render",M],["__scopeId","data-v-fb3a4202"]]);export{U as default};
