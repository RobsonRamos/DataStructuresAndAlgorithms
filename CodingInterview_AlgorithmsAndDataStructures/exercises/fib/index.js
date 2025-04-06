// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fib(n) {

    if(n < 2){
        return n;
    }

    if(results[n] != undefined){
        return results[n];
    }

    var result =  fib(n - 2) + fib(n - 1);
    results[n] = result;
    return result;
}

let results = [];
module.exports = fib;
