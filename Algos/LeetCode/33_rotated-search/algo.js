/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = binarySearch(nums, target, left, right);
    return result;
};

function binarySearch(nums, target, left, right)
{
    //if we overlap then we're done 
    if(left > right)
    {
        return -1;
    }

    //Otherwise the middle is...
    let mid = left + Math.floor((right-left)/2);

    
    //IF we match the target return that index
    if(nums[mid] == target) return mid;
    if(nums[left] == target) return left;
    if(nums[right] == target) return right;

    //Otherwise if our left is smaller than our mid index
    if(nums[left] < nums[mid])
    {
        //if the left side is sorted
        if(target > nums[left] && target < nums[mid]) {
            //if it's in the sorted list
            return binarySearch(nums,target,left,mid-1)
        }
        return binarySearch(nums,target,mid+1, right);
    }
    //Otherwise if our right is greater than our mid
    if(nums[mid] < nums[right])
    {
        //if the right side is sorted
        if(target > nums[mid] && target <= nums[right]) {
            //if it's in the sorted list
            return binarySearch(nums,target,mid+1,right)
        }
        return binarySearch(nums,target,left,mid-1);
    }
    return -1
}

console.log(search([4,5,6,7,0,1,2], 0))