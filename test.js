/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length == 0) return [];
  let row = matrix.length,
    col = matrix[0].length; // 矩阵的行和列
  let order = [],
    index = 0; // 保存结果
  // 初始坐标
  let left = 0,
    right = col - 1,
    top = 0,
    bottom = row - 1;
  while ((left <= right) & (top <= bottom)) {
    for (let i = left; i <= right; ++i) {
      order[index++] = matrix[top][i];
    }
    for (let i = top + 1; i <= bottom; ++i) {
      order[index++] = matrix[i][right];
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i > left; --i) {
        order[index++] = matrix[bottom][i];
      }
      for (let i = bottom; i > top; --i) {
        order[index++] = matrix[i][left];
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return order;
};
