function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let lastEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= lastEnd) {
      count++;
      lastEnd = intervals[i][1];
    }
  }

  return intervals.length - count;
}

// Example usage:
const intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
console.log(eraseOverlapIntervals(intervals)); // Output: 1 (remove [1,3])
