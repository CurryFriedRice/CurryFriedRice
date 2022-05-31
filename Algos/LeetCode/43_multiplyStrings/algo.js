/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply =(num1, num2) => {
    if(num1[0] == '0' || num2[0] == [0]) return "0"
    let num1Arr = num1.split('')
    let num2Arr = num2.split('')

    let solved = []

    for(const number in num1Arr)
    {
        // console.log(num1Arr.indexOf(number))
        solved.unshift(solveDigit(num1Arr[number], num2Arr));
        for(let i = 0; i < (num1Arr.length-1-number); i++) 
        {
            solved[solved.length-1-number].push(0)
        }
        // console.log("=====")
    }
    // console.log(solved)
    let retArr = [];
    let longest = solved[solved.length-1].length
    for(let i = 0; i < longest; i++)
    {
        let digitSum = 0;
        for(let j = 0; j < solved.length; j++)
        {
            if(solved[j].length != 0)
            {
                digitSum = digitSum + solved[j].pop();
            }
        }
        // console.log(digitSum)
        retArr.unshift(digitSum)
    }
    // console.log(retArr)
    // console.log(simplifyDigits(retArr))

    return simplifyDigits(retArr)
};

let solveDigit = (number, num2Arr) => 
{
    let length = num2Arr.length-1;
    let retArr = []

    while(length >= 0)
    {
        let total = num2Arr[length] * number;
        retArr.unshift(total)
        // console.log(num2Arr[length], num2Arr[length] * number);
        length--
    }

    return retArr;
}


let simplifyDigits = (retArr) =>
{
    let carry = 0;
    let blah = []
    for(let i = retArr.length-1; i >= 0; i--)
    {
        // console.log(retArr[i])
        blah.unshift((carry+retArr[i])%10)
        carry = Math.floor((retArr[i] + carry)/10) 
        // console.log(retArr[i])
    }
    if(carry != 0) blah.unshift(carry)

    // console.log(blah)
    return blah.join('');
}


// console.log(multiply("2","3"))
// console.log(multiply("123","456"), "56088")
// console.log(multiply("123456789","987654321"))
// console.log(multiply("9133","0"))
// console.log(multiply("23108814760092", "55183904456427981"), `\n1275234625822209623419790934252`)
console.log(multiply("96423702883453279", "72156405165936898"), `\n6957587772858372748255887645188542`)

// console.log(9 *72156405165936898 )