function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Part 2: Optimized Solution using Binary Search
function lengthOfLISOptimized(nums: number[]): number {
  if (nums.length === 0) return 0;

  const tails: number[] = [];

  for (const num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < tails.length) {
      tails[left] = num;
    } else {
      tails.push(num);
    }
  }

  return tails.length;
}

// Patience Sorting Approach
function lengthOfLISPatienceSorting(nums: number[]): number {
  if (nums.length === 0) return 0;

  const piles: number[] = [];

  for (const num of nums) {
    let left = 0;
    let right = piles.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (piles[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < piles.length) {
      piles[left] = num;
    } else {
      piles.push(num);
    }
  }

  return piles.length;
}
