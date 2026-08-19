import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import Loader from "./components/loader";
import Sidebar from "./components/sidebar";

import * as Styled from "./App.styled";

const Home = lazy(() => import("./pages/home"));

const Architecture = lazy(() => import("./pages/architecture"));

const CleanCode = lazy(() => import("./pages/cleanCode"));

const DesignPrinciples = lazy(() => import("./pages/designPrinciples"));

const Solid = lazy(() => import("./pages/solid"));

const Dry = lazy(() => import("./pages/dry"));

const Kiss = lazy(() => import("./pages/kiss"));

const Yagni = lazy(() => import("./pages/yagni"));

const SeparationOfConcerns = lazy(() => import("./pages/separationOfConcerns"));

const CouplingAndCohesion = lazy(() => import("./pages/couplingAndCohesion"));

const Abstraction = lazy(() => import("./pages/abstraction"));

const Encapsulation = lazy(() => import("./pages/encapsulation"));

const CompositionOverInheritance = lazy(
    () => import("./pages/compositionOverInheritance"),
);

const ProjectStructure = lazy(() => import("./pages/projectStructure"));

const Naming = lazy(() => import("./pages/naming"));

const Functions = lazy(() => import("./pages/functions"));

const CodeReadability = lazy(() => import("./pages/codeReadability"));

const ErrorHandling = lazy(() => import("./pages/errorHandling"));

const Validation = lazy(() => import("./pages/validation"));

const Logging = lazy(() => import("./pages/logging"));

const Configuration = lazy(() => import("./pages/configuration"));

const Documentation = lazy(() => import("./pages/documentation"));

const Refactoring = lazy(() => import("./pages/refactoring"));

const CodeSmells = lazy(() => import("./pages/codeSmells"));

const Testing = lazy(() => import("./pages/testing"));

const DependencyManagement = lazy(() => import("./pages/dependencyManagement"));

const Scalability = lazy(() => import("./pages/scalability"));

const MaintainabilityChecklist = lazy(
    () => import("./pages/maintainabilityChecklist"),
);

const App = () => {
    return (
        <Styled.Wrapper>
            <Layout sidebar={<Sidebar />}>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route
                            path="/architecture"
                            element={<Architecture />}
                        />

                        <Route path="/clean-code" element={<CleanCode />} />

                        <Route
                            path="/design-principles"
                            element={<DesignPrinciples />}
                        />

                        <Route path="/solid" element={<Solid />} />

                        <Route path="/dry" element={<Dry />} />

                        <Route path="/kiss" element={<Kiss />} />

                        <Route path="/yagni" element={<Yagni />} />

                        <Route
                            path="/separation-of-concerns"
                            element={<SeparationOfConcerns />}
                        />

                        <Route
                            path="/coupling-and-cohesion"
                            element={<CouplingAndCohesion />}
                        />

                        <Route path="/abstraction" element={<Abstraction />} />

                        <Route
                            path="/encapsulation"
                            element={<Encapsulation />}
                        />

                        <Route
                            path="/composition-over-inheritance"
                            element={<CompositionOverInheritance />}
                        />

                        <Route
                            path="/project-structure"
                            element={<ProjectStructure />}
                        />

                        <Route path="/naming" element={<Naming />} />

                        <Route path="/functions" element={<Functions />} />

                        <Route
                            path="/code-readability"
                            element={<CodeReadability />}
                        />

                        <Route
                            path="/error-handling"
                            element={<ErrorHandling />}
                        />

                        <Route path="/validation" element={<Validation />} />

                        <Route path="/logging" element={<Logging />} />

                        <Route
                            path="/configuration"
                            element={<Configuration />}
                        />

                        <Route
                            path="/documentation"
                            element={<Documentation />}
                        />

                        <Route path="/refactoring" element={<Refactoring />} />

                        <Route path="/code-smells" element={<CodeSmells />} />

                        <Route path="/testing" element={<Testing />} />

                        <Route
                            path="/dependency-management"
                            element={<DependencyManagement />}
                        />

                        <Route path="/scalability" element={<Scalability />} />

                        <Route
                            path="/maintainability-checklist"
                            element={<MaintainabilityChecklist />}
                        />

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Styled.Wrapper>
    );
};

export default App;
