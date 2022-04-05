/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let k = 0           //A starting point for our runner
    let longest = 0         //Keep track of the longest var
    
    
    for (let start = 0; start < s.length; start++) //Run for the length of the string
    {
            for (let runner = k ; runner < start; runner++) //Until the runner catches up to the start
            {
                 if (s[start] === s[runner]){   //if the indexes match
                    k = runner + 1              //Then we increase where we start by where we are +1
                    break
                 }
            }
            if (start - k + 1 > longest) {      //If the start - where we ran to + 1 is longer
                longest = start - k + 1;        //Then we re-set the longer one
            }
            //This is done for  every element in the string
        }
        return longest //then return teh value of longest
    
};