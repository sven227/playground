function isPalindrome (string) {
    string = string.toLowerCase(); 
    var charArray = string.split('');/*?*/
    var validChars = 'abcdefghijklmnopqrstvwxyzñ';
    var validCharsArray = validChars.split(''); 

    var newArray = []; 
    charArray.forEach(function(char) {
        
        if (validCharsArray.indexOf(char) > -1) {
            newArray.push(char); /*?*/
        }
       
    }, this);
    if (newArray.join('') === newArray.reverse().join('')) {
        return true; 
    } else { return false; }

}

console.log(isPalindrome("Madam I'm Adam"));  
//console.log(isPalindrome("Race Car")); 