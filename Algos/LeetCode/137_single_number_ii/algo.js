/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashMap = {}

    for(const num of nums)
    {
        if(hashMap.hasOwnProperty(num))
            hashMap[num] += 1
        else
            hashMap[num] = 1

    }
    for(const num of hashMap)
    {
        if (hashMap[num] === 1) return num
    }
};

console.log(singleNumber( [0,1,0,1,0,1,99]))