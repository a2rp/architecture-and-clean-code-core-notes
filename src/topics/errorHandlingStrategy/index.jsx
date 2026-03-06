// src/topics/errorHandlingStrategy/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiAlertTriangle,
    FiCheckCircle,
    FiShield,
    FiCode,
    FiBookOpen,
} from "react-icons/fi";

const ErrorHandlingStrategy = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.TopBar>
                    <div className="left">
                        <div className="badge">
                            <FiAlertTriangle />
                        </div>

                        <div className="titles">
                            <div className="title">Error Handling Strategy</div>
                            <div className="subTitle">
                                Designing systems that behave safely when things
                                go wrong
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
                                What error handling means
                            </div>

                            <p>
                                Error handling is the process of detecting,
                                reporting, and responding to unexpected
                                situations in software. A good strategy ensures
                                systems remain stable and predictable even when
                                failures occur.
                            </p>
                        </div>

                        <div className="introCard">
                            <div className="introTitle">
                                <FiCheckCircle />
                                Why it matters
                            </div>

                            <p>
                                Without proper error handling, applications may
                                crash, produce incorrect results, or hide
                                important failures. A clear strategy helps
                                developers detect problems early and recover
                                safely.
                            </p>
                        </div>
                    </Styled.IntroRow>

                    <Styled.SectionTitle>
                        Principles of good error handling
                    </Styled.SectionTitle>

                    <Styled.Grid>
                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Fail clearly
                            </div>

                            <ul>
                                <li>
                                    Errors should communicate what went wrong
                                </li>
                                <li>
                                    Avoid silent failures that hide problems
                                </li>
                                <li>Use clear error messages</li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Handle errors close to the source
                            </div>

                            <ul>
                                <li>Validate inputs early</li>
                                <li>Catch errors where recovery is possible</li>
                                <li>Prevent invalid data from spreading</li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Use centralized handling
                            </div>

                            <ul>
                                <li>
                                    Applications should have a global error
                                    handler
                                </li>
                                <li>
                                    Logging and monitoring should capture
                                    failures
                                </li>
                                <li>
                                    Avoid repeating try-catch logic everywhere
                                </li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiShield />
                                Protect system stability
                            </div>

                            <ul>
                                <li>Never expose sensitive data in errors</li>
                                <li>
                                    Prevent crashes from propagating through the
                                    system
                                </li>
                                <li>Provide fallback behavior when possible</li>
                            </ul>
                        </div>
                    </Styled.Grid>

                    <Styled.SectionTitle>Example</Styled.SectionTitle>

                    <Styled.ExampleCard>
                        <div className="exTitle">
                            Poor error handling vs better error handling
                        </div>

                        <pre className="code">
                            {`// poor error handling
function getUser(id) {
  return database.findUser(id);
}

// improved error handling
function getUser(id) {
  if (!id) {
    throw new Error("User id is required");
  }

  const user = database.findUser(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}`}
                        </pre>
                    </Styled.ExampleCard>

                    <Styled.FooterNote>
                        Practical rule - errors should be predictable,
                        informative, and safely handled so the system remains
                        stable.
                    </Styled.FooterNote>
                </Styled.Body>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default ErrorHandlingStrategy;
