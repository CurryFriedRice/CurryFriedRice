/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, results = [], prefix = []) {

    // console.log(prefix)
    for(let i = 0; i < nums.length; i++)
    {
        if(prefix.includes(nums[i])) continue;
        else prefix.push(nums[i]);
        // console.log(prefix)
        // console.log(prefix.length == nums.length)
        if(prefix.length == nums.length) results.push([...prefix])

        permute(nums, results, prefix);

        prefix.pop();
    }

    return results
};





console.log(permute([1,2,3]))
console.log(permute([0,1]))
console.log(permute([1]))