class Solution:
    def openLock(self, deadends: list[str], target: str) -> int:
        dead_set = set(deadends)
        if "0000" in dead_set:
            return -1

        def get_neighbors(node: str) -> list[str]:
            neighbors = []
            for i in range(4):
                digit = int(node[i])
                for move in [-1, 1]:
                    new_digit = (digit + move) % 10
                    neighbor = node[:i] + str(new_digit) + node[i+1:]
                    neighbors.append(neighbor)
            return neighbors

        from collections import deque

        queue = deque([("0000", 0)])
        visited = {"0000"}

        while queue:
            node, depth = queue.popleft()
            if node == target:
                return depth

            for neighbor in get_neighbors(node):
                if neighbor not in visited and neighbor not in dead_set:
                    visited.add(neighbor)
                    queue.append((neighbor, depth + 1))

        return -1