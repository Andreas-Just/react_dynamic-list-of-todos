(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{132:function(e,t,n){e.exports=n(259)},231:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),o=n.n(c),l=n(32),u=n.n(l),s=n(51),i=n(15),m=n(267),p=n(268),f=n(266),d=n(265),b=function(e){var t=e.name;return r.a.createElement(d.a.Cell,null,t)},j=n(34),E=function(e){var t=e.compl;return r.a.createElement(d.a.Cell,{negative:!t,positive:t},r.a.createElement(j.a,{color:t?"green":"red",name:t?"checkmark":"close"}),t?"Complebitur":"In processus")},O=function(e){var t=e.id,n=e.user,a=e.completed,c=e.title;return r.a.createElement(d.a.Row,{warning:!0},r.a.createElement(d.a.Cell,null,t),r.a.createElement(b,n),r.a.createElement(d.a.Cell,{textAlign:"left"},c),r.a.createElement(E,{compl:a}))},v={id:"Id",user:"Person",title:"Description",completed:"Completed"},h=function(e){var t=e.list,n=Object(a.useState)(t),c=Object(i.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)("id"),s=Object(i.a)(u,2),m=s[0],p=s[1],f=Object(a.useState)(!0),b=Object(i.a)(f,2),j=b[0],E=b[1],h=function(e){var n=function(e){switch(typeof t[0][e]){case"string":return function(t,n){return t[e].localeCompare(n[e])};case"object":return function(t,n){return t[e].name.localeCompare(n[e].name)};default:return function(t,n){return t[e]-n[e]}}}(e);m!==e?(l(o.sort(n)),p(e),E(!0)):(l(j?o.reverse():o.sort(n)),E(!j))};return r.a.createElement(d.a,{celled:!0,className:"ui purple inverted",selectable:!0},r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Row,null,Object.keys(v).map((function(e){return r.a.createElement(d.a.HeaderCell,{className:"table__button",key:e,onClick:function(){return h(e)}},v[e])})))),r.a.createElement(d.a.Body,null,t.map((function(e){return r.a.createElement(O,Object.assign({key:e.id},e))}))))},g=(n(231),n(77)),k="https://seialek.github.io/react_dynamic-list-of-todos/api",w="".concat(k,"/todos.json"),y="".concat(k,"/users.json"),C=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch(w).then((function(e){return e.json()})),fetch(y).then((function(e){return e.json()}))]);case 2:return t=e.sent,n=Object(i.a)(t,2),a=n[0],r=n[1],e.abrupt("return",a.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{user:r.find((function(t){return t.id===e.userId}))})})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),d=l[0],b=l[1],j=Object(a.useState)(!1),E=Object(i.a)(j,2),O=E[0],v=E[1],g=Object(a.useState)(""),k=Object(i.a)(g,2),w=k[0],y=k[1],S=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,C();case 4:t=e.sent,c(t),v(!1),b(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),v(!1),y("Something went wrong! ".concat(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(m.a,{inverted:!0,className:"main"},r.a.createElement(p.a,{as:"h1",color:"purple"},"Dynamic list of todos"),d?r.a.createElement(h,{list:n}):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{as:"h2",color:"yellow"},w),r.a.createElement(f.a,{content:O?"Loading...":"Load TodoList",color:"purple",size:"big",onClick:S})))};o.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.cc6edc3a.chunk.js.map