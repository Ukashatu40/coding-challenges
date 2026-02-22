function numIslands(grid: string[][]): number {
  if (!grid.length) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        islands++;
        dfs(i, j, grid);
      }
    }
  }
  return islands;
}

function dfs(r: number, c: number, grid: string[][]): void {
  // 1. Correct bound checking and grid access order [r][c]
  if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[0].length ||
    grid[r][c] === "0"
  ) {
    return;
  }

  // 2. Sink the island (mark as visited)
  grid[r][c] = "0";

  // 3. Explore neighbors
  dfs(r + 1, c, grid);
  dfs(r - 1, c, grid);
  dfs(r, c + 1, grid);
  dfs(r, c - 1, grid);
}
