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
    if (retVal.length == 0) retVal.push(interval);  //if the retval length is 0 push the first one
    else {                                          //otherwise figure out if it should be pushed
      let currentRight = retVal[retVal.length - 1][1];  //the current Right = the last index's second digit
      if (currentRight < interval[0]) retVal.push(interval); //If the right side is smaller than the first interval push that interval
      else if (currentRight <= interval[1]) {
        // console.log("we need to merge"); 
        retVal[retVal.length - 1][1] = interval[1]; //otherwise the return value needs to be updated to the new value
      }
    }

    
  }
  // console.log(retVal)
  return retVal;
};

// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
//  var merge = function(intervals) {
//     if(intervals.length == 1) return intervals;
//     let retVal = []
//     let merged = false;
//     for (let i = 1; i < intervals.length; i++)
//     {
//         console.log(intervals[i])
//         if(intervals[i-1][1] >=intervals[i][0])
//         {
//             retVal.push([intervals[i-1][0], intervals[i][1]])
//             merged = true;
//         }
//         else retVal.push(intervals[i])
//     }

//     if(merged) return merge(retVal)
//     else retVal.unshift(intervals[0])
//     return retVal
// };

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
);
