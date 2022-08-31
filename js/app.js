'use strict';

// GLOBAL VARIABLES

let storyContentArray = ['You\'re in a small plane and you crash...Sad...You wake up and look around for any other surviving passengers. You see one surviving passenger, unconcious but still breathing. Their arm looks broken and is bleeding profusely. Gross. Do you spend time looking for resources to create a splint and try to nurse them back to health?', 'You look around and see a dense tropical forest. There is a trail in front of you. Outstanding! A trail means people!', 'You look around and see a dense tropical forest. There is a trail in front of you. Outstanding! A trail means people! You remember that you have so much to live for and the new season of survivor drops in October.', 'You come across some ancient ruins. There are vines growing up the broken walls. It does not appear as if anyone has been here in quite some time. You begin to worry that these paths may not actually lead to civilization.', 'You touch the symbol and it starts to glow. You start to feel like you should subscribe to youtube red...you recognize the idea as stupid and quickly shake it from your mind. You notice the stone is loose.', 'After wandering along the path for what seemed like tens of minutes. You reach a large wall. The wall stretches into the dark forest. On the path is a large gate with no handles. You notice on the left side of the gate a recess that is the exact size of the stone you have in your pocket.', 'You come across a river. A BOAT!!! You race over to it and start to take inventory of it. It\'s missing its keys, and the steering wheel is gone. Also you notice both fuses have been ripped out. You look at the river, wondering if you could use a log to float down the river. At that moment a sloth from an overhanging vine drops into the water. A flurry of froth and blood erupt as bloodthirsty pirannahs rip it to shreds. Sad...gross...Looks like fixing the boat is the only option. You notice a fuse sitting next to the boat...someone must have removed them. You pick up the fuse and put it in your pocket.', 'You place the fuse in the boat. Amazing. You congratulate yourself on your own ingenuity. Perhaps there are more pieces of the boat somewhere in the forest.', 'You come to a fork in the road! The right path looks much like the trial you\'ve already seen. The left path is dark. Vines hang down to the trail from the canopy above. You hear the sound of a leopard screaming.', 'You reach a clearing in the forest and see a pile of debris washed up on the bank of a river. You\'ll need to dig through the pile to see if there is anything of interest.', 'You  found a fuse that matched the one you placed in the boat earlier.', 'You exit the forest and find youself in a clearing. You find, after a quick survey of the clearing, an urn. It has a small but sealed opening flanked on either side by recesses the same size as the one that was in the gate.', 'You stand up...genious...The other stone must be around here somewhere. You think a moment and realize you know where another stone is. You left it in on the other side of the gate.', 'You find yourself back at the gate. But how to get over it? You grab a branch and start digging furiously...many hours later you emerge on the other side of the wall. Man...walls are stupid...and anyone who thinks they can keep someone out does not have a good grasp of verticle spaces.', 'You find yourself back at the gate.', 'You find yourself back in the second clearing. You place the stone into the second recess and the urn....clicks...I guess...Ethan...You look inside and you find the steering wheel for the boat. You wonder how it got here. But you remember they didnt explain anything on “Lost” either...oh well... You cant fit the steering wheel in your cargo pants so you shove it down the front of them.', 'While on the trail you hear the cawing of a strange bird. Clearly of the covid family...and unknown to you...this bird species was quite rare. Having been the first birds to lay their eggs mid air in order to control their own population. In its beak you spot shiny and keylike objects...you wonder what they are. Regardless, you must have them.', 'You miss...the bird starts to fly away, laying and losing its next generation in its starled state. Memories of being cut from your junior varsity baseball team rush back.', 'You catch up to the bird.', 'You miss. The bird flies away.", "You hit the bird...and amazingly...hit a second bird, which laid and lost its next generation in its starled state. You run up to the two birds you\’ve stunned with one stone...it\’s just like the old saying: “bitch I might be.” If only Adam was recording this.', 'You enter the clearing with the boat.', 'You start your repaired boat, first try...amazing that it had gas, too. You find civilization and are arrested for trespassing and grand larceny. Technically...you are now a Pirate...and that is pretty cool.', 'In loving memory of Ben Arno...hes not dead...we just like remembering him. Big shoutout to Google and the stack overflow crew, hawaiian shirts, and a very lenient late work policy.'];

let winConArray = [];

let boatArray = ['fuseOne','fuseTwo', 'steeringWheel', 'keys'];

let button1 = document.getElementById('buttonOne');

let button2 = document.getElementById('buttonTwo');

let dialogueArray = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7', 'text8'];

// CONSTRUCTOR


// CONSTRUCTOR METHODS


// FUNCTIONS

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

function changeButtonText1 (event) {
    let button1Clicked = event.target;
    let eachClick = button1Clicked
    console.log(eachClick);
    for (let i = 0; i < dialogueArray.length; i++) {
    if (eachClick === dialogueArray[i]) {
     // add conditional that only changes if the screen doesn't change/there are no environment screens
    let dialogueIndex = dialogueArray[i];
    button1.innerHTML = dialogueIndex;
    break;
    }
}
};

// function changeButtonText2 (event) {
//     let button2Clicked = event.target;
//     for (let i = 0; i < dialogueArray.length; i++) {
//     // add conditional that only changes if the screen doesn't change/there are no environment screens
//     let dialogueIndex = dialogueArray[i];
//     button2.innerHTML = dialogueIndex;
//     }
// };


