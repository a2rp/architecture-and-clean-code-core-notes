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

    .sectionHeader p {
        margin-top: 12px;
        color: var(--text-soft-color);
        font-size: 0.82rem;
        line-height: 1.8;
    }

    .exampleGrid,
    .compareGrid,
    .commandGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article,
    .compareGrid article,
    .commandGrid article {
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .exampleLabel,
    .typeLabel {
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

    .exampleGrid p,
    .compareGrid p {
        margin-top: 16px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.76;
    }

    .compareGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .compareGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .parameterRules,
    .asyncRules,
    .problemGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .parameterRules {
        margin-top: 12px;
    }

    .parameterRules article,
    .asyncRules article,
    .problemGrid article,
    .checklist article {
        min-height: 135px;
        padding: 23px;
    }

    .parameterRules article:nth-child(odd),
    .asyncRules article:nth-child(odd),
    .problemGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .parameterRules article:nth-child(n + 3),
    .asyncRules article:nth-child(n + 3),
    .problemGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .parameterRules strong,
    .asyncRules strong,
    .checklist strong {
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .parameterRules p,
    .asyncRules p,
    .problemGrid p,
    .checklist p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .asyncRules pre {
        margin-top: 14px;
    }

    .effectGrid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .effectGrid article {
        min-height: 90px;
        padding: 20px;
        display: flex;
        align-items: center;
    }

    .effectGrid article:not(:nth-child(3n)) {
        border-right: 1px solid var(--border-color);
    }

    .effectGrid article:nth-child(n + 4) {
        border-top: 1px solid var(--border-color);
    }

    .effectGrid span {
        color: var(--text-color);
        font-size: 0.75rem;
        font-weight: 700;
    }

    .effectExample {
        margin-top: 12px;
    }

    .commandGrid h3 {
        margin-top: 10px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .noteBox,
    .warningBox {
        margin-top: 12px;
        padding: 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-soft-color);
    }

    .noteBox > svg,
    .warningIcon {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        display: grid;
        place-items: center;
        padding: 10px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--surface-color);
        color: var(--text-color);
    }

    .noteBox h3,
    .warningBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .noteBox p,
    .warningBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .extractionBox {
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .extractionBox pre {
        height: 100%;
        margin: 0;
        border: 0;
        border-radius: 0;
    }

    .extractionText {
        padding: 28px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-left: 1px solid var(--border-color);
        background: var(--surface-color);
    }

    .extractionText > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .extractionText h3 {
        margin-top: 14px;
        color: var(--text-color);
        font-size: 0.86rem;
    }

    .extractionText p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.76;
    }

    .problemGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .problemGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.8rem;
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

        .extractionBox {
            grid-template-columns: 1fr;
        }

        .extractionText {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .exampleGrid,
        .compareGrid,
        .commandGrid,
        .parameterRules,
        .asyncRules,
        .problemGrid,
        .checklist {
            grid-template-columns: 1fr;
        }

        .parameterRules article:nth-child(odd),
        .asyncRules article:nth-child(odd),
        .problemGrid article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .parameterRules article + article,
        .asyncRules article + article,
        .problemGrid article + article,
        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }

        .effectGrid {
            grid-template-columns: 1fr;
        }

        .effectGrid article:not(:nth-child(3n)) {
            border-right: 0;
        }

        .effectGrid article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .exampleGrid article,
        .compareGrid article,
        .commandGrid article,
        .parameterRules article,
        .asyncRules article,
        .problemGrid article,
        .checklist article,
        .noteBox,
        .warningBox,
        .extractionText {
            padding: 19px;
        }

        .noteBox,
        .warningBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
