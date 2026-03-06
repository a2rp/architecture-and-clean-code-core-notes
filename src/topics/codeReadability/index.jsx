// src/topics/codeReadability/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiBookOpen,
    FiEye,
    FiCheckCircle,
    FiAlertTriangle,
    FiCode,
} from "react-icons/fi";

const CodeReadability = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.TopBar>
                    <div className="left">
                        <div className="badge">
                            <FiEye />
                        </div>

                        <div className="titles">
                            <div className="title">Code Readability</div>
                            <div className="subTitle">
                                Writing code that humans can easily understand
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="toggleBtn"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
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
                                <FiBookOpen />
                                What readability means
                            </div>

                            <p>
                                Code readability means writing code so that
                                other developers can quickly understand what it
                                does. Clear code reduces bugs, speeds up
                                development, and makes maintenance easier.
                            </p>
                        </div>

                        <div className="introCard">
                            <div className="introTitle">
                                <FiCheckCircle />
                                Why readability matters
                            </div>

                            <p>
                                In most projects, code is read far more often
                                than it is written. When code is easy to read,
                                debugging, extending features, and onboarding
                                new developers becomes much easier.
                            </p>
                        </div>
                    </Styled.IntroRow>

                    <Styled.SectionTitle>
                        Principles of readable code
                    </Styled.SectionTitle>

                    <Styled.Grid>
                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Use meaningful names
                            </div>

                            <ul>
                                <li>
                                    Variable names should describe their purpose
                                </li>
                                <li>Avoid vague names like data or temp</li>
                                <li>Use consistent naming conventions</li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Keep functions small
                            </div>

                            <ul>
                                <li>Functions should do one clear task</li>
                                <li>Smaller functions are easier to read</li>
                                <li>
                                    Long functions usually hide multiple
                                    responsibilities
                                </li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Maintain consistent formatting
                            </div>

                            <ul>
                                <li>Use consistent indentation</li>
                                <li>Organize code blocks logically</li>
                                <li>Follow a consistent style guide</li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiAlertTriangle />
                                Avoid overly clever code
                            </div>

                            <ul>
                                <li>Clever tricks reduce readability</li>
                                <li>Prefer simple and explicit logic</li>
                                <li>
                                    Code should be understandable at first
                                    glance
                                </li>
                            </ul>
                        </div>
                    </Styled.Grid>

                    <Styled.SectionTitle>Example</Styled.SectionTitle>

                    <Styled.ExampleCard>
                        <div className="exTitle">
                            Poor readability vs clear readability
                        </div>

                        <pre className="code">
                            {`// unclear variable names
function calc(a, b) {
  return a * b;
}

// better naming
function calculateArea(width, height) {
  return width * height;
}`}
                        </pre>
                    </Styled.ExampleCard>

                    <Styled.FooterNote>
                        Practical rule - if someone reading your code has to
                        stop and think too long, the code can probably be made
                        clearer.
                    </Styled.FooterNote>
                </Styled.Body>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default CodeReadability;
