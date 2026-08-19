import {
    FiActivity,
    FiAlertCircle,
    FiAlertTriangle,
    FiCheckCircle,
    FiEye,
    FiFileText,
    FiHash,
    FiLock,
    FiSearch,
    FiShield,
} from "react-icons/fi";

import * as Styled from "./styled";

const Logging = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiActivity />
                    <span>Code Quality</span>
                </div>

                <h1>Logging</h1>

                <p>
                    Logging records meaningful information about application
                    behavior, failures, and operational events. Good logs help
                    developers understand what happened without exposing
                    sensitive data or flooding the system with information that
                    provides little diagnostic value.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiSearch />

                    <h2>Make problems diagnosable</h2>

                    <p>
                        Useful logs provide enough context to understand
                        important events and investigate failures without
                        reproducing every internal detail.
                    </p>
                </article>

                <article>
                    <FiHash />

                    <h2>Prefer structured context</h2>

                    <p>
                        Consistent fields such as request IDs, entity IDs,
                        operation names, and error information make logs easier
                        to search and correlate.
                    </p>
                </article>

                <article>
                    <FiShield />

                    <h2>Protect sensitive information</h2>

                    <p>
                        Passwords, authentication tokens, secrets, and
                        unnecessary personal information should not appear in
                        application logs.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Purpose</span>

                    <h2>Logs should answer useful operational questions</h2>

                    <p>
                        Logging should provide visibility into meaningful
                        application behavior. Recording everything does not
                        automatically produce better observability.
                    </p>
                </div>

                <div className="purposeGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>What happened?</h3>

                        <p>
                            Record important operations such as order creation,
                            dependency failure, startup completion, or
                            background task execution.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Where did it happen?</h3>

                        <p>
                            Include useful module, operation, request, or
                            subsystem context.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Which request or entity was involved?</h3>

                        <p>
                            Safe identifiers can connect related events without
                            logging entire objects.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>What should be investigated?</h3>

                        <p>
                            Failures should contain enough information to help
                            locate the source and understand its impact.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Log Levels</span>

                    <h2>Use levels according to the importance of an event</h2>

                    <p>
                        Consistent log levels help separate normal application
                        information from conditions that need investigation.
                    </p>
                </div>

                <div className="levelGrid">
                    <article>
                        <span className="levelLabel">Debug</span>

                        <h3>Development detail</h3>

                        <p>
                            Fine-grained information useful while investigating
                            behavior. Debug output is usually limited or
                            disabled in production.
                        </p>
                    </article>

                    <article>
                        <span className="levelLabel">Info</span>

                        <h3>Normal significant events</h3>

                        <p>
                            Records important milestones such as service
                            startup, completed jobs, or successful high-level
                            operations.
                        </p>
                    </article>

                    <article>
                        <span className="levelLabel">Warn</span>

                        <h3>Unexpected but recoverable condition</h3>

                        <p>
                            Indicates something unusual happened, but the
                            application can continue operating.
                        </p>
                    </article>

                    <article>
                        <span className="levelLabel">Error</span>

                        <h3>Failed operation</h3>

                        <p>
                            Records failures that prevent an operation from
                            completing or require investigation.
                        </p>
                    </article>
                </div>

                <div className="noteBox">
                    <FiAlertCircle />

                    <div>
                        <h3>Levels should reflect operational meaning.</h3>

                        <p>
                            Do not classify every unusual event as an error.
                            Excessive error logging makes real failures harder
                            to identify.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Structured Logging</span>

                    <h2>
                        Prefer searchable fields over large formatted strings
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Unstructured</span>

                        <pre>
                            <code>{`console.log(
  "User 123 created order 456 for INR 1500",
);`}</code>
                        </pre>

                        <p>
                            The information exists, but extracting individual
                            fields becomes more difficult as log volume grows.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Structured</span>

                        <pre>
                            <code>{`logger.info("Order created", {
  userId: "123",
  orderId: "456",
  amount: 1500,
  currency: "INR",
});`}</code>
                        </pre>

                        <p>
                            Individual fields can be searched, filtered, and
                            analyzed consistently.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Useful Context</span>

                    <h2>
                        Include context that helps connect an event to its cause
                    </h2>
                </div>

                <div className="contextGrid">
                    <article>
                        <strong>Operation</strong>

                        <p>
                            Name the high-level action such as createOrder,
                            processPayment, or importUsers.
                        </p>
                    </article>

                    <article>
                        <strong>Request ID</strong>

                        <p>
                            Connect log entries produced while handling one
                            request.
                        </p>
                    </article>

                    <article>
                        <strong>Entity ID</strong>

                        <p>
                            Include safe identifiers for relevant users, orders,
                            products, or jobs.
                        </p>
                    </article>

                    <article>
                        <strong>Dependency</strong>

                        <p>
                            Identify the database, API, provider, or subsystem
                            involved in a failure.
                        </p>
                    </article>

                    <article>
                        <strong>Error information</strong>

                        <p>
                            Record a useful error message, type, or stack where
                            appropriate.
                        </p>
                    </article>

                    <article>
                        <strong>Duration</strong>

                        <p>
                            Timing information can help investigate unusually
                            slow operations.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Correlation IDs</span>

                    <h2>
                        Connect events produced by the same request or workflow
                    </h2>

                    <p>
                        A correlation or request identifier makes it possible to
                        follow one operation across controllers, services,
                        databases, and external integrations.
                    </p>
                </div>

                <div className="correlationBox">
                    <div className="requestId">
                        <FiHash />
                        <span>requestId: req-48af</span>
                    </div>

                    <div className="correlationFlow">
                        <article>
                            <span>API</span>
                            <p>Request received</p>
                        </article>

                        <article>
                            <span>Service</span>
                            <p>Order validated</p>
                        </article>

                        <article>
                            <span>Payment</span>
                            <p>Payment processed</p>
                        </article>

                        <article>
                            <span>Database</span>
                            <p>Order stored</p>
                        </article>
                    </div>
                </div>

                <div className="exampleBox">
                    <pre>
                        <code>{`logger.info("Payment completed", {
  requestId: "req-48af",
  orderId: "order-101",
  paymentId: "payment-88",
});`}</code>
                    </pre>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Error Logging</span>

                    <h2>Log failures where useful context exists</h2>

                    <p>
                        An error should usually be logged once at a boundary
                        that has enough information to explain the failed
                        operation.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Too little context</span>

                        <pre>
                            <code>{`try {
  await paymentService.charge(order);
} catch (error) {
  console.error(error);
  throw error;
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Useful operation context
                        </span>

                        <pre>
                            <code>{`try {
  await paymentService.charge(order);
} catch (error) {
  logger.error("Payment failed", {
    orderId: order.id,
    provider: "payment-provider",
    error: error.message,
  });

  throw error;
}`}</code>
                        </pre>
                    </article>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            Avoid logging the same exception at every layer.
                        </h3>

                        <p>
                            If each function catches, logs, and rethrows the
                            same failure, one error can generate several nearly
                            identical entries and obscure the real sequence of
                            events.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Sensitive Data</span>

                    <h2>Logs should never become a secret-storage system</h2>
                </div>

                <div className="securityGrid">
                    <article>
                        <FiLock />

                        <h3>Do not log</h3>

                        <ul>
                            <li>Passwords</li>
                            <li>Access tokens</li>
                            <li>Refresh tokens</li>
                            <li>API secrets</li>
                            <li>Private keys</li>
                            <li>Full payment-card details</li>
                            <li>Session secrets</li>
                        </ul>
                    </article>

                    <article>
                        <FiShield />

                        <h3>Minimize sensitive context</h3>

                        <ul>
                            <li>Prefer IDs over full objects.</li>
                            <li>Mask sensitive values when necessary.</li>
                            <li>
                                Do not dump complete request bodies by default.
                            </li>
                            <li>Consider privacy requirements.</li>
                            <li>Limit log access appropriately.</li>
                            <li>Define retention deliberately.</li>
                        </ul>
                    </article>
                </div>

                <div className="exampleGrid sensitiveExample">
                    <article>
                        <span className="exampleLabel">Unsafe</span>

                        <pre>
                            <code>{`logger.info("Login request", {
  email,
  password,
  accessToken,
});`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Safer</span>

                        <pre>
                            <code>{`logger.info("Login completed", {
  userId: user.id,
  requestId,
});`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Duplicate Logging</span>

                    <h2>
                        One useful event is better than several repeated events
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Repeated at every layer
                        </span>

                        <pre>
                            <code>{`repository:
  "Database error"

service:
  "Create user failed"

controller:
  "User request failed"

middleware:
  "Request error"`}</code>
                        </pre>

                        <p>
                            One failure may create several entries without
                            adding meaningful new information.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Logged at useful boundary
                        </span>

                        <pre>
                            <code>{`logger.error("User creation failed", {
  requestId,
  operation: "createUser",
  error: error.message,
});`}</code>
                        </pre>

                        <p>
                            Log where the operation and surrounding context are
                            understood.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Application vs Audit Logs
                    </span>

                    <h2>
                        Operational diagnostics and audit history have different
                        purposes
                    </h2>
                </div>

                <div className="auditGrid">
                    <article>
                        <span className="typeLabel">Application Logs</span>

                        <h3>Understand system behavior</h3>

                        <ul>
                            <li>Runtime failures</li>
                            <li>Dependency problems</li>
                            <li>Startup information</li>
                            <li>Background job status</li>
                            <li>Performance context</li>
                        </ul>
                    </article>

                    <article>
                        <span className="typeLabel">Audit Logs</span>

                        <h3>Record important actions</h3>

                        <ul>
                            <li>Who performed an action</li>
                            <li>What action occurred</li>
                            <li>When it occurred</li>
                            <li>Which entity changed</li>
                            <li>Relevant business outcome</li>
                        </ul>
                    </article>
                </div>

                <div className="noteBox">
                    <FiFileText />

                    <div>
                        <h3>Audit history may require stronger guarantees.</h3>

                        <p>
                            Audit records can have different retention,
                            integrity, access, and compliance requirements from
                            ordinary diagnostic logs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Production Logging</span>

                    <h2>
                        Production logs should be useful without becoming
                        excessive
                    </h2>
                </div>

                <div className="productionGrid">
                    <article>
                        <strong>Prefer structured output</strong>

                        <p>
                            Machine-readable fields make searching and analysis
                            easier.
                        </p>
                    </article>

                    <article>
                        <strong>Limit unnecessary debug logs</strong>

                        <p>
                            High-volume detailed output can increase cost and
                            hide important events.
                        </p>
                    </article>

                    <article>
                        <strong>Include timestamps</strong>

                        <p>
                            Operational events need reliable time information
                            for investigation.
                        </p>
                    </article>

                    <article>
                        <strong>Use consistent field names</strong>

                        <p>
                            Avoid using `requestId` in one module and `req_id`
                            in another without a reason.
                        </p>
                    </article>

                    <article>
                        <strong>Plan retention</strong>

                        <p>
                            Logs do not need to live forever. Retention should
                            match operational and policy needs.
                        </p>
                    </article>

                    <article>
                        <strong>Control access</strong>

                        <p>
                            Production logs may contain operational information
                            that should not be publicly accessible.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">What Not to Log</span>

                    <h2>Avoid noise that does not help operate the system</h2>
                </div>

                <div className="noiseGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Every function entry</h3>

                        <p>
                            Logging every small function invocation can produce
                            huge volumes without meaningful operational value.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Entire large objects</h3>

                        <p>
                            Dumping complete request or database objects creates
                            noise and can expose private information.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Expected validation failures as errors</h3>

                        <p>
                            Normal rejected input should not automatically
                            appear as a system failure.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Repeated success messages</h3>

                        <p>
                            High-frequency trivial success events can overwhelm
                            more useful logs.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about logging</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Does this event provide operational value?
                        </strong>

                        <p>
                            Avoid logging simply because a line of code can
                            produce output.
                        </p>
                    </article>

                    <article>
                        <strong>Is the log level appropriate?</strong>

                        <p>
                            Distinguish normal information from warnings and
                            real failures.
                        </p>
                    </article>

                    <article>
                        <strong>Is enough context included?</strong>

                        <p>
                            Include relevant identifiers and operation
                            information needed for investigation.
                        </p>
                    </article>

                    <article>
                        <strong>Is sensitive information excluded?</strong>

                        <p>
                            Secrets and unnecessary private data should never
                            appear in logs.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is this failure already logged elsewhere?
                        </strong>

                        <p>
                            Avoid duplicate logging across every application
                            layer.
                        </p>
                    </article>

                    <article>
                        <strong>Are field names consistent?</strong>

                        <p>
                            Structured logging becomes much more useful with
                            predictable naming.
                        </p>
                    </article>

                    <article>
                        <strong>Can related events be correlated?</strong>

                        <p>
                            Request or correlation identifiers make multi-step
                            operations easier to investigate.
                        </p>
                    </article>

                    <article>
                        <strong>Would this remain useful in production?</strong>

                        <p>
                            Consider volume, security, retention, and real
                            diagnostic value.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Log enough context to understand important behavior, but no
                    more.
                </h2>

                <p>
                    Good logging makes failures and important operations
                    diagnosable through consistent levels, structured context,
                    correlation IDs, and deliberate error handling. Protect
                    sensitive information, avoid duplicate noise, and treat
                    production logging as part of system design rather than
                    scattered console output.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Logging;
