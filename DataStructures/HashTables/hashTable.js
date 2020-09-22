class HashTable{

    constructor(size){
      this.data = new Array(size);
    }
  
    set(key, value){
      let hash = this._hash(key)
      if(! this.data[hash]){
        this.data[hash] = [];
      }
      this.data[hash].push([ key, value]);
      return this.data;
    }
  
    get(key){
      let hash = this._hash(key)
      if(this.data[hash]){
        return this
                .data[hash]
                .filter(item => item[0] === key)
                .map(item => item[1]);
      }
      return null;
    }
  
  
      keys(){
          const keysArray = [];
          for (let index = 0; index < this.data.length; index++) {
              if(this.data[index]){
                  keysArray.push(this.data[index][0][0]);
              }
          }
          return keysArray;
      }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000);
  console.log(myHashTable.get('grapes'));
  myHashTable.set('apples', 9);
  console.log(myHashTable.get('apples'));
  
  console.log(myHashTable.keys());