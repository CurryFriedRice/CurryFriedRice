function tribonacci(n: number): number {
    if(n === 0) return 0;
    else if(n === 1) return 1;
    else if(n === 2) return 1;
    let memo = []
    if(memo.length === 0){
      memo.push(0)
      memo.push(1)
      memo.push(1)
    } 
    while (memo.length < n+1){
      const l = memo.length-1;
      memo.push(memo[l] + memo[l-1] + memo[l-2])
    }
    return memo.pop()
};