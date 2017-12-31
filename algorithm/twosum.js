//hand over an array of integers and a "sum"
//returns an array of arrays with pairs of integers that sum up to "sum"

function twoSum(numArray, sum) {  /*?.*/
    
    let result = []; 
//    let numObj = {}; 
    let rest = 0; 
    let tmp = [];

    numArray.sort(function (a,b) { return b-a}); /*?*/ //descending order
    // numArray.forEach(function(num) {
    //     if (!numObj[num]) { numObj[num]=0; }
    //     numObj[num]++; 
         

    // }, this);
    // numObj /*?*/
   
    numArray.forEach(function (num) {
        rest = sum - num; /*?*/
        if (numArray.indexOf(rest) !== -1) {    
            result.push([num,rest]);
            tmp=[];
            
        }
    }, this);


    return result; 
}

//
for (var i=0; i<=100; i++) {
    console.log(twoSum( [1, 6, 4, 3, 3], 7));  /*?.*/ 
}
 /*?.*/ 
 


