import React from "react";
import Banner from "./Banner";

function LostBanner({ answer, handleReStart }) {
    return (
        <Banner variant="sad" action={handleReStart} actionText="Restart Game">
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
        </Banner>
    );
}

export default LostBanner;
