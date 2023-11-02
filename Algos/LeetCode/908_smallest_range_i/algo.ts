function smallestRangeI(nums: number[], k: number): number {
    let max = -Infinity, min = Infinity;

    for(const i of nums){
      max = Math.max(max, i)
      min = Math.min(min, i)
    }
    
    return Math.max((max - min) - (2*k),0)
};