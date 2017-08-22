'use strict';
var util = require('util');

class Person {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet () {
		console.log(`hello ${ this.firstname }`);
	}
}


class Policeman extends Person {
	//Person.call(this);
	constructor (firstname, lastname) {
		super(firstname, lastname); 
		this.badgenumber = '1234';
	}
	
}

// util.inherits(Policeman, Person);
var officer = new Policeman('John', 'Doe');
officer.greet();



