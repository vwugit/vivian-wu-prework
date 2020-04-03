displayedWins = document.querySelector('#wins');
displayedWord = document.querySelector('#currWord');
displayedGuessCount = document.querySelector('#guessesLeft');
displayedWrong = document.querySelector('#guessedWrong');

const wordList = ['Aladdin', 'Mulan', 'Frozen', 'Hercules', 'Dumbo', 'Cinderella', 'Coco', 'Cars', 
    'Brave','Bambi', 'Pinocchio', 'Fantasia', 'Tarzan', 'Bolt', 'Tangled', 'Zootopia', 'Moana'];
let word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
let guess = [];
let winCount = 0;
let wrongLetters = [];
let remainingGuesses = 12;
let prevWord;

let newGame = function() {
    word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    guess = [];
    wrongLetters = [];
    remainingGuesses = 12;
    
    for (let i = 0; i < word.length; i++) {
        guess[i] = "_";
    }

    displayedGuessCount.innerText = remainingGuesses;
    displayedWins.innerText = "Wins: " + winCount;
    displayedWord.innerHTML = guess.join(" ");
    displayedWrong.innerText = wrongLetters.join(" ");
}

function checkKey(event) {
    var x = event.keyCode;
    let keyword = String.fromCharCode(x);
    let idx = word.indexOf(keyword);

    if (x >= 65 && x <= 90) {
        if (idx >= 0) {
            while (idx != -1) {
                guess[idx] = keyword;
                idx = word.indexOf(keyword, idx + 1);
            }
        }
        else if (wrongLetters.join('').indexOf(keyword) >= 0) {
            console.log('same letter bro');
        }
        else {
            remainingGuesses--;
            wrongLetters.push(keyword);
        }

        if (word === guess.join('')) {
            alert('You guessed it!');
            winCount++;
            prevWord = word;
            newGame();
            change();
        }
        if (remainingGuesses < 1) {
            alert('Better luck next time');
            prevWord = word;
            newGame();
            change();
        }

        displayedGuessCount.innerText = remainingGuesses;
        displayedWins.innerText = "Wins: " + winCount;
        displayedWord.innerHTML = guess.join(" ");
        displayedWrong.innerText = wrongLetters.join(" ");
    }
}

function change() {
    var movieTitle = document.querySelector('#movie');
    movieTitle.innerText = prevWord;

    var image = document.getElementById('poster');
    var moviePoster = `assets/images/${prevWord}.jpg`
    image.src = moviePoster;

    var audio = document.getElementById('music');
    var soundSource = `assets/audio/${prevWord}.mp3`;
    audio.src = soundSource;
    audio.play();
}

document.addEventListener('keydown', checkKey);
newGame();
