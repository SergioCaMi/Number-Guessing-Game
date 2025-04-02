const randomNumber = Math.floor(Math.random() * 100) + 1; //Número aleatorio
const inputGuessNumber = document.getElementById("guessField"); //input donde ingresa el número el usuario
const pMessageOutut = document.getElementById("message"); //p donde se ubica el mensaje al usuario
var guessesRemaining = 10; //intentos iniciales
const guessesRemainingOutput = document.getElementById("remaining-guesses"); //donde va ubicado el número de intentos restantes
const previousGuesses = []; //pruebas del usuario
const previousGuessesOutput = document.getElementById("previous-guesses"); //donde va ubicado las pruebas del usuario

// Mensajes de salida
const messageWon = "You Won! Congrats!";
const messageHigh = "Too high! Try again!";
const messageLow = "Too low! Try again!";
const messageLose = "You Lost! Better luck next time!";

document.getElementById("form").addEventListener("submit", (e) => {
if (document.getElementById("subt").value != "Reset"){
    console.log(randomNumber);
    e.preventDefault();
    pMessageOutut.style.backgroundColor = "#7b3056";
    guessesRemaining--;
    previousGuesses.push(inputGuessNumber.value);
    guessesRemainingOutput.textContent = guessesRemaining;
    previousGuessesOutput.textContent = previousGuesses;
    if (+inputGuessNumber.value == randomNumber) {
        pMessageOutut.textContent = messageWon;
        document.getElementById("subt").value = "Reset";
        inputGuessNumber.disabled = true;
    }
    if (+inputGuessNumber.value > randomNumber)
        pMessageOutut.textContent = messageHigh;
    if (+inputGuessNumber.value < randomNumber)
        pMessageOutut.textContent = messageLow;
    if (guessesRemaining == 0 && +inputGuessNumber.value != randomNumber) {
        document.getElementById("subt").value = "Reset";
        inputGuessNumber.disabled = true;
        pMessageOutut.textContent = messageLose + `El número era el ${randomNumber}. Attempts: ${guessesRemaining} `;
    }
    inputGuessNumber.value = "";
    inputGuessNumber.focus();
} else {
    guessesRemaining = 10;
    previousGuesses.splice(0, previousGuesses.length);
    inputGuessNumber.focus();
}
});
