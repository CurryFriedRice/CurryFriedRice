/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    // console.log(root, targetSum)
    
    if(root === null)return false;
    if(targetSum === root.val && root.left === null && root.right === null) return true;
    
    if(hasPathSum(root.left, targetSum - root.val)) return true
    if(hasPathSum(root.right, targetSum - root.val)) return true
    
    return false
};

function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }