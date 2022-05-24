/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let mid = Math.floor((left+right)/2);
    
    if(nums[right] < target) return right+1
    else if(target < nums[left]) return 0;

    let retval = -1;

    while(nums[left] !== target && nums[right] !== target && nums[mid] !== target){
        if(nums[mid] === target) return mid;
        else if(target < nums[mid])
        {
            right = mid;
        }else if(nums[mid] < target)
        {
            left = mid;
        }
        if(left+1 == right)
        {
            // console.log("doesn't exist: ", right, mid)
            break;
        }
        mid = Math.floor((left+right)/2);
        console.log(left, right, mid)
    }
    // console.log(left,right,mid)
    return nums[left] === target ? left : nums[mid] === target? mid : right

};

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))
console.log(searchInsert([1,3],2))
