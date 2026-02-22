function dfs(isConnected: number[][], visited: boolean[], start: number): void {
  let stack = []; // Renamed for clarity
  stack.push(start); // Push to end
  visited[start] = true;

  while (stack.length > 0) {
    const city = stack.pop(); // Remove from end

    for (let i = 0; i < isConnected.length; i++) {
      if (isConnected[city][i] === 1 && !visited[i]) {
        visited[i] = true;
        stack.push(i); // Push to end
      }
    }
  }
}

function findCircleNum(isConnected: number[][]): number {
  const n: number = isConnected.length;
  let visited: boolean[] = new Array(n).fill(false);
  let provinces = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(isConnected, visited, i);
      provinces++;
    }
  }
  return provinces;
}
