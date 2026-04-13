function combinationSum2(candidates: number[], target: number): number[][] {
  const results: number[][] = [];

  // 1. Sort to handle duplicates and allow early pruning
  candidates.sort((a, b) => a - b);

  function backtrack(
    startIndex: number,
    currentTarget: number,
    path: number[],
  ) {
    // Base case: target reached
    if (currentTarget === 0) {
      results.push([...path]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      // Optimization: If the current number exceeds remaining target,
      // no need to check further because the array is sorted.
      if (candidates[i] > currentTarget) break;

      // Skip duplicate numbers at the same recursion level
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;

      path.push(candidates[i]);
      // Move to next index (i + 1) because each number can be used once
      backtrack(i + 1, currentTarget - candidates[i], path);
      path.pop(); // Backtrack
    }
  }

  backtrack(0, target, []);
  return results;
}
