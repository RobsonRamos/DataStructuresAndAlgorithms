class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value){
        let node = new Node(value);

        if(! this.first){
            this.first = node;
            this.last = node;
        }
        else{

            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }
    dequeue(){
        if(! this.first){
            return null;
        }

        let oldFirst = this.first;
        let node = this.first;
        
        if(! node.next){
            this.first = null;
            this.last = null;
            this.length--;
            return oldFirst;
        }
        else{
            this.first = node.next;
            this.length--;
        }
        return oldFirst;
    }
    //isEmpty;
  }
  
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log( myQueue.peek());
console.log( myQueue);
myQueue.dequeue();
console.log( myQueue.peek());
console.log( myQueue);
