"use strict";(self["webpackChunkvue_bookshelf"]=self["webpackChunkvue_bookshelf"]||[]).push([[776],{8776:function(s,t,a){a.r(t),a.d(t,{default:function(){return C}});var e=a(3396),l=a(7139);const i=s=>((0,e.dD)("data-v-3eb6118e"),s=s(),(0,e.Cn)(),s),o={class:"main-content"},r={class:"book"},u={class:"mb-4 fs-4 fw-bold"},d={class:"flex"},n={class:"group"},h=i((()=>(0,e._)("label",{for:"",class:"fs-6"},"Title",-1))),b={class:"group"},c=i((()=>(0,e._)("label",{for:"",class:"fs-6"},"Author",-1))),f={class:"group"},_=i((()=>(0,e._)("label",{for:"",class:"fs-6"},"Date of publish",-1))),v={class:"group"},m=i((()=>(0,e._)("label",{for:"",class:"fs-6"},"Rating",-1))),k={class:"group"},g=i((()=>(0,e._)("label",{for:"",class:"fs-6"},"Summary",-1)));function p(s,t,a,i,p,w){return(0,e.wg)(),(0,e.iD)("div",o,[(0,e._)("div",r,[(0,e._)("h2",u,(0,l.zw)(this.title),1),(0,e._)("div",d,[(0,e._)("div",n,[h,(0,e._)("div",null,(0,l.zw)(this.title),1)]),(0,e._)("div",b,[c,(0,e._)("div",null,(0,l.zw)(this.author),1)]),(0,e._)("div",f,[_,(0,e._)("div",null,(0,l.zw)(this.dateOfPubblish),1)]),(0,e._)("div",v,[m,(0,e._)("div",null,(0,l.zw)(this.rating)+" / 10",1)]),(0,e._)("div",k,[g,(0,e._)("div",null,(0,l.zw)(this.summary),1)]),(0,e._)("button",{onClick:t[0]||(t[0]=(...s)=>w.deleteBook&&w.deleteBook(...s)),class:"btn btn-danger mt-3"}," Delete book ")])])])}var w=a(7425),y=a(7281),z={data(){return{id:this.$route.params.id,title:"",author:"",dateOfPubblish:"",rating:0,summary:""}},async beforeMount(){const s=(0,w.IO)((0,w.hJ)(y.db,"books"),(0,w.ar)("__name__","==",this.id)),t=await(0,w.PL)(s);t.forEach((s=>{this.title=s.data().title,this.author=s.data().author,this.dateOfPubblish=s.data().dateOfPubblish,this.rating=s.data().rating,this.summary=s.data().summary}))},methods:{async deleteBook(){await(0,w.oe)((0,w.JU)(y.db,"books",this.id)),this.$router.push("/my-books")}}},O=a(89);const P=(0,O.Z)(z,[["render",p],["__scopeId","data-v-3eb6118e"]]);var C=P}}]);
//# sourceMappingURL=776.53760ee1.js.map