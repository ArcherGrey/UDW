/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  // 窗口中 1 的个数
  let x = 0;
  // 窗口开始位置
  let pos = 0;
  // 保存结果
  let res = 0;
  for (let i = 0; i < A.length; ++i) {
    if (A[i] == 1) x++;
    // 窗口长度大于 窗口中1的个数 + K时缩小窗口
    while (i - pos + 1 > x + K) {
      if (A[pos] == 1) x--;
      pos++;
    }
    if (i - pos + 1 > res) {
      res = i - pos + 1;
    }
  }
  return res;
};
