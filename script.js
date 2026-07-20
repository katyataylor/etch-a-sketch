// Elements
const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#gridSizeBtn");
const clearBtn = document.querySelector("#clearBtn");

// Track drawing state
let isDrawing = false;

function clearGrid() {

    container.innerHTML = "";
}

function createGrid() {
    let gridInput = parseInt(prompt("Enter grid size (e.g. 16 for a 16x16 grid):"));

    // Fallback if input is invalid
    if (!gridInput || gridInput < 1 || gridInput > 100) {
        gridInput = 16;
    }

    container.innerHTML = ""; // Clear existing squares

    let totalSquares = gridInput * gridInput;
    let squareSize = 100 / gridInput;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        // 1. Start drawing when clicking down on a square
        square.addEventListener("pointerdown", (e) => {
            isDrawing = true;
            square.style.backgroundColor = "black";
            e.preventDefault(); // Prevents accidental drag-and-drop glitches
        });

        // 2. Color squares when dragging the pointer into them
        square.addEventListener("pointerenter", () => {
            if (isDrawing) {
                square.style.backgroundColor = "black";
            }
        });

        container.appendChild(square);
    }
}

// 3. Stop drawing when the user releases the mouse anywhere on the page
window.addEventListener("pointerup", () => {
    isDrawing = false;
});

// Event Listeners for buttons
gridSizeBtn.addEventListener("click", createGrid);
clearBtn.addEventListener("click", clearGrid);

// Initialize a default 16x16 grid on page load without showing a prompt
// By bypassing createGrid() here, we avoid the immediate prompt pop-up
function initDefaultGrid() {
    container.innerHTML = "";
    let totalSquares = 16 * 16;
    let squareSize = 100 / 16;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener("pointerdown", (e) => {
            isDrawing = true;
            square.style.backgroundColor = "black";
            e.preventDefault();
        });

        square.addEventListener("pointerenter", () => {
            if (isDrawing) {
                square.style.backgroundColor = "black";
            }
        });

        container.appendChild(square);
    }
}

initDefaultGrid();
