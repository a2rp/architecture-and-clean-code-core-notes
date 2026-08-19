import styled from "styled-components";

export const Wrapper = styled.footer`
    width: 100%;

    margin-top: auto;

    border-top: 1px solid var(--border-color);

    color: var(--text-muted-color);

    .footerContent {
        width: min(100%, 1180px);

        margin: 0 auto;
        padding: 22px 54px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
    }

    p {
        margin: 0;

        font-size: 0.72rem;
        line-height: 1.6;
    }

    .credit {
        text-align: right;
    }

    a {
        color: var(--text-soft-color);

        font-weight: 700;

        text-decoration: none;

        transition:
            color 180ms ease,
            opacity 180ms ease;
    }

    a:hover {
        color: var(--text-color);
    }

    a:focus-visible {
        outline: 2px solid var(--text-color);
        outline-offset: 3px;
        border-radius: 3px;
    }

    @media (max-width: 900px) {
        .footerContent {
            padding: 20px clamp(20px, 5vw, 42px);
        }
    }

    @media (max-width: 600px) {
        .footerContent {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;

            padding: 20px 18px;
        }

        .credit {
            text-align: left;
        }
    }
`;
