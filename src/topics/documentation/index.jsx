// src/topics/documentation/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiBookOpen,
    FiCheckCircle,
    FiAlertTriangle,
    FiFileText,
    FiCode,
} from "react-icons/fi";

const Documentation = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.TopBar>
                    <div className="left">
                        <div className="badge">
                            <FiBookOpen />
                        </div>

                        <div className="titles">
                            <div className="title">Documentation</div>
                            <div className="subTitle">
                                Explaining systems so humans understand how they
                                work
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
                                <FiFileText />
                                What documentation means
                            </div>

                            <p>
                                Documentation explains how software works, why
                                decisions were made, and how developers should
                                use or modify the system. It helps teams
                                understand the structure and behavior of the
                                project.
                            </p>
                        </div>

                        <div className="introCard">
                            <div className="introTitle">
                                <FiCheckCircle />
                                Why documentation matters
                            </div>

                            <p>
                                Without documentation, developers must read
                                large amounts of code just to understand basic
                                concepts. Good documentation reduces confusion,
                                improves collaboration, and speeds up
                                onboarding.
                            </p>
                        </div>
                    </Styled.IntroRow>

                    <Styled.SectionTitle>
                        Types of documentation
                    </Styled.SectionTitle>

                    <Styled.Grid>
                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Project documentation
                            </div>

                            <ul>
                                <li>Explains project purpose and goals</li>
                                <li>Describes system architecture</li>
                                <li>Provides setup and installation steps</li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Code documentation
                            </div>

                            <ul>
                                <li>Comments explaining complex logic</li>
                                <li>Function descriptions</li>
                                <li>API usage details</li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                API documentation
                            </div>

                            <ul>
                                <li>Endpoint descriptions</li>
                                <li>Request and response formats</li>
                                <li>Error handling information</li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiAlertTriangle />
                                Signs of poor documentation
                            </div>

                            <ul>
                                <li>Outdated or incorrect information</li>
                                <li>Missing setup instructions</li>
                                <li>Unexplained design decisions</li>
                            </ul>
                        </div>
                    </Styled.Grid>

                    <Styled.SectionTitle>Example</Styled.SectionTitle>

                    <Styled.ExampleCard>
                        <div className="exTitle">
                            Example function documentation
                        </div>

                        <pre className="code">
                            {`/**
 * Calculates the total price including tax
 *
 * @param {number} price - base product price
 * @param {number} taxRate - tax percentage
 * @returns {number} total price including tax
 */
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}`}
                        </pre>
                    </Styled.ExampleCard>

                    <Styled.FooterNote>
                        Practical rule - if a new developer joins the team, they
                        should understand the system quickly using your
                        documentation.
                    </Styled.FooterNote>
                </Styled.Body>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default Documentation;
