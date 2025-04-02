

const randomNumber = Math.floor(Math.random()*100)+1; //Número aleatorio
const inputGuessNumber = document.getElementById("guessField"); //input donde ingresa el número el usuario
const pMessageOutut = document.getElementById("message"); //p donde se ubica el mensaje al usuario
var guessesRemaining = 10; //intentos iniciales
const guessesRemainingOutput = document.getElementById("remaining-guesses");//donde va ubicado el número de intentos restantes
const previousGuesses = []; //pruebas del usuario
const previousGuessesOutput = document.getElementById("previous-guesses");//donde va ubicado las pruebas del usuario

// Mensajes de salida
const messageWon = "You Won! Congrats!";
const messageHigh = "Too high! Try again!";
const messageLow = "Too low! Try again!";
const messageLose = "You Lost! Better luck next time!";

document.getElementById("subt").addEventListener("click", (e)=>{
    e.preventDefault();
    if (inputGuessNumber.value != ''){
        pMessageOutut.style.backgroundColor = "#7b3056";
        guessesRemaining--;
        previousGuesses.push(inputGuessNumber.value);
        guessesRemainingOutput.textContent = guessesRemaining;
        previousGuessesOutput.textContent = previousGuesses;
        if (inputGuessNumber.value == randomNumber) pMessageOutut.textContent = messageWon;
        if (inputGuessNumber.value > randomNumber) pMessageOutut.textContent = messageHigh;
        if (inputGuessNumber.value < randomNumber) pMessageOutut.textContent = messageLow;
        if (guessesRemaining==0){
            document.getElementById("subt").disabled = true;
            inputGuessNumber.disabled=true;
            pMessageOutut.textContent = messageLose;
        }
    }
    inputGuessNumber.value = '';
    inputGuessNumber.focus();
});