/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    let results = [0,1]
    for (let i = 2; i<= n; i++)
    {
        results[i] = results [i-1] +results[i-2]
    }
    return results[n];
};

console.log(fib(10))