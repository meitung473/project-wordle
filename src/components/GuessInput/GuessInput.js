import { useState } from "react";
import {
    guessInputValidate,
    setGuessInputValidity,
} from "./GuessInput.helpers";

function GuessInput({ handleSubmitGuesses }) {
    const [guess, setGuess] = useState("");

    function handleInput(event) {
        setGuess(event.target.value.toUpperCase());
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log({ guess });

        let guessInputValid = setGuessInputValidity({
            status: guessInputValidate(guess),
            inputElement: event.target.querySelector("#guess-input"),
        });
        if (!guessInputValid) return;
        handleSubmitGuesses(guess);
        setGuess("");
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                onChange={handleInput}
                required
                onInput={(event) => {
                    setGuessInputValidity({
                        status: guessInputValidate(event.target.value),
                        inputElement: event.target,
                    });
                }}
            />
        </form>
    );
}

export default GuessInput;
