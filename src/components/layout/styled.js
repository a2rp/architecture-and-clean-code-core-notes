import styled from "styled-components";

export const Wrapper = styled.div`
    --sidebar-width: 300px;
    --mobile-header-height: 64px;

    width: 100%;
    height: 100dvh;

    display: grid;
    grid-template-columns:
        var(--sidebar-width)
        minmax(0, 1fr);

    overflow: hidden;

    background: var(--background-color);
    color: var(--text-color);

    .desktopSidebar {
        width: var(--sidebar-width);
        height: 100dvh;
        min-width: 0;

        overflow: hidden;

        border-right: 1px solid var(--border-color);

        background: var(--surface-color);
    }

    .content {
        width: 100%;
        min-width: 0;
        height: 100dvh;

        overflow-x: hidden;
        overflow-y: auto;

        overscroll-behavior-y: contain;
        scroll-behavior: smooth;
        scrollbar-gutter: stable;

        background: var(--background-color);
    }

    .contentBody {
        min-height: 100%;

        display: flex;
        flex-direction: column;
    }

    .contentInner {
        width: min(100%, 1180px);
        flex: 1;

        margin: 0 auto;
        padding: 48px 54px 80px;
    }

    .mobileHeader,
    .mobileOverlay,
    .mobileSidebar {
        display: none;
    }

    .mobileMenuButton:focus-visible,
    .mobileCloseButton:focus-visible {
        outline: 2px solid var(--text-color);
        outline-offset: 3px;
    }

    @media (max-width: 900px) {
        height: 100dvh;
        display: block;

        .desktopSidebar {
            display: none;
        }

        .mobileHeader {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 40;

            height: var(--mobile-header-height);

            padding: 0 20px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;

            border-bottom: 1px solid var(--border-color);

            background: var(--surface-color);
        }

        .mobileBrand {
            min-width: 0;

            display: flex;
            align-items: baseline;
            gap: 6px;

            overflow: hidden;

            white-space: nowrap;
        }

        .mobileBrandTitle {
            color: var(--text-color);

            font-size: 0.84rem;
            font-weight: 700;
        }

        .mobileBrandText {
            overflow: hidden;

            color: var(--text-soft-color);

            font-size: 0.75rem;

            text-overflow: ellipsis;
        }

        .mobileMenuButton,
        .mobileCloseButton {
            flex-shrink: 0;

            border: 1px solid var(--border-color);

            background: var(--surface-soft-color);
            color: var(--text-color);

            cursor: pointer;

            transition:
                background 180ms ease,
                border-color 180ms ease,
                transform 180ms ease;
        }

        .mobileMenuButton:hover,
        .mobileCloseButton:hover {
            background: var(--surface-color);
        }

        .mobileMenuButton:active,
        .mobileCloseButton:active {
            transform: scale(0.96);
        }

        .mobileMenuButton {
            width: 38px;
            height: 38px;

            display: grid;
            place-items: center;

            border-radius: 9px;

            font-size: 1.1rem;
        }

        .mobileMenuButton svg,
        .mobileCloseButton svg {
            display: block;
        }

        .mobileOverlay {
            position: fixed;
            inset: 0;
            z-index: 50;

            display: block;

            background: rgb(0 0 0 / 52%);

            opacity: 0;
            visibility: hidden;
            pointer-events: none;

            transition:
                opacity 220ms ease,
                visibility 220ms ease;
        }

        .mobileOverlay.visible {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .mobileSidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 60;

            width: min(88vw, 330px);

            display: flex;
            flex-direction: column;

            overflow: hidden;

            border-right: 1px solid var(--border-color);

            background: var(--surface-color);

            transform: translateX(-102%);
            visibility: hidden;

            transition:
                transform 240ms ease,
                visibility 240ms ease;

            box-shadow: 18px 0 50px rgb(0 0 0 / 18%);
        }

        .mobileSidebar.open {
            transform: translateX(0);
            visibility: visible;
        }

        .mobileSidebarHeader {
            min-height: var(--mobile-header-height);

            padding: 11px 14px 11px 18px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            border-bottom: 1px solid var(--border-color);
        }

        .mobileSidebarHeader > div {
            min-width: 0;

            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .mobileSidebarHeader strong {
            color: var(--text-color);

            font-size: 0.78rem;
        }

        .mobileSidebarHeader span {
            color: var(--text-muted-color);

            font-size: 0.65rem;
        }

        .mobileCloseButton {
            width: 36px;
            height: 36px;

            display: grid;
            place-items: center;

            border-radius: 9px;

            font-size: 1rem;
        }

        .mobileSidebarContent {
            min-height: 0;
            flex: 1;

            overflow: hidden;
        }

        .content {
            height: 100dvh;

            padding-top: var(--mobile-header-height);

            scroll-padding-top: var(--mobile-header-height);
        }

        .contentInner {
            width: 100%;

            padding: 36px clamp(20px, 5vw, 42px) 72px;
        }
    }

    @media (max-width: 480px) {
        --mobile-header-height: 60px;

        .mobileHeader {
            padding: 0 14px;
        }

        .mobileBrandText {
            display: none;
        }

        .contentInner {
            padding: 30px 18px 66px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .content {
            scroll-behavior: auto;
        }

        .mobileMenuButton,
        .mobileCloseButton,
        .mobileOverlay,
        .mobileSidebar {
            transition: none;
        }
    }
`;
