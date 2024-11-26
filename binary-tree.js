class BinaryNode {
    constructor(data){
       this.data = data
       this.left = null
       this.right = null
    // a node has data, left, and right pointers
    // left and right are intialized as null
    }
}
class BinaryTree {
    constructor(){
        this.root = null
        // when a new Tree is made, it has a root property
    }
    insert(data){
       //how to create a new binary node (class is on top)
        let node = new BinaryNode(Data)
        // add a new Node to the tree, with data as the Node's data
        
        // if there is no root/items in tree, place 
        if (!this.root){ 
            this.root = node
        }
        // if the data is already in the tree, do not insert it
        // to find the next empty place to put in the node, we use a recursive depth first search.



    }
    search(val){
        // search the Tree for a node with the given value
        // if the node exists, return true
        // if the node doesn't exist, return false
    }
    size(node){
        // calculate the number of nodes in the tree, starting from the given node
    }
    getMax(){
        // return the maximum value stored in the tree
    }
    height(node){
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node
    }
    isBalanced(node){
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
    }
}

module.exports = {
    BinaryNode,
    BinaryTree
}