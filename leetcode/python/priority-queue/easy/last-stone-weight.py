class Solution:
    def lastStoneWeight(self, stones: list[int]) -> int:
        import heapq

        # Convert stones to a max-heap by negating the values
        max_heap = [-stone for stone in stones]
        heapq.heapify(max_heap)

        while len(max_heap) > 1:
            # Pop the two heaviest stones
            first = -heapq.heappop(max_heap)
            second = -heapq.heappop(max_heap)

            if first != second:
                # If they are not equal, push the difference back into the heap
                heapq.heappush(max_heap, -(first - second))

        # Return the weight of the last stone or 0 if none are left
        return -max_heap[0] if max_heap else 0