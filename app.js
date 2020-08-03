const blocksParent = document.querySelector('.container-blocks');
blocksParent.setAttribute('styles', 'display: inline-grid')
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
        blocksParent.setAttribute('style', `grid-template-columns: repeat(${userSelection}, 1fr);`);
    }
    for (let i = 0; i < userSelection**2; i++) {
        const block = document.createElement('div');
        block.classList.add('canvas-block');
        block.setAttribute('id', `${i}`)
        block.setAttribute('style', `color: blue; background: white; height: ${blockHeight}; width: ${blockWidth}; border: solid black`);
        blocksParent.appendChild(block);   
    }
}


function refreshListeners() {
    const blocks = document.querySelectorAll('.canvas-block');
    blocks.forEach((block) =>{
        block.addEventListener('click', () => {
            block.style.backgroundColor = 'black';
        })
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


