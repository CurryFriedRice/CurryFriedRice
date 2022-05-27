/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    // console.log(candidates)
    let length = candidates.length;
    let responses = []

    search(0,[],target)

    console.log(responses)

    return responses;


    function search(idx, prefix, target)
    {
        if(target === 0) {
            responses.push([...prefix])
        }
        if(idx === length) return;
        if(target <= 0) return;
    
        prefix.push(candidates[idx]);
        search(idx+1,prefix, target-candidates[idx])
        prefix.pop()
        search(candidates.lastIndexOf(candidates[idx])+1,prefix,target);
    }
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))