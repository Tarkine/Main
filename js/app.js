
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
start.addEventListener('click', startGame)
=======
'use strict'

//object literals to organize the game pages

const page1 = {
    text = storyContentArray[0],
    choice1 = dialogue[0],
    choice2 = dialogue[2],
    response1 = dialogue[1],
    response2 = '',
    background = '',
    userinterface = '',
    element1 = '


}

const page2 = {
    text = storyContentArray[1],
    choice1 = dialogue[3],
    choice2 = dialogue[4],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page3 = {
    text = storyContentArray[2],
    choice1 = dialogue[3],
    choice2 = dialogue[4],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page4 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page5 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page6 = {
    text = storyContentArray[3],
    choice1 = dialogue[5],
    choice2 = dialogue[6],
    response1 = dialogue[7],
    response2 = dialogue[7],
    background = '',
    userinterface = '',
    element1 = ''
}

const page7 = {
    text = storyContentArray[4],
    choice1 = dialogue[8],
    choice2 = dialogue[9],
    response1 = '',
    response2 = dialogue[10],
    background = '',
    userinterface = '',
    element1 = ''
}

const page8 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page9 = {
    text = storyContentArray[5],
    choice1 = dialogue[11],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page10 = {
    text = '',
    choice1 = dialogue[12],
    choice2 = dialogue[13],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page11 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page12 = {
    text = '',
    choice1 = dialogue[15],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page13 = {
    text = storyContentArray[6],
    choice1 = dialogue[14],
    choice2 = dialogue[15],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page14 = {
    text = storyContentArray[7],
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page15 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page16 = {
    text = storyContentArray[8],
    choice1 = dialogue[16],
    choice2 = dialogue[18],
    response1 = dialogue[17],
    response2 = dialogue[19],
    background = '',
    userinterface = '',
    element1 = ''
}

const page17 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page18 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page19 = {
    text = storyContentArray[9],
    choice1 = '',
    choice2 = '',
    response1 = dialogue[20],
    response2 = dialogue[21],
    background = '',
    userinterface = '',
    element1 = ''
}

const page20 = {
    text = storyContentArray[10],
    choice1 = dialogue[22],
    choice2 = dialogue[23],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page21 = {
    text = '',
    choice1 = dialogue[24],
    choice2 = dialogue[25],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page22 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page23 = {
    text = '',
    choice1 = dialogue[14],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page24 = {
    text = storyContentArray[11],
    choice1 = dialogue[26],
    choice2 = dialogue[27],
    response1 = '',
    response2 = dialogue[28],
    background = '',
    userinterface = '',
    element1 = ''
}

const page25 = {
    text = storyContentArray[12],
    choice1 = dialogue[14],
    choice2 = dialogue[29],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page26 = {
    text = storyContentArray[13],
    choice1 = dialogue[30],
    choice2 = dialogue[31],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page27 = {
    text = storyContentArray[14],
    choice1 = dialogue[32],
    choice2 = dialogue[33],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page28 = {
    text = storyContentArray[15],
    choice1 = dialogue[34],
    choice2 = dialogue[14],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page29 = {
    text = storyContentArray[16],
    choice1 = dialogue[35],
    choice2 = dialogue[36],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page30 = {
    text = storyContentArray[17],
    choice1 = dialogue[37],
    choice2 = dialogue[38],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page31 = {
    text = storyContentArray[18],
    choice1 = dialogue[39],
    choice2 = dialogue[40],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page32 = {
    text = storyContentArray[19],
    choice1 = dialogue[39],
    choice2 = dialogue[40],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page33 = {
    text = storyContentArray[20],
    choice1 = dialogue[41],
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page34 = {
    text = storyContentArray[21],
    choice1 = dialogue[42],
    choice2 = dialogue[43],
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page35 = {
    text = storyContentArray[22],
    choice1 = '',
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

const page35 = {
    text = storyContentArray[23],
    choice1 = '',
    choice2 = '',
    response1 = '',
    response2 = '',
    background = '',
    userinterface = '',
    element1 = ''
}

let storyContentArray = [
    'You\'re in a small plane and you crash...Sad...You wake up and look around for any other surviving passengers. You see one surviving passenger, unconcious but still breathing. Their arm looks broken and is bleeding profusely. Gross. Do you spend time looking for resources to create a splint and try to nurse them back to health?',
    'You look around and see a dense tropical forest. There is a trail in front of you. Outstanding! A trail means people!',
    'You look around and see a dense tropical forest. There is a trail in front of you. Outstanding! A trail means people! You remember that you have so much to live for and the new season of survivor drops in October.',
    'You come across some ancient ruins. There are vines growing up the broken walls. It does not appear as if anyone has been here in quite some time. You begin to worry that these paths may not actually lead to civilization.',
    'You touch the symbol and it starts to glow. You start to feel like you should subscribe to youtube red...you recognize the idea as stupid and quickly shake it from your mind. You notice the stone is loose.',
    'After wandering along the path for what seemed like tens of minutes. You reach a large wall. The wall stretches into the dark forest. On the path is a large gate with no handles. You notice on the left side of the gate a recess that is the exact size of the stone you have in your pocket.',
    'You come across a river. A BOAT!!! You race over to it and start to take inventory of it. It\'s missing its keys,and the steering wheel is gone. Also you notice both fuses have been ripped out. You look at the river, wondering if you could use a log to float down the river. At that moment a sloth from an overhanging vine drops into the water. A flurry of froth and blood erupt as bloodthirsty pirannahs rip it to shreds. Sad...gross...Looks like fixing the boat is the only option. You notice a fuse sitting next to the boat...someone must have removed them. You pick up the fuse and put it in your pocket.',
    'You place the fuse in the boat. Amazing. You congratulate yourself on your own ingenuity. Perhaps there are more pieces of the boat somewhere in the forest.',
    'You come to a fork in the road! The right path looks much like the trial you\'ve already seen. The left path is dark. Vines hang down to the trail from the canopy above. You hear the sound of a leopard screaming.',
    'You reach a clearing in the forest and see a pile of debris washed up on the bank of a river. You\'ll need to dig through the pile to see if there is anything of interest.',
    'You  found a fuse that matched the one you placed in the boat earlier.', 'You exit the forest and find youself in a clearing. You find, after a quick survey of the clearing, an urn. It has a small but sealed opening flanked on either side by recesses the same size as the one that was in the gate.',
    'You stand up...genious...The other stone must be around here somewhere. You think a moment and realize you know where another stone is. You left it in on the other side of the gate.',
    'You find yourself back at the gate. But how to get over it? You grab a branch and start digging furiously...many hours later you emerge on the other side of the wall. Man...walls are stupid...and anyone who thinks they can keep someone out does not have a good grasp of verticle spaces.',
    'You find yourself back at the gate.',
    'You find yourself back in the second clearing. You place the stone into the second recess and the urn....clicks...I guess...Ethan...You look inside and you find the steering wheel for the boat. You wonder how it got here. But you remember they didnt explain anything on “Lost” either...oh well... You cant fit the steering wheel in your cargo pants so you shove it down the front of them.',
    'While on the trail you hear the cawing of a strange bird. Clearly of the covid family...and unknown to you...this bird species was quite rare. Having been the first birds to lay their eggs mid air in order to control their own population. In its beak you spot shiny and keylike objects...you wonder what they are. Regardless, you must have them.',
    'You miss...the bird starts to fly away, laying and losing its next generation in its starled state. Memories of being cut from your junior varsity baseball team rush back.',
    'You catch up to the bird.',
    'You miss. The bird flies away.',
    'You hit the bird...and amazingly...hit a second bird, which laid and lost its next generation in its starled state. You run up to the two birds you\’ve stunned with one stone...it\’s just like the old idiom: “You can lead a horse to water but you shouldn\'t use it like a straw.” If only Adam was recording this.',
    'You enter the clearing with the boat.',
    'You start your repaired boat, first try...amazing that it had gas, too. You find civilization and are arrested for trespassing and grand larceny. Technically...you are now a Pirate...and that is pretty cool.',
    'In loving memory of Ben Arno...hes not dead...we just like remembering him. Big shoutout to Google and the stack overflow crew, hawaiian shirts, and a very lenient late work policy.'
];


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
    "You muster up your courage and choose to go down the left fork in the road.",
    "You’re taken through a happy, bright part of the forest.",
    "You pragmatically decide that the right path is the one for you.",
    "You’re taken through the scary part of the forest.",
    "nice.",
    "This stone looks very similar to the one you found earlier. On it you see the an indeciferable signal. You place it in your pocket.",
    "Head back to the boat with the fuse?",
    "Continue on the trail?",
    "Place the fuse in the boat.",
    "Head back to where you were on the trail.",
    "Place the stone in the recess.",
    "Place the stone in the other recess.",
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

function setItem() {
    localStorage.setItem('dialogue', JSON.stringify(dialogue));
}

setItem();

function returnItem() {
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

function buildItems() {
    for (let i = 0; i < items.length; i++) {
        var element = items[i];
        // itemObjects(element);
    }
    console.log(element.name);
}

buildItems();

console.log(items[0])

//inventory button that displays the inventory on click and makes it disappear when clicked again.
//alright how the fuck do I do this...

let inventory = (JSON.parse(localStorage.getItem('inventory')) ? JSON.parse(localStorage.getItem('inventory')) : []); //ternary "?" if the condition (first) is true then action (second) position ":" same as else (set inventory)so that on refresh it wont reset array. I set the variable this way to account for refresh...rather than overwriting on refresh it will set it to local storage. 
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






