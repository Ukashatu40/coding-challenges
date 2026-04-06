function insert(intervals: number[][], newInterval: number[]): number[][] {
  let output = [];

  for (let interval of intervals) {
    if (interval[1] < newInterval[0]) {
      output.push(interval);
    } else if (interval[0] > newInterval[1]) {
      output.push(newInterval);
      newInterval = interval;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }

  output.push(newInterval);

  return output;
}
