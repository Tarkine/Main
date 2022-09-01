'use strict';
// This function takes two arguments, the element that it is modifying, and the speed that it modifies it.
// function typingEffect(element, speed) {
//     // Gatheres element text
//     let text = element.innerHTML;
//     element.innerHTML = '';
//     let i = 0;
//     // Using the setInterval function, we cycle through the elements text length and append the next character in the index.
//     let timer = setInterval(function(){
//         if (i < text.length) {
//             element.append(text.charAt(i))
//             i++
//         } else {
//             clearInterval(timer);
//         }
//         // The speed argument defines how fast the animation goes. Higher is slower, lower is faster
//     }, speed)
// }
// // Gets the p element by its ID set in HTML
// const p = document.getElementById('buttonOne');
// // Uses the typingEffect function on the element
// typingEffect(p, 40)




function setItem() {
    localStorage.setItem('dialogue', JSON.stringify(dialogue));
}

setItem();

function returnItem() {
    let localArray = JSON.parse(localStorage.getItem('dialogue'));
    // console.log(localArray)
}

returnItem();

// Initialize local storage for each array

// let localStorageArrays = [
//     "inventory",
//     "winCon",
//     "userLoc",
//     "userName",
//     "boatArray",
//     "dialogue",
//     "storyContentArray"
// ]

// function initializeLocalStorage(){
//     for (let i=0; i < localStorageArrays.length; i++)
//         var array = localStorageArrays[i];
//         if (!JSON.parse(localStorage.getItem(array))) {
//             localStorage.setItem(array, JSON.stringify(array))
//     }
// }

// initializeLocalStorage();

//inventory array

let items = [
    "fuse",
    "Steering Wheel",
    "keys"
]

// function itemObjects (name, amount) {
//     this.name = name;
//     this.amount = 0;
// }

// function buildItems() {
//     for (let i = 0; i < items.length; i++) {
//         var element = items[i];
//         // itemObjects(element);
//     }
//     console.log(element.name);
// }

// buildItems();

console.log(items[0])

//inventory button that displays the inventory on click and makes it disappear when clicked again.
//alright how the fuck do I do this...

let inventory = (JSON.parse(localStorage.getItem('inventory')) ? JSON.parse(localStorage.getItem('inventory')) : []); //ternary "?" if the condition (first) is true then action (second) position ":" same as else (set inventory)so that on refresh it wont reset array
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
    console.log(document.getElementsByClassName('inventory'))
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

console.log(inventory);
// GLOBAL VARIABLES


// CONSTRUCTOR


// CONSTRUCTOR METHODS


// FUNCTIONS
let element = document.getElementById('gameWindow')
let children = element.children;


let btn = document.getElementById('buttonOne');
// Add function for counting button clicks
let totalPage = 35;
let currentPage = 0;

function addFirstPage (){
    // Loads first page automatically
    let firstPage = document.createElement(pageArr[0].tagName);
    firstPage.id = pageArr[0].id;
    firstPage.innerText = 'Testing testing 123' //placeholder
    element.appendChild(firstPage)
}
addFirstPage()
console.log(children[0].id);
function changeB (){
    
    for (let i = 0; i < pageArr.length; i++) {
        // Runs once but throws an error after the first iteration, says id of children is not defined
        if (children[i].id === pageArr[i].id) {
            children[i].remove();
            let newNode = document.createElement(pageArr[i+1].tagName)
            newNode.innerText = 'TESSSSSSSSSSSSSSSSSSSST'
            newNode.id = pageArr[i+1].id
            element.appendChild(newNode);
        }
        
    };
    // We can append a new node object with all the properties
    
    currentPage++;
    if (currentPage === totalPage) {   
        for (let i = 0; i < pageArr.length; i++) {
            btn.removeEventListener('click', showNewImage);
            
        }
    }
};


btn.addEventListener('click', changeB)  

// save username input

function userNamesubmit() {
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


// EVENT LISTENERS

// event listener for each button, change to no display to hid button

// button1.addEventListener('click', hideButton1) 
// button2.addEventListener('click', hideButton2) 

button1.addEventListener('click', changeButtonText1) 
button2.addEventListener('click', changeButtonText2) 

// EVENT HANDLERS

function hideButton1 () {
    // add a conditional that only hides when screen changes to environment

    button1.style.display = 'none';
};

function hideButton2 () {
    // add a conditional that only hides when screen changes to environment

    button2.style.display = 'none';
};


// increment, modulus (cap), remainder (divide max by number what takes it to 0 (or 1))

function changeButtonText1 (event) {
    let button1Clicked = event.target;
    button1.innerHTML = dialogue[trackedTextIndex];
    trackedTextIndex+=2;
    if (trackedTextIndex>=dialogue.length) {
        hideButton1();
    }
}

function changeButtonText2 (event) {
    let button2Clicked = event.target;
    button2.innerHTML = dialogue[trackedTextIndex2];
    trackedTextIndex2+=2;
    if (trackedTextIndex2>=dialogue.length) {
        hideButton2();
    }
};