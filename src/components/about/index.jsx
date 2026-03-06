// src/components/about/index.jsx
import React from "react";
import { Styled } from "./styled";
import {
    FiLayers,
    FiFeather,
    FiBookOpen,
    FiCode,
    FiAlertCircle,
} from "react-icons/fi";

const About = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Header>
                    <h2>
                        <FiLayers />
                        Architecture and Clean Code
                    </h2>
                    <p>
                        Writing software is not only about making code work. It
                        is about designing systems that remain understandable,
                        maintainable, and adaptable as they grow over time.
                    </p>
                </Styled.Header>

                <Styled.Grid>
                    <div className="card">
                        <div className="icon">
                            <FiLayers />
                        </div>
                        <h3>Software Architecture</h3>
                        <p>
                            Architecture describes how different parts of a
                            system are organized and how they communicate with
                            each other. A good architecture keeps complexity
                            manageable and allows systems to scale without
                            collapsing under their own weight.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <FiFeather />
                        </div>
                        <h3>Clean Code</h3>
                        <p>
                            Clean code focuses on readability, clarity, and
                            simplicity. Code should communicate intent clearly
                            so that other developers can understand and extend
                            it without confusion.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <FiCode />
                        </div>
                        <h3>Engineering Discipline</h3>
                        <p>
                            Good software is rarely the result of clever tricks.
                            It is the result of consistent practices such as
                            structured project organization, meaningful naming,
                            proper error handling, and clear documentation.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <FiBookOpen />
                        </div>
                        <h3>Practical Principles</h3>
                        <p>
                            Principles such as SOLID, DRY, and KISS help guide
                            engineers toward simpler and more maintainable
                            designs. These ideas reduce duplication, prevent
                            unnecessary complexity, and make systems easier to
                            evolve.
                        </p>
                    </div>

                    <div className="card wide">
                        <div className="icon">
                            <FiAlertCircle />
                        </div>
                        <h3>Why This Matters</h3>
                        <p>
                            As software grows, poorly structured code becomes
                            difficult to change. Small updates start breaking
                            other features and the system slowly becomes
                            fragile. Good architecture and clean code practices
                            act like structural engineering for software,
                            ensuring that systems remain stable as they expand.
                        </p>
                    </div>
                </Styled.Grid>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default About;
