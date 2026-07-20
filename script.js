// Select the container div
const container = document.querySelector('#container');

function clearGrid() {

    container.innerHTML = ''; //Clear existing squares

}

// Dynamically change grid
function createGrid (){

    // Ask for grid number input
    let gridInput = parseInt(prompt("Enter grid size (e. g. 16 for a 16x16 grid):"));

    // Fallback to 16x16 if input is invalid/too large
    if (!gridInput || gridInput < 1 || gridInput > 100) {
        gridInput = 16;
    }

    container.innerHTML = ''; //Clear existing squares

    // Grid calculation logic
    let totalSquares = gridInput * gridInput;
    let squareSize = 100 /gridInput;

    for (let i = 0; i < totalSquares; i++) {

        const square = document.createElement('div');

        // Add the CSS class styling & calculate dimensions
        square.classList.add('grid-square');
        square.style.width = `${squareSize}%`;
        square.style.height = square.style.width;

        // Append the newly created div inside container
        container.appendChild(square);
    }
}

createGrid();

// Button variables
const gridSizeBtn = document.addEventListener("click", createGrid);
const clearBtn = document.addEventListener("click", clearGrid);