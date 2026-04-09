function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, path: number[]) {
    result.push([...path]); // Add the current subset to the result

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); // Include the current number
      backtrack(i + 1, path); // Recur with the next index
      path.pop(); // Backtrack and remove the last number
    }
  }

  backtrack(0, []); // Start backtracking from index 0 with an empty path
  return result;
}

// Example usage:
const exampleNums: number[] = [1, 2, 3];
console.log(subsets(exampleNums));
// Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
