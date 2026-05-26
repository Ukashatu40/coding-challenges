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
