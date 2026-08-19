import {
    FiActivity,
    FiAlertTriangle,
    FiBarChart2,
    FiCheckCircle,
    FiClock,
    FiCpu,
    FiDatabase,
    FiGitBranch,
    FiLayers,
    FiServer,
    FiShield,
    FiTrendingUp,
    FiZap,
} from "react-icons/fi";

import * as Styled from "./styled";

const Scalability = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiTrendingUp />
                    <span>Architecture &amp; Maintenance</span>
                </div>

                <h1>Scalability</h1>

                <p>
                    Scalability is the ability of a system to handle increased
                    load without unacceptable degradation in performance,
                    reliability, or operational cost. Good scaling decisions
                    begin with measurement and real bottlenecks rather than
                    assumptions about future traffic.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiBarChart2 />

                    <h2>Measure before changing</h2>

                    <p>
                        Scaling should respond to observed resource pressure,
                        latency, throughput limits, or reliability problems.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Scale the constrained part</h2>

                    <p>
                        Adding resources everywhere does not help if one
                        database query, external API, or serialized operation
                        remains the real bottleneck.
                    </p>
                </article>

                <article>
                    <FiShield />

                    <h2>Protect reliability</h2>

                    <p>
                        A scalable system should continue behaving predictably
                        as load increases and should degrade deliberately when
                        dependencies fail.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Scaling Models</span>

                    <h2>
                        Vertical and horizontal scaling solve capacity
                        differently
                    </h2>

                    <p>
                        Both approaches can be useful. The better choice depends
                        on the workload, architecture, operational complexity,
                        and current bottleneck.
                    </p>
                </div>

                <div className="scaleGrid">
                    <article>
                        <FiCpu />

                        <span className="typeLabel">Vertical Scaling</span>

                        <h3>Make one machine stronger</h3>

                        <p>
                            Increase CPU, memory, storage performance, or other
                            resources on an existing server.
                        </p>

                        <ul>
                            <li>Usually simpler operationally</li>
                            <li>
                                Useful before introducing distributed complexity
                            </li>
                            <li>Has practical hardware limits</li>
                            <li>Can create a larger single point of failure</li>
                        </ul>
                    </article>

                    <article>
                        <FiServer />

                        <span className="typeLabel">Horizontal Scaling</span>

                        <h3>Add more instances</h3>

                        <p>
                            Distribute work across multiple application servers,
                            workers, or service instances.
                        </p>

                        <ul>
                            <li>Can increase total capacity</li>
                            <li>Can improve fault tolerance</li>
                            <li>Requires coordination and routing</li>
                            <li>
                                Works best when instances can operate
                                independently
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Statelessness</span>

                    <h2>
                        Stateless application instances are easier to scale
                        horizontally
                    </h2>

                    <p>
                        If important request state exists only inside one
                        application process, routing the next request to another
                        instance can produce inconsistent behavior.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Instance-local state
                        </span>

                        <pre>
                            <code>{`const sessions = new Map();

app.post("/login", (req, res) => {
  sessions.set(
    req.body.userId,
    {
      loggedIn: true,
    },
  );

  res.sendStatus(200);
});`}</code>
                        </pre>

                        <p>
                            Another application instance does not automatically
                            know about this process-local session state.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Shared authoritative state
                        </span>

                        <pre>
                            <code>{`app.post("/login", async (req, res) => {
  await sessionRepository.create({
    userId: req.body.userId,
    loggedIn: true,
  });

  res.sendStatus(200);
});`}</code>
                        </pre>

                        <p>
                            Instances can depend on shared authoritative storage
                            rather than assuming the next request returns to the
                            same process.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Bottlenecks</span>

                    <h2>
                        Overall throughput is constrained by the slowest
                        important path
                    </h2>
                </div>

                <div className="bottleneckGrid">
                    <article>
                        <FiServer />
                        <strong>Application CPU</strong>
                        <p>
                            Expensive computation can limit request throughput.
                        </p>
                    </article>

                    <article>
                        <FiDatabase />
                        <strong>Database</strong>
                        <p>
                            Slow queries, locks, or excessive reads can dominate
                            latency.
                        </p>
                    </article>

                    <article>
                        <FiClock />
                        <strong>External services</strong>
                        <p>
                            Third-party APIs can impose latency and throughput
                            limits.
                        </p>
                    </article>

                    <article>
                        <FiGitBranch />
                        <strong>Serialized work</strong>
                        <p>
                            One sequential critical section can prevent useful
                            concurrency.
                        </p>
                    </article>

                    <article>
                        <FiActivity />
                        <strong>Network</strong>
                        <p>
                            Large payloads or excessive requests can consume
                            bandwidth.
                        </p>
                    </article>

                    <article>
                        <FiDatabase />
                        <strong>Storage</strong>
                        <p>
                            Disk and persistence operations can become
                            throughput limits.
                        </p>
                    </article>
                </div>

                <div className="noteBox">
                    <FiBarChart2 />

                    <div>
                        <h3>Measure the bottleneck instead of guessing.</h3>

                        <p>
                            CPU usage, memory, database timings, request
                            latency, throughput, queue depth, dependency
                            latency, and error rates can reveal where additional
                            capacity or architectural change would actually
                            help.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Database Scaling</span>

                    <h2>
                        Database performance often becomes a major scaling
                        constraint
                    </h2>
                </div>

                <div className="databaseGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Improve query shape</h3>

                            <p>
                                Avoid unnecessary reads, repeated round trips,
                                and retrieving data the operation does not need.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Use appropriate indexes</h3>

                            <p>
                                Index fields according to real query patterns
                                and measure their effect.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Paginate large result sets</h3>

                            <p>
                                Avoid returning unbounded collections when
                                clients need only a portion of the data.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Reduce repeated database work</h3>

                            <p>
                                Reuse appropriate results or precompute
                                expensive information when the consistency
                                requirements allow it.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>05</span>

                        <div>
                            <h3>Scale storage deliberately</h3>

                            <p>
                                Replication, partitioning, or other distributed
                                strategies add operational and consistency
                                complexity and should solve a real need.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>06</span>

                        <div>
                            <h3>Protect write integrity</h3>

                            <p>
                                Throughput improvements should not silently
                                weaken important consistency guarantees.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Caching</span>

                    <h2>
                        Cache expensive repeatable work when freshness
                        requirements allow it
                    </h2>

                    <p>
                        Caching can reduce repeated computation or data access,
                        but cached data introduces invalidation, freshness,
                        memory, and consistency decisions.
                    </p>
                </div>

                <div className="cacheGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Good candidates</h3>

                        <ul>
                            <li>Expensive repeated calculations</li>
                            <li>
                                Frequently read data that changes infrequently
                            </li>
                            <li>Generated reports or summaries</li>
                            <li>
                                Public responses with clear freshness
                                requirements
                            </li>
                            <li>
                                Data already safe to recompute if cache is
                                missing
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Questions to answer</h3>

                        <ul>
                            <li>How stale may the data become?</li>
                            <li>When is the cache invalidated?</li>
                            <li>What happens on a cache miss?</li>
                            <li>How much memory can the cache consume?</li>
                            <li>
                                Can incorrect cached data create business
                                problems?
                            </li>
                        </ul>
                    </article>
                </div>

                <div className="exampleGrid cacheExample">
                    <article>
                        <span className="exampleLabel">
                            Repeated calculation
                        </span>

                        <pre>
                            <code>{`function getReport(data) {
  return generateExpensiveReport(data);
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Simple in-process cache
                        </span>

                        <pre>
                            <code>{`const reportCache = new Map();

function getReport(key, data) {
  if (reportCache.has(key)) {
    return reportCache.get(key);
  }

  const report =
    generateExpensiveReport(data);

  reportCache.set(key, report);

  return report;
}`}</code>
                        </pre>

                        <p>
                            This can reduce repeated work inside one process,
                            but multiple instances will not automatically share
                            this cache.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Background Work</span>

                    <h2>
                        Move slow non-interactive work away from
                        latency-sensitive requests
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Request waits for everything
                        </span>

                        <pre>
                            <code>{`app.post("/orders", async (req, res) => {
  const order = await createOrder(req.body);

  await generateInvoice(order);
  await sendEmail(order);
  await generateAnalytics(order);

  res.json(order);
});`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Separate required and deferred work
                        </span>

                        <pre>
                            <code>{`app.post("/orders", async (req, res) => {
  const order = await createOrder(req.body);

  await backgroundJobs.add({
    type: "order-created",
    orderId: order.id,
  });

  res.json(order);
});`}</code>
                        </pre>

                        <p>
                            The request completes after required work, while
                            secondary tasks can be processed separately.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Queues Conceptually</span>

                    <h2>
                        A queue separates work production from work processing
                    </h2>
                </div>

                <div className="queueFlow">
                    <article>
                        <FiZap />
                        <strong>Producer</strong>
                        <p>Creates a unit of background work.</p>
                    </article>

                    <div className="flowArrow">→</div>

                    <article>
                        <FiLayers />
                        <strong>Queue</strong>
                        <p>Temporarily holds pending work.</p>
                    </article>

                    <div className="flowArrow">→</div>

                    <article>
                        <FiCpu />
                        <strong>Worker</strong>
                        <p>Processes jobs independently from the request.</p>
                    </article>
                </div>

                <div className="queueQuestions">
                    <article>
                        <strong>What if processing fails?</strong>
                        <p>Define retry and permanent-failure behavior.</p>
                    </article>

                    <article>
                        <strong>Can the same job run twice?</strong>
                        <p>
                            Make important operations idempotent where
                            practical.
                        </p>
                    </article>

                    <article>
                        <strong>How quickly must work complete?</strong>
                        <p>
                            Queueing trades immediate execution for decoupling
                            and resilience.
                        </p>
                    </article>

                    <article>
                        <strong>What if jobs accumulate?</strong>
                        <p>
                            Queue depth can reveal insufficient worker capacity.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Concurrency</span>

                    <h2>
                        Run independent work concurrently when it is safe to do
                        so
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Sequential independent calls
                        </span>

                        <pre>
                            <code>{`const profile =
  await fetchProfile(userId);

const preferences =
  await fetchPreferences(userId);

const notifications =
  await fetchNotifications(userId);`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Concurrent independent calls
                        </span>

                        <pre>
                            <code>{`const [
  profile,
  preferences,
  notifications,
] = await Promise.all([
  fetchProfile(userId),
  fetchPreferences(userId),
  fetchNotifications(userId),
]);`}</code>
                        </pre>

                        <p>
                            Independent operations can overlap instead of
                            waiting for each other unnecessarily.
                        </p>
                    </article>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Concurrency is not unlimited parallelism.</h3>

                        <p>
                            Starting thousands of expensive operations at once
                            can overwhelm databases, APIs, memory, sockets, or
                            the local runtime. Control concurrency according to
                            resource limits.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Rate Limiting</span>

                    <h2>
                        Protect constrained resources from excessive request
                        volume
                    </h2>
                </div>

                <div className="rateGrid">
                    <article>
                        <FiShield />

                        <h3>Protect infrastructure</h3>

                        <p>
                            Prevent one client or traffic spike from consuming
                            disproportionate resources.
                        </p>
                    </article>

                    <article>
                        <FiActivity />

                        <h3>Protect expensive operations</h3>

                        <p>
                            Login, search, exports, uploads, and external API
                            calls may deserve different limits.
                        </p>
                    </article>

                    <article>
                        <FiClock />

                        <h3>Define time windows</h3>

                        <p>
                            Limits should reflect the operation and expected
                            legitimate usage.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Return clear failures</h3>

                        <p>
                            Clients should be able to understand that a request
                            was rejected because of rate limits rather than an
                            internal server failure.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Measurement</span>

                    <h2>
                        Scaling decisions should be supported by observable data
                    </h2>
                </div>

                <div className="metricGrid">
                    <article>
                        <strong>Latency</strong>
                        <p>How long important operations take.</p>
                    </article>

                    <article>
                        <strong>Throughput</strong>
                        <p>How much work the system completes over time.</p>
                    </article>

                    <article>
                        <strong>Error rate</strong>
                        <p>
                            How frequently operations fail under normal and peak
                            load.
                        </p>
                    </article>

                    <article>
                        <strong>CPU</strong>
                        <p>
                            Whether computation is exhausting processor
                            capacity.
                        </p>
                    </article>

                    <article>
                        <strong>Memory</strong>
                        <p>
                            Whether application working sets or leaks approach
                            limits.
                        </p>
                    </article>

                    <article>
                        <strong>Database timing</strong>
                        <p>Whether data access dominates request duration.</p>
                    </article>

                    <article>
                        <strong>Queue depth</strong>
                        <p>
                            Whether background work is arriving faster than it
                            is processed.
                        </p>
                    </article>

                    <article>
                        <strong>Dependency latency</strong>
                        <p>
                            Whether external services constrain application
                            performance.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Premature Scaling</span>

                    <h2>
                        Do not pay distributed-system costs before the problem
                        exists
                    </h2>
                </div>

                <div className="prematureBox">
                    <FiAlertTriangle />

                    <div>
                        <h3>
                            Complex architecture is not the same as scalable
                            architecture.
                        </h3>

                        <p>
                            Multiple services, distributed state, background
                            workers, partitioning, replication, and complex
                            caching can all be useful, but they also increase
                            deployment, debugging, testing, and failure
                            complexity.
                        </p>
                    </div>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Before adding complexity</h3>

                        <ul>
                            <li>Measure the current workload.</li>
                            <li>Find the real bottleneck.</li>
                            <li>Improve obvious inefficient code.</li>
                            <li>Optimize important queries.</li>
                            <li>Evaluate simpler resource scaling first.</li>
                        </ul>
                    </article>

                    <article>
                        <FiTrendingUp />

                        <h3>Add architecture when justified</h3>

                        <ul>
                            <li>Current capacity is insufficient.</li>
                            <li>
                                Availability requirements demand redundancy.
                            </li>
                            <li>
                                Workload characteristics require separation.
                            </li>
                            <li>
                                Operational measurements justify the change.
                            </li>
                            <li>The team can support the added complexity.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Graceful Degradation</span>

                    <h2>
                        Not every dependency failure should destroy the entire
                        experience
                    </h2>
                </div>

                <div className="degradationGrid">
                    <article>
                        <strong>Optional recommendations unavailable</strong>

                        <p>
                            Continue showing the main product page without
                            recommendations.
                        </p>
                    </article>

                    <article>
                        <strong>Analytics provider unavailable</strong>

                        <p>
                            Core user operations may continue while telemetry is
                            temporarily reduced.
                        </p>
                    </article>

                    <article>
                        <strong>Email delayed</strong>

                        <p>
                            A completed order may remain valid while
                            notification delivery is retried separately.
                        </p>
                    </article>

                    <article>
                        <strong>Critical payment unavailable</strong>

                        <p>
                            Stop the dependent operation clearly instead of
                            pretending it succeeded.
                        </p>
                    </article>
                </div>

                <div className="noteBox">
                    <FiShield />

                    <div>
                        <h3>Degradation depends on business criticality.</h3>

                        <p>
                            Optional features can often fail independently.
                            Critical data integrity, authorization, or payment
                            behavior may require the whole operation to fail
                            safely.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Architecture Tradeoffs</span>

                    <h2>Every scaling technique shifts complexity somewhere</h2>
                </div>

                <div className="tradeoffGrid">
                    <article>
                        <span>Horizontal Scaling</span>
                        <strong>More capacity</strong>
                        <p>
                            Requires routing, shared state strategy, and
                            instance coordination.
                        </p>
                    </article>

                    <article>
                        <span>Caching</span>
                        <strong>Less repeated work</strong>
                        <p>Introduces freshness and invalidation decisions.</p>
                    </article>

                    <article>
                        <span>Background Jobs</span>
                        <strong>Lower request latency</strong>
                        <p>
                            Introduces retries, delayed completion, and job
                            observability.
                        </p>
                    </article>

                    <article>
                        <span>Concurrency</span>
                        <strong>Higher throughput</strong>
                        <p>
                            Can increase contention and pressure on
                            dependencies.
                        </p>
                    </article>

                    <article>
                        <span>Replication</span>
                        <strong>Availability and read capacity</strong>
                        <p>
                            Can introduce consistency and synchronization
                            tradeoffs.
                        </p>
                    </article>

                    <article>
                        <span>Rate Limiting</span>
                        <strong>Resource protection</strong>
                        <p>
                            May reject legitimate bursts if policies are poorly
                            chosen.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask before making a scaling decision</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>What is the actual bottleneck?</strong>

                        <p>
                            Identify the constrained resource or operation
                            before changing architecture.
                        </p>
                    </article>

                    <article>
                        <strong>Do measurements support the problem?</strong>

                        <p>
                            Use latency, throughput, resource usage, and failure
                            data.
                        </p>
                    </article>

                    <article>
                        <strong>Can a simpler optimization solve it?</strong>

                        <p>
                            Query improvements, indexing, batching, or resource
                            upgrades may be enough.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is application state safe across multiple instances?
                        </strong>

                        <p>
                            Avoid relying unintentionally on process-local
                            state.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can expensive work happen asynchronously?
                        </strong>

                        <p>
                            Separate required request work from suitable
                            background tasks.
                        </p>
                    </article>

                    <article>
                        <strong>Is concurrency controlled?</strong>

                        <p>Parallel work should respect downstream capacity.</p>
                    </article>

                    <article>
                        <strong>
                            What happens when a dependency becomes slow?
                        </strong>

                        <p>
                            Define timeouts, failure handling, and degradation
                            behavior.
                        </p>
                    </article>

                    <article>
                        <strong>Does caching have a freshness strategy?</strong>

                        <p>
                            Every cache needs clear expectations around
                            invalidation and stale data.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can the team operate the added complexity?
                        </strong>

                        <p>
                            Architecture must remain understandable and
                            supportable after the change.
                        </p>
                    </article>

                    <article>
                        <strong>Are we solving a current requirement?</strong>

                        <p>
                            Avoid distributed complexity built only for imagined
                            future scale.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Scale the measured bottleneck with the simplest architecture
                    that meets the need.
                </h2>

                <p>
                    Scalability is not about maximizing infrastructure
                    complexity. Measure real workloads, keep application
                    instances independently usable, optimize constrained
                    resources, defer non-critical work where useful, control
                    concurrency, protect systems from overload, and understand
                    the tradeoffs introduced by every scaling technique.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Scalability;
