function binarySearch(numArray, key) {
    //what's the middleindex of numArray and what's the value on middleindex?
    let middleIdx = Math.floor(numArray.length / 2);
    let middleElem = numArray[middleIdx];
    //let numArraytmp = numArray; // optimize with immutable.js

    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        console.log(numArray);
        return binarySearch(numArray.splice(middleIdx, numArray.length), key); /*?*/
    }
    else if (middleElem > key && numArray.length > 1) {
        console.log(numArray);
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false; 

}


let someArray = [1, 2, 3, 20, 32, 34, 56, 55, 67, 71, 89];
someArray.sort(function (a, b) { return a - b });
console.log(binarySearch(someArray, 56)); /*?*/ 
