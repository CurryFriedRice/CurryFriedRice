
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    // console.log(board)
    let isValid = true;

    isValid = checkRows(board);
    if (!isValid) return isValid;

    isValid = checkColumns(board);
    if (!isValid) return isValid;
    
    isValid = checkSquare(board);
    if(!isValid) return isValid;

    return isValid;
};

let checkRows = (board) => 
{
    for(const row of board)
    {
        let dictionary = {} // Clean the dictionary
        for(const value of row)
        {
            if (value === ".") continue;
            else
            {
                if(dictionary.hasOwnProperty(value)) return false;
                else dictionary[value] = true;
            }
        }
    }
    return true
}

let checkColumns = (board) =>
{
    for(let col=0; col < board.length; col++)
    {
        let dictionary = {} //Clean the dictionary
        for(const row in board)
        {
            let value = board[row][col];
            if (value=== ".") continue;
            else
            {
                console.log("Col:" , col, row, value)
                if(dictionary.hasOwnProperty(value)) return false;
                else dictionary[value] = true;
            }
        }
    }
    return true;
}

let checkSquare = (board) => 
{
    for (let x = 0; x < 3; x++)
    {
        for (let y = 0; y < 3; y++)
        {
            let dictionary = {}
            for (let row = 0; row < 3; row++)
            {
                for (let col = 0; col < 3; col++)
                {
                    let value = board[x*3+row][y*3+col]
                    if(value === ".") continue;
                    else
                    {
                        if(dictionary.hasOwnProperty(value)) return false;
                        else dictionary[value] = true;
                    }
                }
            }
        }
    }


    return true;

}

// console.log(isValidSudoku(
//     [
//         ["5","3",".",".","7",".",".",".","."],
//         ["6",".",".","1","9","5",".",".","."],
//         [".","9","8",".",".",".",".","6","."],
//         ["8",".",".",".","6",".",".",".","3"],
//         ["4",".",".","8",".","3",".",".","1"],
//         ["7",".",".",".","2",".",".",".","6"],
//         [".","6",".",".",".",".","2","8","."],
//         [".",".",".","4","1","9",".",".","5"], 
//         [".",".",".",".","8",".",".","7","9"]
//     ]
// ))
// console.log(isValidSudoku(
//     [
//         [".",".","4",".",".",".","6","3","."],
//         [".",".",".",".",".",".",".",".","."],
//         ["5",".",".",".",".",".",".","9","."],
//         [".",".",".","5","6",".",".",".","."],
//         ["4",".","3",".",".",".",".",".","1"],
//         [".",".",".","7",".",".",".",".","."],
//         [".",".",".","5",".",".",".",".","."],
//         [".",".",".",".",".",".",".",".","."],
//         [".",".",".",".",".",".",".",".","."]
//     ]
// ))
console.log(isValidSudoku(
    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
))
