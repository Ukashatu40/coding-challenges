function wallsAndGates(rooms: number[][]): void {
  if (rooms === null || rooms.length === 0) return;

  let m = rooms.length;
  let n = rooms[0].length;

  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  let distance = 0;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (!(queue.length === 0)) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let gate = queue.shift();
      for (let dir of directions) {
        let x = gate[0] + dir[0];
        let y = gate[1] + dir[1];

        if (x >= 0 && x < m && y >= 0 && y < n && rooms[x][y] === 2147483647) {
          rooms[x][y] = distance + 1;
          queue.push([x, y]);
        }
      }
    }
    distance++;
  }
}
