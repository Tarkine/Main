
'use strict';

// This function takes two arguments, the element that it is modifying, and the speed that it modifies it.
function typingEffect(element, speed) {
    // Gatheres element text
    let text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    // Using the setInterval function, we cycle through the elements text length and append the next character in the index.
    let timer = setInterval(function(){
        if (i < text.length) {
            element.append(text.charAt(i))
            i++
        } else {
            clearInterval(timer);
        }
        // The speed argument defines how fast the animation goes. Higher is slower, lower is faster
    }, speed)
}
// Gets the p element by its ID set in HTML
const p = document.getElementById('type');
// Uses the typingEffect function on the element
typingEffect(p, 40)
//The code below gets the button by ID, then using the function startGame, changes the window to the game.html file when the button is clicked.
let start = document.getElementById('start-game')
function startGame (){
    window.location.href='game.html';
}
// Adds event listener
start.addEventListener('click', startGame)
