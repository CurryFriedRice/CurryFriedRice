/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = (s, p) => {
    const sLen = s.length, pLen = p.length;

    let sIndex = 0, pIndex = 0;
    let lastAsterix = -1, lastMatch = -1
    while (sIndex < sLen)   //So while the string index is less than the string's length we're running this
    {   
        //First thing that is checked...
        //if the pattern index has not reached the length AND
        //the string at the index matches the pattern index or the pattern index is a ?
        //If it creates a match advance both values
        if(pIndex < pLen && (s[sIndex] === p[pIndex] || p[pIndex] === '?'))
        {
            sIndex++
            pIndex++
        }

        //Otherwise if the pattern index is less than the pattern length AND it's an asterix
        else if(pIndex < pLen && p[pIndex] === '*')
        {
            lastAsterix = pIndex;   //Set the most recent Asterix to this patter index
            pIndex++                //Move to the next index
            lastMatch = sIndex;     //set the most recent match to the current string's index
        } else if(lastAsterix !== -1)//If we've never found an asterix
        {
            pIndex = lastAsterix +1; //Set the pattern index to the last Asterix + 1
            lastMatch++;             //Increase the last time we matched something
            sIndex = lastMatch;      //Set the string's index to the last item we matched
        }else return false          //If it doesn't fulfill any of these conditions the pattern is not a match
    }
    //this is just a check to see if asterixes are at the end if there ends up being a non asterix then it fails
    while(pIndex < pLen && p[pIndex] === '*') pIndex++;
    return pIndex === pLen; //If the pattern index reached the length then it all matches
};

// var isMatch = (s,p) => {
//     const sLength = s.length, pLength = p.length
//     let sIndex = 0, pIndex =0;
//     let lastMatch = -1;
//     let lastAsterix = -1;

//     while(sIndex < sLength)
//     {
//         if(pIndex < pLength && p[pIndex] === s[sIndex] || p[pIndex] === '?')
//         {
//             pIndex ++;
//             sIndex ++;
//         }
//         else if(pIndex < pLength && p[pIndex] === "*")
//         {
//             lastAsterix = pIndex;
//             pIndex++;
//             lastMatch = sIndex;
//         }
//         else if(lastAsterix = -1)
//         {
//             pIndex = lastAsterix + 1
//             lastMatch++
//             sIndex = lastMatch
//         }
//         else return false;
//     }
//     while(pIndex < pLength && p[pIndex] === "*") pIndex++
//     return pIndex === pLength
// }

console.log(isMatch("aa", "a"), false)
console.log(isMatch("aa","*"), true)
console.log(isMatch("cb","?a"), false)
console.log(isMatch("adceb","*a*b"), true)
console.log(isMatch("aa", "a*"), true)
console.log(isMatch("","******"), true)
console.log(isMatch("abcabczzzde","*abc???de*"), true)

/*
Stepping Through it

"abcabczzzde","*abc???de*"

So first it sees that the sIndex < sLength
Then it checks to see if the pIndex is less than the pLength (it is)
BUT the string at sIndex is not equal to the pattern at pIndex and pIndex is not a wildcard ?

So we move on to the next part
We've verified that the pattern index is less than length and we want to check to see if it's an asterix (it is)

....

Otherwise the pattern doesn't match and the pattern is invalid

*/