class MedianFinder:
    def __init__(self):
        self.max_heap = []  # Max-heap for the lower half
        self.min_heap = []  # Min-heap for the upper half

    def addNum(self, num: int) -> None:
        import heapq

        # Add to max-heap (inverted to simulate max-heap using min-heap)
        heapq.heappush(self.max_heap, -num)

        # Balance the heaps
        if (self.max_heap and self.min_heap and
                (-self.max_heap[0] > self.min_heap[0])):
            val = -heapq.heappop(self.max_heap)
            heapq.heappush(self.min_heap, val)

        # Ensure size property
        if len(self.max_heap) > len(self.min_heap) + 1:
            val = -heapq.heappop(self.max_heap)
            heapq.heappush(self.min_heap, val)
        elif len(self.min_heap) > len(self.max_heap) + 1:
            val = heapq.heappop(self.min_heap)
            heapq.heappush(self.max_heap, -val)

    def findMedian(self) -> float:
        if len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        elif len(self.min_heap) > len(self.max_heap):
            return self.min_heap[0]
        else:
            return (-self.max_heap[0] + self.min_heap[0]) / 2