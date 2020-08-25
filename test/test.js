/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let tmp = [],
    ans = [];
  /**
   * @description:
   * @param {number} cur 当前下标
   * @param {number} last 最近的值
   * @return {type}
   */
  function dfs(cur, last, nums) {
    // 遍历完成
    if (cur == nums.length) {
      // 满足长度大于等于2加入结果
      if (tmp.length >= 2) {
        ans.push([...tmp]);
      }
      return;
    }
    // 满足条件加入 更新 cur last
    if (nums[cur] >= last) {
      tmp.push(nums[cur]);
      dfs(cur + 1, nums[cur], nums);
      tmp.pop();
    }
    // 不满足条件继续
    if (nums[cur] != last) {
      dfs(cur + 1, last, nums);
    }
  }
  dfs(0, -101, nums);
  return ans;
};
