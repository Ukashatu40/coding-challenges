class Solution:
    def __init__(self):
        self.answer = []

    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return self.answer

        self.order(root, 0)

        return self.answer
    def order(self, node: Optional[TreeNode], level: int):
        if len(self.answer) == level:
            self.answer.append([])
        
        self.answer[level].append(node.val)

        if node.left is not None:
            self.order(node.left, level + 1)
        if node.right is not None:
            self.order(node.right, level + 1)