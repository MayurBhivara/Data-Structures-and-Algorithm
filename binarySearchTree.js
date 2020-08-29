class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(current.val === val) return undefined;
            if(current.val > val){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(val){
        if(!this.root){
            return undefined;
        }
        var current = this.root;
        while(current){
            if(current.val === val) return true;
            if(current.val> val){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }

    BFS(){
        var node = this.root,
            data = [],
            que = [];
        que.push(node);
        while(que.length){
            node = que.shift();
            data.push(node.val);
            if(node.right) que.push(node.right);
            if(node.left) que.push(node.left);
        }
        return data;
    }
}
var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
tree.insert(1);
console.log(tree.BFS());