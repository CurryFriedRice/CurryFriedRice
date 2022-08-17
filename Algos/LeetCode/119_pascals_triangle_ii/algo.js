/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     if(rowIndex == 0) return [1]
//     let row = []

//     for(let i = 0; i < Math.ceil(rowIndex/2) + 1; i++)
//     {
//         console.log(i)
//         if(i == 0) 
//         {
//             row.push(1)
//         }
//         else if(i == 1)
//         {
//             // console.log("pass Over")
//             continue;
//         }
//         else if(i == 2)
//         {
//             row.push(2)
//         }else 
//         {
//             // console.log("FUCK")
//             for (let j = row.length; j > 1; j--)
//             {
//                 console.log("Updating Numbers")
//                 if(j % 2 == 1) row.push(row[j-1]*2)
//                 row[j] += row[j-1]
//                 // console.log(row[j], "3490451834123")
//                 console.log(i, j)
//             }
            
//         }
//         // else if(i % 2 == 0)
//         // {
//         //     console.log("we just need to update values")
//         //     for (let j = 1; j < i; j++)
//         //     {
//         //         row[j] += row[j-1]
//         //     }
//         // }
//         // else
//         // {
//         //     console.log("we need to add a new value")
            
//         // }
//         console.log(row)
//         console.log("-----")

//     }

//     return row
// };

// console.log(getRow(1))
// console.log("******")
// console.log(getRow(3))
// console.log("******")
// console.log(getRow(4))


// var getRow = function(rowIndex) {
//     let triangle = generate(rowIndex)
//     return triangle[rowIndex]
// };

// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
 var generate = function(numRows) {
    if(numRows == 0) return 0;
    
    let triangle = []
    
    for(let i = 0; i < numRows; i++)
    {
        let row = []
        if(i == 0) row.push(1)
        else
        {
            for(let j = 0; j < i+1; j++)
            {
                if(j == 0 || j == i) row.push(1)
                else
                {
                    // let pushValue = triangle[i-1][j-1] +  triangle[i-1][j]
                    // console.log(pushValue)
                    // row.push(pushValue)
                    row.push(triangle[i-1][j-1] +  triangle[i-1][j])
                    // row.push(triangle[i][j-1] + triangle[j])
                }
            }
        }
        triangle.push(row)
    }

    return triangle
};

// console.log(getRow(5))

console.log("******")
console.log(getRow(5))
console.log(generate(5))