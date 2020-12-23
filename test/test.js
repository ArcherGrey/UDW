/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (!s.length) return -1;
  let m = new Map();
  for (let i = 0; i < s.length; ++i) {
    let x = s[i];
    if (!m.has(x)) {
      m.set(x, i);
    } else {
      m.set(x, -1);
    }
  }
  let resValue = Infinity,
    res = "";
  for (let [key, value] of m.entries()) {
    if (resValue > value && value != -1) {
      resValue = value;
      res = key;
    }
  }
  return resValue == Infinity ? -1 : resValue;
};
