var fs = require ('fs');

//synchronous approach (e.g. you have to read a config file before anything can happen)
var greet = fs.readFileSync( __dirname + '/greet.txt', "utf8"); 
console.log(greet);

//asynchronous approach
var greet2 = fs.readFile( __dirname + '/greet.txt', 'utf8', (err, data)=>{
    console.log(data);

});

console.log("done");