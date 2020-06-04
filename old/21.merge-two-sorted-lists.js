/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (48.36%)
 * Total Accepted:    652K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
 if(!l1 || !l2) return l1 || l2
 var mergedList = new ListNode()
 var l3 = mergedList
 while(l1 && l2){
  if(l1.val < l2.val){
    l3.val = l1.val
    l1 = l1.next
   }else{
     l3.val = l2.val
     l2 = l2.next
   }
   l3.next = new ListNode()
   l3 = l3.next
 }
 if(l1){
   l3.val = l1.val
   l3.next = l1.next
 }else{
   l3.val = l2.val
   l3.next = l2.next
 }
 return mergedList
};


