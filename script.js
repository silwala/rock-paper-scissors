function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const playerChoice = document.querySelector("#player-choice")

    function getComputerChoice(){
        let computerChoices = ["rock", "paper", "scissors"]
        let computerChoice = Math.floor(Math.random() * 3);
        
        return computerChoices[computerChoice];
    }

    playerChoice.addEventListener("click", (e) => {

        if(e.target.tagName === "DIV") return;

        playRound(getComputerChoice(), e.target.attributes.id.value)
    })

    function playRound(computerChoice, humanChoice){
        console.log(`player chose: ${humanChoice}\ncomputer chose: ${computerChoice}`)
        if(computerChoice == humanChoice){
            console.log("round tied!");
        }
        else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper"){
            console.log("computer wins the round!");
            computerScore++;
        }
        else{
            console.log("player wins the round!");
            humanScore++;
        }
    }

    // for(let i = 0; i < 5; i++){
    //     playRound(getComputerChoice(), getHumanChoice());
    // }
    // console.log("computer score: " + computerScore);
    // console.log("player score: " + humanScore);
    // if(humanScore > computerScore){
    //     console.log("player won the game!");
    // }
    // else if(computerScore > humanScore){
    //     console.log("computer won the game!");
    // }
    // else{
    //     console.log("The game ended in tie!");
    // }
}

playGame();

