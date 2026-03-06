// src/topics/dry/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCopy,
    FiLayers,
    FiAlertTriangle,
    FiCheckCircle,
    FiTool,
    FiBookOpen,
    FiCode,
} from "react-icons/fi";

const DRY = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                title: "What DRY really means",
                icon: <FiBookOpen />,
                points: [
                    "DRY means avoid duplication of knowledge, not just duplicated lines",
                    "If the same rule exists in multiple places, future changes will break something",
                    "Good DRY creates one source of truth for a behavior",
                ],
            },
            {
                title: "Where duplication hides in real projects",
                icon: <FiLayers />,
                points: [
                    "Validation rules repeated in UI and API without a shared contract",
                    "API URLs, headers, and error mapping repeated across multiple files",
                    "Copy pasted UI blocks for cards, tables, empty states, modals",
                    "Business rules duplicated in controllers and services",
                ],
            },
            {
                title: "When DRY is worth doing",
                icon: <FiCheckCircle />,
                points: [
                    "When a rule changes often and multiple places must be updated",
                    "When duplication causes bugs and inconsistent behavior",
                    "When a shared utility improves clarity instead of hiding logic",
                ],
            },
            {
                title: "When NOT to DRY",
                icon: <FiAlertTriangle />,
                points: [
                    "When two pieces of code only look similar today but may diverge tomorrow",
                    "When abstraction creates a hard to understand mega helper",
                    "When you end up passing 12 options into one generic function",
                ],
            },
            {
                title: "A practical DRY checklist",
                icon: <FiTool />,
                points: [
                    "Is this duplicated behavior or duplicated text",
                    "Will these two places always change together",
                    "Can I extract a small named function without adding complexity",
                    "Will a beginner teammate understand this extraction quickly",
                ],
            },
        ];
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.TopBar>
                    <div className="left">
                        <div className="badge">
                            <FiCopy />
                        </div>

                        <div className="titles">
                            <div className="title">DRY</div>
                            <div className="subTitle">
                                Don't Repeat Yourself - avoid duplicated
                                knowledge
                            </div>
                        </div>

                        <div className="pillRow">
                            <div className="stat">
                                <span className="sIcon">
                                    <FiCode />
                                </span>
                                <span>Maintainable</span>
                            </div>
                            <div className="stat">
                                <span className="sIcon">
                                    <FiBookOpen />
                                </span>
                                <span>One Truth</span>
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
                        <span
                            className="toggleIcon"
                            data-open={open ? "true" : "false"}
                        >
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
                                DRY is not "never repeat code". DRY is about
                                avoiding multiple sources of truth. If you copy
                                paste the same business rule into 3 places,
                                future changes will create inconsistencies.
                            </p>
                        </div>

                        <div className="introCard">
                            <div className="introTitle">
                                <FiCheckCircle />
                                Simple definition
                            </div>
                            <p>
                                If the same rule exists in multiple places, you
                                have duplication of knowledge. DRY asks you to
                                keep that rule in one clear place.
                            </p>
                        </div>
                    </Styled.IntroRow>

                    <Styled.SectionTitle>
                        DRY concepts in plain language
                    </Styled.SectionTitle>

                    <Styled.Grid>
                        {sections.map((s) => (
                            <div className="itemCard" key={s.title}>
                                <div className="itemHead">
                                    <span className="i">{s.icon}</span>
                                    <span className="t">{s.title}</span>
                                </div>

                                <ul className="dashList">
                                    {s.points.map((p) => (
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
                                Example 1 - duplication in validation
                            </div>
                            <div className="exText">
                                When validation rules are copy pasted across
                                multiple handlers, updates become risky. Extract
                                a small function with a clear name.
                            </div>

                            <pre className="code">
                                {`// not ideal - repeated checks across files
function validateEmail(email) {
  if (!email) throw new Error("Email is required");
  if (!email.includes("@")) throw new Error("Email is invalid");
}

function validateSignup(values) {
  if (!values.email) throw new Error("Email is required");
  if (!values.email.includes("@")) throw new Error("Email is invalid");
  if (!values.password) throw new Error("Password is required");
}

// better - one source of truth
function requireValidEmail(email) {
  if (!email) throw new Error("Email is required");
  if (!email.includes("@")) throw new Error("Email is invalid");
  return email.trim().toLowerCase();
}

function validateSignup(values) {
  const email = requireValidEmail(values.email);
  if (!values.password) throw new Error("Password is required");
  return { ...values, email };
}`}
                            </pre>
                        </div>

                        <div className="exCard">
                            <div className="exTitle">
                                Example 2 - duplication in API calls
                            </div>
                            <div className="exText">
                                If every file repeats base URL, headers, and
                                error mapping, changes become painful. Keep one
                                API layer.
                            </div>

                            <pre className="code">
                                {`// not ideal - repeated API setup everywhere
async function fetchUsers() {
  const res = await fetch("https://api.site.com/users", {
    headers: { Authorization: "Bearer " + token }
  });
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

// better - central API helper
async function apiGet(path) {
  const res = await fetch(API_BASE + path, { headers: buildHeaders() });
  if (!res.ok) throw mapError(res);
  return res.json();
}

async function fetchUsers() {
  return apiGet("/users");
}`}
                            </pre>
                        </div>

                        <div className="exCard">
                            <div className="exTitle">
                                Example 3 - "false DRY" over abstraction
                            </div>
                            <div className="exText">
                                DRY can be misused. If you create one mega
                                helper that accepts too many flags, you are
                                hiding complexity, not removing it.
                            </div>

                            <pre className="code">
                                {`// risky - one mega function with too many options
renderCard(data, { isCompact, isAdmin, showMeta, showActions, showBadge });

// better - a few focused components or functions
renderCompactCard(data);
renderAdminCard(data);
renderDefaultCard(data);`}
                            </pre>
                        </div>
                    </Styled.Examples>

                    <Styled.FooterNote>
                        Practical rule - Extract duplication only when you can
                        name it clearly. If you cannot give it a clear name, you
                        probably do not understand the abstraction yet.
                    </Styled.FooterNote>
                </Styled.Body>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default DRY;
