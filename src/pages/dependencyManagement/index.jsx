import {
    FiAlertTriangle,
    FiBox,
    FiCheckCircle,
    FiGitBranch,
    FiLayers,
    FiPackage,
    FiRefreshCw,
    FiShield,
} from "react-icons/fi";

import * as Styled from "./styled";

const DependencyManagement = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiPackage />
                    <span>Architecture &amp; Maintenance</span>
                </div>

                <h1>Dependency Management</h1>

                <p>
                    Dependency management is the practice of controlling the
                    external libraries, frameworks, packages, and internal
                    modules that an application relies on. Good dependency
                    management reduces unnecessary coupling, keeps upgrades
                    predictable, and limits risk from outdated or unmaintained
                    software.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiPackage />

                    <h2>Know what you depend on</h2>

                    <p>
                        Direct dependencies should exist because the application
                        uses them intentionally, not simply because they were
                        added during experimentation and forgotten.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Control dependency boundaries</h2>

                    <p>
                        Important application behavior should not become tightly
                        coupled to every detail of an external package or
                        service.
                    </p>
                </article>

                <article>
                    <FiShield />

                    <h2>Maintain dependencies deliberately</h2>

                    <p>
                        Upgrades, security fixes, replacements, and removals
                        should be part of normal maintenance rather than
                        emergency work.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Direct vs Transitive</span>

                    <h2>
                        Not every installed package is a dependency you chose
                        directly
                    </h2>

                    <p>
                        A direct dependency is declared by your project. A
                        transitive dependency is installed because one of your
                        direct dependencies relies on it.
                    </p>
                </div>

                <div className="dependencyTree">
                    <div className="rootPackage">
                        <FiBox />
                        <strong>Your Application</strong>
                    </div>

                    <div className="treeGrid">
                        <article>
                            <span className="typeLabel">Direct</span>

                            <h3>react-router-dom</h3>

                            <p>
                                Explicitly declared because the application uses
                                route-based navigation.
                            </p>
                        </article>

                        <article>
                            <span className="typeLabel">Direct</span>

                            <h3>styled-components</h3>

                            <p>
                                Explicitly declared because application styles
                                use the package.
                            </p>
                        </article>

                        <article>
                            <span className="typeLabel">Transitive</span>

                            <h3>Internal dependency</h3>

                            <p>
                                Installed because another package requires it
                                internally.
                            </p>
                        </article>

                        <article>
                            <span className="typeLabel">Transitive</span>

                            <h3>Supporting package</h3>

                            <p>
                                May change when its parent dependency changes
                                even though your project does not import it
                                directly.
                            </p>
                        </article>
                    </div>
                </div>

                <div className="noteBox">
                    <FiGitBranch />

                    <div>
                        <h3>
                            Transitive dependencies still affect the
                            application.
                        </h3>

                        <p>
                            They can contribute security issues, installation
                            size, licensing considerations, or upgrade conflicts
                            even though they are not imported directly by your
                            code.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Version Ranges</span>

                    <h2>Understand what package version ranges permit</h2>
                </div>

                <div className="versionGrid">
                    <article>
                        <strong>Exact</strong>

                        <pre>
                            <code>{`"package": "1.4.2"`}</code>
                        </pre>

                        <p>Requests one exact package version.</p>
                    </article>

                    <article>
                        <strong>Caret</strong>

                        <pre>
                            <code>{`"package": "^1.4.2"`}</code>
                        </pre>

                        <p>
                            Commonly allows compatible updates within the same
                            major version under semantic-versioning conventions.
                        </p>
                    </article>

                    <article>
                        <strong>Tilde</strong>

                        <pre>
                            <code>{`"package": "~1.4.2"`}</code>
                        </pre>

                        <p>
                            Commonly allows patch-level updates within the same
                            minor version.
                        </p>
                    </article>

                    <article>
                        <strong>Broad range</strong>

                        <pre>
                            <code>{`"package": "*"`}</code>
                        </pre>

                        <p>
                            Allows very broad version selection and usually
                            reduces predictability.
                        </p>
                    </article>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            A version range is not a guarantee of compatibility.
                        </h3>

                        <p>
                            Semantic versioning depends on maintainers
                            classifying changes correctly. Lockfiles, tests, and
                            deliberate upgrades remain important.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Lockfiles</span>

                    <h2>Lockfiles make installations more reproducible</h2>

                    <p>
                        Package manifests describe allowed ranges. Lockfiles
                        record the resolved dependency graph used by the
                        project.
                    </p>
                </div>

                <div className="lockGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Commit the lockfile</h3>

                        <p>
                            Applications should normally keep the
                            package-manager lockfile in version control so
                            developers and CI resolve the same dependency graph.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Review lockfile changes</h3>

                        <p>
                            Dependency updates can modify many transitive
                            packages. Large lockfile changes should correspond
                            to intentional package work.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Use consistent package tooling</h3>

                        <p>
                            Mixing different package managers can create
                            competing lockfiles and inconsistent installations.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Regenerate intentionally</h3>

                        <p>
                            Do not delete a lockfile casually just to make an
                            installation problem disappear.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Dependency Boundaries</span>

                    <h2>
                        Keep external package knowledge close to the integration
                        boundary
                    </h2>

                    <p>
                        When an important external dependency spreads its API
                        across the whole codebase, replacing or upgrading it
                        becomes more expensive.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Package details spread everywhere
                        </span>

                        <pre>
                            <code>{`import paymentSdk from "payment-sdk";

async function checkout(order) {
  return paymentSdk.transactions.create({
    amount: order.total,
    currency_code: "INR",
    capture_mode: "instant",
  });
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Focused adapter boundary
                        </span>

                        <pre>
                            <code>{`async function checkout(order) {
  return paymentService.charge({
    amount: order.total,
    currency: "INR",
  });
}`}</code>
                        </pre>

                        <p>
                            Application behavior depends on a meaningful payment
                            operation instead of provider-specific details.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Wrappers and Adapters</span>

                    <h2>
                        Wrap dependencies when the boundary provides real value
                    </h2>
                </div>

                <div className="adapterBox">
                    <pre>
                        <code>{`class PaymentService {
  constructor(paymentClient) {
    this.paymentClient = paymentClient;
  }

  async charge({ amount, currency }) {
    const result =
      await this.paymentClient.createCharge({
        totalAmount: amount,
        currencyCode: currency,
      });

    return {
      id: result.transactionId,
      status: result.status,
    };
  }
}`}</code>
                    </pre>

                    <div className="adapterDetails">
                        <article>
                            <span>01</span>

                            <div>
                                <h3>Translate inputs</h3>
                                <p>
                                    Convert application concepts into
                                    provider-specific formats.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span>02</span>

                            <div>
                                <h3>Translate outputs</h3>
                                <p>
                                    Return stable application concepts instead
                                    of leaking provider response shapes.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span>03</span>

                            <div>
                                <h3>Contain change</h3>
                                <p>
                                    Provider API changes remain closer to one
                                    integration layer.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Do not wrap every dependency mechanically.</h3>

                        <p>
                            A wrapper that simply forwards every method without
                            reducing coupling or translating concepts may add
                            another layer without meaningful benefit.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Dependency Injection</span>

                    <h2>Make important dependencies explicit when useful</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Concrete dependency created inside
                        </span>

                        <pre>
                            <code>{`class ReportService {
  constructor() {
    this.mailer = new EmailProvider();
  }

  async send(report) {
    return this.mailer.send(report);
  }
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Dependency supplied
                        </span>

                        <pre>
                            <code>{`class ReportService {
  constructor(mailer) {
    this.mailer = mailer;
  }

  async send(report) {
    return this.mailer.send(report);
  }
}`}</code>
                        </pre>

                        <p>
                            The service declares what capability it needs
                            without being responsible for constructing a
                            specific provider.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Unnecessary Packages</span>

                    <h2>Every package adds maintenance surface</h2>

                    <p>
                        A package can save substantial engineering effort, but
                        even small dependencies have installation, upgrade,
                        security, and compatibility costs.
                    </p>
                </div>

                <div className="decisionGrid">
                    <article>
                        <strong>What problem does it solve?</strong>

                        <p>
                            The benefit should be clear enough to justify adding
                            another dependency.
                        </p>
                    </article>

                    <article>
                        <strong>Can the platform already do this?</strong>

                        <p>
                            Modern JavaScript, browsers, Node.js, and frameworks
                            already provide many common capabilities.
                        </p>
                    </article>

                    <article>
                        <strong>
                            How much of the package is actually used?
                        </strong>

                        <p>
                            Adding a large library for one trivial operation may
                            be unnecessary.
                        </p>
                    </article>

                    <article>
                        <strong>How stable is the API?</strong>

                        <p>
                            Frequent breaking changes can increase ongoing
                            maintenance.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does it add many transitive dependencies?
                        </strong>

                        <p>
                            A small direct package can still introduce a large
                            dependency graph.
                        </p>
                    </article>

                    <article>
                        <strong>Would removal be difficult?</strong>

                        <p>
                            Deeply spreading a dependency across application
                            code increases switching cost.
                        </p>
                    </article>
                </div>

                <div className="exampleGrid packageExample">
                    <article>
                        <span className="exampleLabel">
                            Package for trivial behavior
                        </span>

                        <pre>
                            <code>{`import isEven from "is-even";

isEven(value);`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Platform language is enough
                        </span>

                        <pre>
                            <code>{`const isEven =
  value % 2 === 0;`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Upgrades</span>

                    <h2>Upgrade in controlled increments</h2>
                </div>

                <div className="upgradeFlow">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Review release information</h3>

                            <p>
                                Understand breaking changes, deprecations,
                                migration steps, and relevant bug fixes.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Update deliberately</h3>

                            <p>
                                Change one package or one related group when
                                practical instead of changing the whole
                                ecosystem blindly.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Run tests and build</h3>

                            <p>
                                Verify important behavior and compilation after
                                dependency changes.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Test relevant workflows</h3>

                            <p>
                                Exercise application areas that rely on the
                                upgraded package.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>05</span>

                        <div>
                            <h3>Commit the dependency graph</h3>

                            <p>
                                Keep manifest and lockfile changes together when
                                they belong to the same upgrade.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Security Updates</span>

                    <h2>Dependency vulnerabilities need context and action</h2>

                    <p>
                        Security advisories should be evaluated according to
                        whether the vulnerable code path is present, reachable,
                        and relevant to your application.
                    </p>
                </div>

                <div className="securityGrid">
                    <article>
                        <FiShield />

                        <h3>Investigate</h3>

                        <ul>
                            <li>Which package is affected?</li>
                            <li>Is it direct or transitive?</li>
                            <li>Which versions contain the fix?</li>
                            <li>
                                Does the application use the vulnerable
                                behavior?
                            </li>
                            <li>Is there a safe upgrade path?</li>
                        </ul>
                    </article>

                    <article>
                        <FiRefreshCw />

                        <h3>Respond</h3>

                        <ul>
                            <li>Upgrade where practical.</li>
                            <li>Replace an unsafe dependency if needed.</li>
                            <li>Remove unused dependencies.</li>
                            <li>Test after changing the dependency graph.</li>
                            <li>
                                Document temporary mitigations when necessary.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Abandoned Dependencies</span>

                    <h2>
                        Maintenance health matters for important dependencies
                    </h2>
                </div>

                <div className="abandonedGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Warning signs</h3>

                        <ul>
                            <li>Long-unresolved critical issues</li>
                            <li>
                                No maintenance activity for an extended period
                            </li>
                            <li>Known security issues without fixes</li>
                            <li>
                                Compatibility problems with supported runtimes
                            </li>
                            <li>
                                Maintainer explicitly marks the project as
                                archived
                            </li>
                        </ul>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Possible responses</h3>

                        <ul>
                            <li>
                                Continue if the dependency remains stable and
                                safe.
                            </li>
                            <li>Reduce coupling before replacement.</li>
                            <li>Move to an actively maintained alternative.</li>
                            <li>Use platform functionality if appropriate.</li>
                            <li>
                                Replace only when the migration benefit
                                justifies the cost.
                            </li>
                        </ul>
                    </article>
                </div>

                <div className="noteBox">
                    <FiAlertTriangle />

                    <div>
                        <h3>
                            Low activity does not automatically mean a package
                            is bad.
                        </h3>

                        <p>
                            Mature packages can require little ongoing change.
                            Evaluate stability, unresolved issues, runtime
                            compatibility, security, and your actual dependency
                            risk together.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Dependency Categories</span>

                    <h2>
                        Runtime and development dependencies serve different
                        roles
                    </h2>
                </div>

                <div className="categoryGrid">
                    <article>
                        <span className="typeLabel">dependencies</span>

                        <h3>Runtime requirements</h3>

                        <p>
                            Packages needed by the application when it executes
                            in its target environment.
                        </p>

                        <pre>
                            <code>{`"dependencies": {
  "react": "...",
  "react-router-dom": "..."
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="typeLabel">devDependencies</span>

                        <h3>Development and build tooling</h3>

                        <p>
                            Packages used for building, testing, linting,
                            bundling, or other development workflows.
                        </p>

                        <pre>
                            <code>{`"devDependencies": {
  "vite": "...",
  "@vitejs/plugin-react": "..."
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask before adding or keeping a package</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>Do we actually use this dependency?</strong>

                        <p>
                            Remove abandoned experiment packages and
                            dependencies that no longer serve the application.
                        </p>
                    </article>

                    <article>
                        <strong>Is this direct or transitive?</strong>

                        <p>
                            Understand whether the project controls the
                            dependency directly or receives it through another
                            package.
                        </p>
                    </article>

                    <article>
                        <strong>Is the version strategy deliberate?</strong>

                        <p>
                            Use version ranges and lockfiles with a clear
                            understanding of their behavior.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is the package isolated behind a useful boundary?
                        </strong>

                        <p>
                            Important external implementation details should not
                            spread unnecessarily through application logic.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can built-in functionality solve the problem?
                        </strong>

                        <p>
                            Avoid adding packages when the platform already
                            provides a clear and maintainable solution.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is the dependency maintained enough for our needs?
                        </strong>

                        <p>
                            Consider security, compatibility, stability, issues,
                            and project lifecycle.
                        </p>
                    </article>

                    <article>
                        <strong>Have important upgrades been tested?</strong>

                        <p>
                            Dependency changes should pass builds, tests, and
                            relevant workflows.
                        </p>
                    </article>

                    <article>
                        <strong>Are known security issues understood?</strong>

                        <p>
                            Evaluate advisories rather than ignoring them or
                            reacting without context.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would removing this package be difficult?
                        </strong>

                        <p>
                            High switching cost can indicate that implementation
                            details have leaked too far into the codebase.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does the lockfile match the intended change?
                        </strong>

                        <p>
                            Unexpected dependency graph changes deserve
                            investigation.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Dependencies are borrowed capability with an ongoing
                    maintenance cost.
                </h2>

                <p>
                    Add packages deliberately, understand direct and transitive
                    dependencies, keep installations reproducible, isolate
                    important external APIs behind useful boundaries, upgrade
                    with tests, respond to security issues with context, and
                    remove dependencies that no longer provide enough value.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default DependencyManagement;
