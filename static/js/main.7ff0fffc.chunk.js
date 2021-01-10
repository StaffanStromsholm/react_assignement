(this["webpackJsonpreact-assignement"]=this["webpackJsonpreact-assignement"]||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},66:function(e,t,c){},84:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),j=c(19),r=c.n(j),a=c(7),i=(c(59),c(28)),o=c(37),l=c(21),b=c(8),d=(c(60),c(14)),h=(c(23),c(61),function(e){return e.posts.map((function(e){return O(e)}))}),O=function(e){return Object(n.jsxs)(d.a,{className:"posts-card",children:[Object(n.jsx)(a.b,{to:"/post/".concat(e.id),children:Object(n.jsx)(d.a.Img,{variant:"top",src:e.imgUrl})}),Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)(d.a.Title,{children:e.title}),Object(n.jsxs)(d.a.Text,{children:[e.description.substring(0,200),"..."]}),Object(n.jsx)(a.b,{className:"read-more",to:"/post/".concat(e.id),children:"Read more"})]}),Object(n.jsx)(d.a.Footer,{children:Object(n.jsxs)("small",{className:"text-muted",children:["Posted by ",e.author]})})]},e.id)},x=function(e){var t=e.posts;return Object(n.jsx)("div",{className:"posts",children:Object(n.jsx)(h,{posts:t})})},u=(c(66),c(10)),p=c(40);var g=function(e){var t=e.onChangeHandler,c=e.onSubmitHandler;return Object(n.jsxs)("div",{className:"addPost",children:[Object(n.jsx)("h2",{className:"newpost-title",children:"Create New Post"}),Object(n.jsxs)(u.a,{onSubmit:c,children:[Object(n.jsxs)(u.a.Group,{controlId:"title",children:[Object(n.jsx)(u.a.Label,{children:"Title"}),Object(n.jsx)(u.a.Control,{name:"title",required:!0,onChange:t,type:"text",placeholder:"Title"})]}),Object(n.jsxs)(u.a.Group,{controlId:"author",children:[Object(n.jsx)(u.a.Label,{children:"Author"}),Object(n.jsx)(u.a.Control,{name:"author",required:!0,onChange:t,type:"text",placeholder:"Author"})]}),Object(n.jsxs)(u.a.Group,{controlId:"imgUrl",children:[Object(n.jsx)(u.a.Label,{children:"Image Url"}),Object(n.jsx)(u.a.Control,{name:"imgUrl",required:!0,onChange:t,type:"text",placeholder:"Image Url"})]}),Object(n.jsxs)(u.a.Group,{controlId:"description",children:[Object(n.jsx)(u.a.Label,{children:"Text"}),Object(n.jsx)(u.a.Control,{name:"description",required:!0,onChange:t,as:"textarea",rows:3})]}),Object(n.jsx)(p.a,{variant:"success",type:"submit",children:"Add"}),Object(n.jsx)(p.a,{variant:"primary",className:"new-post-back-btn",type:"button",children:Object(n.jsx)(a.b,{to:"/posts",children:"Back"})})]})]})},m=c(20),f=c.n(m),v=(c(84),c(25)),L=c(22),N=c(52),I=c(53);var C=function(e){var t=e.isLoggedIn,c=e.logoutHandler,s=e.loginHandler;return Object(n.jsxs)(v.a,{className:"navbar",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(n.jsx)(v.a.Brand,{children:Object(n.jsx)(a.b,{to:"/",children:Object(n.jsx)(N.a,{icon:I.a})})}),Object(n.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsx)(v.a.Collapse,{id:"responsive-navbar-nav",children:Object(n.jsxs)(L.a,{className:"mr-auto",children:[Object(n.jsx)(L.a.Link,{href:"/posts",children:Object(n.jsx)(a.b,{to:"/posts",children:"Blogposts"})}),t&&Object(n.jsx)(L.a.Link,{children:Object(n.jsx)(a.b,{to:"/newpost",children:"New Post"})}),t&&Object(n.jsx)(L.a.Link,{children:Object(n.jsx)(a.b,{onClick:c,children:"Logout"})}),!t&&Object(n.jsx)(L.a.Link,{children:Object(n.jsx)(a.b,{onClick:s,children:"Login"})})]})})]})},k=(c(87),function(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),c=t[0],j=t[1],r=Object(b.g)().postID;return Object(s.useEffect)((function(){f.a.get("http://localhost:3001/posts").then((function(e){return e.data.find((function(e){return e.id==={postID:r}}))})).then((function(e){return j(e)}))}),[]),Object(n.jsx)("div",{className:"SinglePost-container",children:Object(n.jsxs)(d.a,{className:"SinglePost-card",style:{width:"900px"},children:[Object(n.jsx)(d.a.Img,{className:"SinglePost-img",variant:"top",src:c.imgUrl}),Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)(d.a.Title,{children:c.title}),Object(n.jsx)(d.a.Text,{children:c.description}),Object(n.jsx)(a.b,{className:"back-btn",to:"/posts",children:"Back"})]})]})})}),y=(c(88),function(e){e.isLoggedIn;return Object(n.jsx)("h1",{children:"Welcome Guest User!"})}),w=function(e){e.isLoggedIn;return Object(n.jsx)("h1",{children:"Welcome! Please login."})},P=function(e){return e.isLoggedIn?Object(n.jsx)(y,{}):Object(n.jsx)(w,{})},S=function(e){var t=e.handleLogin;return Object(n.jsx)("button",{className:"welcome-btn",onClick:t,children:"Login"})},H=function(e){var t=e.handleLogout;return Object(n.jsx)("button",{className:"welcome-btn",onClick:t,children:"Logout"})},U=function(e){var t,c=e.isLoggedIn,s=e.logoutHandler,j=e.loginHandler;return t=c?Object(n.jsx)(H,{handleLogout:function(){s()}}):Object(n.jsx)(S,{handleLogin:function(){j()}}),Object(n.jsx)("div",{className:"Welcome",children:Object(n.jsxs)("div",{className:"welcome-content",children:[Object(n.jsx)(P,{isLoggedIn:c}),t,c&&Object(n.jsx)(a.b,{to:"/posts",children:Object(n.jsx)("button",{className:"welcome-btn",children:"Read Blogposts"})})]})})},B=(c(89),["jan","feb","mar","apr","may","jun","jul","aug","sep","okt","nov","dec"]),T=function(){var e=Object(b.h)(),t=e.path,c=e.url,s=B.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"".concat(c,"/").concat(e),children:e})},e)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"2021"}),Object(n.jsx)("ul",{children:s}),Object(n.jsx)("hr",{}),Object(n.jsx)(b.c,{children:Object(n.jsx)(b.a,{path:"".concat(t,"/:month"),children:Object(n.jsx)(G,{})})})]})},A=function(){var e=Object(b.h)(),t=e.path,c=e.url,s=B.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"".concat(c,"/").concat(e),children:e})},e)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"2020"}),Object(n.jsx)("ul",{children:s}),Object(n.jsx)("hr",{}),Object(n.jsx)(b.c,{children:Object(n.jsx)(b.a,{path:"".concat(t,"/:month"),children:Object(n.jsx)(q,{})})})]})},G=function(){var e=Object(b.g)().month;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.toUpperCase()}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{children:"Post 1"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{children:"Post 2"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{children:"Post 3"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{children:"Post 4"})})]})]})},q=function(){var e=Object(b.g)().month;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.toUpperCase()}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{children:"Post 1"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{children:"Post 2"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{children:"Post 3"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{children:"Post 4"})})]})]})},D=function(){var e=Object(b.h)(),t=e.path,c=e.url;return Object(n.jsx)("div",{className:"Aside",children:Object(n.jsx)(a.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Search posts by year"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"".concat(c,"/2021"),children:"2021"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"".concat(c,"/2020"),children:"2020"})})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"".concat(t,"/2021"),children:Object(n.jsx)(T,{})}),Object(n.jsx)(b.a,{path:"".concat(t,"/2020"),children:Object(n.jsx)(A,{})})]})]})})})},E="https://my-json-server.typicode.com/StaffanStromsholm/react-assignement-db/posts",W=function(){var e=Object(s.useState)({title:"",author:"",imgUrl:"",description:""}),t=Object(l.a)(e,2),c=t[0],j=t[1],r=Object(s.useState)(!1),a=Object(l.a)(r,2),d=a[0],h=a[1],O=Object(s.useState)([]),u=Object(l.a)(O,2),p=u[0],m=u[1],v=Object(b.f)();Object(s.useEffect)((function(){f.a.get(E).then((function(e){return m(e.data)}))}),[]);var L=function(){h(!1)},N=function(){h(!0)};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(C,{isLoggedIn:d,logoutHandler:L,loginHandler:N}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",children:Object(n.jsx)(U,{logoutHandler:L,loginHandler:N,isLoggedIn:d})}),Object(n.jsx)(b.a,{path:"/post/:postID",children:Object(n.jsx)(k,{})}),Object(n.jsxs)(b.a,{path:"/posts",children:[Object(n.jsx)(x,{posts:p}),Object(n.jsx)(D,{})]}),Object(n.jsx)(b.a,{path:"/newpost",children:Object(n.jsx)(g,{onChangeHandler:function(e){j(Object(o.a)(Object(o.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))},onSubmitHandler:function(e){e.preventDefault(),f.a.post(E,c).then((function(){return f.a.get(E)})).then((function(e){m(e.data),alert("New post was succesfully created"),v.push("/posts")}))}})})]})]})};r.a.render(Object(n.jsx)(a.a,{basename:"/react_assignement",children:Object(n.jsx)(W,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.7ff0fffc.chunk.js.map