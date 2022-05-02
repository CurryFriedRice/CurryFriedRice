/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let list = new ListNode();
    let listRunner = list;
    while(true){
        let k = 0;
        let smallest = Infinity;
        for(let i = 0; i<lists.length; i++)
        {
            //console.log(lists[i].val)
            if(lists[i] === null) continue;
            else if(lists[i].val < smallest) 
            {
                smallest = lists[i].val
                k = i;
            }
        }
        
        if(smallest === Infinity) break;
        if(lists[k] !== null) lists[k] = lists[k].next
        listRunner.next = new ListNode(smallest);
        listRunner = listRunner.next   
    }
    return list.next
};