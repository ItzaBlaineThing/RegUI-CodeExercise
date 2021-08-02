(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(28),i=r.n(s),c=r(29),n=r(7),o=r(18),l=r(17),j=r(19),b=r(3),m=r(13),d=r(1);function h(e){return Object(d.jsxs)("div",{className:"progress-div",children:[Object(d.jsxs)("div",{className:"progress-one-div",children:[Object(d.jsx)("div",{className:"progress-circle ".concat(e.circleOne)}),Object(d.jsx)("h5",{className:"progress-div-text ".concat(e.textOne),children:"User Information"})]}),Object(d.jsxs)("div",{className:"progress-two-div",children:[Object(d.jsx)("div",{className:"progress-circle progress-circle-middle ".concat(e.circleTwo)}),Object(d.jsx)("hr",{}),Object(d.jsx)("h5",{className:"progress-div-text ".concat(e.textTwo),children:"Organization Information"})]}),Object(d.jsxs)("div",{className:"progress-three-div",children:[Object(d.jsx)("div",{className:"progress-circle ".concat(e.circleThree)}),Object(d.jsx)("h5",{className:"progress-div-text ".concat(e.textThree),children:"Review Information"})]})]})}function x(e){return 1!==e.currentView?null:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"registration-form-title",children:"Let's get started!"}),Object(d.jsx)("h5",{className:"registration-form-subtitle",children:"Tell us a little about youself"}),Object(d.jsxs)(b.a.Group,{className:"registration-form-group",children:[Object(d.jsx)(b.a.Label,{children:"First Name"}),Object(d.jsx)(b.a.Control,{type:"text",className:"registration-form-input",placeholder:"First Name",name:"firstName",onChange:e.handleChange,value:e.form.firstName})]}),Object(d.jsxs)(b.a.Group,{className:"registration-form-group",children:[Object(d.jsx)(b.a.Label,{children:"Last Name"}),Object(d.jsx)(b.a.Control,{type:"text",className:"registration-form-input",placeholder:"Last Name",name:"lastName",onChange:e.handleChange,value:e.form.lastName})]}),Object(d.jsxs)(b.a.Group,{className:"registration-form-group",children:[Object(d.jsx)(b.a.Label,{children:"Email"}),Object(d.jsx)(b.a.Control,{type:"email",className:"registration-form-input",placeholder:"Email",name:"email",onChange:e.handleChange,value:e.form.email})]}),Object(d.jsx)("div",{className:"registration-form-btn-div",children:e.isComplete.viewOne?Object(d.jsx)(m.a,{variant:"registration-form-btn",onClick:function(){e.changeView(2)},children:"Continue"}):Object(d.jsx)(m.a,{variant:"registration-form-btn registration-form-btn-disabled",disabled:!0,children:"Continue"})}),Object(d.jsx)(h,{circleOne:"current",circleTwo:"",circleThree:"",textOne:"active",textTwo:"disabled",textThree:"disabled"})]})}var O=r(20),u=r(15),g=r(9);function f(e){return 2!==e.currentView?null:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"registration-form-title",children:"Organization Info"}),Object(d.jsx)("h5",{className:"registration-form-subtitle",children:"Tell us about your organization"}),Object(d.jsxs)(b.a.Group,{className:"registration-form-group",children:[Object(d.jsx)(b.a.Label,{children:"Business Address"}),Object(d.jsx)(b.a.Control,{type:"text",className:"registration-form-input",placeholder:"Business Address",name:"address",onChange:e.handleChange,value:e.form.address})]}),Object(d.jsxs)(b.a.Group,{className:"registration-form-group",children:[Object(d.jsx)(b.a.Label,{children:"Phone Number"}),Object(d.jsx)(b.a.Control,{type:"text",className:"registration-form-input",placeholder:"Phone Number",name:"phoneNumber",onChange:e.handleChange,value:e.form.phoneNumber})]}),Object(d.jsxs)(b.a.Group,{className:"registration-form-group",children:[Object(d.jsx)(b.a.Label,{children:"NPI Number"}),Object(d.jsx)(b.a.Control,{type:"text",className:"registration-form-input",placeholder:"NPI Number",name:"npiNumber",onChange:e.handleChange,value:e.form.npiNumber})]}),Object(d.jsx)("div",{className:"registration-form-btn-div",children:Object(d.jsx)(O.a,{className:"registration-form-btn-container",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(g.a,{md:6,children:Object(d.jsx)(m.a,{variant:"registration-form-btn-alt",type:"button",onClick:function(){e.changeView(1)},children:"Back"})}),Object(d.jsx)(g.a,{md:6,children:e.isComplete.viewTwo?Object(d.jsx)(m.a,{variant:"registration-form-btn",type:"button",onClick:function(){e.changeView(3)},children:"Continue"}):Object(d.jsx)(m.a,{variant:"registration-form-btn registration-form-btn-disabled",disabled:!0,children:"Continue"})})]})})}),Object(d.jsx)(h,{circleOne:"visited",circleTwo:"current",circleThree:"",textOne:"disabled",textTwo:"active",textThree:"disabled"})]})}function N(e){var t=Object(a.useState)(!1),r=Object(j.a)(t,2),s=r[0],i=r[1];return 3!==e.currentView?null:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"registration-form-title",children:"Time to review!"}),Object(d.jsx)("h5",{className:"registration-form-subtitle",children:"How does everything look?"}),Object(d.jsxs)(O.a,{className:"registration-form-container",children:[Object(d.jsxs)(u.a,{children:[Object(d.jsx)(g.a,{children:Object(d.jsxs)(b.a.Group,{className:"registration-form-group review",children:[Object(d.jsx)(b.a.Label,{className:"registration-form-label",children:"First Name"}),Object(d.jsx)(b.a.Text,{className:"registration-form-text",children:e.form.firstName})]})}),Object(d.jsx)(g.a,{children:Object(d.jsxs)(b.a.Group,{className:"registration-form-group review",children:[Object(d.jsx)(b.a.Label,{className:"registration-form-label",children:"Last Name"}),Object(d.jsx)(b.a.Text,{className:"registration-form-text",children:e.form.lastName})]})})]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(g.a,{children:Object(d.jsxs)(b.a.Group,{className:"registration-form-group review",children:[Object(d.jsx)(b.a.Label,{className:"registration-form-label",children:"Email"}),Object(d.jsx)(b.a.Text,{className:"registration-form-text",children:e.form.email})]})}),Object(d.jsx)(g.a,{children:Object(d.jsxs)(b.a.Group,{className:"registration-form-group review",children:[Object(d.jsx)(b.a.Label,{className:"registration-form-label",children:"NPI Number"}),Object(d.jsx)(b.a.Text,{className:"registration-form-text",children:e.form.npiNumber})]})})]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(g.a,{children:Object(d.jsxs)(b.a.Group,{className:"registration-form-group review",children:[Object(d.jsx)(b.a.Label,{className:"registration-form-label",children:"Phone Number"}),Object(d.jsx)(b.a.Text,{className:"registration-form-text",children:e.form.phoneNumber})]})}),Object(d.jsx)(g.a,{children:Object(d.jsxs)(b.a.Group,{className:"registration-form-group review",children:[Object(d.jsx)(b.a.Label,{className:"registration-form-label",children:"Business Address"}),Object(d.jsx)(b.a.Text,{className:"registration-form-text",children:e.form.address})]})})]})]}),Object(d.jsx)("div",{className:"registration-form-checkbox-div",children:Object(d.jsx)(b.a.Check,{type:"checkbox",label:"I agree to the terms and conditions",onClick:function(){i(!s)}})}),Object(d.jsx)("div",{className:"registration-form-btn-div",children:Object(d.jsx)(O.a,{className:"registration-form-btn-container",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(g.a,{md:6,children:Object(d.jsx)(m.a,{variant:"registration-form-btn-alt",type:"button",onClick:function(){e.changeView(2)},children:"Back"})}),Object(d.jsx)(g.a,{md:6,children:s?Object(d.jsx)(m.a,{variant:"registration-form-btn",type:"submit",children:"Submit"}):Object(d.jsx)(m.a,{variant:"registration-form-btn registration-form-btn-disabled",type:"submit",disabled:!0,children:"Submit"})})]})})}),Object(d.jsx)(h,{circleOne:"visited",circleTwo:"visited",circleThree:"current",textOne:"disabled",textTwo:"disabled",textThree:"active"})]})}function p(){var e=Object(a.useState)({firstName:"",lastName:"",email:"",address:"",phoneNumber:"",npiNumber:""}),t=Object(j.a)(e,2),r=t[0],s=t[1],i=Object(a.useState)({viewOne:!1,viewTwo:!1}),c=Object(j.a)(i,2),n=c[0],m=c[1];function h(e,t,r,a){e.length&&t.length&&r.length>0?m((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},a,!0))})):m((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},a,!1))}))}function O(e){var t=e.target,a=t.name,i=t.value;s((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},a,i))})),h(r.firstName,r.lastName,r.email,"viewOne"),h(r.address,r.phoneNumber,r.npiNumber,"viewTwo")}var u=Object(a.useState)(1),g=Object(j.a)(u,2),p=g[0],v=g[1];function w(e){v(e)}return Object(d.jsx)("div",{className:"registration-form-div",children:Object(d.jsxs)(b.a,{className:"registration-form",children:[Object(d.jsx)("h2",{id:"brand",children:"Availity"}),Object(d.jsx)(x,{form:r,handleChange:O,currentView:p,changeView:w,isComplete:n}),Object(d.jsx)(f,{form:r,handleChange:O,currentView:p,changeView:w,isComplete:n}),Object(d.jsx)(N,{form:r,handleChange:O,currentView:p,changeView:w})]})})}function v(){return Object(d.jsx)(c.a,{children:Object(d.jsx)(n.c,{children:Object(d.jsx)(n.a,{path:"/",component:p})})})}i.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.673e557f.chunk.js.map