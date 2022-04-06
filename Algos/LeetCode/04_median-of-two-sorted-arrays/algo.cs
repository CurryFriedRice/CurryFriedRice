public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        int length = nums1.Length + nums2.Length;
        int[] mergeArr = new int[length];
        int ArrIndex = 0;
        int n1 = 0;
        int n2 = 0;

        
        while(ArrIndex < mergeArr.Length)
        {
            int item = 0;
            if(n1 >= nums1.Length)
            {
               item = nums2[n2];
                n2++;
            }else if(n2 >= nums2.Length)
            {
              item = nums1[n1];
                n1++;
            }else if(nums1[n1] <= nums2[n2])
            {
                item = nums1[n1];
                n1++;
            }else if(nums2[n2] <= nums1[n1])
            {
              item = nums2[n2];
                n2++;
            }
            
            mergeArr[ArrIndex] = item;
            ArrIndex ++;
        }
        
        //Get median now
        double median = 0.0;
        if(mergeArr.Length % 2 == 0)
        {
            int middle = (int)Math.Floor(mergeArr.Length/2.0);
            median = ((mergeArr[middle]) + mergeArr[middle-1])/2.0;
        }
        else 
        {
            int middle = (int)Math.Floor(mergeArr.Length/2.0);
            Console.WriteLine("ODD : " + middle);

            median = mergeArr[middle];
        }
        return median;
    }
    
}