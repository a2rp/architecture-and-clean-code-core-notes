import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiGitMerge,
    FiLayers,
    FiRepeat,
} from "react-icons/fi";

import * as Styled from "./styled";

const Dry = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiRepeat />
                    <span>Design Principle</span>
                </div>

                <h1>DRY</h1>

                <p>
                    DRY means Don&apos;t Repeat Yourself. The goal is to avoid
                    duplicating the same knowledge, rule, or behavior across
                    multiple places where future changes could easily become
                    inconsistent.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiCopy />

                    <h2>Duplication creates maintenance risk</h2>

                    <p>
                        When the same business rule exists in several places,
                        every future update has to be repeated correctly
                        everywhere.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Similarity is not always duplication</h2>

                    <p>
                        Two blocks of code can look similar while representing
                        different concepts that may evolve independently.
                    </p>
                </article>

                <article>
                    <FiGitMerge />

                    <h2>Abstractions should represent shared knowledge</h2>

                    <p>
                        Reuse is most useful when multiple consumers truly
                        depend on the same rule or behavior.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Meaning</span>

                    <h2>DRY is about duplicated knowledge</h2>

                    <p>
                        The most dangerous duplication is not necessarily
                        repeated syntax. It is the same decision, rule, or
                        source of truth being maintained independently in
                        several places.
                    </p>
                </div>

                <div className="knowledgeGrid">
                    <article>
                        <span className="cardLabel">Knowledge Duplication</span>

                        <h3>Same rule in multiple places</h3>

                        <p>
                            A tax calculation, permission rule, validation
                            requirement, or pricing formula should usually have
                            one clear source of truth.
                        </p>

                        <div className="status bad">
                            <FiAlertTriangle />
                            <span>High risk of inconsistent changes</span>
                        </div>
                    </article>

                    <article>
                        <span className="cardLabel">Code Similarity</span>

                        <h3>Similar shape, different meaning</h3>

                        <p>
                            Two features can currently look alike but represent
                            separate concepts. Combining them too early can
                            create unnecessary coupling.
                        </p>

                        <div className="status good">
                            <FiCheckCircle />
                            <span>Duplication may be acceptable</span>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Example</span>

                    <h2>Repeated business rules are a strong DRY signal</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Duplicated knowledge
                        </span>

                        <pre>
                            <code>{`function checkoutTotal(price) {
  const tax = price * 0.18;
  return price + tax;
}

function invoiceTotal(price) {
  const tax = price * 0.18;
  return price + tax;
}`}</code>
                        </pre>

                        <p>
                            The tax rule is duplicated. If the rate changes,
                            multiple places must be updated correctly.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Single source of truth
                        </span>

                        <pre>
                            <code>{`const TAX_RATE = 0.18;

function calculateTax(price) {
  return price * TAX_RATE;
}

function calculateTotal(price) {
  return price + calculateTax(price);
}`}</code>
                        </pre>

                        <p>
                            The tax rule now has one clear location and can be
                            reused wherever that same rule applies.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Important Distinction</span>

                    <h2>Not every repeated block should be extracted</h2>
                </div>

                <div className="conceptBox">
                    <p>
                        Code can look identical today and still represent
                        different domain concepts. If those concepts may change
                        for different reasons, forcing them into one abstraction
                        can make future changes harder.
                    </p>

                    <div className="comparison">
                        <article>
                            <strong>Good candidate for reuse</strong>

                            <ul>
                                <li>The same business rule is repeated.</li>
                                <li>
                                    The same validation logic must stay
                                    consistent.
                                </li>
                                <li>
                                    The same transformation is required by many
                                    consumers.
                                </li>
                                <li>
                                    A shared source of truth clearly exists.
                                </li>
                            </ul>
                        </article>

                        <article>
                            <strong>Be careful before extracting</strong>

                            <ul>
                                <li>The code only happens to look similar.</li>
                                <li>
                                    The concepts belong to different domains.
                                </li>
                                <li>The behavior may evolve independently.</li>
                                <li>
                                    The abstraction needs many flags or
                                    conditions.
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Premature Abstraction</span>

                    <h2>
                        Removing duplication too early can create worse code
                    </h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Wait until the shared concept is clear.</h3>

                        <p>
                            A small amount of temporary duplication is often
                            easier to maintain than an abstraction built before
                            the requirements are understood. Repeated code can
                            reveal a pattern over time.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid abstractionExample">
                    <article>
                        <span className="exampleLabel">
                            Over-generalized abstraction
                        </span>

                        <pre>
                            <code>{`function processUser(user, options) {
  if (options.sendEmail) {}
  if (options.createInvoice) {}
  if (options.writeAudit) {}
  if (options.notifyAdmin) {}
}`}</code>
                        </pre>

                        <p>
                            A supposedly reusable function can become a
                            collection of flags controlling unrelated behavior.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Focused behavior</span>

                        <pre>
                            <code>{`createUser(user);
sendWelcomeEmail(user);
writeUserAudit(user);`}</code>
                        </pre>

                        <p>
                            Separate operations can remain clearer until a
                            meaningful shared abstraction actually emerges.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Practical Strategy</span>

                    <h2>A simple approach to duplication</h2>
                </div>

                <div className="steps">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Notice repetition</h3>
                            <p>
                                Identify repeated rules, calculations,
                                validation, or transformations.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Ask whether the meaning is truly shared</h3>
                            <p>
                                Similar syntax alone is not enough. Determine
                                whether the code represents the same knowledge.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Observe how it changes</h3>
                            <p>
                                If the duplicated areas repeatedly change
                                together, a shared abstraction is more likely to
                                be appropriate.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Extract the smallest useful abstraction</h3>
                            <p>
                                Centralize the shared rule without creating a
                                large generic system around it.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section checklistSection">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Before extracting duplicated code</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>Is the same knowledge being repeated?</strong>
                        <p>
                            If yes, centralizing it can reduce maintenance risk.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Do these pieces change for the same reason?
                        </strong>
                        <p>
                            Shared change pressure is a strong sign that they
                            belong together.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Will the abstraction make intent clearer?
                        </strong>
                        <p>
                            Reuse should simplify the code rather than hide what
                            it does.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the abstraction require many switches?
                        </strong>
                        <p>
                            Too many flags can indicate that unrelated concepts
                            were combined.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Could the duplicated concepts evolve independently?
                        </strong>
                        <p>If yes, keeping them separate may be safer.</p>
                    </article>

                    <article>
                        <strong>
                            Is duplication currently easier to understand?
                        </strong>
                        <p>
                            A small amount of duplication can sometimes be the
                            simpler design.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>Remove duplicated knowledge, not every repeated line.</h2>

                <p>
                    DRY works best when it creates one clear source of truth.
                    Reuse should reduce maintenance risk and improve clarity
                    without coupling concepts that only happen to look similar.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Dry;
