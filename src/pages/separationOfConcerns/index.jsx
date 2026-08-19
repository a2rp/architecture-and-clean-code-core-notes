import {
    FiAlertTriangle,
    FiCheckCircle,
    FiDatabase,
    FiLayers,
    FiLink,
    FiMonitor,
    FiServer,
} from "react-icons/fi";

import * as Styled from "./styled";

const SeparationOfConcerns = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiLayers />
                    <span>Design Principle</span>
                </div>

                <h1>Separation of Concerns</h1>

                <p>
                    Separation of Concerns means organizing software so
                    different responsibilities remain in clear and appropriate
                    boundaries. Each part of the system should focus on a
                    distinct concern instead of mixing unrelated behavior
                    together.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiLayers />

                    <h2>Keep responsibilities focused</h2>

                    <p>
                        User interface logic, business rules, data access,
                        validation, and external integrations usually represent
                        different concerns.
                    </p>
                </article>

                <article>
                    <FiLink />

                    <h2>Make boundaries clear</h2>

                    <p>
                        Components should communicate through understandable
                        interfaces instead of reaching deeply into each
                        other&apos;s implementation.
                    </p>
                </article>

                <article>
                    <FiCheckCircle />

                    <h2>Localize change</h2>

                    <p>
                        When responsibilities are separated well, changing one
                        concern is less likely to require unrelated changes
                        across the application.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Idea</span>

                    <h2>
                        Different responsibilities should have different homes
                    </h2>

                    <p>
                        A system becomes difficult to maintain when
                        presentation, business rules, persistence,
                        communication, and infrastructure are mixed inside the
                        same modules.
                    </p>
                </div>

                <div className="concernGrid">
                    <article>
                        <FiMonitor />

                        <h3>Presentation</h3>

                        <p>
                            Responsible for displaying information and handling
                            interaction with the user.
                        </p>
                    </article>

                    <article>
                        <FiServer />

                        <h3>Application Logic</h3>

                        <p>
                            Coordinates use cases and decides how application
                            operations are performed.
                        </p>
                    </article>

                    <article>
                        <FiLayers />

                        <h3>Business Rules</h3>

                        <p>
                            Represents important domain behavior and rules that
                            should not depend directly on presentation details.
                        </p>
                    </article>

                    <article>
                        <FiDatabase />

                        <h3>Data Access</h3>

                        <p>
                            Handles persistence and data retrieval instead of
                            spreading storage logic throughout unrelated
                            modules.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Example</span>

                    <h2>A component should not own every responsibility</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Mixed concerns</span>

                        <pre>
                            <code>{`const UserPage = () => {
  const handleSave = async (user) => {
    if (!user.email) {
      alert("Email required");
      return;
    }

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
    });

    localStorage.setItem(
      "last-user",
      JSON.stringify(user),
    );

    console.log(await response.json());
  };

  return <UserForm onSave={handleSave} />;
};`}</code>
                        </pre>

                        <p>
                            Presentation, validation, API communication,
                            persistence, and logging are all coordinated
                            directly inside the page component.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Separated responsibilities
                        </span>

                        <pre>
                            <code>{`const UserPage = () => {
  const handleSave = async (user) => {
    const validUser = validateUser(user);

    await userService.create(validUser);
  };

  return <UserForm onSave={handleSave} />;
};`}</code>
                        </pre>

                        <p>
                            The page coordinates the user flow while validation
                            and data communication remain inside focused
                            modules.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">React Example</span>

                    <h2>Separate UI, data access, and reusable behavior</h2>
                </div>

                <div className="structureBox">
                    <pre>
                        <code>{`src/
├── components/
│   └── userForm/
│
├── pages/
│   └── users/
│
├── services/
│   └── userService.js
│
├── validators/
│   └── userValidator.js
│
└── utils/`}</code>
                    </pre>

                    <div className="structureDetails">
                        <article>
                            <strong>UserForm</strong>

                            <p>
                                Handles rendering form controls and reporting
                                user interaction.
                            </p>
                        </article>

                        <article>
                            <strong>Users Page</strong>

                            <p>
                                Coordinates the route-level user workflow and
                                connects relevant components.
                            </p>
                        </article>

                        <article>
                            <strong>User Service</strong>

                            <p>
                                Handles communication with the user API or
                                another data source.
                            </p>
                        </article>

                        <article>
                            <strong>User Validator</strong>

                            <p>
                                Keeps reusable user validation rules separate
                                from presentation behavior.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Benefits</span>

                    <h2>Clear boundaries reduce the cost of change</h2>
                </div>

                <div className="benefitGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Easier maintenance</h3>

                            <p>
                                Developers can identify the area responsible for
                                a change without modifying unrelated behavior.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Better testability</h3>

                            <p>
                                Focused modules can often be tested
                                independently without recreating the entire
                                application environment.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Improved reuse</h3>

                            <p>
                                Logic that is not tightly connected to one UI
                                can be reused where the same responsibility
                                exists elsewhere.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Lower coupling</h3>

                            <p>
                                Clear boundaries limit the number of modules
                                that need to know internal details about each
                                other.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Avoid Extremes</span>

                    <h2>
                        Separation does not mean putting every function in
                        another file
                    </h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            Boundaries should represent meaningful concerns.
                        </h3>

                        <p>
                            Creating many tiny modules without clear
                            responsibility can make code harder to navigate.
                            Separate behavior when the responsibilities
                            genuinely differ, not simply to increase the number
                            of files.
                        </p>
                    </div>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Useful separation</h3>

                        <ul>
                            <li>UI separated from API communication</li>
                            <li>Business rules separated from rendering</li>
                            <li>
                                Validation shared between relevant workflows
                            </li>
                            <li>
                                Database logic isolated from domain behavior
                            </li>
                            <li>
                                External integrations behind clear boundaries
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Unnecessary fragmentation</h3>

                        <ul>
                            <li>
                                One trivial function per file without benefit
                            </li>
                            <li>
                                Several forwarding layers with no added behavior
                            </li>
                            <li>
                                Folders that contain only unnecessary wrappers
                            </li>
                            <li>
                                Interfaces created without an actual boundary
                            </li>
                            <li>Splitting code that always changes together</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Boundary Decisions</span>

                    <h2>Look at reasons for change</h2>

                    <p>
                        Two responsibilities often belong apart when they change
                        for different reasons or depend on different parts of
                        the system.
                    </p>
                </div>

                <div className="decisionGrid">
                    <article>
                        <strong>Presentation changes</strong>

                        <p>
                            Layout, styling, interaction, and accessibility may
                            change without changing business rules.
                        </p>
                    </article>

                    <article>
                        <strong>Business rules change</strong>

                        <p>
                            Pricing, permissions, validation, or workflows may
                            change without requiring a new UI architecture.
                        </p>
                    </article>

                    <article>
                        <strong>Infrastructure changes</strong>

                        <p>
                            A database or external service may change while the
                            application behavior remains conceptually the same.
                        </p>
                    </article>

                    <article>
                        <strong>Integration changes</strong>

                        <p>
                            Third-party API details may evolve independently
                            from the application features that use them.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about separation of concerns</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Does this module have one understandable purpose?
                        </strong>

                        <p>
                            Several unrelated responsibilities may indicate that
                            the boundary is too broad.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are business rules mixed with presentation logic?
                        </strong>

                        <p>
                            Important rules should not become difficult to reuse
                            or test because they exist only inside UI code.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is data access spread throughout the application?
                        </strong>

                        <p>
                            Centralizing relevant persistence responsibilities
                            can reduce coupling to storage details.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Do these pieces change for different reasons?
                        </strong>

                        <p>
                            Different change pressures are a useful signal that
                            responsibilities may belong apart.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the new boundary simplify understanding?
                        </strong>

                        <p>
                            Separation should make responsibilities clearer
                            instead of adding another layer of navigation.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are closely related responsibilities still together?
                        </strong>

                        <p>
                            High cohesion matters alongside separation. Do not
                            fragment a single concept unnecessarily.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Separate responsibilities so each concern can evolve
                    clearly.
                </h2>

                <p>
                    Separation of Concerns creates useful boundaries between
                    different responsibilities. The goal is not maximum
                    fragmentation, but a system where presentation, application
                    behavior, domain rules, persistence, and integrations remain
                    understandable and appropriately independent.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default SeparationOfConcerns;
