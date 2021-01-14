let playerScore, computerScore;
playerScore = 0;
computerScore = 0

function playRound(playerPick, computerPick) {
    switch (playerPick.toLowerCase()) {
        case "rock":
            if (computerPick.toLowerCase() === "rock") {
                return (`Tie Game.`)
            } else if (computerPick.toLowerCase() === "paper") {
                computerScore += 1;
                return (`You Lose - Paper Beats Rock.`);
            } else if (computerPick.toLowerCase() === "scissors") {
                playerScore += 1;
                return (`You Win - Rock Beats Scissors.`);
            } else {
                return "invalid input";
            }

            case "paper":
                if (computerPick.toLowerCase() === "rock") {
                    playerScore += 1;
                    return (`You Win - Paper Beats Rock.`);
                } else if (computerPick.toLowerCase() === "paper") {
                    return (`Tie Game`);
                } else if (computerPick.toLowerCase() === "scissors") {
                    computerScore += 1;
                    return (`You Lose - Scissors Beats Paper.`);
                } else {
                    return "invalid input";
                }

                case "scissors":
                    if (computerPick.toLowerCase() === "rock") {
                        computerScore += 1;
                        return (`You Lose - Rock Beats Paper.`);
                    } else if (computerPick.toLowerCase() === "paper") {
                        playerScore += 1;
                        return (`You Win Scissors Beats Paper.`);
                    } else if (computerPick.toLowerCase() === "scissors") {
                        return (`Tie Game.`);
                    } else {
                        return "invalid input";
                    }
    }
}

function randomPick() {
    let rand = Math.floor(1 + Math.random() * 3);
    let cpuPickRock = document.getElementById("cpuRock");
    let cpuPickPaper = document.getElementById("cpuPaper");
    let cpuPickScissors = document.getElementById("cpuScissors");
    switch (rand) {
        case 1:
            cpuPickPaper.classList.remove("cpuPick");
            cpuPickScissors.classList.remove("cpuPick");
            cpuPickRock.classList.add("cpuPick");
            return "rock";
        case 2:
            cpuPickRock.classList.remove("cpuPick")
            cpuPickScissors.classList.remove("cpuPick")
            cpuPickPaper.classList.add("cpuPick")
            return "paper";
        case 3:
            cpuPickRock.classList.remove("cpuPick");
            cpuPickPaper.classList.remove("cpuPick");
            cpuPickScissors.classList.add("cpuPick");
            return "scissors";
    }
}

function game(playerPick) {
    let finalScore = 5;
    let userBtn = document.getElementsByClassName("userPick");
    let score = document.querySelector("#score");
    let matchFeed = document.querySelector("#matchFeed");
    let results = document.createElement('p');


    // console.log(playRound(playerPick, computerPick));
    if (playerScore >= finalScore || computerScore >= finalScore) {
        if (playerScore > computerScore) {
            results.innerHTML = "Game End, You Win!";
        } else {
            results.innerHTML = "Game End, You Lose";
        }
        results.innerHTML += "<br>Refersh page to restart";
        matchFeed.append(results);
        for (let i = 0; i < userBtn.length; i++) {
            userBtn[i].disabled = true;
        }

    } else {
        let computerPick = randomPick();
        results.innerHTML = playRound(playerPick, computerPick);
        score.innerHTML = `Score: ${playerScore} - ${computerScore}`;
        matchFeed.append(results);
    }
}


let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    game("rock");
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    game("rock");
})

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    game("scissors");
})
// game();
// console.log(playRound("rock", computerPick()));
// console.log(playRound("paper", computerPick()));