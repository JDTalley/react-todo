(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(5),r=n.n(i),c=(n(15),n(1)),l=(n(16),n(3)),d=n(6),u=n(7),s=n(2),h=n(9),m=n(8);var f=function(e){return a.a.createElement("li",{style:e.item.completed?{color:"grey",textDecoration:"line-through"}:null,onClick:function(){return e.handleClick(e.item.id)}},e.item.text)},p=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={todos:[{id:1,text:"Todo 1",completed:!0},{id:2,text:"Todo 2",completed:!1},{id:3,text:"Todo 3",completed:!1}]},e.handleClick=e.handleClick.bind(Object(s.a)(e)),e.divStyle={margin:"0 auto",display:"flex",flexDirection:"column",minWidth:"500px",maxWidth:"750px",textAlign:"center",background:"#f7f7f7"},e.h1Style={backgroundColor:"#2980b9",color:"white",margin:"0",padding:"10px 20px",textTransform:"uppercase",fontSize:"24px",fontWeight:"normal"},e.ulStyle={listStyleType:"none",margin:"0",padding:"0"},e}return Object(u.a)(n,[{key:"handleClick",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return a.a.createElement(f,{key:t.id,item:t,handleClick:e.handleClick})}));return a.a.createElement("div",{style:this.divStyle},a.a.createElement("h1",{style:this.h1Style},"React Todos"),a.a.createElement("input",{type:"text",name:"newTodo",placeholder:"Add New Todo"}),a.a.createElement("ul",{style:this.ulStyle},t))}}]),n}(a.a.Component);var g=function(){var e,t=(e={height:"100vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",background:"#0f0c29"},Object(c.a)(e,"background","-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)"),Object(c.a)(e,"background","linear-gradient(to right, #24243e, #302b63, #0f0c29)"),e);return a.a.createElement("div",{style:t},a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.6677bf59.chunk.js.map