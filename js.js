const gridContainer = document.querySelector(".container")

const gridSize = 16;
const totalSquares = gridSize * gridSize;


//creearea de 256 patrate si adaugarea lor la clasa container
for(let i =0;i <totalSquares;i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.append(gridItem);
}