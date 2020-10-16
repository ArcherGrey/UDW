/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let a = (b = 0);

  // 找到第一个大于等于 0 的位置记为b
  while (b < A.length) {
    if (A[b] >= 0) {
      break;
    }
    b++;
  }

  // a 是 b 的左边相邻,b 的左边都是小于0的
  a = b - 1;
  let ans = [];
  let sa = A[a] * A[a];
  let sb = A[b] * A[b];

  // 比较 a b 对应的值按照顺序插入
  while (a >= 0 && b < A.length) {
    if (sa < sb) {
      ans.push(sa);
      --a;
      sa = A[a] * A[a];
    } else {
      ans.push(sb);
      ++b;
      sb = A[b] * A[b];
    }
  }

  // a 还有的话继续
  while (a >= 0) {
    ans.push(A[a] * A[a]);
    a--;
  }

  // b 还有的话继续
  while (b < A.length) {
    ans.push(A[b] * A[b]);
    b++;
  }
  return ans;
};
