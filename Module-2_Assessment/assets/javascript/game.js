winCount = document.querySelector('#wins');
currentWord = document.querySelector('#currWord');
guessesRemain = document.querySelector('#guessesLeft');
wrongGuesses = document.querySelector('#guessedWrong');

var wordList = ['Aladdin', 'Mulan', 'Frozen', 'Hercules', 'Dumbo', 'Cinderella', 'Coco', 'Cars', 'Brave', 
    'Bambi', 'Pinocchio', 'Fantasia', 'Tarzan', 'Cars', 'Enchanted', 'Bolt', 'Tangled', 'Zootopia', 'Moana'];
var word = wordList[Math.floor(Math.random() * wordList.length)];
var guess = [];
var guessed = [];
var remainingGuesses = 12;
guessesRemain.innerText = remainingGuesses;


var start = function() {
    for (let i=0; i < word.length; i++){
        guess[i] = "_";
    }
    
    // displays the letters count without revealing the word
    currentWord.innerHTML = guess.join(" ");
}

start();




document.addEventListener("keydown", checkKeyPressed);

var checkKeyPressed = function(letter){
    for (let i=0; i<word.length; i++) {
        if (letter.keycode == guess[i].charCodeAt(0)){
            guess[i] = word.split("")[i];
        } else {
            remainingGuesses--;

        }
        guessesRemain.innerText = remainingGuesses;
        currentWord.innerHTML = guess.join(" ");
    }
    if (remainingGuesses < 1) {
    alert("Nice try, better luck next time.");       
    }
}