import React, { useState } from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
    const [tentativeGuess, setTentativeGuess] = useState("");
    function handleInput(event) {
        let nextGuess = event.target.value.toUpperCase();
        setTentativeGuess(nextGuess);
    }
    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitGuess(tentativeGuess);

        setTentativeGuess("");
    }
    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={tentativeGuess}
                onChange={handleInput}
                pattern={`[a-zA-Z]{5}`}
                disabled={gameStatus !== "idle"}
            />
        </form>
    );
}

export default GuessInput;
