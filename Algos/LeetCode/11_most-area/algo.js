/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea2 = function(height) {
    console.log(height)
    let largestArea = 0;
    for(let i =0; i < height.length; i++)
    {
        for (j = i; j<height.length; j++)
        {
            let minHeight = Math.min(height[i],height[j]);
            let newArea = minHeight * (j-i);
            if(largestArea < newArea) largestArea = newArea;    
        }
    }
    console.log(largestArea)
    return largestArea
};

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let largestArea = 0;
    let left = 0;
    let right =0;
    for(let i =0; i < height.length; i++)
    {
       let area = Math.min(height[left],height[height.length-(1+right)]) * ((height.length-right-1) - left)
       if(height[left] < height[height.length-(1+right)]) left++;
       else right++; 
       largestArea = Math.max(area,largestArea);
    }    
    return largestArea
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
