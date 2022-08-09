/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let left = 0, right = nums.length-1;

    while(nums[left] == 0) left++;
    while(nums[right] == 2) right--;

    let index = left+1;
    

    while (index <= right)
    {
        console.log(left,index,right)
        if(nums[index] == 0)
        {
            let temp = nums[left];
            nums[left] = nums[index];
            nums[index] = temp
            index++;
            left++;
        }
        else if(nums[index] == 2)
        {
            let temp = nums[right];
            nums[right] = nums[index];
            nums[index] = temp
            // index++;
            right--;
        }
        else if(nums[index] == 1)
        {
            index++
        }
    }
    console.log(nums)

    //  // let index = 0, backtrack = nums.length;
    // while(index < backtrack && index < nums.length)
    // {
    //     let insertNum = nums[index]
    //     console.log(insertNum)
    //     if(insertNum === 1) index++;
    //     else if(insertNum === 0) 
    //     {
    //         nums.splice(index,1)
    //         nums.unshift(insertNum);
    //         index++;
    //     }else if(insertNum === 2)
    //     {
    //         nums.splice(index,1)
    //         nums.push(insertNum);
    //         backtrack--;
    //     }
    // }

    // for(let i = 0; i < nums.length; i)
    // {
    //     let insertColor = nums[i]
    //     if(nums[i] === 0) 
    //     {
    //          nums.splice(i, 1);
    //          nums.unshift(insertColor)
    //          i++
    //     }else if(nums[i] === 2)
    //     {
    //          nums.splice(i, 1);
    //          nums.push(insertColor)
    //          if(nums[i+1] === 2) i++;
    //     }
    // }
    
    // for(const color in nums){
    //     var insertColor = nums[color]
    //     if(nums[color] === 0) {
    //         console.log("Place at back...")
    //         nums.splice(color, 1);
    //         nums.unshift(insertColor)
    //     }
    //     else if(nums[color] === 2) 
    //     {
    //         console.log("place in front...")
    //         nums.splice(color,1)
    //         nums.push(insertColor)
    //     }
    // }
    // // console.log(nums)
};

console.log(sortColors([1,2,0]))
console.log(sortColors([2,0,1,1,2,0]))