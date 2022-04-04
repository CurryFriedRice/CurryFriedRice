/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//This is done VERY poorly and is just brute forcing it step by step
//It should be more elegant

 var addTwoNumbers = function(l1, l2) {
     let l1Runner = l1   //Make a L1Runner 
     let l2Runner = l2   //Make a L2Runner
     
     let sumArr = []     //Make an array to hold new Value
     
     while (l1Runner != null || l2Runner != null)    //ITerate through the two runners
     {
        let nodeSum = 0;                            //So this is the sum of the two nodes
        if(l1Runner !== null)                       //If the nodes are not null add them to the sum
        {
            nodeSum += l1Runner.val; 
            l1Runner = l1Runner.next
        }
        if(l2Runner !== null)
        {
            nodeSum += l2Runner.val; 
            l2Runner = l2Runner.next
        }
        sumArr.push(nodeSum)
    }

    
    for (let i = 0; i < sumArr.length; i++){        //Iterate throught the sums
        while(sumArr[i] >= 10)                      //normalize the sums to be less than 10
        {
            sumArr[i] = sumArr[i] - 10
            if(i == sumArr.length-1) sumArr.push(1)
            else sumArr[i+1] = sumArr[i+1] + 1
        }
        
    }
    
    let Head = new ListNode(sumArr[0], null);   //Make the new list
    let RetListRunner = Head                    //make a runnser so we don't lose the data
    
    for(let i = 1; i <sumArr.length; i++){
        RetListRunner.next = new ListNode(sumArr[i], null);
        RetListRunner = RetListRunner.next
    }
    
    return Head //Return the head of the new list
};