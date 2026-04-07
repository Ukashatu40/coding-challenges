function minMeetingRooms(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  // Separate start and end times
  const starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
  const ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b);

  let startPointer = 0;
  let endPointer = 0;
  let roomsNeeded = 0;

  while (startPointer < intervals.length) {
    if (starts[startPointer] < ends[endPointer]) {
      roomsNeeded++;
    } else {
      endPointer++;
    }
    startPointer++;
  }

  return roomsNeeded;
}

// Example usage:
const exampleIntervals: number[][] = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(minMeetingRooms(exampleIntervals)); // Output: 2
