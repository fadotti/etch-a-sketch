const title = document.querySelector('h1');
title.style.color = `rgb(${generateRgbNumber()} ${generateRgbNumber()} ${generateRgbNumber()})`;

const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');
const sizeButton = document.querySelector('#size');

let N = 16;

createGrid();

resetButton.addEventListener('click', () => {
    title.style.color = `rgb(${generateRgbNumber()} ${generateRgbNumber()} ${generateRgbNumber()})`;

    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})

sizeButton.addEventListener('click', () => {
    let userInput; 
    do {
        userInput = +prompt('Insert an integer between 1 and 100', 16);
    } while(!(Number.isInteger(userInput) && userInput >= 1 && userInput <= 100));

    title.style.color = `rgb(${generateRgbNumber()} ${generateRgbNumber()} ${generateRgbNumber()})`;

    while(gridContainer.hasChildNodes()) {
        const child = document.querySelector('.row-container');
        gridContainer.removeChild(child);
    }

    N = userInput;
    createGrid();
})





function generateRgbNumber() {
    return Math.floor(Math.random() * 256)
}

function createGrid() {

    let gridSize = N*N;

    let borderConstant = 51 / (N + 1) //51 is a magic number, increase it to increase border size
    let paddingConstant = 512 / (N * 2) //512 is a magic number, increase to increase the size of the squares

    for(let i = 1; i <= N; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.className = 'row-container';
        gridContainer.appendChild(rowContainer);
        for(let j = 1; j <=N; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            gridSquare.style.borderWidth = `${borderConstant}px`;
            gridSquare.style.padding = `${paddingConstant}px`;
            if(j != N) {
                gridSquare.style.borderRight = '0px';
            }
            if(i != N) {
                gridSquare.style.borderBottom = '0px';
            }
            rowContainer.appendChild(gridSquare);
        }
    }

    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `rgb(${generateRgbNumber()} ${generateRgbNumber()} ${generateRgbNumber()})`;
        })
    })
}