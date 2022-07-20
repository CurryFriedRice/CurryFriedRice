//Working from the start
// /**
//  * @param {number} x
//  * @param {number} n
//  * @return {number}
//  */
//  var myPow = function(x, n) {
//     if (n == 0) return 1

//     if (x == -1)
//         return n % 2 == 0 ? 1 : -1
//     else if(x == 1) 
//         return 1;


//     let total = x;
//     let i = 1;
//     while (i < Math.abs(n))
//     {
//         if(i+i < Math.abs(n)) 
//         {
//             i = i+i;
//             total = total*total;
//         }
//         else
//         {
//             i++;
//             total = total * x
//         }
//     }

//     if(n < 0) total = 1/total;

//     return total;
// };

//Working from the end 
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    //Anything to 0 is 1;
    if(n == 0) return 1;
    
    //If N is negative...
    if (n<0){
        x = 1/x; //Convert it to division format
        n = n*-1 //Well N was negative? now it's positive
    }

    let res = 1 //Create the final response
    //Well now while N is greater than zero
    while (n > 0)
    {
        if(n%2 ===0)//If N is even  well then we're gonna take a shortcut
        {   
            x=x*x   //X*X  =x^2 But in Exponents it's double
            n = n/2 //As a result we're cutting it in half to maintain consistency
        }
        else    //If N is not even then 
        {
            res *= x;
            n = n-1;
        }

    }
    //run the rest of it
    
    return res
};
console.log(myPow(2.00000,10))
console.log(myPow(2,12))