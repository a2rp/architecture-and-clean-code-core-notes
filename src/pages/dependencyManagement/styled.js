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

    .dependencyTree {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .rootPackage {
        min-height: 64px;
        padding: 18px 22px;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 1px solid var(--border-color);
        background: var(--surface-soft-color);
    }

    .rootPackage svg {
        color: var(--text-muted-color);
    }

    .rootPackage strong {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .treeGrid,
    .versionGrid,
    .lockGrid,
    .decisionGrid,
    .checklist {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .treeGrid article,
    .versionGrid article,
    .lockGrid article,
    .decisionGrid article,
    .checklist article {
        min-height: 135px;
        padding: 23px;
    }

    .treeGrid article:nth-child(odd),
    .versionGrid article:nth-child(odd),
    .lockGrid article:nth-child(odd),
    .decisionGrid article:nth-child(odd),
    .checklist article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .treeGrid article:nth-child(n + 3),
    .versionGrid article:nth-child(n + 3),
    .lockGrid article:nth-child(n + 3),
    .decisionGrid article:nth-child(n + 3),
    .checklist article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .typeLabel,
    .exampleLabel {
        color: var(--text-muted-color);
        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .treeGrid h3,
    .lockGrid h3 {
        margin-top: 11px;
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .treeGrid p,
    .lockGrid p,
    .decisionGrid p,
    .checklist p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
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

    .versionGrid,
    .lockGrid,
    .decisionGrid,
    .checklist {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .versionGrid strong,
    .decisionGrid strong,
    .checklist strong {
        color: var(--text-color);
        font-size: 0.78rem;
        line-height: 1.55;
    }

    .versionGrid pre {
        margin-top: 12px;
    }

    .versionGrid p {
        margin-top: 10px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .lockGrid svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .exampleGrid,
    .securityGrid,
    .abandonedGrid,
    .categoryGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article,
    .securityGrid article,
    .abandonedGrid article,
    .categoryGrid article {
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-color);
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
    .categoryGrid p {
        margin-top: 16px;
        color: var(--text-soft-color);
        font-size: 0.72rem;
        line-height: 1.76;
    }

    .adapterBox {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .adapterBox > pre {
        height: 100%;
        margin: 0;
        border: 0;
        border-radius: 0;
    }

    .adapterDetails {
        border-left: 1px solid var(--border-color);
    }

    .adapterDetails article {
        min-height: 110px;
        padding: 20px;
        display: grid;
        grid-template-columns: 40px minmax(0, 1fr);
        gap: 14px;
        background: var(--surface-color);
    }

    .adapterDetails article + article {
        border-top: 1px solid var(--border-color);
    }

    .adapterDetails article > span,
    .upgradeFlow article > span {
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

    .adapterDetails h3,
    .upgradeFlow h3 {
        color: var(--text-color);
        font-size: 0.78rem;
    }

    .adapterDetails p,
    .upgradeFlow p {
        margin-top: 6px;
        color: var(--text-soft-color);
        font-size: 0.7rem;
        line-height: 1.7;
    }

    .packageExample {
        margin-top: 12px;
    }

    .upgradeFlow {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .upgradeFlow article {
        padding: 23px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 15px;
    }

    .upgradeFlow article + article {
        border-top: 1px solid var(--border-color);
    }

    .securityGrid > article > svg,
    .abandonedGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .securityGrid h3,
    .abandonedGrid h3,
    .categoryGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .securityGrid ul,
    .abandonedGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .securityGrid li,
    .abandonedGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .securityGrid li::before,
    .abandonedGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .categoryGrid pre {
        margin-top: 15px;
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

        .adapterBox {
            grid-template-columns: 1fr;
        }

        .adapterDetails {
            border-left: 0;
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .treeGrid,
        .versionGrid,
        .lockGrid,
        .decisionGrid,
        .checklist,
        .exampleGrid,
        .securityGrid,
        .abandonedGrid,
        .categoryGrid {
            grid-template-columns: 1fr;
        }

        .treeGrid article:nth-child(odd),
        .versionGrid article:nth-child(odd),
        .lockGrid article:nth-child(odd),
        .decisionGrid article:nth-child(odd),
        .checklist article:nth-child(odd) {
            border-right: 0;
        }

        .treeGrid article + article,
        .versionGrid article + article,
        .lockGrid article + article,
        .decisionGrid article + article,
        .checklist article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .treeGrid article,
        .versionGrid article,
        .lockGrid article,
        .decisionGrid article,
        .checklist article,
        .exampleGrid article,
        .securityGrid article,
        .abandonedGrid article,
        .categoryGrid article,
        .adapterDetails article,
        .upgradeFlow article,
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
