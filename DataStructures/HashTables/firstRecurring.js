function firstRecurring(arr){

    let obj = {};
  
    for(let i = 0; i < arr.length; i ++){
      var item = arr[i];
      if(obj[item]){
        return item;
      }
      obj[item] = item;
    }
    return null;
  }

  
  let arr = [2, 1, 5, 1, 2, 3, 5, 1, 2, 4]
  let result = firstRecurring(arr);
  console.log(result);