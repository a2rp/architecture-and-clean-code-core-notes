import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiBookOpen,
    FiBox,
    FiCheckCircle,
    FiCode,
    FiFileText,
    FiGitBranch,
    FiLayers,
    FiTool,
} from "react-icons/fi";

import * as Styled from "./styled";

const topics = [
    {
        title: "Design Principles",
        text: "Core ideas that help software remain structured, understandable, and easier to evolve.",
        path: "/design-principles",
        icon: FiLayers,
    },
    {
        title: "SOLID",
        text: "Five object-oriented design principles that encourage maintainable and flexible code.",
        path: "/solid",
        icon: FiBox,
    },
    {
        title: "DRY",
        text: "Reduce unnecessary duplication by keeping knowledge and behavior in clear reusable places.",
        path: "/dry",
        icon: FiGitBranch,
    },
    {
        title: "KISS",
        text: "Prefer straightforward solutions and avoid complexity that does not provide real value.",
        path: "/kiss",
        icon: FiCheckCircle,
    },
    {
        title: "Project Structure",
        text: "Organize files and responsibilities so the project remains easy to navigate as it grows.",
        path: "/project-structure",
        icon: FiBookOpen,
    },
    {
        title: "Code Readability",
        text: "Write code that clearly communicates intent to both current and future developers.",
        path: "/code-readability",
        icon: FiCode,
    },
    {
        title: "Error Handling",
        text: "Handle failures deliberately so problems are predictable, visible, and easier to diagnose.",
        path: "/error-handling",
        icon: FiTool,
    },
    {
        title: "Documentation",
        text: "Document decisions, behavior, and usage without duplicating information unnecessarily.",
        path: "/documentation",
        icon: FiFileText,
    },
];

const About = () => {
    return (
        <Styled.Wrapper>
            <section className="intro">
                <div className="label">
                    <FiLayers />
                    <span>Architecture & Clean Code</span>
                </div>

                <h1>Build software that stays understandable as it grows.</h1>

                <p className="introText">
                    Writing software is not only about making code work. It is
                    about designing systems that remain understandable,
                    maintainable, and adaptable as they grow over time.
                </p>

                <div className="introActions">
                    <Link className="primaryLink" to="/design-principles">
                        Start with Design Principles
                        <FiArrowRight />
                    </Link>

                    <Link className="secondaryLink" to="/solid">
                        Explore SOLID
                    </Link>
                </div>
            </section>

            <section className="summaryGrid">
                <article className="summaryCard">
                    <FiLayers />

                    <div>
                        <h2>Software Architecture</h2>

                        <p>
                            Architecture describes how different parts of a
                            system are organized and how they communicate with
                            each other. Good architecture keeps complexity
                            manageable as software grows.
                        </p>
                    </div>
                </article>

                <article className="summaryCard">
                    <FiCode />

                    <div>
                        <h2>Clean Code</h2>

                        <p>
                            Clean code focuses on clarity, readability, and
                            simplicity so other developers can understand,
                            maintain, and extend it without unnecessary
                            confusion.
                        </p>
                    </div>
                </article>

                <article className="summaryCard">
                    <FiCheckCircle />

                    <div>
                        <h2>Engineering Discipline</h2>

                        <p>
                            Maintainable software comes from consistent
                            engineering practices such as meaningful naming,
                            focused responsibilities, deliberate error handling,
                            and useful documentation.
                        </p>
                    </div>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Core Topics</span>

                    <h2>Explore the reference</h2>

                    <p>
                        Each topic focuses on a practical principle that helps
                        improve software structure, readability, and long-term
                        maintainability.
                    </p>
                </div>

                <div className="topicGrid">
                    {topics.map((topic) => {
                        const Icon = topic.icon;

                        return (
                            <Link
                                className="topicCard"
                                to={topic.path}
                                key={topic.path}
                            >
                                <div className="topicIcon">
                                    <Icon />
                                </div>

                                <div className="topicContent">
                                    <h3>{topic.title}</h3>
                                    <p>{topic.text}</p>
                                </div>

                                <span className="topicArrow" aria-hidden="true">
                                    <FiArrowRight />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="section principlesSection">
                <div className="sectionHeader">
                    <span className="sectionLabel">Mindset</span>

                    <h2>What good architecture should achieve</h2>
                </div>

                <div className="principles">
                    <article>
                        <strong>Understandability</strong>
                        <p>
                            A developer should be able to understand where
                            responsibilities belong and how major parts of the
                            system interact.
                        </p>
                    </article>

                    <article>
                        <strong>Maintainability</strong>
                        <p>
                            Changes should be possible without repeatedly
                            breaking unrelated areas of the application.
                        </p>
                    </article>

                    <article>
                        <strong>Adaptability</strong>
                        <p>
                            The system should be able to evolve when
                            requirements change without requiring unnecessary
                            rewrites.
                        </p>
                    </article>

                    <article>
                        <strong>Simplicity</strong>
                        <p>
                            Architecture should reduce accidental complexity
                            rather than adding abstractions only for the sake of
                            abstraction.
                        </p>
                    </article>
                </div>
            </section>

            <section className="closing">
                <div>
                    <span className="sectionLabel">Key Idea</span>

                    <h2>Working code is the beginning, not the finish line.</h2>

                    <p>
                        Clean code and thoughtful architecture make software
                        easier to understand today and safer to change tomorrow.
                    </p>
                </div>

                <Link to="/design-principles">
                    Continue learning
                    <FiArrowRight />
                </Link>
            </section>
        </Styled.Wrapper>
    );
};

export default About;
