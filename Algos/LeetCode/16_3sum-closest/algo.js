/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    let sorted = nums.sort((a,b) => a-b);
    
    for(let i = 0; i < sorted.length-2; i++)
    {
        for (let j = i+1; j < sorted.length-1; j++)
        {
            for(let k = j+1; k < sorted.length; k++){
                let sum = sorted[i] + sorted[j] + sorted[k]
                console.log(sorted[i], sorted[j], sorted[k])
                Math.abs(sum-target) < Math.abs(closest-target) ? closest = sum: closest; 
            }
        }
    }
    return closest
};


console.log(threeSumClosest([-1,2,1,-4], 1))
console.log("Expected: ", 2)
