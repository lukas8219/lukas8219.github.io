"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={book:"Database Internals: A Deep Dive into How Distributed Data Systems Work - Alex Petrov"},o=void 0,l={unversionedId:"learn-in-public/Engineering/Database Internals/B-Tree Basic",id:"learn-in-public/Engineering/Database Internals/B-Tree Basic",title:"B-Tree Basic",description:"B-Trees are one of the most popular Storage Data Structure for Storage Engines and Databases in the wild.",source:"@site/docs/learn-in-public/1. Engineering/Database Internals/B-Tree Basic.md",sourceDirName:"learn-in-public/1. Engineering/Database Internals",slug:"/learn-in-public/Engineering/Database Internals/B-Tree Basic",permalink:"/docs/learn-in-public/Engineering/Database Internals/B-Tree Basic",draft:!1,tags:[],version:"current",frontMatter:{book:"Database Internals: A Deep Dive into How Distributed Data Systems Work - Alex Petrov"},sidebar:"learn-in-public",previous:{title:"The Organization Roadmap",permalink:"/docs/learn-in-public/Engineering/Business, Companies and Processes/The Organization Roadmap"},next:{title:"Chapter 6. B-Tree Variants",permalink:"/docs/learn-in-public/Engineering/Database Internals/Chapter 6. B-Tree Variants"}},s={},p=[{value:"Structure",id:"structure",level:2},{value:"Algorithms",id:"algorithms",level:2},{value:"B-Tree Insert Algorithm",id:"b-tree-insert-algorithm",level:4},{value:"B-Tree Insert (Splits) <code>Promoted</code>",id:"b-tree-insert-splits-promoted",level:5},{value:"B-Tree Lookup Algorithm",id:"b-tree-lookup-algorithm",level:4},{value:"B-Tree and Disk Drives:",id:"b-tree-and-disk-drives",level:3},{value:"Differences between SSD and HDD",id:"differences-between-ssd-and-hdd",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"B-Trees are one of the most popular Storage Data Structure for Storage Engines and Databases in the wild.\nThis is due to it's nature of addressing issues like search by using logarithmic search in huge datasets - which can reduce searches in 4bi entries by only 32 op's, minimizing the amount of Disk IO we need to fetch certain datas."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"A B-Tree is sorted data-structure belonging the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree")," family - variant Balanced Tree - that consists of a ",(0,r.kt)("em",{parentName:"p"},"Root Node"),", ",(0,r.kt)("em",{parentName:"p"},"Internal Nodes")," and ",(0,r.kt)("em",{parentName:"p"},"Leaf Nodes"),"."),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Internal Node")," contain a N Keys (a.k.a ",(0,r.kt)("inlineCode",{parentName:"p"},"index-entries"),",",(0,r.kt)("inlineCode",{parentName:"p"},"separator-key")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"dividir cells"),") and N+1 Pointers, being the ",(0,r.kt)("inlineCode",{parentName:"p"},"+1")," a point to the next ",(0,r.kt)("inlineCode",{parentName:"p"},"Internal Node"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Leaf Nodes")," should always be at the same depth in B-Tree to prevent Tree getting unbalanced"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree")," is divided by Index Entries or Separator-Key or Divider Cells.\nThese Keys splits the tree into smaller sub-trees - which holds a certain subrange of keys ",(0,r.kt)("inlineCode",{parentName:"p"},"K1 < 1 < K3")),(0,r.kt)("p",null,"B-Trees are organized into ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," (2kb to 16kb - or a page from disk which may change from OS & Storage combo). The term ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," is interchangeable with ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Occupancy")," is the relation between the amount of keys a Node holds and it's capacity - which characterizes the B-Tree Nodes due to it's high fanout nature."),(0,r.kt)("p",null,"A B-Tree delivers two essential assumptions about the data-structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High Fanout: which just means it grows horizontally - ie adding more ",(0,r.kt)("inlineCode",{parentName:"li"},"internal")," nodes and just splitting/merging by necessity"),(0,r.kt)("li",{parentName:"ul"},"Low Height: We only have 3 levels root, internal and leaf.")),(0,r.kt)("h2",{id:"algorithms"},"Algorithms"),(0,r.kt)("h4",{id:"b-tree-insert-algorithm"},"B-Tree Insert Algorithm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Perform B-Tree lookup to find Leaf Node and locate an ",(0,r.kt)("inlineCode",{parentName:"li"},"insert point")),(0,r.kt)("li",{parentName:"ul"},"Append the key and the value to the ",(0,r.kt)("inlineCode",{parentName:"li"},"leaf node")," insertion point.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Updates only change the value."))),(0,r.kt)("li",{parentName:"ul"},"In case of ",(0,r.kt)("inlineCode",{parentName:"li"},"overflowed")," leaf nodes, ie exceeded maximum capacity, we split the ",(0,r.kt)("inlineCode",{parentName:"li"},"leaf node"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Split int case ",(0,r.kt)("inlineCode",{parentName:"li"},"leaf node")," N+1 is reached"),(0,r.kt)("li",{parentName:"ul"},"for ",(0,r.kt)("inlineCode",{parentName:"li"},"Internal Nodes")," (N+1)+1 is reached.")))),(0,r.kt)("h5",{id:"b-tree-insert-splits-promoted"},"B-Tree Insert (Splits) ",(0,r.kt)("inlineCode",{parentName:"h5"},"Promoted")),(0,r.kt)("p",null,"A insert is done by allocating a new node and transferring half of the keys and values into it. Then adding it's first key and point to the parent node. Being ",(0,r.kt)("inlineCode",{parentName:"p"},"split point")," the index where we split the data, we transfer data from ",(0,r.kt)("inlineCode",{parentName:"p"},"split point++")," into the new node.\nIf needed, we'll propagate the splits up above."),(0,r.kt)("h4",{id:"b-tree-lookup-algorithm"},"B-Tree Lookup Algorithm"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From root node"),(0,r.kt)("li",{parentName:"ol"},"Perform BST comparing the searched KEY within the keys stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"Internal Nodes")),(0,r.kt)("li",{parentName:"ol"},"Find the first ",(0,r.kt)("inlineCode",{parentName:"li"},"separator-key")),(0,r.kt)("li",{parentName:"ol"},"Access the ",(0,r.kt)("inlineCode",{parentName:"li"},"InternalNode.subtree")," from that `separator-key ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Repeat the process of looking for equal separator-key until you reach a leaf-node"),(0,r.kt)("li",{parentName:"ol"},"If there's no key equal to your searched key and the left-most is lower, there's no key in your B-Tree")))),(0,r.kt)("h3",{id:"b-tree-and-disk-drives"},"B-Tree and Disk Drives:"),(0,r.kt)("p",null,"HDD: The most expensive operation for a HDD is a disk seeks which consists of manually moving the mechanical head of the HDD to a certain position - to enable reading certain ",(0,r.kt)("inlineCode",{parentName:"p"},"sectors"),". After moving the mechanical head, reading is very cheap.\nTypical range of bytes read in each sector - 512bytes to 4kb"),(0,r.kt)("p",null,"SSD: SSDs are structure into small segmented structures hierarchiachly (??) by ",(0,r.kt)("inlineCode",{parentName:"p"}," 32/64 memory cells -> 1 string -> arrays -> (2kb to 16kb)pages -> blocks -> planes -> N die"),"\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"Block")," usually has 64 to 512 pages.\nThe smallest unit for a SSD is a ",(0,r.kt)("inlineCode",{parentName:"p"},"page"),". (2kb to 16kb).\n",(0,r.kt)("em",{parentName:"p"},"HOWEVER")," writing can only occur in empty blocks - ie we cannot update data. So we need to empty a block (delete it) - which can only occur by ",(0,r.kt)("inlineCode",{parentName:"p"},"erase block"),".\nDifferently from HDD who drivers need to control the mechanical head to seek for data, SSD keeps a controller (FTL) that maps pageId to their physical location - and controls the entire hardware.\nResponsabilities from FTL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Garbage Collection"),(0,r.kt)("li",{parentName:"ul"},"Mapping page ids to location in-disk"),(0,r.kt)("li",{parentName:"ul"},"Tracking",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"empty pages"),(0,r.kt)("li",{parentName:"ul"},"written pages"),(0,r.kt)("li",{parentName:"ul"},"discarded pages")))),(0,r.kt)("h3",{id:"differences-between-ssd-and-hdd"},"Differences between SSD and HDD"),(0,r.kt)("p",null,"Nowdays OS's abstract interactions with the storage by ",(0,r.kt)("inlineCode",{parentName:"p"},"block devices")," abstraction and let us access data in chunks. Even if ask a small bit of data, at least a block is read from the storage.\nThe main difference resides in using HDD in case you workload is built of ",(0,r.kt)("inlineCode",{parentName:"p"},"sequential IO")," which benefits from HDD cheap ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," operations after a seek."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sequential IO can be describe as the phenomemon of doing any kind of IO (W/R) in sequentia locality - ie in the next offset - preventing any expensive Disk Seeks\n")))}u.isMDXComponent=!0}}]);