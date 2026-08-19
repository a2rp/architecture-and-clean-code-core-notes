import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 24px;

    .pageHeader {
        max-width: 860px;
        padding: 12px 0 48px;
    }

    .label {
        width: fit-content;
        min-height: 31px;
        padding: 6px 11px;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        border: 1px solid var(--border-color);
        border-radius: 999px;
        background: var(--surface-soft-color);
        color: var(--text-soft-color);
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.04em;
    }

    .pageHeader h1 {
        margin-top: 20px;
        color: var(--text-color);
        font-size: clamp(2.4rem, 6vw, 4.8rem);
        line-height: 1;
        letter-spacing: -0.055em;
    }

    .pageHeader > p {
        max-width: 760px;
        margin-top: 22px;
        color: var(--text-soft-color);
        font-size: 0.98rem;
        line-height: 1.85;
    }

    .introGrid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .introGrid article {
        padding: 30px 26px;
    }

    .introGrid article + article {
        border-left: 1px solid var(--border-color);
    }

    .introGrid svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .introGrid h2 {
        margin-top: 15px;
        color: var(--text-color);
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .introGrid p {
        margin-top: 10px;
        color: var(--text-soft-color);
        font-size: 0.74rem;
        line-height: 1.75;
    }

    .section {
        padding: 62px 0;
    }

    .section + .section {
        border-top: 1px solid var(--border-color);
    }

    .sectionHeader {
        max-width: 740px;
        margin-bottom: 28px;
    }

    .sectionLabel {
        color: var(--text-muted-color);
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.11em;
        text-transform: uppercase;
    }

    .sectionHeader h2,
    .takeaway h2 {
        margin-top: 10px;
        color: var(--text-color);
        font-size: clamp(1.55rem, 3vw, 2.3rem);
        line-height: 1.25;
        letter-spacing: -0.035em;
    }

    .sectionHeader p {
        margin-top: 12px;
        color: var(--text-soft-color);
        font-size: 0.82rem;
        line-height: 1.8;
    }

    .categoryGrid,
    .exampleGrid,
    .messageGrid,
    .loggingGrid,
    .retryGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .categoryGrid article,
    .exampleGrid article,
    .messageGrid article,
    .loggingGrid article,
    .retryGrid article {
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .cardLabel,
    .exampleLabel {
        color: var(--text-muted-color);
        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .categoryGrid h3,
    .messageGrid h3,
    .retryGrid h3 {
        margin-top: 12px;
        color: var(--text-color);
        font-size: 0.84rem;
        line-height: 1.5;
    }

    .categoryGrid ul,
    .loggingGrid ul,
    .retryGrid ul {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .categoryGrid li,
    .loggingGrid li,
    .retryGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .categoryGrid li::before,
    .loggingGrid li::before,
    .retryGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .status {
        width: fit-content;
        margin-top: 18px;
        padding: 7px 10px;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        border: 1px solid var(--border-color);
        border-radius: 999px;
        background: var(--surface-soft-color);
        color: var(--text-soft-color);
        font-size: 0.67rem;
    }

    .boundaryFlow,
    .layerGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .boundaryFlow article,
    .layerGrid article,
    .checklist article {
        min-height: 140px;
        padding: 23px;
    }

    .boundaryFlow article:nth-child(odd),
    .layerGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .boundaryFlow article:nth-child(n + 3),
    .layerGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .boundaryFlow article {
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        align-items: flex-start;
        gap: 15px;
    }

    .boundaryFlow article > span {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        background: var(--active-color);
        color: var(--active-text-color);
        font-size: 0.68rem;
        font-weight: 700;
    }

    .boundaryFlow h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .boundaryFlow p,
    .layerGrid p,
    .checklist p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .exampleGrid {
        margin-top: 12px;
    }

    pre {
        width: 100%;
        margin-top: 14px;
        padding: 18px;
        overflow-x: auto;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--code-background-color);
        color: var(--code-text-color);
    }

    code {
        font-size: 0.72rem;
        line-height: 1.7;
    }

    .exampleGrid p,
    .messageGrid p {
        margin-top: 16px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.76;
    }

    .conceptBox,
    .noteBox {
        padding: 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-soft-color);
    }

    .conceptIcon {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        display: grid;
        place-items: center;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--surface-color);
        color: var(--text-color);
    }

    .conceptBox h3,
    .noteBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .conceptBox p,
    .noteBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .failExample {
        margin-top: 12px;
    }

    .messageGrid > article > svg,
    .retryGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .messageGrid pre {
        white-space: pre-wrap;
    }

    .loggingGrid strong {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .loggingExample {
        margin-top: 12px;
    }

    .noteBox {
        margin-top: 12px;
    }

    .noteBox > svg {
        flex-shrink: 0;
        margin-top: 2px;
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .layerGrid article > span {
        display: inline-flex;
        padding: 5px 9px;
        border: 1px solid var(--border-color);
        border-radius: 999px;
        background: var(--surface-soft-color);
        color: var(--text-muted-color);
        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        text-transform: uppercase;
    }

    .layerGrid strong {
        display: block;
        margin-top: 12px;
        color: var(--text-color);
        font-size: 0.79rem;
        line-height: 1.5;
    }

    .checklist strong {
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .takeaway {
        padding: 32px;
        border: 1px solid var(--border-color);
        border-radius: 15px;
        background: var(--surface-soft-color);
    }

    .takeaway p {
        max-width: 800px;
        margin-top: 13px;
        color: var(--text-soft-color);
        font-size: 0.8rem;
        line-height: 1.8;
    }

    @media (max-width: 900px) {
        .introGrid {
            grid-template-columns: 1fr;
        }

        .introGrid article + article {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .categoryGrid,
        .exampleGrid,
        .messageGrid,
        .loggingGrid,
        .retryGrid,
        .boundaryFlow,
        .layerGrid,
        .checklist {
            grid-template-columns: 1fr;
        }

        .boundaryFlow article:nth-child(odd),
        .layerGrid article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .boundaryFlow article + article,
        .layerGrid article + article,
        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .categoryGrid article,
        .exampleGrid article,
        .messageGrid article,
        .loggingGrid article,
        .retryGrid article,
        .boundaryFlow article,
        .layerGrid article,
        .checklist article,
        .conceptBox,
        .noteBox {
            padding: 19px;
        }

        .conceptBox,
        .noteBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
