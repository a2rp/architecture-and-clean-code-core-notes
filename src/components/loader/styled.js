import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 360px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    color: var(--text-soft-color);

    .loader {
        height: 24px;

        display: flex;
        align-items: center;
        gap: 6px;
    }

    .loader span {
        width: 6px;
        height: 6px;

        border-radius: 50%;

        background: var(--text-color);

        animation: loaderPulse 900ms ease-in-out infinite;
    }

    .loader span:nth-child(2) {
        animation-delay: 120ms;
    }

    .loader span:nth-child(3) {
        animation-delay: 240ms;
    }

    p {
        color: var(--text-muted-color);

        font-size: 0.7rem;
        font-weight: 700;

        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    @keyframes loaderPulse {
        0%,
        100% {
            opacity: 0.3;
            transform: translateY(0);
        }

        50% {
            opacity: 1;
            transform: translateY(-5px);
        }
    }

    @media (max-width: 600px) {
        min-height: 280px;
    }

    @media (prefers-reduced-motion: reduce) {
        .loader span {
            animation: none;
            opacity: 1;
        }
    }
`;
