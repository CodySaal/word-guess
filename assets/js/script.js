var startBtn = document.querySelector(".start-button")
var wordBlanksEl = document.querySelector(".word-blanks")
var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["jacascript", "variable", "function", "python", "localstorage", "timeout", "interval", "object", "vscode"]
var word 
var guessedCharacters = []
// score ariable
// timeLeft variable

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
        // if we have guessed the character 
        if (guessedCharacters.includes(letter)) {
             str += letter + " "
        } else {
            str += "_ "
        }
           
            
    }
    console.log(str)
    wordBlanksEl.textContent = str.trim()
}

function startRound(){
    // get random word form words array
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    renderCharacters();
}

startBtn.addEventListener("click", startRound)

document.addEventListener("keydown", handleKeydown)