document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const resetBtn = document.getElementById('resetBtn');
  const DEFAULT_SIZE = 16;
  const MAX_SIZE = 100;
  const CONTAINER_SIZE = 960;

  function createGrid(size) {
    container.innerHTML = '';
    const squareSize = CONTAINER_SIZE / size;
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.addEventListener('mouseenter', () => {
        square.classList.add('hovered');
      });
      container.appendChild(square);
    }
  }

  resetBtn.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (max 100):', DEFAULT_SIZE);
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > MAX_SIZE) {
      alert('Please enter a number between 1 and 100.');
      return;
    }
    createGrid(newSize);
  });

  createGrid(DEFAULT_SIZE);
});
