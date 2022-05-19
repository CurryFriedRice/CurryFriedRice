/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1,-1];
    //else if(nums.length === 1 && nums[0] === target) return [0,0];
    
    let left = 0;
    let right = nums.length-1;
    let mid = Math.floor((left+right)/2)
    // let firstLast = searchFirstLast(nums,target,left,right);

    if(target < nums[left] || nums[right] < target)
        return [-1,-1]

   while((nums[left] !== target || nums[right] !== target) && left < right)
   {
        if(nums[left] === target)
        {
            //check one left to see if it's still the same
            // console.log("left is equal to target")
            if(nums[left-1] === target) left = left-1

        }
        else if(nums[left] < target)
        {
            // console.log("left is smaller than target")
            // left = Math.floor((mid + right)/2)
            let next = Math.ceil((left+mid)/2)
            console.log(left, next)
            left <= next ? left++: next ;
            
        }else if(nums[left] > target)
        {
            // console.log("left is larger than target")
            // left = Math.floor((mid + left)/2)
        }


        if(nums[right] === target)
        {
            //check one left to see if it's still the same
            // console.log("left is equal to target")
            if(nums[right+1] === target) {
                // console.log("Checking higher Right Value")
                right = right+1
            }
        }
        else if(nums[right] < target)
        {
            // console.log("right is smaller than target")
        }else if(nums[right] > target)
        {
            // console.log("right is larger than target")
            
            // left = Math.floor((mid + left)/2)
            let next = Math.floor((mid + right)/2);
            right >= next ? right-- : next;
            // right = Math.floor((mid + right)/2)
        }
        // console.log(nums)
        // console.log("Left: ", left, "value:", nums[left], "| right:",right, " value:", nums[right], " | mid: ", mid)
        mid = Math.floor((left+right)/2)
    }
    if(nums[left] !== target || nums[right] != target) return [-1,-1]
    else
    {
        while(nums[left-1] === target) left = left-1;
        while(nums[right+1 === target])right = right+1;
    }

    return [left,right]
};


console.log(searchRange([5,7,7,8,8,10], 9))
// console.log(searchRange([], 0))
// console.log(searchRange([1,4],1))

