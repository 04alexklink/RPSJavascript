const choices = document.querySelectorAll('.choice');
const score = document.getElementsByClassName('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

choices.forEach(choice => choice.addEventListener('click', play));
// choice selection function
function play(e) {
    console.log(e.target.id);
}


// Event Listeners
