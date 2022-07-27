/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {
    let retVal = [];
    let knownGrams= []

    for(let str of strs)
    {
        //Let's be real.... this is a somewhat expensive call.... at least  o(3) right here to loop over it and split, then sort then rejoin....
        let sorted = str.split("").sort().join("")
        // console.log(sorted)
        let index = knownGrams.indexOf(sorted);
        if(index != -1) retVal[index].push(str);
        else
        {
            knownGrams.push(sorted);
            retVal.push([str]);
        }
    }
    // console.log(retVal)
    return retVal
}







 console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
 console.log(groupAnagrams(["ac","c"]))
 // console.log(groupAnagrams(["eat","tea","tan"]))
 // console.log(groupAnagrams([""]))
 // console.log(groupAnagrams(["a"]))


/* Too long times out....
 var groupAnagrams = function(strs) {
    //Hold a hashtable of all the string combinations
    let stringHash = []
    let groups = []
    for(item of strs)
    {
        //generate a map of the strings
        let letterMap = {}
        for(let i = 0; i < item.length; i++)
        {
            letterMap.hasOwnProperty(item[i]) ? letterMap[item[i]] += 1 : letterMap[item[i]] = 1
            //Simple if we have that letter then add one to it
        }
        // console.log(letterMap)
        let isMatching = false;
        let groupIndex = 0;
        for(letterMapIndex in stringHash)
        {
            // let foundMatch = isMatch(letterMap, stringHash[letterMapIndex]);
            // console.log(foundMatch)
            if(Object.keys(letterMap).length != Object.keys(stringHash[letterMapIndex]).length)
            {
                //We aren't even the same length how can we be an anagram....
                continue;
            }
            if(isMatch(letterMap, stringHash[letterMapIndex])) 
            {
                isMatching = true
                groupIndex = letterMapIndex;
                break;
            }
        }

        if(isMatching)
        {
            // if(groups.length < groupIndex) groupIndex.push([item])
            groups[groupIndex].push(item)
        }else 
        {
            groups.push([item])
            stringHash.push(letterMap)
        }
        // console.log(groups)
        // console.log("---------")
            //so now going over every table and check our own letters against it
        // console.log(letterMap)
        // // console.log( Object.keys(table))
        // let foundMatching = true;
        // let letterKeys = Object.keys(letterMap)
        // for(wordObj in stringHash)
        // {
        //     // console.log(wordObj)
        //     foundMatching = true;
        //     for(key of letterKeys)
        //     {
        //         if(wordObj.hasOwnProperty(key) && stringHash[wordObj][key] == letterMap[key]) continue;
        //         else
        //         {
        //             foundMatching = false
        //             break;
        //         }
        //     }
        //     if(foundMatching)
        //     {
                
        //     }
        // }

        // if(!foundMatching)
        // {
        //     stringHash.push(letterMap)
        // }
    }
    // console.log(stringHash)
    return groups
};


const isMatch = (o1,o2) => 
{
    //o1 will always be the base case
    //o2 will always be the new table we're looking for
    let keys = Object.keys(o1)
    for (hashKey of keys)
    {
        if(!o2.hasOwnProperty(hashKey)) //If it doesn't have a key then it don't match
        {
            return false;
        }else if(o2[hashKey] != o1[hashKey])    //If it has the key but the amount isn't the same it don't match
        {
            return false
        }
    }
    return true
}
*/
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// console.log(groupAnagrams(["ac","c"]))
// // console.log(groupAnagrams(["eat","tea","tan"]))
// // console.log(groupAnagrams([""]))
// // console.log(groupAnagrams(["a"]))