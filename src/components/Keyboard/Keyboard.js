import React from "react";
import { keyboardRows } from "./Keyboard.constant";
import { getStatusByLetter } from "./Keyboard.helper";
import * as styles from "./keyboard.module.css";

function Keyboard({ validatedGuesses }) {
    const statusByLetter = getStatusByLetter(validatedGuesses);
    return (
        <div className={`${styles["wrapper"]}`}>
            {keyboardRows.map((row, index) => (
                <p className={styles["row"]} key={index}>
                    {row.map((letter) => {
                        let currentLetter = letter.toUpperCase();
                        let status = statusByLetter[currentLetter];
                        return (
                            <span
                                key={letter}
                                className={`${styles["key"]} ${styles[status]}`}
                            >
                                <strong>{letter.toUpperCase()}</strong>
                            </span>
                        );
                    })}
                </p>
            ))}
        </div>
    );
}

export default Keyboard;
