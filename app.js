// Variables de estado
const randomNumber = Math.floor(Math.random() * 100) + 1; //Número aleatorio
const previousGuesses = []; //pruebas del usuario
var guessesRemaining = 10; //intentos iniciales

// Objetos
const inputGuessNumber = document.getElementById("guessField"); //input donde ingresa el número el usuario
const pMessageOutut = document.getElementById("message"); //p donde se ubica el mensaje al usuario
const guessesRemainingOutput = document.getElementById("remaining-guesses"); //donde va ubicado el número de intentos restantes
const previousGuessesOutput = document.getElementById("previous-guesses"); //donde va ubicado las pruebas del usuario

// Mensajes de salida
const message = {
    won: "You Won! Congrats!",
    high: "Too high! Try again!",
    low: "Too low! Try again!",
    lose: "You Lost! Better luck next time!"
};
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
if (document.getElementById("subt").value != "Reset"){
    runGame();
} else {
    resetGame();
}
});

function resetGame(){
    document.getElementById("subt").value = "Submit guess";
    pMessageOutut.textContent = "";
    inputGuessNumber.disabled = false;
    guessesRemaining = 10;
    previousGuesses.splice(0, previousGuesses.length);
    previousGuessesOutput.textContent = "";
    guessesRemainingOutput.textContent = "";
    inputGuessNumber.focus();
}

function runGame(){
    pMessageOutut.style.backgroundColor = "#7b3056";
    guessesRemaining--;
    previousGuesses.push(inputGuessNumber.value);
    guessesRemainingOutput.textContent = guessesRemaining;
    previousGuessesOutput.textContent = previousGuesses.join(" - ");
    if (+inputGuessNumber.value == randomNumber) {
        pMessageOutut.textContent = message.won + `The correct number is ${randomNumber}. ${guessesRemaining} remaining attempts.`;
        getReset();
    }
    if (+inputGuessNumber.value > randomNumber)
        pMessageOutut.textContent = message.high;
    if (+inputGuessNumber.value < randomNumber)
        pMessageOutut.textContent = message.low;
    if (guessesRemaining == 0 && +inputGuessNumber.value != randomNumber) {
        pMessageOutut.textContent = message.lose + `The correct number is ${randomNumber}. ${guessesRemaining} remaining attempts.`;
        getReset();
    }
    inputGuessNumber.value = "";
    inputGuessNumber.focus();
}

function getReset(){
    document.getElementById("subt").value = "Reset";
    inputGuessNumber.disabled = true;

}