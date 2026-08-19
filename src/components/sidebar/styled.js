import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background: var(--surface-color);
    color: var(--text-color);

    .top {
        flex-shrink: 0;

        padding: 26px 20px 20px;

        border-bottom: 1px solid var(--border-color);
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 12px;

        border-radius: 12px;
    }

    .brandIcon {
        width: 42px;
        height: 42px;

        flex-shrink: 0;

        display: grid;
        place-items: center;

        border: 1px solid var(--border-color);
        border-radius: 11px;

        background: var(--surface-soft-color);
        color: var(--text-color);

        font-size: 1.15rem;

        transition:
            background 160ms ease,
            border-color 160ms ease,
            transform 160ms ease;
    }

    .brand:hover .brandIcon {
        border-color: var(--border-strong-color);
        background: var(--hover-color);
        transform: translateY(-1px);
    }

    .brandContent {
        min-width: 0;

        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .brandTitle {
        display: flex;
        flex-direction: column;

        color: var(--text-color);

        font-size: 0.94rem;
        line-height: 1.25;
        letter-spacing: -0.02em;
    }

    .brandText {
        color: var(--text-muted-color);

        font-size: 0.68rem;

        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .intro {
        margin-top: 18px;

        color: var(--text-soft-color);

        font-size: 0.72rem;
        line-height: 1.65;
    }

    .searchSection {
        flex-shrink: 0;

        padding: 12px;

        border-bottom: 1px solid var(--border-color);

        background: var(--surface-color);
    }

    .searchBox {
        position: relative;

        width: 100%;
        min-height: 42px;

        display: flex;
        align-items: center;

        border: 1px solid var(--border-color);
        border-radius: 10px;

        background: var(--surface-soft-color);

        transition:
            border-color 160ms ease,
            background 160ms ease,
            box-shadow 160ms ease;
    }

    .searchBox:focus-within {
        border-color: var(--border-strong-color);
        background: var(--surface-color);

        box-shadow: 0 0 0 3px var(--shadow-color);
    }

    .searchIcon {
        position: absolute;
        left: 12px;

        display: grid;
        place-items: center;

        color: var(--text-muted-color);

        font-size: 0.88rem;

        pointer-events: none;
    }

    .searchBox input {
        width: 100%;
        height: 40px;

        padding: 0 38px 0 36px;

        border: 0;
        outline: 0;

        background: transparent;
        color: var(--text-color);

        font-size: 0.72rem;
    }

    .searchBox input::placeholder {
        color: var(--text-muted-color);
        opacity: 1;
    }

    .searchBox input::-webkit-search-cancel-button {
        display: none;
    }

    .searchBox input::-webkit-search-decoration {
        display: none;
    }

    .clearSearchButton {
        position: absolute;
        right: 6px;

        width: 30px;
        height: 30px;

        display: grid;
        place-items: center;

        border-radius: 7px;

        color: var(--text-muted-color);

        font-size: 0.88rem;

        transition:
            background 160ms ease,
            color 160ms ease,
            transform 160ms ease;
    }

    .clearSearchButton:hover {
        background: var(--hover-color);
        color: var(--text-color);
    }

    .clearSearchButton:active {
        transform: scale(0.94);
    }

    .navigation {
        min-height: 0;

        flex: 1;

        padding: 18px 12px 28px;

        overflow-x: hidden;
        overflow-y: auto;

        overscroll-behavior: contain;
        scroll-behavior: smooth;
    }

    .menuGroup + .menuGroup {
        margin-top: 24px;
    }

    .menuTitle {
        padding: 0 10px;
        margin-bottom: 8px;

        color: var(--text-muted-color);

        font-size: 0.65rem;
        font-weight: 700;

        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .menuItems {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .menuLink {
        min-height: 42px;

        display: flex;
        align-items: center;
        gap: 11px;

        padding: 8px 10px;

        border: 1px solid transparent;
        border-radius: 10px;

        color: var(--text-soft-color);

        font-size: 0.78rem;

        transition:
            background 160ms ease,
            border-color 160ms ease,
            color 160ms ease,
            transform 160ms ease;
    }

    .menuLink:hover {
        background: var(--hover-color);
        color: var(--text-color);
        transform: translateX(2px);
    }

    .menuLink.active {
        border-color: var(--border-strong-color);

        background: var(--active-color);
        color: var(--active-text-color);
    }

    .menuLink.active:hover {
        background: var(--active-color);
        color: var(--active-text-color);
    }

    .menuIcon {
        width: 20px;
        height: 20px;

        flex-shrink: 0;

        display: grid;
        place-items: center;

        font-size: 0.95rem;
    }

    .menuText {
        min-width: 0;

        overflow: hidden;

        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .noResults {
        min-height: 180px;

        padding: 24px 18px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text-align: center;
    }

    .noResults > svg {
        color: var(--text-muted-color);

        font-size: 1.3rem;
    }

    .noResults strong {
        margin-top: 14px;

        color: var(--text-color);

        font-size: 0.78rem;
    }

    .noResults p {
        max-width: 190px;

        margin-top: 6px;

        color: var(--text-muted-color);

        font-size: 0.68rem;
        line-height: 1.6;
    }

    .noResults button {
        margin-top: 16px;
        padding: 7px 10px;

        border: 1px solid var(--border-color);
        border-radius: 8px;

        background: var(--surface-soft-color);
        color: var(--text-soft-color);

        font-size: 0.68rem;
        font-weight: 700;

        transition:
            background 160ms ease,
            border-color 160ms ease,
            color 160ms ease;
    }

    .noResults button:hover {
        border-color: var(--border-strong-color);

        background: var(--hover-color);
        color: var(--text-color);
    }

    .bottom {
        flex-shrink: 0;

        padding: 14px 16px 18px;

        border-top: 1px solid var(--border-color);

        background: var(--surface-color);
    }

    .themeButton {
        width: 100%;
        min-height: 44px;

        padding: 7px 8px 7px 10px;

        display: grid;
        grid-template-columns:
            20px
            minmax(0, 1fr)
            auto;
        align-items: center;
        gap: 9px;

        border: 1px solid var(--border-color);
        border-radius: 10px;

        background: var(--surface-soft-color);
        color: var(--text-color);

        text-align: left;

        transition:
            background 160ms ease,
            border-color 160ms ease;
    }

    .themeButton:hover {
        border-color: var(--border-strong-color);
        background: var(--hover-color);
    }

    .themeIcon {
        display: grid;
        place-items: center;

        font-size: 0.95rem;
    }

    .themeText {
        font-size: 0.72rem;
        font-weight: 700;
    }

    .themeSwitch {
        position: relative;

        width: 34px;
        height: 19px;

        padding: 2px;

        border: 1px solid var(--border-strong-color);
        border-radius: 999px;

        background: var(--background-color);

        transition:
            background 180ms ease,
            border-color 180ms ease;
    }

    .themeSwitch span {
        position: absolute;
        top: 2px;
        left: 2px;

        width: 13px;
        height: 13px;

        border-radius: 50%;

        background: var(--text-muted-color);

        transition:
            transform 180ms ease,
            background 180ms ease;
    }

    .themeSwitch.active span {
        transform: translateX(15px);
        background: var(--text-color);
    }

    .links {
        margin-top: 10px;

        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 6px;
    }

    .links a {
        min-height: 32px;

        padding: 5px 7px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;

        border-radius: 8px;

        color: var(--text-muted-color);

        font-size: 0.66rem;

        transition:
            background 160ms ease,
            color 160ms ease;
    }

    .links a:hover {
        background: var(--hover-color);
        color: var(--text-color);
    }

    .footerText {
        margin-top: 8px;

        color: var(--text-muted-color);

        font-size: 0.61rem;
        line-height: 1.45;

        text-align: center;
    }

    .footerText a {
        color: var(--text-soft-color);
        font-weight: 700;
    }

    .footerText a:hover {
        color: var(--text-color);
    }

    @media (max-width: 1024px) {
        .top {
            padding: 22px 16px 18px;
        }

        .brandIcon {
            width: 38px;
            height: 38px;
        }

        .searchSection {
            padding-left: 10px;
            padding-right: 10px;
        }

        .navigation {
            padding-left: 10px;
            padding-right: 10px;
        }

        .menuLink {
            padding-left: 9px;
            padding-right: 9px;
        }

        .bottom {
            padding-left: 12px;
            padding-right: 12px;
        }
    }

    @media (max-width: 900px) {
        .top {
            padding: 16px 18px 14px;
        }

        .intro {
            display: none;
        }

        .brandIcon {
            width: 38px;
            height: 38px;

            border-radius: 10px;
        }

        .brandTitle {
            font-size: 0.88rem;
        }

        .brandText {
            font-size: 0.63rem;
        }

        .searchSection {
            padding: 10px 12px;
        }

        .searchBox {
            min-height: 40px;
        }

        .searchBox input {
            height: 38px;
        }

        .navigation {
            padding: 12px 10px 16px;
        }

        .menuGroup + .menuGroup {
            margin-top: 18px;
        }

        .menuLink {
            min-height: 39px;

            padding-top: 7px;
            padding-bottom: 7px;
        }

        .bottom {
            padding: 10px 12px 12px;
        }

        .themeButton {
            min-height: 40px;
        }

        .links {
            margin-top: 8px;
        }

        .footerText {
            margin-top: 7px;
        }
    }

    @media (max-width: 900px) and (max-height: 600px) {
        .top {
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .brandIcon {
            width: 34px;
            height: 34px;
        }

        .brandTitle {
            font-size: 0.82rem;
        }

        .brandText {
            display: none;
        }

        .searchSection {
            padding-top: 8px;
            padding-bottom: 8px;
        }

        .searchBox {
            min-height: 36px;
        }

        .searchBox input {
            height: 34px;
        }

        .navigation {
            padding-top: 8px;
            padding-bottom: 10px;
        }

        .menuLink {
            min-height: 36px;
        }

        .bottom {
            padding-top: 8px;
            padding-bottom: 8px;
        }

        .themeButton {
            min-height: 36px;
        }

        .links a {
            min-height: 28px;
        }

        .footerText {
            font-size: 0.58rem;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .navigation {
            scroll-behavior: auto;
        }
    }
`;
