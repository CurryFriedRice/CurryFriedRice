/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let shortest = 201
    for(const str of strs)
    {
        shortest = Math.min(str.length, shortest)
    }
    let prefix = ''
    for(let i = 0; i < shortest; i++)
    {
        let match = true;
        let buffer = '';
        for(const str of strs)
        {
            if(buffer === '') buffer = str[i]
            else if(buffer !== str[i]) match = false
        }
        if(!match && i === 0) return ''
        else if(!match) return prefix
        else if(match) prefix += strs[0][i]
    }
    return prefix
};


console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
