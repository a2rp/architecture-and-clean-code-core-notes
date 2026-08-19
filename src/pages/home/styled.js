import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 24px;

    .intro {
        max-width: 900px;
        padding: 18px 0 54px;
    }

    .label {
        width: fit-content;
        min-height: 32px;
        padding: 6px 11px;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        border: 1px solid var(--border-color);
        border-radius: 999px;
        background: var(--surface-soft-color);
        color: var(--text-soft-color);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.04em;
    }

    .label svg {
        font-size: 0.9rem;
    }

    .intro h1 {
        max-width: 820px;
        margin-top: 22px;
        color: var(--text-color);
        font-size: clamp(2.4rem, 6vw, 5.2rem);
        line-height: 1.02;
        letter-spacing: -0.055em;
    }

    .introText {
        max-width: 760px;
        margin-top: 24px;
        color: var(--text-soft-color);
        font-size: clamp(1rem, 1.8vw, 1.15rem);
        line-height: 1.85;
    }

    .introActions {
        margin-top: 30px;
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }

    .primaryLink,
    .secondaryLink {
        min-height: 44px;
        padding: 10px 15px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        border-radius: 10px;
        font-size: 0.76rem;
        font-weight: 700;
        transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease,
            color 160ms ease;
    }

    .primaryLink {
        background: var(--active-color);
        color: var(--active-text-color);
    }

    .secondaryLink {
        border: 1px solid var(--border-color);
        background: var(--surface-color);
        color: var(--text-color);
    }

    .primaryLink:hover,
    .secondaryLink:hover {
        transform: translateY(-2px);
    }

    .secondaryLink:hover {
        border-color: var(--border-strong-color);
        background: var(--hover-color);
    }

    .summaryGrid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .summaryCard {
        min-width: 0;
        padding: 32px 28px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
    }

    .summaryCard + .summaryCard {
        border-left: 1px solid var(--border-color);
    }

    .summaryCard > svg {
        flex-shrink: 0;
        margin-top: 4px;
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .summaryCard h2 {
        margin-bottom: 10px;
        color: var(--text-color);
        font-size: 0.92rem;
        line-height: 1.4;
    }

    .summaryCard p {
        color: var(--text-soft-color);
        font-size: 0.75rem;
        line-height: 1.75;
    }

    .section {
        padding: 64px 0;
    }

    .sectionHeader {
        max-width: 720px;
        margin-bottom: 30px;
    }

    .sectionLabel {
        color: var(--text-muted-color);
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.11em;
        text-transform: uppercase;
    }

    .sectionHeader h2,
    .closing h2 {
        margin-top: 10px;
        color: var(--text-color);
        font-size: clamp(1.6rem, 3vw, 2.4rem);
        line-height: 1.2;
        letter-spacing: -0.035em;
    }

    .sectionHeader p {
        margin-top: 12px;
        color: var(--text-soft-color);
        font-size: 0.84rem;
        line-height: 1.8;
    }

    .topicGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .topicCard {
        position: relative;
        min-height: 150px;
        padding: 22px;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: flex-start;
        gap: 15px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
        transition:
            transform 170ms ease,
            border-color 170ms ease,
            background 170ms ease,
            box-shadow 170ms ease;
    }

    .topicCard:hover {
        transform: translateY(-3px);
        border-color: var(--border-strong-color);
        background: var(--surface-soft-color);
        box-shadow: 0 16px 36px var(--shadow-color);
    }

    .topicIcon {
        width: 38px;
        height: 38px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background: var(--background-color);
        color: var(--text-color);
    }

    .topicContent h3 {
        color: var(--text-color);
        font-size: 0.84rem;
        line-height: 1.4;
    }

    .topicContent p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.7;
    }

    .topicArrow {
        margin-top: 9px;
        color: var(--text-muted-color);
        transition:
            transform 170ms ease,
            color 170ms ease;
    }

    .topicCard:hover .topicArrow {
        color: var(--text-color);
        transform: translateX(3px);
    }

    .principlesSection {
        border-top: 1px solid var(--border-color);
    }

    .principles {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .principles article {
        min-height: 150px;
        padding: 24px;
    }

    .principles article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .principles article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .principles strong {
        color: var(--text-color);
        font-size: 0.82rem;
    }

    .principles p {
        margin-top: 9px;
        color: var(--text-soft-color);
        font-size: 0.74rem;
        line-height: 1.75;
    }

    .closing {
        padding: 34px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 32px;
        border: 1px solid var(--border-color);
        border-radius: 16px;
        background: var(--surface-soft-color);
    }

    .closing > div {
        max-width: 700px;
    }

    .closing p {
        margin-top: 12px;
        color: var(--text-soft-color);
        font-size: 0.8rem;
        line-height: 1.8;
    }

    .closing > a {
        flex-shrink: 0;
        min-height: 42px;
        padding: 9px 14px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--border-color);
        border-radius: 9px;
        color: var(--text-color);
        font-size: 0.72rem;
        font-weight: 700;
        transition:
            background 160ms ease,
            transform 160ms ease,
            border-color 160ms ease;
    }

    .closing > a:hover {
        background: var(--hover-color);
        border-color: var(--border-strong-color);
        transform: translateX(2px);
    }

    @media (max-width: 900px) {
        .summaryGrid {
            grid-template-columns: 1fr;
        }

        .summaryCard + .summaryCard {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .intro {
            padding-top: 4px;
            padding-bottom: 42px;
        }

        .intro h1 {
            font-size: clamp(2.2rem, 12vw, 4rem);
        }

        .topicGrid,
        .principles {
            grid-template-columns: 1fr;
        }

        .principles article:nth-child(odd) {
            border-right: 0;
        }

        .principles article + article {
            border-top: 1px solid var(--border-color);
        }

        .closing {
            padding: 26px 22px;
            align-items: flex-start;
            flex-direction: column;
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .summaryCard {
            padding: 24px 18px;
        }

        .topicCard {
            min-height: 0;
            padding: 18px;
            grid-template-columns: auto minmax(0, 1fr);
        }

        .topicArrow {
            display: none;
        }

        .principles article {
            min-height: 0;
            padding: 20px;
        }
    }
`;
