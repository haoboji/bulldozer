(this.webpackJsonpbulldozer=this.webpackJsonpbulldozer||[]).push([[0],{65:function(e,t,n){},78:function(e,t){},80:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(1),l=n(0),o=n.n(l),s=n(17),d=n.n(s),j=(n(65),n(23)),b=n(102),u=n(28),h=n(4),O=n(11),m=n(21),f="SET_SITE_MAP",v="ADVANCE_BULLDOZER",x="ROTATE_BULLDOZER",g="END_SIMULATION",p=[0,1],y=[0,-1],C=[1,0],w=[-1,0],N=[[0,1],[-1,0]],L=[[0,-1],[1,0]];!function(e){e.PlainLand="o",e.RockyLand="r",e.RemovableTree="t",e.ProtectedTree="T",e.ClearedLand="c"}(a||(a={})),function(e){e[e.Starting=0]="Starting",e[e.Started=1]="Started",e[e.Error=2]="Error",e[e.Ended=3]="Ended"}(c||(c={})),function(e){e[e.Advance=0]="Advance",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.Quit=3]="Quit"}(r||(r={}));var T,z,E,M,R,P=n(103),S=n(7),V={fuelUsage:(T={},Object(S.a)(T,a.PlainLand,1),Object(S.a)(T,a.ClearedLand,1),Object(S.a)(T,a.RockyLand,2),Object(S.a)(T,a.RemovableTree,2),T),itemCost:{fuel:1,uncleard:3},terrainName:(z={},Object(S.a)(z,a.PlainLand,"Plain Land"),Object(S.a)(z,a.ClearedLand,"Cleared Land"),Object(S.a)(z,a.RockyLand,"Rocky Land"),Object(S.a)(z,a.RemovableTree,"Removable Tree"),Object(S.a)(z,a.ProtectedTree,"Preserved Tree"),z),activityName:(E={},Object(S.a)(E,a.PlainLand,"Clearing plain land"),Object(S.a)(E,a.ClearedLand,"Visiting cleared land"),Object(S.a)(E,a.RockyLand,"Clearing rocky land"),Object(S.a)(E,a.RemovableTree,"Clearing land containing a tree"),Object(S.a)(E,a.ProtectedTree,"Attempting to remove protected tree"),E),commandName:(M={},Object(S.a)(M,r.Advance,"Advance"),Object(S.a)(M,r.Right,"Right"),Object(S.a)(M,r.Left,"Left"),Object(S.a)(M,r.Quit,"Quit"),M)},k=function(e){return new Promise((function(t,n){var a=new FileReader;a.onloadend=function(){t(a.result)},a.onerror=function(){n(Error("Invalid file"))},a.readAsText(e)}))},I=function(e){var t=e.trim();if(0===t.length)throw Error("Empty map");var n=t.split("\n").map((function(e){return e.split("")}));if(n.find((function(e){return e.length!==n[0].length})))throw Error("Invalid map shape");if(n.find((function(e){return!!e.find((function(e){return e!==a.ProtectedTree&&e!==a.RemovableTree&&e!==a.RockyLand&&e!==a.PlainLand}))})))throw Error("Invalid map tile");return n},A=function(e){return e.reduce((function(e,t){return e+t.reduce((function(e,t){return t!==a.ClearedLand&&t!==a.ProtectedTree?e+V.itemCost.uncleard:e}),0)}),0)},D={map:null,bulldozer:{location:[-1,0],direction:C},status:c.Starting,commands:[],activities:[]},B=function(e){var t,n=e.bulldozer,i=e.map;if(!i)return e;var l=e.activities,o=e.commands,s=e.totalCost,d=e.unclearedCost,j=n.location,b=n.direction,u=Object(P.a)(j,b),f=Object(m.a)(u,2),v=f[0],x=f[1],g=null===(t=i[-x])||void 0===t?void 0:t[v],p=function(e,t){var n,c=Object(m.a)(e,2),r=c[0],i=c[1];return void 0!==(null===t||void 0===t||null===(n=t[-i])||void 0===n?void 0:n[r])&&t[-i][r]!==a.ProtectedTree}(u,e.map),y=p?c.Started:c.Error,C=p&&g!==a.ClearedLand?function(e,t,n,a){var c=e[n],r=[].concat(Object(O.a)(c.slice(0,a)),[t],Object(O.a)(c.slice(a+1)));return[].concat(Object(O.a)(e.slice(0,n)),[r],Object(O.a)(e.slice(n+1)))}(i,a.ClearedLand,-x,v):i,w=[].concat(Object(O.a)(o),[r.Advance]),N=p&&g&&g!==a.ProtectedTree&&{terrain:g,location:u},L=N?[].concat(Object(O.a)(l),[N]):l,T=p?d:A(i),z=(s||0)+((N?V.fuelUsage[N.terrain]*V.itemCost.fuel:0)||0)+(T||0);return Object(h.a)(Object(h.a)({},e),{},{status:y,map:C,activities:L,commands:w,totalCost:z,unclearedCost:T,bulldozer:Object(h.a)(Object(h.a)({},n),{},{location:u})})},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(h.a)(Object(h.a)({},e),{},{map:t.map});case v:return B(e);case x:var n=e.commands,a=e.bulldozer,i=a.direction,l=t.rotation,o=Object(P.c)(i,l),s=l===L?r.Right:r.Left;return Object(h.a)(Object(h.a)({},e),{},{commands:[].concat(Object(O.a)(n),[s]),bulldozer:Object(h.a)(Object(h.a)({},a),{},{direction:o})});case g:var d=e.commands,j=e.totalCost,b=A(e.map||[]);return Object(h.a)(Object(h.a)({},e),{},{unclearedCost:b,totalCost:(j||0)+b,commands:[].concat(Object(O.a)(d),[r.Quit]),status:c.Ended});default:return e}},U=Object(u.b)({game:H}),F=Object(u.c)(U,R),W=n(98),Q=n(81),_=n(105),G=n(100),q=n(6),J=n(32),Z=n(106),X=Object(Z.a)({root:{margin:8},header:{height:40},footer:{height:40},item:{display:"flex",flexDirection:"row",overflow:"hidden",textOverflow:"ellipsis",alignItems:"center",paddingLeft:8,borderWidth:0,borderStyle:"solid",borderColor:"gainsboro"},borderTop:{borderTopWidth:1},borderBottom:{borderBottomWidth:1},name:{width:230,textOverflow:"ellipsis"},location:{width:120,textAlign:"right"},fuel:{width:160,textAlign:"right"},cost:{width:100,textAlign:"right"}}),K=function(){var e=Object(W.a)(X)();return Object(i.jsxs)("div",{className:Object(q.a)(e.item,e.borderBottom,e.header),children:[Object(i.jsx)("span",{className:e.name,children:Object(i.jsx)("b",{children:"Activity"})}),Object(i.jsx)("span",{className:e.location,children:Object(i.jsx)("b",{children:"Location ([x,y])"})}),Object(i.jsx)("span",{className:e.fuel,children:Object(i.jsx)("b",{children:"Fuel Usage (fuel unit)"})}),Object(i.jsx)("span",{className:e.cost,children:Object(i.jsx)("b",{children:"Cost (credit)"})})]})},Y=function(e){var t=Object(W.a)(X)(),n=e.name,a=e.cost;return Object(i.jsxs)("div",{className:Object(q.a)(t.item,t.borderTop,t.footer),children:[Object(i.jsx)("span",{className:t.name,children:Object(i.jsx)("b",{children:n})}),Object(i.jsx)("span",{className:t.location}),Object(i.jsx)("span",{className:t.fuel}),Object(i.jsx)("span",{className:t.cost,children:Object(i.jsx)("b",{children:a})})]})},$=function(e){return function(t){var n=t.style,c=t.index,r=Object(W.a)(X)(),l=e[c],o=l.terrain,s=l.location,d=V.activityName,j=V.fuelUsage,b=V.itemCost,u=o!==a.ProtectedTree?j[o]:0,h=b.fuel*u;return Object(i.jsxs)("div",{style:n,className:Object(q.a)(r.item,c>0&&r.borderTop),children:[Object(i.jsx)("span",{className:r.name,children:d[o]}),Object(i.jsx)("span",{className:r.location,children:"[".concat(s.join(","),"]")}),Object(i.jsx)("span",{className:r.fuel,children:u>0&&u}),Object(i.jsx)("span",{className:r.cost,children:h>0&&h})]})}},ee=function(e){var t=e.activities,n=e.unclearedCost,a=e.totalCost,c=Object(W.a)(X)(),r=t.length-1,o=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e;null===o||void 0===o||null===(e=o.current)||void 0===e||e.scrollToItem(r)}),[o,r]),Object(i.jsxs)(G.a,{variant:"outlined",className:c.root,children:[Object(i.jsx)(K,{}),Object(i.jsx)(J.b,{ref:o,itemSize:36,width:650,height:420,itemCount:t.length,children:$(t)}),void 0!==n&&Object(i.jsx)(Y,{name:"Cost of uncleared squares",cost:n}),void 0!==a&&Object(i.jsx)(Y,{name:"Total Cost",cost:a})]})},te=n(22);function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var ce=l.createElement("path",{d:"M92.5,43.75H70V27.5h7.5c1.381,0,2.5-1.119,2.5-2.5V15c0-1.381-1.119-2.5-2.5-2.5h-70C6.119,12.5,5,13.619,5,15v10  c0,1.381,1.119,2.5,2.5,2.5H15v45H7.5C6.119,72.5,5,73.619,5,75v10c0,1.381,1.119,2.5,2.5,2.5h70c1.381,0,2.5-1.119,2.5-2.5V75  c0-1.381-1.119-2.5-2.5-2.5H70V56.25h22.5c1.381,0,2.5-1.119,2.5-2.5v-7.5C95,44.869,93.881,43.75,92.5,43.75z M90,51.25H60v-2.5h30  V51.25z M75,82.5h-5v-5h5V82.5z M10,77.5h5v5h-5V77.5z M20,77.5h5v5h-5V77.5z M30,77.5h5v5h-5V77.5z M40,77.5h5v5h-5V77.5z M50,77.5  h5v5h-5V77.5z M60,77.5h5v5h-5V77.5z M20,72.5v-45h45v16.25h-5V42.5c0-0.663-0.263-1.299-0.732-1.768l-7.5-7.5  C51.299,32.763,50.663,32.5,50,32.5H35c-0.663,0-1.299,0.263-1.768,0.732l-7.5,7.5C25.263,41.201,25,41.837,25,42.5v15  c0,0.663,0.263,1.299,0.732,1.768l7.5,7.5C33.701,67.237,34.337,67.5,35,67.5h15c0.663,0,1.299-0.263,1.768-0.732l7.5-7.5  C59.737,58.799,60,58.163,60,57.5v-1.25h5V72.5H20z M10,17.5h5v5h-5V17.5z M75,22.5h-5v-5h5V22.5z M65,22.5h-5v-5h5V22.5z M55,22.5  h-5v-5h5V22.5z M45,22.5h-5v-5h5V22.5z M35,22.5h-5v-5h5V22.5z M25,22.5h-5v-5h5V22.5z M55,56.464L48.964,62.5H36.036L30,56.464  V43.536l6.036-6.036h12.929L55,43.536V56.464z"}),re=l.createElement("path",{d:"M35,50c0,4.136,3.364,7.5,7.5,7.5S50,54.136,50,50s-3.364-7.5-7.5-7.5S35,45.864,35,50z M42.5,47.5  c1.378,0,2.5,1.122,2.5,2.5s-1.122,2.5-2.5,2.5S40,51.378,40,50S41.122,47.5,42.5,47.5z"});function ie(e,t){var n=e.title,a=e.titleId,c=ae(e,["title","titleId"]);return l.createElement("svg",ne({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",ref:t,"aria-labelledby":a},c),n?l.createElement("title",{id:a},n):null,ce,re)}var le=l.forwardRef(ie),oe=(n.p,function(e){var t,n=e.facing,a=void 0===n?C:n,c=e.style,r=Object(te.a)(e,["facing","style"]),l=(t=a,Object(P.b)(t,C)?0:Object(P.b)(t,y)?90:Object(P.b)(t,w)?180:Object(P.b)(t,p)?270:0);return Object(i.jsx)(le,Object(h.a)({"data-testid":"bulldozer-icon",style:Object(h.a)({transform:"rotate(".concat(l,"deg)")},c)},r))}),se=Object(Z.a)({root:{position:"absolute",width:"100%",height:"100%",display:"flex",flexDirection:"column",padding:8},welcomePage:{flexGrow:.5},main:{display:"flex",flexDirection:"row",flexWrap:"wrap"},column:{display:"flex",flexDirection:"column"},map:{padding:16,margin:8},title:{margin:16,display:"flex",flexDirection:"column",justifyContent:"flex-end",transition:"all 1s"}}),de=Object(Z.a)({root:{margin:8},item:{display:"flex",flexDirection:"row",overflow:"hidden",textOverflow:"ellipsis",alignItems:"center",paddingLeft:8},header:{height:40,borderBottomStyle:"solid",borderBottomColor:"gainsboro",borderBottomWidth:1}}),je=function(e){return function(t){var n=t.style,a=t.index,c=Object(W.a)(de)(),r=e[a];return Object(i.jsx)("div",{style:n,className:c.item,children:"".concat(a+1,". ").concat(V.commandName[r])})}},be=function(e){var t=e.commands,n=t.length-1,a=Object(W.a)(de)(),c=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e;null===c||void 0===c||null===(e=c.current)||void 0===e||e.scrollToItem(n)}),[c,n]),Object(i.jsxs)(G.a,{variant:"outlined",className:a.root,children:[Object(i.jsx)("div",{className:Object(q.a)(a.item,a.header),children:Object(i.jsx)("b",{children:"Command List"})}),Object(i.jsx)(J.b,{ref:c,itemSize:36,width:150,height:460,itemCount:t.length,children:je(t)})]})},ue=n(104),he=Object(Z.a)({root:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",margin:8},button:{margin:16}}),Oe=function(e){return{type:x,rotation:e}},me=function(){var e=Object(W.a)(he)(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.game.status})),a={variant:"outlined",color:"primary",className:e.button,disabled:n!==c.Started};return Object(i.jsxs)(G.a,{className:e.root,variant:"outlined",children:[Object(i.jsx)(ue.a,Object(h.a)(Object(h.a)({},a),{},{disabled:n===c.Ended||n===c.Error,onClick:function(){return t({type:v})},children:V.commandName[r.Advance]})),Object(i.jsx)(ue.a,Object(h.a)(Object(h.a)({},a),{},{onClick:function(){return t(Oe(N))},children:V.commandName[r.Left]})),Object(i.jsx)(ue.a,Object(h.a)(Object(h.a)({},a),{},{onClick:function(){return t(Oe(L))},children:V.commandName[r.Right]})),Object(i.jsx)(ue.a,Object(h.a)(Object(h.a)({},a),{},{onClick:function(){return t({type:g})},children:V.commandName[r.Quit]}))]})},fe=Object(Z.a)({root:{display:"flex",flexDirection:"column",margin:8},legend:{margin:8,display:"flex",flexDirection:"row",alignItems:"center"},text:{marginLeft:8},header:{paddingLeft:8,lineHeight:"40px"}}),ve=Object(Z.a)({root:{display:"flex",alignItems:"center",justifyContent:"center",width:60,height:60,padding:8,margin:2},white:{background:"white"},lightgoldenrodyellow:{background:"lightgoldenrodyellow"},lightsteelblue:{background:"lightsteelblue"},lightgreen:{background:"lightgreen"},green:{background:"green"},invisible:{visibility:"hidden"}}),xe=function(e){var t=e.terrain,n=e.children,c=e.className,r=Object(te.a)(e,["terrain","children","className"]),l=Object(W.a)(ve)(),o=Object(q.a)(l.root,t===a.ProtectedTree&&l.green,t===a.RemovableTree&&l.lightgreen,t===a.RockyLand&&l.lightsteelblue,t===a.PlainLand&&l.lightgoldenrodyellow,t===a.ClearedLand&&l.white,void 0===t&&l.invisible,c);return Object(i.jsx)(G.a,Object(h.a)(Object(h.a)({role:"img","aria-label":t,variant:"outlined",className:o},r),{},{children:n}))},ge=function(){var e=Object(W.a)(fe)();return Object(i.jsxs)(G.a,{className:e.root,variant:"outlined",children:[Object(i.jsx)("div",{className:e.header,children:Object(i.jsx)("b",{children:"Map Legend"})}),Object.values(a).map((function(t){return Object(i.jsxs)("div",{className:e.legend,children:[Object(i.jsx)(xe,{terrain:t}),Object(i.jsx)("span",{className:e.text,children:V.terrainName[t]})]},t)})),Object(i.jsxs)("div",{className:e.legend,children:[Object(i.jsx)(xe,{style:{visibility:"hidden"},children:Object(i.jsx)(oe,{style:{visibility:"visible"}})}),Object(i.jsx)("span",{className:e.text,children:"Bulldozer"})]})]})},pe=Object(Z.a)({root:{margin:8},header:{position:"absolute",paddingLeft:8,lineHeight:"40px",zIndex:100}}),ye=function(e){var t=e.map,n=e.TileChildren,a=Object(te.a)(e,["map","TileChildren"]),c=Object(W.a)(pe)(),r=function(e,t){return function(n){var a,c=n.columnIndex,r=n.rowIndex;return Object(i.jsx)("div",{"data-testid":"tile",style:n.style,children:Object(i.jsx)(xe,{terrain:null===(a=e[n.rowIndex-1])||void 0===a?void 0:a[n.columnIndex-1],children:t&&Object(i.jsx)(t,{location:[c-1,1-r]})})})}}(t,n),l={columnCount:t[0].length+2,rowCount:t.length+2,columnWidth:64,rowHeight:64,width:768,height:t.length>768?768:64*(t.length+2),children:r};return Object(i.jsxs)(G.a,{variant:"outlined",className:c.root,children:[Object(i.jsx)("div",{className:c.header,children:Object(i.jsx)("b",{children:"Site Map"})}),Object(i.jsx)(J.a,Object(h.a)(Object(h.a)({},l),a))]})},Ce=n(50),we=n.n(Ce),Ne=n(56),Le=function(e){return{type:f,map:e}},Te=function(){var e=Object(Ne.a)(we.a.mark((function e(t,n){var a,c;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(n[0]);case 3:a=e.sent,c=I(a),t(Le(c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),ze=n(101),Ee=Object(Z.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},buttonsRow:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"},button:{margin:16}}),Me=function(e){var t=e.className,n=e.onChangeUploadMap,a=Object(te.a)(e,["className","onChangeUploadMap"]),c=Object(W.a)(Ee)(),r={variant:"contained",color:"primary",disableElevation:!0,className:c.button};return Object(i.jsxs)("div",Object(h.a)(Object(h.a)({className:Object(q.a)(c.root,t)},a),{},{children:[Object(i.jsx)(Q.a,{variant:"h6",align:"center",children:"Please upload a site map to begin the simulation"}),Object(i.jsxs)("div",{className:c.buttonsRow,children:[Object(i.jsx)("input",{type:"file",accept:".txt",hidden:!0,id:"upload-site-map",onChange:function(e){return null===n||void 0===n?void 0:n(e.target.files)}}),Object(i.jsx)("label",{htmlFor:"upload-site-map",children:Object(i.jsx)(ue.a,Object(h.a)(Object(h.a)({},r),{},{component:"span",children:"Upload site map"}))}),Object(i.jsx)(ze.a,{href:"".concat("/bulldozer","/siteMap.txt"),download:!0,children:Object(i.jsx)(ue.a,Object(h.a)(Object(h.a)({},r),{},{children:"Download default map"}))})]})]}))},Re=function(){var e=Object(W.a)(se)(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.game})),a=n.map,r=n.bulldozer,l=n.status,o=n.commands,s=n.activities,d=n.totalCost,b=n.unclearedCost,u=l===c.Ended||l===c.Error;return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsxs)("div",{className:e.title,style:{flexGrow:a?0:.2},children:[Object(i.jsx)(Q.a,{variant:"h4",align:"center",children:u?"Game Over !!!":"Site Clearing Simulation"}),Object(i.jsx)(_.a,{in:u,children:Object(i.jsxs)("div",{children:[Object(i.jsx)(Q.a,{variant:"h6",align:"center",children:"The simulation has ended and new bulldozer commands are no longer accepted."}),Object(i.jsx)(Q.a,{variant:"h6",align:"center",children:"Please review the final list of commands and itemised report including the cost of uncleared squares."}),Object(i.jsx)(Q.a,{variant:"h6",align:"center",children:"To start a new simulation session, please refresh this page."})]})})]}),!a&&Object(i.jsx)(Me,{onChangeUploadMap:function(e){e&&Te(t,e)}}),a&&Object(i.jsxs)("div",{className:e.main,children:[Object(i.jsx)("div",{children:Object(i.jsx)(ge,{})}),Object(i.jsxs)("div",{className:e.column,children:[Object(i.jsx)(ye,{map:a,TileChildren:function(e){var t=e.location;return Object(P.b)(t,r.location)?Object(i.jsx)(oe,{facing:r.direction,style:{visibility:"visible"}}):Object(i.jsx)(i.Fragment,{})}}),Object(i.jsx)(me,{})]}),Object(i.jsx)("div",{children:Object(i.jsx)(be,{commands:o})}),Object(i.jsx)("div",{children:Object(i.jsx)(ee,{activities:s,totalCost:d,unclearedCost:b})})]})]})},Pe=function(){return Object(i.jsxs)(j.a,{store:F,children:[Object(i.jsx)(b.a,{}),Object(i.jsx)(Re,{})]})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};d.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(Pe,{})}),document.getElementById("root")),Se()}},[[80,1,2]]]);
//# sourceMappingURL=main.7a3e582e.chunk.js.map