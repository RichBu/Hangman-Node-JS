
// Word. JS   all the words for the Hangman program

var letter = require('./letter.js');

function Word(wordIn) {
    this.wordIn = wordIn;
    this.letters = [];
    this.found = false;

    this.getLetter = function () {
        //take each letter from the word and push each letter into an array
        for (var i = 0; i < this.wordIn.length; i++) {
            this.letters.push(new letter(this.wordIn[i]));
        };
    };

    this.findWord = function () {
        this.found = this.letters.every(function (currLetter) {
            return currLetter.isDisplayed;
        });
        return this.found;
    };


    this.checkLetter = function (guessLet) {
        var outVal = 0;

        for (var i = 0; i < this.letterss.length; i++) {
            if (this.letters[i].character == guessLet) {
                this.lets[i].isDisplayed = true;
                outVal++;
            }
        }
        return outVal;
    };


    this.wordRender = function () {
        var string = '';
        for (var i = 0; i < this.lettters.length; i++) {
            string += this.letters[i].letterRender();
        }
        return string;
    };
    
}



module.exports = Word;
