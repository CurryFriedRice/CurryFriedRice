// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var longestValidParentheses = function(s) {
//     let openParens = []
//     let longest = 0;
//     let isValid = true;
    
//     if(s.length === 1 || s.length === 0) return 0;

//     for (let start = 0; start < s.length; start++)
//     {
//         for(let end = start; end < s.length; end++)
//         {
//             // console.log(openParens);
//             if(end === s.length - 1)
//             {
//                 // console.log("we've reached the end")
//                 if(s[end] === "(")
//                 {
//                     // console.log("It's and open")
//                     // longest = Math.max(longest, (end-start))
//                 }
//                 else if(s[end] === ")")
//                 {
//                     // console.log("It's a close")
//                     let popped= openParens.pop();
//                     if(popped === undefined)
//                     {
//                         //If it's undefined then we've gone too far don't update the length
//                         break;
//                     }
//                     else if(openParens.length === 0)
//                     {
//                         // console.log("End: ", end, " Start: ", start, " longest:",longest)
//                         longest = Math.max(longest, (1+ end-start))
//                     }else
//                     {
//                         // console.log("There are remaining Parens: ", openParens.length)
//                     }
//                 }
//             }
//             else if(s[end] === "(")
//             {
//                 // console.log("open")
//                 openParens.push(s[end])
//             }
//             else if(s[end] === ")")
//             {
//                 // console.log("close")
//                 let popped = openParens.pop()
//                 if(popped === undefined)
//                 {
//                     longest = Math.max(longest, (end-start-1))
//                     break;
//                 }
//                 else if(openParens.length === 0)
//                 { 
//                     // console.log("All Parens Closed Closure")
//                     longest = Math.max(longest, (1+ end-start))
//                 }
//             }
//             // console.log("End: ", end, " Start: ", start, " longest:",longest)

//         }
//         openParens.splice(0,openParens.length);
//         isValid = true;
//     }
//     return longest
// };

/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    let stringArr = s.split('');
    let max = 0;
    let stack = []

    //For every item in the array
    stringArr.forEach((item, i) => {
        if(item ==="(") stack.push(i); //Push the open parenth index
        else //If it's a close parenth
        {
            //If the stack's length is 0 or the stringArr at the last logged index is a close push taht index
            if(stack.length === 0 || stringArr[stack[stack.length-1]] === ")")
            {   
                stack.push(i);
            }else
            {   //Otherwise remove that index
                stack.pop();
            }
        }
        // console.log(stack)
    })


    stack.push(stringArr.length);
    stack.unshift(-1)
    // console.log("==========")
    // console.log(stack)
    
    for (var i = 0; i< stack.length - 1; i++) {
        //V is the index size From the next one -the current one - 1
        var v = stack[i+1] - stack[i] - 1;
        // console.log("i: ", i ," | Next:", stack[i+1], "| Prev + 1:", (stack[i] + 1), " | max:", max, " | difference:",v)
        max = Math.max(max, v);
    }
    return max;
};



// console.log(longestValidParentheses("(())("), 4)
// console.log(longestValidParentheses("()(()((("),2)
// console.log(longestValidParentheses("(()"), 2)
// console.log(longestValidParentheses(")()())"), 4)
// console.log(longestValidParentheses("()(()((("), 2)
console.log(longestValidParentheses("))())(()))()(((()())(()(((()))))((()(())()((((()))())))())))()(()(()))))())(((())(()()))((())()())((()))(()(())(())((())((((()())()))((()(())()))()(()))))))()))(()))))()())()())()()()()()()()))()(((()()((()(())((()())))(()())))))))(()()(())())(()))))))()()())((((()()()())))))((())(())()()(()((()()))()()())(()())()))()(()(()())))))())()(())(()))(())()(())()((())()((((()()))())(((((())))())())(()((())((()()((((((())))(((())))))))(()()((((((()(((())()(()))(()())((()(((()((()(())())()())(((()))()(((()))))(())))(())()())()(((()))))((())())))())()()))((((()))(())()())()(((())(())(()()((())()())()()())())))((()())(()((()()()(()())(()))(()())((((()(()(((()(((())()((()(()))())()())))))))))))()())()(()(((())()))(((()))((((()())())(()())((()())(()()((()((((()())))()(())(())()))))(())())))))(((((((())(((((()))()))(()()()()))))))(()(()(()(()()(((()()))((()))())((())())()())()))()()(((())))()(())()()(())))(((()))))))))(())((()((()((()))))()()()((())((((((((((()(())))(())((()(()())())(((((((()()()()))())(((()())()(()()))))(()()))))(((()()((()()()(((()))))(()()())()()()(()))))()(())))))))()((((((((()((())))))))(()))()((()())())("))



