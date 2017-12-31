//avoid growing stack frames by using an accumulator argument when recursive funtions are called
"use strict";

//tail call optimization is supported by browser but not by node.js yet
const factorial = (n, accum = 1) => {
    // base case 
    if (n < 2) {
        return accum; 
    }
    return factorial( n-1, n*accum); /*?*/
}

factorial (10000); /*?.*/