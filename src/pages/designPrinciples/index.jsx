import {
    FiAlertTriangle,
    FiCheckCircle,
    FiLayers,
    FiRepeat,
    FiShield,
    FiTarget,
} from "react-icons/fi";

import * as Styled from "./styled";

const principles = [
    {
        title: "Separation of Concerns",
        text: "Keep unrelated responsibilities separate so each part of the system has a clear purpose and can change independently.",
        icon: FiLayers,
    },
    {
        title: "Single Responsibility",
        text: "A module, class, or function should have one focused reason to change instead of carrying multiple unrelated responsibilities.",
        icon: FiTarget,
    },
    {
        title: "High Cohesion",
        text: "Keep closely related behavior together so a module represents one meaningful concept instead of becoming a random collection of utilities.",
        icon: FiCheckCircle,
    },
    {
        title: "Low Coupling",
        text: "Reduce unnecessary dependencies between modules so one change does not create a chain of unrelated changes across the application.",
        icon: FiShield,
    },
    {
        title: "Avoid Duplication",
        text: "Do not repeat knowledge or business rules unnecessarily. Reuse should improve clarity, not create abstractions that are harder to understand.",
        icon: FiRepeat,
    },
    {
        title: "Prefer Simplicity",
        text: "Choose the simplest design that solves the current problem well. Complexity should be introduced only when it provides clear value.",
        icon: FiAlertTriangle,
    },
];

const DesignPrinciples = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiLayers />
                    <span>Core Principle</span>
                </div>

                <h1>Design Principles</h1>

                <p>
                    Design principles provide practical guidance for structuring
                    software so that responsibilities remain clear, dependencies
                    stay manageable, and future changes are easier to make.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <span className="number">01</span>

                    <h2>Structure responsibilities clearly</h2>

                    <p>
                        Code becomes easier to understand when each part of the
                        system has an obvious responsibility. Unrelated behavior
                        should not be mixed together simply because it is
                        convenient in the short term.
                    </p>
                </article>

                <article>
                    <span className="number">02</span>

                    <h2>Control dependencies</h2>

                    <p>
                        Every dependency creates a relationship between parts of
                        the system. Good design keeps these relationships
                        intentional and avoids unnecessary coupling.
                    </p>
                </article>

                <article>
                    <span className="number">03</span>

                    <h2>Design for understandable change</h2>

                    <p>
                        A maintainable design makes it clear where a change
                        belongs and reduces the chance that a small update
                        affects unrelated parts of the application.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Ideas</span>

                    <h2>Principles that support maintainable software</h2>

                    <p>
                        These principles work together. They are not isolated
                        rules and should be applied with context rather than
                        followed mechanically.
                    </p>
                </div>

                <div className="principlesGrid">
                    {principles.map((principle) => {
                        const Icon = principle.icon;

                        return (
                            <article
                                className="principleCard"
                                key={principle.title}
                            >
                                <div className="icon">
                                    <Icon />
                                </div>

                                <div>
                                    <h3>{principle.title}</h3>
                                    <p>{principle.text}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="section splitSection">
                <div className="sectionHeader">
                    <span className="sectionLabel">Good Design</span>

                    <h2>What you should usually aim for</h2>
                </div>

                <div className="compareGrid">
                    <article className="good">
                        <h3>Prefer</h3>

                        <ul>
                            <li>Focused modules with clear responsibilities</li>
                            <li>Explicit dependencies</li>
                            <li>
                                Readable interfaces between parts of the system
                            </li>
                            <li>
                                Simple solutions that match the current
                                requirements
                            </li>
                            <li>Changes that stay local whenever possible</li>
                            <li>
                                Reusable abstractions only when they reduce
                                duplication
                            </li>
                        </ul>
                    </article>

                    <article className="avoid">
                        <h3>Avoid</h3>

                        <ul>
                            <li>
                                Large modules responsible for unrelated behavior
                            </li>
                            <li>
                                Hidden dependencies and unexpected side effects
                            </li>
                            <li>Deep chains of tightly connected components</li>
                            <li>
                                Premature abstractions created for hypothetical
                                needs
                            </li>
                            <li>
                                Duplicated business rules across multiple files
                            </li>
                            <li>
                                Complexity introduced without measurable benefit
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Practical Example</span>

                    <h2>Responsibility boundaries matter</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Harder to maintain</span>

                        <pre>
                            <code>{`function createUser(data) {
  validateUser(data);
  saveUser(data);
  sendWelcomeEmail(data);
  writeAuditLog(data);
  generateReport(data);
}`}</code>
                        </pre>

                        <p>
                            One function coordinates validation, persistence,
                            email, auditing, and reporting. Changes to unrelated
                            concerns now meet in the same place.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Clearer design</span>

                        <pre>
                            <code>{`function createUser(data) {
  const user = userService.create(data);

  notificationService.sendWelcome(user);
  auditService.recordUserCreated(user);

  return user;
}`}</code>
                        </pre>

                        <p>
                            Responsibilities are delegated to focused services.
                            The orchestration remains easy to follow while each
                            concern stays isolated.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section questions">
                <div className="sectionHeader">
                    <span className="sectionLabel">Decision Guide</span>

                    <h2>Questions to ask while designing code</h2>
                </div>

                <div className="questionList">
                    <article>
                        <strong>What is this module responsible for?</strong>
                        <p>
                            If the answer includes several unrelated concerns,
                            the boundary may be too broad.
                        </p>
                    </article>

                    <article>
                        <strong>What could cause this code to change?</strong>
                        <p>
                            Multiple unrelated reasons to change often indicate
                            mixed responsibilities.
                        </p>
                    </article>

                    <article>
                        <strong>What does this component depend on?</strong>
                        <p>
                            Dependencies should be intentional, visible, and
                            limited to what the component actually needs.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does this abstraction make the code simpler?
                        </strong>
                        <p>
                            An abstraction should reduce duplication or clarify
                            intent. If it only adds indirection, it may not be
                            useful.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>Good design makes change easier to reason about.</h2>

                <p>
                    The goal is not to create the most abstract system. The goal
                    is to keep responsibilities, dependencies, and behavior
                    clear enough that future changes remain understandable and
                    controlled.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default DesignPrinciples;
