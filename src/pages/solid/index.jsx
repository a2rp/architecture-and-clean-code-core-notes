import {
    FiBox,
    FiCheckCircle,
    FiLayers,
    FiLink,
    FiRefreshCw,
    FiTarget,
} from "react-icons/fi";

import * as Styled from "./styled";

const principles = [
    {
        key: "S",
        title: "Single Responsibility Principle",
        short: "One focused reason to change.",
        text: "A class, module, component, or function should focus on one responsibility instead of mixing unrelated concerns.",
        icon: FiTarget,
    },
    {
        key: "O",
        title: "Open/Closed Principle",
        short: "Open for extension, closed for unnecessary modification.",
        text: "Well-designed code should allow new behavior to be added without repeatedly rewriting stable existing logic.",
        icon: FiRefreshCw,
    },
    {
        key: "L",
        title: "Liskov Substitution Principle",
        short: "Subtypes should behave like the abstractions they replace.",
        text: "Code depending on a base abstraction should continue to work correctly when a valid subtype is used in its place.",
        icon: FiLayers,
    },
    {
        key: "I",
        title: "Interface Segregation Principle",
        short: "Prefer focused interfaces.",
        text: "Consumers should not be forced to depend on methods or behavior they do not need. Smaller focused contracts are easier to understand.",
        icon: FiBox,
    },
    {
        key: "D",
        title: "Dependency Inversion Principle",
        short: "Depend on abstractions, not rigid implementation details.",
        text: "High-level behavior should not become tightly coupled to specific low-level implementations when a clear abstraction can separate them.",
        icon: FiLink,
    },
];

const Solid = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiCheckCircle />
                    <span>Design Principles</span>
                </div>

                <h1>SOLID Principles</h1>

                <p>
                    SOLID is a group of five object-oriented design principles
                    that help keep responsibilities focused, dependencies
                    manageable, and software easier to extend and maintain.
                </p>
            </header>

            <section className="solidIntro">
                <div className="letters" aria-label="SOLID">
                    {principles.map((principle) => (
                        <span key={principle.key}>{principle.key}</span>
                    ))}
                </div>

                <div className="introText">
                    <h2>SOLID is guidance, not a checklist.</h2>

                    <p>
                        The principles are most useful when they improve clarity
                        and reduce the cost of change. Applying them
                        mechanically can create too many abstractions and make
                        simple code harder to follow.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">The Five Principles</span>

                    <h2>Understand what each principle is trying to protect</h2>

                    <p>
                        Each principle addresses a different type of design
                        pressure, but they work together to reduce accidental
                        complexity.
                    </p>
                </div>

                <div className="principleList">
                    {principles.map((principle) => {
                        const Icon = principle.icon;

                        return (
                            <article className="principle" key={principle.key}>
                                <div className="principleKey">
                                    {principle.key}
                                </div>

                                <div className="principleIcon">
                                    <Icon />
                                </div>

                                <div className="principleContent">
                                    <h3>{principle.title}</h3>
                                    <strong>{principle.short}</strong>
                                    <p>{principle.text}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Single Responsibility</span>

                    <h2>Keep unrelated reasons to change apart</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Mixed responsibilities
                        </span>

                        <pre>
                            <code>{`class UserService {
  createUser(data) {}
  sendEmail(user) {}
  generateReport(user) {}
  writeLog(message) {}
}`}</code>
                        </pre>

                        <p>
                            User creation, email delivery, reporting, and
                            logging are separate concerns but are all placed
                            inside the same service.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Focused responsibilities
                        </span>

                        <pre>
                            <code>{`class UserService {
  createUser(data) {}
}

class EmailService {
  sendWelcome(user) {}
}

class AuditService {
  write(message) {}
}`}</code>
                        </pre>

                        <p>
                            Each service has a more focused purpose, so changes
                            to one concern are less likely to affect unrelated
                            behavior.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Open / Closed</span>

                    <h2>
                        Extend behavior without repeatedly rewriting stable
                        logic
                    </h2>
                </div>

                <div className="conceptBox">
                    <p>
                        The Open/Closed Principle does not mean existing code
                        should never be changed. It encourages designs where
                        common extension points are clear enough that adding a
                        new case does not require modifying many existing
                        branches.
                    </p>

                    <pre>
                        <code>{`const formatters = {
  json: jsonFormatter,
  csv: csvFormatter,
  pdf: pdfFormatter,
};

function exportData(type, data) {
  return formatters[type](data);
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Liskov Substitution</span>

                    <h2>Subtypes must preserve expected behavior</h2>
                </div>

                <div className="infoGrid">
                    <article>
                        <h3>The key question</h3>

                        <p>
                            If code expects a base type, can a subtype be used
                            without surprising the caller or breaking the
                            expected contract?
                        </p>
                    </article>

                    <article>
                        <h3>What breaks substitution</h3>

                        <p>
                            A subtype that changes fundamental expectations,
                            rejects valid inputs, or behaves inconsistently with
                            the abstraction can make polymorphism unreliable.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Interface Segregation</span>

                    <h2>Keep contracts small and relevant</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Broad contract</span>

                        <pre>
                            <code>{`interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}`}</code>
                        </pre>

                        <p>
                            Every implementation is forced to support behavior
                            that may not belong to it.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Focused contracts</span>

                        <pre>
                            <code>{`interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}`}</code>
                        </pre>

                        <p>
                            Consumers and implementations depend only on the
                            behavior they actually need.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Dependency Inversion</span>

                    <h2>Separate policy from implementation details</h2>
                </div>

                <div className="conceptBox">
                    <p>
                        High-level application logic becomes easier to test and
                        replace when it depends on a stable contract instead of
                        directly creating or controlling every low-level
                        implementation.
                    </p>

                    <pre>
                        <code>{`class OrderService {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  checkout(order) {
    return this.paymentGateway.pay(order.total);
  }
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="section checklistSection">
                <div className="sectionHeader">
                    <span className="sectionLabel">Practical Review</span>

                    <h2>Questions to ask before adding another abstraction</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Does this code have more than one unrelated
                            responsibility?
                        </strong>
                        <p>
                            If yes, separating concerns may make future changes
                            safer.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Will adding a new case require editing many existing
                            branches?
                        </strong>
                        <p>
                            A clearer extension point may reduce repeated
                            modification.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can implementations be substituted without changing
                            expectations?
                        </strong>
                        <p>
                            If not, the abstraction or inheritance relationship
                            may be wrong.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are consumers depending on behavior they never use?
                        </strong>
                        <p>Smaller contracts may be more appropriate.</p>
                    </article>

                    <article>
                        <strong>
                            Is high-level logic tightly bound to one
                            implementation?
                        </strong>
                        <p>
                            Dependency inversion may improve flexibility and
                            testability.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is the design becoming harder to understand?
                        </strong>
                        <p>
                            SOLID should reduce complexity, not create
                            abstraction for its own sake.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    SOLID should make change safer, not make code more
                    ceremonial.
                </h2>

                <p>
                    Use these principles when they clarify responsibilities and
                    dependencies. The right amount of structure is the amount
                    that makes the system easier to understand, test, extend,
                    and maintain.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Solid;
