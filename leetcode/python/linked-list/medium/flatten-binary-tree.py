# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        self.flatten_tree(root)

    def flatten_tree(self, node: Optional[TreeNode]):
        if node is None:
            return None
        
        if node.left is None and node.right is None:
            return node
        
        left_tail = self.flatten_tree(node.left)
        right_tail = self.flatten_tree(node.right)

        if left_tail is not None:
            left_tail.right = node.right
            node.right = node.left
            node.left = None
        
        return left_tail if right_tail is None else right_tail
        