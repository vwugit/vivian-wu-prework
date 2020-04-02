winCount = document.querySelector('#wins');
currentWord = document.querySelector('#currWord');
guessesRemain = document.querySelector('#guessesLeft');
wrongGuesses = document.querySelector('#guessedWrong');

const wordList = ['Aladdin', 'Mulan', 'Frozen', 'Hercules', 'Dumbo', 'Cinderella', 'Coco', 'Cars', 'Brave',
    'Bambi', 'Pinocchio', 'Fantasia', 'Tarzan', 'Cars', 'Enchanted', 'Bolt', 'Tangled', 'Zootopia', 'Moana'];
let word = wordList[Math.floor(Math.random() * wordList.length)];
let guess = [];
let guessed = [];
let remainingGuesses = 12;
guessesRemain.innerText = remainingGuesses;

let start = function () {
    for (let i = 0; i < word.length; i++) {
        guess[i] = "_";
    }
    return guess;
}

start();

// displays the letter progress
currentWord.innerHTML = guess.join(" ");

let checkKeyPressed = function (event) {
    let keyword = String.fromCharCode(event.keycode);
    console.log(word);
    if (word.indexOf(keyword) > -1) {
        console.log(true);
    } else {
        remainingGuesses--;
    }
    guessesRemain.innerText = remainingGuesses;
}

document.addEventListener('keypress', checkKeyPressed);



