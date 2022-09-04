''use strict';
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
    typingEffect(childOfNewNode, 30)
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
    skip1()
    i++
    bg.remove();
    let newNode = document.createElement(pageArr[i].tagName)
    img.src = urlArrTest[i];
    let childOfNewNode = document.createElement('p')
    childOfNewNode.innerText = pageArr[i].response1
    typingEffect(childOfNewNode, 30)
    newNode.id = pageArr[i].id
    element.appendChild(newNode)
    newNode.appendChild(childOfNewNode)
    nextPage()
    choice1()
    choice2()
    doubleResponse ();
    console.log(i)
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
    img.src = urlArrTest[i];
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
function skip1() {
    if (i === 22 || i === 1 || i === 14 || i === 19 || i === 6 || i === 17 || i === 18) {
        i++ + 1
        
    }
    
}
function rePrompt () {
    if (i === 3 || i === 7) {
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
    
    btnOne.innerHTML = pageArr[i].choice1;
    btnTwo.innerHTML = pageArr[i].choice2;
}

function resetAndReplay () {
    localStorage.clear();
}
function backToHome (){
    window.location.href='index.html';
}
back.addEventListener('click', backToHome)
// EVENT HANDLERS


let storyContentArray = [
    //0
    'You\'re in a small plane and you crash...Sad...You wake up and look around for any other surviving passengers. You see one surviving passenger, unconcious but still breathing. Their arm looks broken and is bleeding profusely. Gross. Do you spend time looking for resources to create a splint and try to nurse them back to health?',
    //1
    "You splint his arm as best you can. But its still bleeding. He bleeds out and dies. Your Boyscout Master would be so disappointed. ",
    //2
    'You let him die. You monster.',
    //3
    'You look around and see a dense tropical forest. There is a trail in front of you. Outstanding! A trail means people!',
    //4
    'You look around and see a dense tropical forest. There is a trail in front of you. Outstanding! A trail means people! You remember that you have so much to live for and the new season of survivor drops in October.',
    //5
    'You come across some ancient ruins. There are vines growing up the broken walls. It does not appear as if anyone has been here in quite some time. You begin to worry that these paths may not actually lead to civilization.',
    //6
    "You find an ancient symbol, recognizable only to the ancients.You touch the symbol and it starts to glow. You start to feel like you should subscribe to youtube red...you recognize the idea as stupid and quickly shake it from your mind. You notice the stone is loose.",
    //7
    'After wandering along the path for what seemed like tens of minutes. You reach a large wall. The wall stretches into the dark forest. On the path is a large gate with no handles. You notice on the left side of the gate a recess that is the exact size of the stone you have in your pocket.',
    //8
    'You come across a river. A BOAT!!! You race over to it and start to take inventory of it. It\'s missing its keys,and the steering wheel is gone. Also you notice both fuses have been ripped out. You look at the river, wondering if you could use a log to float down the river. At that moment a sloth from an overhanging vine drops into the water. A flurry of froth and blood erupt as bloodthirsty pirannahs rip it to shreds. Sad...gross...Looks like fixing the boat is the only option. You notice a fuse sitting next to the boat...someone must have removed them. You pick up the fuse and put it in your pocket.',
    //9
    'You place the fuse in the boat. Amazing. You congratulate yourself on your own ingenuity. Perhaps there are more pieces of the boat somewhere in the forest.',
    //10
    'You come to a fork in the road! The right path looks much like the trial you\'ve already seen. The left path is dark. Vines hang down to the trail from the canopy above. You hear the sound of a leopard screaming.',
    //11
    'You reach a clearing in the forest and see a pile of debris washed up on the bank of a river. You\'ll need to dig through the pile to see if there is anything of interest.',
    //12
    'You  found a steering wheel and a fuse that matched the one you placed in the boat earlier.', 
    //13
    'You exit the forest and find youself in a clearing. You find, after a quick survey of the clearing, an urn. It has a small but sealed opening flanked on either side by recesses the same size as the one that was in the gate.',
    //14
    'You stand up...genious...The other stone must be around here somewhere. You think a moment and realize you know where another stone is. You left it in on the other side of the gate.',
    //15
    'You find yourself back at the gate. But how to get over it? You grab a branch and start digging furiously...many hours later you emerge on the other side of the wall. Man...walls are stupid...and anyone who thinks they can keep someone out does not have a good grasp of verticle spaces.',
    //16
    'You find nothing',
    //17
    'You find yourself back in the second clearing. You place the stone into the second recess and the urn....clicks...I guess...Ethan...You look inside and you find the steering wheel for the boat. You wonder how it got here. But you remember they didnt explain anything on “Lost” either...oh well... You cant fit the steering wheel in your cargo pants so you shove it down the front of them.',
    //18
    'While on the trail you hear the cawing of a strange bird. Clearly of the covid family...and unknown to you...this bird species was quite rare. Having been the first birds to lay their eggs mid air in order to control their own population. In its beak you spot shiny and keylike objects...you wonder what they are. Regardless, you must have them.',
    //19
    'You miss...the bird starts to fly away, laying and losing its next generation in its starled state. Memories of being cut from your junior varsity baseball team rush back.',
    //20
    'You catch up to the bird.',
    //21
    'You miss. The bird flies away.',
    //22
    'You hit the bird...and amazingly...hit a second bird, which laid and lost its next generation in its starled state. You run up to the two birds you\’ve stunned with one stone...it\’s just like the old idiom: “You can lead a horse to water but you shouldn\'t use it like a straw.” If only Adam was recording this.',
    //23
    'You enter the clearing with the boat.',
    //24
    'You start your repaired boat, first try...amazing that it had gas, too. You find civilization and are arrested for trespassing and grand larceny. Technically...you are now a Pirate...and that is pretty cool.',
    //25
    'In loving memory of Ben Arno...hes not dead...we just like remembering him. Big shoutout to Google and the stack overflow crew, hawaiian shirts, and a very lenient late work policy.'
];

let dialogue = [
    "You quickly take off your belt and find a nearby branch. You attempt to splint his arm.", //0
    "You remember he took the last chicken option on the in flight meal. You let him die.", //1
    "You begin walking down the trail.",//2
    "You decide you’ve had a good run. You lay down next to the chicken theif and wait for death.",//3
    "Clear the vines from the wall.",//4
    "Clean the vines from the wall.",//5
    "You remove the stone from its setting, you put it in one of your four cargo pants pockets. Cargo pants rule!",//6
    "You leave the stone alone.",//7
    "The stone falls from its setting, you decide to pick it up and put it in your pocket.",//8
    "After struggling to get the stone out of your cargo pocket, you place it in the recess.",//9
    "Continue through the gate.",//10
    "You walk through the gate. It closes quickly behind you.",//11
    "Continue along the trail.",//12
    "Place the fuse in the boat.",//13
    "Continue along the trail.",//14
    "You muster up your courage and choose to go down the left fork in the road.",//15
    "You’re taken through a happy, bright part of the forest.",//16
    "You pragmatically decide that the right path is the one for you.",//17
    "You’re taken through the scary part of the forest.",//18
    "Search the flotsam for anything useful.",//19
    "nice.",//20
    "This stone looks very similar to the one you found earlier. On it you see the an indeciferable signal. You place it in your pocket.",//21
    "Head back to the boat with the fuse?",//22
    "Continue on the trail?",//23
    "Place the fuse in the boat and head back to where you were on the trail",//24
    "Head back to where you were on the trail.",//25
    "Place the stone in the recess.",//26
    "Place the stone in the other recess",//27
    "the stone does nothing (because Ethan doesn\’t want to have to code more glowing rocks...Ethan...)",//28
    "Head back to the gate.",//29
    "Grab the Stone and head back to the clearing.",//30
    "Stare at the stone.",//31
    "Grab the Stone and head back to the clearing.",//32
    "Stare at the stone.",//33
    "Head back to the boat and attach the steering wheel.",//34
    "Throw rock at the bird.",//35
    "Throw stone at the bird.",//36
    "Pursue the bird.",//37
    "Chase the bird.",//38
    "Head back to the Boat.",//39
    "Place items in the boat.",//40
    "Just vibe."//41
]

let winConArray = [];

let boatArray = ['fuseOne','fuseTwo', 'steeringWheel', 'keys'];

let button1 = document.getElementById('buttonOne');

let button2 = document.getElementById('buttonTwo');


let trackedTextIndex = 0;
let urlArrTest = ['assets/page1.png', // 0
                'assets/page2.png', // 1
                'assets/page3.png', // 2
                'assets/page4.png', // 3
                'assets/page5.png', // 4
                'assets/page6.png', // 5
                'assets/page7.png', // 6
                'assets/page7b.png', // 7
                'assets/page8.png', // 8
                'assets/page9.png', // 9
                'assets/page10.png', // 10
                'assets/page11.png', // 11
                'assets/page12.png', // 12
                'assets/page14.png', // 13
                'assets/page15.png', // 14
                'assets/page16.png', // 15
                'assets/page17.png', // 16
                'assets/page18.png', // 17
                'assets/page19.png', // 18
                'assets/page20.png', // 19
                'assets/page21.png', // 20
                'assets/page22.png', // 21
                'assets/page23.png', // 22
                'assets/page24.png', // 23
                'assets/page25.png', // 24
                'assets/page25a.png', // 25
                'assets/page25b.png', // 26
                'assets/page25c.png', // 27
                'assets/page25d.png', // 28
                'assets/page26.png', // 29
                'assets/page31.png',, // 30
                'assets/page32.png',// 31
                
            ]
let trackedTextIndex2 = 1;
// need to fill out dialog choices and assets, can get rid of assets array and set links to background property
const page1 = {
    choice1 : dialogue[0],
    choice2 : dialogue[1],
    response1 : storyContentArray[1],
    response2 : storyContentArray[2],
    background : urlArrTest[0],
    tagName: 'div',
    id: 'page1'
}
const page2 = {
     
    choice1 : dialogue[2],
    choice2 : dialogue[3],
    response1 : storyContentArray[1],
    response2 : storyContentArray[2],
    response3 : storyContentArray[3],
    background : urlArrTest[1],
    tagName: 'div',
    id: 'page2'
}

const page3 = {
     
    choice1 : dialogue[2],
    choice2 : dialogue[3],
    response1 : storyContentArray[3],
    response2 : storyContentArray[4],
    background : urlArrTest[2],
    tagName: 'div',
    id: 'page3'
    
}

const page4 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[3],
    tagName: 'div',
    id: 'page4'
}

