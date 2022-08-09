/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let selectedArray;
    for(const array of matrix)
    {
        if(array[array.length-1] >= target)
        {
            selectedArray = array
            break;
        }
    }

    if (!selectedArray) return false;
    return selectedArray.indexOf(target) !== -1;
    //let middleIndex = Math.floor(selectedArray.length/2)
    let left = 0;
    let right = selectedArray.length

    while (left < right)
    {
        let middle = Math.floor((left+right)/2)
        // console.log(left,right,middle)
        if(selectedArray[left] == target || selectedArray[middle] == target || selectedArray[right] == target) return true
        if(selectedArray[middle] <= target) right = middle;
        else if(selectedArray[middle] > target) left = middle+1;
        else if(selectedArray[middle] === target) return true;
    }
    return false;
    console.log(selectedArray)
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))