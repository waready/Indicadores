"use strict";(self["webpackChunkIndicadores"]=self["webpackChunkIndicadores"]||[]).push([[98],{28666:function(a,e,s){s.d(e,{Z:function(){return g}});var o=s(73396),d=s(49242);const r=a=>((0,o.dD)("data-v-206fa664"),a=a(),(0,o.Cn)(),a),t={class:"modal-mask"},l={class:"modal-wrapper"},i={class:"modal-container"},n={class:"modal-body text-white"},c=r((()=>(0,o._)("br",null,null,-1))),u=r((()=>(0,o._)("div",{class:"splash-title"},[(0,o._)("div",{class:"lds-facebook"},[(0,o._)("div"),(0,o._)("div"),(0,o._)("div"),(0,o._)("div"),(0,o._)("div")])],-1)));function m(a,e,s,r,m,p){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(d.uT,{name:"modal"},{default:(0,o.w5)((()=>[(0,o._)("div",t,[(0,o._)("div",l,[(0,o._)("div",i,[(0,o._)("div",n,[(0,o.WI)(a.$slots,"body",{},(()=>[(0,o.Uk)(" Espere un momento por favor!! ")]),!0),c,u])])])])])),_:3})])}var p={data(){return{showModal:!0}}},v=s(40089);const _=(0,v.Z)(p,[["render",m],["__scopeId","data-v-206fa664"]]);var g=_},27098:function(a,e,s){s.r(e),s.d(e,{default:function(){return E}});var o=s(73396),d=s(49242),r=s(87139);const t=a=>((0,o.dD)("data-v-45ca379c"),a=a(),(0,o.Cn)(),a),l={class:"container mt-3"},i={key:0},n={id:"minimal-statistics"},c=t((()=>(0,o._)("div",{class:"row"},[(0,o._)("div",{class:"col-12 mt-3 mb-1"},[(0,o._)("h4",{class:"text-uppercase"},"Cierre de Saldo por Monedas"),(0,o._)("p",null,"Información de los Balances"),(0,o._)("hr")])],-1))),u={class:"row"},m={class:"col-md-6"},p={class:"input-group is-invalid"},v=t((()=>(0,o._)("div",{class:"input-group-prepend"},[(0,o._)("span",{class:"input-group-text",id:"validatedInputGroupPrepend"},[(0,o._)("i",{class:"fa fa-search","aria-hidden":"true"})])],-1))),_={class:"row mt-4"},g={class:"card custom-card"},f={class:"card-content"},h={class:"card-body"},w={class:"media d-flex"},C={class:"media-body text-left"},b={class:"name"},x={class:"progress mt-1 mb-0",style:{height:"7px"}},y=t((()=>(0,o._)("br",null,null,-1)));function M(a,e,s,t,M,B){const k=(0,o.up)("loading");return(0,o.wg)(),(0,o.iD)("div",l,[a.CuadreMonedas?((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("section",n,[c,(0,o._)("div",u,[(0,o._)("div",m,[(0,o._)("div",p,[(0,o.wy)((0,o._)("input",{type:"text",name:"filter",class:"form-control",placeholder:"Búsqueda","onUpdate:modelValue":e[0]||(e[0]=e=>a.TextoBuscado=e),id:"filter"},null,512),[[d.nr,a.TextoBuscado]]),v])])]),(0,o.wy)((0,o._)("div",{class:"alert alert-warning mt-2",role:"alert"},(0,r.zw)(a.message+"!"),513),[[d.F8,a.message]]),(0,o._)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(B.filterCuadreMoneda,((a,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-xl-4 col-sm-6 col-12",key:e},[(0,o._)("div",g,[(0,o._)("div",f,[(0,o._)("div",h,[(0,o._)("div",w,[(0,o._)("div",C,[(0,o._)("h4",{class:(0,r.C_)(0!=a.saldo?"danger":"success")},(0,r.zw)(a.signo),3)]),(0,o._)("div",{class:(0,r.C_)(["align-self-center",0!=a.saldo?"danger":"success"]),style:{"font-size":"17px"}},(0,r.zw)(B.formattedNumber(a.saldo)),3)]),(0,o._)("div",null,[(0,o._)("span",b,(0,r.zw)(a.nombre.toUpperCase()),1)]),(0,o._)("div",x,[y,(0,o._)("div",{class:(0,r.C_)([0!=a.saldo?"bg-danger":"bg-success","progressbar"]),role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"},null,2)])])])])])))),128))])])])):((0,o.wg)(),(0,o.j4)(k,{key:1}))])}s(57658);var B=s(11393),k=s(28666),D=s(49161),T={components:{loading:k.Z,ServerTable:D.wv},props:{},data:()=>({CuadreMonedas:null,message:"",TextoBuscado:""}),computed:{},mounted(){this.getAllCuadreMonedaSaldos()},methods:{async getAllCuadreMonedaSaldos(){await B.Z.getCuadreMonedaSaldos().then((a=>{a.Erroresnegocio&&a.Erroresnegocio.BTErrorNegocio[0]&&(this.message=a.Erroresnegocio.BTErrorNegocio[0].Descripcion,"Sesión inválida"==this.message&&setTimeout((()=>{B.Z.logout(),this.$store.dispatch("logout"),this.$router.push("/login")}),3e3)),this.CuadreMonedas=a.sdtBalanceMonedaSaldos.sBTBalanceMonedaSaldo,this.CuadreMonedas[0]||(this.message="No se encuentran registros!")}))},formattedNumber(a){const e=new Intl.NumberFormat("es",{minimumFractionDigits:2,maximumFractionDigits:2});return e.format(a)}},computed:{filterCuadreMoneda(){var a=this.TextoBuscado.toUpperCase();return this.CuadreMonedas.filter((e=>e.nombre.toUpperCase().includes(a)||e.signo.toUpperCase().includes(a))).sort(((a,e)=>0!==a.saldo&&0===e.saldo?-1:0===a.saldo&&0!==e.saldo?1:0))}}},I=s(40089);const S=(0,I.Z)(T,[["render",M],["__scopeId","data-v-45ca379c"]]);var E=S}}]);
//# sourceMappingURL=98.a33773ba.js.map