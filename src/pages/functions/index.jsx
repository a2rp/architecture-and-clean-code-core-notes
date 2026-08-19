import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCornerDownRight,
    FiGitBranch,
    FiRefreshCw,
    FiZap,
} from "react-icons/fi";

import * as Styled from "./styled";

const Functions = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiZap />
                    <span>Code Quality</span>
                </div>

                <h1>Functions</h1>

                <p>
                    Functions are one of the primary units of behavior in
                    software. Well-designed functions communicate intent, keep
                    responsibilities focused, make data flow easier to follow,
                    and reduce the amount of context a developer must hold while
                    reading code.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiCheckCircle />

                    <h2>Keep one clear responsibility</h2>

                    <p>
                        A function should have a focused purpose that can be
                        understood without reading several unrelated operations.
                    </p>
                </article>

                <article>
                    <FiCornerDownRight />

                    <h2>Make data flow visible</h2>

                    <p>
                        Parameters and return values should make it clear what
                        information enters a function and what result leaves it.
                    </p>
                </article>

                <article>
                    <FiRefreshCw />

                    <h2>Control side effects</h2>

                    <p>
                        State changes, network requests, storage updates, and
                        other effects should be deliberate and easy to identify.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Focused Functions</span>

                    <h2>Give each function one clear reason to exist</h2>

                    <p>
                        Function size alone does not determine quality. A better
                        question is whether all operations inside the function
                        contribute to one understandable responsibility.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Too many responsibilities
                        </span>

                        <pre>
                            <code>{`async function createUser(user) {
  validateUser(user);

  const savedUser = await database.users.create(user);

  await sendWelcomeEmail(savedUser.email);

  analytics.track("user_created");

  localStorage.setItem(
    "lastUser",
    JSON.stringify(savedUser),
  );

  return savedUser;
}`}</code>
                        </pre>

                        <p>
                            Validation, persistence, email delivery, analytics,
                            and browser storage are all coordinated inside one
                            function.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Separated responsibilities
                        </span>

                        <pre>
                            <code>{`async function createUser(user) {
  validateUser(user);

  return userRepository.create(user);
}

async function registerUser(user) {
  const createdUser = await createUser(user);

  await sendWelcomeEmail(createdUser.email);

  trackUserCreated(createdUser);

  return createdUser;
}`}</code>
                        </pre>

                        <p>
                            Lower-level behavior remains focused while
                            orchestration is kept explicit at a higher level.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Parameters</span>

                    <h2>Keep function inputs understandable</h2>

                    <p>
                        Parameters are part of a function's public contract. Too
                        many unrelated parameters often indicate that the
                        function is doing too much or that related values belong
                        together.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Difficult call site
                        </span>

                        <pre>
                            <code>{`createUser(
  "Ashish",
  "ash@example.com",
  true,
  "admin",
  false,
  "IN",
  "Asia/Kolkata",
);`}</code>
                        </pre>

                        <p>
                            Several positional values make it difficult to
                            understand what each argument means.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Named input</span>

                        <pre>
                            <code>{`createUser({
  name: "Ashish",
  email: "ash@example.com",
  isActive: true,
  role: "admin",
  country: "IN",
  timezone: "Asia/Kolkata",
});`}</code>
                        </pre>

                        <p>
                            An options object can make related inputs easier to
                            understand when a function genuinely requires
                            several values.
                        </p>
                    </article>
                </div>

                <div className="parameterRules">
                    <article>
                        <strong>Prefer fewer inputs</strong>

                        <p>
                            A small parameter list usually creates a simpler
                            contract.
                        </p>
                    </article>

                    <article>
                        <strong>Group related values</strong>

                        <p>
                            Use meaningful objects when several values represent
                            one concept.
                        </p>
                    </article>

                    <article>
                        <strong>Avoid boolean traps</strong>

                        <p>
                            Calls such as `createUser(data, true, false)` hide
                            intent.
                        </p>
                    </article>

                    <article>
                        <strong>Do not mutate inputs unexpectedly</strong>

                        <p>
                            Callers should not need to inspect a function to
                            discover that their object will be modified.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Return Values</span>

                    <h2>Return predictable results</h2>

                    <p>
                        A function becomes easier to use when its return
                        contract is consistent across successful execution
                        paths.
                    </p>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Inconsistent result</h3>

                        <pre>
                            <code>{`function findUser(id) {
  const user = users.find(
    (item) => item.id === id,
  );

  if (!user) {
    return false;
  }

  return user;
}`}</code>
                        </pre>

                        <p>
                            Consumers now need to understand two unrelated
                            result types.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Consistent contract</h3>

                        <pre>
                            <code>{`function findUser(id) {
  return (
    users.find(
      (user) => user.id === id,
    ) ?? null
  );
}`}</code>
                        </pre>

                        <p>
                            The function returns either the expected entity or
                            an explicit absence value.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Side Effects</span>

                    <h2>Make external changes deliberate</h2>

                    <p>
                        A side effect occurs when a function changes something
                        outside its local scope or interacts with an external
                        system.
                    </p>
                </div>

                <div className="effectGrid">
                    <article>
                        <span>Database writes</span>
                    </article>

                    <article>
                        <span>Network requests</span>
                    </article>

                    <article>
                        <span>File operations</span>
                    </article>

                    <article>
                        <span>DOM changes</span>
                    </article>

                    <article>
                        <span>Global state updates</span>
                    </article>

                    <article>
                        <span>Notifications</span>
                    </article>
                </div>

                <div className="exampleGrid effectExample">
                    <article>
                        <span className="exampleLabel">Hidden side effect</span>

                        <pre>
                            <code>{`function calculateTotal(cart) {
  const total = cart.items.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  localStorage.setItem("total", total);

  return total;
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Separated behavior</span>

                        <pre>
                            <code>{`function calculateTotal(cart) {
  return cart.items.reduce(
    (sum, item) => sum + item.price,
    0,
  );
}

const total = calculateTotal(cart);

saveCartTotal(total);`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Command Query Separation
                    </span>

                    <h2>Ask for information or change state</h2>

                    <p>
                        Command-query separation is a useful design guideline
                        where an operation either returns information or
                        performs a state-changing action. Keeping those
                        intentions distinct can make behavior easier to reason
                        about.
                    </p>
                </div>

                <div className="commandGrid">
                    <article>
                        <span className="typeLabel">Query</span>

                        <h3>Read information</h3>

                        <pre>
                            <code>{`function getCartTotal(cart) {
  return cart.items.reduce(
    (total, item) => total + item.price,
    0,
  );
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="typeLabel">Command</span>

                        <h3>Change state</h3>

                        <pre>
                            <code>{`function clearCart(cart) {
  cart.items = [];
}`}</code>
                        </pre>
                    </article>
                </div>

                <div className="noteBox">
                    <FiCheckCircle />

                    <div>
                        <h3>Treat it as a guideline, not a mechanical rule.</h3>

                        <p>
                            Some operations naturally perform work and return a
                            useful result. The goal is to avoid surprising
                            callers with hidden state changes when they appear
                            to be simply requesting information.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Guard Clauses</span>

                    <h2>Handle invalid or exceptional paths early</h2>

                    <p>
                        Guard clauses can reduce nesting by dealing with
                        conditions that prevent normal execution before reaching
                        the main behavior.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Nested conditions</span>

                        <pre>
                            <code>{`function processOrder(order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.isPaid) {
        shipOrder(order);
      }
    }
  }
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Guard clauses</span>

                        <pre>
                            <code>{`function processOrder(order) {
  if (!order) {
    return;
  }

  if (order.items.length === 0) {
    return;
  }

  if (!order.isPaid) {
    return;
  }

  shipOrder(order);
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Extraction</span>

                    <h2>Extract meaningful behavior, not arbitrary lines</h2>

                    <p>
                        Function extraction is most useful when the extracted
                        function represents a recognizable concept or
                        responsibility.
                    </p>
                </div>

                <div className="extractionBox">
                    <pre>
                        <code>{`function checkout(cart, customer) {
  validateCart(cart);

  const subtotal = calculateSubtotal(cart);
  const discount = calculateDiscount(customer, subtotal);
  const total = subtotal - discount;

  return createOrder({
    cart,
    customer,
    subtotal,
    discount,
    total,
  });
}`}</code>
                    </pre>

                    <div className="extractionText">
                        <FiGitBranch />

                        <h3>Each extracted function communicates a concept.</h3>

                        <p>
                            The main function now reads as a sequence of
                            meaningful operations instead of exposing every
                            implementation detail at once.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Async Functions</span>

                    <h2>Keep asynchronous control flow visible</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Mixed async chain</span>

                        <pre>
                            <code>{`function loadUser(id) {
  return fetchUser(id)
    .then((user) => {
      return fetchOrders(user.id)
        .then((orders) => {
          return {
            user,
            orders,
          };
        });
    });
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Linear async flow</span>

                        <pre>
                            <code>{`async function loadUser(id) {
  const user = await fetchUser(id);

  const orders = await fetchOrders(
    user.id,
  );

  return {
    user,
    orders,
  };
}`}</code>
                        </pre>
                    </article>
                </div>

                <div className="asyncRules">
                    <article>
                        <strong>Await required operations</strong>

                        <p>
                            Make dependencies between asynchronous steps
                            explicit.
                        </p>
                    </article>

                    <article>
                        <strong>Run independent work together</strong>

                        <p>
                            Use concurrency when operations do not depend on one
                            another.
                        </p>

                        <pre>
                            <code>{`const [user, settings] =
  await Promise.all([
    fetchUser(),
    fetchSettings(),
  ]);`}</code>
                        </pre>
                    </article>

                    <article>
                        <strong>Handle errors at useful boundaries</strong>

                        <p>
                            Do not add `try/catch` everywhere when the function
                            cannot meaningfully recover or add context.
                        </p>
                    </article>

                    <article>
                        <strong>Return the promise contract</strong>

                        <p>
                            Callers should be able to await completion and
                            handle failures predictably.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Function Size</span>

                    <h2>Small is useful when it improves understanding</h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Do not optimize for line count alone.</h3>

                        <p>
                            Splitting every few lines into separate functions
                            can make simple behavior harder to follow. Extract
                            when a block has its own responsibility, useful
                            name, reuse value, or abstraction level.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Common Problems</span>

                    <h2>Warning signs in function design</h2>
                </div>

                <div className="problemGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Too many parameters</h3>

                        <p>
                            The function may have too many responsibilities or
                            an unclear data model.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Boolean mode flags</h3>

                        <p>
                            A flag that completely changes behavior can indicate
                            multiple functions hidden inside one.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Unexpected mutation</h3>

                        <p>
                            Modifying arguments or shared state makes behavior
                            harder to predict.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Mixed abstraction levels</h3>

                        <p>
                            High-level business steps and low-level
                            implementation details compete for attention.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Duplicated condition logic</h3>

                        <p>
                            Repeated business decisions may belong in one
                            focused operation.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Unclear return contract</h3>

                        <p>
                            Different branches return unrelated types or
                            silently return nothing.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask when reviewing functions</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Does the function have a clear responsibility?
                        </strong>

                        <p>
                            Its name and body should describe one understandable
                            purpose.
                        </p>
                    </article>

                    <article>
                        <strong>Are the inputs easy to understand?</strong>

                        <p>
                            Parameters should communicate the data required by
                            the behavior.
                        </p>
                    </article>

                    <article>
                        <strong>Is the return contract predictable?</strong>

                        <p>
                            Callers should know what kind of result to expect.
                        </p>
                    </article>

                    <article>
                        <strong>Are side effects obvious?</strong>

                        <p>External state changes should not be surprising.</p>
                    </article>

                    <article>
                        <strong>
                            Can guard clauses simplify the main path?
                        </strong>

                        <p>
                            Handle invalid conditions early when it improves
                            readability.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would extraction reveal useful concepts?
                        </strong>

                        <p>
                            Extract behavior when a meaningful responsibility
                            can be named.
                        </p>
                    </article>

                    <article>
                        <strong>Is asynchronous flow easy to follow?</strong>

                        <p>
                            Dependencies, concurrency, and failure behavior
                            should be clear.
                        </p>
                    </article>

                    <article>
                        <strong>Is the function easy to test?</strong>

                        <p>
                            Focused inputs, outputs, and controlled dependencies
                            usually make testing simpler.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>Functions should make behavior easier to understand.</h2>

                <p>
                    Keep responsibilities focused, make inputs and outputs
                    clear, expose side effects deliberately, simplify
                    exceptional paths with guard clauses where useful, and
                    extract functions around meaningful concepts rather than
                    arbitrary line counts.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Functions;
