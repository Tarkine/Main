'use strict';
//console.logs
// console.log(items[0])
// GLOBAL VARIABLES
let chromeAudio = document.getElementById('iframeAudio')
chromeAudio.volume = 0.1;
let notChromeAudio = document.getElementById('playAudio')
notChromeAudio.volume = 0.1;
// Defines if the user's browser is Chrome using userAgent and vendor by pulling a string from the browser, if it matches 'chrome' and 'Google Inc', it is Chrome
let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    chromeAudio.remove()
}
else {
    notChromeAudio.remove()
}
let back = document.getElementById('back')
const p = document.getElementById('buttonOne');
let inventory = (JSON.parse(localStorage.getItem('inventory')) ? JSON.parse(localStorage.getItem('inventory')) : []); //ternary "?" if the condition (first) is true then action (second) position ":" same as else (set inventory)so that on refresh it wont reset array
let element = document.getElementById('gameWindow')
let img = document.getElementById('asset')
let resetButton = document.getElementById("resetButton");
let currentPage = 0;
let i = 0;
let body = document.querySelector('body')
let btnOne = document.getElementById('buttonOne');
let btnTwo = document.getElementById('buttonTwo');
let items = [
    "fuse",
    "Steering Wheel",
    "keys",
    "stone"
]

// EVENT LISTENERS
resetButton.addEventListener('click', resetAndReplay);
// Event listener for reset button
btnOne.addEventListener('click', bttnOne);
// Event listener for button one
btnTwo.addEventListener('click', bttnTwo);
// Event listener for button two
back.addEventListener('click', backToHome)
// Event listener for back button

// FUNCTIONS
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
function setItem() {
    localStorage.setItem('dialogue', JSON.stringify(dialogue));
}

setItem();

