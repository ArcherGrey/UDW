/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function bs(nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = ~~((l + r) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
var intersection = function (nums1, nums2) {
  // 先排序
  nums1.sort((a, b) => {
    return a - b;
  });
  nums2.sort((a, b) => {
    return a - b;
  });

  let r = [];
  // 遍历数组1
  for (var i = 0; i < nums1.length; i++) {
    // 在数组2中用二分查找，查找是否存在当前值
    if (bs(nums2, nums1[i]) > -1) {
      // 如果存在，再在结果数组中查找是否已经添加
      if (bs(r, nums1[i]) == -1) r.push(nums1[i]);
    }
  }
  return r;
};
