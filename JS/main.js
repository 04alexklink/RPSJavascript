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
restart.addEventListener('click', scoreReset);


function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = computerSelection();
  const winner = winnerOfRound(playerChoice, computerChoice);
  scoreUpdate(winner);
  resultOfRound(winner);
}

function computerSelection() {
   const arr = ['rock', 'paper', 'scissors'];
   return arr[Math.floor(Math.random() * arr.length)];
}

function winnerOfRound(p, c) {
  if(p === c) {
      return "Draw";
  } else if((p === "rock" && c === "scissors") ||
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

function scoreReset() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  pScore.innerHTML = `Player: ${scoreboard.player}`
  cScore.innerHTML = `Computer: ${scoreboard.computer}`
  restart.style.display = 'none';
}

function resultOfRound(w) {
  if(w === 'Draw') {
    result.innerHTML = `<h1> It's a Draw! </h1>`
  } else {
    result.innerHTML = `<h1> ${w} wins this one! </h1>`
  }
}

