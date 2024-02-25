import { setElementValidity, validate } from "../InputGroup/InputGroup.helpers";

const guessInputRegex = /^[a-zA-Z]{5}$/i;

export const guessInputValidate = (value) => validate(value, guessInputRegex);

export const setGuessInputValidity = ({ status, inputElement }) =>
    setElementValidity({
        status,
        inputElement,
        message: {
            invalid: "Please enter exactly 5 characters",
        },
    });
