
// Default grids
let input = document.querySelector('.cell-range');
let container = document.getElementById('container');
let range = document.querySelector('.range');
let output = document.createElement('output');
input.value = 2;

output.textContent = `${input.value}x${input.value}`;
range.appendChild(output);

container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;

let defaultCells = input.value * input.value;
for (let i = 0; i < defaultCells; i++) {
    let cell = document.createElement('div');
    cell.style.border = '0.1px solid red';
    cell.classList.add('grid');
    container.appendChild(cell);
}

// Cell size range
input.addEventListener('input', function() {
    output.textContent = `${input.value}x${input.value}`;

    // Remove the previous cells
    const gridCells = Array.from(document.querySelectorAll('.grid'));
    const grid = document.querySelector('.box');
    
    for (let i = 0; i < gridCells.length; i++) {
        const gridFirstChild = grid.firstElementChild;
        grid.removeChild(gridFirstChild);
    }

    // Create new cells
    let newValue = input.value * input.value;

    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${input.value}, 1fr)`;

    for (let i = 0; i < newValue; i++) {
        let cell = document.createElement('div');
        cell.style.border = '0.1px solid red';
        cell.classList.add('grid');
        grid.appendChild(cell);
    }
   
});
