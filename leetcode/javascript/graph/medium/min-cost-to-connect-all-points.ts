function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const distances: number[] = new Array(n).fill(Infinity);
  distances[0] = 0;
  let totalCost = 0;
  const visited: boolean[] = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    let minDist = Infinity;
    let u = -1;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && distances[j] < minDist) {
        minDist = distances[j];
        u = j;
      }
    }
    if (u === -1) break;
    visited[u] = true;
    totalCost += minDist;

    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        const dist =
          Math.abs(points[u][0] - points[j][0]) +
          Math.abs(points[u][1] - points[j][1]);
        if (dist < distances[j]) {
          distances[j] = dist;
        }
      }
    }
  }

  return totalCost;
}
