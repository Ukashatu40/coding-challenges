class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function collectLeaves(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  while (root) {
    let leaves: number[] = [];
    root = removeLeaves(root, leaves);
    result.push(leaves);
  }
  return result;
}

function removeLeaves(
  root: TreeNode | null,
  leaves: number[],
): TreeNode | null {
  if (!root) {
    return null;
  }
  if (!root.left && !root.right) {
    leaves.push(root.val);
    return null;
  }
  root.left = removeLeaves(root.left, leaves);
  root.right = removeLeaves(root.right, leaves);
  return root;
}

//Time: O(n) where n is the number of nodes in the tree
//Space: O(n) where n is the number of nodes in the tree
// This is because we are traversing the entire tree once to collect the leaves, and in the worst case, we may have to store all the nodes in the result array if the tree is skewed.
//In a balanced tree, the space complexity would be O(log n) due to the recursive call stack, but in the worst case of a skewed tree, it can go up to O(n).
// The time complexity is O(n) because we need to visit each node in the tree at least once to determine if it's a leaf and to collect its value.
//The space complexity is O(n) in the worst case because we may need to store all the nodes in the result array if the tree is skewed, and also due to the recursive call stack in the worst case.
//Overall, the algorithm efficiently collects the leaves of the binary tree in a bottom-up manner, ensuring that we capture all the leaves at each level before moving up to the next level.

// Test cases
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
console.log(collectLeaves(root1)); // Output: [[4, 5, 3], [2], [1]]
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.right = new TreeNode(6);
console.log(collectLeaves(root2)); // Output: [[4, 5, 6], [2, 3], [1]]
