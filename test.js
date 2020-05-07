/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = Number.MAX_SAFE_INTEGER;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  // 当前值比min值更小
  if (this.min >= x) {
    // 将上一个min最小值保存入栈
    this.stack.push(this.min);
    // 更新当前最小值
    this.min = x;
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 如果弹出值 == 当前最小值，那么再弹一次的值为上一个最小值也即出栈后更新的最小值
  if (this.stack.pop() == this.min) {
    this.min = this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
