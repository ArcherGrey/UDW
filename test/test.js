/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  // m 行数 n 列数
  const m = A.length,
    n = A[0].length;

  // 第一列肯定得为1
  let ret = m * (1 << (n - 1));

  // 翻转列
  for (let j = 1; j < n; j++) {
    let nOnes = 0; // 统计1的数目
    for (let i = 0; i < m; i++) {
      // 如果最初的行首是1 代表这行不需要翻转
      if (A[i][0] === 1) {
        // 直接统计
        nOnes += A[i][j];
      } else {
        nOnes += 1 - A[i][j]; // 如果这一行进行了行反转，则该元素的实际取值为 1 - A[i][j]
      }
    }
    const k = Math.max(nOnes, m - nOnes);
    ret += k * (1 << (n - j - 1));
  }
  return ret;
};
