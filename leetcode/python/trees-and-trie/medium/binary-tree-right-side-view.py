class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        result = []

        if root is None:
            return result

        queue = [root]

        while len(queue):
            level_size = len(queue)
            for i in range(level_size):
                current_node = queue.pop(0)

                if i == level_size - 1:
                    result.append(current_node.val)

                if current_node.left is not None:
                    queue.append(current_node.left)

                if current_node.right is not None:
                    queue.append(current_node.right)
        return result