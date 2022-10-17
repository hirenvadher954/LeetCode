/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


let output: number[][] = [];

function levelOrder(root: TreeNode | null) {
    output = [];
    preOrderTraversal(root, 0);
    return output;
}

function preOrderTraversal(node: TreeNode | null, level: number) {
    if (!node) return;
    if (output[level] === undefined) output.push([]);
    output[level].push(node.val);
    preOrderTraversal(node.left, level + 1);
    preOrderTraversal(node.right, level + 1);
}