function returnItem() {
    let localArray = JSON.parse(localStorage.getItem('dialogue'));

}
returnItem();
function setItemInventory() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}
setItemInventory();
function renderInventoryElements() {
    //whenever you update inventory update the elements in inventory
    for (let i = 0; i < inventory.length; i++) {
        let newItem = document.createElement('p')
        let invDiv = document.getElementsByClassName('inventory')
        invDiv[0].appendChild(newItem)
        newItem.innerHTML = inventory[i]
    }
}
function inventoryDisplay() {
    document.getElementsByClassName('inventory')[0].classList.toggle('hidden')
}
renderInventoryElements()
function addFirstPage (){
    // Loads first page automatically
    let firstPage = document.createElement(pageArr[0].tagName);
    firstPage.id = pageArr[0].id;
    let childOfNewNode = document.createElement('p');
    img.src = urlArrTest[0];
    childOfNewNode.innerText = storyContentArray[0];
    typingEffect(childOfNewNode, 30);
    element.appendChild(firstPage);
    firstPage.appendChild(childOfNewNode);
    btnOne.innerHTML = dialogue[0];
    btnTwo.innerHTML = dialogue[1];
}
addFirstPage()
function bttnOne () {
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    const bg = document.getElementById(pageArr[i].id);
    if (pageArr[i] === page35) {
    inventoryValidation();
    }
    skip1();
    i++;
    bg.remove();
    let newNode = document.createElement(pageArr[i].tagName);
    img.src = pageArr[i].background;
    let childOfNewNode = document.createElement('p');
    childOfNewNode.innerText = pageArr[i].response1;
    typingEffect(childOfNewNode, 30);
    newNode.id = pageArr[i].id;
    element.appendChild(newNode);
    newNode.appendChild(childOfNewNode);
    nextPage();
    choice1();
    choice2();
    doubleResponse();
    end();
    addItem();
    removeItemOne();
}
function bttnTwo () {
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    const bg = document.getElementById(pageArr[i].id);
    skip2();
    i++;
    rePrompt();
    bg.remove();
    let newNode = document.createElement(pageArr[i].tagName);
    img.src = pageArr[i].background;
    let childOfNewNode = document.createElement('p');
    childOfNewNode.innerText = pageArr[i].response2;
    typingEffect(childOfNewNode, 30);
    newNode.id = pageArr[i].id;
    element.appendChild(newNode);
    newNode.appendChild(childOfNewNode);
    nextPage();
    choice1();
    choice2();
    doubleResponse();
    removeItemTwo();
}
function doubleResponse () {
    if (pageArr[i].hasOwnProperty('response3')) {
        let node = document.getElementById(pageArr[i].id);
        let secondChild = document.createElement('p');
        secondChild.innerText = pageArr[i].response3;
        typingEffect(secondChild, 50)
        node.appendChild(secondChild);
    }
}
// Need to know which sections to skip or re-prompt
function addItem () {
    if (i === 6) {
        inventory.push(items[3]);
        renderInventoryElements();
        setItemInventory();
    }
    if (i === 13 || i === 20) {
        inventory.push(items[0]);
        renderInventoryElements();
        setItemInventory();
    }
    if (i === 28) {
        inventory.push(items[1]);
        renderInventoryElements();
        setItemInventory();
    }
    if (i === 33) {
        inventory.push(items[2]);
        renderInventoryElements();
        setItemInventory();
    }
    if (i === 36) {
        localStorage.clear();
    }
}
function skip1() {
    if (i === 22 || i === 1 || i === 19 || i === 6 || i === 18) {
        i++ + 1
    }
    if (pageArr[i] === page14) {
        i++ + 3
    }
    if (pageArr[i] === page17) {
        i++ + 2
    }
}
function skip2 () {
    if (i === 17) {
        i++ + 1
    }
}
function rePrompt () {
    if (i === 3 || i === 7 || i === 28 || i === 35) {
        i-- 
    }
}
function choice1 () {
    if (btnOne.innerHTML==='A') {
        btnOne.style.display = 'none';
    } 
}
function choice2 () {
    if (btnTwo.innerHTML==='A') {
        btnTwo.style.display = 'none';
    }
}
function end () {
    if (i === 38) {
        img.style.width = '25%';
        let inv = document.getElementById('inventory')
        inv.remove()
    } 
}
function removeItemOne () {
    if (i === 9) {
        inventory.pop(items[3]);
    }
}
function removeItemTwo () {
    if (i === 14) {
        inventory.pop(items[0]);
        boatArray.push (items[0]);
    }
    if (i === 20) {
        inventory.pop(items[0]);
        boatArray.push (items[0]);
    }
}

// Open a Form to Enter a Username
function openForm() {
// Retrieve divs in HTML by ID from the form element
    document.getElementById("userNameForm").style.display = "block";
    document.getElementById("popupForm").style.display = "block";
}

// Close the Form Upon Submission
function submitAndCloseForm() {
// Retrieve div in HTML by ID from the form element
    document.getElementById("userNameForm").style.display = "none";
// Assign a variable to the HTML text box field, retrieved by ID
    let userNameEntered = document.getElementById("nameTextBox").value;
// Save text that user enters in local storage
    localStorage.setItem("username", userNameEntered);
    return false;
}
  
// Load username input into div
document.getElementById("userNameDiv").innerHTML=localStorage.getItem("username");

function skipEnd () {
    if (pageArr[i] === page35) {
        i++ + 1
    }   
}
// Inventory Validation
function inventoryValidation () {
// Load parsed items from the inventory array
let testInv = JSON.parse(localStorage.getItem('inventory'));
// run through the array
for (let i = 0; i < testInv.length; i++) {
// Assign a variable to the win conditions array   
let winItems = winConArray;
// If the user's inventory array matched what is in the win condition array, skip to the win screen
            if (testInv.includes(winItems[i])) {
                skipEnd()        
            } 
        
    }
}

// For the Button Transitions
// Run through the page array's option text for each button and update change button inner HTML
function nextPage () {  
    btnOne.innerHTML = pageArr[i].choice1;
    btnTwo.innerHTML = pageArr[i].choice2;
}

// For Reset and Replay Button
// Clear the local storage and reload to first page so player starts game with no inventory
function resetAndReplay () {
    window.location.reload()
    localStorage.clear();
}
function backToHome (){
    window.location.href='index.html';
}
