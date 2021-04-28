let PlayerTypes = {
  RED: 0,
  Yellow: 1,
  NOT_DEFINDED: -1,
};

let playerColor = ['red', 'yellow'];

let currentPlayer = PlayerTypes.NOT_DEFINDED;
let gameBoard;
let availableCells;

document.addEventListener('DOMContentLoaded', startGame);

function startGame() {
  createBoard();
  changeCurrentPlayer();
  gameBoard = Array.from(Array(7), () => new Array(6, -1));
  availableCells = 42;
}

function createBoard() {
  let board = document.querySelector('.board');
  for (let i = 0; i < 7; i++) {
    let col = document.createElement('div');
    col.className = 'col';
    col.setAttribute('col-id', i);
    for (let j = 0; j < 6; j++) {
      let row = document.createElement('div');
      row.className = 'cell';
      row.id = i * 6 + j;
      col.appendChild(row);
    }
    col.addEventListener('click', onClick);
    board.appendChild(col);
  }
}

function changeCurrentPlayer() {
  currentPlayer = (currentPlayer + 1) % 2;
  let currentPlayerSpan = document.getElementById('current-player');
  currentPlayerSpan.style.color = playerColor[currentPlayer];
  currentPlayerSpan.innerHTML = playerColor[currentPlayer];
}

function onClick(e) {
  let col = e.target;
  if (e.target.className == 'cell') {
    col = e.target.parentElement;
  }

  let columnNumber = Number(col.getAttribute('col-id')) + 1;

  console.log(`you clicked on col = ${columnNumber}!`);

  let selectedCellId = getFirstAvailableCell(col);

  if (selectedCellId != -1) {
    availableCells--;
    changeCurrentPlayer();
  }
}

function getFirstAvailableCell(column) {
  let rows = Array.from(column.children).reverse();
  for (let cell of rows) {
    if (cell.style.backgroundColor == '') {
      let selectedCell = Number(cell.id);
      cell.style.backgroundColor = playerColor[currentPlayer];
      gameBoard[Math.floor(selectedCell / 7)][selectedCell % 6] = currentPlayer;

      return Number(cell.id);
    }
  }
  return -1;
}

function win() {}
