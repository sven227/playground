const _ = require('lodash');


// just need a function which returns an array of objects with key "price" 
// otherwise the lodash function _.flowRight doesn't work as a funtion is expected
function object () {
    return function () {
        return ([
         {price: 5},
         {price: 10},
         {price: 3}
        ]);
     
     }
}


const map = fn => array =>array.map(fn);
const multiply = x => y => x * y;
const pluck = key => object => object[key]; /*?*/

const discount = multiply(0.98); // pre-fill with 0.98 currying
const tax = multiply(1.0925);

//function composed/piped - output of the first is input for second function and so forth...
let result = _.flowRight(map(tax), map(discount), map(pluck('price')), object() ); /*?*/
result(); /*?*/