const page5 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[4],
     
     
    tagName: 'div',
    id: 'page5'
}

const page6 = {
     
    choice1 : dialogue[4],
    choice2 : dialogue[5],
    response1 : storyContentArray[5],
    response2 : '',
    response3: '',
    background : urlArrTest[5],
    tagName: 'div',
    id: 'page6'
}

const page7 = {
     
    choice1 : dialogue[6],
    choice2 : dialogue[7],
    response1 : storyContentArray[6],
    response2 : '',
    background : urlArrTest[6],
     
     
    tagName: 'div',
    id: 'page7'
}

const page8 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : dialogue[8],
    response2 : dialogue[8],
    background : urlArrTest[7],
    tagName: 'div',
    id: 'page8'
}

const page9 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[8],
     
     
    tagName: 'div',
    id: 'page9'
}
// ca

const page10 = {
     
    choice1 : dialogue[9],
    choice2 : 'A',
    response1 : storyContentArray[7],
    response2 : storyContentArray[7],
    background : urlArrTest[9],
     
     
    tagName: 'div',
    id: 'page10'
}

const page11 = {
     
    choice1 : dialogue[10],
    choice2 : 'A',
    response1 : 'The Gate groans open, revealing the trail behind it.',
    response2 : '',
    response3 : '',
    background : urlArrTest[10],
     
     
    tagName: 'div',
    id: 'page11'
}

