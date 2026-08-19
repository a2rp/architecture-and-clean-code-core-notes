import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCode,
    FiCopy,
    FiEye,
    FiGitBranch,
    FiRefreshCw,
    FiSearch,
    FiTrash2,
} from "react-icons/fi";

import * as Styled from "./styled";

const smells = [
    {
        title: "Long Function",
        text: "A function contains several responsibilities, abstraction levels, or decision paths that are difficult to understand together.",
        signal: "Difficult to explain with one focused name.",
    },
    {
        title: "Large Module or Class",
        text: "One module accumulates behavior for several unrelated concerns and becomes a common destination for new code.",
        signal: "Changes happen for many unrelated reasons.",
    },
    {
        title: "Duplicate Knowledge",
        text: "The same business rule, calculation, validation, or decision is maintained independently in several places.",
        signal: "One rule change requires several coordinated edits.",
    },
    {
        title: "Feature Envy",
        text: "A function or module repeatedly accesses another module's data and behavior more than its own.",
        signal: "Behavior may belong closer to the data it uses.",
    },
    {
        title: "Primitive Obsession",
        text: "Important domain concepts are represented only with generic strings, numbers, arrays, or booleans.",
        signal: "The same validation and interpretation logic appears repeatedly.",
    },
    {
        title: "Boolean Flags",
        text: "A boolean parameter changes a function into two substantially different modes of operation.",
        signal: "The function may contain multiple responsibilities.",
    },
    {
        title: "Shotgun Surgery",
        text: "One small requirement regularly requires changes across many unrelated files or modules.",
        signal: "Knowledge or responsibility may be scattered.",
    },
    {
        title: "Dead Code",
        text: "Unused functions, old branches, abandoned variables, or commented-out implementations remain in the codebase.",
        signal: "Developers cannot tell whether obsolete code is still important.",
    },
    {
        title: "Speculative Generality",
        text: "Abstractions and extension points exist for future requirements that never became real.",
        signal: "Infrastructure exists without an active consumer.",
    },
    {
        title: "Comments as Deodorant",
        text: "Comments repeatedly explain confusing code instead of improving the code's naming, structure, or responsibility boundaries.",
        signal: "The explanation is compensating for unclear implementation.",
    },
];

