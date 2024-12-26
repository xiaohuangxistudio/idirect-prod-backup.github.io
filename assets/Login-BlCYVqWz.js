import v from"./Captcha-CLkH83mj.js";import{_,h as m,x as C,m as w,u as b,p as k,c as T,a as t,b as a,w as d,r as c,o as M,f as L}from"./index-Cm55Gr8Q.js";const S={name:"MerchantLogin",components:{Captcha:v},data(){return{form:{username:"",password:"",captcha:""},errorMessage:{username:"",password:"",captcha:""},captchaService:null}},methods:{validateUsername(){this.errorMessage.username=this.form.username?"":"用户名不能为空"},validatePassword(){this.form.password?this.form.password.length<6?this.errorMessage.password="密码不能小于6位数":this.errorMessage.password="":this.errorMessage.password="密码不能为空"},validateCaptcha(){this.errorMessage.captcha=this.form.captcha?"":"请完成验证码"},async handleSubmit(){var l,e;if(!this.form.username||!this.form.password){m("请输入用户名和密码");return}try{C({message:"加载中...",forbidClick:!0});const n=await this.$refs.captchaComponent.validateCaptcha();if(!n){this.$refs.captchaComponent.refreshCaptcha(),console.error("验证码验证失败");return}this.form.captcha=n;const o=await w.post("/api/merchant/login",this.form);if(console.log("Login.vue response:",o.data),o.data.code===200)b().setToken(o.data.data.token),console.log("登录获取到JWT Token: "+o.data.data.token),k("登录成功"),this.$refs.captchaComponent.refreshCaptcha(),this.$router.push("/merchant/home");else{const s=o.data.message||"登录失败";m(s),this.$refs.captchaComponent.refreshCaptcha(),console.error("Login.vue 登录失败：",s)}}catch(n){const o=((e=(l=n.response)==null?void 0:l.data)==null?void 0:e.message)||"网络错误";m(o),this.$refs.captchaComponent.refreshCaptcha(),console.error("Login.vue 登录失败：",o)}},goToSmsLogin(){this.$router.push("/merchant/sms-login")},goToRegister(){this.$router.push("/merchant/register")}}},x={class:"page"},V={class:"form"},y={class:"button-container"};function B(l,e,n,o,s,r){const h=c("van-nav-bar"),p=c("van-field"),g=c("Captcha"),u=c("van-cell-group"),f=c("van-button");return M(),T("div",x,[t(h,{title:"登录","right-text":"注册",onClickRight:r.goToRegister},null,8,["onClickRight"]),e[4]||(e[4]=a("div",{class:"logo-container"},[a("img",{src:"https://delivery-static-file.idirect.au/asset/image/iDirect-home-logo-black_512x128.png",alt:"iDirect Logo",class:"logo-image"})],-1)),e[5]||(e[5]=a("div",{class:"logo-description-container"},[a("img",{src:"https://delivery-static-file.idirect.au/asset/image/iDirect-home-desc_520x60.png",alt:"iDirect Discription",class:"logo-description-image"})],-1)),a("div",V,[t(u,{inset:""},{default:d(()=>[t(p,{modelValue:s.form.username,"onUpdate:modelValue":e[0]||(e[0]=i=>s.form.username=i),label:"用户名",placeholder:"请输入用户名",clearable:"",required:"","error-message":s.errorMessage.username,onBlur:r.validateUsername},null,8,["modelValue","error-message","onBlur"]),t(p,{modelValue:s.form.password,"onUpdate:modelValue":e[1]||(e[1]=i=>s.form.password=i),type:"password",label:"密码",placeholder:"请输入密码",clearable:"",required:"","error-message":s.errorMessage.password,onBlur:r.validatePassword},null,8,["modelValue","error-message","onBlur"]),t(g,{ref:"captchaComponent"},null,512)]),_:1}),a("div",y,[t(f,{type:"primary",block:"",onClick:r.handleSubmit},{default:d(()=>e[3]||(e[3]=[L(" 登录 ")])),_:1},8,["onClick"])]),a("div",{class:"login-link",onClick:e[2]||(e[2]=(...i)=>r.goToSmsLogin&&r.goToSmsLogin(...i))}," 使用短信验证码登录 ")])])}const U=_(S,[["render",B],["__scopeId","data-v-e49004ec"]]);export{U as default};