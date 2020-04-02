displayedWins = document.querySelector('#wins');
displayedWord = document.querySelector('#currWord');
displayedGuessCount = document.querySelector('#guessesLeft');
displayedWrong = document.querySelector('#guessedWrong');

const wordList = ['Aladdin', 'Mulan', 'Frozen', 'Hercules', 'Dumbo', 'Cinderella', 'Coco', 'Cars', 'Brave',
    'Bambi', 'Pinocchio', 'Fantasia', 'Tarzan', 'Cars', 'Enchanted', 'Bolt', 'Tangled', 'Zootopia', 'Moana'];
let word = wordList[Math.floor(Math.random() * wordList.length)];
word = word.toUpperCase();

let guess = [];
let wrongLetters = [];
let correctLetters = [];
let remainingGuesses = 12;
displayedGuessCount.innerText = remainingGuesses;

let start = function () {
    for (let i = 0; i < word.length; i++) {
        guess[i] = "_";
    }
    return guess;
}

start();

// displays the letter progress
displayedWord.innerHTML = guess.join(" ");
console.log(word);

function checkKey(event) {
    var x = event.keyCode;
    let keyword = String.fromCharCode(x);
    console.log(keyword);
    if (word.indexOf(keyword) >= 0) {
        correctLetters.push(keyword);
        guess[word.indexOf(keyword)] = keyword;
        console.log('yes');
        if (word === guess.join('')) {
            alert('You guessed it');
        }
    }
}

//     // if (word.indexOf(keyword) > -1) {
//     //     console.log(true);
//     // } else {
//     //     remainingGuesses--;
//     //     wrongLetters.push(keyword);
//     //     console.log(wrongLetters);
//     // }
//     // displayedGuessCount.innerText = remainingGuesses;
// }

document.addEventListener('keydown', checkKey);


