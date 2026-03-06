// App.jsx
import React, { useRef } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import GoToTop from "./components/goToTop";
import DesignPrinciples from "./topics/designPrinciples";
import SOLID from "./topics/solid";
import DRY from "./topics/dry";
import KISS from "./topics/kiss";
import ProjectStructure from "./topics/projectStructure";
import CodeReadability from "./topics/codeReadability";
import ErrorHandlingStrategy from "./topics/errorHandlingStrategy";
import Documentation from "./topics/documentation";

const App = () => {
    const scrollerRef = useRef(null);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>

            <Styled.Main ref={scrollerRef}>
                <div className="contentWrapper">
                    <About />

                    <DesignPrinciples />
                    <SOLID />
                    <DRY />
                    <KISS />
                    <ProjectStructure />
                    <CodeReadability />
                    <ErrorHandlingStrategy />
                    <Documentation />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>

            <GoToTop scrollerRef={scrollerRef} />
        </Styled.Wrapper>
    );
};

export default App;
