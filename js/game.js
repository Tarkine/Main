'use strict';
//console.logs
// console.log(items[0])


// GLOBAL VARIABLES
const p = document.getElementById('buttonOne');
let inventory = (JSON.parse(localStorage.getItem('inventory')) ? JSON.parse(localStorage.getItem('inventory')) : []); //ternary "?" if the condition (first) is true then action (second) position ":" same as else (set inventory)so that on refresh it wont reset array
let element = document.getElementById('gameWindow')
let img = document.getElementById('asset')
let child  = element.children;
let resetButton = document.getElementById("resetButton");
let currentPage = 0;
let i = 0;
let body = document.querySelector('body')
let btnOne = document.getElementById('buttonOne');
let btnTwo = document.getElementById('buttonTwo');
let items = [
    "fuse",
    "Steering Wheel",
    "keys"
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
    let string = ''
    for (let i = 0; i < inventory.length; i++) {
        string += `<div>${inventory[i]}</div>`
    }
    //console.log(document.getElementsByClassName('inventory'))
    document.getElementsByClassName('inventory')[0].innerHTML = string
}

function inventoryDisplay() {
    document.getElementsByClassName('inventory')[0].classList.toggle('hidden')
}

renderInventoryElements()



function addToInventory(event) {
    var id = event.target.id
    inventory.push(id);
    console.log(inventory)
    renderInventoryElements()
    setItemInventory();
}


function addFirstPage (){
    // Loads first page automatically
    let firstPage = document.createElement(pageArr[0].tagName);
    firstPage.id = pageArr[0].id;
    let childOfNewNode = document.createElement('p')
    img.src = urlArrTest[0];
    childOfNewNode.innerText = storyContentArray[0]
    typingEffect(childOfNewNode, 40)
    element.appendChild(firstPage)
    firstPage.appendChild(childOfNewNode)
    btnOne.innerHTML = dialogue[0]
    btnTwo.innerHTML = dialogue[1]
}
addFirstPage()



btnOne.addEventListener('click', bttnOne);
function bttnOne () {
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    const bg = document.getElementById(pageArr[i].id);
    skip()
    i++
    bg.remove();
    let newNode = document.createElement(pageArr[i].tagName)
    img.src = urlArrTest[i];
    let childOfNewNode = document.createElement('p')
    childOfNewNode.innerText = pageArr[i].response1
    typingEffect(childOfNewNode, 50)
    newNode.id = pageArr[i].id
    element.appendChild(newNode)
    newNode.appendChild(childOfNewNode)
    nextPage()
    choice1()
    choice2()
}

btnTwo.addEventListener('click', bttnTwo);
function bttnTwo () {
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    const bg = document.getElementById(pageArr[i].id);
    i++
    rePrompt()
    bg.remove();
    let newNode = document.createElement(pageArr[i].tagName)
    img.src = urlArrTest[i];
    let childOfNewNode = document.createElement('p')
    childOfNewNode.innerText = pageArr[i].response2
    typingEffect(childOfNewNode, 50)
    newNode.id = pageArr[i].id
    element.appendChild(newNode)
    newNode.appendChild(childOfNewNode)
    nextPage()
    choice1()
    choice2()
    
}
//NEED TO ADD FUNCTION FOR DOUBLE RESPONSES
// Need to know which sections to skip or re-prompt
function skip (){
    if (i === 1 || i === 14) {
        i++ + 1   
    }
}
function rePrompt () {
    if (i === 3) {
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
    console.log(i)
    btnOne.innerHTML = pageArr[i].choice1;
    btnTwo.innerHTML = pageArr[i].choice2;
}

function resetAndReplay () {
    localStorage.clear();
}

// EVENT HANDLERS

