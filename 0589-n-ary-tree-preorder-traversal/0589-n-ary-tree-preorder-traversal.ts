/**
 * Definition for node.
     * class Node {
     *     val: number
     *     children: Node[]
     *     constructor(val?: number) {
     *         this.val = (val===undefined ? 0 : val)
     *         this.children = []
     *     }
     * }
 */

let traverseArray = [];

function preorder(root: Node | null): number[] {
    traverseArray = [];
    traverse(root);
    return traverseArray;
}

function traverse(root: Node | null) {
    if (!root) return;
    traverseArray.push(root.val);
    if (root.children)
        for (let i = 0; i < root.children.length; i++)
            traverse(root.children[i]);

}