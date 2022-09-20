var startBtn = document.querySelector(".start-button")
var wordBlanksEl = document.querySelector(".word-blanks")
var scoreEl = document.querySelector(".score")
var timerEl = document.querySelector(".timer-count")
var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["javascript", "variable", "function", "python", "localstorage", "timeout", "interval", "object", "vscode"]
var word 
var guessedCharacters = []
var score = 0
var timeLeft = 15
var intervalID

function startCountdown(){
    intervalID = setInterval(function(){
        timeLeft--
        timerEl.textContent = timeLeft
        if (timeLeft === 0) {
            clearInterval(intervalID)
            wordBlanksEl.innerText = "Game over! Your score is " + score
        }
    }, 1000)
}

function checkWord() {
    var wordFromDOM = wordBlanksEl.textContent.split(" ").join("")
    if (word === wordFromDOM) {
        score++
        scoreEl.textContent = score
        startRound()
    }
}

function handleKeydown(event){
    console.log(event.key)
    if (validChars.includes(event.key)){
        // keep track of the character that was guessed
        guessedCharacters.push(event.key);
        // re-render wordBlanks.textContent
        renderCharacters();
    }
    // validate key
}

function renderCharacters(){
    var str = ""
    for (var i =0; i < word.length; i++){
       var letter = word[i]
        if (guessedCharacters.includes(letter)) {
             str += letter + " "
        } else {
            str += "_ "
        }  
    }
    console.log(str)
    wordBlanksEl.textContent = str.trim()
    checkWord();
}

function startRound(){
    clearInterval(intervalID)
    guessedCharacters = []
    // get random word form words array
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    renderCharacters();
    startCountdown();
}

startBtn.addEventListener("click", startRound)

document.addEventListener("keydown", handleKeydown)