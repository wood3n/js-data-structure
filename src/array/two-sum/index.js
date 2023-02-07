/**
 * 递归版本实现
 * @param {number[]} nums
 * @param {number} target
 */
export const recursive = (nums, target) => {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(recursive([2, 7, 11, 15], 9));
console.log(recursive([3, 2, 4], 6));
console.log(recursive([3, 3], 6));

/**
 * 最佳解法
 * @param {*} nums
 * @param {*} target
 */
export const best = (nums, target) => {
  const map = new Map();
  for (let i = 0; i <= nums.length - 1; i++) {
    const j = target - nums[i];
    if (map.has(j)) {
      return [map.get(j), i];
    }
    // 将当前遍历的数组元素作为索引，数组元素的索引作为 value
    map.set(nums[i], i);
  }

  return [];
};

console.log(best([2, 7, 11, 15], 9));
console.log(best([3, 2, 4], 6));
console.log(best([3, 3], 6));
