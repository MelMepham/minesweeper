document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:[
    {row: 0, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)},
    {row: 0, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)},
    {row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)},
    {row: 1, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)},
    {row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)},
    {row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)},
    {row: 2, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)},
    {row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)},
    {row: 2, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: countSurroundingMines(cell)}]
}

function startGame () {
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)

  for (i = 0; i < board['cells'].length; i++) {
    if (board['cells'][i]) {
      countSurroundingMines();
      }
    }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for ( k = 0; k < board['cells'].length; k++ ) {
    if (board.cells[2] === true && board.cells[3] === true) {
      lib.displayMessage('You win!')
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);

  for (j = 0; j < surroundingCells.length; j++) {
    if (surroundingCells[i].isMine === true ) {
      count++
      }
    }
    return count
  }
