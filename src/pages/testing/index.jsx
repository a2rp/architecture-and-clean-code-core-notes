import {
    FiAlertTriangle,
    FiCheckCircle,
    FiGitBranch,
    FiLayers,
    FiRepeat,
    FiShield,
    FiTarget,
    FiZap,
} from "react-icons/fi";

import * as Styled from "./styled";

const Testing = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiShield />
                    <span>Code Quality</span>
                </div>

                <h1>Testing &amp; Testability</h1>

                <p>
                    Testing provides confidence that software behaves as
                    expected. Testability describes how easily important
                    behavior can be verified in isolation or through realistic
                    integration. Code that is difficult to test can reveal
                    unclear responsibilities, hidden dependencies, or excessive
                    coupling.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiTarget />

                    <h2>Test behavior</h2>

                    <p>
                        Good tests focus on observable outcomes and contracts
                        instead of depending heavily on internal implementation
                        details.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Choose the right boundary</h2>

                    <p>
                        Unit and integration tests solve different problems.
                        Test at the smallest boundary that provides meaningful
                        confidence.
                    </p>
                </article>

                <article>
                    <FiGitBranch />

                    <h2>Let testability inform design</h2>

                    <p>
                        Difficult tests can expose hidden dependencies, mixed
                        responsibilities, global state, or unpredictable
                        behavior.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Testing Boundaries</span>

                    <h2>
                        Different tests provide different kinds of confidence
                    </h2>

                    <p>
                        A useful test suite combines focused tests with broader
                        integration coverage instead of trying to test
                        everything through one level.
                    </p>
                </div>

                <div className="boundaryGrid">
                    <article>
                        <span className="typeLabel">Unit</span>

                        <h3>Focused behavior</h3>

                        <p>
                            Tests one function, module, class, or small unit
                            with controlled dependencies.
                        </p>

                        <ul>
                            <li>Fast feedback</li>
                            <li>Easy edge-case coverage</li>
                            <li>Useful for calculations and rules</li>
                            <li>Helpful during refactoring</li>
                        </ul>
                    </article>

                    <article>
                        <span className="typeLabel">Integration</span>

                        <h3>Multiple parts working together</h3>

                        <p>
                            Verifies important boundaries such as
                            service-to-database, component-to-hook, or
                            route-to-controller interactions.
                        </p>

                        <ul>
                            <li>More realistic behavior</li>
                            <li>Finds contract mismatches</li>
                            <li>Verifies real integrations</li>
                            <li>Usually requires more setup</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Behavior-Focused Tests</span>

                    <h2>
                        Test what the code promises, not how it is implemented
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Implementation-focused
                        </span>

                        <pre>
                            <code>{`expect(service.internalCounter)
  .toBe(3);

expect(service._cache.size)
  .toBe(1);`}</code>
                        </pre>

                        <p>
                            Tests that depend on private structure can fail
                            during harmless refactoring.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Behavior-focused</span>

                        <pre>
                            <code>{`const total = calculateOrderTotal(order);

expect(total).toBe(1180);`}</code>
                        </pre>

                        <p>
                            The test verifies the result consumers actually
                            depend on.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Arrange Act Assert</span>

                    <h2>Keep test structure easy to scan</h2>

                    <p>
                        Arrange-Act-Assert is a simple structure that separates
                        setup, execution, and verification.
                    </p>
                </div>

                <div className="aaaBox">
                    <pre>
                        <code>{`test("applies tax to the subtotal", () => {
  // Arrange
  const subtotal = 1000;

  // Act
  const total = calculateTotal(subtotal);

  // Assert
  expect(total).toBe(1180);
});`}</code>
                    </pre>

                    <div className="aaaDetails">
                        <article>
                            <span>01</span>

                            <div>
                                <h3>Arrange</h3>
                                <p>
                                    Prepare the required data and dependencies.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span>02</span>

                            <div>
                                <h3>Act</h3>
                                <p>Execute the behavior being tested.</p>
                            </div>
                        </article>

                        <article>
                            <span>03</span>

                            <div>
                                <h3>Assert</h3>
                                <p>Verify the observable outcome.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Testability</span>

                    <h2>Hard-to-test code often reveals design friction</h2>
                </div>

                <div className="signalGrid">
                    <article>
                        <strong>Hidden dependencies</strong>

                        <p>
                            Functions create databases, network clients, or
                            services internally instead of receiving the
                            behavior they need.
                        </p>
                    </article>

                    <article>
                        <strong>Global mutable state</strong>

                        <p>
                            Tests depend on execution order because unrelated
                            code shares mutable state.
                        </p>
                    </article>

                    <article>
                        <strong>Mixed responsibilities</strong>

                        <p>
                            Testing one rule requires setting up UI, storage,
                            networking, and unrelated services.
                        </p>
                    </article>

                    <article>
                        <strong>Non-deterministic behavior</strong>

                        <p>
                            Time, random values, network responses, or shared
                            state make the same test produce different outcomes.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Dependency Injection</span>

                    <h2>
                        Pass dependencies when a boundary benefits from control
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Dependency created internally
                        </span>

                        <pre>
                            <code>{`async function createOrder(order) {
  const client = new PaymentClient();

  await client.charge(order.total);

  return saveOrder(order);
}`}</code>
                        </pre>

                        <p>
                            Testing payment behavior requires dealing directly
                            with the concrete payment client.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Dependency supplied explicitly
                        </span>

                        <pre>
                            <code>{`async function createOrder(
  order,
  paymentService,
) {
  await paymentService.charge(
    order.total,
  );

  return saveOrder(order);
}`}</code>
                        </pre>

                        <p>
                            The test can provide a controlled dependency without
                            changing the function's responsibility.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Mocking</span>

                    <h2>Mock boundaries deliberately</h2>

                    <p>
                        Mocks can be useful when a dependency is slow,
                        unavailable, expensive, non-deterministic, or outside
                        the responsibility being tested.
                    </p>
                </div>

                <div className="mockGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Useful mock candidates</h3>

                        <ul>
                            <li>External APIs</li>
                            <li>Email or notification providers</li>
                            <li>Payment gateways</li>
                            <li>Time or random-value providers</li>
                            <li>Expensive infrastructure boundaries</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Mocking warning signs</h3>

                        <ul>
                            <li>Every internal function is mocked.</li>
                            <li>Tests recreate implementation details.</li>
                            <li>A simple test requires many mock objects.</li>
                            <li>
                                Mocks know private call order unnecessarily.
                            </li>
                            <li>Tests pass while real integrations fail.</li>
                        </ul>
                    </article>
                </div>

                <div className="noteBox">
                    <FiAlertTriangle />

                    <div>
                        <h3>
                            Mocks are not a substitute for integration tests.
                        </h3>

                        <p>
                            A mock proves how code behaves against the simulated
                            contract. Important real integrations should still
                            be tested at an appropriate boundary.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Deterministic Code</span>

                    <h2>The same inputs should produce predictable outcomes</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Time hidden inside logic
                        </span>

                        <pre>
                            <code>{`function isExpired(expiryDate) {
  return new Date() > expiryDate;
}`}</code>
                        </pre>

                        <p>
                            The function depends on the system clock, which
                            makes precise test scenarios harder to control.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Time supplied</span>

                        <pre>
                            <code>{`function isExpired(
  expiryDate,
  currentDate,
) {
  return currentDate > expiryDate;
}`}</code>
                        </pre>

                        <p>
                            The behavior can now be tested with exact
                            timestamps.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Edge Cases</span>

                    <h2>Test meaningful boundaries, not only the happy path</h2>
                </div>

                <div className="edgeGrid">
                    <article>
                        <span>Normal</span>

                        <h3>Expected successful input</h3>

                        <p>Confirm the primary workflow behaves correctly.</p>
                    </article>

                    <article>
                        <span>Boundary</span>

                        <h3>Minimum and maximum values</h3>

                        <p>Test important limits where behavior changes.</p>
                    </article>

                    <article>
                        <span>Empty</span>

                        <h3>Missing or empty collections</h3>

                        <p>Verify behavior when there is no data to process.</p>
                    </article>

                    <article>
                        <span>Invalid</span>

                        <h3>Rejected input</h3>

                        <p>
                            Confirm invalid data produces the expected failure
                            behavior.
                        </p>
                    </article>

                    <article>
                        <span>Failure</span>

                        <h3>Dependency errors</h3>

                        <p>
                            Test how important operations behave when external
                            work fails.
                        </p>
                    </article>

                    <article>
                        <span>State</span>

                        <h3>Different lifecycle states</h3>

                        <p>
                            Verify important transitions such as pending,
                            completed, or cancelled.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Side Effects</span>

                    <h2>Verify observable effects at their boundary</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Notification behavior
                        </span>

                        <pre>
                            <code>{`test("sends confirmation", async () => {
  const mailer = {
    send: jest.fn(),
  };

  await completeOrder(order, mailer);

  expect(mailer.send)
    .toHaveBeenCalledWith(
      order.customer.email,
    );
});`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Persisted result</span>

                        <pre>
                            <code>{`test("stores the completed order", async () => {
  const repository =
    createTestOrderRepository();

  await completeOrder(
    order,
    mailer,
    repository,
  );

  const savedOrder =
    await repository.findById(order.id);

  expect(savedOrder.status)
    .toBe("completed");
});`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Brittle Tests</span>

                    <h2>
                        Tests should survive harmless implementation changes
                    </h2>
                </div>

                <div className="brittleGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Common causes</h3>

                        <ul>
                            <li>Assertions on private methods</li>
                            <li>Exact internal call ordering</li>
                            <li>Large snapshots for small behavior</li>
                            <li>Shared mutable fixtures</li>
                            <li>Dependence on real time or random data</li>
                            <li>
                                Testing framework details instead of behavior
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>More resilient approach</h3>

                        <ul>
                            <li>Verify public outcomes.</li>
                            <li>Use small focused fixtures.</li>
                            <li>Control non-deterministic dependencies.</li>
                            <li>Test meaningful contracts.</li>
                            <li>Keep setup close to the test.</li>
                            <li>
                                Use integration coverage for real boundaries.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">React Example</span>

                    <h2>Test what the user can observe</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Implementation-oriented
                        </span>

                        <pre>
                            <code>{`expect(component.state.isOpen)
  .toBe(true);

expect(component.handleToggle)
  .toHaveBeenCalled();`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Behavior-oriented</span>

                        <pre>
                            <code>{`render(<Menu />);

await user.click(
  screen.getByRole("button", {
    name: /menu/i,
  }),
);

expect(
  screen.getByRole("navigation"),
).toBeVisible();`}</code>
                        </pre>

                        <p>
                            The test verifies visible behavior rather than the
                            component's internal implementation.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Refactoring Safety Net</span>

                    <h2>Tests make structural improvement safer</h2>
                </div>

                <div className="safetyFlow">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Confirm tests pass</h3>
                            <p>Establish a known working baseline.</p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Make one focused refactor</h3>
                            <p>
                                Change structure without intentionally changing
                                behavior.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Run relevant tests</h3>
                            <p>Detect unintended changes quickly.</p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Continue incrementally</h3>
                            <p>Repeat while the safety net remains green.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Testing Strategy</span>

                    <h2>Use the smallest useful test boundary</h2>
                </div>

                <div className="strategyGrid">
                    <article>
                        <FiZap />

                        <h3>Fast focused tests</h3>

                        <p>
                            Cover important calculations, transformations,
                            validation rules, and domain decisions directly.
                        </p>
                    </article>

                    <article>
                        <FiLayers />

                        <h3>Integration coverage</h3>

                        <p>
                            Verify important communication between modules and
                            external boundaries.
                        </p>
                    </article>

                    <article>
                        <FiRepeat />

                        <h3>Regression coverage</h3>

                        <p>
                            When a defect is fixed, add a focused test when
                            practical so the same behavior does not silently
                            regress.
                        </p>
                    </article>

                    <article>
                        <FiTarget />

                        <h3>Risk-based coverage</h3>

                        <p>
                            Spend more testing effort on important, complex,
                            frequently changed, or failure-prone behavior.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about tests and testability</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Does the test verify observable behavior?
                        </strong>

                        <p>
                            Prefer public contracts over unnecessary
                            implementation details.
                        </p>
                    </article>

                    <article>
                        <strong>Is the test boundary appropriate?</strong>

                        <p>
                            Use unit or integration coverage according to the
                            behavior being verified.
                        </p>
                    </article>

                    <article>
                        <strong>Is the code deterministic?</strong>

                        <p>
                            Time, randomness, and external dependencies should
                            be controllable when necessary.
                        </p>
                    </article>

                    <article>
                        <strong>Are mocks being used only where useful?</strong>

                        <p>
                            Excessive mocking can hide poor boundaries and
                            create brittle tests.
                        </p>
                    </article>

                    <article>
                        <strong>Are important edge cases covered?</strong>

                        <p>
                            Test boundaries and failures that materially affect
                            behavior.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can the test survive internal refactoring?
                        </strong>

                        <p>
                            Stable tests focus on contracts instead of private
                            structure.
                        </p>
                    </article>

                    <article>
                        <strong>Does testing require excessive setup?</strong>

                        <p>
                            Large setup can indicate too many dependencies or
                            mixed responsibilities.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the suite provide useful confidence?
                        </strong>

                        <p>
                            The goal is meaningful risk reduction, not simply a
                            larger number of tests.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Test behavior at boundaries that provide meaningful
                    confidence.
                </h2>

                <p>
                    Good tests verify important contracts without becoming
                    tightly coupled to implementation details. Testability also
                    acts as design feedback: focused responsibilities, explicit
                    dependencies, and deterministic behavior are usually easier
                    both to test and to maintain.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Testing;
