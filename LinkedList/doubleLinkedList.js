class Node{
    constructor(data){
        this.data = data;
        this.next = null;    
        this.previous = null;    
    }

    add(value){
        this.next = new Node(value);
    }
}

class DoubleLinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let newNode = new Node(value);
        let oldTail = this.tail;
        oldTail.next = newNode;
        newNode.previous = oldTail;
        this.tail = newNode; 
        this.length++;
        return this;
    }

    prepend(value){
        let newNode = new Node(value);
        let oldHead = this.head;
        newNode.next = oldHead
        oldHead.previous = newNode;
        this.head = newNode;
        this.length++;
    }

    getAt(index){
        let count = 0;

        let node = this.head;

        while(count !== index){
            if(! node || ! node.next){
                return null;
            } 
            node = node.next;
            count++;
        }
        return node;

    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.data)
          currentNode = currentNode.next
      }
      return array;
    }

    insert(index, value){

        if(index === 0){ 
            this.prepend(value);
            return this;
        }
        if(index == this.length){
            this.append(value);
        }
        else{

             let previous = this.getAt(index - 1);
             if(previous){
                let newNode = new Node(value);
                if(previous.next){
                    newNode.next = previous.next;
                    previous.next.previous = newNode;
                }
                newNode.previous = previous;
                previous.next = newNode;
                this.length++;
             }
             return null;
        }
    }

    remove(index){        
        if(index === 0){
            if(this.head){
                if(this.head.next){
                    this.head = this.head.next;
                    this.head.previous = null;
                }
                else{
                    this.head = null;
                }
                this.length--;
            }
            return this;
        }
        else{
            let previous = this.getAt(index -1);    
            
            if(previous && previous.next){
              if(previous.next.next){
                
                let next = previous.next.next;
                previous.next = next;
                next.previous = previous;                
              }
              else{
                previous.next = null;
              }
              this.length--;
              return this;
            }
            return null;
        }      
    }
}


let l = new DoubleLinkedList(10);
l.append(5);
l.append(16);
l.append(1);
l.prepend(100);
l.insert(2, -999);
l.remove(3);
console.log(l.printList());