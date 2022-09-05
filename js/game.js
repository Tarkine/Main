'use strict';
//console.logs
// console.log(items[0])
// GLOBAL VARIABLES
let chromeAudio = document.getElementById('iframeAudio')
chromeAudio.volume = 0.1;
let notChromeAudio = document.getElementById('playAudio')
notChromeAudio.volume = 0.1;
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
let child  = element.children;
let resetButton = document.getElementById("resetButton");
let currentPage = 0;
let i = 0;
// let response3 = pageArr[i].response3
let body = document.querySelector('body')
let btnOne = document.getElementById('buttonOne');
let btnTwo = document.getElementById('buttonTwo');
let items = [
    "fuse",
    "Steering Wheel",
    "keys",
    "stone"
]

// CONSTRUCTOR


// CONSTRUCTOR METHODS

// EVENT LISTENERS
resetButton.addEventListener('click', resetAndReplay);
// event listener for each button, change to no display to hid button


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
    // console.log(localArray)
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
    //console.log(document.getElementsByClassName('inventory'))

}

function inventoryDisplay() {
    document.getElementsByClassName('inventory')[0].classList.toggle('hidden')
}

renderInventoryElements()



// function addToInventory(event) {
//     var id = event.target.id
//     inventory.push(id);
//     console.log(inventory)
//     renderInventoryElements()
//     setItemInventory();
// }


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



btnOne.addEventListener('click', bttnOne);
function bttnOne () {
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    const bg = document.getElementById(pageArr[i].id);
    skip1()
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
}

btnTwo.addEventListener('click', bttnTwo);
function bttnTwo () {
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    const bg = document.getElementById(pageArr[i].id);
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

// Work on 9/4/22, loops
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
    console.log(i)
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

function rePrompt () {
    if (i === 3 || i === 7 || i === 28 || i === 35 ) {
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
    if (i === 37) {
        img.style.width = '25%';
        let inv = document.getElementById('inventory')
        inv.remove()
    }
    
    
}
// save username input

function openForm() {
    document.getElementById("userNameForm").style.display = "block";
    document.getElementById("popupForm").style.display = "block";
}

function submitAndCloseForm() {
    document.getElementById("userNameForm").style.display = "none";
    let userNameEntered = document.getElementById("nameTextBox").value;
    localStorage.setItem("username", userNameEntered);
    return false;
}
  
// load username input into div

document.getElementById("userNameDiv").innerHTML=localStorage.getItem("username");


// TODO: ADD AS CONDITION FOR THE FIN PAGE


// Inventory Validation
function inventoryValidation () {
// Compares user inventory items (array) to required boat array items
for (let i = 0; i < inventoryLocalStorage.length; i++) {
    let boatItems = boatArray;
    if (inventoryLocalStorage.includes(boatItems)) {
// If the user has all 4 items, the boat array is compared to the win condition array
        for (let j = 0; j < boatArray.length; j++) {
            let winItems = winConArray;
// If the boat array is === to the win condition array, they are allowed to move to the win screen
            if (boatArray.includes(winItems)) {
                // render win screen
            }
        }
    }
}

};


// increment, modulus (cap), remainder (divide max by number what takes it to 0 (or 1))

function nextPage () {
    
    btnOne.innerHTML = pageArr[i].choice1;
    btnTwo.innerHTML = pageArr[i].choice2;
}

function resetAndReplay () {
    window.location.reload()
    localStorage.clear();
}
function backToHome (){
    window.location.href='index.html';
}
back.addEventListener('click', backToHome)
// EVENT HANDLERS

