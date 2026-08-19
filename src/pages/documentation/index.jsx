import {
    FiAlertTriangle,
    FiBookOpen,
    FiCheckCircle,
    FiCode,
    FiFileText,
    FiGitBranch,
    FiMessageSquare,
    FiUsers,
} from "react-icons/fi";

import * as Styled from "./styled";

const Documentation = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiFileText />
                    <span>Knowledge Sharing</span>
                </div>

                <h1>Documentation</h1>

                <p>
                    Good documentation explains the information that code alone
                    cannot communicate efficiently. It should help developers
                    understand how to use, operate, change, and reason about a
                    system without duplicating every implementation detail.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiBookOpen />

                    <h2>Document what developers need to know</h2>

                    <p>
                        Setup steps, architecture decisions, public behavior,
                        important constraints, and operational knowledge are
                        often more valuable than repeating implementation
                        details.
                    </p>
                </article>

                <article>
                    <FiCode />

                    <h2>Let clear code explain the implementation</h2>

                    <p>
                        Good names, focused functions, and understandable
                        structure reduce the need for comments that simply
                        describe what the next line does.
                    </p>
                </article>

                <article>
                    <FiUsers />

                    <h2>Documentation is part of maintainability</h2>

                    <p>
                        Useful documentation reduces onboarding time, preserves
                        important decisions, and helps future developers avoid
                        rediscovering the same information.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Documentation vs Comments
                    </span>

                    <h2>
                        Use each tool for the information it communicates best
                    </h2>

                    <p>
                        Comments live close to code and should explain local
                        context that is not obvious. Documentation usually
                        explains broader usage, behavior, decisions, workflows,
                        and system-level knowledge.
                    </p>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiMessageSquare />

                        <h3>Code Comments</h3>

                        <ul>
                            <li>Explain why unusual logic exists.</li>
                            <li>Describe an important workaround.</li>
                            <li>Document a non-obvious constraint.</li>
                            <li>Warn about behavior that is easy to misuse.</li>
                            <li>
                                Clarify assumptions near the implementation.
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiFileText />

                        <h3>Project Documentation</h3>

                        <ul>
                            <li>Explain how to install and run the project.</li>
                            <li>
                                Describe architecture and major
                                responsibilities.
                            </li>
                            <li>Document public APIs and workflows.</li>
                            <li>Record important technical decisions.</li>
                            <li>Provide examples and operational guidance.</li>
                        </ul>
                    </article>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Comment repeats code
                        </span>

                        <pre>
                            <code>{`// Check if user is active
if (user.isActive) {
  sendNotification(user);
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Comment adds context
                        </span>

                        <pre>
                            <code>{`// Notifications are intentionally skipped
// for imported legacy accounts because their
// email addresses have not been verified.
if (user.isActive && !user.isLegacyImport) {
  sendNotification(user);
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">README</span>

                    <h2>
                        The README should help someone understand and start the
                        project
                    </h2>

                    <p>
                        A README is usually the first documentation developers
                        see. It should explain what the repository contains and
                        provide enough information to begin using it without
                        unnecessary searching.
                    </p>
                </div>

                <div className="readmeGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Project purpose</h3>
                            <p>
                                Explain what the project does and why it exists
                                in a short, accurate introduction.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Features</h3>
                            <p>
                                Summarize the real capabilities implemented by
                                the project.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Technology stack</h3>
                            <p>
                                List the important technologies without turning
                                the README into a package manifest.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Setup and usage</h3>
                            <p>
                                Provide commands and requirements needed to run
                                the project successfully.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>05</span>

                        <div>
                            <h3>Project structure</h3>
                            <p>
                                Explain important folders when the structure is
                                not immediately obvious.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>06</span>

                        <div>
                            <h3>Supporting information</h3>
                            <p>
                                Add screenshots, documentation links, author
                                information, and license details when useful.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">API Documentation</span>

                    <h2>Document the contract that consumers depend on</h2>

                    <p>
                        API documentation should help a consumer understand how
                        to make a valid request, what response to expect, and
                        which failure cases are part of the contract.
                    </p>
                </div>

                <div className="apiBox">
                    <div className="apiExample">
                        <span className="method">POST</span>
                        <code>/api/users</code>
                    </div>

                    <div className="apiDetails">
                        <article>
                            <strong>Purpose</strong>
                            <p>Create a new user.</p>
                        </article>

                        <article>
                            <strong>Request</strong>
                            <pre>
                                <code>{`{
  "name": "Ashish",
  "email": "ashish@example.com"
}`}</code>
                            </pre>
                        </article>

                        <article>
                            <strong>Success</strong>
                            <pre>
                                <code>{`{
  "id": "user-id",
  "name": "Ashish",
  "email": "ashish@example.com"
}`}</code>
                            </pre>
                        </article>

                        <article>
                            <strong>Document expected errors</strong>
                            <p>
                                Include validation failures, authorization
                                requirements, and other known response cases
                                when they are part of the public contract.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Architecture Decisions</span>

                    <h2>
                        Preserve the reason behind important technical choices
                    </h2>

                    <p>
                        Code shows what the system currently does. It may not
                        explain why one approach was selected over another or
                        which constraints shaped the design.
                    </p>
                </div>

                <div className="decisionBox">
                    <div className="decisionIcon">
                        <FiGitBranch />
                    </div>

                    <div>
                        <h3>Architecture Decision Record</h3>

                        <p>
                            An Architecture Decision Record, often shortened to
                            ADR, is a small document that records an important
                            decision and the context behind it.
                        </p>
                    </div>
                </div>

                <div className="decisionGrid">
                    <article>
                        <span className="cardLabel">Context</span>
                        <p>What problem or constraint required a decision?</p>
                    </article>

                    <article>
                        <span className="cardLabel">Decision</span>
                        <p>What approach was selected?</p>
                    </article>

                    <article>
                        <span className="cardLabel">Reasoning</span>
                        <p>
                            Why was this option preferred over the alternatives?
                        </p>
                    </article>

                    <article>
                        <span className="cardLabel">Consequences</span>
                        <p>
                            What tradeoffs or future implications does the
                            decision create?
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Examples</span>

                    <h2>
                        Examples often communicate faster than long explanations
                    </h2>
                </div>

                <div className="exampleValueGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Useful examples</h3>

                        <ul>
                            <li>Common API requests</li>
                            <li>Configuration samples</li>
                            <li>Typical component usage</li>
                            <li>Expected input and output</li>
                            <li>Common command sequences</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Avoid misleading examples</h3>

                        <ul>
                            <li>Examples that no longer compile</li>
                            <li>Old environment variables</li>
                            <li>Deprecated endpoints</li>
                            <li>Features that are not actually implemented</li>
                            <li>
                                Placeholder values presented as real
                                configuration
                            </li>
                        </ul>
                    </article>
                </div>

                <div className="codeExample">
                    <span className="exampleLabel">Small complete example</span>

                    <pre>
                        <code>{`import Button from "./components/button";

const App = () => {
  return (
    <Button onClick={() => console.log("Saved")}>
      Save
    </Button>
  );
};`}</code>
                    </pre>

                    <p>
                        A small complete example shows both the expected API and
                        the normal way a developer is supposed to use it.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Stale Documentation</span>

                    <h2>
                        Incorrect documentation can be worse than missing
                        documentation
                    </h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Documentation is part of the change.</h3>

                        <p>
                            When a feature, command, route, dependency, or
                            architecture decision changes, related documentation
                            should be reviewed in the same work. Outdated
                            instructions quickly reduce trust in the rest of the
                            documentation.
                        </p>
                    </div>
                </div>

                <div className="staleGrid">
                    <article>
                        <strong>Common stale documentation</strong>

                        <ul>
                            <li>Old screenshots</li>
                            <li>Commands that no longer work</li>
                            <li>Removed environment variables</li>
                            <li>Outdated folder structures</li>
                            <li>Old deployment instructions</li>
                            <li>Features that were renamed or removed</li>
                        </ul>
                    </article>

                    <article>
                        <strong>Useful maintenance habit</strong>

                        <ul>
                            <li>Review docs during feature changes.</li>
                            <li>Run documented setup commands periodically.</li>
                            <li>
                                Remove instructions that are no longer required.
                            </li>
                            <li>
                                Keep examples close to real application
                                behavior.
                            </li>
                            <li>
                                Prefer one reliable source over several
                                conflicting ones.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Ownership</span>

                    <h2>Documentation needs someone to care when it changes</h2>
                </div>

                <div className="ownershipGrid">
                    <article>
                        <FiUsers />

                        <h3>Shared responsibility</h3>

                        <p>
                            Developers changing a feature should update the
                            documentation affected by that change instead of
                            leaving documentation cleanup for an undefined
                            future task.
                        </p>
                    </article>

                    <article>
                        <FiGitBranch />

                        <h3>Review documentation with code</h3>

                        <p>
                            Documentation changes can be reviewed alongside
                            implementation changes so incorrect commands,
                            examples, and assumptions are discovered earlier.
                        </p>
                    </article>

                    <article>
                        <FiBookOpen />

                        <h3>Keep the source obvious</h3>

                        <p>
                            Developers should know where the authoritative
                            documentation for setup, architecture, APIs, and
                            operations is maintained.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask when reviewing documentation</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Does the documentation describe real behavior?
                        </strong>

                        <p>
                            Never document a feature, command, or deployment
                            state that does not actually exist.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can a new developer start the project from the
                            README?
                        </strong>

                        <p>
                            Setup documentation should contain the requirements
                            and commands needed for a successful first run.
                        </p>
                    </article>

                    <article>
                        <strong>Are comments explaining useful context?</strong>

                        <p>
                            Comments should add reasoning or constraints instead
                            of repeating obvious code.
                        </p>
                    </article>

                    <article>
                        <strong>Are public contracts documented?</strong>

                        <p>
                            Consumers need accurate input, output, usage, and
                            failure information.
                        </p>
                    </article>

                    <article>
                        <strong>Are important decisions recorded?</strong>

                        <p>
                            Preserve reasoning when future developers would
                            otherwise have to rediscover why a design exists.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Has the documentation changed with the code?
                        </strong>

                        <p>
                            Verify commands, screenshots, examples, and
                            architecture notes whenever the implementation
                            evolves.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Document knowledge that would otherwise be expensive to
                    rediscover.
                </h2>

                <p>
                    Good documentation is accurate, useful, maintainable, and
                    focused on real developer needs. Let clear code explain
                    implementation details, while documentation preserves usage,
                    contracts, decisions, and important context.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Documentation;
