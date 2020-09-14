/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  let n = nums.length;
  if (n == 0) return [];
  let X = new Array(n).fill([]);

  // 先排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; ++i) {
    let x = [];
    // 在前面寻找最大整除子集最长的
    for (let j = 0; j < i; ++j) {
      if (nums[i] % nums[j] == 0 && X[j].length > x.length) x = X[j];
    }
    X[i] = [...x, nums[i]];
  }
  let ans = [];
  for (let i = 0; i < X.length; ++i) {
    if (X[i].length > ans.length) {
      ans = [...X[i]];
    }
  }
  return ans;
};
