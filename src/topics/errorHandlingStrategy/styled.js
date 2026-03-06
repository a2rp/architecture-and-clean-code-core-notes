// src/topics/errorHandlingStrategy/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,

    Card: styled.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,

    TopBar: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 16px;
        border-bottom: 1px solid var(--color-border);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .badge {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .subTitle {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .toggleBtn {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 8px 12px;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: var(--color-surface);
        }

        .toggleIcon[data-open="true"] {
            transform: rotate(180deg);
        }
    `,

    Body: styled.div`
        padding: 18px;
        display: grid;
        gap: 16px;

        max-height: 0;
        overflow: hidden;
        opacity: 0;

        transition: all 0.25s ease;

        &[data-open="true"] {
            max-height: 3000px;
            opacity: 1;
        }
    `,

    IntroRow: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .introTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,

    SectionTitle: styled.div`
        font-weight: 900;
        color: var(--color-text-primary);
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 900;
            margin-bottom: 6px;
        }

        ul {
            padding-left: 16px;
        }

        li {
            color: var(--color-text-secondary);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    ExampleCard: styled.div`
        padding: 14px;
        border-radius: 14px;
        border: 1px solid var(--color-border);

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 12px;
        }
    `,

    FooterNote: styled.div`
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    `,
};
