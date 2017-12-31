"use strict";
//hand over tuple as array and freeze it
const createpoint = (x,y) => Object.freeze ([x,y]); /*?*/ 
console.log (createpoint);

const movePointBy = ([x,y], dx, dy) => Object.freeze([x+dx,y+dy]);


let point = createpoint(0,0); /*?*/
//point[0] = 100; /*?*/ throws error - point array is ready only now
//you can change values but not the properties and references to other objects
//so you cannot attach more elements to the array point 
point = movePointBy(point, 5, 5);
console.log(point);
point = movePointBy(point, -2,2);
console.log(point);

//point.push(3); // throws error because of Object.freeze
console.log(point); /*?*/