(window["webpackJsonpmovie-app"]=window["webpackJsonpmovie-app"]||[]).push([[7],{183:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){e.exports=a.p+"static/media/profile-fail.4898d1f6.png"},213:function(e,t,a){"use strict";a.r(t);var n=a(23),i=a(24),s=a(25),r=a(26),l=a(27),c=a(0),o=a.n(c),m=a(11),p=a(17),d=a(132),h=a(133),u=a(63),f=a(165),b=a(135),g=a(139),v=a(14),E=a(28),k=(a(183),function(e){return o.a.createElement("div",{className:e.className,onClick:e.handleClick},o.a.createElement("h2",{className:"title mb-3"},e.title),o.a.createElement("ul",{className:"p-0 list-unstyled d-flex inline-list"},function(e){return e.list.map((function(e){var t=e.name,a=e.id;return o.a.createElement("li",{className:"mr-4 title small-bold inline-list__item",key:a,id:"".concat(a,",").concat(t),value:t},o.a.createElement(E.a,{className:"fontAwesome mr-2",icon:v.d}),t)}))}(e)))}),N=a(166),w=a(47),y=a(184),M=a.n(y),x=a(69),O=(a(200),a(201)),C=a.n(O),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={display:!0},a.renderSlides=function(){return a.props.list.map((function(e){var t=e.profile_path,a=(e.credit_id,e.id),n={backgroundImage:"url(".concat(t?"https://image.tmdb.org/t/p/w342".concat(t):"".concat(C.a),")")};return o.a.createElement(x.a,{to:"/MovieApp/person/".concat(a),key:a},o.a.createElement("div",{className:"slider__slide"},o.a.createElement("div",{className:"slider__img",style:n})))}))},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.className},o.a.createElement("h2",{className:"title mb-3"},this.props.title),o.a.createElement("div",{style:{width:this.state.width+"px",display:this.state.display?"block":"none"}},o.a.createElement(M.a,Object.assign({className:"slider"},{infinite:!1,speed:400,slidesToShow:9,slidesToScroll:1,autoplay:!0,responsive:[{breakpoint:480,settings:{slidesToShow:5}},{breakpoint:1440,settings:{slidesToShow:6}},{breakpoint:796,settings:{slidesToShow:8}}]}),this.renderSlides())))}}]),t}(c.Component),j=a(40),S=a(16),T=a(202),R=a.n(T),q=a(145),I=a(143),B=a(138),A=a.n(B),V=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).handleClickBack=function(){S.a.goBack()},a.openModal=function(){a.setState({isVideoModalOpen:!0})},a.handleClickInlineList=function(e){var t=e.target.id.split(",");a.props.currentTap({tap:{id:parseInt(t[0],10),name:t[1]}}),S.a.push("/MovieApp")},a.state={isVideoModalOpen:!1},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovieRequest(this.props.computedMatch.params.id),this.props.fetchCreditsRequest(this.props.computedMatch.params.id)}},{key:"componentDidUpdate",value:function(e){e.computedMatch.params.id!==this.props.computedMatch.params.id&&(this.props.fetchMovieRequest(this.props.computedMatch.params.id),this.props.fetchCreditsRequest(this.props.computedMatch.params.id))}},{key:"render",value:function(){var e=this,t=this.props.movie,a=t.poster_path,n=t.title,i=t.tagline,s=t.vote_average,r=t.spoken_languages,l=t.runtime,c=t.release_date,m=t.genres,p=t.overview,E=t.imdb_id,y=t.homepage,M=t.videos,x=this.props.credits;return o.a.createElement(d.a,{fluid:!0},o.a.createElement(I.a,{title:n}),o.a.createElement(h.a,{className:"px-xs-0 align-items-center"},o.a.createElement(u.a,{lg:5,sm:12},o.a.createElement(f.a,{src:a?"https://image.tmdb.org/t/p/w780".concat(a):"".concat(A.a)})),o.a.createElement(u.a,{lg:6,sm:12},o.a.createElement(b.a,{size:"lg",main:n,sub:i}),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center flex-wrap mb-lg-20 mb-xl-60 mb-xs-40"},o.a.createElement(g.a,{Rate:s/10*5,text:s,className:"mr-xs-20 mb-xs-10"}),o.a.createElement("h3",{className:"text-light title"},r&&r.length>0&&r[0].name," ","/ ",l," min. / ",c&&c.split("-")[0])),m&&m.length>0&&o.a.createElement(k,{list:m||[],title:"The Genres",className:"mb-xs-40",handleClick:function(t){return e.handleClickInlineList(t)}}),p&&o.a.createElement(N.a,{title:"The Synopsis",p:p,className:"mb-xs-40"}),x&&x.length>0&&o.a.createElement(_,{list:x||[],title:"the cast",className:"mb-xs-40"}),o.a.createElement("div",{className:"d-flex justify-content-between align-items-start"},o.a.createElement("div",{className:"d-flex flex-wrap"},y&&o.a.createElement("a",{href:y,rel:"noopener noreferrer",target:"_blank"},o.a.createElement(w.a,{className:"mr-4 mb-3",icon:v.h,iconMargin:"l",order:"1",theme:"outline-primary",content:"Website"})),o.a.createElement("a",{href:"https://www.imdb.com/title/".concat(E),rel:"noopener noreferrer",target:"_blank"},o.a.createElement(w.a,{className:"mr-4 mb-3",icon:j.b,iconMargin:"l",order:"1",theme:"outline-primary",content:"IMDB"})),M&&M.results.length>0&&o.a.createElement(w.a,{className:"mb-3",icon:v.i,iconMargin:"l",order:"1",theme:"outline-primary",content:"Trailer",handleClick:this.openModal})),o.a.createElement(w.a,{content:"Back",iconMargin:"r",icon:v.a,handleClick:this.handleClickBack})))),M&&M.results.length>0&&o.a.createElement(R.a,{channel:"youtube",isOpen:this.state.isVideoModalOpen,videoId:M&&M.results[0].key,onClose:function(){return e.setState({isVideoModalOpen:!1})}}),o.a.createElement(q.a,{type:"recommended",className:"mt-xs-60"}))}}]),t}(c.Component);t.default=Object(p.b)((function(e){return{movie:e.movies,credits:e.credits.cast}}),{fetchMovieRequest:m.i,fetchCreditsRequest:m.e,currentTap:m.b})(V)}}]);
//# sourceMappingURL=7.d8dd1708.chunk.js.map