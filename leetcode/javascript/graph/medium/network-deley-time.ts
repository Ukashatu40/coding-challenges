function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph: Map<number, [number, number][]> = new Map();

  for (const [u, v, w] of times) {
    if (!graph.has(u)) graph.set(u, []);
    graph.get(u)!.push([v, w]);
  }

  const dist: number[] = new Array(n + 1).fill(Infinity);
  dist[k] = 0;

  const minHeap: [number, number][] = [[0, k]]; // [distance, node]

  while (minHeap.length > 0) {
    const [currentDist, node] = minHeap.shift()!;

    if (currentDist > dist[node]) continue;

    for (const [neighbor, weight] of graph.get(node) || []) {
      const newDist = currentDist + weight;
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        minHeap.push([newDist, neighbor]);
      }
    }
  }

  const maxDelay = Math.max(...dist.slice(1));
  return maxDelay === Infinity ? -1 : maxDelay;
}
