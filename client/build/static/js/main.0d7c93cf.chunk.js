(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(71)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(31),r=n.n(o),c=(n(39),n(8)),i=n(9),s=n(11),u=n(10),m=n(12),h=n(13),f=n(7);n(40),n(41);var d=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Google Books"),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{to:"/",className:"/"===window.location.pathname||"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Bookmarked")))))};function k(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function v(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":" justify-content-md-center")},n)}function E(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(48);var p=function(e){return l.a.createElement("form",{className:"search"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"}),l.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"title",type:"text",placeholder:"Search for a title"}),l.a.createElement("button",{className:"btn",type:"submit",onClick:e.handleFormSubmit},l.a.createElement("i",{class:"fas fa-search"}))))};n(49);function b(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function g(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var w=n(16),y=n.n(w),C={getBooks:function(){return y.a.get("/api/books")},saveBook:function(e){return y.a.post("/api/books",e)},deleteBook:function(e){return y.a.delete("/api/books/"+e)},getBookFromGoogle:function(e){var t=e.split(" ").join("+");return y.a.get("https://www.googleapis.com/books/v1/volumes?q="+t+"&key=AIzaSyBJ9yNdcp3LTfsLd3aqWkdV6JMOn6ivrpc")}};n(67);var B=function(e){return l.a.createElement("button",Object.assign({className:"BookmarkBtn"},e),l.a.createElement("i",{class:"fas fa-bookmark"}))};n(68);var j=function(e){return l.a.createElement("button",{className:"linkBtn",onClick:e.onClick},l.a.createElement("i",{class:"fas fa-link"}))},N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={search:"",results:[]},n.handleInputChange=function(e){n.setState({search:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault(),C.getBookFromGoogle(n.state.search).then(function(e){n.setState({results:e.data.items})}).catch(function(e){return console.log(e)})},n.handleViewClick=function(e){window.location=e},n.handleSaveClick=function(e){e.imageLinks?C.saveBook({title:e.title,author:e.authors,synopsis:e.description,image:e.imageLinks.smallThumbnail,link:e.previewLink}).then(function(e){return console.log("SAVED ITEM... ")}).catch(function(e){return console.log(e)}):C.saveBook({title:e.title,author:e.authors,synopsis:e.description,image:"blank",link:e.previewLink}).then(function(e){return console.log("SAVED ITEM... ")}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(k,null,l.a.createElement(v,null,l.a.createElement(E,{size:"md-6"},l.a.createElement("h4",null,"Search & Bookmark your favourites Books")),l.a.createElement(E,{size:"md-6"},l.a.createElement(p,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}))),l.a.createElement(v,null,l.a.createElement(E,{size:"md-12"},this.state.results.length?l.a.createElement(b,null,this.state.results.map(function(t){return l.a.createElement(g,{key:t.id},l.a.createElement("h2",null,l.a.createElement("strong",null,t.volumeInfo.title)),l.a.createElement(k,null,l.a.createElement("h5",null,"Authors: "),l.a.createElement("h2",null,t.volumeInfo.authors.join(", "))),l.a.createElement("p",null,l.a.createElement("img",{alt:"bookCover",src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.smallThumbnail:""}),t.volumeInfo.description?t.volumeInfo.description:"No Description Available"),l.a.createElement(B,{onClick:function(){return e.handleSaveClick(t.volumeInfo)}}),l.a.createElement(j,{onClick:function(){return e.handleViewClick(t.volumeInfo.previewLink)}}))})):l.a.createElement("p",null))))}}]),t}(a.Component);n(69);var O=function(e){return l.a.createElement("button",Object.assign({className:"delete-btn"},e),l.a.createElement("i",{class:"fas fa-trash"}))},I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},n.loadBooks=function(){C.getBooks().then(function(e){n.setState({books:e.data})})},n.handleViewClick=function(e){window.location=e},n.handleDeleteClick=function(e){C.deleteBook(e).then(function(e){console.log("deleted book"),n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(k,{fluid:!0},l.a.createElement(v,null,l.a.createElement(E,{size:"md-12"},l.a.createElement("h3",null,"Bookmarked Books"),this.state.books.length?l.a.createElement(b,null,this.state.books.map(function(t){return l.a.createElement(g,{key:t._id},l.a.createElement(k,null,l.a.createElement("h4",null,l.a.createElement("strong",null,t.title)),l.a.createElement("b",null,l.a.createElement("span",null,"Authors: "),l.a.createElement("span",null,t.author.join(", ")))),l.a.createElement("br",null),l.a.createElement(k,null,l.a.createElement("p",null,l.a.createElement("img",{alt:"bookCover",src:t.image?t.image:""}),t.synopsis?t.synopsis:"No Description Available"),l.a.createElement(O,{onClick:function(){return e.handleDeleteClick(t._id)}}),l.a.createElement(j,{onClick:function(){return e.handleViewClick(t.link)}})))})):l.a.createElement("h5",null,"You haven't bookmarked anything yet"))))}}]),t}(a.Component);n(70);var S=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))},A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(S,null,l.a.createElement(f.a,{exact:!0,path:"/",component:N}),l.a.createElement(f.a,{exact:!0,path:"/saved",component:I}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.0d7c93cf.chunk.js.map