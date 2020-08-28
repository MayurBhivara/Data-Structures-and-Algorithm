class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null; 
        this.last = null;
        this.size =0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        if(this.size===1) this.last=null;
        var temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);