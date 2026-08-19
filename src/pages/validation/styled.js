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

    .boundaryGrid,
    .messageRules,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .boundaryGrid article,
    .messageRules article,
    .checklist article {
        min-height: 125px;
        padding: 23px;
    }

    .boundaryGrid article:nth-child(odd),
    .messageRules article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .boundaryGrid article:nth-child(n + 3),
    .messageRules article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .boundaryGrid span {
        color: var(--text-color);
        font-size: 0.78rem;
        font-weight: 700;
    }

    .boundaryGrid p,
    .messageRules p,
    .checklist p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .exampleGrid,
    .compareGrid,
    .clientServerGrid,
    .securityGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article,
    .compareGrid article,
    .clientServerGrid article,
    .securityGrid article {
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

    .compareGrid > article > svg,
    .securityGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .compareGrid h3,
    .clientServerGrid h3,
    .securityGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .compareGrid ul,
    .clientServerGrid ul,
    .securityGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .compareGrid li,
    .clientServerGrid li,
    .securityGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .compareGrid li::before,
    .clientServerGrid li::before,
    .securityGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .warningBox,
    .noteBox {
        margin-top: 12px;
        padding: 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-soft-color);
    }

    .warningIcon,
    .noteBox > svg {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        padding: 10px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--surface-color);
        color: var(--text-color);
    }

    .warningBox h3,
    .noteBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .warningBox p,
    .noteBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .flow {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .flow article {
        padding: 23px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 15px;
    }

    .flow article + article {
        border-top: 1px solid var(--border-color);
    }

    .flow article > span {
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

    .flow h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .flow p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .messageRules {
        margin-top: 12px;
    }

    .messageRules strong,
    .checklist strong {
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .nestedBox {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .nestedBox > pre {
        height: 100%;
        margin: 0;
        border: 0;
        border-radius: 0;
    }

    .nestedDetails {
        border-left: 1px solid var(--border-color);
    }

    .nestedDetails article {
        min-height: 90px;
        padding: 19px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        background: var(--surface-color);
    }

    .nestedDetails article + article {
        border-top: 1px solid var(--border-color);
    }

    .nestedDetails svg {
        flex-shrink: 0;
        margin-top: 2px;
        color: var(--text-muted-color);
    }

    .nestedDetails p {
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

        .nestedBox {
            grid-template-columns: 1fr;
        }

        .nestedDetails {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .boundaryGrid,
        .messageRules,
        .checklist,
        .exampleGrid,
        .compareGrid,
        .clientServerGrid,
        .securityGrid {
            grid-template-columns: 1fr;
        }

        .boundaryGrid article:nth-child(odd),
        .messageRules article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .boundaryGrid article + article,
        .messageRules article + article,
        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .boundaryGrid article,
        .messageRules article,
        .checklist article,
        .exampleGrid article,
        .compareGrid article,
        .clientServerGrid article,
        .securityGrid article,
        .warningBox,
        .noteBox,
        .flow article,
        .nestedDetails article {
            padding: 19px;
        }

        .warningBox,
        .noteBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
