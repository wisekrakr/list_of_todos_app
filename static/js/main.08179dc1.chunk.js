(this.webpackJsonplist_of_todos=this.webpackJsonplist_of_todos||[]).push([[0],{33:function(e,t,a){e.exports=a(61)},43:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(30),r=a.n(l),c=a(19),s=a(6),i=a(7),m=a(9),u=a(8),d=a(10),p=a(14),f=a(11);function h(){return n.a.createElement("header",{style:b},n.a.createElement("h1",null,"List of Todos"),n.a.createElement(p.b,{style:E,to:"/"},"Home")," ","|"," ",n.a.createElement(p.b,{style:E,to:"/about"},"About"))}var b={background:"#333",color:"#ffffff",textAlign:"center",padding:"1rem"},E={textDecoration:"none",color:"#ffffff"},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).getStyle=function(){return{fontWeight:a.props.todo.completed?null:"700",textDecoration:a.props.todo.completed?"line-through":"none",backgroundColor:a.props.todo.completed?"#e3e3e3":"#5CBDBB",padding:"1rem",borderBottom:"1px #ccc dotted"}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title,o=e.when;return(n.a.createElement("div",{className:"box-body"},n.a.createElement("ul",{className:"todo-list ui-sortable"},n.a.createElement("li",{style:this.getStyle()},n.a.createElement("span",{className:"handle ui-sortable-handle"},n.a.createElement("i",{className:"fa fa-ellipsis-v"}),n.a.createElement("i",{className:"fa fa-ellipsis-v"})),n.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,t)}),n.a.createElement("span",{className:"text"},a),n.a.createElement("small",{className:"label "},n.a.createElement("i",{className:"fas fa-clock"})," ",o),n.a.createElement("div",{className:"tools"},n.a.createElement("button",{onClick:this.props.removeTodo.bind(this,t),className:"btn btn-item"},n.a.createElement("i",{style:{color:" #dd4b39"},className:"fas fa-trash"})))))))}}]),t}(o.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return n.a.createElement(g,{key:t.id,todo:t,toggleComplete:e.props.toggleComplete,removeTodo:e.props.removeTodo})}))}}]),t}(n.a.Component),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={title:""},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.onChange=function(e){return a.setState({title:e.target.value})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),n.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),t}(o.Component);function j(){return n.a.createElement(o.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This is The List of Todos App from The Wisekrakr\xa9. ",n.a.createElement("br",null),"As part of the MERN studies."))}a(43);var O=a(15),C=a.n(O),T="https://jsonplaceholder.typicode.com/todos/",k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[]},a.toggleComplete=function(e){a.setState({todos:a.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},a.addTodo=function(e){C.a.post(T,{title:e,completed:!1,when:(new Date).toLocaleString()}).then((function(e){a.setState({todos:[].concat(Object(c.a)(a.state.todos),[e.data])})}))},a.removeTodo=function(e){C.a.get(T+e).then((function(t){a.setState({todos:Object(c.a)(a.state.todos.filter((function(t){return t.id!==e})))})}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get(T+"?_limit=20").then((function(t){e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement("div",{className:"container"},n.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(o.Fragment,null,n.a.createElement(y,{addTodo:e.addTodo}),n.a.createElement(v,{todos:e.state.todos,toggleComplete:e.toggleComplete,removeTodo:e.removeTodo}))}}),n.a.createElement(f.a,{path:"/about",component:j}))))}}]),t}(o.Component);r.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.08179dc1.chunk.js.map