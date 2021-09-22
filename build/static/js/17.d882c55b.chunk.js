(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[17],{316:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.EmailJSResponseStatus=n.sendForm=n.send=n.init=void 0;var i=t(317);Object.defineProperty(n,"EmailJSResponseStatus",{enumerable:!0,get:function(){return i.EmailJSResponseStatus}});var r=t(318),s=null,a="https://api.emailjs.com";function c(e,n,t){return void 0===t&&(t={}),new Promise((function(r,s){var a=new XMLHttpRequest;for(var c in a.addEventListener("load",(function(e){var n=new i.EmailJSResponseStatus(e.target);200===n.status||"OK"===n.text?r(n):s(n)})),a.addEventListener("error",(function(e){s(new i.EmailJSResponseStatus(e.target))})),a.open("POST",e,!0),t)a.setRequestHeader(c,t[c]);a.send(n)}))}function d(e){var n=document&&document.getElementById("g-recaptcha-response");return n&&n.value&&(e["g-recaptcha-response"]=n.value),n=null,e}function o(e,n){s=e,a=n||"https://api.emailjs.com"}function l(e,n,t,i){var r={lib_version:"2.6.4",user_id:i||s,service_id:e,template_id:n,template_params:d(t)};return c(a+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function u(e,n,t,i){var d;if("string"===typeof t&&(t=document.querySelector("#"!==(d=t)[0]&&"."!==d[0]?"#"+d:d)),!t||"FORM"!==t.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(t);var o=new FormData(t);return o.append("lib_version","2.6.4"),o.append("service_id",e),o.append("template_id",n),o.append("user_id",i||s),c(a+"/api/v1.0/email/send-form",o).then((function(e){return r.UI.successState(t),e}),(function(e){return r.UI.errorState(t),Promise.reject(e)}))}n.init=o,n.send=l,n.sendForm=u,n.default={init:o,send:l,sendForm:u}},317:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.EmailJSResponseStatus=void 0;var i=function(e){this.status=e.status,this.text=e.responseText};n.EmailJSResponseStatus=i},318:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.UI=void 0;var i=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();n.UI=i},319:function(e,n,t){},459:function(e,n,t){"use strict";t.r(n);var i,r,s,a,c,d,o,l=t(0),u=t.n(l),m=t(456),p=t(316),h=t.n(p),b=t(88),j=t.n(b),f=(t(319),t(29)),x=t(30),O=x.c.div(i||(i=Object(f.a)(["\n  padding: 8rem 10px;\n  padding-left:40px;\n  padding-right:40px;\n  @media only screen and (min-width: 980px) {\n    padding: 6rem 3rem;\n  }\n\n"]))),g=x.c.section(r||(r=Object(f.a)(["\n  position: relative;\n  width: 100%;\n"]))),v=(x.c.div(s||(s=Object(f.a)(["\n  @media only screen and (min-width: 980px) {\n    padding: 10rem 7rem;\n  }\n"]))),x.c.form(a||(a=Object(f.a)(["\n  width: 100%;\n  max-width: 520px;\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"])))),S=(x.c.span(c||(c=Object(f.a)(["\n  display: block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),x.c.div(d||(d=Object(f.a)(["\n  text-align: end;\n  position: relative;\n  margin-bottom: 2.75rem;\n  margin-top: 0rem;\n  @media only screen and (max-width: 414px) {\n    // padding-top: 0.75rem;\n    \n  }\n"])))),y=x.c.button(o||(o=Object(f.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ",";\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0rem;\n  max-width: 180px;\n  margin-bottom: 0rem;\n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n  @media only screen and (max-width: 480px) {\n    width: ",";\n    margin-left: 0rem;\n  }\n"])),(function(e){return e.color||"rgb(209, 29, 50)"}),(function(e){return e.color?"rgb(209, 29, 50)":"#fff"}),(function(e){return e.color?"1px solid #687864":"0px"}),(function(e){return e.width?"180px":"100%"}),(function(e){return e.width?"180px":"100%"}),(function(e){return e.width?"180px":"100%"})),w=t(115),R=t(3),E=u.a.lazy((function(){return t.e(11).then(t.t.bind(null,438,7))})),_=u.a.lazy((function(){return t.e(11).then(t.t.bind(null,439,7))})),L=Object(l.lazy)((function(){return Promise.all([t.e(19),t.e(24)]).then(t.bind(null,464))})),P=Object(l.lazy)((function(){return t.e(31).then(t.bind(null,465))})),q=Object(l.lazy)((function(){return t.e(30).then(t.bind(null,466))})),N=Object(l.lazy)((function(){return Promise.all([t.e(15),t.e(20)]).then(t.bind(null,445))}));n.default=Object(m.a)()((function(e){var n=e.title,t=e.content,i=e.id,r=e.t,s=(e.e,e.handleSubmit);return Object(R.jsx)(O,{id:i,children:Object(R.jsx)(g,{children:Object(R.jsxs)(E,{type:"flex",align:"middle",justify:"center",children:[Object(R.jsxs)(_,{lg:12,md:12,sm:24,children:[Object(R.jsx)(P,{padding:!0,title:n,content:t}),Object(R.jsx)(_,{}),Object(R.jsxs)(v,{autoComplete:"off",onSubmit:function(e){h.a.sendForm("service_a9ktqlp","template_l0mglga",e.target,"user_yw3a8DYtaKOIm8KcBtk2L").then((function(e){alert(e.text)||window.location.reload()}),(function(e){alert(e.text)}))}||s,onsubmit:"return false",children:[Object(R.jsx)(_,{span:24,children:Object(R.jsx)("input",{minLength:"1",required:"required",type:"text",name:"name",id:"firstName",label:"services",placeholder:"Name *"})}),Object(R.jsx)(_,{span:24,children:Object(R.jsx)("input",{id:"inputEmail",type:"email",name:"email",required:"required",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",placeholder:"JohnSmith@email.com *"})}),Object(R.jsx)(_,{span:24,children:Object(R.jsx)("input",{placeholder:"Phone Number *",name:"number",required:"required",id:"number"})}),Object(R.jsx)(_,{span:24,children:Object(R.jsx)("input",{placeholder:"Suburb Name *",name:"suburb",required:"required",id:"suburb"})}),Object(R.jsxs)(E,{type:"flex",justify:"space-between",children:[Object(R.jsx)(_,{span:24,lg:12,md:24,sm:24,children:Object(R.jsx)(N,{placeholder:"menu",name:"menu",required:"required",id:"menu"})}),Object(R.jsx)(_,{span:24,lg:12,md:24,sm:24,children:Object(R.jsx)("input",{required:"required",type:"text",name:"subject",id:"subject",placeholder:"Subject *",title:"Subject *"})})]}),Object(R.jsx)(_,{span:24,children:Object(R.jsx)(q,{placeholder:"Message",name:"message",id:"Message",minLength:"5"})}),Object(R.jsx)(S,{children:Object(R.jsx)(y,{name:"submit",type:"submit",id:"Submit",children:r("Submit")})})]})]}),Object(R.jsxs)(_,{lg:12,md:11,sm:24,children:[Object(R.jsxs)("div",{id:"TextAddress",children:[Object(R.jsx)("div",{className:"formText",children:Object(R.jsx)("a",{href:"tel:02-9419-7947",id:"TextNumber",children:"Ph: (02) 9419 7947"})}),Object(R.jsx)("div",{className:"formText",children:Object(R.jsx)("a",{href:"https://goo.gl/maps/hrBNba4G8a1EbgFg6",children:"Unit 17, 4-6 Chaplin Drive Lane Cove West NSW 2066"})})]}),Object(R.jsx)(l.Suspense,{fallback:Object(R.jsx)("div",{children:Object(R.jsx)(j.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),children:Object(R.jsx)(w.LazyLoadComponent,{children:Object(R.jsx)(L,{})})})]})]})})})}))}}]);
//# sourceMappingURL=17.d882c55b.chunk.js.map