//https://leetcode.com/problems/divide-two-integers/    
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    
    
    let count = 0;
    let topAbs = Math.abs(dividend)
    let botAbs = Math.abs(divisor)

    let isNegative = ((dividend / divisor) < 0)

    if(topAbs >= Math.pow(2,31) && botAbs === 1)
    {
        console.log("Number is out of range")
        if(isNegative) return -Math.pow(2,31)
        else if(!isNegative) return Math.pow(2,31) - 1
    }

    while(topAbs >= botAbs) 
    {
        count++;
        topAbs = topAbs - botAbs;
    }
    
    return isNegative ? -count : count;
};