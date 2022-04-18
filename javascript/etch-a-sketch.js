
// Default grids
let input = document.querySelector('.cell-range');
let container = document.getElementById('container');
let range = document.querySelector('.range');
let output = document.createElement('output');
input.value = 4;

output.textContent = `${input.value}x${input.value}`;
range.appendChild(output);

container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;

let defaultCells = input.value * input.value;
for (let i = 0; i < defaultCells; i++) {
    let cell = document.createElement('div');
    
    cell.classList.add('grid');
    cell.setAttribute('id',`${i}`);
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
        
        cell.classList.add('grid');
        cell.setAttribute('id',`${i}`);
        grid.appendChild(cell);
    }
   
});

// Change the color of the box
let colorPick = document.querySelector('.color-pick');

// Default color
container.addEventListener('click', function(e) {
    const cell = e.target;
    cell.style.backgroundColor = `${colorPick.value}`;
});

// Change color to black or rainbow
let button = Array.from(document.getElementsByTagName('button'));

button.forEach(element => element.addEventListener('click', function(e) {
    const elementClicked = e.target;
    const attribute = elementClicked.getAttribute('class');

    console.log(attribute);
    if (attribute === 'black') {
        container.addEventListener('click', function(e) {
            const cell = e.target;
            cell.style.backgroundColor = 'black';
        });
    }

    else if (attribute === 'rain-bow') {
        container.addEventListener('click', function(e) {
            const cell = e.target;
            const rainBow = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = `#${rainBow}`;
        });
    }
    
    else if (attribute === 'eraser') {
        container.addEventListener('click', function(e) {
            const cell = e.target;
            cell.style.backgroundColor = '#f8fafc';
        });
    }

    else if (attribute === 'reset') {
        const reset = document.querySelector('.reset');

        reset.addEventListener('click', function(e) {
            const gridCells = Array.from(document.querySelectorAll('.grid'));

            for (let i = 0; i < gridCells.length; i++) {
                const cell = document.getElementById(`${i}`);
                cell.style.backgroundColor = '#f8fafc';
            }
        });
    }

    else {
        container.addEventListener('click', function(e) {
            const cell = e.target;
            cell.style.backgroundColor = `${colorPick.value}`;
        });
    }
}));