(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(153)},128:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=a(33),l=a(54),i=a(22),u=a(89),d=a(98),p=a(90),g=a(21),f=(a(128),function(){var e=localStorage.getItem("class");return console.log("Home"),console.log(e),e?r.a.createElement(g.a,{to:"/".concat(e)}):r.a.createElement(g.a,{to:"/Red"})}),m="GETKIDLIST_START",b="GETCLASSLIST_START",h="SEND_MESSAGES_START",E="UPDATE_AIRTABLE_START",v="LOGIN_NOTIFICATION",L={start:function(e,t){return{type:h,payload:{kidList:e,messageType:t}}},success:function(e){return{type:"SEND_MESSAGES_SUCCESS",payload:e}},failure:function(e){return{type:"SEND_MESSAGES_FAILURE",payload:e}}},S={start:function(e){return{type:E,payload:e}},success:function(e){return{type:"UPDATE_AIRTABLE_SUCCESS",payload:e}},failure:function(e){return{type:"UPDATE_AIRTABLE_FAILURE",payload:e}}},y={start:function(e){return{type:m,payload:e}},success:function(e){return{type:"GETKIDLIST_SUCCESS",payload:e}},failure:function(e){return{type:"GETKIDLIST_FAILURE",payload:e}}},O={start:function(){return{type:b}},success:function(e){return{type:"GETCLASSLIST_SUCCESS",payload:e}},failure:function(e){return{type:"GETCLASSLIST_FAILURE",payload:e}}},k=function(e){return{type:v,payload:e}},I=a(92),w=a.n(I),T=(a(130),function(e){var t=e.notifyLogin;try{var a=localStorage.getItem("loginUser");if(a&&JSON.parse(a).name)return r.a.createElement(g.a,{to:"/home"})}catch(n){console.log("Login"),console.log(n)}return r.a.createElement("div",{className:"center"},r.a.createElement("img",{src:"https://drive.google.com/uc?export=download&id=1mWozRUoSgOtkz8D9oXfh-__yxTFk6N2d"}),r.a.createElement("div",{className:"appName"},"\u1ee8NG D\u1ee4NG \u0110I\u1ec2M DANH"),r.a.createElement(w.a,{appId:"2598444130186911",fields:"name,email,picture",textButton:"\u0110\u0103ng nh\u1eadp Baby's Home v\u1edbi Facebook",callback:function(e){if(console.log("responseFacebook"),console.log(e),e.name){var a={name:e.name,email:e.email,picture:e.picture.data.url};localStorage.setItem("loginUser",JSON.stringify(a)),localStorage.setItem("loginResponse",e),t(a),setTimeout(function(){return location.reload()},1e3)}console.log(e)},cssClass:"fb connect"}))}),j=Object(s.b)(function(e){return{}},function(e){return Object(i.bindActionCreators)({notifyLogin:function(e){return k(e)}},e)})(function(e){var t=e.notifyLogin;return r.a.createElement(T,{notifyLogin:t})}),C=a(48),N=a(200),x=a(205),_=a(203),A=a(204),R=a(202),U=a(206),D=function(e){var t=e.message,a=r.a.useState(!1),n=Object(C.a)(a,2),c=n[0],o=n[1];function s(){o(!1)}return r.a.useEffect(function(){o(!!t)},[]),r.a.createElement("div",null,r.a.createElement(N.a,{open:c,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0},r.a.createElement(R.a,{id:"alert-dialog-title"},t.title),r.a.createElement(_.a,null,r.a.createElement(A.a,{id:"alert-dialog-description"},t.content)),r.a.createElement(x.a,null,r.a.createElement(U.a,{onClick:s,color:"primary",autoFocus:!0},"\u0110\xf3ng"))))},K=a(44),F=a(217),M=a(216),G=a(221),B=a(222),P=a(223),W=a(214),V=a(228),J=a(227),H=a(220),z=a(97),Q=a(219),Y=a(225),Z=a(207),q=a(226),$=a(15),X=a(27),ee=a(218),te=a(215),ae=a(96),ne=a.n(ae),re=a(57),ce=a.n(re),oe=a(95),se=a.n(oe),le=a(94),ie=a.n(le),ue=a(224),de=Object(s.b)(function(e){return{message:e.message}},null)(function(e){var t=e.message;return t?r.a.createElement(D,{message:t}):null}),pe=a(13),ge=a(229),fe=a(208),me=a(156),be=a(209),he=a(211),Ee=a(210),ve=a(213),Le=a(93),Se=a.n(Le),ye=a(212),Oe=a(52),ke=Object(Z.a)({list:{width:250},fullList:{width:"auto"}}),Ie=function(e){var t=e.classList,a=void 0===t?[]:t,n=e.loginUser;console.log("AppDrawer"),console.log(a);var c,o=ke(),s=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),l=Object(C.a)(s,2),i=l[0],u=l[1],d=function(e,t){return function(a){u(Object(pe.a)({},i,Object(K.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(W.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:d("left",!0)},r.a.createElement(Se.a,null)),r.a.createElement(ge.a,{open:i.left,onClose:d("left",!1)},(c="left",r.a.createElement("div",{className:o.list,role:"presentation",onClick:d(c,!1)},r.a.createElement(fe.a,null,r.a.createElement(me.a,{button:!0,key:"loginUser"},r.a.createElement(be.a,null,r.a.createElement(Ee.a,{color:"secondary"})),r.a.createElement(he.a,{primary:n?n.name:""})),r.a.createElement(ye.a,null),a.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{button:!0,key:t,component:"a",href:"/#/".concat(e),onClick:function(){return setTimeout(function(){return location.reload()},1e3)},style:{backgroundColor:e,borderStyle:"solid",borderColor:"white",borderWidth:2,borderRadius:5}},r.a.createElement(be.a,null,r.a.createElement(ve.a,{color:"secondary"})),r.a.createElement(he.a,{disableTypography:!0,primary:r.a.createElement(Oe.a,{style:{color:"#FFFFFF"}},e.toUpperCase())})),r.a.createElement(ye.a,null))}))))))},we=Object(s.b)(function(e){return{classList:e.classList,loginUser:localStorage.getItem("loginUser")?JSON.parse(localStorage.getItem("loginUser")):void 0}},function(e){return Object(i.bindActionCreators)({getClassListStart:function(){return O.start()}},e)})(function(e){var t=e.classList,a=e.loginUser,c=e.getClassListStart;return Object(n.useEffect)(function(){setTimeout(function(){return c()},1e3)},[]),r.a.createElement(Ie,{classList:t,loginUser:a})}),Te=function(e){e.left;var t=e.kidList,a=void 0===t?[]:t,r=e.selectKid,c=void 0===r?function(){}:r,o=e.isLoading,s=void 0!==o&&o,l=(e.getKidListStart,e.sendMessages),i=void 0===l?function(){}:l,u=e.filterKid,d=void 0===u?function(){}:u,p=e.filterVal,f=void 0===p?"":p,m=e.selectAll,b=void 0===m?function(){}:m,h=e.unselectAll,E=void 0===h?function(){}:h,v=e.search,L=void 0===v?function(){}:v,S=e.searchVal;e.message,e.classList,e.notifyLogin;try{var y=localStorage.getItem("loginUser");if(!y)return n.createElement(g.a,{to:"/"});if(!JSON.parse(y).name)return n.createElement(g.a,{to:"/"})}catch(ae){console.log("Login"),console.log(ae)}var O=Object(Z.a)(function(e){return Object(q.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridListTile:{justify:"center",alignItems:"center"},icon:{color:"rgba(255, 255, 255, 0.54)"},button:{margin:e.spacing(1),width:80},rightIcon:{marginLeft:e.spacing(1)},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},list:{width:250},redIcon:{color:"red"},greenIcon:{color:"green"},yellowIcon:{color:"yellow"},greyIcon:{color:"grey"},marginIcon:{margin:10},progress:{margin:e.spacing(2)},fab:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},search:Object(K.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object($.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object($.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(K.a)({padding:e.spacing(1,1,1,7),fontSize:16,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),toolbar:e.mixins.toolbar,grow:{flexGrow:1},gridListTileSelected:{justify:"center",alignItems:"center",borderStyle:"solid",borderWidth:10,borderColor:"#d4d4d5"}})});console.log(a);var k=O(),I="50%",w=function(){var e=Object(X.a)(),t=2;return Object(te.a)(e.breakpoints.up("xl"))&&(t=6,I="17%"),Object(te.a)(e.breakpoints.up("lg"))&&(t=5,I="20%"),Object(te.a)(e.breakpoints.up("md"))&&(t=4,I="25%"),Object(te.a)(e.breakpoints.up("sm"))&&(t=3,I="33%"),t};console.log(w());var T={width:I,height:180},j=a.filter(function(e){var t=!1;S?(console.log("search "+S),x(e.name.toLowerCase()).includes(x(S.toLowerCase()))&&(t=!0)):t=!0;var a=!1;return"FILTER_ALL"===f?a=!0:"FILTER_GOSCHOOL"===f?"\u0110i h\u1ecdc"!==e.status&&"\u0110\xe3 v\u1ec1"!==e.status||(a=!0):"FILTER_ABSENT"===f?"Ngh\u1ec9 kh\xf4ng ph\xe9p"!==e.status&&"Ngh\u1ec9 c\xf3 ph\xe9p"!==e.status||(a=!0):"FILTER_UNKNOWN"===f&&(e.status||(a=!0)),t&&a}),N=0===j.filter(function(e){return e.isSelected}).length;function x(e){var t=e;return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.toLowerCase()).replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/ + /g," ")).trim()}var _=n.useState(null),A=Object(C.a)(_,2),R=A[0],U=A[1];function D(e){U(null),console.log(e),e&&i(a,e)}return console.log("Login response"),console.log(localStorage.getItem("loginResponse")),n.createElement("div",{className:k.root},n.createElement(M.a,null,n.createElement(F.a,{position:"fixed",color:"secondary"},n.createElement(ee.a,null,n.createElement(we,null),n.createElement("div",{className:k.search},n.createElement("div",{className:k.searchIcon},n.createElement(ie.a,null)),n.createElement(V.a,{placeholder:"T\xecm ki\u1ebfm\u2026",onChange:function(e){L(e.target.value)},classes:{root:k.inputRoot,input:k.inputInput},inputProps:{"aria-label":"search"}})),n.createElement("div",{className:k.grow}),n.createElement(W.a,{edge:"end",color:"inherit",onClick:function(e){U(e.currentTarget)}},n.createElement(se.a,null)),n.createElement(z.a,{id:"simple-menu",anchorEl:R,keepMounted:!0,open:Boolean(R),onClose:function(){return D("")}},n.createElement(Q.a,{onClick:function(){U(null),b(j)}},"Ch\u1ecdn t\u1ea5t c\u1ea3"),n.createElement(Q.a,{onClick:function(){U(null),E(j)}},"B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"),n.createElement(Q.a,{disabled:N,onClick:function(){return D("\u0110i h\u1ecdc")}},"\u0110i h\u1ecdc"),n.createElement(Q.a,{disabled:N,onClick:function(){return D("\u0110\xe3 v\u1ec1")}},"\u0110\xe3 v\u1ec1"),n.createElement(Q.a,{disabled:N,onClick:function(){return D("Ngh\u1ec9 c\xf3 ph\xe9p")}},"Ngh\u1ec9 c\xf3 ph\xe9p"),n.createElement(Q.a,{disabled:N,onClick:function(){return D("Ngh\u1ec9 kh\xf4ng ph\xe9p")}},"Ngh\u1ec9 kh\xf4ng ph\xe9p"))))),n.createElement(M.a,{className:k.toolbar}),n.createElement(M.a,{style:{paddingLeft:0,paddingRight:0,marginTop:-5}},s?n.createElement(H.a,null):n.createElement("div",{style:{height:4}}," ")),n.createElement(M.a,null,n.createElement(ue.a,{display:"flex",alignItems:"center"},n.createElement(ue.a,{flexGrow:1},n.createElement(Y.a,{value:f,onChange:function(e){var t=e.target.value;console.log(e.target.value),d(t)},className:k.formControl},n.createElement(Q.a,{value:"FILTER_ALL"},"T\u1ea5t c\u1ea3"),n.createElement(Q.a,{value:"FILTER_GOSCHOOL"},"\u0110i h\u1ecdc"),n.createElement(Q.a,{value:"FILTER_ABSENT"},"Ngh\u1ec9 h\u1ecdc"),n.createElement(Q.a,{value:"FILTER_UNKNOWN"},"Ch\u01b0a th\xf4ng b\xe1o"))),n.createElement(ue.a,null,n.createElement(J.a,null,"S\u1ed1 b\xe9: ",j.length)))),n.createElement(M.a,null,n.createElement(G.a,{cols:w(),style:{marginTop:16}},j.map(function(e){return n.createElement(B.a,{className:e.isSelected?k.gridListTileSelected:k.gridListTile,style:T,key:e.id,onClick:function(){return c(e.id)}},n.createElement("img",{src:e.avatar,alt:e.name}),n.createElement(P.a,{title:e.name,actionIcon:e.isSelected?n.createElement(ne.a,{className:k.greenIcon}):"\u0110i h\u1ecdc"==e.status?n.createElement(ce.a,{className:k.greenIcon}):"\u0110\xe3 v\u1ec1"==e.status?n.createElement(ce.a,{className:k.greyIcon}):"Ngh\u1ec9 c\xf3 ph\xe9p"==e.status?n.createElement(ce.a,{className:k.yellowIcon}):"Ngh\u1ec9 kh\xf4ng ph\xe9p"==e.status?n.createElement(ce.a,{className:k.redIcon}):""}))})),n.createElement(de,null)))},je=Object(g.g)(Object(s.b)(function(e){return{kidList:e.kids,filterVal:e.filterVal,searchVal:e.searchVal,isLoading:e.isLoading,classList:e.classList}},function(e){return Object(i.bindActionCreators)({getKidListStart:function(e){return y.start(e)},selectKid:function(e){return function(e){return{type:"SELECT_KID",payload:e}}(e)},sendMessages:function(e,t){return L.start(e,t)},filterKid:function(e){return function(e){return{type:"FILTER_KID",payload:e}}(e)},selectAll:function(e){return function(e){return{type:"SELECT_ALL",payload:e}}(e)},unselectAll:function(e){return function(e){return{type:"UNSELECT_ALL",payload:e}}(e)},search:function(e){return function(e){return{type:"SEARCH",payload:e}}(e)},notifyLogin:function(e){return k(e)}},e)})(function(e){var t=e.kidList,a=e.isLoading,c=e.getKidListStart,o=e.selectKid,s=e.sendMessages,l=e.filterKid,i=e.filterVal,u=e.selectAll,d=e.unselectAll,p=e.search,g=e.searchVal,f=e.match,m=e.notifyLogin,b=f.params.kidClass;return Object(n.useEffect)(function(){localStorage.setItem("class",b),console.log("KidsContainer "+b),setTimeout(function(){return c(b)},1e3)},[]),r.a.createElement(Te,{kidList:t,isLoading:a,getKidListStart:c,selectKid:o,filterKid:l,sendMessages:s,filterVal:i,selectAll:u,unselectAll:d,search:p,searchVal:g,notifyLogin:m})})),Ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Helmet,null,r.a.createElement("title",null,"\u0110I\u1ec2M DANH - BABY'S HOME")),r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/",exact:!0,component:j}),r.a.createElement(g.b,{path:"/home",exact:!0,component:f}),r.a.createElement(g.b,{path:"/MessageBox",component:D}),r.a.createElement(g.b,{path:"/:kidClass",component:je}),r.a.createElement(g.a,{to:"/"})))},Ne=(a(131),a(77)),xe={kids:[],classList:[],filterVal:"FILTER_ALL",isLoading:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(pe.a)({},e,{kids:[],isLoading:!0});case"GETKIDLIST_SUCCESS":return Object(pe.a)({},e,{kids:Object(Ne.a)(t.payload),isLoading:!1});case"GETKIDLIST_FAILURE":return Object(pe.a)({},e,{isLoading:!1,error:t.payload});case b:return Object(pe.a)({},e,{isLoading:!0});case"GETCLASSLIST_SUCCESS":return Object(pe.a)({},e,{classList:Object(Ne.a)(t.payload),isLoading:!1});case"GETCLASSLIST_FAILURE":return Object(pe.a)({},e,{isLoading:!1,error:t.payload});case h:return Object(pe.a)({},e,{isLoading:!0});case"SEND_MESSAGES_SUCCESS":return Object(pe.a)({},e,{isLoading:!1});case"SEND_MESSAGES_FAILURE":return Object(pe.a)({},e,{isLoading:!1,error:t.payload});case E:return Object(pe.a)({},e,{isLoading:!0});case"UPDATE_AIRTABLE_SUCCESS":return Object(pe.a)({},e,{kids:e.kids.map(function(t){for(var a=e.kids,n=0;n<a.length;n++)a[n].isSelected&&(t.isSelected=!1);return t}),isLoading:!1});case"UPDATE_AIRTABLE_FAILURE":return Object(pe.a)({},e,{isLoading:!1,error:t.payload});case"SELECT_KID":return Object(pe.a)({},e,{kids:e.kids.map(function(e){return e.id===t.payload&&(e.isSelected=!e.isSelected),e})});case"SELECT_ALL":return Object(pe.a)({},e,{kids:e.kids.map(function(e){for(var a=t.payload,n=0;n<a.length;n++)e.id===a[n].id&&(e.isSelected=!0);return e})});case"UNSELECT_ALL":return Object(pe.a)({},e,{kids:e.kids.map(function(e){for(var a=t.payload,n=0;n<a.length;n++)e.id===a[n].id&&(e.isSelected=!1);return e})});case"SEARCH":return Object(pe.a)({},e,{searchVal:t.payload});case"FILTER_KID":return Object(pe.a)({},e,{filterVal:t.payload,kids:e.kids.map(function(e){return e.isSelected&&(e.isSelected=!1),e})});default:return e}},Ae=a(10),Re=a.n(Ae),Ue=a(14),De=a(50),Ke=a(51),Fe=a.n(Ke),Me={baseURL:"https://api.airtable.com/v0",timeout:7e3},Ge=function(e){var t=Object(pe.a)({},Me,e),a=Fe.a.create(t);return function(){var e=Object(De.a)(Re.a.mark(function e(t){var n,r,c,o;return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("getKidList"),n="/".concat("app8JrpvvNCWIOQAN","/").concat(t,"?api_key=").concat("keyfPK5EI1cgILohx","&view=Kids"),e.next=5,a.get(n);case 5:if(200===(r=e.sent).status){e.next=8;break}throw new Error("Server Error");case 8:return c=(new Date).getDate(),console.log(r.data),o=r.data.records.map(function(e){var a=e.fields;return{id:a.Id,name:a.Name,contactIds:a.hasOwnProperty("ContactIds")?a.ContactIds.split(";"):[],avatar:a.hasOwnProperty("Avatar")?a.Avatar:"",status:a.hasOwnProperty(c)?a[c]:"",sendLog:a.hasOwnProperty("SendLog")?a.SendLog:"",recordId:e.id,class:t}}),console.log("GetKidList"),console.log(o),e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(0),e.t0;case 19:case"end":return e.stop()}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()},Be=function(e){var t=Object(pe.a)({},Me,e),a=Fe.a.create(t);return function(){var e=Object(De.a)(Re.a.mark(function e(){var t,n,r;return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("getKidList"),t="/".concat("app8JrpvvNCWIOQAN","/Class?api_key=").concat("keyfPK5EI1cgILohx","&view=Classes"),console.log(t),e.next=6,a.get(t);case 6:if(200===(n=e.sent).status){e.next=9;break}throw new Error("Server Error");case 9:return console.log(n),r=n.data.records.map(function(e){return e.fields.ClassName}),e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}},e,null,[[0,14]])}));return function(){return e.apply(this,arguments)}}()},Pe=function(e){var t=Object(pe.a)({},Me,e),a=Fe.a.create(t);return function(){var e=Object(De.a)(Re.a.mark(function e(t){var n,r,c,o,s,l,i,u,d;return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=27;break}if(!t[n].isSelected){e.next=24;break}return e.prev=3,console.log("updateAirTable"),r="/".concat("app8JrpvvNCWIOQAN","/").concat(t[n].class,"/").concat(t[n].recordId,"/?api_key=").concat("keyfPK5EI1cgILohx"),c=(new Date).getDate(),o=new Date,s=JSON.parse(localStorage.getItem("loginUser")).name,l=t[n].sendLog+";"+o.toLocaleString("ja-JP")+" "+s,console.log(l),i={fields:{currentDay:t[n].status,SendLog:l}},console.log(r),u=JSON.stringify(i).replace("currentDay",c.toString()),console.log(JSON.stringify(i).replace("currentDay",c.toString())),e.next=17,a.patch(r,JSON.parse(u));case 17:d=e.sent,console.log(d),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(3),console.log(e.t0);case 24:n++,e.next=1;break;case 27:case"end":return e.stop()}},e,null,[[3,21]])}));return function(t){return e.apply(this,arguments)}}()},We="mELtlMAHYqR0BvgEiMq8zVek3uYUK3OJMbtyrdNPTrQB9ndV0fM7lWTFZbM4MZvD",Ve={baseURL:"https://api.chatfuel.com/bots/".concat("5d5c2aaffdaf79000144292a","/users"),timeout:7e3},Je=function(e){var t=Object(pe.a)({},Ve,e),a=Fe.a.create(t);return function(){var e=Object(De.a)(Re.a.mark(function e(t,n){var r,c,o,s,l,i,u,d,p;return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,r=!1,e.t0=n,e.next="\u0110i h\u1ecdc"===e.t0?5:"\u0110\xe3 v\u1ec1"===e.t0?7:"Ngh\u1ec9 c\xf3 ph\xe9p"===e.t0?9:"Ngh\u1ec9 kh\xf4ng ph\xe9p"===e.t0?11:13;break;case 5:return c="_DiHoc",e.abrupt("break",13);case 7:return c="_VeNha",e.abrupt("break",13);case 9:return c="_NghiHoc_CoPhep",e.abrupt("break",13);case 11:return c="_NghiHoc",e.abrupt("break",13);case 13:o=encodeURI(t.name),s=0;case 15:if(!(s<t.contactIds.length)){e.next=31;break}return l=t.contactIds?t.contactIds[s].trim():"",i="",u="",d="",l.startsWith("m/")?(i="Messenger",l=l.replace("m/",""),d=i+c,u="/".concat(l,"/send?chatfuel_token=").concat(We,"&chatfuel_message_tag=NON_PROMOTIONAL_SUBSCRIPTION&chatfuel_block_name=").concat(d,"&name=").concat(o)):l.startsWith("m/")&&(i="Zalo",p=l.replace("z/",""),u="/".concat("2612331648778972","/send?chatfuel_token=").concat(We,"&chatfuel_message_tag=NON_PROMOTIONAL_SUBSCRIPTION&chatfuel_block_name=").concat(d,"&name=").concat(o,"&zaloId=").concat(p)),console.log("sendMessages "),console.log(u),e.next=25,a.post(u);case 25:200!==e.sent.status&&(r=r||!1),r=!0;case 28:s++,e.next=15;break;case 31:return e.abrupt("return",r);case 34:throw e.prev=34,e.t1=e.catch(0),e.t1;case 37:case"end":return e.stop()}},e,null,[[0,34]])}));return function(t,a){return e.apply(this,arguments)}}()},He=function(e){var t=Object(pe.a)({},Ve,e),a=Fe.a.create(t);return function(){var e=Object(De.a)(Re.a.mark(function e(t){var n,r,c,o,s;return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,e.prev=1,r=encodeURI(t.name),c=encodeURI(t.email?t.email:""),o=encodeURI(t.picture?t.picture:""),s="/".concat("2612331648778972","/send?chatfuel_token=").concat(We,"&chatfuel_message_tag=NON_PROMOTIONAL_SUBSCRIPTION&chatfuel_block_name=").concat("NotifyLogin","&name=").concat(r,"&email=").concat(c,"&picture=").concat(o),console.log("sendMessages "),console.log(s),e.next=10,a.post(s);case 10:200!==e.sent.status&&(n=n||!1),n=!0,e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(1),e.t0;case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}()},ze=Re.a.mark(rt),Qe=Re.a.mark(ct),Ye=Re.a.mark(ot),Ze=Re.a.mark(st),qe=Re.a.mark(lt),$e=Re.a.mark(it),Xe=Re.a.mark(ut),et=Re.a.mark(dt),tt=Re.a.mark(pt),at=Re.a.mark(gt),nt=Re.a.mark(ft);function rt(e){var t,a,n;return Re.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("runGetKidList"+e.payload),t=e.payload,r.prev=2,a=Ge(),r.next=6,Object(Ue.b)(a,t);case 6:return n=r.sent,r.next=9,Object(Ue.d)(y.success(n));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(Ue.d)(y.failure(r.t0));case 15:case"end":return r.stop()}},ze,null,[[2,11]])}function ct(){return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchGetKidList"),e.next=3,Object(Ue.e)(m,rt);case 3:case"end":return e.stop()}},Qe)}function ot(e){var t,a;return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Be(),e.next=4,Object(Ue.b)(t);case 4:return a=e.sent,e.next=7,Object(Ue.d)(O.success(a));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object(Ue.d)(O.failure(e.t0));case 13:case"end":return e.stop()}},Ye,null,[[0,9]])}function st(){return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchGetClassList"),e.next=3,Object(Ue.e)(b,ot);case 3:case"end":return e.stop()}},Ze)}function lt(e){var t,a,n,r;return Re.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:console.log("runSendMessages"),t=e.payload.kidList,a=e.payload.messageType,n=0;case 4:if(!(n<t.length)){c.next=25;break}if(!t[n].isSelected){c.next=22;break}return c.prev=6,r=Je(),c.next=10,Object(Ue.b)(r,t[n],a);case 10:if(!c.sent){c.next=15;break}return t[n].status=a,c.next=15,Object(Ue.d)(L.success(t[n]));case 15:c.next=22;break;case 17:return c.prev=17,c.t0=c.catch(6),console.log(c.t0),c.next=22,Object(Ue.d)(L.failure(c.t0));case 22:n++,c.next=4;break;case 25:return c.next=27,Object(Ue.d)(S.start(t));case 27:case"end":return c.stop()}},qe,null,[[6,17]])}function it(){return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchSendMessages"),e.next=3,Object(Ue.e)(h,lt);case 3:case"end":return e.stop()}},$e)}function ut(e){var t,a,n;return Re.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("runUpdateAirTable"),t=e.payload,r.prev=2,a=Pe(),r.next=6,Object(Ue.b)(a,t);case 6:return n=r.sent,r.next=9,Object(Ue.d)(S.success(n));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(Ue.d)(S.failure(r.t0));case 15:case"end":return r.stop()}},Xe,null,[[2,11]])}function dt(){return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchUpdateAirTable"),e.next=3,Object(Ue.e)(E,ut);case 3:case"end":return e.stop()}},et)}function pt(e){var t,a,n;return Re.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("runUpdateAirTable"),t=e.payload,a=!1,r.prev=3,n=He(),r.next=7,Object(Ue.b)(n,t);case 7:a=r.sent,r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),console.log(r.t0);case 13:return r.abrupt("return",a);case 14:case"end":return r.stop()}},tt,null,[[3,10]])}function gt(){return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchUpdateAirTable"),e.next=3,Object(Ue.e)(v,pt);case 3:case"end":return e.stop()}},at)}function ft(){return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("rootSaga"),e.next=3,Object(Ue.a)([Object(Ue.c)(ct),Object(Ue.c)(st),Object(Ue.c)(it),Object(Ue.c)(dt),Object(Ue.c)(gt)]);case 3:case"end":return e.stop()}},nt)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(152);var mt=Object(d.a)(),bt=Object(i.createStore)(_e,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(mt)));o.a.render(r.a.createElement(s.a,{store:bt},r.a.createElement(l.a,null,r.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),mt.run(ft)}},[[114,1,2]]]);
//# sourceMappingURL=main.643dd070.chunk.js.map