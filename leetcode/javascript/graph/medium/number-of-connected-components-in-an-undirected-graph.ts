function countComponents(n: number, edges: number[][]): number {
  const graph: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [u, v] of edges) {
    graph.get(u)?.push(v);
    graph.get(v)?.push(u);
  }

  const visited: Set<number> = new Set();
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i, graph, visited);
      count++;
    }
  }

  return count;
}

function dfs(
  node: number,
  graph: Map<number, number[]>,
  visited: Set<number>,
): void {
  visited.add(node);
  for (const neighbor of graph.get(node) || []) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, graph, visited);
    }
  }
}
