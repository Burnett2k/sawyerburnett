!function(e){function t(t){for(var r,u,c=t[0],i=t[1],l=t[2],f=0,p=[];f<c.length;f++)u=c[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=function(e){return u.p+"templates/"+({1:"src-pages-404",2:"src-pages-about",3:"src-pages-consulting",4:"src-pages-index",5:"src-pages-projects"}[e]||e)+"."+{1:"15a65bb4",2:"93c515e0",3:"b9dd9267",4:"30bfbcd7",5:"872fef67"}[e]+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(i);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var i=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=i;a.push([5437,6]),n()}({5437:function(e,t,n){n(5438),n(5464),e.exports=n(5471)},5466:function(e,t,n){var r={".":38,"./":38,"./index":38,"./index.js":38};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=5466},5613:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(21),u=n.n(a),c=n(80),i=n(19),l=n(10),s=n(56),f=n.n(s),p=n(44);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return r=this,o=(e=h(t)).call.apply(e,[this].concat(u)),n=!o||"object"!==m(o)&&"function"!=typeof o?g(r):o,y(g(n),"state",{left:!1}),y(g(n),"toggleDrawer",function(e,t){return function(){n.setState(y({},e,t))}}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.state.anchorEl,t=this.props.classes,n=o.a.createElement("div",{className:t.list},o.a.createElement(l.l,{component:"nav"},o.a.createElement(l.m,{button:!0,component:"a",href:"/"},o.a.createElement(l.n,null,o.a.createElement(p.b,null)),o.a.createElement(l.o,{primary:"Home"})),o.a.createElement(l.m,{button:!0,component:"a",href:"/about"},o.a.createElement(l.n,null,o.a.createElement(p.d,null)),o.a.createElement(l.o,{primary:"About"})),o.a.createElement(l.m,{button:!0,component:"a",href:"/projects"},o.a.createElement(l.n,null,o.a.createElement(p.c,null)),o.a.createElement(l.o,{primary:"Projects"})),o.a.createElement(l.m,{button:!0,component:"a",href:"/consulting"},o.a.createElement(l.n,null,o.a.createElement(p.a,null)),o.a.createElement(l.o,{primary:"Consulting"}))));return o.a.createElement("div",null,o.a.createElement(l.k,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer("left",!0),"aria-owns":e?"simple-menu":void 0,"aria-haspopup":"true"},o.a.createElement(f.a,null)),o.a.createElement(l.f,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},n)))}}])&&d(n.prototype,r),a&&d(n,a),t}(),j=Object(i.withStyles)({menuButton:{marginLeft:-12,marginRight:20},list:{width:"auto"}})(v),E=Object(i.createMuiTheme)({palette:{primary:{main:"#00838F"},secondary:{main:"#8fa3ad"}},typography:{useNextVariants:!0},overrides:{MuiCard:{root:{width:400}}}});var w,O=Object(i.withStyles)({root:{flexGrow:1},grow:{flexGrow:1}})(function(e){var t=e.classes;return o.a.createElement(c.Root,null,o.a.createElement(i.MuiThemeProvider,{theme:E},o.a.createElement(l.e,null,o.a.createElement("div",{className:t.root},o.a.createElement(l.a,{position:"static"},o.a.createElement(l.q,null,o.a.createElement(j,null),o.a.createElement(l.r,{variant:"h6",color:"inherit",className:t.grow},"Sawyer Burnett"))),o.a.createElement(l.f,null),o.a.createElement("div",{className:"content"},o.a.createElement(c.Routes,null))))))});t.default=O;if("undefined"!=typeof document){var P=u.a.hydrate||u.a.render;w=O,P(o.a.createElement(w,null),document.getElementById("root"))}},81:function(e,t,n){"use strict";n.r(t);t.default=[{location:"/Users/sawyerburnett/git-repos/sawyerburnett-react-static/node_modules/react-static-plugin-jss",plugins:[],hooks:{}},{location:"/Users/sawyerburnett/git-repos/sawyerburnett-react-static",plugins:[],hooks:{}}]},89:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",function(){return h});var r=n(22),o=n.n(r),a=n(23),u=n.n(a),c=n(25),i=n.n(c);Object(c.setHasBabelPlugin)();var l={loading:function(){return null},error:function(e){return console.error(e.error),React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")}},s=i()(u()({id:"../src/pages/404.js",load:function(){return Promise.all([n.e(1).then(n.bind(null,140))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/404.js")},resolve:function(){return 140},chunkName:function(){return"src-pages-404"}}),l),f=i()(u()({id:"../src/pages/about.js",load:function(){return Promise.all([n.e(2).then(n.bind(null,141))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/about.js")},resolve:function(){return 141},chunkName:function(){return"src-pages-about"}}),l),p=i()(u()({id:"../src/pages/consulting.js",load:function(){return Promise.all([n.e(3).then(n.bind(null,142))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/consulting.js")},resolve:function(){return 142},chunkName:function(){return"src-pages-consulting"}}),l),m=i()(u()({id:"../src/pages/index.js",load:function(){return Promise.all([n.e(4).then(n.bind(null,143))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/index.js")},resolve:function(){return 143},chunkName:function(){return"src-pages-index"}}),l),d=i()(u()({id:"../src/pages/projects.js",load:function(){return Promise.all([n.e(5).then(n.bind(null,144))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/projects.js")},resolve:function(){return 144},chunkName:function(){return"src-pages-projects"}}),l);t.default={"../src/pages/404.js":s,"../src/pages/about.js":f,"../src/pages/consulting.js":p,"../src/pages/index.js":m,"../src/pages/projects.js":d};var h="../src/pages/404.js"}.call(this,"/")}});