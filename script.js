
const playerChoice = document.querySelector("#player-choice");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

playerChoice.addEventListener("click", (e) => {

    if(e.target.tagName === "DIV") return;

    playRound(getComputerChoice(), e.target.attributes.id.value);
})

const winningScore = 5;
let humanScore;
let computerScore;
let tie;

function initGame(){
    humanScore = 0;
    computerScore = 0;
    tie = 0;
    result.textContent = '';
    updateScoreBoard();
}

function updateScoreBoard(){
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore} | Tie: ${tie}`;
}

function getComputerChoice(){
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    
    return computerChoices[computerChoice];
}

function playRound(computerChoice, humanChoice){

    winner.textContent = '';
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


function checkWinner(){
    let win;
    if(humanScore === winningScore){
        win = "player";
    }
    else if(computerScore === winningScore){
        win = "computer";
    }
    else {
        return;
    }

    winner.textContent = win + " wins!"
    initGame();
}


initGame();


