// index.js

let gridContainer = document.querySelector(".grid");
let size = parseInt(window.getComputedStyle(gridContainer).width, 10);

// Function that assign color on to boxes inside grid
function changeGridColor(e) {
   let color = `rgb(${[0, 0, 0]})`
    Object.assign(e.target.style, {
     backgroundColor : color    
   });
}

// Function that remove old grid and allow to get number between 16 to 100 to make new one
function ResetButton(e) {
  let gridNumber = +prompt("Enter the grid size you want:");
  if (gridNumber > 100 || gridNumber < 16)
    window.alert("Pick number beetwen 16 ann 100");
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  createGrid(gridNumber);
}

window.onload = function() {
    createGrid(24);
};

// Function that creates new grid 
function createGrid(gridSize) {
    for (let rowCol = 0; rowCol < gridSize ** 2; rowCol++) {
      let gridCell = document.createElement("div");
      Object.assign(gridCell.style, {
        height : `${(size / gridSize)}px`,
        width : `${(size / gridSize)}px`
      });
      gridCell.classList.add("gridBox");
      gridCell.addEventListener('mouseover', changeGridColor)
      gridContainer.appendChild(gridCell);      
    }
}

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener('click', ResetButton);

