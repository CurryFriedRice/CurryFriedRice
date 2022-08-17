/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {

    s = s.toLowerCase();

    if(s.length == 1) return true;
    if(s.length == 0) return false;
    
    let leftMod = 0, rightMod=0;
    let index = 0;
    while(index + leftMod < s.length-(rightMod+index))
    {
        while(!/[a-zA-Z0-9]/.test(s[index+leftMod])) leftMod++;
        while(!/[a-zA-Z0-9]/.test(s[s.length-(index+rightMod+1)])) rightMod++;

        console.log(index+leftMod,s[index+leftMod], s.length-(index+rightMod+1), s[s.length-(index+rightMod+1)])
        if(leftMod > s.length || s.length-(index+rightMod+1)< 0) return false
        let result = (s[index+leftMod].toLowerCase() == s[s.length-(index+rightMod+1)].toLowerCase())
        // console.log(result, s[index+leftMod], s[s.length-(index+rightMod+1)])
        if(!result) return false
        index ++
    }
    // let filtered = "";
    // // console.log(s)
    // for(const letter of s)
    // {
    //     let result = /[a-zA-Z0-9]/.test(letter)
    //     // console.log(testing)
    //     if(result)filtered += letter
    // }

    // console.log(filtered)

    // for(let i = 0; i < Math.floor(filtered.length/2); i++)
    // { 
    //     // console.log(filtered[i], filtered[filtered.length-(i+1)])
    //     // // console.log()
    //     let result = (filtered[i] != filtered[(filtered.length-1)-i])
    //     if (result)return false;
    // }
    
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("AmanaplanacanalPanama"))
console.log(isPalindrome(".,"))