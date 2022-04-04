/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// using System.Collections.Generic;

public class Solution {
    
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        List<int> sumArr = new List<int>(); //Make a list
        
        while (l1 != null || l2 != null){   //Add summed values to the list
            int sum = 0;
            if(l1 != null){
                sum += l1.val;
                l1 = l1.next;
            }
            if(l2 != null){
                sum += l2.val;
                l2 = l2.next;
            }
            sumArr.Add(sum);
        }
        
    
        ListNode Head = new ListNode(); //make a head
        
        ListNode Runner = Head;         //Make a runner
        
        
        for (int i = 0; i < sumArr.Count; i++)
        {
            // Console.WriteLine(sumArr[i]);
            //If it's greater than 10 how much greater
            int currentValue = Runner.val + sumArr[i];  //Get the current value of NODE + LIST VALUE
            Console.WriteLine(currentValue);
            
            int addedValue = (int)Math.Floor((currentValue)/10.0);  //HOw much overflow
            Console.WriteLine("AddedValue: " + addedValue);

            int runnerVal = currentValue % 10;  //Normalize the current index
            
            Runner.val = runnerVal; //set node to normalized value
                    
            // if(addedValue > 0)      //If we overflowed make a new node with the base value of "added value"
            //     Runner.next = new ListNode(addedValue, null);
            // else 
            
            if(i < sumArr.Count-1) //Make a new node with the base value of the overflow
                Runner.next = new ListNode();
            
            Runner = Runner.next; //Move to the new node
        }
        
        return Head; //return the root node
    }
}