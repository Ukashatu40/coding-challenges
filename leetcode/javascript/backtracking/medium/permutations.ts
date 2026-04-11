function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const used: boolean[] = new Array(nums.length);
  backtrack(result, [], nums, used);
  return result;
}

function backtrack(
  result: number[][],
  current: number[],
  nums: number[],
  used: boolean[],
): void {
  if (current.length === nums.length) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      current.push(nums[i]);
      used[i] = true;
      backtrack(result, current, nums, used);
      used[i] = false;
      current.splice(current.length - 1, 1);
    }
  }
}
