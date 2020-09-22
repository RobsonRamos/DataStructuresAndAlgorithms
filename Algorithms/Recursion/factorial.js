
function factorial(number) {

    if(number === 2){
        return 2;
    }

    return factorial(number - 1) * number; 
  }