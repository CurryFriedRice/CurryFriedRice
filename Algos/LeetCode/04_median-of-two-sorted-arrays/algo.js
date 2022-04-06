/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


 const mergeSortArray = (nums1, nums2) =>{
    
    let fullSorted = []
    
    while((nums1.length !== 0 || nums2.length !== 0)) 
    {
        // console.log("SORTED", fullSorted)
        // console.log("loopCount", loopCount)
        // console.log("nums1",nums1)
        // console.log("nums2",nums2)
        if (nums1.length === 0)
            fullSorted.push(nums2.shift())
        else if(nums2.length === 0)
            fullSorted.push(nums1.shift());
        
        else if(nums1[0] <= nums2[0])
            fullSorted.push(nums1.shift());
        else if(nums2[0] <= nums1[0])
            fullSorted.push(nums2.shift());
    }
    
    return fullSorted
}

const mergeSortArray2 = (nums1, nums2) =>{
    
    let fullSorted = []
    let n1 = 0;
    let n2 = 0;
    while((n1 < nums1.length || n2 < nums2.length)) 
    {
        // console.log("SORTED", fullSorted)
        // console.log("loopCount", loopCount)
        // console.log("nums1",nums1)
        // console.log("nums2",nums2)
        if (n1 >= nums1.length){
            fullSorted.push(nums2[n2])
            n2++;
        }
        else if(n2 >= nums2.length){
            fullSorted.push(nums1[n1]);
            n1++;
        }
        else if(nums1[n1] <= nums2[n2]){
            fullSorted.push(nums1[n1]);
            n1++
        }
        else if(nums2[n2] <= nums1[n1]){
            fullSorted.push(nums2[n2]);
            n2++
        }
    }
    
    return fullSorted
}

const findMedian = (sortedArray) =>
{
    return sortedArray.length % 2 === 0 ? (sortedArray[Math.floor(sortedArray.length/2)] + sortedArray[Math.floor(sortedArray.length/2)-1])/2 : sortedArray[Math.floor(sortedArray.length/2)]
} 

 var findMedianSortedArrays = function(nums1, nums2) {
    let fullSorted = mergeSortArray2(nums1, nums2);
    let median = findMedian(fullSorted);
    
    return median
};

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))
