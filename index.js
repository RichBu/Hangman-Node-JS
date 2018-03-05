

//Hangman program for node-js

//by Rich Budek  March 3, 2018

var Word = require('./word.js');
var prompt = require('prompt');

console.log("Types of forces");
prompt.start();



game = {
 	wordDictionary: ['gravitational', 'electrical', 'magnetic', 'nuclear'],
 	wordsCorrect: 0,
     guessesLeft: 10,
     
 	currentWord: null,
 	
 	startGame: function (wrd) {
         this.resetGuesses();
         //don't need to add +1 because index is 0 to length
         var pickFromDict = this.wordDictionary[Math.floor(Math.random()* this.wordDictionary.length)];
         pickFromDict = pickFromDict.toUpperCase();
 		this.currentWord = new Word( pickFromDict );
         this.currentWord.getLetter();
console.log('letters:');         
console.log(this.currentWord.letters);         
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesLeft = 10;
 	},


    dispDashes: function() {
        console.log("-------------------");
    },

    dispCorrectWord: function(rootObj ) {
        //have to pass in the rootObj because all references of 'this' are gone
        console.log( "Correct word was: " + rootObj.currentWord.wordPicked + "\n");
    },

    promptUser: function(){
        var self = this;    //because in callback, 'this' will be different
        var promptStr = 'your guess';  //used for prompt and recall 
        console.log("\n");
 		prompt.get([promptStr], function(err, result){
             var pressedLetter = result[promptStr].toUpperCase();
 			var manyGuessed = self.currentWord.checkLetter( pressedLetter );
 			if(manyGuessed ==0) {
 				console.log( pressedLetter + " is a BAD guess");
 			    self.guessesLeft--;
 			} else {
 				console.log(pressedLetter + " is a GOOD guess");
 					if(self.currentWord.findWord()){
                         console.log("You won !!!  \n");
                         self.dispCorrectWord(self);
                         self.dispDashes();
 						return;
 					}
 			};

             console.log("Guesses left: " + self.guessesLeft);
             self.dispDashes();
 			if((self.guessesLeft > 0) && (self.currentWord.found == false)){
                console.log(self.currentWord.wordRender());
                self.promptUser();
 			}
 			else if(self.guessesLeft ==0){
                 console.log("Game over.");
                 self.dispCorrectWord(self);
 			} else {
 				console.log(self.currentWord.wordRender());
 			}
 		});

 	}


};

game.startGame();

