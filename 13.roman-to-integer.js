/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (53.00%)
 * Total Accepted:    466.9K
 * Total Submissions: 880.2K
 * Testcase Example:  '"III"'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * 
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be
 * within the range from 1 to 3999.
 * 
 * Example 1:
 * 
 * 
 * Input: "III"
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: "IV"
 * Output: 4
 * 
 * Example 3:
 * 
 * 
 * Input: "IX"
 * Output: 9
 * 
 * Example 4:
 * 
 * 
 * Input: "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var arr = s.split('')
    var flag = false
    var number = 0
    for(var i = arr.length - 1; i >= 0; i--){
      switch(arr[i]){
        case 'M':
          number += 1000
          flag = 'M'
          break;
        case 'D':
          number += 500
          flag = 'D'
          break;
        case 'C':
          if(flag === 'D' || flag === 'M'){
            number -= 100
            flag = false
          }else{
            number += 100
            flag = 'C'
          }
          break;
        case 'L':
          number += 50
          flag = 'L'
          break;
        case 'X':
          if(flag === 'L' || flag === 'C'){
            number -= 10
            flag = false
          }else{
            number += 10
            flag = 'X'
          }
          break;
        case 'V':
          number += 5
          flag = 'V'
          break;
        case 'I':
          if(flag === 'V' || flag === 'X'){
            number -= 1
            flag = false
          }else{
            number += 1
          }
          break;
        default:
          break;
      }
    }
    return number
};

