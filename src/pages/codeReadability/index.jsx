import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCode,
    FiEdit3,
    FiEye,
    FiHash,
    FiMessageSquare,
    FiTarget,
} from "react-icons/fi";

import * as Styled from "./styled";

const CodeReadability = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiEye />
                    <span>Code Quality</span>
                </div>

                <h1>Code Readability</h1>

                <p>
                    Readable code communicates its purpose clearly. A developer
                    should be able to understand the main behavior,
                    responsibilities, and decisions without spending unnecessary
                    effort decoding the implementation.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiEdit3 />

                    <h2>Names should reveal intent</h2>

                    <p>
                        Variables, functions, classes, and modules should
                        communicate what they represent instead of forcing
                        readers to infer meaning.
                    </p>
                </article>

                <article>
                    <FiTarget />

                    <h2>Functions should stay focused</h2>

                    <p>
                        A focused function is easier to understand, test,
                        change, and reuse than one that coordinates many
                        unrelated responsibilities.
                    </p>
                </article>

                <article>
                    <FiCode />

                    <h2>Control flow should be easy to follow</h2>

                    <p>
                        Deep nesting, unclear conditions, hidden side effects,
                        and unnecessary indirection increase the mental effort
                        required to understand code.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Naming</span>

                    <h2>Good names reduce the need for explanation</h2>

                    <p>
                        A useful name describes purpose, not implementation
                        detail. The reader should understand why a value or
                        function exists from its name whenever practical.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Harder to understand
                        </span>

                        <pre>
                            <code>{`const d = new Date();

const x = users.filter((u) => u.a);

function calc(p, q) {
  return p * q;
}`}</code>
                        </pre>

                        <p>
                            Short names save a few characters but force the
                            reader to inspect surrounding code to understand
                            what each value represents.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Clearer intent</span>

                        <pre>
                            <code>{`const currentDate = new Date();

const activeUsers = users.filter(
  (user) => user.isActive,
);

function calculateTotal(price, quantity) {
  return price * quantity;
}`}</code>
                        </pre>

                        <p>
                            Meaningful names make the code easier to scan and
                            reduce unnecessary mental translation.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Functions</span>

                    <h2>Keep functions focused on one clear task</h2>
                </div>

                <div className="functionGrid">
                    <article>
                        <span className="number">01</span>

                        <h3>Do one meaningful thing</h3>

                        <p>
                            A function should have a clear purpose that can be
                            described without joining several unrelated actions
                            with words such as "and".
                        </p>
                    </article>

                    <article>
                        <span className="number">02</span>

                        <h3>Keep inputs understandable</h3>

                        <p>
                            Too many unrelated parameters can indicate that a
                            function is responsible for more than one concept.
                        </p>
                    </article>

                    <article>
                        <span className="number">03</span>

                        <h3>Make side effects obvious</h3>

                        <p>
                            Functions that save data, send messages, update
                            state, or modify external resources should
                            communicate that behavior clearly.
                        </p>
                    </article>

                    <article>
                        <span className="number">04</span>

                        <h3>Extract for clarity, not only length</h3>

                        <p>
                            A short function can still be confusing, while a
                            slightly longer function can remain readable when
                            its control flow is direct.
                        </p>
                    </article>
                </div>

                <div className="exampleGrid functionExample">
                    <article>
                        <span className="exampleLabel">
                            Mixed responsibilities
                        </span>

                        <pre>
                            <code>{`function registerUser(data) {
  validate(data);
  saveToDatabase(data);
  sendWelcomeEmail(data);
  generateReport(data);
  updateAnalytics(data);
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Focused orchestration
                        </span>

                        <pre>
                            <code>{`function registerUser(data) {
  const user = userService.create(data);

  notificationService.sendWelcome(user);
  analyticsService.trackRegistration(user);

  return user;
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Conditionals</span>

                    <h2>Reduce nesting and make decisions explicit</h2>

                    <p>
                        Complex conditionals increase cognitive load because
                        readers must keep several branches and states in mind at
                        the same time.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Deep nesting</span>

                        <pre>
                            <code>{`function processOrder(order) {
  if (order) {
    if (order.isPaid) {
      if (order.items.length > 0) {
        return shipOrder(order);
      }
    }
  }

  return null;
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Guard clauses</span>

                        <pre>
                            <code>{`function processOrder(order) {
  if (!order) return null;
  if (!order.isPaid) return null;
  if (!order.items.length) return null;

  return shipOrder(order);
}`}</code>
                        </pre>
                    </article>
                </div>

                <div className="noteBox">
                    <FiCheckCircle />

                    <div>
                        <h3>Guard clauses can flatten control flow.</h3>

                        <p>
                            Returning early for invalid or exceptional cases can
                            leave the main path of a function easier to see.
                            They should still be used consistently and with
                            clear conditions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Magic Values</span>

                    <h2>Give important values a meaningful name</h2>
                </div>

                <div className="magicGrid">
                    <article>
                        <FiHash />

                        <h3>Magic numbers hide meaning</h3>

                        <pre>
                            <code>{`if (attempts >= 5) {
  lockAccount();
}

const total = price * 1.18;`}</code>
                        </pre>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Named values reveal intent</h3>

                        <pre>
                            <code>{`const MAX_LOGIN_ATTEMPTS = 5;
const TAX_RATE = 0.18;

if (attempts >= MAX_LOGIN_ATTEMPTS) {
  lockAccount();
}

const total = price * (1 + TAX_RATE);`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Comments</span>

                    <h2>
                        Comments should add information the code cannot express
                        clearly
                    </h2>
                </div>

                <div className="commentsGrid">
                    <article>
                        <FiMessageSquare />

                        <h3>Useful comments</h3>

                        <ul>
                            <li>Explain why an unusual decision exists.</li>
                            <li>
                                Document an external limitation or workaround.
                            </li>
                            <li>Clarify important assumptions.</li>
                            <li>Describe non-obvious business reasoning.</li>
                            <li>Warn about behavior that is easy to misuse.</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Comments that often add noise</h3>

                        <ul>
                            <li>Repeating exactly what the next line does.</li>
                            <li>
                                Explaining unclear names instead of improving
                                them.
                            </li>
                            <li>
                                Leaving outdated information after code changes.
                            </li>
                            <li>
                                Using comments to organize excessively large
                                functions.
                            </li>
                            <li>
                                Keeping commented-out dead code in source files.
                            </li>
                        </ul>
                    </article>
                </div>

                <div className="exampleGrid commentsExample">
                    <article>
                        <span className="exampleLabel">
                            Comment repeats code
                        </span>

                        <pre>
                            <code>{`// Increase count by one
count += 1;`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Comment explains why
                        </span>

                        <pre>
                            <code>{`// Retry once because the payment provider
// can return a temporary processing state.
return retryPayment(transaction);`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Formatting</span>

                    <h2>Consistent formatting makes structure visible</h2>
                </div>

                <div className="formatGrid">
                    <article>
                        <strong>Spacing</strong>

                        <p>
                            Use whitespace consistently so related lines feel
                            grouped and separate responsibilities are visually
                            distinct.
                        </p>
                    </article>

                    <article>
                        <strong>Indentation</strong>

                        <p>
                            Consistent indentation makes nesting and control
                            flow easier to recognize immediately.
                        </p>
                    </article>

                    <article>
                        <strong>File organization</strong>

                        <p>
                            Keep related imports, declarations, handlers, and
                            rendered structure organized consistently across
                            similar files.
                        </p>
                    </article>

                    <article>
                        <strong>Consistency</strong>

                        <p>
                            A codebase becomes easier to scan when similar
                            problems follow similar patterns and formatting
                            conventions.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Cognitive Load</span>

                    <h2>
                        Readable code minimizes what the reader must remember
                    </h2>

                    <p>
                        Cognitive load increases when developers must mentally
                        track many variables, branches, abstractions, hidden
                        dependencies, or transformations at the same time.
                    </p>
                </div>

                <div className="loadGrid">
                    <article>
                        <span>Low</span>

                        <h3>Easy to follow</h3>

                        <ul>
                            <li>Clear names</li>
                            <li>Focused responsibilities</li>
                            <li>Direct control flow</li>
                            <li>Small number of active concepts</li>
                            <li>Visible dependencies</li>
                        </ul>
                    </article>

                    <article>
                        <span>High</span>

                        <h3>Harder to reason about</h3>

                        <ul>
                            <li>Deep nesting</li>
                            <li>Unclear abbreviations</li>
                            <li>Hidden state changes</li>
                            <li>Long dependency chains</li>
                            <li>Many unrelated operations</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask while reviewing readability</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Can the main behavior be understood quickly?
                        </strong>

                        <p>
                            The reader should not need to decode unrelated
                            implementation details to understand the feature.
                        </p>
                    </article>

                    <article>
                        <strong>Do names communicate purpose?</strong>

                        <p>
                            Important values and behavior should have names that
                            reduce ambiguity.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are functions doing several unrelated things?
                        </strong>

                        <p>
                            Mixed responsibilities increase both maintenance
                            cost and cognitive load.
                        </p>
                    </article>

                    <article>
                        <strong>Can complex conditions be simplified?</strong>

                        <p>
                            Guard clauses, named predicates, or smaller
                            decisions can make control flow clearer.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are comments explaining why rather than what?
                        </strong>

                        <p>
                            Code should communicate behavior while comments add
                            missing context.
                        </p>
                    </article>

                    <article>
                        <strong>Are important values named?</strong>

                        <p>
                            Constants and domain names make rules easier to
                            identify and update.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Readable code minimizes the effort required to understand
                    intent.
                </h2>

                <p>
                    Good readability comes from clear naming, focused
                    responsibilities, direct control flow, consistent
                    formatting, useful comments, and reducing unnecessary mental
                    overhead for the next developer reading the code.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default CodeReadability;
