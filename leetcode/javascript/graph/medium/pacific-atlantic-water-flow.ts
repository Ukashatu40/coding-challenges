function passPacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length;
  const n = heights[0].length;
  const pacific: boolean[][] = Array.from({ length: m }, () =>
    Array(n).fill(false),
  );
  const atlantic: boolean[][] = Array.from({ length: m }, () =>
    Array(n).fill(false),
  );
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (x: number, y: number, visited: boolean[][]) => {
    visited[x][y] = true;
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        !visited[newX][newY] &&
        heights[newX][newY] >= heights[x][y]
      ) {
        dfs(newX, newY, visited);
      }
    }
  };

  // Perform DFS for Pacific and Atlantic oceans
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific); // Left edge (Pacific)
    dfs(i, n - 1, atlantic); // Right edge (Atlantic)
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific); // Top edge (Pacific)
    dfs(m - 1, j, atlantic); // Bottom edge (Atlantic)
  }

  const result: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
}
