import * as Styled from "./styled";

const Loader = () => {
    return (
        <Styled.Wrapper
            role="status"
            aria-live="polite"
            aria-label="Loading page"
        >
            <div className="loader">
                <span />
                <span />
                <span />
            </div>

            <p>Loading notes...</p>
        </Styled.Wrapper>
    );
};

export default Loader;
