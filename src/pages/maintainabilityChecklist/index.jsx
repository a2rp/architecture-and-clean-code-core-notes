import {
    FiActivity,
    FiAlertTriangle,
    FiBookOpen,
    FiCheck,
    FiCheckCircle,
    FiCode,
    FiFileText,
    FiGitBranch,
    FiLayers,
    FiLock,
    FiPackage,
    FiRefreshCw,
    FiSettings,
    FiShield,
    FiTarget,
    FiTool,
    FiTrendingUp,
    FiZap,
} from "react-icons/fi";

import * as Styled from "./styled";

const checklistSections = [
    {
        title: "Architecture",
        icon: FiLayers,
        items: [
            "Responsibilities have clear boundaries.",
            "Modules have high cohesion and limited unnecessary coupling.",
            "Business rules are not scattered across unrelated layers.",
            "External infrastructure details stay near integration boundaries.",
            "Abstractions solve real recurring problems.",
            "The architecture remains understandable without excessive indirection.",
        ],
    },
    {
        title: "Naming",
        icon: FiTarget,
        items: [
            "Variables communicate what their values represent.",
            "Functions communicate the action they perform.",
            "Boolean names read like conditions.",
            "Domain terminology is consistent across related modules.",
            "Abbreviations are avoided unless they are widely understood.",
            "Names do not require comments to explain their basic purpose.",
        ],
    },
    {
        title: "Functions",
        icon: FiZap,
        items: [
            "Functions have focused responsibilities.",
            "Inputs and outputs are easy to understand.",
            "Side effects are deliberate and visible.",
            "Large parameter lists are justified.",
            "Guard clauses simplify invalid or exceptional paths where useful.",
            "Extracted functions represent meaningful concepts.",
        ],
    },
    {
        title: "Duplication",
        icon: FiGitBranch,
        items: [
            "Duplicated business knowledge has a clear source of truth.",
            "Similar-looking code is not abstracted only because it looks similar.",
            "Shared validation rules remain consistent.",
            "Repeated constants represent intentional shared knowledge.",
            "Premature abstractions have not replaced understandable duplication.",
        ],
    },
    {
        title: "Dependencies",
        icon: FiPackage,
        items: [
            "Every direct dependency has a clear purpose.",
            "Unused packages have been removed.",
            "Important external APIs are isolated where useful.",
            "Dependency versions and lockfile changes are intentional.",
            "Known security advisories have been reviewed.",
            "Abandoned dependencies have an understood migration or retention decision.",
        ],
    },
    {
        title: "Validation",
        icon: FiCheckCircle,
        items: [
            "Untrusted input is validated at application boundaries.",
            "Schema validation and business validation are conceptually separated.",
            "Server-side validation remains authoritative.",
            "Nested structures are validated where necessary.",
            "Normalization is intentional.",
            "Validation errors help callers correct their input.",
        ],
    },
    {
        title: "Error Handling",
        icon: FiTool,
        items: [
            "Expected and unexpected failures are treated differently.",
            "Errors are handled at useful boundaries.",
            "Exceptions are not swallowed silently.",
            "Retries are used only for suitable transient failures.",
            "User-facing messages do not expose internal implementation details.",
            "Important failures preserve useful diagnostic context.",
        ],
    },
    {
        title: "Logging",
        icon: FiActivity,
        items: [
            "Log levels reflect operational importance.",
            "Logs contain useful structured context.",
            "Sensitive values are excluded.",
            "The same error is not logged repeatedly at every layer.",
            "Related requests can be correlated where useful.",
            "Production logs provide signal without unnecessary noise.",
        ],
    },
    {
        title: "Configuration",
        icon: FiSettings,
        items: [
            "Environment-specific values live outside application logic.",
            "Required configuration is validated during startup.",
            "Secrets are not committed to source control.",
            "Raw environment variables are accessed through a clear configuration boundary.",
            "Defaults are safe and intentional.",
            "Temporary feature flags have removal plans.",
        ],
    },
    {
        title: "Testing",
        icon: FiShield,
        items: [
            "Tests verify important observable behavior.",
            "Test boundaries match the behavior being checked.",
            "Important business rules have useful coverage.",
            "External dependencies are controlled where necessary.",
            "Tests remain deterministic.",
            "Tests are not unnecessarily coupled to implementation details.",
        ],
    },
    {
        title: "Documentation",
        icon: FiFileText,
        items: [
            "README information matches the current project.",
            "Setup instructions are reproducible.",
            "Important architectural decisions are documented where useful.",
            "Examples match the current implementation.",
            "Comments explain context or intent rather than obvious syntax.",
            "Outdated documentation has been removed or updated.",
        ],
    },
    {
        title: "Performance & Scalability",
        icon: FiTrendingUp,
        items: [
            "Performance work is based on measurement.",
            "Known bottlenecks are understood.",
            "Database access avoids obvious unnecessary work.",
            "Concurrency respects downstream limits.",
            "Caching has clear freshness and invalidation expectations.",
            "Scaling complexity exists because of real requirements.",
        ],
    },
    {
        title: "Security Boundaries",
        icon: FiLock,
        items: [
            "Authentication and authorization responsibilities are clear.",
            "Untrusted input is treated as untrusted.",
            "Secrets stay outside browser-delivered code.",
            "Sensitive data is not unnecessarily logged.",
            "Database access uses safe parameterized or equivalent APIs.",
            "Security decisions are enforced on trusted application boundaries.",
        ],
    },
    {
        title: "Refactoring Readiness",
        icon: FiRefreshCw,
        items: [
            "Current behavior is understood before structural changes.",
            "Important behavior has a useful safety net.",
            "Refactoring can happen incrementally.",
            "The structural problem being solved is clear.",
            "The proposed change reduces complexity instead of relocating it.",
            "A rewrite is not being chosen only because existing code looks old.",
        ],
    },
];

