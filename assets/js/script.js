var startBtn = document.querySelector(".start-button")
var wordBlanksEl = document.querySelector(".word-blanks")
var scoreEl = document.querySelector(".score")
var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["javascript", "variable", "function", "python", "localstorage", "timeout", "interval", "object", "vscode"]
var word 
var guessedCharacters = []
var score = 0
// timeLeft variable

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
    guessedCharacters = []
    // get random word form words array
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    renderCharacters();
}

startBtn.addEventListener("click", startRound)

document.addEventListener("keydown", handleKeydown)