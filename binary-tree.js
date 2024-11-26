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
        let node = new BinaryNode(data)
        // add a new Node to the tree, with data as the Node's data
        // if there is no root/items in tree, place 
        if (!this.root){ 
            return this.root = node
        }
        // if the data is already in the tree, do not insert it
        // to find the next empty place to put in the node, we use a recursive depth first search.
        // aka traversing
        let walker = this.root
        let direction = ""
        //RECURSIVE LOOP INCOMING
        while (true){
            // if the data is already there, get the hell out you're done.
            if (walker.data === data) return;
            // writing out the solution code in the long format.
            if (data < walker.data){
                // binary trees are sorted less than left
                direction = 'left'
            } else if (data > walker.data) {
                // greater than right
                direction = 'right'
            }
            //now that we have the direction of where the data should be in, replace the data if it is empty.
            if (!walker[direction]){
                return (walker[direction]) = node
            } else {
                // if not keep digging
                walker = walker[direction]
            }
        }
    }
    search(val){
        // search the Tree for a node with the given value
        // if the node exists, return true
        // if the node doesn't exist, return false


        // well if theres no tree then it's not gonna work, right?
        if (!this.root) return false;

        let walker = this.root
        while (walker){
            // if the node exists, return true
            if (walker.data === val) return true
            // we can do this because this is a BINARY TREE, as in the data would be searchable by doing greater than/less than over and over again (multi line for clarity)
            if (val < walker.data){
                // binary trees are sorted less than left
                walker = walker.left
            } else if (val > walker.data) {
                // greater than right
                walker = walker.right
            }
        }
        // loop exits if it keeps going left/right and hits a null value and so walker === null at that point
        return false
    }
    size(node){
        // calculate the number of nodes in the tree, starting from the given node.
        // THIS IS CALCULATING THE TOTAL NODES, NOT THE DEPTH
        let count = 0

        const counter = node =>{
            if (node) {
                count++
                counter(node.left) //recursively calling the counter on the left node updating the count
                counter(node.right) //same with right
            }
        }        

        counter(node)
        return count //somehow have to do this here instead of part of counter? (wish I could rewrite it)
    }
    getMax(){
        // return the maximum value stored in the tree

        // YOOOOOOOOOOOOOOOOO GOT IT WITHOUT LOOKING IT UP
        let walker = this.root
        let max
        while (walker){
            max = walker.data
            walker = walker.right
        }
        return max //since max is definied before reassigning walker, it will get the previous max before walker turns into null, breaking the loop and returning what max is.
    }
    height(node = this.root){
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node
        let counter = 0

        //similar to size, but we are using seperate counters for left/right then evaluating the largest in the counter.
        //defaulting the current height to be cause if there's any traversal it would start at 1, and when you reach null it wont add the second 1.
        const checker = (node, currentH = 1) => {
            if (node) {
                counter =  Math.max(counter, currentH)
                checker(node.left, currentH++)
                checker(node.right, currentH++)
            }
        }
        checker(node)
        return counter

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