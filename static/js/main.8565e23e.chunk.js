(this["webpackJsonpreact-typescript-boilerplate"]=this["webpackJsonpreact-typescript-boilerplate"]||[]).push([[0],{36:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(0),l=n.n(i),c=n(9),a=n.n(c),o=n(4),u=n(17),f=n(19),s=n(5),p=n(13),b="ADD_LAP",j="DELETE_LAP",h="RESET_LAPS",d={laps:[]},v=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return{laps:[].concat(Object(p.a)(e.laps),[{timestamp:n.timestamp,id:(null===(t=e.laps)||void 0===t?void 0:t.length)?e.laps[e.laps.length-1].id+1:0}])};case j:return{laps:Object(p.a)(e.laps.filter((function(t){return t.id!==n.lapId})))};case h:return{laps:[]};default:return e}},O=Object(o.combineReducers)({laps:v}),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,l=e.getLCP,c=e.getTTFB;n(t),r(t),i(t),l(t),c(t)}))},m=n(2),y={colors:{bgColor:"#181617",fontColor:"#ffffff",primary:"#e7e7e7",secondary:"#fefefe"}},g=n(3);function w(){var t=Object(g.a)(["\n  *, *::before,*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Titillium Web', sans-serif;\n  }\n  \n  :root {\n    font-size: 16px;\n  }\n\n  body {\n    background: ",";\n    color: ",";\n  }\n"]);return w=function(){return t},t}var E=Object(m.b)(w(),(function(t){return t.theme.colors.bgColor}),(function(t){return t.theme.colors.fontColor}));function z(){var t=Object(g.a)(["\n  padding: 2rem;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: flex-start;\n"]);return z=function(){return t},t}var I=m.c.div(z()),P=function(t){var e=t.children;return Object(r.jsx)(I,{children:e})},S=n(14);function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function k(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var C=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),H=i.createElement("path",{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"});function L(t,e){var n=t.title,r=t.titleId,l=k(t,["title","titleId"]);return i.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:e,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,C,H)}var B=i.forwardRef(L);n.p;function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function V(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var T=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),D=i.createElement("path",{d:"M8 5v14l11-7z"});function F(t,e){var n=t.title,r=t.titleId,l=V(t,["title","titleId"]);return i.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:e,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,T,D)}var A=i.forwardRef(F);n.p;function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function J(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var W=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),q=i.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"});function G(t,e){var n=t.title,r=t.titleId,l=J(t,["title","titleId"]);return i.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:e,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,W,q)}var K=i.forwardRef(G);n.p;function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Q(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var U=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),X=i.createElement("path",{d:"M6 6h12v12H6z"});function Y(t,e){var n=t.title,r=t.titleId,l=Q(t,["title","titleId"]);return i.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:e,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,U,X)}var Z=i.forwardRef(Y);n.p;function $(){return($=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function tt(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var et=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),nt=i.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"});function rt(t,e){var n=t.title,r=t.titleId,l=tt(t,["title","titleId"]);return i.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:e,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,et,nt)}var it=i.forwardRef(rt),lt=(n.p,function(t){var e=t.value;return Object(r.jsx)("span",{children:"".concat(e).length>1?e:"0".concat(e)})});function ct(){var t=Object(g.a)(["\n  font-size: ",";\n"]);return ct=function(){return t},t}var at=m.c.p(ct(),(function(t){return t.fontSize})),ot=function(t){var e=t.time,n=t.fontSize,i=e%100,l=Math.trunc(e/100),c=Math.trunc(e/100/60);return Object(r.jsxs)(at,{fontSize:n||"0.75rem",children:[Object(r.jsx)(lt,{value:c}),Object(r.jsx)("span",{children:":"}),Object(r.jsx)(lt,{value:l}),Object(r.jsx)("span",{children:"."}),Object(r.jsx)(lt,{value:i})]})},ut=n(16),ft=n(23);function st(){var t=Object(g.a)(["\n  margin: 0 0.5rem;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 2px solid ",";\n  border-radius: 4px;\n  padding: 5px;\n  svg {\n    width: 19px;\n    height: 19px;\n  }\n"]);return st=function(){return t},t}var pt=m.c.button(st(),(function(t){return t.theme.colors.secondary})),bt=function(t){var e=t.children,n=Object(ft.a)(t,["children"]);return Object(r.jsx)(pt,Object(ut.a)(Object(ut.a)({},n),{},{children:e}))};function jt(){var t=Object(g.a)(["\n  max-width: 200px;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return jt=function(){return t},t}function ht(){var t=Object(g.a)(["\n  margin: 1rem 0;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: flex-start;\n"]);return ht=function(){return t},t}var dt=m.c.div(ht()),vt=m.c.div(jt()),Ot=function(){var t=Object(i.useState)(!1),e=Object(S.a)(t,2),n=e[0],l=e[1],c=Object(i.useState)(0),a=Object(S.a)(c,2),o=a[0],u=a[1],f=Object(s.b)();Object(i.useEffect)((function(){if(!n)return function(){};var t=setInterval((function(){u((function(t){return t+1}))}),10);return function(){clearInterval(t)}}),[n]);var p=function(){f({type:b,timestamp:o})},j=function(){l(!1),u(0)},d=function(){j(),f({type:h})};return Object(r.jsxs)(dt,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(ot,{time:o,fontSize:"2rem"})}),Object(r.jsxs)(vt,{children:[Object(r.jsx)(bt,{type:"button",onClick:function(){l(!n)},children:n?Object(r.jsx)(K,{}):Object(r.jsx)(A,{})}),Object(r.jsx)(bt,{type:"button",onClick:function(){return p()},children:Object(r.jsx)(B,{})}),Object(r.jsx)(bt,{type:"button",onClick:function(){return j()},children:Object(r.jsx)(Z,{})}),Object(r.jsx)(bt,{type:"button",onClick:function(){return d()},children:Object(r.jsx)(it,{})})]})]})},xt=function(t){return t.laps};function mt(){return(mt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function yt(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var gt=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),wt=i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function Et(t,e){var n=t.title,r=t.titleId,l=yt(t,["title","titleId"]);return i.createElement("svg",mt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:e,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,gt,wt)}var zt=i.forwardRef(Et);n.p;function It(){var t=Object(g.a)(["\n  font-size: 0.875rem;\n  margin-right: 0.25rem;\n"]);return It=function(){return t},t}function Pt(){var t=Object(g.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return Pt=function(){return t},t}var St=m.c.div(Pt()),Mt=m.c.p(It()),kt=function(t){var e=t.lap,n=t.index,i=Object(s.b)();return Object(r.jsxs)(St,{children:[Object(r.jsxs)(St,{children:[Object(r.jsxs)(Mt,{children:["Lap\xa0",Object(r.jsx)(lt,{value:n+1}),Object(r.jsx)("span",{children:":"})]}),Object(r.jsx)(ot,{time:e.timestamp})]}),Object(r.jsx)(bt,{type:"button",onClick:function(){var t;i((t=e.id,{type:j,lapId:t}))},children:Object(r.jsx)("span",{children:Object(r.jsx)(zt,{})})})]})};function Ct(){var t=Object(g.a)(["\n  padding: 0.5rem 0;\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: stretch;\n  justify-content: space-between;\n"]);return Ct=function(){return t},t}function Ht(){var t=Object(g.a)(["\n  list-style: none;\n  width: 150px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: stretch;\n  justify-content: flex-start;\n"]);return Ht=function(){return t},t}function Lt(){var t=Object(g.a)(["\n  width: 150px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n"]);return Lt=function(){return t},t}var Bt=m.c.div(Lt()),Rt=m.c.ul(Ht()),Vt=m.c.li(Ct()),Tt=function(){var t=Object(s.c)(xt).laps;return Object(r.jsx)(Bt,{children:(null===t||void 0===t?void 0:t.length)>0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Laps: "}),Object(r.jsx)(Rt,{children:t.map((function(t,e){return Object(r.jsx)(Vt,{children:Object(r.jsx)(kt,{lap:t,index:e})},t.id)}))})]}):null})},Dt=function(){return Object(r.jsxs)(P,{children:[Object(r.jsx)(Ot,{}),Object(r.jsx)(Tt,{})]})},Ft=function(){return Object(r.jsxs)(m.a,{theme:y,children:[Object(r.jsx)(E,{}),Object(r.jsx)(Dt,{})]})},At=Object(o.createStore)(O,Object(u.composeWithDevTools)(Object(o.applyMiddleware)(f.a)));a.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(s.a,{store:At,children:Object(r.jsx)(Ft,{})})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.8565e23e.chunk.js.map