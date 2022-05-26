
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rows= [], cols = [], boxes = [];
    const boxIdx = (row, col) => parseInt(row / 3) * 3 + parseInt(col / 3);

    let isSolved = false;

    for (let row = 0; row < board.length; row++)
    {
        rows.push(new Array(board.length + 1).fill(0));
        for(let col = 0; col < board.length; col++)
        {
            if(cols.length === col) 
            {
                cols.push(new Array(board.length+1).fill(0));
            }
            if(boxes.length === boxIDx(row,col))
            {
                boxes.push(new Array(board.length+1).fill(0));
            }
            if(board[row][col] !== ".")
            {
                place(row,col,board[row][col])
            }
        }
    }

    return backtrack(0,0)


    function isAvailable (row, col, val) 
    {
        return rows[row][val] === 0 && cols[col][val] === 0 && boxes[boxIdx(row,col)][val] === 0;
    }


    function place(row, col, val)
    {
        rows[row][val]++;
        cols[col][val]++;
        boxes[boxIdx(row,col)][val]++;
        board[row][col] = val+''
    }
    function remove (row, col, val) {
        rows[row][val] = 0;
        cols[col][val] = 0;
        boxes[boxIdx(row, col)][val] = 0;
        board[row][col] = '.';
    }

    function next(row, col) {
        if (row === board.length - 1 && col === board.length - 1) {
            isSloved = true;
        } else {
            col === board.length - 1 ? backtrack(row + 1, 0) : backtrack(row, col + 1);
        }
    }
    
    function backtrack(row, col) {
        if (board[row][col] === '.') {
            for (let x = 1; x <= board.length; x++) {
                if (isAvailable(row, col, x)) {
                    place(row, col, x);
                    next(row, col);
                    if (!isSloved) {
                        remove(row, col, x);
                    }
                }
            }
        } else {
            next(row, col);
        }
    }
};




console.log(solveSudoku())