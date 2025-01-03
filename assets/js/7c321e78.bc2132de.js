"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={title:"Redis is more than a Cache 2 -> Reference Data",authors:"lukas8219",tags:["delayed-jobs","redis","pubsub","distributed-systems","semaphores","async-generators","nodejs"]},r=void 0,s={permalink:"/blog/2024/06/01/Post4",source:"@site/blog/2024-06-01/Post4.md",title:"Redis is more than a Cache 2 -> Reference Data",description:"Some weeks ago, we had a incident that was caused mainly due to how we delay job execution.",date:"2024-06-01T00:00:00.000Z",formattedDate:"June 1, 2024",tags:[{label:"delayed-jobs",permalink:"/blog/tags/delayed-jobs"},{label:"redis",permalink:"/blog/tags/redis"},{label:"pubsub",permalink:"/blog/tags/pubsub"},{label:"distributed-systems",permalink:"/blog/tags/distributed-systems"},{label:"semaphores",permalink:"/blog/tags/semaphores"},{label:"async-generators",permalink:"/blog/tags/async-generators"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:4.86,hasTruncateMarker:!1,authors:[{name:"Lucas Weis Polesello",title:"SRE | Senior Software Engineer @ LumaHealth",url:"https://github.com/lukas8219",email:"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com",imageURL:"https://github.com/lukas8219.png",key:"lukas8219"}],frontMatter:{title:"Redis is more than a Cache 2 -> Reference Data",authors:"lukas8219",tags:["delayed-jobs","redis","pubsub","distributed-systems","semaphores","async-generators","nodejs"]},prevItem:{title:"NodeJS Lazy Initialization",permalink:"/blog/2024/06/01/Post3"}},l={authorsImageUrls:[void 0]},u=[{value:"What about the future?",id:"what-about-the-future",level:3},{value:"Current Design:",id:"current-design",level:3},{value:"New Design",id:"new-design",level:3},{value:"What to expect from this Design:",id:"what-to-expect-from-this-design",level:3},{value:"Concerns",id:"concerns",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some weeks ago, we had a incident that was caused mainly due to how we delay job execution.\nOne queue had abnormal behavior during the weekends, which our monitoring systems caught, but we were expecting system to be self-healing and be able to kick through this small hiccup.\nTuesday we noticed something was off with our integration systems - where a code that was running for more than a year stopped working at the same time we rolled it for a new big customer.\nI got involved early in the incident due to how often I touch that component of the backend and we initiated investigation so we could get back to the customer ASAP with some good news.\nAfter some hours of investigation we ended up concluding that our long polling mechanism had a hot-loop in on a certain queue - which was always ending up retrying delays. The first trigger was during the weekends, where we saw the abnormal behavior and it then would always end up in this corner case.\nDue to always re-delaying jobs, jobs postponed to this queue would never actually drain and thus the handler would eternally get stuck while trying to drain it - delaying all the other queues from the platform.\nIn a quick 1/2 hour solution we shipped code to stop retrying jobs after more than N retries and consume the hot queue in parallel - to keep processing all jobs in the meantime."),(0,i.kt)("h3",{id:"what-about-the-future"},"What about the future?"),(0,i.kt)("p",null,"All that to say what? What is has to do with Redis?\nAs described in this post - the job delaying mechanism lives within Redis where we use an Sorted Set to pull the next job. We fanout to a certain amount in parallel - but we only restart this process after all possible queue targets where drained up until some upper bound score (",(0,i.kt)("inlineCode",{parentName:"p"},"score")," as score from ZSET - in this case, our timestamp which we delayed the job)\\\nWith this fragility in mind and the upcoming code-freeze of December - I suggested to rewrite this design completely."),(0,i.kt)("h3",{id:"current-design"},"Current Design:"),(0,i.kt)("p",null,"Whenever a service requests an postpone OR fails to publish some event, wether by not being connected yet (lazy connections), some IO failure(Net/Disk), AMQP Protocol error or even some ephemeral channel churn (close/recreate) - we always pass the job to this ",(0,i.kt)("inlineCode",{parentName:"p"},"Delayed Jobs")," storage."),(0,i.kt)("p",null,"The current production design is a simple Sorted Set from Redis, where timestamps are the score and the job key itself is the serialized job."),(0,i.kt)("p",null,"Currently we use a ",(0,i.kt)("em",{parentName:"p"},"cache.r7g.12xlarge")," ElastiCache (~300GB) sustain our load SPIKES."),(0,i.kt)("p",null,"Another backend component is then, at each 5s, triggering a long polling mechanism to re-enqueue all jobs until the current time."),(0,i.kt)("h3",{id:"new-design"},"New Design"),(0,i.kt)("p",null,"I've created some abstractions to make it easier to implement new storage backends like S3, VFS and more.\nRedis is now running as a reference-to-data component and only stores entire jobs if they are within the next ~2 seconds."),(0,i.kt)("p",null,"Storage backends are decided using some factors like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How long are we planning to postpone?"),(0,i.kt)("li",{parentName:"ul"},"How big is this job?"),(0,i.kt)("li",{parentName:"ul"},"Is this storage backend rolled out for certain queue/tenant?"),(0,i.kt)("li",{parentName:"ul"},"Is this storage available?")),(0,i.kt)("p",null,"And they have redundancy - where if one storage fails we use another - falling back in last case for Redis."),(0,i.kt)("p",null,"Lets use for example - storing a job for 10minutes that has a medium size due to the context it needs to carry. We would S3 to storage the data.\nThen we would insert a key into Redis formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"s3::some-queue::384192393192::<uuid>")),(0,i.kt)("p",null,"When trying to re-enqueue the job - the abstraction easily fetches the protocol ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," and the identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"<uuid>")," - fetching the S3 file from path ",(0,i.kt)("inlineCode",{parentName:"p"},"<uuid>"),"."),(0,i.kt)("p",null,"In the backend component - we changed some core features from the old service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instead of waiting for some schedule job trigger the backend service, it triggers itself given a certain interval. ",(0,i.kt)("em",{parentName:"li"},"Removes the need of something triggering it - What if scheduler component dies?")),(0,i.kt)("li",{parentName:"ul"},"Process always N queues in parallel using Semaphores to control concurrency.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Removes bottleneck from one slow queue slowing the entire platform."))),(0,i.kt)("li",{parentName:"ul"},"Limit execution time: We used AbortSignals to prevent long running processing for certain queues and add visibility into long running operations (Prometheus Counter for each timeout/long running)."),(0,i.kt)("li",{parentName:"ul"},"We keep polling jobs up until a certain timestamp. If the job is passed a due timestamp, we re-insert it to Redis.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This enables us to horizontally scale this component which in the past had to run as singleton due to bad design.")))),(0,i.kt)("h3",{id:"what-to-expect-from-this-design"},"What to expect from this Design:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Infrastructure downsizing:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Instead of storing entire jobs, we store ~128bits of data."),(0,i.kt)("li",{parentName:"ul"},"Currently we have 4million of keys stored consuming up to 200GB of RAM"),(0,i.kt)("li",{parentName:"ul"},"In the new design this would be ~64mb - if we calculate ",(0,i.kt)("inlineCode",{parentName:"li"},"uuid")," being 128 and omit the other small appended data."),(0,i.kt)("li",{parentName:"ul"},"Roughly we are expecting to downsize to 10GB - since brief postpones can still occurs and overload it. Experimentation will lead us to decide the proper size."))),(0,i.kt)("li",{parentName:"ul"},"Independency",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Decouple backend components preventing service A stopping service B of working properly"))),(0,i.kt)("li",{parentName:"ul"},"Speed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"N replicas will consume queues much faster in some abnormal load."),(0,i.kt)("li",{parentName:"ul"},"Maybe S3 storage will be slower - but possibly re-enqueue is a bigger bottleneck than retrieving objects from S3."))),(0,i.kt)("li",{parentName:"ul"},"Horizontal Scalability/Reliability",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If a pod dies, we have redundancy to keep the it running."))),(0,i.kt)("li",{parentName:"ul"},"Tail Latency Aware",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our latency-sensitive services suffer the most when some issue happens in this component"),(0,i.kt)("li",{parentName:"ul"},"With this design, latency-sensitive components will be decoupled such as WebSocket notifications, Chat Messages and all real time communication - heavily used in the platform.")))),(0,i.kt)("h3",{id:"concerns"},"Concerns"),(0,i.kt)("p",null,"We are still concerned with RPS, S3 speed for large objects and proper Redis sizing."))}p.isMDXComponent=!0}}]);