"use strict";(self["webpackChunkIndicadores"]=self["webpackChunkIndicadores"]||[]).push([[60],{23060:function(s,e,a){a.r(e),a.d(e,{default:function(){return U}});var r=a(73396),t=a(49242),o=a(87139),n=a(54652);const i=s=>((0,r.dD)("data-v-0fc80717"),s=s(),(0,r.Cn)(),s),c={class:"container"},d={class:"row justify-content-center align-items-center minh-100"},l={class:"col-11 col-md-6 card shadow-lg rounded text-center"},m=i((()=>(0,r._)("div",{class:"card-header"},[(0,r._)("img",{class:"mt-2",width:"250",src:n})],-1))),u={class:"card-body"},g={class:"mb-3"},p={class:"mb-3"},h=i((()=>(0,r._)("button",{class:"btn btn-danger btn-md btn-block",type:"submit"}," Ingresar ",-1))),w={class:"card-footer text-muted"},v={href:"",class:"h6"};function _(s,e,a,n,i,_){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",d,[(0,r._)("div",l,[m,(0,r._)("div",u,[(0,r._)("form",{onSubmit:e[2]||(e[2]=(0,t.iM)((s=>_.login()),["prevent"])),action:""},[(0,r._)("div",g,[(0,r.wy)((0,r._)("input",{class:"form-control",type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>s.username=e),placeholder:"Usuario"},null,512),[[t.nr,s.username]])]),(0,r._)("div",p,[(0,r.wy)((0,r._)("input",{class:"form-control",type:"password","onUpdate:modelValue":e[1]||(e[1]=e=>s.password=e),placeholder:"Contraseña"},null,512),[[t.nr,s.password]])]),h,(0,r.wy)((0,r._)("div",{class:"alert mt-3 alert-warning"},(0,o.zw)(s.message),513),[[t.F8,s.message]])],32)]),(0,r._)("div",w,[(0,r._)("a",v,"Bantotal "+(0,o.zw)(s.year)+" - Todos los derechos reservados",1)])])])])}a(57658);var f=a(11393),b={name:"LoginPage",components:{},props:{},data:()=>({username:"",password:"",loading:!1,message:"",year:""}),computed:{},mounted(){$("body").css("padding-left","");const s=new Date,e=s.getFullYear();this.year=e},methods:{async login(){var s=await f.Z.login(this.username.toUpperCase(),this.password);s.success?s.data.Erroresnegocio&&s.data.Erroresnegocio.BTErrorNegocio[0]?(this.message=s.data.Erroresnegocio.BTErrorNegocio[0].Descripcion,setTimeout((()=>this.message=!1),3500)):this.registrar(s.data):(this.message=s.message,setTimeout((()=>this.message=!1),3500))},async registrar(s){s.Usuario=this.username.toUpperCase(),await this.$store.dispatch("login",s),this.$router.push("/")}}},y=a(40089);const C=(0,y.Z)(b,[["render",_],["__scopeId","data-v-0fc80717"]]);var U=C}}]);
//# sourceMappingURL=60.a95b96a1.js.map