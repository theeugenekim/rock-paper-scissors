function getRandomInt(max) {
    // Get Random number between range 0 and max.
    return Math.floor(Math.random()* max);
}

function getComputerChoice(selections) {
    let random_index = getRandomInt(3);
    var computerSelection = selections[random_index];
    return computerSelection;
}

function getPlayerChoice(selections) {
    var playerInput = prompt("Rock, paper, or scissors?");
    var playerSelection = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();

    if (!selections.includes(playerSelection)) {
        console.log("Please pick one of these options: Rock, Paper, or Scissors.");
        getPlayerChoice()
    } else {
        return playerSelection;
    }
}

function playRound(playerSelection, computerSelection) {
    var result;

    if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" || 
    playerSelection == "Scissors" && computerSelection == "Paper") {
        var result = "Win";
        return result;
    } else if (playerSelection == computerSelection) {
        var result = "Draw";
        return result;
    } else {
        var result = "Loss";
        return result;

    }
}

function decide_winner(player_wins, draws, computer_wins) {
    
    let score = "(" + player_wins + " wins, " + draws + " draws, " + computer_wins + " losses)"
    
    if (player_wins > computer_wins) {
        console.log("You win! " + score);
    } else if (player_wins == computer_wins) {
        console.log("It's a draw! " + score);
    } else {
        console.log("You lose! " + score);
    }
}

function game(rounds) {
    //  Declare variable within a function
    var player_wins = 0;
    var draws = 0;
    var computer_wins = 0;
    var selections = ["Rock", "Paper", "Scissors"];

    for (let i = 0; i < +rounds; i++) {
        var playerSelection = getPlayerChoice(selections);
        var computerSelection = getComputerChoice(selections);

        var result = playRound(playerSelection, computerSelection);
        if (result == "Win") {
            console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
            player_wins += 1;
        } else if (result == "Draw") {
            console.log("It's a draw! You both picked " + playerSelection + ".");
            draws += 1;
        } else {
            console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
            computer_wins += 1;
        }
    }

    decide_winner(player_wins, draws, computer_wins);
}

// play the game of x rounds
game(5)