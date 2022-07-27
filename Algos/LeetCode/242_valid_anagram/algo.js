/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  var isAnagram = function(s, t) {
//     if(s.length != t.length) return false;

//     let keyMap = {}
//     for(cha of s)
//     {
//         keyMap.hasOwnProperty(cha) ? keyMap[cha] += 1 : keyMap[cha] = 1;
//     }

//     for(cha of t)
//     {
//         if(keyMap.hasOwnProperty(cha)) 
//         {
//             keyMap[cha] -= 1 
//             if(keyMap[cha] <= 0) keyMap.delete(cha);
//         }
//         else
//         {
//             return false;
//         }
//     }

//     return true;
// };


var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    return s.split("").sort().join() == t.split("").sort().join()
};

console.log(isAnagram("rat","car"))
console.log(isAnagram("anagram", "nagaram"))