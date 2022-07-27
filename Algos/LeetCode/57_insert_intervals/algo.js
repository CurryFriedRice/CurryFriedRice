/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
    //   console.log("================");
    if (intervals.length == 1) return intervals;
    let sorted = intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    //   console.log(sorted);
    
    let retVal = [];
      // for(let i = 0; i < sorted.length; i++)
    for (const interval of intervals) {
        if (retVal.length == 0) retVal.push(interval);
        else {
        let currentRight = retVal[retVal.length - 1][1];
        if (currentRight < interval[0]) retVal.push(interval);
        else if (currentRight <= interval[1]) {
            // console.log("we need to merge");
            retVal[retVal.length - 1][1] = interval[1];
        }
        }
    }
      // console.log(retVal)
    return retVal;
    };
    

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let sorted = intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    
    let i = 0;
    while(intervals[i][0] < newInterval[0] && i < intervals.length)
    {
        i++;
    }
    sorted.splice(i,0,newInterval);
    // console.log(sorted)
    return merge(sorted)
};



console.log(insert([[1,3],[6,9]],[2,5]))
//[[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))
//[[1,2],[3,10],[12,16]]

