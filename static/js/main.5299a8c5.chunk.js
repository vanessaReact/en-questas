(this["webpackJsonpen-questas"]=this["webpackJsonpen-questas"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(22),r=n.n(c),i=(n(76),n(28),n(122)),o=n(116),l=n(123),d=n(15),j=n.p+"static/media/logo777.9b9ac589.png",b=n(0);var u=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.a,{className:"navegacion",children:Object(b.jsxs)(o.a,{children:[Object(b.jsxs)(d.b,{to:"/en-questas/",children:[Object(b.jsx)("img",{src:j,width:"50px"}),Object(b.jsx)(i.a.Brand,{href:"/en-questas/",children:"EnQestas"})]}),Object(b.jsxs)(l.a,{className:"mx-auto",children:[Object(b.jsx)(d.b,{to:"/en-questas/encuesta",children:Object(b.jsx)(l.a.Link,{href:"#Encuesta",children:"Quiz"})}),Object(b.jsx)(d.b,{to:"/en-questas/register",children:Object(b.jsx)(l.a.Link,{href:"#Register",children:"Register"})}),Object(b.jsx)(d.b,{to:"/en-questas/login",children:Object(b.jsx)(l.a.Link,{href:"#Login",children:"Login"})}),Object(b.jsx)(d.b,{to:"/en-questas/logout",children:Object(b.jsx)(l.a.Link,{href:"#Logout",children:"Logout"})})]})]})})})};var m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(i.a.Brand,{href:"#home",children:"Footer"}),Object(b.jsx)(l.a,{className:"me-auto",children:Object(b.jsx)(l.a.Link,{href:"#home",children:"Development with \u2764\ufe0f by Norn"})})]})})})})},h=n(10),p=n.n(h),O=n(14),x=n(9),g=n(23),f=n(24),v=n(27),N=n(25),C=n(124),y=n(117),I=n(70),k=n.n(I).a.create({baseURL:"https://encuestaspythonflask.herokuapp.com/"}),_=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={nombre:"",contrasenia:"",errors:{usermsg:""}},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(O.a)(p.a.mark((function t(n){var a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={nombre:e.state.nombre,contrasenia:e.state.contrasenia},console.log(e.state.nombre),console.log(e.state.contrasenia),s="",t.next=7,k.post("api/login",{user:a}).then((function(t){s="",console.log(t),console.log(t.data),localStorage.setItem("usuario",JSON.stringify(t.data)),e.setState({errors:{usermsg:s}}),e.props.history.push("/en-questas/encuesta")})).catch((function(e){e.response?(console.log("here in cath erormsg"),s=e.response.data,console.log(e.response.data)):e.request?console.log(e.request):console.log("Error",e.message)}));case 7:""!==s&&e.setState({errors:{usermsg:s}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"grid-login",children:Object(b.jsx)("div",{className:"container-grid-login border m-4 position-relative",children:Object(b.jsx)("div",{className:"container-formulario-login position-absolute top-50 start-50 translate-middle",children:Object(b.jsxs)(C.a,{method:"POST",onSubmit:this.handleSubmit,children:[Object(b.jsx)("div",{className:"error-msg",children:this.state.errors.usermsg}),Object(b.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicInput",children:[Object(b.jsx)(C.a.Label,{children:"Username"}),Object(b.jsx)(C.a.Control,{type:"text",name:"nombre",placeholder:"Enter username",onChange:this.handleChange}),Object(b.jsx)(C.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(C.a.Label,{children:"Password"}),Object(b.jsx)(C.a.Control,{type:"password",name:"contrasenia",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsx)(y.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})}}]),n}(s.a.Component),S=n(11),w=function(){var e=Object(S.f)();return Object(a.useEffect)((function(){localStorage.getItem("usuario")&&(localStorage.clear(),e.push("/en-questas/"))})),Object(b.jsx)(b.Fragment,{})},E=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={nombre:"",email:"",contrasenia:"",errors:{usermsg:""}},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(O.a)(p.a.mark((function t(n){var a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={nombre:e.state.nombre,email:e.state.email,contrasenia:e.state.contrasenia},console.log(e.state.nombre),console.log(e.state.email),console.log(e.state.contrasenia),s={},t.next=8,k.post("api/register",{user:a}).then((function(e){console.log(e),console.log(e.data),s.usermsg=e.data})).catch((function(e){e.response?(console.log("here in cath erormsg"),s.usermsg=e.response.data,console.log(e.response.data)):e.request?console.log(e.request):console.log("Error",e.message)}));case 8:e.setState({errors:s});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"grid-register",children:Object(b.jsx)("div",{className:"container-grid-register border m-4 position-relative",children:Object(b.jsx)("div",{className:"container-formulario-register position-absolute top-50 start-50 translate-middle",children:Object(b.jsxs)(C.a,{method:"POST",onSubmit:this.handleSubmit,children:[Object(b.jsx)("div",{className:"error-msg",children:this.state.errors.usermsg}),Object(b.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicInput",children:[Object(b.jsx)(C.a.Label,{children:"Username"}),Object(b.jsx)(C.a.Control,{type:"text",name:"nombre",placeholder:"Enter username",onChange:this.handleChange})]}),Object(b.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicInput",children:[Object(b.jsx)(C.a.Label,{children:"Email"}),Object(b.jsx)(C.a.Control,{type:"email",name:"email",placeholder:"Enter username",onChange:this.handleChange}),Object(b.jsx)(C.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(C.a.Label,{children:"Password"}),Object(b.jsx)(C.a.Control,{type:"password",name:"contrasenia",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsx)(y.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})}}]),n}(s.a.Component),D=n(3),q=(n(33),n(16)),P=n(17),F=n(125),G=n(119),A=n(120),M=n(121),L=n(118),T=n(71),B=n(126),z=n(41),R=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,form:{id:"",nombre:"",descripcion:"",img:"",user_id:"",tipoModal:""},file:null},e.handleInputChange=function(){var t=Object(O.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({file:n.target.files[0]});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.peticionGet=function(){var t=localStorage.getItem("usuario"),n=Object(z.a)(t);t&&(e.state.form.user_id=n.sub),k.get("encuestas_usuario?id=".concat(e.state.form.user_id)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e.message)}))},e.peticionPost=Object(O.a)(p.a.mark((function t(){var n,a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("usuario"),a=Object(z.a)(n),n&&(e.state.form.user_id=a.sub),(s=new FormData).append("img",e.state.file),s.append("user_id",e.state.form.user_id),s.append("descripcion",e.state.form.descripcion),s.append("nombre",e.state.form.nombre),console.warn(s),delete e.state.form.id,t.next=12,k.post("encuesta",s).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 12:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("img",e.state.file),t.append("id",e.state.form.id),t.append("descripcion",e.state.form.descripcion),t.append("nombre",e.state.form.nombre),k.put("encuesta",t).then((function(t){e.modalInsertar(),e.peticionGet()}))},e.peticionDelete=function(){k.delete("encuesta?id="+e.state.form.id).then((function(t){e.setState({modalEliminar:!1}),e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionarencuesta=function(t){e.setState({tipoModal:"actualizar",form:{id:t.id,nombre:t.nombre,descripcion:t.descripcion,img:t.img}})},e.handleChange=function(){var t=Object(O.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(D.a)(Object(D.a)({},e.state.form),{},Object(x.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("usuario"),t=Object(z.a)(e);console.log(t.sub),e&&(this.state.form.user_id=parseInt(t.sub),console.log("this is the user id: "),console.log(this.state.form.user_id)),this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar encuesta"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(o.a,{children:Object(b.jsx)(L.a,{children:Object(b.jsx)("div",{className:"card-columns",children:this.state.data.map((function(t){return Object(b.jsx)(T.a,{children:Object(b.jsxs)(B.a,{className:"card-block",children:[Object(b.jsx)("img",{className:"card-img-top img-fluid",src:t.img,alt:t.nombre}),Object(b.jsxs)(B.a.Body,{children:[Object(b.jsx)(B.a.Title,{children:t.nombre}),Object(b.jsx)(B.a.Text,{children:t.descripcion})]}),Object(b.jsxs)(B.a.Body,{children:[Object(b.jsx)(d.b,{to:"/en-questas/encuesta/seccion/".concat(t.id),children:Object(b.jsx)("button",{className:"btn btn-info",children:Object(b.jsx)(q.a,{icon:P.c})})}),"   ",Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionarencuesta(t),e.modalInsertar()},children:Object(b.jsx)(q.a,{icon:P.b})}),"   ",Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionarencuesta(t),e.setState({modalEliminar:!0})},children:Object(b.jsx)(q.a,{icon:P.e})})]})]})})}))})})}),Object(b.jsxs)(F.a,{isOpen:this.state.modalInsertar,children:[Object(b.jsx)(G.a,{style:{display:"block"},children:Object(b.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(b.jsx)(A.a,{children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"id",children:"ID"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"nombre",children:"Name"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"nombre",id:"nombre",onChange:this.handleChange,value:t?t.nombre:""}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"descripcion",children:"Description"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"descripcion",id:"descripcion",onChange:this.handleChange,value:t?t.descripcion:""}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"img",children:"Img"}),Object(b.jsx)("input",{className:"form-control",type:"file",name:"img",id:"img",onChange:this.handleInputChange})]})}),Object(b.jsxs)(M.a,{children:["insertar"==this.state.tipoModal?Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(b.jsxs)(F.a,{isOpen:this.state.modalEliminar,children:[Object(b.jsxs)(A.a,{children:["Est\xe1s seguro que deseas eliminar a la encuesta ",t&&t.nombre]}),Object(b.jsxs)(M.a,{children:[Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(b.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]})]})}}]),n}(a.Component),J=R,U=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,form:{id:"",nombre:"",id_encuesta:""}},e.peticionGet=function(){e.state.form.id_encuesta=e.props.match.params.id,k.get("secciones_encuesta?id=".concat(e.state.form.id_encuesta)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e.message)}))},e.peticionPost=Object(O.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,(a=new FormData).append("nombre",e.state.form.nombre),a.append("id_encuesta",n),t.next=6,k.post("seccion",a).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 6:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("id",e.state.form.id),t.append("nombre",e.state.form.nombre),k.put("seccion",t).then((function(t){e.modalInsertar(),e.peticionGet()}))},e.peticionDelete=function(){k.delete("seccion?id="+e.state.form.id).then((function(t){e.setState({modalEliminar:!1}),e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionarseccion=function(t){e.setState({tipoModal:"actualizar",form:{id:t.id,nombre:t.nombre,id_encuesta:e.props.match.params.id}})},e.handleChange=function(){var t=Object(O.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(D.a)(Object(D.a)({},e.state.form),{},Object(x.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.state.form.id_encuesta=this.props.match.params.id,console.log(this.state.form.id_encuesta),this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar seccion"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("table",{className:"table ",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Nombre"}),Object(b.jsx)("th",{children:"Acciones"})]})}),Object(b.jsx)("tbody",{children:this.state.data.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.id}),Object(b.jsx)("td",{children:t.nombre}),Object(b.jsxs)("td",{children:[Object(b.jsx)(d.b,{to:"en-questas/encuesta/seccion/preguntas/".concat(t.id),children:Object(b.jsx)("button",{className:"btn btn-info",children:Object(b.jsx)(q.a,{icon:P.d})})}),"   ",Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionarseccion(t),e.modalInsertar()},children:Object(b.jsx)(q.a,{icon:P.b})}),"   ",Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionarseccion(t),e.setState({modalEliminar:!0})},children:Object(b.jsx)(q.a,{icon:P.e})})]})]})}))})]}),Object(b.jsxs)(F.a,{isOpen:this.state.modalInsertar,children:[Object(b.jsx)(G.a,{style:{display:"block"},children:Object(b.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(b.jsx)(A.a,{children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"id",children:"ID"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"nombre",children:"Name"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"nombre",id:"nombre",onChange:this.handleChange,value:t?t.nombre:""}),Object(b.jsx)("br",{})]})}),Object(b.jsxs)(M.a,{children:["insertar"==this.state.tipoModal?Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(b.jsxs)(F.a,{isOpen:this.state.modalEliminar,children:[Object(b.jsxs)(A.a,{children:["Est\xe1s seguro que deseas eliminar a la seccion ",t&&t.nombre]}),Object(b.jsxs)(M.a,{children:[Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(b.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]})]})}}]),n}(a.Component),Q=U,W=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,form:{id:"",pregunta:"",id_seccion:"",id_tipo_pregunta:""},tipos_de_preguntas:[]},e.getTiposdePreguntas=function(){k.get("tipo_preguntas").then((function(t){console.log("this is response de tipos de preguntas: "),console.log(t.data),e.setState({tipos_de_preguntas:t.data}),console.log("lista de tipos de preguntas: "),console.log(e.state.tipos_de_preguntas)})).catch((function(e){console.log(e.message)}))},e.peticionGet=Object(O.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state.form.id_seccion=e.props.match.params.id,k.get("preguntas_seccion?id=".concat(e.state.form.id_seccion)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e.message)}));case 2:case"end":return t.stop()}}),t)}))),e.peticionPost=Object(O.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,a=new FormData,null==e.state.form.id_tipo_pregunta?a.append("id_tipo_pregunta",1):a.append("id_tipo_pregunta",e.state.form.id_tipo_pregunta),a.append("pregunta",e.state.form.pregunta),a.append("id_seccion",n),t.next=7,k.post("pregunta",a).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 7:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("id",e.state.form.id),t.append("pregunta",e.state.form.pregunta),t.append("id_tipo_pregunta",e.state.form.id_tipo_pregunta),k.put("pregunta",t).then((function(t){e.modalInsertar(),e.peticionGet()}))},e.peticionDelete=function(){k.delete("pregunta?id="+e.state.form.id).then((function(t){e.setState({modalEliminar:!1}),e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionarpregunta=function(t){e.setState({tipoModal:"actualizar",form:{id:t.id,pregunta:t.pregunta,id_tipo_pregunta:t.id_tipo_pregunta}})},e.handleChange=function(){var t=Object(O.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(D.a)(Object(D.a)({},e.state.form),{},Object(x.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.state.form.id_seccion=this.props.match.params.id,this.peticionGet(),this.getTiposdePreguntas()}},{key:"render",value:function(){var e=this,t=this.state.form,n=this.state.tipos_de_preguntas;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar pregunta"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("table",{className:"table ",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Pregunta"}),Object(b.jsx)("th",{children:"Tipo pregunta"}),Object(b.jsx)("th",{children:"Acciones"})]})}),Object(b.jsx)("tbody",{children:this.state.data.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.id}),Object(b.jsx)("td",{children:t.pregunta}),Object(b.jsx)("td",{children:n.map((function(e){if(e.id==t.id_tipo_pregunta)return e.nombre}))}),Object(b.jsxs)("td",{children:[Object(b.jsx)(d.b,{to:"en-questas/encuesta/seccion/preguntas/opciones/".concat(t.id),children:Object(b.jsx)("button",{className:"btn btn-info",children:Object(b.jsx)(q.a,{icon:P.a})})}),"   ",Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionarpregunta(t),e.modalInsertar()},children:Object(b.jsx)(q.a,{icon:P.b})}),"   ",Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionarpregunta(t),e.setState({modalEliminar:!0})},children:Object(b.jsx)(q.a,{icon:P.e})})]})]})}))})]}),Object(b.jsxs)(F.a,{isOpen:this.state.modalInsertar,children:[Object(b.jsx)(G.a,{style:{display:"block"},children:Object(b.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(b.jsx)(A.a,{children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"id",children:"ID"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"pregunta",children:"Pregunta"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"pregunta",id:"pregunta",onChange:this.handleChange,value:t?t.pregunta:""}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"pregunta",children:"TipoPregunta"}),Object(b.jsx)("select",{name:"id_tipo_pregunta",id:"id_tipo_pregunta",className:"form-control",onChange:this.handleChange,value:t?t.id_tipo_pregunta:"",children:this.state.tipos_de_preguntas.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.nombre})}))})]})}),Object(b.jsxs)(M.a,{children:["insertar"==this.state.tipoModal?Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(b.jsxs)(F.a,{isOpen:this.state.modalEliminar,children:[Object(b.jsxs)(A.a,{children:["Est\xe1s seguro que deseas eliminar a la pregunta ",t&&t.pregunta]}),Object(b.jsxs)(M.a,{children:[Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(b.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]})]})}}]),n}(a.Component),H=W,Y=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,form:{id:"",descripcion:"",id_pregunta:""}},e.peticionGet=function(){e.state.form.id_pregunta=e.props.match.params.id,k.get("opciones_pregunta?id=".concat(e.state.form.id_pregunta)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e.message)}))},e.peticionPost=Object(O.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,(a=new FormData).append("descripcion",e.state.form.descripcion),a.append("id_pregunta",n),t.next=6,k.post("opcion",a).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 6:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("id",e.state.form.id),t.append("descripcion",e.state.form.descripcion),k.put("opcion",t).then((function(t){e.modalInsertar(),e.peticionGet()}))},e.peticionDelete=function(){k.delete("opcion?id="+e.state.form.id).then((function(t){e.setState({modalEliminar:!1}),e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionarOpcion=function(t){e.setState({tipoModal:"actualizar",form:{id:t.id,descripcion:t.descripcion,id_pregunta:e.props.match.params.id}})},e.handleChange=function(){var t=Object(O.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(D.a)(Object(D.a)({},e.state.form),{},Object(x.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.state.form.id_pregunta=this.props.match.params.id,console.log(this.state.form.id_pregunta),this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar Opcion"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("table",{className:"table ",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"descripcion"}),Object(b.jsx)("th",{children:"Acciones"})]})}),Object(b.jsx)("tbody",{children:this.state.data.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.id}),Object(b.jsx)("td",{children:t.descripcion}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionarOpcion(t),e.modalInsertar()},children:Object(b.jsx)(q.a,{icon:P.b})}),"   ",Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionarOpcion(t),e.setState({modalEliminar:!0})},children:Object(b.jsx)(q.a,{icon:P.e})})]})]})}))})]}),Object(b.jsxs)(F.a,{isOpen:this.state.modalInsertar,children:[Object(b.jsx)(G.a,{style:{display:"block"},children:Object(b.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(b.jsx)(A.a,{children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"id",children:"ID"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"descripcion",children:"Description"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"descripcion",id:"descripcion",onChange:this.handleChange,value:t?t.descripcion:""}),Object(b.jsx)("br",{})]})}),Object(b.jsxs)(M.a,{children:["insertar"==this.state.tipoModal?Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(b.jsxs)(F.a,{isOpen:this.state.modalEliminar,children:[Object(b.jsxs)(A.a,{children:["Est\xe1s seguro que deseas eliminar a la Opcion ",t&&t.descripcion]}),Object(b.jsxs)(M.a,{children:[Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(b.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]})]})}}]),n}(a.Component),K=Y;var V=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsxs)("div",{className:"grid-uno",children:[Object(b.jsx)("div",{className:"grid-anidado-uno",children:Object(b.jsxs)("h1",{children:["Registrate ",Object(b.jsx)("span",{children:"y Opina "})," contestando encuestas"]})}),Object(b.jsx)("div",{className:"grid-anidado-dos",children:Object(b.jsx)("img",{src:"./mujer-encuesta.png",alt:""})})]}),Object(b.jsx)("div",{className:"grid-dos",children:Object(b.jsx)("div",{className:"container-grid-dos border m-4 position-relative",children:Object(b.jsxs)("div",{className:"container-formulario position-absolute top-50 start-50 translate-middle",children:[Object(b.jsx)("p",{children:" \xa1Reg\xedstrate YA!"}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputName",children:"\xbfCu\xe1l es tu primer nombre?"}),Object(b.jsx)("input",{type:"name",className:"form-control",id:"exampleInputEmail1","aria-describedby":"NameHelp",placeholder:"Enter first name"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputLastName",children:"\xbfCu\xe1l es tu primer apellido?"}),Object(b.jsx)("input",{type:"lastname",className:"form-control",id:"exampleInputLastName",placeholder:"Enter first lastname"})]}),Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(b.jsx)("label",{className:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})}),Object(b.jsxs)("div",{className:"grid-tres",children:[Object(b.jsx)("div",{className:"grid-anidado-tres-uno",children:Object(b.jsx)("h2",{children:"\xa1\xdanete a la MEJOR comunidad de Opini\xf3n Online!"})}),Object(b.jsxs)("div",{className:"grid-anidado-tres-dos",children:[Object(b.jsxs)("div",{className:"grid-anidado-tres-seccion1",children:[Object(b.jsx)("div",{className:"gats1-nombre-seccion1",children:Object(b.jsx)("p",{children:"M\xe1rketin Digital"})}),Object(b.jsxs)("div",{className:"gats1-descripcion-seccion1",children:[Object(b.jsx)("div",{className:"gats1-imagen-seccion1",children:Object(b.jsx)("p",{children:"Im\xe1gen"})}),Object(b.jsx)("div",{className:"gats1-contenido-imagen-seccion1",children:Object(b.jsx)("p",{children:"Contenido-Descripci\xf3n"})})]})]}),Object(b.jsxs)("div",{className:"grid-anidado-tres-seccion2",children:[Object(b.jsx)("div",{className:"gats2-nombre-seccion2",children:Object(b.jsx)("p",{children:"Testing"})}),Object(b.jsxs)("div",{className:"gats2-descripcion-seccion2",children:[Object(b.jsx)("div",{className:"gats2-imagen-seccion2",children:Object(b.jsx)("p",{children:"Im\xe1gen"})}),Object(b.jsx)("div",{className:"gats2-contenido-imagen-seccion2",children:Object(b.jsx)("p",{children:"Contenido-Descripci\xf3n"})})]})]}),Object(b.jsxs)("div",{className:"grid-anidado-tres-seccion3",children:[Object(b.jsx)("div",{className:"gats3-nombre-seccion3",children:Object(b.jsx)("p",{children:"Testing"})}),Object(b.jsxs)("div",{className:"gats3-descripcion-seccion3",children:[Object(b.jsx)("div",{className:"gats3-imagen-seccion3",children:Object(b.jsx)("p",{children:"Im\xe1gen"})}),Object(b.jsx)("div",{className:"gats3-contenido-imagen-seccion3",children:Object(b.jsx)("p",{children:"Contenido-Descripci\xf3n"})})]})]})]})]}),Object(b.jsxs)("div",{className:"grid-cuatro",children:[Object(b.jsx)("div",{className:"g4-info1",children:Object(b.jsx)("p",{children:"Info 1"})}),Object(b.jsx)("div",{className:"g4-info2",children:Object(b.jsx)("p",{children:"Info 2"})})]}),Object(b.jsxs)("div",{className:"grid-cinco",children:[Object(b.jsx)("div",{className:"g5-info1",children:Object(b.jsx)("p",{children:"Info 1"})}),Object(b.jsx)("div",{className:"g5-info2",children:Object(b.jsx)("p",{children:"Info 2"})})]})]})})};var X=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(S.c,{children:[Object(b.jsx)(S.a,{path:"/en-questas/",exact:!0,component:V}),Object(b.jsx)(S.a,{path:"/en-questas/encuesta",exact:!0,component:J}),Object(b.jsx)(S.a,{path:"/en-questas/encuesta/seccion/:id",exact:!0,component:Q}),Object(b.jsx)(S.a,{path:"/en-questas/encuesta/seccion/preguntas/:id",exact:!0,component:H}),Object(b.jsx)(S.a,{path:"/en-questas/encuesta/seccion/preguntas/opciones/:id",exact:!0,component:K}),Object(b.jsx)(S.a,{path:"/en-questas/login",exact:!0,component:_}),Object(b.jsx)(S.a,{path:"/en-questas/logout",exact:!0,component:w}),Object(b.jsx)(S.a,{path:"/en-questas/register",exact:!0,component:E})]})})};var Z=function(){return Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{}),Object(b.jsx)(X,{}),Object(b.jsx)(m,{})]})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(Z,{})}),document.getElementById("root"))},28:function(e,t,n){},76:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.5299a8c5.chunk.js.map