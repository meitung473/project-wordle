import React from "react";
import Banner from "../Banner";
function WonBanner({ numOfGuess, handleReStart }) {
    return (
        <Banner
            status="happy"
            action={handleReStart}
            actionText={"Restart game"}
        >
            <p>
                <strong>Congratulations!</strong> Got it in {""}
                <strong>
                    {numOfGuess === 1 ? "1 guess" : `${numOfGuess} guesses`}
                </strong>
                .
            </p>
        </Banner>
    );
}

export default WonBanner;
