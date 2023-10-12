function climbStairs(n: number, current = 2): number {
    if( n<= 2) return n;
    let res:number[] = [];
    res[0] = 1;
    res[1] = 1;
    res[2] = 2;

    for(let i = 3; i<=n; i++){
        res.push(res[i-1] + res[i-2])
    }

    return res[n]
};