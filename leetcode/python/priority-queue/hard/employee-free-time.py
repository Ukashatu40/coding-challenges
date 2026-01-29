class Interval:
    def __init__(self, start: int = 0, end: int = 0):
        self.start = start
        self.end = end
        
class Solution:
    def employeeFreeTime(self, schedule: '[[Interval]]') -> '[Interval]':
        import heapq

        all_intervals = []
        for emp in schedule:
            for interval in emp:
                all_intervals.append((interval.start, interval.end))
        
        all_intervals.sort()

        free_times = []
        prev_end = all_intervals[0][1]

        for start, end in all_intervals[1:]:
            if start > prev_end:
                free_times.append(Interval(prev_end, start))
            prev_end = max(prev_end, end)

        return free_times