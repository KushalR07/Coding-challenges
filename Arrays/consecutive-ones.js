/**
 * Approach: Single pass with counter reset
 * - Track current consecutive 1s with a counter
 * - Reset counter to 0 when encountering 0
 * - Update max at each step
 * Time: O(n), Space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;  // Current consecutive 1s
  let max = 0;    // Maximum consecutive 1s found
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;  // Increment for consecutive 1
    } else {
      count = 0;  // Reset on 0
    }
    max = Math.max(max, count);  // Track maximum
  }
  
  return max;
};
