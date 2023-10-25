
// Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}
 


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 === null){
        return l2;
    }
    else if(l2 === null){
        return l1;
    }
    
    let carryValue = 0;
    let runner1: ListNode | null = l1
    let runner2: ListNode | null = l2

    while (runner1 != null && runner2 != null){
        runner1.val += runner2.val + carryValue
        if(runner1.next == null || runner2.next == null) break;
        

        if(runner1.val >= 10){
            carryValue = Math.floor(runner1.val/10)
            runner1.val = runner1.val % 10
        }else{
            carryValue = 0
        }
        
        runner1 = runner1.next
        runner2 = runner2.next
    }
    if(runner1.next == null) runner1.next = runner2.next
    
    while(runner1.next != null){
        console.log(runner1.val)
        if(runner1.val >= 10){
            carryValue = Math.floor(runner1.val/10)
            runner1.val = runner1.val % 10
            if(runner1.next != null){
                runner1.next.val += carryValue
                runner1 = runner1.next
            }
        }else{
            carryValue = 0;
            break;
        }
    }
    if(runner1.val >= 10){
        carryValue = Math.floor(runner1.val/10)
        runner1.val = runner1.val % 10
        runner1.next = new ListNode(carryValue, null)
    }
    return l1;
};