function getRandomInt(max) {
    // Get Random number between range 0 and max.
    return Math.floor(Math.random()* max);
}

function getComputerChoice() {
    var selections = ["Rock", "Paper", "Scissors"]
    let random_index = getRandomInt(3);
    var computerSelection = selections[random_index];
    return computerSelection;
}

function roundWinDecider(playerSelection, computerSelection) {


    if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" || 
    playerSelection == "Scissors" && computerSelection == "Paper") {
        var result = "win"
    } else if (playerSelection === computerSelection) {
        var result = "draw"
    } else {
        var result = "loss"
    }

    return updateRoundResults(result, playerSelection, computerSelection)

} 

function chooseEmoji(playerSelection, computerSelection) {
    if (playerSelection == "Rock") playerHand.textContent = "✊"
    if (playerSelection == "Paper") playerHand.textContent = "✋"
    if (playerSelection == "Scissors") playerHand.textContent = "✌️"
    if (computerSelection == "Rock") computerHand.textContent = "✊"
    if (computerSelection == "Paper") computerHand.textContent = "✋"
    if (computerSelection == "Scissors") computerHand.textContent = "✌️"
}


function updateRoundResults(decision, playerSelection, computerSelection) {

    let playerWeapon = playerSelection;
    let computerWeapon = computerSelection;

    if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" || 
    playerSelection == "Scissors" && computerSelection == "Paper") {
        win_count += 1;
        title.textContent = "You won!";
        subTitle.textContent = playerWeapon + " beats " + computerWeapon + ".";
        playerScore.textContent = "Player: " + win_count
    } else if (playerWeapon === computerWeapon) {
        title.textContent = "Draw!"
        subTitle.textContent = "You both picked " + playerWeapon + ".";
    } else {
        loss_count += 1;

        title.textContent = "You lost!"
        subTitle.textContent = computerWeapon + " beats " + playerWeapon + ".";
        computerScore.textContent = "Computer: " + loss_count
    }

    chooseEmoji(playerSelection, computerSelection)
}


function gameOver(player_wins, draws, computer_wins) {
    
    let final_score = "(" + win_count + " wins, " + draw_count + " draws, " + loss_count + " losses)"
    
    if (player_wins > computer_wins) {
        title.textContent = ("You are the winner!");
    } else {
        title.textContent = ("You lost...");
    }

    subTitle.textContent = final_score

}

function winCondition(win, losses) {
    if (win === 5 || losses === 5) {    
        final_result = gameOver()
    };
}

function resetGame() {
    win_count = 0;
    draw_count = 0;
    loss_count = 0;
    
    title.textContent = 'Choose your weapon';
    subTitle.textContent = 'First to score 5 wins the game';

    playerHand.textContent = '?';
    playerScore.textContent = 'Player: 0';
    computerHand.textContent = '?';
    computerScore.textContent = 'Computer: 0';

    
}


var win_count = 0;
var draw_count = 0;
var loss_count = 0;


///////    Dynamic Scoreboard     //////
var title = document.querySelector('.title');
var subTitle = document.querySelector('.instructions');

var playerHand = document.querySelector('#player.hand');
var playerScore = document.querySelector('#player.score');
var computerHand = document.querySelector('#computer.hand');
var computerScore = document.querySelector('#computer.score');




////////////    Game Events   ///////////////////////

function playRock(e) {
    // Get Winner
    var computerSelection = getComputerChoice()
    roundWinDecider("Rock", computerSelection)
    // Save score
    winCondition(win_count, loss_count)
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRock);


/////////////////
function playPaper(e) {
    // Get Winner
    var computerSelection = getComputerChoice()
    roundWinDecider("Paper", computerSelection)
    // Save score
    winCondition(win_count, loss_count)
}


const paper = document.querySelector('#paper');
paper.addEventListener('click', playPaper);


///////////////
function playScissors(e) {
    // Get Winner
    var computerSelection = getComputerChoice()
    roundWinDecider("Scissors", computerSelection)
    // Save score
    winCondition(win_count, loss_count)
}

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playScissors)

resetGame()