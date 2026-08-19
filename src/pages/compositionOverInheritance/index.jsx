import {
    FiAlertTriangle,
    FiBox,
    FiCheckCircle,
    FiGitMerge,
    FiLayers,
    FiShuffle,
} from "react-icons/fi";

import * as Styled from "./styled";

const CompositionOverInheritance = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiGitMerge />
                    <span>Design Principle</span>
                </div>

                <h1>Composition over Inheritance</h1>

                <p>
                    Composition over Inheritance encourages building behavior by
                    combining smaller focused parts instead of creating deep
                    inheritance hierarchies. Composition often provides clearer
                    dependencies and more flexible behavior.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiShuffle />

                    <h2>Combine focused behavior</h2>

                    <p>
                        Small responsibilities can be composed together to
                        create richer behavior without forcing every variation
                        into one class hierarchy.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Avoid rigid inheritance trees</h2>

                    <p>
                        Deep inheritance can make behavior depend on several
                        parent classes and make changes harder to reason about.
                    </p>
                </article>

                <article>
                    <FiBox />

                    <h2>Make dependencies explicit</h2>

                    <p>
                        Composition usually shows which capabilities an object
                        uses instead of receiving behavior indirectly through
                        ancestry.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Idea</span>

                    <h2>
                        Build complex behavior from smaller responsibilities
                    </h2>

                    <p>
                        Inheritance models an "is-a" relationship. Composition
                        models a "has-a" or "uses-a" relationship. Many
                        application behaviors fit composition more naturally
                        because they combine several independent capabilities.
                    </p>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Inheritance</h3>

                        <pre>
                            <code>{`class Employee {
  work() {}
}

class Manager extends Employee {
  approveBudget() {}
}

class TechnicalManager extends Manager {
  writeCode() {}
}`}</code>
                        </pre>

                        <p>
                            Behavior is inherited through a hierarchy. A child
                            receives the assumptions and responsibilities of
                            every parent above it.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Composition</h3>

                        <pre>
                            <code>{`const technicalManager = {
  work: workBehavior,
  approveBudget: budgetBehavior,
  writeCode: codingBehavior,
};`}</code>
                        </pre>

                        <p>
                            Capabilities are combined directly according to what
                            the object actually needs.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Inheritance Risks</span>

                    <h2>Deep hierarchies can create hidden coupling</h2>
                </div>

                <div className="riskGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Parent changes affect descendants</h3>

                            <p>
                                A modification to a base class can unexpectedly
                                alter behavior in several subclasses.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Children inherit unnecessary behavior</h3>

                            <p>
                                A subclass may receive methods or assumptions
                                that do not fit its actual responsibility.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Behavior can become difficult to trace</h3>

                            <p>
                                Understanding one method may require inspecting
                                multiple levels of inheritance.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>New combinations become awkward</h3>

                            <p>
                                A hierarchy often struggles when a new type
                                needs behavior from different branches.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Composition Example</span>

                    <h2>Inject capabilities instead of inheriting them</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Inheritance-based design
                        </span>

                        <pre>
                            <code>{`class FileLogger extends Logger {
  write(message) {
    // File implementation
  }
}

class UserService extends FileLogger {
  createUser(user) {
    this.write("User created");
  }
}`}</code>
                        </pre>

                        <p>
                            `UserService` becomes a kind of logger even though
                            logging is only one dependency it uses.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Composition-based design
                        </span>

                        <pre>
                            <code>{`class UserService {
  constructor(logger) {
    this.logger = logger;
  }

  createUser(user) {
    this.logger.write("User created");
  }
}`}</code>
                        </pre>

                        <p>
                            Logging is an explicit dependency and can be
                            replaced without changing what `UserService`
                            represents.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Behavior Composition</span>

                    <h2>
                        Small capabilities can create several useful
                        combinations
                    </h2>
                </div>

                <div className="behaviorBox">
                    <pre>
                        <code>{`const canRead = {
  read() {
    return "Reading";
  },
};

const canWrite = {
  write() {
    return "Writing";
  },
};

const canShare = {
  share() {
    return "Sharing";
  },
};

const viewer = {
  ...canRead,
};

const editor = {
  ...canRead,
  ...canWrite,
};

const owner = {
  ...canRead,
  ...canWrite,
  ...canShare,
};`}</code>
                    </pre>

                    <div className="behaviorText">
                        <h3>Capabilities remain independent.</h3>

                        <p>
                            Different objects can receive the exact combination
                            of behavior they need without creating a subclass
                            for every possible variation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">React</span>

                    <h2>React naturally favors composition</h2>

                    <p>
                        React components commonly build larger interfaces by
                        combining smaller components through props and children
                        rather than using component inheritance.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Reusable shell</span>

                        <pre>
                            <code>{`const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Composed content</span>

                        <pre>
                            <code>{`<Card>
  <UserAvatar />
  <UserName />
  <UserActions />
</Card>`}</code>
                        </pre>

                        <p>
                            The card provides structure while separate
                            components provide the behavior and content needed
                            by a specific use case.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">When Inheritance Fits</span>

                    <h2>Inheritance is not automatically wrong</h2>
                </div>

                <div className="noteBox">
                    <FiCheckCircle />

                    <div>
                        <h3>
                            Use inheritance when the relationship is genuinely
                            stable.
                        </h3>

                        <p>
                            Inheritance can be appropriate when a subtype truly
                            satisfies the contract of its parent and the
                            hierarchy represents a meaningful domain
                            relationship rather than a shortcut for code reuse.
                        </p>
                    </div>
                </div>

                <div className="fitGrid">
                    <article>
                        <strong>Reasonable inheritance</strong>

                        <p>
                            A specialized type genuinely behaves as the parent
                            type and can safely be substituted wherever the
                            parent is expected.
                        </p>
                    </article>

                    <article>
                        <strong>Prefer composition</strong>

                        <p>
                            The object only needs one capability from another
                            type or needs a combination of several independent
                            behaviors.
                        </p>
                    </article>

                    <article>
                        <strong>Reasonable inheritance</strong>

                        <p>
                            The hierarchy is shallow, stable, and communicates
                            an obvious domain relationship.
                        </p>
                    </article>

                    <article>
                        <strong>Prefer composition</strong>

                        <p>
                            New requirements frequently require mixing
                            capabilities that do not fit one inheritance branch.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Warning Signs</span>

                    <h2>Signals that inheritance may be doing too much</h2>
                </div>

                <div className="warningGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Deep hierarchy</h3>

                        <p>
                            Understanding a class requires reading several
                            parent classes.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Empty overrides</h3>

                        <p>
                            Subclasses repeatedly disable methods that do not
                            apply to them.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Behavioral flags</h3>

                        <p>
                            Parent classes contain conditionals to handle many
                            different subclass variations.
                        </p>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Forced relationships</h3>

                        <p>
                            Inheritance exists mainly to reuse code rather than
                            because the child truly represents the parent type.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask before choosing inheritance</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Is this genuinely an "is-a" relationship?
                        </strong>

                        <p>
                            The child should represent the parent concept rather
                            than simply reuse some of its code.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can the subtype safely replace the parent?
                        </strong>

                        <p>
                            If callers must treat the child differently, the
                            hierarchy may be incorrect.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the child need all inherited behavior?
                        </strong>

                        <p>
                            Unused or invalid parent methods indicate a weak
                            relationship.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Could this behavior be injected or composed instead?
                        </strong>

                        <p>
                            A focused dependency may communicate the
                            relationship more clearly.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Will new combinations fit the hierarchy?
                        </strong>

                        <p>
                            Composition usually handles independent capabilities
                            more flexibly.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is inheritance being used only for code reuse?
                        </strong>

                        <p>
                            Shared code alone is not enough reason to create a
                            type relationship.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Prefer combining focused capabilities over building rigid
                    hierarchies.
                </h2>

                <p>
                    Composition keeps dependencies explicit and allows behavior
                    to be combined according to real needs. Use inheritance when
                    it represents a genuine substitutable type relationship, not
                    simply as a shortcut for reuse.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default CompositionOverInheritance;
