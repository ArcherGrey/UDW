/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

/**
 * @description: 选择主元
 * @param {number[]} a 数组
 * @param {number} l 左边界
 * @param {number} r 右边界
 * @param {number} index 目标值
 * @return:
 */
function quickSelect(a, l, r, index) {
  // 找到主元位置
  let q = randomPartition(a, l, r);
  // 和目标值相等返回结果
  if (q == index) {
    return a[q];
  } else {
    // 大于递归左子树，小于递归右子树
    return q < index
      ? quickSelect(a, q + 1, r, index)
      : quickSelect(a, l, q - 1, index);
  }
}
/**
 * @description: 随机化加速
 * @param {number[]} a
 * @param {number} l
 * @param {number} r
 * @return:
 */
function randomPartition(a, l, r) {
  let i = ~~(Math.random() * (r - l + 1)) + l;
  [a[i], a[r]] = [a[r], a[i]];
  return partition(a, l, r);
}

function partition(a, l, r) {
  let x = a[r],
    i = l - 1;
  for (let j = l; j < r; ++j) {
    if (a[j] <= x) {
      ++i;
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
  [a[i + 1], a[r]] = [a[r], a[i + 1]];
  return i + 1;
}
