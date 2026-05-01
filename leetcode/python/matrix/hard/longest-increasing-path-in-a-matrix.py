class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix or not matrix[0]:
            return 0

        m, n = len(matrix), len(matrix[0])
        cache = [[0] * n for _ in range(m)]

        def dfs(i: int, j: int) -> int:
            if cache[i][j] != 0:
                return cache[i][j]

            directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
            max_length = 1

            for di, dj in directions:
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and matrix[ni][nj] > matrix[i][j]:
                    length = 1 + dfs(ni, nj)
                    max_length = max(max_length, length)

            cache[i][j] = max_length
            return max_length

        longest_path = 0
        for i in range(m):
            for j in range(n):
                longest_path = max(longest_path, dfs(i, j))

        return longest_path