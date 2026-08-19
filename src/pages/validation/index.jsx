import {
    FiAlertTriangle,
    FiCheckCircle,
    FiFilter,
    FiLayers,
    FiShield,
    FiSliders,
    FiTarget,
} from "react-icons/fi";

import * as Styled from "./styled";

const Validation = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiShield />
                    <span>Code Quality</span>
                </div>

                <h1>Validation</h1>

                <p>
                    Validation protects application boundaries by checking
                    whether incoming data has the expected shape, values, and
                    business meaning. Good validation rejects invalid input
                    early and keeps deeper application logic simpler.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiTarget />

                    <h2>Validate at boundaries</h2>

                    <p>
                        Data entering from users, APIs, files, configuration, or
                        external systems should be checked before deeper code
                        relies on it.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Separate kinds of validation</h2>

                    <p>
                        Structural validation and business-rule validation solve
                        different problems and should remain conceptually clear.
                    </p>
                </article>

                <article>
                    <FiShield />

                    <h2>Never trust external input</h2>

                    <p>
                        Client-side validation improves user experience, but
                        trusted enforcement still belongs on the server or
                        authoritative boundary.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Input Boundaries</span>

                    <h2>Validate data where it enters the system</h2>

                    <p>
                        External data should not travel through several layers
                        before the application discovers that it is malformed.
                    </p>
                </div>

                <div className="boundaryGrid">
                    <article>
                        <span>HTTP Requests</span>
                        <p>
                            Body, query parameters, headers, and route
                            parameters.
                        </p>
                    </article>

                    <article>
                        <span>Forms</span>
                        <p>
                            User-entered values before application behavior
                            depends on them.
                        </p>
                    </article>

                    <article>
                        <span>Configuration</span>
                        <p>Environment variables and startup configuration.</p>
                    </article>

                    <article>
                        <span>Files</span>
                        <p>
                            Imported CSV, JSON, images, documents, or uploaded
                            content.
                        </p>
                    </article>

                    <article>
                        <span>External APIs</span>
                        <p>
                            Responses from systems outside the application's
                            control.
                        </p>
                    </article>

                    <article>
                        <span>Messages</span>
                        <p>
                            Events, jobs, queues, WebSocket messages, or other
                            inputs.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Schema Validation</span>

                    <h2>Validate structure before business meaning</h2>

                    <p>
                        Schema validation checks whether data has the expected
                        type, shape, required fields, and basic constraints.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Unchecked input</span>

                        <pre>
                            <code>{`function createUser(data) {
  return userRepository.create({
    name: data.name,
    email: data.email,
    age: data.age,
  });
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Validated shape</span>

                        <pre>
                            <code>{`function validateUserInput(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid user input");
  }

  if (typeof data.name !== "string") {
    throw new Error("Name is required");
  }

  if (typeof data.email !== "string") {
    throw new Error("Email is required");
  }

  return data;
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Business Validation</span>

                    <h2>
                        Valid structure does not guarantee valid business
                        behavior
                    </h2>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Schema rules</h3>

                        <ul>
                            <li>Email must be a string.</li>
                            <li>Quantity must be a number.</li>
                            <li>Required fields must exist.</li>
                            <li>Date must have a valid representation.</li>
                            <li>Array items must match an expected shape.</li>
                        </ul>
                    </article>

                    <article>
                        <FiTarget />

                        <h3>Business rules</h3>

                        <ul>
                            <li>
                                Email must not already belong to another
                                account.
                            </li>
                            <li>Quantity cannot exceed available stock.</li>
                            <li>
                                An order cannot be cancelled after shipment.
                            </li>
                            <li>
                                A discount may require a minimum order value.
                            </li>
                            <li>
                                A user may need permission for an operation.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Frontend vs Backend</span>

                    <h2>
                        Client validation helps users, server validation
                        protects the system
                    </h2>
                </div>

                <div className="clientServerGrid">
                    <article>
                        <span className="typeLabel">Frontend</span>

                        <h3>Immediate feedback</h3>

                        <ul>
                            <li>Required-field hints</li>
                            <li>Format feedback</li>
                            <li>Inline validation messages</li>
                            <li>Prevent obviously incomplete submissions</li>
                        </ul>
                    </article>

                    <article>
                        <span className="typeLabel">Backend</span>

                        <h3>Authoritative enforcement</h3>

                        <ul>
                            <li>Validate every untrusted request</li>
                            <li>Enforce business rules</li>
                            <li>Check permissions</li>
                            <li>Protect storage and downstream systems</li>
                        </ul>
                    </article>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Frontend validation can be bypassed.</h3>

                        <p>
                            Requests can be created outside the browser UI.
                            Server-side validation must not assume the frontend
                            has already protected the data.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Normalization</span>

                    <h2>
                        Normalize representation before applying deeper rules
                    </h2>

                    <p>
                        Equivalent input values should often be converted into a
                        consistent representation before comparison or
                        persistence.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Raw values</span>

                        <pre>
                            <code>{`{
  name: "  Ashish Ranjan  ",
  email: "ASH@EXAMPLE.COM "
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Normalized values</span>

                        <pre>
                            <code>{`const normalizedUser = {
  name: data.name.trim(),
  email: data.email.trim().toLowerCase(),
};`}</code>
                        </pre>
                    </article>
                </div>

                <div className="noteBox">
                    <FiSliders />

                    <div>
                        <h3>Normalization should be intentional.</h3>

                        <p>
                            Do not modify user input blindly. Normalize only
                            where the domain defines equivalent representations.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Fail Fast</span>

                    <h2>
                        Reject invalid input before performing expensive work
                    </h2>
                </div>

                <div className="flow">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Receive input</h3>
                            <p>
                                External data crosses an application boundary.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Validate structure</h3>
                            <p>
                                Check required shape, fields, and basic
                                constraints.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Normalize</h3>
                            <p>
                                Convert equivalent values into a consistent
                                representation.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Apply business rules</h3>
                            <p>Verify domain requirements and permissions.</p>
                        </div>
                    </article>

                    <article>
                        <span>05</span>

                        <div>
                            <h3>Continue processing</h3>
                            <p>
                                Deeper code can now rely on stronger
                                assumptions.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Error Messages</span>

                    <h2>
                        Validation errors should identify what the caller can
                        fix
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Too vague</span>

                        <pre>
                            <code>{`{
  "error": "Invalid request"
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Actionable</span>

                        <pre>
                            <code>{`{
  "errors": {
    "email": "Enter a valid email address",
    "quantity": "Quantity must be at least 1"
  }
}`}</code>
                        </pre>
                    </article>
                </div>

                <div className="messageRules">
                    <article>
                        <strong>Identify the field</strong>
                        <p>Help callers locate the invalid value.</p>
                    </article>

                    <article>
                        <strong>Explain the rule</strong>
                        <p>Describe what condition was not satisfied.</p>
                    </article>

                    <article>
                        <strong>Avoid internal details</strong>
                        <p>
                            Do not expose stack traces or
                            implementation-specific internals.
                        </p>
                    </article>

                    <article>
                        <strong>Keep errors consistent</strong>
                        <p>
                            Use predictable response structures across similar
                            endpoints.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Reusable Validators</span>

                    <h2>Reuse stable rules, not every similar condition</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Repeated rule</span>

                        <pre>
                            <code>{`if (!email.includes("@")) {
  throw new Error("Invalid email");
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Focused validator</span>

                        <pre>
                            <code>{`function validateEmail(email) {
  if (
    typeof email !== "string" ||
    !email.includes("@")
  ) {
    throw new Error(
      "Enter a valid email address",
    );
  }

  return email;
}`}</code>
                        </pre>
                    </article>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Avoid one giant universal validator.</h3>

                        <p>
                            Different workflows can have different rules. Reuse
                            validators where the underlying knowledge is
                            genuinely the same.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Nested Data</span>

                    <h2>Validate important nested structures explicitly</h2>
                </div>

                <div className="nestedBox">
                    <pre>
                        <code>{`{
  "customer": {
    "name": "Ashish",
    "address": {
      "city": "Bengaluru",
      "country": "IN"
    }
  },
  "items": [
    {
      "productId": "p-101",
      "quantity": 2
    }
  ]
}`}</code>
                    </pre>

                    <div className="nestedDetails">
                        <article>
                            <FiCheckCircle />
                            <p>Validate required nested objects.</p>
                        </article>

                        <article>
                            <FiCheckCircle />
                            <p>Validate each relevant collection item.</p>
                        </article>

                        <article>
                            <FiCheckCircle />
                            <p>
                                Reject missing or invalid nested fields clearly.
                            </p>
                        </article>

                        <article>
                            <FiCheckCircle />
                            <p>
                                Keep nested rules close to the concept they
                                validate.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Security Boundary</span>

                    <h2>
                        Validation reduces unsafe assumptions, but it is not the
                        whole security model
                    </h2>
                </div>

                <div className="securityGrid">
                    <article>
                        <FiShield />

                        <h3>Validation helps</h3>

                        <ul>
                            <li>Reject unexpected shapes.</li>
                            <li>Limit accepted values.</li>
                            <li>Enforce allowed lengths and ranges.</li>
                            <li>Reject malformed identifiers.</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Validation does not replace</h3>

                        <ul>
                            <li>Authentication</li>
                            <li>Authorization</li>
                            <li>Safe database APIs</li>
                            <li>Output encoding</li>
                            <li>Rate limiting</li>
                            <li>Secure configuration</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        Configuration Validation
                    </span>

                    <h2>Invalid configuration should fail during startup</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Assumed configuration
                        </span>

                        <pre>
                            <code>{`const port = process.env.PORT;
const apiUrl = process.env.API_URL;`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Validated startup</span>

                        <pre>
                            <code>{`function validateConfig() {
  if (!process.env.API_URL) {
    throw new Error(
      "API_URL is required",
    );
  }

  const port = Number(
    process.env.PORT || 1198,
  );

  if (!Number.isInteger(port)) {
    throw new Error(
      "PORT must be a valid integer",
    );
  }

  return {
    apiUrl: process.env.API_URL,
    port,
  };
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask about validation</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Is external input validated at the boundary?
                        </strong>
                        <p>
                            Reject malformed data before deeper logic relies on
                            it.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Are schema and business rules separated clearly?
                        </strong>
                        <p>
                            Shape validation and domain decisions solve
                            different problems.
                        </p>
                    </article>

                    <article>
                        <strong>Is backend validation authoritative?</strong>
                        <p>Do not trust client-side enforcement alone.</p>
                    </article>

                    <article>
                        <strong>Is normalization intentional?</strong>
                        <p>
                            Normalize only when the domain defines equivalent
                            values.
                        </p>
                    </article>

                    <article>
                        <strong>Are error messages actionable?</strong>
                        <p>
                            Tell callers what is invalid without exposing
                            internals.
                        </p>
                    </article>

                    <article>
                        <strong>Are nested values validated?</strong>
                        <p>Do not validate only the top-level object.</p>
                    </article>

                    <article>
                        <strong>
                            Are shared validators representing shared knowledge?
                        </strong>
                        <p>Avoid premature universal abstractions.</p>
                    </article>

                    <article>
                        <strong>Does invalid configuration fail early?</strong>
                        <p>
                            Startup errors are easier to diagnose than failures
                            deep in runtime behavior.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Validate untrusted data early and keep deeper assumptions
                    strong.
                </h2>

                <p>
                    Good validation establishes clear boundaries around external
                    data. Validate structure first, normalize intentionally,
                    apply business rules explicitly, enforce trusted checks on
                    the authoritative side, and return errors that help callers
                    correct their input.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Validation;
