'use strict'
let storyContentArray = [
    'You\'re in a small plane and you crash...Sad...You wake up and look around for any other surviving passengers. You see one surviving passenger, unconcious but still breathing. Their arm looks broken and is bleeding profusely. Gross. Do you spend time looking for resources to create a splint and try to nurse them back to health?',
    "You splint his arm as best you can. But its still bleeding. He bleeds out and dies. Your Boyscout Master would be so disappointed. ",
    'You let him die. You monster.',
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
let dialogue = [
    "You quickly take off your belt and find a nearby branch. You attempt to splint his arm.",
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
let urlArrTest = ['assets/test.jpg','https://placehold.jp/150x150.png', 'https://placehold.jp/200x200.png']
let trackedTextIndex2 = 1;
// need to fill out dialog choices and assets, can get rid of assets array and set links to background property
const page1 = {
    choice1 : dialogue[0],
    choice2 : dialogue[1],
    response1 : storyContentArray[1],
    response2 : storyContentArray[2],
    background : '',
    tagName: 'div',
    id: 'page1'
}
const page2 = {
     
    choice1 : dialogue[2],
    choice2 : dialogue[3],
    response1 : storyContentArray[1],
    response2 : storyContentArray[2],
    background : '',
    tagName: 'div',
    id: 'page2'
}

const page3 = {
     
    choice1 : dialogue[2],
    choice2 : dialogue[3],
    response1 : storyContentArray[3],
    response2 : storyContentArray[4],
    background : '',
    tagName: 'div',
    id: 'page3'
    
}

const page4 = {
     
    choice1 : 'Continue',
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
    tagName: 'div',
    id: 'page4'
}

const page5 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page5'
}

const page6 = {
     
    choice1 : dialogue[5],
    choice2 : dialogue[6],
    response1 : dialogue[7],
    response2 : dialogue[7],
    background : '',
     
     
    tagName: 'div',
    id: 'page6'
}

const page7 = {
     
    choice1 : dialogue[8],
    choice2 : dialogue[9],
    response1 : '',
    response2 : dialogue[10],
    background : '',
     
     
    tagName: 'div',
    id: 'page7'
}

const page8 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page8'
}

const page9 = {
     
    choice1 : dialogue[11],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page9'
}

const page10 = {
     
    choice1 : dialogue[12],
    choice2 : dialogue[13],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page10'
}

const page11 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page11'
}

const page12 = {
     
    choice1 : dialogue[15],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page12'
}

const page13 = {
     
    choice1 : dialogue[14],
    choice2 : dialogue[15],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page13'
}

const page14 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page14'
}

const page15 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page15'
}

const page16 = {
     
    choice1 : dialogue[16],
    choice2 : dialogue[18],
    response1 : dialogue[17],
    response2 : dialogue[19],
    background : '',
     
     
    tagName: 'div',
    id: 'page16'
}

const page17 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page17'
}

const page18 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page18'
}

const page19 = {
     
    choice1 : '',
    choice2 : '',
    response1 : dialogue[20],
    response2 : dialogue[21],
    background : '',
     
     
    tagName: 'div',
    id: 'page19'
}

const page20 = {
     
    choice1 : dialogue[22],
    choice2 : dialogue[23],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page20'
}

const page21 = {
     
    choice1 : dialogue[24],
    choice2 : dialogue[25],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page21'
}

const page22 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page22'
}

const page23 = {
     
    choice1 : dialogue[14],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page23'
}

const page24 = {
     
    choice1 : dialogue[26],
    choice2 : dialogue[27],
    response1 : '',
    response2 : dialogue[28],
    background : '',
     
     
    tagName: 'div',
    id: 'page24'
}

const page25 = {
     
    choice1 : dialogue[14],
    choice2 : dialogue[29],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page25'
}

const page26 = {
     
    choice1 : dialogue[30],
    choice2 : dialogue[31],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page26'
}

const page27 = {
     
    choice1 : dialogue[32],
    choice2 : dialogue[33],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page27'
}

const page28 = {
     
    choice1 : dialogue[34],
    choice2 : dialogue[14],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page28'
}

const page29 = {
     
    choice1 : dialogue[35],
    choice2 : dialogue[36],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page29'
}

const page30 = {
     
    choice1 : dialogue[37],
    choice2 : dialogue[38],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page30'
}

const page31 = {
     
    choice1 : dialogue[39],
    choice2 : dialogue[40],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page31'
}

const page32 = {
     
    choice1 : dialogue[39],
    choice2 : dialogue[40],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page32'
}

const page33 = {
     
    choice1 : dialogue[41],
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page33'
}

const page34 = {
     
    choice1 : dialogue[42],
    choice2 : dialogue[43],
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page34'
}

const page35 = {
     
    choice1 : '',
    choice2 : '',
    response1 : '',
    response2 : '',
    background : '',
     
     
    tagName: 'div',
    id: 'page35'
}

let pageArr = []
pageArr.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32, page33, page34, page35) 

