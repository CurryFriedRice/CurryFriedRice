/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k, results = [],prefix = [], start = 1) {
    //k is the length
    //n is the range of numbers to pick
    //k ranges as big as N
    //n is less than 20

    for(let i = start; i <= n; i++)
    {
        if (prefix.includes(i)) continue;
        prefix.push(i)

        if(prefix.length == k)
        {
            // console.log(prefix);
            // if (!hasMatch(results, prefix)) results.push([...prefix]);
            results.push([...prefix]);
        }
        else combine(n,k,results, prefix, i+1);
        prefix.pop()
    }
    return results;
};

let hasMatch = (res, comparison) =>
{
    if(res.length == 0) return false;

    let compDict = {};
    for(item of comparison)
    {
        compDict.hasOwnProperty(item) ? compDict[item] += 1 : compDict[item] = 1;
    }  
    for(arr of res)
    {
        let arrDict = {}
        for(item of arr)
        {
            console.log(item)
            arrDict.hasOwnProperty(item) ? arrDict[item] += 1 : arrDict[item] = 1;
        }
        console.log(arrDict)
        let keys = Object.keys(compDict);
        for(item of keys)
        {
            if(!arrDict.hasOwnProperty(item)) return false;
            else if(arrDict[item] !== compDict[item]) return false;
        }
    }
    return true;
}


/*
1 => 1-20
2 => 2-20
3 => 3-20
4 => 4-20
*/
/*
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]*/


console.log(combine(4,2))
// console.log(combine(1,1))