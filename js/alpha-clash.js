// function play() {
//     //    step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden");
//     // console.log(homeSection.classList);

//     // show the play-ground
//     const playgroundSection = document.getElementById("play-ground");
//     playgroundSection.classList.remove("hidden");
//     // console.log(playgroundSection.classList);
// }

function handleKeyboardKeyupEvent(event) {
    const playerPressed = event.key;
    console.log("player pressed:", playerPressed);
    // stop the game 'Esc'
    if (playerPressed === "Escaped") {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElements = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElements.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // Check Matched Or not
    if (playerPressed === expectedAlphabet) {
        console.log("you got a point");

        const currentScore = getTextElementValueById("current-score");
        const updateScore = currentScore + 1;
        setTextElementValueById("current-score", updateScore);

        // -----------------------------------
        // console.log("you have press correctly", expectedAlphabet);
        // update score:
        // 1/get the current score
        // const currentScoreElement = document.getElementById("current-score");
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2.Increase Score by 1
        // const newScore = currentScore + 1;
        // //    3. Show The Update Score
        // currentScoreElement.innerText = newScore;
        // // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continuePlay();
    } else {
        console.log("you missed.you lost a life");

        const currentLife = getTextElementValueById("current-life");
        const updateLife = currentLife - 1;
        setTextElementValueById("current-life", updateLife);

        if (updateLife === 0) {
            gameOver();
        }

        // -------------------------------------------------------

        // step-1: get the current life number
        // const currentLifeElements = document.getElementById("current-life");
        // const currentLifeText = currentLifeElements.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2: reduce the life count
        // const newLife = currentLife - 1;
        // // step-3: display the update life count
        // currentLifeElements.innerText = newLife;
    }
}

// capture keyboard key press
document.addEventListener("keyup", handleKeyboardKeyupEvent);

function continuePlay() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log("your random alphabet:", alphabet);

    // set randomly generated alphabet to the screen show
    const currentAlphabetElements = document.getElementById("current-alphabet");
    currentAlphabetElements.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only the playground
    hideElementByTd("home-screen");
    hideElementByTd("final-score");
    showElementById("play-ground");
    // reset score and life
    setTextElementValueById("current-life", 5);
    setTextElementValueById("current-score", 0);

    continuePlay();
}

function gameOver() {
    hideElementByTd("play-ground");
    showElementById("final-score");

    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById("current-score");
    console.log(lastScore);
    setTextElementValueById("last-score", lastScore);

    // clear the last selector of Alphabet Highlight
    const currentAlphabet = getElementTextById("current-alphabet");
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
