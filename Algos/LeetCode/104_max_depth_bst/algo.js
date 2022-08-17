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
 * @return {number}
 */



 var maxDepth = function(root) {
    // console.log(deepest)
    // console.log(root === null)
    if(root === null)
        return 0
    // if(current > deepest)
        // deepest = current;


    if(root.left == null && root.right == null)
        return 1
    let deepest = 0
    deepest += Math.max(maxDepth(root.left), maxDepth(root.right))

    // console.log(deepest, root)
    
    return deepest+1
};

//  var maxDepth = function(root,current = 1 , deepest = 1) {
//     // console.log(deepest)
//     // console.log(root === null)
//     if(root === null)
//     {
//         return 0
//     }
//     if(current > deepest)
//     { 
//         deepest = current;
//     }
//     if(root.left == null && root.right == null)
//         return deepest
    
//     if(root.left != null)
//     {
//         deepest = maxDepth(root.left, current+1, deepest)
//     }
    
//     if(root.right != null)
//     {
//         deepest = maxDepth(root.right, current+1, deepest)
//     }    
//     return deepest
// };


// var maxDepth = function(root) {
    
//     let dfs = (root) =>
//     {
//         if(!root.left && !root.right)   return 1
//         var left = root.left !== null ? dfs(root.left) : 0
//         var right = root.right !== null ? dfs(root.right) : 0
        
//         return Math.max(left, right) + 1
//     }
    
//     if(root === null) return 0;

//     return dfs(root)
// };
