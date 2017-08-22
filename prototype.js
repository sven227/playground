var util = require ('util');

var Person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = Object.create(Person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(Person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());


var sven = {firstname: "sven", lastname: "gatsos"};

//bind object sven to this in protoype Person and call greet
//borrowing a function - this is also a decorator applied or not?
console.log(Object.create(Person).greet.call(sven));














