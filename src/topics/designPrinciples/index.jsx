// src/topics/designPrinciples/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCompass,
    FiLayers,
    FiFeather,
    FiTool,
    FiCheckCircle,
    FiAlertTriangle,
    FiBookOpen,
} from "react-icons/fi";

const DesignPrinciples = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                title: "Design principles are guidelines, not laws",
                icon: <FiCompass />,
                points: [
                    "Design principles help you make better trade-offs under pressure",
                    "They reduce chaos in large codebases and teams",
                    "They do not guarantee perfection, they improve odds",
                ],
            },
            {
                title: "Core goals of good design",
                icon: <FiCheckCircle />,
                points: [
                    "Low coupling - parts of the system should depend on each other as little as possible",
                    "High cohesion - a module should do one kind of job clearly",
                    "Clarity - code should explain intent, not just behavior",
                    "Change friendliness - new requirements should not force rewrites everywhere",
                ],
            },
            {
                title: "Common design principles you will use all the time",
                icon: <FiLayers />,
                points: [
                    "Single Responsibility - one module, one reason to change",
                    "Separation of Concerns - UI, business logic, data access should not be mixed",
                    "Encapsulation - hide internal details, expose a small clean API",
                    "Composition over inheritance - build behavior by combining smaller pieces",
                    "Prefer explicitness - make important behavior obvious in code",
                ],
            },
            {
                title: "Naming and boundaries matter more than clever code",
                icon: <FiFeather />,
                points: [
                    "A good name reduces the need for comments",
                    "Clear boundaries reduce bugs and speed up debugging",
                    "Small, predictable functions beat large, magical functions",
                ],
            },
            {
                title: "A simple mental checklist before writing code",
                icon: <FiTool />,
                points: [
                    "What is the responsibility of this file or function",
                    "What should it know and what should it not know",
                    "What can change in future and how to contain that change",
                    "How will a new teammate understand this in 30 seconds",
                ],
            },
        ];
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Card data-open={open ? "true" : "false"}>
                <Styled.TopBar>
                    <div className="left">
                        <div className="badge">
                            <FiBookOpen />
                        </div>
                        <div className="titles">
                            <div className="title">Design Principles</div>
                            <div className="subTitle">
                                The rules of thumb that keep codebases sane as
                                they grow
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="toggleBtn"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-label={open ? "Collapse" : "Expand"}
                        title={open ? "Collapse" : "Expand"}
                    >
                        <span className="toggleIcon">
                            <FiChevronDown />
                        </span>
                        <span className="toggleText">
                            {open ? "Collapse" : "Expand"}
                        </span>
                    </button>
                </Styled.TopBar>

                <Styled.Body data-open={open ? "true" : "false"}>
                    <Styled.IntroRow>
                        <div className="introCard">
                            <div className="introTitle">
                                <FiAlertTriangle />
                                Beginner note
                            </div>
                            <p>
                                Most bugs in real projects are not about syntax.
                                They are caused by unclear responsibilities,
                                hidden coupling, and messy boundaries. Design
                                principles are about preventing that kind of
                                mess early.
                            </p>
                        </div>

                        <div className="introCard">
                            <div className="introTitle">
                                <FiCheckCircle />
                                How to use these notes
                            </div>
                            <p>
                                Read the principles, then look at the examples.
                                Try to apply them to your current project
                                structure. Keep it simple and consistent.
                            </p>
                        </div>
                    </Styled.IntroRow>

                    <Styled.SectionTitle>
                        Key ideas in plain language
                    </Styled.SectionTitle>

                    <Styled.Grid>
                        {items.map((it) => (
                            <div className="itemCard" key={it.title}>
                                <div className="itemHead">
                                    <span className="i">{it.icon}</span>
                                    <span className="t">{it.title}</span>
                                </div>

                                <ul className="list">
                                    {it.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Styled.Grid>

                    <Styled.SectionTitle>Mini examples</Styled.SectionTitle>

                    <Styled.Examples>
                        <div className="exCard">
                            <div className="exTitle">
                                Example 1 - single responsibility
                            </div>
                            <div className="exText">
                                If a function does validation, formatting, and
                                database saving together, it has multiple
                                responsibilities. Split into smaller functions
                                with clear names.
                            </div>
                            <pre className="code">
                                {`// not ideal - too many responsibilities
function createUser(payload) {
  validate(payload);
  const normalized = normalize(payload);
  const user = db.users.insert(normalized);
  auditLog("user_created", user.id);
  return user;
}

// better - clear steps, smaller pieces
function createUser(payload) {
  const input = validateUserInput(payload);
  const data = normalizeUserInput(input);
  const user = saveUser(data);
  logUserCreated(user.id);
  return user;
}`}
                            </pre>
                        </div>

                        <div className="exCard">
                            <div className="exTitle">
                                Example 2 - separation of concerns
                            </div>
                            <div className="exText">
                                UI components should not directly build SQL
                                queries or know database details. Keep UI and
                                data access separate via a service layer.
                            </div>
                            <pre className="code">
                                {`// UI should not do data access details
// better - UI calls a service function

// ui layer
async function handleSave(formValues) {
  await userService.create(formValues);
}

// service layer
const userService = {
  async create(values) {
    const payload = mapUiToApi(values);
    return api.post("/users", payload);
  }
};`}
                            </pre>
                        </div>

                        <div className="exCard">
                            <div className="exTitle">
                                Example 3 - low coupling and clear boundaries
                            </div>
                            <div className="exText">
                                Instead of importing random helpers everywhere,
                                group related code into modules with a small
                                public API.
                            </div>
                            <pre className="code">
                                {`// avoid - many files importing internal helpers directly
import { buildHeaders } from "./auth/internal";
import { parseToken } from "./auth/internal";

// better - module exports a clean API
import { auth } from "./auth";

auth.getHeaders();
auth.isLoggedIn();`}
                            </pre>
                        </div>
                    </Styled.Examples>

                    <Styled.FooterNote>
                        Practical rule - if you are unsure, choose the design
                        that makes the next developer's job easier. That next
                        developer is usually you, in three weeks.
                    </Styled.FooterNote>
                </Styled.Body>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default DesignPrinciples;
