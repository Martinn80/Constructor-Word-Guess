# Constructor-Word-Guess
https://martinn80.github.io/Constructor-Word-Guess/


* **Game Information**: This is a node.js based application with interactive prompts on the command-line. Test your knowledge of the all the 52 states of America.
  
* **Letter.js**: Contains a constructor, Letter. This constructor displays a blank placeholder depending on whether or not the user guessed the correct letter or not.

* **Word.js** Contains a constructor, Word that is depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.

* **Index.js** The file contains the logic of the game, which depends on Word.js. It randomly selects a word and uses the word constructor to store the word. And it also prompts the user for each guess and keeps track of how many guesses remaining.

1. The game requires Inquirer or Prompt npm packages.
2. Letter.js **should not** require any other files.
3. Word.js **should only** require Letter.js.
