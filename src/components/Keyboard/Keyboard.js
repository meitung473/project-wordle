import React from "react";
import { rowKeys } from "./Keyboard.constant";
import { getKeyStatus } from "./Keyboard.helpers";
import * as styles from "./Keyboard.module.css";

function Key({ letter, action = () => {}, status }) {
    let className = status
        ? `${styles["key"]} ${styles[status]}`
        : styles["key"];
    let isAlphabetKey = /^[a-zA-z]{1}$/.test(letter);
    return (
        <button
            type="button"
            className={
                isAlphabetKey
                    ? className
                    : `${className} ${styles[letter.toLowerCase()]}`
            }
            onClick={() => {
                // it receives a letter as param
                action && action(letter);
            }}
        >
            <strong>{letter}</strong>
        </button>
    );
}

function Keyboard({ validatedGuesses, action }) {
    const keysStatus = getKeyStatus(validatedGuesses);

    return (
        <div className={styles["wrapper"]}>
            {rowKeys.map((letters, rowIndex) => (
                <div className={styles["row"]} key={rowIndex}>
                    {letters.map((letter, lettersIndex) => {
                        // const isAlphabetKey = /[a-zA-Z]/.test(letter);

                        return (
                            <Key
                                key={lettersIndex}
                                status={keysStatus[letter]}
                                action={action}
                                letter={letter}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;
