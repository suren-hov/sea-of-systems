// program to implement queue data structure
class Queue {
    constructor() {
        this.items = [];
    }
    
    // add element to the queue
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the queue
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the queue is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the queue
    size(){
        return this.items.length;
    }
 
    // empty the queue
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(4);
queue.add(8);
console.log(`Queue items -> ${queue.items}`);

queue.remove();
console.log(`Queue items after remove -> ${queue.items}`);
console.log(`The peek item in the queue ${queue.peek()}`);
console.log(`Queue is empty? -> ${queue.isEmpty()}`);
console.log(`Size of queue -> ${queue.size()}`);

queue.clear();
console.log(`Queue items after clearing -> ${queue.items}`);