var EventEmitter = require('events');
var util = require('util');

//we want a Greetr constructor function to work as an Eventemitter
//constructor function Greetr 
// set this variable of Greetr constructur equal to EventEmitter function constructor
// 
// create a function with property .greeting 
// 
function Greetr() {
	EventEmitter.call(this);
	this.greeting = 'Hello world!';
}

// Greetr inherits from EventEmitter the prototype functions on and emit
util.inherits(Greetr, EventEmitter);

// define a new method as prototype outside the Greetr constructor function - when called  emit event "greet"
Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

// greeter is an object created by Greetr constructor function
// register event "greet" with callback function
// when greet is fired then callback function someone greeted is triggered too
greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');