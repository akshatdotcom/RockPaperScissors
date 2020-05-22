let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function updateScores() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function convertToWord(letter) {
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    updateScores();
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    updateScores();
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost... 💩`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();