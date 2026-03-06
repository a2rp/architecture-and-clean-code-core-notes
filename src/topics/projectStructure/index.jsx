// src/topics/projectStructure/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiFolder,
    FiLayers,
    FiCheckCircle,
    FiAlertTriangle,
    FiBookOpen,
} from "react-icons/fi";

const ProjectStructure = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.TopBar>
                    <div className="left">
                        <div className="badge">
                            <FiFolder />
                        </div>

                        <div className="titles">
                            <div className="title">Project Structure</div>
                            <div className="subTitle">
                                Organizing code so systems remain easy to
                                navigate
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
                                What project structure means
                            </div>

                            <p>
                                Project structure defines how files and
                                directories are organized in a codebase. A good
                                structure helps developers quickly understand
                                where logic belongs and where new code should be
                                added.
                            </p>
                        </div>

                        <div className="introCard">
                            <div className="introTitle">
                                <FiCheckCircle />
                                Why it matters
                            </div>

                            <p>
                                When projects grow, poor structure causes
                                confusion. Developers spend time searching for
                                files instead of building features. A clear
                                structure keeps systems predictable and easier
                                to maintain.
                            </p>
                        </div>
                    </Styled.IntroRow>

                    <Styled.SectionTitle>
                        Principles of a good project structure
                    </Styled.SectionTitle>

                    <Styled.Grid>
                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Group by responsibility
                            </div>

                            <ul>
                                <li>Separate UI, logic, and data layers</li>
                                <li>Group related features together</li>
                                <li>Keep utilities in a shared location</li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Predictable file locations
                            </div>

                            <ul>
                                <li>
                                    Developers should know where code belongs
                                </li>
                                <li>
                                    Similar features should follow the same
                                    structure
                                </li>
                                <li>
                                    Avoid random files at the root of the
                                    project
                                </li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiCheckCircle />
                                Modular organization
                            </div>

                            <ul>
                                <li>Break systems into smaller modules</li>
                                <li>
                                    Each module should handle a clear feature
                                </li>
                                <li>
                                    Modules reduce coupling between parts of the
                                    system
                                </li>
                            </ul>
                        </div>

                        <div className="itemCard">
                            <div className="itemHead">
                                <FiAlertTriangle />
                                Signs of bad structure
                            </div>

                            <ul>
                                <li>Files with unrelated responsibilities</li>
                                <li>Huge directories containing everything</li>
                                <li>Difficult to find where logic belongs</li>
                            </ul>
                        </div>
                    </Styled.Grid>

                    <Styled.SectionTitle>Example structure</Styled.SectionTitle>

                    <Styled.ExampleCard>
                        <pre className="code">
                            {`src/
  components/
    header/
    footer/
    button/

  pages/
    home/
    dashboard/
    settings/

  services/
    api.js
    authService.js

  utils/
    dateUtils.js
    formatUtils.js

  hooks/
    useAuth.js
    useFetch.js

  styles/
    theme.css`}
                        </pre>
                    </Styled.ExampleCard>

                    <Styled.FooterNote>
                        Practical rule - a new developer should understand your
                        project structure within a few minutes.
                    </Styled.FooterNote>
                </Styled.Body>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default ProjectStructure;
