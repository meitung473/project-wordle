import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import LostBanner from "../Banner/LostBanner";
import WonBanner from "../Banner/WonBanner";
import GuessResults from "../GuessResults";
import InputGroup from "../InputGroup/InputGroup";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
    const [answer, setAnswer] = useState(() => {
        const newAnswer = sample(WORDS);
        console.info({ answer: newAnswer });
        return newAnswer;
    });
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

    const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

    function handleReStart() {
        const newAnswer = sample(WORDS);
        console.log({ answer: newAnswer });
        setAnswer(newAnswer);
        setGameStatus("idle");
        setGuesses([]);
    }

    return (
        <>
            <GuessResults validatedGuesses={validatedGuesses} />
            <InputGroup
                handleSubmitGuesses={handleSubmitGuesses}
                disabled={gameStatus !== "idle"}
                renderKeyBoard={(handleKeyBoardSync) => (
                    <Keyboard
                        validatedGuesses={validatedGuesses}
                        action={(text) => {
                            handleKeyBoardSync(text);
                        }}
                    />
                )}
            />

            {gameStatus === "won" && (
                <WonBanner
                    numOfGuesses={guesses.length}
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
