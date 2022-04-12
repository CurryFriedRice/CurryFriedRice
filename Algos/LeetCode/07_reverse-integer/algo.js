/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    let retval = x.toString();
    console.log(typeof(retval))
    retval = retval.split('').reverse().join('')
    if(retval[retval.length-1] === '-')
    {
        retval = retval.split('');
        let pop = retval.pop();
        retval.unshift(pop);
        retval = retval.join('')
    }
    
    retval = parseInt(retval);
    console.log(retval)

    if(Math.abs(retval) > (Math.pow(2,31) - 1) ) return 0;
    
    return retval;
};

// var reverseString = function(x)
// {
    
//     for (let i = 0; i < x.length/2; i++)
//     {
//         let temp = x[i];
//         x[i] = x[(x.length-1)-i];
//         x[(x.length-1)-i] = temp;
//         // [x[i], x[x.length-1-i]] = [x[x.length-1-i], x[i]]
//     }
//     console.log(x)
//     return x
// }