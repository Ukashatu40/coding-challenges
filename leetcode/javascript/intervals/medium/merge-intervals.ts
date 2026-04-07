function merge(intervals: number[][]): number[][] {
  let output = [];

  intervals.sort((a, b) => a[0] - b[0]);

  output.push(intervals[0]);

  for (let interval of intervals.slice(1)) {
    let lastEnd = output[output.length - 1][1];
    if (interval[0] <= lastEnd) {
      output[output.length - 1][1] = Math.max(lastEnd, interval[1]);
    } else {
      output.push(interval);
    }
  }

  return output;
}
