import {
    FiAlertTriangle,
    FiCheckCircle,
    FiEyeOff,
    FiLock,
    FiShield,
    FiSliders,
} from "react-icons/fi";

import * as Styled from "./styled";

const Encapsulation = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiLock />
                    <span>Architecture Principle</span>
                </div>

                <h1>Encapsulation</h1>

                <p>
                    Encapsulation keeps internal state and implementation
                    details behind controlled boundaries. Consumers interact
                    through clear operations instead of directly manipulating
                    the internal data that a module is responsible for
                    protecting.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiShield />

                    <h2>Protect internal state</h2>

                    <p>
                        A module should control how its important state changes
                        instead of allowing unrelated code to modify it freely.
                    </p>
                </article>

                <article>
                    <FiEyeOff />

                    <h2>Hide unnecessary implementation details</h2>

                    <p>
                        Consumers should not need to understand internal storage
                        or helper logic to use a component correctly.
                    </p>
                </article>

                <article>
                    <FiSliders />

                    <h2>Expose meaningful operations</h2>

                    <p>
                        Public methods should express valid actions while
                        protecting invariants and rejecting invalid state
                        transitions.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Idea</span>

                    <h2>State should change through controlled behavior</h2>

                    <p>
                        Encapsulation is stronger when callers ask an object or
                        module to perform an operation instead of modifying its
                        internal values directly.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            State exposed directly
                        </span>

                        <pre>
                            <code>{`const account = {
  balance: 1000,
};

account.balance = -5000;`}</code>
                        </pre>

                        <p>
                            Any part of the application can create an invalid
                            balance because there is no boundary controlling the
                            update.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Controlled behavior
                        </span>

                        <pre>
                            <code>{`class Account {
  #balance = 1000;

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}`}</code>
                        </pre>

                        <p>
                            The account protects its own state and allows
                            changes only through valid operations.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Invariants</span>

                    <h2>
                        Encapsulation protects rules that must always remain
                        true
                    </h2>

                    <p>
                        An invariant is a condition that should remain valid
                        throughout the lifetime of an object or domain concept.
                    </p>
                </div>

                <div className="invariantGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Examples of invariants</h3>

                        <ul>
                            <li>
                                An account balance cannot violate its business
                                rules.
                            </li>
                            <li>
                                An order cannot be shipped before it is
                                confirmed.
                            </li>
                            <li>
                                A percentage must stay within an allowed range.
                            </li>
                            <li>
                                A user cannot transition to an invalid account
                                state.
                            </li>
                            <li>A quantity cannot become negative.</li>
                        </ul>
                    </article>

                    <article>
                        <FiShield />

                        <h3>Why boundaries matter</h3>

                        <p>
                            If every caller can manipulate state directly, each
                            caller must understand and preserve every rule.
                            Encapsulation keeps those rules close to the state
                            they protect.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Public Interface</span>

                    <h2>Expose behavior instead of internal representation</h2>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Data-focused interface</h3>

                        <pre>
                            <code>{`cart.items.push(product);
cart.total += product.price;
cart.itemCount += 1;`}</code>
                        </pre>

                        <p>
                            The caller must know which fields need to change
                            together and how they stay consistent.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Behavior-focused interface</h3>

                        <pre>
                            <code>{`cart.addItem(product);`}</code>
                        </pre>

                        <p>
                            The cart owns the rules for updating its internal
                            items, totals, and related state.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Module Encapsulation</span>

                    <h2>Encapsulation applies beyond classes</h2>

                    <p>
                        JavaScript modules, services, hooks, closures, and
                        components can all hide internal details while exposing
                        a smaller public API.
                    </p>
                </div>

                <div className="moduleBox">
                    <pre>
                        <code>{`const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count += 1;
    },

    getValue() {
      return count;
    },
  };
};

const counter = createCounter();

counter.increment();
console.log(counter.getValue());`}</code>
                    </pre>

                    <div className="moduleText">
                        <h3>The internal value remains private.</h3>

                        <p>
                            Consumers can increment the counter and read its
                            value, but they cannot directly assign an arbitrary
                            value to the internal `count` variable.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">React Example</span>

                    <h2>
                        Components can protect their own interaction details
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Parent controls internal details
                        </span>

                        <pre>
                            <code>{`<Modal
  visible={visible}
  overlayVisible={visible}
  animationState={animationState}
  closeButtonVisible={visible}
  escapeListener={escapeListener}
/>`}</code>
                        </pre>

                        <p>
                            The parent must understand several internal details
                            required for the modal to work correctly.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Focused public contract
                        </span>

                        <pre>
                            <code>{`<Modal
  open={isModalOpen}
  onClose={handleClose}
/>`}</code>
                        </pre>

                        <p>
                            The modal owns its overlay, keyboard handling,
                            animation, and close-button implementation.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Getters and Setters</span>

                    <h2>Accessors alone do not guarantee good encapsulation</h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            A setter that exposes every internal field can still
                            leak state.
                        </h3>

                        <p>
                            Replacing direct property access with `setBalance()`
                            does not provide much protection if callers can
                            still assign any arbitrary value. Prefer domain
                            operations that express valid behavior such as
                            `deposit()` and `withdraw()`.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid accessorExample">
                    <article>
                        <span className="exampleLabel">Weak encapsulation</span>

                        <pre>
                            <code>{`account.setBalance(-10000);`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Meaningful operation
                        </span>

                        <pre>
                            <code>{`account.withdraw(500);`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Benefits</span>

                    <h2>Strong encapsulation localizes knowledge</h2>
                </div>

                <div className="benefitGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Safer state changes</h3>

                            <p>
                                Rules are enforced where state changes rather
                                than duplicated across callers.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Smaller public APIs</h3>

                            <p>
                                Consumers only need to learn the operations
                                relevant to their responsibility.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Implementation flexibility</h3>

                            <p>
                                Internal representation can change without
                                requiring every caller to change with it.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Fewer invalid states</h3>

                            <p>
                                Controlled operations reduce the number of ways
                                an object can become inconsistent.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about encapsulation</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Can callers directly create invalid state?
                        </strong>

                        <p>
                            Important state should usually change through
                            controlled operations.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the caller know internal representation
                            details?
                        </strong>

                        <p>
                            Public APIs should expose meaningful behavior rather
                            than storage structure.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are important rules duplicated across callers?
                        </strong>

                        <p>
                            Keep invariants close to the state and behavior they
                            protect.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is the public API larger than necessary?
                        </strong>

                        <p>
                            Limit access to operations consumers actually need.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can implementation details change independently?
                        </strong>

                        <p>
                            Callers should not break when private internal
                            details are refactored.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Do operations communicate domain intent?
                        </strong>

                        <p>
                            Prefer meaningful actions such as `approve()`,
                            `cancel()`, or `withdraw()` over arbitrary field
                            manipulation.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Protect state behind operations that preserve its rules.
                </h2>

                <p>
                    Encapsulation reduces the amount of internal knowledge that
                    escapes a module. Good boundaries expose meaningful
                    behavior, protect invariants, and allow implementation
                    details to evolve without forcing unrelated code to change.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Encapsulation;
