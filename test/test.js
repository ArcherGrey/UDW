/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  // 统计 5元 10元 数量
  let five = 0,
    ten = 0;
  for (let b of bills) {
    if (b == 5) {
      five++;
    } else if (b == 10) {
      // 10 元需要找零 5元
      ten++;
      if (--five < 0) return false;
    } else if (b == 20) {
      // 20 需要找零 15
      // 优先 判断 10 + 5 是否满足，因为 5 的需求更多需要保留
      if (ten) {
        ten--;
        if (--five < 0) return false;
      } else {
        // 不满足再判断是否有 5 + 5 + 5
        five -= 3;
        if (five < 0) return false;
      }
    }
  }
  return true;
};
