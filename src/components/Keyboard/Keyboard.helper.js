export function getStatusByLetter(validatedGuess) {
    const statusObj = {};

    // flat [[{letter,status}]]
    const allLetters = validatedGuess.flat();

    // rank
    const STATUS_RANKS = {
        correct: 1,
        misplaced: 2,
        incorrect: 3,
    };

    allLetters.forEach(({ letter, status }) => {
        const currentStatus = statusObj[letter];

        if (typeof currentStatus === "undefined") {
            statusObj[letter] = status;
        }
        const currentStatusRank = STATUS_RANKS[currentStatus];
        const newStatusRank = STATUS_RANKS[status];

        if (newStatusRank < currentStatusRank) {
            statusObj[letter] = status;
        }
    });
    return statusObj;
}
