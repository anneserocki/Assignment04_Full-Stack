//  DEFINE VARAIBLES
// DEFINE A RANDOM NUMBER FROM 2 TO 12
let randomNum = Math.floor((Math.random() * 100) + 2)
let computerChoice
let myChoice = prompt("Enter my choice: rock or paper or scissor")

// GET PLAYER'S CHOICES
// Verify the value of the choice valid AND MAKE MY CHOICE
if (myChoice !== "rock" && myChoice !== "paper" && myChoice !== "scissor"){
    do {
    alert("The choice I entered is wrong! Plese re-enter. ")
    myChoice = prompt("Please enter my choice again: rock or paper or scissor")
    } while (myChoice !== "rock" && myChoice !== "paper" && myChoice !== "scissor")
};
switch (myChoice) {
    case "rock":
        alert("My choice is rock!")
        myChoice = "rock"
        break;
    case "paper":
        alert("My choice is paper!")
        myChoice = "paper"
        break;
    case "scissor":
        alert("My choice is scissor!")
        myChoice = "scissor"
        break;
    default:
        alert("Unexpected things happened, please replay!")    
        break;
};   

// GET COMPUTER'S CHOICES
if (randomNum >-1 && randomNum <= 34) {
    alert("Your choice is rock!")
    computerChoice = "rock"
} else if (randomNum >34 && randomNum <= 68) {
    alert("Your choice is paper!")
    computerChoice = "paper"
} else if (randomNum > 68 && randomNum <=102) {
    alert("Your choice is scissor!")
    computerChoice = "scissor"
};

console.log(myChoice);
console.log(computerChoice);

// DEFIN A FUNCTION TO DECIDE WHO WIN
let player = "rock" || "paper" || "scissor"
let computer = "rock" || "paper" || "scissor"

function playGame(player, computer) {
    if (player === "rock" && computer === "rock" || player === "paper" && computer === "paper" || player === "scissor" && computer ==="scissor") {
        console.log("The result ends in a tie, please re-play!")
    } else if (player ==="rock" && computer === "scissor") {
        console.log("I win!")
    } else if (player ==="scissor" && computer === "paper") {
        console.log("I win!")  
    } else if (player === "paper" && computer === "rock") {        
        console.log("I win!")
    } else if (player ==="scissor" && computer === "rock"){
        console.log("You win!")        
    } else if (player === "paper" && computer === "scissor"){
        console.log("You win!") 
    } else if (player === "rock" && computer === "paper") {
        console.log("You win!") 
    } else {
        console.log("Something is wrong, let us re-play.")
    };
};

playGame(myChoice, computerChoice)




