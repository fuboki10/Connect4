let PlayerTypes = {
  RED: 0,
  Yellow: 1,
  NOT_DEFINDED: -1,
};

let board;
let currentPlayer = PlayerTypes.NOT_DEFINDED;

document.addEventListener('DOMContentLoaded', loadDOM);

function loadDOM() {
  board = document.querySelector('.board');
  createBoard();
  changeCurrentPlayer();
}

function createBoard() {
  for (let i = 0; i < 7; i++) {
    let col = document.createElement('div');
    col.className = 'col';
    col.setAttribute('col-id', i);
    for (let j = 0; j < 6; j++) {
      let row = document.createElement('div');
      row.className = 'cell';
      row.setAttribute('cell-id', i * 6 + j);
      col.appendChild(row);
    }
    col.addEventListener('click', onClick);
    board.appendChild(col);
  }
}

function changeCurrentPlayer() {
  currentPlayer = (currentPlayer + 1) % 2;
  let currentPlayerSpan = document.getElementById('current-player');
  if (currentPlayer == PlayerTypes.RED) {
    currentPlayerSpan.innerHTML = 'Red';
    currentPlayerSpan.style.color = 'red';
  } else {
    currentPlayerSpan.innerHTML = 'Yellow';
    currentPlayerSpan.style.color = 'yellow';
  }
}

function onClick(e) {
  let row = e.target;
  if (e.target.className == 'cell') {
    row = e.target.parentElement;
  }

  let columnNumber = Number(row.getAttribute('col-id')) + 1;

  console.log(`you clicked on row = ${columnNumber}!`);
}