const page12 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : dialogue[11],
    response2 : '',
    background : urlArrTest[11],
     
     
    tagName: 'div',
    id: 'page12'
}

const page13 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[12],
     
     
    tagName: 'div',
    id: 'page13'
}

const page14 = {
     
    choice1 : dialogue[12],
    choice2 : dialogue[13],
    response1 : storyContentArray[8],
    response2 : '',
    background : urlArrTest[13],
     
     
    tagName: 'div',
    id: 'page14'
}

const page15 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : storyContentArray[9],
    background : urlArrTest[14],
     
     
    tagName: 'div',
    id: 'page15'
}

const page16 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[15],
     
     
    tagName: 'div',
    id: 'page16'
}

const page17 = {
     
    choice1 : dialogue[15],
    choice2 : dialogue[17],
    response1 : storyContentArray[10],
    response2 : storyContentArray[10],
    background : urlArrTest[16],
     
     
    tagName: 'div',
    id: 'page17'
} //skip choice on dialogue 1 to page 19

const page18 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : dialogue[18],
    response2 : dialogue[18],
    background : urlArrTest[17],
     
     
    tagName: 'div',
    id: 'page18'
}//continuance for dialogue 2, response 1 should skip 19

const page19 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : dialogue[16],
    response2 : '',
    background : urlArrTest[18],
     
     
    tagName: 'div',
    id: 'page19'
}

