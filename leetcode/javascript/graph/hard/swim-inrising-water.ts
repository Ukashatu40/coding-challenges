function swimInWater(grid: number[][]): number {
  const n = grid.length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const minHeap: [number, number, number][] = [[grid[0][0], 0, 0]];
  const visited = new Set<string>(["0,0"]);
  let time = 0;

  while (minHeap.length > 0) {
    const [elevation, x, y] = minHeap.shift()!;
    time = Math.max(time, elevation);

    if (x === n - 1 && y === n - 1) {
      return time;
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < n &&
        !visited.has(`${newX},${newY}`)
      ) {
        visited.add(`${newX},${newY}`);
        minHeap.push([grid[newX][newY], newX, newY]);
      }
    }

    // Sort the min-heap based on elevation
    minHeap.sort((a, b) => a[0] - b[0]);
  }

  return -1; // This line should never be reached
}
