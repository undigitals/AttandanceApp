(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{335:function(e,t,n){"use strict";n.d(t,"a",(function(){return ue}));var a=n(306),r=n(0),s=n.n(r),o=n(304),i=n(420),l={prefixes:[n(307).makeUrl("/")],config:{initialRouteName:"Home",screens:{Home:"home",Settings:"settings",NotFound:"*"}}},c=n(3),u=n.n(c),d=n(4),f=n(58),j=n.n(f),g=n(27),m=n.n(g),p=n(65),b=n.n(p),h=n(16),v=n(43),y=n(6),E=n(323),k=function(e){var t=e.text,n=e.style,a=e.loading,r=e.containerStyle,o=b()(e,["text","style","loading","containerStyle"]);return s.a.createElement(y.a,{style:[S.buttonContainer,r]},s.a.createElement(v.a,m()({style:[S.button,n]},o),a?s.a.createElement(E.a,{color:"#fff"}):s.a.createElement(h.a,{style:S.buttonText},t)))},S=d.a.create({buttonContainer:{width:"50%",paddingHorizontal:15,marginVertical:20},button:{width:"100%",backgroundColor:"#216ef6",borderRadius:6,alignItems:"center",justifyContent:"center",padding:15},buttonText:{fontSize:18,fontWeight:"bold",color:"#fff",textAlign:"center"}}),O=n(7),x=n.n(O),w=n(8),T=n(61),z=n(327),C=n(135),I=n(47),N=n(2),D=n.n(N),P=function(){var e,t=Object(r.useState)((new Date).toLocaleString()),n=x()(t,2),a=(n[0],n[1]);return Object(r.useEffect)((function(){var e=setInterval((function(){a((new Date).toLocaleString())}),1e3);return function(){return clearInterval(e)}}),[]),s.a.createElement(y.a,{style:R.container},s.a.createElement(y.a,{style:R.outerCircle},s.a.createElement(y.a,{style:R.innerCircle},(e=D()().format("LTS"),s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{style:R.clockText1},""+e.slice(0,-2)),s.a.createElement(h.a,{style:R.clockText2},""+e.slice(-2)))))))},R=d.a.create({container:{width:"100%",paddingHorizontal:15,alignItems:"center"},outerCircle:{width:200,height:200,borderRadius:100,borderWidth:1,alignItems:"center",justifyContent:"center"},innerCircle:{width:190,height:190,borderRadius:95,borderWidth:1,alignItems:"center",justifyContent:"center"},clockText1:{fontSize:38,fontWeight:"bold",textAlign:"center"},clockText2:{fontSize:28.5,fontWeight:"bold",textAlign:"center"}});Number.prototype.toRad=function(){return this*Math.PI/180};var L=function(e,t,n,a,r){console.log("officeLatitude=",e,"officeLongitude=",t,"currentLatitude=",n,"currentLongitude=",a);var s=(n-e).toRad(),o=(a-t).toRad(),i=Math.sin(s/2)*Math.sin(s/2)+e.toRad()*Math.cos(n.toRad())*Math.sin(o/2)*Math.sin(o/2),l=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)),c=parseFloat(6371*l).toFixed(2);console.log("result:",c);var u=parseFloat(r).toFixed(2);return c-u>0?{isInRadius:!1,distanceToRadius:c-u,distanceToDestination:c}:{isInRadius:!0,distanceToRadius:c-u,distanceToDestination:c}};var F=n(25),M=n(52),_=function(){var e,t,n=Object(F.useNavigation)(),a=Object(r.useState)(null),o=x()(a,2),i=o[0],l=o[1],c=Object(r.useState)(!1),d=x()(c,2),f=d[0],g=d[1],m=Object(r.useState)(null),p=x()(m,2),b=p[0],E=p[1],S=Object(r.useState)(null),O=x()(S,2),N=O[0],R=O[1],_=Object(r.useState)(!1),J=x()(_,2),W=J[0],A=J[1],V=Object(r.useState)(0),q=x()(V,2),B=q[0],U=q[1],G=Object(r.useState)(0),K=x()(G,2),X=K[0],Q=K[1],Y=Object(r.useState)({latitude:37.634616,longitude:126.832663,radius:5}),Z=x()(Y,2),$=Z[0],ee=Z[1],te=Object(r.useState)(!1),ne=x()(te,2),ae=ne[0],re=ne[1],se=Object(r.useState)([]),oe=x()(se,2),ie=oe[0],le=oe[1],ce=Object(r.useState)(!1),ue=x()(ce,2),de=ue[0],fe=ue[1],je=Object(M.c)((function(e){return{settings:e.settings}})).settings;Object(r.useEffect)((function(){console.log("settings in currentl:",je),(null==je?void 0:je.data)&&ee({latitude:parseFloat(je.data.latitude),longitude:parseFloat(je.data.longitude).toFixed(2),radius:parseInt(je.data.radius)})}),[je]);var ge=function(){if(console.log("called"),"android"!==w.a.OS||I.a.isDevice){g(!0);!function(){var e,t;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(C.b());case 2:if(e=n.sent,"granted"===e.status){n.next=8;break}return R("not-granted"),E("Permission to access location was denied"),n.abrupt("return");case 8:return R("granted"),n.next=11,u.a.awrap(C.a({}));case 11:t=n.sent,l(t),g(!1);case 14:case"end":return n.stop()}}),null,null,null,Promise)}()}else E("Oops, this will not work on Sketch in an Android emulator. Try it on your device!")};Object(r.useEffect)((function(){ge()}),[]);var me=null==i||null==(e=i.coords)?void 0:e.latitude,pe=null==i||null==(t=i.coords)?void 0:t.longitude;Object(r.useEffect)((function(){var e=null;me&&pe&&(e=L($.latitude,$.longitude,me,pe,$.radius)),console.log("resulttttt:",e),e&&(A(e.isInRadius),U(e.distanceToRadius),Q(e.distanceToDestination))}),[me,pe]);Object(r.useEffect)((function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(j.a.getItem("attendanceHistory"));case 2:(e=t.sent)?((e=JSON.parse(e)).length>0&&"clockIn"===e[0].type&&re(!0),le(e)):le([]);case 4:case"end":return t.stop()}}),null,null,null,Promise)}),[]);var be=function(e){fe(!0);var t=D()().format("LTS");fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+pe+","+me+".json?access_token=pk.eyJ1IjoiaWFtYXBhcms4OSIsImEiOiJjanlpZmF5c3AwOXJzM2NxaDQzNWhiaDRmIn0.C-e2EpmyDtsqPbu9FjJz5Q").then((function(e){return e.json()})).then((function(n){var a;if(fe(!1),n){if(null==n||null==(a=n.features[0])?void 0:a.place_name){var r,s={clockedInTime:t,timestamp:Date.now(),placeName:null==n||null==(r=n.features[0])?void 0:r.place_name,type:e};re("clockIn"===e),function(e){var t;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(j.a.getItem("attendanceHistory"));case 3:return(t=n.sent)?(t=JSON.parse(t)).unshift(e):(t=[]).unshift(e),n.next=7,u.a.awrap(j.a.setItem("attendanceHistory",JSON.stringify(t)));case 7:le(t),console.log(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("saveSettings error:",n.t0);case 14:case"end":return n.stop()}}),null,null,[[0,11]],Promise)}(s)}}else console.log("no data:",n)})).catch((function(e){fe(!1),console.log("getAddress error:",e)}))};return s.a.createElement(T.a,{style:{backgroundColor:"#fff",flex:1},contentContainerStyle:H.container,refreshControl:s.a.createElement(z.a,{refreshing:f,onRefresh:ge})},s.a.createElement(v.a,{onPress:function(){return n.navigate("Settings")},style:H.link},s.a.createElement(h.a,{style:H.linkText},"Settings")),f&&s.a.createElement(h.a,null,"isUpdating"),b&&s.a.createElement(h.a,{style:{color:"red"}},JSON.stringify(b)),s.a.createElement(h.a,null,"GPS is ","granted"===N?"enabled":"disabled"),s.a.createElement(h.a,null,"Current position:"),s.a.createElement(h.a,null,"Latitude: ",me),s.a.createElement(h.a,null,"Longitude: ",pe),s.a.createElement(h.a,null,"isInRadius: ",JSON.stringify(W)),!W&&s.a.createElement(h.a,null,"Distance to office radius: ",B," KM"),s.a.createElement(h.a,null,"Distance to office: ",X," KM"),s.a.createElement(P,null),W&&ae?s.a.createElement(k,{text:"Clock out",style:{backgroundColor:"orange"},loading:de,onPress:function(){be("clockOut")}}):!0===W&&!0!==ae?s.a.createElement(k,{text:"Clock in",loading:de,onPress:function(){be("clockIn")}}):s.a.createElement(k,{disabled:!0,text:"Out of range",loading:de,containerStyle:{opacity:.4}}),s.a.createElement(y.a,null,ie.length>0&&ie.map((function(e){var t=e.clockedInTime,n=e.timestamp,a=e.placeName,r=e.type;return s.a.createElement(y.a,{key:n},s.a.createElement(h.a,null,t),s.a.createElement(h.a,null,r),s.a.createElement(h.a,null,a))}))))},H=d.a.create({container:{alignItems:"center",justifyContent:"flex-start",backgroundColor:"#fff",paddingHorizontal:15,paddingVertical:15},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"},paragraph:{margin:24,fontSize:18,textAlign:"center"}}),J=function(e){return function(t){t({type:"SET_SETTINGS",payload:e})}};function W(e){e.navigation;var t=Object(M.b)();return Object(r.useEffect)((function(){!function(){var e;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(j.a.getItem("settingsData"));case 3:e=null!==(e=n.sent)?JSON.parse(e):null,console.log("settingsData",e),t(J(e)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("saveSettings error:",n.t0);case 12:case"end":return n.stop()}}),null,null,[[0,9]],Promise)}()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(_,null))}d.a.create({container:{flex:1,alignItems:"center",justifyContent:"flex-start",backgroundColor:"#fff"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}});var A=n(46),V=function(e){var t=e.label,n=b()(e,["label"]);return s.a.createElement(y.a,{style:q.container},s.a.createElement(h.a,{style:q.label},t),s.a.createElement(A.a,m()({autoCapitalize:"none",secureTextEntry:!1,keyboardType:"numeric",returnKeyType:"done",underlineColorAndroid:"transparent",allowFontScaling:!1,ellipsizeMode:"head",placeholderTextColor:"rgba(0,0,0,.2)",style:[q.inputText]},n)))},q=d.a.create({container:{width:"100%",paddingHorizontal:15,marginBottom:15},label:{fontSize:16,paddingBottom:5},inputText:{borderRadius:5,borderWidth:1,borderColor:"rgba(0,0,0,.1)",width:"100%",fontSize:22,fontWeight:"bold",padding:8}});function B(e){var t=e.navigation,n=Object(r.useState)(""),a=x()(n,2),o=a[0],i=a[1],l=Object(r.useState)(""),c=x()(l,2),d=c[0],f=c[1],g=Object(r.useState)(""),m=x()(g,2),p=m[0],b=m[1],h=Object(M.b)(),v=Object(M.c)((function(e){return{settings:e.settings}})).settings;Object(r.useEffect)((function(){console.log("settings:",v),(null==v?void 0:v.data)&&(i(v.data.radius),f(v.data.latitude),b(v.data.longitude))}),[v]);var y=function(){var e;o&&d&&p?(e={radius:o,latitude:d,longitude:p},u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(j.a.setItem("settingsData",JSON.stringify(e)));case 3:h(J(e)),t.goBack(null),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("saveSettings error:",n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]],Promise)):alert("All fields are required.")};return s.a.createElement(T.a,{style:{backgroundColor:"#fff"},contentContainerStyle:G.container},s.a.createElement(U,{text:"Set clock in range"}),s.a.createElement(V,{label:"Range in KM",placeholder:"5",value:o,onChangeText:function(e){i(e)},maxLength:3}),s.a.createElement(U,{text:"Set office location"}),s.a.createElement(V,{label:"Latitude",placeholder:"36.94387897",value:d,onChangeText:function(e){f(e)}}),s.a.createElement(V,{label:"Longitude",placeholder:"31.9839897",value:p,onChangeText:function(e){b(e)}}),s.a.createElement(k,{text:"SAVE",onPress:function(){y()}}))}var U=function(e){var t=e.text;return s.a.createElement(y.a,{style:G.sectionContainer},s.a.createElement(h.a,{style:G.sectionLabel},t))},G=d.a.create({container:{flex:1,alignItems:"center",justifyContent:"flex-start",backgroundColor:"#fff"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"},sectionContainer:{width:"100%",paddingHorizontal:15},sectionLabel:{fontSize:22,fontWeight:"bold",marginVertical:10}});function K(e){var t=e.navigation;return r.createElement(y.a,{style:X.container},r.createElement(h.a,{style:X.title},"This screen doesn't exist."),r.createElement(v.a,{onPress:function(){return t.replace("Root")},style:X.link},r.createElement(h.a,{style:X.linkText},"Go to home screen!")))}var X=d.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}});function Q(){return r.createElement(o.a,{linking:l},r.createElement(Z,null))}var Y=Object(i.a)();function Z(){return r.createElement(Y.Navigator,{initialRouteName:"Home"},r.createElement(Y.Screen,{name:"Home",component:W,options:{headerTitle:"Home",headerTitleAlign:"center"}}),r.createElement(Y.Screen,{name:"Settings",component:B,options:{headerTitle:"Settings",headerTitleAlign:"center"}}),r.createElement(Y.Screen,{name:"NotFound",component:K,options:{title:"Oops!"}}))}var $=n(59),ee=n(331),te=n(31),ne=n.n(te);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){ne()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se={data:{}},oe=Object($.c)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SETTINGS":return re(re({},e),{},{data:t.payload});default:return e}}}),ie=[ee.a],le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,ce=Object($.e)(oe,{},le($.a.apply(void 0,ie)));function ue(){return s.a.createElement(M.a,{store:ce},s.a.createElement(Q,null),s.a.createElement(a.StatusBar,{style:"auto"}))}},347:function(e,t,n){n(348),e.exports=n(409)},348:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},383:function(e,t,n){var a={"./af":154,"./af.js":154,"./ar":155,"./ar-dz":156,"./ar-dz.js":156,"./ar-kw":157,"./ar-kw.js":157,"./ar-ly":158,"./ar-ly.js":158,"./ar-ma":159,"./ar-ma.js":159,"./ar-sa":160,"./ar-sa.js":160,"./ar-tn":161,"./ar-tn.js":161,"./ar.js":155,"./az":162,"./az.js":162,"./be":163,"./be.js":163,"./bg":164,"./bg.js":164,"./bm":165,"./bm.js":165,"./bn":166,"./bn.js":166,"./bo":167,"./bo.js":167,"./br":168,"./br.js":168,"./bs":169,"./bs.js":169,"./ca":170,"./ca.js":170,"./cs":171,"./cs.js":171,"./cv":172,"./cv.js":172,"./cy":173,"./cy.js":173,"./da":174,"./da.js":174,"./de":175,"./de-at":176,"./de-at.js":176,"./de-ch":177,"./de-ch.js":177,"./de.js":175,"./dv":178,"./dv.js":178,"./el":179,"./el.js":179,"./en-au":180,"./en-au.js":180,"./en-ca":181,"./en-ca.js":181,"./en-gb":182,"./en-gb.js":182,"./en-ie":183,"./en-ie.js":183,"./en-il":184,"./en-il.js":184,"./en-in":185,"./en-in.js":185,"./en-nz":186,"./en-nz.js":186,"./en-sg":187,"./en-sg.js":187,"./eo":188,"./eo.js":188,"./es":189,"./es-do":190,"./es-do.js":190,"./es-us":191,"./es-us.js":191,"./es.js":189,"./et":192,"./et.js":192,"./eu":193,"./eu.js":193,"./fa":194,"./fa.js":194,"./fi":195,"./fi.js":195,"./fil":196,"./fil.js":196,"./fo":197,"./fo.js":197,"./fr":198,"./fr-ca":199,"./fr-ca.js":199,"./fr-ch":200,"./fr-ch.js":200,"./fr.js":198,"./fy":201,"./fy.js":201,"./ga":202,"./ga.js":202,"./gd":203,"./gd.js":203,"./gl":204,"./gl.js":204,"./gom-deva":205,"./gom-deva.js":205,"./gom-latn":206,"./gom-latn.js":206,"./gu":207,"./gu.js":207,"./he":208,"./he.js":208,"./hi":209,"./hi.js":209,"./hr":210,"./hr.js":210,"./hu":211,"./hu.js":211,"./hy-am":212,"./hy-am.js":212,"./id":213,"./id.js":213,"./is":214,"./is.js":214,"./it":215,"./it-ch":216,"./it-ch.js":216,"./it.js":215,"./ja":217,"./ja.js":217,"./jv":218,"./jv.js":218,"./ka":219,"./ka.js":219,"./kk":220,"./kk.js":220,"./km":221,"./km.js":221,"./kn":222,"./kn.js":222,"./ko":223,"./ko.js":223,"./ku":224,"./ku.js":224,"./ky":225,"./ky.js":225,"./lb":226,"./lb.js":226,"./lo":227,"./lo.js":227,"./lt":228,"./lt.js":228,"./lv":229,"./lv.js":229,"./me":230,"./me.js":230,"./mi":231,"./mi.js":231,"./mk":232,"./mk.js":232,"./ml":233,"./ml.js":233,"./mn":234,"./mn.js":234,"./mr":235,"./mr.js":235,"./ms":236,"./ms-my":237,"./ms-my.js":237,"./ms.js":236,"./mt":238,"./mt.js":238,"./my":239,"./my.js":239,"./nb":240,"./nb.js":240,"./ne":241,"./ne.js":241,"./nl":242,"./nl-be":243,"./nl-be.js":243,"./nl.js":242,"./nn":244,"./nn.js":244,"./oc-lnc":245,"./oc-lnc.js":245,"./pa-in":246,"./pa-in.js":246,"./pl":247,"./pl.js":247,"./pt":248,"./pt-br":249,"./pt-br.js":249,"./pt.js":248,"./ro":250,"./ro.js":250,"./ru":251,"./ru.js":251,"./sd":252,"./sd.js":252,"./se":253,"./se.js":253,"./si":254,"./si.js":254,"./sk":255,"./sk.js":255,"./sl":256,"./sl.js":256,"./sq":257,"./sq.js":257,"./sr":258,"./sr-cyrl":259,"./sr-cyrl.js":259,"./sr.js":258,"./ss":260,"./ss.js":260,"./sv":261,"./sv.js":261,"./sw":262,"./sw.js":262,"./ta":263,"./ta.js":263,"./te":264,"./te.js":264,"./tet":265,"./tet.js":265,"./tg":266,"./tg.js":266,"./th":267,"./th.js":267,"./tk":268,"./tk.js":268,"./tl-ph":269,"./tl-ph.js":269,"./tlh":270,"./tlh.js":270,"./tr":271,"./tr.js":271,"./tzl":272,"./tzl.js":272,"./tzm":273,"./tzm-latn":274,"./tzm-latn.js":274,"./tzm.js":273,"./ug-cn":275,"./ug-cn.js":275,"./uk":276,"./uk.js":276,"./ur":277,"./ur.js":277,"./uz":278,"./uz-latn":279,"./uz-latn.js":279,"./uz.js":278,"./vi":280,"./vi.js":280,"./x-pseudo":281,"./x-pseudo.js":281,"./yo":282,"./yo.js":282,"./zh-cn":283,"./zh-cn.js":283,"./zh-hk":284,"./zh-hk.js":284,"./zh-mo":285,"./zh-mo.js":285,"./zh-tw":286,"./zh-tw.js":286};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=383}},[[347,1,2]]]);
//# sourceMappingURL=app.bb1c0ba8.chunk.js.map