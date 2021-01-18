var start = document.getElementById('start'),
    pointer = document.getElementById('pointer'),
    container = document.querySelectorAll('container'),
    win = document.getElementById('win'),
    playAgain = document.getElementById('playAgain');


pointer.style.display = 'none';
win.style.display = 'none';
playAgain.style.display = 'none';


start.addEventListener('click', function(event) {
    start.style.display = 'none';
    pointer.style.display = 'flex';
    
})

pointer.addEventListener('click', function(event2) {
    win.style.display = 'flex';
    pointer.style.display = 'none';
    playAgain.style.display = 'flex';
})

playAgain.addEventListener('click', function(event3) {
    playAgain.style.display = 'none';
    win.style.display = 'none';
    pointer.style.display = 'flex';
    
})
