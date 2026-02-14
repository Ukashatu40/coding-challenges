/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function goodNodes(root: TreeNode | null): number {
  return countGoodNodes(root, Number.MIN_SAFE_INTEGER);
}

function countGoodNodes(node: TreeNode | null, maxSofar: number): number {
  if (node === null) return 0;

  let count = 0;
  if (node.val >= maxSofar) {
    count = 1;
    maxSofar = node.val;
  }

  count += countGoodNodes(node.left, maxSofar);
  count += countGoodNodes(node.right, maxSofar);

  return count;
}
