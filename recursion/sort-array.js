/**
 * Approach: Merge Sort (Divide and Conquer)
 * - Recursively divide array into halves until single elements
 * - Merge sorted halves back together in sorted order
 * Time: O(n log n), Space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;  // Base case
  
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));   // Sort left half
  let right = sortArray(nums.slice(mid));     // Sort right half
  
  return sort(left, right);  // Merge sorted halves
};

/**
 * Merge two sorted arrays into one sorted array
 */
function sort(arr1, arr2) {
  let res = [];
  let m = arr1.length - 1;
  let n = arr2.length - 1;
  let i = 0;
  let j = 0;
  
  // Compare and merge elements from both arrays
  while (i <= m && j <= n) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  
  // Append remaining elements
  return [...res, ...arr1.slice(i), ...arr2.slice(j)];
}
