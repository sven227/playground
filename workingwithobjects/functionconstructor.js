
var util = require ('util');
var extend = require('node.extend');
var propertyretriever = require('./propertyretriever');
//worst thing about function constructors - they exist only in global execution context!
function Person (firstname, lastname) {

	this.firstname = firstname,
	this.lastname = lastname,	
	this.greet = function () {
		console.log('greet works');
		return 'Hi ' + this.firstname;
	}
}


//console.log();
console.log("___________________________________________");

//new builds an object from a function constructor Person (capital P is important)
//automatically jane points to the prototype of Person
// prototype-chain: jane-prototypeofperson
var jane = new (Person);
jane.firstname = "Jane";
jane.lastname = "Doe"
console.log(jane.greet());


// Object.create takes an object -> created by "new" keyword
// and then creates the john object pointing to the prototype of the object new Person 
var john = Object.create(new (Person));
john.firstname = "Johnnie";
john.lastname = "Doe"
console.log(john.greet());

// as jane and john point to prototype 
Person.prototype.getFullName = function() {
	return this.lastname + ', ' + this.firstname; 
}

console.log(john.getFullName());
console.log(jane.getFullName());

function Policeman(badgenumber) {
	//important !! assign Policeman objects to properties of Person
	Person.call(this);
	this.badgenumber = badgenumber;
}

console.log(".....................................");

var officer1 = new Policeman();
officer1.firstname = "Michael";
officer1.lastname = "Douglas";
officer1.badgenumber = "12345678";
console.log(officer1.greet());
//console.log(officer1.getFullname()) // does not work as officer1 does not point to prototype of Person
//officer1 points to prototype of Policeman though:
Policeman.prototype.getBadgenumber = function() {
	return (this.badgenumber);
}
console.log("badgenumber: "+ officer1.getBadgenumber());

//how can officer1 inherit getfullname from prototype of Person function constructor?
util.inherits(Policeman,Person);
console.log(officer1.getFullName());
console.log(".....................................");

var officer2 = {
	firstname: 'Patrick',
	lastname: 'Ditchen'
}

// again the new keyword creates an empty object with reference to the prototype of Person and Policeman
// then assign the empty object to officer2
	// extend (officer2, new Person()); 
	// extend (officer2, new Policeman()); 
// or simply 
extend (officer2, new Person(), new Policeman());
console.log(officer2.greet()); // function-method from Person 
console.log(officer2.getFullName()); //prototype of Person
officer2.badgenumber = "232323";
console.log("badgenumber: "+ officer2.getBadgenumber());

console.log(".....................................");
console.log(officer2);

console.log(".....................................");

for (var prop in officer2) {
	if (officer2.hasOwnProperty(prop)){
		console.log(prop + ": "+ officer2[prop]);
	}
}

console.log(".....................................");
console.log(propertyretriever.getOwnEnumerables(officer1));
console.log("__.................................__");
console.log(propertyretriever.getOwnNonenumerables(officer1));
console.log("__.................................__");
console.log(propertyretriever.getPrototypeEnumerables(officer1));
console.log("__.................................__");
