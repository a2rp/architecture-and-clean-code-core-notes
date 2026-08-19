import {
    FiAlertTriangle,
    FiCheckCircle,
    FiGitBranch,
    FiRefreshCw,
    FiRepeat,
    FiScissors,
} from "react-icons/fi";

import * as Styled from "./styled";

const Refactoring = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiRefreshCw />
                    <span>Code Quality</span>
                </div>

                <h1>Refactoring</h1>

                <p>
                    Refactoring means improving the internal structure of
                    existing code without intentionally changing its observable
                    behavior. The goal is to make future development safer,
                    clearer, and easier while preserving what the software
                    already does.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiCheckCircle />

                    <h2>Preserve behavior</h2>

                    <p>
                        Refactoring changes how code is organized, not what the
                        user should experience from the same inputs and
                        workflows.
                    </p>
                </article>

                <article>
                    <FiRepeat />

                    <h2>Prefer incremental changes</h2>

                    <p>
                        Small transformations are easier to review, test,
                        understand, and reverse than one large uncontrolled
                        rewrite.
                    </p>
                </article>

                <article>
                    <FiGitBranch />

                    <h2>Improve future changeability</h2>

                    <p>
                        Good refactoring reduces duplication, unclear
                        responsibilities, unnecessary coupling, and other
                        sources of maintenance friction.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Idea</span>

                    <h2>Change the structure while preserving the behavior</h2>

                    <p>
                        Refactoring is different from adding a feature. Ideally,
                        the same input continues to produce the same expected
                        result while the internal implementation becomes easier
                        to understand or maintain.
                    </p>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Refactoring</h3>

                        <ul>
                            <li>Rename unclear identifiers.</li>
                            <li>Extract focused functions.</li>
                            <li>Move responsibilities to better modules.</li>
                            <li>Simplify conditionals.</li>
                            <li>Reduce meaningful duplication.</li>
                            <li>Improve dependency boundaries.</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Not purely refactoring</h3>

                        <ul>
                            <li>Add a new user-facing feature.</li>
                            <li>Change business behavior.</li>
                            <li>Alter validation requirements.</li>
                            <li>Change API contracts intentionally.</li>
                            <li>Remove supported workflows.</li>
                            <li>
                                Change outputs because requirements changed.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">When to Refactor</span>

                    <h2>Refactor when structure is slowing down safe change</h2>
                </div>

                <div className="signalGrid">
                    <article>
                        <strong>
                            Changes repeatedly touch many unrelated files
                        </strong>

                        <p>
                            Responsibilities or dependencies may be spread
                            across weak boundaries.
                        </p>
                    </article>

                    <article>
                        <strong>The same rule is duplicated</strong>

                        <p>
                            Repeated knowledge can create inconsistent future
                            updates.
                        </p>
                    </article>

                    <article>
                        <strong>Code requires constant explanation</strong>

                        <p>
                            Naming, structure, or responsibility boundaries may
                            need improvement.
                        </p>
                    </article>

                    <article>
                        <strong>Testing simple behavior is difficult</strong>

                        <p>
                            Too many dependencies or mixed responsibilities can
                            make isolated tests expensive.
                        </p>
                    </article>

                    <article>
                        <strong>A new change feels risky</strong>

                        <p>
                            Improving the surrounding structure first can make
                            the real modification safer.
                        </p>
                    </article>

                    <article>
                        <strong>A pattern has become clear</strong>

                        <p>
                            Repeated real usage can justify an abstraction that
                            was previously premature.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Rename</span>

                    <h2>Improving a name can be a meaningful refactor</h2>

                    <p>
                        Renaming is valuable when the current name no longer
                        communicates the real responsibility or domain concept.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Before</span>

                        <pre>
                            <code>{`function process(data) {
  return data.filter(
    (item) => item.s,
  );
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">After</span>

                        <pre>
                            <code>{`function getShippedOrders(orders) {
  return orders.filter(
    (order) => order.isShipped,
  );
}`}</code>
                        </pre>

                        <p>
                            The behavior is essentially the same, but the
                            responsibility is much easier to understand.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Extract Function</span>

                    <h2>Turn a meaningful block into a named operation</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Before extraction</span>

                        <pre>
                            <code>{`function checkout(cart) {
  const subtotal = cart.items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return {
    subtotal,
    tax,
    total,
  };
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">After extraction</span>

                        <pre>
                            <code>{`function calculateSubtotal(items) {
  return items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0,
  );
}

function calculateTax(subtotal) {
  return subtotal * 0.18;
}

function checkout(cart) {
  const subtotal =
    calculateSubtotal(cart.items);

  const tax = calculateTax(subtotal);

  return {
    subtotal,
    tax,
    total: subtotal + tax,
  };
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Move Responsibility</span>

                    <h2>Put behavior where its knowledge belongs</h2>

                    <p>
                        Refactoring often involves moving logic out of a
                        component, service, or utility that has accumulated
                        responsibilities belonging to another concept.
                    </p>
                </div>

                <div className="moveBox">
                    <div className="moveColumn">
                        <span className="moveLabel">Before</span>

                        <pre>
                            <code>{`UserPage
├── render UI
├── validate user
├── call API
├── format payload
└── handle persistence`}</code>
                        </pre>
                    </div>

                    <div className="moveArrow">
                        <FiGitBranch />
                    </div>

                    <div className="moveColumn">
                        <span className="moveLabel">After</span>

                        <pre>
                            <code>{`UserPage
└── coordinate UI

userValidator
└── validate user

userService
└── call API

userMapper
└── format payload`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Conditionals</span>

                    <h2>Simplify branching without hiding important rules</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Complex condition</span>

                        <pre>
                            <code>{`if (
  user &&
  user.active === true &&
  user.role === "admin" &&
  user.permissions.includes("edit")
) {
  showEditor();
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Named decision</span>

                        <pre>
                            <code>{`function canEditContent(user) {
  return (
    user?.active &&
    user.role === "admin" &&
    user.permissions.includes("edit")
  );
}

if (canEditContent(user)) {
  showEditor();
}`}</code>
                        </pre>

                        <p>
                            The condition now communicates the business meaning
                            behind the individual checks.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Dependency Cleanup</span>

                    <h2>Reduce unnecessary knowledge between modules</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Direct infrastructure dependency
                        </span>

                        <pre>
                            <code>{`class OrderService {
  async create(order) {
    const database =
      new MongoClient(connectionString);

    await database
      .db("shop")
      .collection("orders")
      .insertOne(order);
  }
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Focused dependency</span>

                        <pre>
                            <code>{`class OrderService {
  constructor(orderRepository) {
    this.orderRepository =
      orderRepository;
  }

  async create(order) {
    return this.orderRepository.create(
      order,
    );
  }
}`}</code>
                        </pre>

                        <p>
                            Application behavior no longer needs to manage
                            low-level database setup directly.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Incremental Refactoring
                    </span>

                    <h2>
                        Prefer a series of safe changes over one large
                        transformation
                    </h2>
                </div>

                <div className="steps">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Understand current behavior</h3>

                            <p>
                                Identify what the code currently guarantees
                                before changing its structure.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Create a safety net</h3>

                            <p>
                                Use existing tests, add focused tests where
                                useful, or verify important behavior manually.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Make one small structural change</h3>

                            <p>
                                Rename, extract, move, or simplify one
                                responsibility at a time.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Verify behavior</h3>

                            <p>
                                Confirm that the software still behaves as
                                expected before continuing.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>05</span>

                        <div>
                            <h3>Repeat</h3>

                            <p>
                                Continue in small steps until the targeted
                                structural problem is resolved.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Refactoring vs Rewriting
                    </span>

                    <h2>
                        Improving existing code is different from replacing it
                    </h2>
                </div>

                <div className="rewriteGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Refactoring</h3>

                        <ul>
                            <li>Usually incremental</li>
                            <li>Preserves behavior</li>
                            <li>Existing knowledge stays available</li>
                            <li>Risk can be controlled in small steps</li>
                            <li>Can happen continuously</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Rewrite</h3>

                        <ul>
                            <li>Replaces a substantial implementation</li>
                            <li>May recreate solved problems</li>
                            <li>Requires rediscovering edge cases</li>
                            <li>Often has a larger validation surface</li>
                            <li>
                                Can create long parallel-development periods
                            </li>
                        </ul>
                    </article>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            Do not rewrite only because existing code looks old.
                        </h3>

                        <p>
                            A rewrite can be justified when the current
                            architecture cannot reasonably support required
                            change, but it carries different risks from
                            incremental refactoring. Evaluate those tradeoffs
                            deliberately.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Tests</span>

                    <h2>
                        Tests can provide confidence that behavior remains
                        stable
                    </h2>
                </div>

                <div className="testBox">
                    <FiCheckCircle />

                    <div>
                        <h3>
                            Refactoring becomes safer when important behavior is
                            observable.
                        </h3>

                        <p>
                            Tests are especially useful around business rules,
                            transformations, calculations, public contracts, and
                            areas being changed structurally.
                        </p>
                    </div>
                </div>

                <div className="testGrid">
                    <article>
                        <strong>Before refactoring</strong>

                        <p>
                            Confirm that existing tests pass and understand what
                            behavior they protect.
                        </p>
                    </article>

                    <article>
                        <strong>During refactoring</strong>

                        <p>Run focused tests after small structural changes.</p>
                    </article>

                    <article>
                        <strong>After refactoring</strong>

                        <p>
                            Run the broader relevant test suite and verify
                            important user workflows.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Avoid Over-Refactoring</span>

                    <h2>Do not redesign stable code without a useful reason</h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiScissors />
                    </div>

                    <div>
                        <h3>
                            Improvement should solve an actual maintenance
                            problem.
                        </h3>

                        <p>
                            Repeatedly restructuring working code without a
                            clear benefit can create churn, merge conflicts, new
                            defects, and unnecessary review cost.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask before and during refactoring</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>What structural problem am I solving?</strong>

                        <p>
                            Refactoring should have a clear maintainability or
                            design goal.
                        </p>
                    </article>

                    <article>
                        <strong>Do I understand the current behavior?</strong>

                        <p>
                            Preserve behavior intentionally rather than assuming
                            what the code does.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can the change be made in smaller steps?
                        </strong>

                        <p>Incremental transformations usually reduce risk.</p>
                    </article>

                    <article>
                        <strong>Is there a useful safety net?</strong>

                        <p>
                            Tests or deliberate verification help detect
                            unintended behavior changes.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the result become easier to understand?
                        </strong>

                        <p>
                            Refactoring should reduce complexity rather than
                            simply move it.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Am I introducing unnecessary abstraction?
                        </strong>

                        <p>
                            Structural improvement does not require maximizing
                            the number of layers.
                        </p>
                    </article>

                    <article>
                        <strong>Would a rewrite actually be justified?</strong>

                        <p>
                            Do not discard working behavior without
                            understanding the cost and risk.
                        </p>
                    </article>

                    <article>
                        <strong>Did observable behavior remain correct?</strong>

                        <p>
                            Verify the software after completing structural
                            changes.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Improve structure in small steps while protecting behavior.
                </h2>

                <p>
                    Effective refactoring makes future changes easier without
                    introducing unnecessary product changes. Understand existing
                    behavior, make focused structural improvements, verify
                    continuously, and stop when the code is clear enough for the
                    real needs of the system.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Refactoring;
