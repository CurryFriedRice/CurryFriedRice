/**
 * @param {number} num
 * @return {string}
 */


var intToRoman = function(num) {
    
    let setValues = [1000, 500, 100, 50, 10, 5, 1]
    let romanNumerals = ['M','D','C','L','X','V','I']
    let rollingNum = num;
    let countArr = []
    for(const value of setValues)
    {        
        rollingNum >= value ? countArr.push(Math.floor(rollingNum/value)) : countArr.push(0)
        rollingNum = rollingNum % value
    }
    console.log("BLAH",countArr);

    let rollingSum = ""
    for(let i =0; i< countArr.length; i++)
    {
        if(countArr[i] === 1 && countArr[i+1] === 4)
        {
            rollingSum += (romanNumerals[i+1] + romanNumerals[i-1])
            i++
        }
        else if(countArr[i] === 4)
        {
            rollingSum += (romanNumerals[i] + romanNumerals[i-1] )
        }
        else if(countArr[i] < 4)
        {
            for(let j = 0; j < countArr[i]; j++)
            {
                rollingSum += romanNumerals[i];
            }
        }
    }

    return rollingSum
};

console.log(intToRoman(1))
// console.log(intToRoman(3))
// console.log(intToRoman(9))
// console.log(intToRoman(58))
// console.log(intToRoman(1994))
// //"MCMXCIV"