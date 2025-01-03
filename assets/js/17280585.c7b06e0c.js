"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},s=void 0,l={unversionedId:"learn-in-public/Engineering/Distributed Systems/Consensus",id:"learn-in-public/Engineering/Distributed Systems/Consensus",title:"Consensus",description:"consensus #faulttolerance #distributedconsistencymodels #distributedsystems",source:"@site/docs/learn-in-public/1. Engineering/Distributed Systems/Consensus.md",sourceDirName:"learn-in-public/1. Engineering/Distributed Systems",slug:"/learn-in-public/Engineering/Distributed Systems/Consensus",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/Consensus",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"learn-in-public",previous:{title:"distributed systems",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/"},next:{title:"Lamport Timestamps",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/Lamport Timestamps"}},o={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"#consistency #consensus #faulttolerance #distributedconsistencymodels #distributedsystems "),(0,i.kt)("p",null,'"The best way to build fault tolerant system is to find some general purpose abstraction with some guarantees and assumptions and let the system operate over those guarantees."'),(0,i.kt)("p",null,"This is the case for transaction on database, that abstract away all the logic for atomicity, isolation and durability."),(0,i.kt)("p",null,'"A general challenges of distributed system is to all nodes agree upon something; that is #consensus"'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Distributed consistency models are somewhat similar to the hierarchy of transaction isolation levels")),(0,i.kt)("p",null,"Although the overlap, they are different concerns: transaction concerns race conditions and concurrency.\nAnd distributed models are more of ",(0,i.kt)("em",{parentName:"p"},"coordinating the state of replicas when facing delays or faults")),(0,i.kt)("p",null,"#linearizability #atomicconsistency #strongconsistency #immediateconsistency #externalconsistency #recencyguarantee"),(0,i.kt)("p",null,"Its the idea of appearing like there's only a single database node while still having multiple replicas. And all operations looking like they are atomic.\nWhenever a write is done, all clients reading the DB should be able to see the recent change immediatelly."),(0,i.kt)("p",null,"Linearizability and Serializability differ, because serializability is about sequential execution of concurrent transactions.\nLinearizabiltiy is just the idea of having a recency guarantee when reading data;"),(0,i.kt)("p",null,"Linearizabiliy is kinda important for locking and leader election, e.g, when all nodes startup we need to ensure they are electing a single leader and not causing split-brain, or a unique constraint on a database."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"How to implement it on your system?")),(0,i.kt)("p",null,"What kind of distributions are linearizable?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"single leader replication #singleleadereplication #singleleader - potentially"),(0,i.kt)("li",{parentName:"ul"},"consensus algo - YES"),(0,i.kt)("li",{parentName:"ul"},"multi leader #multileader- not"),(0,i.kt)("li",{parentName:"ul"},"leaderless #leaderless - probably not.")),(0,i.kt)("p",null,"#readquorum\nFor leaderless, as example #Dynamo-style, theres a claim that with a #quorum reads and writes(w + r > N), which is not exactly true.\n#LWW from #Cassandra, fall into #clockissues and are almost certainly non linearizable.\nIt is possible to achieve #linearizability on Dynamo, with the cost of performance. Requiring read repairs and writing must read the las state."),(0,i.kt)("p",null,"Although Single Leader might not be solution for all, since with multi datacenters, Single leader may lose its linearizability when the connection between datacenters is lost. It is a know problem and consequence of single or multi leader with mutiple datacenters deployment."),(0,i.kt)("p",null,"#captheorem #consistency #partition #availability just pick 2 out of 3."),(0,i.kt)("p",null,"Either Consistent or Available when Partitioned\nCredited for its culture shift and new database technologies rising since the mid-2000s (The NoSQL)\nCAP is not something practical, since it never got in to a real theorem level. It just historically important for the culture shift."),(0,i.kt)("p",null,"#linearizability is almost as proportional as the uncertainty and unreliability of the network. So its slow, in all occasions.\nSince, most of of the system are linearizable, sometimes it makes no difference and we can opt for performance."),(0,i.kt)("p",null,"#orderingevents #events"),(0,i.kt)("p",null,"Causality imposes an ordering of events and any system that obeys this order can be called #causaliyconsistent iyconsistent."),(0,i.kt)("p",null,"#Linearizability obeys a total order, which is, it respects the causality of events."),(0,i.kt)("p",null,"#Causality defines the partial order where some events can be ordered and others not."),(0,i.kt)("p",null,"#sequencenumberordering"),(0,i.kt)("p",null,"keeping track of all causal dependencies its a big overhead. We can use #sequencenumber or #timestamps . Timestamps can come from logical clocks, which increment at each operation.\nFor single-leader replications, the replication log can maintain the total order of events (writes) based on this sequence number. Thus, any follower that replicates it will be causally consistent."),(0,i.kt)("p",null,"#noncausalsequencenumbering"),(0,i.kt)("p",null,"Non causal sequence numbering is used in leaderless/multileader replication/partitioned applications but there are some used metods in practice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"number being generated by a range by node. ex: odd and even between two node."),(0,i.kt)("li",{parentName:"ul"},"attaching timestamp, which might be sufficiente for total ordering of events."),(0,i.kt)("li",{parentName:"ul"},"preallocation on a block of numbers")),(0,i.kt)("p",null,"All these three methods are inconsistent with causality."),(0,i.kt)("p",null,"#lamporttimestamp #lamport #timestamps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"its key composed by the N operations processed by the node and the node ID.")),(0,i.kt)("p",null,"If you have the same amount of operations, the one with the greater ID is the greater timestamp."),(0,i.kt)("p",null,"This idea by itself doesnt make it totally casually consistent; the key idea behing Lamport timestamps is:"),(0,i.kt)("p",null,'"Every node and client keeps track of the maximum counter value it has seen so far, and includes that maximum on every request. When a node receiver a req o resp with a maximum greater than its own counter value, it immediatelly increases its own to this maximum"'),(0,i.kt)("p",null,"Lamport Timestamps ARE NOT Version Vectors. They seem similar, but have different purposes: version vector can tell wether two operations are concurrent or whether one is causally dependent on the another operation."),(0,i.kt)("p",null,"Lamport Timestamps enforce TOTAL ORDERING."),(0,i.kt)("p",null,"Total Ordering of Events are not enought for ensuring uniqueness constraints. It its necessary to have #totalorderbroadcast #atomicbrodcast"),(0,i.kt)("p",null,"Total Order Broadcast, informally, describe the protocol of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reliable delivery : no messages are lost. if delivered, they are all delivered to all nodes."),(0,i.kt)("li",{parentName:"ul"},"totally ordered delivery: all nodes receive the message in the same order")),(0,i.kt)("p",null,"Examples of services that implement Total Order Broadcast. ZooKeeper and etcd."),(0,i.kt)("p",null,"Thus, total order broadcast is exactly the necessary for database replication. if every replice processes the same write in an ordered fashion, each replica will main its consistency. Princple know as #statemachinereplication #statemachine"),(0,i.kt)("p",null,"#fencingtokens Total order broadcast is useful for implemeting fencing tokens. Every req to acquire the lock is appended to the log, and sequentially numbered. The sequence itself can be uses as fencing token. ZooKeeper calls the sqeuence number zxid"),(0,i.kt)("p",null,"#distributedtransactions"))}d.isMDXComponent=!0}}]);