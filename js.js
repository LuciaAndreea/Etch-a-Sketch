const gridContainer = document.querySelector(".container")
const btn = document.getElementById("reset-button");


//function for a random color when a square is hovered over
function randomColorWhenHovered(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//function to create a grid 
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
        const randomColor = randomColorWhenHovered();
        gridItem.style.backgroundColor = randomColor;
    });

    gridContainer.append(gridItem);
}
}


//function to reset the grid based on the user's choice
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
