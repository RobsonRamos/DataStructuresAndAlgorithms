class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }

    insert(value, node = null){

        let newNode = new Node(value);
        
        if(! this.root){
            this.root = newNode;
            return;
        }
        else if(node == null){
          node = this.root;
        }  
        if(! node.left && value < node.value){
            node.left = newNode;
            return;
        }

        else if(! node.right && value > node.value){
            node.right = newNode;
            return;
        }

        else if(value < node.value){
            this.insert(value, node.left);
            return;
        }
        else{
            this.insert(value, node.right);
            return;
        } 
    }
    lookup(value, node = this.root){
      if(! this.root || node == null){
        return null;
      } 

      if(value == node.value){
        return node;
      }
      else if(value < node.value){
        return this.lookup(value, node.left);        
      }
      else{
        return this.lookup(value, node.right);
      }
    }

    getParent(value, node = this.root){
        if(! this.root || node == null){
          return null;
        } 
  
        if(node.left && value == node.left.value){
          return node;
        }
        else if(node.right && value == node.right.value){
            return node;
        }

        else if(value < node.value){
          return this.lookup(value, node.left);        
        }
        else{
          return this.lookup(value, node.right);
        }
      }
  }

const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  //console.log(tree);
  console.log(tree.lookup(10));

  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  