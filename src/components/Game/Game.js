import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game({ handleReStart }) {
    const [answer, setAnswer] = useState(() => {
        let newAns = sample(WORDS);
        console.info({ newAns });
        return newAns;
    });
    const [guesses, setGuesses] = useState([]);

    const [gameStatus, setGameStatus] = useState("idle");

    function handleSubmitGuess(tentativeGuess) {
        // guesses update async
        const nextGuesses = [...guesses, tentativeGuess];
        setGuesses(nextGuesses);

        if (tentativeGuess.toUpperCase() === answer) {
            setGameStatus("won");
        } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus("lost");
        }
    }
    const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

    return (
        <>
            <GuessResults validatedGuesses={validatedGuesses} />
            <GuessInput
                gameStatus={gameStatus}
                handleSubmitGuess={handleSubmitGuess}
            />

            <Keyboard validatedGuesses={validatedGuesses} />

            {gameStatus === "won" && (
                <WonBanner
                    numOfGuess={guesses.length}
                    handleReStart={handleReStart}
                />
            )}

            {gameStatus === "lost" && (
                <LostBanner answer={answer} handleReStart={handleReStart} />
            )}
        </>
    );
}

export default Game;
