/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  if (board === null || board.length === 0) return;

  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (i === 0 || i === m - 1 || j === 0 || j === n - 1) &&
        board[i][j] === "O"
      ) {
        dfs(board, i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "T") {
        board[i][j] = "O";
      }
    }
  }
}

function dfs(board, row, col): void {
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[row].length ||
    board[row][col] !== "O"
  ) {
    return;
  }
  board[row][col] = "T";

  dfs(board, row - 1, col);
  dfs(board, row + 1, col);
  dfs(board, row, col - 1);
  dfs(board, row, col + 1);
}
