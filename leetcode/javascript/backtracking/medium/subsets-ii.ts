function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b); // Sort the input to handle duplicates

  function backtrack(start: number, path: number[]) {
    result.push([...path]); // Add the current subset to the result

    for (let i = start; i < nums.length; i++) {
      // Skip duplicates
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]); // Include the current number
      backtrack(i + 1, path); // Recur with the next index
      path.pop(); // Backtrack and remove the last number
    }
  }

  backtrack(0, []); // Start backtracking from index 0 with an empty path
  return result;
}

// Example usage:
const exampleNumsWithDup: number[] = [1, 2, 2];
console.log(subsetsWithDup(exampleNumsWithDup));
// Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
