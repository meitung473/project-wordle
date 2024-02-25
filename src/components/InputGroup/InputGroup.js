import React, { useRef, useState } from "react";
import GuessInput from "../GuessInput";
import {
    guessInputValidate,
    setGuessInputValidity,
} from "../GuessInput/GuessInput.helpers";
import { keyboardKeyValidate } from "../Keyboard/Keyboard.helpers";

function InputGroup({ renderKeyBoard, handleSubmitGuesses, disabled }) {
    const [input, setInput] = useState("");

    const formRef = useRef(null);

    function handleKeyBoardSync(letter) {
        if (disabled) {
            return;
        }
        switch (letter) {
            case "Enter":
                /**
                 * @link https://stackoverflow.com/questions/74350368/submit-form-from-sibling-element-in-react
                 */

                formRef.current &&
                    formRef.current.dispatchEvent(
                        new Event("submit", { cancelable: true, bubbles: true })
                    );

                /**
                 * (X) solution 1:
                 * formRef.current && formRef.current.requestSubmit();
                 *
                 * from MDN : requestSubmit(), on the other hand, acts as if a submit button were clicked. The form's content is validated, and the form is submitted only if validation succeeds.
                 */

                /**
                 * (X) solution 2:
                 * create a hidden button and onclick by manually
                 * formRef.current.querySelector('[type="submit"]').click()
                 *
                 * same problem as 1.
                 * */

                return;
            case "Backspace":
                console.log({ backspace: input.slice(0, -1) });
                setInput((prevInput) => prevInput.slice(0, -1));
                return;
            default:
                // check virtual keyboard is valid
                let isKeyValid = keyboardKeyValidate(letter);
                if (!isKeyValid) return;
                setInput((prevInput) => {
                    let nextInput = prevInput + letter.toUpperCase();
                    return nextInput;
                });
                const nextInput = (input + letter).toUpperCase();
                console.log({ nextInput });
                if (nextInput.length > 5) {
                    inputValidate(nextInput);
                    return;
                }
                break;
        }
    }

    function inputValidate(text) {
        let result = setGuessInputValidity({
            status: guessInputValidate(text),
            /**
             * @link https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
             * */
            // formRef.current.querySelector("#guess-input") ,it works too :O
            inputElement: formRef.current.elements["guess-input"],
        });

        return result;
    }

    return (
        <>
            <GuessInput
                formRef={formRef}
                handleSubmitGuesses={handleSubmitGuesses}
                setGuess={setInput}
                guess={input}
                inputValidate={inputValidate}
                disabled={disabled}
            />
            {renderKeyBoard && renderKeyBoard(handleKeyBoardSync)}
        </>
    );
}

export default InputGroup;
