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


function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(root === null) return null;
    if(root.val === val) return root;
    const left = searchBST(root.left, val);
    const right = searchBST(root.right, val);

    if(left===null && right === null) return null;
    if(left !== null){return left}
    if(right !== null){return right}
      
};