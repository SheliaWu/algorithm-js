/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-05 17:02:18
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-05 17:19:58
 */
/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const meno = new Map();
var rob = function(root) {
 if(root === null) return 0;
 if(meno.get(root)) return meno.get(root);
 let do_it = root.val + (root.left === null ? 0 : rob(root.left.left) + rob(root.left.right)) + (root.right === null ? 0 : rob(root.right.left) + rob(root.right.right));
 let no_do = rob(root.left) + rob(root.right);
 let res = Math.max(do_it, no_do);
 meno.set(root, res);
 return res;
};
// @lc code=end

