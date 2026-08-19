import { FiArrowUp } from "react-icons/fi";

import * as Styled from "./styled";

const GoToTop = ({ visible = false, onClick }) => {
    return (
        <Styled.Wrapper
            className={visible ? "visible" : ""}
            type="button"
            onClick={onClick}
            aria-label="Go to top"
            title="Go to top"
        >
            <FiArrowUp />
        </Styled.Wrapper>
    );
};

export default GoToTop;
