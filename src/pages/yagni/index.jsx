import {
    FiAlertTriangle,
    FiCheckCircle,
    FiClock,
    FiLayers,
    FiTarget,
    FiZap,
} from "react-icons/fi";

import * as Styled from "./styled";

const Yagni = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiTarget />
                    <span>Design Principle</span>
                </div>

                <h1>YAGNI</h1>

                <p>
                    YAGNI means You Aren&apos;t Gonna Need It. The principle
                    encourages developers to avoid building features,
                    abstractions, flexibility, or infrastructure before there is
                    a real requirement for them.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiClock />

                    <h2>Build for current requirements</h2>

                    <p>
                        Solve the problem that actually exists instead of
                        spending time on hypothetical future cases that may
                        never become necessary.
                    </p>
                </article>

                <article>
                    <FiLayers />

                    <h2>Every extra layer has a cost</h2>

                    <p>
                        Unused abstractions still need to be understood, tested,
                        maintained, documented, and kept compatible with future
                        changes.
                    </p>
                </article>

                <article>
                    <FiZap />

                    <h2>Delay decisions when useful</h2>

                    <p>
                        Waiting until requirements become clearer often leads to
                        better design because decisions are based on real
                        information instead of guesses.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Meaning</span>

                    <h2>Do not solve problems that do not exist yet</h2>

                    <p>
                        YAGNI does not mean ignoring the future. It means
                        avoiding speculative work whose value is uncertain and
                        whose complexity is paid immediately.
                    </p>
                </div>

                <div className="compareGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Build now</h3>

                        <ul>
                            <li>Current required behavior</li>
                            <li>Known validation rules</li>
                            <li>Real performance requirements</li>
                            <li>Existing integration needs</li>
                            <li>Confirmed user workflows</li>
                        </ul>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Delay until needed</h3>

                        <ul>
                            <li>Hypothetical future integrations</li>
                            <li>Unused configuration options</li>
                            <li>Generic abstractions with one consumer</li>
                            <li>
                                Scaling infrastructure without current demand
                            </li>
                            <li>Features requested by nobody</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Example</span>

                    <h2>Do not generalize a simple requirement too early</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Speculative design</span>

                        <pre>
                            <code>{`class NotificationFactory {
  create(type) {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SmsNotification();
      case "push":
        return new PushNotification();
    }
  }
}`}</code>
                        </pre>

                        <p>
                            If the application currently supports only email,
                            designing SMS and push abstractions in advance
                            creates code for requirements that do not yet exist.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Current requirement
                        </span>

                        <pre>
                            <code>{`function sendWelcomeEmail(user) {
  return emailService.send({
    to: user.email,
    template: "welcome",
  });
}`}</code>
                        </pre>

                        <p>
                            The implementation directly solves the current need.
                            A broader abstraction can be introduced later if
                            another real notification channel appears.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Speculative Complexity</span>

                    <h2>Future-proofing can become present-day complexity</h2>
                </div>

                <div className="costGrid">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>More concepts to understand</h3>
                            <p>
                                Every unused abstraction increases the amount of
                                architecture a developer must learn.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>More code to maintain</h3>
                            <p>
                                Unused branches, interfaces, adapters, and
                                configuration still evolve with the rest of the
                                system.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>More assumptions about the future</h3>
                            <p>
                                Early abstractions often encode guesses that
                                become incorrect once real requirements arrive.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>More work before user value</h3>
                            <p>
                                Time spent building hypothetical capability
                                delays the behavior that is actually required
                                today.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">YAGNI and Architecture</span>

                    <h2>
                        Design for change without implementing every possible
                        change
                    </h2>

                    <p>
                        Good architecture can preserve clear boundaries and
                        responsibilities while still avoiding unused features
                        and premature abstractions.
                    </p>
                </div>

                <div className="architectureBox">
                    <div className="architectureIcon">
                        <FiLayers />
                    </div>

                    <div>
                        <h3>Keep the design understandable and adaptable.</h3>

                        <p>
                            You can separate responsibilities, use clear
                            interfaces where they provide current value, and
                            keep modules focused without creating an entire
                            extension system for requirements that are only
                            imagined.
                        </p>
                    </div>
                </div>

                <div className="principlesGrid">
                    <article>
                        <strong>Good boundary</strong>

                        <p>
                            Separate database access from business logic because
                            those are already distinct responsibilities.
                        </p>
                    </article>

                    <article>
                        <strong>Premature boundary</strong>

                        <p>
                            Build five storage adapters when the application
                            currently uses one database and has no requirement
                            to support another.
                        </p>
                    </article>

                    <article>
                        <strong>Useful configuration</strong>

                        <p>
                            Configure an API URL because development and
                            production already use different endpoints.
                        </p>
                    </article>

                    <article>
                        <strong>Speculative configuration</strong>

                        <p>
                            Add dozens of switches for deployment modes that do
                            not currently exist.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">When to Add Complexity</span>

                    <h2>
                        Complexity becomes justified when the requirement
                        becomes real
                    </h2>
                </div>

                <div className="triggerList">
                    <article>
                        <FiCheckCircle />

                        <div>
                            <h3>A second real use case appears</h3>
                            <p>
                                Repeated behavior now provides evidence for a
                                useful abstraction.
                            </p>
                        </div>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <div>
                            <h3>A dependency needs to be replaceable</h3>
                            <p>
                                A real testing, deployment, or integration
                                requirement may justify a boundary.
                            </p>
                        </div>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <div>
                            <h3>Current performance is insufficient</h3>
                            <p>
                                Measurements can justify optimization when the
                                current implementation no longer meets
                                requirements.
                            </p>
                        </div>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <div>
                            <h3>A feature is actually required</h3>
                            <p>
                                Confirmed user or business needs provide a clear
                                reason to add capability.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">
                        YAGNI vs Short-Term Thinking
                    </span>

                    <h2>YAGNI does not mean creating disposable code</h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>Keep current code maintainable.</h3>

                        <p>
                            Avoiding speculative work does not justify unclear
                            naming, duplicated business rules, missing
                            validation, mixed responsibilities, or fragile code.
                            Build today's requirement well, but do not build
                            tomorrow's requirement before it exists.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Decision Guide</span>

                    <h2>
                        Questions to ask before building something for the
                        future
                    </h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>
                            Is this required by a current user or business need?
                        </strong>

                        <p>
                            If not, identify what concrete evidence justifies
                            building it now.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does a real second use case already exist?
                        </strong>

                        <p>
                            One implementation is often too little information
                            for a useful general abstraction.
                        </p>
                    </article>

                    <article>
                        <strong>What does this flexibility cost today?</strong>

                        <p>
                            Consider additional files, concepts, tests,
                            configuration, and maintenance.
                        </p>
                    </article>

                    <article>
                        <strong>Can this decision safely be made later?</strong>

                        <p>
                            Delaying reversible decisions can provide better
                            information without meaningful risk.
                        </p>
                    </article>

                    <article>
                        <strong>Am I optimizing without evidence?</strong>

                        <p>
                            Performance work should normally be driven by
                            measured bottlenecks or known requirements.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would removing this code affect current
                            functionality?
                        </strong>

                        <p>
                            If nothing currently depends on it, the feature may
                            be speculative.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>
                    Build what is needed now and preserve the ability to evolve
                    later.
                </h2>

                <p>
                    YAGNI reduces speculative complexity by keeping development
                    focused on real requirements. Good design remains clean and
                    adaptable, but additional flexibility should be introduced
                    when evidence shows that it provides real value.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Yagni;
