const choices = document.querySelectorAll('.choice');
const score = document.getElementsByClassName('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

choices.forEach(choice => choice.addEventListener('click', play));
// choice selection function
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = computerSelection();
  const winner = winnerOfRound(playerChoice, computerChoice);
  console.log(winner);
}

function computerSelection() {
  var arr = ['rock', 'paper', 'scissors'];
  return arr[Math.floor(Math.random() * arr.length)];
}

function winnerOfRound(p, c) {
  if(p === c) {
      return "It's a draw!"
  } else if((p === "rock" & c === "scissors") ||
  (p === "scissors" & c === "paper") ||
  (p === "paper" & c === "rock")) {
      return "Player wins!"
  } else {
      return "Computer wins!"
  }
}


// Event Listeners
