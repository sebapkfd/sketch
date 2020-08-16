const blocksParent = document.querySelector('.blocks');
blocksParent.setAttribute('styles', 'display: inline-grid') // add id and move every style to css
let blockWidth = blocksParent.offsetWidth/16;
let blockHeight = blocksParent.offsetHeight/16;

function createCanvas(userSelection = 4) {
    userSelection = parseInt(userSelection, 10);
    if (Number.isInteger(userSelection) == false || userSelection < 1) {
        userSelection = 4;
    }
    if (blocksParent.firstChild != null){
        while (blocksParent.firstChild) {
            blocksParent.removeChild(blocksParent.firstChild);
        }
        blocksParent.setAttribute('style', `grid-template-columns: repeat(${userSelection}, auto);`);
    }
    for (let i = 0; i < userSelection**2; i++) {
        const block = document.createElement('div');
        // block.classList.add('canvas-block');
        block.setAttribute('class', 'canvas-block');
        block.setAttribute('id', `${i}`)
        block.setAttribute('style', `color: blue; background: white; height: ${blockHeight}; width: ${blockWidth}; border: none`);
        blocksParent.appendChild(block);   
    }
}


// maybe user args to merge all color functions here
function refreshListeners() {
    const blocks = document.querySelectorAll('.canvas-block');
    let colorBlock;
    blocks.forEach((block) =>{
        block.addEventListener('click', () => {
            colorBlock = document.getElementById('color-button').value;
            block.style.backgroundColor = colorBlock;
        })
    })
}

// Might delete later
function cleanCanvas(){
    const blocks = document.querySelectorAll('.canvas-block');
    blocks.forEach( (block) =>{
        block.style.backgroundColor = 'white';
    })
}


createCanvas();
const buttonSize = document.querySelector('#size-button');

refreshListeners();
buttonSize.addEventListener('click', () =>{
    let userSelection = window.prompt('Which size of the Canvas do you want?', 4);
    createCanvas(userSelection);
    refreshListeners();
})

const cleaner = document.querySelector('#clear-button');
cleaner.addEventListener('click',cleanCanvas);


/*
    refactoring Js code
    Title
    cleaner
    Event listener
*/