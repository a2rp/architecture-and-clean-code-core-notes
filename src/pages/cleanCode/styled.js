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

    .introGrid svg,
    .meaningGrid svg,
    .nameGrid svg,
    .testGrid svg {
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

    .meaningGrid,
    .formatGrid,
    .testGrid,
    .smellGrid,
    .boyScoutGrid,
    .pragmaticGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .meaningGrid article,
    .formatGrid article,
    .testGrid article,
    .smellGrid article,
    .boyScoutGrid article,
    .pragmaticGrid article,
    .checklist article {
        min-height: 130px;
        padding: 23px;
    }

    .meaningGrid article:nth-child(odd),
    .formatGrid article:nth-child(odd),
    .testGrid article:nth-child(odd),
    .smellGrid article:nth-child(odd),
    .boyScoutGrid article:nth-child(odd),
    .pragmaticGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .meaningGrid article:nth-child(n + 3),
    .formatGrid article:nth-child(n + 3),
    .testGrid article:nth-child(n + 3),
    .smellGrid article:nth-child(n + 3),
    .boyScoutGrid article:nth-child(n + 3),
    .pragmaticGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .meaningGrid h3,
    .testGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.82rem;
    }

    .meaningGrid p,
    .formatGrid p,
    .testGrid p,
    .smellGrid p,
    .boyScoutGrid p,
    .pragmaticGrid p,
    .checklist p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .formatGrid strong,
    .smellGrid strong,
    .pragmaticGrid strong,
    .checklist strong {
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .exampleGrid,
    .compareGrid,
    .commentGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article,
    .compareGrid article,
    .commentGrid article {
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

    .compareGrid > article > svg,
    .commentGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .compareGrid h3,
    .commentGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .compareGrid ul,
    .commentGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .compareGrid li,
    .commentGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .compareGrid li::before,
    .commentGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .nameGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .nameGrid article {
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .nameGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.82rem;
    }

    .nameGrid p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .nameGrid pre {
        margin-top: 14px;
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

    .commentExample {
        margin-top: 12px;
    }

    .boyScoutGrid article {
        display: grid;
        grid-template-columns: 18px minmax(0, 1fr);
        gap: 10px;
        align-items: start;
    }

    .boyScoutGrid svg {
        margin-top: 3px;
        color: var(--text-muted-color);
        font-size: 0.82rem;
    }

    .boyScoutGrid p {
        margin-top: 0;
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

        .meaningGrid,
        .formatGrid,
        .testGrid,
        .smellGrid,
        .boyScoutGrid,
        .pragmaticGrid,
        .checklist,
        .exampleGrid,
        .compareGrid,
        .commentGrid,
        .nameGrid {
            grid-template-columns: 1fr;
        }

        .meaningGrid article:nth-child(odd),
        .formatGrid article:nth-child(odd),
        .testGrid article:nth-child(odd),
        .smellGrid article:nth-child(odd),
        .boyScoutGrid article:nth-child(odd),
        .pragmaticGrid article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .meaningGrid article + article,
        .formatGrid article + article,
        .testGrid article + article,
        .smellGrid article + article,
        .boyScoutGrid article + article,
        .pragmaticGrid article + article,
        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .meaningGrid article,
        .formatGrid article,
        .testGrid article,
        .smellGrid article,
        .boyScoutGrid article,
        .pragmaticGrid article,
        .checklist article,
        .exampleGrid article,
        .compareGrid article,
        .commentGrid article,
        .nameGrid article,
        .noteBox,
        .warningBox {
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
