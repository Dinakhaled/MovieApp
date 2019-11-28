(window["webpackJsonpmovie-app"]=window["webpackJsonpmovie-app"]||[]).push([[2],{107:function(e,t,r){},108:function(e,t,r){},109:function(e,t,r){},11:function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"g",(function(){return c})),r.d(t,"j",(function(){return o})),r.d(t,"k",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"q",(function(){return s})),r.d(t,"p",(function(){return l})),r.d(t,"r",(function(){return p})),r.d(t,"h",(function(){return f})),r.d(t,"i",(function(){return b})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return O})),r.d(t,"a",(function(){return m})),r.d(t,"n",(function(){return h})),r.d(t,"o",(function(){return y})),r.d(t,"l",(function(){return v})),r.d(t,"m",(function(){return j})),r.d(t,"c",(function(){return g}));var n=r(4),a=function(e){return{type:n.f,payload:e}},c=function(){return{type:n.g}},o=function(e){return{type:n.h,payload:e}},i=function(e,t){return{type:n.i,params:t,getBy:e}},u=function(e){return{type:n.b,payload:e}},s=function(e){return{type:n.n,payload:e}},l=function(e){return{type:n.o,payload:e}},p=function(e){return{type:n.r,payload:e}},f=function(e){return{type:n.p,payload:e}},b=function(e){return{type:n.q,id:e}},d=function(e){return{type:n.d,payload:e}},O=function(e){return{type:n.e,id:e}},m=function(e){return{type:n.a,payload:e}},h=function(e){return{type:n.l,payload:e}},y=function(e,t){return{type:n.m,id:e,params:t}},v=function(e){return{type:n.j,payload:e}},j=function(e){return{type:n.k,id:e}},g=function(e){return{type:n.c,payload:e}}},128:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(33),o=r.n(c),i=r(12),u=r(23),s=r(24),l=r(25),p=r(26),f=r(27),b=r(134),d=r(130),O=r(14),m=r(28),h=r(17),y=r(11),v=r(16),j=(r(81),function(e){function t(e){var r;return Object(u.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),r.props.searchKeyword({search:r.state.search}),r.props.fetchMoviesReq(r.props.api,{page:1,query:r.state.search}),r.setState({search:""}),r.props.sortBy({sortBy:""}),v.a.push("/MovieApp")},r.handleChange=function(e){r.setState({search:e.target.value})},r.state={search:""},r}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.className;return a.a.createElement(b.a,{className:"form-search ".concat(t),onSubmit:function(t){return e.handleSubmit(t)}},a.a.createElement(d.a,null,a.a.createElement(d.a.Prepend,null,a.a.createElement(d.a.Text,{className:"form-search__icon",id:"basic-addon1"},a.a.createElement(m.a,{className:"fontAwesome",icon:O.k,size:"1x"}))),a.a.createElement(b.a.Control,{className:"form-search__input",placeholder:"Search for a movie...","aria-label":"search","aria-describedby":"basic-addon1",value:this.state.search,onChange:function(t){return e.handleChange(t)}})))}}]),t}(n.Component)),g=Object(h.b)(null,{currentTap:y.b,fetchMoviesReq:y.k,searchKeyword:y.q,sortBy:y.r})(j),E=r(132),w=r(133),P=r(63),k=r(131),x=(r(82),function(){return a.a.createElement("div",{className:"h-100 d-flex mt-md-180 justify-content-center"},a.a.createElement(k.a,{animation:"grow",variant:"primary"}))}),S=r(129),D=a.a.lazy((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,209))})),_=a.a.lazy((function(){return Promise.all([r.e(0),r.e(5),r.e(1),r.e(7)]).then(r.bind(null,213))})),M=a.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(10)]).then(r.bind(null,210))})),N=a.a.lazy((function(){return r.e(9).then(r.bind(null,142))})),R=a.a.createElement(n.Suspense,{fallback:a.a.createElement(x,null)},a.a.createElement(S.a,{history:v.a},a.a.createElement(S.b,null,a.a.createElement(D,{path:"/MovieApp",exact:!0}),a.a.createElement(_,{path:"/MovieApp/movie/:id"}),a.a.createElement(M,{path:"/MovieApp/person/:id"}),a.a.createElement(N,{title:"This page doesn't exist...",path:"**"})))),C=(r(84),function(){v.a.push("/MovieApp")}),T=function(){return a.a.createElement("div",{className:"logo",onClick:C})},q=r(47);r(90);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var z=function(e){function t(e){var r;return Object(u.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){var t=e.name,n=e.icon,a=e.id,c=e.api;r.props.currentTap({tap:{id:a,name:t,icon:n,api:c}}),r.props.click(c,a)},r.renderList=function(){return r.props.list.map((function(e){var t=e.name,n=e.icon,c=e.id,o=e.api;return a.a.createElement("li",{className:"list__item mb-2 ".concat(c===r.props.tap.id?"active":""),key:c,onClick:function(){return r.handleClick({name:t,icon:n,id:c,api:o})}},a.a.createElement(q.a,{content:t,theme:"outline-secondary",size:"lg",icon:n||O.d,iconMargin:"r"}))}))},r.state={list:r.props.list},r}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",{className:"mb-3 title"},this.props.title),a.a.createElement("ul",{className:"list mb-lg-40"},this.renderList()))}}]),t}(a.a.Component),I=Object(h.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.currentTap)}),{currentTap:y.b})(z),U=r(40),F=(r(91),function(){return a.a.createElement("div",{className:"footer py-5"},a.a.createElement("h3",null,"Contact me"),a.a.createElement("ul",{className:"footer__list"},a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.linkedin.com/in/dina-hassan-a09655138/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(m.a,{className:"fontAwesome",icon:U.c,size:"2x"}))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/Dinakhaled",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(m.a,{className:"fontAwesome",icon:U.a,size:"2x"}))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.linkedin.com/in/dina-hassan-a09655138/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(m.a,{className:"fontAwesome",icon:O.e,size:"2x"})))))}),G=r(66);r(107);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var B=[{name:"Popular",api:"popular",icon:O.f,id:1},{name:"Top Rated",api:"top_rated",icon:O.j,id:2},{name:"Upcoming",api:"upcoming",icon:O.c,id:3}],K=function(e){function t(e){var r;return Object(u.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e,t){r.props.searchKeyword({search:""}),r.props.fetchMoviesReq(e,{page:1,with_genres:e?"":t,sort_by:r.props.sortKey}),v.a.push("/MovieApp"),r.setState({isMenuOpen:!1})},r.isMenuOpen=function(e){var t=e.isOpened;r.setState({isMenuOpen:t})},r.state={discover:B,isMenuOpen:null},r}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchGenresReq()}},{key:"renderMenu",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null),a.a.createElement(I,{click:this.handleClick,list:this.state.discover,title:"Discover"}),a.a.createElement(I,{click:this.handleClick,list:this.props.genres||[],title:"genres"}),a.a.createElement(F,null))}},{key:"checkDisplayMode",value:function(e){var t=this.state.isMenuOpen;switch(e){case"mobile":return a.a.createElement(G.slide,{onStateChange:this.isMenuOpen,isOpen:t},this.renderMenu());default:return this.renderMenu()}}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.type;return a.a.createElement("div",{className:"side-menu px-4 ".concat(t)},this.checkDisplayMode(r))}}]),t}(n.Component),L=Object(h.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.currentTap,{},e.genres,{sortKey:e.sortBy},e.searchKeyword)}),{fetchGenresReq:y.g,currentTap:y.b,fetchMoviesReq:y.k,sortBy:y.r,searchKeyword:y.q})(K),V=(r(108),function(e){var t=e.isMobile,r=e.loading;return a.a.createElement(a.a.Fragment,null,a.a.createElement(P.a,{xl:2,lg:12,className:"pl-0 ".concat(t&&"custom-navbar custom-navbar--mobile")},a.a.createElement(L,{className:"d-lg-block ".concat(t?"mb-xs-60":""),type:t?"mobile":""}),t&&a.a.createElement(g,null)),a.a.createElement(P.a,{lg:12,xl:10,className:"py-4 routes-container ".concat(t?"mt-xs-80 px-4":"px-5")},r?a.a.createElement(x,null):null,a.a.createElement("div",{className:"".concat(r?"d-none":"")},a.a.createElement(S.a,{history:v.a},R))))});r(109);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var X=function(e){function t(e){var r;return Object(u.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).changeMobile=function(){window.matchMedia("(max-width: 1024px)").matches?r.setState({isMobile:!0}):r.setState({isMobile:!1})},r.state={isMobile:null},window.addEventListener("resize",r.changeMobile),r}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.isMobile,t=this.props.loading;return a.a.createElement(E.a,{fluid:!0,className:e&&"p-0"},!e&&a.a.createElement(w.a,{className:"mx-auto"},a.a.createElement(P.a,{lg:{span:3,offset:9},className:"pt-4"},a.a.createElement(g,{className:"mb-4"}))),a.a.createElement(w.a,{className:"mx-auto"},a.a.createElement(V,{isMobile:e,loading:t})))}}]),t}(n.Component),J=Object(h.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.loader)}),{loader:y.p})(X),W=r(19),Y=r(4);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee={};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne={tap:{id:1,name:"Popular",api:"popular",icon:O.f}};function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe={},ie={},ue={loading:!1};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe={};function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de={},Oe=Object(W.c)({genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.f:return $({},e,{},t.payload);default:return e}},currentTap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.b:return re({},e,{},t.payload);default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.h:case Y.p:case Y.l:return ce({},e,{},t.payload);default:return e}},searchKeyword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.n:return t.payload;default:return e}},loader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.o:return t.payload;default:return e}},sortBy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"popularity.desc",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.r:return t.payload;default:return e}},credits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.d:return le({},e,{},t.payload);default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.a:return t.payload;default:return e}},person:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.j:return be({},e,{},t.payload);default:return e}},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.c:return t.payload;default:return e}}}),me=r(68),he=r(9),ye=r.n(he),ve=r(13),je=r(30),ge=r(67);function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(e.hasOwnProperty("handlerEnabled")&&!e.handlerEnabled)},Pe=function(e){return we(e.config)&&(Ye.dispatch(Object(y.p)({loading:!1})),Ye.dispatch(Object(y.c)(e.response.data.status_message))),Promise.reject(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))};function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ke(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se=r.n(ge).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"2fbdb6b89a7ce56a574f8d6328b92a72"}});Se.interceptors.request.use((function(e){return function(e){return we(e)&&Ye.dispatch(Object(y.p)({loading:!0})),e}(e)})),Se.interceptors.response.use((function(e){return function(e){return we(e)&&(Ye.dispatch(Object(y.p)({loading:!1})),Ye.dispatch(Object(y.c)(""))),e}(e)}),(function(e){return Pe(e)}));var De=function(e,t){switch(!0){case!e.with_genres&&!e.query:return"/movie/".concat(t);case e.query&&!e.with_genres:return"/search/movie/";default:return"discover/movie"}},_e=function(){var e=Object(je.a)(ye.a.mark((function e(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.get("/genre/movie/list",{handlerEnabled:!1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=Object(je.a)(ye.a.mark((function e(t,r){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.get("".concat(De(r,t)),{params:xe({},r)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(je.a)(ye.a.mark((function e(t){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.get("/movie/".concat(t),{params:{append_to_response:"videos"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(je.a)(ye.a.mark((function e(t,r){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.get("/".concat(t,"/recommendations"),{params:xe({},r)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Ce={getGenre:_e,getMovies:Me,getMovie:Ne,getcredits:function(){var e=Object(je.a)(ye.a.mark((function e(t){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.get("/movie/".concat(t,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getRecommendMovies:Re,getPerson:function(){var e=Object(je.a)(ye.a.mark((function e(t){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.get("/person/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Te=ye.a.mark(Fe),qe=ye.a.mark(Ge),Ae=ye.a.mark(He),ze=ye.a.mark(Be),Ie=ye.a.mark(Ke),Ue=ye.a.mark(Le);function Fe(){var e;return ye.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ve.a)(Ce.getGenre);case 3:return e=t.sent,t.next=6,Object(ve.b)(Object(y.f)(e.data));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),Te,null,[[0,8]])}function Ge(e){var t,r,n;return ye.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.getBy,r=e.params,a.prev=1,a.next=4,Object(ve.a)(Ce.getMovies,t,r);case 4:return n=a.sent,a.next=7,Object(ve.b)(Object(y.j)(n.data));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:case"end":return a.stop()}}),qe,null,[[1,9]])}function He(e){var t,r;return ye.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.prev=1,n.next=4,Object(ve.a)(Ce.getMovie,t);case 4:return r=n.sent,n.next=7,Object(ve.b)(Object(y.h)(r.data));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),Ae,null,[[1,9]])}function Be(e){var t,r;return ye.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.prev=1,n.next=4,Object(ve.a)(Ce.getcredits,t);case 4:return r=n.sent,n.next=7,Object(ve.b)(Object(y.d)(r.data));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),ze,null,[[1,9]])}function Ke(e){var t,r,n;return ye.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.id,r=e.params,a.prev=1,a.next=4,Object(ve.a)(Ce.getRecommendMovies,t,r);case 4:return n=a.sent,a.next=7,Object(ve.b)(Object(y.n)(n.data));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:case"end":return a.stop()}}),Ie,null,[[1,9]])}function Le(e){var t,r;return ye.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.prev=1,n.next=4,Object(ve.a)(Ce.getPerson,t);case 4:return r=n.sent,n.next=7,Object(ve.b)(Object(y.l)(r.data));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),Ue,null,[[1,9]])}var Ve=ye.a.mark(Qe);function Qe(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.c)(Y.g,Fe);case 2:return e.next=4,Object(ve.c)(Y.i,Ge);case 4:return e.next=6,Object(ve.c)(Y.q,He);case 6:return e.next=8,Object(ve.c)(Y.e,Be);case 8:return e.next=10,Object(ve.c)(Y.m,Ke);case 10:return e.next=12,Object(ve.c)(Y.k,Le);case 12:case"end":return e.stop()}}),Ve)}var Xe=Object(me.a)(),Je=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):W.d)(Object(W.a)(Xe)),We=Object(W.e)(Oe,Je);Xe.run(Qe);var Ye=We;o.a.render(a.a.createElement(h.a,{store:Ye},a.a.createElement(J,null)),document.querySelector("#root"))},16:function(e,t,r){"use strict";var n=r(21);t.a=Object(n.a)()},4:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return a})),r.d(t,"h",(function(){return c})),r.d(t,"i",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"n",(function(){return u})),r.d(t,"o",(function(){return s})),r.d(t,"r",(function(){return l})),r.d(t,"p",(function(){return p})),r.d(t,"q",(function(){return f})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return O})),r.d(t,"l",(function(){return m})),r.d(t,"m",(function(){return h})),r.d(t,"j",(function(){return y})),r.d(t,"k",(function(){return v})),r.d(t,"c",(function(){return j}));var n="FETCH_GENRES",a="FETCH_GENRES_REQUEST",c="FETCH_MOVIES",o="FETCH_MOVIES_REQUEST",i="CURRENT_TAP",u="SEARCH_KEYWORD",s="SHOW_LOADER",l="SORT_BY",p="SINGLE_MOVIE",f="SINGLE_MOVIE_REQUEST",b="FETCH_CREDITS",d="FETCH_CREDITS_REQUEST",O="CURRENT_PAGE",m="RECOMMENDED_MOVIES",h="RECOMMENDED_MOVIES_REQUEST",y="FETCH_PERSON",v="FETCH_PERSON_REQUEST",j="ERROR_MESSAGE"},47:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(65),o=(r(85),r(28));t.a=function(e){var t=e.content,r=e.size,n=e.theme,i=e.icon,u=e.iconMargin,s=e.order,l=e.className,p=e.handleClick;return a.a.createElement(c,{variant:n,size:r,className:l,onClick:function(){return p?p():null}},i&&a.a.createElement(o.a,{className:"fontAwesome m".concat(u,"-3 order-").concat(s),icon:i}),t)}},70:function(e,t,r){e.exports=r(128)},81:function(e,t,r){},82:function(e,t,r){},84:function(e,t,r){},85:function(e,t,r){},90:function(e,t,r){},91:function(e,t,r){}},[[70,3,4]]]);
//# sourceMappingURL=main.447b3402.chunk.js.map