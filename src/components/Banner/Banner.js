import React from "react";

function Banner({ status, children, action, actionText }) {
    const className = status ? `${status} banner` : "banner";
    return (
        <div className={className}>
            {children}
            {action && <button onClick={action}>{actionText}</button>}
        </div>
    );
}

export default Banner;
