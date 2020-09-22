class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value){
        let node = new Node(value);
        if(this.top){
            node.next = this.top;
            this.top = node; 
        }
        else{
            this.top = node;
            this.bottom = node;
        }
        this.length++;
    }
    pop(){
        if(this.top){
            let oldTop = this.top;
            if(oldTop.next){
                this.top = oldTop.next;
            }
            else{
                this.top = null;
                this.bottom = null;
            }
            this.length--;
        }
        return null;
    }
    isEmpty(){
        return this.top == null || this.top == undefined;
    }
  }
  
  const myStack = new Stack();
  
  
  
  
  //Discord
  //Udemy
  //google
  