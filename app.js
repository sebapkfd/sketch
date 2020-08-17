const blocksParent = document.querySelector('.blocks');
const buttonSize = document.querySelector('#size-button');
const cleaner = document.querySelector('#clear-button');

function createCanvas(userSelection = 6) {
    userSelection = parseInt(userSelection, 10);
    if (Number.isInteger(userSelection) == false || userSelection < 1) {
        userSelection = 6;
    }
    if (blocksParent.firstChild != null){
        while (blocksParent.firstChild) {
            blocksParent.removeChild(blocksParent.firstChild);
        }
        blocksParent.setAttribute('style', `grid-template-columns: repeat(${userSelection}, auto);`);
    }
    for (let i = 0; i < userSelection**2; i++) {
        const block = document.createElement('div');
        block.setAttribute('class', 'canvas-block');
        block.setAttribute('id', `${i}`)
        blocksParent.appendChild(block);   
    }
}


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

function cleanCanvas(){
    const blocks = document.querySelectorAll('.canvas-block');
    blocks.forEach( (block) =>{
        block.style.backgroundColor = 'white';
    })
}

createCanvas();
refreshListeners();

buttonSize.addEventListener('click', () =>{
    let userSelection = window.prompt('Which size of the Canvas do you want?', 6);
    createCanvas(userSelection);
    refreshListeners();
})

cleaner.addEventListener('click',cleanCanvas);