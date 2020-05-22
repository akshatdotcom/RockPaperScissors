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

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

const glowTimeout = 350;

function getUserChoiceDiv(userChoice) {
    return document.getElementById(userChoice);
}

function win(userChoice, computerChoice) {
    userScore++;
    updateScores();
    const userChoice_div = getUserChoiceDiv(userChoice);
    const greenGlow = 'green-glow';
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
    userChoice_div.classList.add(greenGlow);
    setTimeout(() => userChoice_div.classList.remove(greenGlow), glowTimeout);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    updateScores();
    const userChoice_div = getUserChoiceDiv(userChoice);
    const redGlow = 'red-glow';
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost... 💩`;
    userChoice_div.classList.add(redGlow);
    setTimeout(() => userChoice_div.classList.remove(redGlow), glowTimeout);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = getUserChoiceDiv(userChoice);
    const grayGlow = 'gray-glow';
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    userChoice_div.classList.add(grayGlow);
    setTimeout(() => userChoice_div.classList.remove(grayGlow), glowTimeout);
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