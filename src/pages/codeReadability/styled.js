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

    .exampleGrid,
    .magicGrid,
    .commentsGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article,
    .magicGrid article,
    .commentsGrid article {
        min-width: 0;
        padding: 20px;
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

    .functionGrid,
    .formatGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .functionGrid article,
    .formatGrid article,
    .checklist article {
        min-height: 140px;
        padding: 23px;
    }

    .functionGrid article:nth-child(odd),
    .formatGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .functionGrid article:nth-child(n + 3),
    .formatGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .number {
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

    .functionGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .functionGrid p,
    .formatGrid p,
    .checklist p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .functionExample,
    .commentsExample {
        margin-top: 12px;
    }

    .noteBox,
    .warningBox {
        margin-top: 12px;
        padding: 22px;
        display: flex;
        align-items: flex-start;
        gap: 15px;
        border: 1px solid var(--border-color);
        border-radius: 13px;
        background: var(--surface-soft-color);
    }

    .noteBox > svg,
    .warningBox > svg {
        flex-shrink: 0;
        margin-top: 2px;
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .noteBox h3,
    .warningBox h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .noteBox p,
    .warningBox p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .magicGrid > article > svg,
    .commentsGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .magicGrid h3,
    .commentsGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.82rem;
    }

    .commentsGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .commentsGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .commentsGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .formatGrid strong {
        color: var(--text-color);
        font-size: 0.78rem;
    }

    .loadGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .loadGrid article {
        padding: 24px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .loadGrid article > span {
        display: inline-flex;
        padding: 5px 9px;
        border: 1px solid var(--border-color);
        border-radius: 999px;
        background: var(--surface-soft-color);
        color: var(--text-muted-color);
        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .loadGrid h3 {
        margin-top: 14px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .loadGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    .loadGrid li {
        position: relative;
        padding-left: 17px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.68;
    }

    .loadGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.68em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
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
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .exampleGrid,
        .magicGrid,
        .commentsGrid,
        .functionGrid,
        .formatGrid,
        .loadGrid,
        .checklist {
            grid-template-columns: 1fr;
        }

        .functionGrid article:nth-child(odd),
        .formatGrid article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .functionGrid article + article,
        .formatGrid article + article,
        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .exampleGrid article,
        .magicGrid article,
        .commentsGrid article,
        .functionGrid article,
        .formatGrid article,
        .loadGrid article,
        .checklist article,
        .noteBox,
        .warningBox {
            padding: 19px;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
