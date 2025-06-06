let N = 16;
let gridSize = N*N;

let borderConstant = 51 / (N + 1) //51 is a magic number, increase it to increase border size
let paddingConstant = 512 / (N * 2) //512 is a magic number, increase to increase the size of the squares

gridContainer = document.querySelector('#grid-container');

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