import { cloneElement, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiExternalLink, FiLayers, FiMenu, FiX } from "react-icons/fi";

import Footer from "../footer";
import GoToTop from "../goToTop";

import styles from "./styles.module.css";

const SCROLL_THRESHOLD = 300;

const Layout = ({ sidebar, children }) => {
    const location = useLocation();

    const contentRef = useRef(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [showGoToTop, setShowGoToTop] = useState(false);

    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    const previousScrollTopRef = useRef(0);

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

        const currentScrollTop = contentElement.scrollTop;
        const previousScrollTop = previousScrollTopRef.current;

        if (currentScrollTop <= 0) {
            setIsHeaderHidden(false);
        } else if (currentScrollTop > previousScrollTop) {
            setIsHeaderHidden(true);
        } else if (currentScrollTop < previousScrollTop) {
            setIsHeaderHidden(false);
        }

        previousScrollTopRef.current = currentScrollTop;
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
        setIsHeaderHidden(false);
        previousScrollTopRef.current = 0;
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
        <div className={`${styles.scope} layoutRoot`}>
            <header className={`siteHeader ${isHeaderHidden ? "hidden" : ""}`}>
                <NavLink
                    className="siteBrand"
                    to="/"
                    aria-label="Architecture and Clean Code home"
                >
                    <span className="siteBrandIcon">
                        <FiLayers />
                    </span>

                    <span className="siteBrandContent">
                        <strong>Architecture &amp; Clean Code</strong>
                        <span>Core Notes</span>
                    </span>
                </NavLink>

                <div className="siteHeaderActions">
                    <span className="siteHeaderSummary">
                        Practical software engineering reference
                    </span>

                    <a
                        className="siteHeaderLink"
                        href="https://github.com/a2rp/architecture-and-clean-code-core-notes"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open this project on GitHub"
                        title="Open on GitHub"
                    >
                        <span>GitHub</span>
                        <FiExternalLink />
                    </a>

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
                </div>
            </header>

            <aside className="desktopSidebar">{sidebarElement}</aside>

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
        </div>
    );
};

export default Layout;
