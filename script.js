let playerScore, computerScore;
playerScore = 0;
computerScore = 0

function playRound(playerPick, computerPick) {
    switch (playerPick.toLowerCase()) {
        case "rock":
            if (computerPick.toLowerCase() === "rock"){
                return (`Tie Game.\nScore: ${playerScore} - ${computerScore}`)
            } else if(computerPick.toLowerCase() === "paper"){
                computerScore += 1;
                return (`You Lose - Paper Beats Rock.\nScore: ${playerScore} - ${computerScore}`);
            } else if (computerPick.toLowerCase() === "scissors") {
                playerScore += 1;
                return (`You Win - Rock Beats Scissors.\nScore: ${playerScore} - ${computerScore}`);
            } else {
                return "invalid input";
            }
            
        case "paper":
            if (computerPick.toLowerCase() === "rock"){
                playerScore += 1;
                return (`You Win - Paper Beats Rock.\nScore: ${playerScore} - ${computerScore}`);
            } else if(computerPick.toLowerCase() === "paper"){
                return (`Tie Game\nScore: ${playerScore} - ${computerScore}`);
            } else if (computerPick.toLowerCase() === "scissors") {
                computerScore += 1;
                return (`You Lose - Scissors Beats Paper.\nScore: ${playerScore} - ${computerScore}`);
            } else {
                return "invalid input";
            }

        case "scissors": 
        if (computerPick.toLowerCase() === "rock"){
            computerScore += 1;
            return (`You Lose - Rock Beats Paper.\nScore: ${playerScore} - ${computerScore}`);
        } else if(computerPick.toLowerCase() === "paper"){
            playerScore += 1;
            return (`You Win Scissors Beats Paper.\nScore: ${playerScore} - ${computerScore}`);
        } else if (computerPick.toLowerCase() === "scissors") {
            return (`Tie Game.\nScore: ${playerScore} - ${computerScore}`);
        } else {
            return "invalid input";
        }
    }
}

function randomPick() {
    let rand = Math.floor(1+Math.random() * 3);
    switch(rand){
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function game() {
    let counter = 5;
    do{
        let playerPick = prompt("Enter ROCK, PAPER, or SCISSORS")
        let computerPick = randomPick();
        console.log(playRound(playerPick, computerPick));
    } while(counter > playerScore && counter > computerScore);
    console.log("Game End");
}

game();
// console.log(playRound("rock", computerPick()));
// console.log(playRound("paper", computerPick()));