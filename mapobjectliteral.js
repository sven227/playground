const numbers = [1,2,3];

//this does not work because exec machine when it sees curly braces expects something to execute
const result = numbers.map(n => {value: n});

// but if you wrap it in parenthesis: 
const result2 = numbers.map(n => ({value: n}));

console.log (result, result2);

