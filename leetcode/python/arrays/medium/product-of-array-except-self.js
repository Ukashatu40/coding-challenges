/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);

  let pre = 1;
  let post = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = pre;
    pre = nums[i] * pre;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * post;
    post = nums[i] * post;
  }

  return result;
};
