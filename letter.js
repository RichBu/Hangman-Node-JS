
//  Letter .js  all of the letters for Hangman file



var letter = function(letterIn){
	this.character = letterIn;
	this.isDisplayed = false;
	this.letterRender = function(){
		return !(this.isDisplayed) ? "_" : this.character;
	};
};

//export the constructor
module.exports = letter;
