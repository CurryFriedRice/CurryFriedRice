/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(list1 === null && list2 === null) return list1
    else if(list1 === null) return list2
    else if(list2 === null) return list1
     
    let head = new ListNode();
    let retRunner = head;
    
    let runner1 = list1;
    let runner2 = list2;
    
    if(runner1.val <= runner2.val) {
        retRunner.val = runner1.val
        runner1 = runner1.next
    }
    else if(runner1.val >= runner2.val) {
        retRunner.val = runner2.val
        runner2 = runner2.next
    }
     
    while(runner1 != null && runner2 != null)
    {
        if(runner1.val <= runner2.val) 
        {
            retRunner.next = new ListNode(runner1.val)
            retRunner = retRunner.next
            runner1 = runner1.next
        }
        else if (runner1.val >= runner2.val)
        {
            retRunner.next = new ListNode(runner2.val)
            retRunner = retRunner.next
            runner2 = runner2.next
        }
        console.log(retRunner.val)
    }
    
    while(runner1 != null)
    {
        retRunner.next = new ListNode(runner1.val)
        runner1 =runner1.next
        retRunner = retRunner.next
        console.log("finishing1:",retRunner.val)

    }
   while(runner2 != null)
    {
        retRunner.next = new ListNode(runner2.val)
        runner2 =runner2.next
        retRunner = retRunner.next
        console.log("finishing2:",retRunner.val)

    }
    
    return head
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))