function racecar(target: number): number {
  const dp: number[] = new Array(target + 1).fill(0);
  for (let i = 1; i <= target; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;
    let n = Math.ceil(Math.log2(i + 1));
    if (Math.pow(2, n) - 1 === i) {
      dp[i] = n;
      continue;
    }
    // case 1: overshoot and reverse
    dp[i] = n + 1 + dp[Math.pow(2, n) - 1 - i];
    // case 2: reverse before overshooting
    for (let m = 0; m < n - 1; m++) {
      dp[i] = Math.min(
        dp[i],
        n -
          1 +
          1 +
          m +
          1 +
          dp[i - (Math.pow(2, n - 1) - 1) + (Math.pow(2, m) - 1)],
      );
    }
  }
  return dp[target];
}

// Example usage:
const target = 6;
console.log(racecar(target)); // Output: 5
