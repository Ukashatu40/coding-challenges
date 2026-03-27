function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      if (currentEnd >= nums.length - 1) {
        break; // If we can reach or exceed the end, break out of the loop
      }
    }
  }

  return jumps;
}

// Example usage:
const nums = [2, 3, 1, 1, 4];
console.log(jump(nums)); // Output: 2 (jump from index 0 to index 1, then to the end)
