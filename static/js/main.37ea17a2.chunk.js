(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],[,,,,,,,,,,,function(e,t,r){e.exports={BreadTop:"style_BreadTop__2K6ig",Seed:"style_Seed__2EKd5",Second:"style_Second__2XZHE",Third:"style_Third__2AxtS",Fourth:"style_Fourth__3nhPZ",Salad:"style_Salad__1leZP",Meat:"style_Meat__1kjjk",Cheese:"style_Cheese__25RA4",Bacon:"style_Bacon__1oXk9",BreadBottom:"style_BreadBottom__1oiMK"}},,,,,,,,,function(e,t,r){e.exports={SideBar:"style_SideBar__N1rWU",Open:"style_Open__3te15",Close:"style_Close__1ciGn",Logo:"style_Logo__2yxch"}},,,function(e,t,r){e.exports={BuildControl:"style_BuildControl__3KORB",Label:"style_Label__H8Ff0",Less:"style_Less__24Kd6",More:"style_More__2tboN"}},,,,,,function(e,t,r){e.exports={Toolbar:"style_Toolbar__3Cmo7",HideOnMobile:"style_HideOnMobile__SVH8C"}},function(e,t,r){e.exports={MenuItem:"style_MenuItem__1U4A0",active:"style_active__34OiX"}},,,function(e,t,r){e.exports={BuildControls:"style_BuildControls__3eiru",OrderButton:"style_OrderButton__FIymW",enable:"style_enable__zIYvX"}},function(e,t,r){e.exports={Button:"style_Button__2tcG7",Success:"style_Success__19vk5",Danger:"style_Danger__36CDg"}},,,,,,,,,,function(e,t,r){e.exports={Content:"style_Content__2Nc2R"}},,function(e,t,r){e.exports={Logo:"style_Logo__3UGtz"}},function(e,t,r){e.exports={Menu:"style_Menu__2hD-K"}},function(e,t,r){e.exports={HamburgerMenu:"style_HamburgerMenu__1YeUb"}},function(e,t,r){e.exports={Burger:"style_Burger__1-ZPX"}},function(e,t,r){e.exports={Modal:"style_Modal__zlgrl"}},function(e,t,r){e.exports={Shadow:"style_Shadow__3sw-c"}},function(e,t,r){e.exports={Loader:"style_Loader__3YwfT",load1:"style_load1__3d8Go"}},function(e,t,r){e.exports={Order:"style_Order__2NtWf"}},function(e,t,r){e.exports={ShippingPage:"style_ShippingPage__2CEaf"}},function(e,t,r){e.exports={ContactData:"style_ContactData__3EnIN"}},function(e,t,r){e.exports={Login:"style_Login__2xuS3"}},function(e,t,r){e.exports={Signup:"style_Signup__2xbuw"}},,,,,,,function(e,t,r){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1),a=r.n(s),o=r(24),c=r.n(o),i=(r(64),r(6)),u=r(7),d=r(9),l=r(8),j=r(44),b=r.n(j),O=r(5),p=r(4),h=r(29),g=r.n(h),f=r.p+"static/media/burger-logo.ec69c7f6.png",_=r(46),x=r.n(_),m=function(){return Object(n.jsx)("div",{className:x.a.Logo,children:Object(n.jsx)("img",{src:f})})},S=r(47),y=r.n(S),v=r(15),R=r(30),E=r.n(R),C=function(e){return Object(n.jsx)("li",{className:E.a.MenuItem,children:Object(n.jsx)(v.b,{exact:e.exact,activeClassName:E.a.active,to:e.link,children:e.children})})},w=Object(p.b)((function(e){return{userId:e.signupReducer.userId}}))((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:y.a.Menu,children:e.userId?Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(C,{exact:!0,link:"/",children:"\u0428\u0418\u041d\u042d \u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410"}),Object(n.jsx)(C,{link:"/orders",children:"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410\u041d\u0423\u0423\u0414"}),Object(n.jsx)(C,{link:"/logout",children:"\u0413\u0410\u0420\u0410\u0425"})]}):Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(C,{link:"/login",children:"\u041d\u042d\u0412\u0422\u0420\u042d\u0425"}),Object(n.jsx)(C,{link:"/signup",children:"\u0411\u04ae\u0420\u0422\u0413\u04ae\u04ae\u041b\u042d\u0425"})]})})})})),N=r(48),I=r.n(N),k=function(e){return Object(n.jsxs)("div",{onClick:e.toggleSideBar,className:I.a.HamburgerMenu,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})},T=function(e){return Object(n.jsxs)("header",{className:g.a.Toolbar,children:[Object(n.jsx)(k,{toggleSideBar:e.toggleSideBar}),Object(n.jsx)(m,{}),Object(n.jsx)("nav",{className:g.a.HideOnMobile,children:Object(n.jsx)(w,{})})]})},D=r(11),M=r.n(D),B=function(e){return"bread-top"===e.type?Object(n.jsxs)("div",{className:M.a.BreadTop,children:[Object(n.jsx)("div",{className:M.a.Seed}),Object(n.jsx)("div",{className:"".concat(M.a.Seed," ").concat(M.a.Second)}),Object(n.jsx)("div",{className:"".concat(M.a.Seed," ").concat(M.a.Third)}),Object(n.jsx)("div",{className:"".concat(M.a.Seed," ").concat(M.a.Fourth)})]}):"salad"===e.type?Object(n.jsx)("div",{className:M.a.Salad}):"bacon"===e.type?Object(n.jsx)("div",{className:M.a.Bacon}):"meat"===e.type?Object(n.jsx)("div",{className:M.a.Meat}):"cheese"===e.type?Object(n.jsx)("div",{className:M.a.Cheese}):"bread-bottom"===e.type?Object(n.jsx)("div",{className:M.a.BreadBottom}):Object(n.jsx)("div",{children:"..."})},A=r(49),L=r.n(A),U=Object(p.b)((function(e){return{orts:e.burgerReducer.ingredients}}))(Object(O.g)((function(e){var t=Object.entries(e.orts),r=[];return t.map((function(e){for(var t=0;t<e[1];t++)r.push(Object(n.jsx)(B,{type:e[0]},"".concat(e[0]).concat(t+1)))})),0===r.length&&(r=Object(n.jsx)("p",{children:"\u0425\u0430\u0447\u0438\u0440\u0442\u0430\u0439 \u0442\u0430\u043b\u0445\u043d\u044b\u0445\u0430\u0430 \u043e\u0440\u0446\u044b\u0433 \u0441\u043e\u043d\u0433\u043e\u043d\u043e \u0443\u0443..."})),Object(n.jsxs)("div",{className:L.a.Burger,children:[Object(n.jsx)(B,{type:"bread-top"}),r,Object(n.jsx)(B,{type:"bread-bottom"})]})}))),P=r(2),G=r(23),H=r.n(G),V=function(e){return Object(n.jsxs)("div",{className:H.a.BuildControl,children:[Object(n.jsx)("div",{className:H.a.Label,children:e.orts}),Object(n.jsx)("button",{disabled:e.disabled[e.type],onClick:function(){return e.ortsHasah(e.type)},className:H.a.Less,children:"\u0425\u0430\u0441\u0430\u0445"}),Object(n.jsx)("button",{onClick:function(){return e.ortsNemeh(e.type)},className:H.a.More,children:"\u041d\u044d\u043c\u044d\u0445"})]})},F=r(33),X=r.n(F),K=Object(p.b)((function(e){return{burgeriinOrts:e.burgerReducer.ingredients,price:e.burgerReducer.totalPrice,purchasing:e.burgerReducer.purchasing,ingredientNames:e.burgerReducer.ingredientNames}}),(function(e){return{ortsNemeh:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ortsNer:e}}(t))},ortsHasah:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ortsNer:e}}(t))}}}))((function(e){var t=Object(P.a)({},e.burgeriinOrts);for(var r in t)t[r]=t[r]<=0;return Object(n.jsxs)("div",{className:X.a.BuildControls,children:[Object(n.jsxs)("p",{children:["\u0411\u0443\u0440\u0433\u0435\u0440\u0438\u0439\u043d \u04af\u043d\u044d : ",Object(n.jsx)("strong",{children:e.price})]}),Object.keys(e.ingredientNames).map((function(r){return Object(n.jsx)(V,{ortsHasah:e.ortsHasah,ortsNemeh:e.ortsNemeh,disabled:t,type:r,orts:e.ingredientNames[r]},r)})),Object(n.jsx)("button",{onClick:e.showConfirmModal,disabled:!e.purchasing,className:X.a.OrderButton,children:"\u0417\u0410\u0425\u0418\u0410\u041b\u0410\u0425"})]})})),W=r(50),z=r.n(W),Y=r(51),Z=r.n(Y),J=function(e){return e.show?Object(n.jsx)("div",{onClick:e.darahad,className:Z.a.Shadow}):null},q=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(J,{show:e.show,darahad:e.closeConfirmModal}),Object(n.jsx)("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},className:z.a.Modal,children:e.children})]})},$=r(34),Q=r.n($),ee=function(e){return Object(n.jsx)("button",{onClick:e.daragdsan,className:"".concat(Q.a.Button," ").concat(Q.a[e.btnType]),children:e.text})},te=Object(p.b)((function(e){return{ingredients:e.burgerReducer.ingredients,ingredientNames:e.burgerReducer.ingredientNames,price:e.burgerReducer.totalPrice}}))((function(e){return console.log("sum",e),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430"}),Object(n.jsx)("p",{children:"\u0422\u0430\u043d\u044b \u0441\u043e\u043d\u0433\u043e\u0441\u043e\u043d \u043e\u0440\u0446\u0443\u0443\u0434: "}),Object(n.jsx)("ul",{children:Object.keys(e.ingredients).map((function(t){return Object(n.jsxs)("li",{children:[e.ingredientNames[t]," : ",e.ingredients[t]]},t)}))}),Object(n.jsx)("p",{children:Object(n.jsxs)("strong",{children:["\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u044b\u043d \u0434\u04af\u043d: ",e.price,"\u20ae "]})}),Object(n.jsx)("p",{children:"\u0426\u0430\u0430\u0448\u0430\u0430 \u04af\u0440\u0433\u044d\u043b\u0436\u043b\u04af\u04af\u043b\u044d\u0445 \u04af\u04af?"}),Object(n.jsx)(ee,{daragdsan:e.onCancel,btnType:"Danger",text:"\u0422\u0410\u0422\u0413\u0410\u041b\u0417\u0410\u0425"}),Object(n.jsx)(ee,{daragdsan:e.onContinue,btnType:"Success",text:"\u04ae\u0420\u0413\u042d\u041b\u0416\u041b\u04ae\u04ae\u041b\u042d\u0425"})]})})),re=r(19),ne=r.n(re),se=ne.a.create({baseURL:"https://burger-f0c8c-default-rtdb.firebaseio.com/"}),ae=r(52),oe=r.n(ae),ce=function(){return Object(n.jsx)("div",{className:oe.a.Loader})},ie=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={confirmOrder:!1},e.continueOrder=function(){e.props.history.push("/ship")},e.showConfirmModal=function(){e.setState({confirmOrder:!0})},e.closeConfirmModal=function(){e.setState({confirmOrder:!1})},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(q,{closeConfirmModal:this.closeConfirmModal,show:this.state.confirmOrder,children:this.state.loading?Object(n.jsx)(ce,{}):Object(n.jsx)(te,{onCancel:this.closeConfirmModal,onContinue:this.continueOrder})}),Object(n.jsx)(U,{}),Object(n.jsx)(K,{showConfirmModal:this.showConfirmModal,ortsHasah:this.props.burgereesOrtsHas,ortsNemeh:this.props.burgertOrtsNem})]})}}]),r}(s.Component),ue=r(20),de=r.n(ue),le=function(e){var t=[de.a.SideBar,de.a.Close];return e.showSidebar&&(t=[de.a.SideBar,de.a.Open]),Object(n.jsxs)("div",{children:[Object(n.jsx)(J,{show:e.showSidebar,darahad:e.toggleSideBar}),Object(n.jsxs)("div",{onClick:e.toggleSideBar,className:t.join(" "),children:[Object(n.jsx)("div",{className:de.a.Logo,children:Object(n.jsx)(m,{})}),Object(n.jsx)(w,{})]})]})},je=(r(87),r(53)),be=r.n(je),Oe=function(e){return Object(n.jsxs)("div",{className:be.a.Order,children:[Object(n.jsxs)("p",{children:["\u041e\u0440\u0446 : \u0413\u0430\u0445\u0430\u0439\u043d \u043c\u0430\u0445 : ",e.order.orts.bacon,", \u0421\u0430\u043b\u0430\u0434 :"," ",e.order.orts.salad,", \u04ae\u0445\u0440\u0438\u0439\u043d \u043c\u0430\u0445 : ",e.order.orts.meet,", \u0411\u044f\u0441\u043b\u0430\u0433 :"," ",e.order.orts.cheese]}),Object(n.jsxs)("p",{children:["\u0425\u0430\u044f\u0433 : ",e.order.hayag.name," | ",e.order.hayag.street," |",e.order.hayag.city]}),Object(n.jsxs)("p",{children:["\u04ae\u043d\u0438\u0439\u043d \u0434\u04af\u043d : ",Object(n.jsxs)("strong",{children:[e.order.dun,"\u20ae"]})]})]})},pe=function(){return{type:"LOAD_ORDERS_START"}},he=function(e){return{type:"LOAD_ORDERS_SUCCESS",orders:e}},ge=function(e){return{type:"LOAD_ORDERS_ERROR",error:e}},fe=function(){return{type:"SAVE_ORDER_START"}},_e=function(){return{type:"SAVE_ORDER_SUCCESS"}},xe=function(e){return{type:"SAVE_ORDER_ERROR",errorMessage:e}},me=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.loadOrders(this.props.userId)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.props.loading?Object(n.jsx)(ce,{}):this.props.orders.map((function(e){return Object(n.jsx)(Oe,{order:e[1]},e[0])}))})}}]),r}(a.a.Component),Se=Object(p.b)((function(e){return{orders:e.orderReducer.orders,loading:e.orderReducer.loading,userId:e.signupReducer.userId,token:e.signupReducer.token}}),(function(e){return{loadOrders:function(t){return e(function(e){return function(t,r){t(pe());var n=r().signupReducer.token;se.get("orders.json?&auth=".concat(n,'&orderBy="userId"&equalTo="').concat(e,'"')).then((function(e){var r=Object.entries(e.data).reverse();t(he(r))})).catch((function(e){return t(ge(e))}))}}(t))}}}))(me),ye=r(54),ve=r.n(ye),Re=r(55),Ee=r.n(Re),Ce=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={name:null,city:null,street:null},e.changeName=function(t){e.setState({name:t.target.value})},e.changeStreet=function(t){e.setState({street:t.target.value})},e.changeCity=function(t){e.setState({city:t.target.value})},e.saveOrder=function(){var t={userId:e.props.userId,orts:e.props.ingredients,dun:e.props.price,hayag:{name:e.state.name,city:e.state.city,street:e.state.street}};e.props.saveOrderAction(t)},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(){this.props.newOrderStatus.finished&&!this.props.newOrderStatus.error&&this.props.history.replace("/orders")}},{key:"render",value:function(){return console.log(this.props),Object(n.jsxs)("div",{className:Ee.a.ContactData,children:["\u0414\u04af\u043d : ",this.props.price,"\u20ae",Object(n.jsx)("div",{children:this.props.newOrderStatus.error&&"\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u044b\u0433 \u0445\u0430\u0434\u0433\u0430\u043b\u0430\u0445 \u044f\u0432\u0446\u0430\u0434 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430 : ".concat(this.props.newOrderStatus.error)}),this.props.newOrderStatus.saving?Object(n.jsx)(ce,{}):Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{onChange:this.changeName,type:"text",name:"name",placeholder:"\u0422\u0430\u043d\u044b \u043d\u044d\u0440"}),Object(n.jsx)("input",{onChange:this.changeStreet,type:"text",name:"street",placeholder:"\u0422\u0430\u043d\u044b \u0433\u044d\u0440\u0438\u0439\u043d \u0445\u0430\u044f\u0433"}),Object(n.jsx)("input",{onChange:this.changeCity,type:"text",name:"city",placeholder:"\u0422\u0430\u043d\u044b \u0445\u043e\u0442"}),Object(n.jsx)(ee,{text:"\u0418\u041b\u0413\u042d\u042d\u0425",btnType:"Success",daragdsan:this.saveOrder})]})]})}}]),r}(a.a.Component),we=Object(p.b)((function(e){return{price:e.burgerReducer.totalPrice,ingredients:e.burgerReducer.ingredients,newOrderStatus:e.orderReducer.newOrder,userId:e.signupReducer.userId}}),(function(e){return{saveOrderAction:function(t){return e(function(e){return function(t,r){t(fe());var n=r().signupReducer.token;se.post("/orders.json?auth=".concat(n),e).then((function(e){t(_e())})).catch((function(e){t(xe(e))}))}}(t))}}}))(Object(O.g)(Ce)),Ne=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).cancelOrder=function(){e.props.history.goBack()},e.showContactData=function(){e.props.history.replace("/ship/contact")},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:ve.a.ShippingPage,children:[Object(n.jsx)("p",{style:{fontSize:"24px"},children:Object(n.jsx)("strong",{children:"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430 \u0430\u043c\u0442\u0442\u0430\u0439 \u0431\u0430\u0439\u0445 \u0431\u043e\u043b\u043d\u043e \u0433\u044d\u0436 \u043d\u0430\u0439\u0434\u0430\u0436 \u0431\u0430\u0439\u043d\u0430..."})}),Object(n.jsx)("p",{style:{fontSize:"24px"},children:Object(n.jsxs)("strong",{children:["\u0414\u04af\u043d : ",this.props.price,"\u20ae"]})}),Object(n.jsx)(U,{}),Object(n.jsx)(ee,{daragdsan:this.cancelOrder,btnType:"Danger",text:"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u042b\u0413 \u0426\u0423\u0426\u041b\u0410\u0425"}),Object(n.jsx)(ee,{daragdsan:this.showContactData,btnType:"Success",text:"\u0425\u04ae\u0420\u0413\u042d\u041b\u0422\u0418\u0419\u041d \u041c\u042d\u0414\u042d\u042d\u041b\u042d\u041b \u041e\u0420\u0423\u0423\u041b\u0410\u0425"}),Object(n.jsx)(O.b,{path:"/ship/contact",children:Object(n.jsx)(we,{})})]})}}]),r}(a.a.Component),Ie=Object(p.b)((function(e){return{price:e.burgerReducer.totalPrice}}))(Ne),ke=r(56),Te=r.n(ke),De=function(){return{type:"SIGNUP_USER_START"}},Me=function(e,t){return{type:"SIGNUP_USER_SUCCESS",token:e,userId:t}},Be=function(e){return{type:"SIGNUP_USER_ERROR",error:e}},Ae=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("refreshToken"),localStorage.removeItem("expireDate"),{type:"LOGOUT"}},Le=function(e){return function(t){setTimeout((function(){t(Ae())}),e)}},Ue=function(){return{type:"LOGIN_USER_START"}},Pe=function(e,t){return{type:"LOGIN_USER_SUCCESS",token:e,userId:t}},Ge=function(e){return{type:"LOGIN_USER_ERROR",error:e}},He=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword=function(t){e.setState({password:t.target.value})},e.login=function(){e.props.login(e.state.email,e.state.password)},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:Te.a.Login,children:[this.props.userId&&Object(n.jsx)(O.a,{to:"/orders"}),Object(n.jsx)("input",{onChange:this.changeEmail,type:"text",placeholder:"\u0418\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433"}),Object(n.jsx)("input",{onChange:this.changePassword,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433"}),this.props.logginIn&&Object(n.jsx)(ce,{}),this.props.firebaseError&&Object(n.jsxs)("div",{style:{color:"red"},children:[" ",this.props.firebaseError," \u043a\u043e\u0434 \u043d\u044c : ",this.props.firebaseErrorCode]}),Object(n.jsx)(ee,{text:"\u041b\u041e\u0413\u0418\u041d",btnType:"Success",daragdsan:this.login})]})}}]),r}(s.Component),Ve=Object(p.b)((function(e){return{logginIn:e.signupReducer.logginIn,firebaseError:e.signupReducer.firebaseError,firebaseErrorCode:e.signupReducer.firebaseErrorCode,userId:e.signupReducer.userId}}),(function(e){return{login:function(t,r){return e(function(e,t){return function(r){r(Ue());var n={email:e,password:t,returnSecureToken:!0};ne.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAW9ah3YgK9CO7CDF90tNtC8VadEX1e5lM",n).then((function(e){var t=e.data.idToken,n=e.data.localId,s=e.data.refreshToken,a=e.data.expiresIn,o=new Date((new Date).getTime()+1e3*a);localStorage.setItem("token",t),localStorage.setItem("userId",n),localStorage.setItem("refreshToken",s),localStorage.setItem("expireDate",o),r(Pe(t,n)),r(Le(1e3*a))})).catch((function(e){r(Ge(e))}))}}(t,r))}}}))(He),Fe=r(57),Xe=r.n(Fe),Ke=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password1:"",password2:"",error:""},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword1=function(t){e.setState({password1:t.target.value})},e.changePassword2=function(t){e.setState({password2:t.target.value})},e.signup=function(){e.state.password1===e.state.password2?e.props.signupUser(e.state.email,e.state.password1):e.setState({error:"\u041d\u0443\u0443\u0446 \u04af\u0433\u043d\u04af\u04af\u0434 \u0445\u043e\u043e\u0440\u043e\u043d\u0434\u043e\u043e \u0442\u0430\u0430\u0440\u0430\u0445\u0433\u04af\u0439 \u0431\u0430\u0439\u043d\u0430!"})},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:Xe.a.Signup,children:[this.props.userId&&Object(n.jsx)(O.a,{to:"/"}),Object(n.jsx)("h1",{children:"\u0411\u04af\u0440\u0442\u0433\u044d\u043b\u0438\u0439\u043d \u0444\u043e\u0440\u043c"}),Object(n.jsx)("div",{children:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u043c\u044d\u0434\u044d\u044d\u043b\u043b\u044d\u044d \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}),Object(n.jsx)("input",{onChange:this.changeEmail,type:"text",placeholder:"\u0418\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433"}),Object(n.jsx)("input",{onChange:this.changePassword1,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433\u044d\u044d \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}),Object(n.jsx)("input",{onChange:this.changePassword2,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433\u044d\u044d \u0434\u0430\u0432\u0442\u0430\u043d \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}),this.state.error&&Object(n.jsx)("div",{style:{color:"red"},children:this.state.error}),this.props.firebaseError&&Object(n.jsx)("div",{style:{color:"red"},children:this.props.firebaseError}),this.props.saving&&Object(n.jsx)(ce,{}),Object(n.jsx)(ee,{text:"\u0411\u04ae\u0420\u0422\u0413\u04ae\u04ae\u041b\u042d\u0425",btnType:"Success",daragdsan:this.signup})]})}}]),r}(s.Component),We=Object(p.b)((function(e){return{saving:e.signupReducer.saving,firebaseError:e.signupReducer.firebaseError,userId:e.signupReducer.userId}}),(function(e){return{signupUser:function(t,r){return e(function(e,t){return function(r){r(De());var n={email:e,password:t,returnSecureToken:!0};ne.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAW9ah3YgK9CO7CDF90tNtC8VadEX1e5lM",n).then((function(e){var t=e.data.idToken,n=e.data.localId;localStorage.setItem("token",t),localStorage.setItem("userId",n),r(Me(t,n))})).catch((function(e){r(Be(e))}))}}(t,r))}}}))(Ke),ze=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){e.props.logout()},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsx)(O.a,{to:"/"})}}]),r}(a.a.Component),Ye=Object(p.b)(null,(function(e){return{logout:function(){return e(Ae())}}}))(ze),Ze=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={showSidebar:!1},e.toggleSideBar=function(){e.setState((function(e){return{showSidebar:!e.showSidebar}}))},e.componentDidMount=function(){var t=localStorage.getItem("token"),r=localStorage.getItem("userId"),n=new Date(localStorage.getItem("expireDate"));localStorage.getItem("refreshToken");t&&(n>new Date?(e.props.autoLogin(t,r),e.props.autoLogoutAfterMillisec(n.getTime()-(new Date).getTime())):e.props.logout())},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{toggleSideBar:this.toggleSideBar}),Object(n.jsx)(le,{showSidebar:this.state.showSidebar,toggleSideBar:this.toggleSideBar}),Object(n.jsx)("main",{className:b.a.Content,children:this.props.userId?Object(n.jsxs)(O.d,{children:[Object(n.jsx)(O.b,{path:"/logout",component:Ye}),Object(n.jsx)(O.b,{path:"/orders",component:Se}),Object(n.jsx)(O.b,{path:"/ship",component:Ie}),Object(n.jsx)(O.b,{path:"/",component:ie})]}):Object(n.jsxs)(O.d,{children:[Object(n.jsx)(O.b,{path:"/signup",component:We}),Object(n.jsx)(O.b,{path:"/login",component:Ve}),Object(n.jsx)(O.a,{to:"/login"})]})})]})}}]),r}(s.Component),Je=Object(p.b)((function(e){return{userId:e.signupReducer.userId}}),(function(e){return{autoLogin:function(t,r){return e(Pe(t,r))},autoLogoutAfterMillisec:function(){return e(Le())}}}))(Ze);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=r(17),$e=r(58),Qe=r(22),et={ingredients:{salad:0,cheese:0,bacon:0,meat:0},totalPrice:1e3,purchasing:!1,ingredientNames:{bacon:"\u0413\u0430\u0445\u0430\u0439\u043d \u043c\u0430\u0445",cheese:"\u0411\u044f\u0441\u043b\u0430\u0433",meat:"\u04ae\u0445\u0440\u0438\u0439\u043d \u043c\u0430\u0445",salad:"\u0421\u0430\u043b\u0430\u0434"}},tt={salad:150,cheese:250,bacon:800,meat:1500},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;if("ADD_INGREDIENT"===t.type)return Object(P.a)(Object(P.a)({},e),{},{ingredients:Object(P.a)(Object(P.a)({},e.ingredients),{},Object(Qe.a)({},t.ortsNer,e.ingredients[t.ortsNer]+1)),totalPrice:e.totalPrice+tt[t.ortsNer],purchasing:!0});if("REMOVE_INGREDIENT"===t.type){var r=e.totalPrice-tt[t.ortsNer];return Object(P.a)(Object(P.a)({},e),{},{ingredients:Object(P.a)(Object(P.a)({},e.ingredients),{},Object(Qe.a)({},t.ortsNer,e.ingredients[t.ortsNer]-1)),totalPrice:r,purchasing:r>1e3})}return e},nt={orders:[],loading:!1,error:null,newOrder:{saving:!1,finished:!1,error:null}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ORDERS_START":return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case"LOAD_ORDERS_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{loading:!1,orders:t.orders});case"LOAD_ORDERS_ERROR":return Object(P.a)(Object(P.a)({},e),{},{loading:!1,error:t.error});case"SAVE_ORDER_START":return Object(P.a)(Object(P.a)({},e),{},{newOrder:Object(P.a)(Object(P.a)({},e.newOrder),{},{saving:!0})});case"SAVE_ORDER_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{newOrder:Object(P.a)(Object(P.a)({},e.newOrder),{},{saving:!1,finished:!0,error:null})});case"SAVE_ORDER_ERROR":return Object(P.a)(Object(P.a)({},e),{},{newOrder:Object(P.a)(Object(P.a)({},e.newOrder),{},{saving:!1,finished:!0,error:t.errorMessage})});default:return e}},at={saving:!1,logginIn:!1,firebaseError:null,firebaseErrorCode:null,token:null,userId:null},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_USER_START":return Object(P.a)(Object(P.a)({},e),{},{saving:!0});case"SIGNUP_USER_ERROR":return Object(P.a)(Object(P.a)({},e),{},{saving:!1,firebaseError:t.error.response.data.error.message});case"SIGNUP_USER_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{saving:!1,token:t.token,userId:t.userId});case"LOGIN_USER_START":return Object(P.a)(Object(P.a)({},e),{},{logginIn:!0});case"LOGIN_USER_ERROR":return Object(P.a)(Object(P.a)({},e),{},{logginIn:!1,firebaseError:t.error.response.data.error.message,firebaseErrorCode:t.error.response.data.error.code});case"LOGIN_USER_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{logginIn:!1,token:t.Token,userId:t.userId});case"LOGOUT":return Object(P.a)(Object(P.a)({},e),{},{token:null,userId:null,firebaseError:null,firebaseErrorCode:null});default:return e}},ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||qe.d,it=Object(qe.c)({burgerReducer:rt,orderReducer:st,signupReducer:ot}),ut=[function(e){return function(t){return function(r){console.log("MyLoggerMiddleware: Dispatching ==> ",r),console.log("MyLoggerMiddleware: State BEFORE : ",e.getState());var n=t(r);return console.log("MyLoggerMiddleware: State AFTER : ",e.getState()),n}}},$e.a],dt=Object(qe.e)(it,ct(qe.a.apply(void 0,ut)));c.a.render(Object(n.jsx)(p.a,{store:dt,children:Object(n.jsx)(v.a,{children:Object(n.jsx)(Je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[88,1,2]]]);
//# sourceMappingURL=main.37ea17a2.chunk.js.map