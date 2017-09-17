

function ceasarCipher (str, num) {
    num  = num % 26;

    let lowerCaseString = str.toLowerCase(); /*?*/
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split(''); /*?*/
    let newString = ''; 

    for (var i = 0; i < lowerCaseString.length; i++) {
        var element = lowerCaseString[i];
        if (element === ' ' ) { 
            newString += element;
            continue;
        }
        
        let currentIndex = alphabet.indexOf(element); /*?*/
        let newIndex = currentIndex + num; /*?*/
        if (newIndex > 25) {
            newIndex = newIndex - 26; 
        } else if (newIndex < 0) {
            newIndex = 26 + newIndex;
        } else {
            //newString += alphabet[newIndex];
        }
        newString += alphabet[newIndex]; /*?*/
       
        
    }
    return newString;    
    

}
//desplazar el mensaje por unas posiciones codif.ascii segun el num
console.log(ceasarCipher ( "hello Sven how are you?", 1));

