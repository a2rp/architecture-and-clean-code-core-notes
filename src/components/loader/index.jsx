import styles from "./styles.module.css";

const Loader = () => {
    return (
        <div className={`${styles.scope} loaderRoot`} role="status"
            aria-live="polite"
            aria-label="Loading page"
        >
            <div className="loader">
                <span />
                <span />
                <span />
            </div>

            <p>Loading notes...</p>
        </div>
    );
};

export default Loader;
