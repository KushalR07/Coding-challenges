/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Approach: Two-pointer merge with sentinel node
 * - Use a sentinel (dummy) node to simplify edge cases
 * - Compare values from both lists and attach the smaller node
 * - Append remaining nodes from non-empty list
 * Time: O(n+m), Space: O(1)
 * 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Sentinel node to avoid null checks
  let sen = new ListNode();
  let senHead = sen;
  
  // Compare and merge while both lists have nodes
  while (list1 && list2) {
    if (list1.val < list2.val) {
      sen.next = list1;
      list1 = list1.next;
    } else {
      sen.next = list2;
      list2 = list2.next;
    }
    sen = sen.next;
  }
  
  // Attach remaining nodes
  if (list1) {
    sen.next = list1;
  }
  if (list2) {
    sen.next = list2;
  }
  
  return senHead.next;
};
