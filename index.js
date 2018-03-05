

//Hangman program for node-js

//by Rich Budek  March 3, 2018

var Word = require('./word.js');
var prompt = require('prompt');

console.log("Types of forces");
prompt.start();



game = {
 	wordDictionary: ['gravitational', 'electrical', 'magnetic', 'nuclear'],
 	wordsCorrect: 0,
 	guessesRemaining: 10,
 	currentWord: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordDictionary[Math.floor(Math.random()* this.wordDictionary.length)]);
         this.currentWord.getLetter();
console.log('letters:');         
console.log(this.currentWord.letters);         
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
         var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLet);
 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWord.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
                console.log(self.currentWord.wordRender());
                self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWord.wordPicked);
 			} else {
 				console.log(self.currentWord.wordRender());
 			}
 		});

 	}


};

game.startGame();

