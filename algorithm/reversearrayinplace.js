function reverseArrayInPlace (arr) {
    
    for (let i = 0; i < (arr.length / 2); i++) {
        let tempArrElement = arr[i];
        arr[i] = arr[arr.length-1 -i]; 
        arr[arr.length-1 -i] = tempArrElement; /*?*/
        
    }
    return arr; 

};


console.log(reverseArrayInPlace( [1,2,3,4,5] ) ) ;  /*?*/