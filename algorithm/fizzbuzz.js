

var argv = require('yargs')
    .usage('execute node ...js with an integer and a fizzbuzz array is the output')
    .demandCommand(1, "error: when exec. in bash:  node ...fizzbuzz.js <num> // add a number to the end as argument argv ")
    .argv;

const iterate = argv._[0];

//var iterate = 15; 
const somearray = [];
console.log("________________");

console.log(fizzbuzz(iterate));

function fizzbuzz(iterate) {

    var somearray = [];
    
    for (let i = 0; i < iterate; i++) {

        if (i % 15 === 0) {
            somearray[i] = "fizzbuzz";
        } else if (i % 3 === 0) {
            somearray[i] = "fizz";
        } else if (i % 5 === 0) {
            somearray[i] = "buzz";
        } else {
            somearray[i] = i;
        }

    }
    return somearray;

}

