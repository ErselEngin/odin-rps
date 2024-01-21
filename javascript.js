let player = "";
let computer = "";
let playerBtn = document.querySelectorAll('.playerChoice');
let result = document.querySelector('.results');
//console.log(game());

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
    const compRock = document.querySelector('#compRock');
    const compPaper = document.querySelector('#compPaper');
    const compScissors = document.querySelector('#compScissors');
    
    compRock.setAttribute('style', "");
    compPaper.setAttribute('style', "");
    compScissors.setAttribute('style', "");

    if(computerChoice === 1)
    {
        
        compRock.setAttribute('style', "border: 2px green solid;")
    }
    if(computerChoice === 2)
    {
        
        compPaper.setAttribute('style', "border: 2px green solid;")
    }
    if(computerChoice === 3)
    {
        
        compScissors.setAttribute('style', "border: 2px green solid;")
    }

    switch (computerChoice) {
        case 1: return "Rock"
        case 2: return "Paper"
        case 3: return "Scissors"
    }
}

// function getPlayerChoice() {
//     let playerChoice = prompt("Rock? Paper? Scissors?")
//     return playerChoice;
// }

function playRound(played) {

    player = played;
    computer = getComputerChoice();

    if (player.toLowerCase() === "rock" && computer === "Scissors") {
        return 1;
    }
    if (player.toLowerCase() == "rock" && computer == "Paper") {
        return 2;
    }
    if (player.toLowerCase() == "paper" && computer == "Rock") {
        return 1;
    }
    if (player.toLowerCase() == "paper" && computer == "Scissors") {
        return 2;
    }
    if (player.toLowerCase() == "scissors" && computer == "Paper") {
        return 1;
    }
    if (player.toLowerCase() == "scissors" && computer == "Rock") {
        return 2;
    }
    else {
        return 0; //"It's a Tie!"
    }
}


// function game() {

//     let counter = 0;
//     let playerScore = 0;
//     let computerScore = 0;

//     while (counter < 5) {
//         let round = playRound(player, computer);

//         if (round === 1) {
//             console.log("You Win! " + player + " beats " + computer);
//             ++playerScore;
//             ++counter;
//         }
//         else if (round === 2) {
//             console.log("You Lose!" + computer + " beats " + player);
//             ++computerScore;
//             ++counter;
//         }
//         else {
//             console.log("It's a Tie!")
//             ++counter;
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log("Player Wins The Game!")

//         if (confirm("New Game?")) {
//             console.clear();
//             game();
//         }
//     }
//     else {
//         console.log("Computer Wins The Game!")

//         if (confirm("New Game?")) {
//             console.clear();
//             game();
//         }
//     }
// }

playerBtn.forEach((button => {
    button.addEventListener('click', () =>{
        button.setAttribute('style', "border: 2px green solid");

        let r = playRound(button.textContent);
        if(r){
            result.textContent = "Player Wins";
        }
        if (r === 2){
            result.textContent = "Computer Wins";
        }
        if(r === 0){
            result.textContent = "It's a Tie!"
        }

        setTimeout(() => {
            button.setAttribute('style', "");
        }, 2000);
    })
}))