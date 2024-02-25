import React from "react";
import Banner from "./Banner";

function WonBanner({ numOfGuesses, handleReStart }) {
    return (
        <Banner
            variant="happy"
            action={handleReStart}
            actionText="Restart Game"
        >
            <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>
                    {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
                </strong>
                .
            </p>
        </Banner>
    );
}

export default WonBanner;
