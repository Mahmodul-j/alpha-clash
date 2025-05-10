function hideElementByTd(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

// add key back-ground color:

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}

//[ life update Or Sore update
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
// set the the value of score
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// ]
function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetSting = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetSting.split("");
    // console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}
