//number of circles we have in the game
var numCircles = 6;
//The colour variable should be an array that contains as many random RGB colours as there are circles. 
var colours = ["","","","","",""];
//This pickedColor is the RGB color we are trying to guess (string)
var pickedColor = "";
//This is the default colour of the game. 
let defaultColour = "#582c99";

//Grab all appropriate elements from the HTML.
var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector("h1");
var resetButton = document.getElementById("restart");

init();

//The init function should reset the stage and set a new RGB color
function init() {
    genRandomColours(); // Initialize random colors
    pickedColor = chooseColor(); // Pick a random color to guess
    reset();
}

//Setup so that when the reset button is clicked, the reset function gets called 
resetButton.addEventListener("click", reset);

//Define what should happen when any circle is clicked. 
function clickCircle() {
    var choice = this.style.backgroundColor;
    if (choice === pickedColor) {
        resultMessage.textContent = "You Win";
        resetButton.textContent = "Play again";
        for (var i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = pickedColor;
        }
        banner.style.backgroundColor = pickedColor;
    } else {
        this.style.backgroundColor = defaultColour;
        resultMessage.textContent = "Try again";
    }
}

// The reset function
function reset() {
    genRandomColours();
    pickedColor = chooseColor();
    colourToGuess.textContent = pickedColor;
    banner.style.backgroundColor = defaultColour;
    resetButton.textContent = "Restart";
    resultMessage.textContent = "";

    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colours[i];
        circles[i].addEventListener("click", clickCircle);
    };
}

// Function to make a random RGB color
function makeColour() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Function to set new values for the colours array
function genRandomColours() {
    for (let i = 0; i < colours.length; i++) {
        colours[i] = makeColour();
    }
}

// Function to choose a random color from the array
function chooseColor() {
    return colours[Math.floor(Math.random() * colours.length)];
}