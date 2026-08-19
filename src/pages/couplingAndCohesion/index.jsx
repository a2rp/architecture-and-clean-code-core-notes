import {
    FiAlertTriangle,
    FiCheckCircle,
    FiGitBranch,
    FiLayers,
    FiLink,
    FiTarget,
} from "react-icons/fi";

import * as Styled from "./styled";

const CouplingAndCohesion = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiLink />
                    <span>Architecture Principle</span>
                </div>

                <h1>Coupling and Cohesion</h1>

                <p>
                    Coupling describes how strongly different modules depend on
                    each other. Cohesion describes how closely the
                    responsibilities inside a module belong together.
                    Maintainable systems generally aim for lower coupling and
                    higher cohesion.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiLink />

                    <h2>Lower coupling</h2>

                    <p>
                        Modules should know as little as necessary about each
                        other&apos;s internal implementation.
                    </p>
                </article>

                <article>
                    <FiTarget />

                    <h2>Higher cohesion</h2>

                    <p>
                        A module should contain responsibilities that belong to
                        the same clear purpose or concept.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Clear boundaries</h2>

                    <p>
                        Good boundaries allow related code to stay together
                        while reducing unnecessary dependencies between separate
                        areas.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Coupling</span>

                    <h2>Coupling measures dependency between modules</h2>

                    <p>
                        A tightly coupled module depends heavily on another
                        module&apos;s implementation details. A loosely coupled
                        module depends on a smaller and clearer contract.
                    </p>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>High Coupling</h3>

                        <ul>
                            <li>
                                Modules know internal details about each other.
                            </li>
                            <li>
                                A small change causes changes in several files.
                            </li>
                            <li>Dependencies are difficult to replace.</li>
                            <li>Testing requires many unrelated components.</li>
                            <li>
                                Behavior is connected through hidden
                                assumptions.
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Lower Coupling</h3>

                        <ul>
                            <li>
                                Modules communicate through clear contracts.
                            </li>
                            <li>Implementation details remain private.</li>
                            <li>Changes are more likely to stay local.</li>
                            <li>Dependencies can be tested independently.</li>
                            <li>Interactions are visible and intentional.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Example</span>

                    <h2>Avoid reaching into another module&apos;s internals</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Tightly coupled</span>

                        <pre>
                            <code>{`function checkout(order) {
  const database = new Database();

  database.connection
    .tables
    .payments
    .insert({
      orderId: order.id,
      amount: order.total,
    });
}`}</code>
                        </pre>

                        <p>
                            Checkout depends directly on low-level database
                            structure and implementation details.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Clearer dependency</span>

                        <pre>
                            <code>{`function checkout(order, paymentRepository) {
  return paymentRepository.create({
    orderId: order.id,
    amount: order.total,
  });
}`}</code>
                        </pre>

                        <p>
                            Checkout depends on the behavior it needs instead of
                            knowing how persistence is implemented internally.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Cohesion</span>

                    <h2>
                        Cohesion measures how well responsibilities belong
                        together
                    </h2>

                    <p>
                        A cohesive module represents one understandable area of
                        behavior. Low cohesion often appears when unrelated
                        utilities and responsibilities accumulate in the same
                        file, class, or service.
                    </p>
                </div>

                <div className="cohesionGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Low Cohesion</h3>

                        <pre>
                            <code>{`class UtilityService {
  sendEmail() {}
  calculateTax() {}
  resizeImage() {}
  validatePassword() {}
  exportPdf() {}
}`}</code>
                        </pre>

                        <p>
                            The methods do not represent one meaningful
                            responsibility.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Higher Cohesion</h3>

                        <pre>
                            <code>{`class EmailService {
  sendWelcome() {}
  sendResetPassword() {}
  sendReceipt() {}
}`}</code>
                        </pre>

                        <p>
                            The methods belong to one clear responsibility:
                            email delivery.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Relationship</span>

                    <h2>Low coupling and high cohesion support each other</h2>
                </div>

                <div className="relationshipGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Group related behavior</h3>

                            <p>
                                Keeping closely related responsibilities
                                together increases cohesion.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Expose a small interface</h3>

                            <p>
                                Other modules should depend only on the behavior
                                they actually need.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Hide implementation details</h3>

                            <p>
                                Internal storage, algorithms, or helper
                                functions should remain private when callers do
                                not need to know about them.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Keep changes local</h3>

                            <p>
                                A well-defined module can evolve internally
                                without forcing unrelated callers to change.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">React Example</span>

                    <h2>
                        Components should depend on behavior, not implementation
                        details
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            More coupled component
                        </span>

                        <pre>
                            <code>{`const UserList = () => {
  const loadUsers = async () => {
    const response = await fetch(
      "https://api.example.com/users",
    );

    const users = await response.json();

    // Render-specific logic continues here
  };
};`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Separated dependency
                        </span>

                        <pre>
                            <code>{`const UserList = () => {
  const loadUsers = async () => {
    const users = await userService.getAll();

    return users;
  };
};`}</code>
                        </pre>
                    </article>
                </div>

                <div className="noteBox">
                    <FiGitBranch />

                    <div>
                        <h3>The goal is not zero coupling.</h3>

                        <p>
                            Software components must interact. The goal is to
                            keep dependencies intentional, understandable, and
                            limited to what each module actually needs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Signals</span>

                    <h2>Signs that coupling may be too high</h2>
                </div>

                <div className="signalGrid">
                    <article>
                        <strong>Small changes spread widely</strong>

                        <p>
                            Editing one module regularly requires changes across
                            several unrelated areas.
                        </p>
                    </article>

                    <article>
                        <strong>Tests require large setup</strong>

                        <p>
                            A simple unit cannot be tested without creating many
                            unrelated dependencies.
                        </p>
                    </article>

                    <article>
                        <strong>Modules access internal state</strong>

                        <p>
                            Callers directly manipulate data that should belong
                            to another module.
                        </p>
                    </article>

                    <article>
                        <strong>Dependencies are difficult to replace</strong>

                        <p>
                            Business logic directly creates or controls specific
                            infrastructure implementations.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Signals</span>

                    <h2>Signs that cohesion may be too low</h2>
                </div>

                <div className="signalGrid">
                    <article>
                        <strong>The module needs a vague name</strong>

                        <p>
                            Names such as common, helper, misc, manager, or
                            utility can sometimes indicate unrelated
                            responsibilities collected together.
                        </p>
                    </article>

                    <article>
                        <strong>Functions use unrelated data</strong>

                        <p>
                            Different functions inside the same module operate
                            on completely different concepts.
                        </p>
                    </article>

                    <article>
                        <strong>The module changes for many reasons</strong>

                        <p>
                            UI changes, database changes, reporting changes, and
                            validation changes all modify the same file.
                        </p>
                    </article>

                    <article>
                        <strong>Only part of the module is reused</strong>

                        <p>
                            Consumers repeatedly depend on a large module just
                            to access one unrelated function.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Balance</span>

                    <h2>
                        Do not remove coupling by adding unnecessary abstraction
                    </h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Every boundary should provide real value.</h3>

                        <p>
                            Adding interfaces, adapters, factories, and wrappers
                            everywhere can make a simple system harder to
                            follow. Reduce coupling where change pressure,
                            testing needs, or responsibility boundaries justify
                            it.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about coupling and cohesion</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Does this module have one clear purpose?
                        </strong>

                        <p>
                            Related responsibilities should form a meaningful
                            cohesive unit.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the caller know too much about implementation?
                        </strong>

                        <p>
                            Depend on a clear contract instead of reaching into
                            internal details.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Do unrelated changes affect this module?
                        </strong>

                        <p>
                            Multiple independent reasons to change can indicate
                            weak cohesion.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can this dependency be tested independently?
                        </strong>

                        <p>Excessive setup can reveal unnecessary coupling.</p>
                    </article>

                    <article>
                        <strong>Are related functions located together?</strong>

                        <p>
                            Code that represents the same responsibility should
                            usually stay close.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would another abstraction actually simplify the
                            design?
                        </strong>

                        <p>
                            Do not introduce a boundary unless it makes
                            responsibilities or dependencies clearer.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Keep related behavior together and unrelated modules loosely
                    connected.
                </h2>

                <p>
                    High cohesion helps each module represent one meaningful
                    responsibility. Lower coupling reduces unnecessary
                    dependencies between those modules. Together they make
                    software easier to understand, test, change, and evolve.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default CouplingAndCohesion;
