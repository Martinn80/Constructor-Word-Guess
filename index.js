//// Constructor initialize
let Word = require("./word.js");
let inquirer = require("inquirer");

// letters Array
let letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
let usStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawai", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

// Pick Random index from US States array
let randomIndex = Math.floor(Math.random() * usStates.length);
let randomWord = usStates[randomIndex];

computerWord = new Word(randomWord);

let generateNewWord = false;
let incorrectLetters = [];
let correctLetters = [];
let guessesLeft = 12;

function chosenWord() {

    // Generates new word for State constructor if true
    if (generateNewWord) {
        // Selects random US States array
        let randomIndex = Math.floor(Math.random() * usStates.length);
        let randomWord = usStates[randomIndex];

        // Passes random State through the Word constructor
        computerWord = new Word(randomWord);


        generateNewWord = false;
    }


    // Tests if user chose a correct letter
    let wordComplete = [];
    computerWord.objArray.forEach(completeCheck);

    // letters remaining to be guessed
    if (wordComplete.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a US State, pick a letter between A-Z",
                    name: "userInput"
                }
            ])
            .then(function (input) {


                if (!letterArray.includes(input.userInput) || input.userInput.length > 1) {
                    console.log("\nPlease try again.\n");
                    chosenWord();
                } else {


                    if (incorrectLetters.includes(input.userInput) || correctLetters.includes(input.userInput) || input.userInput === "") {
                        console.log("\nAlready Guessed or Nothing Entered\n");
                        chosenWord();
                    } else {

                        // Checks if guess is correct
                        let wordCheckArray = [];


                        computerWord.userGuess(input.userInput);

                        // Checks if guess is correct
                        computerWord.objArray.forEach(wordCheck);
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n");

                            incorrectLetters.push(input.userInput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect!\n");

                            correctLetters.push(input.userInput);
                        }

                        computerWord.log();

                        // Print guesses left
                        console.log("Guesses Left: " + guessesLeft + "\n");

                        // Print incorrect letters guessed
                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        // Guesses left
                        if (guessesLeft > 0) {
                            // Call function 
                            chosenWord();
                        } else {
                            console.log("You lose, better luck next time.\n");

                            restartGame();
                        }


                        function wordCheck(key) {
                            wordCheckArray.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("YOU WIN!\n");

        restartGame();
    };


    function completeCheck(key) {
        wordComplete.push(key.guessed);
    };

};

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to:",
                choices: ["Play Again", "Exit"],
                name: "restart"
            }
        ]);
        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 12;
                chosenWord();
            } else {
                return
            }
        });
};

chosenWord();