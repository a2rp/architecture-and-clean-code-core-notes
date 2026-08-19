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
    .exampleGrid,
    .mockGrid,
    .brittleGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .boundaryGrid article,
    .exampleGrid article,
    .mockGrid article,
    .brittleGrid article {
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .typeLabel,
    .exampleLabel {
        color: var(--text-muted-color);
        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .boundaryGrid h3,
    .mockGrid h3,
    .brittleGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .boundaryGrid p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.72;
    }

    .boundaryGrid ul,
    .mockGrid ul,
    .brittleGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .boundaryGrid li,
    .mockGrid li,
    .brittleGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .boundaryGrid li::before,
    .mockGrid li::before,
    .brittleGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .mockGrid > article > svg,
    .brittleGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
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

    .aaaBox {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .aaaBox > pre {
        height: 100%;
        margin: 0;
        border: 0;
        border-radius: 0;
    }

    .aaaDetails {
        border-left: 1px solid var(--border-color);
    }

    .aaaDetails article {
        min-height: 110px;
        padding: 20px;
        display: grid;
        grid-template-columns: 40px minmax(0, 1fr);
        gap: 14px;
        background: var(--surface-color);
    }

    .aaaDetails article + article {
        border-top: 1px solid var(--border-color);
    }

    .aaaDetails article > span {
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

    .aaaDetails h3 {
        color: var(--text-color);
        font-size: 0.78rem;
    }

    .aaaDetails p {
        margin-top: 6px;
        color: var(--text-soft-color);
        font-size: 0.7rem;
        line-height: 1.7;
    }

    .signalGrid,
    .strategyGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .signalGrid article,
    .strategyGrid article,
    .checklist article {
        min-height: 135px;
        padding: 23px;
    }

    .signalGrid article:nth-child(odd),
    .strategyGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .signalGrid article:nth-child(n + 3),
    .strategyGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .signalGrid strong,
    .checklist strong {
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .signalGrid p,
    .strategyGrid p,
    .checklist p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

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

    .noteBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .noteBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .edgeGrid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .edgeGrid article {
        min-height: 145px;
        padding: 22px;
    }

    .edgeGrid article:not(:nth-child(3n + 1)) {
        border-left: 1px solid var(--border-color);
    }

    .edgeGrid article:nth-child(n + 4) {
        border-top: 1px solid var(--border-color);
    }

    .edgeGrid article > span {
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

    .edgeGrid h3 {
        margin-top: 12px;
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .edgeGrid p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .safetyFlow {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .safetyFlow article {
        padding: 23px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 15px;
    }

    .safetyFlow article + article {
        border-top: 1px solid var(--border-color);
    }

    .safetyFlow article > span {
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

    .safetyFlow h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .safetyFlow p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .strategyGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .strategyGrid h3 {
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

        .aaaBox {
            grid-template-columns: 1fr;
        }

        .aaaDetails {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }

        .edgeGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .edgeGrid article {
            border-left: 0 !important;
        }

        .edgeGrid article:nth-child(even) {
            border-left: 1px solid var(--border-color) !important;
        }

        .edgeGrid article:nth-child(n + 3) {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .boundaryGrid,
        .exampleGrid,
        .mockGrid,
        .brittleGrid,
        .signalGrid,
        .strategyGrid,
        .checklist,
        .edgeGrid {
            grid-template-columns: 1fr;
        }

        .signalGrid article:nth-child(odd),
        .strategyGrid article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .signalGrid article + article,
        .strategyGrid article + article,
        .checklist article + article,
        .edgeGrid article + article {
            border-top: 1px solid var(--border-color);
        }

        .edgeGrid article {
            border-left: 0 !important;
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .boundaryGrid article,
        .exampleGrid article,
        .mockGrid article,
        .brittleGrid article,
        .aaaDetails article,
        .signalGrid article,
        .strategyGrid article,
        .checklist article,
        .edgeGrid article,
        .safetyFlow article,
        .noteBox {
            padding: 19px;
        }

        .noteBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
