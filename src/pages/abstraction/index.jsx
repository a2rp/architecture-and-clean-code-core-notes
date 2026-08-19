import {
    FiAlertTriangle,
    FiBox,
    FiCheckCircle,
    FiEye,
    FiLayers,
    FiShield,
} from "react-icons/fi";

import * as Styled from "./styled";

const Abstraction = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiLayers />
                    <span>Architecture Principle</span>
                </div>

                <h1>Abstraction</h1>

                <p>
                    Abstraction hides unnecessary implementation detail behind a
                    simpler and more meaningful interface. A useful abstraction
                    helps developers focus on what something does without
                    requiring them to understand every internal step.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiEye />

                    <h2>Expose what matters</h2>

                    <p>
                        Callers should see the operations they need instead of
                        internal implementation details that do not affect their
                        responsibility.
                    </p>
                </article>

                <article>
                    <FiShield />

                    <h2>Protect implementation details</h2>

                    <p>
                        Internal behavior can evolve more safely when external
                        code depends on a stable contract instead of private
                        details.
                    </p>
                </article>

                <article>
                    <FiBox />

                    <h2>Reduce mental overhead</h2>

                    <p>
                        Good abstractions let developers reason about a system
                        at the right level instead of carrying every low-level
                        detail at once.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Idea</span>

                    <h2>Hide complexity behind a clear responsibility</h2>

                    <p>
                        Abstraction is useful when several implementation
                        details belong together and callers only need a smaller
                        meaningful interface.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Implementation exposed
                        </span>

                        <pre>
                            <code>{`async function checkout(order) {
  const response = await fetch(
    "https://payment.example.com/charge",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer token",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: order.total,
        currency: "INR",
      }),
    },
  );

  return response.json();
}`}</code>
                        </pre>

                        <p>
                            Checkout knows transport details, authentication
                            headers, endpoint structure, and payment-provider
                            behavior.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Useful abstraction</span>

                        <pre>
                            <code>{`async function checkout(order) {
  return paymentService.charge({
    amount: order.total,
    currency: "INR",
  });
}`}</code>
                        </pre>

                        <p>
                            Checkout depends on a meaningful payment operation
                            while provider details remain inside the service.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Levels of Abstraction</span>

                    <h2>
                        Different parts of a system operate at different levels
                    </h2>
                </div>

                <div className="levelGrid">
                    <article>
                        <span>High</span>

                        <h3>Business intent</h3>

                        <pre>
                            <code>{`placeOrder(order);`}</code>
                        </pre>

                        <p>
                            Expresses the operation in terms of the
                            application&apos;s purpose.
                        </p>
                    </article>

                    <article>
                        <span>Middle</span>

                        <h3>Application behavior</h3>

                        <pre>
                            <code>{`validateOrder(order);
reserveInventory(order);
chargePayment(order);
saveOrder(order);`}</code>
                        </pre>

                        <p>
                            Coordinates meaningful steps required to complete
                            the use case.
                        </p>
                    </article>

                    <article>
                        <span>Low</span>

                        <h3>Implementation detail</h3>

                        <pre>
                            <code>{`fetch(url, options);
database.insert(record);
JSON.stringify(data);`}</code>
                        </pre>

                        <p>
                            Handles technical mechanisms used to perform
                            individual operations.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Good Abstraction</span>

                    <h2>A useful abstraction should communicate intent</h2>
                </div>

                <div className="qualityGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Clear purpose</h3>

                        <p>
                            The abstraction represents one understandable
                            responsibility or concept.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Small public surface</h3>

                        <p>
                            Consumers only see the operations needed to use the
                            abstraction.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Implementation freedom</h3>

                        <p>
                            Internal code can evolve without forcing callers to
                            understand every detail.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Meaningful reuse</h3>

                        <p>
                            The abstraction represents shared behavior rather
                            than accidental code similarity.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Leaky Abstraction</span>

                    <h2>
                        Implementation details should not constantly escape the
                        boundary
                    </h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            A leaky abstraction forces callers to know internal
                            details.
                        </h3>

                        <p>
                            If consumers repeatedly need database-specific
                            values, transport options, provider-specific error
                            codes, or internal state to use an abstraction
                            correctly, its boundary may not be hiding the right
                            details.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid leakExample">
                    <article>
                        <span className="exampleLabel">Leaky interface</span>

                        <pre>
                            <code>{`userRepository.find({
  table: "users",
  index: "email_idx",
  rawQuery: "email = ?",
  params: [email],
});`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Domain-focused interface
                        </span>

                        <pre>
                            <code>{`userRepository.findByEmail(email);`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Over-Abstraction</span>

                    <h2>
                        More indirection does not automatically improve
                        architecture
                    </h2>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Useful abstraction</h3>

                        <ul>
                            <li>Hides meaningful complexity.</li>
                            <li>Represents a real shared concept.</li>
                            <li>Reduces repeated implementation detail.</li>
                            <li>Improves testability or replaceability.</li>
                            <li>Makes calling code easier to understand.</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Over-abstraction</h3>

                        <ul>
                            <li>
                                Wraps one trivial function with several layers.
                            </li>
                            <li>
                                Creates interfaces for hypothetical
                                implementations.
                            </li>
                            <li>
                                Uses generic names that hide domain meaning.
                            </li>
                            <li>Adds forwarding classes without behavior.</li>
                            <li>Makes simple code harder to trace.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">React Example</span>

                    <h2>Reusable hooks can abstract repeated behavior</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Repeated technical detail
                        </span>

                        <pre>
                            <code>{`const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);
};`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Behavior abstraction
                        </span>

                        <pre>
                            <code>{`const UsersPage = () => {
  const {
    data: users,
    loading,
  } = useUsers();
};`}</code>
                        </pre>

                        <p>
                            The page expresses the data it needs while the
                            repeated loading behavior stays inside a focused
                            hook.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Decision Guide</span>

                    <h2>When should you introduce an abstraction?</h2>
                </div>

                <div className="decisionGrid">
                    <article>
                        <strong>Complexity is repeated</strong>

                        <p>
                            Several consumers repeatedly perform the same
                            meaningful operation.
                        </p>
                    </article>

                    <article>
                        <strong>A dependency needs isolation</strong>

                        <p>
                            External services or infrastructure details should
                            not spread throughout business logic.
                        </p>
                    </article>

                    <article>
                        <strong>The concept has a clear name</strong>

                        <p>
                            A good name often indicates that a meaningful
                            abstraction has emerged.
                        </p>
                    </article>

                    <article>
                        <strong>The boundary reduces knowledge</strong>

                        <p>
                            Callers can use the behavior without understanding
                            unnecessary implementation details.
                        </p>
                    </article>

                    <article>
                        <strong>Different implementations are real</strong>

                        <p>
                            Multiple current implementations can justify a
                            shared contract.
                        </p>
                    </article>

                    <article>
                        <strong>The code becomes easier to reason about</strong>

                        <p>
                            The abstraction should reduce cognitive load rather
                            than simply move code elsewhere.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about an abstraction</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            What implementation detail is being hidden?
                        </strong>

                        <p>
                            A useful abstraction should have a clear reason for
                            existing.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the public interface communicate intent?
                        </strong>

                        <p>
                            Callers should understand the operation without
                            decoding internal mechanics.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are implementation details leaking through?
                        </strong>

                        <p>
                            Repeated low-level configuration at call sites can
                            indicate a weak boundary.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the abstraction represent a real concept?
                        </strong>

                        <p>
                            Avoid creating generic wrappers around code that
                            only happens to look similar.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would direct code be easier to understand?
                        </strong>

                        <p>
                            A simple implementation may be better when there is
                            little complexity to hide.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can internals change without affecting callers?
                        </strong>

                        <p>
                            A strong abstraction limits how much implementation
                            knowledge escapes its boundary.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Hide the details that callers should not need to understand.
                </h2>

                <p>
                    Good abstractions reduce cognitive load and protect
                    implementation details behind meaningful interfaces. The
                    goal is not to maximize indirection, but to expose the right
                    level of information for each responsibility.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Abstraction;
