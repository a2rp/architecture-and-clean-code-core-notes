import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 24px;

    .pageHeader {
        max-width: 850px;
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

    .number {
        color: var(--text-muted-color);
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.08em;
    }

    .introGrid h2 {
        margin-top: 14px;
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
        max-width: 720px;
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

    .principlesGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .principleCard {
        min-height: 150px;
        padding: 22px;
        display: flex;
        align-items: flex-start;
        gap: 15px;
        border: 1px solid var(--border-color);
        border-radius: 13px;
        background: var(--surface-color);
        transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease;
    }

    .principleCard:hover {
        transform: translateY(-2px);
        background: var(--surface-soft-color);
        border-color: var(--border-strong-color);
    }

    .icon {
        width: 38px;
        height: 38px;
        flex-shrink: 0;
        display: grid;
        place-items: center;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--background-color);
        color: var(--text-color);
    }

    .principleCard h3 {
        color: var(--text-color);
        font-size: 0.84rem;
        line-height: 1.45;
    }

    .principleCard p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.72;
    }

    .compareGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .compareGrid article {
        padding: 26px;
    }

    .compareGrid article + article {
        border-left: 1px solid var(--border-color);
    }

    .compareGrid h3 {
        margin-bottom: 18px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .compareGrid ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .compareGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
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

    .exampleGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article {
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
        line-height: 1.75;
    }

    .questionList {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .questionList article {
        min-height: 140px;
        padding: 24px;
    }

    .questionList article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .questionList article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .questionList strong {
        color: var(--text-color);
        font-size: 0.8rem;
        line-height: 1.5;
    }

    .questionList p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.75;
    }

    .takeaway {
        padding: 32px;
        border: 1px solid var(--border-color);
        border-radius: 15px;
        background: var(--surface-soft-color);
    }

    .takeaway p {
        max-width: 780px;
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

        .principlesGrid,
        .compareGrid,
        .exampleGrid,
        .questionList {
            grid-template-columns: 1fr;
        }

        .compareGrid article + article {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }

        .questionList article:nth-child(odd) {
            border-right: 0;
        }

        .questionList article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .introGrid article,
        .compareGrid article,
        .questionList article {
            padding: 20px;
        }

        .principleCard {
            min-height: 0;
            padding: 18px;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
