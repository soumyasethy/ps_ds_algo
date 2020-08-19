/*Max Consecutive Ones

Solution
Given a binary array, find the maximum number of consecutive 1s in this array.

    Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

    The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000*/

/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = {
  findMaxConsecutiveOnes: function(nums) {
    if (!nums) return 0;
    let count = 0;
    let countMax = 0;

    for (let i = 0; i < nums.length; i++) {
      if (count === 0 && countMax === 0 && nums[i] === 1) {
        count = 1;
      }
      if (nums[i] === nums[i + 1] && nums[i] === 1) {
        count += 1;
        console.log(i, "count->", count);
      } else if (nums[i] !== nums[i + 1]) {
        countMax = countMax < count ? count : countMax;
        count = 1;
      }
    }
    return countMax;
  }
};
