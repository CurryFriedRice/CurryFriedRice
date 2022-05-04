/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    console.log(head);
    //So I need to swap the two nodes...
    //The first one points to the third one
    //the second one points to the first one
    //then we need to keep track of the first one
    //get the 3rd relative to it
    //then swap relative second and third
    
    const swap = (first, second) =>{
      
        let third = first.next?.next
        
        second.next = first;
        first.next = third;
        return first;
    }
    

    if(head === null || head.next == null) return head; 
    let runner = head;
    let newHead = head.next;
        
    runner = swap(runner, runner.next)
    
    while(runner.next !== null && runner.next?.next !== null)
    {
        let next = runner.next.next
        let current = runner;
        runner = swap(runner.next, runner.next.next)
        current.next = next;
    }
    
    return newHead;
};