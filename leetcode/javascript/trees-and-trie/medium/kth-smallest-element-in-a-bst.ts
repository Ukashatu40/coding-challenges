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

function kthSmallest(root: TreeNode | null, k: number): number {
  const arr: number[] = [];
  const result = inOrder(root, arr);

  return result[k - 1];
}

function inOrder(root: TreeNode | null, arr: number[]): number[] {
  if (root === null) {
    return arr;
  }

  inOrder(root.left, arr);
  arr.push(root.val);
  inOrder(root.right, arr);

  return arr;
}
