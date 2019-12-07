//// Constructor initialize
let Word = require("./word.js");
let inquirer = require("inquirer");

// letters entry
let letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
let usStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawai", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

// Pick Random index from US States array
let randomIndex = Math.floor(Math.random() * usStates.length);
let randomWord = usStates[randomIndex];

// Pass random word through Word constructor
computerWord = new Word(randomWord);

let generateNewWord = false;

// Array for guessed letters
let incorrectLetters = [];
let correctLetters = [];

// Guesses left
let guessesLeft = 20;

function knowledge() {

    // Generates new word for State constructor if true
    if (generateNewWord) {
        // Selects random AfricanCountries array
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
                    message: "Guess a letter between A-Z",
                    name: "userInput"
                }
            ])
            .then(function (input) {


                if (!letterArray.includes(input.userInput) || input.userInput.length > 1) {
                    console.log("\nPlease try again.\n");
                    knowledge();
                } else {


                    if (incorrectLetters.includes(input.userInput) || correctLetters.includes(input.userInput) || input.userInput === "") {
                        console.log("\nAlready Guessed or Nothing Entered\n");
                        knowledge();
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