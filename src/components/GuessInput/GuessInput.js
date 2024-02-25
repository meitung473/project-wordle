function GuessInput({
    guess,
    setGuess,
    handleSubmitGuesses,
    inputValidate,
    formRef,
    disabled,
}) {
    function handleInput(event) {
        setGuess(event.target.value.toUpperCase());
    }

    function handleSubmit(event) {
        event.preventDefault();

        let isValid = inputValidate(guess);
        if (!isValid) return;
        handleSubmitGuesses(guess);
        setGuess("");
    }

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={handleSubmit}
            ref={formRef}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                onChange={handleInput}
                required
                onInput={(event) => {
                    inputValidate(event.target.value);
                }}
                minLength={5}
                maxLength={5}
                disabled={disabled}
            />
        </form>
    );
}

export default GuessInput;
