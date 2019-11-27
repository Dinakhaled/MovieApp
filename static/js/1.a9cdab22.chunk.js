(window["webpackJsonpmovie-app"]=window["webpackJsonpmovie-app"]||[]).push([[1],{135:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(145);t.a=function(e){var t=e.main,a=e.sub,r=e.size;return n.a.createElement(n.a.Fragment,null,"lg"===r?n.a.createElement("div",{className:"mb-xs-20"},n.a.createElement("div",null,n.a.createElement("h1",{className:"h1-2-light title"},t),n.a.createElement("h2",{className:"title title__sub"},a))):n.a.createElement("div",{className:"mb-xs-40"},n.a.createElement("div",null,n.a.createElement("h1",{className:"h1-light title mb-1"},t),n.a.createElement("h3",{className:"title"},a))))}},136:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(131);a(147);t.a=function(){return n.a.createElement("div",{className:"spinner"},n.a.createElement(c.a,{animation:"border",variant:"primary"}))}},137:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(154),s=a.n(c),o=a(14),i=a(155),l=a(28);a(146);t.a=function(e){var t=e.Rate,a=e.text,r=e.className;return n.a.createElement("div",{className:"".concat(r," ").concat(a?"d-flex align-items-center":"")},n.a.createElement(s.a,{className:"rating",emptySymbol:n.a.createElement(l.a,{className:"fontAwesome",icon:i.a,size:"1x"}),fullSymbol:n.a.createElement(l.a,{className:"fontAwesome",icon:o.l,size:"1x"}),initialRating:t,readonly:!0}),a?n.a.createElement("p",{className:"m-0 small-bold text-primary"},a):null)}},140:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(47),s=a(69),o=a(14),i=a(16);t.default=function(e){var t=e.title,a=i.a.location;return n.a.createElement("div",{className:"text-center d-flex align-items-center justify-content-center h-100 flex-column"},n.a.createElement("h1",{className:"h1-2-light"},"Sorry!"),n.a.createElement("h2",{className:"h2-2"},t),n.a.createElement("img",{src:"/assets/images/not-found.png",className:"w-50 mb-4",alt:"not-found"}),"/"===a.pathname?null:n.a.createElement(s.a,{to:"/",className:"d-flex justify-content-center"},n.a.createElement(c.a,{icon:o.g,iconMargin:"l",order:"1",theme:"primary",content:"Home"})))}},141:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(161),s=a.n(c);t.a=function(e){var t=e.title;return n.a.createElement(s.a,null,n.a.createElement("title",null,t||"Movies"))}},143:function(e,t,a){"use strict";var r=a(12),n=a(23),c=a(24),s=a(25),o=a(26),i=a(27),l=a(0),p=a.n(l),u=a(11),m=a(17),h=a(135),f=a(209),d=a(69),b=a(137),v=a(136),g=a(156),y=(a(152),p.a.lazy((function(){return a.e(8).then(a.bind(null,208))}))),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).scrollToTop=function(){g.animateScroll.scrollToTop()},a.state={isLoaded:!0},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement(p.a.Fragment,null,this.props.list&&this.props.list.map((function(t){var a=t.title,r=t.id,n=t.poster_path,c=t.vote_average;return p.a.createElement(d.a,{to:"/movie/".concat(r),key:r,className:"card-space",onClick:e.scrollToTop()},p.a.createElement(f.a,{className:"border-0 card text-center d-flex align-items-center"},p.a.createElement(l.Suspense,{fallback:p.a.createElement(v.a,null)},p.a.createElement(y,{src:n})),p.a.createElement(f.a.Body,null,p.a.createElement(f.a.Title,null,p.a.createElement("h2",{className:"h2-light card__title"},a)),p.a.createElement(b.a,{Rate:c/10*5}))))})))}}]),t}(l.Component),E=a(47),j=a(14),w=a(16),N=function(e){w.a.push({search:"?page=".concat(e)})};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var P=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleClick=function(e,t){var r=e.page;switch(N(t?r+1:r-1),!0){case w.a.location.pathname.includes("movie"):a.props.fetchRecommendedMoviesRequest(w.a.location.pathname.replace("/",""),{page:w.a.location.search.split("=")[1]});break;case w.a.location.pathname.includes("person"):a.props.fetchMoviesReq("",{page:w.a.location.search.split("=")[1],with_genres:!0,with_cast:w.a.location.pathname.replace("/person/","")});break;default:a.props.fetchMoviesReq(a.props.tap.api,{page:w.a.location.search.split("=")[1],with_genres:1===a.props.tap.id||2===a.props.tap.id||3===a.props.tap.id?"":a.props.tap.id,query:a.props.search?a.props.search:"",sort_by:a.props.sortKey?a.props.sortKey:""})}},a.renderNextBtn=function(){return a.props.currentPage(a.props.movies.page||1),p.a.createElement("div",{onClick:function(){return a.handleClick(a.props.movies,!0)}},p.a.createElement(E.a,{content:"page ".concat(a.props.movies.page+1),theme:"primary",icon:j.b,order:"1",iconMargin:"l"}))},a.renderBackBtn=function(){return p.a.createElement("div",{onClick:function(){return a.handleClick(a.props.movies,!1)}},p.a.createElement(E.a,{content:"page ".concat(a.props.movies.page-1),theme:"primary",icon:j.a,order:"0",iconMargin:"r"}))},a.state={},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.movies.total_pages-this.props.movies.page,t=this.props.movies.page>1,a=t?"d-flex align-items-center  justify-content-between":"d-flex align-items-center justify-content-end";return p.a.createElement("div",{className:a},t?this.renderBackBtn():"",0!==e?this.renderNextBtn():"")}}]),t}(l.Component),x=Object(m.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.currentTap,{movies:e.movies},e.searchKeyword,{sortKey:e.sortBy,page:e.currentPage})}),{currentTap:u.b,fetchMoviesReq:u.k,searchKeyword:u.q,sortBy:u.r,currentPage:u.a,fetchRecommendedMoviesRequest:u.o})(P),R=(a(153),a(167));function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=[{value:"popularity.desc",label:"Popularity"},{value:"vote_average.desc",label:"Votes Average"},{value:"original_title.asc",label:"Title"},{value:"release_date.desc",label:"Release Date"}],q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){a.setState({selected:e},(function(){a.props.sortBy(a.state.selected.value),a.props.click(a.state.selected.value)}))},a.state={sortingList:C,selected:C[0]},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement(R.a,{value:this.state.selected,options:this.state.sortingList,className:"sort mb-xs-40",theme:function(e){return M({},e,{colors:M({},e.colors,{text:"#263238",primary25:"rgba(84, 110, 122, 0.3)",primary:"#263238"})})},onChange:function(t){e.handleChange(t)}})}}]),t}(l.Component),D=Object(m.b)((function(e){return M({},e.sortBy)}),{sortBy:u.r})(q),S=a(140);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var B=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleClick=function(e){a.props.fetchMoviesReq(a.props.tap.api,{page:a.props.page,with_genres:a.props.tap.api?"":a.props.tap.id,sort_by:e||""})},a.state={},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){switch(!0){case"person"===this.props.type:this.props.fetchMoviesReq("",{page:w.a.location.search.split("=")[1],with_cast:w.a.location.pathname.replace("/person/",""),with_genres:!0});break;case"recommended"===this.props.type:this.props.fetchRecommendedMoviesRequest(w.a.location.pathname.replace("/",""),{page:w.a.location.search.split("=")[1]});break;default:this.props.fetchMoviesReq(this.props.tap.api,{page:w.a.location.search.split("=")[1],with_genres:this.props.tap.api?"":this.props.tap.id})}}},{key:"render",value:function(){var e=this.props,t=e.results,a=e.className,r=e.main,n=e.type;return p.a.createElement("div",{className:a},p.a.createElement(h.a,{main:r||"Recommended",sub:"movies"}),this.props.tap.api||this.props.search||n?null:p.a.createElement(D,{click:this.handleClick}),t&&t.length>0?p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"grid-5 mx-auto"},p.a.createElement(O,{list:t})),p.a.createElement(x,{type:n})):p.a.createElement(S.default,{title:"There are no movies..."}))}}]),t}(l.Component);t.a=Object(m.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.movies,{},e.currentTap,{},e.searchKeyword)}),{fetchRecommendedMoviesRequest:u.o,fetchMoviesReq:u.k,currentTap:u.b,searchKeyword:u.q})(B)},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},163:function(e,t,a){"use strict";var r=a(144),n=a(0),c=a.n(n),s=a(136);a(180);t.a=function(e){var t=e.src,a=Object(n.useState)(!1),o=Object(r.a)(a,2),i=o[0],l=o[1];return c.a.createElement(c.a.Fragment,null,i?null:c.a.createElement(s.a,null),c.a.createElement("div",{className:"image-wrapper ".concat(i?"":"d-none")},c.a.createElement("img",{src:t||"/assets/images/image-fail.png",alt:t,className:"image ".concat(i?"":"d-none"),onLoad:function(){l(!0)}})))}},164:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.title,a=e.p,r=e.className;return n.a.createElement("div",{className:r},n.a.createElement("h2",{className:"title mb-3"},t),n.a.createElement("p",null,a))}},180:function(e,t,a){}}]);
//# sourceMappingURL=1.a9cdab22.chunk.js.map