class RecentCounter {
    private pingCounts: Array<number>;
    
    constructor() {
        this.pingCounts = []
    }

    ping(t: number): number {
        this.pingCounts.push(t);
        while(this.pingCounts[0] < (t-3000))
            this.pingCounts.shift();
        return this.pingCounts.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */