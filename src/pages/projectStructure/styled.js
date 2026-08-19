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
        max-width: 730px;
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

    .goalGrid,
    .compareGrid,
    .namingGrid,
    .exampleGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .goalGrid article,
    .compareGrid article,
    .namingGrid article,
    .exampleGrid article {
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

    .goalGrid h3 {
        margin-top: 12px;
        color: var(--text-color);
        font-size: 0.86rem;
        line-height: 1.5;
    }

    .goalGrid ul {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .goalGrid li,
    .decisionList li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.7;
    }

    .goalGrid li::before,
    .decisionList li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .structureBox {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
        background: var(--surface-color);
    }

    pre {
        width: 100%;
        padding: 20px;
        overflow-x: auto;
        background: var(--code-background-color);
        color: var(--code-text-color);
    }

    code {
        font-size: 0.72rem;
        line-height: 1.7;
    }

    .structureNotes {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .structureNotes article {
        padding: 20px;
        border-top: 1px solid var(--border-color);
    }

    .structureNotes article:not(:nth-child(3n + 1)) {
        border-left: 1px solid var(--border-color);
    }

    .structureNotes strong {
        color: var(--text-color);
        font-size: 0.76rem;
    }

    .structureNotes p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.7rem;
        line-height: 1.7;
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

    .compareGrid p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.75;
    }

    .compareGrid pre {
        margin-top: 17px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
    }

    .featureExample {
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        align-items: stretch;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .featureExample pre {
        height: 100%;
    }

    .featureText {
        padding: 28px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-left: 1px solid var(--border-color);
        background: var(--surface-color);
    }

    .featureText h3 {
        color: var(--text-color);
        font-size: 0.88rem;
        line-height: 1.5;
    }

    .featureText p {
        margin-top: 10px;
        color: var(--text-soft-color);
        font-size: 0.74rem;
        line-height: 1.78;
    }

    .namingGrid strong {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .nameExamples {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .nameExamples span {
        padding: 7px 10px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        background: var(--surface-soft-color);
        color: var(--text-soft-color);
        font-family: Consolas, "Courier New", monospace;
        font-size: 0.68rem;
    }

    .nameExamples.muted span {
        color: var(--text-muted-color);
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

    .exampleGrid {
        margin-top: 12px;
    }

    .exampleGrid pre {
        margin-top: 14px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
    }

    .steps {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .steps article {
        padding: 23px;
        display: grid;
        grid-template-columns: 44px minmax(0, 1fr);
        align-items: flex-start;
        gap: 16px;
    }

    .steps article + article {
        border-top: 1px solid var(--border-color);
    }

    .steps article > span {
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

    .steps h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .steps p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
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
        max-width: 790px;
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

        .structureNotes {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .structureNotes article:not(:nth-child(3n + 1)) {
            border-left: 0;
        }

        .structureNotes article:nth-child(even) {
            border-left: 1px solid var(--border-color);
        }

        .featureExample {
            grid-template-columns: 1fr;
        }

        .featureText {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .goalGrid,
        .compareGrid,
        .namingGrid,
        .exampleGrid,
        .checklist {
            grid-template-columns: 1fr;
        }

        .structureNotes {
            grid-template-columns: 1fr;
        }

        .structureNotes article {
            border-left: 0 !important;
        }

        .structureNotes article + article {
            border-top: 1px solid var(--border-color);
        }

        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .goalGrid article,
        .compareGrid article,
        .namingGrid article,
        .exampleGrid article,
        .featureText,
        .warningBox,
        .steps article,
        .checklist article {
            padding: 19px;
        }

        .warningBox {
            flex-direction: column;
        }

        .steps article {
            grid-template-columns: 40px minmax(0, 1fr);
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
