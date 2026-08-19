import {
    FiAlertTriangle,
    FiCheckCircle,
    FiGitBranch,
    FiLayers,
    FiMap,
    FiRefreshCw,
    FiShuffle,
    FiTarget,
} from "react-icons/fi";

import * as Styled from "./styled";

const Architecture = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiLayers />
                    <span>Foundation</span>
                </div>

                <h1>Software Architecture</h1>

                <p>
                    Software architecture is the high-level structure that
                    defines how major parts of a system are organized, how they
                    communicate, where responsibilities live, and how change
                    flows through the codebase over time.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiTarget />

                    <h2>Define responsibility boundaries</h2>

                    <p>
                        Architecture helps determine where business rules,
                        infrastructure, UI concerns, data access, and
                        integration logic belong.
                    </p>
                </article>

                <article>
                    <FiGitBranch />

                    <h2>Control dependency direction</h2>

                    <p>
                        Important domain behavior should not become
                        unnecessarily dependent on details that change more
                        frequently.
                    </p>
                </article>

                <article>
                    <FiRefreshCw />

                    <h2>Support change over time</h2>

                    <p>
                        Good architecture reduces the cost of modifying the
                        system as requirements, integrations, and scale evolve.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Meaning</span>

                    <h2>
                        Architecture is about important structural decisions
                    </h2>

                    <p>
                        Architecture is not simply a folder tree or a diagram.
                        It is the set of decisions that shape how
                        responsibilities, dependencies, data, and system
                        boundaries interact.
                    </p>
                </div>

                <div className="conceptGrid">
                    <article>
                        <FiLayers />

                        <h3>Structure</h3>

                        <p>
                            How the system is divided into modules, layers,
                            services, or features.
                        </p>
                    </article>

                    <article>
                        <FiGitBranch />

                        <h3>Dependencies</h3>

                        <p>
                            Which parts know about other parts and in which
                            direction those dependencies flow.
                        </p>
                    </article>

                    <article>
                        <FiShuffle />

                        <h3>Data flow</h3>

                        <p>
                            How requests, events, commands, results, and
                            persisted data move through the application.
                        </p>
                    </article>

                    <article>
                        <FiMap />

                        <h3>Boundaries</h3>

                        <p>
                            Where one responsibility, feature, subsystem, or
                            external integration ends and another begins.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Boundaries</span>

                    <h2>Clear boundaries reduce unrelated change pressure</h2>

                    <p>
                        A useful boundary groups behavior that changes for
                        related reasons and limits how much knowledge leaks into
                        the rest of the system.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Blurred boundary</span>

                        <pre>
                            <code>{`UserPage
├── render UI
├── validate input
├── build SQL query
├── send email
├── calculate permissions
└── format analytics`}</code>
                        </pre>

                        <p>
                            One module owns several concerns that evolve
                            independently.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Clearer boundaries</span>

                        <pre>
                            <code>{`UserPage
└── coordinate UI

UserService
└── application behavior

UserRepository
└── persistence

AuthorizationService
└── permissions

NotificationService
└── notifications`}</code>
                        </pre>

                        <p>
                            Responsibilities are grouped according to the
                            knowledge they own.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Layers</span>

                    <h2>
                        Layers can separate responsibilities by abstraction
                        level
                    </h2>

                    <p>
                        Layering is one architectural technique. It can help
                        when each layer has a clear purpose and dependencies
                        remain understandable.
                    </p>
                </div>

                <div className="layerBox">
                    <article>
                        <span>Presentation</span>
                        <p>
                            UI, HTTP handlers, routing, and user-facing
                            interaction.
                        </p>
                    </article>

                    <article>
                        <span>Application</span>
                        <p>
                            Use cases, coordination, workflows, and application
                            behavior.
                        </p>
                    </article>

                    <article>
                        <span>Domain</span>
                        <p>Core business concepts, rules, and decisions.</p>
                    </article>

                    <article>
                        <span>Infrastructure</span>
                        <p>
                            Databases, external APIs, storage, messaging, and
                            providers.
                        </p>
                    </article>
                </div>

                <div className="noteBox">
                    <FiAlertTriangle />

                    <div>
                        <h3>Layers should not become ceremony.</h3>

                        <p>
                            A small application may not need several formal
                            layers. Add structure when it clarifies
                            responsibility or protects important change
                            boundaries.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Modules</span>

                    <h2>
                        Modules should represent cohesive areas of
                        responsibility
                    </h2>

                    <p>
                        A module is easier to maintain when its files and
                        behavior relate to one understandable concept or
                        feature.
                    </p>
                </div>

                <div className="moduleGrid">
                    <article>
                        <strong>High cohesion</strong>

                        <pre>
                            <code>{`orders/
├── order.service.js
├── order.repository.js
├── order.validator.js
└── order.controller.js`}</code>
                        </pre>

                        <p>Related order behavior lives close together.</p>
                    </article>

                    <article>
                        <strong>Low cohesion</strong>

                        <pre>
                            <code>{`helpers/
├── order.js
├── payment.js
├── user.js
├── email.js
├── reports.js
└── randomUtils.js`}</code>
                        </pre>

                        <p>
                            A generic bucket can become a place where unrelated
                            behavior accumulates.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Dependency Direction</span>

                    <h2>
                        Stable business behavior should not depend unnecessarily
                        on volatile details
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Domain coupled to infrastructure
                        </span>

                        <pre>
                            <code>{`class OrderService {
  async create(order) {
    const collection =
      mongoClient.db("shop")
        .collection("orders");

    await collection.insertOne(order);
  }
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Dependency through a boundary
                        </span>

                        <pre>
                            <code>{`class OrderService {
  constructor(orderRepository) {
    this.orderRepository =
      orderRepository;
  }

  async create(order) {
    return this.orderRepository.create(
      order,
    );
  }
}`}</code>
                        </pre>

                        <p>
                            The application behavior depends on a meaningful
                            persistence capability instead of MongoDB-specific
                            details.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Data Flow</span>

                    <h2>Make the path through the system understandable</h2>
                </div>

                <div className="flow">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Input boundary</h3>
                            <p>
                                Receive a request, event, command, or user
                                action.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Validation</h3>
                            <p>Reject malformed or unauthorized input early.</p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Application behavior</h3>
                            <p>Coordinate the required use case or workflow.</p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Domain decisions</h3>
                            <p>
                                Apply business rules and important calculations.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>05</span>

                        <div>
                            <h3>Infrastructure</h3>
                            <p>
                                Persist data or communicate with external
                                systems.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>06</span>

                        <div>
                            <h3>Output</h3>
                            <p>
                                Return a result or publish an appropriate
                                outcome.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Architectural Decisions
                    </span>

                    <h2>Important choices should have a reason</h2>

                    <p>
                        Architecture is full of tradeoffs. A decision is easier
                        to maintain when the problem, constraints, alternatives,
                        and consequences are understood.
                    </p>
                </div>

                <div className="decisionGrid">
                    <article>
                        <strong>Context</strong>
                        <p>What problem or constraint requires a decision?</p>
                    </article>

                    <article>
                        <strong>Decision</strong>
                        <p>What architectural approach was selected?</p>
                    </article>

                    <article>
                        <strong>Alternatives</strong>
                        <p>Which realistic alternatives were considered?</p>
                    </article>

                    <article>
                        <strong>Consequences</strong>
                        <p>
                            What benefits and costs does the decision introduce?
                        </p>
                    </article>
                </div>

                <div className="decisionExample">
                    <pre>
                        <code>{`Decision:
Keep the application as one deployable React
frontend and one backend API.

Reason:
The current product does not require independent
service deployment or separate scaling domains.

Consequence:
The architecture remains operationally simple.
If independent scaling requirements emerge later,
specific boundaries can be extracted.`}</code>
                    </pre>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Tradeoffs</span>

                    <h2>
                        Architecture rarely has one universally correct answer
                    </h2>
                </div>

                <div className="tradeoffGrid">
                    <article>
                        <span>More Abstraction</span>
                        <strong>Potential benefit</strong>
                        <p>
                            Can isolate change and provide stronger conceptual
                            boundaries.
                        </p>

                        <strong>Potential cost</strong>
                        <p>
                            More indirection, files, concepts, and navigation.
                        </p>
                    </article>

                    <article>
                        <span>More Services</span>
                        <strong>Potential benefit</strong>
                        <p>Independent deployment and scaling boundaries.</p>

                        <strong>Potential cost</strong>
                        <p>
                            Network failure, coordination, observability, and
                            deployment complexity.
                        </p>
                    </article>

                    <article>
                        <span>More Shared Code</span>
                        <strong>Potential benefit</strong>
                        <p>
                            Reduces duplicated knowledge where concepts are
                            genuinely shared.
                        </p>

                        <strong>Potential cost</strong>
                        <p>
                            Can increase coupling between otherwise independent
                            features.
                        </p>
                    </article>

                    <article>
                        <span>More Generality</span>
                        <strong>Potential benefit</strong>
                        <p>
                            Can support real recurring variations efficiently.
                        </p>

                        <strong>Potential cost</strong>
                        <p>
                            Speculative configuration and abstractions can
                            obscure simple behavior.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Evolution</span>

                    <h2>Architecture should evolve with evidence</h2>

                    <p>
                        A maintainable architecture does not need to predict
                        every future requirement. It should make expected
                        changes possible while allowing new boundaries to emerge
                        as real pressure appears.
                    </p>
                </div>

                <div className="evolutionFlow">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Start with current requirements</h3>
                            <p>
                                Build the simplest structure that clearly
                                supports the system.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Observe change pressure</h3>
                            <p>
                                Notice which modules repeatedly change together
                                or interfere.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Strengthen real boundaries</h3>
                            <p>
                                Extract abstractions or modules when the need
                                becomes clear.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Review consequences</h3>
                            <p>
                                Confirm the new structure actually reduces
                                maintenance cost.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Good Architecture</span>

                    <h2>
                        Good architecture makes important change easier to
                        reason about
                    </h2>
                </div>

                <div className="goodGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Clear ownership</h3>

                        <p>
                            Developers can identify which module owns an
                            important rule or behavior.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Understandable dependencies</h3>

                        <p>
                            It is possible to explain why one area depends on
                            another.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Localized change</h3>

                        <p>
                            Small requirements do not routinely require
                            unrelated edits across the whole system.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Replaceable details</h3>

                        <p>
                            External providers and infrastructure do not
                            dominate core application behavior.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Operationally appropriate</h3>

                        <p>
                            The system complexity matches what the team can
                            deploy, observe, and support.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Evolvable</h3>

                        <p>
                            New boundaries can emerge without requiring a full
                            rewrite.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Over-Engineering</span>

                    <h2>
                        Architecture can become more complicated than the
                        problem
                    </h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Complexity needs evidence.</h3>

                        <p>
                            Layers, interfaces, services, factories, message
                            flows, plugins, and configuration systems all have
                            legitimate uses, but each adds concepts that future
                            developers must understand and operate.
                        </p>
                    </div>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Over-engineered signals</h3>

                        <ul>
                            <li>
                                Several abstractions exist for one
                                implementation.
                            </li>
                            <li>
                                Simple operations require navigating many
                                layers.
                            </li>
                            <li>
                                Extension points exist for requirements that do
                                not exist.
                            </li>
                            <li>
                                Architecture diagrams are harder to explain than
                                the product.
                            </li>
                            <li>
                                Operational complexity provides no current
                                benefit.
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Healthy restraint</h3>

                        <ul>
                            <li>Add boundaries around real change pressure.</li>
                            <li>Use direct code when the concept is simple.</li>
                            <li>
                                Extract abstractions after patterns become
                                clear.
                            </li>
                            <li>Prefer understandable tradeoffs.</li>
                            <li>
                                Keep architecture proportional to the system.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Practical Review</span>

                    <h2>Questions to ask when reviewing architecture</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>Where do the core business rules live?</strong>
                        <p>
                            Important decisions should have understandable
                            ownership.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are boundaries aligned with responsibility?
                        </strong>
                        <p>Group behavior that changes for related reasons.</p>
                    </article>

                    <article>
                        <strong>Are dependencies flowing intentionally?</strong>
                        <p>
                            Core logic should not unnecessarily depend on
                            volatile details.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can the main data flow be explained clearly?
                        </strong>
                        <p>
                            Requests and outcomes should follow understandable
                            paths.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does one change touch many unrelated areas?
                        </strong>
                        <p>
                            Scattered modifications can reveal weak boundaries.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are external integrations isolated enough?
                        </strong>
                        <p>
                            Provider-specific knowledge should not spread
                            without need.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the architecture match current scale?
                        </strong>
                        <p>
                            Avoid distributed or abstract complexity without a
                            requirement.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can important modules be tested reasonably?
                        </strong>
                        <p>
                            Uncontrollable dependencies can indicate excessive
                            coupling.
                        </p>
                    </article>

                    <article>
                        <strong>Are important decisions documented?</strong>
                        <p>
                            Future developers should understand why
                            consequential choices were made.
                        </p>
                    </article>

                    <article>
                        <strong>Can the system evolve incrementally?</strong>
                        <p>
                            Architecture should support change without making
                            rewrites routine.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>Architecture organizes change, not just code.</h2>

                <p>
                    Good architecture gives responsibilities clear homes, keeps
                    dependency direction understandable, makes data flow
                    visible, isolates volatile details, and evolves according to
                    real pressure. The best structure is not the one with the
                    most patterns, but the one that keeps important change
                    understandable and proportionate to the system.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Architecture;
