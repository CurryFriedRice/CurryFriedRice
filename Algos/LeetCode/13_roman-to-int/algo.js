
 const romanToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let numArr = []
    
    for(const letter of s)
    {
        numArr.push(romanToNum[letter])
    }
    
    let buffer = 0;
    let sum = 0;
    for(const number of numArr)
    {
        if(buffer < number){
            sum += number - (2*buffer)
        }else{
            sum += number
        }
        buffer = number;

    }
    console.log(numArr)
    console.log(sum)
    return sum
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))