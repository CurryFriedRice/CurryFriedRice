function isIsomorphic(s: string, t: string): boolean {
    const si: {} = {}, ti:{} = {}
    const order:string[] = [];
    
    for(let i = 0; i < s.length; i++){
        if(si[s.charAt(i)] === undefined)
        {
            si[s.charAt(i)] = [i]
            order.unshift(s.charAt(i))
        }
        else si[s.charAt(i)].push(i)
        if(ti[t.charAt(i)] === undefined){
            ti[t.charAt(i)] = [i] 
            order.push(t.charAt(i))
        }
        else ti[t.charAt(i)].push(i)
        if(order.length % 2 === 1) return false;
    }

    while(order.length != 0)
    {
        let nextS:any = order.shift();
        let nextT:any = order.pop();
        const Sarr = si?.[nextS]
        const Tarr = ti?.[nextT]
        if(!equals(Sarr,Tarr)) return false
    }
    return true;  
};


function equals(left: number[], right: number[]){
    while(left.length != 0){
        if(left.pop() !== right.pop()) return false;
    }
    return true;
}