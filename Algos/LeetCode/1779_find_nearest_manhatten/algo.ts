function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let shortest = 0
    for(let i = 1; i < points.length; i++){
        if(x === points[i][0] || y === points[i][1]){
            if(points[i][0] === points[shortest][0] && points[i][1] === points[shortest][1]){
                continue;
            }
            else if(manhatten([x,y],points[shortest]) > manhatten([x,y],points[i])){
                shortest = i
            }
            else if(shortest === 0) shortest = i;
        }
    }
    if(x != points[shortest][0] && y != points[shortest][1]){
        return -1 
    }
    if(x === points[0][0] || y === points[0][1]){
        if(manhatten([x,y],points[shortest]) > manhatten([x,y],points[0])){
                shortest = 0
        }
    }
        
    return shortest
};

function manhatten (origin: number[], newPoint:number[]): number{
    return (Math.abs(origin[0] - newPoint[0]) + Math.abs(origin[1] - newPoint[1]) )
}