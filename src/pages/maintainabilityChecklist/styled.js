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

    .healthGrid {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .healthGrid article {
        padding: 23px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 15px;
    }

    .healthGrid article + article {
        border-top: 1px solid var(--border-color);
    }

    .healthGrid article > span,
    .changeFlow article > span {
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

    .healthGrid h3,
    .changeFlow h3 {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .healthGrid p,
    .changeFlow p {
        margin-top: 7px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .checklistSections {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .checklistSection {
        min-width: 0;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
        background: var(--surface-color);
    }

    .checklistSection > header {
        min-height: 64px;
        padding: 16px 18px;
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid var(--border-color);
        background: var(--surface-soft-color);
    }

    .sectionIcon {
        width: 34px;
        height: 34px;
        flex-shrink: 0;
        display: grid;
        place-items: center;
        border: 1px solid var(--border-color);
        border-radius: 9px;
        background: var(--surface-color);
        color: var(--text-muted-color);
    }

    .checklistSection h3 {
        color: var(--text-color);
        font-size: 0.82rem;
    }

    .items {
        padding: 8px 18px 16px;
    }

    .checkItem {
        padding: 11px 0;
        display: grid;
        grid-template-columns: 18px minmax(0, 1fr);
        gap: 9px;
    }

    .checkItem + .checkItem {
        border-top: 1px solid var(--border-color);
    }

    .checkItem svg {
        margin-top: 3px;
        color: var(--text-muted-color);
        font-size: 0.8rem;
    }

    .checkItem p {
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .exampleGrid,
    .securityGrid,
    .refactorGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .exampleGrid article,
    .securityGrid article,
    .refactorGrid article {
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

    .reviewGrid,
    .operationsGrid,
    .healthyGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .reviewGrid article,
    .operationsGrid article,
    .healthyGrid article {
        min-height: 130px;
        padding: 23px;
    }

    .reviewGrid article:nth-child(odd),
    .operationsGrid article:nth-child(odd),
    .healthyGrid article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .reviewGrid article:nth-child(n + 3),
    .operationsGrid article:nth-child(n + 3),
    .healthyGrid article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .reviewGrid strong {
        color: var(--text-color);
        font-size: 0.78rem;
    }

    .reviewGrid p,
    .operationsGrid p,
    .healthyGrid p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.72;
    }

    .operationsGrid svg,
    .healthyGrid svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .operationsGrid h3,
    .healthyGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .changeFlow {
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .changeFlow article {
        padding: 23px;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 15px;
    }

    .changeFlow article + article {
        border-top: 1px solid var(--border-color);
    }

    .securityBox,
    .warningBox {
        padding: 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        border: 1px solid var(--border-color);
        border-radius: 14px;
        background: var(--surface-soft-color);
    }

    .securityBox > svg,
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

    .securityBox h3,
    .warningBox h3 {
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .securityBox p,
    .warningBox p {
        margin-top: 8px;
        color: var(--text-soft-color);
        font-size: 0.73rem;
        line-height: 1.75;
    }

    .securityGrid {
        margin-top: 12px;
    }

    .securityGrid > article > svg,
    .refactorGrid > article > svg {
        color: var(--text-muted-color);
        font-size: 1rem;
    }

    .securityGrid h3,
    .refactorGrid h3 {
        margin-top: 13px;
        color: var(--text-color);
        font-size: 0.84rem;
    }

    .securityGrid ul,
    .refactorGrid ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .securityGrid li,
    .refactorGrid li {
        position: relative;
        padding-left: 18px;
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
    }

    .securityGrid li::before,
    .refactorGrid li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.7em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--text-muted-color);
    }

    .preMerge {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border: 1px solid var(--border-color);
        border-radius: 14px;
        overflow: hidden;
    }

    .preMerge article {
        min-height: 82px;
        padding: 18px 20px;
        display: grid;
        grid-template-columns: 18px minmax(0, 1fr);
        gap: 10px;
        align-items: start;
    }

    .preMerge article:nth-child(odd) {
        border-right: 1px solid var(--border-color);
    }

    .preMerge article:nth-child(n + 3) {
        border-top: 1px solid var(--border-color);
    }

    .preMerge svg {
        margin-top: 3px;
        color: var(--text-muted-color);
        font-size: 0.82rem;
    }

    .preMerge p {
        color: var(--text-soft-color);
        font-size: 0.71rem;
        line-height: 1.7;
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

        .checklistSections {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 720px) {
        .pageHeader {
            padding-top: 0;
            padding-bottom: 40px;
        }

        .exampleGrid,
        .securityGrid,
        .refactorGrid,
        .reviewGrid,
        .operationsGrid,
        .healthyGrid,
        .preMerge {
            grid-template-columns: 1fr;
        }

        .reviewGrid article:nth-child(odd),
        .operationsGrid article:nth-child(odd),
        .healthyGrid article:nth-child(odd),
        .preMerge article:nth-child(odd) {
            border-right: 0;
        }

        .reviewGrid article + article,
        .operationsGrid article + article,
        .healthyGrid article + article,
        .preMerge article + article {
            border-top: 1px solid var(--border-color);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding: 48px 0;
        }

        .healthGrid article,
        .exampleGrid article,
        .reviewGrid article,
        .operationsGrid article,
        .healthyGrid article,
        .securityGrid article,
        .refactorGrid article,
        .preMerge article,
        .changeFlow article,
        .securityBox,
        .warningBox {
            padding: 19px;
        }

        .securityBox,
        .warningBox {
            flex-direction: column;
        }

        .items {
            padding-left: 15px;
            padding-right: 15px;
        }

        .checklistSection > header {
            padding-left: 15px;
            padding-right: 15px;
        }

        .takeaway {
            padding: 24px 20px;
        }
    }
`;
