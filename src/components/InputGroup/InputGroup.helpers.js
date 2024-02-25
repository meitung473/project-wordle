export function validate(value, regex) {
    let pattern = new RegExp(regex);
    const result = pattern.test(value);
    return result;
}

export function setElementValidity({ status, inputElement, message = null }) {
    if (status) {
        inputElement.setCustomValidity(message?.valid || "");
    } else {
        inputElement.setCustomValidity(message?.invalid || "INVALID");
    }
    inputElement.reportValidity();
    return status;
}
