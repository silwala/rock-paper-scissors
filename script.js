const playerChoice = document.querySelector("#player-choice");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
updateScoreBoard();

let humanScore = 0;
let computerScore = 0;
let tie = 0;

playerChoice.addEventListener("click", (e) => {

    if(e.target.tagName === "DIV") return;

    playRound(getComputerChoice(), e.target.attributes.id.value);
})

function updateScoreBoard(){
    score.textContent = `Player: ${humanScore}\tComputer: ${computerScore}\tTie: ${tie}`;
}

function getComputerChoice(){
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    
    return computerChoices[computerChoice];
}

function playRound(computerChoice, humanChoice){
    result.textContent = `player chose: ${humanChoice}\ncomputer chose: ${computerChoice}`
    if(computerChoice == humanChoice){
        result.textContent += "Tie!"
        tie++;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper"){
        result.textContent += "computer wins the round!";
        computerScore++;
    }
    else{
        result.textContent += "player wins the round!";
        humanScore++;
    }

    updateScoreBoard();
    checkWinner();
}




