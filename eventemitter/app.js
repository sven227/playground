//var Emitter = require('./emitter');

// use nodejs own eventemitter functionalit
const Emitter = require ('events');

const eventConfig = require ('./config.js').events;


var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);