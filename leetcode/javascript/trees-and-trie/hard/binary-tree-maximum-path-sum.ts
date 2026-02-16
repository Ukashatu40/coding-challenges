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
let maxSum: number = -Infinity;

function maxGain(node: TreeNode | null): number {
  if (node === null) return 0;

  let leftGain = Math.max(maxGain(node.left), 0);
  let rightGain = Math.max(maxGain(node.right), 0);

  let priceNewPath = node.val + leftGain + rightGain;

  maxSum = Math.max(maxSum, priceNewPath);

  return Math.max(leftGain, rightGain) + node.val;
}
function maxPathSum(root: TreeNode | null): number {
  maxSum = -Infinity;
  maxGain(root);
  return maxSum;
}
