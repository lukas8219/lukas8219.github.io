"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),b=a,d=g["".concat(c,".").concat(b)]||g[b]||m[b]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={tags:["js","javascript","garbagecollection","jsgarbagecollection","memorymanagement","node","nodejs"]},i=void 0,l={unversionedId:"learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection",id:"learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection",title:"JavaScript Garbage Collection",description:"resources",source:"@site/docs/learn-in-public/1. Engineering/NodeJS/JavaScript Garbage Collection.md",sourceDirName:"learn-in-public/1. Engineering/NodeJS",slug:"/learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection",permalink:"/docs/learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection",draft:!1,tags:[{label:"js",permalink:"/docs/tags/js"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"garbagecollection",permalink:"/docs/tags/garbagecollection"},{label:"jsgarbagecollection",permalink:"/docs/tags/jsgarbagecollection"},{label:"memorymanagement",permalink:"/docs/tags/memorymanagement"},{label:"node",permalink:"/docs/tags/node"},{label:"nodejs",permalink:"/docs/tags/nodejs"}],version:"current",frontMatter:{tags:["js","javascript","garbagecollection","jsgarbagecollection","memorymanagement","node","nodejs"]},sidebar:"learn-in-public",previous:{title:"Buffer",permalink:"/docs/learn-in-public/Engineering/NodeJS/Buffer"},next:{title:"NodeJS Profiling",permalink:"/docs/learn-in-public/Engineering/NodeJS/NodeJS Profiling"}},c={},p=[],s={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"resources\n",(0,a.kt)("a",{parentName:"p",href:"https://mrale.ph/"},"https://mrale.ph/"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection"},"https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/"},"https://v8.dev/"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/deep-dive-into-garbage-collection-in-javascript-6881610239a%5Chttps://nodejs.org/api/cli.html#--max-semi-space-sizesize-in-megabytes"},"https://betterprogramming.pub/deep-dive-into-garbage-collection-in-javascript-6881610239a\\https://nodejs.org/api/cli.html#--max-semi-space-sizesize-in-megabytes"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://blog.risingstack.com/node-js-at-scale-node-js-garbage-collection/"},"https://blog.risingstack.com/node-js-at-scale-node-js-garbage-collection/")))}m.isMDXComponent=!0}}]);