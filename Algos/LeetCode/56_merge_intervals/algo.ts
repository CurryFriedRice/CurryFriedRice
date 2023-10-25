function merge(intervals: number[][]): number[][] {

    if (intervals.length == 1) return intervals;
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let mergedArr: number[][] = []
    let currentArr:number[] = [];
    for(const nextArr of intervals){
        if(currentArr.length === 0){
            currentArr = nextArr
            continue;
        }
        
        if(nextArr[0] > currentArr[1]){
            mergedArr.push(currentArr)
            currentArr = nextArr
            continue;
        }

        //Update the left side
        if(currentArr[0] > nextArr[0]){
            currentArr[0] = nextArr[0]
        }
        //Update the right Side
        if(currentArr[1] >= nextArr[0] && currentArr[1] <= nextArr[1] ){
            currentArr[1] = nextArr[1]
        }
    }
    mergedArr.push(currentArr);
    return mergedArr
};