const CodeSmells = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiSearch />
                    <span>Code Quality</span>
                </div>

                <h1>Code Smells</h1>

                <p>
                    A code smell is a warning sign that code may contain a
                    deeper design or maintainability problem. A smell does not
                    automatically mean the code is wrong, but it can indicate an
                    area worth understanding before future changes make it more
                    expensive.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiEye />

                    <h2>Smells are signals</h2>

                    <p>
                        They point toward possible design problems but should be
                        evaluated in context rather than treated as automatic
                        violations.
                    </p>
                </article>

                <article>
                    <FiAlertTriangle />

                    <h2>Symptoms are not always causes</h2>

                    <p>
                        A long function or duplicate block may be visible while
                        the deeper issue is unclear responsibility, weak
                        boundaries, or changing requirements.
                    </p>
                </article>

                <article>
                    <FiRefreshCw />

                    <h2>Refactor deliberately</h2>

                    <p>
                        Understand why a smell exists before applying a
                        mechanical transformation that could create a different
                        problem.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Common Smells</span>

                    <h2>Patterns worth investigating</h2>

                    <p>
                        These are common indicators that responsibilities,
                        abstractions, or dependencies may no longer match the
                        needs of the code.
                    </p>
                </div>

                <div className="smellGrid">
                    {smells.map((smell) => (
                        <article key={smell.title}>
                            <FiAlertTriangle />

                            <h3>{smell.title}</h3>

                            <p>{smell.text}</p>

                            <span>{smell.signal}</span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Long Functions</span>

                    <h2>
                        Length becomes a problem when responsibilities become
                        unclear
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Several concerns together
                        </span>

                        <pre>
                            <code>{`async function checkout(cart, user) {
  if (!cart.items.length) {
    throw new Error("Empty cart");
  }

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  const tax = subtotal * 0.18;

  const response = await fetch("/api/orders", {
    method: "POST",
    body: JSON.stringify({
      cart,
      user,
      subtotal,
      tax,
    }),
  });

  const order = await response.json();

  await sendConfirmationEmail(order);

  analytics.track("checkout_completed");

  return order;
}`}</code>
                        </pre>

                        <p>
                            Validation, calculation, transport, notifications,
                            and analytics all compete inside the same function.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Focused orchestration
                        </span>

                        <pre>
                            <code>{`async function checkout(cart, user) {
  validateCart(cart);

  const pricing = calculatePricing(cart);

  const order = await orderService.create({
    cart,
    user,
    pricing,
  });

  await notifyOrderCreated(order);

  trackCheckout(order);

  return order;
}`}</code>
                        </pre>

                        <p>
                            The higher-level workflow remains visible while
                            details live in focused operations.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Large Modules</span>

                    <h2>
                        Watch for modules that become responsible for everything
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Low cohesion</span>

                        <pre>
                            <code>{`class ApplicationManager {
  createUser() {}
  resetPassword() {}
  calculateTax() {}
  sendInvoice() {}
  resizeImage() {}
  exportReport() {}
  clearCache() {}
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Focused responsibilities
                        </span>

                        <pre>
                            <code>{`UserService
PaymentService
InvoiceService
ImageService
ReportService`}</code>
                        </pre>

                        <p>
                            Separate modules can represent clearer concepts when
                            the responsibilities genuinely evolve independently.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Duplicate Code</span>

                    <h2>
                        Look for duplicated knowledge, not only repeated syntax
                    </h2>
                </div>

                <div className="duplicateBox">
                    <FiCopy />

                    <div>
                        <h3>
                            Repeated rules are more dangerous than repeated
                            shape.
                        </h3>

                        <p>
                            Two blocks can look similar while representing
                            different concepts. A stronger smell appears when
                            the same business rule must remain synchronized
                            across several locations.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid duplicateExample">
                    <article>
                        <span className="exampleLabel">Repeated rule</span>

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
                        <span className="exampleLabel">Shared knowledge</span>

                        <pre>
                            <code>{`const TAX_RATE = 0.18;

function calculateTotal(price) {
  return price + price * TAX_RATE;
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Feature Envy</span>

                    <h2>
                        Behavior often belongs near the data it understands
                        deeply
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Outside logic knows too much
                        </span>

                        <pre>
                            <code>{`function calculateOrderTotal(order) {
  return order.items.reduce(
    (total, item) =>
      total +
      item.price *
        item.quantity *
        (1 - item.discount),
    0,
  );
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Responsibility closer to concept
                        </span>

                        <pre>
                            <code>{`class Order {
  calculateTotal() {
    return this.items.reduce(
      (total, item) =>
        total + item.totalPrice(),
      0,
    );
  }
}`}</code>
                        </pre>

                        <p>
                            If the order owns pricing behavior, keeping that
                            knowledge close to the order can improve cohesion.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Primitive Obsession</span>

                    <h2>
                        Important concepts can deserve meaningful types or
                        objects
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Primitive everywhere
                        </span>

                        <pre>
                            <code>{`function pay(
  amount,
  currency,
  cardNumber,
  expiryMonth,
  expiryYear,
) {}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Concepts grouped</span>

                        <pre>
                            <code>{`function pay(
  money,
  paymentMethod,
) {}

const money = {
  amount: 1200,
  currency: "INR",
};

const paymentMethod = {
  cardNumber,
  expiryMonth,
  expiryYear,
};`}</code>
                        </pre>
                    </article>
                </div>

                <div className="noteBox">
                    <FiCheckCircle />

                    <div>
                        <h3>Do not wrap every primitive automatically.</h3>

                        <p>
                            Introduce a richer concept when values have shared
                            rules, behavior, validation, or meaning that appears
                            repeatedly in the domain.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Boolean Flags</span>

                    <h2>
                        A mode flag can hide multiple functions inside one
                        function
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Flag changes responsibility
                        </span>

                        <pre>
                            <code>{`function saveUser(user, sendEmail) {
  save(user);

  if (sendEmail) {
    sendWelcomeEmail(user);
  }
}

saveUser(user, true);`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Explicit operations
                        </span>

                        <pre>
                            <code>{`function saveUser(user) {
  return save(user);
}

function registerUser(user) {
  const savedUser = saveUser(user);

  sendWelcomeEmail(savedUser);

  return savedUser;
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Shotgun Surgery</span>

                    <h2>
                        One requirement should not require unrelated edits
                        everywhere
                    </h2>
                </div>

                <div className="shotgunBox">
                    <div>
                        <span>Pricing change</span>
                    </div>

                    <FiGitBranch />

                    <div className="fileList">
                        <span>checkout.js</span>
                        <span>invoice.js</span>
                        <span>report.js</span>
                        <span>email.js</span>
                        <span>admin.js</span>
                    </div>
                </div>

                <p className="sectionNote">
                    When one rule change repeatedly touches many locations, the
                    knowledge may need a clearer source of truth or stronger
                    boundary.
                </p>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Dead Code</span>

                    <h2>
                        Version control is usually a better archive than source
                        comments
                    </h2>
                </div>

                <div className="deadCodeBox">
                    <FiTrash2 />

                    <div>
                        <h3>
                            Remove code that no longer participates in the
                            application.
                        </h3>

                        <p>
                            Dead branches, unused helpers, obsolete feature
                            code, and large commented-out blocks increase the
                            amount of code developers must consider even though
                            they provide no current behavior.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid deadExample">
                    <article>
                        <span className="exampleLabel">Dead code retained</span>

                        <pre>
                            <code>{`// Old implementation.
// Keep in case we need it later.
//
// function calculateOldPrice() {
//   ...
// }`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Current code only</span>

                        <pre>
                            <code>{`function calculatePrice(order) {
  return pricingService.calculate(order);
}`}</code>
                        </pre>

                        <p>
                            Previous implementations can normally be recovered
                            from version history if they are genuinely needed
                            again.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Speculative Generality</span>

                    <h2>Unused flexibility is still complexity</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Built for imaginary variants
                        </span>

                        <pre>
                            <code>{`class StorageFactory {
  create(type) {
    if (type === "mongo") {}
    if (type === "postgres") {}
    if (type === "mysql") {}
    if (type === "memory") {}
    if (type === "file") {}
  }
}`}</code>
                        </pre>

                        <p>
                            If only one storage implementation exists and no
                            requirement for alternatives exists, the abstraction
                            may be speculative.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Current requirement
                        </span>

                        <pre>
                            <code>{`const userRepository =
  createMongoUserRepository();`}</code>
                        </pre>

                        <p>
                            A broader abstraction can be introduced when a real
                            requirement provides evidence for it.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Comments as Deodorant</span>

                    <h2>
                        Do not use comments only to make confusing code
                        tolerable
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Comment explains unclear code
                        </span>

                        <pre>
                            <code>{`// If user is active admin and has edit
// permission then allow editing.
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
                            <code>{`function canEditContent(user) {
  return (
    user.isActive &&
    user.role === "admin" &&
    user.permissions.includes("edit")
  );
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Smell to Refactoring</span>

                    <h2>Possible responses depend on the underlying cause</h2>
                </div>

                <div className="mapping">
                    <article>
                        <strong>Long Function</strong>
                        <FiRefreshCw />
                        <span>Extract focused functions</span>
                    </article>

                    <article>
                        <strong>Large Module</strong>
                        <FiRefreshCw />
                        <span>Separate responsibilities</span>
                    </article>

                    <article>
                        <strong>Duplicate Knowledge</strong>
                        <FiRefreshCw />
                        <span>Introduce a shared source of truth</span>
                    </article>

                    <article>
                        <strong>Feature Envy</strong>
                        <FiRefreshCw />
                        <span>Move behavior closer to its data</span>
                    </article>

                    <article>
                        <strong>Primitive Obsession</strong>
                        <FiRefreshCw />
                        <span>Introduce a meaningful domain concept</span>
                    </article>

                    <article>
                        <strong>Boolean Flag</strong>
                        <FiRefreshCw />
                        <span>Split distinct operations</span>
                    </article>

                    <article>
                        <strong>Shotgun Surgery</strong>
                        <FiRefreshCw />
                        <span>Centralize scattered knowledge</span>
                    </article>

                    <article>
                        <strong>Dead Code</strong>
                        <FiRefreshCw />
                        <span>Delete obsolete implementation</span>
                    </article>

                    <article>
                        <strong>Speculative Generality</strong>
                        <FiRefreshCw />
                        <span>Remove unused abstractions</span>
                    </article>

                    <article>
                        <strong>Comment Deodorant</strong>
                        <FiRefreshCw />
                        <span>Improve naming and structure</span>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Important</span>

                    <h2>Do not refactor based on smell names alone</h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            Context determines whether a smell is actually
                            harmful.
                        </h3>

                        <p>
                            A long function can sometimes be easier to
                            understand than many tiny functions. Duplication can
                            sometimes be safer than premature abstraction. A
                            large module can be cohesive if all of its behavior
                            represents one concept. Investigate before changing.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask when investigating a smell</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            What maintenance problem does this create?
                        </strong>

                        <p>
                            Identify the real cost instead of refactoring only
                            because a pattern has a smell name.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does this code change for multiple reasons?
                        </strong>

                        <p>
                            Mixed change pressure can reveal weak responsibility
                            boundaries.
                        </p>
                    </article>

                    <article>
                        <strong>Is knowledge duplicated or only syntax?</strong>

                        <p>
                            Similar-looking code does not always represent the
                            same concept.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is another module better suited to this behavior?
                        </strong>

                        <p>
                            Keep responsibilities near the data and knowledge
                            they require.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is this abstraction used by real requirements?
                        </strong>

                        <p>
                            Remove speculative complexity that provides no
                            current value.
                        </p>
                    </article>

                    <article>
                        <strong>Can obsolete code simply be deleted?</strong>

                        <p>
                            Source control already preserves previous
                            implementations.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would clearer naming remove the need for comments?
                        </strong>

                        <p>
                            Comments should add context rather than compensate
                            for unclear code.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Will the refactoring actually make change easier?
                        </strong>

                        <p>
                            The goal is maintainability, not maximizing
                            abstraction.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Code smells are prompts to investigate, not automatic
                    failures.
                </h2>

                <p>
                    Use smells to identify areas where responsibilities,
                    dependencies, abstractions, or naming may have become
                    difficult to maintain. Understand the underlying cause
                    first, then apply the smallest useful refactoring that
                    improves the code.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default CodeSmells;
