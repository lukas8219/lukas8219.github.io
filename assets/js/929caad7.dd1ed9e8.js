"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6968],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),o=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=o(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,g=p["".concat(l,".").concat(m)]||p[m]||b[m]||s;return r?t.createElement(g,c(c({ref:n},u),{},{components:r})):t.createElement(g,c({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var o=2;o<s;o++)c[o]=r[o];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9659:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var t=r(7462),a=(r(7294),r(3905));const s={tags:["environment","alias","k8s","kubernetes","kubectl"]},c=void 0,i={unversionedId:"learn-in-public/Engineering/Infrastructure/Kubernetes/Kubernetes shorcuts and alias",id:"learn-in-public/Engineering/Infrastructure/Kubernetes/Kubernetes shorcuts and alias",title:"Kubernetes shorcuts and alias",description:"Shortcut to set current context namespace",source:"@site/docs/learn-in-public/1. Engineering/Infrastructure/Kubernetes/Kubernetes shorcuts and alias.md",sourceDirName:"learn-in-public/1. Engineering/Infrastructure/Kubernetes",slug:"/learn-in-public/Engineering/Infrastructure/Kubernetes/Kubernetes shorcuts and alias",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Kubernetes/Kubernetes shorcuts and alias",draft:!1,tags:[{label:"environment",permalink:"/docs/tags/environment"},{label:"alias",permalink:"/docs/tags/alias"},{label:"k8s",permalink:"/docs/tags/k-8-s"},{label:"kubernetes",permalink:"/docs/tags/kubernetes"},{label:"kubectl",permalink:"/docs/tags/kubectl"}],version:"current",frontMatter:{tags:["environment","alias","k8s","kubernetes","kubectl"]},sidebar:"learn-in-public",previous:{title:"How to Access a Service in Another Namespace",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Kubernetes/How to Access a Service in Another Namespace"},next:{title:"Networking Challenges",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Networking Challenges"}},l={},o=[],u={toc:o},p="wrapper";function b(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shortcut to set current context namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias kns='kubectl config set-context --curent --namespace <namespace>'\n")),(0,a.kt)("p",null,"Decoding secret"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secrets/db-user-pass --template={{.data.password}} | base64 -d\n")),(0,a.kt)("p",null,"Describe parameters accept in CRD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl explain <crd-name> --recursive\n")))}b.isMDXComponent=!0}}]);