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

    .compareGrid,
    .exampleGrid,
    .exampleValueGrid,
    .staleGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .compareGrid article,
    .exampleGrid article,
    .exampleValueGrid article,
    .staleGrid article {
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .compareGrid > article > svg,
    .exampleValueGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .compareGrid h3,
    .exampleValueGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .compareGrid ul,
    .exampleValueGrid ul,
    .staleGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .compareGrid li,
    .exampleValueGrid li,
    .staleGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .compareGrid li::before,
    .exampleValueGrid li::before,
    .staleGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .exampleGrid {
        margin-top: 12px;
    }

    .exampleLabel,
    .cardLabel {
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

    .readmeGrid,
    .ownershipGrid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .readmeGrid article,
    .ownershipGrid article {
        min-height: 150px;
        padding: 22px;
    }

    .readmeGrid article:not(:nth-child(3n + 1)),
    .ownershipGrid article:not(:nth-child(3n + 1)) {
        border-left: 1px solid var(--border-color);
    }

    .readmeGrid article:nth-child(n + 4) {
        border-top: 1px solid var(--border-color);
    }

    .readmeGrid article > span {
        width: 38px;
        height: 38px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        background: var(--active-color);
        color: var(--active-text-color);
        font-size: 0.66rem;
        font-weight: 700;
    }

    .readmeGrid h3,
    .ownershipGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .readmeGrid p,
    .ownershipGrid p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .ownershipGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .apiBox {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
        background: var(--surface-color);
    }

    .apiExample {
        min-height: 62px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid var(--border-color);
        background: var(--surface-soft-color);
    }

    .apiExample .method {
        padding: 5px 9px;
        border-radius: 7px;
        background: var(--active-color);
        color: var(--active-text-color);
        font-size: 0.64rem;
        font-weight: 700;
    }

    .apiExample code {
        color: var(--text-color);
        font-size: 0.78rem;
    }

    .apiDetails {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .apiDetails article {
        min-width: 0;
        padding: 22px;
    }

    .apiDetails article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .apiDetails article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .apiDetails strong {
        color: var(--text-color);
        font-size: 0.78rem;
    }

    .apiDetails p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .apiDetails pre {
        margin-top: 12px;
    }

    .decisionBox,
    .warningBox {
        padding: 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-soft-color);
    }

    .decisionIcon,
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

    .decisionBox h3,
    .warningBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .decisionBox p,
    .warningBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .decisionGrid {
        margin-top: 12px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .decisionGrid article {
        min-height: 120px;
        padding: 22px;
    }

    .decisionGrid article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .decisionGrid article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .decisionGrid p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.72;
    }

    .codeExample {
        margin-top: 12px;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .codeExample p {
        margin-top: 15px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.76;
    }

    .staleGrid {
        margin-top: 12px;
    }

    .staleGrid strong {
        color: var(--text-color);
        font-size: 0.8rem;
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

        .readmeGrid,
        .ownershipGrid {
            grid-template-columns: 1fr;
        }

        .readmeGrid article,
        .ownershipGrid article {
            border-left: 0 !important;
        }

        .readmeGrid article + article,
        .ownershipGrid article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .compareGrid,
        .exampleGrid,
        .exampleValueGrid,
        .staleGrid,
        .apiDetails,
        .decisionGrid,
        .checklist {
            grid-template-columns: 1fr;
        }

        .apiDetails article:nth-child(odd),
        .decisionGrid article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .apiDetails article + article,
        .decisionGrid article + article,
        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .compareGrid article,
        .exampleGrid article,
        .readmeGrid article,
        .apiDetails article,
        .decisionBox,
        .decisionGrid article,
        .exampleValueGrid article,
        .codeExample,
        .warningBox,
        .staleGrid article,
        .ownershipGrid article,
        .checklist article {
            padding: 19px;
        }

        .decisionBox,
        .warningBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
