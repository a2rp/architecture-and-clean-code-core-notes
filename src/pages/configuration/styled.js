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
    .envGrid,
    .secretGrid,
    .flagGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article,
    .envGrid article,
    .secretGrid article,
    .flagGrid article {
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

    .envGrid > article > svg,
    .secretGrid > article > svg,
    .flagGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .envGrid h3,
    .secretGrid h3,
    .flagGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .envGrid ul,
    .secretGrid ul,
    .flagGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .envGrid li,
    .secretGrid li,
    .flagGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .envGrid li::before,
    .secretGrid li::before,
    .flagGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .secretGrid p {
        margin-top: 14px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .configBox {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .configBox > pre {
        height: 100%;
        margin: 0;
        border: 0;
        border-radius: 0;
    }

    .configDetails {
        border-left: 1px solid var(--border-color);
    }

    .configDetails article {
        min-height: 105px;
        padding: 20px;
        display: grid;
        grid-template-columns: 40px minmax(0, 1fr);
        gap: 14px;
        background: var(--surface-color);
    }

    .configDetails article + article {
        border-top: 1px solid var(--border-color);
    }

    .configDetails article > span {
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        border-radius: 9px;
        background: var(--active-color);
        color: var(--active-text-color);
        font-size: 0.66rem;
        font-weight: 700;
    }

    .configDetails h3 {
        color: var(--text-color);
        font-size: 0.78rem;
    }

    .configDetails p {
        margin-top: 6px;
        color: var(--text-soft-color);
        font-size: 0.7rem;
        line-height: 1.7;
    }

    .warningBox,
    .noteBox,
    .frontendBox {
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
    .noteBox > svg,
    .frontendBox > svg {
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
    .noteBox h3,
    .frontendBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .warningBox p,
    .noteBox p,
    .frontendBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .flagBox {
        padding: 1px;
        border-radius: 14px;
    }

    .flagBox pre {
        margin-top: 0;
    }

    .flagGrid {
        margin-top: 12px;
    }

    .driftGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .driftGrid article,
    .checklist article {
        min-height: 130px;
        padding: 23px;
    }

    .driftGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .driftGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .driftGrid strong,
    .checklist strong {
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .driftGrid p,
    .checklist p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .startupFlow {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .startupFlow article {
        padding: 23px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 15px;
    }

    .startupFlow article + article {
        border-top: 1px solid var(--border-color);
    }

    .startupFlow article > span {
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

    .startupFlow h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .startupFlow p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .startupExample,
    .frontendExample {
        margin-top: 12px;
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

        .configBox {
            grid-template-columns: 1fr;
        }

        .configDetails {
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
        .envGrid,
        .secretGrid,
        .flagGrid,
        .driftGrid,
        .checklist {
            grid-template-columns: 1fr;
        }

        .driftGrid article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .driftGrid article + article,
        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .exampleGrid article,
        .envGrid article,
        .secretGrid article,
        .flagGrid article,
        .driftGrid article,
        .checklist article,
        .configDetails article,
        .warningBox,
        .noteBox,
        .frontendBox,
        .startupFlow article {
            padding: 19px;
        }

        .warningBox,
        .noteBox,
        .frontendBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
