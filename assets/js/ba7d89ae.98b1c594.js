"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7937],{3905:(A,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var a=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,a,n=function(A,e){if(null==A)return{};var t,a,n={},o=Object.keys(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var l=a.createContext({}),r=function(A){var e=a.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},c=function(A){var e=r(A.components);return a.createElement(l.Provider,{value:e},A.children)},h="mdxType",m={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,o=A.originalType,l=A.parentName,c=s(A,["components","mdxType","originalType","parentName"]),h=r(t),u=n,g=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return t?a.createElement(g,i(i({ref:e},c),{},{components:t})):a.createElement(g,i({ref:e},c))}));function g(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=A,s[h]="string"==typeof A?A:n,i[1]=s;for(var r=2;r<o;r++)i[r]=t[r];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9595:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var a=t(7462),n=(t(7294),t(3905));const o={title:"Redis is more than a Cache - Delaying Jobs",authors:"lukas8219",tags:["redis","jobs","pubsub","luma","more","than","cache"]},i=void 0,s={permalink:"/blog/2024/06/01/redis-is-more-than-cache-job-delay",source:"@site/blog/2024-06-01/redis-is-more-than-cache-job-delay.md",title:"Redis is more than a Cache - Delaying Jobs",description:"My current company - Luma Health Inc - has an Event-Driven Architecture where all of our backend systems interact via async messaging/jobs. Thus our backbone is sustained by an AMQP broker - RabbitMQ - which routes the jobs to interested services.",date:"2024-06-01T00:00:00.000Z",formattedDate:"June 1, 2024",tags:[{label:"redis",permalink:"/blog/tags/redis"},{label:"jobs",permalink:"/blog/tags/jobs"},{label:"pubsub",permalink:"/blog/tags/pubsub"},{label:"luma",permalink:"/blog/tags/luma"},{label:"more",permalink:"/blog/tags/more"},{label:"than",permalink:"/blog/tags/than"},{label:"cache",permalink:"/blog/tags/cache"}],readingTime:3.775,hasTruncateMarker:!1,authors:[{name:"Lucas Weis Polesello",title:"SRE | Senior Software Engineer @ LumaHealth",url:"https://github.com/lukas8219",email:"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com",imageURL:"https://github.com/lukas8219.png",key:"lukas8219"}],frontMatter:{title:"Redis is more than a Cache - Delaying Jobs",authors:"lukas8219",tags:["redis","jobs","pubsub","luma","more","than","cache"]},prevItem:{title:"Redis is more than a Cache - Data Reference",permalink:"/blog/2024/06/01/redis-is-more-than-cache-data-reference"},nextItem:{title:"The Zalgo Effect and Resource Leakage - A Case",permalink:"/blog/2024/06/01/zalgo-effect-resource-leakage"}},l={authorsImageUrls:[void 0]},r=[{value:"The Unreliable Design",id:"the-unreliable-design",level:2},{value:"The Issues",id:"the-issues",level:2},{value:"The Solution",id:"the-solution",level:2},{value:"Results - <em>which I think the screenshots can speak for themselves</em>",id:"results---which-i-think-the-screenshots-can-speak-for-themselves",level:2},{value:"Take Away Points",id:"take-away-points",level:2},{value:"Final Thoughts",id:"final-thoughts",level:2}],c={toc:r},h="wrapper";function m(A){let{components:e,...o}=A;return(0,n.kt)(h,(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"My current company - ",(0,n.kt)("a",{parentName:"p",href:"https://www.lumahealth.io/"},"Luma Health Inc")," - has an ",(0,n.kt)("inlineCode",{parentName:"p"},"Event-Driven Architecture")," where all of our backend systems interact via async messaging/jobs. Thus our backbone is sustained by an AMQP broker - RabbitMQ - which routes the jobs to interested services."),(0,n.kt)("p",null,"Since our jobs are very critical - we cannot support failures AND should design to make the system more resilient because well..we don't want a patient not being notified of their appointment, appointments not being created when they should, patients showing off into facilities where they were never notified the patient had something scheduled."),(0,n.kt)("p",null,"Besides the infra and product reliability - some use cases could need postponing - maybe reaching out to an external system who's offline/or not responding. Maybe some error which needs a retry - who knows? "),(0,n.kt)("p",null,"The fact is, delaying/retry is a very frequent requirement into Event Driven Architectures. With this a service responsible for doing it was created - and it worked fine."),(0,n.kt)("p",null,"But - as the company sold bigger contracts and grew up in scale - this system was almost stressed out and not reliable."),(0,n.kt)("h2",{id:"the-unreliable-design"},"The Unreliable Design"),(0,n.kt)("p",null,"Before giving the symptoms, let's talk about the organism itself - the service old design."),(0,n.kt)("p",null,"The design was really straightforward - if our service handlers asked for a postpone OR we failed to send the message to RabbitMQ - we just insert the JSON object from the Job into a Redis ",(0,n.kt)("inlineCode",{parentName:"p"},"Sorted Set")," and using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Score")," as the timestamp which it was meant to be retried/published again."),(0,n.kt)("p",null,"To publish back into RabbitMQ the postponed messages, a job would be triggered each 5 seconds - doing the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Read from a ",(0,n.kt)("inlineCode",{parentName:"li"},"set")," key containing all the existing ",(0,n.kt)("inlineCode",{parentName:"li"},"sorted set")," keys - basically the queue name"),(0,n.kt)("li",{parentName:"ol"},"Fetch jobs using ",(0,n.kt)("inlineCode",{parentName:"li"},"zrangebyscore")," from 0 to current timestamp BUT ",(0,n.kt)("inlineCode",{parentName:"li"},"limit")," to 5K jobs."),(0,n.kt)("li",{parentName:"ol"},"Publish the job to RabbitMQ and remove it from ",(0,n.kt)("inlineCode",{parentName:"li"},"sorted set"))),(0,n.kt)("h2",{id:"the-issues"},"The Issues"),(0,n.kt)("p",null,"This solution actually scaled up until 1-2 years ago when we started having issues with it - the main one's being:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"It could not catch up to a huge backlog of delayed messages"),(0,n.kt)("li",{parentName:"ol"},"It would eventually OOM or SPIKE up to 40GB of memory",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Due to things being fetched into memory AND some instability OR even some internal logic - we could end up shoveling too much data into Redis - the service just died \ud83d\udc80"))),(0,n.kt)("li",{parentName:"ol"},"We could not scale horizontally - due to consuming and fetching objects into memory before deleting them.")),(0,n.kt)("h2",{id:"the-solution"},"The Solution"),(0,n.kt)("p",null,"The solution was very simple: we implemented something that I liked to call ",(0,n.kt)("inlineCode",{parentName:"p"},"streaming approach")),(0,n.kt)("p",null,"Using the same data structure, we are now:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Running a ",(0,n.kt)("inlineCode",{parentName:"li"},"zcount")," from 0 to current timestamp",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Counting the amount of Jobs -> returning N"))),(0,n.kt)("li",{parentName:"ol"},"Creating an ",(0,n.kt)("inlineCode",{parentName:"li"},"Async Iterator")," for N times - that used the ",(0,n.kt)("inlineCode",{parentName:"li"},"zpopmin")," method from Redis",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zpopmin")," basically returns AND removes the least score object - ie most recent timestamp")))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"processor")," for the SortedSet\n",(0,n.kt)("img",{alt:"process-delayed-jobs-code",src:t(4698).Z,width:"1265",height:"176"})),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Async Iterator"),"\n",(0,n.kt)("img",{alt:"job-scan-iterator",src:t(3571).Z,width:"997",height:"397"})),(0,n.kt)("p",null,"And that's all!"),(0,n.kt)("p",null,"This simple algorithm change annihilated the need for:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Big In Memory fetches - makes our memory allocation big"),(0,n.kt)("li",{parentName:"ol"},"Limit of 5K in fetches - makes our throughput lower")),(0,n.kt)("h2",{id:"results---which-i-think-the-screenshots-can-speak-for-themselves"},"Results - ",(0,n.kt)("em",{parentName:"h2"},"which I think the screenshots can speak for themselves")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"We processed the entire backlog of 40GB of pending jobs pretty quickly"),"\n",(0,n.kt)("img",{alt:"aws-memory-consumption",src:t(2804).Z,width:"2196",height:"764"})),(0,n.kt)("p",null," ",(0,n.kt)("em",{parentName:"p"},"From a constant usage of ~8GB - we dropped down to ~200MB"),"\n",(0,n.kt)("img",{alt:"memory-delayed-jobs",src:t(7296).Z,width:"2128",height:"538"}),"\n",(0,n.kt)("em",{parentName:"p"},"We are now - trying to be play safe and still oversize - safely allocating 1/4 of the resources.")," The git diff was our first resource dump - we went even further."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git-diff-memory-delayed-jobs",src:t(7049).Z,width:"268",height:"215"})),(0,n.kt)("p",null,"Money-wise: We are talking at least of 1K USD/month AND more in the future if we can lower our ElastiCache instance."),(0,n.kt)("h2",{id:"take-away-points"},"Take Away Points"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Redis is a Distributed DataStructure database - more than just a simply KeyValue pair storage."),(0,n.kt)("li",{parentName:"ul"},"You can achieve great designs using Redis"),(0,n.kt)("li",{parentName:"ul"},"Be careful because the way you design a solution with Redis may be costly in the future")),(0,n.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,n.kt)("p",null,"There could be a lot of discussion wether this is a great way of doing jobs postponing, if Redis is the right storage, if we should really postpone jobs for small network hiccups, shouldn't we leverage DelayedExchange from Rabbit? - etc...\nBut at the end of the day - to succeed as a company we need to solve problems in our daily routine. Some problems are worth, some are not. It's always - one step at a time."))}m.isMDXComponent=!0},2804:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/aws-memory-consumption-7da343038548b77a8337cc857dc8ba7d.webp"},7049:(A,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/webp;base64,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"},3571:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/job-scan-iterator-2eee4c5e3c189778e503a58277713b8d.webp"},7296:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/memory-delayed-jobs-3c83db027a49a945ce8606ff0a8c7fde.webp"},4698:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/process-delayed-jobs-code-591f517b1c2b562610332d2ca1d4fe0a.webp"}}]);