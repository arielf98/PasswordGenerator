(this.webpackJsonppasswordgeneratorv1=this.webpackJsonppasswordgeneratorv1||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/key.f7a96c9b.svg"},57:function(e,t,a){e.exports=a(68)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(62),a(63),a(108)),u=a(111),i=a(43),m=a.n(i),s=(a(64),a(4)),d=a(106),E=a(107),f=a(38),v=a(47),h={},p=Object(n.createContext)(h),g=p.Provider,w=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){switch(t.type){case"CHOOSE_LENGTH":return{panjang:t.value};case"GENERATOR_PASS":return Object(f.a)(Object(f.a)({},e),{},{pass:t.value});default:throw new Error}}),h),l=Object(v.a)(a,2),c=l[0],o=l[1];return r.a.createElement(g,{value:{state:c,dispatch:o}},t)},y=Object(s.a)((function(){return{root:{backgroundColor:d.a[500],"&:hover":{backgroundColor:d.a[700]}}}}))(E.a);var b=function(){var e=Object(n.useContext)(p),t=e.dispatch,a=e.state.panjang;return r.a.createElement(y,{size:"large",color:"primary",variant:"contained",onClick:function(){return function(e,a){for(var n="",r=e;r>0;r--)n+=a[Math.floor(Math.random()*a.length)];t({type:"GENERATOR_PASS",value:n})}(a,"1234abcdABCD-_+&%$#@!")}},r.a.createElement("b",null," Generator Key "))},x=a(109);var O=function(){var e=Object(n.useContext)(p).state.pass;return r.a.createElement("div",null,r.a.createElement(x.a,{id:"standard-full-width",style:{margin:8},placeholder:"Your Password Here",fullWidth:!0,margin:"normal",value:e,InputProps:{readOnly:!0}}))},j=a(113),C=a(115),k=a(114),S=a(112);var G=function(){var e=Object(n.useContext)(p).dispatch;return r.a.createElement(k.a,{component:"fieldset"},r.a.createElement(j.a,{"aria-label":"password length",name:"genpassword lengthder1",onChange:function(t){e({type:"CHOOSE_LENGTH",value:t.target.value})}},r.a.createElement("div",null,r.a.createElement(C.a,{value:"20",control:r.a.createElement(S.a,null),label:"20"}),r.a.createElement(C.a,{value:"30",control:r.a.createElement(S.a,null),label:"30"}),r.a.createElement(C.a,{value:"40",control:r.a.createElement(S.a,null),label:"40"}))))};var N=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{maxwidthmd:"true",style:{marginTop:"2rem"}},r.a.createElement(u.a,{display:"flex",justifyContent:"center"},r.a.createElement("h1",{className:"text"},"Password Generator")),r.a.createElement(u.a,{display:"flex",justifyContent:"center",mt:"6rem"},r.a.createElement("img",{src:m.a,alt:" ",width:"150rem",height:"150rem"})),r.a.createElement(o.a,{className:"length-coiche"},r.a.createElement(u.a,{display:"flex",justifyContent:"center"},r.a.createElement(G,null))),r.a.createElement(u.a,{color:"text.primary",display:"flex",flexDirection:"column",justifyContent:"center",clone:!0,my:"auto",mx:"auto"},r.a.createElement(u.a,{mt:"5rem",width:"20rem"},r.a.createElement(o.a,{style:{marginBottom:"2rem",width:"20rem",paddingLeft:"8px"},mx:"auto"},r.a.createElement(O,null)),r.a.createElement(b,null)))))};var P=function(){return r.a.createElement("div",null,r.a.createElement(N,null))};var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null,r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.e9b6a970.chunk.js.map