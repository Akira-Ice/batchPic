"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{37025:function(Z,f,n){n.r(f),n.d(f,{default:function(){return S}});var A=n(15009),h=n.n(A),L=n(99289),v=n.n(L),R=n(19632),T=n.n(R),B=n(5574),p=n.n(B),I=n(23748),D=n(18551),K=n(63118),P=n(67294),u=n(85893);function S(){var W=(0,P.useState)(""),C=p()(W,2),d=C[0],k=C[1],x=(0,P.useState)([]),g=p()(x,2),l=g[0],O=g[1],o=d===""?[]:d==null?void 0:d.split(`
`);console.log(o);var y=function(r){var a=l.findIndex(function(s){return s===r});O(a===-1?[].concat(T()(l),[r]):l.filter(function(s){return s!==r}))},j=function(){var _=v()(h()().mark(function r(a){var s,i;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a?s=o:s=l,e.prev=1,s.length!==0){e.next=4;break}return e.abrupt("return");case 4:i=0;case 5:if(!(i<s.length)){e.next=11;break}return e.next=8,F(o[i],i.toString());case 8:i++,e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}},r,null,[[1,13]])}));return function(a){return _.apply(this,arguments)}}(),F=function(){var _=v()(h()().mark(function r(a,s){return h()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",new Promise(function(e,w){var t=new Image;t.crossOrigin="anonymous",t.onload=function(){var E=document.createElement("canvas");E.width=t.width,E.height=t.height;var b=E.getContext("2d");b==null||b.drawImage(t,0,0,t.width,t.height),E.toBlob(function(M){if(M){var U=URL.createObjectURL(M),m=document.createElement("a");m.href=U,m.download=s+"-jpg",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(U),e(!0)}},"image/jpeg")},t.onerror=function(){w(new Error("Failed to load image: "+a))},t.src=a}));case 1:case"end":return c.stop()}},r)}));return function(a,s){return _.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"p-10 flex flex-col gap-5",children:[(0,u.jsxs)(I.Z,{children:[(0,u.jsxs)(D.Z,{onClick:function(){j(!0)},children:["\u4E0B\u8F7D\u5168\u90E8(",o.length,"\u5F20)"]}),(0,u.jsxs)(D.Z,{onClick:function(){return j(!1)},children:["\u4E0B\u8F7D\u5DF2\u9009(",l.length,"\u5F20)"]})]}),(0,u.jsx)(K.Z.TextArea,{placeholder:"\u8F93\u5165\u56FE\u7247\u94FE\u63A5\uFF0C\u7A7A\u683C\u5206\u9694",rows:15,value:d,onChange:function(r){return k(r.target.value.replace(/^'|'$/g,"").replace(/\s+/g,`
`))}}),(0,u.jsx)("div",{className:"grid grid-cols-5 gap-5",children:o.length!==0&&o.map(function(_,r){return(0,u.jsx)("img",{className:"w-80 rounded-xl",style:{border:l.includes(_)?"2px solid rgb(134 239 172)":"",boxShadow:l.includes(_)?"0 0 5px rgba(76, 175, 80, 0.5)":""},src:_,alt:"\u56FE\u7247",onClick:function(){return y(_)}},r)})})]})}}}]);
