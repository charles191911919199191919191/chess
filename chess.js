const board = document.getElementById('chessboard');
let selectedPiece = null;
let turn = 'white'; // Track turns

let chessboard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

// Basic piece movement rules
const pieceMovement = {
  'P': (from, to) => {
    if (from[0] === 6 && from[0] - to[0] <= 2 && from[1] === to[1]) return true;
    if (from[0] - to[0] === 1 && from[1] === to[1]) return true;
    return false;
  },
  'R': (from, to) => {
    return (from[0] === to[0] || from[1] === to[1]);
  },
  // More piece rules...
};

function renderBoard() {
  board.innerHTML = '';
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
      square.innerHTML = chessboard[row][col];
      square.addEventListener('click', () => onSquareClick(row, col));
      board.appendChild(square);
    }
  }
}

function onSquareClick(row, col) {
  const piece = chessboard[row][col];
  if (!selectedPiece && piece !== '') {
    // Select piece
    if (piece === piece.toUpperCase() && turn === 'white' || piece === piece.toLowerCase() && turn === 'black') {
      selectedPiece = { piece, row, col };
    }
  } else if (selectedPiece) {
    // Try to move selected piece
    if (pieceMovement[selectedPiece.piece.toUpperCase()](selectedPiece, [row, col])) {
      chessboard[row][col] = selectedPiece.piece;
      chessboard[selectedPiece.row][selectedPiece.col] = '';
      selectedPiece = null;
      turn = turn === 'white' ? 'black' : 'white';
    }
  }
  renderBoard();
}

function startNewGame() {
  chessboard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  ];
  turn = 'white';
  renderBoard();
}

renderBoard();
