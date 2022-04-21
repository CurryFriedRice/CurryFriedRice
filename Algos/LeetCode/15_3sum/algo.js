selectionSort = (arr) =>
{
    for(let i = 0; i <arr.length; i++)
    {
        let minIndex = i;
        for(let j = i; j <arr.length; j++)
        {
            if(arr[j] < arr[minIndex]) minIndex = j
        }
        [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr;
}


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums = selectionSort(nums)
    
    let retArr = []
    for (let i = 0; i < nums.length-2; i++)
    {
        //well if I is Greater than 0 we know that we can't add 2 positives to get 0 so stop trying
        if (nums[i] > 0) break; 
        
        //well if the index is greater than 0 AND the number is the same as the previous one just skip it
        if (i > 0 && nums[i] === nums[i - 1]) continue; //


        //Otherwise left i+1 and right is the end
        let left = i +1;
        let right = nums.length-1;
    
        //Then while left is less than the right
        while (left < right){
            //sum them together
            const s = nums[i] + nums[left] + nums[right]
            if(s < 0) left++;   //If the sum is less than 0 we need a smaller negative
            else if(s > 0) right--; //if the sum is larger than 0 we need a smaller positive.
            else    //
            {
                retArr.push([nums[i],nums[left],nums[right]])
                while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right+1]) right++;
                left ++;
                right --;
            }
        } 
    }
    // console.log(retArr)
    return retArr
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([]))
console.log(threeSum([0]))

// var threeSum = function(nums) {
//   nums.sort((a, b) => a - b);
//   const r = [];
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] > 0) break;
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const s = nums[i] + nums[left] + nums[right];
//       if (s < 0) left += 1;
//       else if (s > 0) right -= 1;
//       else {
//         r.push([nums[i], nums[left], nums[right]]);
//         while (left < right && nums[left] === nums[left + 1]) left += 1;
//         while (left < right && nums[right] === nums[right - 1]) right -= 1;
//         left += 1;
//         right -= 1;
//       }
//     }
//   }
  
//   return r;
// };