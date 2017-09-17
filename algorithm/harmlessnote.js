function harmlessRansomNote(noteText, magazineText) {
    //split string into substrings using as delimiter " " and pass substrings into array of substrings
    var noteArr = noteText.split(" ");
    var magazineArr = magazineText.split(" ");
    var magazineObj = {};


// store key, value pairs in magazineObj and use the word itself as key
// for this you have to use the object literal notation
// loop throught the magazineArr with .forEach and a callback function.
    magazineArr.forEach(function (word) {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }
        magazineObj[word]++;   // count up
    }, this);

    console.log(magazineObj);
    noteIsPossible = true;
    noteArr.forEach(function (word) {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) { noteIsPossible = false; }; 
        } else {
            noteIsPossible = false;
        }

    }, this);
    console.log(magazineObj);
    return noteIsPossible;
};
console.log("\n");
var flag = harmlessRansomNote('this is a secret note', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
if (flag === true) { console.log("_______\n\n true \n_______\n") } else { console.log("false") }; 