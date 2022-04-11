/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let Arr2D = []
    let pushedArr = [];
    for (const item of s)
    {
        if(Arr2D.length % (numRows-1) !== 0)
        {
            while(pushedArr.length < numRows - Arr2D.length % (numRows-1)-1)
                pushedArr.push(" ")
        }

        pushedArr.push(item)

        if(Arr2D.length % (numRows-1) !== 0)
        {
            while(pushedArr.length < numRows)
                pushedArr.push(" ")
        }

        if(pushedArr.length === numRows)
        {
            Arr2D.push(pushedArr);
            pushedArr = []
        }
        
    }

    if(Arr2D.length % (numRows-1) !== 0)
    {
        while(pushedArr.length < numRows)
            pushedArr.push(" ")
    }

    Arr2D.push(pushedArr)
    let retString = ''

    let i =0;
    for (let i = 0; i < numRows; i++ )
    {
        for (let j = 0; j < Arr2D.length; j++)
        {
            console.log(Arr2D[j][i])
            if(Arr2D[j][i] === undefined){}
            else if(Arr2D[j][i] !== " ") retString += Arr2D[j][i]
        }
    }
    return retString
};


// console.log(convert("PAYPALISHIRING",3))
console.log(convert("PAYPALISHIRING",4))
