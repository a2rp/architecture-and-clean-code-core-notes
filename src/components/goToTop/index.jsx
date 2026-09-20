import { FiArrowUp } from "react-icons/fi";

import styles from "./styles.module.css";

const GoToTop = ({ visible = false, onClick }) => {
    return (
        <button className={`${styles.scope} goToTopRoot ${visible ? "visible" : ""}`}
            type="button"
            onClick={onClick}
            aria-label="Go to top"
            title="Go to top"
        >
            <FiArrowUp />
        </button>
    );
};

export default GoToTop;
