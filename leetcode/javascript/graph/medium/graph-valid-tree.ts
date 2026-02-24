function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false; // A valid tree must have exactly n-1 edges

  const graph: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [u, v] of edges) {
    graph.get(u)?.push(v);
    graph.get(v)?.push(u);
  }

  const visited: Set<number> = new Set();
  dfs(0, graph, visited);

  return visited.size === n; // Check if all nodes are visited
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
