/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums, results = [] , prefix = [], pushedIndexes = []) {
    
   
    for(let i = 0; i < nums.length; i++)
    {
        if(pushedIndexes.length != 0 && pushedIndexes.includes(i)) continue;
        prefix.push(nums[i]);
        pushedIndexes.push(i);
        if(pushedIndexes.length === nums.length)
        {
            // console.log(pushedIndexes)
            
            if(!hasMatch(results, prefix)){
                results.push([...prefix]);
                // console.log("addding thing")
            }

        }
        permuteUnique(nums, results, prefix, pushedIndexes);
        pushedIndexes.pop()
        prefix.pop();
    }

    // console.log(results)
    return results;




};
let hasMatch = (res, comparison) =>
{
    if (res.length == 0) return false;
    for(item of res)
    {
        // console.log("-----")
        // console.log(item)
        // console.log(comparison)
        let i = 0;
        while (i < item.length)
        {
            if(item[i] !== comparison[i])break;
            i++;
        }
        if (i === item.length) {
            // console.log("full match") 
        return true}
    }
    return false;
}


console.log(permuteUnique([1,1,2]))
console.log(permuteUnique([1,2,3]))
// console.log(permuteUnique([0,1]))
// console.log(permuteUnique([1]))