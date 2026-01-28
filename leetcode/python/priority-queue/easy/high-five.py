class Solution:
    def highFive(self, items: list[list[int]]) -> list[list[int]]:
        from collections import defaultdict
        import heapq

        scores = defaultdict(list)

        for student_id, score in items:
            heapq.heappush(scores[student_id], score)
            if len(scores[student_id]) > 5:
                heapq.heappop(scores[student_id])

        result = []
        for student_id in sorted(scores.keys()):
            average_score = sum(scores[student_id]) // 5
            result.append([student_id, average_score])

        return result