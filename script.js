const container = document.getElementById('container');
const button = document.querySelector('button');

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    addHoverEffect();
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getRandomColor();
        });
    });
}

function resetGrid() {
    let newSize = prompt('Enter the number of squares per side (max 100):');
    
    if (newSize === null || newSize === '') {
        return; 
    }

    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    if (newSize > 100) {
        alert('Maximum size limit exceeded. Please enter a number up to 100.');
        return;
    }

    createGrid(newSize);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

createGrid(16);