export const checkForWinner = (board, player) => {
  // Check rows
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col <= board[row].length - 4; col++) {
      if (
        board[row][col] === player &&
        board[row][col + 1] === player &&
        board[row][col + 2] === player &&
        board[row][col + 3] === player
      ) {
        return true;
      }
    }
  }

  // Check columns
  for (let col = 0; col < board[0].length; col++) {
    for (let row = 0; row <= board.length - 4; row++) {
      if (
        board[row][col] === player &&
        board[row + 1][col] === player &&
        board[row + 2][col] === player &&
        board[row + 3][col] === player
      ) {
        return true;
      }
    }
  }

  // Check diagonals (upwards)
  for (let row = 3; row < board.length; row++) {
    for (let col = 0; col <= board[row].length - 4; col++) {
      if (
        board[row][col] === player &&
        board[row - 1][col + 1] === player &&
        board[row - 2][col + 2] === player &&
        board[row - 3][col + 3] === player
      ) {
        return true;
      }
    }
  }

  // Check diagonals (downwards)
  for (let row = 0; row <= board.length - 4; row++) {
    for (let col = 0; col <= board[row].length - 4; col++) {
      if (
        board[row][col] === player &&
        board[row + 1][col + 1] === player &&
        board[row + 2][col + 2] === player &&
        board[row + 3][col + 3] === player
      ) {
        return true;
      }
    }
  }
  return false;
};
