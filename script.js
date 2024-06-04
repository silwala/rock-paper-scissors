const playerChoice = document.querySelector("#player-choice");
const result = document.querySelector("#result");
const versus = document.querySelector("#versus");
const playerResult = document.querySelector("#player-result");
const computerResult = document.querySelector("#computer-result");
const ovrlResult = document.querySelector("#ovrl-result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");
const playAgain = document.querySelector("#play-again");

playerChoice.addEventListener("click", (e) => {

    if(e.target.tagName === "DIV") return;

    playRound(getComputerChoice(), e.target.attributes.id.value);
})

playAgain.addEventListener("click", () => {
    winner.removeChild(winner.firstChild);
    playerResult.removeChild(playerResult.firstChild);
    computerResult.removeChild(computerResult.firstChild);
    initGame();
});

const winningScore = 5;
let humanScore;
let computerScore;
let tie;

function initGame(){
    humanScore = 0;
    computerScore = 0;
    tie = 0;
    playerChoice.style.display = 'flex';
    result.style.display = 'none';
    versus.style.display = 'none';
    winner.style.display = 'none';
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

    if(computerChoice == humanChoice){
        ovrlResult.textContent = "Tie";

        tie++;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper"){
        ovrlResult.textContent = "Computer wins the round!";
        computerScore++;
    }
    else{
        ovrlResult.textContent = "You win the round!";
        humanScore++;
    }

    showResult(computerChoice, humanChoice);
    updateScoreBoard();
    checkWinner();
}

function showResult(computerChoice, humanChoice){

    playerChoice.style.display = 'none';
    result.style.display = 'flex';
    versus.style.display = 'block';

    let playerChoiceImage = document.createElement('img');
    playerChoiceImage.src = `images/${humanChoice}.png`
    playerResult.appendChild(playerChoiceImage);
    
    let computerChoiceImage = document.createElement('img');
    computerChoiceImage.src = `images/${computerChoice}.png`
    computerResult.appendChild(computerChoiceImage);
}

function showChoices(){

}


function checkWinner(){
    let win;
    if(humanScore === winningScore){
        win = "You";
    }
    else if(computerScore === winningScore){
        win = "Computer";
    }
    else {
        setTimeout(() => {
            playerChoice.style.display = 'flex';
            result.style.display = 'none';
            versus.style.display = 'none';
            playerResult.removeChild(playerResult.firstChild);
            computerResult.removeChild(computerResult.firstChild);
        }, 1500);
        return;
    }

    showWinner(win);
}

function showWinner(win){
    winner.style.display = 'flex';
    let gameWinner = document.createTextNode(`${win} won the game!`);
    winner.prepend(gameWinner);
}

initGame();


