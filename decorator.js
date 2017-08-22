// see robdodson page
// JavaScript Design Patterns: Decorator

// nice example but it is easier to push functions directly into decoratorList

"use strict";

function Validator () {
	this.errors = [];
	this.decoratorsList = [];
}

Validator.prototype.decorate = function(name, args) {
	this.decoratorsList.push({ name: name, args: args });
};

Validator.decorators = {};

Validator.decorators.hasName = {
	validate: function(form, args) {
		// Code to verify presence of name...
        if (form.name.length >= args.length) {
            console.log("name validated OK");
        } else {this.errors.push('no name! or name too short min5');
    }
		
	}
};

Validator.decorators.hasAge = {
	validate: function(form, args) {
		// Code to verify presence of age...
        if (form.age > args.minimum) {
            console.log ("age validated OK");
            return;

        } else {this.errors.push('no age!');
    }

		
	}
};

Validator.decorators.hasZipCode = {
	validate: function(form, args) {
		// Code to verify presence of zip code...

		this.errors.push('no zip!');
	}
};

Validator.prototype.validate = function(form) {
	var i,
		max,
		temp,
		name,
		args;

	this.form = form;

	max = this.decoratorsList.length;
	for (i = 0; i < max; i++) {
		temp = this.decoratorsList[i];
		name = temp.name;
		args = temp.args;
		Validator.decorators[name].validate.call(this, form, args);
	}
};

// Try it out!
var validator = new Validator();
validator.decorate('hasName', { length: 5 });
validator.decorate('hasAge', { minimum: 21 });
validator.decorate('hasZipCode');
validator.validate({ name: "sven gatsos", age: "47"}); // some form data. in this case just an anonymous object
console.log(validator.errors);



