'use strict'
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
    'You  found another fuse that matched the one you placed in the boat earlier.', 
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
    'In loving memory of Ben Arno...hes not dead...we just like remembering him. Big shoutout to Google and the stack overflow crew, and hawaiian shirts.'
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

let winConArray = ['fuse', 'steeringWheel', 'keys'];



let boatArray = [];

let button1 = document.getElementById('buttonOne');

let button2 = document.getElementById('buttonTwo');


let trackedTextIndex = 0;
let urlArrTest = ['assets/page1.png', 
                'assets/page2.png', 
                'assets/page3.png', 
                'assets/page4.png', 
                'assets/page5.png', 
                'assets/page6.png', 
                'assets/page7.png', 
                'assets/page7b.png', 
                'assets/page8.png', 
                'assets/page9.png', 
                'assets/page10.png', 
                'assets/page11.png', 
                'assets/page12.png',
                'assets/page14.png', 
                'assets/page15.png', 
                'assets/page16.png', 
                'assets/page17.png', 
                'assets/page18.png', 
                'assets/page19.png', 
                'assets/page20.png', 
                'assets/page21.png', 
                'assets/page22.png', 
                'assets/page23.png', 
                'assets/page24.png', 
                'assets/page25.png', 
                'assets/page25a.png', 
                'assets/page25b.png', 
                'assets/page25c.png', 
                'assets/page25d.png', 
                'assets/page26.png', 
                'assets/page31.png', 
                'assets/page32.png',
                'assets/page33.png',
                'assets/ben.png',
                
            ]
let trackedTextIndex2 = 1;
// need to fill out dialog choices and assets, can get rid of assets array and set links to background property

function Page (choice1, choice2, response1, response2, response3, background, tagName, id) {
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.response1 = response1;
    this.response2 = response2;
    this.response3 = response3;
    this.background = background;
    this.tagName = tagName;
    this.id = id;
}

const page1 = new Page(dialogue[0], dialogue[1], storyContentArray[1], storyContentArray[2], '', urlArrTest[0], 'div', 'page1');
const page2 = new Page(dialogue[2], dialogue[3], storyContentArray[1],storyContentArray[2], storyContentArray[3],urlArrTest[1], 'div', 'page2');
const page3 = new Page(dialogue[2], dialogue[3], storyContentArray[3],storyContentArray[4], '',urlArrTest[2], 'div', 'page3');
const page4 = new Page('Continue', 'A', '','' ,'', urlArrTest[3], 'div', 'page4');
const page5 = new Page('Continue', 'A', '','' ,'', urlArrTest[4], 'div', 'page5');
const page6 = new Page(dialogue[4], dialogue[5], storyContentArray[5],'','', urlArrTest[5], 'div', 'page6');
const page7 = new Page(dialogue[6], dialogue[7], storyContentArray[6],storyContentArray[6],'' , urlArrTest[6], 'div', 'page7');
const page8 = new Page('Continue', 'A', dialogue[8],dialogue[8] ,'', urlArrTest[7], 'div', 'page8');
const page9 = new Page('Continue', 'A', '','' ,'', urlArrTest[8], 'div', 'page9');
const page10 = new Page(dialogue[9], 'A', storyContentArray[7],storyContentArray[7],'', urlArrTest[9], 'div', 'page10');
const page11 = new Page(dialogue[10],'A', 'The Gate groans, open, revelating the trail behind it.','' ,'', urlArrTest[10], 'div', 'page11');
const page12 = new Page('Continue', 'A', dialogue[11],'' ,'', urlArrTest[11], 'div', 'page12');
const page13 = new Page('Continue', 'A', '','' ,'', urlArrTest[12], 'div', 'page13');
const page14 = new Page(dialogue[12], dialogue[13], storyContentArray[8],'' ,'', urlArrTest[13], 'div', 'page14');
const page15 = new Page('Continue', 'A', '',storyContentArray[9] ,'', urlArrTest[14], 'div', 'page15');
const page16 = new Page('Continue', 'A', '','' ,'', urlArrTest[15], 'div', 'page16');
const page17 = new Page(dialogue[15], dialogue[17], storyContentArray[10],storyContentArray[10] ,'', urlArrTest[16], 'div', 'page17');
const page18 = new Page('Continue', 'A', dialogue[18],dialogue[18] ,'', urlArrTest[17], 'div', 'page18');
const page19 = new Page('Continue', 'A', dialogue[16], '', '', urlArrTest[18], 'div', 'page19');
const page20 = new Page(dialogue[19],'A', storyContentArray[11], storyContentArray[11], '', urlArrTest[19], 'div', 'page20');
const page21 = new Page(dialogue[23], dialogue[22], storyContentArray[12], '', '', urlArrTest[20], 'div', 'page21');
const page22 = new Page(dialogue[24], 'A', '', '', '', urlArrTest[21], 'div', 'page22');
const page23 = new Page('Continue', 'A', '', '', '', urlArrTest[22], 'div', 'page23');
const page24 = new Page('Continue', 'A', '', '', '', urlArrTest[23], 'div', 'page24');
const page25 = new Page(dialogue[26], dialogue[27], storyContentArray[13], storyContentArray[13], '', urlArrTest[24], 'div', 'page25');
const page26 = new Page('Continue', 'A', '', '', dialogue[28], urlArrTest[28], 'div', 'page26');
const page27 = new Page('Continue on the trail', 'Head back to the gate', storyContentArray[14], '', '', urlArrTest[25], 'div', 'page27');
const page28 = new Page(dialogue[30], dialogue[31], storyContentArray[15], storyContentArray[15], '', urlArrTest[10], 'div', 'page28');
const page29 = new Page('Continue', dialogue[34], storyContentArray[17], storyContentArray[17], '', urlArrTest[28], 'div', 'page29');
const page30 = new Page(dialogue[35], dialogue[36], storyContentArray[18], storyContentArray[18], '', urlArrTest[30], 'div', 'page30');
const page31 = new Page(dialogue[37], dialogue[28], storyContentArray[19], storyContentArray[19], '', urlArrTest[31], 'div', 'page31');
const page32 = new Page(dialogue[35], dialogue[36], storyContentArray[20], storyContentArray[20], '', urlArrTest[30], 'div', 'page32');
const page33 = new Page(dialogue[35], dialogue[36], storyContentArray[21], storyContentArray[21], '', urlArrTest[31], 'div', 'page33');
const page34 = new Page(dialogue[39], 'A', storyContentArray[22], storyContentArray[22], '', urlArrTest[32], 'div', 'page34');
const page35 = new Page(dialogue[40], dialogue[41], storyContentArray[23], storyContentArray[23], '', urlArrTest[13], 'div', 'page35');
const page36 = new Page('Yes', 'Just vibe', 'Unfortunately, you don\'t have all the items to fix the boat. Would you like to go back?', '', '', urlArrTest[29], 'div', 'page36');
const page37 = new Page('Continue', 'A', 'You place the items in the boat', '', '', urlArrTest[29], 'div', 'page37');
const page38 = new Page('FIN','A', storyContentArray[24], storyContentArray[24], '', '', 'div', 'page38');
const page39 = new Page('A', 'A', storyContentArray[25], '', '', urlArrTest[33], 'div', 'page39');

let pageArr = []
pageArr.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32, page33, page34, page35, page36, page37, page38, page39) 

