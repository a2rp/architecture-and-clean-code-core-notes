// src/topics/designPrinciples/styled.js
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
            color-mix(in srgb, var(--color-surface) 92%, transparent),
            color-mix(in srgb, var(--color-surface-2) 92%, transparent)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,

    TopBar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;

        padding: 16px 16px;
        border-bottom: 1px solid var(--color-border);

        background: color-mix(in srgb, var(--color-bg) 70%, transparent);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .badge {
            width: 42px;
            height: 42px;
            border-radius: 14px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );
            color: var(--color-primary);

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .titles {
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subTitle {
            margin-top: 2px;
            font-size: 12px;
            color: var(--color-text-muted);

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 12px 24px var(--color-shadow);

            color: var(--color-text-primary);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .toggleIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            color: color-mix(
                in srgb,
                var(--color-primary) 86%,
                var(--color-text-primary)
            );

            transition: transform 160ms ease;
        }

        .toggleText {
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        @media (width < 520px) {
            .subTitle {
                display: none;
            }

            .toggleText {
                display: none;
            }
        }
    `,

    Body: styled.div`
        padding: 16px;
        display: grid;
        gap: 16px;

        max-height: 0;
        opacity: 0;
        overflow: hidden;

        transform: translateY(-4px);
        transition:
            max-height 240ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="true"] {
            max-height: 4000px;
            opacity: 1;
            transform: translateY(0px);
        }
    `,

    IntroRow: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .introTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;

            svg {
                color: var(--color-accent);
            }
        }

        p {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
        }

        @media (width < 860px) {
            grid-template-columns: 1fr;
        }
    `,

    SectionTitle: styled.div`
        margin-top: 6px;
        font-weight: 900;
        color: var(--color-text-primary);
        letter-spacing: 0.2px;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .i {
            width: 34px;
            height: 34px;
            border-radius: 12px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );
            color: var(--color-primary);
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .list {
            display: grid;
            gap: 8px;
            padding-left: 0;
            margin: 0;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;

            padding-left: 16px;
            position: relative;
        }

        .list li::before {
            content: "-";
            position: absolute;
            left: 0;
            color: var(--color-text-muted);
        }

        @media (width < 900px) {
            grid-template-columns: 1fr;
        }
    `,

    Examples: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;

        .exCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        .exText {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .code {
            margin: 0;
            padding: 12px;
            border-radius: 14px;

            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.55;
            overflow: auto;

            box-shadow: 0 14px 30px var(--color-shadow);
        }
    `,

    FooterNote: styled.div`
        padding: 12px 14px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 10%, transparent);

        color: var(--color-text-secondary);
        font-size: 13.5px;
        line-height: 1.65;

        box-shadow: 0 14px 30px var(--color-shadow);
    `,
};
