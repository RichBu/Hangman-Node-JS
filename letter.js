
//  Letter .js  all of the letters for Hangman file



var letter = function(letterIn){
    var outVal=""; 
	this.character = letterIn;
	this.isDisplayed = false;
	this.letterRender = function(){
        if (this.isDisplayed) {outVal = this.character + ' '; }
        else {outVal = "_ "; }
		return outVal;
	};
};

//export the constructor
module.exports = letter;

