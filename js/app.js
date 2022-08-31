'use strict'


//Create array for dialogue and stored it locally, validated.
let dialogue = [
    "You quickly take off your belt and find a nearby branch. You attempt to splint his arm.",
    "You splint his arm as best you can. But its still bleeding. He bleeds out and dies. Your Boyscout Master would be so disappointed. ",
    "You remember he took the last chicken option on the in flight meal. You let him die.",
    "You begin walking down the trail.",
    "You decide you’ve had a good run. You lay down next to the chicken theif and wait for death.",
    "Clear the vines from the wall.",
    "Clean the vines from the wall.",
    "you find an ancient symbol, recognizable only to the ancients.",
    "You remove the stone from its setting, you put it in one of your four cargo pants pockets. Cargo pants rule!",
    "You leave the stone alone.",
    "The stone falls from its setting, you decide to pick it up and put it in your pocket.",
    "After struggling to get the stone out of your cargo pocket, you place it in the recess.",
    "Continue through the gate.",
    "You walk through the gate. It closes quickly behind you.",
    "Continue along the trail.",
    "Place the fuse in the boat.",
    "Continue along the trail.",
    "You muster up your courage and choose to go down the left fork in the road.",
    "You’re taken through a happy, bright part of the forest.",
    "You pragmatically decide that the right path is the one for you.",
    "You’re taken through the scary part of the forest.",
    "The fuse is a button. when they click on it it will load the next page.",
    "nice.",
    "This stone looks very similar to the one you found earlier. On it you see the an indeciferable signal. You place it in your pocket.",
    "Head back to the boat with the fuse?",
    "Continue on the trail?",
    "Place the fuse in the boat.",
    "Head back to where you were on the trail.",
    "Place the stone in the recess.",
    "the stone does nothing (because Ethan doesn’t want to have to code more glowing rocks...Ethan...)",
    "Head back to the gate.",
    "Grab the Stone.",
    "Stare at the stone.",
    "Grab the Stone and head back to the clearing.",
    "Stare at the stone.",
    "Head back to the boat and attach the steering wheel.",
    "Throw rock at the bird.",
    "Throw stone at the bird.",
    "Pursue the bird.",
    "Chase the bird.",
    "Head back to the Boat.",
    "Place items in the boat.",
    "Just vibe."
]

console.log(dialogue);

function setItem(){
    localStorage.setItem('dialogue', JSON.stringify(dialogue));
}

setItem();

function returnItem(){
    let localArray = JSON.parse(localStorage.getItem('dialogue'));
    console.log(localArray)
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

function buildItems () {
    for (let i=0; i<items.length; i++){
        var element = items[i];
        // itemObjects(element);
    }
    console.log(element.name);
}

buildItems();

console.log(items[0])

//inventory button that displays the inventory on click and makes it disappear when clicked again.
//alright how the fuck do I do this...

let inventory = (JSON.parse(localStorage.getItem('inventory')) ? JSON.parse(localStorage.getItem('inventory')) : []); //ternary "?" if the condition (first) is true then action (second) position ":" same as else (set inventory)so that on refresh it wont reset array
function setItemInventory() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

setItemInventory ();

function renderInventoryElements(){
    //whenever you update inventory update the elements in inventory
    let string = ''
    for (let i =0; i<inventory.length; i++){
        string += `<div>${inventory[i]}</div>`
    }
    console.log( document.getElementsByClassName('inventory'))
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






