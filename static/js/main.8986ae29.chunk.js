(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/profile.6500c951.jpg"},24:function(e,a,t){e.exports=t(44)},29:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),s=t.n(c),r=(t(29),t(30),t(31),t(2)),i=t(6),m=(t(32),t(33),t(20)),o=t.n(m),u=function(){return l.a.createElement("div",{className:"hero is-fullheight"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container is-fullheight"},l.a.createElement("div",{className:"columns is-vcentered"},l.a.createElement("div",{className:"column has-text-centered"},l.a.createElement("img",{src:o.a,className:"my-profile-image",alt:"My profile"})),l.a.createElement("div",{className:"column"},l.a.createElement("h1",{className:"title is-1"},"I'M Olivier ESUKA"),l.a.createElement("h1",{className:"title is-3 is-light"},"Software Engineer - 4 Years"),l.a.createElement("hr",null),l.a.createElement("p",{className:"about-me"},"A full-stack developer who enjoys solving problems and building products."),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column "},l.a.createElement(r.b,{to:"/resume",className:"button is-info  is-large is-fullwidth"},"Resume")),l.a.createElement("div",{className:"column "},l.a.createElement(r.b,{to:"/contact",className:"button is-light is-large is-fullwidth"},"Contact"))),l.a.createElement("p",{className:"social-icons"},l.a.createElement("a",{className:"social-icon",href:"https://www.github.com/oesuka",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{className:"social-icon",href:"https://twitter.com/oesukam",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{className:"social-icon",href:"https://www.facebook.com/oesuka",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook"}))))))))},h=(t(42),function(){return l.a.createElement("section",{id:"not-found"},l.a.createElement("div",{className:"hero is-fullheight is-primary is-info"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("h1",{className:"title is-1"},"4",l.a.createElement("i",{className:"fa fa-ban"}),"4"),l.a.createElement("h1",{className:"title is-4"},"The page your are looking for was not found"),l.a.createElement(r.b,{to:"/",className:"button"},"To Home")))))}),E=(t(43),function(){return l.a.createElement("header",{className:"container",id:"top-nav"},l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-item",href:"/"},l.a.createElement("span",{className:"title is-5 first-name"},"Olivier "),l.a.createElement("span",{className:"title is-5 last-name"}," Esuka")),l.a.createElement("button",{className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false"},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{className:"navbar-menu"},l.a.createElement("div",{className:"navbar-end"},l.a.createElement(r.b,{to:"/",className:"navbar-item"},"Home"),l.a.createElement(r.b,{to:"/resume",className:"navbar-item"},"Resume"),l.a.createElement(r.b,{to:"/contact",className:"navbar-item"},"Contact")))))}),d=t(8),b=t(9),f=t(11),N=t(10),p=t(12),v=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(l)))).state={github:{}},t}return Object(p.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.fetchMyGitHubProfile()}},{key:"fetchMyGitHubProfile",value:function(){var e=this;fetch("https://api.github.com/users/oesukam").then(function(e){return e.json()}).then(function(a){e.setState({github:a||{}})})}},{key:"render",value:function(){var e=this.state.github;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-6 is-offset-3"},l.a.createElement("h2",{className:"title is-2 has-text-centered"},"My Resume"),l.a.createElement("hr",null),l.a.createElement("div",{className:"content"},l.a.createElement("h3",{className:"title is-4"},"Personal Details"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"First Name:"),"Olivier"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Last Name:"),"Esuka"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Email:"),"oesukam@gmail.com")),l.a.createElement("h3",{className:"title is-4"},"Education"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"1997 - 2003:"),"Primary"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"2003 - 2010:")," ","Secondary"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"2011 - 2015:")," ","University")),l.a.createElement("h3",{className:"title is-4"},"Github"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Username: "),e.login),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Location: "),e.location),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Followers: "),e.followers),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Following: "),e.following),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Repos: "),e.public_repos))))))}}]),a}(n.Component),g=t(23),w=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(l)))).state={subject:"",body:""},t.handleInput=function(e){e.preventDefault();var a=e.target;t.setState(Object(g.a)({},a.name,a.value))},t.send=function(e){e.preventDefault();var a=t.state,n="mailto:oesukam@gmail.com?subject="+a.subject+"&body="+a.body;window.location.href=n},t.clear=function(){t.setState({email:"",subject:""})},t}return Object(p.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.state,a=e.subject,t=e.body;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("form",{onSubmit:this.send,className:"column is-4 is-offset-4"},l.a.createElement("h2",{className:"title is-2"},"Contact Me"),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Subject"),l.a.createElement("div",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{name:"subject",className:"input",type:"text",placeholder:"Subject",value:a,onChange:this.handleInput}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-file"})))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Message"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"body",onChange:this.handleInput,className:"textarea",placeholder:"Your message",value:t}))),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{onClick:this.send,className:"button is-info"},"Send")),l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"button",onClick:this.clear,className:"button is-light"},"Clear"))))))}}]),a}(n.Component);var y=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(r.a,null,l.a.createElement(E,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:u}),l.a.createElement(i.a,{path:"/resume",exact:!0,component:v}),l.a.createElement(i.a,{path:"/contact",exact:!0,component:w}),l.a.createElement(i.a,{path:"*",component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.8986ae29.chunk.js.map