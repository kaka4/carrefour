"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1211],{1211:(G,u,r)=>{r.r(u),r.d(u,{HomePageModule:()=>$});var l=r(177),v=r(9417),i=r(8974),p=r(7338),g=r(3078),M=r(2140),c=r(9640);const m=(0,c.Mz)(M.w,t=>t.homePage),f=(0,c.Mz)(m,t=>null==t?void 0:t.products),H=(0,c.Mz)(m,t=>null==t?void 0:t.isLoading);var e=r(4438),b=r(6071),h=r(8147);const y=()=>({lower:"0",upper:"100"});function T(t,a){1&t&&e.nrm(0,"ion-spinner")}function F(t,a){if(1&t){const o=e.RV6();e.j41(0,"carrefour-product-card",10),e.bIt("addToCart",function(s){e.eBV(o);const P=e.XpG();return e.Njj(P.addProductToCart(s))}),e.k0s()}2&t&&e.Y8G("product",a.$implicit)}const I=[{path:"",component:(()=>{var t;class a{constructor(n){this.store=n,this.products$=this.store.select(f),this.isLoading$=this.store.select(H)}ngOnInit(){this.store.dispatch(g.yE.getAllProductsAtInit())}addProductToCart(n){this.store.dispatch(g.yE.addProductToCart({product:{id:n.id,category:n.category,title:n.title,image:n.image,price:n.price}}))}priceFilterChanged(n){"number"!=typeof n.detail.value&&(this.products$=this.store.select(((t,a)=>(0,c.Mz)(f,o=>null==o?void 0:o.filter(n=>n.price>=t&&n.price<=a).sort((n,s)=>n.price-s.price)))(10*n.detail.value.lower,10*n.detail.value.upper)))}pinFormatter(n){return"$"+10*n}}return(t=a).\u0275fac=function(n){return new(n||t)(e.rXU(c.il))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-folder"]],decls:21,vars:21,consts:[[3,"translucent"],["slot","start"],[1,"ion-padding"],["id","container"],[1,"banner-container"],["alt","home page banner","src","assets/img/home-banner.jpg",1,"banner-img"],["aria-label","price filter","labelPlacement","start",3,"ionChange","label","pin","pinFormatter","dualKnobs","value"],[1,"product-container"],[4,"ngIf"],[3,"product","addToCart",4,"ngFor","ngForOf"],[3,"addToCart","product"]],template:function(n,s){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-menu-button"),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content",2)(8,"div",3)(9,"div",4),e.nrm(10,"img",5),e.k0s(),e.j41(11,"h1"),e.EFF(12),e.nI1(13,"translate"),e.k0s(),e.j41(14,"ion-range",6),e.nI1(15,"translate"),e.bIt("ionChange",function(x){return s.priceFilterChanged(x)}),e.k0s(),e.j41(16,"div",7),e.DNE(17,T,1,0,"ion-spinner",8),e.nI1(18,"async"),e.DNE(19,F,1,1,"carrefour-product-card",9),e.nI1(20,"async"),e.k0s()()()),2&n&&(e.Y8G("translucent",!0),e.R7$(5),e.JRh(e.bMT(6,10,"homePage.title")),e.R7$(7),e.JRh(e.bMT(13,12,"homePage.subtitle")),e.R7$(2),e.Y8G("label",e.bMT(15,14,"homePage.priceFilter"))("pin",!0)("pinFormatter",s.pinFormatter)("dualKnobs",!0)("value",e.lJ4(20,y)),e.R7$(3),e.Y8G("ngIf",e.bMT(18,16,s.isLoading$)),e.R7$(2),e.Y8G("ngForOf",e.bMT(20,18,s.products$)))},dependencies:[l.Sq,l.bT,i.QW,i.W9,i.eU,i.MC,i.Ob,i.w2,i.BC,i.ai,i.Gw,b.V,l.Jj,h.D9],styles:[".banner-container[_ngcontent-%COMP%]{display:flex;position:relative}.banner-img[_ngcontent-%COMP%]{max-height:30vh;width:98%;object-fit:cover;margin:10px;border-radius:15px}.product-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-evenly;row-gap:10px}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;margin-top:40px}"]}),a})()}];let j=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.iI.forChild(I),p.iI]}),a})();var R=r(3887);let $=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[l.MD,v.YN,i.bv,j,h.h,R.G]}),a})()}}]);