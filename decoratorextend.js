
var extend = require('node.extend');
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greeter = function () {
    
    
    fullName = this.getFullname;
    console.log('hello' + fullName);
}

Person.prototype.getFullname = function () {
    return this.firstname + ' ' + this.lastname;

}
var Me = new Person('Sven', 'Gatsos');
console.log(Me.getFullname());

Jane = { firstname: 'Jane',
         lastname: 'Doe',
         birthday: '19731216'         
       };

extend (Me, Jane);  //extend functionality in Me by functionality from Jane
//Me.birthday = '19700227'
console.log(Me.birthday); // get property and value from Jane
console.log(Jane.birthday);
//extend (Jane,Me);
//console.log(Jane.getFullname());
console.log(Me.getFullname());
