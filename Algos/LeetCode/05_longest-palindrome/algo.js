/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let startIndex = 0;
    let endIndex = 0;
    for(let i = 0; i < s.length; i ++)
    {
        for (let j = i+1;j <s.length; j++)
        {
            let subStr = s.slice(i,j+1);
            // console.log(subStr)
            // console.log("New String Palindrome? :", isPalindrome(subStr))
            if(isPalindrome(subStr))
            {
                // console.log("New String Longer?: ", subStr.length > (endIndex-startIndex))
                if(subStr.length > (endIndex-startIndex))
                    {
                        startIndex = i;
                        endIndex = j;
                    }
            }
        }
    }
    // console.log(s.slice(startIndex,endIndex))
    return s.slice(startIndex,endIndex+1);
    
};

var longestPalindrome2 = function(s) {
    let startIndex = 0;
    let endIndex = 0;
    for(let i = 0; i < s.length; i ++)
    {
        for (let j = i+1;j <s.length; j++)
        {
            let subStr = s.slice(i,j+1);
            // console.log(subStr)
            // console.log("New String Palindrome? :", isPalindrome(subStr))
            if(isPalindrome(subStr))
            {
                // console.log("New String Longer?: ", subStr.length > (endIndex-startIndex))
                if(subStr.length > (endIndex-startIndex))
                    {
                        startIndex = i;
                        endIndex = j;
                    }
            }
        }
    }
    // console.log(s.slice(startIndex,endIndex))
    return s.slice(startIndex,endIndex+1);
    
};

const isPalindrome = (substr) =>
{
    for (let i = 0; i < substr.length/2; i++)
    {
        if(substr[i] !== substr[substr.length-i -1])
            return false;
    }   
    return true;
}

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("repaper"))
console.log(longestPalindrome("racecar"))
console.log(longestPalindrome("testset"))
console.log(longestPalindrome("redividerdetartratedvopsadf"))