function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const board: string[] = Array(n).fill(".".repeat(n));

  function backtrack(row: number) {
    if (row === n) {
      result.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        placeQueen(row, col);
        backtrack(row + 1);
        removeQueen(row, col);
      }
    }
  }

  function isSafe(row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }

  function placeQueen(row: number, col: number) {
    board[row] =
      board[row].substring(0, col) + "Q" + board[row].substring(col + 1);
  }

  function removeQueen(row: number, col: number) {
    board[row] =
      board[row].substring(0, col) + "." + board[row].substring(col + 1);
  }

  backtrack(0);
  return result;
}
