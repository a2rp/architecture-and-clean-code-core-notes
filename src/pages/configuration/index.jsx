import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCloud,
    FiCode,
    FiFileText,
    FiLock,
    FiSettings,
    FiShield,
    FiSliders,
} from "react-icons/fi";

import * as Styled from "./styled";

const Configuration = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiSettings />
                    <span>Code Quality</span>
                </div>

                <h1>Configuration</h1>

                <p>
                    Configuration controls how an application behaves across
                    different environments without requiring unnecessary code
                    changes. Good configuration is explicit, validated,
                    centralized, secure, and easy to reason about.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiCloud />

                    <h2>Separate environment differences</h2>

                    <p>
                        Development, testing, staging, and production often
                        require different URLs, credentials, ports, limits, or
                        feature settings.
                    </p>
                </article>

                <article>
                    <FiShield />

                    <h2>Validate before runtime</h2>

                    <p>
                        Invalid or missing configuration should ideally fail
                        during startup instead of producing confusing failures
                        later.
                    </p>
                </article>

                <article>
                    <FiSliders />

                    <h2>Keep access centralized</h2>

                    <p>
                        Application modules should depend on a clear
                        configuration contract instead of reading environment
                        variables throughout the codebase.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Environment Configuration
                    </span>

                    <h2>
                        Keep environment differences outside application logic
                    </h2>

                    <p>
                        Code should not be filled with environment-specific
                        branches when the difference can be represented as
                        configuration.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Environment logic spread in code
                        </span>

                        <pre>
                            <code>{`function getApiUrl() {
  if (process.env.NODE_ENV === "production") {
    return "https://api.example.com";
  }

  if (process.env.NODE_ENV === "test") {
    return "http://localhost:5000";
  }

  return "http://localhost:1198";
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Configuration supplied externally
                        </span>

                        <pre>
                            <code>{`const apiUrl = process.env.API_URL;

const config = {
  apiUrl,
};`}</code>
                        </pre>

                        <p>
                            The deployment environment provides the value while
                            application code consumes one stable configuration
                            field.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Environment Variables</span>

                    <h2>
                        Use environment variables for deployment-specific values
                    </h2>
                </div>

                <div className="envGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Good candidates</h3>

                        <ul>
                            <li>Database connection information</li>
                            <li>External API base URLs</li>
                            <li>Server ports</li>
                            <li>Runtime environment names</li>
                            <li>Feature settings</li>
                            <li>Service credentials</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Avoid unnecessary environment values</h3>

                        <ul>
                            <li>
                                Constants that never vary between deployments
                            </li>
                            <li>Business rules that belong in domain logic</li>
                            <li>UI copy that should be version-controlled</li>
                            <li>
                                Values added only to avoid making a design
                                decision
                            </li>
                            <li>Configuration nobody actually changes</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Defaults</span>

                    <h2>Use defaults only when they are genuinely safe</h2>

                    <p>
                        Defaults can simplify local development, but silently
                        falling back for important production settings can hide
                        deployment mistakes.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Reasonable default</span>

                        <pre>
                            <code>{`const port = Number(
  process.env.PORT || 1198,
);`}</code>
                        </pre>

                        <p>
                            A local server port can have a predictable
                            development default.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Dangerous silent fallback
                        </span>

                        <pre>
                            <code>{`const databaseUrl =
  process.env.DATABASE_URL ||
  "mongodb://localhost:27017/app";`}</code>
                        </pre>

                        <p>
                            In production, silently connecting to the wrong
                            database can be much worse than failing startup.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Validation</span>

                    <h2>
                        Convert raw environment values into a trusted
                        configuration object
                    </h2>
                </div>

                <div className="configBox">
                    <pre>
                        <code>{`function loadConfig() {
  const port = Number(
    process.env.PORT || 1198,
  );

  if (!Number.isInteger(port)) {
    throw new Error(
      "PORT must be a valid integer",
    );
  }

  if (!process.env.API_URL) {
    throw new Error(
      "API_URL is required",
    );
  }

  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL is required",
    );
  }

  return {
    port,
    apiUrl: process.env.API_URL,
    databaseUrl: process.env.DATABASE_URL,
    environment:
      process.env.NODE_ENV || "development",
  };
}

