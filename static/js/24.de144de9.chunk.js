"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[24],{9024:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r,a,c,u,o=n(5861),i=n(9439),s=n(7757),p=n.n(s),l=n(168),d=n(6444),f=n(861),v=(d.ZP.ul(r||(r=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n"]))),d.ZP.li(a||(a=(0,l.Z)(["\n    display: flex;\n    align-items:center;\n    gap: 10px;\n"]))),d.ZP.button(c||(c=(0,l.Z)(["\n    margin-left: 6px;\n    padding: 4px 6px;\n"])))),g=(0,d.ZP)(f.gsC)(u||(u=(0,l.Z)(["\ncolor: black;\n"]))),h=n(7596),x=n(9963),m=n(311),Z=n(2791),w=n(1087),y=n(184),b=function(){var e,t=(0,w.lr)(),n=(0,i.Z)(t,2),r=n[0],a=n[1],c=null!==(e=r.get("query"))&&void 0!==e?e:"",u=(0,Z.useState)(c),s=(0,i.Z)(u,2),l=s[0],d=s[1],f=(0,Z.useState)(null),b=(0,i.Z)(f,2),k=b[0],_=b[1];return(0,Z.useEffect)((function(){if(c.trim()){var e=function(){var e=(0,o.Z)(p().mark((function e(){var t,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Xc)(c);case 2:if(t=e.sent,0!==(n=t.results).length){e.next=7;break}return h.Am.error("WRONG MOVIE NAME",{transition:h.LG,position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",icon:(0,y.jsx)(g,{})}),e.abrupt("return");case 7:_(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[c]),(0,y.jsxs)("div",{style:{padding:"20px"},children:[(0,y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({query:l})},children:[(0,y.jsx)("input",{style:{padding:"4px 10px"},onChange:function(e){var t=e.target.value;d(t.toLowerCase())},type:"text",value:l,autoComplete:"off",autoFocus:!0,placeholder:"Search favorite movie"}),(0,y.jsx)(v,{type:"submit",children:"Search"})]}),k&&(0,y.jsx)("div",{children:(0,y.jsx)(x.Z,{trendMovie:k})})]})}},311:function(e,t,n){n.d(t,{NX:function(){return l},Xc:function(){return s},nv:function(){return d},rX:function(){return p},ux:function(){return i}});var r=n(5861),a=n(7757),c=n.n(a),u=n(3263);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="?api_key=7df6de4dd7060a529be76412dec8d9af",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat("/trending/movie/day").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,title:e.title,poster_path:e.poster_path}})));case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80  error RequestTrendingMovies",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat("/search/movie").concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80  error RequestSearchMovies",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t).concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80  error RequestMovie_Id",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/credits").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80  error RequestMovie_IdCredits",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/reviews").concat(o,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80  error RequestMovie_IdReviews",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},9963:function(e,t,n){n.d(t,{Z:function(){return d}});var r,a,c=n(1087),u=n(7689),o=n(168),i=n(6444),s=i.ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 0px 20px;\n  gap: 8px;\n\n    \n"]))),p=i.ZP.li(a||(a=(0,o.Z)(["\n    display: flex;\n    align-items:center;\n    flex-direction: column;\n    gap: 10px;\n\n"]))),l=n(184),d=function(e){var t=e.trendMovie,n=(0,u.TH)();return(0,l.jsx)(s,{children:t.map((function(e){var t=e.id,r=e.title,a=e.poster_path;return(0,l.jsxs)(p,{children:[(0,l.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w400").concat(a),alt:r,width:70}),(0,l.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:n.pathname+n.search},children:r})]},t)}))})}}}]);
//# sourceMappingURL=24.de144de9.chunk.js.map