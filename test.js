/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  for (let i = 0, j = s.length - 1; i < j; ++i, --j) {
    while (!/[a-zA-Z0-9]/.test(s[i])) {
      i++;
    }
    while (!/[a-zA-Z0-9]/.test(s[j])) {
      j--;
    }
    if (s[i].toLowerCase() != s[j].toLowerCase()) return false;
  }
  return true;
};
