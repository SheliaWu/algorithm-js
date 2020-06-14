/*
 * @Author: your name
 * @Date: 2020-06-06 16:44:34
 * @LastEditTime: 2020-06-08 22:44:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithm-js/new/54.螺旋矩阵.js
 */ 
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  function reverseMatrix(orignMatrix){
    if(!orignMatrix || !orignMatrix.length) return;
    let arr = new Array(orignMatrix[0].length);
    for(let i = 0; i < orignMatrix.length; i++){
      for(let j = 0; j < orignMatrix[0].length; j++){
        arr[j] = arr[j] ? arr[j] : [];
        arr[j][i] = orignMatrix[i][j];
      }
    }
    return arr;
  }
  let origin = matrix;
  let result = [];
  let  order = -1;
  while(origin && origin.length){
    //根据数学推算，螺旋矩阵方向+矩阵转置规律为：逆时针0度第一行正序，90最后一行正序
    //180最后一行负序，270第一行负序
    order = (order + 1) % 4;
    let row = (order === 0 || order === 3) ?  0 : origin.length-1;
    let reverse = (order  === 0 || order ===  1) ? false : true;
    let read = reverse ? origin[row].reverse() : origin[row];
    result = result.concat(read);
    // 删除第一个矩阵的第一个数组，并进行矩阵转置
    origin.splice(row,1);
    origin = reverseMatrix(origin);
  }
  return result;
};
// @lc code=end

