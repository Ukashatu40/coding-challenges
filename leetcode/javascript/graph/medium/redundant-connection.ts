function findRedundantConnection(edges: number[][]): number[] {
  const parent = new Array(edges.length + 1);
  for (let i = 1; i < edges.length; i++) {
    parent[i] = i;
  }

  for (const edge of edges) {
    let node1 = edge[0];
    let node2 = edge[1];

    let root1 = find(parent, node1);
    let root2 = find(parent, node2);

    if (root1 === root2) {
      return edge;
    }

    parent[root2] = root1;
  }

  return [0];
}

function find(parent: number[], node: number): number {
  while (node !== parent[node]) {
    parent[node] = parent[parent[node]];
    node = parent[node];
  }

  return node;
}
