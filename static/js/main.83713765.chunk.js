(this["webpackJsonptodoapp-reactcontextapi"]=this["webpackJsonptodoapp-reactcontextapi"]||[]).push([[0],{14:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),i=c(8),o=c(5),j=c(16),u=c(0),l=Object(n.createContext)(),d=function(t){var e=t.children,c=JSON.parse(localStorage.getItem("tasks"))||[],s=Object(n.useState)(c),a=Object(o.a)(s,2),r=a[0],d=a[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r))}),[r]);return Object(u.jsx)(l.Provider,{value:{addTask:function(t){d([].concat(Object(i.a)(r),[{taskEntry:t,id:Object(j.a)()}]))},tasks:r,deleteTask:function(t){console.log("deleteTask()",t),d(r.filter((function(e){return e.id!==t})))},editTask:function(t,e){console.log("editTask()",t,e)},clearTaskList:function(){d([])}},children:e})},b=function(){return Object(n.useContext)(l)},O=c(3),x=function(){var t=b().addTask,e=Object(n.useState)(""),c=Object(o.a)(e,2),s=c[0],a=c[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s),a("")},children:[Object(u.jsx)("input",{type:"text",onChange:function(t){a(t.target.value)},placeholder:"e.g. Shopping",value:s,required:!0}),Object(u.jsx)("button",{children:Object(u.jsx)(O.a,{})})]})},k=function(t){var e=t.task,c=b(),n=c.deleteTask,s=c.editTask;return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"checkbox"})," ",e.taskEntry," ",Object(u.jsx)(O.c,{onClick:function(){s(e.id,e.taskEntry)}})," ",Object(u.jsx)(O.b,{onClick:function(){n(e.id)}})]})},h=function(){var t=b().tasks;return Object(u.jsxs)("div",{children:[0===t.length&&Object(u.jsx)("p",{children:"No Tasks"}),Object(u.jsx)("ul",{children:t.map((function(t){return Object(u.jsx)(k,{task:t},t.id)}))})]})},f=function(){var t=b().clearTaskList;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"TodoApp"}),Object(u.jsx)("h4",{children:"React Context API"}),Object(u.jsx)(x,{}),Object(u.jsx)("div",{children:Object(u.jsx)(h,{})}),Object(u.jsx)("button",{onClick:t,children:"Clear Task List"})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(d,{children:Object(u.jsx)(f,{})})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.83713765.chunk.js.map