const _ = require('lodash');

var add = (x) => y => x+y; 


//pre-fill arguments using closures
let add3 = add(3);/*?*/
add3(4); /*?*/

let  result = add(3); /*?*/
result(4);/*?*/




