/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) return 0;


    return "Nope"
};

console.log(ladderLength("hit", "cog",["hot","dot","dog","lot","log","cog"]))
console.log(ladderLength("hit", "cog",["hot","dot","dog","lot","log"]))