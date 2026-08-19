import styled from "styled-components";

export const Wrapper = styled.button`
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 30;

    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border: 1px solid var(--border-color);
    border-radius: 50%;

    background: var(--surface-color);
    color: var(--text-color);

    font: inherit;
    font-size: 1rem;
    line-height: 1;

    cursor: pointer;

    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    transform: translateY(12px);

    box-shadow: 0 10px 30px rgb(0 0 0 / 10%);

    transition:
        opacity 180ms ease,
        visibility 180ms ease,
        transform 180ms ease,
        background 180ms ease,
        border-color 180ms ease;

    &.visible {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
    }

    &:hover {
        background: var(--surface-soft-color);
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 2px solid var(--text-color);
        outline-offset: 3px;
    }

    svg {
        display: block;
    }

    @media (max-width: 900px) {
        right: 20px;
        bottom: 20px;

        width: 40px;
        height: 40px;
    }

    @media (max-width: 480px) {
        right: 16px;
        bottom: 16px;

        width: 38px;
        height: 38px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;
