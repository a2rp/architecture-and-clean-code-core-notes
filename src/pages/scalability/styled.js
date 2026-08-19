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

    .scaleGrid,
    .exampleGrid,
    .cacheGrid,
    .compareGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .scaleGrid article,
    .exampleGrid article,
    .cacheGrid article,
    .compareGrid article {
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .scaleGrid > article > svg,
    .cacheGrid > article > svg,
    .compareGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .typeLabel,
    .exampleLabel {
        display: block;
        margin-top: 12px;
        color: var(--text-muted-color);
        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .scaleGrid h3,
    .cacheGrid h3,
    .compareGrid h3 {
        margin-top: 10px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .scaleGrid p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.72;
    }

    .scaleGrid ul,
    .cacheGrid ul,
    .compareGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .scaleGrid li,
    .cacheGrid li,
    .compareGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .scaleGrid li::before,
    .cacheGrid li::before,
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

    .bottleneckGrid,
    .rateGrid,
    .metricGrid,
    .degradationGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .bottleneckGrid article,
    .rateGrid article,
    .metricGrid article,
    .degradationGrid article,
    .checklist article {
        min-height: 130px;
        padding: 23px;
    }

    .bottleneckGrid article:nth-child(odd),
    .rateGrid article:nth-child(odd),
    .metricGrid article:nth-child(odd),
    .degradationGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .bottleneckGrid article:nth-child(n + 3),
    .rateGrid article:nth-child(n + 3),
    .metricGrid article:nth-child(n + 3),
    .degradationGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .bottleneckGrid svg,
    .rateGrid svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .bottleneckGrid strong,
    .rateGrid h3,
    .metricGrid strong,
    .degradationGrid strong,
    .checklist strong {
        display: block;
        margin-top: 11px;
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .rateGrid h3 {
        font-size: 0.8rem;
    }

    .bottleneckGrid p,
    .rateGrid p,
    .metricGrid p,
    .degradationGrid p,
    .checklist p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .noteBox,
    .warningBox,
    .prematureBox {
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
    .warningIcon,
    .prematureBox > svg {
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
    .warningBox h3,
    .prematureBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .noteBox p,
    .warningBox p,
    .prematureBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .databaseGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .databaseGrid article {
        min-height: 145px;
        padding: 23px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 15px;
    }

    .databaseGrid article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .databaseGrid article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .databaseGrid article > span {
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

    .databaseGrid h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .databaseGrid p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .cacheExample {
        margin-top: 12px;
    }

    .queueFlow {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr) 44px minmax(
                0,
                1fr
            );
        align-items: center;
        gap: 10px;
    }

    .queueFlow article {
        min-height: 145px;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .queueFlow svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .queueFlow strong {
        display: block;
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .queueFlow p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .flowArrow {
        color: var(--text-muted-color);
        text-align: center;
        font-size: 1rem;
    }

    .queueQuestions {
        margin-top: 12px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .queueQuestions article {
        min-height: 120px;
        padding: 22px;
    }

    .queueQuestions article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .queueQuestions article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .queueQuestions strong {
        color: var(--text-color);
        font-size: 0.78rem;
    }

    .queueQuestions p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .tradeoffGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .tradeoffGrid article {
        min-height: 140px;
        padding: 23px;
    }

    .tradeoffGrid article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .tradeoffGrid article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .tradeoffGrid span {
        color: var(--text-muted-color);
        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .tradeoffGrid strong {
        display: block;
        margin-top: 10px;
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .tradeoffGrid p {
        margin-top: 7px;
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

        .queueFlow {
            grid-template-columns: 1fr;
        }

        .flowArrow {
            transform: rotate(90deg);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .scaleGrid,
        .exampleGrid,
        .cacheGrid,
        .compareGrid,
        .bottleneckGrid,
        .rateGrid,
        .metricGrid,
        .degradationGrid,
        .checklist,
        .databaseGrid,
        .queueQuestions,
        .tradeoffGrid {
            grid-template-columns: 1fr;
        }

        .bottleneckGrid article:nth-child(odd),
        .rateGrid article:nth-child(odd),
        .metricGrid article:nth-child(odd),
        .degradationGrid article:nth-child(odd),
        .checklist article:nth-child(odd),
        .databaseGrid article:nth-child(odd),
        .queueQuestions article:nth-child(odd),
        .tradeoffGrid article:nth-child(odd) {
            border-right: 0;
        }

        .bottleneckGrid article + article,
        .rateGrid article + article,
        .metricGrid article + article,
        .degradationGrid article + article,
        .checklist article + article,
        .databaseGrid article + article,
        .queueQuestions article + article,
        .tradeoffGrid article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .scaleGrid article,
        .exampleGrid article,
        .cacheGrid article,
        .compareGrid article,
        .bottleneckGrid article,
        .rateGrid article,
        .metricGrid article,
        .degradationGrid article,
        .checklist article,
        .databaseGrid article,
        .queueFlow article,
        .queueQuestions article,
        .tradeoffGrid article,
        .noteBox,
        .warningBox,
        .prematureBox {
            padding: 19px;
        }

        .noteBox,
        .warningBox,
        .prematureBox {
            flex-direction: column;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
