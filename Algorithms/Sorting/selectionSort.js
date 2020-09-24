function selectionSort(arr) {
    
    for (let i = 0; i < arr.length; i++) { 
        
        let min = i;

        for (let j = i; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){

          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
        }
    }
    return arr;
}


console.log(selectionSort([100, 2, 4, 6, 1, 6, 5, 999, -1, 0]));