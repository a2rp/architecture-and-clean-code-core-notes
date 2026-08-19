import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    FiGithub,
    FiLayers,
    FiMoon,
    FiSearch,
    FiSun,
    FiUser,
    FiX,
} from "react-icons/fi";

import { navigationGroups } from "../../data/navigation";

import * as Styled from "./styled";

const THEME_STORAGE_KEY = "architecture-clean-code-theme";

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const Sidebar = ({ onNavigate = () => {} }) => {
    const location = useLocation();

    const activeLinkRef = useRef(null);
    const searchInputRef = useRef(null);

    const [theme, setTheme] = useState(getInitialTheme);

    const [searchText, setSearchText] = useState("");

    const filteredNavigationGroups = useMemo(() => {
        const normalizedSearch = searchText.trim().toLowerCase();

        if (!normalizedSearch) {
            return navigationGroups;
        }

        return navigationGroups
            .map((group) => {
                const groupMatches = group.title
                    .toLowerCase()
                    .includes(normalizedSearch);

                const matchingItems = groupMatches
                    ? group.items
                    : group.items.filter((item) =>
                          item.label.toLowerCase().includes(normalizedSearch),
                      );

                return {
                    ...group,
                    items: matchingItems,
                };
            })
            .filter((group) => group.items.length > 0);
    }, [searchText]);

    const hasSearchResults = filteredNavigationGroups.length > 0;

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    useEffect(() => {
        if (searchText.trim()) {
            return undefined;
        }

        const activeLink = activeLinkRef.current;

        if (!activeLink) {
            return undefined;
        }

        const frameId = window.requestAnimationFrame(() => {
            activeLink.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, [location.pathname, searchText]);

    const handleThemeToggle = () => {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
        );
    };

    const handleNavigate = () => {
        onNavigate();
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchClear = () => {
        setSearchText("");

        searchInputRef.current?.focus();
    };

    return (
        <Styled.Wrapper>
            <div className="top">
                <NavLink
                    className="brand"
                    to="/"
                    onClick={handleNavigate}
                    aria-label="Architecture and Clean Code home"
                >
                    <span className="brandIcon">
                        <FiLayers />
                    </span>

                    <span className="brandContent">
                        <strong className="brandTitle">
                            Architecture
                            <span>&amp; Clean Code</span>
                        </strong>

                        <span className="brandText">Core Notes</span>
                    </span>
                </NavLink>

                <p className="intro">
                    Practical notes for designing software that stays
                    understandable, maintainable, and adaptable.
                </p>
            </div>

            <div className="searchSection">
                <div className={`searchBox ${searchText ? "hasValue" : ""}`}>
                    <span className="searchIcon" aria-hidden="true">
                        <FiSearch />
                    </span>

                    <input
                        ref={searchInputRef}
                        type="search"
                        value={searchText}
                        onChange={handleSearchChange}
                        placeholder="Search topics..."
                        aria-label="Search topics"
                        autoComplete="off"
                        spellCheck="false"
                    />

                    {searchText && (
                        <button
                            className="clearSearchButton"
                            type="button"
                            onClick={handleSearchClear}
                            aria-label="Clear topic search"
                            title="Clear search"
                        >
                            <FiX />
                        </button>
                    )}
                </div>
            </div>

            <nav
                className="navigation"
                aria-label="Architecture and Clean Code topics"
            >
                {hasSearchResults ? (
                    filteredNavigationGroups.map((group) => (
                        <section className="menuGroup" key={group.title}>
                            <p className="menuTitle">{group.title}</p>

                            <div className="menuItems">
                                {group.items.map((item) => {
                                    const Icon = item.icon;

                                    const isCurrentRoute =
                                        location.pathname === item.path;

                                    return (
                                        <NavLink
                                            key={item.path}
                                            ref={
                                                isCurrentRoute
                                                    ? activeLinkRef
                                                    : null
                                            }
                                            to={item.path}
                                            end={item.end}
                                            onClick={handleNavigate}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "menuLink active"
                                                    : "menuLink"
                                            }
                                        >
                                            <span className="menuIcon">
                                                <Icon />
                                            </span>

                                            <span className="menuText">
                                                {item.label}
                                            </span>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </section>
                    ))
                ) : (
                    <div className="noResults">
                        <FiSearch />

                        <strong>No topics found</strong>

                        <p>Try another keyword or clear the search.</p>

                        <button type="button" onClick={handleSearchClear}>
                            Clear search
                        </button>
                    </div>
                )}
            </nav>

            <div className="bottom">
                <button
                    className="themeButton"
                    type="button"
                    onClick={handleThemeToggle}
                    aria-label={`Switch to ${
                        theme === "dark" ? "light" : "dark"
                    } theme`}
                >
                    <span className="themeIcon">
                        {theme === "dark" ? <FiSun /> : <FiMoon />}
                    </span>

                    <span className="themeText">
                        {theme === "dark" ? "Light theme" : "Dark theme"}
                    </span>

                    <span
                        className={`themeSwitch ${
                            theme === "dark" ? "active" : ""
                        }`}
                        aria-hidden="true"
                    >
                        <span />
                    </span>
                </button>

                <div className="links">
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiUser />
                        <span>Portfolio</span>
                    </a>

                    <a
                        href="https://github.com/a2rp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub />
                        <span>GitHub</span>
                    </a>
                </div>

                <p className="footerText">
                    Created by{" "}
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </p>
            </div>
        </Styled.Wrapper>
    );
};

export default Sidebar;
