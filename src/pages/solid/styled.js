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

    .solidIntro {
        padding: 30px;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        align-items: center;
        gap: 30px;
        border: 1px solid var(--border-color);
        border-radius: 15px;
        background: var(--surface-soft-color);
    }

    .letters {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .letters span {
        width: 42px;
        height: 52px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--surface-color);
        color: var(--text-color);
        font-size: 1.15rem;
        font-weight: 700;
    }

    .introText h2 {
        color: var(--text-color);
        font-size: 1rem;
        line-height: 1.45;
    }

    .introText p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.76rem;
        line-height: 1.8;
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

    .principleList {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .principle {
        min-height: 150px;
        padding: 24px;
        display: grid;
        grid-template-columns: 46px 40px minmax(0, 1fr);
        align-items: flex-start;
        gap: 16px;
        background: var(--surface-color);
    }

    .principle + .principle {
        border-top: 1px solid var(--border-color);
    }

    .principle:hover {
        background: var(--surface-soft-color);
    }

    .principleKey {
        width: 46px;
        height: 46px;
        display: grid;
        place-items: center;
        border-radius: 11px;
        background: var(--active-color);
        color: var(--active-text-color);
        font-size: 1rem;
        font-weight: 700;
    }

    .principleIcon {
        width: 38px;
        height: 38px;
        margin-top: 4px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--background-color);
        color: var(--text-color);
    }

    .principleContent h3 {
        color: var(--text-color);
        font-size: 0.86rem;
        line-height: 1.45;
    }

    .principleContent strong {
        display: block;
        margin-top: 6px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
    }

    .principleContent p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
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

    .exampleGrid p,
    .conceptBox p {
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.78;
    }

    .exampleGrid p {
        margin-top: 16px;
    }

    .conceptBox {
        padding: 24px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
    }

    .conceptBox > p {
        max-width: 800px;
    }

    .conceptBox pre {
        margin-top: 20px;
    }

    .infoGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .infoGrid article {
        padding: 26px;
    }

    .infoGrid article + article {
        border-left: 1px solid var(--border-color);
    }

    .infoGrid h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .infoGrid p {
        margin-top: 10px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.76;
    }

    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .checklist article {
        min-height: 140px;
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

    @media (max-width: 800px) {
        .solidIntro {
            grid-template-columns: 1fr;
        }

        .letters {
            flex-wrap: wrap;
        }

        .principle {
            grid-template-columns: 42px minmax(0, 1fr);
        }

        .principleIcon {
            display: none;
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .exampleGrid,
        .infoGrid,
        .checklist {
            grid-template-columns: 1fr;
        }

        .infoGrid article + article {
            border-left: 0;
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

        .solidIntro {
            padding: 22px 18px;
        }

        .letters span {
            width: 38px;
            height: 46px;
        }

        .principle {
            min-height: 0;
            padding: 18px;
        }

        .exampleGrid article,
        .conceptBox,
        .infoGrid article,
        .checklist article {
            padding: 19px;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
