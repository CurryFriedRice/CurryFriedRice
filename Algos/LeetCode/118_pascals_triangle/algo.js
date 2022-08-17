/**
 * @param {number} numRows
 * @return {number[][]}
 */
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


console.log(generate(30))