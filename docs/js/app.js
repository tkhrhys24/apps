(function(){"use strict";var t={8220:function(t,e,n){var r=n(144),o=n(998),s=n(704),i=n(5747),a=n(4324),u=n(5495),c=n(3059),l=n(3687),f=function(){var t=this,e=t._self._c;return e(o.Z,[e(s.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(l.Z),e(i.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(c.Z,[e("router-view")],1)],1)},h=[],m={name:"App",data:()=>({})},p=m,d=n(1001),v=(0,d.Z)(p,f,h,!1,null,null,null),y=v.exports,b=n(8345),g=function(){var t=this,e=t._self._c;return e("hello-world")},w=[],x=n(266),Z=n(2118),_=n(1713),j=function(){var t=this,e=t._self._c;return e(Z.Z,[e(_.Z,{staticClass:"text-center"},[e(x.Z,{attrs:{cols:"12"}},[e(u.Z,{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),e(x.Z,{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(x.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),e(_.Z,{attrs:{justify:"center"}},t._l(t.whatsNext,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e(x.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),e(_.Z,{attrs:{justify:"center"}},t._l(t.importantLinks,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e(x.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),e(_.Z,{attrs:{justify:"center"}},t._l(t.ecosystem,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1)],1)],1)},k=[],C={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},P=C,O=(0,d.Z)(P,j,k,!1,null,null,null),T=O.exports,E={name:"Home",components:{HelloWorld:T}},A=E,L=(0,d.Z)(A,g,w,!1,null,null,null),S=L.exports;r.ZP.use(b.ZP);const N=[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,1272))}],V=new b.ZP({mode:"history",base:"apps/",routes:N});var q=V,F=n(629);r.ZP.use(F.ZP);var M=new F.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),W=n(8864);r.ZP.use(W.Z);var H=new W.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:q,store:M,vuetify:H,render:t=>t(y)}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,s){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],s=t[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,s<i&&(i=s));if(a){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[r,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="apps:";n.l=function(r,o,s,i){if(t[r])t[r].push(o);else{var a,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+s){a=f;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+s),a.src=r),t[r]=[o];var h=function(e,n){a.onerror=a.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="apps/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=s);var i=n.p+n.u(e),a=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,o[1](a)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,i=r[0],a=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)s=i[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},r=self["webpackChunkapps"]=self["webpackChunkapps"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8220)}));r=n.O(r)})();
//# sourceMappingURL=app.js.map