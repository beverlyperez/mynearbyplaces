(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{37:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),c=a.n(s),r=a(27),i=a.n(r),o=(a(37),a(28)),l=a(12),j=a(14),h=a(15),u=a(17),d=a(16),b=a(6),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.state.username.trim().length>0&&n.setState({authenticated:!0}),e.preventDefault()},n.onInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(l.a)({},a,t))},n.state={username:"",authenticated:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?Object(n.jsx)(b.a,{to:e}):Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(n.jsx)("lable",{children:"Username:"}),Object(n.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChange}),Object(n.jsx)("button",{type:"submit",children:"Login"})]})})}}]),a}(c.a.Component),m=a(13),p=[{name:"someName",city:"Tucson",state:"Arizona",rating:5,review:"some review"}],g={addPlace:function(e,t,a,n,s){p.push({name:e,city:t,state:a,rating:n,review:s})},getAllPlaces:function(){return p}},x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(l.a)({},a,t));g.getAllPlaces;var s=[];s=""!==e.target.name?g.getAllPlaces.filter((function(t){var a=t.toLowerCase(),n=e.target.name.toLowerCase();return a.includes(n)})):g.getAllPlaces,n.setState({filtered:s})},n.state={username:"",searchN:"",filtered:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition((function(e){console.log("Latitude is :",e.coords.latitude),console.log("Longitude is :",e.coords.longitude),this.setState({latitude:e.coords.latitude}),this.setState({longitude:e.coords.longitude})}))}},{key:"render",value:function(){var e="",t=this.props.location;return t&&(console.log(t),t.state&&t.state.user&&(e=t.state.user)),Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"loginButton",children:e.length>0?e:Object(n.jsx)(m.b,{to:"/login",children:"Login"})})}),Object(n.jsx)("h1",{children:"Search nearby places"}),Object(n.jsx)("input",{type:"text",onChange:this.handleChange,name:"searchN",value:this.state.searchN,placeholder:"Search..."}),Object(n.jsx)("p",{name:"filtered",value:this.state.filtered}),Object(n.jsx)("br",{}),Object(n.jsx)(m.b,{to:"/place",children:"Add New Place"})]})}}]),a}(c.a.Component),v=(a(43),a(24)),f=a(30),C=a(18),y=a(7),S=a(31),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleAddPlace=function(e){g.addPlace(n.state.title,n.state.city,n.state.state,n.state.rating,n.state.rev),e.preventDefault()},n.onInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(l.a)({},a,t))},n.state={title:"",city:"",state:"",rating:0,rev:""},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(f.a,{children:Object(n.jsx)(v.a,{children:Object(n.jsx)(C.a,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsxs)(y.a.Group,{controlId:"formBasicName",children:[Object(n.jsx)(y.a.Label,{children:"Name"}),Object(n.jsx)(y.a.Control,{type:"text",name:"title",placeholder:"Enter name of place",value:this.state.title,onChange:this.onInputChange})]}),Object(n.jsxs)(y.a.Group,{controlId:"formBasicCity",children:[Object(n.jsx)(y.a.Label,{children:"City"}),Object(n.jsx)(y.a.Control,{type:"text",name:"city",placeholder:"City of place",value:this.state.city,onChange:this.onInputChange})]}),Object(n.jsxs)(y.a.Group,{controlId:"formBasicState",children:[Object(n.jsx)(y.a.Label,{children:"State"}),Object(n.jsx)(y.a.Control,{type:"text",name:"state",placeholder:"State of place",value:this.state.state,onChange:this.onInputChange})]}),Object(n.jsxs)(y.a.Group,{as:v.a,value:this.state.rating,onChange:this.onInputChange,children:[Object(n.jsx)(y.a.Label,{as:"legend",column:!0,sm:2,children:"Rating:"}),Object(n.jsxs)(C.a,{sm:10,children:[Object(n.jsx)(y.a.Check,{type:"radio",label:"1 star ",name:"formHorizontalRadios",id:"starOne"}),Object(n.jsx)(y.a.Check,{type:"radio",label:"2 stars",name:"formHorizontalRadios",id:"starTwo"}),Object(n.jsx)(y.a.Check,{type:"radio",label:"3 stars",name:"formHorizontalRadios",id:"starThree"}),Object(n.jsx)(y.a.Check,{type:"radio",label:"4 stars",name:"formHorizontalRadios",id:"starFour"}),Object(n.jsx)(y.a.Check,{type:"radio",label:"5 stars",name:"formHorizontalRadios",id:"starFive"})]})]}),Object(n.jsxs)(y.a.Group,{controlId:"formBasicReview",children:[Object(n.jsx)(y.a.Label,{children:"Review:"}),Object(n.jsx)(y.a.Control,{type:"text",name:"rev",placeholder:"Your thoughts on this place",value:this.state.rev,onChange:this.onInputChange})]}),Object(n.jsx)(S.a,{variant:"primary",type:"submit",onClick:this.handleAddPlace,children:"Add place"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.b,{id:"returnHome",to:"/",children:"Go back"})]})})})})}}]),a}(c.a.Component);a(45);var k=function(){return Object(n.jsx)(m.a,{basename:"/mynearbyplaces",children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(x,Object(o.a)({},e))}}),Object(n.jsx)(b.b,{path:"/login",children:Object(n.jsx)(O,{})}),Object(n.jsx)(b.b,{path:"/place",children:Object(n.jsx)(I,{})})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),L()}},[[46,1,2]]]);
//# sourceMappingURL=main.44ec205e.chunk.js.map