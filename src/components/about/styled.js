// src/components/about/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 20px 40px;
    `,

    Container: styled.div`
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    `,

    Header: styled.div`
        max-width: 720px;

        h2 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 26px;
            margin-bottom: 10px;
        }

        p {
            font-size: 15px;
            line-height: 1.7;
        }

        svg {
            color: var(--color-primary);
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;

        .card {
            padding: 20px;
            border-radius: 16px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 10px 24px var(--color-shadow);
        }

        .card.wide {
            grid-column: span 2;
        }

        .icon {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 10px;

            background: color-mix(
                in srgb,
                var(--color-primary) 18%,
                transparent
            );

            color: var(--color-primary);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        @media (max-width: 720px) {
            .card.wide {
                grid-column: span 1;
            }
        }
    `,
};
