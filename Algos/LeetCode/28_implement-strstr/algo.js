/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    
    if(needle.length === 0) return ''
    
    let index = haystack.indexOf(needle);
    return index;
    
};