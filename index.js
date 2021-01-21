var start = document.getElementById('start'),
    pointer = document.getElementById('pointer'),
    container = document.querySelectorAll('container'),
    win = document.getElementById('win'),
    playAgain = document.getElementById('playAgain');


pointer.style.visibility = 'hidden';
win.style.visibility = 'hidden';
playAgain.style.visibility = 'hidden';


start.addEventListener('click', function(event) {
    start.style.display = 'none';
    pointer.style.visibility = 'visible';
    
})

pointer.addEventListener('click', function(event2) {
    win.style.visibility = 'visible';
    pointer.style.visibility = 'hidden';
    playAgain.style.visibility = 'visible';
})

playAgain.addEventListener('click', function(event3) {
    playAgain.style.visibility = 'hidden';
    win.style.visibility = 'hidden';
    pointer.style.visibility = 'visible';
    
})
