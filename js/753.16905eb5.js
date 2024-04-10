"use strict";(self["webpackChunkIndicadores"]=self["webpackChunkIndicadores"]||[]).push([[753],{37074:function(a,s,e){e.r(s),e.d(s,{default:function(){return ma}});var t=e(73396),l=e(87139),r=e(49242);const i=a=>((0,t.dD)("data-v-28eb5613"),a=a(),(0,t.Cn)(),a),c={class:"container"},n=["onClick"],o=i((()=>(0,t._)("i",{class:"fas fa-map-marker-alt text-white fa-xl"},null,-1))),d=[o],u={key:0},p=i((()=>(0,t._)("hr",null,null,-1))),m={class:"row"},h={class:"col-7 d-flex justify-content-center"},g={class:"col-5"},j={class:"col-12"},_={class:"card"},f={class:"card-content"},C={class:"card-body"},b={class:"media d-flex"},v=i((()=>(0,t._)("div",{class:"align-self-center"},[(0,t._)("i",{class:"icon-pie-chart success font-large-2 float-left"})],-1))),S={class:"media-body text-right"},y=i((()=>(0,t._)("span",null,"Cajas Abiertas",-1))),w={class:"col-12"},k={class:"card"},A={class:"card-content"},x={class:"card-body"},T={class:"media d-flex"},D=i((()=>(0,t._)("div",{class:"align-self-center"},[(0,t._)("i",{class:"icon-pie-chart danger font-large-2 float-left"})],-1))),P={class:"media-body text-right"},B=i((()=>(0,t._)("span",null,"Cajas Cerradas",-1))),M=i((()=>(0,t._)("hr",null,null,-1))),U={class:"nav nav-tabs mb-1"},z={class:"nav-item"},I={class:"nav-item"},O={class:"row"},V={class:"col-md-12 card"},F={class:"card-body"},N=i((()=>(0,t._)("h3",null,"Cajas Abiertas",-1))),R={key:1,class:"alert alert-warning mt-1",role:"alert"},q=i((()=>(0,t._)("h3",null,"Cajas Cerradas",-1))),Z={key:1,class:"alert alert-warning mt-1",role:"alert"},J={class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},H={class:"modal-dialog modal-dialog-centered",role:"document"},K={class:"modal-content"},Y={class:"modal-header"},E=i((()=>(0,t._)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,t._)("span",{"aria-hidden":"true"},"×")],-1))),W={class:"modal-body"},G={class:"card-body"},Q={class:"card-title"},X=i((()=>(0,t._)("i",{class:"fa fa-phone","aria-hidden":"true"},null,-1))),aa={class:"card-text"},sa=i((()=>(0,t._)("i",{class:"fa fa-map-marker","aria-hidden":"true"},null,-1))),ea={ref:"elMap",class:"app-store-map"},ta=i((()=>(0,t._)("div",{class:"modal-footer"},[(0,t._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Cerrar ")],-1)));function la(a,s,e,i,o,$){const L=(0,t.up)("Pie"),la=(0,t.up)("v-client-table"),ra=(0,t.up)("loading");return(0,t.wg)(),(0,t.iD)("div",c,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.Sucursal,((a,s)=>((0,t.wg)(),(0,t.iD)("div",{key:s},[(0,t._)("h2",null,[(0,t.Uk)("Cajas de la Sucursal ( "+(0,l.zw)(a.descripcion)+" ) ",1),(0,t._)("a",{class:"btn btn-info mb-1",onClick:s=>$.generarSucursal(a.identificador),"data-toggle":"modal","data-placement":"top",title:"Ver mapa","data-target":"#exampleModalCenter"},d,8,n)])])))),128)),o.cajas?((0,t.wg)(),(0,t.iD)("div",u,[p,(0,t._)("div",m,[(0,t._)("div",h,[(0,t.Wm)(L,{id:"my-chart-id",data:o.chartData,style:(0,l.j5)($.myStyles)},null,8,["data","style"])]),(0,t._)("div",g,[(0,t._)("div",j,[(0,t._)("div",_,[(0,t._)("div",f,[(0,t._)("div",C,[(0,t._)("div",b,[v,(0,t._)("div",S,[(0,t._)("h4",null,(0,l.zw)(o.cajasAbiertas.length),1),y])])])])])]),(0,t._)("div",w,[(0,t._)("div",k,[(0,t._)("div",A,[(0,t._)("div",x,[(0,t._)("div",T,[D,(0,t._)("div",P,[(0,t._)("h4",null,(0,l.zw)(o.cajasCerradas.length),1),B])])])])])])])]),M,(0,t._)("ul",U,[(0,t._)("li",z,[(0,t._)("a",{class:(0,l.C_)(["nav-link",{active:1==o.cajasA}]),onClick:s[0]||(s[0]=a=>$.selecionar(1))}," Cajas Abiertas ",2)]),(0,t._)("li",I,[(0,t._)("a",{class:(0,l.C_)(["nav-link",{active:1==a.cajasC}]),onClick:s[1]||(s[1]=a=>$.selecionar(2))}," Cajas Cerradas ",2)])]),(0,t._)("div",O,[(0,t._)("div",V,[(0,t._)("div",F,[(0,t.wy)((0,t._)("div",null,[N,o.cajasAbiertasPremiun[0]?((0,t.wg)(),(0,t.j4)(la,{key:0,ref:"table",data:o.cajasAbiertasPremiun,columns:o.columns,options:o.options},null,8,["data","columns","options"])):((0,t.wg)(),(0,t.iD)("div",R,(0,l.zw)("No se encuentran registros!")))],512),[[r.F8,o.cajasA]]),(0,t.wy)((0,t._)("div",null,[q,o.cajasCerradas[0]?((0,t.wg)(),(0,t.j4)(la,{key:0,ref:"table",data:o.cajasCerradas,columns:o.columns,options:o.options},null,8,["data","columns","options"])):((0,t.wg)(),(0,t.iD)("div",Z,(0,l.zw)("No se encuentran registros!")))],512),[[r.F8,a.cajasC]])])])])])):((0,t.wg)(),(0,t.j4)(ra,{key:1})),(0,t._)("div",J,[(0,t._)("div",H,[(0,t._)("div",K,[(0,t._)("div",Y,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.Sucursal,((a,s)=>((0,t.wg)(),(0,t.iD)("div",{key:s},[(0,t._)("h5",null,"Sucursal: ( "+(0,l.zw)(a.descripcion)+" )",1)])))),128)),E]),(0,t._)("div",W,[(0,t._)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.cajasSelect,((a,s)=>((0,t.wg)(),(0,t.iD)("div",{class:"card",key:s},[(0,t._)("div",G,[(0,t._)("p",Q,[X,(0,t.Uk)(" "+(0,l.zw)(a.telefono),1)]),(0,t._)("p",aa,[sa,(0,t.Uk)(" "+(0,l.zw)(a.direccion),1)])])])))),128))]),(0,t._)("div",ea,null,512)]),ta])])])])}var ra=e(29646),ia=e(15866),ca=e(11393),na=e(28666),oa=e(49161);ra.kL.register(ra.qi,ra.u,ra.De);var da={name:"sucursales",mounted(){const a=JSON.parse(this.$route.query.datos),s=JSON.parse(this.$route.query.caja);1==s&&(this.cajasA=!1,this.cajasC=!0),this.getSucursalesCajas(a)},components:{Pie:ia.by,loading:na.Z,ServerTable:oa.wv},data(){return{Sucursal:null,cajasA:!0,cajasB:!1,cajas:!1,mostrar:!1,TextoBuscado:"",cajasSelect:null,cajasAbiertas:[],cajasCerradas:[],cajasAbiertasPremiun:[],cajasCerradasPremiun:[],chartData:{labels:["January","February","March"],datasets:[{data:[40,20,12]}]},chartOptions:{responsive:!0,maintainAspectRatio:!1},columns:["indicador","usuario","nombre"],options:{sortIcon:{is:"fa-sort",base:"fa",up:"fa-sort-asc",down:"fa-sort-desc"},texts:{count:"Mostrando {from} a {to} de {count} registros |{count} registros|Un registro",first:"Primero",last:"Ultimo",filter:"Filtro:",filterPlaceholder:"Búsqueda",limit:"Registros:",page:"Pagina:",noResults:"No hay registros coincidentes",noRequest:"Seleccione al menos un filtro para obtener resultados",filterBy:"Filtrar por {column}",loading:"Cargando...",defaultOption:"Seleccionar {column}",columns:"Columnas"},perPage:10,perPageValues:[10,25,50,100,500],headings:{indicador:"# CAJA",usuario:"USUARIO",nombre:"NOMBRE"}}}},methods:{async getSucursalesCajas(a){await ca.Z.getSucursalesCajas().then((s=>{this.Sucursal=s.sdtSucursalesCajas.listadoSucursalesA.SdtsBTSucursal.filter((s=>s.identificador==a)),this.cajas=!0,this.cajasAbiertas=s.sdtSucursalesCajas.listadoCajasA.SdtsBTCaja.filter((s=>s.sucursalId==a)),this.cajasCerradas=s.sdtSucursalesCajas.listadoCajasC.SdtsBTCaja.filter((s=>s.sucursalId==a));let e=this.cajasAbiertas.map((a=>{var e=null;return e=s.sdtSucursalesCajas.listadoSucursalesC.SdtsBTSucursal.filter((s=>s.identificador==a.sucursalId)),this.cajasSelect||(e=s.sdtSucursalesCajas.listadoSucursalesA.SdtsBTSucursal.filter((s=>s.identificador==a.sucursalId))),a.Sucursal=e[0].descripcion,a}));this.chartData={labels:["Abiertas","Cerradas"],datasets:[{backgroundColor:["#525e5e","#41B883"],data:[e.length,s.sdtSucursalesCajas.cajasCerradas]}]},this.cajasAbiertasPremiun=e,$(document).ready((function(){$(".VuePagination__count").text((function(a,s){return s.replace("Un registro","1 registro")})),$(".VueTables__search-field label").hide(),$(".VueTables__limit-field label").hide(),$(".VuePagination__pagination").addClass("justify-content-center")}))}))},async generarSucursal(a){await ca.Z.getSucursalesCajas().then((s=>{this.cajasSelect=s.sdtSucursalesCajas.listadoSucursalesC.SdtsBTSucursal.filter((s=>s.identificador==a)),this.cajasSelect[0]||(this.cajasSelect=s.sdtSucursalesCajas.listadoSucursalesA.SdtsBTSucursal.filter((s=>s.identificador==a)))})),await this.generarMapa(this.cajasSelect[0].latitud,this.cajasSelect[0].longitud)},async generarMapa(a,s){this.$options.markers=new Array;var e=this.$refs.elMap;setTimeout((function(){const t=L.map(e).setView([a,s],10);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',maxZoom:18}).addTo(t);L.marker([a,s]).addTo(t)}),1e3)},selecionar(a){1==a&&(this.cajasA=!0,this.cajasC=!1),2==a&&(this.cajasA=!1,this.cajasC=!0)}},computed:{myStyles(){return{height:"325px"}},CajasFilter(){var a=this.TextoBuscado.toUpperCase();return this.cajasAbiertasPremiun.filter((s=>s.nombre.toUpperCase().includes(a)||s.Sucursal.toUpperCase().includes(a)))}},watch:{cajasSelect:{deep:!0,handler(a){console.log("cambios"),a.length>0&&(this.generarMapa(a[0].latitud,a[0].longitud),this.$nextTick((()=>{this.$options.map&&this.$options.map.invalidateSize()})))}}}},ua=e(40089);const pa=(0,ua.Z)(da,[["render",la],["__scopeId","data-v-28eb5613"]]);var ma=pa}}]);
//# sourceMappingURL=753.16905eb5.js.map