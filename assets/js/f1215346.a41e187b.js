"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6759],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),l=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(o.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,d=p["".concat(o,".").concat(b)]||p[b]||f[b]||c;return n?t.createElement(d,i(i({ref:r},u),{},{components:n})):t.createElement(d,i({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=b;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<c;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6538:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const c={},i=void 0,s={unversionedId:"learn-in-public/Engineering/Infrastructure/Kubernetes shorcuts and alias",id:"learn-in-public/Engineering/Infrastructure/Kubernetes shorcuts and alias",title:"Kubernetes shorcuts and alias",description:"shortcut to set current context namespace",source:"@site/docs/learn-in-public/1. Engineering/Infrastructure/Kubernetes shorcuts and alias.md",sourceDirName:"learn-in-public/1. Engineering/Infrastructure",slug:"/learn-in-public/Engineering/Infrastructure/Kubernetes shorcuts and alias",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Kubernetes shorcuts and alias",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"learn-in-public",previous:{title:"How to handle relative urls with Nginx reverse proxy",permalink:"/docs/learn-in-public/Engineering/Infrastructure/How to handle relative urls with Nginx reverse proxy"},next:{title:"Networking Challenges",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Networking Challenges"}},o={},l=[],u={toc:l},p="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"shortcut to set current context namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias kns='kubectl config set-context --curent --namespace <namespace>'\n")),(0,a.kt)("p",null,"decoding secret"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secrets/db-user-pass --template={{.data.password}} | base64 -d\n")),(0,a.kt)("p",null,"describe parameters accept in CRD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl explain <crd-name> --recursive\n")))}f.isMDXComponent=!0}}]);