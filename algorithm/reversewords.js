function reverseWords(string) {
     let newString = '';

    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i]; /*?*/
    }
    
 //   newString = newArray.join('');
    return newString; /*?*/

}

function reverseWordsOnly(string) {
    let newString = '';
    let newArray = [];
    let i = 0; 
    string.split(' ').forEach(function (element) {
        newArray.push(reverseWords(element));/*?*/
        i++;         
    }, this); 
    newString = newArray.join(' '); /*?*/
    
    return newString; 
}


let somestring = "this is a new sentence";
console.log(reverseWords(somestring)); /*?*/
console.log(reverseWordsOnly(somestring));