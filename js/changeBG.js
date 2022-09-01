'use strict';
let element = document.querySelector('main');
let children = element.children;
console.log(children);

let btn = document.querySelectorAll('button');

let nodeObj = {
    tagName: 'section'
};

function changeB (){
    for (let i = 0; i < children.length; i++) {
        if (children[i].className ==='xyz') {
            children[i].remove();
        }
    };
    // We can append a new node object with all the properties
    let newNode = document.createElement(nodeObj.tagName)
    newNode.innerText = 'TESSSSSSSSSSSSSSSSSSSST'
    newNode.className = 'tesssssst'
    element.appendChild(newNode);
    
};

for (let i = 0; i < btn.length; i++) {
    if (btn[i].id === 'helpme') {
        btn[i].addEventListener('click', changeB)  
    }
    
}


     
    
        
