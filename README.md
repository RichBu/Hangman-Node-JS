# HANGMAN-Node-JS

by Rich Budek 03/05/2018

Project location for viewing   [richbu.github.io](https://github.com/RichBu/Hangman-Node-JS)

Description:
This is an demonstration of using Node.js to play a sample hangman game.  Node-JS is meant to run
on a server.  The program utilizes constructors internally to create the letters and words.

Starting up HANGMAN-Node-JS:
The HANGMAN-Node-JS requires Node.JS to run.  Type:  Node index   followed by one of theses parameters:
![Startup Screen](/assets/images/screen_caps/Screen_01.png)

Once the game starts up, one of 5 randome words is chosen from a built in dictionary.
![First choice](/assets/images/screen_caps/Screen_02.png)

The user can then type in a letter follow by a return:
![Picking choices](/assets/images/screen_caps/Screen_03.png)

After guessing all of the correct letters, this is the screen that is displayed:
![Picking choices](/assets/images/screen_caps/Screen_won.png)


Technolgies used:
1. Node.JS
2. Javascript for program functions
3. Prompt for keyboard input
4. Constructors

Internal design
1. Letters are built as constructors
2. Letters have their own build in .render function which displays the letter
3. The letter objects are then constructor as an array of letter objects inside of a word.
4. The word object then has functions to display the word and calls the letter displays

Left to do:
1. Clean up the UI.



