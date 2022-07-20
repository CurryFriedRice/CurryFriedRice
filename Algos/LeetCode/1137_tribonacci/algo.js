/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    let results = [0,1,1]
    
    for(let i = 3; i<=n; i++)
    {
        results[i] = results[i-1] + results[i-2] + results[i-3]
    }
    
    return results[n]
};