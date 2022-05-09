/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let smallest = -Infinity;
    let smallestIndex = 0;

    for (let i = 0; i < nums.length; i++)
    {
        if(nums[i] > smallest){ 
            smallest = nums[i] 
            nums[smallestIndex] = smallest;
            smallestIndex++;
        }
    }
 
    nums = nums.splice(smallestIndex)
}

let a = [1,1,2]
let b = [0,0,1,1,1,2,2,3,3,4]

console.log("A:",removeDuplicates(a))
console.log(a)
console.log("B:", removeDuplicates(b))
console.log(b)
