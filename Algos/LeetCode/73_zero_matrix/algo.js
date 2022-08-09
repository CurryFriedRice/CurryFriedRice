/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    var zeroLocations = []
    for(let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j<matrix[i].length;j++)
        {
            if(matrix[i][j] == 0) zeroLocations.push([i,j])
        }
    }
    // console.log(zeroLocations)
    // console.log(matrix)

    for(const point of zeroLocations)
    {
        for(let x = 0; x<matrix[point[0]].length; x++)
        {
            matrix[point[0]][x] = 0
        }
        for(let y = 0; y < matrix.length;y++)
        {
            matrix[y][point[1]] = 0
        }
    }
    // for(const array of matrix)
    // {
    //     console.log(array);
    // }

    // console.log(matrix)
};


console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
console.log("xxxxxxx")
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))