export const config = loadConfig();`}</code>
                    </pre>

                    <div className="configDetails">
                        <article>
                            <span>01</span>
                            <div>
                                <h3>Read</h3>
                                <p>Collect raw environment values.</p>
                            </div>
                        </article>

                        <article>
                            <span>02</span>
                            <div>
                                <h3>Parse</h3>
                                <p>Convert strings into required types.</p>
                            </div>
                        </article>

                        <article>
                            <span>03</span>
                            <div>
                                <h3>Validate</h3>
                                <p>Reject missing or invalid values.</p>
                            </div>
                        </article>

                        <article>
                            <span>04</span>
                            <div>
                                <h3>Expose</h3>
                                <p>
                                    Return a stable application configuration
                                    object.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Secrets vs Configuration
                    </span>

                    <h2>Not every configuration value is a secret</h2>
                </div>

                <div className="secretGrid">
                    <article>
                        <FiLock />

                        <h3>Secrets</h3>

                        <ul>
                            <li>API keys</li>
                            <li>Database credentials</li>
                            <li>Private keys</li>
                            <li>Authentication secrets</li>
                            <li>Provider tokens</li>
                        </ul>

                        <p>
                            Secrets require stronger storage, access, and
                            exposure controls.
                        </p>
                    </article>

                    <article>
                        <FiSettings />

                        <h3>Non-secret configuration</h3>

                        <ul>
                            <li>Port numbers</li>
                            <li>Public service URLs</li>
                            <li>Pagination defaults</li>
                            <li>Feature settings</li>
                            <li>Runtime environment</li>
                        </ul>

                        <p>
                            These values may vary by environment without
                            necessarily being confidential.
                        </p>
                    </article>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Do not commit real secrets to the repository.</h3>

                        <p>
                            Keep secret values outside source control. Commit a
                            safe `.env.example` or configuration reference that
                            documents required variable names without real
                            credentials.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Centralized Access</span>

                    <h2>Do not read raw environment variables everywhere</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Scattered access</span>

                        <pre>
                            <code>{`// database.js
process.env.DATABASE_URL;

// server.js
process.env.PORT;

// payment.js
process.env.PAYMENT_API_URL;

// email.js
process.env.EMAIL_API_KEY;`}</code>
                        </pre>

                        <p>
                            Parsing, naming, defaults, and validation become
                            spread across the application.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Central config contract
                        </span>

                        <pre>
                            <code>{`import { config } from "./config";

server.listen(config.port);

connectDatabase(
  config.databaseUrl,
);

paymentClient.configure(
  config.paymentApiUrl,
);`}</code>
                        </pre>

                        <p>
                            Modules consume already-validated values through one
                            clear configuration source.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Feature Flags</span>

                    <h2>
                        Feature flags should control intentional runtime
                        variation
                    </h2>

                    <p>
                        A feature flag can enable or disable behavior without
                        deploying separate code, but every flag adds another
                        possible system state.
                    </p>
                </div>

                <div className="flagBox">
                    <pre>
                        <code>{`const config = {
  features: {
    newCheckout:
      process.env.FEATURE_NEW_CHECKOUT === "true",
  },
};

if (config.features.newCheckout) {
  return renderNewCheckout();
}

