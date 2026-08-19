import {
    FiAlertTriangle,
    FiCheck,
    FiCheckCircle,
    FiCode,
    FiEdit3,
    FiEye,
    FiFileText,
    FiRefreshCw,
    FiShield,
    FiTarget,
    FiZap,
} from "react-icons/fi";

import * as Styled from "./styled";

const CleanCode = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiCode />
                    <span>Foundation</span>
                </div>

                <h1>Clean Code</h1>

                <p>
                    Clean code communicates intent clearly, keeps
                    responsibilities focused, reduces unnecessary complexity,
                    and makes future changes easier to understand and verify. It
                    is not code that follows the most rules. It is code that
                    helps developers reason about the system with less friction.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiEye />

                    <h2>Readable</h2>

                    <p>
                        A developer should be able to understand the important
                        behavior without repeatedly decoding names, control
                        flow, or hidden state.
                    </p>
                </article>

                <article>
                    <FiTarget />

                    <h2>Intentional</h2>

                    <p>
                        Names, functions, boundaries, and abstractions should
                        communicate why the code exists and what responsibility
                        it owns.
                    </p>
                </article>

                <article>
                    <FiRefreshCw />

                    <h2>Changeable</h2>

                    <p>
                        Clean code reduces the risk and effort required to add
                        features, fix defects, refactor structure, and maintain
                        the system.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Meaning</span>

                    <h2>Clean code minimizes unnecessary mental work</h2>

                    <p>
                        Code is read far more often than it is initially
                        written. The easier it is to understand intent, data
                        flow, responsibilities, and important decisions, the
                        easier the system is to maintain.
                    </p>
                </div>

                <div className="meaningGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Understandable</h3>

                        <p>
                            Names and structure expose the purpose of important
                            behavior.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Focused</h3>

                        <p>
                            Functions and modules avoid unrelated
                            responsibilities.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Predictable</h3>

                        <p>
                            Side effects, errors, and return values behave
                            consistently.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Verifiable</h3>

                        <p>
                            Important behavior can be tested and reviewed
                            without excessive setup.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Readability</span>

                    <h2>Readable code makes the main idea visible</h2>

                    <p>
                        Readability is not about making every line extremely
                        short. It is about reducing the amount of context and
                        interpretation required to understand what the code is
                        doing.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Harder to decode</span>

                        <pre>
                            <code>{`const r = u.filter(
  (x) => x.a && x.r === "admin",
);`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Intent visible</span>

                        <pre>
                            <code>{`const activeAdmins = users.filter(
  (user) =>
    user.isActive &&
    user.role === "admin",
);`}</code>
                        </pre>

                        <p>
                            The second version reveals the meaning of the data
                            and condition without requiring additional
                            explanation.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Intent</span>

                    <h2>Code should reveal why a decision exists</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Raw condition</span>

                        <pre>
                            <code>{`if (
  user.active &&
  user.role === "admin" &&
  user.permissions.includes("edit")
) {
  return true;
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Named intent</span>

                        <pre>
                            <code>{`function canEditContent(user) {
  return (
    user.isActive &&
    user.role === "admin" &&
    user.permissions.includes("edit")
  );
}

if (canEditContent(user)) {
  return true;
}`}</code>
                        </pre>

                        <p>
                            Naming the business decision makes the code easier
                            to understand at the call site.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Simplicity</span>

                    <h2>
                        Prefer the simplest design that clearly satisfies the
                        requirement
                    </h2>

                    <p>
                        Simplicity does not mean avoiding useful architecture.
                        It means not adding layers, abstractions, configuration,
                        or indirection without a meaningful reason.
                    </p>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Useful simplicity</h3>

                        <ul>
                            <li>Direct code for simple behavior</li>
                            <li>Small number of clear concepts</li>
                            <li>Abstractions based on real repetition</li>
                            <li>Visible data flow</li>
                            <li>Focused responsibilities</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Unnecessary complexity</h3>

                        <ul>
                            <li>Layers without a responsibility</li>
                            <li>Factories for one implementation</li>
                            <li>Configuration for values that never vary</li>
                            <li>Generic abstractions before patterns exist</li>
                            <li>Indirection that hides simple behavior</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Naming</span>

                    <h2>
                        Names are one of the strongest forms of documentation
                    </h2>
                </div>

                <div className="nameGrid">
                    <article>
                        <FiEdit3 />

                        <h3>Variables</h3>

                        <p>
                            Describe the meaning of the value rather than its
                            container or type.
                        </p>

                        <pre>
                            <code>{`const pendingOrders =
  orders.filter(
    (order) =>
      order.status === "pending",
  );`}</code>
                        </pre>
                    </article>

                    <article>
                        <FiZap />

                        <h3>Functions</h3>

                        <p>
                            Describe the action or decision performed by the
                            function.
                        </p>

                        <pre>
                            <code>{`function calculateInvoiceTotal() {}

function canCancelOrder() {}

function normalizeEmail() {}`}</code>
                        </pre>
                    </article>

                    <article>
                        <FiTarget />

                        <h3>Booleans</h3>

                        <p>
                            Boolean names should read naturally as conditions.
                        </p>

                        <pre>
                            <code>{`isActive
hasPermission
canEdit
shouldRetry`}</code>
                        </pre>
                    </article>

                    <article>
                        <FiCode />

                        <h3>Domain concepts</h3>

                        <p>
                            Use the same terminology for the same business idea
                            across the codebase.
                        </p>

                        <pre>
                            <code>{`order
invoice
payment
customer
subscription`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Functions</span>

                    <h2>
                        Functions should communicate one understandable
                        responsibility
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Mixed responsibilities
                        </span>

                        <pre>
                            <code>{`async function createUser(user) {
  validateUser(user);

  const saved =
    await database.users.create(user);

  await sendWelcomeEmail(saved);

  analytics.track(
    "user_created",
  );

  return saved;
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Focused orchestration
                        </span>

                        <pre>
                            <code>{`async function registerUser(user) {
  validateUser(user);

  const savedUser =
    await userRepository.create(user);

  await notifyUserCreated(savedUser);

  trackUserCreated(savedUser);

  return savedUser;
}`}</code>
                        </pre>

                        <p>
                            The workflow remains visible while lower-level
                            implementation details are separated.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Duplication</span>

                    <h2>
                        Remove duplicated knowledge, not every repeated shape
                    </h2>

                    <p>
                        Duplication becomes dangerous when the same rule must
                        remain synchronized in several places. Similar syntax
                        can still represent different concepts and should not
                        always be abstracted.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Repeated business rule
                        </span>

                        <pre>
                            <code>{`function invoiceTotal(price) {
  return price + price * 0.18;
}

function checkoutTotal(price) {
  return price + price * 0.18;
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Single source of knowledge
                        </span>

                        <pre>
                            <code>{`const TAX_RATE = 0.18;

function calculateTotal(price) {
  return price + price * TAX_RATE;
}`}</code>
                        </pre>
                    </article>
                </div>

                <div className="noteBox">
                    <FiAlertTriangle />

                    <div>
                        <h3>
                            Duplication can be cheaper than the wrong
                            abstraction.
                        </h3>

                        <p>
                            If two code paths only look similar today but
                            represent different concepts, forcing them behind
                            one shared abstraction can increase coupling and
                            make future change harder.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Comments</span>

                    <h2>
                        Comments should add context that code cannot express
                        clearly
                    </h2>
                </div>

                <div className="commentGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Useful comments</h3>

                        <ul>
                            <li>Explain why a surprising decision exists.</li>
                            <li>
                                Describe an external limitation or workaround.
                            </li>
                            <li>Record important non-obvious constraints.</li>
                            <li>
                                Clarify reasoning behind an algorithm where
                                useful.
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Weak comments</h3>

                        <ul>
                            <li>Repeat obvious syntax.</li>
                            <li>
                                Explain unclear names that should be renamed.
                            </li>
                            <li>Preserve dead code instead of deleting it.</li>
                            <li>
                                Describe behavior that no longer matches the
                                code.
                            </li>
                        </ul>
                    </article>
                </div>

                <div className="exampleGrid commentExample">
                    <article>
                        <span className="exampleLabel">
                            Comment compensates for code
                        </span>

                        <pre>
                            <code>{`// Check if user can edit.
if (
  u.a &&
  u.r === "admin" &&
  u.p.includes("edit")
) {
  return true;
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Code communicates intent
                        </span>

                        <pre>
                            <code>{`if (canEditContent(user)) {
  return true;
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Formatting</span>

                    <h2>Consistent formatting reduces visual noise</h2>

                    <p>
                        Formatting should help readers identify blocks, related
                        concepts, and control flow without debating style on
                        every file.
                    </p>
                </div>

                <div className="formatGrid">
                    <article>
                        <strong>Keep related code close</strong>

                        <p>
                            Functions and declarations that belong to the same
                            concept should be easy to find.
                        </p>
                    </article>

                    <article>
                        <strong>Use whitespace deliberately</strong>

                        <p>
                            Separate meaningful sections without adding random
                            visual gaps.
                        </p>
                    </article>

                    <article>
                        <strong>Keep indentation consistent</strong>

                        <p>
                            Structure should be visible immediately from
                            formatting.
                        </p>
                    </article>

                    <article>
                        <strong>Automate where practical</strong>

                        <p>
                            Formatters can reduce arguments about mechanical
                            style and keep files consistent.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Error Handling</span>

                    <h2>Failures should remain visible and understandable</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Failure hidden</span>

                        <pre>
                            <code>{`try {
  await saveOrder(order);
} catch (error) {
  return null;
}`}</code>
                        </pre>

                        <p>
                            Callers cannot distinguish a missing result from a
                            persistence failure.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Failure preserved</span>

                        <pre>
                            <code>{`try {
  return await saveOrder(order);
} catch (error) {
  throw new Error(
    "Order could not be saved",
    {
      cause: error,
    },
  );
}`}</code>
                        </pre>

                        <p>
                            The operation adds useful context while keeping the
                            underlying failure available.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Tests</span>

                    <h2>
                        Clean code should make important behavior reasonably
                        testable
                    </h2>

                    <p>
                        Difficulty testing a small piece of behavior often
                        reveals hidden dependencies, mixed responsibilities, or
                        uncontrolled state.
                    </p>
                </div>

                <div className="testGrid">
                    <article>
                        <FiShield />

                        <h3>Focused inputs</h3>

                        <p>
                            Functions with explicit inputs are easier to
                            exercise directly.
                        </p>
                    </article>

                    <article>
                        <FiShield />

                        <h3>Predictable outputs</h3>

                        <p>Consistent return contracts simplify assertions.</p>
                    </article>

                    <article>
                        <FiShield />

                        <h3>Controlled dependencies</h3>

                        <p>
                            External services can be isolated when a test does
                            not need the real integration.
                        </p>
                    </article>

                    <article>
                        <FiShield />

                        <h3>Observable behavior</h3>

                        <p>
                            Tests can verify outcomes instead of private
                            implementation details.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Code Smells</span>

                    <h2>Smells are prompts to investigate maintainability</h2>
                </div>

                <div className="smellGrid">
                    <article>
                        <strong>Long functions</strong>
                        <p>
                            May hide several responsibilities or abstraction
                            levels.
                        </p>
                    </article>

                    <article>
                        <strong>Large modules</strong>
                        <p>May accumulate unrelated reasons to change.</p>
                    </article>

                    <article>
                        <strong>Boolean flags</strong>
                        <p>
                            Can reveal multiple behaviors hidden inside one
                            function.
                        </p>
                    </article>

                    <article>
                        <strong>Shotgun surgery</strong>
                        <p>
                            One rule change repeatedly requires edits across
                            many files.
                        </p>
                    </article>

                    <article>
                        <strong>Dead code</strong>
                        <p>
                            Obsolete implementation increases the amount of code
                            to reason about.
                        </p>
                    </article>

                    <article>
                        <strong>Speculative generality</strong>
                        <p>
                            Unused abstractions introduce complexity without
                            current value.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Boy Scout Rule</span>

                    <h2>Leave the code a little better than you found it</h2>

                    <p>
                        Small improvements made during normal work can prevent
                        maintainability problems from accumulating into large
                        cleanup projects.
                    </p>
                </div>

                <div className="boyScoutGrid">
                    <article>
                        <FiCheck />

                        <p>
                            Rename an unclear variable near the code being
                            changed.
                        </p>
                    </article>

                    <article>
                        <FiCheck />

                        <p>
                            Remove a dead branch discovered during feature work.
                        </p>
                    </article>

                    <article>
                        <FiCheck />

                        <p>
                            Extract a repeated rule when its shared meaning is
                            clear.
                        </p>
                    </article>

                    <article>
                        <FiCheck />

                        <p>
                            Update nearby documentation that became inaccurate.
                        </p>
                    </article>

                    <article>
                        <FiCheck />

                        <p>
                            Add a focused regression test for a defect being
                            fixed.
                        </p>
                    </article>

                    <article>
                        <FiCheck />

                        <p>
                            Simplify a confusing conditional directly related to
                            the change.
                        </p>
                    </article>
                </div>

                <div className="noteBox">
                    <FiAlertTriangle />

                    <div>
                        <h3>Keep cleanup proportional to the task.</h3>

                        <p>
                            Turning every small feature into a large unrelated
                            refactor makes review and delivery harder. Improve
                            nearby code when the benefit is clear and the change
                            remains understandable.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Clean vs Clever</span>

                    <h2>
                        Clever code optimizes for writing; clean code optimizes
                        for understanding
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Compressed and clever
                        </span>

                        <pre>
                            <code>{`const r = a =>
  a.reduce(
    (x, y) => x + y.p * y.q,
    0,
  );`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Explicit and readable
                        </span>

                        <pre>
                            <code>{`function calculateCartTotal(items) {
  return items.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0,
  );
}`}</code>
                        </pre>

                        <p>
                            The second version spends a few more characters to
                            communicate significantly more intent.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Pragmatism</span>

                    <h2>Clean code is context-sensitive</h2>
                </div>

                <div className="pragmaticGrid">
                    <article>
                        <strong>Small utility</strong>

                        <p>
                            May need direct code rather than several
                            architectural layers.
                        </p>
                    </article>

                    <article>
                        <strong>Business-critical rule</strong>

                        <p>
                            May justify stronger boundaries, validation, tests,
                            and documentation.
                        </p>
                    </article>

                    <article>
                        <strong>Prototype</strong>

                        <p>
                            Can prioritize learning while still avoiding
                            unnecessary confusion.
                        </p>
                    </article>

                    <article>
                        <strong>Long-lived production system</strong>

                        <p>
                            Usually benefits more from explicit boundaries and
                            maintainability discipline.
                        </p>
                    </article>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            Do not use "clean code" as a reason for endless
                            rewriting.
                        </h3>

                        <p>
                            Working software does not need constant
                            restructuring. Refactor when the current structure
                            creates real friction, risk, or unnecessary cost.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask when reviewing code quality</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>Can I understand what this code does?</strong>

                        <p>
                            Important behavior should not require unnecessary
                            decoding.
                        </p>
                    </article>

                    <article>
                        <strong>Can I understand why it exists?</strong>

                        <p>Names and boundaries should communicate intent.</p>
                    </article>

                    <article>
                        <strong>
                            Does each function have a focused responsibility?
                        </strong>

                        <p>Avoid mixing unrelated work inside one operation.</p>
                    </article>

                    <article>
                        <strong>Are side effects visible?</strong>

                        <p>External changes should not surprise callers.</p>
                    </article>

                    <article>
                        <strong>Is duplicated knowledge controlled?</strong>

                        <p>
                            Shared rules should not drift across multiple
                            locations.
                        </p>
                    </article>

                    <article>
                        <strong>Are comments adding useful context?</strong>

                        <p>
                            Comments should not compensate for names and
                            structure that can be improved.
                        </p>
                    </article>

                    <article>
                        <strong>Are failures handled predictably?</strong>

                        <p>
                            Avoid swallowed errors and ambiguous result
                            contracts.
                        </p>
                    </article>

                    <article>
                        <strong>Can important behavior be tested?</strong>

                        <p>
                            Excessive test setup can reveal structural problems.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is the code more abstract than the requirement?
                        </strong>

                        <p>
                            Remove speculative complexity that does not provide
                            current value.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would a future developer know where to change this?
                        </strong>

                        <p>
                            Clear ownership is one of the strongest signs of
                            maintainability.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Clean code makes intent and change easier to understand.
                </h2>

                <p>
                    Use clear names, focused functions, deliberate boundaries,
                    predictable failures, useful tests, and the simplest
                    abstractions that solve real problems. Improve code
                    incrementally, avoid cleverness that hides meaning, and
                    judge cleanliness by how effectively the code supports
                    understanding and future change.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default CleanCode;
