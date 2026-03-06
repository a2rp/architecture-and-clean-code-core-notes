// src/topics/solid/styled.js
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
            flex: 0 0 auto;
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

        .pillRow {
            display: flex;
            align-items: center;
            gap: 8px;

            @media (width < 980px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .sIcon {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
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

            &[data-open="true"] {
                transform: rotate(180deg);
            }
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
            max-height: 8000px;
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

        .dashList {
            display: grid;
            gap: 8px;
            padding-left: 0;
            margin: 0;
        }

        .dashList li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;

            padding-left: 16px;
            position: relative;
        }

        .dashList li::before {
            content: "-";
            position: absolute;
            left: 0;
            color: var(--color-text-muted);
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
            overflow: hidden;
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .i {
            width: 38px;
            height: 38px;
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
            flex: 0 0 auto;
        }

        .headText {
            min-width: 0;
            display: grid;
            gap: 2px;
        }

        .k {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.3px;
            color: var(--color-text-muted);
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .plain {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
            margin-bottom: 12px;
        }

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .mini {
            padding: 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 86%,
                transparent
            );

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            font-size: 13px;
        }

        .dashList {
            display: grid;
            gap: 8px;
            padding-left: 0;
            margin: 0;
        }

        .dashList li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;

            padding-left: 16px;
            position: relative;
        }

        .dashList li::before {
            content: "-";
            position: absolute;
            left: 0;
            color: var(--color-text-muted);
        }

        .codeTitle {
            margin-top: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            letter-spacing: 0.2px;
        }

        .codeTitle.good {
            margin-top: 12px;
            color: color-mix(
                in srgb,
                var(--color-accent) 86%,
                var(--color-text-primary)
            );
        }

        .code {
            margin: 8px 0 0;
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

        @media (width < 980px) {
            grid-template-columns: 1fr;
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
