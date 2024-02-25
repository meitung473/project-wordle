import { validate } from "../InputGroup/InputGroup.helpers";
// validatedGuesses : [[{letter,status}],[...]]
export function getKeyStatus(validatedGuesses) {
    const statusMapping = {}; // {A: "incorrect"}
    const flattenResults = validatedGuesses.flat(); // [A-Z]

    flattenResults.forEach(({ letter, status }) => {
        let currentStatus = statusMapping[letter];
        if (!currentStatus) {
            statusMapping[letter] = status;
            return;
        }

        // priority : correct > misplaced > incorrect
        const rankStatus = {
            correct: 1,
            misplaced: 2,
            incorrect: 3,
        };

        if (rankStatus[currentStatus] > rankStatus[status]) {
            statusMapping[letter] = status;
        }
    });

    return statusMapping;
}

export const keyboardKeyValidate = (value) => validate(value, /^[a-zA-Z]{1}$/);
