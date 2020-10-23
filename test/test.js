/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  let a = [];
  while (head) {
    a.push(head.val);
    head = head.next;
  }
  return a.join("") === a.reverse().join("");
};
