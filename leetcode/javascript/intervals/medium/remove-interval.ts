function removeInterval(
  intervals: number[][],
  toBeRemoved: number[],
): number[][] {
  const result: number[][] = [];
  const [removeStart, removeEnd] = toBeRemoved;

  for (const [start, end] of intervals) {
    if (end <= removeStart || start >= removeEnd) {
      // No overlap, keep the interval as is
      result.push([start, end]);
    } else {
      // Overlap exists, we need to trim the interval
      if (start < removeStart) {
        result.push([start, removeStart]);
      }
      if (end > removeEnd) {
        result.push([removeEnd, end]);
      }
    }
  }

  return result;
}

// Example usage:
const exampleIntervals: number[][] = [
  [0, 2],
  [3, 4],
  [5, 7],
];
const toBeRemoved: number[] = [1, 6];
console.log(removeInterval(exampleIntervals, toBeRemoved)); // Output: [[0,1],[6,7]]
