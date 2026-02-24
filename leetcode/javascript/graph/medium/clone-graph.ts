/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */

let visited = new Map();

function cloneGraph(node: _Node | null): _Node | null {
  if (node === null) return null;

  if (visited.has(node)) return visited.get(node);

  let cloneNode: _Node = new _Node(node.val, []);

  visited.set(node, cloneNode);

  for (let neighbor of node.neighbors) {
    cloneNode.neighbors.push(cloneGraph(neighbor));
  }

  return cloneNode;
}
