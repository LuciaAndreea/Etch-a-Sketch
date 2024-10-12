const gridContainer = document.querySelector(".container")
const btn = document.getElementById("reset-button");

//creearea de 256 patrate si adaugarea lor la clasa container

function createGrid(squaresPerSide){
     gridContainer.innerHTML = "";

     const squareSize = 360 / squaresPerSide;
     const totalSquares = squaresPerSide * squaresPerSide;

for(let i =0;i <totalSquares;i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${squareSize}px`;
    gridItem.style.height = `${squareSize}px`;
    
    gridItem.addEventListener("mouseover", () =>{
        gridItem.classList.add("hovered");
    });

    gridContainer.append(gridItem);
}
}

function resetGrid(){
    let userInput = prompt("Enter the number of squares per side for the new grid (Max: 100):", 16);
    let squaresPerSide = parseInt(userInput);

    if(isNaN(squaresPerSide) || squaresPerSide <1 || squaresPerSide>25){
        alert("Please enter a valid number between 1 and 25.");
    }else{
        createGrid(squaresPerSide);
    }
}

btn.addEventListener("click" , resetGrid);

createGrid(16);
