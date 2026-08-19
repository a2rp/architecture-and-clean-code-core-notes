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
        max-width: 760px;
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

    .sectionHeader p,
    .sectionNote {
        margin-top: 12px;
        color: var(--text-soft-color);
        font-size: 0.82rem;
        line-height: 1.8;
    }

    .smellGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .smellGrid article {
        min-height: 175px;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .smellGrid svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .smellGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .smellGrid p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.72;
    }

    .smellGrid span {
        display: block;
        margin-top: 15px;
        color: var(--text-muted-color);
        font-size: 0.67rem;
        line-height: 1.65;
    }

    .exampleGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article {
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .exampleLabel {
        color: var(--text-muted-color);
        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
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

    .exampleGrid p {
        margin-top: 16px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.76;
    }

    .duplicateBox,
    .noteBox,
    .deadCodeBox,
    .warningBox {
        padding: 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-soft-color);
    }

    .duplicateBox > svg,
    .noteBox > svg,
    .deadCodeBox > svg,
    .warningIcon {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        padding: 10px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--surface-color);
        color: var(--text-color);
    }

    .duplicateBox h3,
    .noteBox h3,
    .deadCodeBox h3,
    .warningBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .duplicateBox p,
    .noteBox p,
    .deadCodeBox p,
    .warningBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .duplicateExample,
    .deadExample {
        margin-top: 12px;
    }

    .shotgunBox {
        padding: 24px;
        display: grid;
        grid-template-columns: minmax(0, 0.7fr) 50px minmax(0, 1.3fr);
        align-items: center;
        gap: 18px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .shotgunBox > div:first-child {
        padding: 18px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--surface-soft-color);
        color: var(--text-color);
        text-align: center;
        font-size: 0.75rem;
        font-weight: 700;
    }

    .shotgunBox > svg {
        margin: auto;
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .fileList {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .fileList span {
        padding: 8px 10px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        background: var(--surface-soft-color);
        color: var(--text-soft-color);
        font-family: Consolas, "Courier New", monospace;
        font-size: 0.67rem;
    }

    .mapping {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .mapping article {
        min-height: 64px;
        padding: 15px 20px;
        display: grid;
        grid-template-columns: minmax(0, 0.8fr) 36px minmax(0, 1.2fr);
        align-items: center;
        gap: 14px;
    }

    .mapping article + article {
        border-top: 1px solid var(--border-color);
    }

    .mapping strong {
        color: var(--text-color);
        font-size: 0.74rem;
    }

    .mapping svg {
        color: var(--text-muted-color);
        font-size: 0.9rem;
    }

    .mapping span {
        color: var(--text-soft-color);
        font-size: 0.71rem;
    }

    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .checklist article {
        min-height: 135px;
        padding: 23px;
    }

    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .checklist strong {
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .checklist p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
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

        .shotgunBox {
            grid-template-columns: 1fr;
        }

        .shotgunBox > svg {
            transform: rotate(90deg);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .smellGrid,
        .exampleGrid,
        .checklist {
            grid-template-columns: 1fr;
        }

        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }

        .mapping article {
            grid-template-columns: 1fr;
        }

        .mapping svg {
            transform: rotate(90deg);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .smellGrid article,
        .exampleGrid article,
        .duplicateBox,
        .noteBox,
        .deadCodeBox,
        .warningBox,
        .shotgunBox,
        .checklist article {
            padding: 19px;
        }

        .duplicateBox,
        .noteBox,
        .deadCodeBox,
        .warningBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
