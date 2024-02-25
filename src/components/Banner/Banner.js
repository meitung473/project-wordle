import React from "react";
import * as styles from "./Banner.module.css";

console.log(styles);

function Banner({ variant, children }) {
    const className = variant
        ? `${styles[variant]} ${styles["banner"]}`
        : styles["banner"];
    return <div className={className}>{children}</div>;
}

export default Banner;
