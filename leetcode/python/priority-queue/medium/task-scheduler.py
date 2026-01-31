from collections import Counter
import heapq
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:

        task_counts = Counter(tasks)
        max_heap = [-cnt for cnt in task_counts.values()]
        heapq.heapify(max_heap)

        time = 0
        while max_heap:
            temp = []
            cycle = 0

            for _ in range(n + 1):
                if max_heap:
                    cnt = heapq.heappop(max_heap)
                    if cnt + 1 < 0:
                        temp.append(cnt + 1)
                    cycle += 1

            for item in temp:
                heapq.heappush(max_heap, item)

            time += cycle if not max_heap else n + 1

        return time