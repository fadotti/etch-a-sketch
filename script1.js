let N = 16;
let gridSize = N*N;

gridContainer = document.querySelector('#grid-container');

for(let i = 1; i <= N; i++) {
    let rowContainer = document.createElement('div');
    rowContainer.className = 'row-container';
    gridContainer.appendChild(rowContainer);
    for(let j = 1; j <=N; j++) {
        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        rowContainer.appendChild(gridSquare);
    }
}