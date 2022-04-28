/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    let length = 0;
    let current = head;
    while(current != null)
    {
        current = current.next
        length += 1;
    }
    console.log(length)
    
    if(length === 1 || length === 0)
    {
        return null
    }
    
    let index = 0;
    let runner = head;
    console.log
    console.log(index, length-(n),index === length-(n))
    if(length-(n) === 0)head = head.next
    else{
        while(index < (length-(n+1)))
        {
            runner = runner.next
            index ++;
        }

        runner.next = runner.next.next
    }
    return head;
};