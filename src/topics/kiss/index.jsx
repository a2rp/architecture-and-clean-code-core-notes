// src/topics/kiss/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiFeather,
    FiAlertTriangle,
    FiCheckCircle,
    FiCode,
    FiBookOpen,
} from "react-icons/fi";

const KISS = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.TopBar>
                    <div className="left">
                        <div className="badge">
                            <FiFeather />
                        </div>

                        <div className="titles">
                            <div className="title">KISS</div>
                            <div className="subTitle">
                                Keep It Simple - avoid unnecessary complexity
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
                                What KISS means
                            </div>

                            <p>
                                KISS stands for "Keep It Simple". The idea is
                                that systems should be designed as simply as
                                possible. Complex designs create hidden bugs,
                                confusing code, and difficult maintenance.
                            </p>
                        </div>

                        <div className="introCard">
                            <div className="introTitle">
                                <FiCheckCircle />
                                Why simplicity matters
                            </div>

                            <p>
                                Simple code is easier to read, easier to debug,
                                and easier to extend. In real software projects,
                                clarity usually beats cleverness.
                            </p>
                        </div>
                    </Styled.IntroRow>

                    <Styled.SectionTitle>
                        Practical KISS guidelines
                    </Styled.SectionTitle>

                    <Styled.Grid>
                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Prefer clarity over clever tricks
                            </div>

                            <ul>
                                <li>Write code that is easy to understand</li>
                                <li>
                                    Avoid overly clever one-line expressions
                                </li>
                                <li>
                                    Future developers should understand code
                                    quickly
                                </li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Avoid premature abstraction
                            </div>

                            <ul>
                                <li>
                                    Do not create generic frameworks too early
                                </li>
                                <li>
                                    Wait until patterns become clear before
                                    abstracting
                                </li>
                                <li>
                                    Simple duplication is sometimes better than
                                    bad abstraction
                                </li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Prefer small readable functions
                            </div>

                            <ul>
                                <li>Functions should do one simple thing</li>
                                <li>Short functions improve readability</li>
                                <li>
                                    Clear naming is more valuable than comments
                                </li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiAlertTriangle />
                                Signs your code is too complex
                            </div>

                            <ul>
                                <li>Functions with too many parameters</li>
                                <li>Nested condition blocks everywhere</li>
                                <li>Hard to explain logic in plain language</li>
                            </ul>
                        </div>
                    </Styled.Grid>

                    <Styled.SectionTitle>Example</Styled.SectionTitle>

                    <Styled.ExampleCard>
                        <div className="exTitle">
                            Complex solution vs simple solution
                        </div>

                        <pre className="code">
                            {`// overly complex
function isEven(n) {
  return !!(n % 2 === 0 ? true : false);
}

// simple and clear
function isEven(n) {
  return n % 2 === 0;
}`}
                        </pre>
                    </Styled.ExampleCard>

                    <Styled.FooterNote>
                        Practical rule - if two solutions solve the same
                        problem, prefer the simpler one.
                    </Styled.FooterNote>
                </Styled.Body>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default KISS;
