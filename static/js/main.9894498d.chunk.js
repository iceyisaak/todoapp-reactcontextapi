(this["webpackJsonptodoapp-reactcontextapi"]=this["webpackJsonptodoapp-reactcontextapi"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(7),r=n.n(a),i=n(5),o=n(3),j=n(8),d=n(16),u=n(0),l=Object(c.createContext)(),b=function(t){var e=t.children,n=JSON.parse(localStorage.getItem("tasks"))||[],s=Object(c.useState)(n),a=Object(i.a)(s,2),r=a[0],o=a[1];Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r))}),[r]);return Object(u.jsx)(l.Provider,{value:{addTask:function(t){o([].concat(Object(j.a)(r),[{taskEntry:t,id:Object(d.a)()}]))},tasks:r,deleteTask:function(t){console.log("deleteTask()",t)},editTask:function(t,e){console.log("editTask()",t,e)}},children:e})},O=function(){return Object(c.useContext)(l)},x=function(){var t=O().addTask,e=Object(c.useState)(""),n=Object(i.a)(e,2),s=n[0],a=n[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s),a("")},children:[Object(u.jsx)("input",{type:"text",onChange:function(t){a(t.target.value)},placeholder:"e.g. Shopping",value:s,required:!0}),Object(u.jsx)("button",{children:Object(u.jsx)(o.a,{})})]})},h=function(t){var e=t.task,n=O(),c=n.deleteTask,s=n.editTask;return Object(u.jsxs)("li",{children:[e.taskEntry," ",Object(u.jsx)(o.c,{onClick:function(){s(e.id,e.taskEntry)}})," ",Object(u.jsx)(o.b,{onClick:function(){c(e.id)}})]})},k=function(){var t=O().tasks;return Object(u.jsxs)("div",{children:[0===t.length&&Object(u.jsx)("p",{children:"No Tasks"}),Object(u.jsx)("ul",{children:t.map((function(t){return Object(u.jsx)(h,{task:t},t.id)}))})]})},p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"TodoApp"}),Object(u.jsx)("h4",{children:"React Context API"}),Object(u.jsx)(x,{}),Object(u.jsx)("div",{children:Object(u.jsx)(k,{})})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{children:Object(u.jsx)(p,{})})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9894498d.chunk.js.map