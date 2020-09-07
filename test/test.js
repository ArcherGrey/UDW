/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
  let s1 = [...slices],
    s2 = [...slices];
  s1.shift();
  s2.pop();
  return Math.max(calc(s1), calc(s2));
};

function calc(s) {
  let n = s.length;
  let c = (n + 1) / 3;
  /**
   * @param {number[]} slices
   * @return {number}
   */
  var maxSizeSlices = function(slices) {
    let s1 = [...slices],
      s2 = [...slices];
    s1.shift();
    s2.pop();
    return Math.max(calc(s1), calc(s2));
  };

  function calc(s) {
    let n = s.length;
    let c = (n + 1) / 3;
    let dp = new Array(n + 1);
    for (let i = 0; i < n + 1; ++i) {
      dp[i] = new Array(c + 1).fill(0);
    }

    for (let i = 1; i <= n; ++i) {
      for (let j = 1; j <= c; ++j) {
        let t = i - 2 >= 0 ? dp[i - 2][j - 1] : 0;
        dp[i][j] = Math.max(dp[i - 1][j], t + s[i - 1]);
      }
    }
    return dp[n][c];
  }

  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; ++i) {
    dp[i] = new Array(c + 1).fill(0);
  }

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= c; ++j) {
      let t = i - 2 >= 0 ? dp[i - 2][j - 1] : 0;
      dp[i][j] = Math.max(dp[i - 1][j], t + s[i - 1]);
    }
  }
  return dp[n][c];
}
