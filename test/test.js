/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  let l = A.length;
  let dp = new Array(l);
  // 初始状态
  for (let i = 0; i < l; ++i) {
    dp[i] = new Array(l).fill(0);
  }
  let m = new Map();
  // 可能存在相同的
  for (let i = 0; i < l; ++i) {
    if (!m.has(A[i])) m.set(A[i], [i]);
    else {
      let s = m.get(A[i]);
      s.push(i);
      m.set(A[i], s);
    }
  }
  let ans = 2;
  for (let k = 0; k < l; ++k) {
    for (let j = 0; j < k; ++j) {
      if (m.has(2 * A[j] - A[k])) {
        let ii = m.get(2 * A[j] - A[k]);
        if (ii.length > 0) {
          for (let i of ii) {
            if (i < j) {
              dp[j][k] = dp[i][j] + 1;
              ans = Math.max(ans, dp[j][k] + 2);
            }
          }
        }
      }
    }
  }
  return ans;
};
