/*
 * @Author: your name
 * @Date: 2020-02-07 22:46:43
 * @LastEditTime: 2020-06-05 22:20:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm-js/Users/shelia/.leetcode/2.add-two-numbers.js
 */ 
/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (31.57%)
 * Total Accepted:    1.2M
 * Total Submissions: 3.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
var addTwoNumbers = function(l1, l2) {
  let l = new ListNode(0);
  let current = l;
  // 进位
  let acc = 0;
  while(l1 || l2 || acc){
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let temp = val1 + val2 + acc;
    acc = Math.floor(temp / 10);
    current.next = new ListNode(temp % 10);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  current.next = null;
  return l.next;
};
/*
let l1 = new ListNode(4);
let l2 = new ListNode(5);
let l3  = new ListNode(1);
l1.next = l2;
l2.next = l3;

let l4 = new ListNode(2);
let l5 = new ListNode(5);
let l6 = new ListNode(2);
l4.next = l5;
l5.next = l6;
let l = addTwoNumbers(l1, l4);
console.log(l);
*/
