// Select the container div
const container = document.querySelector('#container');

// Run a loop 256 times to create a 16x16 layout
for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    
    // Add the CSS class for styling and dimensional math
    square.classList.add('grid-square');
    
    // Add a quick hover effect to test if grid functions
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        square.style.boxShadow = '0 4px 8px rgba (0, 0, 0, 0.1)';
    });

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = '';
    });

    // Append the newly created div inside container
    container.appendChild(square);
}
