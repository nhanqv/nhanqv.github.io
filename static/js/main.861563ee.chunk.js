(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(153)},127:function(e,t,a){},128:function(e,t,a){},131:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=a(40),l=a(52),i=a(26),u=a(87),d=a(97),p=a(88),f=a(21),g=(a(127),a(128),function(){var e=localStorage.getItem("class");return e?r.a.createElement(f.a,{to:"/".concat(e)}):r.a.createElement(f.a,{to:"/Red"})}),m=a(90),b=a.n(m),E=function(e){if(console.log("responseFacebook"),e.name){var t={name:e.name,email:e.email,picture:e.picture.data.url};localStorage.setItem("loginUser",JSON.stringify(t))}console.log(e)},h=function(){try{var e=localStorage.getItem("loginUser");if(e&&JSON.parse(e).name)return r.a.createElement(f.a,{to:"/Red"})}catch(t){console.log("Login"),console.log(t)}return r.a.createElement(b.a,{appId:"2598444130186911",autoLoad:!0,fields:"name,email,picture",callback:E,cssClass:"my-facebook-button-class",icon:"fa-facebook",redirectUri:"/Blue"})},S=a(49),v=a(199),L=a(204),y=a(202),O=a(203),k=a(201),I=a(205),w=function(e){var t=e.message,a=r.a.useState(!1),n=Object(S.a)(a,2),c=n[0],o=n[1];function s(){o(!1)}return r.a.useEffect(function(){o(!!t)},[]),r.a.createElement("div",null,r.a.createElement(v.a,{open:c,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0},r.a.createElement(k.a,{id:"alert-dialog-title"},t.title),r.a.createElement(y.a,null,r.a.createElement(O.a,{id:"alert-dialog-description"},t.content)),r.a.createElement(L.a,null,r.a.createElement(I.a,{onClick:s,color:"primary",autoFocus:!0},"\u0110\xf3ng"))))},j="GETKIDLIST_START",C="GETCLASSLIST_START",T="SEND_MESSAGES_START",A="UPDATE_AIRTABLE_START",x={start:function(e,t){return{type:T,payload:{kidList:e,messageType:t}}},success:function(e){return{type:"SEND_MESSAGES_SUCCESS",payload:e}},failure:function(e){return{type:"SEND_MESSAGES_FAILURE",payload:e}}},_={start:function(e){return{type:A,payload:e}},success:function(e){return{type:"UPDATE_AIRTABLE_SUCCESS",payload:e}},failure:function(e){return{type:"UPDATE_AIRTABLE_FAILURE",payload:e}}},N={start:function(e){return{type:j,payload:e}},success:function(e){return{type:"GETKIDLIST_SUCCESS",payload:e}},failure:function(e){return{type:"GETKIDLIST_FAILURE",payload:e}}},R={start:function(){return{type:C}},success:function(e){return{type:"GETCLASSLIST_SUCCESS",payload:e}},failure:function(e){return{type:"GETCLASSLIST_FAILURE",payload:e}}},U=a(45),K=a(214),D=a(213),F=a(218),M=a(219),G=a(220),B=a(211),P=a(224),V=a(226),W=a(217),J=a(96),H=a(216),z=a(222),Q=a(206),Y=a(223),Z=a(13),q=a(27),$=a(215),X=a(212),ee=a(95),te=a.n(ee),ae=a(55),ne=a.n(ae),re=a(94),ce=a.n(re),oe=a(93),se=a.n(oe),le=a(221),ie=Object(s.b)(function(e){return{message:e.message}},null)(function(e){var t=e.message;return t?r.a.createElement(w,{message:t}):null}),ue=a(14),de=a(225),pe=a(207),fe=a(156),ge=a(208),me=a(209),be=a(91),Ee=a.n(be),he=a(92),Se=a.n(he),ve=a(210),Le=a(51),ye=Object(Q.a)({list:{width:250},fullList:{width:"auto"}}),Oe=function(e){var t=e.classList,a=void 0===t?[]:t;console.log("AppDrawer"),console.log(a);var n,c=ye(),o=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),s=Object(S.a)(o,2),l=s[0],i=s[1],u=function(e,t){return function(a){i(Object(ue.a)({},l,Object(U.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(B.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:u("left",!0)},r.a.createElement(Se.a,null)),r.a.createElement(de.a,{open:l.left,onClose:u("left",!1)},(n="left",r.a.createElement("div",{className:c.list,role:"presentation",onClick:u(n,!1)},r.a.createElement(pe.a,null,a.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{button:!0,key:t,component:"a",href:"/".concat(e),style:{backgroundColor:e,borderStyle:"solid",borderColor:"white",borderWidth:2,borderRadius:5}},r.a.createElement(ge.a,null,r.a.createElement(Ee.a,{color:"secondary"})),r.a.createElement(me.a,{disableTypography:!0,primary:r.a.createElement(Le.a,{style:{color:"#FFFFFF"}},e.toUpperCase())})),r.a.createElement(ve.a,null))}))))))},ke=Object(s.b)(function(e){return{classList:e.classList}},function(e){return Object(i.bindActionCreators)({getClassListStart:function(){return R.start()}},e)})(function(e){var t=e.classList,a=e.getClassListStart;return Object(n.useEffect)(function(){setTimeout(function(){return a()},1e3)},[]),r.a.createElement(Oe,{classList:t})}),Ie=function(e){e.left;var t=e.kidList,a=void 0===t?[]:t,r=e.selectKid,c=void 0===r?function(){}:r,o=e.isLoading,s=void 0!==o&&o,l=(e.getKidListStart,e.sendMessages),i=void 0===l?function(){}:l,u=e.filterKid,d=void 0===u?function(){}:u,p=e.filterVal,g=void 0===p?"":p,m=e.selectAll,b=void 0===m?function(){}:m,E=e.unselectAll,h=void 0===E?function(){}:E,v=e.search,L=void 0===v?function(){}:v,y=e.searchVal;e.message,e.classList;try{var O=localStorage.getItem("loginUser");if(!O)return n.createElement(f.a,{to:"/"});if(!JSON.parse(O).name)return n.createElement(f.a,{to:"/"})}catch(re){console.log("Login"),console.log(re)}var k=Object(Q.a)(function(e){return Object(Y.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridListTile:{justify:"center",alignItems:"center"},icon:{color:"rgba(255, 255, 255, 0.54)"},button:{margin:e.spacing(1),width:80},rightIcon:{marginLeft:e.spacing(1)},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},list:{width:250},redIcon:{color:"red"},greenIcon:{color:"green"},yellowIcon:{color:"yellow"},greyIcon:{color:"grey"},marginIcon:{margin:10},progress:{margin:e.spacing(2)},fab:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},search:Object(U.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Z.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Z.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(U.a)({padding:e.spacing(1,1,1,7),fontSize:16,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),toolbar:e.mixins.toolbar,grow:{flexGrow:1},gridListTileSelected:{justify:"center",alignItems:"center",borderStyle:"solid",borderWidth:10,borderColor:"#d4d4d5"}})});console.log(a);var I=k(),w="50%",j=function(){var e=Object(q.a)(),t=2;return Object(X.a)(e.breakpoints.up("xl"))&&(t=6,w="17%"),Object(X.a)(e.breakpoints.up("lg"))&&(t=5,w="20%"),Object(X.a)(e.breakpoints.up("md"))&&(t=4,w="25%"),Object(X.a)(e.breakpoints.up("sm"))&&(t=3,w="33%"),t};console.log(j());var C={width:w,height:180},T=a.filter(function(e){var t=!1;y?(console.log("search "+y),x(e.name.toLowerCase()).includes(x(y.toLowerCase()))&&(t=!0)):t=!0;var a=!1;return"FILTER_ALL"===g?a=!0:"FILTER_GOSCHOOL"===g?"\u0110i h\u1ecdc"!==e.status&&"\u0110\xe3 v\u1ec1"!==e.status||(a=!0):"FILTER_ABSENT"===g?"Ngh\u1ec9 kh\xf4ng ph\xe9p"!==e.status&&"Ngh\u1ec9 c\xf3 ph\xe9p"!==e.status||(a=!0):"FILTER_UNKNOWN"===g&&(e.status||(a=!0)),t&&a}),A=0===T.filter(function(e){return e.isSelected}).length;function x(e){var t=e;return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.toLowerCase()).replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/ + /g," ")).trim()}var _=n.useState(null),N=Object(S.a)(_,2),R=N[0],ee=N[1];function ae(e){ee(null),console.log(e),e&&i(a,e)}return n.createElement("div",{className:I.root},n.createElement(D.a,null,n.createElement(K.a,{position:"fixed",color:"secondary"},n.createElement($.a,null,n.createElement(ke,null),n.createElement("div",{className:I.search},n.createElement("div",{className:I.searchIcon},n.createElement(se.a,null)),n.createElement(P.a,{placeholder:"T\xecm ki\u1ebfm\u2026",onChange:function(e){L(e.target.value)},classes:{root:I.inputRoot,input:I.inputInput},inputProps:{"aria-label":"search"}})),n.createElement("div",{className:I.grow}),n.createElement(B.a,{edge:"end",color:"inherit",onClick:function(e){ee(e.currentTarget)}},n.createElement(ce.a,null)),n.createElement(J.a,{id:"simple-menu",anchorEl:R,keepMounted:!0,open:Boolean(R),onClose:function(){return ae("")}},n.createElement(H.a,{onClick:function(){ee(null),b(T)}},"Ch\u1ecdn t\u1ea5t c\u1ea3"),n.createElement(H.a,{onClick:function(){ee(null),h(T)}},"B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"),n.createElement(H.a,{disabled:A,onClick:function(){return ae("\u0110i h\u1ecdc")}},"\u0110i h\u1ecdc"),n.createElement(H.a,{disabled:A,onClick:function(){return ae("\u0110\xe3 v\u1ec1")}},"\u0110\xe3 v\u1ec1"),n.createElement(H.a,{disabled:A,onClick:function(){return ae("Ngh\u1ec9 c\xf3 ph\xe9p")}},"Ngh\u1ec9 c\xf3 ph\xe9p"),n.createElement(H.a,{disabled:A,onClick:function(){return ae("Ngh\u1ec9 kh\xf4ng ph\xe9p")}},"Ngh\u1ec9 kh\xf4ng ph\xe9p"))))),n.createElement(D.a,{className:I.toolbar}),n.createElement(D.a,{style:{paddingLeft:0,paddingRight:0,marginTop:-5}},s?n.createElement(W.a,null):n.createElement("div",{style:{height:4}}," ")),n.createElement(D.a,null,n.createElement(le.a,{display:"flex",alignItems:"center"},n.createElement(le.a,{flexGrow:1},n.createElement(z.a,{value:g,onChange:function(e){var t=e.target.value;console.log(e.target.value),d(t)},className:I.formControl},n.createElement(H.a,{value:"FILTER_ALL"},"T\u1ea5t c\u1ea3"),n.createElement(H.a,{value:"FILTER_GOSCHOOL"},"\u0110i h\u1ecdc"),n.createElement(H.a,{value:"FILTER_ABSENT"},"Ngh\u1ec9 h\u1ecdc"),n.createElement(H.a,{value:"FILTER_UNKNOWN"},"Ch\u01b0a th\xf4ng b\xe1o"))),n.createElement(le.a,null,n.createElement(V.a,null,"S\u1ed1 b\xe9: ",T.length)))),n.createElement(D.a,null,n.createElement(F.a,{cols:j(),style:{marginTop:16}},T.map(function(e){return n.createElement(M.a,{className:e.isSelected?I.gridListTileSelected:I.gridListTile,style:C,key:e.id,onClick:function(){return c(e.id)}},n.createElement("img",{src:e.avatar,alt:e.name}),n.createElement(G.a,{title:e.name,actionIcon:e.isSelected?n.createElement(te.a,{className:I.greenIcon}):"\u0110i h\u1ecdc"==e.status?n.createElement(ne.a,{className:I.greenIcon}):"\u0110\xe3 v\u1ec1"==e.status?n.createElement(ne.a,{className:I.greyIcon}):"Ngh\u1ec9 c\xf3 ph\xe9p"==e.status?n.createElement(ne.a,{className:I.yellowIcon}):"Ngh\u1ec9 kh\xf4ng ph\xe9p"==e.status?n.createElement(ne.a,{className:I.redIcon}):""}))})),n.createElement(ie,null)))},we=Object(f.g)(Object(s.b)(function(e){return{kidList:e.kids,filterVal:e.filterVal,searchVal:e.searchVal,isLoading:e.isLoading,classList:e.classList}},function(e){return Object(i.bindActionCreators)({getKidListStart:function(e){return N.start(e)},selectKid:function(e){return function(e){return{type:"SELECT_KID",payload:e}}(e)},sendMessages:function(e,t){return x.start(e,t)},filterKid:function(e){return function(e){return{type:"FILTER_KID",payload:e}}(e)},selectAll:function(e){return function(e){return{type:"SELECT_ALL",payload:e}}(e)},unselectAll:function(e){return function(e){return{type:"UNSELECT_ALL",payload:e}}(e)},search:function(e){return function(e){return{type:"SEARCH",payload:e}}(e)}},e)})(function(e){var t=e.kidList,a=e.isLoading,c=e.getKidListStart,o=e.selectKid,s=e.sendMessages,l=e.filterKid,i=e.filterVal,u=e.selectAll,d=e.unselectAll,p=e.search,f=e.searchVal,g=e.match.params.kidClass;return Object(n.useEffect)(function(){localStorage.setItem("class",g),console.log("KidsContainer "+g),setTimeout(function(){return c(g)},1e3)},[]),r.a.createElement(Ie,{kidList:t,isLoading:a,getKidListStart:c,selectKid:o,filterKid:l,sendMessages:s,filterVal:i,selectAll:u,unselectAll:d,search:p,searchVal:f})})),je=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Helmet,null,r.a.createElement("title",null,"\u0110I\u1ec2M DANH - BABY'S HOME")),r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,component:h}),r.a.createElement(f.b,{path:"/home",exact:!0,component:g}),r.a.createElement(f.b,{path:"/MessageBox",component:w}),r.a.createElement(f.b,{path:"/:kidClass",component:we}),r.a.createElement(f.a,{to:"/"})))},Ce=(a(131),a(73)),Te={kids:[],classList:[],filterVal:"FILTER_ALL",isLoading:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(ue.a)({},e,{kids:[],isLoading:!0});case"GETKIDLIST_SUCCESS":return Object(ue.a)({},e,{kids:Object(Ce.a)(t.payload),isLoading:!1});case"GETKIDLIST_FAILURE":return Object(ue.a)({},e,{isLoading:!1,error:t.payload});case C:return Object(ue.a)({},e,{isLoading:!0});case"GETCLASSLIST_SUCCESS":return Object(ue.a)({},e,{classList:Object(Ce.a)(t.payload),isLoading:!1});case"GETCLASSLIST_FAILURE":return Object(ue.a)({},e,{isLoading:!1,error:t.payload});case T:return Object(ue.a)({},e,{isLoading:!0});case"SEND_MESSAGES_SUCCESS":return Object(ue.a)({},e,{isLoading:!1});case"SEND_MESSAGES_FAILURE":return Object(ue.a)({},e,{isLoading:!1,error:t.payload});case A:return Object(ue.a)({},e,{isLoading:!0});case"UPDATE_AIRTABLE_SUCCESS":return Object(ue.a)({},e,{kids:e.kids.map(function(t){for(var a=e.kids,n=0;n<a.length;n++)a[n].isSelected&&(t.isSelected=!1);return t}),isLoading:!1});case"UPDATE_AIRTABLE_FAILURE":return Object(ue.a)({},e,{isLoading:!1,error:t.payload});case"SELECT_KID":return Object(ue.a)({},e,{kids:e.kids.map(function(e){return e.id===t.payload&&(e.isSelected=!e.isSelected),e})});case"SELECT_ALL":return Object(ue.a)({},e,{kids:e.kids.map(function(e){for(var a=t.payload,n=0;n<a.length;n++)e.id===a[n].id&&(e.isSelected=!0);return e})});case"UNSELECT_ALL":return Object(ue.a)({},e,{kids:e.kids.map(function(e){for(var a=t.payload,n=0;n<a.length;n++)e.id===a[n].id&&(e.isSelected=!1);return e})});case"SEARCH":return Object(ue.a)({},e,{searchVal:t.payload});case"FILTER_KID":return Object(ue.a)({},e,{filterVal:t.payload,kids:e.kids.map(function(e){return e.isSelected&&(e.isSelected=!1),e})});default:return e}},xe=a(12),_e=a.n(xe),Ne=a(17),Re=a(56),Ue=a(57),Ke=a.n(Ue),De={baseURL:"https://api.airtable.com/v0",timeout:7e3},Fe=function(e){var t=Object(ue.a)({},De,e),a=Ke.a.create(t);return function(){var e=Object(Re.a)(_e.a.mark(function e(t){var n,r,c,o;return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("getKidList"),n="/".concat("app8JrpvvNCWIOQAN","/").concat(t,"?api_key=").concat("keyfPK5EI1cgILohx","&view=Kids"),e.next=5,a.get(n);case 5:if(200===(r=e.sent).status){e.next=8;break}throw new Error("Server Error");case 8:return c=(new Date).getDate(),console.log(r.data),o=r.data.records.map(function(e){var a=e.fields;return{id:a.Id,name:a.Name,contactIds:a.hasOwnProperty("ContactIds")?a.ContactIds.split(";"):[],avatar:a.hasOwnProperty("Avatar")?a.Avatar:"",status:a.hasOwnProperty(c)?a[c]:"",recordId:e.id,class:t}}),console.log("GetKidList"),console.log(o),e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(0),e.t0;case 19:case"end":return e.stop()}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()},Me=function(e){var t=Object(ue.a)({},De,e),a=Ke.a.create(t);return function(){var e=Object(Re.a)(_e.a.mark(function e(){var t,n,r;return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("getKidList"),t="/".concat("app8JrpvvNCWIOQAN","/Class?api_key=").concat("keyfPK5EI1cgILohx","&view=Classes"),console.log(t),e.next=6,a.get(t);case 6:if(200===(n=e.sent).status){e.next=9;break}throw new Error("Server Error");case 9:return console.log(n),r=n.data.records.map(function(e){return e.fields.ClassName}),e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}},e,null,[[0,14]])}));return function(){return e.apply(this,arguments)}}()},Ge=function(e){var t=Object(ue.a)({},De,e),a=Ke.a.create(t);return function(){var e=Object(Re.a)(_e.a.mark(function e(t){var n,r,c,o,s,l;return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=23;break}if(!t[n].isSelected){e.next=20;break}return e.prev=3,console.log("updateAirTable"),r="/".concat("app8JrpvvNCWIOQAN","/").concat(t[n].class,"/").concat(t[n].recordId,"/?api_key=").concat("keyfPK5EI1cgILohx"),c=(new Date).getDate(),o={fields:{currentDay:t[n].status}},console.log(r),s=JSON.stringify(o).replace("currentDay",c.toString()),console.log(JSON.stringify(o).replace("currentDay",c.toString())),e.next=13,a.patch(r,JSON.parse(s));case 13:l=e.sent,console.log(l),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0);case 20:n++,e.next=1;break;case 23:case"end":return e.stop()}},e,null,[[3,17]])}));return function(t){return e.apply(this,arguments)}}()},Be="mELtlMAHYqR0BvgEiMq8zVek3uYUK3OJMbtyrdNPTrQB9ndV0fM7lWTFZbM4MZvD",Pe={baseURL:"https://api.chatfuel.com/bots/".concat("5d5c2aaffdaf79000144292a","/users"),timeout:7e3},Ve=function(e){var t=Object(ue.a)({},Pe,e),a=Ke.a.create(t);return function(){var e=Object(Re.a)(_e.a.mark(function e(t,n){var r,c,o,s,l,i,u,d,p;return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,r=!1,e.t0=n,e.next="\u0110i h\u1ecdc"===e.t0?5:"\u0110\xe3 v\u1ec1"===e.t0?7:"Ngh\u1ec9 c\xf3 ph\xe9p"===e.t0?9:"Ngh\u1ec9 kh\xf4ng ph\xe9p"===e.t0?11:13;break;case 5:return c="_DiHoc",e.abrupt("break",13);case 7:return c="_VeNha",e.abrupt("break",13);case 9:return c="_NghiHoc_CoPhep",e.abrupt("break",13);case 11:return c="_NghiHoc",e.abrupt("break",13);case 13:o=encodeURI(t.name),s=0;case 15:if(!(s<t.contactIds.length)){e.next=31;break}return l=t.contactIds?t.contactIds[s].trim():"",i="",u="",d="",l.startsWith("m/")?(i="Messenger",l=l.replace("m/",""),d=i+c,u="/".concat(l,"/send?chatfuel_token=").concat(Be,"&chatfuel_message_tag=NON_PROMOTIONAL_SUBSCRIPTION&chatfuel_block_name=").concat(d,"&name=").concat(o)):l.startsWith("m/")&&(i="Zalo",p=l.replace("z/",""),u="/".concat("2612331648778972","/send?chatfuel_token=").concat(Be,"&chatfuel_message_tag=NON_PROMOTIONAL_SUBSCRIPTION&chatfuel_block_name=").concat(d,"&name=").concat(o,"&zaloId=").concat(p)),console.log("sendMessages "),console.log(u),e.next=25,a.post(u);case 25:200!==e.sent.status&&(r=r||!1),r=!0;case 28:s++,e.next=15;break;case 31:return e.abrupt("return",r);case 34:throw e.prev=34,e.t1=e.catch(0),e.t1;case 37:case"end":return e.stop()}},e,null,[[0,34]])}));return function(t,a){return e.apply(this,arguments)}}()},We=_e.a.mark(Xe),Je=_e.a.mark(et),He=_e.a.mark(tt),ze=_e.a.mark(at),Qe=_e.a.mark(nt),Ye=_e.a.mark(rt),Ze=_e.a.mark(ct),qe=_e.a.mark(ot),$e=_e.a.mark(st);function Xe(e){var t,a,n;return _e.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("runGetKidList"+e.payload),t=e.payload,r.prev=2,a=Fe(),r.next=6,Object(Ne.b)(a,t);case 6:return n=r.sent,r.next=9,Object(Ne.d)(N.success(n));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(Ne.d)(N.failure(r.t0));case 15:case"end":return r.stop()}},We,null,[[2,11]])}function et(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchGetKidList"),e.next=3,Object(Ne.e)(j,Xe);case 3:case"end":return e.stop()}},Je)}function tt(e){var t,a;return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Me(),e.next=4,Object(Ne.b)(t);case 4:return a=e.sent,e.next=7,Object(Ne.d)(R.success(a));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object(Ne.d)(R.failure(e.t0));case 13:case"end":return e.stop()}},He,null,[[0,9]])}function at(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchGetClassList"),e.next=3,Object(Ne.e)(C,tt);case 3:case"end":return e.stop()}},ze)}function nt(e){var t,a,n,r;return _e.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:console.log("runSendMessages"),t=e.payload.kidList,a=e.payload.messageType,n=0;case 4:if(!(n<t.length)){c.next=25;break}if(!t[n].isSelected){c.next=22;break}return c.prev=6,r=Ve(),c.next=10,Object(Ne.b)(r,t[n],a);case 10:if(!c.sent){c.next=15;break}return t[n].status=a,c.next=15,Object(Ne.d)(x.success(t[n]));case 15:c.next=22;break;case 17:return c.prev=17,c.t0=c.catch(6),console.log(c.t0),c.next=22,Object(Ne.d)(x.failure(c.t0));case 22:n++,c.next=4;break;case 25:return c.next=27,Object(Ne.d)(_.start(t));case 27:case"end":return c.stop()}},Qe,null,[[6,17]])}function rt(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchSendMessages"),e.next=3,Object(Ne.e)(T,nt);case 3:case"end":return e.stop()}},Ye)}function ct(e){var t,a,n;return _e.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("runUpdateAirTable"),t=e.payload,r.prev=2,a=Ge(),r.next=6,Object(Ne.b)(a,t);case 6:return n=r.sent,r.next=9,Object(Ne.d)(_.success(n));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(Ne.d)(_.failure(r.t0));case 15:case"end":return r.stop()}},Ze,null,[[2,11]])}function ot(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("watchUpdateAirTable"),e.next=3,Object(Ne.e)(A,ct);case 3:case"end":return e.stop()}},qe)}function st(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("rootSaga"),e.next=3,Object(Ne.a)([Object(Ne.c)(et),Object(Ne.c)(at),Object(Ne.c)(rt),Object(Ne.c)(ot)]);case 3:case"end":return e.stop()}},$e)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(152);var lt=Object(d.a)(),it=Object(i.createStore)(Ae,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(lt)));o.a.render(r.a.createElement(s.a,{store:it},r.a.createElement(l.a,{basename:""},r.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),lt.run(st)}},[[113,1,2]]]);
//# sourceMappingURL=main.861563ee.chunk.js.map