const MaintainabilityChecklist = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiCheckCircle />
                    <span>Architecture &amp; Maintenance</span>
                </div>

                <h1>Maintainability Checklist</h1>

                <p>
                    Maintainability is the ability to understand, modify, test,
                    operate, and extend software without creating
                    disproportionate risk. This checklist combines the major
                    architecture and clean-code concerns into one practical
                    review reference.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiBookOpen />

                    <h2>Use as a review guide</h2>

                    <p>
                        The checklist helps identify questions worth asking
                        during feature work, refactoring, pull-request review,
                        and project cleanup.
                    </p>
                </article>

                <article>
                    <FiTarget />

                    <h2>Focus on maintainability risk</h2>

                    <p>
                        Not every item must produce a change. Use context to
                        decide whether a concern creates real maintenance cost.
                    </p>
                </article>

                <article>
                    <FiCheck />

                    <h2>Prefer practical improvement</h2>

                    <p>
                        The goal is clearer and safer software, not mechanical
                        compliance with every possible design rule.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Quick Health Check</span>

                    <h2>
                        Five questions that reveal many maintainability problems
                    </h2>

                    <p>
                        Before reviewing individual categories, these questions
                        provide a fast signal about the overall health of a
                        codebase.
                    </p>
                </div>

                <div className="healthGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>
                                Can a developer find where a change belongs?
                            </h3>

                            <p>
                                Clear project structure and responsibility
                                boundaries reduce exploration cost.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>
                                Can important behavior be changed without
                                unexpected breakage?
                            </h3>

                            <p>
                                Strong boundaries and useful tests improve
                                confidence during modification.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>
                                Can failures be diagnosed from available
                                information?
                            </h3>

                            <p>
                                Error handling, logging, and observability
                                should provide useful operational context.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>
                                Can dependencies and configuration evolve
                                safely?
                            </h3>

                            <p>
                                External integrations and environment settings
                                should not be scattered through unrelated code.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>05</span>

                        <div>
                            <h3>
                                Can the system grow without unnecessary
                                redesign?
                            </h3>

                            <p>
                                Maintainable architecture supports expected
                                change without speculative complexity.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Full Checklist</span>

                    <h2>Review the codebase category by category</h2>
                </div>

                <div className="checklistSections">
                    {checklistSections.map((section) => {
                        const Icon = section.icon;

                        return (
                            <article
                                className="checklistSection"
                                key={section.title}
                            >
                                <header>
                                    <span className="sectionIcon">
                                        <Icon />
                                    </span>

                                    <h3>{section.title}</h3>
                                </header>

                                <div className="items">
                                    {section.items.map((item) => (
                                        <div className="checkItem" key={item}>
                                            <FiCheck />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Architecture Review</span>

                    <h2>
                        Ask whether the structure matches how the system changes
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Warning signs</span>

                        <pre>
                            <code>{`One small feature change requires:

- Controller update
- Random utility update
- Shared component update
- Database helper update
- Unrelated service update
- Duplicate validation update`}</code>
                        </pre>

                        <p>
                            Scattered changes can reveal weak responsibility
                            boundaries or duplicated knowledge.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Healthier change boundary
                        </span>

                        <pre>
                            <code>{`Feature change:

Order domain
├── validator
├── service
├── repository boundary
└── tests`}</code>
                        </pre>

                        <p>
                            Related change pressure remains closer to one
                            understandable feature or responsibility.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Readability Review</span>

                    <h2>
                        Code should communicate without unnecessary decoding
                    </h2>
                </div>

                <div className="reviewGrid">
                    <article>
                        <strong>Naming</strong>
                        <p>Can intent be understood from identifiers?</p>
                    </article>

                    <article>
                        <strong>Function flow</strong>
                        <p>
                            Can the primary execution path be followed easily?
                        </p>
                    </article>

                    <article>
                        <strong>Conditionals</strong>
                        <p>
                            Are important business decisions named or
                            understandable?
                        </p>
                    </article>

                    <article>
                        <strong>Comments</strong>
                        <p>
                            Do comments add context rather than compensate for
                            unclear code?
                        </p>
                    </article>

                    <article>
                        <strong>Magic values</strong>
                        <p>Are important constants represented meaningfully?</p>
                    </article>

                    <article>
                        <strong>Abstraction level</strong>
                        <p>
                            Does a function avoid mixing unrelated high and
                            low-level details?
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Change Safety</span>

                    <h2>
                        Maintainable code should make change understandable and
                        verifiable
                    </h2>
                </div>

                <div className="changeFlow">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Understand existing behavior</h3>

                            <p>
                                Know the current contract before changing
                                implementation or requirements.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Identify the correct boundary</h3>

                            <p>
                                Change the module that owns the relevant
                                knowledge.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Make the smallest useful change</h3>

                            <p>
                                Avoid unrelated cleanup that unnecessarily
                                expands the review surface.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Verify the result</h3>

                            <p>Run tests, build, and relevant workflows.</p>
                        </div>
                    </article>

                    <article>
                        <span>05</span>

                        <div>
                            <h3>Review surrounding maintainability</h3>

                            <p>
                                Improve nearby structure when it directly
                                reduces future change risk.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Operational Readiness</span>

                    <h2>Maintainability continues after deployment</h2>
                </div>

                <div className="operationsGrid">
                    <article>
                        <FiActivity />

                        <h3>Logging</h3>

                        <p>
                            Important failures and operations can be
                            investigated without exposing secrets.
                        </p>
                    </article>

                    <article>
                        <FiSettings />

                        <h3>Configuration</h3>

                        <p>
                            Runtime settings are validated and environments are
                            predictable.
                        </p>
                    </article>

                    <article>
                        <FiTrendingUp />

                        <h3>Performance</h3>

                        <p>
                            Real bottlenecks can be identified through
                            measurements.
                        </p>
                    </article>

                    <article>
                        <FiShield />

                        <h3>Failure behavior</h3>

                        <p>
                            Dependency failures are handled according to
                            business criticality.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Security Boundary Review
                    </span>

                    <h2>
                        Maintainability includes keeping trusted boundaries
                        obvious
                    </h2>
                </div>

                <div className="securityBox">
                    <FiLock />

                    <div>
                        <h3>
                            Security rules should live where they can actually
                            be enforced.
                        </h3>

                        <p>
                            Browser validation, hidden buttons, or frontend
                            route guards can improve UX but cannot replace
                            authoritative server-side authorization, validation,
                            and secure data access.
                        </p>
                    </div>
                </div>

                <div className="securityGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Check</h3>

                        <ul>
                            <li>
                                Authentication happens on trusted boundaries.
                            </li>
                            <li>Authorization protects actual operations.</li>
                            <li>
                                Inputs are validated before trusted processing.
                            </li>
                            <li>
                                Secrets stay outside source and browser bundles.
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Watch for</h3>

                        <ul>
                            <li>Frontend-only authorization</li>
                            <li>Secrets in configuration committed to Git</li>
                            <li>Sensitive request logging</li>
                            <li>
                                Trusting identifiers without permission checks
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Refactoring Readiness</span>

                    <h2>
                        A healthy system can be improved without uncontrolled
                        risk
                    </h2>
                </div>

                <div className="refactorGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Good signals</h3>

                        <ul>
                            <li>Responsibilities are reasonably localized.</li>
                            <li>Important behavior can be verified.</li>
                            <li>
                                Dependencies are explicit enough to control.
                            </li>
                            <li>Changes can happen incrementally.</li>
                            <li>Build and tests provide fast feedback.</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Risk signals</h3>

                        <ul>
                            <li>No one knows what behavior is intentional.</li>
                            <li>
                                Every module depends on shared global state.
                            </li>
                            <li>Tests require the entire application stack.</li>
                            <li>
                                One change produces unrelated failures
                                everywhere.
                            </li>
                            <li>
                                Large rewrites feel like the only possible
                                option.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Pre-Merge Checklist</span>

                    <h2>Final review before merging a meaningful change</h2>

                    <p>
                        This is a practical short-form checklist for everyday
                        development.
                    </p>
                </div>

                <div className="preMerge">
                    <article>
                        <FiCheck />
                        <p>
                            The change solves the requested problem and no
                            unrelated behavior was intentionally changed.
                        </p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>
                            Names and responsibility boundaries remain
                            understandable.
                        </p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>
                            No unnecessary duplication or abstraction was
                            introduced.
                        </p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>External input is validated where necessary.</p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>Error and failure paths have been considered.</p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>
                            Logging does not expose secrets or add unnecessary
                            noise.
                        </p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>
                            Configuration and environment changes are documented
                            if needed.
                        </p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>
                            Dependencies were not added without a clear reason.
                        </p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>
                            Relevant tests pass and useful new tests were added
                            where appropriate.
                        </p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>The production build succeeds.</p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>README or documentation remains accurate.</p>
                    </article>

                    <article>
                        <FiCheck />
                        <p>
                            Important user workflows have been manually verified
                            when appropriate.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Avoid Checklist Engineering
                    </span>

                    <h2>
                        A checklist supports judgment, it does not replace it
                    </h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            Do not optimize code only to satisfy abstract rules.
                        </h3>

                        <p>
                            A maintainable solution is one that fits its actual
                            system, requirements, team, risk, and expected
                            change. Principles are useful when they improve
                            understanding and reduce cost, not when they produce
                            unnecessary ceremony.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Healthy Codebase</span>

                    <h2>
                        Maintainability is visible in how comfortably the system
                        can change
                    </h2>
                </div>

                <div className="healthyGrid">
                    <article>
                        <FiCode />

                        <h3>Readable</h3>

                        <p>
                            Developers can understand important behavior without
                            excessive decoding.
                        </p>
                    </article>

                    <article>
                        <FiLayers />

                        <h3>Structured</h3>

                        <p>
                            Responsibilities and dependencies have
                            understandable boundaries.
                        </p>
                    </article>

                    <article>
                        <FiShield />

                        <h3>Verifiable</h3>

                        <p>
                            Important behavior can be tested and failures can be
                            diagnosed.
                        </p>
                    </article>

                    <article>
                        <FiRefreshCw />

                        <h3>Changeable</h3>

                        <p>
                            Features and refactoring can happen incrementally
                            without uncontrolled system-wide impact.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Maintainability is the accumulated result of many small
                    design decisions.
                </h2>

                <p>
                    Clear architecture, meaningful names, focused functions,
                    controlled dependencies, strong boundaries, useful tests,
                    accurate documentation, deliberate operations, and
                    incremental refactoring all reduce the cost and risk of
                    future change. Use this checklist as a practical guide, not
                    as a substitute for engineering judgment.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default MaintainabilityChecklist;
