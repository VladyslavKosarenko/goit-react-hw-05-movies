"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{774:function(r,e,t){t.d(e,{Ai:function(){return s},Hx:function(){return v},Ny:function(){return i},Y5:function(){return p},xc:function(){return f}});var n=t(861),a=t(757),c=t.n(a),o=t(340),u="815be87df7ca36934ad03a6159bc2a6d",i=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(u));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching data:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"815be87df7ca36934ad03a6159bc2a6d",r.prev=1,r.next=4,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("815be87df7ca36934ad03a6159bc2a6d","&query=").concat(e));case 4:return t=r.sent,r.abrupt("return",t.data.results||[]);case 8:r.prev=8,r.t0=r.catch(1),console.error("Error fetching data:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(u));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(u));case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(u));case 3:return t=r.sent,n=t.data.results,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},86:function(r,e,t){t.r(e);var n=t(861),a=t(439),c=t(757),o=t.n(c),u=t(791),i=t(689),s=t(87),p=t(774),f=t(184);e.default=function(){var r=(0,u.useState)([]),e=(0,a.Z)(r,2),t=e[0],c=e[1],v=(0,i.TH)();return(0,u.useEffect)((function(){var r=function(){var r=(0,n.Z)(o().mark((function r(){var e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,p.Ny)();case 3:e=r.sent,c(e.results||[]),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching data:",r.t0),c([]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Popular Movies"}),0===t.length?(0,f.jsx)("p",{children:"No movies found"}):(0,f.jsx)("ul",{children:t.map((function(r){return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(r.id),state:{from:v},children:r.title})},r.id)}))})]})}}}]);
//# sourceMappingURL=86.7bb2f4ae.chunk.js.map