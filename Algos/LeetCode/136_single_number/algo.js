/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let result;
    for (const number of nums)
    {
        // console.log(result)
        result = result ^ number 

    }
    return result

    // const check = {}
    // // console.log(nums)
    // for(const number of nums)
    // {
    //     if(check.hasOwnProperty(number)) delete check[number]
    //     else{check[number] = true}
    // }
    
    // return Object.keys(check)[0]
    // console.log(check)
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))