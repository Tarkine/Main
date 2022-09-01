'use strict'
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

let winConArray = [];

let boatArray = ['fuseOne','fuseTwo', 'steeringWheel', 'keys'];

let button1 = document.getElementById('buttonOne');

let button2 = document.getElementById('buttonTwo');


let trackedTextIndex = 0;

let trackedTextIndex2 = 1;
const page1 = {
    text: '',
    choice1 : dialogue[0],
    choice2 : dialogue[2],
    response1 : dialogue[1],
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page1'
}
const page2 = {
    text : '',
    choice1 : dialogue[3],
    choice2 : dialogue[4],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page2'
}

const page3 = {
    text : '',
    choice1 : dialogue[3],
    choice2 : dialogue[4],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page3'
    
}

const page4 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page4'
}

const page5 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page5'
}

const page6 = {
    text : '',
    choice1 : dialogue[5],
    choice2 : dialogue[6],
    response1 : dialogue[7],
    response2 : dialogue[7],
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page6'
}

const page7 = {
    text : '',
    choice1 : dialogue[8],
    choice2 : dialogue[9],
    response1 : '',
    response2 : dialogue[10],
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page7'
}

const page8 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page8'
}

const page9 = {
    text : '',
    choice1 : dialogue[11],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page9'
}

const page10 = {
    text : '',
    choice1 : dialogue[12],
    choice2 : dialogue[13],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page10'
}

const page11 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page11'
}

const page12 = {
    text : '',
    choice1 : dialogue[15],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page12'
}

const page13 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : dialogue[15],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page13'
}

const page14 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page14'
}

const page15 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page15'
}

const page16 = {
    text : '',
    choice1 : dialogue[16],
    choice2 : dialogue[18],
    response1 : dialogue[17],
    response2 : dialogue[19],
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page16'
}

const page17 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page17'
}

const page18 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page18'
}

const page19 = {
    text : '',
    choice1 : '',
    choice2 : '',
    response1 : dialogue[20],
    response2 : dialogue[21],
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page19'
}

const page20 = {
    text : '',
    choice1 : dialogue[22],
    choice2 : dialogue[23],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page20'
}

const page21 = {
    text : '',
    choice1 : dialogue[24],
    choice2 : dialogue[25],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page21'
}

const page22 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page22'
}

const page23 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page23'
}

const page24 = {
    text : '',
    choice1 : dialogue[26],
    choice2 : dialogue[27],
    response1 : '',
    response2 : dialogue[28],
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page24'
}

const page25 = {
    text : '',
    choice1 : dialogue[14],
    choice2 : dialogue[29],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page25'
}

const page26 = {
    text : '',
    choice1 : dialogue[30],
    choice2 : dialogue[31],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page26'
}

const page27 = {
    text : '',
    choice1 : dialogue[32],
    choice2 : dialogue[33],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page27'
}

const page28 = {
    text : '',
    choice1 : dialogue[34],
    choice2 : dialogue[14],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page28'
}

const page29 = {
    text : '',
    choice1 : dialogue[35],
    choice2 : dialogue[36],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page29'
}

const page30 = {
    text : '',
    choice1 : dialogue[37],
    choice2 : dialogue[38],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page30'
}

const page31 = {
    text : '',
    choice1 : dialogue[39],
    choice2 : dialogue[40],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page31'
}

const page32 = {
    text : '',
    choice1 : dialogue[39],
    choice2 : dialogue[40],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page32'
}

const page33 = {
    text : '',
    choice1 : dialogue[41],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page33'
}

const page34 = {
    text : '',
    choice1 : dialogue[42],
    choice2 : dialogue[43],
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page34'
}

const page35 = {
    text : '',
    choice1 : '',
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    userinterface : '',
    element1 : '',
    tagName: 'div',
    id: 'page35'
}

let pageArr = []
pageArr.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32, page33, page34, page35) 
//Create array for dialogue and stored it locally, validated.
