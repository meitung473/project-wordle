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

function validate(value, regex) {
    let pattern = new RegExp(regex);
    const result = pattern.test(value);
    return result;
}

function setElementValidity({ status, inputElement, message = null }) {
    if (status) {
        inputElement.setCustomValidity(message?.valid || "");
    } else {
        inputElement.setCustomValidity(message?.invalid || "INVALID");
    }
    inputElement.reportValidity();
    return status;
}
