webpackJsonp([7],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"1aj6":function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},"2jyv":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},"4yvW":function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},"771U":function(t,e,n){var r=n("2jyv");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("464a84e9",r,!1)},F7kz:function(t,e,n){var r={"./index.js":"vdRI"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="F7kz"},F88d:function(t,e,n){"use strict";var r=n("1aj6"),o=n("P+aQ"),a=!1;var i=function(t){a||n("771U")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},GZzL:function(t,e){t.exports={links:{home:"Home",about:"About",projects:"Projects",contact:"Contact"},home:{title:"Hi, I'm Allen Kim",subtitle:"A software engineer in Canada."},about:{title:"About Me"},projects:{title:"My Projects",introduction:"Some of my projects can be found on <a href='https://github.com/allenhwkim' target='_blank'>GitHub</a>."},contact:{title:"Contact Me",introduction:"You can follow me on Twitter: <a href='https://twitter.com/allenhwkim' target='_blank'>@allenhwkim</a>"}}},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,a=e.data;a.nuxtChild=!0;for(var i=n,s=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,c=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&c++,n=n.$parent;a.nuxtChildDepth=c;var f=s[c]||u,l={};r.forEach(function(t){void 0!==f[t]&&(l[t]=f[t])});var p={};return o.forEach(function(t){"function"==typeof f[t]&&(p[t]=f[t].bind(i))}),t("transition",{props:l,on:p},[t("router-view",a)])}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey"],render:function(t){return this.nuxt._redirected?t("div",["Redirecting to external page."]):this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("F7kz"),f=c.keys(),l={},p=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(p=t)}),p&&(l=_(p)),"function"!=typeof l){l.modules||(l.modules={});var d=!0,h=!1,m=void 0;try{for(var x,v=i()(f);!(d=(x=v.next()).done);d=!0){var y=x.value,g=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==g){var b=g.split(/\//);(t=C(l,b))[g=b.pop()]=_(y),t[g].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!d&&v.return&&v.return()}finally{if(h)throw m}}}var w=l instanceof Function?l:function(){return new u.default.Store(o()({strict:!1},l,{state:l.state instanceof Function?l.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),s=n.n(i),u=n("//Fk"),c=n.n(u),f=n("Xxa5"),l=n.n(f),p=n("mvHQ"),d=n.n(p),h=n("exGp"),m=n.n(h),x=n("fZjL"),v=n.n(x),y=n("woOf"),g=n.n(y),b=n("/5sW"),w=n("unZF"),_=n("qcny"),C=n("YLfZ"),k=(r=m()(l.a.mark(function t(e,n,r){var o,a,i=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!O.nuxt.err||n.path!==e.path,this._queryChanged=d()(e.query)!==d()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),j=(o=m()(l.a.mark(function t(e,n,r){var o,a,i,s,u,f,p,d=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){n.path===t.path&&d.$loading.finish&&d.$loading.finish(),n.path!==t.path&&d.$loading.pause&&d.$loading.pause(),o||(o=!0,E=Object(C.e)(n).map(function(t,e){return Object(C.b)(n.matched[e].path)(n.params)}),r(t))},t.next=6,Object(C.m)(O,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=O.nuxt.dateErr,this._hadError=!!O.nuxt.err,(i=Object(C.e)(e)).length){t.next=23;break}return t.next=12,F.call(this,i,O.context);case 12:if(!O.context._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof _.a.layout?_.a.layout(O.context):_.a.layout);case 16:return s=t.sent,t.next=19,F.call(this,i,O.context,s);case 19:if(!O.context._redirected){t.next=21;break}return t.abrupt("return");case 21:return O.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 23:return i.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(q(i,e,n)),t.prev=25,t.next=28,F.call(this,i,O.context);case 28:if(!O.context._redirected){t.next=30;break}return t.abrupt("return");case 30:if(!O.context._errored){t.next=32;break}return t.abrupt("return",r());case 32:return"function"==typeof(u=i[0].options.layout)&&(u=u(O.context)),t.next=36,this.loadLayout(u);case 36:return u=t.sent,t.next=39,F.call(this,i,O.context,u);case 39:if(!O.context._redirected){t.next=41;break}return t.abrupt("return");case 41:if(!O.context._errored){t.next=43;break}return t.abrupt("return",r());case 43:if(f=!0,i.forEach(function(t){f&&"function"==typeof t.options.validate&&(f=t.options.validate({params:e.params||{},query:e.query||{},store:T}))}),f){t.next=48;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 48:return t.next=50,c.a.all(i.map(function(t,n){if(t._path=Object(C.b)(e.matched[n].path)(e.params),t._dataRefresh=!1,d._pathChanged&&t._path!==E[n])t._dataRefresh=!0;else if(!d._pathChanged&&d._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return d._diffQuery[t]}))}if(!d._hadError&&d._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var u=Object(C.j)(t.options.asyncData,O.context).then(function(e){Object(C.a)(t,e),d.$loading.increase&&d.$loading.increase(s)});o.push(u)}if(i){var f=t.options.fetch(O.context);f&&(f instanceof c.a||"function"==typeof f.then)||(f=c.a.resolve(f)),f.then(function(t){d.$loading.increase&&d.$loading.increase(s)}),o.push(f)}return c.a.all(o)}));case 50:o||(this.$loading.finish&&this.$loading.finish(),E=i.map(function(t,n){return Object(C.b)(e.matched[n].path)(e.params)}),r()),t.next=65;break;case 53:return t.prev=53,t.t0=t.catch(25),t.t0||(t.t0={}),E=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=_.a.layout)&&(p=p(O.context)),t.next=62,this.loadLayout(p);case 62:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 65:case"end":return t.stop()}},t,this,[[25,53]])})),function(t,e,n){return o.apply(this,arguments)}),$=(a=m()(l.a.mark(function t(e){var n,r,o,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O=e.app,R=e.router,T=e.store,t.next=5,c.a.all(M(R));case 5:return n=t.sent,r=new b.default(O),o=A.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),b.default.nextTick(function(){U(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(q(n,R.currentRoute)),E=R.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(R.currentRoute.params)})),r.$loading={},A.error&&r.error(A.error),R.beforeEach(k.bind(r)),R.beforeEach(j.bind(r)),R.afterEach(N),R.afterEach(z.bind(r)),!A.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:j.call(r,R.currentRoute,R.currentRoute,function(t){if(!t)return N(R.currentRoute,R.currentRoute),S.call(r,R.currentRoute),void a();R.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),E=[],O=void 0,R=void 0,T=void 0,A=window.__NUXT__||{};function q(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=g()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);v()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function L(t,e){return A.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function M(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=m()(l.a.mark(function t(e,r,o,a,i){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=L(Object(C.l)(e),A.data?A.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function F(t,e,n){var r=this,o=["i18n"],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof w.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t])}),!a)return Object(C.i)(o,e)}function N(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=b.default.extend(t))._Ctor=t,n.components[r]=t),t})}function S(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(O.context)),this.setLayout(e)}function z(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||b.default.nextTick(function(){Object(C.f)(t).forEach(function(e,n){if(e&&-1!==t.matched[n].path.indexOf(":")&&e.constructor._dataRefresh&&E[n]===e.constructor._path&&"function"==typeof e.constructor.options.data){var r=e.constructor.options.data.call(e);for(var o in r)b.default.set(e.$data,o,r[o])}}),S.call(n,t)})}function U(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),R.afterEach(function(e,n){b.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then($).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},VuYv:function(t,e){t.exports={links:{home:"Accueil",about:"À propos",projects:"Projets",contact:"Contactez"},home:{title:"Salut, je suis Allen Kim","sub-title":"Un ingénieur logiciel au Canada."},about:{title:"À propos de moi"},projects:{title:"Mes projets",introduction:"Certains de mes projets peuvent être trouvés sur <a href='https://github.com/allenhwkim' target='_blank'>GitHub</a>."},contact:{title:"Contactez Moi",introduction:"Vous pouvez me suivre sur Twitter: <a href='https://twitter.com/allenhwkim' target='_blank'>@allenhwkim</a>"}}},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=g,e.e=b,e.f=function(t){return[].concat.apply([],t.matched.map(function(t){return h()(t.instances).map(function(e){return t.instances[e]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return j}),n.d(e,"m",function(){return $}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return p.a.resolve();return E(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=E,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?R:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l,p=i[f.name];if(null==p){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!e[c].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(l)+"`");a+=(0===d?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(p),!e[c].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');a+=f.prefix+l}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=O.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var l=t[a],p=n[2],d=n[3],h=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var y=null!=p&&null!=l&&l!==p,g="+"===x||"*"===x,b="?"===x||"*"===x,w=n[2]||s,_=h||m;r.push({name:d||o++,prefix:p||"",delimiter:w,optional:b,repeat:g,partial:y,asterisk:!!v,pattern:_?A(_):v?".*":"[^"+T(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),l=n("//Fk"),p=n.n(l),d=n("fZjL"),h=n.n(d),m=n("Dd8w"),x=n.n(m),v=n("/5sW"),y=function(){return{}};function g(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function b(t){return[].concat.apply([],t.matched.map(function(t){return h()(t.components).map(function(e){return t.components[e]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return p.a.all(w(t,(e=f()(u.a.mark(function t(e,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=g(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,k,j=(C=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",x()({},e,{meta:b(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),$=(k=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);"number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n)?e.context.next({path:n,query:r,status:t}):(n=q(n,r),window.location=n)}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,j(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,j(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return k.apply(this,arguments)});function E(t,e){var n=void 0;return(n=2===t.length?new p.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof p.a||"function"==typeof n.then)||(n=p.a.resolve(n)),n}var O=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function R(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function q(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},ct3O:function(t,e,n){"use strict";var r=n("4yvW"),o=n("QhKw"),a=!1;var i=function(t){a||n("g4Ov")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},g4Ov:function(t,e,n){var r=n("hNEV");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("02660e8a",r,!1)},hNEV:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},mtxM:function(t,e,n){"use strict";e.a=function(){return new o.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:f,routes:[{path:"/",component:a,name:"index"},{path:"/:lang",component:i,name:"lang"},{path:"/:lang/about",component:s,name:"lang-about"},{path:"/:lang/contact",component:u,name:"lang-contact"},{path:"/:lang/projects",component:c,name:"lang-projects"}],fallback:!1})};var r=n("/5sW"),o=n("/ocq");r.default.use(o.default);var a=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},i=function(){return n.e(3).then(n.bind(null,"VRz5")).then(function(t){return t.default||t})},s=function(){return n.e(5).then(n.bind(null,"PR1p")).then(function(t){return t.default||t})},u=function(){return n.e(4).then(n.bind(null,"+BoX")).then(function(t){return t.default||t})},c=function(){return n.e(2).then(n.bind(null,"/IPL")).then(function(t){return t.default||t})},f=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},pxFO:function(t,e,n){"use strict";var r=n("/5sW"),o=n("TXmL");r.default.use(o.default),e.a=function(t){var e=t.app,r=t.store;e.i18n=new o.default({locale:r.state.locale,fallbackLocale:"en",messages:{en:n("GZzL"),fr:n("VuYv")}}),e.i18n.path=function(t){return e.i18n.locale===e.i18n.fallbackLocale?"/"+t:"/"+e.i18n.locale+"/"+t}}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return R});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),l=n.n(f),p=n("exGp"),d=n.n(p),h=n("MU8w"),m=(n.n(h),n("/5sW")),x=n("p3jY"),v=n.n(x),y=n("mtxM"),g=n("0F0d"),b=n("HBB+"),w=n("WRRc"),_=n("ct3O"),C=n("Hot+"),k=n("yTq1"),j=n("YLfZ"),$=n("J2Ti"),E=n("pxFO");n.d(e,"a",function(){return _.a});var O,R=(O=d()(o.a.mark(function t(e){var n,r,a,i,u,f,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(),(r=Object($.a)()).$router=n,a=l()({router:n,store:r,nuxt:{defaultTransition:T,transitions:[T],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},T,{name:t}):c()({},T,t):T}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object(j.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object(j.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(p=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof E.a){t.next=15;break}return t.next=15,Object(E.a)(a.context,p);case 15:t.next=18;break;case 18:return t.abrupt("return",{app:a,router:n,store:r});case 19:case"end":return t.stop()}},t,this)})),function(t){return O.apply(this,arguments)});m.default.component(g.a.name,g.a),m.default.component(b.a.name,b.a),m.default.component(w.a.name,w.a),m.default.component(C.a.name,C.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var T={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},sq1o:function(t,e,n){var r={"./i18n.js":"w1mq"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="sq1o"},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("sq1o"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var u={},c=!0,f=!1,l=void 0;try{for(var p,d=o()(i);!(c=(p=d.next()).done);c=!0){var h=p.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){f=!0,l=t}finally{try{!c&&d.return&&d.return()}finally{if(f)throw l}}e.a=u},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{locales:["en","fr"],locale:"en"}},o={SET_LANG:function(t,e){-1!==t.locales.indexOf(e)&&(t.locale=e)}}},w1mq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.isHMR,n=t.app,r=t.store,o=t.route,a=t.params,i=(t.error,t.redirect);if(!e){if(!a.lang)return i("/en"+o.fullPath.replace(/^\/(en|fr)/,"/"));var s=a.lang||"en";r.commit("SET_LANG",s),n.i18n.locale=r.state.locale}}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s={_default:function(){return n.e(0).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}},u={};e.a={head:{title:"portfolio",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"stylesheet",href:"https://unpkg.com/bulma@0.6.2/css/bulma.css"},{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?o.a.resolve(u[n]):s[n]().then(function(t){return u[n]=t,delete s[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);