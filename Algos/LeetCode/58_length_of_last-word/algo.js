/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let arr1 = s.trim().split(" "); 
    // console.log(arr1)
    return arr1[arr1.length-1].length 
};