const page20 = {
     
    choice1 : dialogue[19],
    choice2 : 'A',
    response1 : storyContentArray[11],
    response2 : storyContentArray[11],
    background : urlArrTest[19],
     
     
    tagName: 'div',
    id: 'page20'
}

const page21 = {
     
    choice1 : dialogue[23],
    choice2 : dialogue[22],
    response1 : storyContentArray[12],
    response2 : '',
    background : urlArrTest[20],
     
     
    tagName: 'div',
    id: 'page21'
} //fork, choosing choice 1 should take you to 23, choice 2 should take you to 22.

const page22 = {
     
    choice1 : dialogue[24],
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[21],
     
     
    tagName: 'div',
    id: 'page22'
}

const page23 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[22],
     
     
    tagName: 'div',
    id: 'page23'
}

const page24 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[23],
     
     
    tagName: 'div',
    id: 'page24'
}

const page25 = {
     
    choice1 : 'Continue',
    choice2 : 'A',
    response1 : '',
    response2 : '',
    background : urlArrTest[24],
     
     
    tagName: 'div',
    id: 'page25'
}

const page26 = {
     
    choice1 : dialogue[26],
    choice2 : dialogue[27],
    response1 : storyContentArray[13],
    response2 : storyContentArray[13],
    response3: dialogue[28],
    background : urlArrTest[29],
     
     
    tagName: 'div',
    id: 'page26'
} //this one required the third option load with the ethan quip

const page27 = {
     
    choice1 : dialogue[22],
    choice2 : 'A',
    response1 : storyContentArray[14],
    response2 : storyContentArray[14],
    background : '',
     
     
    tagName: 'div',
    id: 'page27'
}

const page28 = {
     
    choice1 : dialogue[30],
    choice2 : dialogue[31],
    response1 : storyContentArray[15],
    response2 : storyContentArray[15],
    background : '',
     
     
    tagName: 'div',
    id: 'page28'
} // dialogue 2 choice will need a repeat

const page29 = {
     
    choice1 : 'Continue',
    choice2 : dialogue[34],
    response1 : storyContentArray[17],
    response2 : storyContentArray[17],
    background : '',
     
     
    tagName: 'div',
    id: 'page29'
}

const page30 = {
     
    choice1 : dialogue[35],
    choice2 : dialogue[36],
    response1 : storyContentArray[18],
    response2 : storyContentArray[18],
    background : '',
     
     
    tagName: 'div',
    id: 'page30'
}

const page31 = {
     
    choice1 : dialogue[37],
    choice2 : dialogue[38],
    response1 : storyContentArray[19],
    response2 : storyContentArray[19],
    background : urlArrTest[30],
     
     
    tagName: 'div',
    id: 'page31'
}

const page32 = {
     
    choice1 : dialogue[35],
    choice2 : dialogue[36],
    response1 : storyContentArray[20],
    response2 : storyContentArray[20],
    background : urlArrTest[31],
     
     
    tagName: 'div',
    id: 'page32'
}

const page33 = {
     
    choice1 : dialogue[35],
    choice2 : dialogue[36],
    response1 : storyContentArray[21],
    response2 : storyContentArray[21],
    background : '',
     
     
    tagName: 'div',
    id: 'page33'
}

const page34 = {
     
    choice1 : dialogue[39],
    choice2 : 'A',
    response1 : storyContentArray[22],
    response2 : storyContentArray[22],
    background : '',
     
     
    tagName: 'div',
    id: 'page34'
}

const page35 = {
     
    choice1 : dialogue[40],
    choice2 : dialogue[41],
    response1 : storyContentArray[23],
    response2 : storyContentArray[23],
    background : '',
     
     
    tagName: 'div',
    id: 'page35'
} //loop on option 2

const page36 = {
     
    choice1 : 'A',
    choice2 : 'A',
    response1 : storyContentArray[24],
    response2 : storyContentArray[24],
    background : '',
     
     
    tagName: 'div',
    id: 'page36'
}





let pageArr = []
pageArr.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32, page33, page34, page35, page36) 
