import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCompass,
    FiEye,
    FiLayers,
    FiZap,
} from "react-icons/fi";

import * as Styled from "./styled";

const Kiss = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiCheckCircle />
                    <span>Design Principle</span>
                </div>

                <h1>KISS</h1>

                <p>
                    KISS means Keep It Simple. The principle encourages
                    solutions that are easy to understand and maintain without
                    adding complexity that does not provide clear value.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiEye />

                    <h2>Readable solutions are easier to maintain</h2>

                    <p>
                        A developer should be able to understand the main
                        behavior without tracing through unnecessary layers of
                        indirection.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Every abstraction has a cost</h2>

                    <p>
                        Additional layers, patterns, factories, wrappers, and
                        configuration should exist because they solve a real
                        problem.
                    </p>
                </article>

                <article>
                    <FiCompass />

                    <h2>Simplicity depends on context</h2>

                    <p>
                        The simplest useful design is not always the shortest
                        code. It is the design that makes behavior and future
                        changes easier to reason about.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Meaning</span>

                    <h2>Simplicity reduces accidental complexity</h2>

                    <p>
                        Some complexity belongs to the problem itself. Other
                        complexity is introduced by how the solution is
                        designed. KISS focuses on reducing the second kind.
                    </p>
                </div>

                <div className="complexityGrid">
                    <article>
                        <span className="cardLabel">Essential Complexity</span>

                        <h3>Complexity that belongs to the problem</h3>

                        <p>
                            Authentication, financial calculations, distributed
                            workflows, permissions, or regulatory rules can
                            naturally require careful logic.
                        </p>

                        <div className="status neutral">
                            <FiCompass />
                            <span>Understand and manage it</span>
                        </div>
                    </article>

                    <article>
                        <span className="cardLabel">Accidental Complexity</span>

                        <h3>Complexity introduced by the implementation</h3>

                        <p>
                            Extra wrappers, unnecessary generic systems, deep
                            inheritance, excessive configuration, or unclear
                            abstractions can make a simple requirement harder to
                            understand.
                        </p>

                        <div className="status warning">
                            <FiAlertTriangle />
                            <span>Reduce where possible</span>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Simple vs Oversimplified
                    </span>

                    <h2>Simple code still needs to handle the real problem</h2>
                </div>

                <div className="compareGrid">
                    <article>
                        <h3>Simple</h3>

                        <ul>
                            <li>Clear responsibilities</li>
                            <li>Direct control flow</li>
                            <li>Useful validation</li>
                            <li>Meaningful error handling</li>
                            <li>Appropriate abstractions</li>
                            <li>Easy to change safely</li>
                        </ul>
                    </article>

                    <article>
                        <h3>Oversimplified</h3>

                        <ul>
                            <li>Important cases are ignored</li>
                            <li>Validation is removed to reduce code</li>
                            <li>Errors are hidden instead of handled</li>
                            <li>
                                Complex domain rules are collapsed incorrectly
                            </li>
                            <li>Responsibilities are mixed together</li>
                            <li>Future changes become risky</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Example</span>

                    <h2>Prefer direct code when the problem is direct</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Unnecessary indirection
                        </span>

                        <pre>
                            <code>{`class DiscountStrategyFactory {
  create(type) {
    if (type === "regular") {
      return new RegularDiscountStrategy();
    }
  }
}

class RegularDiscountStrategy {
  calculate(price) {
    return price * 0.1;
  }
}`}</code>
                        </pre>

                        <p>
                            If the application has only one simple discount
                            rule, a factory and strategy hierarchy may add more
                            structure than value.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Direct solution</span>

                        <pre>
                            <code>{`function calculateDiscount(price) {
  return price * 0.1;
}`}</code>
                        </pre>

                        <p>
                            The behavior is obvious, easy to test, and easy to
                            change while the requirement remains simple.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Unnecessary Abstraction
                    </span>

                    <h2>Do not create flexibility before it is needed</h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>General-purpose systems are rarely free.</h3>

                        <p>
                            Every abstraction creates another concept that
                            developers must understand. If the application has
                            only one concrete use case, designing for many
                            hypothetical variations can make the current code
                            harder to maintain.
                        </p>
                    </div>
                </div>

                <div className="decisionGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Add abstraction when</h3>

                        <ul>
                            <li>A real variation already exists.</li>
                            <li>Several consumers need the same behavior.</li>
                            <li>The abstraction makes intent clearer.</li>
                            <li>It removes meaningful duplication.</li>
                            <li>
                                It isolates a dependency that changes
                                frequently.
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Wait when</h3>

                        <ul>
                            <li>The requirement is hypothetical.</li>
                            <li>Only one implementation exists.</li>
                            <li>
                                The abstraction needs many options and flags.
                            </li>
                            <li>
                                The direct solution is already easy to
                                understand.
                            </li>
                            <li>
                                The added layer only moves code somewhere else.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Readability</span>

                    <h2>Simple code communicates intent quickly</h2>
                </div>

                <div className="readabilityGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Prefer clear names</h3>

                            <p>
                                Good names reduce the need for comments that
                                explain what variables, functions, or modules
                                are supposed to represent.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Keep functions focused</h3>

                            <p>
                                Smaller focused functions usually make control
                                flow easier to understand than functions that
                                coordinate unrelated work.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Prefer obvious control flow</h3>

                            <p>
                                Deep nesting and excessive callbacks can hide
                                the main behavior of a feature.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Keep abstractions close to the problem</h3>

                            <p>
                                Domain-specific abstractions are often easier to
                                understand than generic systems designed to
                                solve every possible case.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Practical Decisions</span>

                    <h2>Questions that help keep designs simple</h2>
                </div>

                <div className="questions">
                    <article>
                        <strong>Can the behavior be explained quickly?</strong>

                        <p>
                            If understanding one simple feature requires
                            exploring many files and abstractions, the design
                            may be more complex than necessary.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does every layer have a clear responsibility?
                        </strong>

                        <p>
                            A layer should solve a real organizational or
                            architectural problem rather than exist only because
                            a pattern suggests it.
                        </p>
                    </article>

                    <article>
                        <strong>Is this flexibility currently required?</strong>

                        <p>
                            Supporting hypothetical variations can delay
                            delivery and make today's implementation harder to
                            understand.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would removing this abstraction make the code
                            clearer?
                        </strong>

                        <p>
                            If the answer is yes and no important boundary is
                            lost, the abstraction may not be providing enough
                            value.
                        </p>
                    </article>

                    <article>
                        <strong>Is the simple solution safe?</strong>

                        <p>
                            Simplicity should not remove required validation,
                            security, correctness, or error handling.
                        </p>
                    </article>

                    <article>
                        <strong>Can the design evolve later?</strong>

                        <p>
                            A straightforward implementation can often be
                            refactored when a real second use case appears.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Choose the simplest design that correctly solves the real
                    problem.
                </h2>

                <p>
                    Simplicity is not about writing the fewest lines of code. It
                    is about reducing unnecessary concepts, dependencies, and
                    indirection while preserving correctness and clarity.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Kiss;
