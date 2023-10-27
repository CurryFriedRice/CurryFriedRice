
// Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if(root === null) return 0;
    if(root.val < low || high < root.val) return 0;
    if(root.val == low || root.val === high) return root.val;
    if(root.left === null) return root.val + rangeSumBST(root.right,low,high)
    if(root.right === null) return root.val + rangeSumBST(root.left,low,high)
    if(root.left === null && root.right===null) return root.val
    return root.val + rangeSumBST(root.left,low,high) + rangeSumBST(root.right,low,high)
};