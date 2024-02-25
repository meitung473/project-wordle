import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import LostBanner from "../Banner/LostBanner";
import WonBanner from "../Banner/WonBanner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = useState([]);

    // idle | won | lost
    const [gameStatus, setGameStatus] = useState("idle");

    function handleSubmitGuesses(currentGuess) {
        const nextGuesses = [...guesses, currentGuess];
        setGuesses(nextGuesses);

        // won
        if (currentGuess.toUpperCase() === answer) {
            setGameStatus("won");
            return;
        }

        if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus("lost");
        }
    }

    return (
        <>
            <GuessResults guesses={guesses} answer={answer} />
            <GuessInput handleSubmitGuesses={handleSubmitGuesses} />

            {gameStatus === "won" && (
                <WonBanner numOfGuesses={guesses.length} />
            )}

            {gameStatus === "lost" && <LostBanner answer={answer} />}
        </>
    );
}

export default Game;
