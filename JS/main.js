const choices = document.querySelectorAll('.choice');
const pScore = document.getElementById('player');
const cScore = document.getElementById('computer');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const scoreboard = {
  player: 0,
  computer: 0
}

choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', reset);
// choice selection function
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = computerSelection();
  const winner = winnerOfRound(playerChoice, computerChoice);
  scoreUpdate(winner);
}

function computerSelection() {
  var arr = ['rock', 'paper', 'scissors'];
  return arr[Math.floor(Math.random() * arr.length)];
}

function winnerOfRound(p, c) {
  if(p === c) {
      return "Draw";
  } else if((p === "rock" && p === "scissors") ||
  (p === "scissors" && c === "paper") ||
  (p === "paper" && c === "rock")) {
      return "Player"
  } else {
      return "Computer"
  }
}

function scoreUpdate(w) {
  if(w === 'Player') {
    scoreboard.player++;
    pScore.innerHTML = `Player: ${scoreboard.player}`
  } else if(w === 'Computer') {
    scoreboard.computer++;
    cScore.innerHTML = `Computer: ${scoreboard.computer}`
  }
}

function reset() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  pScore.innerHTML = `Player: ${scoreboard.player}`
  cScore.innerHTML = `Computer: ${scoreboard.computer}`
}

// Event Listeners
