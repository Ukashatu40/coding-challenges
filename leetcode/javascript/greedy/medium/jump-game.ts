function canJump(nums: number[]): boolean {
  let maxReachable = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReachable) {
      return false; // If we can't reach this index, return false
    }
    maxReachable = Math.max(maxReachable, i + nums[i]);
  }

  return true; // If we can reach the end of the array
}

// Example usage:
const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums)); // Output: true (we can jump to the end)

const nums2 = [3, 2, 1, 0, 4];
console.log(canJump(nums2)); // Output: false (we can't jump to the end)
