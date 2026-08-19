import {
    FiAlertCircle,
    FiAlertTriangle,
    FiCheckCircle,
    FiRefreshCw,
    FiShield,
    FiTerminal,
} from "react-icons/fi";

import * as Styled from "./styled";

const ErrorHandlingStrategy = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiShield />
                    <span>Reliability</span>
                </div>

                <h1>Error Handling Strategy</h1>

                <p>
                    Error handling should make failures predictable, visible,
                    and safe. A good strategy separates expected application
                    errors from unexpected failures, validates data at clear
                    boundaries, and gives both users and developers useful
                    information without exposing unnecessary details.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiAlertCircle />

                    <h2>Expected errors should be handled deliberately</h2>

                    <p>
                        Invalid input, missing resources, denied permissions,
                        and known business-rule failures are normal application
                        states and should be represented clearly.
                    </p>
                </article>

                <article>
                    <FiAlertTriangle />

                    <h2>Unexpected errors should stay visible</h2>

                    <p>
                        Programming defects, infrastructure failures, and
                        unknown states should not be silently converted into
                        success or ignored.
                    </p>
                </article>

                <article>
                    <FiTerminal />

                    <h2>Errors need useful context</h2>

                    <p>
                        Logs and developer diagnostics should provide enough
                        context to understand what failed while avoiding
                        sensitive information.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Error Categories</span>

                    <h2>
                        Expected and unexpected failures need different
                        treatment
                    </h2>

                    <p>
                        Treating every failure the same usually produces vague
                        messages, weak logging, and difficult recovery behavior.
                    </p>
                </div>

                <div className="categoryGrid">
                    <article>
                        <span className="cardLabel">Expected Error</span>

                        <h3>Part of normal application behavior</h3>

                        <ul>
                            <li>Required input is missing.</li>
                            <li>A record cannot be found.</li>
                            <li>A user does not have permission.</li>
                            <li>A business rule rejects an operation.</li>
                            <li>A request conflicts with existing state.</li>
                        </ul>

                        <div className="status">
                            <FiCheckCircle />
                            <span>Handle explicitly</span>
                        </div>
                    </article>

                    <article>
                        <span className="cardLabel">Unexpected Error</span>

                        <h3>Something failed outside the expected path</h3>

                        <ul>
                            <li>A database connection unexpectedly fails.</li>
                            <li>An invariant is broken.</li>
                            <li>
                                An external dependency returns an unknown
                                response.
                            </li>
                            <li>Code accesses an invalid state.</li>
                            <li>An unhandled exception reaches a boundary.</li>
                        </ul>

                        <div className="status">
                            <FiAlertTriangle />
                            <span>Log and surface safely</span>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Validation Boundaries</span>

                    <h2>Reject invalid data as early as practical</h2>

                    <p>
                        Validation is easiest to reason about when input is
                        checked at the boundary where untrusted or external data
                        enters the system.
                    </p>
                </div>

                <div className="boundaryFlow">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Receive external input</h3>
                            <p>
                                Request data, form values, configuration, file
                                content, or external service responses enter the
                                application.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Validate shape and required values</h3>
                            <p>
                                Reject malformed or missing data before deeper
                                application logic depends on it.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Apply business rules</h3>
                            <p>
                                Domain-specific rules belong after basic input
                                validity has already been established.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Continue with trusted assumptions</h3>
                            <p>
                                Internal logic becomes simpler when boundaries
                                guarantee the conditions it relies on.
                            </p>
                        </div>
                    </article>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Validation scattered later
                        </span>

                        <pre>
                            <code>{`function createAccount(data) {
  const user = buildUser(data);

  if (!data.email) {
    throw new Error("Email required");
  }

  return saveUser(user);
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Validate before processing
                        </span>

                        <pre>
                            <code>{`function createAccount(data) {
  validateAccountInput(data);

  const user = buildUser(data);

  return saveUser(user);
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Fail Fast</span>

                    <h2>
                        Stop invalid execution before it creates a larger
                        problem
                    </h2>
                </div>

                <div className="conceptBox">
                    <div className="conceptIcon">
                        <FiAlertCircle />
                    </div>

                    <div>
                        <h3>
                            Invalid assumptions should fail near their source.
                        </h3>

                        <p>
                            Continuing after a required condition has failed can
                            create misleading downstream errors. A clear early
                            failure usually makes the real cause easier to
                            identify.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid failExample">
                    <article>
                        <span className="exampleLabel">
                            Failure appears later
                        </span>

                        <pre>
                            <code>{`function sendReceipt(order) {
  const email = order.customer.email;

  emailService.send(email);
}`}</code>
                        </pre>

                        <p>
                            If the order or customer is invalid, the eventual
                            exception may reveal little about which assumption
                            was actually broken.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Explicit invariant</span>

                        <pre>
                            <code>{`function sendReceipt(order) {
  if (!order?.customer?.email) {
    throw new Error(
      "Receipt requires a customer email",
    );
  }

  emailService.send(order.customer.email);
}`}</code>
                        </pre>

                        <p>
                            The failure is reported at the point where the
                            requirement matters.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">User-Facing Errors</span>

                    <h2>Tell users what they can understand and act on</h2>
                </div>

                <div className="messageGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Avoid technical messages</h3>

                        <pre>
                            <code>{`TypeError:
Cannot read properties of undefined
at createOrder (order.js:42)`}</code>
                        </pre>

                        <p>
                            Internal stack traces and implementation details are
                            not useful to normal users and may expose
                            information unnecessarily.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Prefer actionable messages</h3>

                        <pre>
                            <code>{`We could not create the order.

Please confirm your delivery
details and try again.`}</code>
                        </pre>

                        <p>
                            The message explains the outcome and gives the user
                            a reasonable next step.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Logging</span>

                    <h2>
                        Logs should help explain failures without becoming noise
                    </h2>
                </div>

                <div className="loggingGrid">
                    <article>
                        <strong>Useful context</strong>

                        <ul>
                            <li>Error type</li>
                            <li>Relevant operation</li>
                            <li>Request or correlation identifier</li>
                            <li>Safe entity identifiers</li>
                            <li>Dependency or subsystem involved</li>
                            <li>Timestamp</li>
                        </ul>
                    </article>

                    <article>
                        <strong>Avoid logging</strong>

                        <ul>
                            <li>Passwords</li>
                            <li>Authentication tokens</li>
                            <li>Private keys</li>
                            <li>
                                Sensitive personal data without a valid need
                            </li>
                            <li>
                                Large repeated objects without useful context
                            </li>
                            <li>The same error at every layer</li>
                        </ul>
                    </article>
                </div>

                <div className="exampleGrid loggingExample">
                    <article>
                        <span className="exampleLabel">Weak log</span>

                        <pre>
                            <code>{`console.error("Something went wrong");`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Useful structured context
                        </span>

                        <pre>
                            <code>{`logger.error("Payment failed", {
  orderId: order.id,
  provider: "payment-gateway",
  error: error.message,
});`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Retries</span>

                    <h2>
                        Retry only failures that have a reasonable chance of
                        succeeding
                    </h2>
                </div>

                <div className="retryGrid">
                    <article>
                        <FiRefreshCw />

                        <h3>Good retry candidates</h3>

                        <ul>
                            <li>Temporary network failures</li>
                            <li>Transient service unavailability</li>
                            <li>Rate limits with a known retry window</li>
                            <li>Temporary processing states</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Poor retry candidates</h3>

                        <ul>
                            <li>Invalid user input</li>
                            <li>Authentication failure</li>
                            <li>Permission denial</li>
                            <li>Permanent business-rule rejection</li>
                        </ul>
                    </article>
                </div>

                <div className="noteBox">
                    <FiAlertCircle />

                    <div>
                        <h3>Retries need limits.</h3>

                        <p>
                            Unbounded retries can overload a failing dependency
                            and keep requests alive indefinitely. Retry policies
                            should define a maximum attempt count and
                            appropriate delay strategy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Swallowed Errors</span>

                    <h2>Do not hide a failure just to keep execution moving</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Error disappears</span>

                        <pre>
                            <code>{`try {
  await saveOrder(order);
} catch (error) {
  // Ignore
}`}</code>
                        </pre>

                        <p>
                            The caller cannot know that persistence failed, and
                            developers receive no diagnostic information.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Handle with intent</span>

                        <pre>
                            <code>{`try {
  await saveOrder(order);
} catch (error) {
  logger.error("Order save failed", {
    orderId: order.id,
    error: error.message,
  });

  throw error;
}`}</code>
                        </pre>

                        <p>
                            The failure remains visible while useful context is
                            recorded at the appropriate boundary.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Error Boundaries</span>

                    <h2>Handle errors at the level that has enough context</h2>
                </div>

                <div className="layerGrid">
                    <article>
                        <span>Input</span>
                        <strong>Validate incoming data</strong>
                        <p>
                            Reject malformed requests before they reach deeper
                            application logic.
                        </p>
                    </article>

                    <article>
                        <span>Domain</span>
                        <strong>Represent business-rule failures</strong>
                        <p>
                            Keep domain decisions separate from
                            transport-specific error messages.
                        </p>
                    </article>

                    <article>
                        <span>Infrastructure</span>
                        <strong>Preserve technical failure details</strong>
                        <p>
                            Database, filesystem, and external service failures
                            need enough context for diagnosis.
                        </p>
                    </article>

                    <article>
                        <span>Boundary</span>
                        <strong>Translate safely for the caller</strong>
                        <p>
                            API or UI boundaries can convert internal errors
                            into appropriate user-facing responses.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about error handling</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Is this an expected or unexpected failure?
                        </strong>

                        <p>
                            Known application states should be handled
                            differently from unknown system failures.
                        </p>
                    </article>

                    <article>
                        <strong>Is input validated at a clear boundary?</strong>

                        <p>
                            Invalid data should not travel deep into application
                            logic before being rejected.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can the caller understand what happened?
                        </strong>

                        <p>
                            Error responses should be meaningful at the level
                            where they are consumed.
                        </p>
                    </article>

                    <article>
                        <strong>Does the log contain useful context?</strong>

                        <p>
                            Diagnostics should make investigation easier without
                            exposing sensitive information.
                        </p>
                    </article>

                    <article>
                        <strong>Is a retry actually appropriate?</strong>

                        <p>
                            Retry only transient failures that could reasonably
                            succeed later.
                        </p>
                    </article>

                    <article>
                        <strong>Is any error being silently swallowed?</strong>

                        <p>
                            A hidden failure can leave the application in an
                            incorrect state and make diagnosis much harder.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Good error handling keeps failures explicit, safe, and
                    diagnosable.
                </h2>

                <p>
                    Validate early, distinguish expected errors from unexpected
                    failures, communicate clearly to users, preserve useful
                    diagnostic context, and never hide a failure without a
                    deliberate reason.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default ErrorHandlingStrategy;
