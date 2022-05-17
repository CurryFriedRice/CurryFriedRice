/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let retArr = []
    let window = words.length*words[0].length;
    let wordLen = words[0].length
    let hashMap = {}

    for(const word of words)
    {
        hashMap.hasOwnProperty(word) ? hashMap[word] +=1 : hashMap[word] = 1;
    }

    let keys = Object.keys(hashMap);

    for(const key of keys)
    {

        let start = s.indexOf(key)
        // console.log(start);

        while(start != -1)
        {
            let isValid = true;
            console.log("=======")
            console.log(start)
            
            let substr = s.substring(start, start + window)
            let submap = []
            console.log(substr)
            while (substr.length > 0)
            {
                submap.push(substr.substring(0,wordLen));
                substr = substr.slice(wordLen)
            }
            let refMap = {...hashMap}
            for(const item of submap)
            {
                // console.log(item);
                if(refMap.hasOwnProperty(item)) refMap[item] --;
                else if(refMap[item] <= 0){
                    break;
                }
            }
            console.log(refMap);
            for(const key of Object.keys(refMap))
            {
                // console.log(key, refMap[key])
                if(refMap[key] != 0) isValid = false;
            }
    
            if(!retArr.includes(start) && isValid)
                retArr.push(start)

            start = s.indexOf(key, start +1)
        }

    }


    return retArr
};

// console.log(findSubstring("barfoothefoobarman",["foo","bar"]))
// console.log(findSubstring("ababaab", ["ab","ba","ba"]))
console.log(findSubstring("ababababab", ["ababa","babab"]))
