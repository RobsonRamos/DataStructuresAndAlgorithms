class MyArray{
    constructor(){
      this.length = 0;
      this.data = {};
    }
  
    get(index){
      return this.data[index];
    }
  
    push(item){
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
  
    pop(){
      delete this.data[this.length - 1];
      this.length--;
      return this.length;
    }
  
    delete(index){
      const item = this.data[index];
      if(item){
        this.shifItems(index);
        this.pop(); 
      }
    }  
  
    shifItems(index){
      for(let i = index; i< this.length - 1; i++){
        this.data[i] = this.data[i + 1];
      }
    }
  }
  
  const newArray = new MyArray();
  newArray.push('a');
  newArray.push('b');
  newArray.pop();
  newArray.push('b');
  newArray.push('c');
  newArray.delete(4);
  console.log(newArray);