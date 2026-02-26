function orangesRotting(grid: number[][]): number {
  if (grid === null || grid.length === 0) return -1;

  let m = grid.length;
  let n = grid[0].length;
  let freshCount = 0;

  const rottenQueue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        freshCount++;
      } else if (grid[i][j] === 2) {
        rottenQueue.push([i, j]);
      }
    }
  }

  if (freshCount === 0) return 0;

  let minutes = 0;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (!(rottenQueue.length === 0)) {
    let size = rottenQueue.length;

    for (let i = 0; i < size; i++) {
      let rotten = rottenQueue.shift();
      for (let dir of directions) {
        let x = rotten[0] + dir[0];
        let y = rotten[1] + dir[1];

        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
          grid[x][y] = 2;
          freshCount--;
          rottenQueue.push([x, y]);
        }
      }
    }
    minutes++;
  }

  return freshCount === 0 ? minutes - 1 : -1;
}
