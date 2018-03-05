

//Hangman program for node-js

//by Rich Budek  March 3, 2018

var Word = require('./word.js');
var prompt = require('prompt');

prompt.start();



game = {
    wordDictionary: ['gravitational', 'electrical', 'magnetic', 'nuclear'],
    wordsCorrect: 0,
    guessesLeft: 10,
    guessesTaken: "",  //all the letters pressed to compare for duplicates

    currentWord: null,

    startGame: function (wrd) {
        this.resetGuesses();
        this.guessesTaken = "";
        //don't need to add +1 because index is 0 to length
        var pickFromDict = this.wordDictionary[Math.floor(Math.random() * this.wordDictionary.length)];
        pickFromDict = pickFromDict.toUpperCase();
        this.currentWord = new Word(pickFromDict);
        this.currentWord.getLetter();

        console.log( "Welcome to Node.JS CLI program.");
        console.log( "by Rich Budek");
        console.log( "This is a simple program that does hangman");
        console.log( "on a server using Node.JS");
        console.log( "topic is types of forces\n");
        this.dispDashes();
        console.log("\nyour word: " + this.currentWord.wordRender() );
        this.promptUser();
    },

    resetGuesses: function () {
        this.guessesLeft = 10;
    },


    isDuplicate: function (keyPressed) {
        var outVal;
        if (this.guessesTaken.indexOf(keyPressed) >= 0) {
            outVal = true;  //it was a duplicat
        } else {
            this.guessesTaken += keyPressed;
            outVal = false;
        };
        return outVal;
    },


    dispDashes: function () {
        console.log("-----------------------------");
    },

    dispCorrectWord: function (rootObj) {
        //have to pass in the rootObj because all references of 'this' are gone
        console.log("Correct word was: " + rootObj.currentWord.wordPicked + "\n");
    },

    promptUser: function () {
        var self = this;    //because in callback, 'this' will be different
        var promptStr = 'your guess';  //used for prompt and recall 
        console.log("\n");
        prompt.get([promptStr], function (err, result) {
            var pressedLetter = result[promptStr].toUpperCase();
            if( pressedLetter.length > 1) {
                //if more than 1 character length, then jsut take the left
                pressedLetter = pressedLetter[0];
            };
            if (self.isDuplicate( pressedLetter )) {
                //it is a duplicate
                console.log(pressedLetter + " is a DUPLICATE key press");
                self.dispDashes();
            } else {
                //not a duplicate
                var manyGuessed = self.currentWord.checkLetter(pressedLetter);
                if (manyGuessed == 0) {
                    console.log(pressedLetter + " is a BAD guess");
                    self.guessesLeft--;
                } else {
                    console.log(pressedLetter + " is a GOOD guess");
                    if (self.currentWord.findWord()) {
                        console.log("You won !!!  \n");
                        self.dispCorrectWord(self);
                        self.dispDashes();
                        return;
                    }
                };
            };
            console.log("Guesses left: " + self.guessesLeft);
            //split up guesses taken and display
            var tempStr = self.guessesTaken;
            var sortedGuesses = tempStr.split('').sort().join(' ');

            console.log("your guesses: " + sortedGuesses );
            self.dispDashes();
            if ((self.guessesLeft > 0) && (self.currentWord.found == false)) {
                console.log(self.currentWord.wordRender());
                self.promptUser();
            }
            else if (self.guessesLeft == 0) {
                console.log("Game over.");
                self.dispCorrectWord(self);
            } else {
                console.log(self.currentWord.wordRender());
            };
        });

    }


};

game.startGame();

