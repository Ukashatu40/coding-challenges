class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        import heapq

        return heapq.nsmallest(k, points, key=lambda point: point[0] ** 2 + point[1] ** 2)