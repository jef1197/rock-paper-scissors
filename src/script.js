import _ from 'lodash';

let playerScore, computerScore, roundsPlayed;
playerScore = 0;
computerScore = 0
roundsPlayed = 0;

function playRound(playerPick, computerPick) {
    roundsPlayed += 1;
    switch (playerPick.toLowerCase()) {
        case "rock":
            if (computerPick.toLowerCase() === "rock") {
                return (`Tie Game`)
            } else if (computerPick.toLowerCase() === "paper") {
                computerScore += 1;
                return (`You Lose `);
            } else if (computerPick.toLowerCase() === "scissors") {
                playerScore += 1;
                return (`You Win `);
            } else {
                return "invalid input";
            }

            case "paper":
                if (computerPick.toLowerCase() === "rock") {
                    playerScore += 1;
                    return (`You Win`);
                } else if (computerPick.toLowerCase() === "paper") {
                    return (`Tie Game`);
                } else if (computerPick.toLowerCase() === "scissors") {
                    computerScore += 1;
                    return (`You Lose`);
                } else {
                    return "invalid input";
                }

                case "scissors":
                    if (computerPick.toLowerCase() === "rock") {
                        computerScore += 1;
                        return (`You Lose`);
                    } else if (computerPick.toLowerCase() === "paper") {
                        playerScore += 1;
                        return (`You Win`);
                    } else if (computerPick.toLowerCase() === "scissors") {
                        return (`Tie Game`);
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
            cpuPickPaper.classList.remove("activeBtn");
            cpuPickScissors.classList.remove("activeBtn");
            cpuPickRock.classList.add("activeBtn");
            return "rock";
        case 2:
            cpuPickRock.classList.remove("activeBtn")
            cpuPickScissors.classList.remove("activeBtn")
            cpuPickPaper.classList.add("activeBtn")
            return "paper";
        case 3:
            cpuPickRock.classList.remove("activeBtn");
            cpuPickPaper.classList.remove("activeBtn");
            cpuPickScissors.classList.add("activeBtn");
            return "scissors";
    }
}


function game(playerPick) {
    let finalScore = 5;
    let userBtn = document.getElementsByClassName("userPick");
    let round = document.getElementById("round");
    let score = document.querySelector("#score");
    let matchFeed = document.querySelector("#matchFeed");
    let computerPick = randomPick();

    matchFeed.innerHTML = playRound(playerPick, computerPick);
    score.innerHTML = `${playerScore} - ${computerScore}`;
    round.innerHTML = `Round ${roundsPlayed}`


    if (playerScore >= finalScore || computerScore >= finalScore) {
    if (playerScore > computerScore) {
        matchFeed.innerHTML = "Game End!";
        playAgain('You Win!')

    } else {
        matchFeed.innerHTML = "Game End ";
        playAgain('You Lose...')
    }

    for (let i = 0; i < userBtn.length; i++) {
        userBtn[i].classList.add('disabled');
        }
    }
}

function playAgain(result){
    let modal = document.getElementById("confirmResults");
    let modalResult = document.getElementById("modalResult");
    modal.classList.add('is-active');
    modalResult.innerHTML = result;
}

function resetGame() {
    let userBtn = document.getElementsByClassName("userPick");
    let cpuPick = document.getElementsByClassName('cpuPick')
    let round = document.getElementById("round");
    let score = document.querySelector("#score");
    let matchFeed = document.querySelector("#matchFeed");
    playerScore = 0;
    computerScore = 0
    roundsPlayed = 0;
    for (let i = 0; i < userBtn.length; i++) {
        userBtn[i].classList.remove('disabled');
        userBtn[i].classList.remove('activeBtn');
        cpuPick[i].classList.remove('activeBtn');
        }
    score.innerHTML = `${playerScore} - ${computerScore}`;
    round.innerHTML = `Round ${roundsPlayed}`
    matchFeed.innerHTML = "Match Start";
}

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);

  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-close, .modal-card-head .delete, .modal-card-body .button, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });


let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let reset = document.getElementById("playAgain");


rock.addEventListener('click', () => {
    rock.classList.add("activeBtn")
    paper.classList.remove("activeBtn");
    scissors.classList.remove("activeBtn");
    game("rock");
});

paper.addEventListener('click', () => {
    rock.classList.remove("activeBtn")
    paper.classList.add("activeBtn");
    scissors.classList.remove("activeBtn");
    game("paper");
})

scissors.addEventListener('click', () => {
    rock.classList.remove("activeBtn")
    paper.classList.remove("activeBtn");
    scissors.classList.add("activeBtn");
    game("scissors");
})

reset.addEventListener('click', () => {
    resetGame();
})
// game();
// console.log(playRound("rock", computerPick()));
// console.log(playRound("paper", computerPick()));