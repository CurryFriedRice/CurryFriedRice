/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    let version1Arr = version1.split(".")
    let version2Arr = version2.split(".")

    // console.log(version1Arr)
    for(const ver in version1Arr)
    {
        version1Arr[ver] = parseInt(version1Arr[ver])
    }
    
    // console.log(version2Arr)
    for(const ver in version2Arr)
    {
        version2Arr[ver] = parseInt(version2Arr[ver])
    }
    
    // console.log(version1Arr)
    // console.log(version2Arr)

    let shortest, longest, i = 0; 
    if(version1Arr.length < version2Arr.length)
    {
        shortest = version1Arr
        longest = version2Arr

        
        for(i ; i < shortest.length; i++)
        {
            if(version1Arr[i] > version2Arr[i]) return 1;
            else if(version1Arr[i] < version2Arr[i]) return -1;
        }

        while (i < longest.length) 
        {
            if(longest[i] > 0) return -1
            i++
        }
    }
    else
    {
        shortest = version2Arr 
        longest = version1Arr
        
        for(i ; i < shortest.length; i++)
        {
            if(version1Arr[i] > version2Arr[i]) return 1;
            else if(version1Arr[i] < version2Arr[i]) return -1;
        }

        while (i < longest.length) 
        {
            if(longest[i] > 0) return 1
            i++
        }
    }

    return 0

};


// console.log(compareVersion("1.01","1.001"))

// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

// console.log(compareVersion("1.0", "1.0.0"))

// Example 2:
// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0
// Explanation: version1 does not specify revision 2, which means it is treated as "0".

// console.log(compareVersion("0.1","1.1"))

// Example 3:
// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
console.log(compareVersion("1.0.1", "1"))