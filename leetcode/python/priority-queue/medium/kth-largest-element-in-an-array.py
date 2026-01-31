class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        import heapq

        return heapq.nlargest(k, nums)[-1]