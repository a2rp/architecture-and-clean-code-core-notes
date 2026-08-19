import { cloneElement, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import Footer from "../footer";
import GoToTop from "../goToTop";

import * as Styled from "./styled";

const SCROLL_THRESHOLD = 300;

const Layout = ({ sidebar, children }) => {
    const location = useLocation();

    const contentRef = useRef(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [showGoToTop, setShowGoToTop] = useState(false);

    const handleMobileMenuOpen = () => {
        setIsMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

    const handleContentScroll = () => {
        const contentElement = contentRef.current;

        if (!contentElement) {
            return;
        }

        setShowGoToTop(contentElement.scrollTop >= SCROLL_THRESHOLD);
    };

    const handleGoToTop = () => {
        const contentElement = contentRef.current;

        if (!contentElement) {
            return;
        }

        contentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const contentElement = contentRef.current;

        if (!contentElement) {
            return;
        }

        contentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        setShowGoToTop(false);
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            document.body.style.overflow = "";

            return undefined;
        }

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";

            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 901px)");

        const handleDesktopChange = (event) => {
            if (event.matches) {
                setIsMobileMenuOpen(false);
            }
        };

        mediaQuery.addEventListener("change", handleDesktopChange);

        return () => {
            mediaQuery.removeEventListener("change", handleDesktopChange);
        };
    }, []);

    const sidebarElement = sidebar
        ? cloneElement(sidebar, {
              onNavigate: handleMobileMenuClose,
          })
        : null;

    return (
        <Styled.Wrapper>
            <aside className="desktopSidebar">{sidebarElement}</aside>

            <header className="mobileHeader">
                <div className="mobileBrand">
                    <span className="mobileBrandTitle">Architecture</span>

                    <span className="mobileBrandText">&amp; Clean Code</span>
                </div>

                <button
                    className="mobileMenuButton"
                    type="button"
                    onClick={handleMobileMenuOpen}
                    aria-label="Open navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    <FiMenu />
                </button>
            </header>

            <div
                className={`mobileOverlay ${isMobileMenuOpen ? "visible" : ""}`}
                onClick={handleMobileMenuClose}
                aria-hidden="true"
            />

            <aside
                id="mobile-navigation"
                className={`mobileSidebar ${isMobileMenuOpen ? "open" : ""}`}
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="mobileSidebarHeader">
                    <div>
                        <strong>Navigation</strong>

                        <span>Architecture &amp; Clean Code</span>
                    </div>

                    <button
                        className="mobileCloseButton"
                        type="button"
                        onClick={handleMobileMenuClose}
                        aria-label="Close navigation menu"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="mobileSidebarContent">{sidebarElement}</div>
            </aside>

            <main
                ref={contentRef}
                className="content"
                onScroll={handleContentScroll}
            >
                <div className="contentBody">
                    <div className="contentInner">{children}</div>

                    <Footer />
                </div>
            </main>

            <GoToTop visible={showGoToTop} onClick={handleGoToTop} />
        </Styled.Wrapper>
    );
};

export default Layout;