return renderCurrentCheckout();`}</code>
                    </pre>
                </div>

                <div className="flagGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Useful for</h3>

                        <ul>
                            <li>Gradual rollout</li>
                            <li>Controlled experiments</li>
                            <li>Temporary operational switches</li>
                            <li>Safe migration between implementations</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Watch for</h3>

                        <ul>
                            <li>Flags that never get removed</li>
                            <li>Many nested flag combinations</li>
                            <li>Business logic hidden behind configuration</li>
                            <li>Unknown production flag state</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Configuration Drift</span>

                    <h2>
                        Environments should not become mysterious variations of
                        the same app
                    </h2>
                </div>

                <div className="driftGrid">
                    <article>
                        <strong>Missing variables</strong>

                        <p>
                            One environment defines values that another
                            environment does not.
                        </p>
                    </article>

                    <article>
                        <strong>Different naming</strong>

                        <p>
                            The same setting uses inconsistent environment
                            variable names.
                        </p>
                    </article>

                    <article>
                        <strong>Undocumented values</strong>

                        <p>
                            Production contains important settings nobody can
                            find in project documentation.
                        </p>
                    </article>

                    <article>
                        <strong>Old configuration</strong>

                        <p>
                            Removed features leave obsolete environment
                            variables behind.
                        </p>
                    </article>

                    <article>
                        <strong>Different defaults</strong>

                        <p>
                            Local behavior differs from production because
                            fallback values do not match.
                        </p>
                    </article>

                    <article>
                        <strong>Manual edits</strong>

                        <p>
                            Runtime settings change without a clear record or
                            review process.
                        </p>
                    </article>
                </div>

                <div className="noteBox">
                    <FiFileText />

                    <div>
                        <h3>Document the configuration contract.</h3>

                        <p>
                            A maintained `.env.example` and project
                            documentation can make required values, optional
                            values, defaults, and expected formats visible to
                            developers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Fail-Fast Startup</span>

                    <h2>
                        Broken configuration should stop the application early
                    </h2>
                </div>

                <div className="startupFlow">
                    <article>
                        <span>01</span>
                        <div>
                            <h3>Load configuration</h3>
                            <p>Read all required runtime values.</p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>
                        <div>
                            <h3>Validate configuration</h3>
                            <p>
                                Check types, required values, formats, and
                                allowed ranges.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>
                        <div>
                            <h3>Initialize dependencies</h3>
                            <p>Connect services using trusted configuration.</p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>
                        <div>
                            <h3>Start accepting work</h3>
                            <p>
                                Only start after critical startup requirements
                                succeed.
                            </p>
                        </div>
                    </article>
                </div>

                <div className="exampleGrid startupExample">
                    <article>
                        <span className="exampleLabel">Late failure</span>

                        <pre>
                            <code>{`app.listen(1198);

// Later...
await connectDatabase(
  process.env.DATABASE_URL,
);`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Fail before serving traffic
                        </span>

                        <pre>
                            <code>{`const config = loadConfig();

await connectDatabase(
  config.databaseUrl,
);

app.listen(config.port);`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Frontend Configuration</span>

                    <h2>Browser configuration must be treated as public</h2>
                </div>

                <div className="frontendBox">
                    <FiAlertTriangle />

                    <div>
                        <h3>
                            Anything shipped to the browser can be inspected.
                        </h3>

                        <p>
                            Frontend build variables are useful for public API
                            URLs, feature settings, and other non-secret values.
                            Private API keys, database passwords, signing
                            secrets, and similar credentials must not be
                            embedded in browser code.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid frontendExample">
                    <article>
                        <span className="exampleLabel">Appropriate</span>

                        <pre>
                            <code>{`const apiUrl =
  import.meta.env.VITE_API_URL;`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Never treat as private
                        </span>

                        <pre>
                            <code>{`const privateSecret =
  import.meta.env.VITE_PRIVATE_SECRET;`}</code>
                        </pre>

                        <p>
                            Prefixing a value for frontend access does not make
                            it secret.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about configuration</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Does this value actually vary by environment?
                        </strong>

                        <p>
                            Do not turn stable application constants into
                            unnecessary runtime configuration.
                        </p>
                    </article>

                    <article>
                        <strong>Is the value validated during startup?</strong>

                        <p>
                            Convert raw strings into trusted application values
                            before deeper code uses them.
                        </p>
                    </article>

                    <article>
                        <strong>Is the default safe?</strong>

                        <p>
                            Required production settings should usually fail
                            rather than silently use an incorrect fallback.
                        </p>
                    </article>

                    <article>
                        <strong>Is this value confidential?</strong>

                        <p>
                            Apply stronger controls to credentials and other
                            secrets.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is configuration accessed through one clear source?
                        </strong>

                        <p>
                            Avoid scattered environment parsing throughout
                            application code.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does this feature flag still need to exist?
                        </strong>

                        <p>
                            Remove temporary flags after their rollout or
                            migration purpose is complete.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Is the configuration contract documented?
                        </strong>

                        <p>
                            Developers should know which variables exist and
                            which are required.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Can the application fail before serving traffic?
                        </strong>

                        <p>
                            Critical configuration problems should be detected
                            before the system begins accepting work.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Turn raw environment values into one trusted configuration
                    contract.
                </h2>

                <p>
                    Good configuration separates environment differences from
                    application behavior, validates required values early,
                    distinguishes secrets from ordinary settings, centralizes
                    access, and avoids unnecessary runtime variation.
                    Configuration should make deployments predictable rather
                    than mysterious.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Configuration;
