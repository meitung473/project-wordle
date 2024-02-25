import React from "react";
import * as styles from "./Banner.module.css";

function Banner({ variant, children, action, actionText }) {
    const className = variant
        ? `${styles[variant]} ${styles["banner"]}`
        : styles["banner"];
    return (
        <div className={className}>
            {children}
            {action && (
                <button type="button" onClick={action}>
                    {actionText}
                </button>
            )}
        </div>
    );
}

export default Banner;
