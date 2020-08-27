class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var popedNode = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;
        }
        this.length--;
        return popedNode;
    }
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0 || index>=this.length) return false;
        var count;
        var current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count!=index){
                current = current.next;
                count++;
            }
        }else{
            count = this.length-1;
            current = this.tail;
            while(count!=index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index<0 || index>this.length) return false;
        if(index === 0 ) return this.unshift(val);
        if(index===this.length) return this.push(val);
        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next= afterNode;
        afterNode.prev = newNode;
        this.length++;
        return this;
    }
    remove(index){
        if(index<0 || index>=this.length) return false;
        if(index === 0) return this.shift();
        if(index===this.length-1) return this.pop();
        var removeNode = this.get(index);
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
        }
}
var list = new DLL();
list.push(1);
list.push(2);
list.push(3);
console.log(list.remove(1));
