/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum (candidates, target) {
    let responses = []
    // console.log(candidates)
    search(0, [], target, responses, candidates)
    return responses;
};


function search(idx, prefix, target, responses, candidates)
{
    // let length = candidates.length
    let length = candidates.length;

    if(target === 0) responses.push(prefix.slice());
    if(idx === length) return;
    if (target <= 0) return;
    
    prefix.push(candidates[idx]);
    search(idx, prefix, target - candidates[idx], responses, candidates);
    prefix.pop();
    search(idx + 1, prefix, target, responses, candidates);
}


// console.log(combinationSum([3,8,4,10],15))

// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
//  function combinationSum (candidates, target) {
//     let length = candidates.length;
//     var res = [];

//     const search = (idx, prefix, target) =>
//     {
//         if(target === 0) res.push(prefix.slice())
//         if(idx === length) return;
//         if(target <= 0) return;

//         prefix.push(candidates[idx]);
//         search(idx, prefix, target - candidates[idx]);
//         prefix.pop();
//         search(idx + 1, prefix, target);
//     }

//     search(0, [], target);


//     return res;


// };

console.log(combinationSum([3,4,8,10],15))