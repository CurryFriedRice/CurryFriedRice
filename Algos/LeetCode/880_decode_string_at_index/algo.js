/**
 * @param {string} s
 * @param {number} k
 * @return {string}
//  */

//So the examples provided by Leetcode were not the best....
//yes they were servicable but I had to dive into the solution tab to get a firmer understanding

const decodeAtIndex = (str, ind) => 
{
    // console.log("=================")    //Just a seperator
    
    
    let size = 0;   //Size tells us how big we are in characters... since we aren't gonna type it out
    let i = 0       //i tells us what index we've stopped at
    for(const c of str)     //So for every chraracter in the str
    {
        if(Number.isInteger(parseInt(c)))   //if it's a number
            size *= parseInt(c)             //we need to multipy our current length by that number
        else size+=1;                       //if it's a letter just add one
        // console.log(c, ind, size)       
        i++;                                //increase our current index by one
        if(size > ind) break;               //if our size is greater than the index we're looking for then we're done
        
    }

    // console.log("*****")
    // console.log("-", ind, size)
    // console.log("*****")

    let substr = str.substr(0,i);               //Generate a substring up to but not including i
    const reverse = substr.split("").reverse().join("") //flip it around....
                                                        //alternatively we could just for loop at length
    // console.log(typeof(reverse))
    console.log((reverse))
    // for(const c of reverse)                 //for every character of our
    // {
    //     ind %= size 
    //     console.log(c, ind, size)
    //     if(ind == 0 && !Number.isInteger(parseInt(c))) return c 

    //     if(Number.isInteger(parseInt(c)))
    //         size /= parseInt(c)
    //     else size--;
    // }
    for(let j = substr.length-1; j >=0;j--) 
    {
        let char = substr[j];
        ind %= size 
        console.log(char, ind, size)
        if(ind == 0 && !Number.isInteger(parseInt(char))) return char 

        if(Number.isInteger(parseInt(char)))
            size /= parseInt(char)
        else size--;
    }
}
//leetcodeleetcodeleetcode
//     ^



// console.log(decodeAtIndex( "leet2code3", 10))
console.log(decodeAtIndex( "ha22", 5))
// console.log(decodeAtIndex( "a2345678999999999999999", 1))
// console.log(decodeAtIndex( "abc", 1))
// console.log(decodeAtIndex( "a2b3c4d5e6f7g8h9", 10))
// console.log(decodeAtIndex( "y959q969u3hb22odq595", 222280369))
// console.log(decodeAtIndex( "a2b3", 3))
// console.log(decodeAtIndex( "a23", 6))
// console.log(decodeAtIndex( "jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt",731963130))
// console.log(decodeAtIndex("n2f7x7bv4l", 110))

// var decodeAtIndex = function(s, k) {
//     let droppedIndex = 0;
//     let code = ""
//     let numberDict = {  "0": 0, 
//                         "1": 1, 
//                         "2": 2, 
//                         "3": 3,
//                         "4": 4, 
//                         "5": 5,
//                         "6": 6,
//                         "7": 7,
//                         "8": 8,
//                         "9": 9
//                     }
//     for(let i = 0; i < s.length; i++)
//     {
        
//         if(numberDict.hasOwnProperty(s[i])) 
//         {
//             console.log(`found number at : ${i}`)
//             let repeat = numberDict[s[i]]
//             // console.log(number)
//             code = code+s.substring(droppedIndex,i)
//             let tempString = code;
//             droppedIndex= i+1;
            
//             for (let j = 0; j < repeat-1; j++)
//             {
//                 code += tempString;
//                 if(k <= code.length)return code[k-1];
//             }
//         }
//     }

//     return s[k-1];
// };



