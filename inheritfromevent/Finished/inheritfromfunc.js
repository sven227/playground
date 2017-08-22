var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this); // bind this=policeman to function constructor "Person" in order to inherit Person properties
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person); //inherit the prototype method gree from person to policemen
var officer = new Policeman();
officer.greet();