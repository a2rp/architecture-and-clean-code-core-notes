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

    .concernGrid,
    .benefitGrid,
    .decisionGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .concernGrid article,
    .benefitGrid article,
    .decisionGrid article,
    .checklist article {
        min-height: 140px;
        padding: 23px;
    }

    .concernGrid article:nth-child(odd),
    .benefitGrid article:nth-child(odd),
    .decisionGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .concernGrid article:nth-child(n + 3),
    .benefitGrid article:nth-child(n + 3),
    .decisionGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .concernGrid svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .concernGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.82rem;
    }

    .concernGrid p,
    .decisionGrid p,
    .checklist p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .exampleGrid,
    .compareGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article,
    .compareGrid article {
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

    .structureBox {
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
        background: var(--surface-color);
    }

    .structureBox > pre {
        height: 100%;
        margin: 0;
        border: 0;
        border-radius: 0;
    }

    .structureDetails {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border-left: 1px solid var(--border-color);
    }

    .structureDetails article {
        padding: 20px;
    }

    .structureDetails article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .structureDetails article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .structureDetails strong {
        color: var(--text-color);
        font-size: 0.76rem;
    }

    .structureDetails p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.7rem;
        line-height: 1.7;
    }

    .benefitGrid article {
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 15px;
    }

    .benefitGrid article > span {
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

    .benefitGrid h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .benefitGrid p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .warningBox {
        padding: 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-soft-color);
    }

    .warningIcon {
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

    .warningBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .warningBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .compareGrid {
        margin-top: 12px;
    }

    .compareGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .compareGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.82rem;
    }

    .compareGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .compareGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .compareGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .decisionGrid strong,
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

        .structureBox {
            grid-template-columns: 1fr;
        }

        .structureDetails {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .concernGrid,
        .benefitGrid,
        .decisionGrid,
        .checklist,
        .exampleGrid,
        .compareGrid,
        .structureDetails {
            grid-template-columns: 1fr;
        }

        .concernGrid article:nth-child(odd),
        .benefitGrid article:nth-child(odd),
        .decisionGrid article:nth-child(odd),
        .checklist article:nth-child(odd),
        .structureDetails article:nth-child(odd) {
            border-right: 0;
        }

        .concernGrid article + article,
        .benefitGrid article + article,
        .decisionGrid article + article,
        .checklist article + article,
        .structureDetails article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .concernGrid article,
        .exampleGrid article,
        .structureDetails article,
        .benefitGrid article,
        .warningBox,
        .compareGrid article,
        .decisionGrid article,
        .checklist article {
            padding: 19px;
        }

        .warningBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
