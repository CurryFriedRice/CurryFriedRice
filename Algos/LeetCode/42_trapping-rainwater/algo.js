/**
 * @param {number[]} height
 * @return {number}
 
    constantly move the left side so that we know the water cannot flow out of that side
    So while the right side is smaller than the left side we'll move the right wall back
    Otherwise if the wall wall on the right is greater or equal to the left side
    start moving the left wall.

    Point is EVERYTHING IN THE MIDDLE DOESN'T MATTER
    just the same side to ensure that the water doesn't flow out that side
*/
 var trap = function(height) {
    let totalRain = 0; //Total Amount of Rain collected

    let left =0;                //Simple Left and Right
    let right = height.length-1;//
    
    let leftWall = 0;    //Current Heighest Left Wall
    let rightWall = 0;   //Current Highest Right Wall

    while(right > left) //While we haven't passed eachother
    {
        //If the height on the right is smaller than the height on the left
        if(height[right] < height[left]){   
            if(rightWall <= height[right] ) rightWall = height[right]  //Is our wall smaller than the height if so then that's our new max height
            else totalRain = totalRain + (rightWall - height[right])   //If it's smaller then calculate the difference and add it
            right-- //Move the right side back one
        }else
        {
            //Otherwise our left side is smaller OR EQUAL to the right side
            if(leftWall <= height[left]) leftWall = height[left]    //If the wall is larger than our current wall then that's the new wall
            else totalRain= totalRain + (leftWall - height[left])   //Otherwise add the difference
            left++ //Move the left cursor forward one
        }
    }
    return totalRain;
};
console.log("-----------------")
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
// console.log(trap([0,1,0,2]))
console.log(trap([4,2,0,3,2,5]))


/*
# - Filled Blocks
W - Water check
L - Left Cursor
R - Right Cursor

So this works on the principle that as long as 
you monitor the greatest wall on the ends the 
water cannot exceed the minimum wall of that side
and we know that the wall on the other side is always 
going to be larger or equal to what we specified

When Right is 10 Right Max is 2
and Left is 2 The Left Max is 1

Well we know for a fact that on the right side it is at least 2 tall
So we know for a fact that water isn't going to flow out that side
So we know that the left side's wall is the limiting factor
So the amount of trapped Water is going to be the left Side's MAX WALL - the value of the index


EX.
    |  LXXXXXXXR
    |   XXXXXXX
    |   XXXXXXX#
    | # XXXXXXX##
    ==================


Here we know the right wall's max height is 3


    |     L R
    |       #
    |   #W? ##W#
    | #W##?######
    ==================




Further steps
E.g. 
1.
    |L          R
    |       #
    |   #   ## #
    | # ## ######
    ==================

Left = 0    Left Max    0
Right = 11  Right Max   1
Water = 0

2.
    | L         R
    |       #
    |   #   ## #
    | # ## ######
    ==================
Left = 1    Left Max    1
Right = 11  Right Max   1
Water = 0

3. 
    | l        R
    |       #
    |   #   ## #
    | # ## ######
    ==================

Left = 1    Left Max    1
Right = 10  Right Max   2
Water = 0

4.
    |  L       R
    |       #
    |   #   ## #
    | #W## ######
    ==================
Left = 2    Left Max    1
Right = 10  Right Max   2
Water = 1
*/

