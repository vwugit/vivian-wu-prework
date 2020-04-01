winCount = document.querySelector('#wins');
currentWord = document.querySelector('#currWord');
guessesRemain = document.querySelector('#guessesLeft');
wrongGuesses = document.querySelector('#guessedWrong');

const game = {
    word: wordList[1],
    correctGuess: function() {},
    wrongGuess: function() {},
    win: function() {},
    lose: function() {},
    startNew: function() {}
}

var wordList = ['Aladdin', 'Mulan', 'Frozen', 'Hercules', 'Dumbo', 'Cinderella', 'Coco', 'Cars', 'Brave', 
    'Bambi', 'Pinocchio', 'Fantasia', 'Tarzan', 'Cars', 'Enchanted', 'Bolt', 'Tangled', 'Zootopia', 'Moana'];