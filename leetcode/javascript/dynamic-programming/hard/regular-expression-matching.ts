function isMatch(s: string, p: string): boolean {
  const dp: boolean[][] = Array(s.length + 1)
    .fill(false)
    .map(() => Array(p.length + 1).fill(false));
  dp[0][0] = true; // Base case: empty string matches empty pattern

  // Handle patterns like a*, a*b*, a*b*c* that can match an empty string
  for (let j = 2; j <= p.length; j++) {
    if (p[j - 1] === "*" && dp[0][j - 2]) {
      dp[0][j] = true;
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // Match current characters
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2]; // Treat '*' as zero occurrence
        if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]; // Treat '*' as one or more occurrences
        }
      }
    }
  }

  return dp[s.length][p.length];
}

// Example usage:
const s = "aab";
const p = "c*a*b";
console.log(isMatch(s, p)); // Output: true
