/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    let smallestMissing = 1;
    let dataSet = new Set()
    for (const item of nums)
    {
        if(item <= 0) continue;
        else
        {
            if(dataSet.has(item)) continue;
            dataSet.add(item);
            if(dataSet.has(smallestMissing)) smallestMissing = smallestMissing +1;
        }
    }
    return smallestMissing;
};


console.log(firstMissingPositive([1,2,2,0]), 3)
console.log("******")
console.log(firstMissingPositive([3,4,-1,1]), 2)
console.log("******")
console.log(firstMissingPositive([7,8,9,11,12]),1)
console.log("******")
console.log(firstMissingPositive([1,1,2,2]),3)
console.log("******")
console.log(firstMissingPositive([1,1000]),2)
console.log("******")
console.log(firstMissingPositive([1,2,3,4,5,6,7,9,10]),8)
console.log("******")
console.log(firstMissingPositive([10,4,16,54,17,-7,21,15,25,31,61,1,6,12,21,46,16,56,54,12,23,20,38,63,2,27,35,11,13,47,13,11,61,39,0,14,42,8,16,54,50,12,-10,43,11,-1,24,38,-10,13,60,0,44,11,50,33,48,20,31,-4,2,54,-6,51,6]),3)
