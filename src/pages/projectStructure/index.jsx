import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCode,
    FiFolder,
    FiGrid,
    FiLayers,
} from "react-icons/fi";

import * as Styled from "./styled";

const ProjectStructure = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiFolder />
                    <span>Code Organization</span>
                </div>

                <h1>Project Structure</h1>

                <p>
                    A good project structure makes responsibilities easy to
                    find, reduces accidental coupling, and helps the codebase
                    remain understandable as more features, files, and
                    developers are added.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiGrid />

                    <h2>Structure should help navigation</h2>

                    <p>
                        A developer should be able to predict where a page,
                        component, service, utility, or feature belongs without
                        searching the entire project.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Boundaries should match responsibilities</h2>

                    <p>
                        Files that change together should usually stay close
                        together, while reusable parts should remain separate
                        from feature-specific implementation.
                    </p>
                </article>

                <article>
                    <FiCode />

                    <h2>Structure should grow gradually</h2>

                    <p>
                        Start with a simple organization and introduce
                        additional layers only when the size or complexity of
                        the project makes them useful.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Goal</span>

                    <h2>Make the location of code predictable</h2>

                    <p>
                        Project structure is useful when it reduces the mental
                        effort required to understand where responsibilities
                        live.
                    </p>
                </div>

                <div className="goalGrid">
                    <article>
                        <span className="cardLabel">Good Structure</span>

                        <h3>Predictable and responsibility-based</h3>

                        <ul>
                            <li>Pages are easy to locate.</li>
                            <li>Reusable components have a clear home.</li>
                            <li>
                                Feature-specific logic stays close to its
                                feature.
                            </li>
                            <li>
                                Shared utilities are not mixed with UI files.
                            </li>
                            <li>Folder names communicate purpose.</li>
                        </ul>
                    </article>

                    <article>
                        <span className="cardLabel">Problematic Structure</span>

                        <h3>Organized only by convenience</h3>

                        <ul>
                            <li>Unrelated files are placed together.</li>
                            <li>Reusable and page-specific code is mixed.</li>
                            <li>
                                Folders contain only one unnecessary nested
                                folder.
                            </li>
                            <li>Naming patterns change between features.</li>
                            <li>Developers must search instead of predict.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">React Example</span>

                    <h2>A practical structure for a growing application</h2>
                </div>

                <div className="structureBox">
                    <pre>
                        <code>{`src/
├── components/
│   ├── button/
│   │   ├── index.jsx
│   │   └── styled.js
│   ├── modal/
│   └── sidebar/
│
├── pages/
│   ├── home/
│   ├── about/
│   └── settings/
│
├── hooks/
├── services/
├── utils/
├── data/
│
├── App.jsx
├── index.css
└── main.jsx`}</code>
                    </pre>

                    <div className="structureNotes">
                        <article>
                            <strong>components/</strong>

                            <p>
                                Reusable UI pieces that can be used across
                                multiple pages or features.
                            </p>
                        </article>

                        <article>
                            <strong>pages/</strong>

                            <p>
                                Route-level screens that represent a complete
                                application page.
                            </p>
                        </article>

                        <article>
                            <strong>hooks/</strong>

                            <p>
                                Shared React hooks when behavior is reused
                                across multiple components.
                            </p>
                        </article>

                        <article>
                            <strong>services/</strong>

                            <p>
                                API communication and external service
                                integration when those responsibilities need
                                their own layer.
                            </p>
                        </article>

                        <article>
                            <strong>utils/</strong>

                            <p>
                                Small reusable functions that do not belong to a
                                particular UI component or page.
                            </p>
                        </article>

                        <article>
                            <strong>data/</strong>

                            <p>
                                Static configuration or application data such as
                                navigation definitions.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Components vs Pages</span>

                    <h2>Keep reusable UI separate from route-level screens</h2>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Reusable Component</h3>

                        <p>
                            A reusable component solves a focused UI
                            responsibility and can reasonably appear in multiple
                            places.
                        </p>

                        <pre>
                            <code>{`components/
└── userCard/
    ├── index.jsx
    └── styled.js`}</code>
                        </pre>
                    </article>

                    <article>
                        <FiLayers />

                        <h3>Page</h3>

                        <p>
                            A page represents a route or major screen and
                            coordinates the components needed to deliver that
                            screen.
                        </p>

                        <pre>
                            <code>{`pages/
└── users/
    ├── index.jsx
    └── styled.js`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Feature Boundaries</span>

                    <h2>Keep closely related code together</h2>

                    <p>
                        As an application grows, feature-oriented organization
                        can make large areas easier to understand because files
                        that change together remain close to each other.
                    </p>
                </div>

                <div className="featureExample">
                    <pre>
                        <code>{`src/
└── features/
    ├── authentication/
    │   ├── components/
    │   ├── hooks/
    │   ├── services/
    │   └── pages/
    │
    └── users/
        ├── components/
        ├── services/
        └── pages/`}</code>
                    </pre>

                    <div className="featureText">
                        <h3>
                            Use feature folders when they solve a real scaling
                            problem.
                        </h3>

                        <p>
                            A small application does not need this level of
                            organization. Feature boundaries become useful when
                            global folders become too large or when features
                            contain several related pages, components, services,
                            and hooks.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Naming</span>

                    <h2>Folder and file names should communicate intent</h2>
                </div>

                <div className="namingGrid">
                    <article>
                        <strong>Prefer purpose-driven names</strong>

                        <div className="nameExamples">
                            <span>userProfile</span>
                            <span>orderHistory</span>
                            <span>authentication</span>
                            <span>navigation</span>
                        </div>
                    </article>

                    <article>
                        <strong>Avoid vague names</strong>

                        <div className="nameExamples muted">
                            <span>stuff</span>
                            <span>helpers2</span>
                            <span>commonNew</span>
                            <span>misc</span>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Over-Nesting</span>

                    <h2>
                        More folders do not automatically mean better
                        organization
                    </h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Avoid folders that only add navigation depth.</h3>

                        <p>
                            A structure becomes harder to use when developers
                            must open many nested folders before reaching the
                            file they need. Nesting should represent a
                            meaningful boundary.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Unnecessary nesting
                        </span>

                        <pre>
                            <code>{`components/
└── common/
    └── ui/
        └── elements/
            └── buttons/
                └── primary/
                    └── index.jsx`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Simpler structure</span>

                        <pre>
                            <code>{`components/
└── primaryButton/
    ├── index.jsx
    └── styled.js`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Scaling Strategy</span>

                    <h2>Let the structure evolve with the application</h2>
                </div>

                <div className="steps">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Start simple</h3>

                            <p>
                                Use a small number of clear top-level folders
                                while the application is small.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Watch for growing responsibilities</h3>

                            <p>
                                Identify folders that are becoming difficult to
                                navigate or contain several unrelated areas.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Introduce meaningful boundaries</h3>

                            <p>
                                Group files by feature or responsibility when
                                that organization makes the project easier to
                                understand.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Keep shared code genuinely shared</h3>

                            <p>
                                Avoid moving code into global shared folders
                                simply because it might be reused someday.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about a project structure</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Can developers predict where a file belongs?
                        </strong>

                        <p>
                            Consistent boundaries reduce searching and make
                            navigation faster.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are reusable components separate from pages?
                        </strong>

                        <p>
                            Route-level screens and shared UI usually have
                            different responsibilities.
                        </p>
                    </article>

                    <article>
                        <strong>Do related files live close together?</strong>

                        <p>
                            Files that frequently change together should usually
                            be easy to find together.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are folders meaningful or merely decorative?
                        </strong>

                        <p>
                            Every folder should improve organization rather than
                            add depth without value.
                        </p>
                    </article>

                    <article>
                        <strong>Are naming conventions consistent?</strong>

                        <p>
                            Consistency makes a codebase easier to scan and
                            understand.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the structure fit the current project size?
                        </strong>

                        <p>
                            Small projects should not carry architecture
                            intended for much larger systems.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>Good structure makes responsibilities easy to locate.</h2>

                <p>
                    The best folder structure is not the one with the most
                    layers. It is the one that helps developers understand where
                    code belongs, keeps related responsibilities together, and
                    remains easy to evolve as the application grows.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default ProjectStructure;
