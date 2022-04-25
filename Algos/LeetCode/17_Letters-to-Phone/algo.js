let legend = 
{
    '2' : ['a','b','c'],
    '3' : ['d','e','f'],
    '4' : ['g','h','i'],
    '5' : ['j','k','l'],
    '6' : ['m','n','o'],
    '7' : ['p','q','r','s'],
    '8' : ['t','u','v'],
    '9' : ['w','x','y','z']
}

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    let CurrentValues = [];
    for(let i = 0; i < digits.length; i++)
    {
        let CompositeArr = CurrentValues;
        if(CompositeArr.length ===0)
        {
            for(let k = 0; k < legend[digits[i]].length; k++){
                CompositeArr .push(legend[digits[i]][k])
            }
        }
        else {
            let newComposite = []
            for (const prefix of CompositeArr){
                console.log(prefix)
                for(const newChar of legend[digits[i]])
                {
                    newComposite.push(prefix+newChar)
                }
            }
            CurrentValues = newComposite
            console.log(newComposite)
        }
    }
    return CurrentValues
};

console.log(letterCombinations('234'))
console.log(letterCombinations(''))
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]