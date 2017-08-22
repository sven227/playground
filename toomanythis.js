const adder = {
    sum: 0,
    add(numbers) {
        numbers.forEach(n => {
            this.sum += n;
        });
        return this.sum;
    }
};

// this does not work - add property contains an arrow function which contains an arrow function 
// "this" variable will point to context of module (outer context)
/*const adder = {
    sum: 0,
    add: (numbers) => {
        numbers.forEach(n => {
            this.sum += n;
        });
        return this.sum;
    }
};*/

var result = adder.add([1, 2, 3]);
console.log(result);
    

