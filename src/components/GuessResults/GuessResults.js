import React from "react";

function GuessResults({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map((value, index) => (
                <p key={index} className="guess">
                    {value}
                </p>
            ))}
        </div>
    );
}

export default GuessResults;
