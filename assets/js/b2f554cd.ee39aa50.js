"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2025/03/31/network-bandwidth-reduction","metadata":{"permalink":"/blog/2025/03/31/network-bandwidth-reduction","source":"@site/blog/2025-03-31/network-bandwidth-reduction.md","title":"The Tale of How We Compensated Years of Tech Debt in a Month: Performance, Cost and Optimizations","description":"Back in 2022 @Luma had a major outage which caused hours of downtime, angry customers and lots of engineering efforts to return the product back to normal.","date":"2025-03-31T00:00:00.000Z","formattedDate":"March 31, 2025","tags":[{"label":"redis","permalink":"/blog/tags/redis"},{"label":"bandwidth","permalink":"/blog/tags/bandwidth"},{"label":"cost","permalink":"/blog/tags/cost"},{"label":"efficient","permalink":"/blog/tags/efficient"},{"label":"luma","permalink":"/blog/tags/luma"},{"label":"blogpost","permalink":"/blog/tags/blogpost"}],"readingTime":3.94,"hasTruncateMarker":false,"authors":[{"name":"Lucas Weis Polesello","title":"SRE | Senior Software Engineer @ LumaHealth","url":"https://github.com/lukas8219","email":"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com","socials":{"x":"https://x.com/luucaspole"},"imageURL":"https://github.com/lukas8219.png","key":"lukas8219"}],"frontMatter":{"title":"The Tale of How We Compensated Years of Tech Debt in a Month: Performance, Cost and Optimizations","authors":"lukas8219","tags":["redis","bandwidth","cost","efficient","luma","blogpost"]},"nextItem":{"title":"Open Source Tales #1: WebSocket Operator","permalink":"/blog/2025/03/31/open-source-tales-1"}},"content":"Back in 2022 [@Luma](https://www.lumahealth.io/) had a major outage which caused hours of downtime, angry customers and lots of engineering efforts to return the product back to normal.\\nOne of the discoveries made at that time was a hard truth: `we modeled our internal IAM object poorly`.\\n\\n## inb4: PHI\\nOn the HealthCare Tech Industry - and outside of it - Patient Health Information (PHI) is of major importance. When applied to Luma\'s platform - being _very_ brief - states that patient\'s data should belong only to facilities that they had interaction with/allowed them to have.\\nThis is to protect patient\'s health information and access to their data. It\'s a US-government enforced law.\\n## IAM Model\\nOur IAM model is something called `session` object - a pretty simple concept - it concentrates the user\'s token, settings, groups, facilities and more metadata about itself. We use this `session` throughout all backend components of Luma to properly apply this PHI filtering rule.\\nOne of the bad decision back then was to simply pull all `facilities` and `groups` inside a JSON object and cache it. But then you would probably ask...\\n### What\'s the problem of it?\\nWhen Luma grown it\'s scale - we started onboarding bigger and bigger customers - with their own setup of account leading to N different use-cases.\\nSumming up some very creative account setups and huge customers - we ended up creating something unexpected - `session` object storing up to 2.6MB of pure JSON text.\\n\\nAnd yes, you did read it right - an entire PDF!!\\n\\nNow `imagine that for each job, we actually pulled cached sessions up to 100x - or even more. Luma produces average of 2K jobs per second spiking up to 10K`\\n\\n**That\'s `ALOT` of Network usage.** - easily surpassing 2GB per second - aka more than 15Gbps.\\nFor reference - [cache.m6g.8xlarge](https://instances.vantage.sh/aws/elasticache/cache.m6g.8xlarge) which is a fair-sized cache instance has this bandwidth.\\n### Infrastructure Impact\\nAll of a sudden Luma has this scenario:\\n- Slow and unstable HTTP APIs\\n- Had to oversize more than usual to handle same load - a very low overall ~400RPS\\n- Had to split our Broker instance into smaller and focused one\'s\\n- Had to increase our cache size\\n- We had to create one thing called `pubsub-service` (yes and yes, no bueno) to offload services of slow publishes.\\n- With this - we also created a `jobless` feature which forced backend components to publish only the `jobId` and route the job content itself via Redis.\\n\\n\\n## The Business Impact? Money being thrown away and unsatisfied customers\\n\\nGiven it\'s mission-critical importance of `Session` - the risks were just too high until 1st of March 2025.\\nAfter good months of investigation, searching code, trying to run AST analysis (codemod) in almost the entire codebase and libraries - it sounded like we had a solution in-mind.\\n\\n#### A simple feature flag - that would do `Query.select(_id)` when querying `Groups` - building the session with less data.\\n\\nAlthough simple and sustained by a lot of research we were still cautious by setting up lots of product metrics and log metrics to understand wether rolled customers would have negative impact - like messaging not going out, notifications being missed or even worse - entire product breakdown.\\n\\n### Rollout and Implementation\\n- We needed to ensure our libraries were at least a certain version\\n- Enable flag for each customer tenant _id_\\n### Outcome\\nIt took us nearly a month rolling out **90 backend services** and a week enabling the flag for all customers. But the results are very expressive.\\n- 60% Network usage reduction. It\'s been weeks we don\'t have any alerts about Network Bandwidth\\n- Stable API latencies. We are now able to downsize our infrastructure back to normal levels - we are estimating to downsize REST layer resources by 1/4\\n- Almost zero\'ed PubSub bandaid network usage. We are now `unblocked` to remove the `bandaid` solutions like `pubsub-service` and `sessionless` code\\n\\n\\nREST Layer p75 to p95 stability and latencies drop after 03/11 - first customers.\\n\\n![rest-latencies](//assets/rest-latencies.webp)\\n\\nComparing pre-rollout weeks(03/17) to post-rollout (03/17) - Check the end of the graph\\n![monthly-bandwidth-usage](//assets/monthly-bandwidth-usage.webp)\\n\\nPost-Rollout Monday (Busiest day of week)\\n![busy-monday-after-rollout](//assets/busy-monday-after-rollout.webp)\\nPre-Rollout Monday (Busiest day of week)\\n![busy-monday-pre](//assets/busy-monday-pre.webp)\\n\\n\\n## TakeAway Points\\n\\nThere\'s much more coming in the future - but we are **happy** to finally unblock the road for bigger impact optimizations.\\n\\nTo build good product, find market-fit, prioritize customers and market requirements is an `art of business` but I deeply think that there\'s some bounding between business and this `not-so-celebrated-kind-of-stuff`.\\n\\n\\nAt the end of the day - delivering a reliable, stable and ever-growing platform requires revisiting past decisions - behind a healthy and stable platform is a great patient experience and efficient staff."},{"id":"/2025/03/31/open-source-tales-1","metadata":{"permalink":"/blog/2025/03/31/open-source-tales-1","source":"@site/blog/2025-03-31/open-source-tales-1.md","title":"Open Source Tales #1: WebSocket Operator","description":"One of the most interesting career challenges I\'ve faced was something trivial in the world of stateless services but challenging in stateful - enabling WebSocket instances to scale horizontally.","date":"2025-03-31T00:00:00.000Z","formattedDate":"March 31, 2025","tags":[{"label":"websocket","permalink":"/blog/tags/websocket"},{"label":"blogpost","permalink":"/blog/tags/blogpost"}],"readingTime":2.95,"hasTruncateMarker":false,"authors":[{"name":"Lucas Weis Polesello","title":"SRE | Senior Software Engineer @ LumaHealth","url":"https://github.com/lukas8219","email":"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com","socials":{"x":"https://x.com/luucaspole"},"imageURL":"https://github.com/lukas8219.png","key":"lukas8219"}],"frontMatter":{"title":"Open Source Tales #1: WebSocket Operator","authors":"lukas8219","tags":["websocket","blogpost"]},"prevItem":{"title":"The Tale of How We Compensated Years of Tech Debt in a Month: Performance, Cost and Optimizations","permalink":"/blog/2025/03/31/network-bandwidth-reduction"},"nextItem":{"title":"Redis is more than a Cache - Data Reference","permalink":"/blog/2024/03/15/redis-is-more-than-cache-data-reference"}},"content":"One of the most interesting career challenges I\'ve faced was something trivial in the world of **stateless** services but challenging in **stateful** - enabling WebSocket instances to scale horizontally.\\n\\nThis **challenge** comes in many flavors and ours had some constraints:\\n- It had to respect our internal framework - listening por model events\\n- We had to apply IAM filtering\\n- Had to use SocketIO\\n- SocketIO plugins like RabbitMQ were not valid. Team judge as costly.\\n- Redis Plugins were not fit.\\n- We had to support multi-tab\\n- No infrastructure involved\\n\\nBasically our WebSocket servers ran with old versions of SocketIO and had they very poor usage of its benefits, to say the least. It could\'ve been a simple WebSocket server.\\n\\n\\nTo scale it horizontally, we decided to use Redis PubSub - by simply allowing clients-server communicate via Redis PubSub.\\n\\n\\n\\n![thumbnail-ws-operator-blogpost](//assets/thumbnail-ws-operator-blogpost.webp)\\n\\n### End of Project and I learned something very important\\nAnd that is `choosing to scale WebSocket` was a bad idea by itself. As intrinsic to distributed systems, problems like:\\n- Observability\\n- Redis PubSub deliverability issues and Network bandwidth\\n- It lacked re-balancing connections - hot replicas vs cold replicas by amount of conns.\\n\\n### But I had so many limitations that I crossed my mind:\\nWhat If I could just use the underlying environment - aka Kubernetes - for this kind of stuff? Some refined load balancing? Proper routing of messages via proxy? **(TBH a simple RMQ would\'ve done the job so far)**\\n\\n\\n### Considering that I never-ever stopped dreaming about a better design for this problem\\nBy consequence 2y ears later I stumbled upon [this article](https://medium.com/lumen-engineering-blog/how-to-implement-a-distributed-and-auto-scalable-websocket-server-architecture-on-kubernetes-4cc32e1dfa45) which described - beautifully - how they solved scalability for a WebSocket stateful app.\\n\\nIt motivated me into a _crazy journey_: `If I solved the same issue, if they solved the same issue and we had similar ideas. How many people are solving this same challenge?`\\n\\n### Introducing you [websocket-operator](https://github.com/lukas8219/websocket-operator)\\n\\n![ws-operator-poc-diagram](//assets/ws-operator-poc-diagram.webp)\\n\\nIn this blueprint and `not-yet-prod-deployed-oss-project` I\'ve mixed two main ingredients:\\n- The need to learn heavier GO and Kubernetes Operator.\\n- A problem I\'ve already solved - but now with no limitations\\n\\nThe Operator consists of three main components - and yes they are very similar to those from the article.\\n- A LoadBalancer\\n\\t- A end-user exposed API that accepts connections and routes to proper proxy-sidecars.\\n\\t- It applies a distributed load balancing algorithm - shared with the `Proxy SideCar`\\n\\t- It uses a Kubernetes Service Discovery to check for available IP\'s to load-balancer.\\n- Proxy SideCar\\n\\t- Intercept WS Messages and proxies via HTTP to another `Proxy SideCar` that may have the connection for such recipient.\\n\\t- It shares the same algorithm from LoadBalancer - they can find themselves\\n- Controller\\n\\t- Injects the SideCar in Deployments/Pods with `ws.operator/enabled` label\\n\\t- Re-Balances connected users.\\n\\n### Roadmap\\nThis is pretty much inspired in the articles `Signaling Servers` design and has some interesting features in the Roadmap:\\n- Pluggable Hashing Algorithm for Routing\\n\\t- Plug your own algorithm to load balance connections\\n- Pluggable Routing\\n\\t- v0.0.1 will assume WS is exchanging JSON messages - but they could be RAW binaries, or just simple text with their own protocol.\\n- Support Broadcasting\\n\\n### TakeAway\\n- There\'s a intelectual value in reinventing the wheel\\n- Do not scale **stateful apps** unless very needed\\n- And if you need, reconsider it again. You might be safer just oversizing infrastructure\\n- Ok, you really need it. Study, investigate, research and well, feel free to benchmark this plug and play solution."},{"id":"/2024/03/15/redis-is-more-than-cache-data-reference","metadata":{"permalink":"/blog/2024/03/15/redis-is-more-than-cache-data-reference","source":"@site/blog/2024-03-15/redis-is-more-than-cache-data-reference.md","title":"Redis is more than a Cache - Data Reference","description":"Some weeks ago, we had a incident that was caused mainly due to how we delay job execution.","date":"2024-03-15T00:00:00.000Z","formattedDate":"March 15, 2024","tags":[{"label":"delayed-jobs","permalink":"/blog/tags/delayed-jobs"},{"label":"redis","permalink":"/blog/tags/redis"},{"label":"pubsub","permalink":"/blog/tags/pubsub"},{"label":"distributed-systems","permalink":"/blog/tags/distributed-systems"},{"label":"semaphores","permalink":"/blog/tags/semaphores"},{"label":"async-generators","permalink":"/blog/tags/async-generators"},{"label":"nodejs","permalink":"/blog/tags/nodejs"}],"readingTime":4.925,"hasTruncateMarker":false,"authors":[{"name":"Lucas Weis Polesello","title":"SRE | Senior Software Engineer @ LumaHealth","url":"https://github.com/lukas8219","email":"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com","socials":{"x":"https://x.com/luucaspole"},"imageURL":"https://github.com/lukas8219.png","key":"lukas8219"}],"frontMatter":{"title":"Redis is more than a Cache - Data Reference","authors":"lukas8219","tags":["delayed-jobs","redis","pubsub","distributed-systems","semaphores","async-generators","nodejs"]},"prevItem":{"title":"Open Source Tales #1: WebSocket Operator","permalink":"/blog/2025/03/31/open-source-tales-1"},"nextItem":{"title":"Redis is more than a Cache - Delaying Jobs","permalink":"/blog/2024/03/15/redis-is-more-than-cache-job-delay"}},"content":"Some weeks ago, we had a incident that was caused mainly due to how we delay job execution.\\nOne queue had abnormal behavior during the weekends, which our monitoring systems caught, but we were expecting system to be self-healing and be able to kick through this small hiccup.\\nTuesday we noticed something was off with our integration systems - where a code that was running for more than a year stopped working at the same time we rolled it for a new big customer.\\n\\nI got involved early in the incident due to how often I touch that component of the backend and we initiated investigation so we could get back to the customer as fast as possible with some good news.\\n\\nAfter some hours of investigation we ended up concluding that our long polling mechanism had a hot-loop on a certain queue - which in turn was always retrying delays. The first time this edge case was triggered happened during the weekends where we saw the previous abnormal behavior.\\nDue to always re-delaying jobs,  the amount of postponed jobs to this queue would never actually drain and thus this component  would eternally get stuck while trying to drain postponed jobs - delaying all the other queues from the platform.\\n\\nIn a quick `1/2` hour solution we shipped code to stop retrying jobs after more than N retries and unblocking the hot loop.\\n\\n### What about the future?\\nAll that to say _what_? What is has to do with Redis? \\n\\nAs described the previous post from this series - the job delaying mechanism lives within Redis where we use a Sorted Set to pull the next job. We fanout to a certain amount in parallel - but we only restart this processing after all possible queue targets were drained up until some upper bound timestamp (being the `score` in a SortedSet). \\n\\nWith this fragility in mind and the upcoming code-freeze of December - I suggested to rewrite this design completely.\\n### Current Design\\nWhenever a service requests an postpone - which can be either `intentionally` - calling the method to postpone it OR `unintentionally` - due to some _IO failure, protocol error or some ephemeral channel churn_ - the job flows through this `DelayedJobsStorage` design.\\n\\nThe current `production` design is a simple Sorted Set from Redis where timestamps are the score and key being the job serialized into string.\\n\\nOn the infrastructure side, we use a `cache.r7g.12xlarge ElastiCache` (~300GB \ud83d\udea8) instance to sustain our load SPIKES - like some instabilities or big customers data. \\n\\n\\nIn the other end, there\'s a separate backend component `Scheduler` that is responsible for triggering individual jobs at certain interval. This component triggers a service that runs a long-polling logic until the current timestamp.\\n\\n![delayed-jobs-old-design](//assets/delayed-jobs-old-design.excalidraw.light.svg#light)\\n![delayed-jobs-old-design](/assets/delayed-jobs-old-design.excalidraw.dark.svg#dark)\\n\\n### New Design\\nI\'ve created some abstractions to make it easier to implement new storage backends like `S3`, `VFS` and _many more_.\\n`Redis` is now running as a mainly as reference-to-data component and only stores entire jobs if they are within the next ~2 seconds or some failure happens.\\n\\nThe storage rationale happens with a couple considerations:\\n- How long are we planning to postpone?\\n- How big (byte size) is this job?\\n- Is this storage backend rolled out for certain queue OR tenant _id?\\n- Is this storage available? If not, fall back to Redis\\n\\nWe also changed the core logic behind the backend service that re-enqueues delayed jobs:\\n- ***Removed the coupling with Scheduler*:** \\n\\t- Instead of waiting for some schedule job trigger the backend service, it triggers itself given a certain interval.\\n- ***Circuit Breaking*:**\\n\\t- Jobs keeps being re-enqueued up to a certain timeout. Preventing one cycle of starving resources OR locking entire service in some hot-loop.\\n- ***Concurrent Processing with Semaphores*:**\\n\\t- We would always have up to N concurrent processing target queues - decoupled from other executions.\\n\\t- Speeds up draining time.\\n- ***Better visibility*:**\\n\\t- We implemented proper monitoring such as latencies for each re-enqueue, amount of re-enqueues and failure/successful re-enqueues.\\n- ***Horizontally Scale by Controlling the ZPOPMIN:**\\n\\t- Pop the least score up to an upper-bound timestamp.\\n\\t- This enables us to have multiple instances running which we were unable in the past due to the Singleton Design we had.\\n\\n![new-design](//assets/new-design.excalidraw.light.svg#light)\\n![new-design](/assets/new-design.excalidraw.dark.svg#dark)\\n\\n![redis-is-more-than-cache-data-reference-new-design-read_](//assets/redis-is-more-than-cache-data-reference-new-design-read_.excalidraw.light.svg#light)\\n![redis-is-more-than-cache-data-reference-new-design-read_](/assets/redis-is-more-than-cache-data-reference-new-design-read_.excalidraw.dark.svg#dark)\\n#### Example\\nLets use for example - storing a job for 10minutes that has a medium size due to the context it needs to carry. We would store the job data into S3 then insert a key into Redis formatted as `s3::some-queue::384192393192::<some-generated-uui>`\\nWhen trying to re-enqueue the job - the abstraction easily understands the protocol as being `s3`.  This abstraction then uses the implementation of `s3` which knows where to fetch a certain job by this `uuid`.\\n### What to expect from this Design\\n- **Infrastructure downsizing:** From `300GB` to `>10GB`\\n\\t- Currently we have `4million` of keys stored consuming up to `200GB` of RAM\\n\\t- In the new design this would be `~64mb` - if we calculate `uuid` being 128bits and omit the other small appended data.\\n\\t- Roughly we are expecting to downsize to `10GB` - since brief postpones can still occurs and overload it. *Experimentation* will lead us to decide the proper size.\\n- **Independency:** _Decouple backend components preventing service A stopping service B of working properly_\\n- **Speed:** _N replicas will consume queues much faster in some abnormal load_\\n- **Horizontal Scalability/Reliability:** Multiple Consuming replicas.\\n- **Tail-Latency Aware:** Latency-Sensitive components will be decoupled such as WebSocket notifications, Chat Messages and all real time communication - heavily used in the platform\\n\\n### Concerns\\n- RPS - How many jobs are being delayed per sec and their latencies? p75, p90, p99\\n- S3 speed for large objects -> Will it impact our re-enqueueing speed?\\n- Proper Redis sizing -> How far can we push lower?\\n- Redis is still a single point of failure -> What if Redis just **dies**?"},{"id":"/2024/03/15/redis-is-more-than-cache-job-delay","metadata":{"permalink":"/blog/2024/03/15/redis-is-more-than-cache-job-delay","source":"@site/blog/2024-03-15/redis-is-more-than-cache-job-delay.md","title":"Redis is more than a Cache - Delaying Jobs","description":"My current company - Luma Health Inc - has an Event-Driven Architecture where all of our backend systems interact via async messaging/jobs. Thus our backbone is sustained by an AMQP broker - RabbitMQ - which routes the jobs to interested services.","date":"2024-03-15T00:00:00.000Z","formattedDate":"March 15, 2024","tags":[{"label":"redis","permalink":"/blog/tags/redis"},{"label":"jobs","permalink":"/blog/tags/jobs"},{"label":"pubsub","permalink":"/blog/tags/pubsub"},{"label":"luma","permalink":"/blog/tags/luma"},{"label":"more","permalink":"/blog/tags/more"},{"label":"than","permalink":"/blog/tags/than"},{"label":"cache","permalink":"/blog/tags/cache"}],"readingTime":3.775,"hasTruncateMarker":false,"authors":[{"name":"Lucas Weis Polesello","title":"SRE | Senior Software Engineer @ LumaHealth","url":"https://github.com/lukas8219","email":"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com","socials":{"x":"https://x.com/luucaspole"},"imageURL":"https://github.com/lukas8219.png","key":"lukas8219"}],"frontMatter":{"title":"Redis is more than a Cache - Delaying Jobs","authors":"lukas8219","tags":["redis","jobs","pubsub","luma","more","than","cache"]},"prevItem":{"title":"Redis is more than a Cache - Data Reference","permalink":"/blog/2024/03/15/redis-is-more-than-cache-data-reference"},"nextItem":{"title":"The Zalgo Effect and Resource Leakage - A Case","permalink":"/blog/2024/03/15/zalgo-effect-resource-leakage"}},"content":"My current company - [Luma Health Inc](https://www.lumahealth.io/) - has an `Event-Driven Architecture` where all of our backend systems interact via async messaging/jobs. Thus our backbone is sustained by an AMQP broker - RabbitMQ - which routes the jobs to interested services.\\n\\nSince our jobs are very critical - we cannot support failures AND should design to make the system more resilient because well..we don\'t want a patient not being notified of their appointment, appointments not being created when they should, patients showing off into facilities where they were never notified the patient had something scheduled.\\n\\nBesides the infra and product reliability - some use cases could need postponing - maybe reaching out to an external system who\'s offline/or not responding. Maybe some error which needs a retry - who knows? \\n\\nThe fact is, delaying/retry is a very frequent requirement into Event Driven Architectures. With this a service responsible for doing it was created - and it worked fine.\\n\\nBut - as the company sold bigger contracts and grew up in scale - this system was almost stressed out and not reliable.\\n\\n\\n## The Unreliable Design\\nBefore giving the symptoms, let\'s talk about the organism itself - the service old design.\\n\\nThe design was really straightforward - if our service handlers asked for a postpone OR we failed to send the message to RabbitMQ - we just insert the JSON object from the Job into a Redis `Sorted Set` and using the `Score` as the timestamp which it was meant to be retried/published again.\\n\\nTo publish back into RabbitMQ the postponed messages, a job would be triggered each 5 seconds - doing the following:\\n1. Read from a `set` key containing all the existing `sorted set` keys - basically the queue name\\n2. Fetch jobs using `zrangebyscore` from 0 to current timestamp BUT `limit` to 5K jobs.\\n3. Publish the job to RabbitMQ and remove it from `sorted set`\\n\\n## The Issues\\nThis solution actually scaled up until 1-2 years ago when we started having issues with it - the main one\'s being:\\n1. It could not catch up to a huge backlog of delayed messages\\n2. It would eventually OOM or SPIKE up to 40GB of memory\\n\\t1. Due to things being fetched into memory AND some instability OR even some internal logic - we could end up shoveling too much data into Redis - the service just died :skull:\\n3. We could not scale horizontally - due to consuming and fetching objects into memory before deleting them.\\n\\n## The Solution\\nThe solution was very simple: we implemented something that I liked to call `streaming approach`\\n\\nUsing the same data structure, we are now:\\n1. Running a `zcount` from 0 to current timestamp\\n\\t- Counting the amount of Jobs -> returning N\\n1. Creating an `Async Iterator` for N times - that used the `zpopmin` method from Redis\\n\\t- `zpopmin` basically returns AND removes the least score object - ie most recent timestamp\\n\\nThe `processor` for the SortedSet\\n![process-delayed-jobs-code](//assets/process-delayed-jobs-code.webp)\\n\\nThe `Async Iterator`\\n![job-scan-iterator](//assets/job-scan-iterator.webp)\\n\\nAnd that\'s all!\\n\\nThis simple algorithm change annihilated the need for:\\n1. Big In Memory fetches - makes our memory allocation big\\n2. Limit of 5K in fetches - makes our throughput lower\\n\\n## Results - _which I think the screenshots can speak for themselves_\\n*We processed the entire backlog of 40GB of pending jobs pretty quickly*\\n![aws-memory-consumption](//assets/aws-memory-consumption.webp)\\n \\n *From a constant usage of ~8GB - we dropped down to ~200MB*\\n![memory-delayed-jobs](//assets/memory-delayed-jobs.webp)\\n*We are now - trying to be play safe and still oversize - safely allocating 1/4 of the resources.* The git diff was our first resource dump - we went even further.\\n\\n![git-diff-memory-delayed-jobs](//assets/git-diff-memory-delayed-jobs.webp)\\n\\nMoney-wise: We are talking at least of 1K USD/month AND more in the future if we can lower our ElastiCache instance.\\n## Take Away Points\\n- Redis is a Distributed DataStructure database - more than just a simply KeyValue pair storage.\\n- You can achieve great designs using Redis\\n- Be careful because the way you design a solution with Redis may be costly in the future\\n\\n## Final Thoughts\\nThere could be a lot of discussion wether this is a great way of doing jobs postponing, if Redis is the right storage, if we should really postpone jobs for small network hiccups, shouldn\'t we leverage DelayedExchange from Rabbit? - etc...\\nBut at the end of the day - to succeed as a company we need to solve problems in our daily routine. Some problems are worth, some are not. It\'s always - one step at a time."},{"id":"/2024/03/15/zalgo-effect-resource-leakage","metadata":{"permalink":"/blog/2024/03/15/zalgo-effect-resource-leakage","source":"@site/blog/2024-03-15/zalgo-effect-resource-leakage.md","title":"The Zalgo Effect and Resource Leakage - A Case","description":"Zalgo Effect is an term used to describe unexpected outcomes of mixing sync and async javascript code.","date":"2024-03-15T00:00:00.000Z","formattedDate":"March 15, 2024","tags":[{"label":"nodejs","permalink":"/blog/tags/nodejs"},{"label":"zalgoeffect","permalink":"/blog/tags/zalgoeffect"},{"label":"code","permalink":"/blog/tags/code"}],"readingTime":3.05,"hasTruncateMarker":false,"authors":[{"name":"Lucas Weis Polesello","title":"SRE | Senior Software Engineer @ LumaHealth","url":"https://github.com/lukas8219","email":"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com","socials":{"x":"https://x.com/luucaspole"},"imageURL":"https://github.com/lukas8219.png","key":"lukas8219"}],"frontMatter":{"title":"The Zalgo Effect and Resource Leakage - A Case","authors":"lukas8219","tags":["nodejs","zalgoeffect","code"]},"prevItem":{"title":"Redis is more than a Cache - Delaying Jobs","permalink":"/blog/2024/03/15/redis-is-more-than-cache-job-delay"},"nextItem":{"title":"NodeJS 101 -  Lazy Initialization","permalink":"/blog/2023/12/24/nodejs-101-lazy-init"}},"content":"Zalgo Effect is an term used to describe unexpected outcomes of mixing `sync` and `async` javascript code.\\n\\nIt means - if you mix these two approaches SOMETHING weird will happen.\\n\\nIt\'s one of those things you kinda _don\'t understand_ until you see it in real production systems.\\n\\n# So what it has to do with Resource Leakage?\\n\\nOne day, our SRE team received a couple PagerDuty alerts claiming our services were restarting and not able to work properly due to `Error: No channels left to allocate` - ie RabbitMQ connections were maxing out in channel allocation. (For RabbitMQ reference into Channels and Connections)\\n\\nIt was clear some code was leaking channel creations. No one knew what could potentially be - but God I had studied this `Zalgo Effect` in `NodeJS Design Patterns` Book and it clicked me something.\\n\\n# How was I so sure the Zalgo was the culprit?\\nThe service that was throwing that error was only responsible for fan out a couple messages to a lot of other services - so it was easy as creating a `Queue` object and running N promises concurrently to publish some message.\\nChecking the RabbitMQ Management UI showed me that we created N channels for that connection.\\n\\n# But why it only happened in some scenarios?\\n\\nThat\'s where the `Zalgo Effect` pops in.\\n\\nOur code was built back in ~2015 - Node 4. The callback style was the mainstream. Our Engineers created the abstraction `Queue` which dealt with almost 50% of our Event-Driven Architecture by itself and had to make the `class` style w/ async initializations - not so easily with callbacks.\\n\\nSo the code assumed the following:\\n1. Assert exchange, queues and necessary resources - via something we could call `consumeChannel`.\\n\\t1. The consume channel is created whenever the connection is made.\\n2. Our `confirmChannel` - ie the channel we used to `publish` events was lazily created - mixing `async` and `sync` code.\\n\\nSo the problem lives in 2).\\n\\nImagine the following:\\n\\n- We `assertConfirmChannel`\\n![old-assert-confirm](//assets/old-assert-confirm.webp)\\n![old-get-instance](//assets/old-get-instance.webp)\\n- It check\'s whether the channel EXISTS or NOT.\\n- If not, create via `PROMISE` and return control to EventLoop\\n- If does, return it\\n\\nWhat happens, if the `two concurrent promises` reaches the same `if` without the first promise resolving? We try to create the channel two times and override them - thus keeping channels open but just using only the last one.\\n\\nThis is where the code was _leaking_ channels.\\n\\n## Fixing the problem\\n\\nWell, the fix we _actually shipped_ was simply calling 1 Promise and await it and then fan out the other promises.\\n\\nBut we made it simple due to risks and since the code is being refactored into a new style.\\n\\n# How can I fix If I see something like that?\\n\\nIf you want a real solution, here\'s what the V2 would look like - the idea is to create Promises and assign variables with them, instead of doing `await` on it. Example as below:\\n\\n![assert-zalgo](//assets/assert-zalgo.webp)\\n\\nThis easily fixes the problem - by setting a variable as promise and checking its existence.\\n\\nA more robust style, where you actually need to initialize a couple of resources, you could do something like below\\n\\n![get-or-create-client-print](//assets/get-or-create-client-print.webp)\\n\\n1. Create a function to execute the entire Promise.\\n2. Set up some reference to it\\n3. If requested the same, just use the same Promise.\\n\\n\\n# Ok - but why it fixes the problem?\\n\\nThe idea is to make sure - we are running things in a sync manner and just making the promises settled on their timing. We need to think about the synchronous code execution block to reason about our promises usage."},{"id":"/2023/12/24/nodejs-101-lazy-init","metadata":{"permalink":"/blog/2023/12/24/nodejs-101-lazy-init","source":"@site/blog/2023-12-24/nodejs-101-lazy-init.md","title":"NodeJS 101 -  Lazy Initialization","description":"One of the main challenges when dealing w/ the async nature of NodeJS is initializing classes/clients that requires some sort of side effect - such as database connection, disk reads or whatsoever. Even the simple idea of waiting for the first use-case to connect/initialize a resource.","date":"2023-12-24T00:00:00.000Z","formattedDate":"December 24, 2023","tags":[{"label":"nodejs","permalink":"/blog/tags/nodejs"},{"label":"lazyinitialization","permalink":"/blog/tags/lazyinitialization"},{"label":"nodejs101","permalink":"/blog/tags/nodejs-101"},{"label":"node","permalink":"/blog/tags/node"}],"readingTime":1.88,"hasTruncateMarker":false,"authors":[{"name":"Lucas Weis Polesello","title":"SRE | Senior Software Engineer @ LumaHealth","url":"https://github.com/lukas8219","email":"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com","socials":{"x":"https://x.com/luucaspole"},"imageURL":"https://github.com/lukas8219.png","key":"lukas8219"}],"frontMatter":{"title":"NodeJS 101 -  Lazy Initialization","authors":"lukas8219","tags":["nodejs","lazyinitialization","nodejs101","node"]},"prevItem":{"title":"The Zalgo Effect and Resource Leakage - A Case","permalink":"/blog/2024/03/15/zalgo-effect-resource-leakage"}},"content":"One of the main challenges when dealing w/ the async nature of NodeJS is initializing classes/clients that requires some sort of side effect - such as database connection, disk reads or whatsoever. Even the simple idea of waiting for the first use-case to connect/initialize a resource.\\n\\nBesides Dependency Injection - I like to use two approaches for this:\\n\\n1) Leaving it up to the client to call `connect` or any other synonym - easy as creating an `async function` as the example below\\n```javascript\\nconst redis = require(\'redis\');\\nconst crypto = require(\'crypto\');\\n//PROS: Damn easy, simple and straight-forward\\n\\n//CONS: This leaves the entire responsibility to the client\\nclass DistributedDataStructure {\\n\\tconstructor(){\\n\\t\\tthis.client = redis.createClient();\\n\\t}\\n\\n\\tasync connect(){\\n\\t\\treturn this.client.connect();\\n\\t}\\n\\n\\tasync add(staffName, reviewId){\\n\\t\\t//Do some business here - idk,\\n\\t\\tconst accountName = await this.client.get(key);\\n\\t\\treturn this.client.sAdd(`v1:${accountName}:pending-reviews`, reviewId);\\n\\t}\\n}\\n\\n(async () => {\\n\\tconst ds = new DistributedDataStructure();\\n\\tawait ds.connect();\\n\\tds.add(\'Jerome\', crypto.randomBytes(12).toString(\'hex\'));\\n})()\\n```\\n\\n\\n2) Proxying the access\\n\\nIn the real and wild-world we know that we have to deal w/ legacy code, legacy initialization methods and much more unexpected stuff - for this we have a second use-case which leverages the (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy])[Proxy API for JS]\\n\\nUsing Proxy it would look poorly-like\\n\\n```javascript\\nconst redis = require(\'redis\');\\nconst { once } = require(\'events\');\\nconst crypto = require(\'crypto\');\\n\\n//PROS: No client responsibility - makes it easy for the client\\n//CONS: More complex and error prone\\nclass ProxiedDistributedDataStructure {\\n\\tconstructor(){\\n\\t\\tthis.client = redis.createClient();\\n\\t\\tthis.client.connect();\\n\\t\\treturn new Proxy(this, {\\n\\t\\t\\tget(target, property){\\n\\t\\t\\t\\tconst descriptor = target[property];\\n\\t\\t\\t\\tif(!descriptor){\\n\\t\\t\\t\\t\\treturn;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tif(target.isReady){\\n\\t\\t\\t\\t\\treturn descriptor;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\treturn async function(){\\n\\t\\t\\t\\t\\tawait once(target.client, \'ready\');\\n\\t\\t\\t\\t\\treturn descriptor.apply(target, arguments);\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n        });\\n    }\\n\\n\\tasync add(staffName, reviewId){\\n\\t\\t//Do some business here - idk - like below\\n\\t\\tconst accountName = await this.client.get(staffName);\\n\\t\\treturn this.client.sAdd(`v1:${accountName}:pending-reviews`, reviewId);\\n\\t}\\n}\\n\\nconst client = new ProxiedDistributedDataStructure();\\nclient.add(\'Jerome\', crypto.randomBytes(12).toString(\'hex\'));\\n```\\n\\nThe main benefit for the second approach is that we can instantiate the objects in `sync` contexts and only treat the method calls as `async`  -  instead of needing to play around some dirty gimmicks to call `connect` and chain promises - even worse, callbackifying.\\n\\n**NOTES**: AFAIC from Redis V3^ we have an option `legacyMode` whenever creating the client which we can keep this lazy nature of Redis - doing client buffering of calls."}]}')}}]);