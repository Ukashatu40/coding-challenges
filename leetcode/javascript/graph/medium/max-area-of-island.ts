function maxAreaOfIsland(grid: number[][]): number {
  if (!grid.length) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let area = dfs(i, j, grid);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
}

function dfs(r: number, c: number, grid: number[][]): number {
  // 1. Correct bound checking and grid access order [r][c]
  if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[0].length ||
    grid[r][c] === 0
  ) {
    return 0;
  }

  // 2. Sink the island (mark as visited)
  grid[r][c] = 0;
  let area = 1;

  // 3. Explore neighbors
  area += dfs(r + 1, c, grid);
  area += dfs(r - 1, c, grid);
  area += dfs(r, c + 1, grid);
  area += dfs(r, c - 1, grid);

  return area;
}
