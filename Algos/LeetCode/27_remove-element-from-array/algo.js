/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    nums = nums.sort()
    let count = nums.filter(x => x == val).length
    nums.splice(nums.indexOf(val), count);
    // nums.filter(x => x != val)
    // nums = nums.filter(x => x != val)

    
};